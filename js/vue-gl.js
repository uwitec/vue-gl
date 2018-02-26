(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],b):b(a.VueGL={},a.THREE)})(this,function(a,b){'use strict';/**
 * Returns a parsed vector3 object.
 */function c(a){return a.isVector3?a:new(Function.prototype.bind.apply(b.Vector3,[null].concat(j(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})))))}/**
 * Returns a parsed vector2 object.
 */function d(a){return a.isVector2?a:new(Function.prototype.bind.apply(b.Vector2,[null].concat(j(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})))))}/**
 * Returns a parsed euler object.
 */function e(a){return a.isEuler?a:new(Function.prototype.bind.apply(b.Euler,[null].concat(j(a.trim().split(/\s+/).map(function(a,b){return 3===b?a:parseFloat(a)})))))}/**
 * Returns a parsed spherical object.
 */function f(a){return a.isSpherical?a:new(Function.prototype.bind.apply(b.Spherical,[null].concat(j(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})))))().makeSafe()}var g=Math.PI,h={};h.typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},h.jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),h.asyncIterator=function(a){if('function'==typeof Symbol){if(Symbol.asyncIterator){var b=a[Symbol.asyncIterator];if(null!=b)return b.call(a)}if(Symbol.iterator)return a[Symbol.iterator]()}throw new TypeError('Object is not async iterable')},h.asyncGenerator=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c('next',a)},function(a){c('throw',a)}):d(g.done?'return':'normal',g.value)}catch(a){d('throw',a)}}function d(a,b){'return'===a?e.resolve({value:b,done:!0}):'throw'===a?e.reject(b):e.resolve({value:b,done:!1});e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},'function'!=typeof b.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke('next',a)},b.prototype.throw=function(a){return this._invoke('throw',a)},b.prototype.return=function(a){return this._invoke('return',a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),h.asyncGeneratorDelegate=function(a,b){function c(c,d){return e=!0,d=new Promise(function(b){b(a[c](d))}),{done:!1,value:b(d)}}var d={},e=!1;return'function'==typeof Symbol&&Symbol.iterator&&(d[Symbol.iterator]=function(){return this}),d.next=function(a){return e?(e=!1,a):c('next',a)},'function'==typeof a.throw&&(d.throw=function(a){if(e)throw e=!1,a;return c('throw',a)}),'function'==typeof a.return&&(d.return=function(a){return c('return',a)}),d},h.asyncToGenerator=function(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}},h.classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},h.createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h.defineEnumerableProperties=function(a,b){for(var c in b){var d=b[c];d.configurable=d.enumerable=!0,'value'in d&&(d.writable=!0),Object.defineProperty(a,c,d)}return a},h.defaults=function(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f&&f.configurable&&a[e]===void 0&&Object.defineProperty(a,e,f)}return a},h.defineProperty=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},h.extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},h.get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if('value'in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},h.inherits=function(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},h.instanceof=function(a,b){return null!=b&&'undefined'!=typeof Symbol&&b[Symbol.hasInstance]?b[Symbol.hasInstance](a):a instanceof b},h.interopRequireDefault=function(a){return a&&a.__esModule?a:{default:a}},h.interopRequireWildcard=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b},h.newArrowCheck=function(a,b){if(a!==b)throw new TypeError('Cannot instantiate an arrow function')},h.objectDestructuringEmpty=function(a){if(null==a)throw new TypeError('Cannot destructure undefined')},h.objectWithoutProperties=function(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c},h.possibleConstructorReturn=function(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a},h.selfGlobal='undefined'==typeof global?self:global,h.set=function a(b,c,d,e){var f=Object.getOwnPropertyDescriptor(b,c);if(f===void 0){var g=Object.getPrototypeOf(b);null!==g&&a(g,c,d,e)}else if('value'in f&&f.writable)f.value=d;else{var h=f.set;h!==void 0&&h.call(e,d)}return d},h.slicedToArray=function(){function a(a,b){var c,d=[],e=!0,f=!1;try{for(var g,h=a[Symbol.iterator]();!(e=(g=h.next()).done)&&(d.push(g.value),!(b&&d.length===b));e=!0);}catch(a){f=!0,c=a}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw c}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),h.slicedToArrayLoose=function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){for(var c,d=[],e=a[Symbol.iterator]();!(c=e.next()).done&&(d.push(c.value),!(b&&d.length===b)););return d}throw new TypeError('Invalid attempt to destructure non-iterable instance')},h.taggedTemplateLiteral=function(a,b){return Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))},h.taggedTemplateLiteralLoose=function(a,b){return a.raw=b,a},h.temporalRef=function(a,b,c){if(a===c)throw new ReferenceError(b+' is not defined - temporal dead zone');else return a},h.temporalUndefined={},h.toArray=function(a){return Array.isArray(a)?a:Array.from(a)},h.toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},h;var i={inject:{vglNamespace:{default:function(){var a,b=this,c=[],d=[];return{renderers:c,cameras:Object.create(null),scenes:Object.create(null),update:function(){a||(b.$nextTick(function(){d.forEach(function(a){a()}),c.forEach(function(a){a.render()}),a=!1}),a=!0)},beforeRender:d,geometries:Object.create(null),materials:Object.create(null),textures:Object.create(null)}}}},provide:function(){return{vglNamespace:Object.create(this.vglNamespace,{geometries:{value:Object.create(this.vglNamespace.geometries)},materials:{value:Object.create(this.vglNamespace.materials)},textures:{value:Object.create(this.vglNamespace.textures)}})}},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},j=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},k=[String,Number],l=String,m=[String,b.Vector3],n=[String,b.Spherical],o=Boolean,p=[String,b.Euler],q=[String,b.Vector2],r={props:{position:m,rotation:p,scale:m,castShadow:o,receiveShadow:o,name:l},computed:{inst:function(){return new b.Object3D}},inject:{vglObject3d:{default:{}},vglNamespace:'vglNamespace'},provide:function(){var a=this;return{vglObject3d:{get inst(){return a.inst}}}},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst),this.vglNamespace.update()},watch:{inst:{handler:function(a,b){b&&b.parent&&b.parent.remove(b),this.vglObject3d.inst&&this.vglObject3d.inst.add(a),this.position&&a.position.copy(c(this.position)),this.rotation&&a.rotation.copy(e(this.rotation)),this.scale&&a.scale.copy(c(this.scale)),Object.assign(a,{castShadow:this.castShadow,receiveShadow:this.receiveShadow})},immediate:!0},"vglObject3d.inst":function(a){a.add(this.inst)},position:function(a){this.inst.position.copy(c(a))},rotation:function(a){this.inst.rotation.copy(e(a))},scale:function(a){this.inst.scale.copy(c(a))},castShadow:function(a){this.inst.castShadow=a},receiveShadow:function(a){this.inst.receiveShadow=a}},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},s={mixins:[r],props:{orbitTarget:m,orbitPosition:n},computed:{inst:function(){return new b.Camera}},watch:{inst:{handler:function(a){if(this.vglNamespace.cameras[this.name]=a,this.orbitPosition||this.orbitTarget){var d;this.orbitTarget&&(d=c(this.orbitTarget)),this.orbitPosition&&(a.position.setFromSpherical(f(this.orbitPosition)),d&&a.position.add(d)),a.lookAt(d||new b.Vector3)}},immediate:!0},name:function(a,b){var c=this.vglNamespace.cameras,d=this.inst;c[b]===d&&delete c[b],c[a]=d},orbitTarget:function(a){var b=c(a);this.orbitPosition&&this.inst.position.setFromSpherical(f(this.orbitPosition)).add(b),this.inst.lookAt(b)},orbitPosition:function(a){if(this.inst.position.setFromSpherical(f(a)),this.orbitTarget){var d=c(this.orbitTarget);this.inst.position.add(d),this.inst.lookAt(d)}else this.inst.lookAt(new b.Vector3)}},beforeDestroy:function(){var a=this.vglNamespace.cameras,b=this.inst;a[this.name]===b&&delete a[this.name]}},t={mixins:[r],props:{color:{type:l,default:'#fff'},intensity:{type:k,default:1}},computed:{inst:function(){return new b.Light}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{intensity:parseFloat(this.intensity)})},immediate:!0},color:function(a){this.inst.color.setStyle(a)},intensity:function(a){this.inst.intensity=parseFloat(a)}}},u={inject:['vglNamespace'],props:{name:l},computed:{inst:function(){return new b.Material}},watch:{inst:{handler:function(a){this.vglNamespace.materials[this.name]=a},immediate:!0},name:function(a,b){var c=this.vglNamespace.materials,d=this.inst;c[b]===d&&delete c[b],c[a]=d}},beforeDestroy:function(){var a=this.vglNamespace.materials,b=this.inst;a[this.name]===b&&delete a[this.name]},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},v={inject:['vglNamespace'],props:{name:l},computed:{inst:function(){return new b.BufferGeometry}},watch:{inst:{handler:function(a){this.vglNamespace.geometries[this.name]=a},immediate:!0},name:function(a,b){var c=this.vglNamespace.geometries,d=this.inst;c[b]===d&&delete c[b],c[a]=d}},beforeDestroy:function(){var a=this.vglNamespace.geometries,b=this.inst;a[this.name]===b&&delete a[this.name]},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},w={mixins:[r],props:{material:l},methods:{setMaterial:function(){var a=this.vglNamespace.materials,b=this.material,c=this.inst;a[b]&&(c.material=a[b])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setMaterial)},beforeDestroy:function(){var a=this.vglNamespace.beforeRender,b=this.setMaterial;a.splice(a.indexOf(b),1)}},x={mixins:[w],props:{geometry:l},methods:{setGeometry:function(){var a=this.vglNamespace.geometries,b=this.geometry,c=this.inst;a[b]&&(c.geometry=a[b])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setGeometry)},beforeDestroy:function(){var a=this.vglNamespace.beforeRender,b=this.setGeometry;a.splice(a.indexOf(b),1)}},y={mixins:[u],props:{map:l},methods:{setMap:function(){var a=this.vglNamespace.textures,b=this.inst,c=this.map;c in a&&(b.map=a[c])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setMap)},beforeDestroy:function(){var a=this.vglNamespace.beforeRender,b=this.setMap;a.splice(a.indexOf(b),1)}},z={mixins:[v],props:{radius:{type:k,default:1},detail:{type:k,default:0}}},A={mixins:[x],computed:{inst:function(){return new b.Line}}},B={mixins:[v],props:{radiusTop:{type:k,default:1},radiusBottom:{type:k,default:1},height:{type:k,default:1},radialSegments:{type:k,default:8},heightSegments:{type:k,default:1},openEnded:Boolean,thetaStart:{type:k,default:0},thetaLength:{type:k,default:2*g}},computed:{inst:function(){return new b.CylinderBufferGeometry(parseFloat(this.radiusTop),parseFloat(this.radiusBottom),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},C={uv:b.UVMapping,"cube-reflection":b.CubeReflectionMapping,"cube-refraction":b.CubeRefractionMapping,"equirectangular-reflection":b.EquirectangularReflectionMapping,"equirectangular-refraction":b.EquirectangularRefractionMapping,"spherical-reflection":b.SphericalReflectionMapping,"cube-uv-reflection":b.CubeUVReflectionMapping,"cube-uv-refraction":b.CubeUVRefractionMapping},D={repeat:b.RepeatWrapping,"clamp-to-edge":b.ClampToEdgeWrapping,"mirrored-repeat":b.MirroredRepeatWrapping},E={nearest:b.NearestFilter,"nearest-mip-map-nearest":b.NearestMipMapNearestFilter,"nearest-mip-map-linear":b.NearestMipMapLinearFilter,linear:b.LinearFilter,"linear-mip-map-nearest":b.LinearMipMapNearestFilter,"linear-mip-map-linear":b.LinearMipMapLinearFilter},F={alpha:b.AlphaFormat,rgb:b.RGBFormat,rgba:b.RGBAFormat,luminance:b.LuminanceFormat,"luminance-alpha":b.LuminanceAlphaFormat,rgbe:b.RGBEFormat,depth:b.DepthFormat,"depth-stencil":b.DepthStencilFormat},G={"unsigned-byte":b.UnsignedByteType,byte:b.ByteType,short:b.ShortType,"unsigned-short":b.UnsignedShortType,int:b.IntType,"unsigned-int":b.UnsignedIntType,float:b.FloatType,"half-float":b.HalfFloatType,"unsigned-short-4444":b.UnsignedShort4444Type,"unsigned-short-5551":b.UnsignedShort5551Type,"unsigned-short-565":b.UnsignedShort565Type,"unsigned-int-248":b.UnsignedInt248Type},H={linear:b.LinearEncoding,"s-rgb":b.sRGBEncoding,gamma:b.GammaEncoding,rgbe:b.RGBEEncoding,"log-luv":b.LogLuvEncoding,rgbm7:b.RGBM7Encoding,rgbm16:b.RGBM16Encoding,rgbde:b.RGBDEncoding,"basic-depth":b.BasicDepthPacking,"rgba-depth":b.RGBADepthPacking},I={mixins:[v],computed:{inst:function(){return new b.ExtrudeBufferGeometry([],{})}}},J=Object.create(null);a.VglNamespace=i,a.VglObject3d=r,a.VglScene={mixins:[r],computed:{inst:function(){return new b.Scene}},watch:{inst:{handler:function(a){this.vglNamespace.scenes[this.name]=a},immediate:!0},name:function(a,b){var c=this.vglNamespace.scenes,d=this.inst;c[b]===d&&delete c[b],c[a]=d}},beforeDestroy:function(){var a=this.vglNamespace.scenes,b=this.inst;a[this.name]===b&&delete a[this.name]}},a.VglCamera=s,a.VglRenderer={mixins:[i],props:{precision:l,alpha:o,disablePremultipliedAlpha:o,antialias:o,disableStencil:o,powerPreference:l,preserveDrawingBuffer:o,disableDepth:o,logarithmicDepthBuffer:o,camera:l,scene:l,shadowMapEnabled:o},computed:{inst:function(){var a=new b.WebGLRenderer({precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer,powerPreference:this.powerPreference});return a.shadowMap.enabled=this.shadowMapEnabled,a}},methods:{render:function(){var a=this.vglNamespace.scenes[this.scene],b=this.vglNamespace.cameras[this.camera];if(a&&b){if(b.isPerspectiveCamera){var c=this.$el.clientWidth/this.$el.clientHeight;b.aspect!==c&&(b.aspect=c,b.updateProjectionMatrix())}else if(b.isOrthographicCamera){var d=this.$el.clientWidth/2,e=this.$el.clientHeight/2;(b.right!==d||b.top!==e)&&(b.left=-d,b.right=d,b.top=e,b.bottom=-e,b.updateProjectionMatrix())}else throw new TypeError('Unknown camera type.');this.inst.render(a,b)}}},watch:{inst:function(a,b){this.$el&&(a.setSize(this.$el.clientWidth,this.$el.clientHeight),this.$el.replaceChild(a.domElement,b.domElement),this.vglNamespace.update()),b.dispose()}},created:function(){this.vglNamespace.renderers.push(this)},mounted:function(){this.inst.setSize(this.$el.clientWidth,this.$el.clientHeight),this.$el.insertBefore(this.inst.domElement,this.$el.firstChild),this.vglNamespace.update()},beforeDestroy:function(){this.vglNamespace.renderers.splice(this.vglNamespace.renderers.indexOf(this),1),this.inst.dispose()},render:function(a){var b=this;return a('div',[a('iframe',{style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(a){a.target.contentWindow.addEventListener('resize',function(){b.inst.setSize(b.$el.clientWidth,b.$el.clientHeight),b.vglNamespace.update()},!1)}}},this.$slots.default)])}},a.VglPerspectiveCamera={mixins:[s],props:{zoom:{type:k,default:1},near:{type:k,default:.1},far:{type:k,default:2e3},fov:{type:k,default:50}},computed:{inst:function(){return new b.PerspectiveCamera}},watch:{inst:{handler:function(a){Object.assign(a,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far),fov:parseFloat(this.fov)})},immediate:!0},zoom:function(a){this.inst.zoom=parseFloat(a)},near:function(a){this.inst.near=parseFloat(a)},far:function(a){this.inst.far=parseFloat(a)},fov:function(a){this.inst.fov=parseFloat(a)}}},a.VglGroup={mixins:[r],computed:{inst:function(){return new b.Group}}},a.VglLight=t,a.VglDirectionalLight={mixins:[t],computed:{inst:function(){return new b.DirectionalLight}}},a.VglAmbientLight={mixins:[t],computed:{inst:function(){return new b.AmbientLight}}},a.VglMaterial=u,a.VglPointsMaterial={mixins:[u],props:{color:{type:l,default:'#fff'},size:{type:k,default:1},disableSizeAttenuation:o},computed:{inst:function(){return new b.PointsMaterial}},watch:{inst:{handler:function(a){Object.assign(a,{size:parseFloat(this.size),sizeAttenuation:!this.disableSizeAttenuation}),a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a)},size:function(a){this.inst.size=parseFloat(a)},disableSizeAttenuation:function(a){this.inst.sizeAttenuation=!a}}},a.VglGeometry=v,a.VglSphereGeometry={mixins:[v],props:{radius:{type:k,default:1},widthSegments:{type:k,default:8},heightSegments:{type:k,default:6},phiStart:{type:k,default:0},phiLength:{type:k,default:2*g},thetaStart:{type:k,default:0},thetaLength:{type:k,default:g}},computed:{inst:function(){return new b.SphereBufferGeometry(parseFloat(this.radius),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseFloat(this.phiStart),parseFloat(this.phiLength),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglMeshStandardMaterial={mixins:[y],props:{color:{type:l,default:'#fff'}},computed:{inst:function(){return new b.MeshStandardMaterial}},watch:{inst:{handler:function(a){a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a)}}},a.VglMesh={mixins:[x],computed:{inst:function(){return new b.Mesh}}},a.VglPoints={mixins:[x],computed:{inst:function(){return new b.Points}}},a.VglLineBasicMaterial={mixins:[u],props:{color:{type:l,default:'#fff'},lights:o,linewidth:{type:k,default:1},linecap:{type:l,default:'round'},linejoin:{type:l,default:'round'}},computed:{inst:function(){return new b.LineBasicMaterial}},watch:{inst:{handler:function(a){Object.assign(a,{lights:this.lights,linecap:this.linecap,linejoin:this.linejoin,linewidth:parseFloat(this.linewidth)}),a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=parseFloat(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},a.VglLine=A,a.VglSprite={mixins:[w],computed:{inst:function(){return new b.Sprite}}},a.VglBoxGeometry={mixins:[v],props:{width:{type:k,default:1},height:{type:k,default:1},depth:{type:k,default:1},widthSegments:{type:k,default:1},heightSegments:{type:k,default:1},depthSegments:{type:k,default:1}},computed:{inst:function(){return new b.BoxBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseFloat(this.depth),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseInt(this.depthSegments,10))}}},a.VglCircleGeometry={mixins:[v],props:{radius:{type:k,default:1},segments:{type:k,default:8},thetaStart:{type:k,default:0},thetaLength:{type:k,default:2*g}},computed:{inst:function(){return new b.CircleBufferGeometry(parseFloat(this.radius),parseInt(this.segments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglLineSegments={mixins:[A],computed:{inst:function(){return new b.LineSegments}}},a.VglLineLoop={mixins:[A],computed:{inst:function(){return new b.LineLoop}}},a.VglConeGeometry={mixins:[B],props:{radius:{type:k,default:1}},computed:{inst:function(){return new b.ConeBufferGeometry(parseFloat(this.radius),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglAxesHelper={mixins:[r],props:{size:{type:k,default:1}},computed:{inst:function(){return new b.AxesHelper(parseFloat(this.size))}}},a.VglOrthographicCamera={mixins:[s],props:{zoom:{type:k,default:1},near:{type:k,default:.1},far:{type:k,default:2e3}},computed:{inst:function(){return new b.OrthographicCamera}},watch:{inst:{handler:function(a){Object.assign(a,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far)})},immediate:!0},zoom:function(a){this.inst.zoom=parseFloat(a)},near:function(a){this.inst.near=parseFloat(a)},far:function(a){this.inst.far=parseFloat(a)}}},a.VglCylinderGeometry=B,a.VglPlaneGeometry={mixins:[v],props:{width:{type:k,default:1},height:{type:k,default:1},widthSegments:{type:k,default:1},heightSegments:{type:k,default:1}},computed:{inst:function(){return new b.PlaneBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10))}}},a.VglDodecahedronGeometry={mixins:[z],computed:{inst:function(){return new b.DodecahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglIcosahedronGeometry={mixins:[z],computed:{inst:function(){return new b.IcosahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglOctahedronGeometry={mixins:[z],computed:{inst:function(){return new b.OctahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglRingGeometry={mixins:[v],props:{innerRadius:{type:k,default:.5},outerRadius:{type:k,default:1},thetaSegments:{type:k,default:8},phiSegments:{type:k,default:1},thetaStart:{type:k,default:0},thetaLength:{type:k,default:2*g}},computed:{inst:function(){return new b.RingBufferGeometry(parseFloat(this.innerRadius),parseFloat(this.outerRadius),parseInt(this.thetaSegments,10),parseInt(this.phiSegments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglTetrahedronGeometry={mixins:[z],computed:{inst:function(){return new b.TetrahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglTorusGeometry={mixins:[v],props:{radius:{type:k,default:1},tube:{type:k,default:.4},radialSegments:{type:k,default:8},tubularSegments:{type:k,default:6},arc:{type:k,default:2*g}},computed:{inst:function(){return new b.TorusBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.radialSegments,10),parseInt(this.tubularSegments,10),parseFloat(this.arc))}}},a.VglTorusKnotGeometry={mixins:[v],props:{radius:{type:k,default:1},tube:{type:k,default:.4},radialSegments:{type:k,default:8},tubularSegments:{type:k,default:64},p:{type:k,default:2},q:{type:k,default:3}},computed:{inst:function(){return new b.TorusKnotBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.tubularSegments,10),parseInt(this.radialSegments,10),parseInt(this.p,10),parseInt(this.q,10))}}},a.VglArrowHelper={mixins:[r],props:{dir:m,length:{type:k,default:1},color:{type:l,default:'#ff0'},headLength:k,headWidth:k},computed:{inst:function(){return new b.ArrowHelper(new b.Vector3(0,1,0),new b.Vector3())},len:function(){return[parseFloat(this.length),this.headLength===void 0?void 0:parseFloat(this.headLength),this.headWidth===void 0?void 0:parseFloat(this.headWidth)]}},watch:{inst:{handler:function(a){this.dir&&a.setDirection(c(this.dir).normalize()),a.setLength.apply(a,j(this.len)),a.setColor(new b.Color(this.color))},immediate:!0},dir:function(a){this.inst.setDirection(c(a).normalize())},len:function(a){var b;(b=this.inst).setLength.apply(b,j(a))},color:function(a){this.inst.setColor(new b.Color(a))}}},a.VglBoxHelper={mixins:[r],props:{color:{type:l,default:'#ff0'}},computed:{inst:function(){return new b.BoxHelper(void 0,this.color)}},methods:{setFromObject:function(){this.inst.setFromObject(this.vglObject3d.inst)}},created:function(){this.vglNamespace.beforeRender.push(this.setFromObject)},beforeDestroy:function(){var a=this.vglNamespace.beforeRender,b=this.setFromObject;a.splice(a.indexOf(b),1)}},a.VglPointLight={mixins:[t],props:{distance:{type:k,default:0},decay:{type:k,default:1}},computed:{inst:function(){return new b.PointLight}},watch:{inst:{handler:function(a){Object.assign(a,{distance:parseFloat(this.distance),decay:parseFloat(this.decay)})},immediate:!0},distance:function(a){this.inst.distance=parseFloat(a)},decay:function(a){this.inst.decay=parseFloat(a)}}},a.VglSpotLight={mixins:[t],props:{distance:{type:k,default:0},decay:{type:k,default:1},angle:{type:k,default:g/3},penumbra:{type:k,default:0},target:m},computed:{inst:function(){return new b.SpotLight}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{inst:{handler:function(a){Object.assign(a,{distance:parseFloat(this.distance),decay:parseFloat(this.decay),angle:parseFloat(this.angle),penumbra:parseFloat(this.penumbra)}),this.target&&a.target.position.copy(c(this.target)),this.vglObject3d.inst&&this.vglObject3d.inst.add(a.target)},immediate:!0},"vglObject3d.inst":function(a){a.add(this.inst.target)},distance:function(a){this.inst.distance=parseFloat(a)},decay:function(a){this.inst.decay=parseFloat(a)},angle:function(a){this.inst.angle=parseFloat(a)},penumbra:function(a){this.inst.penumbra=parseFloat(a)},target:function(a){this.inst.target.position.copy(c(a))}}},a.VglTexture={inject:['vglNamespace'],props:{src:l,name:l,mapping:{type:l,default:'uv'},wrapS:{type:l,default:'clamp-to-edge'},wrapT:{type:l,default:'clamp-to-edge'},magFilter:{type:l,default:'linear'},minFilter:{type:l,default:'linear-mip-map-linear'},anisotropy:{type:k,default:1},format:l,type:{type:l,default:'unsigned-byte'},offset:q,repeat:q,rotation:{type:k,default:0},center:q,premultiplyAlpha:o,unpackAlignment:{type:k,default:4},encoding:{type:l,default:'linear'}},computed:{inst:function(){var a=this;return new b.TextureLoader().load(this.src,function(b){a.format&&Object.assign(b,{format:F[a.format]}),a.vglNamespace.update()})}},watch:{inst:{handler:function(a){this.vglNamespace.textures[this.name]=a,Object.assign(a,{mapping:C[this.mapping],wrapS:D[this.wrapS],wrapT:D[this.wrapT],magFilter:E[this.magFilter],minFilter:E[this.minFilter],anisotropy:parseInt(this.anisotropy,10),type:G[this.type],rotation:parseFloat(this.rotation),premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:parseInt(this.unpackAlignment,10),encoding:H[this.encoding]}),this.offset&&a.offset.copy(d(this.offset)),this.repeat&&a.repeat.copy(d(this.repeat)),this.center&&a.center.copy(d(this.center))},immediate:!0},name:function(a,b){var c=this.vglNamespace.textures,d=this.inst;c[b]===d&&delete c[b],c[a]=d},mapping:function(a){this.inst.mapping=C[a]},wrapS:function(a){this.inst.wrapS=D[a]},wrapT:function(a){this.inst.wrapT=D[a]},magFilter:function(a){this.inst.magFilter=E[a]},minFilter:function(a){this.inst.minFilter=E[a]},anisotropy:function(a){this.inst.anisotropy=parseInt(a,10)},format:function(a){this.inst.format=F[a]},type:function(a){this.inst.type=G[a]},offset:function(a){this.inst.offset.copy(d(a))},repeat:function(a){this.inst.repeat.copy(d(a))},rotation:function(a){this.inst.rotation=parseFloat(a)},center:function(a){this.inst.center.copy(d(a))},premultiplyAlpha:function(a){this.inst.premultiplyAlpha=a},unpackAlignment:function(a){this.inst.unpackAlignment=parseInt(a,10)},encoding:function(a){this.inst.encoding=H[a]}},beforeDestroy:function(){var a=this.vglNamespace.textures,b=this.inst,c=this.name;a[c]===b&&delete a[c]},beforeUpdate:function(){this.vglNamespace.update()},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},a.VglExtrudeGeometry=I,a.VglTextGeometry={mixins:[I],props:{font:l,size:{type:k,default:100},height:{type:k,default:50},curveSegments:{type:k,default:12},bevelEnabled:o,bevelThickness:{type:k,default:10},bevelSize:{type:k,default:8},bevelSegments:{type:k,default:3},text:{type:l,default:''}},data:function(){return{f:void 0}},computed:{inst:function(){return this.f===void 0?new b.BufferGeometry:new b.TextBufferGeometry(this.text,{font:J[this.f],size:parseFloat(this.size),height:parseFloat(this.height),curveSegments:parseInt(this.curveSegments,10),bevelEnabled:this.bevelEnabled,bevelThickness:parseFloat(this.bevelThickness),bevelSize:parseFloat(this.bevelSize),bevelSegments:parseInt(this.bevelSegments,10)})}},watch:{font:{handler:function(a){var c=this;J[a]?J[a].isFont?this.f=a:J[a].push(function(){a===c.font&&(c.f=a)}):(J[a]=[function(){a===c.font&&(c.f=a)}],new b.FontLoader().load(a,function(b){var c=J[a];J[a]=b,c.forEach(function(a){a()})}))},immediate:!0}}},a.VglSpriteMaterial={mixins:[y],props:{color:{type:l,default:'#fff'}},computed:{inst:function(){return new b.SpriteMaterial}},watch:{inst:{handler:function(a){a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a)}}},a.VglGridHelper={mixins:[r],props:{size:{type:k,default:10},divisions:{type:k,default:10},colorCenterLine:{type:l,default:'#444444'},colorGrid:{type:l,default:'#888888'}},computed:{inst:function(){return new b.GridHelper(parseFloat(this.size),parseInt(this.divisions,10),this.colorCenterLine,this.colorGrid)}}},a.VglShadowMaterial={mixins:[u],computed:{inst:function(){return new b.ShadowMaterial}}},a.VglCameraHelper={mixins:[r],props:{camera:l},computed:{inst:function(){return new b.CameraHelper(new b.Camera())}},methods:{setCamera:function(){this.inst.camera=this.vglNamespace.cameras[this.camera],this.inst.camera.updateProjectionMatrix(),this.inst.update()}},created:function(){this.vglNamespace.beforeRender.push(this.setCamera)},beforeDestroy:function(){var a=this.vglNamespace.beforeRender,b=this.setCamera;a.splice(a.indexOf(b),1)}},a.VglDirectionalLightHelper={mixins:[r],props:{color:{type:l},size:{type:k,default:1}},computed:{inst:function(){return new b.DirectionalLightHelper(this.vglObject3d.inst,parseFloat(this.size))}},watch:{inst:{handler:function(a){this.color&&(Object.assign(a,{color:this.color}),a.update())},immediate:!0},color:function(a){this.inst.color=a,this.inst.update()}}},Object.defineProperty(a,'__esModule',{value:!0})});
