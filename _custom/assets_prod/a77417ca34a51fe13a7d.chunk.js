"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[616],{80616:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(67294),c=r(63475),l=r(11965);function u({height:e,width:t,echartOptions:r,setDataMask:u,labelMap:a,groupby:s,selectedValues:i,formData:h}){const o=(0,n.useCallback)((e=>{if(!h.emitFilter)return;const t=e.map((e=>a[e]));u({extraFormData:{filters:0===e.length?[]:s.map(((e,r)=>{const n=t.map((e=>e[r]));return null==n?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:n}}))},filterState:{value:t.length?t:null,selectedValues:e.length?e:null}})}),[s,a,u,i]),d={click:e=>{const{name:t}=e,r=Object.values(i);r.includes(t)?o(r.filter((e=>e!==t))):o([t])}};return(0,l.tZ)(c.Z,{height:e,width:t,echartOptions:r,eventHandlers:d,selectedValues:i})}},63475:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),c=r(51995),l=r(29027),u=r(11965);const a=c.iK.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;function s({width:e,height:t,echartOptions:r,eventHandlers:c,zrEventHandlers:s,selectedValues:i={}},h){const o=(0,n.useRef)(null),d=(0,n.useRef)(),f=(0,n.useMemo)((()=>Object.keys(i)||[]),[i]),p=(0,n.useRef)([]);return(0,n.useImperativeHandle)(h,(()=>({getEchartInstance:()=>d.current}))),(0,n.useEffect)((()=>{o.current&&(d.current||(d.current=(0,l.S1)(o.current)),Object.entries(c||{}).forEach((([e,t])=>{var r,n;null==(r=d.current)||r.off(e),null==(n=d.current)||n.on(e,t)})),Object.entries(s||{}).forEach((([e,t])=>{var r,n;null==(r=d.current)||r.getZr().off(e),null==(n=d.current)||n.getZr().on(e,t)})),d.current.setOption(r,!0))}),[r,c,s]),(0,n.useEffect)((()=>{d.current&&(d.current.dispatchAction({type:"downplay",dataIndex:p.current.filter((e=>!f.includes(e)))}),f.length&&d.current.dispatchAction({type:"highlight",dataIndex:f}),p.current=f)}),[f]),(0,n.useEffect)((()=>{d.current&&d.current.resize({width:e,height:t})}),[e,t]),(0,u.tZ)(a,{ref:o,height:t,width:e})}const i=(0,n.forwardRef)(s)}}]);
//# sourceMappingURL=a77417ca34a51fe13a7d.chunk.js.map