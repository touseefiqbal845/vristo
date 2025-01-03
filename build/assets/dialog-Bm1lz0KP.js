import{r as s,R as f,E as Oe,v as st}from"./index-CT6DBj-5.js";import{W as L,o as b,y as D,n as F,H as M,a as Pe,c as fe,s as V,t as Le,d as ee,T as ct,b as dt,u as re,p as Be,M as we,O as B,m as ft,e as mt}from"./keyboard-BMYjzmSf.js";import{A as pt,h as vt,f as ht,T as be,s as $e,P as te,F as A,I,a as Re,b as De}from"./use-is-mounted-tmkKbwjI.js";import{x as gt,R as Et,i as O,c as wt,u as me,s as bt,C as $t}from"./open-closed-DbIGvLV_.js";let Tt=s.createContext(void 0);function yt(){return s.useContext(Tt)}let Fe=s.createContext(null);Fe.displayName="DescriptionContext";function Ye(){let e=s.useContext(Fe);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ye),t}return e}function Ct(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=b(i=>(t(u=>[...u,i]),()=>t(u=>{let a=u.slice(),o=a.indexOf(i);return o!==-1&&a.splice(o,1),a}))),l=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return f.createElement(Fe.Provider,{value:l},n.children)},[t])]}let Pt="p";function Lt(e,t){let n=s.useId(),r=yt(),{id:l=`headlessui-description-${n}`,...i}=e,u=Ye(),a=D(t);F(()=>u.register(l),[l,u.register]);let o=r||!1,d=s.useMemo(()=>({...u.slot,disabled:o}),[u.slot,o]),c={ref:a,...u.props,id:l};return M({ourProps:c,theirProps:i,slot:d,defaultTag:Pt,name:u.name||"Description"})}let Rt=L(Lt),Ft=Object.assign(Rt,{}),St=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Ue(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...i){let u=t[l].call(n,...i);u&&(n=u,r.forEach(a=>a()))}}}function je(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let Mt=new St(()=>Ue(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function _(e,t){let n=Mt.get(t),r=s.useId(),l=je(n);if(F(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let i=l.indexOf(r),u=l.length;return i===-1&&(i=u,u+=1),i===u-1}let Te=new Map,ne=new Map;function ke(e){var t;let n=(t=ne.get(e))!=null?t:0;return ne.set(e,n+1),n!==0?()=>Ie(e):(Te.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>Ie(e))}function Ie(e){var t;let n=(t=ne.get(e))!=null?t:1;if(n===1?ne.delete(e):ne.set(e,n-1),n!==1)return;let r=Te.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,Te.delete(e))}function xt(e,{allowed:t,disallowed:n}={}){let r=_(e,"inert-others");F(()=>{var l,i;if(!r)return;let u=fe();for(let o of(l=n==null?void 0:n())!=null?l:[])o&&u.add(ke(o));let a=(i=t==null?void 0:t())!=null?i:[];for(let o of a){if(!o)continue;let d=Pe(o);if(!d)continue;let c=o.parentElement;for(;c&&c!==d.body;){for(let $ of c.children)a.some(g=>$.contains(g))||u.add(ke($));c=c.parentElement}}return u.dispose},[r,t,n])}function Ot(e,t,n){let r=V(l=>{let i=l.getBoundingClientRect();i.x===0&&i.y===0&&i.width===0&&i.height===0&&n()});s.useEffect(()=>{if(!e)return;let l=t===null?null:t instanceof HTMLElement?t:t.current;if(!l)return;let i=fe();if(typeof ResizeObserver<"u"){let u=new ResizeObserver(()=>r.current(l));u.observe(l),i.add(()=>u.disconnect())}if(typeof IntersectionObserver<"u"){let u=new IntersectionObserver(()=>r.current(l));u.observe(l),i.add(()=>u.disconnect())}return()=>i.dispose()},[t,r,e])}function Ve(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Dt(){return/Android/gi.test(window.navigator.userAgent)}function kt(){return Ve()||Dt()}function Q(e,t,n,r){let l=V(n);s.useEffect(()=>{if(!e)return;function i(u){l.current(u)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[e,t,r])}function _e(e,t,n,r){let l=V(n);s.useEffect(()=>{if(!e)return;function i(u){l.current(u)}return window.addEventListener(t,i,r),()=>window.removeEventListener(t,i,r)},[e,t,r])}const Ae=30;function It(e,t,n){let r=_(e,"outside-click"),l=V(n),i=s.useCallback(function(o,d){if(o.defaultPrevented)return;let c=d(o);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let $=function g(m){return typeof m=="function"?g(m()):Array.isArray(m)||m instanceof Set?m:[m]}(t);for(let g of $)if(g!==null&&(g.contains(c)||o.composed&&o.composedPath().includes(g)))return;return!pt(c,vt.Loose)&&c.tabIndex!==-1&&o.preventDefault(),l.current(o,c)},[l,t]),u=s.useRef(null);Q(r,"pointerdown",o=>{var d,c;u.current=((c=(d=o.composedPath)==null?void 0:d.call(o))==null?void 0:c[0])||o.target},!0),Q(r,"mousedown",o=>{var d,c;u.current=((c=(d=o.composedPath)==null?void 0:d.call(o))==null?void 0:c[0])||o.target},!0),Q(r,"click",o=>{kt()||u.current&&(i(o,()=>u.current),u.current=null)},!0);let a=s.useRef({x:0,y:0});Q(r,"touchstart",o=>{a.current.x=o.touches[0].clientX,a.current.y=o.touches[0].clientY},!0),Q(r,"touchend",o=>{let d={x:o.changedTouches[0].clientX,y:o.changedTouches[0].clientY};if(!(Math.abs(d.x-a.current.x)>=Ae||Math.abs(d.y-a.current.y)>=Ae))return i(o,()=>o.target instanceof HTMLElement?o.target:null)},!0),_e(r,"blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function le(...e){return s.useMemo(()=>Pe(...e),[...e])}function Ge(e,t,n,r){let l=V(n);s.useEffect(()=>{e=e??window;function i(u){l.current(u)}return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)},[e,t,r])}function At(){let e;return{before({doc:t}){var n;let r=t.documentElement,l=(n=t.defaultView)!=null?n:window;e=Math.max(0,l.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,l=Math.max(0,r.clientWidth-r.offsetWidth),i=Math.max(0,e-l);n.style(r,"paddingRight",`${i}px`)}}}function Ht(){return Ve()?{before({doc:e,d:t,meta:n}){function r(l){return n.containers.flatMap(i=>i()).some(i=>i.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=fe();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let i=(l=window.scrollY)!=null?l:window.pageYOffset,u=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let o=a.target.closest("a");if(!o)return;let{hash:d}=new URL(o.href),c=e.querySelector(d);c&&!r(c)&&(u=c)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let o=a.target;for(;o.parentElement&&r(o.parentElement);)o=o.parentElement;t.style(o,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(r(a.target)){let o=a.target;for(;o.parentElement&&o.dataset.headlessuiPortal!==""&&!(o.scrollHeight>o.clientHeight||o.scrollWidth>o.clientWidth);)o=o.parentElement;o.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),t.add(()=>{var a;let o=(a=window.scrollY)!=null?a:window.pageYOffset;i!==o&&window.scrollTo(0,i),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)})})}}:{}}function Nt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Wt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let Y=Ue(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:fe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Wt(n)},l=[Ht(),At(),Nt()];l.forEach(({before:i})=>i==null?void 0:i(r)),l.forEach(({after:i})=>i==null?void 0:i(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});Y.subscribe(()=>{let e=Y.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&Y.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Y.dispatch("TEARDOWN",n)}});function Bt(e,t,n=()=>({containers:[]})){let r=je(Y),l=t?r.get(t):void 0,i=l?l.count>0:!1;return F(()=>{if(!(!t||!e))return Y.dispatch("PUSH",t,n),()=>Y.dispatch("POP",t,n)},[e,t]),i}function Yt(e,t,n=()=>[document.body]){let r=_(e,"scroll-lock");Bt(r,t,l=>{var i;return{containers:[...(i=l.containers)!=null?i:[],n]}})}function Se(e,t){let n=s.useRef([]),r=b(e);s.useEffect(()=>{let l=[...n.current];for(let[i,u]of t.entries())if(n.current[i]!==u){let a=r(t,l);return n.current=t,a}},[r,...t])}function Ut(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let H=[];Ut(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||H[0]===t.target)return;let n=t.target;n=n.closest(ht),H.unshift(n??t.target),H=H.filter(r=>r!=null&&r.isConnected),H.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Xe(e){let t=b(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,Le(()=>{n.current&&t()})}),[t])}function jt(){let e=typeof document>"u";return"useSyncExternalStore"in Oe?(t=>t.useSyncExternalStore)(Oe)(()=>()=>{},()=>!1,()=>!e):!1}function oe(){let e=jt(),[t,n]=s.useState(ee.isHandoffComplete);return t&&ee.isHandoffComplete===!1&&n(!1),s.useEffect(()=>{t!==!0&&n(!0)},[t]),s.useEffect(()=>ee.handoff(),[]),e?!1:t}let qe=s.createContext(!1);function Vt(){return s.useContext(qe)}function He(e){return f.createElement(qe.Provider,{value:e.force},e.children)}function _t(e){let t=Vt(),n=s.useContext(Ke),r=le(e),[l,i]=s.useState(()=>{var u;if(!t&&n!==null)return(u=n.current)!=null?u:null;if(ee.isServer)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return s.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),s.useEffect(()=>{t||n!==null&&i(n.current)},[n,i,t]),l}let ze=s.Fragment,Gt=L(function(e,t){let n=e,r=s.useRef(null),l=D(ct(c=>{r.current=c}),t),i=le(r),u=_t(r),[a]=s.useState(()=>{var c;return ee.isServer?null:(c=i==null?void 0:i.createElement("div"))!=null?c:null}),o=s.useContext(ye),d=oe();return F(()=>{!u||!a||u.contains(a)||(a.setAttribute("data-headlessui-portal",""),u.appendChild(a))},[u,a]),F(()=>{if(a&&o)return o.register(a)},[o,a]),Xe(()=>{var c;!u||!a||(a instanceof Node&&u.contains(a)&&u.removeChild(a),u.childNodes.length<=0&&((c=u.parentElement)==null||c.removeChild(u)))}),d?!u||!a?null:st.createPortal(M({ourProps:{ref:l},theirProps:n,slot:{},defaultTag:ze,name:"Portal"}),a):null});function Xt(e,t){let n=D(t),{enabled:r=!0,...l}=e;return r?f.createElement(Gt,{...l,ref:n}):M({ourProps:{ref:n},theirProps:l,slot:{},defaultTag:ze,name:"Portal"})}let qt=s.Fragment,Ke=s.createContext(null);function zt(e,t){let{target:n,...r}=e,l={ref:D(t)};return f.createElement(Ke.Provider,{value:n},M({ourProps:l,theirProps:r,defaultTag:qt,name:"Popover.Group"}))}let ye=s.createContext(null);function Kt(){let e=s.useContext(ye),t=s.useRef([]),n=b(i=>(t.current.push(i),e&&e.register(i),()=>r(i))),r=b(i=>{let u=t.current.indexOf(i);u!==-1&&t.current.splice(u,1),e&&e.unregister(i)}),l=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:i}){return f.createElement(ye.Provider,{value:l},i)},[l])]}let Zt=L(Xt),Ze=L(zt),Qt=Object.assign(Zt,{Group:Ze});function Jt(e,t=typeof document<"u"?document.defaultView:null,n){let r=_(e,"escape");Ge(t,"keydown",l=>{r&&(l.defaultPrevented||l.key===dt.Escape&&n(l))})}function en(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return F(()=>{if(!t)return;function l(i){r(i.matches)}return t.addEventListener("change",l),()=>t.removeEventListener("change",l)},[t]),n}function tn({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=le(n),l=b(()=>{var i,u;let a=[];for(let o of e)o!==null&&(o instanceof HTMLElement?a.push(o):"current"in o&&o.current instanceof HTMLElement&&a.push(o.current));if(t!=null&&t.current)for(let o of t.current)a.push(o);for(let o of(i=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?i:[])o!==document.body&&o!==document.head&&o instanceof HTMLElement&&o.id!=="headlessui-portal-root"&&(n&&(o.contains(n)||o.contains((u=n==null?void 0:n.getRootNode())==null?void 0:u.host))||a.some(d=>o.contains(d))||a.push(o));return a});return{resolveContainers:l,contains:b(i=>l().some(u=>u.contains(i)))}}let Qe=s.createContext(null);function Ne({children:e,node:t}){let[n,r]=s.useState(null),l=Je(t??n);return f.createElement(Qe.Provider,{value:l},e,l===null&&f.createElement(be,{features:$e.Hidden,ref:i=>{var u,a;if(i){for(let o of(a=(u=Pe(i))==null?void 0:u.querySelectorAll("html > *, body > *"))!=null?a:[])if(o!==document.body&&o!==document.head&&o instanceof HTMLElement&&o!=null&&o.contains(i)){r(o);break}}}}))}function Je(e=null){var t;return(t=s.useContext(Qe))!=null?t:e}var J=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(J||{});function nn(){let e=s.useRef(0);return _e(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function et(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let rn="div";var W=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(W||{});function ln(e,t){let n=s.useRef(null),r=D(n,t),{initialFocus:l,initialFocusFallback:i,containers:u,features:a=15,...o}=e;oe()||(a=0);let d=le(n);sn(a,{ownerDocument:d});let c=cn(a,{ownerDocument:d,container:n,initialFocus:l,initialFocusFallback:i});dn(a,{ownerDocument:d,container:n,containers:u,previousActiveElement:c});let $=nn(),g=b(h=>{let C=n.current;C&&(w=>w())(()=>{re($.current,{[J.Forwards]:()=>{te(C,A.First,{skipElements:[h.relatedTarget,i]})},[J.Backwards]:()=>{te(C,A.Last,{skipElements:[h.relatedTarget,i]})}})})}),m=_(!!(a&2),"focus-trap#tab-lock"),p=Be(),E=s.useRef(!1),v={ref:r,onKeyDown(h){h.key=="Tab"&&(E.current=!0,p.requestAnimationFrame(()=>{E.current=!1}))},onBlur(h){if(!(a&4))return;let C=et(u);n.current instanceof HTMLElement&&C.add(n.current);let w=h.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(tt(C,w)||(E.current?te(n.current,re($.current,{[J.Forwards]:()=>A.Next,[J.Backwards]:()=>A.Previous})|A.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&I(h.target)))}};return f.createElement(f.Fragment,null,m&&f.createElement(be,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:$e.Focusable}),M({ourProps:v,theirProps:o,defaultTag:rn,name:"FocusTrap"}),m&&f.createElement(be,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:$e.Focusable}))}let on=L(ln),un=Object.assign(on,{features:W});function an(e=!0){let t=s.useRef(H.slice());return Se(([n],[r])=>{r===!0&&n===!1&&Le(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=H.slice())},[e,H,t]),b(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function sn(e,{ownerDocument:t}){let n=!!(e&8),r=an(n);Se(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&I(r())},[n]),Xe(()=>{n&&I(r())})}function cn(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:l}){let i=s.useRef(null),u=_(!!(e&1),"focus-trap#initial-focus"),a=Re();return Se(()=>{if(e===0)return;if(!u){l!=null&&l.current&&I(l.current);return}let o=n.current;o&&Le(()=>{if(!a.current)return;let d=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===d){i.current=d;return}}else if(o.contains(d)){i.current=d;return}if(r!=null&&r.current)I(r.current);else{if(e&16){if(te(o,A.First|A.AutoFocus)!==De.Error)return}else if(te(o,A.First)!==De.Error)return;if(l!=null&&l.current&&(I(l.current),(t==null?void 0:t.activeElement)===l.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}i.current=t==null?void 0:t.activeElement})},[l,u,e]),i}function dn(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:l}){let i=Re(),u=!!(e&4);Ge(t==null?void 0:t.defaultView,"focus",a=>{if(!u||!i.current)return;let o=et(r);n.current instanceof HTMLElement&&o.add(n.current);let d=l.current;if(!d)return;let c=a.target;c&&c instanceof HTMLElement?tt(o,c)?(l.current=c,I(c)):(a.preventDefault(),a.stopPropagation(),I(d)):I(l.current)},!0)}function tt(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function nt(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:lt)!==s.Fragment||f.Children.count(e.children)===1}let pe=s.createContext(null);pe.displayName="TransitionContext";var fn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(fn||{});function mn(){let e=s.useContext(pe);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function pn(){let e=s.useContext(ve);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let ve=s.createContext(null);ve.displayName="NestingContext";function he(e){return"children"in e?he(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function rt(e,t){let n=V(e),r=s.useRef([]),l=Re(),i=Be(),u=b((m,p=B.Hidden)=>{let E=r.current.findIndex(({el:v})=>v===m);E!==-1&&(re(p,{[B.Unmount](){r.current.splice(E,1)},[B.Hidden](){r.current[E].state="hidden"}}),i.microTask(()=>{var v;!he(r)&&l.current&&((v=n.current)==null||v.call(n))}))}),a=b(m=>{let p=r.current.find(({el:E})=>E===m);return p?p.state!=="visible"&&(p.state="visible"):r.current.push({el:m,state:"visible"}),()=>u(m,B.Unmount)}),o=s.useRef([]),d=s.useRef(Promise.resolve()),c=s.useRef({enter:[],leave:[]}),$=b((m,p,E)=>{o.current.splice(0),t&&(t.chains.current[p]=t.chains.current[p].filter(([v])=>v!==m)),t==null||t.chains.current[p].push([m,new Promise(v=>{o.current.push(v)})]),t==null||t.chains.current[p].push([m,new Promise(v=>{Promise.all(c.current[p].map(([h,C])=>C)).then(()=>v())})]),p==="enter"?d.current=d.current.then(()=>t==null?void 0:t.wait.current).then(()=>E(p)):E(p)}),g=b((m,p,E)=>{Promise.all(c.current[p].splice(0).map(([v,h])=>h)).then(()=>{var v;(v=o.current.shift())==null||v()}).then(()=>E(p))});return s.useMemo(()=>({children:r,register:a,unregister:u,onStart:$,onStop:g,wait:d,chains:c}),[a,u,r,$,g,c,d])}let lt=s.Fragment,ot=we.RenderStrategy;function vn(e,t){var n,r;let{transition:l=!0,beforeEnter:i,afterEnter:u,beforeLeave:a,afterLeave:o,enter:d,enterFrom:c,enterTo:$,entered:g,leave:m,leaveFrom:p,leaveTo:E,...v}=e,[h,C]=s.useState(null),w=s.useRef(null),T=nt(e),ie=D(...T?[w,t,C]:t===null?[]:[t]),k=(n=v.unmount)==null||n?B.Unmount:B.Hidden,{show:S,appear:ue,initial:ae}=mn(),[R,N]=s.useState(S?"visible":"hidden"),G=pn(),{register:U,unregister:j}=G;F(()=>U(w),[U,w]),F(()=>{if(k===B.Hidden&&w.current){if(S&&R!=="visible"){N("visible");return}return re(R,{hidden:()=>j(w),visible:()=>U(w)})}},[R,w,U,j,S,k]);let X=oe();F(()=>{if(T&&X&&R==="visible"&&w.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[w,R,X,T]);let se=ae&&!ue,ce=ue&&S&&ae,q=s.useRef(!1),x=rt(()=>{q.current||(N("hidden"),j(w))},G),y=b(Ee=>{q.current=!0;let de=Ee?"enter":"leave";x.onStart(w,de,Z=>{Z==="enter"?i==null||i():Z==="leave"&&(a==null||a())})}),z=b(Ee=>{let de=Ee?"enter":"leave";q.current=!1,x.onStop(w,de,Z=>{Z==="enter"?u==null||u():Z==="leave"&&(o==null||o())}),de==="leave"&&!he(x)&&(N("hidden"),j(w))});s.useEffect(()=>{T&&l||(y(S),z(S))},[S,T,l]);let ut=!(!l||!T||!X||se),[,P]=gt(ut,h,S,{start:y,end:z}),at=ft({ref:ie,className:((r=mt(v.className,ce&&d,ce&&c,P.enter&&d,P.enter&&P.closed&&c,P.enter&&!P.closed&&$,P.leave&&m,P.leave&&!P.closed&&p,P.leave&&P.closed&&E,!P.transition&&S&&g))==null?void 0:r.trim())||void 0,...Et(P)}),K=0;return R==="visible"&&(K|=O.Open),R==="hidden"&&(K|=O.Closed),P.enter&&(K|=O.Opening),P.leave&&(K|=O.Closing),f.createElement(ve.Provider,{value:x},f.createElement(wt,{value:K},M({ourProps:at,theirProps:v,defaultTag:lt,features:ot,visible:R==="visible",name:"Transition.Child"})))}function hn(e,t){let{show:n,appear:r=!1,unmount:l=!0,...i}=e,u=s.useRef(null),a=nt(e),o=D(...a?[u,t]:t===null?[]:[t]);oe();let d=me();if(n===void 0&&d!==null&&(n=(d&O.Open)===O.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,$]=s.useState(n?"visible":"hidden"),g=rt(()=>{n||$("hidden")}),[m,p]=s.useState(!0),E=s.useRef([n]);F(()=>{m!==!1&&E.current[E.current.length-1]!==n&&(E.current.push(n),p(!1))},[E,n]);let v=s.useMemo(()=>({show:n,appear:r,initial:m}),[n,r,m]);F(()=>{n?$("visible"):!he(g)&&u.current!==null&&$("hidden")},[n,g]);let h={unmount:l},C=b(()=>{var T;m&&p(!1),(T=e.beforeEnter)==null||T.call(e)}),w=b(()=>{var T;m&&p(!1),(T=e.beforeLeave)==null||T.call(e)});return f.createElement(ve.Provider,{value:g},f.createElement(pe.Provider,{value:v},M({ourProps:{...h,as:s.Fragment,children:f.createElement(it,{ref:o,...h,...i,beforeEnter:C,beforeLeave:w})},theirProps:{},defaultTag:s.Fragment,features:ot,visible:c==="visible",name:"Transition"})))}function gn(e,t){let n=s.useContext(pe)!==null,r=me()!==null;return f.createElement(f.Fragment,null,!n&&r?f.createElement(Ce,{ref:t,...e}):f.createElement(it,{ref:t,...e}))}let Ce=L(hn),it=L(vn),Me=L(gn),En=Object.assign(Ce,{Child:Me,Root:Ce});var wn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(wn||{}),bn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(bn||{});let $n={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},xe=s.createContext(null);xe.displayName="DialogContext";function ge(e){let t=s.useContext(xe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ge),n}return t}function Tn(e,t){return re(t.type,$n,e,t)}let We=L(function(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:l,onClose:i,initialFocus:u,role:a="dialog",autoFocus:o=!0,__demoMode:d=!1,unmount:c=!1,...$}=e,g=s.useRef(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(g.current||(g.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let m=me();l===void 0&&m!==null&&(l=(m&O.Open)===O.Open);let p=s.useRef(null),E=D(p,t),v=le(p),h=l?0:1,[C,w]=s.useReducer(Tn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),T=b(()=>i(!1)),ie=b(y=>w({type:0,id:y})),k=oe()?h===0:!1,[S,ue]=Kt(),ae={get current(){var y;return(y=C.panelRef.current)!=null?y:p.current}},R=Je(),{resolveContainers:N}=tn({mainTreeNode:R,portals:S,defaultContainers:[ae]}),G=m!==null?(m&O.Closing)===O.Closing:!1;xt(d||G?!1:k,{allowed:b(()=>{var y,z;return[(z=(y=p.current)==null?void 0:y.closest("[data-headlessui-portal]"))!=null?z:null]}),disallowed:b(()=>{var y;return[(y=R==null?void 0:R.closest("body > *:not(#headlessui-portal-root)"))!=null?y:null]})}),It(k,N,y=>{y.preventDefault(),T()}),Jt(k,v==null?void 0:v.defaultView,y=>{y.preventDefault(),y.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),T()}),Yt(d||G?!1:k,v,N),Ot(k,p,T);let[U,j]=Ct(),X=s.useMemo(()=>[{dialogState:h,close:T,setTitleId:ie,unmount:c},C],[h,C,T,ie,c]),se=s.useMemo(()=>({open:h===0}),[h]),ce={ref:E,id:r,role:a,tabIndex:-1,"aria-modal":d?void 0:h===0?!0:void 0,"aria-labelledby":C.titleId,"aria-describedby":U,unmount:c},q=!en(),x=W.None;return k&&!d&&(x|=W.RestoreFocus,x|=W.TabLock,o&&(x|=W.AutoFocus),q&&(x|=W.InitialFocus)),f.createElement(bt,null,f.createElement(He,{force:!0},f.createElement(Qt,null,f.createElement(xe.Provider,{value:X},f.createElement(Ze,{target:p},f.createElement(He,{force:!1},f.createElement(j,{slot:se},f.createElement(ue,null,f.createElement(un,{initialFocus:u,initialFocusFallback:p,containers:N,features:x},f.createElement($t,{value:T},M({ourProps:ce,theirProps:$,slot:se,defaultTag:yn,features:Cn,visible:h===0,name:"Dialog"})))))))))))}),yn="div",Cn=we.RenderStrategy|we.Static;function Pn(e,t){let{transition:n=!1,open:r,...l}=e,i=me(),u=e.hasOwnProperty("open")||i!==null,a=e.hasOwnProperty("onClose");if(!u&&!a)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!u)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!a)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!i&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!l.static?f.createElement(Ne,null,f.createElement(En,{show:r,transition:n,unmount:l.unmount},f.createElement(We,{ref:t,...l}))):f.createElement(Ne,null,f.createElement(We,{ref:t,open:r,...l}))}let Ln="div";function Rn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:l=!1,...i}=e,[{dialogState:u,unmount:a},o]=ge("Dialog.Panel"),d=D(t,o.panelRef),c=s.useMemo(()=>({open:u===0}),[u]),$=b(m=>{m.stopPropagation()}),g={ref:d,id:r,onClick:$};return f.createElement(l?Me:s.Fragment,{...l?{unmount:a}:{}},M({ourProps:g,theirProps:i,slot:c,defaultTag:Ln,name:"Dialog.Panel"}))}let Fn="div";function Sn(e,t){let{transition:n=!1,...r}=e,[{dialogState:l,unmount:i}]=ge("Dialog.Backdrop"),u=s.useMemo(()=>({open:l===0}),[l]),a={ref:t,"aria-hidden":!0};return f.createElement(n?Me:s.Fragment,{...n?{unmount:i}:{}},M({ourProps:a,theirProps:r,slot:u,defaultTag:Fn,name:"Dialog.Backdrop"}))}let Mn="h2";function xn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:i,setTitleId:u}]=ge("Dialog.Title"),a=D(t);s.useEffect(()=>(u(r),()=>u(null)),[r,u]);let o=s.useMemo(()=>({open:i===0}),[i]);return M({ourProps:{ref:a,id:r},theirProps:l,slot:o,defaultTag:Mn,name:"Dialog.Title"})}let On=L(Pn),Dn=L(Rn),Bn=L(Sn),kn=L(xn),Yn=Object.assign(On,{Panel:Dn,Title:kn,Description:Ft});export{Dn as $,Me as L,Yn as P,En as X,Bn as c};
