(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?t(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],t):t(e.VueGL={},e.THREE)})(this,function(e,t){'use strict';/**
   * Returns a parsed vector3 object.
   */function a(e){return e.isVector3?e:new(Function.prototype.bind.apply(t.Vector3,[null].concat(m(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))}/**
   * Returns a parsed vector2 object.
   */function i(e){return e.isVector2?e:new(Function.prototype.bind.apply(t.Vector2,[null].concat(m(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))}/**
   * Returns a parsed euler object.
   */function r(e){return e.isEuler?e:new(Function.prototype.bind.apply(t.Euler,[null].concat(m(e.trim().split(/\s+/).map(function(e,t){return 3===t?e:parseFloat(e)})))))}/**
   * Returns a parsed spherical object.
   */function n(e){return e.isSpherical?e:new(Function.prototype.bind.apply(t.Spherical,[null].concat(m(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))().makeSafe()}/**
   * Returns a parsed array.
   */function o(e){return Array.isArray(e)?e:e.split(',')}/**
   * Returns a parsed array of vector2.
   */function s(e){return o(e).map(function(e){return i(e)})}var l=Math.PI,p={};p.typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},p.jsx=function(){var e='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(t,a,r,n){var o=t&&t.defaultProps,s=arguments.length-3;if(a||0==s||(a={}),a&&o)for(var l in o)void 0===a[l]&&(a[l]=o[l]);else a||(a=o||{});if(1==s)a.children=n;else if(1<s){for(var p=Array(s),d=0;d<s;d++)p[d]=arguments[d+3];a.children=p}return{$$typeof:e,type:t,key:void 0===r?null:''+r,ref:null,props:a,_owner:null}}}(),p.asyncIterator=function(e){if('function'==typeof Symbol){if(Symbol.asyncIterator){var t=e[Symbol.asyncIterator];if(null!=t)return t.call(e)}if(Symbol.iterator)return e[Symbol.iterator]()}throw new TypeError('Object is not async iterable')},p.asyncGenerator=function(){function e(e){this.value=e}function t(t){function a(r,n){try{var o=t[r](n),s=o.value;s instanceof e?Promise.resolve(s.value).then(function(e){a('next',e)},function(e){a('throw',e)}):i(o.done?'return':'normal',o.value)}catch(e){i('throw',e)}}function i(e,t){'return'===e?r.resolve({value:t,done:!0}):'throw'===e?r.reject(t):r.resolve({value:t,done:!1});r=r.next,r?a(r.key,r.arg):n=null}var r,n;this._invoke=function(e,t){return new Promise(function(i,o){var s={key:e,arg:t,resolve:i,reject:o,next:null};n?n=n.next=s:(r=n=s,a(e,t))})},'function'!=typeof t.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke('next',e)},t.prototype.throw=function(e){return this._invoke('throw',e)},t.prototype.return=function(e){return this._invoke('return',e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),p.asyncGeneratorDelegate=function(e,t){function a(a,i){return r=!0,i=new Promise(function(t){t(e[a](i))}),{done:!1,value:t(i)}}var i={},r=!1;return'function'==typeof Symbol&&Symbol.iterator&&(i[Symbol.iterator]=function(){return this}),i.next=function(e){return r?(r=!1,e):a('next',e)},'function'==typeof e.throw&&(i.throw=function(e){if(r)throw r=!1,e;return a('throw',e)}),'function'==typeof e.return&&(i.return=function(e){return a('return',e)}),i},p.asyncToGenerator=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function i(r,n){try{var o=t[r](n),s=o.value}catch(e){return void a(e)}return o.done?void e(s):Promise.resolve(s).then(function(e){i('next',e)},function(e){i('throw',e)})}return i('next')})}},p.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},p.createClass=function(){function e(e,t){for(var a,r=0;r<t.length;r++)a=t[r],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),p.defineEnumerableProperties=function(e,t){for(var a in t){var i=t[a];i.configurable=i.enumerable=!0,'value'in i&&(i.writable=!0),Object.defineProperty(e,a,i)}return e},p.defaults=function(e,t){for(var a=Object.getOwnPropertyNames(t),r=0;r<a.length;r++){var n=a[r],o=Object.getOwnPropertyDescriptor(t,n);o&&o.configurable&&e[n]===void 0&&Object.defineProperty(e,n,o)}return e},p.defineProperty=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},p.extends=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var r in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p.get=function e(t,a,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,a);if(r===void 0){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,a,i)}if('value'in r)return r.value;var o=r.get;return void 0===o?void 0:o.call(i)},p.inherits=function(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p.instanceof=function(e,t){return null!=t&&'undefined'!=typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t},p.interopRequireDefault=function(e){return e&&e.__esModule?e:{default:e}},p.interopRequireWildcard=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},p.newArrowCheck=function(e,t){if(e!==t)throw new TypeError('Cannot instantiate an arrow function')},p.objectDestructuringEmpty=function(e){if(null==e)throw new TypeError('Cannot destructure undefined')},p.objectWithoutProperties=function(e,t){var a={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a},p.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e},p.selfGlobal='undefined'==typeof global?self:global,p.set=function e(t,a,i,r){var n=Object.getOwnPropertyDescriptor(t,a);if(n===void 0){var o=Object.getPrototypeOf(t);null!==o&&e(o,a,i,r)}else if('value'in n&&n.writable)n.value=i;else{var s=n.set;s!==void 0&&s.call(r,i)}return i},p.slicedToArray=function(){function e(e,t){var a=[],i=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(a.push(o.value),!(t&&a.length===t));i=!0);}catch(e){r=!0,n=e}finally{try{!i&&s['return']&&s['return']()}finally{if(r)throw n}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),p.slicedToArrayLoose=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var a,i=[],r=e[Symbol.iterator]();!(a=r.next()).done&&(i.push(a.value),!(t&&i.length===t)););return i}throw new TypeError('Invalid attempt to destructure non-iterable instance')},p.taggedTemplateLiteral=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},p.taggedTemplateLiteralLoose=function(e,t){return e.raw=t,e},p.temporalRef=function(e,t,a){if(e===a)throw new ReferenceError(t+' is not defined - temporal dead zone');else return e},p.temporalUndefined={},p.toArray=function(e){return Array.isArray(e)?e:Array.from(e)},p.toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},p;var d={inject:{vglNamespace:{default:function(){var e=this,t=[],a=[],i=void 0;return{renderers:t,cameras:Object.create(null),scenes:Object.create(null),update:function(){i||(e.$nextTick(function(){a.forEach(function(e){e()}),t.forEach(function(e){e.render()}),i=!1}),i=!0)},beforeRender:a,geometries:Object.create(null),materials:Object.create(null),textures:Object.create(null),object3ds:Object.create(null)}}}},provide:function(){return{vglNamespace:Object.create(this.vglNamespace,{geometries:{value:Object.create(this.vglNamespace.geometries)},materials:{value:Object.create(this.vglNamespace.materials)},textures:{value:Object.create(this.vglNamespace.textures)},object3ds:{value:Object.create(this.vglNamespace.object3ds)}})}},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},c=function(){function e(e,t){var a=[],i=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(a.push(o.value),!(t&&a.length===t));i=!0);}catch(e){r=!0,n=e}finally{try{!i&&s['return']&&s['return']()}finally{if(r)throw n}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),m=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},u=[String,Number],g=String,f=[String,t.Vector3],h=[String,t.Spherical],y=Boolean,b=[String,t.Euler],v=[String,t.Vector2],S=[String,Array],x=[String,Array],w={props:{/** The object's local position as a 3D vector. */position:f,/** The object's local rotation as a euler angle. */rotation:b,/** The object's local scale as a 3D vector. */scale:f,/** Whether the object gets rendered into shadow map. */castShadow:y,/** Whether the material receives shadows. */receiveShadow:y,/** Optional name of the object. */name:g},computed:{inst:function(){return new t.Object3D}},inject:{vglObject3d:{default:{}},vglNamespace:'vglNamespace'},provide:function(){var e=this;return{vglObject3d:{get inst(){return e.inst}}}},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},beforeDestroy:function(){var e=this.vglNamespace,t=this.inst,a=this.name;t.parent&&t.parent.remove(t),e.object3ds[a]===t&&delete e.object3ds[a],e.update()},watch:{inst:{handler:function(e,t){t&&t.parent&&t.parent.remove(t),this.vglObject3d.inst&&this.vglObject3d.inst.add(e),this.position&&e.position.copy(a(this.position)),this.rotation&&e.rotation.copy(r(this.rotation)),this.scale&&e.scale.copy(a(this.scale)),Object.assign(e,{castShadow:this.castShadow,receiveShadow:this.receiveShadow}),this.name!==void 0&&(this.vglNamespace.object3ds[this.name]=e)},immediate:!0},"vglObject3d.inst":function(e){e.add(this.inst)},position:function(e){this.inst.position.copy(a(e))},rotation:function(e){this.inst.rotation.copy(r(e))},scale:function(e){this.inst.scale.copy(a(e))},castShadow:function(e){this.inst.castShadow=e},receiveShadow:function(e){this.inst.receiveShadow=e},name:function(e,t){var a=this.vglNamespace.object3ds,i=this.inst;a[t]===i&&delete a[t],a[e]=i}},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},N={mixins:[w],props:{/**
       * Position in 3D space for the camera to point towards.
       * This property overwrite rotation property when both defined.
       */orbitTarget:f,/**
       * Spherical position around orbitTarget.
       * This property overwrite position and rotation properties.
       * If orbitTarget is not defined, automatically set to (0, 0, 0).
       */orbitPosition:h},computed:{inst:function(){return new t.Camera}},watch:{inst:{handler:function(e){if(this.vglNamespace.cameras[this.name]=e,this.orbitPosition||this.orbitTarget){var i;this.orbitTarget&&(i=a(this.orbitTarget)),this.orbitPosition&&(e.position.setFromSpherical(n(this.orbitPosition)),i&&e.position.add(i)),e.lookAt(i||new t.Vector3)}},immediate:!0},name:function(e,t){var a=this.vglNamespace.cameras,i=this.inst;a[t]===i&&delete a[t],a[e]=i},orbitTarget:function(e){var t=a(e);this.orbitPosition&&this.inst.position.setFromSpherical(n(this.orbitPosition)).add(t),this.inst.lookAt(t)},orbitPosition:function(e){if(this.inst.position.setFromSpherical(n(e)),this.orbitTarget){var i=a(this.orbitTarget);this.inst.position.add(i),this.inst.lookAt(i)}else this.inst.lookAt(new t.Vector3)}},beforeDestroy:function(){var e=this.vglNamespace.cameras,t=this.inst;e[this.name]===t&&delete e[this.name]}},M={mixins:[w],props:{/** CSS style color of the light. */color:{type:g,default:'#fff'},/** Numeric value of the light's strength/intensity. */intensity:{type:u,default:1}},computed:{inst:function(){return new t.Light}},watch:{inst:{handler:function(e){e.color.setStyle(this.color),Object.assign(e,{intensity:parseFloat(this.intensity)})},immediate:!0},color:function(e){this.inst.color.setStyle(e)},intensity:function(e){this.inst.intensity=parseFloat(e)}}},L={no:t.NoColors,vertex:t.VertexColors,face:t.FaceColors},V={front:t.FrontSide,back:t.BackSide,double:t.DoubleSide},A={inject:['vglNamespace'],props:{/** Name of the material. */name:g,/** Defines which side of faces will be rendered. front, back or double. */side:{type:g,default:'front'},/** Defines whether vertex coloring is used. Other options are 'vertex' and 'face'. */vertexColors:{type:g,default:'no'}},computed:{inst:function(){return new t.Material}},watch:{inst:{handler:function(e){e.setValues({side:V[this.side],vertexColors:L[this.vertexColors]}),this.vglNamespace.materials[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.materials,i=this.inst;a[t]===i&&delete a[t],a[e]=i},side:function(e){this.inst.side=V[e]},vertexColors:function(e){this.inst.vertexColors=L[e]}},beforeDestroy:function(){var e=this.vglNamespace.materials,t=this.inst;e[this.name]===t&&delete e[this.name]},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},P={inject:['vglNamespace'],props:{/** Name of the component. */name:g,/** The x, y, and z coordinates of each vertex in this geometry. */positionAttribute:S,/** The red, green, and blue channels of vertex color of each vertex in this geometry. */colorAttribute:S,/** The x, y, and z components of the vertex normal vector of each vertex in this geometry. */normalAttribute:S},computed:{inst:function(){return new t.BufferGeometry}},watch:{inst:{handler:function(e,a){if(this.positionAttribute){var i=a?a.getAttribute('position'):new t.BufferAttribute(new Float32Array(o(this.positionAttribute)),3);e.addAttribute('position',i)}if(this.colorAttribute){var r=a?a.getAttribute('color'):new t.BufferAttribute(new Float32Array(o(this.colorAttribute)),3);e.addAttribute('color',r)}if(this.normalAttribute){var n=a?a.getAttribute('normal'):new t.BufferAttribute(new Float32Array(o(this.normalAttribute)),3);e.addAttribute('normal',n)}a&&a.dispose(),this.vglNamespace.geometries[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.geometries,i=this.inst;a[t]===i&&delete a[t],a[e]=i},positionAttribute:function(e){var t=o(e),a=this.inst.getAttribute('position');a.array.length===t.length?a.copyArray(t):a.setArray(new Float32Array(t)),a.needsUpdate=!0},colorAttribute:function(e){var t=o(e),a=this.inst.getAttribute('color');a.array.length===t.length?a.copyArray(t):a.setArray(new Float32Array(t)),a.needsUpdate=!0},normalAttribute:function(e){var t=o(e),a=this.inst.getAttribute('normal');a.array.length===t.length?a.copyArray(t):a.setArray(new Float32Array(t)),a.needsUpdate=!0}},beforeDestroy:function(){var e=this.vglNamespace.geometries,t=this.inst;e[this.name]===t&&delete e[this.name],t.dispose()},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},G={mixins:[w],methods:{setMaterial:function(){var e=this.vglNamespace.materials,t=this.material,a=this.inst;e[t]&&(a.material=e[t])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setMaterial)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setMaterial;e.splice(e.indexOf(t),1)}},C={mixins:[G],methods:{setGeometry:function(){var e=this.vglNamespace.geometries,t=this.geometry,a=this.inst;e[t]&&(a.geometry=e[t])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setGeometry)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setGeometry;e.splice(e.indexOf(t),1)}},j={mixins:[A],methods:{setMap:function(){var e=this.vglNamespace.textures,t=this.inst,a=this.map;a in e&&(t.map=e[a])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setMap)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setMap;e.splice(e.indexOf(t),1)}},D={mixins:[j],props:{/** CSS style color of the material. */color:{type:g,default:'#fff'},/** The color map of the material. */map:g},computed:{inst:function(){return new t.MeshStandardMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},R={mixins:[C],props:{/** Name of the geometry, representing the line segment(s). */geometry:g,/** Name of the material for the line. */material:g},computed:{inst:function(){return new t.Line}},methods:{computeLineDistances:function(){this.inst.material.isLineDashedMaterial&&this.inst.computeLineDistances()}},created:function(){this.vglNamespace.beforeRender.push(this.computeLineDistances)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.computeLineDistances;e.splice(e.indexOf(t),1)}},z={mixins:[P],props:{/** Radius of the cylinder at the top. */radiusTop:{type:u,default:1},/** Radius of the cylinder at the bottom. */radiusBottom:{type:u,default:1},/** Height of the cylinder. */height:{type:u,default:1},/** Number of segmented faces around the circumference of the cylinder. */radialSegments:{type:u,default:8},/** Number of rows of faces along the height of the cylinder. */heightSegments:{type:u,default:1},/** A Boolean indicating whether the ends of the cylinder are open or capped. */openEnded:y,/** Start angle for first segment. */thetaStart:{type:u,default:0},/** The central angle of the circular sector. */thetaLength:{type:u,default:2*l}},computed:{inst:function(){return new t.CylinderBufferGeometry(parseFloat(this.radiusTop),parseFloat(this.radiusBottom),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},B={uv:t.UVMapping,"cube-reflection":t.CubeReflectionMapping,"cube-refraction":t.CubeRefractionMapping,"equirectangular-reflection":t.EquirectangularReflectionMapping,"equirectangular-refraction":t.EquirectangularRefractionMapping,"spherical-reflection":t.SphericalReflectionMapping,"cube-uv-reflection":t.CubeUVReflectionMapping,"cube-uv-refraction":t.CubeUVRefractionMapping},T={repeat:t.RepeatWrapping,"clamp-to-edge":t.ClampToEdgeWrapping,"mirrored-repeat":t.MirroredRepeatWrapping},O={nearest:t.NearestFilter,"nearest-mip-map-nearest":t.NearestMipMapNearestFilter,"nearest-mip-map-linear":t.NearestMipMapLinearFilter,linear:t.LinearFilter,"linear-mip-map-nearest":t.LinearMipMapNearestFilter,"linear-mip-map-linear":t.LinearMipMapLinearFilter},k={alpha:t.AlphaFormat,rgb:t.RGBFormat,rgba:t.RGBAFormat,luminance:t.LuminanceFormat,"luminance-alpha":t.LuminanceAlphaFormat,rgbe:t.RGBEFormat,depth:t.DepthFormat,"depth-stencil":t.DepthStencilFormat},F={"unsigned-byte":t.UnsignedByteType,byte:t.ByteType,short:t.ShortType,"unsigned-short":t.UnsignedShortType,int:t.IntType,"unsigned-int":t.UnsignedIntType,float:t.FloatType,"half-float":t.HalfFloatType,"unsigned-short-4444":t.UnsignedShort4444Type,"unsigned-short-5551":t.UnsignedShort5551Type,"unsigned-short-565":t.UnsignedShort565Type,"unsigned-int-248":t.UnsignedInt248Type},E={linear:t.LinearEncoding,"s-rgb":t.sRGBEncoding,gamma:t.GammaEncoding,rgbe:t.RGBEEncoding,"log-luv":t.LogLuvEncoding,rgbm7:t.RGBM7Encoding,rgbm16:t.RGBM16Encoding,rgbde:t.RGBDEncoding,"basic-depth":t.BasicDepthPacking,"rgba-depth":t.RGBADepthPacking},H={mixins:[P],computed:{inst:function(){return new t.ExtrudeBufferGeometry([],{})}}},$=Object.create(null),_={mixins:[j],props:{/** CSS style color of the material. */color:{type:g,default:'#fff'},/** The color map of the material. */map:g,/** Specular color of the material. */specular:{type:g,default:'#111111'},/** How shiny the specular highlight is. A higher value gives a sharper highlight. */shininess:{type:u,default:30}},computed:{inst:function(){return new t.MeshPhongMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{shininess:parseFloat(this.shininess)}),e.specular.setStyle(this.specular),e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)},specular:function(e){this.inst.specular.setStyle(e)},shininess:function(e){this.inst.shininess=parseFloat(e)}}};/**
   * This is the base mixin component for most object components in VueGL,
   * corresponding [THREE.Object3D](https://threejs.org/docs/index.html#api/core/Object3D).
   * Object3d components inside a object3d component are added
   * as children via THREE.Object3D.prototype.add() method.
   *
   * VglObject3d components inside default slots are added as children.
   *//**
   * This is where you place objects,
   * corresponding [THREE.Scene](https://threejs.org/docs/index.html#api/scenes/Scene).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * This is abstract base component for cameras,
   * corresponding [THREE.Camera](https://threejs.org/docs/index.html#api/cameras/Camera).
   * This component should always be mixined (inherited).
   * You probably want a [VglPerspectiveCamera](vgl-perspective-camera)
   * and [VglOrthographicCamera](vgl-orthographic-camera).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * This component creates a canvas that have WebGL context.
   * Options are corresponding [THREE.WebGLRenderer](https://threejs.org/docs/index.html#api/core/Object3D).
   *
   * Properties of [VglNamespace](vgl-namespace) are also available as mixin.
   *//**
   * Camera that uses perspective projection,
   * corresponding [THREE.PerspectiveCamera](https://threejs.org/docs/index.html#api/cameras/PerspectiveCamera).
   * Camera frustum aspect ratio is automatically set to the renderer aspect ratio.
   *
   * Properties of [VglCamera](vgl-camera) are also available as mixin.
   *//**
   * A component for grouping objects,
   * corresponding [THREE.Group](https://threejs.org/docs/index.html#api/objects/Group).
   * Its purpose is to make working with groups of objects syntactically clearer.
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * Abstract mixin component for lights,
   * corresponding [THREE.Light](https://threejs.org/docs/index.html#api/lights/Light).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A light that gets emitted in a specific direction, corresponding [THREE.DirectionalLight](https://threejs.org/docs/index.html#api/lights/DirectionalLight). This light will behave as though it is infinitely far away and the rays produced from it are all parallel. This light can cast shadows.
   *
   * Properties of [VglLight](vgl-light) are also available as mixin.
   *//**
   * A light component globally illuminates all objects in the scene equally,
   * corresponding [THREE.AmbientLight](https://threejs.org/docs/index.html#api/lights/AmbientLight).
   * This light cannot be used to cast shadows as it does not have a direction.
   *
   * Properties of [VglLight](vgl-light) are also available as mixin.
   *//**
   * Abstract mixin component for materials,
   * corresponding [THREE.Material](https://threejs.org/docs/index.html#api/materials/Material).
   *//**
   * The default material used by [VglPoints](vgl-points),
   * corresponding [THREE.PointsMaterial](https://threejs.org/docs/index.html#api/materials/PointsMaterial).
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * This is the base mixin component for all geometry components,
   * corresponding [THREE.Geometry](https://threejs.org/docs/index.html#api/core/Geometry).
   * This can also be used directly for building custom geometries.
   *//**
   * This is a component for generating sphere geometries,
   * corresponding [THREE.SphereGeometry](https://threejs.org/docs/index.html#api/geometries/SphereGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A standard physically based material,
   * corresponding [THREE.MeshStandardMaterial](https://threejs.org/docs/index.html#api/materials/MeshStandardMaterial).
   * Using Metallic-Roughness workflow.
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * A component representing triangular polygon mesh based objects,
   * corresponding [THREE.Mesh](https://threejs.org/docs/index.html#api/objects/Mesh).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A component for displaying points,
   * corresponding [THREE.Points](https://threejs.org/docs/index.html#api/objects/Points).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A material for drawing wireframe-style geometries,
   * corresponding [THREE.LineBasicMaterial](https://threejs.org/docs/index.html#api/materials/LineBasicMaterial).
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * A continuous line component,
   * corresponding [THREE.Line](https://threejs.org/docs/index.html#api/objects/Line).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A sprite component corresponding [THREE.Sprite](https://threejs.org/docs/index.html#api/objects/Sprite).
   * It is a plane that always faces towards the camera.
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * This is the quadrilateral primitive geometry component,
   * corresponding [THREE.BoxGeometry](https://threejs.org/docs/index.html#api/geometries/BoxGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * This is a simple shape component of Euclidean geometry,
   * corresponding [THREE.CircleGeometry](https://threejs.org/docs/index.html#api/geometries/CircleGeometry).
   * It is contructed from a number of triangular segments that are oriented around a central point
   * and extend as far out as a given radius.
   * It is built counter-clockwise from a start angle and a given central angle.
   * It can also be used to create regular polygons,
   * where the number of segments determines the number of sides.
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A series of lines component drawn between pairs of vertices,
   * corresponding [THREE.LineSegments](https://threejs.org/docs/index.html#api/objects/LineSegments).
   *
   * Properties of [VglLine](vgl-line) are also available as mixin.
   *//**
   * A continuous line component that connects back to the start,
   * corresponding [THREE.LineLoop](https://threejs.org/docs/index.html#api/objects/LineLoop).
   *
   * Properties of [VglLine](vgl-line) are also available as mixin.
   *//**
   * This is a component for generating cylinder geometries,
   * corresponding [THREE.CylinderGeometry](https://threejs.org/docs/index.html#api/geometries/CylinderGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * This is a component for generating cone geometries,
   * corresponding [THREE.ConeGeometry](https://threejs.org/docs/index.html#api/geometries/ConeGeometry).
   *
   * Properties of [VglCylinderGeometry](vgl-cylinder-geometry) are also available as mixin.
   *//**
   * An axis object to visualize the the 3 axes in a simple way,
   * corresponding [THREE.AxesHelper](https://threejs.org/docs/index.html#api/helpers/AxesHelper).
   * The X axis is red. The Y axis is green. The Z axis is blue.
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * Camera that uses orthographic projection,
   * corresponding [THREE.OrthographicCamera](https://threejs.org/docs/index.html#api/cameras/OrthographicCamera).
   * Camera frustum top, bottom, left, and right planes are automatically set to the renderer size.
   *
   * Properties of [VglCamera](vgl-camera) are also available as mixin.
   *//**
   * A component for generating plane geometries,
   * corresponding [THREE.PlaneGeometry](https://threejs.org/docs/index.html#api/geometries/PlaneGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A component for generating a dodecahedron geometries,
   * corresponding [THREE.DodecahedronGeometry](https://threejs.org/docs/index.html#api/geometries/DodecahedronGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A component for generating a icosahedron geometries,
   * corresponding [THREE.IcosahedronGeometry](https://threejs.org/docs/index.html#api/geometries/IcosahedronGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A component for generating a octahedron geometries,
   * corresponding [THREE.OctahedronGeometry](https://threejs.org/docs/index.html#api/geometries/OctahedronGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * This is a simple shape component of Euclidean geometry,
   * corresponding [THREE.RingGeometry](https://threejs.org/docs/index.html#api/geometries/RingGeometry).
   * It is contructed from a number of triangular segments that are oriented around a central point
   * and extend as far out as a given radius.
   * It is built counter-clockwise from a start angle and a given central angle.
   * It can also be used to create regular polygons,
   * where the number of segments determines the number of sides.
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A component for generating a tetrahedron geometries,
   * corresponding [THREE.TetrohedronGeometry](https://threejs.org/docs/index.html#api/geometries/TetrohedronGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A component for generating torus geometries,
   * corresponding [THREE.TorusGeometry](https://threejs.org/docs/index.html#api/geometries/TorusGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A component for generating torus knot geometries,
   * corresponding [THREE.TorusKnotGeometry](https://threejs.org/docs/index.html#api/geometries/TorusKnotGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * An 3D arrow object for visualizing directions,
   * corresponding [THREE.ArrowHelper](https://threejs.org/docs/index.html#api/helpers/ArrowHelper).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A helper component to show the world-axis-aligned bounding box around its parent,
   * corresponding [THREE.BoxHelper](https://threejs.org/docs/index.html#api/helpers/BoxHelper).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A light that gets emitted from a single point in all directions, corresponding [THREE.PointLight](https://threejs.org/docs/index.html#api/lights/PointLight). A common use case for this is to replicate the light emitted from a bare lightbulb. This light can cast shadows.
   *
   * Properties of [VglLight](vgl-light) are also available as mixin.
   *//**
   * This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets. Corresponding [THREE.SpotLight](https://threejs.org/docs/index.html#api/lights/SpotLight). This light can cast shadows.
   *
   * Properties of [VglLight](vgl-light) are also available as mixin.
   *//**
   * A texture to apply to a surface or as a reflection or refraction map,
   * corresponding [THREE.Texture](https://threejs.org/docs/index.html#api/textures/Texture).
   *//**
   * A component for creating extruded geometry from a path shape,
   * corresponding [THREE.ExtrudeGeometry](https://threejs.org/docs/index.html#api/geometries/ExtrudeGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A component for generating text as a single geometry,
   * corresponding [THREE.TextGeometry](https://threejs.org/docs/index.html#api/geometries/TextGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * A material for a use with a [VglSprite](vgl-sprite) component,
   * corresponding [THREE.SpriteMaterial](https://threejs.org/docs/index.html#api/materials/SpriteMaterial).
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * A component to define grids,
   * corresponding [THREE.GridHelper](https://threejs.org/docs/index.html#api/helpers/GridHelper).
   * Grids are two-dimensional arrays of lines.
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * This material can receive shadows but otherwise is completely transparent,
   * corresponding [THREE.ShadowMaterial](https://threejs.org/docs/index.html#api/materials/ShadowMaterial).
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * This helps with visualizing what a camera contains in its frustum,
   * corresponding [THREE.CameraHelper](https://threejs.org/docs/index.html#api/helpers/CameraHelper).
   * It visualizes the frustum of a camera using a LineSegments.
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A helper component to assist with visualizing a DirectionalLight's effect on the scene,
   * corresponding [THREE.DirectionalLightHelper](https://threejs.org/docs/index.html#api/helpers/DirectionalLightHelper).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A component to define polar grids,
   * correcponding [THREE.PolarGridHelper](https://threejs.org/docs/index.html#api/helpers/PolarGridHelper).
   * Grids are two-dimensional arrays of lines.
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A material for drawing geometries in a simple shaded (flat or wireframe) way,
   * corresponding [THREE.MeshBasicMaterial](https://threejs.org/docs/index.html#api/materials/MeshBasicMaterial).
   * This material is not affected by lights.
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * A material for drawing geometry by depth,
   * corresponding [THREE.MeshDepthMaterial](https://threejs.org/docs/index.html#api/materials/MeshDepthMaterial).
   * This material is not affected by lights.
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * A material for non-shiny surfaces, without specular highlights,
   * corresponding [THREE.MeshLambertMaterial](https://threejs.org/docs/index.html#api/materials/MeshLambertMaterial).
   *
   * The material uses a non-physically based Lambertian model for calculating reflectance. This can
   * simulate some surfaces (such as untreated wood or stone) well, but cannot simulate shiny surfaces
   * with specular highlights (such as varnished wood).
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * A material for drawing wireframe-style geometries,
   * corresponding [THREE.LineBasicMaterial](https://threejs.org/docs/index.html#api/materials/LineBasicMaterial).
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * A material that maps the normal vectors to RGB colors,
   * corresponding [THREE.MeshNormalMaterial](https://threejs.org/docs/index.html#api/materials/MeshNormalMaterial).
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * A material for shiny surfaces with specular highlights,
   * corresponding [THREE.MeshPhongMaterial](https://threejs.org/docs/index.html#api/materials/MeshPhongMaterial).
   *
   * Properties of [VglMaterial](vgl-material) are also available as mixin.
   *//**
   * An extension of the mesh phong material with toon shading,
   * corresponding [THREE.MeshToonMaterial](https://threejs.org/docs/index.html#api/materials/MeshToonMaterial).
   *
   * Properties of [VglMeshPhongMaterial](vgl-mesh-phong-material) are also available as mixin.
   *//**
   * An extension of the mesh standard material that allows for greater control over reflectivity,
   * corresponding [THREE.MeshPhysicalMaterial](https://threejs.org/docs/index.html#api/materials/MeshPhysicalMaterial).
   *
   * Properties of [VglMeshStandardMaterial](vgl-mesh-standard-material) are also available as mixin.
   *//**
   * A component for creating extruded geometry from a path shape,
   * corresponding [THREE.ExtrudeGeometry](https://threejs.org/docs/index.html#api/geometries/ExtrudeGeometry).
   *
   * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
   *//**
   * This component displays a cone shaped helper object for a SpotLight,
   * corresponding [THREE.SpotLightHelper](https://threejs.org/docs/index.html#api/helpers/SpotLightHelper).
   *
   * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
   *//**
   * A light source positioned directly above the scene, with color fading from the sky color to the
   * ground color, corresponding [THREE.HemisphereLight](https://threejs.org/docs/index.html#api/lights/HemisphereLight).
   * This light cannot be used to cast shadows.
   *
   * Properties of [VglLight](vgl-light) are also available as mixin.
   */e.VglNamespace=d,e.VglObject3d=w,e.VglScene={mixins:[w],computed:{inst:function(){return new t.Scene}},watch:{inst:{handler:function(e){this.vglNamespace.scenes[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.scenes,i=this.inst;a[t]===i&&delete a[t],a[e]=i}},beforeDestroy:function(){var e=this.vglNamespace.scenes,t=this.inst;e[this.name]===t&&delete e[this.name]}},e.VglCamera=N,e.VglRenderer={mixins:[d],props:{/** Shader precision. Can be "highp", "mediump" or "lowp". */precision:g,/** Whether the canvas contains an alpha (transparency) buffer or not. */alpha:y,/** Whether the renderer will assume that colors have premultiplied alpha. */disablePremultipliedAlpha:y,/** Whether to perform antialiasing. */antialias:y,/** Whether the drawing buffer has a stencil buffer of at least 8 bits. */disableStencil:y,/**
       * A hint to the user agent indicating what configuration of GPU is suitable
       * for this WebGL context. Can be "high-performance", "low-power" or "default".
       */powerPreference:g,/** Whether to preserve the buffers until manually cleared or overwritten. */preserveDrawingBuffer:y,/** Whether the drawing buffer has a depth buffer of at least 16 bits. */disableDepth:y,/** Whether to use a logarithmic depth buffer. */logarithmicDepthBuffer:y,/** Name of the using camera. */camera:g,/** Name of the target scene. */scene:g,/** If set, use shadow maps in the scene. */shadowMapEnabled:y},computed:{inst:function(){var e=new t.WebGLRenderer({precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer,powerPreference:this.powerPreference});return e.shadowMap.enabled=this.shadowMapEnabled,e}},methods:{render:function(){var e=this.vglNamespace.scenes[this.scene],t=this.vglNamespace.cameras[this.camera];if(e&&t){if(t.isPerspectiveCamera){var a=this.$el.clientWidth/this.$el.clientHeight;t.aspect!==a&&(t.aspect=a,t.updateProjectionMatrix())}else if(t.isOrthographicCamera){var i=this.$el.clientWidth/2,r=this.$el.clientHeight/2;(t.right!==i||t.top!==r)&&(t.left=-i,t.right=i,t.top=r,t.bottom=-r,t.updateProjectionMatrix())}else throw new TypeError('Unknown camera type.');this.inst.render(e,t)}}},watch:{inst:function(e,t){this.$el&&(e.setSize(this.$el.clientWidth,this.$el.clientHeight),this.$el.replaceChild(e.domElement,t.domElement),this.vglNamespace.update()),t.dispose()}},created:function(){this.vglNamespace.renderers.push(this)},mounted:function(){this.inst.setSize(this.$el.clientWidth,this.$el.clientHeight),this.$el.insertBefore(this.inst.domElement,this.$el.firstChild),this.vglNamespace.update()},beforeDestroy:function(){this.vglNamespace.renderers.splice(this.vglNamespace.renderers.indexOf(this),1),this.inst.dispose()},render:function(e){var t=this;return e('div',[e('iframe',{style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(e){e.target.contentWindow.addEventListener('resize',function(){t.inst.setSize(t.$el.clientWidth,t.$el.clientHeight),t.vglNamespace.update()},!1)}}},this.$slots.default)])}},e.VglPerspectiveCamera={mixins:[N],props:{/** Zoom factor of the camera. */zoom:{type:u,default:1},/** Camera frustum near plane. */near:{type:u,default:.1},/** Camera frustum far plane. */far:{type:u,default:2e3},/** Camera frustum vertical field of view, from bottom to top of view, in degrees. */fov:{type:u,default:50}},computed:{inst:function(){return new t.PerspectiveCamera}},watch:{inst:{handler:function(e){Object.assign(e,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far),fov:parseFloat(this.fov)}),e.updateProjectionMatrix()},immediate:!0},zoom:function(e){this.inst.zoom=parseFloat(e),this.inst.updateProjectionMatrix()},near:function(e){this.inst.near=parseFloat(e),this.inst.updateProjectionMatrix()},far:function(e){this.inst.far=parseFloat(e),this.inst.updateProjectionMatrix()},fov:function(e){this.inst.fov=parseFloat(e),this.inst.updateProjectionMatrix()}}},e.VglGroup={mixins:[w],computed:{inst:function(){return new t.Group}}},e.VglLight=M,e.VglDirectionalLight={mixins:[M],computed:{inst:function(){return new t.DirectionalLight}}},e.VglAmbientLight={mixins:[M],computed:{inst:function(){return new t.AmbientLight}}},e.VglMaterial=A,e.VglPointsMaterial={mixins:[A],props:{/** CSS style color of the material. */color:{type:g,default:'#fff'},/** The size of the points. */size:{type:u,default:1},/** Specify whether points' size will get smaller with the distance. */disableSizeAttenuation:y},computed:{inst:function(){return new t.PointsMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{size:parseFloat(this.size),sizeAttenuation:!this.disableSizeAttenuation}),e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)},size:function(e){this.inst.size=parseFloat(e)},disableSizeAttenuation:function(e){this.inst.sizeAttenuation=!e}}},e.VglGeometry=P,e.VglSphereGeometry={mixins:[P],props:{/** Sphere radius. */radius:{type:u,default:1},/** Number of horizontal segments. */widthSegments:{type:u,default:8},/** Number of vertical segments. */heightSegments:{type:u,default:6},/** Specify horizontal starting angle. */phiStart:{type:u,default:0},/** Specify horizontal sweep angle size. */phiLength:{type:u,default:2*l},/** Specify vertical starting angle. */thetaStart:{type:u,default:0},/** Specify vertical sweep angle size. */thetaLength:{type:u,default:l}},computed:{inst:function(){return new t.SphereBufferGeometry(parseFloat(this.radius),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseFloat(this.phiStart),parseFloat(this.phiLength),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},e.VglMeshStandardMaterial=D,e.VglMesh={mixins:[C],props:{/** Name of the geometry, defining the object's structure. */geometry:g,/** Name of the material, defining the object's appearance. */material:g},computed:{inst:function(){return new t.Mesh}}},e.VglPoints={mixins:[C],props:{/** Name of the geometry, defining the object's structure. */geometry:g,/** Name of the material, defining the object's appearance. */material:g},computed:{inst:function(){return new t.Points}}},e.VglLineBasicMaterial={mixins:[A],props:{/** CSS style color of the material. */color:{type:g,default:'#fff'},/** A boolean whether the material is affected by lights. */lights:y,/** The line thickness. */linewidth:{type:u,default:1},/** Define appearance of line ends. Possible values are "butt", "round" and "square". */linecap:{type:g,default:'round'},/** Define appearance of line joints. Possible values are "round", "bevel" and "miter". */linejoin:{type:g,default:'round'}},computed:{inst:function(){return new t.LineBasicMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{lights:this.lights,linecap:this.linecap,linejoin:this.linejoin,linewidth:parseFloat(this.linewidth)}),e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)},lights:function(e){this.inst.lights=e},linewidth:function(e){this.inst.linewidth=parseFloat(e)},linecap:function(e){this.inst.linecap=e},linejoin:function(e){this.inst.linejoin=e}}},e.VglLine=R,e.VglSprite={mixins:[G],props:{/** Name of the material, defining the object's appearance. */material:g},computed:{inst:function(){return new t.Sprite}}},e.VglBoxGeometry={mixins:[P],props:{/** Width of the sides on the X axis. */width:{type:u,default:1},/** Height of the sides on the Y axis. */height:{type:u,default:1},/** Depth of the sides on the Z axis. */depth:{type:u,default:1},/** Number of segmented faces along the width of the sides. */widthSegments:{type:u,default:1},/** Number of segmented faces along the height of the sides. */heightSegments:{type:u,default:1},/** Number of segmented faces along the depth of the sides. */depthSegments:{type:u,default:1}},computed:{inst:function(){return new t.BoxBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseFloat(this.depth),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseInt(this.depthSegments,10))}}},e.VglCircleGeometry={mixins:[P],props:{/** Radius of the circle. */radius:{type:u,default:1},/** Number of segments (triangles). */segments:{type:u,default:8},/** Start angle for first segment. */thetaStart:{type:u,default:0},/** The central angle of the circular sector. */thetaLength:{type:u,default:2*l}},computed:{inst:function(){return new t.CircleBufferGeometry(parseFloat(this.radius),parseInt(this.segments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},e.VglLineSegments={mixins:[R],computed:{inst:function(){return new t.LineSegments}}},e.VglLineLoop={mixins:[R],computed:{inst:function(){return new t.LineLoop}}},e.VglConeGeometry={mixins:[z],props:{/** Radius of the cone at the base. */radius:{type:u,default:1}},computed:{inst:function(){return new t.ConeBufferGeometry(parseFloat(this.radius),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},e.VglAxesHelper={mixins:[w],props:{/** Size of the lines representing the axes. */size:{type:u,default:1}},computed:{inst:function(){return new t.AxesHelper(parseFloat(this.size))}}},e.VglOrthographicCamera={mixins:[N],props:{/** Zoom factor of the camera. */zoom:{type:u,default:1},/** Camera frustum near plane. */near:{type:u,default:.1},/** Camera frustum far plane. */far:{type:u,default:2e3}},computed:{inst:function(){return new t.OrthographicCamera}},watch:{inst:{handler:function(e){Object.assign(e,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far)}),e.updateProjectionMatrix()},immediate:!0},zoom:function(e){this.inst.zoom=parseFloat(e),this.inst.updateProjectionMatrix()},near:function(e){this.inst.near=parseFloat(e),this.inst.updateProjectionMatrix()},far:function(e){this.inst.far=parseFloat(e),this.inst.updateProjectionMatrix()}}},e.VglCylinderGeometry=z,e.VglPlaneGeometry={mixins:[P],props:{/** Width along the X axis. */width:{type:u,default:1},/** Height along the Y axis. */height:{type:u,default:1},/** Number of segments along the X axis. */widthSegments:{type:u,default:1},/** Number of segments along the Y axis. */heightSegments:{type:u,default:1}},computed:{inst:function(){return new t.PlaneBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10))}}},e.VglDodecahedronGeometry={mixins:[P],props:{/** Radius of the dodecahedron. */radius:{type:u,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron. */detail:{type:u,default:0}},computed:{inst:function(){return new t.DodecahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},e.VglIcosahedronGeometry={mixins:[P],props:{/** Radius of the icosahedron. */radius:{type:u,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a icosahedron. */detail:{type:u,default:0}},computed:{inst:function(){return new t.IcosahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},e.VglOctahedronGeometry={mixins:[P],props:{/** Radius of the octahedron. */radius:{type:u,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a octahedron. */detail:{type:u,default:0}},computed:{inst:function(){return new t.OctahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},e.VglRingGeometry={mixins:[P],props:{/** Inner radius of the ring. */innerRadius:{type:u,default:.5},/** Outer radius of the ring. */outerRadius:{type:u,default:1},/** Number of segments along to the tangential direction. */thetaSegments:{type:u,default:8},/** Number of segments along to the radial direction. */phiSegments:{type:u,default:1},/** The starting angle. */thetaStart:{type:u,default:0},/** The central angle. */thetaLength:{type:u,default:2*l}},computed:{inst:function(){return new t.RingBufferGeometry(parseFloat(this.innerRadius),parseFloat(this.outerRadius),parseInt(this.thetaSegments,10),parseInt(this.phiSegments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},e.VglTetrahedronGeometry={mixins:[P],props:{/** Radius of the tetrahedron. */radius:{type:u,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron. */detail:{type:u,default:0}},computed:{inst:function(){return new t.TetrahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},e.VglTorusGeometry={mixins:[P],props:{/** Radius of the torus. */radius:{type:u,default:1},/** Diamiter of the tube. */tube:{type:u,default:.4},/** Number of segments of the tube's section. */radialSegments:{type:u,default:8},/** Number of segments along to the tube length direction. */tubularSegments:{type:u,default:6},/** The central angle. */arc:{type:u,default:2*l}},computed:{inst:function(){return new t.TorusBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.radialSegments,10),parseInt(this.tubularSegments,10),parseFloat(this.arc))}}},e.VglTorusKnotGeometry={mixins:[P],props:{/** Radius of the torus. */radius:{type:u,default:1},/** Diamiter of the tube. */tube:{type:u,default:.4},/** Number of segments of the tube's section. */radialSegments:{type:u,default:8},/** Number of segments along to the tube length direction. */tubularSegments:{type:u,default:64},/**
       * This value determines how many times the geometry winds
       * around its axis of rotational symmetry.
       */p:{type:u,default:2},/**
       * This value determines how many times the geometry winds
       * around a circle in the interior of the torus.
       */q:{type:u,default:3}},computed:{inst:function(){return new t.TorusKnotBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.tubularSegments,10),parseInt(this.radialSegments,10),parseInt(this.p,10),parseInt(this.q,10))}}},e.VglArrowHelper={mixins:[w],props:{/** Direction from origin. */dir:f,/** Length of the arrow. */length:{type:u,default:1},/** Color of the arrow. */color:{type:g,default:'#ff0'},/** The length of the head of the arrow. */headLength:u,/** The width of the head of the arrow. */headWidth:u},computed:{inst:function(){return new t.ArrowHelper(new t.Vector3(0,1,0),new t.Vector3())},len:function(){return[parseFloat(this.length),this.headLength===void 0?void 0:parseFloat(this.headLength),this.headWidth===void 0?void 0:parseFloat(this.headWidth)]}},watch:{inst:{handler:function(e){this.dir&&e.setDirection(a(this.dir).normalize()),e.setLength.apply(e,m(this.len)),e.setColor(new t.Color(this.color))},immediate:!0},dir:function(e){this.inst.setDirection(a(e).normalize())},len:function(e){var t;(t=this.inst).setLength.apply(t,m(e))},color:function(e){this.inst.setColor(new t.Color(e))}}},e.VglBoxHelper={mixins:[w],props:{/** Size of the lines representing the axes. */color:{type:g,default:'#ff0'},/** Name of the object to show the world-axis-aligned boundingbox. */object:g},computed:{inst:function(){return new t.BoxHelper(void 0,this.color)}},methods:{setFromObject:function(){this.inst.setFromObject(this.vglNamespace.object3ds[this.object])}},created:function(){this.vglNamespace.beforeRender.push(this.setFromObject)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setFromObject;e.splice(e.indexOf(t),1)}},e.VglPointLight={mixins:[M],props:{/**
       * The distance from the light where the intensity is 0.
       * When set to 0, then the light never stops.
       */distance:{type:u,default:0},/**
       * The amount the light dims along the distance of the light.
       * For physically correct lighting, set this to 2.
       */decay:{type:u,default:1}},computed:{inst:function(){return new t.PointLight}},watch:{inst:{handler:function(e){Object.assign(e,{distance:parseFloat(this.distance),decay:parseFloat(this.decay)})},immediate:!0},distance:function(e){this.inst.distance=parseFloat(e)},decay:function(e){this.inst.decay=parseFloat(e)}}},e.VglSpotLight={mixins:[M],props:{/**
       * The distance from the light where the intensity is 0.
       * When set to 0, then the light never stops.
       */distance:{type:u,default:0},/**
       * The amount the light dims along the distance of the light.
       * For physically correct lighting, set this to 2.
       */decay:{type:u,default:1},/**
       * Maximum extent of the spotlight, in radians, from its direction.
       * Should be no more than Math.PI/2.
       */angle:{type:u,default:l/3},/**
       * Percent of the spotlight cone that is attenuated due to penumbra.
       * Takes values between zero and 1.
       */penumbra:{type:u,default:0},/** The spotlight's pointing position. */target:f},computed:{inst:function(){return new t.SpotLight}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{inst:{handler:function(e){Object.assign(e,{distance:parseFloat(this.distance),decay:parseFloat(this.decay),angle:parseFloat(this.angle),penumbra:parseFloat(this.penumbra)}),this.target&&e.target.position.copy(a(this.target)),this.vglObject3d.inst&&this.vglObject3d.inst.add(e.target)},immediate:!0},"vglObject3d.inst":function(e){e.add(this.inst.target)},distance:function(e){this.inst.distance=parseFloat(e)},decay:function(e){this.inst.decay=parseFloat(e)},angle:function(e){this.inst.angle=parseFloat(e)},penumbra:function(e){this.inst.penumbra=parseFloat(e)},target:function(e){this.inst.target.position.copy(a(e))}}},e.VglTexture={inject:['vglNamespace'],props:{/** The path or URL to the file. This can also be a Data URI. */src:g,name:g,mapping:{type:g,default:'uv'},wrapS:{type:g,default:'clamp-to-edge'},wrapT:{type:g,default:'clamp-to-edge'},magFilter:{type:g,default:'linear'},minFilter:{type:g,default:'linear-mip-map-linear'},anisotropy:{type:u,default:1},format:g,type:{type:g,default:'unsigned-byte'},offset:v,repeat:v,rotation:{type:u,default:0},center:v,premultiplyAlpha:y,unpackAlignment:{type:u,default:4},encoding:{type:g,default:'linear'}},computed:{inst:function(){var e=this;return new t.TextureLoader().load(this.src,function(t){e.format&&Object.assign(t,{format:k[e.format]}),e.vglNamespace.update()})}},watch:{inst:{handler:function(e){this.vglNamespace.textures[this.name]=e,Object.assign(e,{mapping:B[this.mapping],wrapS:T[this.wrapS],wrapT:T[this.wrapT],magFilter:O[this.magFilter],minFilter:O[this.minFilter],anisotropy:parseInt(this.anisotropy,10),type:F[this.type],rotation:parseFloat(this.rotation),premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:parseInt(this.unpackAlignment,10),encoding:E[this.encoding]}),this.offset&&e.offset.copy(i(this.offset)),this.repeat&&e.repeat.copy(i(this.repeat)),this.center&&e.center.copy(i(this.center))},immediate:!0},name:function(e,t){var a=this.vglNamespace.textures,i=this.inst;a[t]===i&&delete a[t],a[e]=i},mapping:function(e){this.inst.mapping=B[e]},wrapS:function(e){this.inst.wrapS=T[e]},wrapT:function(e){this.inst.wrapT=T[e]},magFilter:function(e){this.inst.magFilter=O[e]},minFilter:function(e){this.inst.minFilter=O[e]},anisotropy:function(e){this.inst.anisotropy=parseInt(e,10)},format:function(e){this.inst.format=k[e]},type:function(e){this.inst.type=F[e]},offset:function(e){this.inst.offset.copy(i(e))},repeat:function(e){this.inst.repeat.copy(i(e))},rotation:function(e){this.inst.rotation=parseFloat(e)},center:function(e){this.inst.center.copy(i(e))},premultiplyAlpha:function(e){this.inst.premultiplyAlpha=e},unpackAlignment:function(e){this.inst.unpackAlignment=parseInt(e,10)},encoding:function(e){this.inst.encoding=E[e]}},beforeDestroy:function(){var e=this.vglNamespace.textures,t=this.inst,a=this.name;e[a]===t&&delete e[a]},beforeUpdate:function(){this.inst.needsUpdate=!0,this.vglNamespace.update()},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},e.VglExtrudeGeometry=H,e.VglTextGeometry={mixins:[H],props:{/** The text that needs to be shown. */text:{type:g,default:''},/** The path or URL to the facetype json file. This can also be a Data URI. */font:g,/** Size of the text. */size:{type:u,default:100},/** Thickness to extrude text. */height:{type:u,default:50},/** Number of points on the curves. */curveSegments:{type:u,default:12},/** Turn on bevel. */bevelEnabled:y,/** How deep into text bevel goes. */bevelThickness:{type:u,default:10},/** How far from text outline is bevel. */bevelSize:{type:u,default:8},/** Number of bevel segments. */bevelSegments:{type:u,default:3}},data:function(){return{f:void 0}},computed:{inst:function(){return this.f===void 0?new t.BufferGeometry:new t.TextBufferGeometry(this.text,{font:$[this.f],size:parseFloat(this.size),height:parseFloat(this.height),curveSegments:parseInt(this.curveSegments,10),bevelEnabled:this.bevelEnabled,bevelThickness:parseFloat(this.bevelThickness),bevelSize:parseFloat(this.bevelSize),bevelSegments:parseInt(this.bevelSegments,10)})}},watch:{font:{handler:function(e){var a=this;$[e]?$[e].isFont?this.f=e:$[e].push(function(){e===a.font&&(a.f=e)}):($[e]=[function(){e===a.font&&(a.f=e),a.vglNamespace.update()}],new t.FontLoader().load(e,function(t){var a=$[e];$[e]=t,a.forEach(function(e){e()})}))},immediate:!0}}},e.VglSpriteMaterial={mixins:[j],props:{/** CSS style color of the material. */color:{type:g,default:'#fff'},/** The texture map of the material. */map:g},computed:{inst:function(){return new t.SpriteMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},e.VglGridHelper={mixins:[w],props:{/** The size of the grid. */size:{type:u,default:10},/** The number of divisions across the grid. */divisions:{type:u,default:10},/** The color of the centerline. */colorCenterLine:{type:g,default:'#444444'},/** The color of the lines of the grid. */colorGrid:{type:g,default:'#888888'}},computed:{inst:function(){return new t.GridHelper(parseFloat(this.size),parseInt(this.divisions,10),this.colorCenterLine,this.colorGrid)}}},e.VglShadowMaterial={mixins:[A],computed:{inst:function(){return new t.ShadowMaterial}}},e.VglCameraHelper={mixins:[w],props:{/** Name of the camera to visualize. */camera:g},methods:{setHelper:function(){if(!this.inst.children.length)this.inst.add(new t.CameraHelper(this.vglNamespace.cameras[this.camera]));else{var e=c(this.inst.children,1),a=e[0];a.camera=this.vglNamespace.cameras[this.camera],a.camera.updateProjectionMatrix(),a.update()}}},created:function(){this.vglNamespace.beforeRender.push(this.setHelper)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setHelper;e.splice(e.indexOf(t),1)}},e.VglDirectionalLightHelper={mixins:[w],props:{/** If this is not the set the helper will take the color of the light. */color:{type:g},/** Dimensions of the plane. */size:{type:u,default:1},/** Name of the directional light being visualized. */light:g},data:function(){return{s:void 0}},methods:{setHelper:function(){var e=this.vglNamespace.object3ds[this.light];if(this.inst.children.length){var a=c(this.inst.children,1),i=a[0];if(i.light===e&&this.s===this.size)return i.color=this.color,void i.update();this.inst.remove(i)}this.s=this.size,this.inst.add(new t.DirectionalLightHelper(e,parseFloat(this.size),this.color))}},created:function(){this.vglNamespace.beforeRender.push(this.setHelper)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setHelper;e.splice(e.indexOf(t),1)}},e.VglPolarGridHelper={mixins:[w],props:{/** The radius of the polar grid. This can be any positive number. */radius:{type:u,default:10},/** The number of radial lines. This can be any positive integer. */radials:{type:u,default:16},/** The number of circles. This can be any positive integer. */circles:{type:u,default:8},/**
       * The number of line segments used for each circle.
       * This can be any positive integer that is 3 or greater.
       */divisions:{type:u,default:64},/** The first color used for grid elements. */color1:{type:g,default:'#444444'},/** The second color used for grid elements. */color2:{type:g,default:'#888888'}},computed:{inst:function(){return new t.PolarGridHelper(parseFloat(this.radius),parseInt(this.radials,10),parseInt(this.circles,10),parseInt(this.divisions,10),this.color1,this.color2)}}},e.VglMeshBasicMaterial={mixins:[j],props:{/** CSS style color of the material. */color:{type:g,default:'#fff'},/** The color map of the material. */map:g},computed:{inst:function(){return new t.MeshBasicMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},e.VglMeshDepthMaterial={mixins:[j],props:{/** Whether the material is affected by fog. */fog:y,/** The color map of the material. */map:g},computed:{inst:function(){return new t.MeshDepthMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{fog:this.fog})},immediate:!0},fog:function(e){this.inst.fog=e}}},e.VglMeshLambertMaterial={mixins:[j],props:{/** CSS style color of the material. */color:{type:g,default:'#fff'},/** The color map of the material. */map:g},computed:{inst:function(){return new t.MeshLambertMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},e.VglLineDashedMaterial={mixins:[A],props:{/** CSS style color of the material. */color:{type:g,default:'#fff'},/** A boolean whether the material is affected by lights. */lights:y,/** The line thickness. */linewidth:{type:u,default:1},/** The size of the dash. This is both the gap with the stroke. */dashSize:{type:u,default:3},/** The size of the gap. */gapSize:{type:u,default:1}},computed:{inst:function(){return new t.LineDashedMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{lights:this.lights,dashSize:parseFloat(this.dashSize),gapSize:parseFloat(this.gapSize),linewidth:parseFloat(this.linewidth)}),e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)},lights:function(e){this.inst.lights=e},linewidth:function(e){this.inst.linewidth=parseFloat(e)},dashSize:function(e){this.inst.dashSize=parseFloat(e)},gapSize:function(e){this.inst.gapSize=parseFloat(e)}}},e.VglMeshNormalMaterial={mixins:[A],props:{/** Whether the material is affected by fog. */fog:y},computed:{inst:function(){return new t.MeshNormalMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{fog:this.fog})},immediate:!0},fog:function(e){this.inst.fog=e}}},e.VglMeshPhongMaterial=_,e.VglMeshToonMaterial={mixins:[_],computed:{inst:function(){return new t.MeshToonMaterial}}},e.VglMeshPhysicalMaterial={mixins:[D],props:{/** ClearCoat level, from 0.0 to 1.0. */clearCoat:{type:u,default:0},/** How rough the clearCoat appears, from 0.0 to 1.0. */clearCoatRoughness:{type:u,default:0},/** Degree of reflectivity, from 0.0 to 1.0. */reflectivity:{type:u,default:.5}},computed:{inst:function(){return new t.MeshPhysicalMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{clearCoat:parseFloat(this.clearCoat),clearCoatRoughness:parseFloat(this.clearCoatRoughness),reflectivity:parseFloat(this.reflectivity)})},immediate:!0},clearCoat:function(e){this.inst.clearCoat=parseFloat(e)},clearCoatRoughness:function(e){this.inst.clearCoatRoughness=parseFloat(e)},reflectivity:function(e){this.inst.reflectivity=parseFloat(e)}}},e.VglLatheGeometry={mixins:[P],props:{/** Array of Vector2s. The x-coordinate of each point must be greater than zero. */points:{type:x,required:!0},/** The number of circumference segments to generate. */segments:{type:u,default:12},/** The starting angle in radians. */phiStart:{type:u,default:0},/** The radian (0 to 2PI) range of the lathed section. */phiLength:{type:u,default:2*l}},computed:{inst:function(){return new t.LatheBufferGeometry(s(this.points),parseInt(this.segments,10),parseFloat(this.phiStart),parseFloat(this.phiLength))}}},e.VglSpotLightHelper={mixins:[w],props:{/** If this is not the set the helper will take the color of the light. */color:{type:g},/** Name of the spot light being visualized. */light:g},methods:{setHelper:function(){if(this.inst.children.length){var e=c(this.inst.children,1),a=e[0];a.light===this.vglNamespace.object3ds[this.light]?(a.color=this.color,a.update()):(this.inst.remove(a),a.dispose(),this.inst.add(new t.SpotLightHelper(this.vglNamespace.object3ds[this.light],this.color)))}else this.inst.add(new t.SpotLightHelper(this.vglNamespace.object3ds[this.light],this.color))}},created:function(){this.vglNamespace.beforeRender.push(this.setHelper)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setHelper,a=this.inst.children;e.splice(e.indexOf(t),1),a.length&&a[0].dispose()}},e.VglHemisphereLight={mixins:[M],props:{groundColor:{type:g,default:'#fff'}},computed:{inst:function(){return new t.HemisphereLight}},watch:{inst:{handler:function(e){e.groundColor.setStyle(this.groundColor)},immediate:!0},groundColor:function(e){this.inst.groundColor.setStyle(e)}}},Object.defineProperty(e,'__esModule',{value:!0})});
