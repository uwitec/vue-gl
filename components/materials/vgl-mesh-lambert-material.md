A material for non-shiny surfaces, without specular highlights,
corresponding [THREE.MeshLambertMaterial](https://threejs.org/docs/index.html#api/materials/MeshLambertMaterial).

The material uses a non-physically based Lambertian model for calculating reflectance. This can
simulate some surfaces (such as untreated wood or stone) well, but cannot simulate shiny surfaces
with specular highlights (such as varnished wood).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***string*** (*optional*) 

  The color map of the material. 

