This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets. Corresponding [THREE.SpotLight](https://threejs.org/docs/index.html#api/lights/SpotLight). This light can cast shadows.

Properties of [VglLight](vgl-light) are also available as mixin. 

## props 

- `distance` ***number*** (*optional*) 

  The distance from the light where the intensity is 0.
  When set to 0, then the light never stops. 

- `decay` ***number*** (*optional*) `default: 1` 

  The amount the light dims along the distance of the light.
  For physically correct lighting, set this to 2. 

- `angle` ***number*** (*optional*) `default: [object Object]` 

  Maximum extent of the spotlight, in radians, from its direction.
  Should be no more than Math.PI/2. 

- `penumbra` ***number*** (*optional*) 

  Percent of the spotlight cone that is attenuated due to penumbra.
  Takes values between zero and 1. 

- `target` ***vector3*** (*optional*) 

  The spotlight's pointing position. 

