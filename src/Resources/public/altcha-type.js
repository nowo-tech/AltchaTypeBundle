(function(){var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.keys,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,c=Object.prototype,l=Array.prototype,u=Object.getPrototypeOf,d=Object.isExtensible,f=()=>{};function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var h=2,g=4,ee=8,_=1<<24,v=16,te=32,y=64,ne=128,re=256,b=512,x=1024,S=2048,C=4096,w=8192,T=16384,E=32768,ie=1<<25,ae=65536,oe=1<<17,se=1<<18,D=1<<19,ce=65536,le=1<<21,O=1<<23,ue=Symbol(`$state`),de=Symbol(`component`),fe=Symbol(`legacy props`),pe=Symbol(``),me=Symbol(`attributes`),he=Symbol(`class`),ge=Symbol(`style`),_e=Symbol(`text`),ve=Symbol(`form reset`),ye=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},be=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),xe=3,Se=8;function Ce(e){return e===this.v}function we(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Te(e){return!we(e,this.v)}function Ee(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function De(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function Oe(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function ke(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function Ae(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function je(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Me(){throw Error(`https://svelte.dev/e/hydration_failed`)}function Ne(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function Pe(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Fe(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Ie(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Le=1,Re=2,ze=`[`,Be=`[!`,Ve=`[?`,He=`]`,Ue={},k=Symbol(`uninitialized`),We=`http://www.w3.org/1999/xhtml`,Ge=`http://www.w3.org/2000/svg`,Ke=`http://www.w3.org/1998/Math/MathML`,qe=`@attach`,A=null;function Je(e){A=e}function Ye(e,t=!1,n){A={p:A,i:!1,c:null,e:null,s:e,x:null,r:G,l:null}}function Xe(e){var t=A,n=t.e;if(n!==null){t.e=null;for(var r of n)fr(r)}return e!==void 0&&(t.x=e),t.i=!0,A=t.p,Ze(e)}function Ze(e={}){return a(e,de,{value:!0}),e}function Qe(){return!0}var $e=[];function et(){var e=$e;$e=[],p(e)}function tt(e){if($e.length===0&&!un){var t=$e;queueMicrotask(()=>{t===$e&&et()})}$e.push(e)}function nt(){for(;$e.length>0;)et()}function rt(){console.warn(`https://svelte.dev/e/derived_inert`)}function it(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function at(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function j(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var M=!1;function ot(e){M=e}var N;function P(e){if(e===null)throw it(),Ue;return N=e}function st(){return P(xt(N))}function F(e){if(M){if(xt(N)!==null)throw it(),Ue;N=e}}function ct(e=1){if(M){for(var t=e,n=N;t--;)n=xt(n);N=n}}function lt(e=!0){for(var t=0,n=N;;){if(n.nodeType===Se){var r=n.data;if(r===He){if(t===0)return n;--t}else(r===ze||r===Be||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=xt(n);e&&n.remove(),n=i}}function ut(e){if(!e||e.nodeType!==Se)throw it(),Ue;return e.data}function dt(t){if(typeof t!=`object`||!t||ue in t||de in t)return t;let n=u(t);if(n!==c&&n!==l)return t;var r=new Map,i=e(t),a=H(0),s=Kn,d=e=>{if(Kn===s)return e();var t=W,n=Kn;In(null),qn(s);var r=e();return In(t),qn(n),r};return i&&r.set(`length`,H(t.length)),new Proxy(t,{defineProperty(e,t,n){`value`in n&&n.configurable!==!1&&n.enumerable!==!1&&n.writable!==!1||Ne();var i=r.get(t);return i===void 0?d(()=>{var e=H(n.value);return r.set(t,e),e}):U(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=d(()=>H(k));r.set(t,e),An(a)}}else U(n,k),An(a);return!0},get(e,n,i){if(n===ue)return t;var a=r.get(n),s=n in e;if(a===void 0&&(!s||o(e,n)?.writable)&&(a=d(()=>H(dt(s?e[n]:k))),r.set(n,a)),a!==void 0){var c=K(a);return c===k?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=K(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==k)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===ue)return!0;var n=r.get(t),i=n!==void 0&&n.v!==k||Reflect.has(e,t);return(n!==void 0||G!==null&&(!i||o(e,t)?.writable))&&(n===void 0&&(n=d(()=>H(i?dt(e[t]):k)),r.set(t,n)),K(n)===k)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var u=n;u<c.v;u+=1){var f=r.get(u+``);f===void 0?u in e&&(f=d(()=>H(k)),r.set(u+``,f)):U(f,k)}if(c===void 0)(!l||o(e,t)?.writable)&&(c=d(()=>H(void 0)),U(c,dt(n)),r.set(t,c));else{l=c.v!==k;var p=d(()=>dt(n));U(c,p)}var m=Reflect.getOwnPropertyDescriptor(e,t);if(m?.set&&m.set.call(s,n),!l){if(i&&typeof t==`string`){var h=r.get(`length`),g=Number(t);Number.isInteger(g)&&g>=h.v&&U(h,g+1)}An(a)}return!0},ownKeys(e){K(a);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==k});for(var[n,i]of r)i.v!==k&&!(n in e)&&t.push(n);return t},setPrototypeOf(){Pe()}})}function ft(e){try{if(typeof e==`object`&&e&&ue in e)return e[ue]}catch{}return e}function pt(e,t){return Object.is(ft(e),ft(t))}var mt,ht,gt,_t,vt;function yt(){if(mt===void 0){mt=window,ht=document,gt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;_t=o(t,`firstChild`).get,vt=o(t,`nextSibling`).get,d(e)&&(e[he]=void 0,e[me]=null,e[ge]=void 0,e.__e=void 0),d(n)&&(n[_e]=void 0)}}function bt(e=``){return document.createTextNode(e)}function I(e){return _t.call(e)}function xt(e){return vt.call(e)}function L(e,t){if(!M)return I(e);var n=I(N);if(n===null)n=N.appendChild(bt());else if(t&&n.nodeType!==xe){var r=bt();return n?.before(r),P(r),r}return t&&Dt(n),P(n),n}function St(e,t=!1){if(!M){var n=I(e);return n instanceof Comment&&n.data===``?xt(n):n}if(t){if(N?.nodeType!==xe){var r=bt();return N?.before(r),P(r),r}Dt(N)}return N}function Ct(e,t=!1){if(!M)return I(e);var n=L(e,t);return F(e),n}function R(e,t=1,n=!1){let r=M?N:e;for(var i;t--;)i=r,r=xt(r);if(!M)return r;if(n){if(r?.nodeType!==xe){var a=bt();return r===null?i?.after(a):r.before(a),P(a),a}Dt(r)}return P(r),r}function wt(e){e.textContent=``}function Tt(){return!1}function Et(e,t,n){return t==null||t===We?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Dt(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===xe;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Ot(e){var t=G;if(t===null)return W.f|=O,e;if((t.f&E)===0&&(t.f&g)===0)throw e;kt(e,t)}function kt(e,t){if(t===null||(t.f&T)===0){for(;t!==null;){if((t.f&ne)!==0&&!(t.f&33570816)){if((t.f&E)===0)throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}var At=-7169;function z(e,t){e.f=e.f&At|t}function jt(e){(e.f&b)!==0||e.deps===null?z(e,x):z(e,C)}function Mt(e){if(e!==null)for(let t of e)(t.f&h)!==0&&(t.f&ce)!==0&&(t.f^=ce,Mt(t.deps))}function Nt(e,t,n){(e.f&S)===0?(e.f&C)!==0&&n.add(e):t.add(e),Mt(e.deps),z(e,x)}function Pt(e,t,n){if(e==null)return t(void 0),f;let r=ar(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var Ft=[];function It(e,t=f){let n=null,r=new Set;function i(t){if(we(e,t)&&(e=t,n)){let t=!Ft.length;for(let t of r)t[1](),Ft.push(t,e);if(t){for(let e=0;e<Ft.length;e+=2)Ft[e][0](Ft[e+1]);Ft.length=0}}}function a(t){i(t(e))}function o(o,s=f){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||f),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function Lt(e){let t;return Pt(e,e=>t=e)(),t}var Rt=Symbol(`unmounted`);function zt(e,t,n){let r=n[t]??={store:null,source:Dn(void 0),unsubscribe:f};if(r.store!==e&&!(Rt in n)){if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=f;else{var i=!0;r.unsubscribe=Pt(e,e=>{i?r.source.v=e:U(r.source,e)}),i=!1}}return e&&Rt in n?Lt(e):K(r.source)}function Bt(){let e={};function t(){ur(()=>{for(var t in e)e[t].unsubscribe();a(e,Rt,{enumerable:!1,value:!0})})}return[e,t]}function Vt(e,t){if(t){let t=document.body;e.autofocus=!0,tt(()=>{document.activeElement===t&&e.focus()})}}var Ht=!1;function Ut(){Ht||(Ht=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[ve]?.()})},{capture:!0}))}function Wt(e){var t=W,n=G;In(null),Ln(null);try{return e()}finally{In(t),Ln(n)}}function Gt(e,t,n,r=n){e.addEventListener(t,()=>Wt(n));let i=e[ve];e[ve]=i?()=>{i(),r(!0)}:()=>r(!0),Ut()}function Kt(e,t,n,r){let i=Xt;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=G,c=qt(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if((s.f&T)===0){c();try{r([...o,...e])}catch(e){kt(e,s)}Jt()}}var d=Yt();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>Qt(e))).then(u).catch(e=>kt(e,s)).finally(d)}l?l.then(()=>{c(),f(),Jt()}):f()}function qt(){var e=G,t=W,n=A,r=B;return function(i=!0){Ln(e),In(t),Je(n),i&&(e.f&T)===0&&(r?.activate(),r?.apply())}}function Jt(e=!0){Ln(null),In(null),Je(null),e&&B?.deactivate()}function Yt(){var e=G,t=e.b,n=B,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function Xt(e){return G!==null&&(G.f|=D),{ctx:A,deps:null,effects:null,equals:Ce,f:2050,fn:e,reactions:null,rv:0,v:k,wv:0,parent:G,ac:null}}var Zt=Symbol(`obsolete`);function Qt(e,t,n){let r=G;r===null&&De();var i=void 0,a=En(k),o=!W,s=new Set;return gr(()=>{var t=G,n=m();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==ye&&n.reject(e)}).finally(Jt)}catch(e){n.reject(e),Jt()}var c=B;if(o){if((t.f&E)!==0)var l=Yt();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(Zt);else for(let e of s.values())e.reject(Zt);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==Zt&&(c.activate(),t?(a.f|=O,On(a,t)):((a.f&O)!==0&&(a.f^=O),On(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),ur(()=>{for(let e of s)e.reject(Zt)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function $t(e){let t=Xt(e);return zn(t),t}function en(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Tr(t[n])}}function tn(e){var t,n=G,r=e.parent;if(!Nn&&r!==null&&e.v!==k&&r.f&24576)return rt(),e.v;Ln(r);try{e.f&=-65537,en(e),t=Zn(e)}finally{Ln(n)}return t}function nn(e){var t=tn(e);!e.equals(t)&&(e.wv=Jn(),(!B?.is_fork||e.deps===null)&&(B===null?e.v=t:(B.capture(e,t,!0),sn?.capture(e,t,!0)),e.deps===null))?z(e,x):Nn||(cn===null?jt(e):(lr()||B?.is_fork)&&cn.set(e,t))}function rn(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&Wt(()=>{t.ac.abort(ye),t.ac=null}),t.fn!==null&&(t.teardown=f),er(t,0),Cr(t))}function an(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&tr(t)}var on=null,B=null,sn=null,cn=null,ln=null,un=!1,dn=!1,fn=null,pn=null,mn=0,hn=1,gn=class e{id=hn++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){on===null?on=this:(on.#n=this,this.#t=on),on=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)z(r,S),t(r);for(r of n.m)z(r,C),t(r)}this.#p.add(e)}#g(){this.#e=!0,mn++>1e3&&(this.#x(),_n());for(let e of this.#u)this.#d.delete(e),z(e,S),this.schedule(e);for(let e of this.#d)z(e,C),this.schedule(e);let t=this.#c;this.#c=[],this.apply();var n=fn=[],r=[],i=pn=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw Sn(e),this.#h()||this.discard(),t}if(B=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(fn=null,pn=null,this.#h()){this.#b(r),this.#b(n);for(let[e,t]of this.#f)xn(e,t);i.length>0&&B.#g();return}let o=this.#v();if(o)this.#b(r),this.#b(n),o.#y(this);else{this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),sn=this,yn(r),yn(n),sn=null,this.#s?.resolve();var s=B;if(this.#a===0&&(this.#c.length===0||s!==null)&&this.#x(),this.#c.length>0){if(s!==null){let e=s;e.#c.push(...this.#c.filter(t=>!e.#c.includes(t)))}else s=this}s!==null&&(wn.clear(),s.#g())}}#_(e,t,n){e.f^=x;for(var r=e.first;r!==null;){var i=r.f,a=!!(i&96);if(!(a&&(i&x)!==0||(i&w)!==0||this.#f.has(r))&&r.fn!==null){a?r.f^=x:(i&g)===0?Yn(r)&&((i&v)!==0&&this.#d.add(r),tr(r)):t.push(r);var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#y(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null&&((e.f&h)===0||e.f&6144))for(let e of n){var r=e.f;if((r&h)!==0)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),z(i,S),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#x(),B=this,this.#g()}#b(e){for(var t=0;t<e.length;t+=1)Nt(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==k&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&O)===0&&(this.current.set(e,[t,n]),cn?.set(e,t)),this.is_fork||(e.v=t)}activate(){B=this}deactivate(){B=null,cn=null}flush(){try{dn=!0,B=this,this.#g()}finally{mn=0,ln=null,fn=null,pn=null,dn=!1,B=null,cn=null,wn.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject(Zt);this.#x(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,tt(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=m()).promise}static ensure(){if(B===null){let t=B=new e;!dn&&!un&&tt(()=>{t.#e||t.flush()})}return B}apply(){cn=null}schedule(e){if(ln=e,e.b?.is_pending&&e.f&16777228&&(e.f&E)===0)e.b.defer_effect(e);else{for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(fn!==null&&t===G&&(W===null||(W.f&h)===0))return;if(n&96){if((n&x)===0)return;t.f^=x}}this.#c.push(t)}}#x(){if(this.linked){var e=this.#t,t=this.#n;e===null||(e.#n=t),t===null?on=e:t.#t=e,this.linked=!1}}};function V(e){var t=un;un=!0;try{for(var n;;){if(nt(),B===null)return n;B.flush()}}finally{un=t}}function _n(){try{je()}catch(e){kt(e,ln)}}var vn=null;function yn(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Yn(r)&&(vn=new Set,tr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Dr(r),vn?.size>0)){wn.clear();for(let e of vn){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)vn.has(n)&&(vn.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||tr(n)}}vn.clear()}}vn=null}}function bn(e){B.schedule(e)}function xn(e,t){if((e.f&te)===0||(e.f&x)===0){(e.f&S)===0?(e.f&C)!==0&&t.m.push(e):t.d.push(e),z(e,x);for(var n=e.first;n!==null;)xn(n,t),n=n.next}}function Sn(e){z(e,x);for(var t=e.first;t!==null;)Sn(t),t=t.next}var Cn=new Set,wn=new Map,Tn=!1;function En(e,t){return{f:0,v:e,reactions:null,equals:Ce,rv:0,wv:0}}function H(e,t){let n=En(e);return zn(n),n}function Dn(e,t=!1,n=!0){let r=En(e);return t||(r.equals=Te),r}function U(e,t,n=!1){return W!==null&&(!Fn||(W.f&oe)!==0)&&Qe()&&W.f&4325394&&(Rn===null||!Rn.has(e))&&Fe(),On(e,n?dt(t):t,pn)}function On(e,t,n=null){if(!e.equals(t)){Nn?wn.set(e,t):wn.has(e)||wn.set(e,e.v);var r=gn.ensure();if(r.capture(e,t),(e.f&h)!==0){let t=e;(e.f&S)!==0&&tn(t),cn===null&&jt(t)}e.wv=Jn(),jn(e,S,n),G!==null&&(G.f&x)!==0&&!(G.f&96)&&(Hn===null?Un([e]):Hn.push(e)),!r.is_fork&&Cn.size>0&&!Tn&&kn()}return t}function kn(){Tn=!1;for(let e of Cn){(e.f&x)!==0&&z(e,C);let t;try{t=Yn(e)}catch{t=!0}t&&tr(e)}Cn.clear()}function An(e){U(e,e.v+1)}function jn(e,t,n){var r=e.reactions;if(r!==null)for(var i=r.length,a=0;a<i;a++){var o=r[a],s=o.f,c=(s&S)===0;if(c&&z(o,t),(s&oe)!==0)Cn.add(o);else if((s&h)!==0){var l=o;cn?.delete(l),(s&ce)===0&&(s&b&&(G===null||(G.f&le)===0)&&(o.f|=ce),jn(l,C,n))}else if(c){var u=o;(s&v)!==0&&vn!==null&&vn.add(u),n===null?bn(u):n.push(u)}}}var Mn=!1,Nn=!1;function Pn(e){Nn=e}var W=null,Fn=!1;function In(e){W=e}var G=null;function Ln(e){G=e}var Rn=null;function zn(e){W!==null&&(Rn??=new Set).add(e)}var Bn=null,Vn=0,Hn=null;function Un(e){Hn=e}var Wn=1,Gn=0,Kn=Gn;function qn(e){Kn=e}function Jn(){return++Wn}function Yn(e){var t=e.f;if((t&S)!==0)return!0;if(t&h&&(e.f&=-65537),(t&C)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Yn(a)&&nn(a),a.wv>e.wv)return!0}(t&b)!==0&&cn===null&&z(e,x)}return!1}function Xn(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Rn!==null&&Rn.has(e)))for(var i=0;i<r.length;i++){var a=r[i];(a.f&h)===0?t===a&&(n?z(a,S):(a.f&x)!==0&&z(a,C),bn(a)):Xn(a,t,!1)}}function Zn(e){var t=Bn,n=Vn,r=Hn,i=W,a=Rn,o=A,s=Fn,c=Kn,l=e.f;Bn=null,Vn=0,Hn=null,W=l&96?null:e,Rn=null,Je(e.ctx),Fn=!1,Kn=++Gn,e.ac!==null&&(Wt(()=>{e.ac.abort(ye)}),e.ac=null);try{e.f|=le;var u=e.fn,d=u();e.f|=E;var f=Qn(e);if(Qe()&&Hn!==null&&!Fn&&f!==null&&!(e.f&6146))for(var p=0;p<Hn.length;p++)Xn(Hn[p],e);if(i!==null&&i!==e){if(Gn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Gn;if(t!==null)for(let e of t)e.rv=Gn;Hn!==null&&(r===null?r=Hn:r.push(...Hn))}return(e.f&O)!==0&&(e.f^=O),d}catch(t){return Qn(e),Ot(t)}finally{e.f^=le,Bn=t,Vn=n,Hn=r,W=i,Rn=a,Je(o),Fn=s,Kn=c}}function Qn(e){var t=e.deps,n=B?.is_fork;if(Bn!==null){var r;if(n||er(e,Vn),t!==null&&Vn>0)for(t.length=Vn+Bn.length,r=0;r<Bn.length;r++)t[Vn+r]=Bn[r];else e.deps=t=Bn;if(lr()&&(e.f&b)!==0)for(r=Vn;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&Vn<t.length&&(er(e,Vn),t.length=Vn);return t}function $n(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&(r.f&h)!==0&&(Bn===null||!n.call(Bn,r))){var s=r;(s.f&b)!==0&&(s.f^=b,s.f&=-65537),s.v!==k&&jt(s),s.ac!==null&&Wt(()=>{s.ac.abort(ye),s.ac=null,z(s,S)}),rn(s),er(s,0)}}function er(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)$n(e,n[r])}function tr(e){var t=e.f;if((t&T)===0){z(e,x);var n=G,r=Mn;G=e,Mn=!(t&96);try{t&16777232?wr(e):Cr(e),Sr(e);var i=Zn(e);e.teardown=typeof i==`function`?i:null,e.wv=Wn}finally{Mn=r,G=n}}}async function nr(){await Promise.resolve(),V()}function K(e){var t=(e.f&h)!==0;if(W!==null&&!Fn&&(G===null||(G.f&T)===0)&&(Rn===null||!Rn.has(e))){var r=W.deps;if((W.f&le)!==0)e.rv<Gn&&(e.rv=Gn,Bn===null&&r!==null&&r[Vn]===e?Vn++:Bn===null?Bn=[e]:Bn.push(e));else{W.deps??=[],n.call(W.deps,e)||W.deps.push(e);var i=e.reactions;i===null?e.reactions=[W]:n.call(i,W)||i.push(W)}}if(Nn&&wn.has(e))return wn.get(e);if(t){var a=e;if(Nn){var o=a.v;return((a.f&x)===0&&a.reactions!==null||ir(a))&&(o=tn(a)),wn.set(a,o),o}var s=(a.f&b)===0&&!Fn&&W!==null&&(Mn||(W.f&b)!==0),c=(a.f&E)===0;Yn(a)&&(s&&(a.f|=b),nn(a)),s&&!c&&(an(a),rr(a))}if(cn?.has(e))return cn.get(e);if((e.f&O)!==0)throw e.v;return e.v}function rr(e){if(e.f|=b,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),(t.f&h)!==0&&(t.f&b)===0&&(an(t),rr(t))}function ir(e){if(e.v===k)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(wn.has(t)||(t.f&h)!==0&&ir(t))return!0;return!1}function ar(e){var t=Fn;try{return Fn=!0,e()}finally{Fn=t}}function or(e){G===null&&(W===null&&Ae(),ke()),Nn&&Oe()}function sr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function cr(e,t){var n=G;n!==null&&(n.f&w)!==0&&(e|=w);var r={ctx:A,deps:null,nodes:null,f:e|2560,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};B?.register_created_effect(r);var i=r;if((e&g)!==0)fn===null?gn.ensure().schedule(r):fn.push(r);else if(t!==null){try{tr(r)}catch(e){throw Tr(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&D)===0&&(i=i.first,(e&v)!==0&&(e&ae)!==0&&i!==null&&(i.f|=ae))}if(i!==null&&(i.parent=n,n!==null&&sr(i,n),W!==null&&(W.f&h)!==0&&(e&y)===0)){var a=W;(a.effects??=[]).push(i)}return r}function lr(){return W!==null&&!Fn}function ur(e){let t=cr(ee,null);return z(t,x),t.teardown=e,t}function dr(e){or();var t=G.f;if(!W&&(t&te)!==0&&A!==null&&!A.i){var n=A;(n.e??=[]).push(e)}else return fr(e)}function fr(e){return cr(1048580,e)}function pr(e){gn.ensure();let t=cr(524352,e);return()=>{Tr(t)}}function mr(e){gn.ensure();let t=cr(524352,e);return(e={})=>new Promise(n=>{e.outro?Or(t,()=>{Tr(t),n(void 0)}):(Tr(t),n(void 0))})}function hr(e){return cr(g,e)}function gr(e){return cr(4718592,e)}function _r(e,t=0){return cr(ee|t,e)}function vr(e,t=[],n=[],r=[]){Kt(r,t,n,t=>{cr(ee,()=>{e(...t.map(K))})})}function yr(e,t=0){return cr(v|t,e)}function br(e,t=0){return cr(_|t,e)}function xr(e){return cr(524320,e)}function Sr(e){var t=e.teardown;if(t!==null){let n=Nn,r=W;Pn(!0),In(null);try{t.call(null)}catch(t){kt(t,e.parent)}finally{Pn(n),In(r)}}}function Cr(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Wt(()=>{e.abort(ye)});var r=n.next;(n.f&y)===0?Tr(n,t):n.parent=null,n=r}}function wr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&te)===0&&Tr(t),t=n}}function Tr(e,t=!0){var n=!1;(t||(e.f&se)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Er(e.nodes.start,e.nodes.end),n=!0),e.f|=ie,Cr(e,t&&!n),er(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Sr(e),e.f^=ie,e.f|=T;var i=e.parent;i!==null&&i.first!==null&&Dr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Er(e,t){for(;e!==null;){var n=e===t?null:xt(e);e.remove(),e=n}}function Dr(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Or(e,t,n=!0){var r=[];e.f|=re,kr(e,r,!0);var i=()=>{n&&Tr(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function kr(e,t,n){if((e.f&w)===0){e.f^=w;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if((i.f&y)===0){var o=(i.f&ae)!==0||(i.f&te)!==0&&(e.f&v)!==0;kr(i,t,o?n:!1)}i=a}}}function Ar(e){e.f&=-257,jr(e,!0)}function jr(e,t){if((e.f&re)===0&&(e.f&w)!==0){e.f^=w,(e.f&x)===0&&(z(e,S),gn.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&ae)!==0||(n.f&te)!==0;jr(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Mr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:xt(n);t.append(n),n=i}}function Nr(e){let t=0,n=En(0),r;return()=>{lr()&&(K(n),_r(()=>(t===0&&(r=ar(()=>e(()=>An(n)))),t+=1,()=>{tt(()=>{--t,t===0&&(r?.(),r=void 0,An(n))})})))}}function Pr(e){let t={get:e=>Lt(t.store)[e],set:(e,n)=>{typeof e==`string`?Object.assign(Lt(t.store),{[e]:n}):Object.assign(Lt(t.store),e),t.store.set(Lt(t.store))},store:It(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Pr({}),i18n:Pr({}),instances:new Set,plugins:new Set},globalThis.$altcha.i18n.set(`en`,{ariaLinkLabel:`Altcha (official website)`,cancel:`Cancel`,enterCode:`Enter code`,enterCodeAria:`Enter code you hear. Press Space to play audio.`,enterCodeFromImage:`To proceed, please enter the code from the image below.`,error:`Verification failed. Try again later.`,expired:`Verification expired. Try again.`,footer:`Protected by <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (official website, opens in new tab)">ALTCHA</a>`,getAudioChallenge:`Get an audio challenge`,label:`I’m not a robot`,loading:`Loading...`,reload:`Reload`,verify:`Verify`,verificationRequired:`Verification required!`,verified:`Verified`,verifying:`Verifying...`,waitAlert:`Verifying... please wait.`});var Fr=`5`;typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(Fr);var Ir=Symbol(`events`),Lr=new Set,Rr=new Set;function zr(e,t,n,r={}){function i(e){if(r.capture||Wr.call(t,e),!e.cancelBubble)return Wt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?tt(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function q(e,t,n,r,i){var a={capture:r,passive:i},o=zr(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&ur(()=>{t.removeEventListener(e,o,a)})}function Br(e,t,n){(t[Ir]??={})[e]=n}function Vr(e){for(var t=0;t<e.length;t++)Lr.add(e[t]);for(var n of Rr)n(e)}var Hr=null,Ur=!1;function Wr(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],o=i[0]||e.target;Hr=e,Ur||(Ur=!0,setTimeout(()=>{Ur=!1,Hr=null}));var s=0,c=Hr===e&&e[Ir];if(c){var l=i.indexOf(c);if(l!==-1&&(t===document||t===window)){e[Ir]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=i[s]||e.target,o!==t){a(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=W,f=G;In(null),Ln(null);try{for(var p,m=[];o!==null&&o!==t;){try{var h=o[Ir]?.[r];h==null||o.disabled&&e.target!==o||h.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,o=s<i.length?i[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[Ir]=t,delete e.currentTarget,In(d),Ln(f)}}}var Gr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function Kr(e){return Gr?.createHTML(e)??e}function qr(e){var t=Et(`template`);return t.innerHTML=Kr(e.replaceAll(`<!>`,`<!---->`)),t.content}function Jr(e,t){var n=G;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function J(e,t){var n=(t&Le)!==0,r=(t&Re)!==0,i,a=!e.startsWith(`<!>`);return()=>{if(M)return Jr(N,null),N;i===void 0&&(i=qr(a?e:`<!>`+e),n||(i=I(i)));var t=r||gt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=I(t),s=t.lastChild;Jr(o,s)}else Jr(t,t);return t}}function Yr(e,t,n=`svg`){var r=`<${n}>${e.startsWith(`<!>`)?`<!>`+e:e}</${n}>`,i;return()=>{if(M)return Jr(N,null),N;i||=I(I(qr(r)));var e=i.cloneNode(!0);return Jr(e,e),e}}function Xr(e,t){return Yr(e,t,`svg`)}function Zr(e=``){if(!M){var t=bt(e+``);return Jr(t,t),t}var n=N;return n.nodeType===xe?Dt(n):(n.before(n=bt()),P(n)),Jr(n,n),n}function Qr(){if(M)return Jr(N,null),N;var e=document.createDocumentFragment(),t=document.createComment(``),n=bt();return e.append(t,n),Jr(t,n),e}function Y(e,t){if(M){var n=G;((n.f&E)===0||n.nodes.end===null)&&(n.nodes.end=N),st()}else e!==null&&e.before(t)}function $r(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}var ei=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`];function ti(e){return ei.includes(e)}var ni={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`};function ri(e){return e=e.toLowerCase(),ni[e]??e}var ii=[`touchstart`,`touchmove`];function ai(e){return ii.includes(e)}var oi=589824;function si(e,t,n,r){new ci(e,t,n,r)}var ci=class{parent;is_pending=!1;transform_error;#e;#t=M?N:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=Nr(()=>(this.#m=En(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=G;t.b=this,t.f|=ne,n(e)},this.parent=G.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=yr(()=>{if(M){let e=this.#t;st();let t=e.data===Be;if(e.data.startsWith(Ve)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#y():this.#g()}else this.#b()},oi),M&&(this.#e=N)}#g(){try{this.#a=xr(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#v(e);tt(r),t&&(this.#s=xr(()=>{t(this.#e,()=>e,()=>n)}))}#v(e){var t=!1,n=!1;let r=()=>{t?j():(t=!0,n&&Ie(),this.#s!==null&&Or(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()}))};return{reset:r,invoke_onerror:()=>{try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){kt(e,this.#i&&this.#i.parent)}}}}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=xr(()=>e(this.#e)),tt(()=>{var e=this.#c=document.createDocumentFragment(),t=bt(),n=!1;e.append(t),this.#a=this.#S(()=>{try{return xr(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){kt(e,this.#i.parent)}return null}}),this.#a===null?(this.#c=null,n&&this.#x(B)):this.#u===0&&(this.#e.before(e),this.#c=null,Or(this.#o,()=>{this.#o=null}),this.#x(B))}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=xr(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Mr(this.#a,e);let t=this.#n.pending;this.#o=xr(()=>t(this.#e))}else this.#x(B)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){Nt(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=G,n=W,r=A;Ln(this.#i),In(this.#i),Je(this.#i.ctx);try{return gn.ensure(),e()}finally{Ln(t),In(n),Je(r)}}#C(e,t){this.has_pending_snippet()?(this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&Or(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))):this.parent&&this.parent.#C(e,t)}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!this.#m||this.#d||(this.#d=!0,tt(()=>{this.#d=!1,this.#m&&On(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),K(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;B?.is_fork?(this.#a&&B.skip_effect(this.#a),this.#o&&B.skip_effect(this.#o),this.#s&&B.skip_effect(this.#s),B.oncommit(()=>{this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(Tr(this.#a),null),this.#o&&=(Tr(this.#o),null),this.#s&&=(Tr(this.#s),null),M&&(P(this.#t),ct(),P(lt()));let t=this.#n.failed,n=e=>{let{reset:n,invoke_onerror:r}=this.#v(e);r(),t&&(this.#s=this.#S(()=>{try{return xr(()=>{var r=G;r.b=this,r.f|=ne,t(this.#e,()=>e,()=>n)})}catch(e){return kt(e,this.#i.parent),null}}))};tt(()=>{var t;try{t=this.transform_error(e)}catch(e){kt(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>kt(e,this.#i&&this.#i.parent)):n(t)})}};function li(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[_e]??=e.nodeValue)&&(e[_e]=n,e.nodeValue=`${n}`)}function ui(e,t){return pi(e,t)}function di(e,t){yt(),t.intro=t.intro??!1;let n=t.target,r=M,i=N;try{for(var a=I(n);a&&(a.nodeType!==Se||a.data!==ze);)a=xt(a);if(!a)throw Ue;ot(!0),P(a);let r=pi(e,{...t,anchor:a});return ot(!1),r}catch(r){if(r instanceof Error&&r.message.split(`
`).some(e=>e.startsWith(`https://svelte.dev/e/`)))throw r;return r!==Ue&&console.warn(`Failed to hydrate: `,r),t.recover===!1&&Me(),yt(),wt(n),ot(!1),ui(e,t)}finally{ot(r),P(i)}}var fi=new Map;function pi(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){yt();var l=void 0,u=mr(()=>{var s=n??t.appendChild(bt());si(s,{pending:()=>{}},t=>{Ye({});var n=A;if(o&&(n.c=o),a&&(i.$$events=a),M&&Jr(t,null),l=e(t,i)||Ze(),M&&(G.nodes.end=N,N===null||N.nodeType!==Se||N.data!==He))throw it(),Ue;Xe()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=ai(r);for(let e of[t,document]){var a=fi.get(e);a===void 0&&(a=new Map,fi.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,Wr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(Lr)),Rr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=fi.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,Wr),r.delete(e),r.size===0&&fi.delete(n)):r.set(e,i)}Rr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return mi.set(l,u),l}var mi=new WeakMap;function hi(e,t){let n=mi.get(e);return n?(mi.delete(e),n(t)):Promise.resolve()}var gi=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)Ar(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(Ar(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(Tr(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Mr(r,t),t.append(bt()),this.#n.set(e,{effect:r,fragment:t})}else Tr(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),Or(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(Tr(n.effect),this.#n.delete(e))};ensure(e,t){var n=B,r=Tt();if(t&&!this.#t.has(e)&&!this.#n.has(e)){if(r){var i=document.createDocumentFragment(),a=bt();i.append(a),this.#n.set(e,{effect:xr(()=>t(a)),fragment:i})}else this.#t.set(e,xr(()=>t(this.anchor)))}if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else M&&(this.anchor=N),this.#a(n)}};function _i(e,t,...n){var r=new gi(e);yr(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},ae)}function vi(e){A===null&&Ee(),dr(()=>{let t=ar(e);if(typeof t==`function`)return t})}function X(e,t,n=!1){var r;M&&(r=N,st());var i=new gi(e),a=n?ae:0;function o(e,t){if(M){var n=ut(r);if(e!==parseInt(n.substring(1))){var a=lt();P(a),i.anchor=a,ot(!1),i.ensure(e,t),ot(!0);return}}i.ensure(e,t)}yr(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}var yi=Symbol(`NaN`);function bi(e,t,n){M&&st();var r=new gi(e);yr(()=>{var e=t();e!==e&&(e=yi),r.ensure(e,n)})}function xi(e,t,n=!1,r=!1,i=!1,a=!1){var o=e,s=``;if(n){var c=e;M&&(o=P(I(c)))}vr(()=>{var e=G;if(s===(s=t()??``))M&&st();else if(n&&!M)e.nodes=null,c.innerHTML=s,s!==``&&Jr(I(c),c.lastChild);else if(e.nodes!==null&&(Er(e.nodes.start,e.nodes.end),e.nodes=null),s!==``){if(M){N.data;for(var a=st(),l=a;a!==null&&(a.nodeType!==Se||a.data!==``);)l=a,a=xt(a);if(a===null)throw it(),Ue;Jr(N,l),o=P(a)}else{var u=Et(r?`svg`:i?`math`:`template`,r?Ge:i?Ke:void 0);u.innerHTML=s;var d=r||i?u:u.content;if(Jr(I(d),d.lastChild),r||i)for(;I(d);)o.before(I(d));else o.before(d)}}})}function Si(e,t,n){var r;M&&(r=N,st());var i=new gi(e);yr(()=>{var e=t()??null;if(M&&ut(r)===ze!=(e!==null)){var a=lt();P(a),i.anchor=a,ot(!1),i.ensure(e,e&&(t=>n(t,e))),ot(!0)}else i.ensure(e,e&&(t=>n(t,e)))},ae)}function Ci(e,t){var n=void 0,r;br(()=>{n!==(n=t())&&(r&&=(Tr(r),null),n&&(r=xr(()=>{hr(()=>n(e))})))})}function wi(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=wi(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Ti(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=wi(e))&&(r&&(r+=` `),r+=t);return r}function Ei(e){return typeof e==`object`?Ti(e):e??``}var Di=[...` 	
\r\f\xA0\v﻿`];function Oi(e,t,n){var r=e==null?``:``+e;if(n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Di.includes(r[o-1]))&&(s===r.length||Di.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function ki(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function Ai(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function ji(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(Ai)),i&&c.push(...Object.keys(i).map(Ai));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=Ai(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=ki(r)),i&&(n+=ki(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function Mi(e,t,n,r,i,a){var o=e[he];if(M||o!==n||o===void 0){var s=Oi(n,r,a);M&&s===e.getAttribute(`class`)||(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e[he]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Ni(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Pi(e,t,n,r){var i=e[ge];if(M||i!==t){var a=ji(t,r);M&&a===e.getAttribute(`style`)||(a==null?e.removeAttribute(`style`):e.style.cssText=a),e[ge]=t}else r&&(Array.isArray(r)?(Ni(e,n?.[0],r[0]),Ni(e,n?.[1],r[1],`important`)):Ni(e,n,r));return r}function Fi(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function Ii(e,t){var n=!(`__defaultValue`in e);(n||e.__defaultValue!==t)&&(e.__defaultValue=t,Li(e,!n||`__value`in e))}function Li(t,n){var r=t.__defaultValue,i=t.multiple,a=i?r??[]:null;if(!i||e(a)){var o=t.selectedIndex,s=n&&i?new Set(t.selectedOptions):null;for(var c of t.options){var l=Bi(c);Fi(c,i?a.includes(l):pt(l,r))}if(n){if(s!==null)for(c of t.options){var u=s.has(c);c.selected!==u&&(c.selected=u)}else t.selectedIndex!==o&&(t.selectedIndex=o)}}}function Ri(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return at();for(var i of t.options)i.selected=n.includes(Bi(i))}else{for(i of t.options)if(pt(Bi(i),n)){i.selected=!0;return}r&&n===void 0||(t.selectedIndex=-1)}}function zi(e){var t=new MutationObserver(t=>{t.every(Vi)||(`__defaultValue`in e&&Li(e,!1),`__value`in e&&Ri(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),ur(()=>{t.disconnect()})}function Bi(e){return`__value`in e?e.__value:e.value}function Vi(e){if(e.target.closest(`selectedcontent`)!==null)return!0;if(e.type===`childList`){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(e=>e.nodeName===`SELECTEDCONTENT`)}return!1}var Hi=Symbol(`class`),Ui=Symbol(`style`),Wi=Symbol(`is custom element`),Gi=Symbol(`is html`),Ki=be?`link`:`LINK`,qi=be?`input`:`INPUT`,Ji=be?`option`:`OPTION`,Yi=be?`select`:`SELECT`,Xi=be?`progress`:`PROGRESS`;function Zi(e){if(M){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;Z(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;Z(e,`checked`,null),e.checked=r}}};e[ve]=n,tt(n),Ut()}}function Qi(e,t){var n=ta(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName===Xi)&&(e.value=t??``)}function Z(e,t,n,r){var i=ta(e);M&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===Ki)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[pe]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&ra(e).has(t)?e[t]=n:e.setAttribute(t,n))}function $i(e,t,n,r,i=!1,a=!1){M&&i&&e.nodeName===qi&&(`defaultValue`in n||`defaultChecked`in n||Zi(e));var o=ta(e),s=o[Wi],c=!o[Gi];let l=M&&s;l&&ot(!1);var u=t||{},d=e.nodeName===Ji,f=e.nodeName===Yi;for(var p in t)!(p in n)&&p[0]+p[1]!==`$$`&&(n[p]=null);n.class?n.class=Ei(n.class):n[Hi]&&(n.class=null),n[Ui]&&(n.style??=null);var m=ra(e);if(e.nodeName===qi&&`type`in n&&(`value`in n||`__value`in n)){var h=n.type;(h!==u.type||h===void 0&&e.hasAttribute(`type`))&&(u.type=h,Z(e,`type`,h))}for(let i in n){let a=n[i];if(d&&i===`value`&&a==null)e.value=e.__value=``,u[i]=a;else if(i===`class`)Mi(e,e.namespaceURI===`http://www.w3.org/1999/xhtml`,a,r,t?.[Hi],n[Hi]),u[i]=a,u[Hi]=n[Hi];else if(i===`style`)Pi(e,a,t?.[Ui],n[Ui]),u[i]=a,u[Ui]=n[Ui];else{var g=u[i];if(a!==g||a===void 0&&e.hasAttribute(i)){u[i]=a;var ee=i[0]+i[1];if(ee!==`$$`){if(ee===`on`){let t={},n=`$$`+i,r=i.slice(2);var _=ti(r);if($r(r)&&(r=r.slice(0,-7),t.capture=!0),!_&&g){if(a!=null)continue;e.removeEventListener(r,u[n],t),u[n]=null}_?(Br(r,e,a),Vr([r])):a!=null&&(u[n]=zr(r,e,function(e){u[i].call(this,e)},t))}else if(i===`style`)Z(e,i,a);else if(i===`autofocus`)Vt(e,!!a);else if(!s&&(i===`__value`||i===`value`&&a!=null))e.value=e.__value=a;else if(i===`selected`&&d)Fi(e,a);else{var v=i;c||(v=ri(v));var te=v===`defaultValue`||v===`defaultChecked`;if(f&&v===`defaultValue`)continue;if(a==null&&!s&&!te){if(o[i]=null,v===`value`||v===`checked`){let n=e,r=t===void 0;if(v===`value`){let e=n.defaultValue;n.removeAttribute(v),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(v),n.defaultChecked=e,n.checked=r?e:!1}}else e.removeAttribute(i)}else te||(s||typeof a!=`string`)&&m.has(v)?(e[v]=a,v in o&&(o[v]=k)):typeof a!=`function`&&Z(e,v,a)}}}}}return l&&ot(!0),u}function ea(e,t,n=[],r=[],i=[],a,o=!1,s=!1){Kt(i,n,r,n=>{var r=void 0,i={},c=e.nodeName===Yi,l=!1;if(br(()=>{var u=t(...n.map(K)),d=$i(e,r,u,a,o,s);if(l&&c){var f=e;`defaultValue`in u&&Ii(f,u.defaultValue),`value`in u&&Ri(f,u.value)}for(let e of Object.getOwnPropertySymbols(i))u[e]||Tr(i[e]);for(let t of Object.getOwnPropertySymbols(u)){var p=u[t];t.description!==qe||r&&p===r[t]||(i[t]&&Tr(i[t]),i[t]=xr(()=>Ci(e,()=>p))),d[t]=p}r=d}),c){var u=e;hr(()=>{var e=r;`defaultValue`in e&&Ii(u,e.defaultValue),Ri(u,e.value,!0),zi(u)})}l=!0})}function ta(e){return e[me]??={[Wi]:e.nodeName.includes(`-`),[Gi]:e.namespaceURI===We}}var na=new Map;function ra(e){var t=e.getAttribute(`is`)||e.nodeName,n=na.get(t);if(n)return n;na.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var o in r=s(i),r)r[o].set&&o!==`innerHTML`&&o!==`textContent`&&o!==`innerText`&&n.add(o);i=u(i)}return n}function ia(e,t,n=t){var r=new WeakSet;Gt(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=aa(e)?oa(a):a,n(a),B!==null&&r.add(B),await nr(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(M&&e.defaultValue!==e.value||ar(t)==null&&e.value)&&(n(aa(e)?oa(e.value):e.value),B!==null&&r.add(B)),_r(()=>{var n=t();if(e===document.activeElement){var i=B;if(r.has(i))return}aa(e)&&n===oa(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function aa(e){var t=e.type;return t===`number`||t===`range`}function oa(e){return e===``?null:+e}function sa(e,t){return e===t||e?.[ue]===t}function ca(e=Ze(),t,n,r){var i=A.r,a=G;return hr(()=>{var r,o;return _r(()=>{r=o,o=[],ar(()=>{sa(n(...o),e)||(t(e,...o),r&&sa(n(...r),e)&&t(null,...r))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&ie;)r=r.parent;let s=()=>{o&&sa(n(...o),e)&&t(null,...o)},c=r.teardown;r.teardown=()=>{s(),c?.()}}}),e}var la={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return!e.exclude.has(t)&&t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function ua(e,t,n){return new Proxy({props:e,exclude:t},la)}function Q(e,t,n,r){var i=r,a=!0,o=()=>(a&&(a=!1,i=r),i),s=e[t];s===void 0&&r!==void 0&&(s=o());var c=()=>{var n=e[t];return n===void 0?o():(a=!0,n)},l=!1,u=Xt(()=>(l=!1,c())),d=G;return(function(e,t){if(arguments.length>0){let n=t?K(u):e;return U(u,n),l=!0,i!==void 0&&(i=n),e}return Nn&&l||(d.f&T)!==0?u.v:K(u)})}function da(e){return new fa(e)}var fa=class{#e;#t;constructor(e){var t=new Map,n=(e,n)=>{var r=Dn(n,!1,!1);return t.set(e,r),r};let r=new Proxy({...e.props||{},$$events:{}},{get(e,r){return K(t.get(r)??n(r,Reflect.get(e,r)))},has(e,r){return r===fe||(K(t.get(r)??n(r,Reflect.get(e,r))),Reflect.has(e,r))},set(e,r,i){return U(t.get(r)??n(r,i),i),Reflect.set(e,r,i)}});this.#t=(e.hydrate?di:ui)(e.component,{target:e.target,anchor:e.anchor,props:r,context:e.context,intro:e.intro??!1,recover:e.recover,transformError:e.transformError}),e?.props?.$$host&&e.sync!==!1||V(),this.#e=r.$$events;for(let e of Object.keys(this.#t))e!==`$set`&&e!==`$destroy`&&e!==`$on`&&a(this,e,{get(){return this.#t[e]},set(t){this.#t[e]=t},enumerable:!0});this.#t.$set=e=>{Object.assign(r,e)},this.#t.$destroy=()=>{hi(this.#t)}}$set(e){this.#t.$set(e)}$on(e,t){this.#e[e]=this.#e[e]||[];let n=(...e)=>t.call(this,...e);return this.#e[e].push(n),()=>{this.#e[e]=this.#e[e].filter(e=>e!==n)}}$destroy(){this.#t.$destroy()}},pa=class{};typeof HTMLElement==`function`&&(pa=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let e=this.$$l_u.get(t);e&&(e(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(e){return t=>{let n=Et(`slot`);e!=="default"&&(n.name=e),Y(t,n)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},n=ha(this);for(let r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(let e of this.attributes){let t=this.$$g_p(e.name);t in this.$$d||(this.$$d[t]=ma(t,e.value,this.$$p_d,`toProp`))}for(let e in this.$$p_d)!(e in this.$$d)&&this[e]!==void 0&&(this.$$d[e]=this[e],delete this[e]);this.$$c=da({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=pr(()=>{_r(()=>{this.$$r=!0;for(let e of i(this.$$c)){if(!this.$$p_d[e]?.reflect)continue;this.$$d[e]=this.$$c[e];let t=ma(e,this.$$d[e],this.$$p_d,`toAttribute`);t==null?this.removeAttribute(this.$$p_d[e].attribute||e):this.setAttribute(this.$$p_d[e].attribute||e,t)}this.$$r=!1})});for(let e in this.$$l)for(let t of this.$$l[e]){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=ma(e,n,this.$$p_d,`toProp`),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return i(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function ma(e,t,n,r){let i=n[e]?.type;if(t=i===`Boolean`&&typeof t!=`boolean`?t!=null:t,!r||!n[e])return t;if(r===`toAttribute`)switch(i){case`Object`:case`Array`:return t==null?null:JSON.stringify(t);case`Boolean`:return t?``:null;case`Number`:return t??null;default:return t}else switch(i){case`Object`:case`Array`:return t&&JSON.parse(t);case`Boolean`:return t;case`Number`:return t==null?t:+t;default:return t}}function ha(e){let t={};return e.childNodes.forEach(e=>{t[e.slot||`default`]=!0}),t}function ga(e,t,n,r,s,c){let l=class extends pa{constructor(){super(e,n,s),this.$$p_d=t}static get observedAttributes(){return i(t).map(e=>(t[e].attribute||e).toLowerCase())}};return i(t).forEach(e=>{a(l.prototype,e,{get(){return this.$$c&&e in this.$$c?this.$$c[e]:this.$$d[e]},set(n){n=ma(e,n,t),this.$$d[e]=n;var r=this.$$c;r&&(o(r,e)?.get?r[e]=n:r.$set({[e]:n}))}})}),r.forEach(e=>{a(l.prototype,e,{get(){return this.$$c?.[e]}})}),e.element=l,l}var _a=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),va=J(`<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>`);function ya(e,t){Ye(t,!0);let n=Q(t,`loading`),r=ua(t,_a),i;function a(){i?.click()}var o={get loading(){return n()},set loading(e){n(e),V()}},s=va(),c=L(s);ea(c,()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),ca(c,e=>i=e,()=>i);var l=R(c,2);return ct(2),F(s),vr(()=>Z(s,`data-loading`,n())),Br(`click`,l,a),Y(e,s),Xe(o)}Vr([`click`]),ga(ya,{loading:{}},[],[],{mode:`open`});var ba=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),xa=J(`<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>`);function Sa(e,t){Ye(t,!0);let n=Q(t,`loading`),r=ua(t,ba);var i={get loading(){return n()},set loading(e){n(e),V()}},a=xa();return ea(L(a),()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),ct(2),F(a),vr(()=>Z(a,`data-loading`,n())),Y(e,a),Xe(i)}ga(Sa,{loading:{}},[],[],{mode:`open`});var Ca=J(`<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>`);function wa(e,t){Ye(t,!0);let n=Q(t,`strings`);var r={get strings(){return n()},set strings(e){n(e),V()}},i=Ca(),a=L(i);return Z(a,`href`,`https://altcha.org`),F(i),vr(()=>Z(a,`aria-label`,n().ariaLinkLabel)),Y(e,i),Xe(r)}ga(wa,{strings:{}},[],[],{mode:`open`});var Ta=J(`<div class="altcha-footer"><p></p> <!></div>`);function Ea(e,t){Ye(t,!0);let n=Q(t,`logo`),r=Q(t,`strings`);var i={get logo(){return n()},set logo(e){n(e),V()},get strings(){return r()},set strings(e){r(e),V()}},a=Ta(),o=L(a);xi(o,()=>r().footer,!0),F(o);var s=R(o,2),c=e=>{wa(e,{get strings(){return r()}})};return X(s,e=>{n()&&e(c)}),F(a),Y(e,a),Xe(i)}ga(Ea,{logo:{},strings:{}},[],[],{mode:`open`});var Da=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),Oa=J(`<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>`);function ka(e,t){Ye(t,!0);let n=Q(t,`loading`),r=ua(t,Da),i;function a(){i?.click()}var o={get loading(){return n()},set loading(e){n(e),V()}},s=Oa(),c=L(s);ea(c,()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),ca(c,e=>i=e,()=>i);var l=R(c,2);return F(s),vr(()=>Z(s,`data-loading`,n())),Br(`click`,l,a),Y(e,s),Xe(o)}Vr([`click`]),ga(ka,{loading:{}},[],[],{mode:`open`});var Aa=(e=>(e.ERROR=`error`,e.LOADING=`loading`,e.PLAYING=`playing`,e.PAUSED=`paused`,e.READY=`ready`,e))(Aa||{}),ja=(e=>(e.SHA_256=`SHA-256`,e.SHA_384=`SHA-384`,e.SHA_512=`SHA-512`,e))(ja||{}),$=(e=>(e.CODE=`code`,e.ERROR=`error`,e.VERIFIED=`verified`,e.VERIFYING=`verifying`,e.UNVERIFIED=`unverified`,e.EXPIRED=`expired`,e))($||{}),Ma=J(`<div class="altcha-code-challenge-title"> </div>`),Na=J(`<div class="altcha-spinner"></div>`),Pa=Xr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>`),Fa=Xr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>`),Ia=Xr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>`),La=J(`<button type="button" class="altcha-button altcha-button-secondary"><!></button>`),Ra=J(`<audio hidden="" autoplay=""></audio>`),za=J(`<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>`);function Ba(e,t){Ye(t,!0);let n=Q(t,`audioUrl`),r=Q(t,`codeChallenge`),i=Q(t,`config`),a=Q(t,`imageUrl`),o=Q(t,`onCancel`),s=Q(t,`onReload`),c=Q(t,`onSubmit`),l=Q(t,`strings`),u=H(void 0),d=H(void 0),f=H(void 0),p=H(!1),m=H(``),h=H(!1);vi(()=>(i().disableAutoFocus||nr().then(()=>{K(f)?.focus()}),()=>{K(d)&&(K(d).pause(),U(d,void 0))}));function g(){U(u,Aa.PAUSED,!0)}function ee(e){U(u,Aa.ERROR,!0)}function _(){U(u,Aa.READY,!0)}function v(){U(u,Aa.LOADING,!0)}function te(){U(u,Aa.PLAYING,!0)}function y(){U(u,Aa.PAUSED,!0)}function ne(e){e.code===`Space`?(e.preventDefault(),e.stopPropagation(),x()):e.code===`Escape`&&(e.preventDefault(),e.stopPropagation(),o()?.())}function re(e){e.preventDefault(),e.stopPropagation(),c()?.(K(m))}function b(e){e.play().catch(e=>{if(!(e instanceof DOMException&&e.name===`AbortError`))throw e})}function x(){K(d)?K(u)===Aa.LOADING||(K(d).paused?(n()&&K(d).src!==n()&&(K(d).src=n()),K(d).currentTime=0,b(K(d))):K(d).pause()):(U(h,!0),requestAnimationFrame(()=>{K(d)&&n()&&(K(d).src=n(),b(K(d)))}))}var S={get audioUrl(){return n()},set audioUrl(e){n(e),V()},get codeChallenge(){return r()},set codeChallenge(e){r(e),V()},get config(){return i()},set config(e){i(e),V()},get imageUrl(){return a()},set imageUrl(e){a(e),V()},get onCancel(){return o()},set onCancel(e){o(e),V()},get onReload(){return s()},set onReload(e){s(e),V()},get onSubmit(){return c()},set onSubmit(e){c(e),V()},get strings(){return l()},set strings(e){l(e),V()}},C=za(),w=L(C),T=L(w),E=e=>{var t=Ma(),n=Ct(t,!0);vr(()=>li(n,l().verificationRequired)),Y(e,t)};X(T,e=>{i().codeChallengeDisplay!==`standard`&&e(E)});var ie=R(T,2),ae=Ct(ie,!0),oe=R(ie,2),se=R(oe,2),D=L(se);Zi(D),D.disabled=K(p),ca(D,e=>U(f,e),()=>K(f));var ce=R(D,2),le=e=>{var t=La(),n=L(t),r=e=>{Y(e,Na())},i=e=>{Y(e,Pa())},a=e=>{Y(e,Fa())},o=e=>{Y(e,Ia())};X(n,e=>{K(u)===Aa.LOADING?e(r):K(u)===Aa.ERROR?e(i,1):K(u)===Aa.PLAYING?e(a,2):e(o,-1)}),F(t),vr(()=>{Z(t,`title`,l().getAudioChallenge),t.disabled=K(u)===Aa.LOADING||K(u)===Aa.ERROR,Z(t,`aria-label`,K(u)===Aa.LOADING?l().loading:l().getAudioChallenge)}),q(`click`,t,()=>x(),!0),Y(e,t)};X(ce,e=>{r().audio&&e(le)});var O=R(ce,2);F(se);var ue=R(se,2),de=L(ue),fe=Ct(de,!0),pe=R(de,2),me=Ct(pe,!0);F(ue),F(w);var he=R(w,2),ge=e=>{var t=Ra();ca(t,e=>U(d,e),()=>K(d)),q(`error`,t,ee),q(`loadstart`,t,v),q(`canplay`,t,_),q(`pause`,t,y),q(`playing`,t,te),q(`ended`,t,g),Y(e,t)};return X(he,e=>{K(h)&&e(ge)}),F(C),vr(()=>{li(ae,l().enterCodeFromImage),Z(oe,`src`,a()),Z(D,`minlength`,r().length||1),Z(D,`maxlength`,r().length),Z(D,`placeholder`,l().enterCode),Z(D,`aria-label`,K(u)===Aa.LOADING?l().loading:K(u)===Aa.PLAYING?``:l().enterCodeAria),Z(D,`aria-live`,K(u)?`assertive`:`polite`),Z(D,`aria-busy`,K(u)===Aa.LOADING),Z(O,`title`,l().reload),Z(O,`aria-label`,l().reload),Z(de,`aria-label`,l().verify),li(fe,l().verify),Z(pe,`aria-label`,l().cancel),li(me,l().cancel)}),q(`submit`,w,re,!0),Br(`keydown`,D,ne),ia(D,()=>K(m),e=>U(m,e)),q(`click`,O,()=>s()?.(),!0),q(`click`,pe,()=>o()?.(),!0),Y(e,C),Xe(S)}Vr([`keydown`]),ga(Ba,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:`open`});var Va=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`anchor`,`children`,`display`,`backdrop`,`onClickOutside`,`onClickOutsideDelay`,`onClose`,`placement`,`updateUISignal`,`variant`]),Ha=J(`<div class="altcha-popover-backdrop" data-backdrop=""></div>`),Ua=J(`<div class="altcha-popover-arrow"></div>`),Wa=J(`<div role="button" class="altcha-popover-close">&times;</div>`),Ga=J(`<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>`,1);function Ka(e,t){Ye(t,!0);let n=Q(t,`anchor`),r=Q(t,`children`),i=Q(t,`display`,7,`standard`),a=Q(t,`backdrop`,7,!1),o=Q(t,`onClickOutside`),s=Q(t,`onClickOutsideDelay`,7,600),c=Q(t,`onClose`),l=Q(t,`placement`,7,`auto`),u=Q(t,`updateUISignal`),d=Q(t,`variant`,7,`neutral`),p=ua(t,Va),m=H(void 0),h=H(void 0),g=H(!1),ee=H(0);dr(()=>{l()!==`auto`&&U(g,l()===`top`)}),dr(()=>{u()&&ne()}),vi(()=>{let e=i()===`bottomsheet`||i()===`overlay`;return e&&(K(h)&&document.body.append(K(h)),K(m)&&document.body.append(K(m))),ne(),nr().then(()=>{U(ee,Date.now(),!0)}),()=>{e&&(K(h)&&document.body.removeChild(K(h)),K(m)&&document.body.removeChild(K(m)))}});function _(){c()?.()}function v(e){let t=e.target;!K(m)?.contains(t)&&(!s()||K(ee)+s()<Date.now())&&o()?.()}function te(){ne()}function y(){ne()}function ne(){if(n()&&l()===`auto`&&K(m)){let e=n().getBoundingClientRect(),t=document.documentElement.clientHeight-(e.top+e.height)<K(m).clientHeight;K(g)!==t&&U(g,t)}}var re={get anchor(){return n()},set anchor(e){n(e),V()},get children(){return r()},set children(e){r(e),V()},get display(){return i()},set display(e=`standard`){i(e),V()},get backdrop(){return a()},set backdrop(e=!1){a(e),V()},get onClickOutside(){return o()},set onClickOutside(e){o(e),V()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(e=600){s(e),V()},get onClose(){return c()},set onClose(e){c(e),V()},get placement(){return l()},set placement(e=`auto`){l(e),V()},get updateUISignal(){return u()},set updateUISignal(e){u(e),V()},get variant(){return d()},set variant(e=`neutral`){d(e),V()}},b=Ga();q(`click`,mt,v,!0),q(`resize`,mt,te),q(`scroll`,mt,y);var x=St(b),S=e=>{var t=Ha();ca(t,e=>U(h,e),()=>K(h)),Y(e,t)};X(x,e=>{a()&&e(S)});var C=R(x,2);ea(C,()=>({...p,class:`altcha-popover ${(t.class||``)??``}`,"data-popover":!0,"data-variant":d(),"data-top":K(g),"data-display":i()}));var w=L(C),T=e=>{Y(e,Ua())};X(w,e=>{i()===`standard`&&e(T)});var E=R(w,2),ie=e=>{var t=Wa();q(`click`,t,_,!0),Y(e,t)};X(E,e=>{i()!==`standard`&&e(ie)});var ae=R(E,2);return _i(L(ae),()=>r()??f),F(ae),F(C),ca(C,e=>U(m,e),()=>K(m)),Y(e,b),Xe(re)}ga(Ka,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:`open`});var qa=class extends Error{name=`RequestError`};function Ja(e){return Array.from(new Uint8Array(e)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Ya(e,t=`altcha-css`,n){if(typeof document<`u`&&document&&!document.getElementById(t)){let n=document.createElement(`style`);n.id=t,n.textContent=e;let r=document.currentScript?.nonce??document.querySelector(`meta[name="csp-nonce"]`)?.content;r&&(n.nonce=r),document.head.appendChild(n)}}Object.values(ja);async function Xa(e){let{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:i,onOutOfMemory:a=e=>e>1?Math.floor(e/2):0,counterMode:o,timeout:s}=e,c=Math.min(16,Math.max(1,n)),l=[],u=()=>{for(let e of l)e.terminate()};for(let e=0;e<c;e++)l.push(await i(t.parameters.algorithm));let d=null;try{d=await Promise.race(l.map((e,n)=>(r.signal.addEventListener(`abort`,()=>{e.postMessage({type:`abort`})}),new Promise((r,i)=>{e.addEventListener(`error`,e=>{i(e)}),e.addEventListener(`message`,t=>{if(t.data){for(let t of l)t!==e&&t.postMessage({type:`abort`});if(t.data.error)return i(Error(t.data.error))}r(t.data)}),e.postMessage({challenge:t,counterMode:o,counterStart:n,counterStep:c,timeout:s,type:`work`})}))))}catch(n){if(n instanceof Error&&n?.message?.includes(`Out of memory`)&&a){u();let n=a(c);if(n)return Xa({...e,challenge:t,controller:r,concurrency:n,createWorker:i})}throw n}finally{u()}return r.signal.aborted?null:d||null}var Za=class{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};POINTER_TYPES={mouse:0,pen:1,touch:2};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingClick=null;keysDown=new Map;moveTimes=[];untrusted=0;click=[];focus=[];key=[];pointer=[];scroll=[];touch=[];markTime=null;markUntrusted=0;constructor(e={}){let{maxSamples:t=60,sampleInterval:n=50,target:r=window}=e;this.maxSamples=t,this.sampleInterval=n,this.target=r,this.attach()}destroy(){let e={capture:!0};this.target.removeEventListener(`focusin`,this.onFocus,e),this.target.removeEventListener(`keydown`,this.onKeyDown,e),this.target.removeEventListener(`keyup`,this.onKeyUp,e),this.target.removeEventListener(`pointerdown`,this.onPointerDown,e),this.target.removeEventListener(`pointerup`,this.onPointerUp,e),this.target.removeEventListener(`pointermove`,this.onPointer,e),this.target.removeEventListener(`scroll`,this.onScroll,e),this.target.removeEventListener(`touchmove`,this.onTouchMove,e)}export(){return{click:this.click,focus:this.focus,key:this.key,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch,untrusted:this.untrusted,v:2,webdriver:navigator.webdriver===!0}}mark(){this.markTime=performance.now(),this.markUntrusted=this.untrusted}exportSinceMark(){let e=this.export(),t=this.markTime;if(t===null)return e;let n=this.focus.filter(e=>this.focusStartTime+e[0]>=t),r=n[0]?.[0]??0;return{...e,click:this.click.filter(e=>e[2]>=t),focus:n.map(e=>[e[0]-r,e[1],e[2],e[3]]),key:this.key.filter(e=>e[0]>=t),pointer:this.pointer.filter(e=>e[2]>=t),scroll:this.scroll.filter(e=>e[1]>=t),touch:this.touch.filter(e=>e[2]>=t),untrusted:this.untrusted-this.markUntrusted}}attach(){let e={passive:!0,capture:!0};this.target.addEventListener(`focusin`,this.onFocus,e),this.target.addEventListener(`keydown`,this.onKeyDown,e),this.target.addEventListener(`keyup`,this.onKeyUp,e),this.target.addEventListener(`pointerdown`,this.onPointerDown,e),this.target.addEventListener(`pointerup`,this.onPointerUp,e),this.target.addEventListener(`pointermove`,this.onPointer,e),this.target.addEventListener(`scroll`,this.onScroll,e),this.target.addEventListener(`touchmove`,this.onTouchMove,e)}evict(e){e.length>this.maxSamples&&e.splice(0,e.length-this.maxSamples)}onFocus=e=>{if(!e.isTrusted){this.untrusted++;return}if(this.focusInteraction===2)return;let t=e.target;if(!(t instanceof Element))return;let n=performance.now();this.focusStartTime===0&&(this.focusStartTime=n),this.focus.push([Math.round(n-this.focusStartTime),t.tabIndex,this.TAG_CODES[t.tagName]??0,+!!this.focusInteraction]),this.evict(this.focus)};setInteraction(e){this.focusInteraction=e,clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)}onKeyDown=e=>{if(!e.isTrusted){this.untrusted++;return}if(this.setInteraction(1),e.repeat)return;let t=e.timeStamp||performance.now(),n=[Math.round(t),-1];this.key.push(n),this.evict(this.key),this.keysDown.set(e.code,{sample:n,down:t})};onKeyUp=e=>{if(!e.isTrusted){this.untrusted++;return}let t=this.keysDown.get(e.code);if(t){let n=e.timeStamp||performance.now();t.sample[1]=Math.round(n-t.down),this.keysDown.delete(e.code)}};onPointerDown=e=>{if(!e.isTrusted){this.untrusted++;return}this.setInteraction(2);let t=e.timeStamp||performance.now(),n=e.target instanceof Element?e.target.getBoundingClientRect():null,r=0;for(let e of this.moveTimes)e>=t-500&&e<t&&r++;let i=[Math.round(e.clientX),Math.round(e.clientY),Math.round(t),-1,n?Math.round(e.clientX-(n.left+n.width/2)):0,n?Math.round(e.clientY-(n.top+n.height/2)):0,this.POINTER_TYPES[e.pointerType]??3,r];this.click.push(i),this.evict(this.click),this.pendingClick={sample:i,down:t}};onPointerUp=e=>{if(!e.isTrusted)this.untrusted++;else if(this.pendingClick){let t=e.timeStamp||performance.now();this.pendingClick.sample[3]=Math.round(t-this.pendingClick.down),this.pendingClick=null}};onPointer=e=>{if(!e.isTrusted){this.untrusted++;return}if(e.pointerType===`touch`)return;let t=e.timeStamp||performance.now();this.moveTimes.push(t),this.moveTimes.length>32&&this.moveTimes.shift(),t-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push([Math.round(e.clientX),Math.round(e.clientY),Math.round(t)]),this.lastPointerSample=t,this.evict(this.pointer))};onScroll=e=>{if(!e.isTrusted){this.untrusted++;return}let t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=e=>{if(!e.isTrusted){this.untrusted++;return}let t=e.timeStamp||performance.now(),n=e.touches[0];n&&t-this.lastTouchSample>=this.sampleInterval&&(this.touch.push([Math.round(n.clientX),Math.round(n.clientY),Math.round(t),Math.round(n.force*1e3)/1e3,Math.round(n.radiusX||0),Math.round(n.radiusY||0)]),this.lastTouchSample=t,this.evict(this.touch))}},Qa=J(`<div class="altcha-overlay-backdrop" data-backdrop=""></div>`),$a=J(`<div class="altcha-overlay-content"></div>`),eo=J(`<div role="button" class="altcha-overlay-close">&times;</div> <!>`,1),to=J(`<div class="altcha-floating-arrow"></div>`),no=J(`<input type="hidden"/>`),ro=J(`<div class="altcha-error">Secure context (HTTPS) required.</div>`),io=J(`<div class="altcha-error"> </div>`),ao=J(`<!> <!>`,1),oo=J(`<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>`,1);function so(e,t){Ye(t,!0);let n=()=>zt(c,`$altchaDefaults`,i),r=()=>zt(f,`$altchaI18nStore`,i),[i,a]=Bt(),o=[`ar`,`fa`,`he`,`ur`],{isSecureContext:s}=globalThis,{store:c}=globalThis.$altcha.defaults,l=navigator.hardwareConcurrency||2,u=navigator.deviceMemory||0,d=u&&u<=4?Math.min(4,l):l,f=globalThis.$altcha.i18n.store,p=t.$$host,m=(e,t)=>{nr().then(()=>{p?.dispatchEvent(new CustomEvent(e,{detail:t}))})},h=null,g=H(dt(new URL(location.origin))),ee=H(!1),_=H(null),v=H(null),te=H(null),y=H(dt($.UNVERIFIED)),ne=H(void 0),re=H(void 0),b=H(null),x=H(void 0),S=H(null),C=H(null),w=H(null),T=H(null),E=H(null),ie=H(dt([])),ae=H(0),oe=H(dt({})),se=H(!0),D=$t(()=>({fetch:(e,t)=>fetch(e,t),audioChallengeLanguage:``,auto:`off`,barPlacement:`bottom`,challenge:``,codeChallenge:null,codeChallengeDisplay:`standard`,credentials:null,debug:!1,disableAutoFocus:!1,display:`standard`,floatingAnchor:``,floatingOffset:8,floatingPersist:!1,floatingPlacement:`auto`,formatError:null,hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:``,mockError:!1,minDuration:500,overlayContent:``,name:`altcha`,popoverPlacement:`auto`,retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationFieldNames:[],serverVerificationFieldsSelector:`input[type="text"]:not([data-no-spamfilter]), input[type="email"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])`,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:`checkbox`,validationMessage:``,verifyFunction:null,verifyUrl:``,workers:d,...n(),...K(oe)})),ce=$t(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*0xe8d4a51000).toString(16)}`),le=$t(()=>Oe(K(D).type)),O=$t(()=>K(D).auto),ue=$t(()=>K(y)===$.VERIFYING),de=$t(()=>!K(D).hideFooter),fe=$t(()=>!K(D).hideLogo&&K(D).display!==`bar`),pe=$t(()=>ke(r(),[K(D).language,document.documentElement.lang,...navigator.languages])),me=$t(()=>o.includes(K(pe).language)?`rtl`:void 0),he=$t(()=>({...K(pe).strings})),ge=$t(()=>K(_)?.audio?.match(/^(https?:)?\//)?Fe(K(_).audio,K(g),{language:K(D).audioChallengeLanguage||K(pe).language}).toString():K(_)?.audio),_e=$t(()=>K(_)?.image?.match(/^(https?:)?\//)?Fe(K(_).image,K(g)):K(_)?.image);dr(()=>{nt({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),dr(()=>{t.theme?p?.setAttribute(`theme`,t.theme):p?.removeAttribute(`theme`)}),dr(()=>{if(t.configuration)try{nt(JSON.parse(t.configuration))}catch{j("unable to parse the `configuration` attribute (JSON expected)")}}),dr(()=>{K(te)!==K(D).display&&Ze(K(D).display)}),dr(()=>{K(ee)&&K(y)===$.VERIFYING&&U(ee,!1)}),dr(()=>{!K(ee)&&K(y)===$.VERIFIED&&U(ee,!0)}),dr(()=>{if(!K(ee)){let e=De();e&&e.checked&&(e.checked=!1)}}),dr(()=>{K(y)===$.VERIFIED&&De()?.setCustomValidity(``)}),dr(()=>{if(K(O)===`onload`){let e=setTimeout(()=>{ct()},10);return()=>{e&&clearTimeout(e)}}}),dr(()=>{K(C)&&j(`error:`,K(C))}),dr(()=>{K(E)&&K(D).setCookie&&Je(K(E),K(D).setCookie)}),vi(()=>(j(`mounted`,`3.7.0`),p&&globalThis.$altcha.instances.add(p),U(b,je(),!0),K(b)?.addEventListener(`reset`,He),K(b)?.addEventListener(`submit`,Ue,{capture:!0}),document.addEventListener(`focusin`,Ve),ve(),K(D).humanInteractionSignature&&(j(`human interaction signature enabled`),h=new Za),m(`load`),s||j(`secure context (HTTPS) required`),()=>{be(),p&&globalThis.$altcha.instances.delete(p),K(T)&&clearTimeout(K(T)),K(b)?.removeEventListener(`reset`,He),K(b)?.removeEventListener(`submit`,Ue,{capture:!0}),document.removeEventListener(`focusin`,Ve),h?.destroy()}));function ve(){U(ie,[...globalThis.$altcha.plugins].map(e=>new e(p)),!0),j(`activating plugins`,K(ie).map(e=>e.constructor.name));for(let e of K(ie))e.activate()}async function ye(e,...t){let n;for(let r of K(ie))n=await r[e].call(r,...t);return n}function be(){for(let e of K(ie))e.destroy()}function xe(e){let[t,n]=e.salt.split(`?`),r={};if(n)try{Object.assign(r,Object.fromEntries(new URLSearchParams(n).entries()))}catch{}let i={codeChallenge:e.codeChallenge,parameters:{algorithm:e.algorithm,cost:1,data:r,expiresAt:r?.expires?parseInt(r.expires,10):void 0,keyLength:e.algorithm===`SHA-512`?64:e.algorithm===`SHA-384`?48:32,nonce:Ja(new TextEncoder().encode(e.salt)),keyPrefix:e.challenge,salt:``},signature:e.signature};return Object.defineProperties(i,{_originalSalt:{enumerable:!1,value:e.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),i}function Se(e,t){return{algorithm:e.parameters.algorithm,challenge:e.parameters.keyPrefix,number:t.counter,salt:`_originalSalt`in e?e._originalSalt:e.parameters.nonce,signature:e.signature,took:t.time||0}}async function Ce(e){await new Promise(t=>setTimeout(t,e))}async function we(e=K(D).challenge,t){let n=await ye(`onFetchChallenge`,e),r=null;if(n!==void 0)return n;if(typeof e==`string`){if(e.startsWith(`{`)){j(`parsing JSON challenge`);try{r=JSON.parse(e)}catch{throw Error(`Unable to parse JSON challenge.`)}}else{j(`fetching challenge from`,t?.method||`GET`,e),U(g,new URL(e,location.origin),!0);let{headers:n,json:i}=await $e(e,{credentials:K(D).credentials||void 0,...t}),a=n.get(`x-altcha-config`);if(a&&Ge(a),i&&`his`in i&&i.his){if(j(`requested HIS`),!h)throw Error(`Server requested HIS data but collector is disabled.`);let e=h.export();return h.mark(),we(Fe(i.his.url,K(g)),{body:JSON.stringify({his:e}),headers:{"content-type":`application/json`},method:`POST`})}i&&`hisResult`in i&&i.hisResult&&j(`HIS result`,i.hisResult),r=i}}else if(e&&typeof e==`object`)try{r=JSON.parse(JSON.stringify(e))}catch{throw Error(`Unable to parse JSON challenge.`)}if(Te(r)&&(r=xe(r)),!Ee(r))throw Error(`Challenge validation failed.`);return r}function Te(e){return typeof e==`object`&&!!e&&`challenge`in e}function Ee(e){return!!e&&typeof e==`object`&&`parameters`in e&&!!e.parameters&&typeof e.parameters==`object`&&`algorithm`in e.parameters&&`nonce`in e.parameters&&`salt`in e.parameters&&`keyPrefix`in e.parameters}function De(){return document.getElementById(K(ce))}function Oe(e){switch(e){case`checkbox`:return ya;case`switch`:return ka;default:return Sa}}function ke(e,t){let n=Object.keys(e).map(e=>e.toLowerCase()),r=t.reduce((t,r)=>(r=r.toLowerCase(),t||(e[r]?r:null)||n.find(e=>r.split(`-`)[0]===e.split(`-`)[0])||null),null);return e[r||``]||(r=`en`),{language:r,strings:e[r]}}function Ae(e){switch(e){case`bar`:return K(D).barPlacement||`bottom`;case`floating`:return K(D).floatingPlacement||`auto`;default:return}}function je(){if(t.form){let e=(p?.getRootNode())?.getElementById?.(t.form);return e instanceof HTMLFormElement?e:null}return K(x)?.closest(`form`)??null}function Me(e){return K(b)?Array.from(K(b).elements).filter(t=>t.matches(e)):[]}function Ne(){let e=K(D).serverVerificationFieldNames,t=e?.length?e.map(e=>`[name="${CSS.escape(e)}"]`).join(`, `):K(D).serverVerificationFieldsSelector;return t?Me(t).reduce((e,t)=>{let n=t.name,r=t.value;return n&&r&&(e[n]=/\n/.test(r)?r.replace(RegExp(`(?<!\\r)\\n`,`g`),`\r
`):r),e},{}):{}}function Pe(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Fe(e,t,n){let r=new URL(e,t);if(r.search||=t.search,n)for(let e in n)n[e]!==void 0&&n[e]!==null&&r.searchParams.set(e,n[e]);return r.toString()}function Ie(e){!K(ee)&&e.currentTarget.checked?(e.preventDefault(),e.currentTarget.checked=!1,K(y)!==$.VERIFYING&&ct()):e.currentTarget.checked||(e.preventDefault(),M())}function Le(e){K(y)===$.VERIFYING?e.currentTarget.setCustomValidity(K(he).waitAlert):K(D).validationMessage&&e.currentTarget.setCustomValidity(K(D).validationMessage)}function Re(){Ze(K(D).display),M()}function ze(){st()}function Be(e){let t=e.target;K(D).display!==`floating`||!t||p?.contains(t)||t.hasAttribute(`data-backdrop`)||t.closest(`[data-popover]`)||K(y)===$.VERIFIED||K(D).floatingPersist||at()}function Ve(e){let t=e.target;K(O)===`onfocus`&&K(y)===$.UNVERIFIED&&K(b)&&t instanceof Element&&(K(b).contains(t)||t.form===K(b))&&ct()}function He(){Ze(K(D).display),M()}function Ue(e){e.target?.getAttribute(`data-code-challenge`)!==`true`&&K(O)===`onsubmit`&&K(y)===$.UNVERIFIED&&(e.preventDefault(),e.stopPropagation(),U(S,e.submitter,!0),P(),ct().then(e=>{e&&!K(_)&&nr().then(()=>{A(K(S))})}))}function k(e){e.persisted&&(Ze(K(D).display),M())}function We(){st()}function Ge(e){try{let t=JSON.parse(e);t&&typeof t==`object`&&nt({serverVerificationFields:t?.sentinel?.fields,serverVerificationTimeZone:t?.sentinel?.timeZone,verifyUrl:t.verifyurl,...t})}catch(e){j(`unable to configure from x-altcha-config header`,e)}}function Ke(e=20){if(!K(x))return;let t=K(D).floatingPlacement;if(!K(re)&&(U(re,(K(D).floatingAnchor instanceof HTMLElement?K(D).floatingAnchor:K(D).floatingAnchor?document.querySelector(K(D).floatingAnchor):Me(`input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])`)[0])||K(b),!0),!K(re))){j(`unable to find floating anchor element`);return}let n=parseInt(K(D).floatingOffset,10)||12,r=K(re).getBoundingClientRect(),i=K(x).getBoundingClientRect(),a=document.documentElement.clientHeight,o=document.documentElement.clientWidth,s=!t||t===`auto`?r.bottom+i.height+n+e>a:t===`top`,c=Math.max(e,Math.min(o-e-i.width,r.left+r.width/2-i.width/2));if(K(x).style.setProperty(`--altcha-floating-left`,`${c}px`),K(x).style.setProperty(`--altcha-floating-top`,s?`${r.top-(i.height+n)}px`:`${r.bottom+n}px`),K(x).setAttribute(`data-floating-position`,s?`top`:`bottom`),K(ne)){let e=K(ne).getBoundingClientRect();K(ne).style.left=r.left-c+r.width/2-e.width/2+`px`}}async function qe(e,t){let n=await ye(`onRequestServerVerification`,e,t);if(n!==void 0)return n;if(j(`requesting server verification from`,K(D).verifyUrl),!K(D).verifyUrl)throw Error(`Parameter verifyUrl must be set for server verification.`);let{json:r}=await $e(Fe(K(D).verifyUrl,K(g)),{body:JSON.stringify({code:t,fields:K(D).serverVerificationFields?Ne():void 0,his:K(_)?.his&&h?h.exportSinceMark():void 0,payload:e,timeZone:K(D).serverVerificationTimeZone?Pe():void 0}),credentials:K(D).credentials||void 0,headers:{"Content-Type":`application/json`},method:`POST`});return r&&typeof r==`object`&&`payload`in r&&r.payload&&m(`serververification`,r),r}function A(e){K(b)&&`requestSubmit`in K(b)?K(b).requestSubmit(e):K(b)?.reportValidity()&&(e?e.click():K(b).submit())}function Je(e,t={}){let{domain:n,name:r=K(D).name,maxAge:i,path:a,sameSite:o,secure:s}=t,c=`${encodeURIComponent(r)}=${encodeURIComponent(e)}`;n&&(c+=`; Domain=${n}`),i!=null&&(c+=`; Max-Age=${i}`),a&&(c+=`; Path=${a}`),o&&(c+=`; SameSite=${o}`),s&&(c+=`; Secure`),document.cookie=c}function Ze(e){switch(e){case`bar`:case`floating`:case`overlay`:at(),K(O)&&K(O)!==`off`||(K(oe).auto=`onsubmit`);break;case`standard`:P()}K(te)!==e&&U(te,e,!0)}function Qe(e){K(T)&&clearTimeout(K(T));let t=()=>{K(y)===$.UNVERIFIED?M():(U(ee,!1),N($.EXPIRED)),m(`expired`)},n=e*1e3-Date.now();n>=1?U(T,setTimeout(t,n),!0):t()}async function $e(e,t){try{let n=await K(D).fetch(e,t);return await et(n),{headers:n.headers,json:await n.json()}}catch(e){throw new qa(e instanceof Error?e.message:String(e))}}async function et(e){if(e.status>=400){if(e.headers.get(`content-type`)?.includes(`/json`)){let t;try{t=await e.json()}catch{}if(t&&`error`in t)throw Error(`Server responded with ${e.status} - ${t.error}`)}throw Error(`Server responded with ${e.status}.`)}let t=e.headers.get(`content-type`);if(!t||!t.includes(`/json`))throw Error(`Server responded with invalid content-type. Expected application/json, received ${t}.`)}async function tt(e){if(!K(E)){ot(Error(`Cannot verify code challenge without PoW payload.`));return}N($.VERIFYING);let t=null;if(K(D).verifyUrl)t=await qe(K(E),e);else if(K(D).verifyFunction)t=await K(D).verifyFunction(K(E),e);else{ot(Error(`Parameter verifyUrl is required for code challenge verification.`));return}t?.payload&&(U(E,t.payload,!0),j(`server payload`,K(E))),t?.verified===!0?(j(`verified`),N($.VERIFIED),m(`verified`,{payload:K(E)}),K(O)===`onsubmit`&&nr().then(()=>{A(K(S))})):ot(Error(t?.reason||`Verification failed.`)),K(D).disableAutoFocus||De()?.focus()}function nt(e){Object.assign(K(oe),{...Object.fromEntries(Object.entries(e).filter(([e,t])=>t!==void 0))})}function rt(){return{...K(D)}}function it(){return K(y)}function at(){U(se,!1)}function j(...e){(K(D).debug||e.some(e=>e instanceof Error))&&console[e[0]instanceof Error?`error`:`log`](`ALTCHA`,`[name=${K(D).name}]`,...e)}function M(e=$.UNVERIFIED,t=null){U(ee,!1),U(C,t,!0),U(E,null),K(v)&&K(v).abort(),K(T)&&(clearTimeout(K(T)),U(T,null)),N(e)}function ot(e){let t=e instanceof Error?e:Error(String(e));N($.ERROR,String(t)),K(D).formatError?U(w,K(D).formatError(t)||null,!0):t instanceof qa&&U(w,`Error: ${t.message}`)}function N(e,t=null){U(y,e,!0),U(C,t,!0),U(w,null),m(`statechange`,{payload:K(E),state:K(y)})}function P(){U(se,!0),nr().then(()=>{st()})}function st(){if(K(D).display===`floating`)return Ke();U(ae,K(ae)+1)}async function ct(e={}){let{concurrency:t=Math.max(1,K(D).workers),controller:n=new AbortController,minDuration:r=K(D).minDuration}=e,i=performance.now(),a=null,o=null,c=!1,l=await ye(`onVerify`,e);if(l!==void 0)return l;M($.VERIFYING),U(v,n,!0);try{if(!s)throw Error(`Secure context (HTTPS) required.`);if(K(D).mockError)throw Error(`Mock error.`);if(K(D).test)return j(`running test mode with null challenge`),await Ce(Math.max(0,r-(performance.now()-i))),K(v)?.signal.aborted?(M(),null):(U(E,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),j(`verified`),N($.VERIFIED),m(`verified`,{payload:K(E)}),{payload:K(E)});if(a=await we(),!a)throw Error(`Failed to fetch challenge.`);j(`challenge`,a),`configuration`in a&&(j(`re-configuring from challenge`,a.configuration),nt(a.configuration)),a.parameters.expiresAt&&Qe(a.parameters.expiresAt),c=`_version`in a&&a._version===1;let e=globalThis.$altcha.algorithms.get(a.parameters.algorithm);if(!e)throw Error(`Unsupported algorithm ${a.parameters.algorithm}.`);if(o=await Xa({challenge:a,concurrency:t,controller:n,createWorker:e,counterMode:c?`string`:`uint32`,onOutOfMemory:e=>{if(j(`out of memory error received`),m(`outofmemory`),K(D).retryOnOutOfMemoryError&&e>1){let t=Math.floor(e/2);return j(`retrying with ${t} workers...`),t}},timeout:K(D).timeout}),K(v)?.signal.aborted)return M(),null;if(!o)throw Error(`Failed to find solution.`);j(`solution`,o),await Ce(Math.max(0,r-(performance.now()-i))),U(_,a.codeChallenge||K(D).codeChallenge||null,!0),c?U(E,btoa(JSON.stringify(Se(a,o))),!0):U(E,btoa(JSON.stringify({challenge:{parameters:a.parameters,signature:a.signature},solution:o})),!0),K(_)?(j(`requesting code verification`),N($.CODE),m(`codechallenge`,{codeChallenge:K(_)})):K(D).verifyUrl?await tt():(j(`verified`),N($.VERIFIED),m(`verified`,{payload:K(E)}))}catch(e){return j(`verification failed`,e),ot(e),null}finally{U(v,null)}return{challenge:a,payload:K(E),solution:o}}var lt={configure:nt,getConfiguration:rt,getState:it,hide:at,log:j,reset:M,setState:N,show:P,updateUI:st,verify:ct},ut=oo();q(`scroll`,ht,ze),q(`click`,ht,Be),q(`pageshow`,mt,k),q(`resize`,mt,We);var ft=St(ut),pt=e=>{Y(e,Qa())};X(ft,e=>{K(D).display===`overlay`&&K(se)&&e(pt)});var gt=R(ft,2),_t=L(gt),vt=e=>{var t=eo(),n=St(t),r=R(n,2),i=e=>{var t=$a();xi(t,()=>document.querySelector(K(D).overlayContent)?.innerHTML,!0),F(t),Y(e,t)};X(r,e=>{K(D).overlayContent&&e(i)}),q(`click`,n,Re,!0),Y(e,t)};X(_t,e=>{K(D).display===`overlay`&&K(se)&&e(vt)});var yt=R(_t,2),bt=L(yt),I=L(bt),xt=L(I);{let e=$t(()=>K(D).display===`standard`&&K(O)!==`onsubmit`||K(y)===$.VERIFYING);Si(xt,()=>K(le),(n,r)=>{r(n,{get id(){return K(ce)},get form(){return t.form},name:``,get required(){return K(e)},get loading(){return K(ue)},get checked(){return K(ee)},onchange:Ie,oninvalid:Le})})}var wt=R(xt,2),Tt=L(wt),Et=e=>{var t=Zr();vr(()=>li(t,K(he).verificationRequired)),Y(e,t)},Dt=e=>{var t=Zr();vr(()=>li(t,K(he).verifying)),Y(e,t)},Ot=e=>{var t=Zr();vr(()=>li(t,K(he).verified)),Y(e,t)},kt=e=>{var t=Zr();vr(()=>li(t,K(he).label)),Y(e,t)};X(Tt,e=>{K(y)===$.CODE&&K(_)?e(Et):K(y)===$.VERIFYING?e(Dt,1):K(y)===$.VERIFIED?e(Ot,2):e(kt,-1)}),F(wt),F(I);var At=R(I,2),z=e=>{wa(e,{get strings(){return K(he)}})};X(At,e=>{K(fe)&&e(z)}),F(bt);var jt=R(bt,2),Mt=e=>{{let t=$t(()=>K(D).display===`bar`&&K(fe));Ea(e,{get logo(){return K(t)},get strings(){return K(he)}})}};X(jt,e=>{K(de)&&e(Mt)});var Nt=R(jt,2),Pt=e=>{var t=to();ca(t,e=>U(ne,e),()=>K(ne)),Y(e,t)};X(Nt,e=>{K(D).display===`floating`&&e(Pt)});var Ft=R(Nt,2),It=e=>{var n=no();Zi(n),vr(()=>{Z(n,`form`,t.form),Z(n,`name`,K(D).name),Qi(n,K(E))}),Y(e,n)};X(Ft,e=>{K(D).setCookie||e(It)}),F(yt);var Lt=R(yt,2),Rt=e=>{Ka(e,{get anchor(){return K(x)},onClickOutside:()=>{s&&M()},get placement(){return K(D).popoverPlacement},role:`alert`,variant:`error`,get dir(){return K(me)},get updateUISignal(){return K(ae)},children:(e,t)=>{var n=Qr(),r=St(n),i=e=>{Y(e,ro())},a=e=>{var t=io(),n=Ct(t,!0);vr(()=>li(n,K(he).expired)),Y(e,t)},o=e=>{var t=io(),n=Ct(t,!0);vr(()=>{Z(t,`title`,K(C)),li(n,K(w)||K(he).error)}),Y(e,t)};X(r,e=>{!K(C)&&!s?e(i):!K(C)&&K(y)===$.EXPIRED?e(a,1):e(o,-1)}),Y(e,n)},$$slots:{default:!0}})},Vt=e=>{var t=Qr();bi(St(t),()=>K(_),e=>{{let t=$t(()=>K(D).codeChallengeDisplay!==`standard`);Ka(e,{get anchor(){return K(x)},get backdrop(){return K(t)},get display(){return K(D).codeChallengeDisplay},onClose:()=>{M()},get placement(){return K(D).popoverPlacement},role:`dialog`,get"aria-label"(){return K(he).verificationRequired},get dir(){return K(me)},get updateUISignal(){return K(ae)},children:(e,t)=>{var n=ao(),r=St(n);Ba(r,{get audioUrl(){return K(ge)},get imageUrl(){return K(_e)},onCancel:()=>M(),onReload:()=>ct(),onSubmit:e=>tt(e).catch(ot),get codeChallenge(){return K(_)},get config(){return K(D)},get strings(){return K(he)}});var i=R(r,2),a=e=>{Ea(e,{get logo(){return K(fe)},get strings(){return K(he)}})};X(i,e=>{K(de)&&K(D).codeChallengeDisplay!==`standard`&&e(a)}),Y(e,n)},$$slots:{default:!0}})}}),Y(e,t)};X(Lt,e=>{K(C)||K(y)===$.EXPIRED||!s?e(Rt):K(_)&&K(y)===$.CODE&&e(Vt,1)}),F(gt),ca(gt,e=>U(x,e),()=>K(x)),vr(e=>{Z(gt,`data-state`,K(y)),Z(gt,`data-display`,K(D).display||void 0),Z(gt,`data-placement`,e),Z(gt,`data-visible`,K(se)||void 0),Z(gt,`dir`,K(me)),Z(wt,`for`,K(ce)),gt.dir=gt.dir},[()=>Ae(K(D).display)]),Y(e,ut);var Ht=Xe(lt);return a(),Ht}typeof window<`u`&&window.customElements&&!customElements.get(`altcha-widget`)&&customElements.define(`altcha-widget`,ga(so,{auto:{type:`String`},challenge:{type:`String`},configuration:{type:`String`},display:{type:`String`},form:{type:`String`},language:{type:`String`},name:{type:`String`},theme:{type:`String`},type:{type:`String`},workers:{type:`Number`}},[],[`configure`,`getConfiguration`,`getState`,`hide`,`log`,`reset`,`setState`,`show`,`updateUI`,`verify`]));var co=`(function() {
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
`,lo=typeof self<`u`&&self.Blob&&new Blob([`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`,co],{type:`text/javascript;charset=utf-8`});function uo(e){let t;try{if(t=lo&&(self.URL||self.webkitURL).createObjectURL(lo),!t)throw``;let n=new Worker(t,{name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(co),{name:e?.name})}}var fo=`(function() {
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
`,po=typeof self<`u`&&self.Blob&&new Blob([`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`,fo],{type:`text/javascript;charset=utf-8`});function mo(e){let t;try{if(t=po&&(self.URL||self.webkitURL).createObjectURL(po),!t)throw``;let n=new Worker(t,{name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(fo),{name:e?.name})}}Ya(`:root {
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
}`),$altcha.algorithms.set(`SHA-256`,()=>new mo),$altcha.algorithms.set(`SHA-384`,()=>new mo),$altcha.algorithms.set(`SHA-512`,()=>new mo),$altcha.algorithms.set(`PBKDF2/SHA-256`,()=>new uo),$altcha.algorithms.set(`PBKDF2/SHA-384`,()=>new uo),$altcha.algorithms.set(`PBKDF2/SHA-512`,()=>new uo);var ho={ARGON2ID:`argon2id.js`,SCRYPT:`scrypt.js`};function go(){let e=globalThis.$altcha;return e?.algorithms instanceof Map?e.algorithms:null}function _o(e,t=go()){if(!t||e===``)return 0;let n=e.endsWith(`/`)?e:`${e}/`,r=0;for(let[e,i]of Object.entries(ho))t.has(e)||(t.set(e,()=>new Worker(`${n}${i}`)),r++);return r}function vo(){try{return globalThis.NOWO_CONSOLE===`quiet`||typeof document<`u`&&document.documentElement.dataset.nowoConsole===`quiet`}catch{return!1}}var yo={script:`color:#0ea5e9;font-weight:bold`,debug:`color:#6b7280`,info:`color:#2563eb`,warn:`color:#d97706`,error:`color:#dc2626;font-weight:bold`},bo={script:`📦`,debug:`🔍`,info:`ℹ️`,warn:`⚠️`,error:`❌`};function xo(e){return e.map(e=>typeof e==`object`&&e&&!(e instanceof Error)?JSON.stringify(e):e)}function So(e,t={}){let n=`[${e}]`,{buildTime:r}=t,i=!1;return{scriptLoaded(){vo()||(r!==void 0&&r!==``?console.log(`%c${bo.script} ${n} script loaded, build: %c${r}`,yo.script,`color:#059669`):console.log(`%c${bo.script} ${n} script loaded`,yo.script))},setDebug(e){i=e},debug(...e){i&&(e.length>0?console.debug(`%c${bo.debug} ${n}`,yo.debug,...xo(e)):console.debug(`%c${bo.debug} ${n}`,yo.debug))},info(...e){i&&(e.length>0?console.info(`%c${bo.info} ${n}`,yo.info,...xo(e)):console.info(`%c${bo.info} ${n}`,yo.info))},warn(...e){i&&(e.length>0?console.warn(`%c${bo.warn} ${n}`,yo.warn,...xo(e)):console.warn(`%c${bo.warn} ${n}`,yo.warn))},error(...e){i&&(e.length>0?console.error(`%c${bo.error} ${n}`,yo.error,...xo(e)):console.error(`%c${bo.error} ${n}`,yo.error))}}}var Co=!1,wo=So(`altcha-type`);function To(e){wo=So(`altcha-type`,{buildTime:e}),wo.setDebug(Co)}function Eo(e){Co=e,wo.setDebug(e)}function Do(){return wo}function Oo(e){let t=e.querySelector(`[data-altcha-type-target="input"]`),n=e.querySelector(`[data-altcha-type-target="widget"]`);if(!t||!n)return Do().debug(`init skipped: missing input or widget`),!1;let r=e.getAttribute(`data-altcha-type-workers-url-value`);r&&Do().debug(`algorithm workers registered`,_o(r));let i=e=>{let n=e.detail?.payload;typeof n==`string`&&n!==``&&(t.value=n,t.dispatchEvent(new Event(`input`,{bubbles:!0})),t.dispatchEvent(new Event(`change`,{bubbles:!0})),Do().debug(`payload synced to form input`))},a=e=>{let n=e.detail;n?.state===`verified`&&typeof n.payload==`string`&&(t.value=n.payload),(n?.state===`unverified`||n?.state===`error`||n?.state===`expired`)&&(t.value=``)};return n.addEventListener(`verified`,i),n.addEventListener(`statechange`,a),e.__nowoAltchaCleanup=()=>{n.removeEventListener(`verified`,i),n.removeEventListener(`statechange`,a)},Do().debug(`container initialized`),!0}function ko(e){let t=e.__nowoAltchaCleanup;typeof t==`function`&&(t(),delete e.__nowoAltchaCleanup)}var Ao=`.nowo-altcha-type`;function jo(e=document){e.querySelectorAll(Ao).forEach(e=>{Eo(e.getAttribute(`data-altcha-type-debug-value`)===`1`),Oo(e)})}function Mo(){Do().debug(`boot`,{buildTime:`2026-11-23 14:05 UTC`}),jo(),typeof MutationObserver<`u`&&new MutationObserver(e=>{for(let t of e)t.addedNodes.forEach(e=>{e instanceof HTMLElement&&(e.matches(Ao)?Oo(e):jo(e))}),t.removedNodes.forEach(e=>{e instanceof HTMLElement&&e.matches(Ao)&&ko(e)})}).observe(document.documentElement,{childList:!0,subtree:!0})}var No=`__nowoAltchaTypeBooted`,Po=window;Po[No]!==!0&&(Po[No]=!0,To(`2026-11-23 14:05 UTC`),Do().scriptLoaded(),document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Mo,{once:!0}):Mo())})();