import * as THREE from 'three';

/**
 * 
 * @param {*} radius is the radius
 * @param {*} segments is the number of segments per side
 * @param {*} morphFn is the morph function
 */
 
export default class MorphismGeometry extends THREE.BufferGeometry {

    constructor(radius, segments, morphFn) {
        super();
        this.initialize(radius, segments, morphFn);
        this.build();
    }

    initialize(radius, segments, morphFn) {
        this.radius = radius;
        this.segments = segments;
        this.morphFn = morphFn;

        this.faceCount = 6;
        // const sd = r * 1 / Math.sqrt( 2 ); // 1/2 square diagonal
        this.halfSquareSide = this.radius * 1 / Math.sqrt( 3 ); // 1/2 square side
        this.grid = this.segments + 1;
        this.midGrid = this.grid + this.segments ;   // height vertex count
        this.vertsPerFace = this.grid * this.grid + this.segments * this.segments;
        this.vertsTotal = this.vertsPerFace * this.faceCount;
        this.trisTotal = this.segments * this.segments * 4 * this.faceCount;

        this.positions = new Float32Array(this.vertsTotal * 3);   
        this.base = new Float32Array(this.vertsTotal * 3); // basis positions plane,base
        this.diff = new Float32Array(this.vertsTotal * 3); // difference positions base - other
        this.uvs = new Float32Array(this.vertsTotal * 2); // uvs to positions
        this.indices = new Uint32Array(this.trisTotal * 3);

        this.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
        this.setAttribute('uv', new THREE.BufferAttribute(this.uvs, 2));
        this.setIndex(new THREE.BufferAttribute(this.indices, 1));

        // Build all 6 faces
        this.faceData = [
            [0, 1, 2, 1],
            [0, 1, 2,-1],
            [1, 2, 0, 1],
            [1, 2, 0,-1],
            [2, 0, 1, 1],
            [2, 0, 1,-1]
        ];

        // UVs (same orientation pattern count as faces)
        this.uvData = [
            [0, 1, 1, 1],
            [0, 1,-1, 1],
            [1, 0, 1,-1],
            [1, 0, 1, 1],
            [1, 0, 1,-1],
            [1, 0, 1, 1]
        ];

        this.faceOffset = 0;
        this.indexPtr = 0;
        this.ptr = 0;
        this.uvPtr = 0;

        this.morph = function morph(t) {
            const w = this.morphFn(t);
            for (let i = 0; i < this.positions.length; i++) {
                this.positions[i] = this.base[i] + this.diff[i] * w;
            }
            this.attributes.position.needsUpdate = true;// to change the positions of the vertices
        }
    }

    build() {
        for (let f = 0; f < this.faceCount; f++) {
            const [a, b, c, s] = this.faceData[f];
            this.buildIndices(a, b, c, s);
            this.buildPositions(a, b, c, s);

            const [ua, ub, o1, o2] = this.uvData[f];
            this.buildUVs(ua, ub, o1, o2);

            this.faceOffset += this.vertsPerFace; // + vertex count one side
            this.addGroup (f * this.segments * this.segments * 12,  this.segments * this.segments * 12, f);
        }
    }
    
    buildIndices(is, ib, ic, sign) {
        for (let j = 0; j < this.segments; j++) {
            for (let i = 0; i < this.segments; i++) {
                // 4 faces / segment
                const a  = this.faceOffset + this.midGrid * j + this.grid + i;
                // bottom
                const b1 = this.faceOffset + this.midGrid * j + i;
                const c1 = this.faceOffset + this.midGrid * ( j + 1 ) + i;
                // left
                const b2 = this.faceOffset + this.midGrid * j + 1 + i;
                const c2 = b1;
                // right
                const b3 = c1;
                const c3 = this.faceOffset + this.midGrid * ( j + 1 ) + 1 + i;
                // top
                const b4 = c3;
                const c4 = b2;

                const tris = (sign === 1) ? 
                [
                    [a, b1, c1],
                    [a, b2, c2],
                    [a, b3, c3],
                    [a, b4, c4]
                ] : 
                [
                    [a, c1, b1],
                    [a, c2, b2],
                    [a, c3, b3],
                    [a, c4, b4]
                ]

                for (let t = 0; t < 4; t++) {
                    const tri = tris[t];
                    this.indices[this.indexPtr++] = tri[0];
                    this.indices[this.indexPtr++] = tri[1];
                    this.indices[this.indexPtr++] = tri[2];
                }
            }
        }
    }
    
    buildPositions(ia, ib, ic, sign) {
        const writeVertex = (x, y, z) => {
            this.base[ this.ptr + ia ] = x;
            this.base[ this.ptr + ib ] = y;
            this.base[ this.ptr + ic ] = z;
            
            const len = Math.sqrt( x * x + y * y + z * z );       
            
            const x1 = this.radius * x / len;
            const y1 = this.radius * y / len;
            const z1 = this.radius * z / len;
            
            this.diff[ this.ptr + ia ] = x1 - x;
            this.diff[ this.ptr + ib ] = y1 - y;
            this.diff[ this.ptr + ic ] = z1 - z;
            
            this.positions[ this.ptr + ia ] = x; 
            this.positions[ this.ptr + ib ] = y;
            this.positions[ this.ptr + ic ] = z;        
            
            this.ptr += 3;
        };
        for (let j = 0; j < this.grid; j++) {
            for (let i = 0; i < this.grid; i++) {
                const a0 = - this.halfSquareSide + 2 * this.halfSquareSide * j / this.segments;
                const b0 = - this.halfSquareSide + 2 * this.halfSquareSide * i / this.segments;
                const c0 = sign * this.halfSquareSide;
                writeVertex(a0, b0, c0);
            }
            if(j < this.segments) {
                for (let i = 0; i < this.segments; i++) {
                    const a0 = - this.halfSquareSide + 2 * this.halfSquareSide * ( j + 0.5 ) / this.segments;
                    const b0 = - this.halfSquareSide + 2 * this.halfSquareSide * ( i + 0.5 ) / this.segments;
                    const c0 = sign * this.halfSquareSide;
                    writeVertex(a0, b0, c0);
                }
            }
        }
    } 
    
    buildUVs(ia, ib, o1, o2) {
        const writeUV = (x, y) => {
            this.uvs[ this.uvPtr + ia ] = x;
            this.uvs[ this.uvPtr + ib ] = y;
            this.uvPtr += 2;
        };
        for (let j = 0; j < this.grid; j++) {
            for (let i = 0; i < this.grid; i++) {
                writeUV(
                    o1 === 1 ? j / this.segments : 1 - j / this.segments,
                    o2 === 1 ? i / this.segments : 1 - i / this.segments
                );
            }
            if(j < this.segments) {
                for (let i = 0; i < this.segments; i++) {
                    writeUV(
                        o1 === 1 ? ( j + 0.5 ) / this.segments : 1 - ( j + 0.5 ) / this.segments,
                        o2 === 1 ? ( i + 0.5 ) / this.segments : 1 - ( i + 0.5 ) / this.segments
                    );
                }
            }
        } 
    }
    
}