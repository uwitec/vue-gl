This is a simple shape component of Euclidean geometry,
corresponding [THREE.RingGeometry](https://threejs.org/docs/index.html#api/geometries/RingGeometry).
It is contructed from a number of triangular segments that are oriented around a central point
and extend as far out as a given radius.
It is built counter-clockwise from a start angle and a given central angle.
It can also be used to create regular polygons,
where the number of segments determines the number of sides.

Properties of [VglGeometry](vgl-geometry) are also available as mixin. 

## props 

- `inner-radius` ***number*** (*optional*) `default: 0.5` 

  Inner radius of the ring. 

- `outer-radius` ***number*** (*optional*) `default: 1` 

  Outer radius of the ring. 

- `theta-segments` ***number*** (*optional*) `default: 8` 

  Number of segments along to the tangential direction. 

- `phi-segments` ***number*** (*optional*) `default: 1` 

  Number of segments along to the radial direction. 

- `theta-start` ***number*** (*optional*) 

  The starting angle. 

- `theta-length` ***number*** (*optional*) `default: [object Object]` 

  The central angle. 

