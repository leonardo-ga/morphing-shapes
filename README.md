# Shape morphing playground

An interactive Three.js playground. The original red wireframe cube-to-sphere spring animation opens by default.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Run `npm run build` to generate the production site in `docs/`.

## Controls

Choose from Cube, Sphere, Ellipsoid, House, Bottle, Pencil, Bloom, Spiral, Starburst, and Lantern. Every preset can morph into every other preset. The sculptural presets use a denser shared mesh for smooth petals, ribs, and tips.

- Play or pause, scrub the transition, change speed, or toggle the back-and-forth loop. With looping disabled, playback stops at the next destination endpoint.
- Blend continuously between linear, smooth, and the original spring motion with the Motion slider.
- Toggle wireframe, change color, or restore the default animation.
- Drag the canvas to orbit and scroll to zoom.

## Adding shapes

`src/js/models/shape-morphisms/MorphismGeometry.js` generates each preset from the original cube mesh, preserving vertex order and triangle connectivity. Add a preset name and its coordinate mapping there. Animation and menu behavior live separately in `CubeSphereMesh.js`.

## Upload roadmap

Custom model uploads are not implemented yet. Direct solid morphing needs meaningful vertex correspondence, not just equal vertex counts. A future importer should preview, center, and scale models, validate compatible topology, and explain unsupported files. Unrelated models will need surface matching/remeshing or a separate sampled-particle transition mode.
