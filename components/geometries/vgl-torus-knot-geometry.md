A component for generating torus knot geometries,
corresponding [THREE.TorusKnotGeometry](https://threejs.org/docs/index.html#api/geometries/TorusKnotGeometry).

Properties of [VglGeometry](vgl-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Radius of the torus. 

- `tube` ***number*** (*optional*) `default: 0.4` 

  Diamiter of the tube. 

- `radial-segments` ***number*** (*optional*) `default: 8` 

  Number of segments of the tube's section. 

- `tubular-segments` ***number*** (*optional*) `default: 64` 

  Number of segments along to the tube length direction. 

- `p` ***number*** (*optional*) `default: 2` 

  This value determines how many times the geometry winds
  around its axis of rotational symmetry. 

- `q` ***number*** (*optional*) `default: 3` 

  This value determines how many times the geometry winds
  around a circle in the interior of the torus. 

