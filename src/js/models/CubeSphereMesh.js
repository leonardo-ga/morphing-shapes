import * as THREE from 'three';
import Base from '../Base';
import MorphismGeometry, { presets } from './shape-morphisms/MorphismGeometry';

export default class CubeSphereMesh {
    constructor() {
        this.base = new Base();
        this.t = 0; this.dir = 1; this.playing = true;
        this.geom = new MorphismGeometry();
        this.mesh = new THREE.Mesh(this.geom, new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true }));
        this.mesh.scale.setScalar(2);
        this.base.scene.add(this.mesh);
        this.ui = Object.fromEntries([...document.querySelectorAll('[id]')].map(el => [el.id, el]));
        for (const key of ['from', 'to']) {
            presets.forEach((name, i) => this.ui[key].add(new Option(name, i)));
            this.ui[key].addEventListener('change', () => { this.t = 0; this.dir = 1; this.render(); });
        }
        this.ui.to.value = '1';
        this.ui.play.onclick = () => { this.playing = !this.playing; if (this.playing && this.t === 1) { this.t = 0; this.dir = 1; } this.render(); };
        this.ui.progress.oninput = () => { this.playing = false; this.t = Number(this.ui.progress.value); this.dir = 1; this.render(); };
        this.ui.motion.oninput = () => this.render();
        this.ui.speed.oninput = () => this.render();
        this.ui.wireframe.onchange = () => { this.mesh.material.wireframe = this.ui.wireframe.checked; };
        this.ui.color.oninput = () => this.mesh.material.color.set(this.ui.color.value);
        this.ui.reset.onclick = () => {
            this.ui.from.value = '0'; this.ui.to.value = '1'; this.ui.motion.value = '2'; this.ui.speed.value = '1';
            this.ui.loop.checked = true; this.ui.wireframe.checked = true; this.ui.color.value = '#ff0000';
            this.mesh.material.color.set('#ff0000'); this.mesh.material.wireframe = true;
            this.t = 0; this.dir = 1; this.playing = true; this.render();
        };
        this.render();
    }
    render() {
        const motion = Number(this.ui.motion.value);
        this.geom.morph(this.t, Number(this.ui.from.value), Number(this.ui.to.value), motion);
        this.ui.speedAmount.value = `${Number(this.ui.speed.value).toFixed(2).replace(/\.?0+$/, '')}×`;
        const motionText = motion === 0 ? 'Linear' : motion === 1 ? 'Smooth' : motion === 2 ? 'Spring'
            : motion < 1 ? `${Math.round(motion * 100)}% smooth` : `${Math.round((motion - 1) * 100)}% spring`;
        this.ui.motionAmount.value = motionText;
        this.ui.motion.setAttribute('aria-valuetext', motionText);
        this.ui.progress.value = this.t;
        this.ui.amount.value = `${Math.round(this.t * 100)}%`;
        this.ui.play.textContent = this.playing ? 'Pause' : 'Play';
    }
    update() {
        if (!this.playing) return;
        this.t += this.dir * this.base.time.delta * .5 * Number(this.ui.speed.value);
        if (this.t >= 1) { this.t = 1; if (this.ui.loop.checked) this.dir = -1; else this.playing = false; }
        if (this.t <= 0) { this.t = 0; this.dir = 1; if (!this.ui.loop.checked) this.playing = false; }
        this.render();
    }
}
