import CubeSphereGeometry from './CubeSphereGeometry';

export const presets = ['Cube', 'Sphere', 'Ellipsoid', 'House', 'Bottle', 'Pencil', 'Bloom', 'Spiral', 'Starburst', 'Lantern'];
export default class MorphismGeometry extends CubeSphereGeometry {
    constructor() {
        // An even grid puts vertices on the roof ridge instead of rounding it off.
        super(1, 16, t => t);
        this.shapes = presets.map((name, shape) => {
            const vertices = new Float32Array(this.cube.length);
            for (let i = 0; i < vertices.length; i += 3) {
                const [x, y, z] = this.cube.subarray(i, i + 3);
                const length = Math.hypot(x, y, z);
                let point = [x, y, z];
                if (shape === 1) point = [x / length, y / length, z / length];
                if (shape === 2) point = [x / length * .7, y / length * 1.3, z / length * .7];
                if (shape === 3) {
                    // A continuous deformation of the cube: straight walls,
                    // rectangular floor and two roof planes meeting at a ridge.
                    // Shared face-edge vertices receive identical positions.
                    const halfSide = this.halfSquareSide;
                    const roofHeight = .3 + .6 * (1 - Math.abs(x) / halfSide);
                    const height = (y / halfSide + 1) / 2;
                    point = [x / halfSide * .8, -.65 + height * (roofHeight + .65), z / halfSide * .65];
                }
                if (shape === 4) {
                    const u = x / this.halfSquareSide;
                    const v = z / this.halfSquareSide;
                    const height = (y / this.halfSquareSide + 1) / 2;
                    // Shoulders start and end on grid rows. The square-to-disk
                    // map keeps both caps filled and the side wall circular.
                    const shoulder = Math.max(0, Math.min(1, (height - .625) / .25));
                    const radius = .48 - .29 * shoulder;
                    point = [radius * u * Math.sqrt(1 - v * v / 2), height * 1.9 - .95, radius * v * Math.sqrt(1 - u * u / 2)];
                }
                if (shape === 5) {
                    const u = x / this.halfSquareSide;
                    const v = z / this.halfSquareSide;
                    const height = (y / this.halfSquareSide + 1) / 2;
                    const ring = Math.max(Math.abs(u), Math.abs(v));
                    const angle = Math.atan2(v, u);
                    // The top face becomes the sharpened tip; its center is
                    // the apex. No separate parts or disappearing vertices.
                    const top = 1.2 - .55 * ring;
                    point = [.26 * ring * Math.cos(angle), -1.05 + height * (top + 1.05), .26 * ring * Math.sin(angle)];
                }
                if (shape >= 6) {
                    const nx = x / length;
                    const ny = y / length;
                    const nz = z / length;
                    const angle = Math.atan2(nz, nx);
                    const belt = Math.max(0, 1 - ny * ny);
                    if (shape === 6) {
                        // Five broad petals, with a low center and rounded tips.
                        const radius = .78 + .32 * Math.cos(5 * angle) * belt ** 2;
                        point = [nx * radius, ny * .43 + .15 * belt, nz * radius];
                    }
                    if (shape === 7) {
                        // Three sweeping ribs twist around an elongated core.
                        // The modulation vanishes at both poles to avoid seams.
                        const radius = .72 + .24 * Math.cos(3 * angle + 5 * ny) * belt ** 1.5;
                        point = [nx * radius, ny * 1.18, nz * radius];
                    }
                    if (shape === 8) {
                        // Six rounded axial points with deep, continuous valleys.
                        const axes = nx ** 8 + ny ** 8 + nz ** 8;
                        const radius = .57 + .62 * axes;
                        point = [nx * radius, ny * radius, nz * radius];
                    }
                    if (shape === 9) {
                        // A fluted lantern: vertical ribs around a full middle.
                        const radius = .83 + .13 * Math.cos(10 * angle) * belt ** 2;
                        point = [nx * radius, ny * 1.12, nz * radius];
                    }
                }
                vertices.set(point, i);
            }
            return vertices;
        });
        this.morph = (t, from = 0, to = 1, motion = 2) => {
            const spring = v => 1 + Math.exp(-10 * v) * Math.sin((v - .15) * 17);
            const smooth = (1 - Math.cos(t * Math.PI)) / 2;
            const sprung = (spring(t ** 2.5) - spring(0)) / (spring(1) - spring(0));
            const blend = Math.max(0, Math.min(2, motion));
            const w = blend <= 1 ? t + (smooth - t) * blend : smooth + (sprung - smooth) * (blend - 1);
            for (let i = 0; i < this.positions.length; i++) this.positions[i] = this.shapes[from][i] + (this.shapes[to][i] - this.shapes[from][i]) * w;
            this.attributes.position.needsUpdate = true;
            this.computeVertexNormals();
            this.computeBoundingSphere();
        };
    }
}
