var Cu=Object.defineProperty;var pl=Q=>{throw TypeError(Q)};var Au=(Q,re,me)=>re in Q?Cu(Q,re,{enumerable:!0,configurable:!0,writable:!0,value:me}):Q[re]=me;var P=(Q,re,me)=>Au(Q,typeof re!="symbol"?re+"":re,me),ii=(Q,re,me)=>re.has(Q)||pl("Cannot "+me);var h=(Q,re,me)=>(ii(Q,re,"read from private field"),me?me.call(Q):re.get(Q)),O=(Q,re,me)=>re.has(Q)?pl("Cannot add the same private member more than once"):re instanceof WeakSet?re.add(Q):re.set(Q,me),$=(Q,re,me,Sr)=>(ii(Q,re,"write to private field"),Sr?Sr.call(Q,me):re.set(Q,me),me),H=(Q,re,me)=>(ii(Q,re,"access private method"),me);(function(){"use strict";var Q={},re;function me(){var Xo,On,en,pn,Ln,Mn,Nn,jt,Dn,ze,ur,Bt,pt,Pt,Un,gn,Z,oi,kr,li,gl,ml,Vn,$u,xr,Qo,el,Ze,fr,rt,mn,De,Je,Ue,Xe,It,bn,tn,Hn,hr,dr,zt,Wr,J,bl,yl,si,wl,ci,Er,ea,ui,fi,gt,Kt,mt,yn,vr,qr,Wa,Yt,at;if(re)return Q;re=1;const X=!1;var he=Array.isArray,Fe=Array.prototype.indexOf,be=Array.prototype.includes,nn=Array.from,Dt=Object.keys,yt=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,Bn=Object.getOwnPropertyDescriptors,Sl=Object.prototype,Cl=Array.prototype,bi=Object.getPrototypeOf,yi=Object.isExtensible;const Wt=()=>{};function Al(e){for(var t=0;t<e.length;t++)e[t]()}function wi(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const xe=2,kn=4,Cr=8,na=1<<24,ct=16,ut=32,wt=64,ra=128,aa=256,Qe=512,ye=1024,ve=2048,ft=4096,et=8192,Ge=16384,rn=32768,Ar=1<<25,qt=65536,$r=1<<17,$l=1<<18,an=1<<19,Tl=1<<20,on=65536,Tr=1<<21,xn=1<<22,Zt=1<<23,En=Symbol("$state"),_i=Symbol("component"),Rl=Symbol("legacy props"),Pl=Symbol(""),Rr=Symbol("attributes"),ia=Symbol("class"),oa=Symbol("style"),zn=Symbol("text"),Kn=Symbol("form reset"),Yn=new class extends Error{constructor(){super(...arguments);P(this,"name","StaleReactionError");P(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Gn=!!((Xo=globalThis.document)!=null&&Xo.contentType)&&globalThis.document.contentType.includes("xml"),Wn=3,qn=8;function ki(e){return e===this.v}function xi(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Il(e){return!xi(e,this.v)}function Ol(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ll(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ml(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Nl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Dl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ul(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hl(){throw new Error("https://svelte.dev/e/hydration_failed")}function Fl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function jl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Bl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let zl=!1;const Kl=1,Yl=2,la="[",Ei="[!",Si="[?",Ci="]",ln={},pe=Symbol("uninitialized"),Ai="http://www.w3.org/1999/xhtml",Gl="http://www.w3.org/2000/svg",Wl="http://www.w3.org/1998/Math/MathML",ql="@attach";let Te=null;function Sn(e){Te=e}function Ut(e,t=!1,n){Te={p:Te,i:!1,c:null,e:null,s:e,x:null,r:M,l:null}}function Ht(e){var t=Te,n=t.e;if(n!==null){t.e=null;for(var r of n)uo(r)}return e!==void 0&&(t.x=e),t.i=!0,Te=t.p,sa(e)}function sa(e={}){return yt(e,_i,{value:!0}),e}function $i(){return!0}let sn=[];function Ti(){var e=sn;sn=[],Al(e)}function _t(e){if(sn.length===0&&!er){var t=sn;queueMicrotask(()=>{t===sn&&Ti()})}sn.push(e)}function Zl(){for(;sn.length>0;)Ti()}function Jl(){console.warn("https://svelte.dev/e/derived_inert")}function Zn(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Xl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ql(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let L=!1;function kt(e){L=e}let D;function Me(e){if(e===null)throw Zn(),ln;return D=e}function cn(){return Me(Et(D))}function ge(e){if(L){if(Et(D)!==null)throw Zn(),ln;D=e}}function ca(e=1){if(L){for(var t=e,n=D;t--;)n=Et(n);D=n}}function ua(e=!0){for(var t=0,n=D;;){if(n.nodeType===qn){var r=n.data;if(r===Ci){if(t===0)return n;t-=1}else(r===la||r===Ei||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=Et(n);e&&n.remove(),n=a}}function Ri(e){if(!e||e.nodeType!==qn)throw Zn(),ln;return e.data}function Ft(e){if(typeof e!="object"||e===null||En in e||_i in e)return e;const t=bi(e);if(t!==Sl&&t!==Cl)return e;var n=new Map,r=he(e),a=j(0),o=hn,s=l=>{if(hn===o)return l();var f=F,u=hn;tt(null),ro(o);var d=l();return tt(f),ro(u),d};return r&&n.set("length",j(e.length)),new Proxy(e,{defineProperty(l,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Fl();var d=n.get(f);return d===void 0?s(()=>{var m=j(u.value);return n.set(f,m),m}):E(d,u.value,!0),!0},deleteProperty(l,f){var u=n.get(f);if(u===void 0){if(f in l){const d=s(()=>j(pe));n.set(f,d),nr(a)}}else E(u,pe),nr(a);return!0},get(l,f,u){var v;if(f===En)return e;var d=n.get(f),m=f in l;if(d===void 0&&(!m||(v=ae(l,f))!=null&&v.writable)&&(d=s(()=>{var b=Ft(m?l[f]:pe),y=j(b);return y}),n.set(f,d)),d!==void 0){var g=i(d);return g===pe?void 0:g}return Reflect.get(l,f,u)},getOwnPropertyDescriptor(l,f){var u=Reflect.getOwnPropertyDescriptor(l,f);if(u&&"value"in u){var d=n.get(f);d&&(u.value=i(d))}else if(u===void 0){var m=n.get(f),g=m==null?void 0:m.v;if(m!==void 0&&g!==pe)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return u},has(l,f){var g;if(f===En)return!0;var u=n.get(f),d=u!==void 0&&u.v!==pe||Reflect.has(l,f);if(u!==void 0||M!==null&&(!d||(g=ae(l,f))!=null&&g.writable)){u===void 0&&(u=s(()=>{var v=d?Ft(l[f]):pe,b=j(v);return b}),n.set(f,u));var m=i(u);if(m===pe)return!1}return d},set(l,f,u,d){var fe;var m=n.get(f),g=f in l;if(r&&f==="length")for(var v=u;v<m.v;v+=1){var b=n.get(v+"");b!==void 0?E(b,pe):v in l&&(b=s(()=>j(pe)),n.set(v+"",b))}if(m===void 0)(!g||(fe=ae(l,f))!=null&&fe.writable)&&(m=s(()=>j(void 0)),E(m,Ft(u)),n.set(f,m));else{g=m.v!==pe;var y=s(()=>Ft(u));E(m,y)}var N=Reflect.getOwnPropertyDescriptor(l,f);if(N!=null&&N.set&&N.set.call(d,u),!g){if(r&&typeof f=="string"){var I=n.get("length"),K=Number(f);Number.isInteger(K)&&K>=I.v&&E(I,K+1)}nr(a)}return!0},ownKeys(l){i(a);var f=Reflect.ownKeys(l).filter(m=>{var g=n.get(m);return g===void 0||g.v!==pe});for(var[u,d]of n)d.v!==pe&&!(u in l)&&f.push(u);return f},setPrototypeOf(){Vl()}})}function Pi(e){try{if(e!==null&&typeof e=="object"&&En in e)return e[En]}catch{}return e}function Ii(e,t){return Object.is(Pi(e),Pi(t))}var un,fa,Oi,Li,Mi;function ha(){if(un===void 0){un=window,fa=document,Oi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Li=ae(t,"firstChild").get,Mi=ae(t,"nextSibling").get,yi(e)&&(e[ia]=void 0,e[Rr]=null,e[oa]=void 0,e.__e=void 0),yi(n)&&(n[zn]=void 0)}}function xt(e=""){return document.createTextNode(e)}function Ve(e){return Li.call(e)}function Et(e){return Mi.call(e)}function Ee(e,t){if(!L)return Ve(e);var n=Ve(D);if(n===null)n=D.appendChild(xt());else if(t&&n.nodeType!==Wn){var r=xt();return n==null||n.before(r),Me(r),r}return t&&Pr(n),Me(n),n}function Cn(e,t=!1){if(!L){var n=Ve(e);return n instanceof Comment&&n.data===""?Et(n):n}if(t){if((D==null?void 0:D.nodeType)!==Wn){var r=xt();return D==null||D.before(r),Me(r),r}Pr(D)}return D}function An(e,t=!1){if(!L)return Ve(e);var n=Ee(e,t);return ge(e),n}function le(e,t=1,n=!1){let r=L?D:e;for(var a;t--;)a=r,r=Et(r);if(!L)return r;if(n){if((r==null?void 0:r.nodeType)!==Wn){var o=xt();return r===null?a==null||a.after(o):r.before(o),Me(o),o}Pr(r)}return Me(r),r}function es(e){e.textContent=""}function da(e,t,n){return t==null||t===Ai?document.createElement(e):document.createElementNS(t,e)}function Pr(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===Wn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function ts(e){var t=M;if(t===null)return F.f|=Zt,e;if((t.f&rn)===0&&(t.f&kn)===0)throw e;St(e,t)}function St(e,t){if(!(t!==null&&(t.f&Ge)!==0)){for(;t!==null;){if((t.f&ra)!==0&&(t.f&(Ge|Ar))===0){if((t.f&rn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}const ns=-7169;function de(e,t){e.f=e.f&ns|t}function va(e){(e.f&Qe)!==0||e.deps===null?de(e,ye):de(e,ft)}function Ni(e){if(e!==null)for(const t of e)(t.f&xe)===0||(t.f&on)===0||(t.f^=on,Ni(t.deps))}function Di(e,t,n){(e.f&ve)!==0?t.add(e):(e.f&ft)!==0&&n.add(e),Ni(e.deps),de(e,ye)}function Ui(e,t,n){if(e==null)return t(void 0),Wt;const r=ir(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const $n=[];function rs(e,t=Wt){let n=null;const r=new Set;function a(l){if(xi(e,l)&&(e=l,n)){const f=!$n.length;for(const u of r)u[1](),$n.push(u,e);if(f){for(let u=0;u<$n.length;u+=2)$n[u][0]($n[u+1]);$n.length=0}}}function o(l){a(l(e))}function s(l,f=Wt){const u=[l,f];return r.add(u),r.size===1&&(n=t(a,o)||Wt),l(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:s}}function Jn(e){let t;return Ui(e,n=>t=n)(),t}let pa=Symbol("unmounted");function Hi(e,t,n){const r=n[t]??(n[t]={store:null,source:Xi(void 0),unsubscribe:Wt});if(r.store!==e&&!(pa in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=Wt;else{var a=!0;r.unsubscribe=Ui(e,o=>{a?r.source.v=o:E(r.source,o)}),a=!1}return e&&pa in n?Jn(e):i(r.source)}function as(){const e={};function t(){Dr(()=>{for(var n in e)e[n].unsubscribe();yt(e,pa,{enumerable:!1,value:!0})})}return[e,t]}function is(e,t){if(t){const n=document.body;e.autofocus=!0,_t(()=>{document.activeElement===n&&e.focus()})}}let Fi=!1;function Vi(){Fi||(Fi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Kn])==null||t.call(n)})},{capture:!0}))}function Tn(e){var t=F,n=M;tt(null),At(null);try{return e()}finally{tt(t),At(n)}}function os(e,t,n,r=n){e.addEventListener(t,()=>Tn(n));const a=e[Kn];a?e[Kn]=()=>{a(),r(!0)}:e[Kn]=()=>r(!0),Vi()}function ji(e,t,n,r){const a=ga;var o=e.filter(v=>!v.settled),s=t.map(a);if(n.length===0&&o.length===0){r(s);return}var l=M,f=ls(),u=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(v=>v.promise)):null;function d(v){if((l.f&Ge)===0){f();try{r([...s,...v])}catch(b){St(b,l)}Ir()}}var m=Bi();if(n.length===0){u.then(()=>d([])).finally(m);return}function g(){Promise.all(n.map(v=>ss(v))).then(d).catch(v=>St(v,l)).finally(m)}u?u.then(()=>{f(),g(),Ir()}):g()}function ls(){var e=M,t=F,n=Te,r=C;return function(o=!0){At(e),tt(t),Sn(n),o&&(e.f&Ge)===0&&(r==null||r.activate(),r==null||r.apply())}}function Ir(e=!0){At(null),tt(null),Sn(null),e&&(C==null||C.deactivate())}function Bi(){var e=M,t=e.b,n=C,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function ga(e){var t=xe|ve;return M!==null&&(M.f|=an),{ctx:Te,deps:null,effects:null,equals:ki,f:t,fn:e,reactions:null,rv:0,v:pe,wv:0,parent:M,ac:null}}const Xn=Symbol("obsolete");function ss(e,t,n){let r=M;r===null&&Ll();var a=void 0,o=tr(pe),s=!F,l=new Set;return ws(()=>{var v,b;var f=M,u=wi();a=u.promise;try{Promise.resolve(e()).then(u.resolve,y=>{y!==Yn&&u.reject(y)}).finally(Ir)}catch(y){u.reject(y),Ir()}var d=C;if(s){if((f.f&rn)!==0)var m=Bi();if((v=r.b)!=null&&v.is_rendered())(b=d.async_deriveds.get(f))==null||b.reject(Xn);else for(const y of l.values())y.reject(Xn);l.add(u),d.async_deriveds.set(f,u)}const g=(y,N=void 0)=>{m==null||m(),l.delete(u),N!==Xn&&(d.activate(),N?(o.f|=Zt,Mr(o,N)):((o.f&Zt)!==0&&(o.f^=Zt),Mr(o,y)),d.deactivate())};u.promise.then(g,y=>g(null,y||"unknown"))}),Dr(()=>{for(const f of l)f.reject(Xn)}),new Promise(f=>{function u(d){function m(){d===a?f(o):u(a)}d.then(m,m)}u(a)})}function Ne(e){const t=ga(e);return to(t),t}function cs(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Ae(t[n])}}function ma(e){var t,n=M,r=e.parent;if(!Vt&&r!==null&&e.v!==pe&&(r.f&(Ge|et))!==0)return Jl(),e.v;At(r);try{e.f&=~on,cs(e),t=oo(e)}finally{At(n)}return t}function zi(e){var t=ma(e);if(!e.equals(t)&&(e.wv=ao(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?(C.capture(e,t,!0),Qn==null||Qn.capture(e,t,!0)):e.v=t,e.deps===null))){de(e,ye);return}Vt||(Ce!==null?(xa()||C!=null&&C.is_fork)&&Ce.set(e,t):va(e))}function us(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Tn(()=>{n.ac.abort(Yn),n.ac=null}),n.fn!==null&&(n.teardown=Wt),ar(n,0),Sa(n))}function Ki(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&In(t)}let ba=null,Rn=null,C=null,Qn=null,Ce=null,ya=null,er=!1,wa=!1,Pn=null,Or=null;var Yi=0;let fs=1;const Gr=class Gr{constructor(){O(this,Z);P(this,"id",fs++);O(this,On,!1);P(this,"linked",!0);O(this,en,null);O(this,pn,null);P(this,"async_deriveds",new Map);P(this,"current",new Map);P(this,"previous",new Map);O(this,Ln,new Set);O(this,Mn,new Set);O(this,Nn,0);O(this,jt,new Map);O(this,Dn,null);O(this,ze,[]);O(this,ur,[]);O(this,Bt,new Set);O(this,pt,new Set);O(this,Pt,new Map);O(this,Un,new Set);P(this,"is_fork",!1);O(this,gn,!1);Rn===null?ba=Rn=this:($(Rn,pn,this),$(this,en,Rn)),Rn=this}skip_effect(t){h(this,Pt).has(t)||h(this,Pt).set(t,{d:[],m:[]}),h(this,Un).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=h(this,Pt).get(t);if(r){h(this,Pt).delete(t);for(var a of r.d)de(a,ve),n(a);for(a of r.m)de(a,ft),n(a)}h(this,Un).add(t)}capture(t,n,r=!1){t.v!==pe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Zt)===0&&(this.current.set(t,[n,r]),Ce==null||Ce.set(t,n)),this.is_fork||(t.v=n)}activate(){C=this}deactivate(){C=null,Ce=null}flush(){try{wa=!0,C=this,H(this,Z,kr).call(this)}finally{Yi=0,ya=null,Pn=null,Or=null,wa=!1,C=null,Ce=null,Ct.clear()}}discard(){var t;for(const n of h(this,Mn))n(this);h(this,Mn).clear();for(const n of this.async_deriveds.values())n.reject(Xn);H(this,Z,xr).call(this),(t=h(this,Dn))==null||t.resolve()}register_created_effect(t){h(this,ur).push(t)}increment(t,n){if($(this,Nn,h(this,Nn)+1),t){let r=h(this,jt).get(n)??0;h(this,jt).set(n,r+1)}}decrement(t,n){if($(this,Nn,h(this,Nn)-1),t){let r=h(this,jt).get(n)??0;r===1?h(this,jt).delete(n):h(this,jt).set(n,r-1)}h(this,gn)||($(this,gn,!0),_t(()=>{$(this,gn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)h(this,Bt).add(r);for(const r of n)h(this,pt).add(r);t.clear(),n.clear()}oncommit(t){h(this,Ln).add(t)}ondiscard(t){h(this,Mn).add(t)}settled(){return(h(this,Dn)??$(this,Dn,wi())).promise}static ensure(){if(C===null){const t=C=new Gr;!wa&&!er&&_t(()=>{h(t,On)||t.flush()})}return C}apply(){{Ce=null;return}}schedule(t){var a;if(ya=t,(a=t.b)!=null&&a.is_pending&&(t.f&(kn|Cr|na))!==0&&(t.f&rn)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Pn!==null&&n===M&&(F===null||(F.f&xe)===0))return;if((r&(wt|ut))!==0){if((r&ye)===0)return;n.f^=ye}}h(this,ze).push(n)}};On=new WeakMap,en=new WeakMap,pn=new WeakMap,Ln=new WeakMap,Mn=new WeakMap,Nn=new WeakMap,jt=new WeakMap,Dn=new WeakMap,ze=new WeakMap,ur=new WeakMap,Bt=new WeakMap,pt=new WeakMap,Pt=new WeakMap,Un=new WeakMap,gn=new WeakMap,Z=new WeakSet,oi=function(){if(this.is_fork)return!0;for(const r of h(this,jt).keys()){for(var t=r,n=!1;t.parent!==null;){if(h(this,Pt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},kr=function(){var f,u,d,m;$(this,On,!0),Yi++>1e3&&(H(this,Z,xr).call(this),hs());for(const g of h(this,Bt))h(this,pt).delete(g),de(g,ve),this.schedule(g);for(const g of h(this,pt))de(g,ft),this.schedule(g);const t=h(this,ze);$(this,ze,[]),this.apply();var n=Pn=[],r=[],a=Or=[];for(const g of t)try{H(this,Z,li).call(this,g,n,r)}catch(v){throw Zi(g),H(this,Z,oi).call(this)||this.discard(),v}if(C=null,a.length>0){var o=Gr.ensure();for(const g of a)o.schedule(g)}if(Pn=null,Or=null,H(this,Z,oi).call(this)){H(this,Z,Vn).call(this,r),H(this,Z,Vn).call(this,n);for(const[g,v]of h(this,Pt))qi(g,v);a.length>0&&H(f=C,Z,kr).call(f);return}const s=H(this,Z,gl).call(this);if(s){H(this,Z,Vn).call(this,r),H(this,Z,Vn).call(this,n),H(u=s,Z,ml).call(u,this);return}h(this,Bt).clear(),h(this,pt).clear();for(const g of h(this,Ln))g(this);h(this,Ln).clear(),Qn=this,Gi(r),Gi(n),Qn=null,(d=h(this,Dn))==null||d.resolve();var l=C;if(h(this,Nn)===0&&(h(this,ze).length===0||l!==null)&&H(this,Z,xr).call(this),h(this,ze).length>0)if(l!==null){const g=l;h(g,ze).push(...h(this,ze).filter(v=>!h(g,ze).includes(v)))}else l=this;l!==null&&(Ct.clear(),H(m=l,Z,kr).call(m))},li=function(t,n,r){t.f^=ye;for(var a=t.first;a!==null;){var o=a.f,s=(o&(ut|wt))!==0,l=s&&(o&ye)!==0,f=l||(o&et)!==0||h(this,Pt).has(a);if(!f&&a.fn!==null){s?a.f^=ye:(o&kn)!==0?n.push(a):rr(a)&&((o&ct)!==0&&h(this,pt).add(a),In(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}},gl=function(){for(var t=h(this,en);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=h(t,en)}return null},ml=function(t){var r;for(const[a,o]of t.current)!this.previous.has(a)&&t.previous.has(a)&&this.previous.set(a,t.previous.get(a)),this.current.set(a,o);for(const[a,o]of t.async_deriveds){const s=this.async_deriveds.get(a);s&&o.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(h(t,Bt),h(t,pt));const n=a=>{var o=a.reactions;if(o!==null&&!((a.f&xe)!==0&&(a.f&(ve|ft))===0))for(const f of o){var s=f.f;if((s&xe)!==0)n(f);else{var l=f;s&(xn|ct)&&!this.async_deriveds.has(l)&&(h(this,pt).delete(l),de(l,ve),this.schedule(l))}}};for(const a of this.current.keys())n(a);this.oncommit(()=>t.discard()),H(r=t,Z,xr).call(r),C=this,H(this,Z,kr).call(this)},Vn=function(t){for(var n=0;n<t.length;n+=1)Di(t[n],h(this,Bt),h(this,pt))},$u=function(){var m;for(let g=ba;g!==null;g=h(g,pn)){var t=g.id<this.id,n=[];for(const[v,[b,y]]of this.current){if(g.current.has(v)){var r=g.current.get(v)[0];if(t&&b!==r)g.current.set(v,[b,y]);else continue}n.push(v)}if(t)for(const[v,b]of this.async_deriveds){const y=g.async_deriveds.get(v);y&&b.promise.then(y.resolve).catch(y.reject)}var a=[...g.current.keys()].filter(v=>!g.current.get(v)[1]);if(!(!h(g,On)||a.length===0)){var o=a.filter(v=>!this.current.has(v));if(o.length===0)t&&g.discard();else if(n.length>0){if(t)for(const v of h(this,Un))g.unskip_effect(v,b=>{var y;(b.f&(ct|xn))!==0?g.schedule(b):H(y=g,Z,Vn).call(y,[b])});g.activate();var s=new Set,l=new Map;for(var f of n)Wi(f,o,s,l);l=new Map;var u=[...g.current].filter(([v,b])=>{const y=this.current.get(v);return y?y[0]!==b[0]||y[1]!==b[1]:!0}).map(([v])=>v);if(u.length>0)for(const v of h(this,ur))(v.f&(Ge|et|$r))===0&&_a(v,u,l)&&((v.f&(xn|ct))!==0?(de(v,ve),g.schedule(v)):h(g,Bt).add(v));if(h(g,ze).length>0&&!h(g,gn)){g.apply();for(var d of h(g,ze))H(m=g,Z,li).call(m,d,[],[]);$(g,ze,[])}g.deactivate()}}}},xr=function(){if(this.linked){var t=h(this,en),n=h(this,pn);t===null?ba=n:$(t,pn,n),n===null?Rn=t:$(n,en,t),this.linked=!1}};let Jt=Gr;function ee(e){var t=er;er=!0;try{for(var n;;){if(Zl(),C===null)return n;C.flush()}}finally{er=t}}function hs(){try{Ul()}catch(e){St(e,ya)}}let ht=null;function Gi(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ge|et))===0&&rr(r)&&(ht=new Set,In(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&po(r),(ht==null?void 0:ht.size)>0)){Ct.clear();for(const a of ht){if((a.f&(Ge|et))!==0)continue;const o=[a];let s=a.parent;for(;s!==null;)ht.has(s)&&(ht.delete(s),o.push(s)),s=s.parent;for(let l=o.length-1;l>=0;l--){const f=o[l];(f.f&(Ge|et))===0&&In(f)}}ht.clear()}}ht=null}}function Wi(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const o=a.f;(o&xe)!==0?Wi(a,t,n,r):(o&(xn|ct))!==0&&(o&ve)===0&&_a(a,t,r)&&(de(a,ve),ka(a))}}function _a(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(be.call(t,a))return!0;if((a.f&xe)!==0&&_a(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function ka(e){C.schedule(e)}function qi(e,t){if(!((e.f&ut)!==0&&(e.f&ye)!==0)){(e.f&ve)!==0?t.d.push(e):(e.f&ft)!==0&&t.m.push(e),de(e,ye);for(var n=e.first;n!==null;)qi(n,t),n=n.next}}function Zi(e){de(e,ye);for(var t=e.first;t!==null;)Zi(t),t=t.next}let Lr=new Set;const Ct=new Map;let Ji=!1;function tr(e,t){var n={f:0,v:e,reactions:null,equals:ki,rv:0,wv:0};return n}function j(e,t){const n=tr(e);return to(n),n}function Xi(e,t=!1,n=!0){const r=tr(e);return t||(r.equals=Il),r}function E(e,t,n=!1){F!==null&&(!dt||(F.f&$r)!==0)&&$i()&&(F.f&(xe|ct|xn|$r))!==0&&($t===null||!$t.has(e))&&jl();let r=n?Ft(t):t;return Mr(e,r,Or)}function Mr(e,t,n=null){if(!e.equals(t)){Vt?Ct.set(e,t):Ct.has(e)||Ct.set(e,e.v);var r=Jt.ensure();if(r.capture(e,t),(e.f&xe)!==0){const a=e;(e.f&ve)!==0&&ma(a),Ce===null&&va(a)}e.wv=ao(),Qi(e,ve,n),M!==null&&(M.f&ye)!==0&&(M.f&(ut|wt))===0&&(nt===null?vs([e]):nt.push(e)),!r.is_fork&&Lr.size>0&&!Ji&&ds()}return t}function ds(){Ji=!1;for(const e of Lr){(e.f&ye)!==0&&de(e,ft);let t;try{t=rr(e)}catch{t=!0}t&&In(e)}Lr.clear()}function nr(e){E(e,e.v+1)}function Qi(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,o=0;o<a;o++){var s=r[o],l=s.f,f=(l&ve)===0;if(f&&de(s,t),(l&$r)!==0)Lr.add(s);else if((l&xe)!==0){var u=s;Ce==null||Ce.delete(u),(l&on)===0&&(l&Qe&&(M===null||(M.f&Tr)===0)&&(s.f|=on),Qi(u,ft,n))}else if(f){var d=s;(l&ct)!==0&&ht!==null&&ht.add(d),n!==null?n.push(d):ka(d)}}}let Nr=!1,Vt=!1;function eo(e){Vt=e}let F=null,dt=!1;function tt(e){F=e}let M=null;function At(e){M=e}let $t=null;function to(e){F!==null&&($t??($t=new Set)).add(e)}let je=null,We=0,nt=null;function vs(e){nt=e}let no=1,fn=0,hn=fn;function ro(e){hn=e}function ao(){return++no}function rr(e){var t=e.f;if((t&ve)!==0)return!0;if(t&xe&&(e.f&=~on),(t&ft)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var o=n[a];if(rr(o)&&zi(o),o.wv>e.wv)return!0}(t&Qe)!==0&&Ce===null&&de(e,ye)}return!1}function io(e,t,n=!0){var r=e.reactions;if(r!==null&&!($t!==null&&$t.has(e)))for(var a=0;a<r.length;a++){var o=r[a];(o.f&xe)!==0?io(o,t,!1):t===o&&(n?de(o,ve):(o.f&ye)!==0&&de(o,ft),ka(o))}}function oo(e){var t=je,n=We,r=nt,a=F,o=$t,s=Te,l=dt,f=hn,u=e.f;je=null,We=0,nt=null,F=(u&(ut|wt))===0?e:null,$t=null,Sn(e.ctx),dt=!1,hn=++fn,e.ac!==null&&(Tn(()=>{e.ac.abort(Yn)}),e.ac=null);try{e.f|=Tr;var d=e.fn,m=d();e.f|=rn;var g=lo(e);if($i()&&nt!==null&&!dt&&g!==null&&(e.f&(xe|ft|ve))===0)for(var v=0;v<nt.length;v++)io(nt[v],e);if(a!==null&&a!==e){if(fn++,a.deps!==null)for(let b=0;b<n;b+=1)a.deps[b].rv=fn;if(t!==null)for(const b of t)b.rv=fn;nt!==null&&(r===null?r=nt:r.push(...nt))}return(e.f&Zt)!==0&&(e.f^=Zt),m}catch(b){return lo(e),ts(b)}finally{e.f^=Tr,je=t,We=n,nt=r,F=a,$t=o,Sn(s),dt=l,hn=f}}function lo(e){var a;var t=e.deps,n=C==null?void 0:C.is_fork;if(je!==null){var r;if(n||ar(e,We),t!==null&&We>0)for(t.length=We+je.length,r=0;r<je.length;r++)t[We+r]=je[r];else e.deps=t=je;if(xa()&&(e.f&Qe)!==0)for(r=We;r<t.length;r++)((a=t[r]).reactions??(a.reactions=[])).push(e)}else!n&&t!==null&&We<t.length&&(ar(e,We),t.length=We);return t}function ps(e,t){let n=t.reactions;if(n!==null){var r=Fe.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&xe)!==0&&(je===null||!be.call(je,t))){var o=t;(o.f&Qe)!==0&&(o.f^=Qe,o.f&=~on),o.v!==pe&&va(o),o.ac!==null&&Tn(()=>{o.ac.abort(Yn),o.ac=null,de(o,ve)}),us(o),ar(o,0)}}function ar(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ps(e,n[r])}function In(e){var t=e.f;if((t&Ge)===0){de(e,ye);var n=M,r=Nr;M=e,Nr=(t&(ut|wt))===0;try{(t&(ct|na))!==0?_s(e):Sa(e),ho(e);var a=oo(e);e.teardown=typeof a=="function"?a:null,e.wv=no;var o;X&&zl&&(e.f&ve)!==0&&e.deps}finally{Nr=r,M=n}}}async function dn(){await Promise.resolve(),ee()}function i(e){var t=e.f,n=(t&xe)!==0;if(F!==null&&!dt){var r=M!==null&&(M.f&Ge)!==0;if(!r&&($t===null||!$t.has(e))){var a=F.deps;if((F.f&Tr)!==0)e.rv<fn&&(e.rv=fn,je===null&&a!==null&&a[We]===e?We++:je===null?je=[e]:je.push(e));else{F.deps??(F.deps=[]),be.call(F.deps,e)||F.deps.push(e);var o=e.reactions;o===null?e.reactions=[F]:be.call(o,F)||o.push(F)}}}if(Vt&&Ct.has(e))return Ct.get(e);if(n){var s=e;if(Vt){var l=s.v;return((s.f&ye)===0&&s.reactions!==null||co(s))&&(l=ma(s)),Ct.set(s,l),l}var f=(s.f&Qe)===0&&!dt&&F!==null&&(Nr||(F.f&Qe)!==0),u=(s.f&rn)===0;rr(s)&&(f&&(s.f|=Qe),zi(s)),f&&!u&&(Ki(s),so(s))}if(Ce!=null&&Ce.has(e))return Ce.get(e);if((e.f&Zt)!==0)throw e.v;return e.v}function so(e){if(e.f|=Qe,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&xe)!==0&&(t.f&Qe)===0&&(Ki(t),so(t))}function co(e){if(e.v===pe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ct.has(t)||(t.f&xe)!==0&&co(t))return!0;return!1}function ir(e){var t=dt;try{return dt=!0,e()}finally{dt=t}}function gs(e){M===null&&(F===null&&Dl(),Nl()),Vt&&Ml()}function ms(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function vt(e,t){var n=M;n!==null&&(n.f&et)!==0&&(e|=et);var r={ctx:Te,deps:null,nodes:null,f:e|ve|Qe,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(r);var a=r;if((e&kn)!==0)Pn!==null?Pn.push(r):Jt.ensure().schedule(r);else if(t!==null){try{In(r)}catch(s){throw Ae(r),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&an)===0&&(a=a.first,(e&ct)!==0&&(e&qt)!==0&&a!==null&&(a.f|=qt))}if(a!==null&&(a.parent=n,n!==null&&ms(a,n),F!==null&&(F.f&xe)!==0&&(e&wt)===0)){var o=F;(o.effects??(o.effects=[])).push(a)}return r}function xa(){return F!==null&&!dt}function Dr(e){const t=vt(Cr,null);return de(t,ye),t.teardown=e,t}function Be(e){gs();var t=M.f,n=!F&&(t&ut)!==0&&Te!==null&&!Te.i;if(n){var r=Te;(r.e??(r.e=[])).push(e)}else return uo(e)}function uo(e){return vt(kn|Tl,e)}function bs(e){Jt.ensure();const t=vt(wt|an,e);return()=>{Ae(t)}}function ys(e){Jt.ensure();const t=vt(wt|an,e);return(n={})=>new Promise(r=>{n.outro?lr(t,()=>{Ae(t),r(void 0)}):(Ae(t),r(void 0))})}function Ea(e){return vt(kn,e)}function ws(e){return vt(xn|an,e)}function Ur(e,t=0){return vt(Cr|t,e)}function Re(e,t=[],n=[],r=[]){ji(r,t,n,a=>{vt(Cr,()=>{e(...a.map(i))})})}function or(e,t=0){var n=vt(ct|t,e);return n}function fo(e,t=0){var n=vt(na|t,e);return n}function Tt(e){return vt(ut|an,e)}function ho(e){var t=e.teardown;if(t!==null){const n=Vt,r=F;eo(!0),tt(null);try{t.call(null)}catch(a){St(a,e.parent)}finally{eo(n),tt(r)}}}function Sa(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&Tn(()=>{a.abort(Yn)});var r=n.next;(n.f&wt)!==0?n.parent=null:Ae(n,t),n=r}}function _s(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ut)===0&&Ae(t),t=n}}function Ae(e,t=!0){var n=!1;(t||(e.f&$l)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(vo(e.nodes.start,e.nodes.end),n=!0),e.f|=Ar,Sa(e,t&&!n),ar(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();ho(e),e.f^=Ar,e.f|=Ge;var a=e.parent;a!==null&&a.first!==null&&po(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function vo(e,t){for(;e!==null;){var n=e===t?null:Et(e);e.remove(),e=n}}function po(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function lr(e,t,n=!0){var r=[];e.f|=aa,go(e,r,!0);var a=()=>{n&&Ae(e),t&&t()},o=r.length;if(o>0){var s=()=>--o||a();for(var l of r)l.out(s)}else a()}function go(e,t,n){if((e.f&et)===0){e.f^=et;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var o=a.next;if((a.f&wt)===0){var s=(a.f&qt)!==0||(a.f&ut)!==0&&(e.f&ct)!==0;go(a,t,s?n:!1)}a=o}}}function mo(e){e.f&=~aa,bo(e,!0)}function bo(e,t){if((e.f&aa)===0&&(e.f&et)!==0){e.f^=et,(e.f&ye)===0&&(de(e,ve),Jt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&qt)!==0||(n.f&ut)!==0;bo(n,a?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const s of o)(s.is_global||t)&&s.in()}}function yo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:Et(n);t.append(n),n=a}}function ks(e){let t=0,n=tr(0),r;return()=>{xa()&&(i(n),Ur(()=>(t===0&&(r=ir(()=>e(()=>nr(n)))),t+=1,()=>{_t(()=>{t-=1,t===0&&(r==null||r(),r=void 0,nr(n))})})))}}function wo(e){const t={get:n=>Jn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Jn(t.store),{[n]:r}):Object.assign(Jn(t.store),n),t.store.set(Jn(t.store))},store:rs(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:wo({}),i18n:wo({}),instances:new Set,plugins:new Set};const xs={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};globalThis.$altcha.i18n.set("en",xs);const Es="5";typeof window<"u"&&((Qo=window.__svelte??(window.__svelte={})).v??(Qo.v=new Set)).add(Es);const vn=Symbol("events"),_o=new Set,Ca=new Set;function ko(e,t,n,r={}){function a(o){if(r.capture||Ta.call(t,o),!o.cancelBubble)return Tn(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?_t(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function we(e,t,n,r,a){var o={capture:r,passive:a},s=ko(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Dr(()=>{t.removeEventListener(e,s,o)})}function Hr(e,t,n){(t[vn]??(t[vn]={}))[e]=n}function Fr(e){for(var t=0;t<e.length;t++)_o.add(e[t]);for(var n of Ca)n(e)}let Aa=null,$a=!1;function Ta(e){var y,N;var t=this,n=t.ownerDocument,r=e.type,a=((y=e.composedPath)==null?void 0:y.call(e))||[],o=a[0]||e.target;Aa=e,$a||($a=!0,setTimeout(()=>{$a=!1,Aa=null}));var s=0,l=Aa===e&&e[vn];if(l){var f=a.indexOf(l);if(f!==-1&&(t===document||t===window)){e[vn]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(s=f)}if(o=a[s]||e.target,o!==t){yt(e,"currentTarget",{configurable:!0,get(){return o||n}});var d=F,m=M;tt(null),At(null);try{for(var g,v=[];o!==null&&o!==t;){try{var b=(N=o[vn])==null?void 0:N[r];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(I){g?v.push(I):g=I}if(e.cancelBubble)break;s++,o=s<a.length?a[s]:null}if(g){for(let I of v)queueMicrotask(()=>{throw I});throw g}}finally{e[vn]=t,delete e.currentTarget,tt(d),At(m)}}}const Ra=((el=globalThis==null?void 0:globalThis.window)==null?void 0:el.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Ss(e){return(Ra==null?void 0:Ra.createHTML(e))??e}function xo(e){var t=da("template");return t.innerHTML=Ss(e.replaceAll("<!>","<!---->")),t.content}function qe(e,t){var n=M;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function ue(e,t){var n=(t&Kl)!==0,r=(t&Yl)!==0,a,o=!e.startsWith("<!>");return()=>{if(L)return qe(D,null),D;a===void 0&&(a=xo(o?e:"<!>"+e),n||(a=Ve(a)));var s=r||Oi?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=Ve(s),f=s.lastChild;qe(l,f)}else qe(s,s);return s}}function Cs(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(L)return qe(D,null),D;if(!o){var s=xo(a),l=Ve(s);o=Ve(l)}var f=o.cloneNode(!0);return qe(f,f),f}}function Pa(e,t){return Cs(e,t,"svg")}function Vr(e=""){if(!L){var t=xt(e+"");return qe(t,t),t}var n=D;return n.nodeType!==Wn?(n.before(n=xt()),Me(n)):Pr(n),qe(n,n),n}function Eo(){if(L)return qe(D,null),D;var e=document.createDocumentFragment(),t=document.createComment(""),n=xt();return e.append(t,n),qe(t,n),e}function B(e,t){if(L){var n=M;((n.f&rn)===0||n.nodes.end===null)&&(n.nodes.end=D),cn();return}e!==null&&e.before(t)}function As(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const $s=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ts(e){return $s.includes(e)}const Rs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ps(e){return e=e.toLowerCase(),Rs[e]??e}const Is=["touchstart","touchmove"];function Os(e){return Is.includes(e)}var Ls=qt|an;function Ms(e,t,n,r){new Ns(e,t,n,r)}class Ns{constructor(t,n,r,a){O(this,J);P(this,"parent");P(this,"is_pending",!1);P(this,"transform_error");O(this,Ze);O(this,fr,L?D:null);O(this,rt);O(this,mn);O(this,De);O(this,Je,null);O(this,Ue,null);O(this,Xe,null);O(this,It,null);O(this,bn,0);O(this,tn,0);O(this,Hn,!1);O(this,hr,new Set);O(this,dr,new Set);O(this,zt,null);O(this,Wr,ks(()=>($(this,zt,tr(h(this,bn))),()=>{$(this,zt,null)})));var o;$(this,Ze,t),$(this,rt,n),$(this,mn,s=>{var l=M;l.b=this,l.f|=ra,r(s)}),this.parent=M.b,this.transform_error=a??((o=this.parent)==null?void 0:o.transform_error)??(s=>s),$(this,De,or(()=>{if(L){const s=h(this,fr);cn();const l=s.data===Ei;if(s.data.startsWith(Si)){const u=JSON.parse(s.data.slice(Si.length));H(this,J,yl).call(this,u)}else l?H(this,J,wl).call(this):H(this,J,bl).call(this)}else H(this,J,ci).call(this)},Ls)),L&&$(this,Ze,D)}defer_effect(t){Di(t,h(this,hr),h(this,dr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!h(this,rt).pending}update_pending_count(t,n){H(this,J,ui).call(this,t,n),$(this,bn,h(this,bn)+t),!(!h(this,zt)||h(this,Hn))&&($(this,Hn,!0),_t(()=>{$(this,Hn,!1),h(this,zt)&&Mr(h(this,zt),h(this,bn))}))}get_effect_pending(){return h(this,Wr).call(this),i(h(this,zt))}error(t){if(!h(this,rt).onerror&&!h(this,rt).failed)throw t;C!=null&&C.is_fork?(h(this,Je)&&C.skip_effect(h(this,Je)),h(this,Ue)&&C.skip_effect(h(this,Ue)),h(this,Xe)&&C.skip_effect(h(this,Xe)),C.oncommit(()=>{H(this,J,fi).call(this,t)})):H(this,J,fi).call(this,t)}}Ze=new WeakMap,fr=new WeakMap,rt=new WeakMap,mn=new WeakMap,De=new WeakMap,Je=new WeakMap,Ue=new WeakMap,Xe=new WeakMap,It=new WeakMap,bn=new WeakMap,tn=new WeakMap,Hn=new WeakMap,hr=new WeakMap,dr=new WeakMap,zt=new WeakMap,Wr=new WeakMap,J=new WeakSet,bl=function(){try{$(this,Je,Tt(()=>h(this,mn).call(this,h(this,Ze))))}catch(t){this.error(t)}},yl=function(t){const n=h(this,rt).failed,{reset:r,invoke_onerror:a}=H(this,J,si).call(this,t);_t(a),n&&$(this,Xe,Tt(()=>{n(h(this,Ze),()=>t,()=>r)}))},si=function(t){var n=!1,r=!1;const a=()=>{if(n){Ql();return}n=!0,r&&Bl(),h(this,Xe)!==null&&lr(h(this,Xe),()=>{$(this,Xe,null)}),H(this,J,ea).call(this,()=>{H(this,J,ci).call(this)})};return{reset:a,invoke_onerror:()=>{var s,l;try{r=!0,(l=(s=h(this,rt)).onerror)==null||l.call(s,t,a),r=!1}catch(f){St(f,h(this,De)&&h(this,De).parent)}}}},wl=function(){const t=h(this,rt).pending;t&&(this.is_pending=!0,$(this,Ue,Tt(()=>t(h(this,Ze)))),_t(()=>{var n=$(this,It,document.createDocumentFragment()),r=xt(),a=!1;if(n.append(r),$(this,Je,H(this,J,ea).call(this,()=>{try{return Tt(()=>h(this,mn).call(this,r))}catch(o){try{this.error(o),a=!0}catch(s){St(s,h(this,De).parent)}return null}})),h(this,Je)===null){$(this,It,null),a&&H(this,J,Er).call(this,C);return}h(this,tn)===0&&(h(this,Ze).before(n),$(this,It,null),lr(h(this,Ue),()=>{$(this,Ue,null)}),H(this,J,Er).call(this,C))}))},ci=function(){try{if(this.is_pending=this.has_pending_snippet(),$(this,tn,0),$(this,bn,0),$(this,Je,Tt(()=>{h(this,mn).call(this,h(this,Ze))})),h(this,tn)>0){var t=$(this,It,document.createDocumentFragment());yo(h(this,Je),t);const n=h(this,rt).pending;$(this,Ue,Tt(()=>n(h(this,Ze))))}else H(this,J,Er).call(this,C)}catch(n){this.error(n)}},Er=function(t){this.is_pending=!1,t.transfer_effects(h(this,hr),h(this,dr))},ea=function(t){var n=M,r=F,a=Te;At(h(this,De)),tt(h(this,De)),Sn(h(this,De).ctx);try{return Jt.ensure(),t()}finally{At(n),tt(r),Sn(a)}},ui=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&H(r=this.parent,J,ui).call(r,t,n);return}$(this,tn,h(this,tn)+t),h(this,tn)===0&&(H(this,J,Er).call(this,n),h(this,Ue)&&lr(h(this,Ue),()=>{$(this,Ue,null)}),h(this,It)&&(h(this,Ze).before(h(this,It)),$(this,It,null)))},fi=function(t){h(this,Je)&&(Ae(h(this,Je)),$(this,Je,null)),h(this,Ue)&&(Ae(h(this,Ue)),$(this,Ue,null)),h(this,Xe)&&(Ae(h(this,Xe)),$(this,Xe,null)),L&&(Me(h(this,fr)),ca(),Me(ua()));let n=h(this,rt).failed;const r=a=>{const{reset:o,invoke_onerror:s}=H(this,J,si).call(this,a);s(),n&&$(this,Xe,H(this,J,ea).call(this,()=>{try{return Tt(()=>{var l=M;l.b=this,l.f|=ra,n(h(this,Ze),()=>a,()=>o)})}catch(l){return St(l,h(this,De).parent),null}}))};_t(()=>{var a;try{a=this.transform_error(t)}catch(o){St(o,h(this,De)&&h(this,De).parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(r,o=>St(o,h(this,De)&&h(this,De).parent)):r(a)})};function Rt(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[zn]??(e[zn]=e.nodeValue))&&(e[zn]=n,e.nodeValue=`${n}`)}function So(e,t){return Co(e,t)}function Ds(e,t){ha(),t.intro=t.intro??!1;const n=t.target,r=L,a=D;try{for(var o=Ve(n);o&&(o.nodeType!==qn||o.data!==la);)o=Et(o);if(!o)throw ln;kt(!0),Me(o);const s=Co(e,{...t,anchor:o});return kt(!1),s}catch(s){if(s instanceof Error&&s.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw s;return s!==ln&&console.warn("Failed to hydrate: ",s),t.recover===!1&&Hl(),ha(),es(n),kt(!1),So(e,t)}finally{kt(r),Me(a)}}const jr=new Map;function Co(e,{target:t,anchor:n,props:r={},events:a,context:o,intro:s=!0,transformError:l}){ha();var f=void 0,u=ys(()=>{var d=n??t.appendChild(xt());Ms(d,{pending:()=>{}},v=>{Ut({});var b=Te;if(o&&(b.c=o),a&&(r.$$events=a),L&&qe(v,null),f=e(v,r)||sa(),L&&(M.nodes.end=D,D===null||D.nodeType!==qn||D.data!==Ci))throw Zn(),ln;Ht()},l);var m=new Set,g=v=>{for(var b=0;b<v.length;b++){var y=v[b];if(!m.has(y)){m.add(y);var N=Os(y);for(const fe of[t,document]){var I=jr.get(fe);I===void 0&&(I=new Map,jr.set(fe,I));var K=I.get(y);K===void 0?(fe.addEventListener(y,Ta,{passive:N}),I.set(y,1)):I.set(y,K+1)}}}};return g(nn(_o)),Ca.add(g),()=>{var N;for(var v of m)for(const I of[t,document]){var b=jr.get(I),y=b.get(v);--y==0?(I.removeEventListener(v,Ta),b.delete(v),b.size===0&&jr.delete(I)):b.set(v,y)}Ca.delete(g),d!==n&&((N=d.parentNode)==null||N.removeChild(d))}});return Ia.set(f,u),f}let Ia=new WeakMap;function Us(e,t){const n=Ia.get(e);return n?(Ia.delete(e),n(t)):Promise.resolve()}class Br{constructor(t,n=!0){P(this,"anchor");O(this,gt,new Map);O(this,Kt,new Map);O(this,mt,new Map);O(this,yn,new Set);O(this,vr,!0);O(this,qr,t=>{if(h(this,gt).has(t)){var n=h(this,gt).get(t),r=h(this,Kt).get(n);if(r)mo(r),h(this,yn).delete(n);else{var a=h(this,mt).get(n);a&&(mo(a.effect),h(this,Kt).set(n,a.effect),h(this,mt).delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[o,s]of h(this,gt)){if(h(this,gt).delete(o),o===t)break;const l=h(this,mt).get(s);l&&(Ae(l.effect),h(this,mt).delete(s))}for(const[o,s]of h(this,Kt)){if(o===n||h(this,yn).has(o))continue;const l=()=>{if(Array.from(h(this,gt).values()).includes(o)){var u=document.createDocumentFragment();yo(s,u),u.append(xt()),h(this,mt).set(o,{effect:s,fragment:u})}else Ae(s);h(this,yn).delete(o),h(this,Kt).delete(o)};h(this,vr)||!r?(h(this,yn).add(o),lr(s,l,!1)):l()}}});O(this,Wa,t=>{h(this,gt).delete(t);const n=Array.from(h(this,gt).values());for(const[r,a]of h(this,mt))n.includes(r)||(Ae(a.effect),h(this,mt).delete(r))});this.anchor=t,$(this,vr,n)}ensure(t,n){var r=C;n&&!h(this,Kt).has(t)&&!h(this,mt).has(t)&&h(this,Kt).set(t,Tt(()=>n(this.anchor))),h(this,gt).set(r,t),L&&(this.anchor=D),h(this,qr).call(this,r)}}gt=new WeakMap,Kt=new WeakMap,mt=new WeakMap,yn=new WeakMap,vr=new WeakMap,qr=new WeakMap,Wa=new WeakMap;function Hs(e,t,...n){var r=new Br(e);or(()=>{const a=t()??null;r.ensure(a,a&&(o=>a(o,...n)))},qt)}function Oa(e){Te===null&&Ol(),Be(()=>{const t=ir(e);if(typeof t=="function")return t})}function _e(e,t,n=!1){var r;L&&(r=D,cn());var a=new Br(e),o=n?qt:0;function s(l,f){if(L){var u=Ri(r);if(l!==parseInt(u.substring(1))){var d=ua();Me(d),a.anchor=d,kt(!1),a.ensure(l,f),kt(!0);return}}a.ensure(l,f)}or(()=>{var l=!1;t((f,u=0)=>{l=!0,s(u,f)}),l||s(-1,null)},o)}const Fs=Symbol("NaN");function Vs(e,t,n){L&&cn();var r=new Br(e);or(()=>{var a=t();a!==a&&(a=Fs),r.ensure(a,n)})}function Ao(e,t,n=!1,r=!1,a=!1,o=!1){var s=e,l="";if(n){var f=e;L&&(s=Me(Ve(f)))}Re(()=>{var u=M;if(l===(l=t()??"")){L&&cn();return}if(n&&!L){u.nodes=null,f.innerHTML=l,l!==""&&qe(Ve(f),f.lastChild);return}if(u.nodes!==null&&(vo(u.nodes.start,u.nodes.end),u.nodes=null),l!==""){if(L){D.data;for(var d=cn(),m=d;d!==null&&(d.nodeType!==qn||d.data!=="");)m=d,d=Et(d);if(d===null)throw Zn(),ln;qe(D,m),s=Me(d);return}var g=r?Gl:a?Wl:void 0,v=da(r?"svg":a?"math":"template",g);v.innerHTML=l;var b=r||a?v:v.content;if(qe(Ve(b),b.lastChild),r||a)for(;Ve(b);)s.before(Ve(b));else s.before(b)}})}function js(e,t,n){var r;L&&(r=D,cn());var a=new Br(e);or(()=>{var o=t()??null;if(L){var s=Ri(r),l=s===la,f=o!==null;if(l!==f){var u=ua();Me(u),a.anchor=u,kt(!1),a.ensure(o,o&&(d=>n(d,o))),kt(!0);return}}a.ensure(o,o&&(d=>n(d,o)))},qt)}function Bs(e,t){var n=void 0,r;fo(()=>{n!==(n=t())&&(r&&(Ae(r),r=null),n&&(r=Tt(()=>{Ea(()=>n(e))})))})}function $o(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=$o(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function zs(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=$o(e))&&(r&&(r+=" "),r+=t);return r}function Ks(e){return typeof e=="object"?zs(e):e??""}const To=[...` 	
\r\f \v\uFEFF`];function Ys(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var o=a.length,s=0;(s=r.indexOf(a,s))>=0;){var l=s+o;(s===0||To.includes(r[s-1]))&&(l===r.length||To.includes(r[l]))?r=(s===0?"":r.substring(0,s))+r.substring(l+1):s=l}}return r===""?null:r}function Ro(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var o=e[a];o!=null&&o!==""&&(r+=" "+a+": "+o+n)}return r}function La(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Gs(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,s=0,l=!1,f=[];r&&f.push(...Object.keys(r).map(La)),a&&f.push(...Object.keys(a).map(La));var u=0,d=-1;const y=e.length;for(var m=0;m<y;m++){var g=e[m];if(l?g==="/"&&e[m-1]==="*"&&(l=!1):o?o===g&&(o=!1):g==="/"&&e[m+1]==="*"?l=!0:g==='"'||g==="'"?o=g:g==="("?s++:g===")"&&s--,!l&&o===!1&&s===0){if(g===":"&&d===-1)d=m;else if(g===";"||m===y-1){if(d!==-1){var v=La(e.substring(u,d).trim());if(!f.includes(v)){g!==";"&&m++;var b=e.substring(u,m).trim();n+=" "+b+";"}}u=m+1,d=-1}}}}return r&&(n+=Ro(r)),a&&(n+=Ro(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ws(e,t,n,r,a,o){var s=e[ia];if(L||s!==n||s===void 0){var l=Ys(n,r,o);(!L||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e[ia]=n}else if(o&&a!==o)for(var f in o){var u=!!o[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return o}function Ma(e,t={},n,r){for(var a in n){var o=n[a];t[a]!==o&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,r))}}function qs(e,t,n,r){var a=e[oa];if(L||a!==t){var o=Gs(t,r);(!L||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e[oa]=t}else r&&(Array.isArray(r)?(Ma(e,n==null?void 0:n[0],r[0]),Ma(e,n==null?void 0:n[1],r[1],"important")):Ma(e,n,r));return r}function Po(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Io(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Oo(e,!n||"__value"in e))}function Oo(e,t){var n=e.__defaultValue,r=e.multiple,a=r?n??[]:null;if(!(r&&!he(a))){var o=e.selectedIndex,s=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var f=Da(l);Po(l,r?a.includes(f):Ii(f,n))}if(t)if(s!==null)for(l of e.options){var u=s.has(l);l.selected!==u&&(l.selected=u)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function Na(e,t,n=!1){if(e.multiple){if(t==null)return;if(!he(t))return Xl();for(var r of e.options)r.selected=t.includes(Da(r));return}for(r of e.options){var a=Da(r);if(Ii(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Zs(e){var t=new MutationObserver(n=>{n.every(Js)||("__defaultValue"in e&&Oo(e,!1),"__value"in e&&Na(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Dr(()=>{t.disconnect()})}function Da(e){return"__value"in e?e.__value:e.value}function Js(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const sr=Symbol("class"),cr=Symbol("style"),Lo=Symbol("is custom element"),Mo=Symbol("is html"),Xs=Gn?"link":"LINK",No=Gn?"input":"INPUT",Qs=Gn?"option":"OPTION",Do=Gn?"select":"SELECT",ec=Gn?"progress":"PROGRESS";function Ua(e){if(L){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;G(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;G(e,"checked",null),e.checked=a}}};e[Kn]=n,_t(n),Vi()}}function tc(e,t){var n=Ha(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ec)||(e.value=t??"")}function G(e,t,n,r){var a=Ha(e);L&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Xs)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[Pl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ho(e).has(t)?e[t]=n:e.setAttribute(t,n))}function nc(e,t,n,r,a=!1,o=!1){L&&a&&e.nodeName===No&&("defaultValue"in n||"defaultChecked"in n||Ua(e));var s=Ha(e),l=s[Lo],f=!s[Mo];let u=L&&l;u&&kt(!1);var d=t||{},m=e.nodeName===Qs,g=e.nodeName===Do;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=Ks(n.class):n[sr]&&(n.class=null),n[cr]&&(n.style??(n.style=null));var b=Ho(e);if(e.nodeName===No&&"type"in n&&("value"in n||"__value"in n)){var y=n.type;(y!==d.type||y===void 0&&e.hasAttribute("type"))&&(d.type=y,G(e,"type",y))}for(const Y in n){let A=n[Y];if(m&&Y==="value"&&A==null){e.value=e.__value="",d[Y]=A;continue}if(Y==="class"){var N=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ws(e,N,A,r,t==null?void 0:t[sr],n[sr]),d[Y]=A,d[sr]=n[sr];continue}if(Y==="style"){qs(e,A,t==null?void 0:t[cr],n[cr]),d[Y]=A,d[cr]=n[cr];continue}var I=d[Y];if(!(A===I&&!(A===void 0&&e.hasAttribute(Y)))){d[Y]=A;var K=Y[0]+Y[1];if(K!=="$$")if(K==="on"){const ie={},Ie="$$"+Y;let V=Y.slice(2);var fe=Ts(V);if(As(V)&&(V=V.slice(0,-7),ie.capture=!0),!fe&&I){if(A!=null)continue;e.removeEventListener(V,d[Ie],ie),d[Ie]=null}if(fe)Hr(V,e,A),Fr([V]);else if(A!=null){let ke=function(it){d[Y].call(this,it)};d[Ie]=ko(V,e,ke,ie)}}else if(Y==="style")G(e,Y,A);else if(Y==="autofocus")is(e,!!A);else if(!l&&(Y==="__value"||Y==="value"&&A!=null))e.value=e.__value=A;else if(Y==="selected"&&m)Po(e,A);else{var z=Y;f||(z=Ps(z));var Pe=z==="defaultValue"||z==="defaultChecked";if(g&&z==="defaultValue")continue;if(A==null&&!l&&!Pe)if(s[Y]=null,z==="value"||z==="checked"){let ie=e;const Ie=t===void 0;if(z==="value"){let V=ie.defaultValue;ie.removeAttribute(z),ie.defaultValue=V,ie.value=ie.__value=Ie?V:null}else{let V=ie.defaultChecked;ie.removeAttribute(z),ie.defaultChecked=V,ie.checked=Ie?V:!1}}else e.removeAttribute(Y);else Pe||(l||typeof A!="string")&&b.has(z)?(e[z]=A,z in s&&(s[z]=pe)):typeof A!="function"&&G(e,z,A)}}}return u&&kt(!0),d}function zr(e,t,n=[],r=[],a=[],o,s=!1,l=!1){ji(a,n,r,f=>{var u=void 0,d={},m=e.nodeName===Do,g=!1;if(fo(()=>{var b=t(...f.map(i)),y=nc(e,u,b,o,s,l);if(g&&m){var N=e;"defaultValue"in b&&Io(N,b.defaultValue),"value"in b&&Na(N,b.value)}for(let K of Object.getOwnPropertySymbols(d))b[K]||Ae(d[K]);for(let K of Object.getOwnPropertySymbols(b)){var I=b[K];K.description===ql&&(!u||I!==u[K])&&(d[K]&&Ae(d[K]),d[K]=Tt(()=>Bs(e,()=>I))),y[K]=I}u=y}),m){var v=e;Ea(()=>{var b=u;"defaultValue"in b&&Io(v,b.defaultValue),Na(v,b.value,!0),Zs(v)})}g=!0})}function Ha(e){return e[Rr]??(e[Rr]={[Lo]:e.nodeName.includes("-"),[Mo]:e.namespaceURI===Ai})}var Uo=new Map;function Ho(e){var t=e.getAttribute("is")||e.nodeName,n=Uo.get(t);if(n)return n;Uo.set(t,n=new Set);for(var r,a=e,o=Element.prototype;o!==a;){r=Bn(a);for(var s in r)r[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);a=bi(a)}return n}function rc(e,t,n=t){var r=new WeakSet;os(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Fa(e)?Va(o):o,n(o),C!==null&&r.add(C),await dn(),o!==(o=t())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=o??"",l!==null){var u=e.value.length;s===l&&l===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=s,e.selectionEnd=Math.min(l,u))}}}),(L&&e.defaultValue!==e.value||ir(t)==null&&e.value)&&(n(Fa(e)?Va(e.value):e.value),C!==null&&r.add(C)),Ur(()=>{var a=t();if(e===document.activeElement){var o=C;if(r.has(o))return}Fa(e)&&a===Va(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Fa(e){var t=e.type;return t==="number"||t==="range"}function Va(e){return e===""?null:+e}function ja(e,t){return e===t||(e==null?void 0:e[En])===t}function Xt(e=sa(),t,n,r){var a=Te.r,o=M;return Ea(()=>{var s,l;return Ur(()=>{s=l,l=[],ir(()=>{ja(n(...l),e)||(t(e,...l),s&&ja(n(...s),e)&&t(null,...s))})}),()=>{let f=o;for(;f!==a&&f.parent!==null&&f.parent.f&Ar;)f=f.parent;const u=()=>{l&&ja(n(...l),e)&&t(null,...l)},d=f.teardown;f.teardown=()=>{u(),d==null||d()}}}),e}const ac={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.has(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function Kr(e,t,n){return new Proxy({props:e,exclude:t},ac)}function se(e,t,n,r){var a=r,o=!0,s=()=>(o&&(o=!1,a=r),a),l;l=e[t],l===void 0&&r!==void 0&&(l=s());var f;f=()=>{var g=e[t];return g===void 0?s():(o=!0,g)};var u=!1,d=ga(()=>(u=!1,f())),m=M;return(function(g,v){if(arguments.length>0){const b=v?i(d):g;return E(d,b),u=!0,a!==void 0&&(a=b),g}return Vt&&u||(m.f&Ge)!==0?d.v:i(d)})}function ic(e){return new oc(e)}class oc{constructor(t){O(this,Yt);O(this,at);var o;var n=new Map,r=(s,l)=>{var f=Xi(l,!1,!1);return n.set(s,f),f};const a=new Proxy({...t.props||{},$$events:{}},{get(s,l){return i(n.get(l)??r(l,Reflect.get(s,l)))},has(s,l){return l===Rl?!0:(i(n.get(l)??r(l,Reflect.get(s,l))),Reflect.has(s,l))},set(s,l,f){return E(n.get(l)??r(l,f),f),Reflect.set(s,l,f)}});$(this,at,(t.hydrate?Ds:So)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&ee(),$(this,Yt,a.$$events);for(const s of Object.keys(h(this,at)))s==="$set"||s==="$destroy"||s==="$on"||yt(this,s,{get(){return h(this,at)[s]},set(l){h(this,at)[s]=l},enumerable:!0});h(this,at).$set=s=>{Object.assign(a,s)},h(this,at).$destroy=()=>{Us(h(this,at))}}$set(t){h(this,at).$set(t)}$on(t,n){h(this,Yt)[t]=h(this,Yt)[t]||[];const r=(...a)=>n.call(this,...a);return h(this,Yt)[t].push(r),()=>{h(this,Yt)[t]=h(this,Yt)[t].filter(a=>a!==r)}}$destroy(){h(this,at).$destroy()}}Yt=new WeakMap,at=new WeakMap;let Fo=class{};typeof HTMLElement=="function"&&(Fo=class extends HTMLElement{constructor(t,n,r){super();P(this,"$$ctor");P(this,"$$s");P(this,"$$c");P(this,"$$cn",!1);P(this,"$$d",{});P(this,"$$r",!1);P(this,"$$p_d",{});P(this,"$$l",{});P(this,"$$l_u",new Map);P(this,"$$me");P(this,"$$shadowRoot",null);this.$$ctor=t,this.$$s=n,r&&(this.$$shadowRoot=this.attachShadow(r))}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const a=this.$$c.$on(t,n);this.$$l_u.set(n,a)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const a=this.$$l_u.get(n);a&&(a(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return o=>{const s=da("slot");a!=="default"&&(s.name=a),B(o,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=lc(this);for(const a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(const a of this.attributes){const o=this.$$g_p(a.name);o in this.$$d||(this.$$d[o]=Yr(o,a.value,this.$$p_d,"toProp"))}for(const a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=ic({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=bs(()=>{Ur(()=>{var a;this.$$r=!0;for(const o of Dt(this.$$c)){if(!((a=this.$$p_d[o])!=null&&a.reflect))continue;this.$$d[o]=this.$$c[o];const s=Yr(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1})});for(const a in this.$$l)for(const o of this.$$l[a]){const s=this.$$c.$on(a,o);this.$$l_u.set(o,s)}this.$$l={}}}attributeChangedCallback(t,n,r){var a;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Yr(t,r,this.$$p_d,"toProp"),(a=this.$$c)==null||a.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Dt(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function Yr(e,t,n,r){var o;const a=(o=n[e])==null?void 0:o.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function lc(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function Qt(e,t,n,r,a,o){let s=class extends Fo{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return Dt(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Dt(t).forEach(l=>{yt(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){var m;f=Yr(l,f,t),this.$$d[l]=f;var u=this.$$c;if(u){var d=(m=ae(u,l))==null?void 0:m.get;d?u[l]=f:u.$set({[l]:f})}}})}),r.forEach(l=>{yt(s.prototype,l,{get(){var f;return(f=this.$$c)==null?void 0:f[l]}})}),e.element=s,s}var sc=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),cc=ue('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function Vo(e,t){Ut(t,!0);let n=se(t,"loading"),r=Kr(t,sc),a;function o(){a==null||a.click()}var s={get loading(){return n()},set loading(d){n(d),ee()}},l=cc(),f=Ee(l);zr(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Xt(f,d=>a=d,()=>a);var u=le(f,2);return ca(2),ge(l),Re(()=>G(l,"data-loading",n())),Hr("click",u,o),B(e,l),Ht(s)}Fr(["click"]),Qt(Vo,{loading:{}},[],[],{mode:"open"});var uc=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),fc=ue('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function jo(e,t){Ut(t,!0);let n=se(t,"loading"),r=Kr(t,uc);var a={get loading(){return n()},set loading(l){n(l),ee()}},o=fc(),s=Ee(o);return zr(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),ca(2),ge(o),Re(()=>G(o,"data-loading",n())),B(e,o),Ht(a)}Qt(jo,{loading:{}},[],[],{mode:"open"});var hc=ue('<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function Ba(e,t){Ut(t,!0);let n=se(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(l){n(l),ee()}},o=hc(),s=Ee(o);return G(s,"href",r),ge(o),Re(()=>G(s,"aria-label",n().ariaLinkLabel)),B(e,o),Ht(a)}Qt(Ba,{strings:{}},[],[],{mode:"open"});var dc=ue('<div class="altcha-footer"><p></p> <!></div>');function za(e,t){Ut(t,!0);let n=se(t,"logo"),r=se(t,"strings");var a={get logo(){return n()},set logo(u){n(u),ee()},get strings(){return r()},set strings(u){r(u),ee()}},o=dc(),s=Ee(o);Ao(s,()=>r().footer,!0),ge(s);var l=le(s,2);{var f=u=>{Ba(u,{get strings(){return r()}})};_e(l,u=>{n()&&u(f)})}return ge(o),B(e,o),Ht(a)}Qt(za,{logo:{},strings:{}},[],[],{mode:"open"});var vc=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),pc=ue('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function Bo(e,t){Ut(t,!0);let n=se(t,"loading"),r=Kr(t,vc),a;function o(){a==null||a.click()}var s={get loading(){return n()},set loading(d){n(d),ee()}},l=pc(),f=Ee(l);zr(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Xt(f,d=>a=d,()=>a);var u=le(f,2);return ge(l),Re(()=>G(l,"data-loading",n())),Hr("click",u,o),B(e,l),Ht(s)}Fr(["click"]),Qt(Bo,{loading:{}},[],[],{mode:"open"});var $e=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))($e||{}),zo=(e=>(e.SHA_256="SHA-256",e.SHA_384="SHA-384",e.SHA_512="SHA-512",e))(zo||{}),W=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(W||{}),gc=ue('<div class="altcha-code-challenge-title"> </div>'),mc=ue('<div class="altcha-spinner"></div>'),bc=Pa('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),yc=Pa('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),wc=Pa('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),_c=ue('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),kc=ue('<audio hidden="" autoplay=""></audio>'),xc=ue('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function Ko(e,t){Ut(t,!0);let n=se(t,"audioUrl"),r=se(t,"codeChallenge"),a=se(t,"config"),o=se(t,"imageUrl"),s=se(t,"onCancel"),l=se(t,"onReload"),f=se(t,"onSubmit"),u=se(t,"strings"),d=j(void 0),m=j(void 0),g=j(void 0),v=j(!1),b=j(""),y=j(!1);Oa(()=>(a().disableAutoFocus||dn().then(()=>{var x;(x=i(g))==null||x.focus()}),()=>{i(m)&&(i(m).pause(),E(m,void 0))}));function N(){E(d,$e.PAUSED,!0)}function I(x){E(d,$e.ERROR,!0)}function K(){E(d,$e.READY,!0)}function fe(){E(d,$e.LOADING,!0)}function z(){E(d,$e.PLAYING,!0)}function Pe(){E(d,$e.PAUSED,!0)}function Y(x){var q;x.code==="Space"?(x.preventDefault(),x.stopPropagation(),Ie()):x.code==="Escape"&&(x.preventDefault(),x.stopPropagation(),(q=s())==null||q())}function A(x){var q;x.preventDefault(),x.stopPropagation(),(q=f())==null||q(i(b))}function ie(x){x.play().catch(q=>{if(!(q instanceof DOMException&&q.name==="AbortError"))throw q})}function Ie(){i(m)?i(d)===$e.LOADING||(i(m).paused?(n()&&i(m).src!==n()&&(i(m).src=n()),i(m).currentTime=0,ie(i(m))):i(m).pause()):(E(y,!0),requestAnimationFrame(()=>{i(m)&&n()&&(i(m).src=n(),ie(i(m)))}))}var V={get audioUrl(){return n()},set audioUrl(x){n(x),ee()},get codeChallenge(){return r()},set codeChallenge(x){r(x),ee()},get config(){return a()},set config(x){a(x),ee()},get imageUrl(){return o()},set imageUrl(x){o(x),ee()},get onCancel(){return s()},set onCancel(x){s(x),ee()},get onReload(){return l()},set onReload(x){l(x),ee()},get onSubmit(){return f()},set onSubmit(x){f(x),ee()},get strings(){return u()},set strings(x){u(x),ee()}},ke=xc(),it=Ee(ke),Ke=Ee(it);{var ot=x=>{var q=gc(),_n=An(q,!0);Re(()=>Rt(_n,u().verificationRequired)),B(x,q)};_e(Ke,x=>{a().codeChallengeDisplay!=="standard"&&x(ot)})}var ce=le(Ke,2),Gt=An(ce,!0),S=le(ce,2),Se=le(S,2),te=Ee(Se);Ua(te),te.disabled=i(v),Xt(te,x=>E(g,x),()=>i(g));var w=le(te,2);{var pr=x=>{var q=_c(),_n=Ee(q);{var wr=He=>{var Lt=mc();B(He,Lt)},qa=He=>{var Lt=bc();B(He,Lt)},Za=He=>{var Lt=yc();B(He,Lt)},Ja=He=>{var Lt=wc();B(He,Lt)};_e(_n,He=>{i(d)===$e.LOADING?He(wr):i(d)===$e.ERROR?He(qa,1):i(d)===$e.PLAYING?He(Za,2):He(Ja,-1)})}ge(q),Re(()=>{G(q,"title",u().getAudioChallenge),q.disabled=i(d)===$e.LOADING||i(d)===$e.ERROR,G(q,"aria-label",i(d)===$e.LOADING?u().loading:u().getAudioChallenge)}),we("click",q,()=>Ie(),!0),B(x,q)};_e(w,x=>{r().audio&&x(pr)})}var gr=le(w,2);ge(Se);var Ot=le(Se,2),mr=Ee(Ot),Zr=An(mr,!0),wn=le(mr,2),br=An(wn,!0);ge(Ot),ge(it);var yr=le(it,2);{var Ye=x=>{var q=kc();Xt(q,_n=>E(m,_n),()=>i(m)),we("error",q,I),we("loadstart",q,fe),we("canplay",q,K),we("pause",q,Pe),we("playing",q,z),we("ended",q,N),B(x,q)};_e(yr,x=>{i(y)&&x(Ye)})}return ge(ke),Re(()=>{Rt(Gt,u().enterCodeFromImage),G(S,"src",o()),G(te,"minlength",r().length||1),G(te,"maxlength",r().length),G(te,"placeholder",u().enterCode),G(te,"aria-label",i(d)===$e.LOADING?u().loading:i(d)===$e.PLAYING?"":u().enterCodeAria),G(te,"aria-live",i(d)?"assertive":"polite"),G(te,"aria-busy",i(d)===$e.LOADING),G(gr,"title",u().reload),G(gr,"aria-label",u().reload),G(mr,"aria-label",u().verify),Rt(Zr,u().verify),G(wn,"aria-label",u().cancel),Rt(br,u().cancel)}),we("submit",it,A,!0),Hr("keydown",te,Y),rc(te,()=>i(b),x=>E(b,x)),we("click",gr,()=>{var x;return(x=l())==null?void 0:x()},!0),we("click",wn,()=>{var x;return(x=s())==null?void 0:x()},!0),B(e,ke),Ht(V)}Fr(["keydown"]),Qt(Ko,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var Ec=new Set(["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),Sc=ue('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),Cc=ue('<div class="altcha-popover-arrow"></div>'),Ac=ue('<div role="button" class="altcha-popover-close">&times;</div>'),$c=ue('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function Ka(e,t){Ut(t,!0);let n=se(t,"anchor"),r=se(t,"children"),a=se(t,"display",7,"standard"),o=se(t,"backdrop",7,!1),s=se(t,"onClickOutside"),l=se(t,"onClickOutsideDelay",7,600),f=se(t,"onClose"),u=se(t,"placement",7,"auto"),d=se(t,"updateUISignal"),m=se(t,"variant",7,"neutral"),g=Kr(t,Ec),v=j(void 0),b=j(void 0),y=j(!1),N=j(0);Be(()=>{u()!=="auto"&&E(y,u()==="top")}),Be(()=>{d()&&Pe()}),Oa(()=>{const S=a()==="bottomsheet"||a()==="overlay";return S&&(i(b)&&document.body.append(i(b)),i(v)&&document.body.append(i(v))),Pe(),dn().then(()=>{E(N,Date.now(),!0)}),()=>{S&&(i(b)&&document.body.removeChild(i(b)),i(v)&&document.body.removeChild(i(v)))}});function I(){var S;(S=f())==null||S()}function K(S){var te,w;const Se=S.target;!((te=i(v))!=null&&te.contains(Se))&&(!l()||i(N)+l()<Date.now())&&((w=s())==null||w())}function fe(){Pe()}function z(){Pe()}function Pe(){if(n()&&u()==="auto"&&i(v)){const S=n().getBoundingClientRect(),te=document.documentElement.clientHeight-(S.top+S.height)<i(v).clientHeight;i(y)!==te&&E(y,te)}}var Y={get anchor(){return n()},set anchor(S){n(S),ee()},get children(){return r()},set children(S){r(S),ee()},get display(){return a()},set display(S="standard"){a(S),ee()},get backdrop(){return o()},set backdrop(S=!1){o(S),ee()},get onClickOutside(){return s()},set onClickOutside(S){s(S),ee()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(S=600){l(S),ee()},get onClose(){return f()},set onClose(S){f(S),ee()},get placement(){return u()},set placement(S="auto"){u(S),ee()},get updateUISignal(){return d()},set updateUISignal(S){d(S),ee()},get variant(){return m()},set variant(S="neutral"){m(S),ee()}},A=$c();we("click",un,K,!0),we("resize",un,fe),we("scroll",un,z);var ie=Cn(A);{var Ie=S=>{var Se=Sc();Xt(Se,te=>E(b,te),()=>i(b)),B(S,Se)};_e(ie,S=>{o()&&S(Ie)})}var V=le(ie,2);zr(V,()=>({...g,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":m(),"data-top":i(y),"data-display":a()}));var ke=Ee(V);{var it=S=>{var Se=Cc();B(S,Se)};_e(ke,S=>{a()==="standard"&&S(it)})}var Ke=le(ke,2);{var ot=S=>{var Se=Ac();we("click",Se,I,!0),B(S,Se)};_e(Ke,S=>{a()!=="standard"&&S(ot)})}var ce=le(Ke,2),Gt=Ee(ce);return Hs(Gt,()=>r()??Wt),ge(ce),ge(V),Xt(V,S=>E(v,S),()=>i(v)),B(e,A),Ht(Y)}Qt(Ka,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function Tc(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function Rc(e,t="altcha-css",n){var r,a;if(typeof document<"u"&&document&&!document.getElementById(t)){const o=document.createElement("style");o.id=t,o.textContent=e;const s=((r=document.currentScript)==null?void 0:r.nonce)??((a=document.querySelector('meta[name="csp-nonce"]'))==null?void 0:a.content);s&&(o.nonce=s),document.head.appendChild(o)}}Object.values(zo);async function Yo(e){var g;const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:o=v=>v>1?Math.floor(v/2):0,counterMode:s,timeout:l}=e,f=Math.min(16,Math.max(1,n)),u=[],d=()=>{for(const v of u)v.terminate()};for(let v=0;v<f;v++)u.push(await a(t.parameters.algorithm));let m=null;try{m=await Promise.race(u.map((v,b)=>(r.signal.addEventListener("abort",()=>{v.postMessage({type:"abort"})}),new Promise((y,N)=>{v.addEventListener("error",I=>{N(I)}),v.addEventListener("message",I=>{if(I.data){for(const K of u)K!==v&&K.postMessage({type:"abort"});if(I.data.error)return N(new Error(I.data.error))}y(I.data)}),v.postMessage({challenge:t,counterMode:s,counterStart:b,counterStep:f,timeout:l,type:"work"})}))))}catch(v){if(v instanceof Error&&!!((g=v==null?void 0:v.message)!=null&&g.includes("Out of memory"))&&o){d();const y=o(f);if(y)return Yo({...e,challenge:t,controller:r,concurrency:y,createWorker:a})}throw v}finally{d()}return r.signal.aborted?null:m||null}class Pc{constructor(t={}){P(this,"TAG_CODES",{INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10});P(this,"maxSamples");P(this,"sampleInterval");P(this,"target");P(this,"focusStartTime",0);P(this,"focusInteraction",0);P(this,"focusInteractionTimer",null);P(this,"lastPointerSample",0);P(this,"lastTouchSample",0);P(this,"lastScrollSample",0);P(this,"pendingPointer",null);P(this,"pendingTouch",null);P(this,"focus",[]);P(this,"pointer",[]);P(this,"scroll",[]);P(this,"touch",[]);P(this,"onFocus",t=>{if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)});P(this,"onInteraction",t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)});P(this,"onPointer",t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))});P(this,"onScroll",()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))});P(this,"onTouchMove",t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))});const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}}var Ic=ue('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),Oc=ue('<div class="altcha-overlay-content"></div>'),Lc=ue('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),Mc=ue('<div class="altcha-floating-arrow"></div>'),Nc=ue('<input type="hidden"/>'),Dc=ue('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Go=ue('<div class="altcha-error"> </div>'),Uc=ue("<!> <!>",1),Hc=ue('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function Fc(e,t){Ut(t,!0);const n=()=>Hi(d,"$altchaDefaults",a),r=()=>Hi(b,"$altchaI18nStore",a),[a,o]=as(),s='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:d}=globalThis.$altcha.defaults,m=navigator.hardwareConcurrency||2,g=navigator.deviceMemory||0,v=g&&g<=4?Math.min(4,m):m,b=globalThis.$altcha.i18n.store,y=t.$$host,N=(c,p)=>{dn().then(()=>{y==null||y.dispatchEvent(new CustomEvent(c,{detail:p}))})};let I=null,K=j(Ft(new URL(location.origin))),fe=j(!1),z=j(null),Pe=j(null),Y=j(null),A=j(Ft(W.UNVERIFIED)),ie=j(void 0),Ie=j(void 0),V=j(null),ke=j(void 0),it=j(null),Ke=j(null),ot=j(null),ce=j(null),Gt=j(Ft([])),S=j(0),Se=j(Ft({})),te=j(!0);const w=Ne(()=>({fetch:(c,p)=>fetch(c,p),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:v,...n(),...i(Se)})),pr=Ne(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),gr=Ne(()=>Bc(i(w).type)),Ot=Ne(()=>i(w).auto),mr=Ne(()=>i(A)===W.VERIFYING),Zr=Ne(()=>!i(w).hideFooter),wn=Ne(()=>!i(w).hideLogo&&i(w).display!=="bar"),br=Ne(()=>zc(r(),[i(w).language,document.documentElement.lang,...navigator.languages])),yr=Ne(()=>f.includes(i(br).language)?"rtl":void 0),Ye=Ne(()=>({...i(br).strings})),x=Ne(()=>{var c,p,k;return(p=(c=i(z))==null?void 0:c.audio)!=null&&p.match(/^(https?:)?\//)?Jr(i(z).audio,i(K),{language:i(w).audioChallengeLanguage||i(br).language}).toString():(k=i(z))==null?void 0:k.audio}),q=Ne(()=>{var c,p,k;return(p=(c=i(z))==null?void 0:c.image)!=null&&p.match(/^(https?:)?\//)?Jr(i(z).image,i(K)):(k=i(z))==null?void 0:k.image});Be(()=>{_r({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Be(()=>{t.theme?y==null||y.setAttribute("theme",t.theme):y==null||y.removeAttribute("theme")}),Be(()=>{if(t.configuration)try{_r(JSON.parse(t.configuration))}catch{ne("unable to parse the `configuration` attribute (JSON expected)")}}),Be(()=>{i(Y)!==i(w).display&&Xr(i(w).display)}),Be(()=>{i(fe)&&i(A)===W.VERIFYING&&E(fe,!1)}),Be(()=>{!i(fe)&&i(A)===W.VERIFIED&&E(fe,!0)}),Be(()=>{if(!i(fe)){const c=Xa();c&&c.checked&&(c.checked=!1)}}),Be(()=>{var c;i(A)===W.VERIFIED&&((c=Xa())==null||c.setCustomValidity(""))}),Be(()=>{if(i(Ot)==="onload"){const c=setTimeout(()=>{Fn()},1);return()=>{c&&clearTimeout(c)}}}),Be(()=>{i(Ke)&&ne("error:",i(Ke))}),Be(()=>{i(ce)&&i(w).setCookie&&au(i(ce),i(w).setCookie)}),Oa(()=>{var c,p,k,_;return ne("mounted","3.3.0"),y&&globalThis.$altcha.instances.add(y),E(V,(c=i(ke))==null?void 0:c.closest("form"),!0),(p=i(V))==null||p.addEventListener("reset",nl),(k=i(V))==null||k.addEventListener("submit",rl,{capture:!0}),(_=i(V))==null||_.addEventListener("focusin",tl),_n(),i(w).humanInteractionSignature&&(ne("human interaction signature enabled"),I=new Pc),N("load"),u||ne("secure context (HTTPS) required"),()=>{var R,T,U;qa(),y&&globalThis.$altcha.instances.delete(y),i(ot)&&clearTimeout(i(ot)),(R=i(V))==null||R.removeEventListener("reset",nl),(T=i(V))==null||T.removeEventListener("submit",rl,{capture:!0}),(U=i(V))==null||U.removeEventListener("focusin",tl),I==null||I.destroy()}});function _n(){E(Gt,[...globalThis.$altcha.plugins].map(c=>new c(y)),!0),ne("activating plugins",i(Gt).map(c=>c.constructor.name));for(const c of i(Gt))c.activate()}async function wr(c,...p){let k;for(const _ of i(Gt))k=await _[c].call(_,...p);return k}function qa(){for(const c of i(Gt))c.destroy()}function Za(c){const[p,k]=c.salt.split("?"),_={};if(k)try{Object.assign(_,Object.fromEntries(new URLSearchParams(k).entries()))}catch{}const R={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:_,expiresAt:_!=null&&_.expires?parseInt(_.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:Tc(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(R,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),R}function Ja(c,p){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:p.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:p.time||0}}async function He(c){await new Promise(p=>setTimeout(p,c))}async function Lt(c=i(w).challenge,p){const k=await wr("onFetchChallenge",c);let _=null;if(k!==void 0)return k;if(typeof c=="string")if(c.startsWith("{")){ne("parsing JSON challenge");try{_=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else{ne("fetching challenge from",(p==null?void 0:p.method)||"GET",c),E(K,new URL(c,location.origin),!0);const R=await i(w).fetch(c,{credentials:i(w).credentials||void 0,...p});await il(R);const T=R.headers.get("x-altcha-config");T&&tu(T);const U=await R.json();if(U&&"his"in U&&U.his){if(ne("requested HIS"),!I)throw new Error("Server requested HIS data but collector is disabled.");return Lt(Jr(U.his.url,i(K)),{body:JSON.stringify({his:I.export()}),headers:{"content-type":"application/json"},method:"POST"})}U&&"hisResult"in U&&U.hisResult&&ne("HIS result",U.hisResult),_=U}else if(c&&typeof c=="object")try{_=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(Vc(_)&&(_=Za(_)),!jc(_))throw new Error("Challenge validation failed.");return _}function Vc(c){return typeof c=="object"&&"challenge"in c}function jc(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function Xa(){return document.getElementById(i(pr))}function Bc(c){switch(c){case"checkbox":return Vo;case"switch":return Bo;case"native":default:return jo}}function zc(c,p){const k=Object.keys(c).map(R=>R.toLowerCase());let _=p.reduce((R,T)=>(T=T.toLowerCase(),R||(c[T]?T:null)||k.find(U=>T.split("-")[0]===U.split("-")[0])||null),null);return c[_||""]||(_="en"),{language:_,strings:c[_]}}function Kc(c){switch(c){case"bar":return i(w).barPlacement||"bottom";case"floating":return i(w).floatingPlacement||"auto";default:return}}function Yc(c){var k;return[...((k=i(V))==null?void 0:k.querySelectorAll(s))||[]].reduce((_,R)=>{const T=R.name,U=R.value;return T&&U&&(_[T]=/\n/.test(U)?U.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):U),_},{})}function Gc(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Jr(c,p,k){const _=new URL(c,p);if(_.search||(_.search=p.search),k)for(const R in k)k[R]!==void 0&&k[R]!==null&&_.searchParams.set(R,k[R]);return _.toString()}function Wc(c){!i(fe)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,i(A)!==W.VERIFYING&&Fn()):c.currentTarget.checked||(c.preventDefault(),lt())}function qc(c){i(A)===W.VERIFYING?c.currentTarget.setCustomValidity(i(Ye).waitAlert):i(w).validationMessage&&c.currentTarget.setCustomValidity(i(w).validationMessage)}function Zc(){Xr(i(w).display),lt()}function Jc(){Qr()}function Xc(c){const p=c.target;i(w).display==="floating"&&p&&!(y!=null&&y.contains(p))&&!p.hasAttribute("data-backdrop")&&!p.closest("[data-popover]")&&i(A)!==W.VERIFIED&&!i(w).floatingPersist&&Qa()}function tl(c){i(Ot)==="onfocus"&&i(A)===W.UNVERIFIED&&Fn()}function nl(){Xr(i(w).display),lt()}function rl(c){const p=c.target;(p==null?void 0:p.getAttribute("data-code-challenge"))!=="true"&&i(Ot)==="onsubmit"&&i(A)===W.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),E(it,c.submitter,!0),ei(),Fn().then(k=>{k&&!i(z)&&dn().then(()=>{al(i(it))})}))}function Qc(c){c.persisted&&(Xr(i(w).display),lt())}function eu(){Qr()}function tu(c){var p,k;try{const _=JSON.parse(c);_&&typeof _=="object"&&_r({serverVerificationFields:(p=_==null?void 0:_.sentinel)==null?void 0:p.fields,serverVerificationTimeZone:(k=_==null?void 0:_.sentinel)==null?void 0:k.timeZone,verifyUrl:_.verifyurl,..._})}catch(_){ne("unable to configure from x-altcha-config header",_)}}function nu(c=20){var Le;if(!i(ke))return;const p=i(w).floatingPlacement;if(!i(Ie)&&(E(Ie,(i(w).floatingAnchor instanceof HTMLElement?i(w).floatingAnchor:i(w).floatingAnchor?document.querySelector(i(w).floatingAnchor):(Le=i(V))==null?void 0:Le.querySelector(l))||i(V),!0),!i(Ie))){ne("unable to find floating anchor element");return}const k=parseInt(i(w).floatingOffset,10)||12,_=i(Ie).getBoundingClientRect(),R=i(ke).getBoundingClientRect(),T=document.documentElement.clientHeight,U=document.documentElement.clientWidth,Oe=!p||p==="auto"?_.bottom+R.height+k+c>T:p==="top",oe=Math.max(c,Math.min(U-c-R.width,_.left+_.width/2-R.width/2));if(i(ke).style.setProperty("--altcha-floating-left",`${oe}px`),i(ke).style.setProperty("--altcha-floating-top",Oe?`${_.top-(R.height+k)}px`:`${_.bottom+k}px`),i(ke).setAttribute("data-floating-position",Oe?"top":"bottom"),i(ie)){const Nt=i(ie).getBoundingClientRect();i(ie).style.left=_.left-oe+_.width/2-Nt.width/2+"px"}}async function ru(c,p){const k=await wr("onRequestServerVerification",c,p);if(k!==void 0)return k;if(ne("requesting server verification from",i(w).verifyUrl),!i(w).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const _=await i(w).fetch(Jr(i(w).verifyUrl,i(K)),{body:JSON.stringify({code:p,fields:i(w).serverVerificationFields?Yc():void 0,payload:c,timeZone:i(w).serverVerificationTimeZone?Gc():void 0}),credentials:i(w).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await il(_);const R=await _.json();return R&&typeof R=="object"&&"payload"in R&&R.payload&&N("serververification",R),R}function al(c){var p;i(V)&&"requestSubmit"in i(V)?i(V).requestSubmit(c):(p=i(V))!=null&&p.reportValidity()&&(c?c.click():i(V).submit())}function au(c,p={}){const{domain:k,name:_=i(w).name,maxAge:R,path:T,sameSite:U,secure:Oe}=p;let oe=`${encodeURIComponent(_)}=${encodeURIComponent(c)}`;k&&(oe+=`; Domain=${k}`),R!=null&&(oe+=`; Max-Age=${R}`),T&&(oe+=`; Path=${T}`),U&&(oe+=`; SameSite=${U}`),Oe&&(oe+="; Secure"),document.cookie=oe}function Xr(c){switch(c){case"bar":case"floating":case"overlay":Qa(),(!i(Ot)||i(Ot)==="off")&&(i(Se).auto="onsubmit");break;case"standard":ei()}i(Y)!==c&&E(Y,c,!0)}function iu(c){i(ot)&&clearTimeout(i(ot));const p=()=>{i(A)!==W.UNVERIFIED?(E(fe,!1),st(W.EXPIRED)):lt(),N("expired")},k=c*1e3-Date.now();k>=1?E(ot,setTimeout(p,k),!0):p()}async function il(c){var k;if(c.status>=400){if((k=c.headers.get("content-type"))!=null&&k.includes("/json")){let _;try{_=await c.json()}catch{}if(_&&"error"in _)throw new Error(`Server responded with ${c.status} - ${_.error}`)}throw new Error(`Server responded with ${c.status}.`)}const p=c.headers.get("content-type");if(!p||!p.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${p}.`)}async function ol(c){var k;if(!i(ce)){st(W.ERROR,"Cannot verify code challenge without PoW payload.");return}st(W.VERIFYING);let p=null;if(i(w).verifyUrl)p=await ru(i(ce),c);else if(i(w).verifyFunction)p=await i(w).verifyFunction(i(ce),c);else{st(W.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}p!=null&&p.payload&&(E(ce,p.payload,!0),ne("server payload",i(ce))),(p==null?void 0:p.verified)===!0?(ne("verified"),st(W.VERIFIED),N("verified",{payload:i(ce)}),i(Ot)==="onsubmit"&&dn().then(()=>{al(i(it))})):st(W.ERROR,(p==null?void 0:p.reason)||"Verification failed."),i(w).disableAutoFocus||(k=Xa())==null||k.focus()}function _r(c){Object.assign(i(Se),{...Object.fromEntries(Object.entries(c).filter(([p,k])=>k!==void 0))})}function ou(){return{...i(w)}}function lu(){return i(A)}function Qa(){E(te,!1)}function ne(...c){(i(w).debug||c.some(p=>p instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${i(w).name}]`,...c)}function lt(c=W.UNVERIFIED,p=null){E(fe,!1),E(Ke,p,!0),E(ce,null),i(Pe)&&i(Pe).abort(),i(ot)&&(clearTimeout(i(ot)),E(ot,null)),st(c)}function st(c,p=null){E(A,c,!0),E(Ke,p,!0),N("statechange",{payload:i(ce),state:i(A)})}function ei(){E(te,!0),dn().then(()=>{Qr()})}function Qr(){switch(i(w).display){case"floating":return nu()}E(S,i(S)+1)}async function Fn(c={}){var Le,Nt;const{concurrency:p=Math.max(1,i(w).workers),controller:k=new AbortController,minDuration:_=i(w).minDuration}=c,R=performance.now();let T=null,U=null,Oe=!1;const oe=await wr("onVerify",c);if(oe!==void 0)return oe;lt(W.VERIFYING),E(Pe,k,!0);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(i(w).mockError)throw new Error("Mock error.");if(i(w).test)return ne("running test mode with null challenge"),await He(Math.max(0,_-(performance.now()-R))),(Le=i(Pe))!=null&&Le.signal.aborted?(lt(),null):(E(ce,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),ne("verified"),st(W.VERIFIED),N("verified",{payload:i(ce)}),{payload:i(ce)});if(T=await Lt(),!T)throw new Error("Failed to fetch challenge.");ne("challenge",T),"configuration"in T&&(ne("re-configuring from challenge",T.configuration),_r(T.configuration)),T.parameters.expiresAt&&iu(T.parameters.expiresAt),Oe="_version"in T&&T._version===1;const bt=globalThis.$altcha.algorithms.get(T.parameters.algorithm);if(!bt)throw new Error(`Unsupported algorithm ${T.parameters.algorithm}.`);if(U=await Yo({challenge:T,concurrency:p,controller:k,createWorker:bt,counterMode:Oe?"string":"uint32",onOutOfMemory:dl=>{if(ne("out of memory error received"),N("outofmemory"),i(w).retryOnOutOfMemoryError&&dl>1){const vl=Math.floor(dl/2);return ne(`retrying with ${vl} workers...`),vl}},timeout:i(w).timeout}),(Nt=i(Pe))!=null&&Nt.signal.aborted)return lt(),null;if(!U)throw new Error("Failed to find solution.");ne("solution",U),await He(Math.max(0,_-(performance.now()-R))),E(z,T.codeChallenge||i(w).codeChallenge||null,!0),Oe?E(ce,btoa(JSON.stringify(Ja(T,U))),!0):E(ce,btoa(JSON.stringify({challenge:{parameters:T.parameters,signature:T.signature},solution:U})),!0),i(z)?(ne("requesting code verification"),st(W.CODE),N("codechallenge",{codeChallenge:i(z)})):i(w).verifyUrl?await ol():(ne("verified"),st(W.VERIFIED),N("verified",{payload:i(ce)}))}catch(bt){return ne("verification failed",bt),st(W.ERROR,String(bt)),null}finally{E(Pe,null)}return{challenge:T,payload:i(ce),solution:U}}var su={configure:_r,getConfiguration:ou,getState:lu,hide:Qa,log:ne,reset:lt,setState:st,show:ei,updateUI:Qr,verify:Fn},ll=Hc();we("scroll",fa,Jc),we("click",fa,Xc),we("pageshow",un,Qc),we("resize",un,eu);var sl=Cn(ll);{var cu=c=>{var p=Ic();B(c,p)};_e(sl,c=>{i(w).display==="overlay"&&i(te)&&c(cu)})}var Mt=le(sl,2),cl=Ee(Mt);{var uu=c=>{var p=Lc(),k=Cn(p),_=le(k,2);{var R=T=>{var U=Oc();Ao(U,()=>{var Oe;return(Oe=document.querySelector(i(w).overlayContent))==null?void 0:Oe.innerHTML},!0),ge(U),B(T,U)};_e(_,T=>{i(w).overlayContent&&T(R)})}we("click",k,Zc,!0),B(c,p)};_e(cl,c=>{i(w).display==="overlay"&&i(te)&&c(uu)})}var ti=le(cl,2),ni=Ee(ti),ri=Ee(ni),ul=Ee(ri);{let c=Ne(()=>i(w).display==="standard"&&i(Ot)!=="onsubmit"||i(A)===W.VERIFYING);js(ul,()=>i(gr),(p,k)=>{k(p,{get id(){return i(pr)},name:"",get required(){return i(c)},get loading(){return i(mr)},get checked(){return i(fe)},onchange:Wc,oninvalid:qc})})}var ai=le(ul,2),fu=Ee(ai);{var hu=c=>{var p=Vr();Re(()=>Rt(p,i(Ye).verificationRequired)),B(c,p)},du=c=>{var p=Vr();Re(()=>Rt(p,i(Ye).verifying)),B(c,p)},vu=c=>{var p=Vr();Re(()=>Rt(p,i(Ye).verified)),B(c,p)},pu=c=>{var p=Vr();Re(()=>Rt(p,i(Ye).label)),B(c,p)};_e(fu,c=>{i(A)===W.CODE&&i(z)?c(hu):i(A)===W.VERIFYING?c(du,1):i(A)===W.VERIFIED?c(vu,2):c(pu,-1)})}ge(ai),ge(ri);var gu=le(ri,2);{var mu=c=>{Ba(c,{get strings(){return i(Ye)}})};_e(gu,c=>{i(wn)&&c(mu)})}ge(ni);var fl=le(ni,2);{var bu=c=>{{let p=Ne(()=>i(w).display==="bar"&&i(wn));za(c,{get logo(){return i(p)},get strings(){return i(Ye)}})}};_e(fl,c=>{i(Zr)&&c(bu)})}var hl=le(fl,2);{var yu=c=>{var p=Mc();Xt(p,k=>E(ie,k),()=>i(ie)),B(c,p)};_e(hl,c=>{i(w).display==="floating"&&c(yu)})}var wu=le(hl,2);{var _u=c=>{var p=Nc();Ua(p),Re(()=>{G(p,"name",i(w).name),tc(p,i(ce))}),B(c,p)};_e(wu,c=>{i(w).setCookie||c(_u)})}ge(ti);var ku=le(ti,2);{var xu=c=>{Ka(c,{get anchor(){return i(ke)},onClickOutside:()=>{u&&lt()},get placement(){return i(w).popoverPlacement},role:"alert",variant:"error",get dir(){return i(yr)},get updateUISignal(){return i(S)},children:(p,k)=>{var _=Eo(),R=Cn(_);{var T=oe=>{var Le=Dc();B(oe,Le)},U=oe=>{var Le=Go(),Nt=An(Le,!0);Re(()=>Rt(Nt,i(Ye).expired)),B(oe,Le)},Oe=oe=>{var Le=Go(),Nt=An(Le,!0);Re(()=>{G(Le,"title",i(Ke)),Rt(Nt,i(Ye).error)}),B(oe,Le)};_e(R,oe=>{!i(Ke)&&!u?oe(T):!i(Ke)&&i(A)===W.EXPIRED?oe(U,1):oe(Oe,-1)})}B(p,_)},$$slots:{default:!0}})},Eu=c=>{var p=Eo(),k=Cn(p);Vs(k,()=>i(z),_=>{{let R=Ne(()=>i(w).codeChallengeDisplay!=="standard");Ka(_,{get anchor(){return i(ke)},get backdrop(){return i(R)},get display(){return i(w).codeChallengeDisplay},onClose:()=>{lt()},get placement(){return i(w).popoverPlacement},role:"dialog",get"aria-label"(){return i(Ye).verificationRequired},get dir(){return i(yr)},get updateUISignal(){return i(S)},children:(T,U)=>{var Oe=Uc(),oe=Cn(Oe);Ko(oe,{get audioUrl(){return i(x)},get imageUrl(){return i(q)},onCancel:()=>lt(),onReload:()=>Fn(),onSubmit:bt=>ol(bt),get codeChallenge(){return i(z)},get config(){return i(w)},get strings(){return i(Ye)}});var Le=le(oe,2);{var Nt=bt=>{za(bt,{get logo(){return i(wn)},get strings(){return i(Ye)}})};_e(Le,bt=>{i(Zr)&&i(w).codeChallengeDisplay!=="standard"&&bt(Nt)})}B(T,Oe)},$$slots:{default:!0}})}}),B(c,p)};_e(ku,c=>{i(Ke)||i(A)===W.EXPIRED||!u?c(xu):i(z)&&i(A)===W.CODE&&c(Eu,1)})}ge(Mt),Xt(Mt,c=>E(ke,c),()=>i(ke)),Re(c=>{G(Mt,"data-state",i(A)),G(Mt,"data-display",i(w).display||void 0),G(Mt,"data-placement",c),G(Mt,"data-visible",i(te)||void 0),G(Mt,"dir",i(yr)),G(ai,"for",i(pr)),Mt.dir=Mt.dir},[()=>Kc(i(w).display)]),B(e,ll);var Su=Ht(su);return o(),Su}typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",Qt(Fc,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const Wo=`(function() {
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
`,qo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Wo],{type:"text/javascript;charset=utf-8"});function Ya(e){let t;try{if(t=qo&&(self.URL||self.webkitURL).createObjectURL(qo),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Wo),{name:e==null?void 0:e.name})}}const Zo=`(function() {
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
`,Jo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Zo],{type:"text/javascript;charset=utf-8"});function Ga(e){let t;try{if(t=Jo&&(self.URL||self.webkitURL).createObjectURL(Jo),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Zo),{name:e==null?void 0:e.name})}}return Rc(`:root {
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
}`),$altcha.algorithms.set("SHA-256",()=>new Ga),$altcha.algorithms.set("SHA-384",()=>new Ga),$altcha.algorithms.set("SHA-512",()=>new Ga),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Ya),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Ya),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Ya),Q}me();const Sr={ARGON2ID:"argon2id.js",SCRYPT:"scrypt.js"};function _l(){const X=globalThis.$altcha;return(X==null?void 0:X.algorithms)instanceof Map?X.algorithms:null}function kl(X,he=_l()){if(!he||X==="")return 0;const Fe=X.endsWith("/")?X:`${X}/`;let be=0;for(const[nn,Dt]of Object.entries(Sr))he.has(nn)||(he.set(nn,()=>new Worker(`${Fe}${Dt}`)),be++);return be}let hi=!1;function xl(X){hi=X}function jn(){return{debug(...X){hi&&typeof console<"u"&&typeof console.debug=="function"&&console.debug("[nowo-altcha-type]",...X)}}}function di(X){const he=X.querySelector('[data-altcha-type-target="input"]'),Fe=X.querySelector('[data-altcha-type-target="widget"]');if(!he||!Fe)return jn().debug("init skipped: missing input or widget"),!1;const be=X.getAttribute("data-altcha-type-workers-url-value");be&&jn().debug("algorithm workers registered",kl(be));const nn=yt=>{const ae=yt.detail,Bn=ae==null?void 0:ae.payload;typeof Bn=="string"&&Bn!==""&&(he.value=Bn,he.dispatchEvent(new Event("input",{bubbles:!0})),he.dispatchEvent(new Event("change",{bubbles:!0})),jn().debug("payload synced to form input"))},Dt=yt=>{const ae=yt.detail;(ae==null?void 0:ae.state)==="verified"&&typeof ae.payload=="string"&&(he.value=ae.payload),((ae==null?void 0:ae.state)==="unverified"||(ae==null?void 0:ae.state)==="error"||(ae==null?void 0:ae.state)==="expired")&&(he.value="")};return Fe.addEventListener("verified",nn),Fe.addEventListener("statechange",Dt),X.__nowoAltchaCleanup=()=>{Fe.removeEventListener("verified",nn),Fe.removeEventListener("statechange",Dt)},jn().debug("container initialized"),!0}function El(X){const he=X.__nowoAltchaCleanup;typeof he=="function"&&(he(),delete X.__nowoAltchaCleanup)}const ta=".nowo-altcha-type";function vi(X=document){X.querySelectorAll(ta).forEach(he=>{const Fe=he.getAttribute("data-altcha-type-debug-value")==="1";xl(Fe),di(he)})}function pi(){jn().debug("boot",{buildTime:"2026-10-08T09:59:06.364Z"}),vi(),typeof MutationObserver<"u"&&new MutationObserver(he=>{for(const Fe of he)Fe.addedNodes.forEach(be=>{be instanceof HTMLElement&&(be.matches(ta)?di(be):vi(be))}),Fe.removedNodes.forEach(be=>{be instanceof HTMLElement&&be.matches(ta)&&El(be)})}).observe(document.documentElement,{childList:!0,subtree:!0})}const gi="__nowoAltchaTypeBooted",mi=window;mi[gi]!==!0&&(mi[gi]=!0,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pi,{once:!0}):pi())})();
