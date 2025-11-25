import * as THREE from 'three';
import Base from '../Base';
import CubeSphereGeometry from './shape-morphisms/CubeSphereGeometry';

export default class CubeSphereMesh {

    constructor() {
        this.base = new Base();
        this.scene = this.base.scene;
        this.debug = this.base.debug;
        this.time = this.base.time;

        this.t = 0;
        this.dir = 1;

        this.loadGeometry();
        this.loadMesh();
    }

    loadGeometry() {
        const radius = 1;
        const segments = 5;

        // morph function: t goes from 0 to 1
        // v(t) controls easing curve
        function morphFunc(t) {
            //return (1 - Math.cos(t*Math.PI))/2;
            //return 1 / (1 + Math.exp(- 10 * (t - 0.5)));
            const damp = 10;
            const freq = 17;
            const anticipation = 0.15;
            const slow = 2.5;
            const ts = Math.pow(t, slow);
            const spring = 1 + Math.exp(- damp * ts) * Math.sin((ts - anticipation) * freq);
            const f0 = 1 + Math.exp(0) * Math.sin(- anticipation * freq);
            const f1 = 1 + Math.exp(-damp) * Math.sin((1 - anticipation) * freq);

            return (spring - f0) / (f1 - f0);
        }

        this.geom = new CubeSphereGeometry(radius, segments, morphFunc);

        this.geom.computeVertexNormals();
    }

    loadMesh() {
        const material = new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true });
        /*const materials = [
            new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: false }),
            new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: false }),
            new THREE.MeshStandardMaterial({ color: 0x00ff00, wireframe: false }),
            new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: false }),
            new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: false }),
            new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: false })
        ];*/
        this.mesh = new THREE.Mesh(this.geom, material);
        this.mesh.position.set(0, 0, 0);
        this.mesh.receiveShadow = true;
        this.mesh.scale.set(2, 2, 2);
        this.scene.add(this.mesh);
    }


    update() {
        // oscillate t from 0 → 1 → 0
        this.t += this.dir * this.time.delta * 0.5;
        if (this.t >= 1) { this.t = 1; this.dir = -1; }
        if (this.t <= 0) { this.t = 0; this.dir = 1; }

        this.geom.morph(this.t);  // update vertex positions
        this.geom.computeVertexNormals();
        this.geom.attributes.normal.needsUpdate = true;
    }
}