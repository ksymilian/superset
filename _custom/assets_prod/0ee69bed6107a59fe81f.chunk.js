"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[954],{73728:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(98014),s=i(25660),o=i(15614);function a(){}const r=["getBins","getDomain","getScaleFunc"],l=[{key:"fillColor",accessor:"getFillColor",pickingInfo:"colorValue",getBins:{triggers:{value:{prop:"getColorValue",updateTrigger:"getColorValue"},weight:{prop:"getColorWeight",updateTrigger:"getColorWeight"},aggregation:{prop:"colorAggregation"},filterData:{prop:"_filterData",updateTrigger:"_filterData"}}},getDomain:{triggers:{lowerPercentile:{prop:"lowerPercentile"},upperPercentile:{prop:"upperPercentile"},scaleType:{prop:"colorScaleType"}}},getScaleFunc:{triggers:{domain:{prop:"colorDomain"},range:{prop:"colorRange"}},onSet:{props:"onSetColorDomain"}},nullValue:[0,0,0,0]},{key:"elevation",accessor:"getElevation",pickingInfo:"elevationValue",getBins:{triggers:{value:{prop:"getElevationValue",updateTrigger:"getElevationValue"},weight:{prop:"getElevationWeight",updateTrigger:"getElevationWeight"},aggregation:{prop:"elevationAggregation"},filterData:{prop:"_filterData",updateTrigger:"_filterData"}}},getDomain:{triggers:{lowerPercentile:{prop:"elevationLowerPercentile"},upperPercentile:{prop:"elevationUpperPercentile"},scaleType:{prop:"elevationScaleType"}}},getScaleFunc:{triggers:{domain:{prop:"elevationDomain"},range:{prop:"elevationRange"}},onSet:{props:"onSetElevationDomain"}},nullValue:-1}],g=e=>e.cellSize;class d{constructor(e){this.state={layerData:{},dimensions:{}},this.changeFlags={},this.dimensionUpdaters={},this._getCellSize=e.getCellSize||g,this._getAggregator=e.getAggregator,this._addDimension(e.dimensions||l)}static defaultDimensions(){return l}updateState(e,t){const{oldProps:i,props:n,changeFlags:s}=e;this.updateGetValueFuncs(i,n,s);const o=this.needsReProjectPoints(i,n,s);let a=!1;return s.dataChanged||o?(this.getAggregatedData(n,t),a=!0):((this.getDimensionChanges(i,n,s)||[]).forEach((e=>"function"==typeof e&&e())),a=!0),this.setState({aggregationDirty:a}),this.state}setState(e){this.state={...this.state,...e}}setDimensionState(e,t){this.setState({dimensions:{...this.state.dimensions,[e]:{...this.state.dimensions[e],...t}}})}normalizeResult(e={}){return e.hexagons?{data:e.hexagons,...e}:e.layerData?{data:e.layerData,...e}:e}getAggregatedData(e,t){const i=this._getAggregator(e)(e,t);this.setState({layerData:this.normalizeResult(i)}),this.changeFlags={layerData:!0},this.getSortedBins(e)}updateGetValueFuncs(e,t,i){for(const n in this.dimensionUpdaters){const{value:s,weight:a,aggregation:r}=this.dimensionUpdaters[n].getBins.triggers;let l=t[s.prop];this.needUpdateDimensionStep(this.dimensionUpdaters[n].getBins,e,t,i)&&(l=l?(0,o.q5)(l,{data:t.data}):(0,o._D)(t[r.prop],t[a.prop],{data:t.data})),l&&this.setDimensionState(n,{getValue:l})}}needsReProjectPoints(e,t,i){return this._getCellSize(e)!==this._getCellSize(t)||this._getAggregator(e)!==this._getAggregator(t)||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPosition)}addDimension(e){this._addDimension(e)}_addDimension(e=[]){e.forEach((e=>{const{key:t}=e;this.dimensionUpdaters[t]=this.getDimensionUpdaters(e),this.state.dimensions[t]={getValue:null,domain:null,sortedBins:null,scaleFunc:a}}))}getDimensionUpdaters({key:e,accessor:t,pickingInfo:i,getBins:n,getDomain:s,getScaleFunc:o,nullValue:a}){return{key:e,accessor:t,pickingInfo:i,getBins:{updater:this.getDimensionSortedBins,...n},getDomain:{updater:this.getDimensionValueDomain,...s},getScaleFunc:{updater:this.getDimensionScale,...o},attributeAccessor:this.getSubLayerDimensionAttribute(e,a)}}needUpdateDimensionStep(e,t,i,n){return Object.values(e.triggers).some((e=>e.updateTrigger?n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged[e.updateTrigger]):t[e.prop]!==i[e.prop]))}getDimensionChanges(e,t,i){const n=[];for(const s in this.dimensionUpdaters){const o=r.find((n=>this.needUpdateDimensionStep(this.dimensionUpdaters[s][n],e,t,i)));o&&n.push(this.dimensionUpdaters[s][o].updater.bind(this,t,this.dimensionUpdaters[s]))}return n.length?n:null}getUpdateTriggers(e){const t=e.updateTriggers||{},i={};for(const n in this.dimensionUpdaters){const{accessor:s}=this.dimensionUpdaters[n];i[s]={},r.forEach((o=>{Object.values(this.dimensionUpdaters[n][o].triggers).forEach((({prop:n,updateTrigger:o})=>{if(o){const e=t[o];"object"!=typeof e||Array.isArray(e)?void 0!==e&&(i[s][n]=e):Object.assign(i[s],e)}else i[s][n]=e[n]}))}))}return i}getSortedBins(e){for(const t in this.dimensionUpdaters)this.getDimensionSortedBins(e,this.dimensionUpdaters[t])}getDimensionSortedBins(e,t){const{key:i}=t,{getValue:s}=this.state.dimensions[i],o=new n.Z(this.state.layerData.data||[],{getValue:s,filterData:e._filterData});this.setDimensionState(i,{sortedBins:o}),this.getDimensionValueDomain(e,t)}getDimensionValueDomain(e,t){const{getDomain:i,key:n}=t,{triggers:{lowerPercentile:s,upperPercentile:o,scaleType:a}}=i,r=this.state.dimensions[n].sortedBins.getValueDomainByScale(e[a.prop],[e[s.prop],e[o.prop]]);this.setDimensionState(n,{valueDomain:r}),this.getDimensionScale(e,t)}getDimensionScale(e,t){const{key:i,getScaleFunc:n,getDomain:o}=t,{domain:a,range:r}=n.triggers,{scaleType:l}=o.triggers,{onSet:g}=n,d=e[r.prop],c=e[a.prop]||this.state.dimensions[i].valueDomain,p=(0,s.ge)(l&&e[l.prop])(c,d);"object"==typeof g&&"function"==typeof e[g.props]&&e[g.props](p.domain()),this.setDimensionState(i,{scaleFunc:p})}getSubLayerDimensionAttribute(e,t){return i=>{const{sortedBins:n,scaleFunc:s}=this.state.dimensions[e],o=n.binMap[i.index];if(o&&0===o.counts)return t;const a=o&&o.value,r=s.domain();return a>=r[0]&&a<=r[r.length-1]?s(a):t}}getSubLayerAccessors(e){const t={};for(const i in this.dimensionUpdaters){const{accessor:n}=this.dimensionUpdaters[i];t[n]=this.getSubLayerDimensionAttribute(e,i)}return t}getPickingInfo({info:e}){let t=null;if(e.picked&&e.index>-1){const i=this.state.layerData.data[e.index],n={};for(const e in this.dimensionUpdaters){const{pickingInfo:t}=this.dimensionUpdaters[e],{sortedBins:s}=this.state.dimensions[e],o=s.binMap[i.index]&&s.binMap[i.index].value;n[t]=o}t=Object.assign(n,i,{points:i.filteredPoints||i.points})}return e.picked=Boolean(t),e.object=t,e}getAccessor(e){return this.dimensionUpdaters.hasOwnProperty(e)?this.dimensionUpdaters[e].attributeAccessor:a}}},15103:(e,t,i)=>{i.d(t,{Z:()=>m});var n=i(95772),s=i(93844),o=i(95644),a=i(51331),r=i(1113),l=i(80744),g=i(53982),d=i(74538),c=i(25215);class p extends g.Z{constructor(e={}){const{id:t=(0,d.hQ)("column-geometry")}=e,{indices:i,attributes:n}=function(e){const{radius:t,height:i=1,nradial:n=10}=e;let{vertices:s}=e;s&&(l.Z.assert(s.length>=n),s=s.flatMap((e=>[e[0],e[1]])),(0,c.Ny)(s,c.wG.COUNTER_CLOCKWISE));const o=i>0,a=n+1,r=o?3*a+1:n,g=2*Math.PI/n,d=new Uint16Array(o?3*n*2:0),p=new Float32Array(3*r),u=new Float32Array(3*r);let h=0;if(o){for(let e=0;e<a;e++){const o=e*g,a=e%n,r=Math.sin(o),l=Math.cos(o);for(let e=0;e<2;e++)p[h+0]=s?s[2*a]:l*t,p[h+1]=s?s[2*a+1]:r*t,p[h+2]=(.5-e)*i,u[h+0]=s?s[2*a]:l,u[h+1]=s?s[2*a+1]:r,h+=3}p[h+0]=p[h-3],p[h+1]=p[h-2],p[h+2]=p[h-1],h+=3}for(let e=o?0:1;e<a;e++){const o=Math.floor(e/2)*Math.sign(.5-e%2),a=o*g,r=(o+n)%n,l=Math.sin(a),d=Math.cos(a);p[h+0]=s?s[2*r]:d*t,p[h+1]=s?s[2*r+1]:l*t,p[h+2]=i/2,u[h+2]=1,h+=3}if(o){let e=0;for(let t=0;t<n;t++)d[e++]=2*t+0,d[e++]=2*t+2,d[e++]=2*t+0,d[e++]=2*t+1,d[e++]=2*t+1,d[e++]=2*t+3}return{indices:d,attributes:{POSITION:{size:3,value:p},NORMAL:{size:3,value:u}}}}(e);super({...e,id:t,indices:i,attributes:n})}}const u=[0,0,0,255],h={diskResolution:{type:"number",min:4,value:20},vertices:null,radius:{type:"number",min:0,value:1e3},angle:{type:"number",value:0},offset:{type:"array",value:[0,0]},coverage:{type:"number",min:0,max:1,value:1},elevationScale:{type:"number",min:0,value:1},lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,extruded:!0,wireframe:!1,filled:!0,stroked:!1,getPosition:{type:"accessor",value:e=>e.position},getFillColor:{type:"accessor",value:u},getLineColor:{type:"accessor",value:u},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0,getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class m extends n.Z{getShaders(){return super.getShaders({vs:"\n#define SHADER_NAME column-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 normals;\n\nattribute vec3 instancePositions;\nattribute float instanceElevations;\nattribute vec3 instancePositions64Low;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute float instanceStrokeWidths;\n\nattribute vec3 instancePickingColors;\nuniform float opacity;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform bool extruded;\nuniform bool isStroke;\nuniform float coverage;\nuniform float elevationScale;\nuniform float edgeDistance;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nvarying vec4 vColor;\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n\n  vec4 color = isStroke ? instanceLineColors : instanceFillColors;\n  mat2 rotationMatrix = mat2(cos(angle), sin(angle), -sin(angle), cos(angle));\n  float elevation = 0.0;\n  float strokeOffsetRatio = 1.0;\n\n  if (extruded) {\n    elevation = instanceElevations * (positions.z + 1.0) / 2.0 * elevationScale;\n  } else if (isStroke) {\n    float widthPixels = clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),\n      widthMinPixels, widthMaxPixels) / 2.0;\n    strokeOffsetRatio -= sign(positions.z) * project_pixel_size(widthPixels) / project_size(edgeDistance * coverage * radius);\n  }\n  float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);\n  float dotRadius = radius * coverage * shouldRender;\n\n  geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));\n  geometry.pickingColor = instancePickingColors;\n  vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);\n  vec3 centroidPosition64Low = instancePositions64Low;\n  vec3 pos = vec3(project_size(rotationMatrix * positions.xy * strokeOffsetRatio + offset) * dotRadius, 0.);\n  DECKGL_FILTER_SIZE(pos, geometry);\n\n  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  if (extruded && !isStroke) {\n    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, geometry.position.xyz, geometry.normal);\n    vColor = vec4(lightColor, color.a * opacity);\n  } else {\n    vColor = vec4(color.rgb, color.a * opacity);\n  }\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n",fs:"#define SHADER_NAME column-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[s.Z,o.N,a.Z]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceElevations:{size:1,transition:!0,accessor:"getElevation"},instanceFillColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getFillColor",defaultValue:u},instanceLineColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getLineColor",defaultValue:u},instanceStrokeWidths:{size:1,accessor:"getLineWidth",transition:!0}})}updateState({props:e,oldProps:t,changeFlags:i}){super.updateState({props:e,oldProps:t,changeFlags:i});const n=i.extensionsChanged;if(n){var s;const{gl:e}=this.context;null===(s=this.state.model)||void 0===s||s.delete(),this.state.model=this._getModel(e),this.getAttributeManager().invalidateAll()}(n||e.diskResolution!==t.diskResolution||e.vertices!==t.vertices||(e.extruded||e.stroked)!==(t.extruded||t.stroked))&&this._updateGeometry(e)}getGeometry(e,t,i){const n=new p({radius:1,height:i?2:0,vertices:t,nradial:e});let s=0;if(t)for(let i=0;i<e;i++){const n=t[i];s+=Math.sqrt(n[0]*n[0]+n[1]*n[1])/e}else s=1;return this.setState({edgeDistance:Math.cos(Math.PI/e)*s}),n}_getModel(e){return new r.Z(e,{...this.getShaders(),id:this.props.id,isInstanced:!0})}_updateGeometry({diskResolution:e,vertices:t,extruded:i,stroked:n}){const s=this.getGeometry(e,t,i||n);this.setState({fillVertexCount:s.attributes.POSITION.value.length/3,wireframeVertexCount:s.indices.value.length}),this.state.model.setProps({geometry:s})}draw({uniforms:e}){const{viewport:t}=this.context,{lineWidthUnits:i,lineWidthScale:n,lineWidthMinPixels:s,lineWidthMaxPixels:o,elevationScale:a,extruded:r,filled:l,stroked:g,wireframe:d,offset:c,coverage:p,radius:u,angle:h}=this.props,{model:m,fillVertexCount:f,wireframeVertexCount:v,edgeDistance:y}=this.state,S="pixels"===i?t.metersPerPixel:1;m.setUniforms(e).setUniforms({radius:u,angle:h/180*Math.PI,offset:c,extruded:r,coverage:p,elevationScale:a,edgeDistance:y,widthScale:n*S,widthMinPixels:s,widthMaxPixels:o}),r&&d&&(m.setProps({isIndexed:!0}),m.setVertexCount(v).setDrawMode(1).setUniforms({isStroke:!0}).draw()),l&&(m.setProps({isIndexed:!1}),m.setVertexCount(f).setDrawMode(5).setUniforms({isStroke:!1}).draw()),!r&&g&&(m.setProps({isIndexed:!1}),m.setVertexCount(2*f/3).setDrawMode(5).setUniforms({isStroke:!0}).draw())}}m.layerName="ColumnLayer",m.defaultProps=h}}]);
//# sourceMappingURL=0ee69bed6107a59fe81f.chunk.js.map