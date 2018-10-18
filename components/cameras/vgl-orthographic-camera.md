Camera that uses orthographic projection,
corresponding [THREE.OrthographicCamera](https://threejs.org/docs/index.html#api/cameras/OrthographicCamera).
Camera frustum top, bottom, left, and right planes are automatically set to the renderer size.

Properties of [VglCamera](vgl-camera) are also available as mixin. 

## props 

- `zoom` ***number*** (*optional*) `default: 1` 

  Zoom factor of the camera. 

- `near` ***number*** (*optional*) `default: 0.1` 

  Camera frustum near plane. 

- `far` ***number*** (*optional*) `default: 2000` 

  Camera frustum far plane. 

