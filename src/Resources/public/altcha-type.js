var xu=Object.defineProperty;var dl=X=>{throw TypeError(X)};var Eu=(X,ne,pe)=>ne in X?xu(X,ne,{enumerable:!0,configurable:!0,writable:!0,value:pe}):X[ne]=pe;var P=(X,ne,pe)=>Eu(X,typeof ne!="symbol"?ne+"":ne,pe),ai=(X,ne,pe)=>ne.has(X)||dl("Cannot "+pe);var h=(X,ne,pe)=>(ai(X,ne,"read from private field"),pe?pe.call(X):ne.get(X)),L=(X,ne,pe)=>ne.has(X)?dl("Cannot add the same private member more than once"):ne instanceof WeakSet?ne.add(X):ne.set(X,pe),$=(X,ne,pe,Vn)=>(ai(X,ne,"write to private field"),Vn?Vn.call(X,pe):ne.set(X,pe),pe),H=(X,ne,pe)=>(ai(X,ne,"access private method"),pe);(function(){"use strict";var X={},ne;function pe(){var Zo,In,en,vn,Ln,On,Mn,Vt,Nn,Be,sr,jt,pt,Pt,Dn,pn,Z,ii,wr,oi,vl,pl,Fn,Su,_r,Jo,Xo,We,cr,rt,gn,De,Ze,Ue,Je,It,mn,tn,Un,ur,fr,Bt,Gr,J,gl,ml,li,bl,si,kr,Qr,ci,ui,gt,zt,mt,bn,hr,qr,Ga,Kt,at;if(ne)return X;ne=1;const Ae=!1;var we=Array.isArray,Xe=Array.prototype.indexOf,$e=Array.prototype.includes,Er=Array.from,Gt=Object.keys,re=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,_l=Object.getOwnPropertyDescriptors,kl=Object.prototype,xl=Array.prototype,gi=Object.getPrototypeOf,mi=Object.isExtensible;const qt=()=>{};function El(e){for(var t=0;t<e.length;t++)e[t]()}function bi(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const _e=2,_n=4,Sr=8,ta=1<<24,ct=16,ut=32,wt=64,na=128,ra=256,Qe=512,ge=1024,he=2048,ft=4096,et=8192,Ye=16384,nn=32768,Cr=1<<25,Wt=65536,Ar=1<<17,Sl=1<<18,rn=1<<19,Cl=1<<20,an=65536,$r=1<<21,kn=1<<22,Zt=1<<23,xn=Symbol("$state"),yi=Symbol("component"),Al=Symbol("legacy props"),$l=Symbol(""),Tr=Symbol("attributes"),aa=Symbol("class"),ia=Symbol("style"),jn=Symbol("text"),Bn=Symbol("form reset"),zn=new class extends Error{constructor(){super(...arguments);P(this,"name","StaleReactionError");P(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Kn=!!((Zo=globalThis.document)!=null&&Zo.contentType)&&globalThis.document.contentType.includes("xml"),Yn=3,Gn=8;function wi(e){return e===this.v}function _i(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Tl(e){return!_i(e,this.v)}function Rl(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Pl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Il(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ll(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ol(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ml(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Nl(){throw new Error("https://svelte.dev/e/hydration_failed")}function Dl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ul(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Hl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Fl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Vl=!1;const jl=1,Bl=2,oa="[",ki="[!",xi="[?",Ei="]",on={},de=Symbol("uninitialized"),Si="http://www.w3.org/1999/xhtml",zl="http://www.w3.org/2000/svg",Kl="http://www.w3.org/1998/Math/MathML",Yl="@attach";let Te=null;function En(e){Te=e}function Dt(e,t=!1,n){Te={p:Te,i:!1,c:null,e:null,s:e,x:null,r:M,l:null}}function Ut(e){var t=Te,n=t.e;if(n!==null){t.e=null;for(var r of n)so(r)}return e!==void 0&&(t.x=e),t.i=!0,Te=t.p,la(e)}function la(e={}){return re(e,yi,{value:!0}),e}function Ci(){return!0}let ln=[];function Ai(){var e=ln;ln=[],El(e)}function _t(e){if(ln.length===0&&!Xn){var t=ln;queueMicrotask(()=>{t===ln&&Ai()})}ln.push(e)}function Gl(){for(;ln.length>0;)Ai()}function ql(){console.warn("https://svelte.dev/e/derived_inert")}function qn(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Wl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let O=!1;function kt(e){O=e}let D;function Me(e){if(e===null)throw qn(),on;return D=e}function sn(){return Me(Et(D))}function ve(e){if(O){if(Et(D)!==null)throw qn(),on;D=e}}function sa(e=1){if(O){for(var t=e,n=D;t--;)n=Et(n);D=n}}function ca(e=!0){for(var t=0,n=D;;){if(n.nodeType===Gn){var r=n.data;if(r===Ei){if(t===0)return n;t-=1}else(r===oa||r===ki||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=Et(n);e&&n.remove(),n=a}}function $i(e){if(!e||e.nodeType!==Gn)throw qn(),on;return e.data}function Ht(e){if(typeof e!="object"||e===null||xn in e||yi in e)return e;const t=gi(e);if(t!==kl&&t!==xl)return e;var n=new Map,r=we(e),a=j(0),o=fn,s=l=>{if(fn===o)return l();var f=F,u=fn;tt(null),to(o);var d=l();return tt(f),to(u),d};return r&&n.set("length",j(e.length)),new Proxy(e,{defineProperty(l,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Dl();var d=n.get(f);return d===void 0?s(()=>{var m=j(u.value);return n.set(f,m),m}):E(d,u.value,!0),!0},deleteProperty(l,f){var u=n.get(f);if(u===void 0){if(f in l){const d=s(()=>j(de));n.set(f,d),er(a)}}else E(u,de),er(a);return!0},get(l,f,u){var v;if(f===xn)return e;var d=n.get(f),m=f in l;if(d===void 0&&(!m||(v=yt(l,f))!=null&&v.writable)&&(d=s(()=>{var b=Ht(m?l[f]:de),y=j(b);return y}),n.set(f,d)),d!==void 0){var g=i(d);return g===de?void 0:g}return Reflect.get(l,f,u)},getOwnPropertyDescriptor(l,f){var u=Reflect.getOwnPropertyDescriptor(l,f);if(u&&"value"in u){var d=n.get(f);d&&(u.value=i(d))}else if(u===void 0){var m=n.get(f),g=m==null?void 0:m.v;if(m!==void 0&&g!==de)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return u},has(l,f){var g;if(f===xn)return!0;var u=n.get(f),d=u!==void 0&&u.v!==de||Reflect.has(l,f);if(u!==void 0||M!==null&&(!d||(g=yt(l,f))!=null&&g.writable)){u===void 0&&(u=s(()=>{var v=d?Ht(l[f]):de,b=j(v);return b}),n.set(f,u));var m=i(u);if(m===de)return!1}return d},set(l,f,u,d){var ue;var m=n.get(f),g=f in l;if(r&&f==="length")for(var v=u;v<m.v;v+=1){var b=n.get(v+"");b!==void 0?E(b,de):v in l&&(b=s(()=>j(de)),n.set(v+"",b))}if(m===void 0)(!g||(ue=yt(l,f))!=null&&ue.writable)&&(m=s(()=>j(void 0)),E(m,Ht(u)),n.set(f,m));else{g=m.v!==de;var y=s(()=>Ht(u));E(m,y)}var N=Reflect.getOwnPropertyDescriptor(l,f);if(N!=null&&N.set&&N.set.call(d,u),!g){if(r&&typeof f=="string"){var I=n.get("length"),K=Number(f);Number.isInteger(K)&&K>=I.v&&E(I,K+1)}er(a)}return!0},ownKeys(l){i(a);var f=Reflect.ownKeys(l).filter(m=>{var g=n.get(m);return g===void 0||g.v!==de});for(var[u,d]of n)d.v!==de&&!(u in l)&&f.push(u);return f},setPrototypeOf(){Ul()}})}function Ti(e){try{if(e!==null&&typeof e=="object"&&xn in e)return e[xn]}catch{}return e}function Ri(e,t){return Object.is(Ti(e),Ti(t))}var cn,ua,Pi,Ii,Li;function fa(){if(cn===void 0){cn=window,ua=document,Pi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Ii=yt(t,"firstChild").get,Li=yt(t,"nextSibling").get,mi(e)&&(e[aa]=void 0,e[Tr]=null,e[ia]=void 0,e.__e=void 0),mi(n)&&(n[jn]=void 0)}}function xt(e=""){return document.createTextNode(e)}function Fe(e){return Ii.call(e)}function Et(e){return Li.call(e)}function ke(e,t){if(!O)return Fe(e);var n=Fe(D);if(n===null)n=D.appendChild(xt());else if(t&&n.nodeType!==Yn){var r=xt();return n==null||n.before(r),Me(r),r}return t&&Rr(n),Me(n),n}function Sn(e,t=!1){if(!O){var n=Fe(e);return n instanceof Comment&&n.data===""?Et(n):n}if(t){if((D==null?void 0:D.nodeType)!==Yn){var r=xt();return D==null||D.before(r),Me(r),r}Rr(D)}return D}function Cn(e,t=!1){if(!O)return Fe(e);var n=ke(e,t);return ve(e),n}function oe(e,t=1,n=!1){let r=O?D:e;for(var a;t--;)a=r,r=Et(r);if(!O)return r;if(n){if((r==null?void 0:r.nodeType)!==Yn){var o=xt();return r===null?a==null||a.after(o):r.before(o),Me(o),o}Rr(r)}return Me(r),r}function Jl(e){e.textContent=""}function ha(e,t,n){return t==null||t===Si?document.createElement(e):document.createElementNS(t,e)}function Rr(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===Yn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Xl(e){var t=M;if(t===null)return F.f|=Zt,e;if((t.f&nn)===0&&(t.f&_n)===0)throw e;St(e,t)}function St(e,t){if(!(t!==null&&(t.f&Ye)!==0)){for(;t!==null;){if((t.f&na)!==0&&(t.f&(Ye|Cr))===0){if((t.f&nn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}const Ql=-7169;function fe(e,t){e.f=e.f&Ql|t}function da(e){(e.f&Qe)!==0||e.deps===null?fe(e,ge):fe(e,ft)}function Oi(e){if(e!==null)for(const t of e)(t.f&_e)===0||(t.f&an)===0||(t.f^=an,Oi(t.deps))}function Mi(e,t,n){(e.f&he)!==0?t.add(e):(e.f&ft)!==0&&n.add(e),Oi(e.deps),fe(e,ge)}function Ni(e,t,n){if(e==null)return t(void 0),qt;const r=rr(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const An=[];function es(e,t=qt){let n=null;const r=new Set;function a(l){if(_i(e,l)&&(e=l,n)){const f=!An.length;for(const u of r)u[1](),An.push(u,e);if(f){for(let u=0;u<An.length;u+=2)An[u][0](An[u+1]);An.length=0}}}function o(l){a(l(e))}function s(l,f=qt){const u=[l,f];return r.add(u),r.size===1&&(n=t(a,o)||qt),l(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:s}}function Wn(e){let t;return Ni(e,n=>t=n)(),t}let va=Symbol("unmounted");function Di(e,t,n){const r=n[t]??(n[t]={store:null,source:Zi(void 0),unsubscribe:qt});if(r.store!==e&&!(va in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=qt;else{var a=!0;r.unsubscribe=Ni(e,o=>{a?r.source.v=o:E(r.source,o)}),a=!1}return e&&va in n?Wn(e):i(r.source)}function ts(){const e={};function t(){Nr(()=>{for(var n in e)e[n].unsubscribe();re(e,va,{enumerable:!1,value:!0})})}return[e,t]}function ns(e,t){if(t){const n=document.body;e.autofocus=!0,_t(()=>{document.activeElement===n&&e.focus()})}}let Ui=!1;function Hi(){Ui||(Ui=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Bn])==null||t.call(n)})},{capture:!0}))}function $n(e){var t=F,n=M;tt(null),At(null);try{return e()}finally{tt(t),At(n)}}function rs(e,t,n,r=n){e.addEventListener(t,()=>$n(n));const a=e[Bn];a?e[Bn]=()=>{a(),r(!0)}:e[Bn]=()=>r(!0),Hi()}function Fi(e,t,n,r){const a=pa;var o=e.filter(v=>!v.settled),s=t.map(a);if(n.length===0&&o.length===0){r(s);return}var l=M,f=as(),u=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(v=>v.promise)):null;function d(v){if((l.f&Ye)===0){f();try{r([...s,...v])}catch(b){St(b,l)}Pr()}}var m=Vi();if(n.length===0){u.then(()=>d([])).finally(m);return}function g(){Promise.all(n.map(v=>is(v))).then(d).catch(v=>St(v,l)).finally(m)}u?u.then(()=>{f(),g(),Pr()}):g()}function as(){var e=M,t=F,n=Te,r=C;return function(o=!0){At(e),tt(t),En(n),o&&(e.f&Ye)===0&&(r==null||r.activate(),r==null||r.apply())}}function Pr(e=!0){At(null),tt(null),En(null),e&&(C==null||C.deactivate())}function Vi(){var e=M,t=e.b,n=C,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function pa(e){var t=_e|he;return M!==null&&(M.f|=rn),{ctx:Te,deps:null,effects:null,equals:wi,f:t,fn:e,reactions:null,rv:0,v:de,wv:0,parent:M,ac:null}}const Zn=Symbol("obsolete");function is(e,t,n){let r=M;r===null&&Pl();var a=void 0,o=Qn(de),s=!F,l=new Set;return ms(()=>{var v,b;var f=M,u=bi();a=u.promise;try{Promise.resolve(e()).then(u.resolve,y=>{y!==zn&&u.reject(y)}).finally(Pr)}catch(y){u.reject(y),Pr()}var d=C;if(s){if((f.f&nn)!==0)var m=Vi();if((v=r.b)!=null&&v.is_rendered())(b=d.async_deriveds.get(f))==null||b.reject(Zn);else for(const y of l.values())y.reject(Zn);l.add(u),d.async_deriveds.set(f,u)}const g=(y,N=void 0)=>{m==null||m(),l.delete(u),N!==Zn&&(d.activate(),N?(o.f|=Zt,Or(o,N)):((o.f&Zt)!==0&&(o.f^=Zt),Or(o,y)),d.deactivate())};u.promise.then(g,y=>g(null,y||"unknown"))}),Nr(()=>{for(const f of l)f.reject(Zn)}),new Promise(f=>{function u(d){function m(){d===a?f(o):u(a)}d.then(m,m)}u(a)})}function Ne(e){const t=pa(e);return Qi(t),t}function os(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Se(t[n])}}function ga(e){var t,n=M,r=e.parent;if(!Ft&&r!==null&&e.v!==de&&(r.f&(Ye|et))!==0)return ql(),e.v;At(r);try{e.f&=~an,os(e),t=ao(e)}finally{At(n)}return t}function ji(e){var t=ga(e);if(!e.equals(t)&&(e.wv=no(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?(C.capture(e,t,!0),Jn==null||Jn.capture(e,t,!0)):e.v=t,e.deps===null))){fe(e,ge);return}Ft||(Ee!==null?(ka()||C!=null&&C.is_fork)&&Ee.set(e,t):da(e))}function ls(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&$n(()=>{n.ac.abort(zn),n.ac=null}),n.fn!==null&&(n.teardown=qt),nr(n,0),Ea(n))}function Bi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Pn(t)}let ma=null,Tn=null,C=null,Jn=null,Ee=null,ba=null,Xn=!1,ya=!1,Rn=null,Ir=null;var zi=0;let ss=1;const Yr=class Yr{constructor(){L(this,Z);P(this,"id",ss++);L(this,In,!1);P(this,"linked",!0);L(this,en,null);L(this,vn,null);P(this,"async_deriveds",new Map);P(this,"current",new Map);P(this,"previous",new Map);L(this,Ln,new Set);L(this,On,new Set);L(this,Mn,0);L(this,Vt,new Map);L(this,Nn,null);L(this,Be,[]);L(this,sr,[]);L(this,jt,new Set);L(this,pt,new Set);L(this,Pt,new Map);L(this,Dn,new Set);P(this,"is_fork",!1);L(this,pn,!1);Tn===null?ma=Tn=this:($(Tn,vn,this),$(this,en,Tn)),Tn=this}skip_effect(t){h(this,Pt).has(t)||h(this,Pt).set(t,{d:[],m:[]}),h(this,Dn).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=h(this,Pt).get(t);if(r){h(this,Pt).delete(t);for(var a of r.d)fe(a,he),n(a);for(a of r.m)fe(a,ft),n(a)}h(this,Dn).add(t)}capture(t,n,r=!1){t.v!==de&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Zt)===0&&(this.current.set(t,[n,r]),Ee==null||Ee.set(t,n)),this.is_fork||(t.v=n)}activate(){C=this}deactivate(){C=null,Ee=null}flush(){try{ya=!0,C=this,H(this,Z,wr).call(this)}finally{zi=0,ba=null,Rn=null,Ir=null,ya=!1,C=null,Ee=null,Ct.clear()}}discard(){var t;for(const n of h(this,On))n(this);h(this,On).clear();for(const n of this.async_deriveds.values())n.reject(Zn);H(this,Z,_r).call(this),(t=h(this,Nn))==null||t.resolve()}register_created_effect(t){h(this,sr).push(t)}increment(t,n){if($(this,Mn,h(this,Mn)+1),t){let r=h(this,Vt).get(n)??0;h(this,Vt).set(n,r+1)}}decrement(t,n){if($(this,Mn,h(this,Mn)-1),t){let r=h(this,Vt).get(n)??0;r===1?h(this,Vt).delete(n):h(this,Vt).set(n,r-1)}h(this,pn)||($(this,pn,!0),_t(()=>{$(this,pn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)h(this,jt).add(r);for(const r of n)h(this,pt).add(r);t.clear(),n.clear()}oncommit(t){h(this,Ln).add(t)}ondiscard(t){h(this,On).add(t)}settled(){return(h(this,Nn)??$(this,Nn,bi())).promise}static ensure(){if(C===null){const t=C=new Yr;!ya&&!Xn&&_t(()=>{h(t,In)||t.flush()})}return C}apply(){{Ee=null;return}}schedule(t){var a;if(ba=t,(a=t.b)!=null&&a.is_pending&&(t.f&(_n|Sr|ta))!==0&&(t.f&nn)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Rn!==null&&n===M&&(F===null||(F.f&_e)===0))return;if((r&(wt|ut))!==0){if((r&ge)===0)return;n.f^=ge}}h(this,Be).push(n)}};In=new WeakMap,en=new WeakMap,vn=new WeakMap,Ln=new WeakMap,On=new WeakMap,Mn=new WeakMap,Vt=new WeakMap,Nn=new WeakMap,Be=new WeakMap,sr=new WeakMap,jt=new WeakMap,pt=new WeakMap,Pt=new WeakMap,Dn=new WeakMap,pn=new WeakMap,Z=new WeakSet,ii=function(){if(this.is_fork)return!0;for(const r of h(this,Vt).keys()){for(var t=r,n=!1;t.parent!==null;){if(h(this,Pt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},wr=function(){var f,u,d,m;$(this,In,!0),zi++>1e3&&(H(this,Z,_r).call(this),cs());for(const g of h(this,jt))h(this,pt).delete(g),fe(g,he),this.schedule(g);for(const g of h(this,pt))fe(g,ft),this.schedule(g);const t=h(this,Be);$(this,Be,[]),this.apply();var n=Rn=[],r=[],a=Ir=[];for(const g of t)try{H(this,Z,oi).call(this,g,n,r)}catch(v){throw qi(g),H(this,Z,ii).call(this)||this.discard(),v}if(C=null,a.length>0){var o=Yr.ensure();for(const g of a)o.schedule(g)}if(Rn=null,Ir=null,H(this,Z,ii).call(this)){H(this,Z,Fn).call(this,r),H(this,Z,Fn).call(this,n);for(const[g,v]of h(this,Pt))Gi(g,v);a.length>0&&H(f=C,Z,wr).call(f);return}const s=H(this,Z,vl).call(this);if(s){H(this,Z,Fn).call(this,r),H(this,Z,Fn).call(this,n),H(u=s,Z,pl).call(u,this);return}h(this,jt).clear(),h(this,pt).clear();for(const g of h(this,Ln))g(this);h(this,Ln).clear(),Jn=this,Ki(r),Ki(n),Jn=null,(d=h(this,Nn))==null||d.resolve();var l=C;if(h(this,Mn)===0&&(h(this,Be).length===0||l!==null)&&H(this,Z,_r).call(this),h(this,Be).length>0)if(l!==null){const g=l;h(g,Be).push(...h(this,Be).filter(v=>!h(g,Be).includes(v)))}else l=this;l!==null&&(Ct.clear(),H(m=l,Z,wr).call(m))},oi=function(t,n,r){t.f^=ge;for(var a=t.first;a!==null;){var o=a.f,s=(o&(ut|wt))!==0,l=s&&(o&ge)!==0,f=l||(o&et)!==0||h(this,Pt).has(a);if(!f&&a.fn!==null){s?a.f^=ge:(o&_n)!==0?n.push(a):tr(a)&&((o&ct)!==0&&h(this,pt).add(a),Pn(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}},vl=function(){for(var t=h(this,en);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=h(t,en)}return null},pl=function(t){var r;for(const[a,o]of t.current)!this.previous.has(a)&&t.previous.has(a)&&this.previous.set(a,t.previous.get(a)),this.current.set(a,o);for(const[a,o]of t.async_deriveds){const s=this.async_deriveds.get(a);s&&o.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(h(t,jt),h(t,pt));const n=a=>{var o=a.reactions;if(o!==null&&!((a.f&_e)!==0&&(a.f&(he|ft))===0))for(const f of o){var s=f.f;if((s&_e)!==0)n(f);else{var l=f;s&(kn|ct)&&!this.async_deriveds.has(l)&&(h(this,pt).delete(l),fe(l,he),this.schedule(l))}}};for(const a of this.current.keys())n(a);this.oncommit(()=>t.discard()),H(r=t,Z,_r).call(r),C=this,H(this,Z,wr).call(this)},Fn=function(t){for(var n=0;n<t.length;n+=1)Mi(t[n],h(this,jt),h(this,pt))},Su=function(){var m;for(let g=ma;g!==null;g=h(g,vn)){var t=g.id<this.id,n=[];for(const[v,[b,y]]of this.current){if(g.current.has(v)){var r=g.current.get(v)[0];if(t&&b!==r)g.current.set(v,[b,y]);else continue}n.push(v)}if(t)for(const[v,b]of this.async_deriveds){const y=g.async_deriveds.get(v);y&&b.promise.then(y.resolve).catch(y.reject)}var a=[...g.current.keys()].filter(v=>!g.current.get(v)[1]);if(!(!h(g,In)||a.length===0)){var o=a.filter(v=>!this.current.has(v));if(o.length===0)t&&g.discard();else if(n.length>0){if(t)for(const v of h(this,Dn))g.unskip_effect(v,b=>{var y;(b.f&(ct|kn))!==0?g.schedule(b):H(y=g,Z,Fn).call(y,[b])});g.activate();var s=new Set,l=new Map;for(var f of n)Yi(f,o,s,l);l=new Map;var u=[...g.current].filter(([v,b])=>{const y=this.current.get(v);return y?y[0]!==b[0]||y[1]!==b[1]:!0}).map(([v])=>v);if(u.length>0)for(const v of h(this,sr))(v.f&(Ye|et|Ar))===0&&wa(v,u,l)&&((v.f&(kn|ct))!==0?(fe(v,he),g.schedule(v)):h(g,jt).add(v));if(h(g,Be).length>0&&!h(g,pn)){g.apply();for(var d of h(g,Be))H(m=g,Z,oi).call(m,d,[],[]);$(g,Be,[])}g.deactivate()}}}},_r=function(){if(this.linked){var t=h(this,en),n=h(this,vn);t===null?ma=n:$(t,vn,n),n===null?Tn=t:$(n,en,t),this.linked=!1}};let Jt=Yr;function Q(e){var t=Xn;Xn=!0;try{for(var n;;){if(Gl(),C===null)return n;C.flush()}}finally{Xn=t}}function cs(){try{Ml()}catch(e){St(e,ba)}}let ht=null;function Ki(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ye|et))===0&&tr(r)&&(ht=new Set,Pn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ho(r),(ht==null?void 0:ht.size)>0)){Ct.clear();for(const a of ht){if((a.f&(Ye|et))!==0)continue;const o=[a];let s=a.parent;for(;s!==null;)ht.has(s)&&(ht.delete(s),o.push(s)),s=s.parent;for(let l=o.length-1;l>=0;l--){const f=o[l];(f.f&(Ye|et))===0&&Pn(f)}}ht.clear()}}ht=null}}function Yi(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const o=a.f;(o&_e)!==0?Yi(a,t,n,r):(o&(kn|ct))!==0&&(o&he)===0&&wa(a,t,r)&&(fe(a,he),_a(a))}}function wa(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if($e.call(t,a))return!0;if((a.f&_e)!==0&&wa(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function _a(e){C.schedule(e)}function Gi(e,t){if(!((e.f&ut)!==0&&(e.f&ge)!==0)){(e.f&he)!==0?t.d.push(e):(e.f&ft)!==0&&t.m.push(e),fe(e,ge);for(var n=e.first;n!==null;)Gi(n,t),n=n.next}}function qi(e){fe(e,ge);for(var t=e.first;t!==null;)qi(t),t=t.next}let Lr=new Set;const Ct=new Map;let Wi=!1;function Qn(e,t){var n={f:0,v:e,reactions:null,equals:wi,rv:0,wv:0};return n}function j(e,t){const n=Qn(e);return Qi(n),n}function Zi(e,t=!1,n=!0){const r=Qn(e);return t||(r.equals=Tl),r}function E(e,t,n=!1){F!==null&&(!dt||(F.f&Ar)!==0)&&Ci()&&(F.f&(_e|ct|kn|Ar))!==0&&($t===null||!$t.has(e))&&Hl();let r=n?Ht(t):t;return Or(e,r,Ir)}function Or(e,t,n=null){if(!e.equals(t)){Ft?Ct.set(e,t):Ct.has(e)||Ct.set(e,e.v);var r=Jt.ensure();if(r.capture(e,t),(e.f&_e)!==0){const a=e;(e.f&he)!==0&&ga(a),Ee===null&&da(a)}e.wv=no(),Ji(e,he,n),M!==null&&(M.f&ge)!==0&&(M.f&(ut|wt))===0&&(nt===null?fs([e]):nt.push(e)),!r.is_fork&&Lr.size>0&&!Wi&&us()}return t}function us(){Wi=!1;for(const e of Lr){(e.f&ge)!==0&&fe(e,ft);let t;try{t=tr(e)}catch{t=!0}t&&Pn(e)}Lr.clear()}function er(e){E(e,e.v+1)}function Ji(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,o=0;o<a;o++){var s=r[o],l=s.f,f=(l&he)===0;if(f&&fe(s,t),(l&Ar)!==0)Lr.add(s);else if((l&_e)!==0){var u=s;Ee==null||Ee.delete(u),(l&an)===0&&(l&Qe&&(M===null||(M.f&$r)===0)&&(s.f|=an),Ji(u,ft,n))}else if(f){var d=s;(l&ct)!==0&&ht!==null&&ht.add(d),n!==null?n.push(d):_a(d)}}}let Mr=!1,Ft=!1;function Xi(e){Ft=e}let F=null,dt=!1;function tt(e){F=e}let M=null;function At(e){M=e}let $t=null;function Qi(e){F!==null&&($t??($t=new Set)).add(e)}let Ve=null,Ge=0,nt=null;function fs(e){nt=e}let eo=1,un=0,fn=un;function to(e){fn=e}function no(){return++eo}function tr(e){var t=e.f;if((t&he)!==0)return!0;if(t&_e&&(e.f&=~an),(t&ft)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var o=n[a];if(tr(o)&&ji(o),o.wv>e.wv)return!0}(t&Qe)!==0&&Ee===null&&fe(e,ge)}return!1}function ro(e,t,n=!0){var r=e.reactions;if(r!==null&&!($t!==null&&$t.has(e)))for(var a=0;a<r.length;a++){var o=r[a];(o.f&_e)!==0?ro(o,t,!1):t===o&&(n?fe(o,he):(o.f&ge)!==0&&fe(o,ft),_a(o))}}function ao(e){var t=Ve,n=Ge,r=nt,a=F,o=$t,s=Te,l=dt,f=fn,u=e.f;Ve=null,Ge=0,nt=null,F=(u&(ut|wt))===0?e:null,$t=null,En(e.ctx),dt=!1,fn=++un,e.ac!==null&&($n(()=>{e.ac.abort(zn)}),e.ac=null);try{e.f|=$r;var d=e.fn,m=d();e.f|=nn;var g=io(e);if(Ci()&&nt!==null&&!dt&&g!==null&&(e.f&(_e|ft|he))===0)for(var v=0;v<nt.length;v++)ro(nt[v],e);if(a!==null&&a!==e){if(un++,a.deps!==null)for(let b=0;b<n;b+=1)a.deps[b].rv=un;if(t!==null)for(const b of t)b.rv=un;nt!==null&&(r===null?r=nt:r.push(...nt))}return(e.f&Zt)!==0&&(e.f^=Zt),m}catch(b){return io(e),Xl(b)}finally{e.f^=$r,Ve=t,Ge=n,nt=r,F=a,$t=o,En(s),dt=l,fn=f}}function io(e){var a;var t=e.deps,n=C==null?void 0:C.is_fork;if(Ve!==null){var r;if(n||nr(e,Ge),t!==null&&Ge>0)for(t.length=Ge+Ve.length,r=0;r<Ve.length;r++)t[Ge+r]=Ve[r];else e.deps=t=Ve;if(ka()&&(e.f&Qe)!==0)for(r=Ge;r<t.length;r++)((a=t[r]).reactions??(a.reactions=[])).push(e)}else!n&&t!==null&&Ge<t.length&&(nr(e,Ge),t.length=Ge);return t}function hs(e,t){let n=t.reactions;if(n!==null){var r=Xe.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&_e)!==0&&(Ve===null||!$e.call(Ve,t))){var o=t;(o.f&Qe)!==0&&(o.f^=Qe,o.f&=~an),o.v!==de&&da(o),o.ac!==null&&$n(()=>{o.ac.abort(zn),o.ac=null,fe(o,he)}),ls(o),nr(o,0)}}function nr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)hs(e,n[r])}function Pn(e){var t=e.f;if((t&Ye)===0){fe(e,ge);var n=M,r=Mr;M=e,Mr=(t&(ut|wt))===0;try{(t&(ct|ta))!==0?bs(e):Ea(e),uo(e);var a=ao(e);e.teardown=typeof a=="function"?a:null,e.wv=eo;var o;Ae&&Vl&&(e.f&he)!==0&&e.deps}finally{Mr=r,M=n}}}async function hn(){await Promise.resolve(),Q()}function i(e){var t=e.f,n=(t&_e)!==0;if(F!==null&&!dt){var r=M!==null&&(M.f&Ye)!==0;if(!r&&($t===null||!$t.has(e))){var a=F.deps;if((F.f&$r)!==0)e.rv<un&&(e.rv=un,Ve===null&&a!==null&&a[Ge]===e?Ge++:Ve===null?Ve=[e]:Ve.push(e));else{F.deps??(F.deps=[]),$e.call(F.deps,e)||F.deps.push(e);var o=e.reactions;o===null?e.reactions=[F]:$e.call(o,F)||o.push(F)}}}if(Ft&&Ct.has(e))return Ct.get(e);if(n){var s=e;if(Ft){var l=s.v;return((s.f&ge)===0&&s.reactions!==null||lo(s))&&(l=ga(s)),Ct.set(s,l),l}var f=(s.f&Qe)===0&&!dt&&F!==null&&(Mr||(F.f&Qe)!==0),u=(s.f&nn)===0;tr(s)&&(f&&(s.f|=Qe),ji(s)),f&&!u&&(Bi(s),oo(s))}if(Ee!=null&&Ee.has(e))return Ee.get(e);if((e.f&Zt)!==0)throw e.v;return e.v}function oo(e){if(e.f|=Qe,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&_e)!==0&&(t.f&Qe)===0&&(Bi(t),oo(t))}function lo(e){if(e.v===de)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ct.has(t)||(t.f&_e)!==0&&lo(t))return!0;return!1}function rr(e){var t=dt;try{return dt=!0,e()}finally{dt=t}}function ds(e){M===null&&(F===null&&Ol(),Ll()),Ft&&Il()}function vs(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function vt(e,t){var n=M;n!==null&&(n.f&et)!==0&&(e|=et);var r={ctx:Te,deps:null,nodes:null,f:e|he|Qe,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(r);var a=r;if((e&_n)!==0)Rn!==null?Rn.push(r):Jt.ensure().schedule(r);else if(t!==null){try{Pn(r)}catch(s){throw Se(r),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&rn)===0&&(a=a.first,(e&ct)!==0&&(e&Wt)!==0&&a!==null&&(a.f|=Wt))}if(a!==null&&(a.parent=n,n!==null&&vs(a,n),F!==null&&(F.f&_e)!==0&&(e&wt)===0)){var o=F;(o.effects??(o.effects=[])).push(a)}return r}function ka(){return F!==null&&!dt}function Nr(e){const t=vt(Sr,null);return fe(t,ge),t.teardown=e,t}function je(e){ds();var t=M.f,n=!F&&(t&ut)!==0&&Te!==null&&!Te.i;if(n){var r=Te;(r.e??(r.e=[])).push(e)}else return so(e)}function so(e){return vt(_n|Cl,e)}function ps(e){Jt.ensure();const t=vt(wt|rn,e);return()=>{Se(t)}}function gs(e){Jt.ensure();const t=vt(wt|rn,e);return(n={})=>new Promise(r=>{n.outro?ir(t,()=>{Se(t),r(void 0)}):(Se(t),r(void 0))})}function xa(e){return vt(_n,e)}function ms(e){return vt(kn|rn,e)}function Dr(e,t=0){return vt(Sr|t,e)}function Re(e,t=[],n=[],r=[]){Fi(r,t,n,a=>{vt(Sr,()=>{e(...a.map(i))})})}function ar(e,t=0){var n=vt(ct|t,e);return n}function co(e,t=0){var n=vt(ta|t,e);return n}function Tt(e){return vt(ut|rn,e)}function uo(e){var t=e.teardown;if(t!==null){const n=Ft,r=F;Xi(!0),tt(null);try{t.call(null)}catch(a){St(a,e.parent)}finally{Xi(n),tt(r)}}}function Ea(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&$n(()=>{a.abort(zn)});var r=n.next;(n.f&wt)!==0?n.parent=null:Se(n,t),n=r}}function bs(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ut)===0&&Se(t),t=n}}function Se(e,t=!0){var n=!1;(t||(e.f&Sl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(fo(e.nodes.start,e.nodes.end),n=!0),e.f|=Cr,Ea(e,t&&!n),nr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();uo(e),e.f^=Cr,e.f|=Ye;var a=e.parent;a!==null&&a.first!==null&&ho(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function fo(e,t){for(;e!==null;){var n=e===t?null:Et(e);e.remove(),e=n}}function ho(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function ir(e,t,n=!0){var r=[];e.f|=ra,vo(e,r,!0);var a=()=>{n&&Se(e),t&&t()},o=r.length;if(o>0){var s=()=>--o||a();for(var l of r)l.out(s)}else a()}function vo(e,t,n){if((e.f&et)===0){e.f^=et;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var o=a.next;if((a.f&wt)===0){var s=(a.f&Wt)!==0||(a.f&ut)!==0&&(e.f&ct)!==0;vo(a,t,s?n:!1)}a=o}}}function po(e){e.f&=~ra,go(e,!0)}function go(e,t){if((e.f&ra)===0&&(e.f&et)!==0){e.f^=et,(e.f&ge)===0&&(fe(e,he),Jt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&Wt)!==0||(n.f&ut)!==0;go(n,a?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const s of o)(s.is_global||t)&&s.in()}}function mo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:Et(n);t.append(n),n=a}}function ys(e){let t=0,n=Qn(0),r;return()=>{ka()&&(i(n),Dr(()=>(t===0&&(r=rr(()=>e(()=>er(n)))),t+=1,()=>{_t(()=>{t-=1,t===0&&(r==null||r(),r=void 0,er(n))})})))}}function bo(e){const t={get:n=>Wn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Wn(t.store),{[n]:r}):Object.assign(Wn(t.store),n),t.store.set(Wn(t.store))},store:es(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:bo({}),i18n:bo({}),instances:new Set,plugins:new Set};const ws={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};globalThis.$altcha.i18n.set("en",ws);const _s="5";typeof window<"u"&&((Jo=window.__svelte??(window.__svelte={})).v??(Jo.v=new Set)).add(_s);const dn=Symbol("events"),yo=new Set,Sa=new Set;function wo(e,t,n,r={}){function a(o){if(r.capture||$a.call(t,o),!o.cancelBubble)return $n(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?_t(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function me(e,t,n,r,a){var o={capture:r,passive:a},s=wo(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Nr(()=>{t.removeEventListener(e,s,o)})}function Ur(e,t,n){(t[dn]??(t[dn]={}))[e]=n}function Hr(e){for(var t=0;t<e.length;t++)yo.add(e[t]);for(var n of Sa)n(e)}let Ca=null,Aa=!1;function $a(e){var y,N;var t=this,n=t.ownerDocument,r=e.type,a=((y=e.composedPath)==null?void 0:y.call(e))||[],o=a[0]||e.target;Ca=e,Aa||(Aa=!0,setTimeout(()=>{Aa=!1,Ca=null}));var s=0,l=Ca===e&&e[dn];if(l){var f=a.indexOf(l);if(f!==-1&&(t===document||t===window)){e[dn]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(s=f)}if(o=a[s]||e.target,o!==t){re(e,"currentTarget",{configurable:!0,get(){return o||n}});var d=F,m=M;tt(null),At(null);try{for(var g,v=[];o!==null&&o!==t;){try{var b=(N=o[dn])==null?void 0:N[r];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(I){g?v.push(I):g=I}if(e.cancelBubble)break;s++,o=s<a.length?a[s]:null}if(g){for(let I of v)queueMicrotask(()=>{throw I});throw g}}finally{e[dn]=t,delete e.currentTarget,tt(d),At(m)}}}const Ta=((Xo=globalThis==null?void 0:globalThis.window)==null?void 0:Xo.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function ks(e){return(Ta==null?void 0:Ta.createHTML(e))??e}function _o(e){var t=ha("template");return t.innerHTML=ks(e.replaceAll("<!>","<!---->")),t.content}function qe(e,t){var n=M;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function ce(e,t){var n=(t&jl)!==0,r=(t&Bl)!==0,a,o=!e.startsWith("<!>");return()=>{if(O)return qe(D,null),D;a===void 0&&(a=_o(o?e:"<!>"+e),n||(a=Fe(a)));var s=r||Pi?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=Fe(s),f=s.lastChild;qe(l,f)}else qe(s,s);return s}}function xs(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(O)return qe(D,null),D;if(!o){var s=_o(a),l=Fe(s);o=Fe(l)}var f=o.cloneNode(!0);return qe(f,f),f}}function Ra(e,t){return xs(e,t,"svg")}function Fr(e=""){if(!O){var t=xt(e+"");return qe(t,t),t}var n=D;return n.nodeType!==Yn?(n.before(n=xt()),Me(n)):Rr(n),qe(n,n),n}function ko(){if(O)return qe(D,null),D;var e=document.createDocumentFragment(),t=document.createComment(""),n=xt();return e.append(t,n),qe(t,n),e}function B(e,t){if(O){var n=M;((n.f&nn)===0||n.nodes.end===null)&&(n.nodes.end=D),sn();return}e!==null&&e.before(t)}function Es(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ss=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Cs(e){return Ss.includes(e)}const As={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function $s(e){return e=e.toLowerCase(),As[e]??e}const Ts=["touchstart","touchmove"];function Rs(e){return Ts.includes(e)}var Ps=Wt|rn;function Is(e,t,n,r){new Ls(e,t,n,r)}class Ls{constructor(t,n,r,a){L(this,J);P(this,"parent");P(this,"is_pending",!1);P(this,"transform_error");L(this,We);L(this,cr,O?D:null);L(this,rt);L(this,gn);L(this,De);L(this,Ze,null);L(this,Ue,null);L(this,Je,null);L(this,It,null);L(this,mn,0);L(this,tn,0);L(this,Un,!1);L(this,ur,new Set);L(this,fr,new Set);L(this,Bt,null);L(this,Gr,ys(()=>($(this,Bt,Qn(h(this,mn))),()=>{$(this,Bt,null)})));var o;$(this,We,t),$(this,rt,n),$(this,gn,s=>{var l=M;l.b=this,l.f|=na,r(s)}),this.parent=M.b,this.transform_error=a??((o=this.parent)==null?void 0:o.transform_error)??(s=>s),$(this,De,ar(()=>{if(O){const s=h(this,cr);sn();const l=s.data===ki;if(s.data.startsWith(xi)){const u=JSON.parse(s.data.slice(xi.length));H(this,J,ml).call(this,u)}else l?H(this,J,bl).call(this):H(this,J,gl).call(this)}else H(this,J,si).call(this)},Ps)),O&&$(this,We,D)}defer_effect(t){Mi(t,h(this,ur),h(this,fr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!h(this,rt).pending}update_pending_count(t,n){H(this,J,ci).call(this,t,n),$(this,mn,h(this,mn)+t),!(!h(this,Bt)||h(this,Un))&&($(this,Un,!0),_t(()=>{$(this,Un,!1),h(this,Bt)&&Or(h(this,Bt),h(this,mn))}))}get_effect_pending(){return h(this,Gr).call(this),i(h(this,Bt))}error(t){if(!h(this,rt).onerror&&!h(this,rt).failed)throw t;C!=null&&C.is_fork?(h(this,Ze)&&C.skip_effect(h(this,Ze)),h(this,Ue)&&C.skip_effect(h(this,Ue)),h(this,Je)&&C.skip_effect(h(this,Je)),C.oncommit(()=>{H(this,J,ui).call(this,t)})):H(this,J,ui).call(this,t)}}We=new WeakMap,cr=new WeakMap,rt=new WeakMap,gn=new WeakMap,De=new WeakMap,Ze=new WeakMap,Ue=new WeakMap,Je=new WeakMap,It=new WeakMap,mn=new WeakMap,tn=new WeakMap,Un=new WeakMap,ur=new WeakMap,fr=new WeakMap,Bt=new WeakMap,Gr=new WeakMap,J=new WeakSet,gl=function(){try{$(this,Ze,Tt(()=>h(this,gn).call(this,h(this,We))))}catch(t){this.error(t)}},ml=function(t){const n=h(this,rt).failed,{reset:r,invoke_onerror:a}=H(this,J,li).call(this,t);_t(a),n&&$(this,Je,Tt(()=>{n(h(this,We),()=>t,()=>r)}))},li=function(t){var n=!1,r=!1;const a=()=>{if(n){Zl();return}n=!0,r&&Fl(),h(this,Je)!==null&&ir(h(this,Je),()=>{$(this,Je,null)}),H(this,J,Qr).call(this,()=>{H(this,J,si).call(this)})};return{reset:a,invoke_onerror:()=>{var s,l;try{r=!0,(l=(s=h(this,rt)).onerror)==null||l.call(s,t,a),r=!1}catch(f){St(f,h(this,De)&&h(this,De).parent)}}}},bl=function(){const t=h(this,rt).pending;t&&(this.is_pending=!0,$(this,Ue,Tt(()=>t(h(this,We)))),_t(()=>{var n=$(this,It,document.createDocumentFragment()),r=xt(),a=!1;if(n.append(r),$(this,Ze,H(this,J,Qr).call(this,()=>{try{return Tt(()=>h(this,gn).call(this,r))}catch(o){try{this.error(o),a=!0}catch(s){St(s,h(this,De).parent)}return null}})),h(this,Ze)===null){$(this,It,null),a&&H(this,J,kr).call(this,C);return}h(this,tn)===0&&(h(this,We).before(n),$(this,It,null),ir(h(this,Ue),()=>{$(this,Ue,null)}),H(this,J,kr).call(this,C))}))},si=function(){try{if(this.is_pending=this.has_pending_snippet(),$(this,tn,0),$(this,mn,0),$(this,Ze,Tt(()=>{h(this,gn).call(this,h(this,We))})),h(this,tn)>0){var t=$(this,It,document.createDocumentFragment());mo(h(this,Ze),t);const n=h(this,rt).pending;$(this,Ue,Tt(()=>n(h(this,We))))}else H(this,J,kr).call(this,C)}catch(n){this.error(n)}},kr=function(t){this.is_pending=!1,t.transfer_effects(h(this,ur),h(this,fr))},Qr=function(t){var n=M,r=F,a=Te;At(h(this,De)),tt(h(this,De)),En(h(this,De).ctx);try{return Jt.ensure(),t()}finally{At(n),tt(r),En(a)}},ci=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&H(r=this.parent,J,ci).call(r,t,n);return}$(this,tn,h(this,tn)+t),h(this,tn)===0&&(H(this,J,kr).call(this,n),h(this,Ue)&&ir(h(this,Ue),()=>{$(this,Ue,null)}),h(this,It)&&(h(this,We).before(h(this,It)),$(this,It,null)))},ui=function(t){h(this,Ze)&&(Se(h(this,Ze)),$(this,Ze,null)),h(this,Ue)&&(Se(h(this,Ue)),$(this,Ue,null)),h(this,Je)&&(Se(h(this,Je)),$(this,Je,null)),O&&(Me(h(this,cr)),sa(),Me(ca()));let n=h(this,rt).failed;const r=a=>{const{reset:o,invoke_onerror:s}=H(this,J,li).call(this,a);s(),n&&$(this,Je,H(this,J,Qr).call(this,()=>{try{return Tt(()=>{var l=M;l.b=this,l.f|=na,n(h(this,We),()=>a,()=>o)})}catch(l){return St(l,h(this,De).parent),null}}))};_t(()=>{var a;try{a=this.transform_error(t)}catch(o){St(o,h(this,De)&&h(this,De).parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(r,o=>St(o,h(this,De)&&h(this,De).parent)):r(a)})};function Rt(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[jn]??(e[jn]=e.nodeValue))&&(e[jn]=n,e.nodeValue=`${n}`)}function xo(e,t){return Eo(e,t)}function Os(e,t){fa(),t.intro=t.intro??!1;const n=t.target,r=O,a=D;try{for(var o=Fe(n);o&&(o.nodeType!==Gn||o.data!==oa);)o=Et(o);if(!o)throw on;kt(!0),Me(o);const s=Eo(e,{...t,anchor:o});return kt(!1),s}catch(s){if(s instanceof Error&&s.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw s;return s!==on&&console.warn("Failed to hydrate: ",s),t.recover===!1&&Nl(),fa(),Jl(n),kt(!1),xo(e,t)}finally{kt(r),Me(a)}}const Vr=new Map;function Eo(e,{target:t,anchor:n,props:r={},events:a,context:o,intro:s=!0,transformError:l}){fa();var f=void 0,u=gs(()=>{var d=n??t.appendChild(xt());Is(d,{pending:()=>{}},v=>{Dt({});var b=Te;if(o&&(b.c=o),a&&(r.$$events=a),O&&qe(v,null),f=e(v,r)||la(),O&&(M.nodes.end=D,D===null||D.nodeType!==Gn||D.data!==Ei))throw qn(),on;Ut()},l);var m=new Set,g=v=>{for(var b=0;b<v.length;b++){var y=v[b];if(!m.has(y)){m.add(y);var N=Rs(y);for(const ue of[t,document]){var I=Vr.get(ue);I===void 0&&(I=new Map,Vr.set(ue,I));var K=I.get(y);K===void 0?(ue.addEventListener(y,$a,{passive:N}),I.set(y,1)):I.set(y,K+1)}}}};return g(Er(yo)),Sa.add(g),()=>{var N;for(var v of m)for(const I of[t,document]){var b=Vr.get(I),y=b.get(v);--y==0?(I.removeEventListener(v,$a),b.delete(v),b.size===0&&Vr.delete(I)):b.set(v,y)}Sa.delete(g),d!==n&&((N=d.parentNode)==null||N.removeChild(d))}});return Pa.set(f,u),f}let Pa=new WeakMap;function Ms(e,t){const n=Pa.get(e);return n?(Pa.delete(e),n(t)):Promise.resolve()}class jr{constructor(t,n=!0){P(this,"anchor");L(this,gt,new Map);L(this,zt,new Map);L(this,mt,new Map);L(this,bn,new Set);L(this,hr,!0);L(this,qr,t=>{if(h(this,gt).has(t)){var n=h(this,gt).get(t),r=h(this,zt).get(n);if(r)po(r),h(this,bn).delete(n);else{var a=h(this,mt).get(n);a&&(po(a.effect),h(this,zt).set(n,a.effect),h(this,mt).delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[o,s]of h(this,gt)){if(h(this,gt).delete(o),o===t)break;const l=h(this,mt).get(s);l&&(Se(l.effect),h(this,mt).delete(s))}for(const[o,s]of h(this,zt)){if(o===n||h(this,bn).has(o))continue;const l=()=>{if(Array.from(h(this,gt).values()).includes(o)){var u=document.createDocumentFragment();mo(s,u),u.append(xt()),h(this,mt).set(o,{effect:s,fragment:u})}else Se(s);h(this,bn).delete(o),h(this,zt).delete(o)};h(this,hr)||!r?(h(this,bn).add(o),ir(s,l,!1)):l()}}});L(this,Ga,t=>{h(this,gt).delete(t);const n=Array.from(h(this,gt).values());for(const[r,a]of h(this,mt))n.includes(r)||(Se(a.effect),h(this,mt).delete(r))});this.anchor=t,$(this,hr,n)}ensure(t,n){var r=C;n&&!h(this,zt).has(t)&&!h(this,mt).has(t)&&h(this,zt).set(t,Tt(()=>n(this.anchor))),h(this,gt).set(r,t),O&&(this.anchor=D),h(this,qr).call(this,r)}}gt=new WeakMap,zt=new WeakMap,mt=new WeakMap,bn=new WeakMap,hr=new WeakMap,qr=new WeakMap,Ga=new WeakMap;function Ns(e,t,...n){var r=new jr(e);ar(()=>{const a=t()??null;r.ensure(a,a&&(o=>a(o,...n)))},Wt)}function Ia(e){Te===null&&Rl(),je(()=>{const t=rr(e);if(typeof t=="function")return t})}function be(e,t,n=!1){var r;O&&(r=D,sn());var a=new jr(e),o=n?Wt:0;function s(l,f){if(O){var u=$i(r);if(l!==parseInt(u.substring(1))){var d=ca();Me(d),a.anchor=d,kt(!1),a.ensure(l,f),kt(!0);return}}a.ensure(l,f)}ar(()=>{var l=!1;t((f,u=0)=>{l=!0,s(u,f)}),l||s(-1,null)},o)}const Ds=Symbol("NaN");function Us(e,t,n){O&&sn();var r=new jr(e);ar(()=>{var a=t();a!==a&&(a=Ds),r.ensure(a,n)})}function So(e,t,n=!1,r=!1,a=!1,o=!1){var s=e,l="";if(n){var f=e;O&&(s=Me(Fe(f)))}Re(()=>{var u=M;if(l===(l=t()??"")){O&&sn();return}if(n&&!O){u.nodes=null,f.innerHTML=l,l!==""&&qe(Fe(f),f.lastChild);return}if(u.nodes!==null&&(fo(u.nodes.start,u.nodes.end),u.nodes=null),l!==""){if(O){D.data;for(var d=sn(),m=d;d!==null&&(d.nodeType!==Gn||d.data!=="");)m=d,d=Et(d);if(d===null)throw qn(),on;qe(D,m),s=Me(d);return}var g=r?zl:a?Kl:void 0,v=ha(r?"svg":a?"math":"template",g);v.innerHTML=l;var b=r||a?v:v.content;if(qe(Fe(b),b.lastChild),r||a)for(;Fe(b);)s.before(Fe(b));else s.before(b)}})}function Hs(e,t,n){var r;O&&(r=D,sn());var a=new jr(e);ar(()=>{var o=t()??null;if(O){var s=$i(r),l=s===oa,f=o!==null;if(l!==f){var u=ca();Me(u),a.anchor=u,kt(!1),a.ensure(o,o&&(d=>n(d,o))),kt(!0);return}}a.ensure(o,o&&(d=>n(d,o)))},Wt)}function Fs(e,t){var n=void 0,r;co(()=>{n!==(n=t())&&(r&&(Se(r),r=null),n&&(r=Tt(()=>{xa(()=>n(e))})))})}function Co(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Co(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Vs(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Co(e))&&(r&&(r+=" "),r+=t);return r}function js(e){return typeof e=="object"?Vs(e):e??""}const Ao=[...` 	
\r\f \v\uFEFF`];function Bs(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var o=a.length,s=0;(s=r.indexOf(a,s))>=0;){var l=s+o;(s===0||Ao.includes(r[s-1]))&&(l===r.length||Ao.includes(r[l]))?r=(s===0?"":r.substring(0,s))+r.substring(l+1):s=l}}return r===""?null:r}function $o(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var o=e[a];o!=null&&o!==""&&(r+=" "+a+": "+o+n)}return r}function La(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function zs(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,s=0,l=!1,f=[];r&&f.push(...Object.keys(r).map(La)),a&&f.push(...Object.keys(a).map(La));var u=0,d=-1;const y=e.length;for(var m=0;m<y;m++){var g=e[m];if(l?g==="/"&&e[m-1]==="*"&&(l=!1):o?o===g&&(o=!1):g==="/"&&e[m+1]==="*"?l=!0:g==='"'||g==="'"?o=g:g==="("?s++:g===")"&&s--,!l&&o===!1&&s===0){if(g===":"&&d===-1)d=m;else if(g===";"||m===y-1){if(d!==-1){var v=La(e.substring(u,d).trim());if(!f.includes(v)){g!==";"&&m++;var b=e.substring(u,m).trim();n+=" "+b+";"}}u=m+1,d=-1}}}}return r&&(n+=$o(r)),a&&(n+=$o(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ks(e,t,n,r,a,o){var s=e[aa];if(O||s!==n||s===void 0){var l=Bs(n,r,o);(!O||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e[aa]=n}else if(o&&a!==o)for(var f in o){var u=!!o[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return o}function Oa(e,t={},n,r){for(var a in n){var o=n[a];t[a]!==o&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,r))}}function Ys(e,t,n,r){var a=e[ia];if(O||a!==t){var o=zs(t,r);(!O||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e[ia]=t}else r&&(Array.isArray(r)?(Oa(e,n==null?void 0:n[0],r[0]),Oa(e,n==null?void 0:n[1],r[1],"important")):Oa(e,n,r));return r}function To(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ro(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Po(e,!n||"__value"in e))}function Po(e,t){var n=e.__defaultValue,r=e.multiple,a=r?n??[]:null;if(!(r&&!we(a))){var o=e.selectedIndex,s=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var f=Na(l);To(l,r?a.includes(f):Ri(f,n))}if(t)if(s!==null)for(l of e.options){var u=s.has(l);l.selected!==u&&(l.selected=u)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function Ma(e,t,n=!1){if(e.multiple){if(t==null)return;if(!we(t))return Wl();for(var r of e.options)r.selected=t.includes(Na(r));return}for(r of e.options){var a=Na(r);if(Ri(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Gs(e){var t=new MutationObserver(n=>{n.every(qs)||("__defaultValue"in e&&Po(e,!1),"__value"in e&&Ma(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Nr(()=>{t.disconnect()})}function Na(e){return"__value"in e?e.__value:e.value}function qs(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const or=Symbol("class"),lr=Symbol("style"),Io=Symbol("is custom element"),Lo=Symbol("is html"),Ws=Kn?"link":"LINK",Oo=Kn?"input":"INPUT",Zs=Kn?"option":"OPTION",Mo=Kn?"select":"SELECT",Js=Kn?"progress":"PROGRESS";function Da(e){if(O){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;G(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;G(e,"checked",null),e.checked=a}}};e[Bn]=n,_t(n),Hi()}}function Xs(e,t){var n=Ua(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Js)||(e.value=t??"")}function G(e,t,n,r){var a=Ua(e);O&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Ws)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[$l]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Do(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Qs(e,t,n,r,a=!1,o=!1){O&&a&&e.nodeName===Oo&&("defaultValue"in n||"defaultChecked"in n||Da(e));var s=Ua(e),l=s[Io],f=!s[Lo];let u=O&&l;u&&kt(!1);var d=t||{},m=e.nodeName===Zs,g=e.nodeName===Mo;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=js(n.class):n[or]&&(n.class=null),n[lr]&&(n.style??(n.style=null));var b=Do(e);if(e.nodeName===Oo&&"type"in n&&("value"in n||"__value"in n)){var y=n.type;(y!==d.type||y===void 0&&e.hasAttribute("type"))&&(d.type=y,G(e,"type",y))}for(const Y in n){let A=n[Y];if(m&&Y==="value"&&A==null){e.value=e.__value="",d[Y]=A;continue}if(Y==="class"){var N=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ks(e,N,A,r,t==null?void 0:t[or],n[or]),d[Y]=A,d[or]=n[or];continue}if(Y==="style"){Ys(e,A,t==null?void 0:t[lr],n[lr]),d[Y]=A,d[lr]=n[lr];continue}var I=d[Y];if(!(A===I&&!(A===void 0&&e.hasAttribute(Y)))){d[Y]=A;var K=Y[0]+Y[1];if(K!=="$$")if(K==="on"){const ae={},Ie="$$"+Y;let V=Y.slice(2);var ue=Cs(V);if(Es(V)&&(V=V.slice(0,-7),ae.capture=!0),!ue&&I){if(A!=null)continue;e.removeEventListener(V,d[Ie],ae),d[Ie]=null}if(ue)Ur(V,e,A),Hr([V]);else if(A!=null){let ye=function(it){d[Y].call(this,it)};d[Ie]=wo(V,e,ye,ae)}}else if(Y==="style")G(e,Y,A);else if(Y==="autofocus")ns(e,!!A);else if(!l&&(Y==="__value"||Y==="value"&&A!=null))e.value=e.__value=A;else if(Y==="selected"&&m)To(e,A);else{var z=Y;f||(z=$s(z));var Pe=z==="defaultValue"||z==="defaultChecked";if(g&&z==="defaultValue")continue;if(A==null&&!l&&!Pe)if(s[Y]=null,z==="value"||z==="checked"){let ae=e;const Ie=t===void 0;if(z==="value"){let V=ae.defaultValue;ae.removeAttribute(z),ae.defaultValue=V,ae.value=ae.__value=Ie?V:null}else{let V=ae.defaultChecked;ae.removeAttribute(z),ae.defaultChecked=V,ae.checked=Ie?V:!1}}else e.removeAttribute(Y);else Pe||(l||typeof A!="string")&&b.has(z)?(e[z]=A,z in s&&(s[z]=de)):typeof A!="function"&&G(e,z,A)}}}return u&&kt(!0),d}function Br(e,t,n=[],r=[],a=[],o,s=!1,l=!1){Fi(a,n,r,f=>{var u=void 0,d={},m=e.nodeName===Mo,g=!1;if(co(()=>{var b=t(...f.map(i)),y=Qs(e,u,b,o,s,l);if(g&&m){var N=e;"defaultValue"in b&&Ro(N,b.defaultValue),"value"in b&&Ma(N,b.value)}for(let K of Object.getOwnPropertySymbols(d))b[K]||Se(d[K]);for(let K of Object.getOwnPropertySymbols(b)){var I=b[K];K.description===Yl&&(!u||I!==u[K])&&(d[K]&&Se(d[K]),d[K]=Tt(()=>Fs(e,()=>I))),y[K]=I}u=y}),m){var v=e;xa(()=>{var b=u;"defaultValue"in b&&Ro(v,b.defaultValue),Ma(v,b.value,!0),Gs(v)})}g=!0})}function Ua(e){return e[Tr]??(e[Tr]={[Io]:e.nodeName.includes("-"),[Lo]:e.namespaceURI===Si})}var No=new Map;function Do(e){var t=e.getAttribute("is")||e.nodeName,n=No.get(t);if(n)return n;No.set(t,n=new Set);for(var r,a=e,o=Element.prototype;o!==a;){r=_l(a);for(var s in r)r[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);a=gi(a)}return n}function ec(e,t,n=t){var r=new WeakSet;rs(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Ha(e)?Fa(o):o,n(o),C!==null&&r.add(C),await hn(),o!==(o=t())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=o??"",l!==null){var u=e.value.length;s===l&&l===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=s,e.selectionEnd=Math.min(l,u))}}}),(O&&e.defaultValue!==e.value||rr(t)==null&&e.value)&&(n(Ha(e)?Fa(e.value):e.value),C!==null&&r.add(C)),Dr(()=>{var a=t();if(e===document.activeElement){var o=C;if(r.has(o))return}Ha(e)&&a===Fa(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Ha(e){var t=e.type;return t==="number"||t==="range"}function Fa(e){return e===""?null:+e}function Va(e,t){return e===t||(e==null?void 0:e[xn])===t}function Xt(e=la(),t,n,r){var a=Te.r,o=M;return xa(()=>{var s,l;return Dr(()=>{s=l,l=[],rr(()=>{Va(n(...l),e)||(t(e,...l),s&&Va(n(...s),e)&&t(null,...s))})}),()=>{let f=o;for(;f!==a&&f.parent!==null&&f.parent.f&Cr;)f=f.parent;const u=()=>{l&&Va(n(...l),e)&&t(null,...l)},d=f.teardown;f.teardown=()=>{u(),d==null||d()}}}),e}const tc={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.has(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function zr(e,t,n){return new Proxy({props:e,exclude:t},tc)}function le(e,t,n,r){var a=r,o=!0,s=()=>(o&&(o=!1,a=r),a),l;l=e[t],l===void 0&&r!==void 0&&(l=s());var f;f=()=>{var g=e[t];return g===void 0?s():(o=!0,g)};var u=!1,d=pa(()=>(u=!1,f())),m=M;return(function(g,v){if(arguments.length>0){const b=v?i(d):g;return E(d,b),u=!0,a!==void 0&&(a=b),g}return Ft&&u||(m.f&Ye)!==0?d.v:i(d)})}function nc(e){return new rc(e)}class rc{constructor(t){L(this,Kt);L(this,at);var o;var n=new Map,r=(s,l)=>{var f=Zi(l,!1,!1);return n.set(s,f),f};const a=new Proxy({...t.props||{},$$events:{}},{get(s,l){return i(n.get(l)??r(l,Reflect.get(s,l)))},has(s,l){return l===Al?!0:(i(n.get(l)??r(l,Reflect.get(s,l))),Reflect.has(s,l))},set(s,l,f){return E(n.get(l)??r(l,f),f),Reflect.set(s,l,f)}});$(this,at,(t.hydrate?Os:xo)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&Q(),$(this,Kt,a.$$events);for(const s of Object.keys(h(this,at)))s==="$set"||s==="$destroy"||s==="$on"||re(this,s,{get(){return h(this,at)[s]},set(l){h(this,at)[s]=l},enumerable:!0});h(this,at).$set=s=>{Object.assign(a,s)},h(this,at).$destroy=()=>{Ms(h(this,at))}}$set(t){h(this,at).$set(t)}$on(t,n){h(this,Kt)[t]=h(this,Kt)[t]||[];const r=(...a)=>n.call(this,...a);return h(this,Kt)[t].push(r),()=>{h(this,Kt)[t]=h(this,Kt)[t].filter(a=>a!==r)}}$destroy(){h(this,at).$destroy()}}Kt=new WeakMap,at=new WeakMap;let Uo=class{};typeof HTMLElement=="function"&&(Uo=class extends HTMLElement{constructor(t,n,r){super();P(this,"$$ctor");P(this,"$$s");P(this,"$$c");P(this,"$$cn",!1);P(this,"$$d",{});P(this,"$$r",!1);P(this,"$$p_d",{});P(this,"$$l",{});P(this,"$$l_u",new Map);P(this,"$$me");P(this,"$$shadowRoot",null);this.$$ctor=t,this.$$s=n,r&&(this.$$shadowRoot=this.attachShadow(r))}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const a=this.$$c.$on(t,n);this.$$l_u.set(n,a)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const a=this.$$l_u.get(n);a&&(a(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return o=>{const s=ha("slot");a!=="default"&&(s.name=a),B(o,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=ac(this);for(const a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(const a of this.attributes){const o=this.$$g_p(a.name);o in this.$$d||(this.$$d[o]=Kr(o,a.value,this.$$p_d,"toProp"))}for(const a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=nc({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=ps(()=>{Dr(()=>{var a;this.$$r=!0;for(const o of Gt(this.$$c)){if(!((a=this.$$p_d[o])!=null&&a.reflect))continue;this.$$d[o]=this.$$c[o];const s=Kr(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1})});for(const a in this.$$l)for(const o of this.$$l[a]){const s=this.$$c.$on(a,o);this.$$l_u.set(o,s)}this.$$l={}}}attributeChangedCallback(t,n,r){var a;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Kr(t,r,this.$$p_d,"toProp"),(a=this.$$c)==null||a.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Gt(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function Kr(e,t,n,r){var o;const a=(o=n[e])==null?void 0:o.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function ac(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function Qt(e,t,n,r,a,o){let s=class extends Uo{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return Gt(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Gt(t).forEach(l=>{re(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){var m;f=Kr(l,f,t),this.$$d[l]=f;var u=this.$$c;if(u){var d=(m=yt(u,l))==null?void 0:m.get;d?u[l]=f:u.$set({[l]:f})}}})}),r.forEach(l=>{re(s.prototype,l,{get(){var f;return(f=this.$$c)==null?void 0:f[l]}})}),e.element=s,s}var ic=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),oc=ce('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function Ho(e,t){Dt(t,!0);let n=le(t,"loading"),r=zr(t,ic),a;function o(){a==null||a.click()}var s={get loading(){return n()},set loading(d){n(d),Q()}},l=oc(),f=ke(l);Br(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Xt(f,d=>a=d,()=>a);var u=oe(f,2);return sa(2),ve(l),Re(()=>G(l,"data-loading",n())),Ur("click",u,o),B(e,l),Ut(s)}Hr(["click"]),Qt(Ho,{loading:{}},[],[],{mode:"open"});var lc=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),sc=ce('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function Fo(e,t){Dt(t,!0);let n=le(t,"loading"),r=zr(t,lc);var a={get loading(){return n()},set loading(l){n(l),Q()}},o=sc(),s=ke(o);return Br(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),sa(2),ve(o),Re(()=>G(o,"data-loading",n())),B(e,o),Ut(a)}Qt(Fo,{loading:{}},[],[],{mode:"open"});var cc=ce('<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function ja(e,t){Dt(t,!0);let n=le(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(l){n(l),Q()}},o=cc(),s=ke(o);return G(s,"href",r),ve(o),Re(()=>G(s,"aria-label",n().ariaLinkLabel)),B(e,o),Ut(a)}Qt(ja,{strings:{}},[],[],{mode:"open"});var uc=ce('<div class="altcha-footer"><p></p> <!></div>');function Ba(e,t){Dt(t,!0);let n=le(t,"logo"),r=le(t,"strings");var a={get logo(){return n()},set logo(u){n(u),Q()},get strings(){return r()},set strings(u){r(u),Q()}},o=uc(),s=ke(o);So(s,()=>r().footer,!0),ve(s);var l=oe(s,2);{var f=u=>{ja(u,{get strings(){return r()}})};be(l,u=>{n()&&u(f)})}return ve(o),B(e,o),Ut(a)}Qt(Ba,{logo:{},strings:{}},[],[],{mode:"open"});var fc=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),hc=ce('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function Vo(e,t){Dt(t,!0);let n=le(t,"loading"),r=zr(t,fc),a;function o(){a==null||a.click()}var s={get loading(){return n()},set loading(d){n(d),Q()}},l=hc(),f=ke(l);Br(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Xt(f,d=>a=d,()=>a);var u=oe(f,2);return ve(l),Re(()=>G(l,"data-loading",n())),Ur("click",u,o),B(e,l),Ut(s)}Hr(["click"]),Qt(Vo,{loading:{}},[],[],{mode:"open"});var Ce=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(Ce||{}),jo=(e=>(e.SHA_256="SHA-256",e.SHA_384="SHA-384",e.SHA_512="SHA-512",e))(jo||{}),q=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(q||{}),dc=ce('<div class="altcha-code-challenge-title"> </div>'),vc=ce('<div class="altcha-spinner"></div>'),pc=Ra('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),gc=Ra('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),mc=Ra('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),bc=ce('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),yc=ce('<audio hidden="" autoplay=""></audio>'),wc=ce('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function Bo(e,t){Dt(t,!0);let n=le(t,"audioUrl"),r=le(t,"codeChallenge"),a=le(t,"config"),o=le(t,"imageUrl"),s=le(t,"onCancel"),l=le(t,"onReload"),f=le(t,"onSubmit"),u=le(t,"strings"),d=j(void 0),m=j(void 0),g=j(void 0),v=j(!1),b=j(""),y=j(!1);Ia(()=>(a().disableAutoFocus||hn().then(()=>{var x;(x=i(g))==null||x.focus()}),()=>{i(m)&&(i(m).pause(),E(m,void 0))}));function N(){E(d,Ce.PAUSED,!0)}function I(x){E(d,Ce.ERROR,!0)}function K(){E(d,Ce.READY,!0)}function ue(){E(d,Ce.LOADING,!0)}function z(){E(d,Ce.PLAYING,!0)}function Pe(){E(d,Ce.PAUSED,!0)}function Y(x){var W;x.code==="Space"?(x.preventDefault(),x.stopPropagation(),Ie()):x.code==="Escape"&&(x.preventDefault(),x.stopPropagation(),(W=s())==null||W())}function A(x){var W;x.preventDefault(),x.stopPropagation(),(W=f())==null||W(i(b))}function ae(x){x.play().catch(W=>{if(!(W instanceof DOMException&&W.name==="AbortError"))throw W})}function Ie(){i(m)?i(d)===Ce.LOADING||(i(m).paused?(n()&&i(m).src!==n()&&(i(m).src=n()),i(m).currentTime=0,ae(i(m))):i(m).pause()):(E(y,!0),requestAnimationFrame(()=>{i(m)&&n()&&(i(m).src=n(),ae(i(m)))}))}var V={get audioUrl(){return n()},set audioUrl(x){n(x),Q()},get codeChallenge(){return r()},set codeChallenge(x){r(x),Q()},get config(){return a()},set config(x){a(x),Q()},get imageUrl(){return o()},set imageUrl(x){o(x),Q()},get onCancel(){return s()},set onCancel(x){s(x),Q()},get onReload(){return l()},set onReload(x){l(x),Q()},get onSubmit(){return f()},set onSubmit(x){f(x),Q()},get strings(){return u()},set strings(x){u(x),Q()}},ye=wc(),it=ke(ye),ze=ke(it);{var ot=x=>{var W=dc(),wn=Cn(W,!0);Re(()=>Rt(wn,u().verificationRequired)),B(x,W)};be(ze,x=>{a().codeChallengeDisplay!=="standard"&&x(ot)})}var se=oe(ze,2),Yt=Cn(se,!0),S=oe(se,2),xe=oe(S,2),ee=ke(xe);Da(ee),ee.disabled=i(v),Xt(ee,x=>E(g,x),()=>i(g));var w=oe(ee,2);{var dr=x=>{var W=bc(),wn=ke(W);{var br=He=>{var Ot=vc();B(He,Ot)},qa=He=>{var Ot=pc();B(He,Ot)},Wa=He=>{var Ot=gc();B(He,Ot)},Za=He=>{var Ot=mc();B(He,Ot)};be(wn,He=>{i(d)===Ce.LOADING?He(br):i(d)===Ce.ERROR?He(qa,1):i(d)===Ce.PLAYING?He(Wa,2):He(Za,-1)})}ve(W),Re(()=>{G(W,"title",u().getAudioChallenge),W.disabled=i(d)===Ce.LOADING||i(d)===Ce.ERROR,G(W,"aria-label",i(d)===Ce.LOADING?u().loading:u().getAudioChallenge)}),me("click",W,()=>Ie(),!0),B(x,W)};be(w,x=>{r().audio&&x(dr)})}var vr=oe(w,2);ve(xe);var Lt=oe(xe,2),pr=ke(Lt),Wr=Cn(pr,!0),yn=oe(pr,2),gr=Cn(yn,!0);ve(Lt),ve(it);var mr=oe(it,2);{var Ke=x=>{var W=yc();Xt(W,wn=>E(m,wn),()=>i(m)),me("error",W,I),me("loadstart",W,ue),me("canplay",W,K),me("pause",W,Pe),me("playing",W,z),me("ended",W,N),B(x,W)};be(mr,x=>{i(y)&&x(Ke)})}return ve(ye),Re(()=>{Rt(Yt,u().enterCodeFromImage),G(S,"src",o()),G(ee,"minlength",r().length||1),G(ee,"maxlength",r().length),G(ee,"placeholder",u().enterCode),G(ee,"aria-label",i(d)===Ce.LOADING?u().loading:i(d)===Ce.PLAYING?"":u().enterCodeAria),G(ee,"aria-live",i(d)?"assertive":"polite"),G(ee,"aria-busy",i(d)===Ce.LOADING),G(vr,"title",u().reload),G(vr,"aria-label",u().reload),G(pr,"aria-label",u().verify),Rt(Wr,u().verify),G(yn,"aria-label",u().cancel),Rt(gr,u().cancel)}),me("submit",it,A,!0),Ur("keydown",ee,Y),ec(ee,()=>i(b),x=>E(b,x)),me("click",vr,()=>{var x;return(x=l())==null?void 0:x()},!0),me("click",yn,()=>{var x;return(x=s())==null?void 0:x()},!0),B(e,ye),Ut(V)}Hr(["keydown"]),Qt(Bo,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var _c=new Set(["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),kc=ce('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),xc=ce('<div class="altcha-popover-arrow"></div>'),Ec=ce('<div role="button" class="altcha-popover-close">&times;</div>'),Sc=ce('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function za(e,t){Dt(t,!0);let n=le(t,"anchor"),r=le(t,"children"),a=le(t,"display",7,"standard"),o=le(t,"backdrop",7,!1),s=le(t,"onClickOutside"),l=le(t,"onClickOutsideDelay",7,600),f=le(t,"onClose"),u=le(t,"placement",7,"auto"),d=le(t,"updateUISignal"),m=le(t,"variant",7,"neutral"),g=zr(t,_c),v=j(void 0),b=j(void 0),y=j(!1),N=j(0);je(()=>{u()!=="auto"&&E(y,u()==="top")}),je(()=>{d()&&Pe()}),Ia(()=>{const S=a()==="bottomsheet"||a()==="overlay";return S&&(i(b)&&document.body.append(i(b)),i(v)&&document.body.append(i(v))),Pe(),hn().then(()=>{E(N,Date.now(),!0)}),()=>{S&&(i(b)&&document.body.removeChild(i(b)),i(v)&&document.body.removeChild(i(v)))}});function I(){var S;(S=f())==null||S()}function K(S){var ee,w;const xe=S.target;!((ee=i(v))!=null&&ee.contains(xe))&&(!l()||i(N)+l()<Date.now())&&((w=s())==null||w())}function ue(){Pe()}function z(){Pe()}function Pe(){if(n()&&u()==="auto"&&i(v)){const S=n().getBoundingClientRect(),ee=document.documentElement.clientHeight-(S.top+S.height)<i(v).clientHeight;i(y)!==ee&&E(y,ee)}}var Y={get anchor(){return n()},set anchor(S){n(S),Q()},get children(){return r()},set children(S){r(S),Q()},get display(){return a()},set display(S="standard"){a(S),Q()},get backdrop(){return o()},set backdrop(S=!1){o(S),Q()},get onClickOutside(){return s()},set onClickOutside(S){s(S),Q()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(S=600){l(S),Q()},get onClose(){return f()},set onClose(S){f(S),Q()},get placement(){return u()},set placement(S="auto"){u(S),Q()},get updateUISignal(){return d()},set updateUISignal(S){d(S),Q()},get variant(){return m()},set variant(S="neutral"){m(S),Q()}},A=Sc();me("click",cn,K,!0),me("resize",cn,ue),me("scroll",cn,z);var ae=Sn(A);{var Ie=S=>{var xe=kc();Xt(xe,ee=>E(b,ee),()=>i(b)),B(S,xe)};be(ae,S=>{o()&&S(Ie)})}var V=oe(ae,2);Br(V,()=>({...g,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":m(),"data-top":i(y),"data-display":a()}));var ye=ke(V);{var it=S=>{var xe=xc();B(S,xe)};be(ye,S=>{a()==="standard"&&S(it)})}var ze=oe(ye,2);{var ot=S=>{var xe=Ec();me("click",xe,I,!0),B(S,xe)};be(ze,S=>{a()!=="standard"&&S(ot)})}var se=oe(ze,2),Yt=ke(se);return Ns(Yt,()=>r()??qt),ve(se),ve(V),Xt(V,S=>E(v,S),()=>i(v)),B(e,A),Ut(Y)}Qt(za,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function Cc(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function Ac(e,t="altcha-css",n){var r,a;if(typeof document<"u"&&document&&!document.getElementById(t)){const o=document.createElement("style");o.id=t,o.textContent=e;const s=((r=document.currentScript)==null?void 0:r.nonce)??((a=document.querySelector('meta[name="csp-nonce"]'))==null?void 0:a.content);s&&(o.nonce=s),document.head.appendChild(o)}}Object.values(jo);async function zo(e){var g;const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:o=v=>v>1?Math.floor(v/2):0,counterMode:s,timeout:l}=e,f=Math.min(16,Math.max(1,n)),u=[],d=()=>{for(const v of u)v.terminate()};for(let v=0;v<f;v++)u.push(await a(t.parameters.algorithm));let m=null;try{m=await Promise.race(u.map((v,b)=>(r.signal.addEventListener("abort",()=>{v.postMessage({type:"abort"})}),new Promise((y,N)=>{v.addEventListener("error",I=>{N(I)}),v.addEventListener("message",I=>{if(I.data){for(const K of u)K!==v&&K.postMessage({type:"abort"});if(I.data.error)return N(new Error(I.data.error))}y(I.data)}),v.postMessage({challenge:t,counterMode:s,counterStart:b,counterStep:f,timeout:l,type:"work"})}))))}catch(v){if(v instanceof Error&&!!((g=v==null?void 0:v.message)!=null&&g.includes("Out of memory"))&&o){d();const y=o(f);if(y)return zo({...e,challenge:t,controller:r,concurrency:y,createWorker:a})}throw v}finally{d()}return r.signal.aborted?null:m||null}class $c{constructor(t={}){P(this,"TAG_CODES",{INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10});P(this,"maxSamples");P(this,"sampleInterval");P(this,"target");P(this,"focusStartTime",0);P(this,"focusInteraction",0);P(this,"focusInteractionTimer",null);P(this,"lastPointerSample",0);P(this,"lastTouchSample",0);P(this,"lastScrollSample",0);P(this,"pendingPointer",null);P(this,"pendingTouch",null);P(this,"focus",[]);P(this,"pointer",[]);P(this,"scroll",[]);P(this,"touch",[]);P(this,"onFocus",t=>{if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)});P(this,"onInteraction",t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)});P(this,"onPointer",t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))});P(this,"onScroll",()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))});P(this,"onTouchMove",t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))});const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}}var Tc=ce('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),Rc=ce('<div class="altcha-overlay-content"></div>'),Pc=ce('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),Ic=ce('<div class="altcha-floating-arrow"></div>'),Lc=ce('<input type="hidden"/>'),Oc=ce('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Ko=ce('<div class="altcha-error"> </div>'),Mc=ce("<!> <!>",1),Nc=ce('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function Dc(e,t){Dt(t,!0);const n=()=>Di(d,"$altchaDefaults",a),r=()=>Di(b,"$altchaI18nStore",a),[a,o]=ts(),s='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:d}=globalThis.$altcha.defaults,m=navigator.hardwareConcurrency||2,g=navigator.deviceMemory||0,v=g&&g<=4?Math.min(4,m):m,b=globalThis.$altcha.i18n.store,y=t.$$host,N=(c,p)=>{hn().then(()=>{y==null||y.dispatchEvent(new CustomEvent(c,{detail:p}))})};let I=null,K=j(Ht(new URL(location.origin))),ue=j(!1),z=j(null),Pe=j(null),Y=j(null),A=j(Ht(q.UNVERIFIED)),ae=j(void 0),Ie=j(void 0),V=j(null),ye=j(void 0),it=j(null),ze=j(null),ot=j(null),se=j(null),Yt=j(Ht([])),S=j(0),xe=j(Ht({})),ee=j(!0);const w=Ne(()=>({fetch:(c,p)=>fetch(c,p),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:v,...n(),...i(xe)})),dr=Ne(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),vr=Ne(()=>Fc(i(w).type)),Lt=Ne(()=>i(w).auto),pr=Ne(()=>i(A)===q.VERIFYING),Wr=Ne(()=>!i(w).hideFooter),yn=Ne(()=>!i(w).hideLogo&&i(w).display!=="bar"),gr=Ne(()=>Vc(r(),[i(w).language,document.documentElement.lang,...navigator.languages])),mr=Ne(()=>f.includes(i(gr).language)?"rtl":void 0),Ke=Ne(()=>({...i(gr).strings})),x=Ne(()=>{var c,p,k;return(p=(c=i(z))==null?void 0:c.audio)!=null&&p.match(/^(https?:)?\//)?Zr(i(z).audio,i(K),{language:i(w).audioChallengeLanguage||i(gr).language}).toString():(k=i(z))==null?void 0:k.audio}),W=Ne(()=>{var c,p,k;return(p=(c=i(z))==null?void 0:c.image)!=null&&p.match(/^(https?:)?\//)?Zr(i(z).image,i(K)):(k=i(z))==null?void 0:k.image});je(()=>{yr({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),je(()=>{t.theme?y==null||y.setAttribute("theme",t.theme):y==null||y.removeAttribute("theme")}),je(()=>{if(t.configuration)try{yr(JSON.parse(t.configuration))}catch{te("unable to parse the `configuration` attribute (JSON expected)")}}),je(()=>{i(Y)!==i(w).display&&Jr(i(w).display)}),je(()=>{i(ue)&&i(A)===q.VERIFYING&&E(ue,!1)}),je(()=>{!i(ue)&&i(A)===q.VERIFIED&&E(ue,!0)}),je(()=>{if(!i(ue)){const c=Ja();c&&c.checked&&(c.checked=!1)}}),je(()=>{var c;i(A)===q.VERIFIED&&((c=Ja())==null||c.setCustomValidity(""))}),je(()=>{if(i(Lt)==="onload"){const c=setTimeout(()=>{Hn()},1);return()=>{c&&clearTimeout(c)}}}),je(()=>{i(ze)&&te("error:",i(ze))}),je(()=>{i(se)&&i(w).setCookie&&tu(i(se),i(w).setCookie)}),Ia(()=>{var c,p,k,_;return te("mounted","3.3.0"),y&&globalThis.$altcha.instances.add(y),E(V,(c=i(ye))==null?void 0:c.closest("form"),!0),(p=i(V))==null||p.addEventListener("reset",el),(k=i(V))==null||k.addEventListener("submit",tl,{capture:!0}),(_=i(V))==null||_.addEventListener("focusin",Qo),wn(),i(w).humanInteractionSignature&&(te("human interaction signature enabled"),I=new $c),N("load"),u||te("secure context (HTTPS) required"),()=>{var R,T,U;qa(),y&&globalThis.$altcha.instances.delete(y),i(ot)&&clearTimeout(i(ot)),(R=i(V))==null||R.removeEventListener("reset",el),(T=i(V))==null||T.removeEventListener("submit",tl,{capture:!0}),(U=i(V))==null||U.removeEventListener("focusin",Qo),I==null||I.destroy()}});function wn(){E(Yt,[...globalThis.$altcha.plugins].map(c=>new c(y)),!0),te("activating plugins",i(Yt).map(c=>c.constructor.name));for(const c of i(Yt))c.activate()}async function br(c,...p){let k;for(const _ of i(Yt))k=await _[c].call(_,...p);return k}function qa(){for(const c of i(Yt))c.destroy()}function Wa(c){const[p,k]=c.salt.split("?"),_={};if(k)try{Object.assign(_,Object.fromEntries(new URLSearchParams(k).entries()))}catch{}const R={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:_,expiresAt:_!=null&&_.expires?parseInt(_.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:Cc(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(R,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),R}function Za(c,p){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:p.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:p.time||0}}async function He(c){await new Promise(p=>setTimeout(p,c))}async function Ot(c=i(w).challenge,p){const k=await br("onFetchChallenge",c);let _=null;if(k!==void 0)return k;if(typeof c=="string")if(c.startsWith("{")){te("parsing JSON challenge");try{_=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else{te("fetching challenge from",(p==null?void 0:p.method)||"GET",c),E(K,new URL(c,location.origin),!0);const R=await i(w).fetch(c,{credentials:i(w).credentials||void 0,...p});await rl(R);const T=R.headers.get("x-altcha-config");T&&Xc(T);const U=await R.json();if(U&&"his"in U&&U.his){if(te("requested HIS"),!I)throw new Error("Server requested HIS data but collector is disabled.");return Ot(Zr(U.his.url,i(K)),{body:JSON.stringify({his:I.export()}),headers:{"content-type":"application/json"},method:"POST"})}U&&"hisResult"in U&&U.hisResult&&te("HIS result",U.hisResult),_=U}else if(c&&typeof c=="object")try{_=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(Uc(_)&&(_=Wa(_)),!Hc(_))throw new Error("Challenge validation failed.");return _}function Uc(c){return typeof c=="object"&&"challenge"in c}function Hc(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function Ja(){return document.getElementById(i(dr))}function Fc(c){switch(c){case"checkbox":return Ho;case"switch":return Vo;case"native":default:return Fo}}function Vc(c,p){const k=Object.keys(c).map(R=>R.toLowerCase());let _=p.reduce((R,T)=>(T=T.toLowerCase(),R||(c[T]?T:null)||k.find(U=>T.split("-")[0]===U.split("-")[0])||null),null);return c[_||""]||(_="en"),{language:_,strings:c[_]}}function jc(c){switch(c){case"bar":return i(w).barPlacement||"bottom";case"floating":return i(w).floatingPlacement||"auto";default:return}}function Bc(c){var k;return[...((k=i(V))==null?void 0:k.querySelectorAll(s))||[]].reduce((_,R)=>{const T=R.name,U=R.value;return T&&U&&(_[T]=/\n/.test(U)?U.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):U),_},{})}function zc(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Zr(c,p,k){const _=new URL(c,p);if(_.search||(_.search=p.search),k)for(const R in k)k[R]!==void 0&&k[R]!==null&&_.searchParams.set(R,k[R]);return _.toString()}function Kc(c){!i(ue)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,i(A)!==q.VERIFYING&&Hn()):c.currentTarget.checked||(c.preventDefault(),lt())}function Yc(c){i(A)===q.VERIFYING?c.currentTarget.setCustomValidity(i(Ke).waitAlert):i(w).validationMessage&&c.currentTarget.setCustomValidity(i(w).validationMessage)}function Gc(){Jr(i(w).display),lt()}function qc(){Xr()}function Wc(c){const p=c.target;i(w).display==="floating"&&p&&!(y!=null&&y.contains(p))&&!p.hasAttribute("data-backdrop")&&!p.closest("[data-popover]")&&i(A)!==q.VERIFIED&&!i(w).floatingPersist&&Xa()}function Qo(c){i(Lt)==="onfocus"&&i(A)===q.UNVERIFIED&&Hn()}function el(){Jr(i(w).display),lt()}function tl(c){const p=c.target;(p==null?void 0:p.getAttribute("data-code-challenge"))!=="true"&&i(Lt)==="onsubmit"&&i(A)===q.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),E(it,c.submitter,!0),Qa(),Hn().then(k=>{k&&!i(z)&&hn().then(()=>{nl(i(it))})}))}function Zc(c){c.persisted&&(Jr(i(w).display),lt())}function Jc(){Xr()}function Xc(c){var p,k;try{const _=JSON.parse(c);_&&typeof _=="object"&&yr({serverVerificationFields:(p=_==null?void 0:_.sentinel)==null?void 0:p.fields,serverVerificationTimeZone:(k=_==null?void 0:_.sentinel)==null?void 0:k.timeZone,verifyUrl:_.verifyurl,..._})}catch(_){te("unable to configure from x-altcha-config header",_)}}function Qc(c=20){var Oe;if(!i(ye))return;const p=i(w).floatingPlacement;if(!i(Ie)&&(E(Ie,(i(w).floatingAnchor instanceof HTMLElement?i(w).floatingAnchor:i(w).floatingAnchor?document.querySelector(i(w).floatingAnchor):(Oe=i(V))==null?void 0:Oe.querySelector(l))||i(V),!0),!i(Ie))){te("unable to find floating anchor element");return}const k=parseInt(i(w).floatingOffset,10)||12,_=i(Ie).getBoundingClientRect(),R=i(ye).getBoundingClientRect(),T=document.documentElement.clientHeight,U=document.documentElement.clientWidth,Le=!p||p==="auto"?_.bottom+R.height+k+c>T:p==="top",ie=Math.max(c,Math.min(U-c-R.width,_.left+_.width/2-R.width/2));if(i(ye).style.setProperty("--altcha-floating-left",`${ie}px`),i(ye).style.setProperty("--altcha-floating-top",Le?`${_.top-(R.height+k)}px`:`${_.bottom+k}px`),i(ye).setAttribute("data-floating-position",Le?"top":"bottom"),i(ae)){const Nt=i(ae).getBoundingClientRect();i(ae).style.left=_.left-ie+_.width/2-Nt.width/2+"px"}}async function eu(c,p){const k=await br("onRequestServerVerification",c,p);if(k!==void 0)return k;if(te("requesting server verification from",i(w).verifyUrl),!i(w).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const _=await i(w).fetch(Zr(i(w).verifyUrl,i(K)),{body:JSON.stringify({code:p,fields:i(w).serverVerificationFields?Bc():void 0,payload:c,timeZone:i(w).serverVerificationTimeZone?zc():void 0}),credentials:i(w).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await rl(_);const R=await _.json();return R&&typeof R=="object"&&"payload"in R&&R.payload&&N("serververification",R),R}function nl(c){var p;i(V)&&"requestSubmit"in i(V)?i(V).requestSubmit(c):(p=i(V))!=null&&p.reportValidity()&&(c?c.click():i(V).submit())}function tu(c,p={}){const{domain:k,name:_=i(w).name,maxAge:R,path:T,sameSite:U,secure:Le}=p;let ie=`${encodeURIComponent(_)}=${encodeURIComponent(c)}`;k&&(ie+=`; Domain=${k}`),R!=null&&(ie+=`; Max-Age=${R}`),T&&(ie+=`; Path=${T}`),U&&(ie+=`; SameSite=${U}`),Le&&(ie+="; Secure"),document.cookie=ie}function Jr(c){switch(c){case"bar":case"floating":case"overlay":Xa(),(!i(Lt)||i(Lt)==="off")&&(i(xe).auto="onsubmit");break;case"standard":Qa()}i(Y)!==c&&E(Y,c,!0)}function nu(c){i(ot)&&clearTimeout(i(ot));const p=()=>{i(A)!==q.UNVERIFIED?(E(ue,!1),st(q.EXPIRED)):lt(),N("expired")},k=c*1e3-Date.now();k>=1?E(ot,setTimeout(p,k),!0):p()}async function rl(c){var k;if(c.status>=400){if((k=c.headers.get("content-type"))!=null&&k.includes("/json")){let _;try{_=await c.json()}catch{}if(_&&"error"in _)throw new Error(`Server responded with ${c.status} - ${_.error}`)}throw new Error(`Server responded with ${c.status}.`)}const p=c.headers.get("content-type");if(!p||!p.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${p}.`)}async function al(c){var k;if(!i(se)){st(q.ERROR,"Cannot verify code challenge without PoW payload.");return}st(q.VERIFYING);let p=null;if(i(w).verifyUrl)p=await eu(i(se),c);else if(i(w).verifyFunction)p=await i(w).verifyFunction(i(se),c);else{st(q.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}p!=null&&p.payload&&(E(se,p.payload,!0),te("server payload",i(se))),(p==null?void 0:p.verified)===!0?(te("verified"),st(q.VERIFIED),N("verified",{payload:i(se)}),i(Lt)==="onsubmit"&&hn().then(()=>{nl(i(it))})):st(q.ERROR,(p==null?void 0:p.reason)||"Verification failed."),i(w).disableAutoFocus||(k=Ja())==null||k.focus()}function yr(c){Object.assign(i(xe),{...Object.fromEntries(Object.entries(c).filter(([p,k])=>k!==void 0))})}function ru(){return{...i(w)}}function au(){return i(A)}function Xa(){E(ee,!1)}function te(...c){(i(w).debug||c.some(p=>p instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${i(w).name}]`,...c)}function lt(c=q.UNVERIFIED,p=null){E(ue,!1),E(ze,p,!0),E(se,null),i(Pe)&&i(Pe).abort(),i(ot)&&(clearTimeout(i(ot)),E(ot,null)),st(c)}function st(c,p=null){E(A,c,!0),E(ze,p,!0),N("statechange",{payload:i(se),state:i(A)})}function Qa(){E(ee,!0),hn().then(()=>{Xr()})}function Xr(){switch(i(w).display){case"floating":return Qc()}E(S,i(S)+1)}async function Hn(c={}){var Oe,Nt;const{concurrency:p=Math.max(1,i(w).workers),controller:k=new AbortController,minDuration:_=i(w).minDuration}=c,R=performance.now();let T=null,U=null,Le=!1;const ie=await br("onVerify",c);if(ie!==void 0)return ie;lt(q.VERIFYING),E(Pe,k,!0);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(i(w).mockError)throw new Error("Mock error.");if(i(w).test)return te("running test mode with null challenge"),await He(Math.max(0,_-(performance.now()-R))),(Oe=i(Pe))!=null&&Oe.signal.aborted?(lt(),null):(E(se,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),te("verified"),st(q.VERIFIED),N("verified",{payload:i(se)}),{payload:i(se)});if(T=await Ot(),!T)throw new Error("Failed to fetch challenge.");te("challenge",T),"configuration"in T&&(te("re-configuring from challenge",T.configuration),yr(T.configuration)),T.parameters.expiresAt&&nu(T.parameters.expiresAt),Le="_version"in T&&T._version===1;const bt=globalThis.$altcha.algorithms.get(T.parameters.algorithm);if(!bt)throw new Error(`Unsupported algorithm ${T.parameters.algorithm}.`);if(U=await zo({challenge:T,concurrency:p,controller:k,createWorker:bt,counterMode:Le?"string":"uint32",onOutOfMemory:fl=>{if(te("out of memory error received"),N("outofmemory"),i(w).retryOnOutOfMemoryError&&fl>1){const hl=Math.floor(fl/2);return te(`retrying with ${hl} workers...`),hl}},timeout:i(w).timeout}),(Nt=i(Pe))!=null&&Nt.signal.aborted)return lt(),null;if(!U)throw new Error("Failed to find solution.");te("solution",U),await He(Math.max(0,_-(performance.now()-R))),E(z,T.codeChallenge||i(w).codeChallenge||null,!0),Le?E(se,btoa(JSON.stringify(Za(T,U))),!0):E(se,btoa(JSON.stringify({challenge:{parameters:T.parameters,signature:T.signature},solution:U})),!0),i(z)?(te("requesting code verification"),st(q.CODE),N("codechallenge",{codeChallenge:i(z)})):i(w).verifyUrl?await al():(te("verified"),st(q.VERIFIED),N("verified",{payload:i(se)}))}catch(bt){return te("verification failed",bt),st(q.ERROR,String(bt)),null}finally{E(Pe,null)}return{challenge:T,payload:i(se),solution:U}}var iu={configure:yr,getConfiguration:ru,getState:au,hide:Xa,log:te,reset:lt,setState:st,show:Qa,updateUI:Xr,verify:Hn},il=Nc();me("scroll",ua,qc),me("click",ua,Wc),me("pageshow",cn,Zc),me("resize",cn,Jc);var ol=Sn(il);{var ou=c=>{var p=Tc();B(c,p)};be(ol,c=>{i(w).display==="overlay"&&i(ee)&&c(ou)})}var Mt=oe(ol,2),ll=ke(Mt);{var lu=c=>{var p=Pc(),k=Sn(p),_=oe(k,2);{var R=T=>{var U=Rc();So(U,()=>{var Le;return(Le=document.querySelector(i(w).overlayContent))==null?void 0:Le.innerHTML},!0),ve(U),B(T,U)};be(_,T=>{i(w).overlayContent&&T(R)})}me("click",k,Gc,!0),B(c,p)};be(ll,c=>{i(w).display==="overlay"&&i(ee)&&c(lu)})}var ei=oe(ll,2),ti=ke(ei),ni=ke(ti),sl=ke(ni);{let c=Ne(()=>i(w).display==="standard"&&i(Lt)!=="onsubmit"||i(A)===q.VERIFYING);Hs(sl,()=>i(vr),(p,k)=>{k(p,{get id(){return i(dr)},name:"",get required(){return i(c)},get loading(){return i(pr)},get checked(){return i(ue)},onchange:Kc,oninvalid:Yc})})}var ri=oe(sl,2),su=ke(ri);{var cu=c=>{var p=Fr();Re(()=>Rt(p,i(Ke).verificationRequired)),B(c,p)},uu=c=>{var p=Fr();Re(()=>Rt(p,i(Ke).verifying)),B(c,p)},fu=c=>{var p=Fr();Re(()=>Rt(p,i(Ke).verified)),B(c,p)},hu=c=>{var p=Fr();Re(()=>Rt(p,i(Ke).label)),B(c,p)};be(su,c=>{i(A)===q.CODE&&i(z)?c(cu):i(A)===q.VERIFYING?c(uu,1):i(A)===q.VERIFIED?c(fu,2):c(hu,-1)})}ve(ri),ve(ni);var du=oe(ni,2);{var vu=c=>{ja(c,{get strings(){return i(Ke)}})};be(du,c=>{i(yn)&&c(vu)})}ve(ti);var cl=oe(ti,2);{var pu=c=>{{let p=Ne(()=>i(w).display==="bar"&&i(yn));Ba(c,{get logo(){return i(p)},get strings(){return i(Ke)}})}};be(cl,c=>{i(Wr)&&c(pu)})}var ul=oe(cl,2);{var gu=c=>{var p=Ic();Xt(p,k=>E(ae,k),()=>i(ae)),B(c,p)};be(ul,c=>{i(w).display==="floating"&&c(gu)})}var mu=oe(ul,2);{var bu=c=>{var p=Lc();Da(p),Re(()=>{G(p,"name",i(w).name),Xs(p,i(se))}),B(c,p)};be(mu,c=>{i(w).setCookie||c(bu)})}ve(ei);var yu=oe(ei,2);{var wu=c=>{za(c,{get anchor(){return i(ye)},onClickOutside:()=>{u&&lt()},get placement(){return i(w).popoverPlacement},role:"alert",variant:"error",get dir(){return i(mr)},get updateUISignal(){return i(S)},children:(p,k)=>{var _=ko(),R=Sn(_);{var T=ie=>{var Oe=Oc();B(ie,Oe)},U=ie=>{var Oe=Ko(),Nt=Cn(Oe,!0);Re(()=>Rt(Nt,i(Ke).expired)),B(ie,Oe)},Le=ie=>{var Oe=Ko(),Nt=Cn(Oe,!0);Re(()=>{G(Oe,"title",i(ze)),Rt(Nt,i(Ke).error)}),B(ie,Oe)};be(R,ie=>{!i(ze)&&!u?ie(T):!i(ze)&&i(A)===q.EXPIRED?ie(U,1):ie(Le,-1)})}B(p,_)},$$slots:{default:!0}})},_u=c=>{var p=ko(),k=Sn(p);Us(k,()=>i(z),_=>{{let R=Ne(()=>i(w).codeChallengeDisplay!=="standard");za(_,{get anchor(){return i(ye)},get backdrop(){return i(R)},get display(){return i(w).codeChallengeDisplay},onClose:()=>{lt()},get placement(){return i(w).popoverPlacement},role:"dialog",get"aria-label"(){return i(Ke).verificationRequired},get dir(){return i(mr)},get updateUISignal(){return i(S)},children:(T,U)=>{var Le=Mc(),ie=Sn(Le);Bo(ie,{get audioUrl(){return i(x)},get imageUrl(){return i(W)},onCancel:()=>lt(),onReload:()=>Hn(),onSubmit:bt=>al(bt),get codeChallenge(){return i(z)},get config(){return i(w)},get strings(){return i(Ke)}});var Oe=oe(ie,2);{var Nt=bt=>{Ba(bt,{get logo(){return i(yn)},get strings(){return i(Ke)}})};be(Oe,bt=>{i(Wr)&&i(w).codeChallengeDisplay!=="standard"&&bt(Nt)})}B(T,Le)},$$slots:{default:!0}})}}),B(c,p)};be(yu,c=>{i(ze)||i(A)===q.EXPIRED||!u?c(wu):i(z)&&i(A)===q.CODE&&c(_u,1)})}ve(Mt),Xt(Mt,c=>E(ye,c),()=>i(ye)),Re(c=>{G(Mt,"data-state",i(A)),G(Mt,"data-display",i(w).display||void 0),G(Mt,"data-placement",c),G(Mt,"data-visible",i(ee)||void 0),G(Mt,"dir",i(mr)),G(ri,"for",i(dr)),Mt.dir=Mt.dir},[()=>jc(i(w).display)]),B(e,il);var ku=Ut(iu);return o(),ku}typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",Qt(Dc,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const Yo=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    assertAlgorithm(algorithm, ["PBKDF2/SHA-256", "PBKDF2/SHA-384", "PBKDF2/SHA-512"]);
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveBits"]
    );
    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: algorithm.slice("PBKDF2/".length)
      },
      passwordKey,
      keyLength * 8
    );
    return {
      parameters: {},
      derivedKey: new Uint8Array(derivedBits)
    };
  }
  handler({
    deriveKey
  });
})();
`,Go=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Yo],{type:"text/javascript;charset=utf-8"});function Ka(e){let t;try{if(t=Go&&(self.URL||self.webkitURL).createObjectURL(Go),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Yo),{name:e==null?void 0:e.name})}}const qo=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    assertAlgorithm(algorithm, ["SHA-256", "SHA-384", "SHA-512"]);
    const iterations = Math.max(1, parameters.cost);
    let derivedKey = concatBuffers(salt, password);
    for (let i = 0; i < iterations; i++) {
      derivedKey = new Uint8Array(await crypto.subtle.digest(algorithm, derivedKey));
    }
    return {
      parameters: {},
      derivedKey: derivedKey.slice(0, keyLength)
    };
  }
  handler({
    deriveKey
  });
})();
`,Wo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",qo],{type:"text/javascript;charset=utf-8"});function Ya(e){let t;try{if(t=Wo&&(self.URL||self.webkitURL).createObjectURL(Wo),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(qo),{name:e==null?void 0:e.name})}}return Ac(`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none) {
  .altcha-checkbox input {
    /* Safari-only: fixes focus outline */
  }
  .altcha-checkbox input:focus {
    outline-width: 2px;
    outline-style: solid;
  }
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`),$altcha.algorithms.set("SHA-256",()=>new Ya),$altcha.algorithms.set("SHA-384",()=>new Ya),$altcha.algorithms.set("SHA-512",()=>new Ya),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Ka),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Ka),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Ka),X}pe();let Vn=!1;function yl(Ae){Vn=Ae}function xr(){return{debug(...Ae){Vn&&typeof console<"u"&&typeof console.debug=="function"&&console.debug("[nowo-altcha-type]",...Ae)}}}function fi(Ae){const we=Ae.querySelector('[data-altcha-type-target="input"]'),Xe=Ae.querySelector('[data-altcha-type-target="widget"]');if(!we||!Xe)return xr().debug("init skipped: missing input or widget"),!1;const $e=Gt=>{const re=Gt.detail,yt=re==null?void 0:re.payload;typeof yt=="string"&&yt!==""&&(we.value=yt,we.dispatchEvent(new Event("input",{bubbles:!0})),we.dispatchEvent(new Event("change",{bubbles:!0})),xr().debug("payload synced to form input"))},Er=Gt=>{const re=Gt.detail;(re==null?void 0:re.state)==="verified"&&typeof re.payload=="string"&&(we.value=re.payload),((re==null?void 0:re.state)==="unverified"||(re==null?void 0:re.state)==="error"||(re==null?void 0:re.state)==="expired")&&(we.value="")};return Xe.addEventListener("verified",$e),Xe.addEventListener("statechange",Er),Ae.__nowoAltchaCleanup=()=>{Xe.removeEventListener("verified",$e),Xe.removeEventListener("statechange",Er)},xr().debug("container initialized"),!0}function wl(Ae){const we=Ae.__nowoAltchaCleanup;typeof we=="function"&&(we(),delete Ae.__nowoAltchaCleanup)}const ea=".nowo-altcha-type";function hi(Ae=document){Ae.querySelectorAll(ea).forEach(we=>{const Xe=we.getAttribute("data-altcha-type-debug-value")==="1";yl(Xe),fi(we)})}function di(){xr().debug("boot",{buildTime:"2026-10-08T09:41:11.915Z"}),hi(),typeof MutationObserver<"u"&&new MutationObserver(we=>{for(const Xe of we)Xe.addedNodes.forEach($e=>{$e instanceof HTMLElement&&($e.matches(ea)?fi($e):hi($e))}),Xe.removedNodes.forEach($e=>{$e instanceof HTMLElement&&$e.matches(ea)&&wl($e)})}).observe(document.documentElement,{childList:!0,subtree:!0})}const vi="__nowoAltchaTypeBooted",pi=window;pi[vi]!==!0&&(pi[vi]=!0,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",di,{once:!0}):di())})();
