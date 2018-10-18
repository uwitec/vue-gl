Camera that uses perspective projection,
corresponding [THREE.PerspectiveCamera](https://threejs.org/docs/index.html#api/cameras/PerspectiveCamera).
Camera frustum aspect ratio is automatically set to the renderer aspect ratio.

Properties of [VglCamera](vgl-camera) are also available as mixin. 

## props 

- `zoom` ***number*** (*optional*) `default: 1` 

  Zoom factor of the camera. 

- `near` ***number*** (*optional*) `default: 0.1` 

  Camera frustum near plane. 

- `far` ***number*** (*optional*) `default: 2000` 

  Camera frustum far plane. 

- `fov` ***number*** (*optional*) `default: 50` 

  Camera frustum vertical field of view, from bottom to top of view, in degrees. 

