"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1711],{22139:(t,e,o)=>{o.d(e,{Z:()=>l});var n=o(67294),i=o(45697),r=o.n(i),a=o(67190);const s=" - ",c={categories:r().object,toggleCategory:r().func,showSingleCategory:r().func,format:r().string,position:r().oneOf([null,"tl","tr","bl","br"])};class l extends n.PureComponent{format(t){if(!this.props.format)return t;const e=parseFloat(t);return(0,a.uf)(this.props.format,e)}formatCategoryLabel(t){if(!this.props.format)return t;if(t.includes(s)){const e=t.split(s);return this.format(e[0])+s+this.format(e[1])}return this.format(t)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const t=Object.entries(this.props.categories).map((t=>{let[e,o]=t;const i={color:"rgba("+o.color.join(", ")+")"},r=o.enabled?"◼":"◻";return n.createElement("li",{key:e},n.createElement("a",{href:"#",onClick:()=>this.props.toggleCategory(e),onDoubleClick:()=>this.props.showSingleCategory(e)},n.createElement("span",{style:i},r)," ",this.formatCategoryLabel(e)))})),e={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return n.createElement("div",{className:"legend",style:e},n.createElement("ul",{className:"categories"},t))}}l.propTypes=c,l.defaultProps={categories:{},toggleCategory:()=>{},showSingleCategory:()=>{},format:null,position:"tr"}},75647:(t,e,o)=>{o.d(e,{B:()=>R,G:()=>C});var n=o(18446),i=o.n(n),r=o(67294),a=o(45697),s=o.n(a),c=o(37672),l=o(28062),g=o(82134),u=o(22139),p=o(27447),d=o(90483),h=o(40895),m=o(68555);function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},f.apply(this,arguments)}function v(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const{getScale:y}=l,x={formData:s().object.isRequired,mapboxApiKey:s().string.isRequired,setControlValue:s().func.isRequired,viewport:s().object.isRequired,getLayer:s().func.isRequired,getPoints:s().func.isRequired,payload:s().object.isRequired,onAddFilter:s().func,width:s().number.isRequired,height:s().number.isRequired};class _ extends r.PureComponent{constructor(t){super(t),v(this,"containerRef",r.createRef()),v(this,"setTooltip",(t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)})),this.state=this.getStateFromProps(t),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(t){t.payload.form_data!==this.state.formData&&this.setState(f({},this.getStateFromProps(t)))}onValuesChange(t){this.setState({values:Array.isArray(t)?t:[t,t+this.state.getStep(t)]})}getStateFromProps(t,e){const o=t.payload.data.features||[],n=o.map((t=>t.__timestamp)),i=function(t,e){const o=t.color_picker||{r:0,g:0,b:0,a:1},n=[o.r,o.g,o.b,255*o.a],i=y(t.color_scheme),r={};return e.forEach((e=>{if(null!=e.cat_color&&!r.hasOwnProperty(e.cat_color)){let a;a=t.dimension?(0,p.hexToRGB)(i(e.cat_color),255*o.a):n,r[e.cat_color]={color:a,enabled:!0}}})),r}(t.formData,o);if(e&&t.payload.form_data===e.formData)return f({},e,{categories:i});const r=t.payload.form_data.time_grain_sqla||t.payload.form_data.granularity||"P1D",{start:a,end:s,getStep:c,values:l,disabled:g}=(0,d.g)(n,r),{width:u,height:h,formData:v}=t;let{viewport:x}=t;return v.autozoom&&(x=(0,m.Z)(x,{width:u,height:h,points:t.getPoints(o)})),{start:a,end:s,getStep:c,values:l,disabled:g,viewport:x,selected:[],lastClick:0,formData:t.payload.form_data,categories:i}}getLayers(t){const{getLayer:e,payload:o,formData:n,onAddFilter:i}=this.props;let r=o.data.features?[...o.data.features]:[];r=this.addColor(r,n),n.js_data_mutator&&(r=(0,h.Z)(n.js_data_mutator)(r)),r=t[0]===t[1]||t[1]===this.end?r.filter((e=>e.__timestamp>=t[0]&&e.__timestamp<=t[1])):r.filter((e=>e.__timestamp>=t[0]&&e.__timestamp<t[1]));const a=this.state.categories;return n.dimension&&(r=r.filter((t=>a[t.cat_color]&&a[t.cat_color].enabled))),[e(n,f({},o,{data:f({},o.data,{features:r})}),i,this.setTooltip)]}addColor(t,e){const o=e.color_picker||{r:0,g:0,b:0,a:1},n=y(e.color_scheme);return t.map((t=>{let i;return e.dimension?(i=(0,p.hexToRGB)(n(t.cat_color),255*o.a),f({},t,{color:i})):t}))}toggleCategory(t){const e=this.state.categories[t],o=f({},this.state.categories,{[t]:f({},e,{enabled:!e.enabled})});Object.values(o).every((t=>!t.enabled))&&Object.values(o).forEach((t=>{t.enabled=!0})),this.setState({categories:o})}showSingleCategory(t){const e=f({},this.state.categories);Object.values(e).forEach((t=>{t.enabled=!1})),e[t].enabled=!0,this.setState({categories:e})}render(){return r.createElement("div",{style:{position:"relative"}},r.createElement(g.Z,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},r.createElement(u.Z,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position,format:this.props.formData.legend_format})))}}function P(){return P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},P.apply(this,arguments)}function b(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}_.propTypes=x;const w={formData:s().object.isRequired,payload:s().object.isRequired,setControlValue:s().func.isRequired,viewport:s().object.isRequired,onAddFilter:s().func,width:s().number.isRequired,height:s().number.isRequired},S={onAddFilter(){}};function C(t,e){class o extends r.PureComponent{constructor(t){super(t),b(this,"containerRef",r.createRef()),b(this,"setTooltip",(t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)}));const{width:o,height:n,formData:i}=t;let{viewport:a}=t;i.autozoom&&(a=(0,m.Z)(a,{width:o,height:n,points:e(t.payload.data.features)})),this.state={viewport:a,layer:this.computeLayer(t)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(t){const e=P({},t.formData,{viewport:null}),o=P({},this.props.formData,{viewport:null});i()(e,o)&&t.payload===this.props.payload||this.setState({layer:this.computeLayer(t)})}onViewportChange(t){this.setState({viewport:t})}computeLayer(e){const{formData:o,payload:n,onAddFilter:i}=e;return t(o,n,i,this.setTooltip)}render(){const{formData:t,payload:e,setControlValue:o,height:n,width:i}=this.props,{layer:a,viewport:s}=this.state;return r.createElement(c.Z,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:s,layers:[a],mapStyle:t.mapbox_style,setControlValue:o,width:i,height:n,onViewportChange:this.onViewportChange})}}return o.propTypes=w,o.defaultProps=S,o}function R(t,e){function o(o){const{formData:n,payload:i,setControlValue:a,viewport:s,width:c,height:l}=o;return r.createElement(_,{formData:n,mapboxApiKey:i.data.mapboxApiKey,setControlValue:a,viewport:s,getLayer:t,payload:i,getPoints:e,width:c,height:l})}return o.propTypes=w,o.defaultProps=S,o}},1711:(t,e,o)=>{o.r(e),o.d(e,{default:()=>y,getLayer:()=>v});var n=o(95772),i=o(93844),r=o(51331),a=o(1113),s=o(53982);const c=[0,0,0,255],l={getSourcePosition:{type:"accessor",value:t=>t.sourcePosition},getTargetPosition:{type:"accessor",value:t=>t.targetPosition},getSourceColor:{type:"accessor",value:c},getTargetColor:{type:"accessor",value:c},getWidth:{type:"accessor",value:1},getHeight:{type:"accessor",value:1},getTilt:{type:"accessor",value:0},greatCircle:!1,widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0}};class g extends n.Z{getShaders(){return super.getShaders({vs:"#define SHADER_NAME arc-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\nattribute vec3 instanceSourcePositions;\nattribute vec3 instanceSourcePositions64Low;\nattribute vec3 instanceTargetPositions;\nattribute vec3 instanceTargetPositions64Low;\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\nattribute float instanceHeights;\nattribute float instanceTilts;\n\nuniform bool greatCircle;\nuniform bool useShortestPath;\nuniform float numSegments;\nuniform float opacity;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\n\nvarying vec4 vColor;\nvarying vec2 uv;\nvarying float isValid;\n\nfloat paraboloid(float distance, float sourceZ, float targetZ, float ratio) {\n\n  float deltaZ = targetZ - sourceZ;\n  float dh = distance * instanceHeights;\n  if (dh == 0.0) {\n    return sourceZ + deltaZ * ratio;\n  }\n  float unitZ = deltaZ / dh;\n  float p2 = unitZ * unitZ + 1.0;\n  float dir = step(deltaZ, 0.0);\n  float z0 = mix(sourceZ, targetZ, dir);\n  float r = mix(ratio, 1.0 - ratio, dir);\n  return sqrt(r * (p2 - r)) * dh + z0;\n}\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  return dir_screenspace * offset_direction * width / 2.0;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {\n  float distance = length(source.xy - target.xy);\n  float z = paraboloid(distance, source.z, target.z, segmentRatio);\n\n  float tiltAngle = radians(instanceTilts);\n  vec2 tiltDirection = normalize(target.xy - source.xy);\n  vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);\n\n  return vec3(\n    mix(source.xy, target.xy, segmentRatio) + tilt,\n    z * cos(tiltAngle)\n  );\n}\nfloat getAngularDist (vec2 source, vec2 target) {\n  vec2 sourceRadians = radians(source);\n  vec2 targetRadians = radians(target);\n  vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);\n  vec2 shd_sq = sin_half_delta * sin_half_delta;\n\n  float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;\n  return 2.0 * asin(sqrt(a));\n}\n\nvec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {\n  vec2 lngLat;\n  if(abs(angularDist - PI) < 0.001) {\n    lngLat = (1.0 - t) * source.xy + t * target.xy;\n  } else {\n    float a = sin((1.0 - t) * angularDist);\n    float b = sin(t * angularDist);\n    vec3 p = source3D.yxz * a + target3D.yxz * b;\n    lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));\n  }\n\n  float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);\n\n  return vec3(lngLat, z);\n}\n\nvoid main(void) {\n  geometry.worldPosition = instanceSourcePositions;\n  geometry.worldPositionAlt = instanceTargetPositions;\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));\n  float nextSegmentRatio = getSegmentRatio(min(numSegments - 1.0, segmentIndex + 1.0));\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  isValid = 1.0;\n\n  uv = vec2(segmentRatio, positions.y);\n  geometry.uv = uv;\n  geometry.pickingColor = instancePickingColors;\n\n  vec4 curr;\n  vec4 next;\n  vec3 source;\n  vec3 target;\n\n  if ((greatCircle || project_uProjectionMode == PROJECTION_MODE_GLOBE) && project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT) {\n    source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));\n    target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));\n    float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);\n\n    vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);\n    vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);\n    vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);\n\n    if (abs(currPos.x - prevPos.x) > 180.0) {\n      indexDir = -1.0;\n      isValid = 0.0;\n    } else if (abs(currPos.x - nextPos.x) > 180.0) {\n      indexDir = 1.0;\n      isValid = 0.0;\n    }\n    nextPos = indexDir < 0.0 ? prevPos : nextPos;\n    nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;\n\n    if (isValid == 0.0) {\n      nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;\n      float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);\n      currPos = mix(currPos, nextPos, t);\n      segmentRatio = mix(segmentRatio, nextSegmentRatio, t);\n    }\n\n    vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);\n    vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);\n  \n    curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);\n    next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));\n  \n  } else {\n    vec3 source_world = instanceSourcePositions;\n    vec3 target_world = instanceTargetPositions;\n    if (useShortestPath) {\n      source_world.x = mod(source_world.x + 180., 360.0) - 180.;\n      target_world.x = mod(target_world.x + 180., 360.0) - 180.;\n\n      float deltaLng = target_world.x - source_world.x;\n      if (deltaLng > 180.) target_world.x -= 360.;\n      if (deltaLng < -180.) source_world.x -= 360.;\n    }\n    source = project_position(source_world, instanceSourcePositions64Low);\n    target = project_position(target_world, instanceTargetPositions64Low);\n    float antiMeridianX = 0.0;\n\n    if (useShortestPath) {\n      if (project_uProjectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {\n        antiMeridianX = -(project_uCoordinateOrigin.x + 180.) / 360. * TILE_SIZE;\n      }\n      float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);\n\n      if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {\n        isValid = 0.0;\n        indexDir = sign(segmentRatio - thresholdRatio);\n        segmentRatio = thresholdRatio;\n      }\n    }\n\n    nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;\n    vec3 currPos = interpolateFlat(source, target, segmentRatio);\n    vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);\n\n    if (useShortestPath) {\n      if (nextPos.x < antiMeridianX) {\n        currPos.x += TILE_SIZE;\n        nextPos.x += TILE_SIZE;\n      }\n    }\n\n    curr = project_common_position_to_clipspace(vec4(currPos, 1.0));\n    next = project_common_position_to_clipspace(vec4(nextPos, 1.0));\n    geometry.position = vec4(currPos, 1.0);\n  }\n  float widthPixels = clamp(\n    project_size_to_pixel(instanceWidths * widthScale),\n    widthMinPixels, widthMaxPixels\n  );\n  vec3 offset = vec3(\n    getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y, widthPixels),\n    0.0);\n  DECKGL_FILTER_SIZE(offset, geometry);\n  gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);\n  vColor = vec4(color.rgb, color.a * opacity);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n",fs:"#define SHADER_NAME arc-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\nvarying vec2 uv;\nvarying float isValid;\n\nvoid main(void) {\n  if (isValid == 0.0) {\n    discard;\n  }\n\n  gl_FragColor = vColor;\n  geometry.uv = uv;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[i.Z,r.Z]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getSourcePosition"},instanceTargetPositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getTargetPosition"},instanceSourceColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getSourceColor",defaultValue:c},instanceTargetColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getTargetColor",defaultValue:c},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:"getHeight",defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:"getTilt",defaultValue:0}})}updateState({props:t,oldProps:e,changeFlags:o}){if(super.updateState({props:t,oldProps:e,changeFlags:o}),o.extensionsChanged){var n;const{gl:t}=this.context;null===(n=this.state.model)||void 0===n||n.delete(),this.state.model=this._getModel(t),this.getAttributeManager().invalidateAll()}}draw({uniforms:t}){const{viewport:e}=this.context,{widthUnits:o,widthScale:n,widthMinPixels:i,widthMaxPixels:r,greatCircle:a,wrapLongitude:s}=this.props,c="pixels"===o?e.metersPerPixel:1;this.state.model.setUniforms(t).setUniforms({greatCircle:a,widthScale:n*c,widthMinPixels:i,widthMaxPixels:r,useShortestPath:s}).draw()}_getModel(t){let e=[];for(let t=0;t<50;t++)e=e.concat([t,1,0,t,-1,0]);const o=new a.Z(t,{...this.getShaders(),id:this.props.id,geometry:new s.Z({drawMode:5,attributes:{positions:new Float32Array(e)}}),isInstanced:!0});return o.setUniforms({numSegments:50}),o}}g.layerName="ArcLayer",g.defaultProps=l;var u=o(67294),p=o(61988),d=o(38969),h=o(75647),m=o(24084);function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},f.apply(this,arguments)}function v(t,e,o,n){const i=e.data.features,r=t.color_picker,a=t.target_color_picker;return new g(f({data:i,getSourceColor:t=>t.sourceColor||t.color||[r.r,r.g,r.b,255*r.a],getTargetColor:t=>t.targetColor||t.color||[a.r,a.g,a.b,255*a.a],id:"path-layer-"+t.slice_id,strokeWidth:t.stroke_width?t.stroke_width:3},(0,d.N)(t,n,(s=t,t=>u.createElement("div",{className:"deckgl-tooltip"},u.createElement(m.Z,{label:(0,p.t)("Start (Longitude, Latitude)")+": ",value:t.object.sourcePosition[0]+", "+t.object.sourcePosition[1]}),u.createElement(m.Z,{label:(0,p.t)("End (Longitude, Latitude)")+": ",value:t.object.targetPosition[0]+", "+t.object.targetPosition[1]}),s.dimension&&u.createElement(m.Z,{label:s.dimension+": ",value:""+t.object.cat_color}))))));var s}const y=(0,h.B)(v,(function(t){const e=[];return t.forEach((t=>{e.push(t.sourcePosition),e.push(t.targetPosition)})),e}))}}]);
//# sourceMappingURL=8709337952a79ea681cc.chunk.js.map