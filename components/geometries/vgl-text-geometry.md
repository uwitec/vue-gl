A component for generating text as a single geometry,
corresponding [THREE.TextGeometry](https://threejs.org/docs/index.html#api/geometries/TextGeometry).

Properties of [VglGeometry](vgl-geometry) are also available as mixin. 

## props 

- `text` ***string*** (*optional*) `default: ''` 

  The text that needs to be shown. 

- `font` ***string*** (*optional*) 

  The path or URL to the facetype json file. This can also be a Data URI. 

- `size` ***number*** (*optional*) `default: 100` 

  Size of the text. 

- `height` ***number*** (*optional*) `default: 50` 

  Thickness to extrude text. 

- `curve-segments` ***number*** (*optional*) `default: 12` 

  Number of points on the curves. 

- `bevel-enabled` ***boolean*** (*optional*) 

  Turn on bevel. 

- `bevel-thickness` ***number*** (*optional*) `default: 10` 

  How deep into text bevel goes. 

- `bevel-size` ***number*** (*optional*) `default: 8` 

  How far from text outline is bevel. 

- `bevel-segments` ***number*** (*optional*) `default: 3` 

  Number of bevel segments. 

