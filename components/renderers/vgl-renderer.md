This component creates a canvas that have WebGL context.
Options are corresponding [THREE.WebGLRenderer](https://threejs.org/docs/index.html#api/core/Object3D).

Properties of [VglNamespace](vgl-namespace) are also available as mixin. 

## props 

- `precision` ***string*** (*optional*) 

  Shader precision. Can be "highp", "mediump" or "lowp". 

- `alpha` ***boolean*** (*optional*) 

  Whether the canvas contains an alpha (transparency) buffer or not. 

- `disable-premultiplied-alpha` ***boolean*** (*optional*) 

  Whether the renderer will assume that colors have premultiplied alpha. 

- `antialias` ***boolean*** (*optional*) 

  Whether to perform antialiasing. 

- `disable-stencil` ***boolean*** (*optional*) 

  Whether the drawing buffer has a stencil buffer of at least 8 bits. 

- `power-preference` ***string*** (*optional*) 

  A hint to the user agent indicating what configuration of GPU is suitable
  for this WebGL context. Can be "high-performance", "low-power" or "default". 

- `preserve-drawing-buffer` ***boolean*** (*optional*) 

  Whether to preserve the buffers until manually cleared or overwritten. 

- `disable-depth` ***boolean*** (*optional*) 

  Whether the drawing buffer has a depth buffer of at least 16 bits. 

- `logarithmic-depth-buffer` ***boolean*** (*optional*) 

  Whether to use a logarithmic depth buffer. 

- `camera` ***string*** (*optional*) 

  Name of the using camera. 

- `scene` ***string*** (*optional*) 

  Name of the target scene. 

- `shadow-map-enabled` ***boolean*** (*optional*) 

  If set, use shadow maps in the scene. 

## methods 

- `render()` 

