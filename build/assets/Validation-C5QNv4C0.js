import{w as $r,r as f,u as Ir,s as Lr,j as a,L as Pr,y as Rr}from"./index-CX4uGKIi.js";import{C as te}from"./Highlight-Cg2ZOD-9.js";import{c as bt,a as _,d as Mr}from"./index.esm-BTvzvwNk.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import{S as Dr}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{I as re}from"./IconCode-DFCZHy97.js";var Ur=function(t){return Vr(t)&&!Gr(t)};function Vr(e){return!!e&&typeof e=="object"}function Gr(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Br(e)}var zr=typeof Symbol=="function"&&Symbol.for,qr=zr?Symbol.for("react.element"):60103;function Br(e){return e.$$typeof===qr}function Yr(e){return Array.isArray(e)?[]:{}}function je(e,t){return t.clone!==!1&&t.isMergeableObject(e)?me(Yr(e),e,t):e}function Zr(e,t,r){return e.concat(t).map(function(i){return je(i,r)})}function Hr(e,t,r){var i={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(s){i[s]=je(e[s],r)}),Object.keys(t).forEach(function(s){!r.isMergeableObject(t[s])||!e[s]?i[s]=je(t[s],r):i[s]=me(e[s],t[s],r)}),i}function me(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Zr,r.isMergeableObject=r.isMergeableObject||Ur;var i=Array.isArray(t),s=Array.isArray(e),l=i===s;return l?i?r.arrayMerge(e,t,r):Hr(e,t,r):je(t,r)}me.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(i,s){return me(i,s,r)},{})};var Ue=me,Bt=typeof global=="object"&&global&&global.Object===Object&&global,Kr=typeof self=="object"&&self&&self.Object===Object&&self,D=Bt||Kr||Function("return this")(),z=D.Symbol,Yt=Object.prototype,Wr=Yt.hasOwnProperty,Xr=Yt.toString,le=z?z.toStringTag:void 0;function Jr(e){var t=Wr.call(e,le),r=e[le];try{e[le]=void 0;var i=!0}catch{}var s=Xr.call(e);return i&&(t?e[le]=r:delete e[le]),s}var Qr=Object.prototype,ea=Qr.toString;function ta(e){return ea.call(e)}var ra="[object Null]",aa="[object Undefined]",vt=z?z.toStringTag:void 0;function K(e){return e==null?e===void 0?aa:ra:vt&&vt in Object(e)?Jr(e):ta(e)}function Zt(e,t){return function(r){return e(t(r))}}var Ze=Zt(Object.getPrototypeOf,Object);function W(e){return e!=null&&typeof e=="object"}var ia="[object Object]",na=Function.prototype,sa=Object.prototype,Ht=na.toString,oa=sa.hasOwnProperty,la=Ht.call(Object);function gt(e){if(!W(e)||K(e)!=ia)return!1;var t=Ze(e);if(t===null)return!0;var r=oa.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Ht.call(r)==la}function ca(){this.__data__=[],this.size=0}function Kt(e,t){return e===t||e!==e&&t!==t}function Ne(e,t){for(var r=e.length;r--;)if(Kt(e[r][0],t))return r;return-1}var ua=Array.prototype,da=ua.splice;function ma(e){var t=this.__data__,r=Ne(t,e);if(r<0)return!1;var i=t.length-1;return r==i?t.pop():da.call(t,r,1),--this.size,!0}function fa(e){var t=this.__data__,r=Ne(t,e);return r<0?void 0:t[r][1]}function pa(e){return Ne(this.__data__,e)>-1}function ha(e,t){var r=this.__data__,i=Ne(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}function G(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}G.prototype.clear=ca;G.prototype.delete=ma;G.prototype.get=fa;G.prototype.has=pa;G.prototype.set=ha;function ba(){this.__data__=new G,this.size=0}function va(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function ga(e){return this.__data__.get(e)}function ya(e){return this.__data__.has(e)}function he(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var xa="[object AsyncFunction]",ja="[object Function]",Na="[object GeneratorFunction]",Sa="[object Proxy]";function Wt(e){if(!he(e))return!1;var t=K(e);return t==ja||t==Na||t==xa||t==Sa}var Pe=D["__core-js_shared__"],yt=function(){var e=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Fa(e){return!!yt&&yt in e}var Ea=Function.prototype,Ta=Ea.toString;function X(e){if(e!=null){try{return Ta.call(e)}catch{}try{return e+""}catch{}}return""}var wa=/[\\^$.*+?()[\]{}|]/g,Ca=/^\[object .+?Constructor\]$/,_a=Function.prototype,ka=Object.prototype,Aa=_a.toString,Oa=ka.hasOwnProperty,$a=RegExp("^"+Aa.call(Oa).replace(wa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ia(e){if(!he(e)||Fa(e))return!1;var t=Wt(e)?$a:Ca;return t.test(X(e))}function La(e,t){return e==null?void 0:e[t]}function J(e,t){var r=La(e,t);return Ia(r)?r:void 0}var fe=J(D,"Map"),pe=J(Object,"create");function Pa(){this.__data__=pe?pe(null):{},this.size=0}function Ra(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ma="__lodash_hash_undefined__",Da=Object.prototype,Ua=Da.hasOwnProperty;function Va(e){var t=this.__data__;if(pe){var r=t[e];return r===Ma?void 0:r}return Ua.call(t,e)?t[e]:void 0}var Ga=Object.prototype,za=Ga.hasOwnProperty;function qa(e){var t=this.__data__;return pe?t[e]!==void 0:za.call(t,e)}var Ba="__lodash_hash_undefined__";function Ya(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pe&&t===void 0?Ba:t,this}function H(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}H.prototype.clear=Pa;H.prototype.delete=Ra;H.prototype.get=Va;H.prototype.has=qa;H.prototype.set=Ya;function Za(){this.size=0,this.__data__={hash:new H,map:new(fe||G),string:new H}}function Ha(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Se(e,t){var r=e.__data__;return Ha(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ka(e){var t=Se(this,e).delete(e);return this.size-=t?1:0,t}function Wa(e){return Se(this,e).get(e)}function Xa(e){return Se(this,e).has(e)}function Ja(e,t){var r=Se(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}function q(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}q.prototype.clear=Za;q.prototype.delete=Ka;q.prototype.get=Wa;q.prototype.has=Xa;q.prototype.set=Ja;var Qa=200;function ei(e,t){var r=this.__data__;if(r instanceof G){var i=r.__data__;if(!fe||i.length<Qa-1)return i.push([e,t]),this.size=++r.size,this;r=this.__data__=new q(i)}return r.set(e,t),this.size=r.size,this}function se(e){var t=this.__data__=new G(e);this.size=t.size}se.prototype.clear=ba;se.prototype.delete=va;se.prototype.get=ga;se.prototype.has=ya;se.prototype.set=ei;function ti(e,t){for(var r=-1,i=e==null?0:e.length;++r<i&&t(e[r],r,e)!==!1;);return e}var xt=function(){try{var e=J(Object,"defineProperty");return e({},"",{}),e}catch{}}();function Xt(e,t,r){t=="__proto__"&&xt?xt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var ri=Object.prototype,ai=ri.hasOwnProperty;function Jt(e,t,r){var i=e[t];(!(ai.call(e,t)&&Kt(i,r))||r===void 0&&!(t in e))&&Xt(e,t,r)}function Fe(e,t,r,i){var s=!r;r||(r={});for(var l=-1,c=t.length;++l<c;){var o=t[l],u=void 0;u===void 0&&(u=e[o]),s?Xt(r,o,u):Jt(r,o,u)}return r}function ii(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}var ni="[object Arguments]";function jt(e){return W(e)&&K(e)==ni}var Qt=Object.prototype,si=Qt.hasOwnProperty,oi=Qt.propertyIsEnumerable,li=jt(function(){return arguments}())?jt:function(e){return W(e)&&si.call(e,"callee")&&!oi.call(e,"callee")},be=Array.isArray;function ci(){return!1}var er=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nt=er&&typeof module=="object"&&module&&!module.nodeType&&module,ui=Nt&&Nt.exports===er,St=ui?D.Buffer:void 0,di=St?St.isBuffer:void 0,tr=di||ci,mi=9007199254740991,fi=/^(?:0|[1-9]\d*)$/;function pi(e,t){var r=typeof e;return t=t??mi,!!t&&(r=="number"||r!="symbol"&&fi.test(e))&&e>-1&&e%1==0&&e<t}var hi=9007199254740991;function rr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=hi}var bi="[object Arguments]",vi="[object Array]",gi="[object Boolean]",yi="[object Date]",xi="[object Error]",ji="[object Function]",Ni="[object Map]",Si="[object Number]",Fi="[object Object]",Ei="[object RegExp]",Ti="[object Set]",wi="[object String]",Ci="[object WeakMap]",_i="[object ArrayBuffer]",ki="[object DataView]",Ai="[object Float32Array]",Oi="[object Float64Array]",$i="[object Int8Array]",Ii="[object Int16Array]",Li="[object Int32Array]",Pi="[object Uint8Array]",Ri="[object Uint8ClampedArray]",Mi="[object Uint16Array]",Di="[object Uint32Array]",N={};N[Ai]=N[Oi]=N[$i]=N[Ii]=N[Li]=N[Pi]=N[Ri]=N[Mi]=N[Di]=!0;N[bi]=N[vi]=N[_i]=N[gi]=N[ki]=N[yi]=N[xi]=N[ji]=N[Ni]=N[Si]=N[Fi]=N[Ei]=N[Ti]=N[wi]=N[Ci]=!1;function Ui(e){return W(e)&&rr(e.length)&&!!N[K(e)]}function He(e){return function(t){return e(t)}}var ar=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ue=ar&&typeof module=="object"&&module&&!module.nodeType&&module,Vi=ue&&ue.exports===ar,Re=Vi&&Bt.process,ne=function(){try{var e=ue&&ue.require&&ue.require("util").types;return e||Re&&Re.binding&&Re.binding("util")}catch{}}(),Ft=ne&&ne.isTypedArray,Gi=Ft?He(Ft):Ui,zi=Object.prototype,qi=zi.hasOwnProperty;function ir(e,t){var r=be(e),i=!r&&li(e),s=!r&&!i&&tr(e),l=!r&&!i&&!s&&Gi(e),c=r||i||s||l,o=c?ii(e.length,String):[],u=o.length;for(var b in e)(t||qi.call(e,b))&&!(c&&(b=="length"||s&&(b=="offset"||b=="parent")||l&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||pi(b,u)))&&o.push(b);return o}var Bi=Object.prototype;function Ke(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Bi;return e===r}var Yi=Zt(Object.keys,Object),Zi=Object.prototype,Hi=Zi.hasOwnProperty;function Ki(e){if(!Ke(e))return Yi(e);var t=[];for(var r in Object(e))Hi.call(e,r)&&r!="constructor"&&t.push(r);return t}function nr(e){return e!=null&&rr(e.length)&&!Wt(e)}function We(e){return nr(e)?ir(e):Ki(e)}function Wi(e,t){return e&&Fe(t,We(t),e)}function Xi(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Ji=Object.prototype,Qi=Ji.hasOwnProperty;function en(e){if(!he(e))return Xi(e);var t=Ke(e),r=[];for(var i in e)i=="constructor"&&(t||!Qi.call(e,i))||r.push(i);return r}function Xe(e){return nr(e)?ir(e,!0):en(e)}function tn(e,t){return e&&Fe(t,Xe(t),e)}var sr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Et=sr&&typeof module=="object"&&module&&!module.nodeType&&module,rn=Et&&Et.exports===sr,Tt=rn?D.Buffer:void 0,wt=Tt?Tt.allocUnsafe:void 0;function an(e,t){if(t)return e.slice();var r=e.length,i=wt?wt(r):new e.constructor(r);return e.copy(i),i}function or(e,t){var r=-1,i=e.length;for(t||(t=Array(i));++r<i;)t[r]=e[r];return t}function nn(e,t){for(var r=-1,i=e==null?0:e.length,s=0,l=[];++r<i;){var c=e[r];t(c,r,e)&&(l[s++]=c)}return l}function lr(){return[]}var sn=Object.prototype,on=sn.propertyIsEnumerable,Ct=Object.getOwnPropertySymbols,Je=Ct?function(e){return e==null?[]:(e=Object(e),nn(Ct(e),function(t){return on.call(e,t)}))}:lr;function ln(e,t){return Fe(e,Je(e),t)}function cr(e,t){for(var r=-1,i=t.length,s=e.length;++r<i;)e[s+r]=t[r];return e}var cn=Object.getOwnPropertySymbols,ur=cn?function(e){for(var t=[];e;)cr(t,Je(e)),e=Ze(e);return t}:lr;function un(e,t){return Fe(e,ur(e),t)}function dr(e,t,r){var i=t(e);return be(e)?i:cr(i,r(e))}function dn(e){return dr(e,We,Je)}function mn(e){return dr(e,Xe,ur)}var Ve=J(D,"DataView"),Ge=J(D,"Promise"),ze=J(D,"Set"),qe=J(D,"WeakMap"),_t="[object Map]",fn="[object Object]",kt="[object Promise]",At="[object Set]",Ot="[object WeakMap]",$t="[object DataView]",pn=X(Ve),hn=X(fe),bn=X(Ge),vn=X(ze),gn=X(qe),V=K;(Ve&&V(new Ve(new ArrayBuffer(1)))!=$t||fe&&V(new fe)!=_t||Ge&&V(Ge.resolve())!=kt||ze&&V(new ze)!=At||qe&&V(new qe)!=Ot)&&(V=function(e){var t=K(e),r=t==fn?e.constructor:void 0,i=r?X(r):"";if(i)switch(i){case pn:return $t;case hn:return _t;case bn:return kt;case vn:return At;case gn:return Ot}return t});var yn=Object.prototype,xn=yn.hasOwnProperty;function jn(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&xn.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var It=D.Uint8Array;function Qe(e){var t=new e.constructor(e.byteLength);return new It(t).set(new It(e)),t}function Nn(e,t){var r=t?Qe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Sn=/\w*$/;function Fn(e){var t=new e.constructor(e.source,Sn.exec(e));return t.lastIndex=e.lastIndex,t}var Lt=z?z.prototype:void 0,Pt=Lt?Lt.valueOf:void 0;function En(e){return Pt?Object(Pt.call(e)):{}}function Tn(e,t){var r=t?Qe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var wn="[object Boolean]",Cn="[object Date]",_n="[object Map]",kn="[object Number]",An="[object RegExp]",On="[object Set]",$n="[object String]",In="[object Symbol]",Ln="[object ArrayBuffer]",Pn="[object DataView]",Rn="[object Float32Array]",Mn="[object Float64Array]",Dn="[object Int8Array]",Un="[object Int16Array]",Vn="[object Int32Array]",Gn="[object Uint8Array]",zn="[object Uint8ClampedArray]",qn="[object Uint16Array]",Bn="[object Uint32Array]";function Yn(e,t,r){var i=e.constructor;switch(t){case Ln:return Qe(e);case wn:case Cn:return new i(+e);case Pn:return Nn(e,r);case Rn:case Mn:case Dn:case Un:case Vn:case Gn:case zn:case qn:case Bn:return Tn(e,r);case _n:return new i;case kn:case $n:return new i(e);case An:return Fn(e);case On:return new i;case In:return En(e)}}var Rt=Object.create,Zn=function(){function e(){}return function(t){if(!he(t))return{};if(Rt)return Rt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Hn(e){return typeof e.constructor=="function"&&!Ke(e)?Zn(Ze(e)):{}}var Kn="[object Map]";function Wn(e){return W(e)&&V(e)==Kn}var Mt=ne&&ne.isMap,Xn=Mt?He(Mt):Wn,Jn="[object Set]";function Qn(e){return W(e)&&V(e)==Jn}var Dt=ne&&ne.isSet,es=Dt?He(Dt):Qn,ts=1,rs=2,as=4,mr="[object Arguments]",is="[object Array]",ns="[object Boolean]",ss="[object Date]",os="[object Error]",fr="[object Function]",ls="[object GeneratorFunction]",cs="[object Map]",us="[object Number]",pr="[object Object]",ds="[object RegExp]",ms="[object Set]",fs="[object String]",ps="[object Symbol]",hs="[object WeakMap]",bs="[object ArrayBuffer]",vs="[object DataView]",gs="[object Float32Array]",ys="[object Float64Array]",xs="[object Int8Array]",js="[object Int16Array]",Ns="[object Int32Array]",Ss="[object Uint8Array]",Fs="[object Uint8ClampedArray]",Es="[object Uint16Array]",Ts="[object Uint32Array]",j={};j[mr]=j[is]=j[bs]=j[vs]=j[ns]=j[ss]=j[gs]=j[ys]=j[xs]=j[js]=j[Ns]=j[cs]=j[us]=j[pr]=j[ds]=j[ms]=j[fs]=j[ps]=j[Ss]=j[Fs]=j[Es]=j[Ts]=!0;j[os]=j[fr]=j[hs]=!1;function de(e,t,r,i,s,l){var c,o=t&ts,u=t&rs,b=t&as;if(c!==void 0)return c;if(!he(e))return e;var w=be(e);if(w){if(c=jn(e),!o)return or(e,c)}else{var A=V(e),p=A==fr||A==ls;if(tr(e))return an(e,o);if(A==pr||A==mr||p&&!s){if(c=u||p?{}:Hn(e),!o)return u?un(e,tn(c,e)):ln(e,Wi(c,e))}else{if(!j[A])return s?e:{};c=Yn(e,A,o)}}l||(l=new se);var E=l.get(e);if(E)return E;l.set(e,c),es(e)?e.forEach(function(C){c.add(de(C,t,r,C,e,l))}):Xn(e)&&e.forEach(function(C,F){c.set(F,de(C,t,r,F,e,l))});var L=b?u?mn:dn:u?Xe:We,O=w?void 0:L(e);return ti(O||e,function(C,F){O&&(F=C,C=e[F]),Jt(c,F,de(C,t,r,F,e,l))}),c}var ws=1,Cs=4;function ye(e){return de(e,ws|Cs)}var Ut=Array.isArray,Vt=Object.keys,_s=Object.prototype.hasOwnProperty,ks=typeof Element<"u";function Be(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Ut(e),i=Ut(t),s,l,c;if(r&&i){if(l=e.length,l!=t.length)return!1;for(s=l;s--!==0;)if(!Be(e[s],t[s]))return!1;return!0}if(r!=i)return!1;var o=e instanceof Date,u=t instanceof Date;if(o!=u)return!1;if(o&&u)return e.getTime()==t.getTime();var b=e instanceof RegExp,w=t instanceof RegExp;if(b!=w)return!1;if(b&&w)return e.toString()==t.toString();var A=Vt(e);if(l=A.length,l!==Vt(t).length)return!1;for(s=l;s--!==0;)if(!_s.call(t,A[s]))return!1;if(ks&&e instanceof Element&&t instanceof Element)return e===t;for(s=l;s--!==0;)if(c=A[s],!(c==="_owner"&&e.$$typeof)&&!Be(e[c],t[c]))return!1;return!0}return e!==e&&t!==t}var As=function(t,r){try{return Be(t,r)}catch(i){if(i.message&&i.message.match(/stack|recursion/i)||i.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",i.name,i.message),!1;throw i}};const Y=$r(As);var Os=4;function Gt(e){return de(e,Os)}function hr(e,t){for(var r=-1,i=e==null?0:e.length,s=Array(i);++r<i;)s[r]=t(e[r],r,e);return s}var $s="[object Symbol]";function et(e){return typeof e=="symbol"||W(e)&&K(e)==$s}var Is="Expected a function";function tt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Is);var r=function(){var i=arguments,s=t?t.apply(this,i):i[0],l=r.cache;if(l.has(s))return l.get(s);var c=e.apply(this,i);return r.cache=l.set(s,c)||l,c};return r.cache=new(tt.Cache||q),r}tt.Cache=q;var Ls=500;function Ps(e){var t=tt(e,function(i){return r.size===Ls&&r.clear(),i}),r=t.cache;return t}var Rs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ms=/\\(\\)?/g,Ds=Ps(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Rs,function(r,i,s,l){t.push(s?l.replace(Ms,"$1"):i||r)}),t}),Us=1/0;function Vs(e){if(typeof e=="string"||et(e))return e;var t=e+"";return t=="0"&&1/e==-Us?"-0":t}var Gs=1/0,zt=z?z.prototype:void 0,qt=zt?zt.toString:void 0;function br(e){if(typeof e=="string")return e;if(be(e))return hr(e,br)+"";if(et(e))return qt?qt.call(e):"";var t=e+"";return t=="0"&&1/e==-Gs?"-0":t}function zs(e){return e==null?"":br(e)}function vr(e){return be(e)?hr(e,Vs):et(e)?[e]:or(Ds(zs(e)))}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},S.apply(this,arguments)}function ie(e,t){if(e==null)return{};var r={},i=Object.keys(e),s,l;for(l=0;l<i.length;l++)s=i[l],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}var Ee=f.createContext(void 0);Ee.displayName="FormikContext";var qs=Ee.Provider;Ee.Consumer;function gr(){var e=f.useContext(Ee);return e}var I=function(t){return typeof t=="function"},Te=function(t){return t!==null&&typeof t=="object"},Bs=function(t){return String(Math.floor(Number(t)))===t},Me=function(t){return Object.prototype.toString.call(t)==="[object String]"},Ys=function(t){return f.Children.count(t)===0},De=function(t){return Te(t)&&I(t.then)};function $(e,t,r,i){i===void 0&&(i=0);for(var s=vr(t);e&&i<s.length;)e=e[s[i++]];return i!==s.length&&!e||e===void 0?r:e}function Z(e,t,r){for(var i=Gt(e),s=i,l=0,c=vr(t);l<c.length-1;l++){var o=c[l],u=$(e,c.slice(0,l+1));if(u&&(Te(u)||Array.isArray(u)))s=s[o]=Gt(u);else{var b=c[l+1];s=s[o]=Bs(b)&&Number(b)>=0?[]:{}}}return(l===0?e:s)[c[l]]===r?e:(r===void 0?delete s[c[l]]:s[c[l]]=r,l===0&&r===void 0&&delete i[c[l]],i)}function yr(e,t,r,i){r===void 0&&(r=new WeakMap),i===void 0&&(i={});for(var s=0,l=Object.keys(e);s<l.length;s++){var c=l[s],o=e[c];Te(o)?r.get(o)||(r.set(o,!0),i[c]=Array.isArray(o)?[]:{},yr(o,t,r,i[c])):i[c]=t}return i}function Zs(e,t){switch(t.type){case"SET_VALUES":return S({},e,{values:t.payload});case"SET_TOUCHED":return S({},e,{touched:t.payload});case"SET_ERRORS":return Y(e.errors,t.payload)?e:S({},e,{errors:t.payload});case"SET_STATUS":return S({},e,{status:t.payload});case"SET_ISSUBMITTING":return S({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return S({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return S({},e,{values:Z(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return S({},e,{touched:Z(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return S({},e,{errors:Z(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return S({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return S({},e,{touched:yr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return S({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return S({},e,{isSubmitting:!1});default:return e}}var B={},xe={};function Hs(e){var t=e.validateOnChange,r=t===void 0?!0:t,i=e.validateOnBlur,s=i===void 0?!0:i,l=e.validateOnMount,c=l===void 0?!1:l,o=e.isInitialValid,u=e.enableReinitialize,b=u===void 0?!1:u,w=e.onSubmit,A=ie(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=S({validateOnChange:r,validateOnBlur:s,validateOnMount:c,onSubmit:w},A),E=f.useRef(p.initialValues),L=f.useRef(p.initialErrors||B),O=f.useRef(p.initialTouched||xe),C=f.useRef(p.initialStatus),F=f.useRef(!1),P=f.useRef({});f.useEffect(function(){return F.current=!0,function(){F.current=!1}},[]);var we=f.useState(0),Ce=we[1],ve=f.useRef({values:ye(p.initialValues),errors:ye(p.initialErrors)||B,touched:ye(p.initialTouched)||xe,status:ye(p.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),x=ve.current,y=f.useCallback(function(n){var d=ve.current;ve.current=Zs(d,n),d!==ve.current&&Ce(function(m){return m+1})},[]),rt=f.useCallback(function(n,d){return new Promise(function(m,h){var v=p.validate(n,d);v==null?m(B):De(v)?v.then(function(g){m(g||B)},function(g){h(g)}):m(v)})},[p.validate]),_e=f.useCallback(function(n,d){var m=p.validationSchema,h=I(m)?m(d):m,v=d&&h.validateAt?h.validateAt(d,n):Ws(n,h);return new Promise(function(g,T){v.then(function(){g(B)},function(U){U.name==="ValidationError"?g(Ks(U)):T(U)})})},[p.validationSchema]),at=f.useCallback(function(n,d){return new Promise(function(m){return m(P.current[n].validate(d))})},[]),it=f.useCallback(function(n){var d=Object.keys(P.current).filter(function(h){return I(P.current[h].validate)}),m=d.length>0?d.map(function(h){return at(h,$(n,h))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(m).then(function(h){return h.reduce(function(v,g,T){return g==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||g&&(v=Z(v,d[T],g)),v},{})})},[at]),xr=f.useCallback(function(n){return Promise.all([it(n),p.validationSchema?_e(n):{},p.validate?rt(n):{}]).then(function(d){var m=d[0],h=d[1],v=d[2],g=Ue.all([m,h,v],{arrayMerge:Xs});return g})},[p.validate,p.validationSchema,it,rt,_e]),M=R(function(n){return n===void 0&&(n=x.values),y({type:"SET_ISVALIDATING",payload:!0}),xr(n).then(function(d){return F.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:d})),d})});f.useEffect(function(){c&&F.current===!0&&Y(E.current,p.initialValues)&&M(E.current)},[c,M]);var oe=f.useCallback(function(n){var d=n&&n.values?n.values:E.current,m=n&&n.errors?n.errors:L.current?L.current:p.initialErrors||{},h=n&&n.touched?n.touched:O.current?O.current:p.initialTouched||{},v=n&&n.status?n.status:C.current?C.current:p.initialStatus;E.current=d,L.current=m,O.current=h,C.current=v;var g=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!n&&!!n.isSubmitting,errors:m,touched:h,status:v,values:d,isValidating:!!n&&!!n.isValidating,submitCount:n&&n.submitCount&&typeof n.submitCount=="number"?n.submitCount:0}})};if(p.onReset){var T=p.onReset(x.values,pt);De(T)?T.then(g):g()}else g()},[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]);f.useEffect(function(){F.current===!0&&!Y(E.current,p.initialValues)&&b&&(E.current=p.initialValues,oe(),c&&M(E.current))},[b,p.initialValues,oe,c,M]),f.useEffect(function(){b&&F.current===!0&&!Y(L.current,p.initialErrors)&&(L.current=p.initialErrors||B,y({type:"SET_ERRORS",payload:p.initialErrors||B}))},[b,p.initialErrors]),f.useEffect(function(){b&&F.current===!0&&!Y(O.current,p.initialTouched)&&(O.current=p.initialTouched||xe,y({type:"SET_TOUCHED",payload:p.initialTouched||xe}))},[b,p.initialTouched]),f.useEffect(function(){b&&F.current===!0&&!Y(C.current,p.initialStatus)&&(C.current=p.initialStatus,y({type:"SET_STATUS",payload:p.initialStatus}))},[b,p.initialStatus,p.initialTouched]);var nt=R(function(n){if(P.current[n]&&I(P.current[n].validate)){var d=$(x.values,n),m=P.current[n].validate(d);return De(m)?(y({type:"SET_ISVALIDATING",payload:!0}),m.then(function(h){return h}).then(function(h){y({type:"SET_FIELD_ERROR",payload:{field:n,value:h}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:n,value:m}}),Promise.resolve(m))}else if(p.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),_e(x.values,n).then(function(h){return h}).then(function(h){y({type:"SET_FIELD_ERROR",payload:{field:n,value:$(h,n)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),jr=f.useCallback(function(n,d){var m=d.validate;P.current[n]={validate:m}},[]),Nr=f.useCallback(function(n){delete P.current[n]},[]),st=R(function(n,d){y({type:"SET_TOUCHED",payload:n});var m=d===void 0?s:d;return m?M(x.values):Promise.resolve()}),ot=f.useCallback(function(n){y({type:"SET_ERRORS",payload:n})},[]),lt=R(function(n,d){var m=I(n)?n(x.values):n;y({type:"SET_VALUES",payload:m});var h=d===void 0?r:d;return h?M(m):Promise.resolve()}),ge=f.useCallback(function(n,d){y({type:"SET_FIELD_ERROR",payload:{field:n,value:d}})},[]),Q=R(function(n,d,m){y({type:"SET_FIELD_VALUE",payload:{field:n,value:d}});var h=m===void 0?r:m;return h?M(Z(x.values,n,d)):Promise.resolve()}),ct=f.useCallback(function(n,d){var m=d,h=n,v;if(!Me(n)){n.persist&&n.persist();var g=n.target?n.target:n.currentTarget,T=g.type,U=g.name,Ie=g.id,Le=g.value,Ar=g.checked,to=g.outerHTML,ht=g.options,Or=g.multiple;m=d||U||Ie,h=/number|range/.test(T)?(v=parseFloat(Le),isNaN(v)?"":v):/checkbox/.test(T)?Qs($(x.values,m),Ar,Le):ht&&Or?Js(ht):Le}m&&Q(m,h)},[Q,x.values]),ke=R(function(n){if(Me(n))return function(d){return ct(d,n)};ct(n)}),ee=R(function(n,d,m){d===void 0&&(d=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:n,value:d}});var h=m===void 0?s:m;return h?M(x.values):Promise.resolve()}),ut=f.useCallback(function(n,d){n.persist&&n.persist();var m=n.target,h=m.name,v=m.id,g=m.outerHTML,T=d||h||v;ee(T,!0)},[ee]),Ae=R(function(n){if(Me(n))return function(d){return ut(d,n)};ut(n)}),dt=f.useCallback(function(n){I(n)?y({type:"SET_FORMIK_STATE",payload:n}):y({type:"SET_FORMIK_STATE",payload:function(){return n}})},[]),mt=f.useCallback(function(n){y({type:"SET_STATUS",payload:n})},[]),ft=f.useCallback(function(n){y({type:"SET_ISSUBMITTING",payload:n})},[]),Oe=R(function(){return y({type:"SUBMIT_ATTEMPT"}),M().then(function(n){var d=n instanceof Error,m=!d&&Object.keys(n).length===0;if(m){var h;try{if(h=Fr(),h===void 0)return}catch(v){throw v}return Promise.resolve(h).then(function(v){return F.current&&y({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(F.current)throw y({type:"SUBMIT_FAILURE"}),v})}else if(F.current&&(y({type:"SUBMIT_FAILURE"}),d))throw n})}),Sr=R(function(n){n&&n.preventDefault&&I(n.preventDefault)&&n.preventDefault(),n&&n.stopPropagation&&I(n.stopPropagation)&&n.stopPropagation(),Oe().catch(function(d){console.warn("Warning: An unhandled error was caught from submitForm()",d)})}),pt={resetForm:oe,validateForm:M,validateField:nt,setErrors:ot,setFieldError:ge,setFieldTouched:ee,setFieldValue:Q,setStatus:mt,setSubmitting:ft,setTouched:st,setValues:lt,setFormikState:dt,submitForm:Oe},Fr=R(function(){return w(x.values,pt)}),Er=R(function(n){n&&n.preventDefault&&I(n.preventDefault)&&n.preventDefault(),n&&n.stopPropagation&&I(n.stopPropagation)&&n.stopPropagation(),oe()}),Tr=f.useCallback(function(n){return{value:$(x.values,n),error:$(x.errors,n),touched:!!$(x.touched,n),initialValue:$(E.current,n),initialTouched:!!$(O.current,n),initialError:$(L.current,n)}},[x.errors,x.touched,x.values]),wr=f.useCallback(function(n){return{setValue:function(m,h){return Q(n,m,h)},setTouched:function(m,h){return ee(n,m,h)},setError:function(m){return ge(n,m)}}},[Q,ee,ge]),Cr=f.useCallback(function(n){var d=Te(n),m=d?n.name:n,h=$(x.values,m),v={name:m,value:h,onChange:ke,onBlur:Ae};if(d){var g=n.type,T=n.value,U=n.as,Ie=n.multiple;g==="checkbox"?T===void 0?v.checked=!!h:(v.checked=!!(Array.isArray(h)&&~h.indexOf(T)),v.value=T):g==="radio"?(v.checked=h===T,v.value=T):U==="select"&&Ie&&(v.value=v.value||[],v.multiple=!0)}return v},[Ae,ke,x.values]),$e=f.useMemo(function(){return!Y(E.current,x.values)},[E.current,x.values]),_r=f.useMemo(function(){return typeof o<"u"?$e?x.errors&&Object.keys(x.errors).length===0:o!==!1&&I(o)?o(p):o:x.errors&&Object.keys(x.errors).length===0},[o,$e,x.errors,p]),kr=S({},x,{initialValues:E.current,initialErrors:L.current,initialTouched:O.current,initialStatus:C.current,handleBlur:Ae,handleChange:ke,handleReset:Er,handleSubmit:Sr,resetForm:oe,setErrors:ot,setFormikState:dt,setFieldTouched:ee,setFieldValue:Q,setFieldError:ge,setStatus:mt,setSubmitting:ft,setTouched:st,setValues:lt,submitForm:Oe,validateForm:M,validateField:nt,isValid:_r,dirty:$e,unregisterField:Nr,registerField:jr,getFieldProps:Cr,getFieldMeta:Tr,getFieldHelpers:wr,validateOnBlur:s,validateOnChange:r,validateOnMount:c});return kr}function ce(e){var t=Hs(e),r=e.component,i=e.children,s=e.render,l=e.innerRef;return f.useImperativeHandle(l,function(){return t}),f.createElement(qs,{value:t},r?f.createElement(r,t):s?s(t):i?I(i)?i(t):Ys(i)?null:f.Children.only(i):null)}function Ks(e){var t={};if(e.inner){if(e.inner.length===0)return Z(t,e.path,e.message);for(var s=e.inner,r=Array.isArray(s),i=0,s=r?s:s[Symbol.iterator]();;){var l;if(r){if(i>=s.length)break;l=s[i++]}else{if(i=s.next(),i.done)break;l=i.value}var c=l;$(t,c.path)||(t=Z(t,c.path,c.message))}}return t}function Ws(e,t,r,i){r===void 0&&(r=!1);var s=Ye(e);return t[r?"validateSync":"validate"](s,{abortEarly:!1,context:s})}function Ye(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=String(r);Array.isArray(e[i])===!0?t[i]=e[i].map(function(s){return Array.isArray(s)===!0||gt(s)?Ye(s):s!==""?s:void 0}):gt(e[i])?t[i]=Ye(e[i]):t[i]=e[i]!==""?e[i]:void 0}return t}function Xs(e,t,r){var i=e.slice();return t.forEach(function(l,c){if(typeof i[c]>"u"){var o=r.clone!==!1,u=o&&r.isMergeableObject(l);i[c]=u?Ue(Array.isArray(l)?[]:{},l,r):l}else r.isMergeableObject(l)?i[c]=Ue(e[c],l,r):e.indexOf(l)===-1&&i.push(l)}),i}function Js(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Qs(e,t,r){if(typeof e=="boolean")return!!t;var i=[],s=!1,l=-1;if(Array.isArray(e))i=e,l=e.indexOf(r),s=l>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!s?i.concat(r):s?i.slice(0,l).concat(i.slice(l+1)):i}var eo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function R(e){var t=f.useRef(e);return eo(function(){t.current=e}),f.useCallback(function(){for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return t.current.apply(void 0,i)},[])}function k(e){var t=e.validate,r=e.name,i=e.render,s=e.children,l=e.as,c=e.component,o=e.className,u=ie(e,["validate","name","render","children","as","component","className"]),b=gr(),w=ie(b,["validate","validationSchema"]),A=w.registerField,p=w.unregisterField;f.useEffect(function(){return A(r,{validate:t}),function(){p(r)}},[A,p,r,t]);var E=w.getFieldProps(S({name:r},u)),L=w.getFieldMeta(r),O={field:E,form:w};if(i)return i(S({},O,{meta:L}));if(I(s))return s(S({},O,{meta:L}));if(c){if(typeof c=="string"){var C=u.innerRef,F=ie(u,["innerRef"]);return f.createElement(c,S({ref:C},E,F,{className:o}),s)}return f.createElement(c,S({field:E,form:w},u,{className:o}),s)}var P=l||"input";if(typeof P=="string"){var we=u.innerRef,Ce=ie(u,["innerRef"]);return f.createElement(P,S({ref:we},E,Ce,{className:o}),s)}return f.createElement(P,S({},E,u,{className:o}),s)}var ae=f.forwardRef(function(e,t){var r=e.action,i=ie(e,["action"]),s=r??"#",l=gr(),c=l.handleReset,o=l.handleSubmit;return f.createElement("form",S({onSubmit:o,ref:t,onReset:c,action:s},i))});ae.displayName="Form";const lo=()=>{const e=Ir();f.useEffect(()=>{e(Lr("Validation"))});const t=()=>{Dr.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:"Form submitted successfully",padding:"10px 20px"})},r=bt().shape({firstname:_().required("Please fill the first name"),lastname:_().required("Please fill the last name"),username:_().required("Please choose a userName"),city:_().required("Please provide a valid city"),state:_().required("Please provide a valid state"),zip:_().required("Please provide a valid zip"),agree:Mr().oneOf([!0],"You must agree before submitting.")}),i=bt().shape({fullName:_().required("Please fill the Name"),email:_().email("Invalid email").required("Please fill the Email"),color:_().required("Please Select the field"),firstname:_().required("Please fill the first name"),lastname:_().required("Please fill the last name"),username:_().required("Please choose a userName"),city:_().required("Please provide a valid city"),state:_().required("Please provide a valid state"),zip:_().required("Please provide a valid zip"),agree:_().required("You must agree before submitting."),select:_().required("Please Select the field")}),[s,l]=f.useState([]),c=o=>{s.includes(o)?l(u=>u.filter(b=>b!==o)):l([...s,o])};return a.jsxs("div",{children:[a.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[a.jsx("li",{children:a.jsx(Pr,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),a.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:a.jsx("span",{children:"Validation"})})]}),a.jsxs("div",{className:"pt-5 space-y-8",children:[a.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[a.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:a.jsx(Rr,{})}),a.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),a.jsx("a",{href:"https://www.npmjs.com/package/formik",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/formik"})]}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"panel",id:"basic",children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),a.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code1"),children:a.jsxs("span",{className:"flex items-center",children:[a.jsx(re,{className:"me-2"}),"Code"]})})]}),a.jsx("div",{className:"mb-5",children:a.jsx(ce,{initialValues:{fullName:""},validationSchema:i,onSubmit:()=>{},children:({errors:o,submitCount:u,touched:b})=>a.jsxs(ae,{className:"space-y-5",children:[a.jsxs("div",{className:u?o.fullName?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"fullName",children:"Full Name "}),a.jsx(k,{name:"fullName",type:"text",id:"fullName",placeholder:"Enter Full Name",className:"form-input"}),u?o.fullName?a.jsx("div",{className:"text-danger mt-1",children:o.fullName}):a.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),a.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{b.fullName&&!o.fullName&&t()},children:"Submit Form"})]})})}),s.includes("code1")&&a.jsx(te,{children:a.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    fullName: Yup.string().required('Please fill the Name'),
});

<Formik
    initialValues={{
        fullName: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.fullName ? 'has-error' : 'has-success') : ''}>
                <label htmlFor="fullName">Full Name </label>
                <Field name="fullName" type="text" id="fullName" placeholder="Enter Full Name" className="form-input" />

                {submitCount ? errors.fullName ? <div className="text-danger mt-1">{errors.fullName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.fullName && !errors.fullName) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),a.jsxs("div",{className:"panel",id:"email",children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Email"}),a.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code2"),children:a.jsxs("span",{className:"flex items-center",children:[a.jsx(re,{className:"me-2"}),"Code"]})})]}),a.jsx("div",{className:"mb-5",children:a.jsx(ce,{initialValues:{email:""},validationSchema:i,onSubmit:()=>{},children:({errors:o,submitCount:u,touched:b})=>a.jsxs(ae,{className:"space-y-5",children:[a.jsxs("div",{className:u?o.email?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"Email",children:"Email"}),a.jsx(k,{name:"email",type:"text",id:"Email",placeholder:"Enter Email",className:"form-input"}),u?o.email?a.jsx("div",{className:"text-danger mt-1",children:o.email}):a.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),a.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{b.email&&!o.email&&t()},children:"Submit Form"})]})})}),s.includes("code2")&&a.jsx(te,{children:a.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please fill the Email'),
});

<Formik
    initialValues={{
        email: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                <label htmlFor="Email">Email</label>
                <Field name="email" type="text" id="Email" placeholder="Enter Email" className="form-input" />

                {submitCount ? errors.email ? <div className="text-danger mt-1">{errors.email}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.email && !errors.email) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),a.jsxs("div",{className:"panel",id:"select",children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Select"}),a.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code3"),children:a.jsxs("span",{className:"flex items-center",children:[a.jsx(re,{className:"me-2"}),"Code"]})})]}),a.jsx("div",{className:"mb-5",children:a.jsx(ce,{initialValues:{select:""},validationSchema:i,onSubmit:()=>{},children:({errors:o,submitCount:u,touched:b})=>a.jsxs(ae,{className:"space-y-5",children:[a.jsxs("div",{className:u?o.select?"has-error":"has-success":"",children:[a.jsxs(k,{as:"select",name:"select",className:"form-select",children:[a.jsx("option",{value:"",children:"Open this select menu"}),a.jsx("option",{value:"One",children:"One"}),a.jsx("option",{value:"Two",children:"Two"}),a.jsx("option",{value:"Three",children:"Three"})]}),u?o.select?a.jsx("div",{className:" text-danger mt-1",children:o.select}):a.jsx("div",{className:" text-[#1abc9c] mt-1",children:"Example valid custom select feedback"}):""]}),a.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{b.select&&!o.select&&t()},children:"Submit Form"})]})})}),s.includes("code3")&&a.jsx(te,{children:a.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    select: Yup.string().required('Please Select the field'),
});

<Formik
    initialValues={{
        select: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.select ? 'has-error' : 'has-success') : ''}>
                <Field as="select" name="select" className="form-select">
                    <option value="">Open this select menu</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                </Field>
                {submitCount ? (
                    errors.select ? (
                        <div className=" text-danger mt-1">{errors.select}</div>
                    ) : (
                        <div className=" text-[#1abc9c] mt-1">Example valid custom select feedback</div>
                    )
                ) : (
                    ''
                )}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.select && !errors.select) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),a.jsxs("div",{className:"panel",id:"custom_styles",children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom Styles"}),a.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code4"),children:a.jsxs("span",{className:"flex items-center",children:[a.jsx(re,{className:"me-2"}),"Code"]})})]}),a.jsx("div",{className:"mb-5",children:a.jsx(ce,{initialValues:{firstname:"Shaun",lastname:"Park",username:"",city:"",state:"",zip:"",agree:!1},validationSchema:r,onSubmit:()=>{},children:({errors:o,submitCount:u,touched:b,values:w})=>a.jsxs(ae,{className:"space-y-5",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[a.jsxs("div",{className:u?o.firstname?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"firstname",children:"First Name "}),a.jsx(k,{name:"firstname",type:"text",id:"firstname",placeholder:"Enter First Name",className:"form-input"}),u?o.firstname?a.jsx("div",{className:"text-danger mt-1",children:o.firstname}):a.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),a.jsxs("div",{className:u?o.lastname?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"fullName",children:"Last Name "}),a.jsx(k,{name:"lastname",type:"text",id:"lastname",placeholder:"Enter Last Name",className:"form-input"}),u?o.lastname?a.jsx("div",{className:"text-danger mt-1",children:o.lastname}):a.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),a.jsxs("div",{className:u?o.username?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"username",children:"Username"}),a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),a.jsx(k,{name:"username",type:"text",id:"username",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),u?o.username?a.jsx("div",{className:"text-danger mt-1",children:o.username}):a.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[a.jsxs("div",{className:`md:col-span-2 ${u?o.city?"has-error":"has-success":""}`,children:[a.jsx("label",{htmlFor:"customeCity",children:"City"}),a.jsx(k,{name:"city",type:"text",id:"city",placeholder:"Enter City",className:"form-input"}),u?o.city?a.jsx("div",{className:"text-danger mt-1",children:o.city}):a.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),a.jsxs("div",{className:u?o.state?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"customeState",children:"State"}),a.jsx(k,{name:"state",type:"text",id:"customeState",placeholder:"Enter State",className:"form-input"}),u?o.state?a.jsx("div",{className:"text-danger mt-1",children:o.state}):a.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),a.jsxs("div",{className:u?o.zip?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"customeZip",children:"Zip"}),a.jsx(k,{name:"zip",type:"text",id:"customeZip",placeholder:"Enter Zip",className:"form-input"}),u?o.zip?a.jsx("div",{className:"text-danger mt-1",children:o.zip}):a.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]})]}),a.jsxs("div",{className:u?o.agree?"has-error":"has-success":"",children:[a.jsxs("div",{className:"flex",children:[a.jsx(k,{name:"agree",id:"agree",type:"checkbox",className:"form-checkbox"}),w.agree,a.jsx("label",{htmlFor:"agree",className:"text-white-dark font-semibold",children:"Agree to terms and conditions"})]}),u&&o.agree?a.jsx("div",{className:"text-danger mt-1",children:o.agree}):""]}),a.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{Object.keys(b).length!==0&&Object.keys(o).length===0&&t()},children:"Submit Form"})]})})}),s.includes("code4")&&a.jsx(te,{children:a.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const submitForm4 = Yup.object().shape({
    firstname: Yup.string().required('Please fill the first name'),
    lastname: Yup.string().required('Please fill the last name'),
    username: Yup.string().required('Please choose a userName'),
    city: Yup.string().required('Please provide a valid city'),
    state: Yup.string().required('Please provide a valid state'),
    zip: Yup.string().required('Please provide a valid zip'),
    agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
});

<Formik
    initialValues={{
        firstname: 'Shaun',
        lastname: 'Park',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    }}
    validationSchema={submitForm4}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched, values }) => (
        <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="firstname">First Name </label>
                    <Field name="firstname" type="text" id="firstname" placeholder="Enter First Name" className="form-input" />

                    {submitCount ? (
                        errors.firstname ? (
                            <div className="text-danger mt-1">{errors.firstname}</div>
                        ) : (
                            <div className="text-success mt-1">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="fullName">Last Name </label>
                    <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input" />

                    {submitCount ? errors.lastname ? <div className="text-danger mt-1">{errors.lastname}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="username">Username</label>
                    <div className="flex">
                        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            @
                        </div>
                        <Field name="username" type="text" id="username" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                    {submitCount ? errors.username ? <div className="text-danger mt-1">{errors.username}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className={\`md:col-span-2 \${submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}\`}>
                    <label htmlFor="customeCity">City</label>
                    <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input" />

                    {submitCount ? errors.city ? <div className="text-danger mt-1">{errors.city}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeState">State</label>
                    <Field name="state" type="text" id="customeState" placeholder="Enter State" className="form-input" />
                    {submitCount ? errors.state ? <div className="text-danger mt-1">{errors.state}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.zip ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeZip">Zip</label>
                    <Field name="zip" type="text" id="customeZip" placeholder="Enter Zip" className="form-input" />
                    {submitCount ? errors.zip ? <div className="text-danger mt-1">{errors.zip}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>
            </div>

            <div className={submitCount ? (errors.agree ? 'has-error' : 'has-success') : ''}>
                <div className="flex">
                    <Field name="agree" id="agree" type="checkbox" className="form-checkbox" />
                    {values.agree}
                    <label htmlFor="agree" className="text-white-dark font-semibold">
                        Agree to terms and conditions
                    </label>
                </div>
                {submitCount ? errors.agree ? <div className="text-danger mt-1">{errors.agree}</div> : '' : ''}
            </div>

            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),a.jsxs("div",{className:"panel",id:"browser_default",children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Browser Default"}),a.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code5"),children:a.jsxs("span",{className:"flex items-center",children:[a.jsx(re,{className:"me-2"}),"Code"]})})]}),a.jsx("div",{className:"mb-5",children:a.jsxs("form",{className:"space-y-5",onSubmit:o=>{o.preventDefault(),t()},children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"browserFname",children:"First Name"}),a.jsx("input",{id:"browserFname",type:"text",placeholder:"Enter First Name",className:"form-input",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"browserLname",children:"Last name"}),a.jsx("input",{id:"browserLname",type:"text",placeholder:"Enter Last name",className:"form-input",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"browserEmail",children:"Username"}),a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),a.jsx("input",{id:"browserEmail",type:"text",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none",required:!0})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[a.jsxs("div",{className:"md:col-span-2",children:[a.jsx("label",{htmlFor:"browserCity",children:"City"}),a.jsx("input",{id:"browserCity",type:"text",placeholder:"Enter City",className:"form-input",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"browserState",children:"State"}),a.jsx("input",{id:"browserState",type:"text",placeholder:"Enter State",className:"form-input",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"browserZip",children:"Zip"}),a.jsx("input",{id:"browserZip",type:"text",placeholder:"Enter Zip",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"flex items-center cursor-pointer mt-1",children:[a.jsx("input",{type:"checkbox",id:"agree1",className:"form-checkbox",required:!0}),a.jsx("label",{htmlFor:"agree1",className:"text-white-dark font-semibold mb-0",children:"Agree to terms and conditions"})]}),a.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit Form"})]})}),s.includes("code5")&&a.jsx(te,{children:a.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

<form
    className="space-y-5"
    onSubmit={(e) => {
        e.preventDefault();
        submitForm();
    }}
>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
            <label htmlFor="browserFname">First Name</label>
            <input id="browserFname" type="text" placeholder="Enter First Name" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserLname">Last name</label>
            <input id="browserLname" type="text" placeholder="Enter Last name" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserEmail">Username</label>
            <div className="flex">
                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                    @
                </div>
                <input id="browserEmail" type="text" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" required />
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-2">
            <label htmlFor="browserCity">City</label>
            <input id="browserCity" type="text" placeholder="Enter City" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserState">State</label>
            <input id="browserState" type="text" placeholder="Enter State" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserZip">Zip</label>
            <input id="browserZip" type="text" placeholder="Enter Zip" className="form-input" required />
        </div>
    </div>
    <div className="flex items-center cursor-pointer mt-1">
        <input type="checkbox" id="agree1 className="form-checkbox" required />
        <label htmlFor="agree1" className="text-white-dark font-semibold mb-0">Agree to terms and conditions</label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit Form
    </button>
</form>`})})]}),a.jsxs("div",{className:"panel",id:"tooltips",children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Tooltips"}),a.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code6"),children:a.jsxs("span",{className:"flex items-center",children:[a.jsx(re,{className:"me-2"}),"Code"]})})]}),a.jsx("div",{className:"mb-5",children:a.jsx(ce,{initialValues:{firstname:"Shaun",lastname:"Park",username:"",city:"",state:"",zip:"",agree:!1},validationSchema:r,onSubmit:()=>{},children:({errors:o,submitCount:u,touched:b})=>a.jsxs(ae,{className:"space-y-5",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[a.jsxs("div",{className:u?o.firstname?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"firstname",children:"First Name "}),a.jsx(k,{name:"firstname",type:"text",id:"firstname",placeholder:"Enter First Name",className:"form-input mb-2"}),u?o.firstname?a.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.firstname}):a.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),a.jsxs("div",{className:u?o.lastname?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"lastName",children:"Last name "}),a.jsx(k,{name:"lastname",type:"text",id:"lastname",placeholder:"Enter Last Name",className:"form-input mb-2"}),u?o.lastname?a.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.lastname}):a.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),a.jsxs("div",{className:u?o.username?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"username",children:"Username"}),a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),a.jsx(k,{name:"username",type:"text",id:"username",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),a.jsx("div",{className:"mt-2",children:u?o.username?a.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.username}):a.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[a.jsxs("div",{className:`md:col-span-2 ${u?o.city?"has-error":"has-success":""}`,children:[a.jsx("label",{htmlFor:"customeCity",children:"City"}),a.jsx(k,{name:"city",type:"text",id:"city",placeholder:"Enter City",className:"form-input mb-2"}),u?o.city?a.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.city}):a.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),a.jsxs("div",{className:u?o.state?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"customeState",children:"State"}),a.jsx(k,{name:"state",type:"text",id:"customeState",placeholder:"Enter State",className:"form-input mb-2"}),u?o.state?a.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.state}):a.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),a.jsxs("div",{className:u?o.zip?"has-error":"has-success":"",children:[a.jsx("label",{htmlFor:"customeZip",children:"Zip"}),a.jsx(k,{name:"zip",type:"text",id:"customeZip",placeholder:"Enter Zip",className:"form-input mb-2"}),u?o.zip?a.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.zip}):a.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]})]}),a.jsxs("div",{className:u?o.agree?"has-error":"has-success":"",children:[a.jsxs("div",{className:"flex",children:[a.jsx(k,{name:"agree",id:"agree2",type:"checkbox",className:"form-checkbox"}),a.jsx("label",{htmlFor:"agree2",className:"text-white-dark font-semibold",children:"Agree to terms and conditions"})]}),a.jsx("div",{className:"mt-2",children:u&&o.agree?a.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.agree}):""})]}),a.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{Object.keys(b).length!==0&&Object.keys(o).length===0&&t()},children:"Submit Form"})]})})}),s.includes("code6")&&a.jsx(te,{children:a.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const submitForm4 = Yup.object().shape({
    firstname: Yup.string().required('Please fill the first name'),
    lastname: Yup.string().required('Please fill the last name'),
    username: Yup.string().required('Please choose a userName'),
    city: Yup.string().required('Please provide a valid city'),
    state: Yup.string().required('Please provide a valid state'),
    zip: Yup.string().required('Please provide a valid zip'),
    agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
});

<Formik
    initialValues={{
        firstname: 'Shaun',
        lastname: 'Park',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    }}
    validationSchema={submitForm4}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="firstname">First Name </label>
                    <Field name="firstname" type="text" id="firstname" placeholder="Enter First Name" className="form-input mb-2" />

                    {submitCount ? (
                        errors.firstname ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.firstname}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="lastName">Last name </label>
                    <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input mb-2" />

                    {submitCount ? (
                        errors.lastname ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.lastname}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="username">Username</label>
                    <div className="flex">
                        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            @
                        </div>

                        <Field name="username" type="text" id="username" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                    <div className="mt-2">
                        {submitCount ? (
                            errors.username ? (
                                <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.username}</div>
                            ) : (
                                <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                            )
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className={\`md:col-span-2 \${submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}\`}>
                    <label htmlFor="customeCity">City</label>
                    <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input mb-2" />

                    {submitCount ? (
                        errors.city ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.city}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeState">State</label>
                    <Field name="state" type="text" id="customeState" placeholder="Enter State" className="form-input mb-2" />
                    {submitCount ? (
                        errors.state ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.state}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.zip ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeZip">Zip</label>
                    <Field name="zip" type="text" id="customeZip" placeholder="Enter Zip" className="form-input mb-2" />
                    {submitCount ? (
                        errors.zip ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.zip}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>
            </div>

            <div className={submitCount ? (errors.agree ? 'has-error' : 'has-success') : ''}>
                <div className="flex">
                    <Field name="agree" id="agree2" type="checkbox" className="form-checkbox" />
                    <label htmlFor="agree2" className="text-white-dark font-semibold">
                        Agree to terms and conditions
                    </label>
                </div>
                <div className="mt-2">
                    {submitCount ? errors.agree ? <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.agree}</div> : '' : ''}
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]})]})]})]})};export{lo as default};
