A component for creating extruded geometry from a path shape,
corresponding [THREE.ExtrudeGeometry](https://threejs.org/docs/index.html#api/geometries/ExtrudeGeometry).

Properties of [VglGeometry](vgl-geometry) are also available as mixin. 

## props 

- `points` ***vector2Array*** (*required*) 

  Array of Vector2s. The x-coordinate of each point must be greater than zero. 

- `segments` ***number*** (*optional*) `default: 12` 

  The number of circumference segments to generate. 

- `phi-start` ***number*** (*optional*) 

  The starting angle in radians. 

- `phi-length` ***number*** (*optional*) `default: [object Object]` 

  The radian (0 to 2PI) range of the lathed section. 

