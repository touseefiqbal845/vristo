import{r as s,R as T}from"./index-l278j1dF.js";var P=Object.defineProperty,F=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t,n)=>(F(e,typeof t!="symbol"?t+"":t,n),n);let R=class{constructor(){j(this,"current",this.detect()),j(this,"handoffState","pending"),j(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},A=new R;function W(e){return A.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function D(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function S(){let e=[],t={addEventListener(n,r,o,i){return n.addEventListener(r,o,i),t.add(()=>n.removeEventListener(r,o,i))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return D(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let i=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:i})})},group(n){let r=S();return n(r),this.add(()=>r.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function V(){let[e]=s.useState(S);return s.useEffect(()=>()=>e.dispose(),[e]),e}let H=(e,t)=>{A.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function L(e){let t=s.useRef(e);return H(()=>{t.current=e},[e]),t}let U=function(e){let t=L(e);return T.useCallback((...n)=>t.current(...n),[t])};function O(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}function N(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,N),r}var q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(q||{}),C=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(C||{});function K({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:l,mergeRefs:c}){c=c??x;let a=$(t,e);if(i)return w(a,n,r,l,c);let m=o??0;if(m&2){let{static:u=!1,...f}=a;if(u)return w(f,n,r,l,c)}if(m&1){let{unmount:u=!0,...f}=a;return N(u?0:1,{0(){return null},1(){return w({...f,hidden:!0,style:{display:"none"}},n,r,l,c)}})}return w(a,n,r,l,c)}function w(e,t={},n,r,o){let{as:i=n,children:l,refName:c="ref",...a}=E(e,["unmount","static"]),m=e.ref!==void 0?{[c]:e.ref}:{},u=typeof l=="function"?l(t):l;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(t)),a["aria-labelledby"]&&a["aria-labelledby"]===a.id&&(a["aria-labelledby"]=void 0);let f={};if(t){let d=!1,p=[];for(let[h,g]of Object.entries(t))typeof g=="boolean"&&(d=!0),g===!0&&p.push(h.replace(/([A-Z])/g,b=>`-${b.toLowerCase()}`));if(d){f["data-headlessui-state"]=p.join(" ");for(let h of p)f[`data-${h}`]=""}}if(i===s.Fragment&&(Object.keys(y(a)).length>0||Object.keys(y(f)).length>0))if(!s.isValidElement(u)||Array.isArray(u)&&u.length>1){if(Object.keys(y(a)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(y(a)).concat(Object.keys(y(f))).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}else{let d=u.props,p=d==null?void 0:d.className,h=typeof p=="function"?(...v)=>O(p(...v),a.className):O(p,a.className),g=h?{className:h}:{},b=$(u.props,y(E(a,["ref"])));for(let v in f)v in b&&delete f[v];return s.cloneElement(u,Object.assign({},b,f,m,{ref:o(u.ref,m.ref)},g))}return s.createElement(i,Object.assign({},E(a,["ref"]),i!==s.Fragment&&m,i!==s.Fragment&&f),u)}function Y(){let e=s.useRef([]),t=s.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function x(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function $(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[o=>{var i;return(i=o==null?void 0:o.preventDefault)==null?void 0:i.call(o)}]);for(let r in n)Object.assign(t,{[r](o,...i){let l=n[r];for(let c of l){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;c(o,...i)}}});return t}function Z(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];for(let r in n)Object.assign(t,{[r](...o){let i=n[r];for(let l of i)l==null||l(...o)}});return t}function z(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function y(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function E(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let k=Symbol();function G(e,t=!0){return Object.assign(e,{[k]:t})}function J(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=U(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[k]))?void 0:n}var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});export{Z as D,K as H,Y as I,q as M,C as O,G as T,z as W,W as a,I as b,S as c,A as d,O as e,y as m,H as n,U as o,V as p,L as s,D as t,N as u,J as y};
