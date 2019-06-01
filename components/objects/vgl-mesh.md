A component representing triangular polygon mesh based objects,
corresponding [THREE.Mesh](https://threejs.org/docs/index.html#api/objects/Mesh).

Properties of [VglObject3d](vgl-object3d) are also available as mixin. 

## props 

- `geometry` ***string*** (*optional*) 

  Name of the geometry, defining the object's structure. 

- `material` ***names*** (*optional*) 

  A Material name or an array of Material name, defining the object's appearance.
  
  A single material will apply the material to all object's faces meanwhile
  an array of material will apply each material to the matching index object's face 

