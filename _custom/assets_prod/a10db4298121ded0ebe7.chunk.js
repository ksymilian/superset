"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3587,7510,3156],{22139:(t,e,o)=>{o.d(e,{Z:()=>p});var r=o(67294),a=o(45697),s=o.n(a),i=o(67190);const n=" - ",l={categories:s().object,toggleCategory:s().func,showSingleCategory:s().func,format:s().string,position:s().oneOf([null,"tl","tr","bl","br"])};class p extends r.PureComponent{format(t){if(!this.props.format)return t;const e=parseFloat(t);return(0,i.uf)(this.props.format,e)}formatCategoryLabel(t){if(!this.props.format)return t;if(t.includes(n)){const e=t.split(n);return this.format(e[0])+n+this.format(e[1])}return this.format(t)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const t=Object.entries(this.props.categories).map((t=>{let[e,o]=t;const a={color:"rgba("+o.color.join(", ")+")"},s=o.enabled?"◼":"◻";return r.createElement("li",{key:e},r.createElement("a",{href:"#",onClick:()=>this.props.toggleCategory(e),onDoubleClick:()=>this.props.showSingleCategory(e)},r.createElement("span",{style:a},s)," ",this.formatCategoryLabel(e)))})),e={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return r.createElement("div",{className:"legend",style:e},r.createElement("ul",{className:"categories"},t))}}p.propTypes=l,p.defaultProps={categories:{},toggleCategory:()=>{},showSingleCategory:()=>{},format:null,position:"tr"}},75647:(t,e,o)=>{o.d(e,{B:()=>P,G:()=>R});var r=o(18446),a=o.n(r),s=o(67294),i=o(45697),n=o.n(i),l=o(37672),p=o(28062),c=o(82134),h=o(22139),u=o(27447),d=o(90483),g=o(40895),m=o(68555);function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},f.apply(this,arguments)}function y(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const{getScale:b}=p,w={formData:n().object.isRequired,mapboxApiKey:n().string.isRequired,setControlValue:n().func.isRequired,viewport:n().object.isRequired,getLayer:n().func.isRequired,getPoints:n().func.isRequired,payload:n().object.isRequired,onAddFilter:n().func,width:n().number.isRequired,height:n().number.isRequired};class v extends s.PureComponent{constructor(t){super(t),y(this,"containerRef",s.createRef()),y(this,"setTooltip",(t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)})),this.state=this.getStateFromProps(t),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(t){t.payload.form_data!==this.state.formData&&this.setState(f({},this.getStateFromProps(t)))}onValuesChange(t){this.setState({values:Array.isArray(t)?t:[t,t+this.state.getStep(t)]})}getStateFromProps(t,e){const o=t.payload.data.features||[],r=o.map((t=>t.__timestamp)),a=function(t,e){const o=t.color_picker||{r:0,g:0,b:0,a:1},r=[o.r,o.g,o.b,255*o.a],a=b(t.color_scheme),s={};return e.forEach((e=>{if(null!=e.cat_color&&!s.hasOwnProperty(e.cat_color)){let i;i=t.dimension?(0,u.hexToRGB)(a(e.cat_color),255*o.a):r,s[e.cat_color]={color:i,enabled:!0}}})),s}(t.formData,o);if(e&&t.payload.form_data===e.formData)return f({},e,{categories:a});const s=t.payload.form_data.time_grain_sqla||t.payload.form_data.granularity||"P1D",{start:i,end:n,getStep:l,values:p,disabled:c}=(0,d.g)(r,s),{width:h,height:g,formData:y}=t;let{viewport:w}=t;return y.autozoom&&(w=(0,m.Z)(w,{width:h,height:g,points:t.getPoints(o)})),{start:i,end:n,getStep:l,values:p,disabled:c,viewport:w,selected:[],lastClick:0,formData:t.payload.form_data,categories:a}}getLayers(t){const{getLayer:e,payload:o,formData:r,onAddFilter:a}=this.props;let s=o.data.features?[...o.data.features]:[];s=this.addColor(s,r),r.js_data_mutator&&(s=(0,g.Z)(r.js_data_mutator)(s)),s=t[0]===t[1]||t[1]===this.end?s.filter((e=>e.__timestamp>=t[0]&&e.__timestamp<=t[1])):s.filter((e=>e.__timestamp>=t[0]&&e.__timestamp<t[1]));const i=this.state.categories;return r.dimension&&(s=s.filter((t=>i[t.cat_color]&&i[t.cat_color].enabled))),[e(r,f({},o,{data:f({},o.data,{features:s})}),a,this.setTooltip)]}addColor(t,e){const o=e.color_picker||{r:0,g:0,b:0,a:1},r=b(e.color_scheme);return t.map((t=>{let a;return e.dimension?(a=(0,u.hexToRGB)(r(t.cat_color),255*o.a),f({},t,{color:a})):t}))}toggleCategory(t){const e=this.state.categories[t],o=f({},this.state.categories,{[t]:f({},e,{enabled:!e.enabled})});Object.values(o).every((t=>!t.enabled))&&Object.values(o).forEach((t=>{t.enabled=!0})),this.setState({categories:o})}showSingleCategory(t){const e=f({},this.state.categories);Object.values(e).forEach((t=>{t.enabled=!1})),e[t].enabled=!0,this.setState({categories:e})}render(){return s.createElement("div",{style:{position:"relative"}},s.createElement(c.Z,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},s.createElement(h.Z,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position,format:this.props.formData.legend_format})))}}function C(){return C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},C.apply(this,arguments)}function _(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}v.propTypes=w;const j={formData:n().object.isRequired,payload:n().object.isRequired,setControlValue:n().func.isRequired,viewport:n().object.isRequired,onAddFilter:n().func,width:n().number.isRequired,height:n().number.isRequired},S={onAddFilter(){}};function R(t,e){class o extends s.PureComponent{constructor(t){super(t),_(this,"containerRef",s.createRef()),_(this,"setTooltip",(t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)}));const{width:o,height:r,formData:a}=t;let{viewport:i}=t;a.autozoom&&(i=(0,m.Z)(i,{width:o,height:r,points:e(t.payload.data.features)})),this.state={viewport:i,layer:this.computeLayer(t)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(t){const e=C({},t.formData,{viewport:null}),o=C({},this.props.formData,{viewport:null});a()(e,o)&&t.payload===this.props.payload||this.setState({layer:this.computeLayer(t)})}onViewportChange(t){this.setState({viewport:t})}computeLayer(e){const{formData:o,payload:r,onAddFilter:a}=e;return t(o,r,a,this.setTooltip)}render(){const{formData:t,payload:e,setControlValue:o,height:r,width:a}=this.props,{layer:i,viewport:n}=this.state;return s.createElement(l.Z,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:n,layers:[i],mapStyle:t.mapbox_style,setControlValue:o,width:a,height:r,onViewportChange:this.onViewportChange})}}return o.propTypes=j,o.defaultProps=S,o}function P(t,e){function o(o){const{formData:r,payload:a,setControlValue:i,viewport:n,width:l,height:p}=o;return s.createElement(v,{formData:r,mapboxApiKey:a.data.mapboxApiKey,setControlValue:i,viewport:n,getLayer:t,payload:a,getPoints:e,width:l,height:p})}return o.propTypes=j,o.defaultProps=S,o}},51527:(t,e,o)=>{o.r(e),o.d(e,{getLayer:()=>h,default:()=>u});var r=o(62112),a=o(67294),s=o(38969),i=o(40895),n=o(75647),l=o(24084);function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},p.apply(this,arguments)}function c(t){return t.object.extraProps&&a.createElement("div",{className:"deckgl-tooltip"},Object.keys(t.object.extraProps).map(((e,o)=>a.createElement(l.Z,{key:"prop-"+o,label:e+": ",value:""+t.object.extraProps[e]}))))}function h(t,e,o,a){const n=t,l=n.color_picker,h=[l.r,l.g,l.b,255*l.a];let u=e.data.features.map((t=>p({},t,{path:t.path,width:n.line_width,color:h})));return n.js_data_mutator&&(u=(0,i.Z)(n.js_data_mutator)(u)),new r.Z(p({id:"path-layer-"+n.slice_id,getColor:t=>t.color,getPath:t=>t.path,getWidth:t=>t.width,data:u,rounded:!0,widthScale:1},(0,s.N)(n,a,c)))}const u=(0,n.G)(h,(function(t){let e=[];return t.forEach((t=>{e=e.concat(t.path)})),e}))}}]);
//# sourceMappingURL=a10db4298121ded0ebe7.chunk.js.map