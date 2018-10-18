A component to define polar grids,
correcponding [THREE.PolarGridHelper](https://threejs.org/docs/index.html#api/helpers/PolarGridHelper).
Grids are two-dimensional arrays of lines.

Properties of [VglObject3d](vgl-object3d) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 10` 

  The radius of the polar grid. This can be any positive number. 

- `radials` ***number*** (*optional*) `default: 16` 

  The number of radial lines. This can be any positive integer. 

- `circles` ***number*** (*optional*) `default: 8` 

  The number of circles. This can be any positive integer. 

- `divisions` ***number*** (*optional*) `default: 64` 

  The number of line segments used for each circle.
  This can be any positive integer that is 3 or greater. 

- `color1` ***string*** (*optional*) `default: '#444444'` 

  The first color used for grid elements. 

- `color2` ***string*** (*optional*) `default: '#888888'` 

  The second color used for grid elements. 

