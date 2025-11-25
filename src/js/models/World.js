import Base from "../Base";
import CubeSphereMesh from "./CubeSphereMesh";
import Environment from "./Environment";

export default class World {

    constructor() {
        this.base = new Base();
        this.scene = this.base.scene;

        // Setup
        this.environment = new Environment();

        this.cubeSphereMesh = new CubeSphereMesh();
    }

    update() {
        this.cubeSphereMesh.update();
    }

}