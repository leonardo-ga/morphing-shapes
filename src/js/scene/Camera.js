import * as THREE from 'three';
import Base from '../Base';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Camera {

  constructor() {
    this.base = new Base();
    this.scene = this.base.scene;
    this.world = this.base.world;
    this.sizes = this.base.sizes;
    this.inputs = this.base.inputs;

    this.loadCamera();
    // For Orbit Controls
    this.setOrbitControls();
  }

  loadCamera() {
    this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100);
    this.instance.position.copy(new THREE.Vector3(0, 0, 5));
    this.instance.lookAt(new THREE.Vector3(0, 0, 0));
    this.scene.add(this.instance);
  }

  setOrbitControls() {// Orbit controls setup
    this.controls = new OrbitControls(this.instance, this.base.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.1;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 30;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    // OrbitControls update
    this.controls.update();
  }

}