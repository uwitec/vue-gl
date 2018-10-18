A helper component to assist with visualizing a DirectionalLight's effect on the scene,
corresponding [THREE.DirectionalLightHelper](https://threejs.org/docs/index.html#api/helpers/DirectionalLightHelper).

Properties of [VglObject3d](vgl-object3d) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) 

  If this is not the set the helper will take the color of the light. 

- `size` ***number*** (*optional*) `default: 1` 

  Dimensions of the plane. 

- `light` ***string*** (*optional*) 

  Name of the directional light being visualized. 

## methods 

- `setHelper()` 

