This is a component for generating cylinder geometries,
corresponding [THREE.CylinderGeometry](https://threejs.org/docs/index.html#api/geometries/CylinderGeometry).

Properties of [VglGeometry](vgl-geometry) are also available as mixin. 

## props 

- `radius-top` ***number*** (*optional*) `default: 1` 

  Radius of the cylinder at the top. 

- `radius-bottom` ***number*** (*optional*) `default: 1` 

  Radius of the cylinder at the bottom. 

- `height` ***number*** (*optional*) `default: 1` 

  Height of the cylinder. 

- `radial-segments` ***number*** (*optional*) `default: 8` 

  Number of segmented faces around the circumference of the cylinder. 

- `height-segments` ***number*** (*optional*) `default: 1` 

  Number of rows of faces along the height of the cylinder. 

- `open-ended` ***boolean*** (*optional*) 

  A Boolean indicating whether the ends of the cylinder are open or capped. 

- `theta-start` ***number*** (*optional*) 

  Start angle for first segment. 

- `theta-length` ***number*** (*optional*) `default: [object Object]` 

  The central angle of the circular sector. 

