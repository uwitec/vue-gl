A light that gets emitted from a single point in all directions, corresponding [THREE.PointLight](https://threejs.org/docs/index.html#api/lights/PointLight). A common use case for this is to replicate the light emitted from a bare lightbulb. This light can cast shadows.

Properties of [VglLight](vgl-light) are also available as mixin. 

## props 

- `distance` ***number*** (*optional*) 

  The distance from the light where the intensity is 0.
  When set to 0, then the light never stops. 

- `decay` ***number*** (*optional*) `default: 1` 

  The amount the light dims along the distance of the light.
  For physically correct lighting, set this to 2. 

