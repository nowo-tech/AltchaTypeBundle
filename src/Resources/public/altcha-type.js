(function(){var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.keys,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,c=Object.prototype,l=Array.prototype,u=Object.getPrototypeOf,d=Object.isExtensible,f=()=>{};function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var h=2,g=4,_=8,v=1<<24,y=16,ee=32,b=64,te=128,ne=256,x=512,S=1024,C=2048,w=4096,T=8192,E=16384,re=32768,ie=1<<25,ae=65536,oe=1<<17,D=1<<18,O=1<<19,se=65536,ce=1<<21,le=1<<23,ue=Symbol(`$state`),de=Symbol(`component`),fe=Symbol(`legacy props`),pe=Symbol(``),me=Symbol(`attributes`),he=Symbol(`class`),ge=Symbol(`style`),_e=Symbol(`text`),ve=Symbol(`form reset`),ye=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},be=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),xe=3,Se=8;function Ce(e){return e===this.v}function we(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Te(e){return!we(e,this.v)}function Ee(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function De(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function Oe(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function ke(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function Ae(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function je(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Me(){throw Error(`https://svelte.dev/e/hydration_failed`)}function Ne(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function Pe(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Fe(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Ie(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Le=1,Re=2,ze=`[`,Be=`[!`,Ve=`[?`,He=`]`,Ue={},k=Symbol(`uninitialized`),We=`http://www.w3.org/1999/xhtml`,Ge=`http://www.w3.org/2000/svg`,Ke=`http://www.w3.org/1998/Math/MathML`,qe=`@attach`,A=null;function Je(e){A=e}function Ye(e,t=!1,n){A={p:A,i:!1,c:null,e:null,s:e,x:null,r:U,l:null}}function Xe(e){var t=A,n=t.e;if(n!==null){t.e=null;for(var r of n)mr(r)}return e!==void 0&&(t.x=e),t.i=!0,A=t.p,Ze(e)}function Ze(e={}){return a(e,de,{value:!0}),e}function Qe(){return!0}var $e=[];function et(){var e=$e;$e=[],p(e)}function tt(e){if($e.length===0&&!fn){var t=$e;queueMicrotask(()=>{t===$e&&et()})}$e.push(e)}function nt(){for(;$e.length>0;)et()}function rt(){console.warn(`https://svelte.dev/e/derived_inert`)}function j(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function it(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function at(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var M=!1;function ot(e){M=e}var N;function st(e){if(e===null)throw j(),Ue;return N=e}function ct(){return st(Ct(N))}function P(e){if(M){if(Ct(N)!==null)throw j(),Ue;N=e}}function lt(e=1){if(M){for(var t=e,n=N;t--;)n=Ct(n);N=n}}function ut(e=!0){for(var t=0,n=N;;){if(n.nodeType===Se){var r=n.data;if(r===He){if(t===0)return n;--t}else(r===ze||r===Be||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=Ct(n);e&&n.remove(),n=i}}function dt(e){if(!e||e.nodeType!==Se)throw j(),Ue;return e.data}function ft(t){if(typeof t!=`object`||!t||ue in t||de in t)return t;let n=u(t);if(n!==c&&n!==l)return t;var r=new Map,i=e(t),a=B(0),s=Jn,d=e=>{if(Jn===s)return e();var t=H,n=Jn;Rn(null),Yn(s);var r=e();return Rn(t),Yn(n),r};return i&&r.set(`length`,B(t.length)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Ne();var i=r.get(t);return i===void 0?d(()=>{var e=B(n.value);return r.set(t,e),e}):V(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=d(()=>B(k));r.set(t,e),Mn(a)}}else V(n,k),Mn(a);return!0},get(e,n,i){if(n===ue)return t;var a=r.get(n),s=n in e;if(a===void 0&&(!s||o(e,n)?.writable)&&(a=d(()=>B(ft(s?e[n]:k))),r.set(n,a)),a!==void 0){var c=W(a);return c===k?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=W(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==k)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===ue)return!0;var n=r.get(t),i=n!==void 0&&n.v!==k||Reflect.has(e,t);return(n!==void 0||U!==null&&(!i||o(e,t)?.writable))&&(n===void 0&&(n=d(()=>B(i?ft(e[t]):k)),r.set(t,n)),W(n)===k)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var u=n;u<c.v;u+=1){var f=r.get(u+``);f===void 0?u in e&&(f=d(()=>B(k)),r.set(u+``,f)):V(f,k)}if(c===void 0)(!l||o(e,t)?.writable)&&(c=d(()=>B(void 0)),V(c,ft(n)),r.set(t,c));else{l=c.v!==k;var p=d(()=>ft(n));V(c,p)}var m=Reflect.getOwnPropertyDescriptor(e,t);if(m?.set&&m.set.call(s,n),!l){if(i&&typeof t==`string`){var h=r.get(`length`),g=Number(t);Number.isInteger(g)&&g>=h.v&&V(h,g+1)}Mn(a)}return!0},ownKeys(e){W(a);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==k});for(var[n,i]of r)i.v!==k&&!(n in e)&&t.push(n);return t},setPrototypeOf(){Pe()}})}function pt(e){try{if(typeof e==`object`&&e&&ue in e)return e[ue]}catch{}return e}function mt(e,t){return Object.is(pt(e),pt(t))}var ht,gt,_t,vt,yt;function bt(){if(ht===void 0){ht=window,gt=document,_t=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;vt=o(t,`firstChild`).get,yt=o(t,`nextSibling`).get,d(e)&&(e[he]=void 0,e[me]=null,e[ge]=void 0,e.__e=void 0),d(n)&&(n[_e]=void 0)}}function xt(e=``){return document.createTextNode(e)}function St(e){return vt.call(e)}function Ct(e){return yt.call(e)}function F(e,t){if(!M)return St(e);var n=St(N);if(n===null)n=N.appendChild(xt());else if(t&&n.nodeType!==xe){var r=xt();return n?.before(r),st(r),r}return t&&kt(n),st(n),n}function wt(e,t=!1){if(!M){var n=St(e);return n instanceof Comment&&n.data===``?Ct(n):n}if(t){if(N?.nodeType!==xe){var r=xt();return N?.before(r),st(r),r}kt(N)}return N}function Tt(e,t=!1){if(!M)return St(e);var n=F(e,t);return P(e),n}function I(e,t=1,n=!1){let r=M?N:e;for(var i;t--;)i=r,r=Ct(r);if(!M)return r;if(n){if(r?.nodeType!==xe){var a=xt();return r===null?i?.after(a):r.before(a),st(a),a}kt(r)}return st(r),r}function Et(e){e.textContent=``}function Dt(){return!1}function Ot(e,t,n){return t==null||t===We?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function kt(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===xe;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function At(e){var t=U;if(t===null)return H.f|=le,e;if((t.f&re)===0&&(t.f&g)===0)throw e;jt(e,t)}function jt(e,t){if(t===null||(t.f&E)===0){for(;t!==null;){if((t.f&te)!==0&&!(t.f&33570816)){if((t.f&re)===0)throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}var Mt=-7169;function L(e,t){e.f=e.f&Mt|t}function Nt(e){(e.f&x)!==0||e.deps===null?L(e,S):L(e,w)}function Pt(e){if(e!==null)for(let t of e)(t.f&h)!==0&&(t.f&se)!==0&&(t.f^=se,Pt(t.deps))}function Ft(e,t,n){(e.f&C)===0?(e.f&w)!==0&&n.add(e):t.add(e),Pt(e.deps),L(e,S)}function It(e,t,n){if(e==null)return t(void 0),f;let r=sr(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var Lt=[];function Rt(e,t=f){let n=null,r=new Set;function i(t){if(we(e,t)&&(e=t,n)){let t=!Lt.length;for(let t of r)t[1](),Lt.push(t,e);if(t){for(let e=0;e<Lt.length;e+=2)Lt[e][0](Lt[e+1]);Lt.length=0}}}function a(t){i(t(e))}function o(o,s=f){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||f),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function zt(e){let t;return It(e,e=>t=e)(),t}var Bt=Symbol(`unmounted`);function Vt(e,t,n){let r=n[t]??={store:null,source:kn(void 0),unsubscribe:f};if(r.store!==e&&!(Bt in n)){if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=f;else{var i=!0;r.unsubscribe=It(e,e=>{i?r.source.v=e:V(r.source,e)}),i=!1}}return e&&Bt in n?zt(e):W(r.source)}function Ht(){let e={};function t(){fr(()=>{for(var t in e)e[t].unsubscribe();a(e,Bt,{enumerable:!1,value:!0})})}return[e,t]}function Ut(e,t){if(t){let t=document.body;e.autofocus=!0,tt(()=>{document.activeElement===t&&e.focus()})}}var Wt=!1;function Gt(){Wt||(Wt=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[ve]?.()})},{capture:!0}))}function Kt(e){var t=H,n=U;Rn(null),zn(null);try{return e()}finally{Rn(t),zn(n)}}function qt(e,t,n,r=n){e.addEventListener(t,()=>Kt(n));let i=e[ve];e[ve]=i?()=>{i(),r(!0)}:()=>r(!0),Gt()}function Jt(e,t,n,r){let i=Qt;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=U,c=Yt(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if((s.f&E)===0){c();try{r([...o,...e])}catch(e){jt(e,s)}Xt()}}var d=Zt();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>en(e))).then(u).catch(e=>jt(e,s)).finally(d)}l?l.then(()=>{c(),f(),Xt()}):f()}function Yt(){var e=U,t=H,n=A,r=R;return function(i=!0){zn(e),Rn(t),Je(n),i&&(e.f&E)===0&&(r?.activate(),r?.apply())}}function Xt(e=!0){zn(null),Rn(null),Je(null),e&&R?.deactivate()}function Zt(){var e=U,t=e.b,n=R,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function Qt(e){return U!==null&&(U.f|=O),{ctx:A,deps:null,effects:null,equals:Ce,f:2050,fn:e,reactions:null,rv:0,v:k,wv:0,parent:U,ac:null}}var $t=Symbol(`obsolete`);function en(e,t,n){let r=U;r===null&&De();var i=void 0,a=On(k),o=!H,s=new Set;return vr(()=>{var t=U,n=m();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==ye&&n.reject(e)}).finally(Xt)}catch(e){n.reject(e),Xt()}var c=R;if(o){if((t.f&re)!==0)var l=Zt();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject($t);else for(let e of s.values())e.reject($t);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==$t&&(c.activate(),t?(a.f|=le,An(a,t)):((a.f&le)!==0&&(a.f^=le),An(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),fr(()=>{for(let e of s)e.reject($t)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function tn(e){let t=Qt(e);return Vn(t),t}function nn(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)G(t[n])}}function rn(e){var t,n=U,r=e.parent;if(!Fn&&r!==null&&e.v!==k&&r.f&24576)return rt(),e.v;zn(r);try{e.f&=-65537,nn(e),t=$n(e)}finally{zn(n)}return t}function an(e){var t=rn(e);!e.equals(t)&&(e.wv=Xn(),(!R?.is_fork||e.deps===null)&&(R===null?e.v=t:(R.capture(e,t,!0),ln?.capture(e,t,!0)),e.deps===null))?L(e,S):Fn||(un===null?Nt(e):(dr()||R?.is_fork)&&un.set(e,t))}function on(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&Kt(()=>{t.ac.abort(ye),t.ac=null}),t.fn!==null&&(t.teardown=f),nr(t,0),Tr(t))}function sn(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&rr(t)}var cn=null,R=null,ln=null,un=null,dn=null,fn=!1,pn=!1,mn=null,hn=null,gn=0,_n=1,vn=class e{id=_n++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){cn===null?cn=this:(cn.#n=this,this.#t=cn),cn=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)L(r,C),t(r);for(r of n.m)L(r,w),t(r)}this.#p.add(e)}#g(){this.#e=!0,gn++>1e3&&(this.#x(),yn());for(let e of this.#u)this.#d.delete(e),L(e,C),this.schedule(e);for(let e of this.#d)L(e,w),this.schedule(e);let t=this.#c;this.#c=[],this.apply();var n=mn=[],r=[],i=hn=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw wn(e),this.#h()||this.discard(),t}if(R=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(mn=null,hn=null,this.#h()){this.#b(r),this.#b(n);for(let[e,t]of this.#f)Cn(e,t);i.length>0&&R.#g();return}let o=this.#v();if(o)this.#b(r),this.#b(n),o.#y(this);else{this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),ln=this,xn(r),xn(n),ln=null,this.#s?.resolve();var s=R;if(this.#a===0&&(this.#c.length===0||s!==null)&&this.#x(),this.#c.length>0){if(s!==null){let e=s;e.#c.push(...this.#c.filter(t=>!e.#c.includes(t)))}else s=this}s!==null&&(En.clear(),s.#g())}}#_(e,t,n){e.f^=S;for(var r=e.first;r!==null;){var i=r.f,a=!!(i&96);if(!(a&&(i&S)!==0||(i&T)!==0||this.#f.has(r))&&r.fn!==null){a?r.f^=S:(i&g)===0?Zn(r)&&((i&y)!==0&&this.#d.add(r),rr(r)):t.push(r);var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#y(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null&&((e.f&h)===0||e.f&6144))for(let e of n){var r=e.f;if((r&h)!==0)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),L(i,C),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#x(),R=this,this.#g()}#b(e){for(var t=0;t<e.length;t+=1)Ft(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==k&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&le)===0&&(this.current.set(e,[t,n]),un?.set(e,t)),this.is_fork||(e.v=t)}activate(){R=this}deactivate(){R=null,un=null}flush(){try{pn=!0,R=this,this.#g()}finally{gn=0,dn=null,mn=null,hn=null,pn=!1,R=null,un=null,En.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject($t);this.#x(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,tt(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=m()).promise}static ensure(){if(R===null){let t=R=new e;!pn&&!fn&&tt(()=>{t.#e||t.flush()})}return R}apply(){un=null}schedule(e){if(dn=e,e.b?.is_pending&&e.f&16777228&&(e.f&re)===0)e.b.defer_effect(e);else{for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(mn!==null&&t===U&&(H===null||(H.f&h)===0))return;if(n&96){if((n&S)===0)return;t.f^=S}}this.#c.push(t)}}#x(){if(this.linked){var e=this.#t,t=this.#n;e===null||(e.#n=t),t===null?cn=e:t.#t=e,this.linked=!1}}};function z(e){var t=fn;fn=!0;try{for(var n;;){if(nt(),R===null)return n;R.flush()}}finally{fn=t}}function yn(){try{je()}catch(e){jt(e,dn)}}var bn=null;function xn(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Zn(r)&&(bn=new Set,rr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Or(r),bn?.size>0)){En.clear();for(let e of bn){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)bn.has(n)&&(bn.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||rr(n)}}bn.clear()}}bn=null}}function Sn(e){R.schedule(e)}function Cn(e,t){if((e.f&ee)===0||(e.f&S)===0){(e.f&C)===0?(e.f&w)!==0&&t.m.push(e):t.d.push(e),L(e,S);for(var n=e.first;n!==null;)Cn(n,t),n=n.next}}function wn(e){L(e,S);for(var t=e.first;t!==null;)wn(t),t=t.next}var Tn=new Set,En=new Map,Dn=!1;function On(e,t){return{f:0,v:e,reactions:null,equals:Ce,rv:0,wv:0}}function B(e,t){let n=On(e);return Vn(n),n}function kn(e,t=!1,n=!0){let r=On(e);return t||(r.equals=Te),r}function V(e,t,n=!1){return H!==null&&(!Ln||(H.f&oe)!==0)&&Qe()&&H.f&4325394&&(Bn===null||!Bn.has(e))&&Fe(),An(e,n?ft(t):t,hn)}function An(e,t,n=null){if(!e.equals(t)){Fn?En.set(e,t):En.has(e)||En.set(e,e.v);var r=vn.ensure();if(r.capture(e,t),(e.f&h)!==0){let t=e;(e.f&C)!==0&&rn(t),un===null&&Nt(t)}e.wv=Xn(),Nn(e,C,n),U!==null&&(U.f&S)!==0&&!(U.f&96)&&(Wn===null?Gn([e]):Wn.push(e)),!r.is_fork&&Tn.size>0&&!Dn&&jn()}return t}function jn(){Dn=!1;for(let e of Tn){(e.f&S)!==0&&L(e,w);let t;try{t=Zn(e)}catch{t=!0}t&&rr(e)}Tn.clear()}function Mn(e){V(e,e.v+1)}function Nn(e,t,n){var r=e.reactions;if(r!==null)for(var i=r.length,a=0;a<i;a++){var o=r[a],s=o.f,c=(s&C)===0;if(c&&L(o,t),(s&oe)!==0)Tn.add(o);else if((s&h)!==0){var l=o;un?.delete(l),(s&se)===0&&(s&x&&(U===null||(U.f&ce)===0)&&(o.f|=se),Nn(l,w,n))}else if(c){var u=o;(s&y)!==0&&bn!==null&&bn.add(u),n===null?Sn(u):n.push(u)}}}var Pn=!1,Fn=!1;function In(e){Fn=e}var H=null,Ln=!1;function Rn(e){H=e}var U=null;function zn(e){U=e}var Bn=null;function Vn(e){H!==null&&(Bn??=new Set).add(e)}var Hn=null,Un=0,Wn=null;function Gn(e){Wn=e}var Kn=1,qn=0,Jn=qn;function Yn(e){Jn=e}function Xn(){return++Kn}function Zn(e){var t=e.f;if((t&C)!==0)return!0;if(t&h&&(e.f&=-65537),(t&w)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Zn(a)&&an(a),a.wv>e.wv)return!0}(t&x)!==0&&un===null&&L(e,S)}return!1}function Qn(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Bn!==null&&Bn.has(e)))for(var i=0;i<r.length;i++){var a=r[i];(a.f&h)===0?t===a&&(n?L(a,C):(a.f&S)!==0&&L(a,w),Sn(a)):Qn(a,t,!1)}}function $n(e){var t=Hn,n=Un,r=Wn,i=H,a=Bn,o=A,s=Ln,c=Jn,l=e.f;Hn=null,Un=0,Wn=null,H=l&96?null:e,Bn=null,Je(e.ctx),Ln=!1,Jn=++qn,e.ac!==null&&(Kt(()=>{e.ac.abort(ye)}),e.ac=null);try{e.f|=ce;var u=e.fn,d=u();e.f|=re;var f=er(e);if(Qe()&&Wn!==null&&!Ln&&f!==null&&!(e.f&6146))for(var p=0;p<Wn.length;p++)Qn(Wn[p],e);if(i!==null&&i!==e){if(qn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=qn;if(t!==null)for(let e of t)e.rv=qn;Wn!==null&&(r===null?r=Wn:r.push(...Wn))}return(e.f&le)!==0&&(e.f^=le),d}catch(t){return er(e),At(t)}finally{e.f^=ce,Hn=t,Un=n,Wn=r,H=i,Bn=a,Je(o),Ln=s,Jn=c}}function er(e){var t=e.deps,n=R?.is_fork;if(Hn!==null){var r;if(n||nr(e,Un),t!==null&&Un>0)for(t.length=Un+Hn.length,r=0;r<Hn.length;r++)t[Un+r]=Hn[r];else e.deps=t=Hn;if(dr()&&(e.f&x)!==0)for(r=Un;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&Un<t.length&&(nr(e,Un),t.length=Un);return t}function tr(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&(r.f&h)!==0&&(Hn===null||!n.call(Hn,r))){var s=r;(s.f&x)!==0&&(s.f^=x,s.f&=-65537),s.v!==k&&Nt(s),s.ac!==null&&Kt(()=>{s.ac.abort(ye),s.ac=null,L(s,C)}),on(s),nr(s,0)}}function nr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)tr(e,n[r])}function rr(e){var t=e.f;if((t&E)===0){L(e,S);var n=U,r=Pn;U=e,Pn=!(t&96);try{t&16777232?Er(e):Tr(e),wr(e);var i=$n(e);e.teardown=typeof i==`function`?i:null,e.wv=Kn}finally{Pn=r,U=n}}}async function ir(){await Promise.resolve(),z()}function W(e){var t=(e.f&h)!==0;if(H!==null&&!Ln&&(U===null||(U.f&E)===0)&&(Bn===null||!Bn.has(e))){var r=H.deps;if((H.f&ce)!==0)e.rv<qn&&(e.rv=qn,Hn===null&&r!==null&&r[Un]===e?Un++:Hn===null?Hn=[e]:Hn.push(e));else{H.deps??=[],n.call(H.deps,e)||H.deps.push(e);var i=e.reactions;i===null?e.reactions=[H]:n.call(i,H)||i.push(H)}}if(Fn&&En.has(e))return En.get(e);if(t){var a=e;if(Fn){var o=a.v;return((a.f&S)===0&&a.reactions!==null||or(a))&&(o=rn(a)),En.set(a,o),o}var s=(a.f&x)===0&&!Ln&&H!==null&&(Pn||(H.f&x)!==0),c=(a.f&re)===0;Zn(a)&&(s&&(a.f|=x),an(a)),s&&!c&&(sn(a),ar(a))}if(un?.has(e))return un.get(e);if((e.f&le)!==0)throw e.v;return e.v}function ar(e){if(e.f|=x,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),(t.f&h)!==0&&(t.f&x)===0&&(sn(t),ar(t))}function or(e){if(e.v===k)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(En.has(t)||(t.f&h)!==0&&or(t))return!0;return!1}function sr(e){var t=Ln;try{return Ln=!0,e()}finally{Ln=t}}function cr(e){U===null&&(H===null&&Ae(),ke()),Fn&&Oe()}function lr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ur(e,t){var n=U;n!==null&&(n.f&T)!==0&&(e|=T);var r={ctx:A,deps:null,nodes:null,f:e|2560,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};R?.register_created_effect(r);var i=r;if((e&g)!==0)mn===null?vn.ensure().schedule(r):mn.push(r);else if(t!==null){try{rr(r)}catch(e){throw G(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&O)===0&&(i=i.first,(e&y)!==0&&(e&ae)!==0&&i!==null&&(i.f|=ae))}if(i!==null&&(i.parent=n,n!==null&&lr(i,n),H!==null&&(H.f&h)!==0&&(e&b)===0)){var a=H;(a.effects??=[]).push(i)}return r}function dr(){return H!==null&&!Ln}function fr(e){let t=ur(_,null);return L(t,S),t.teardown=e,t}function pr(e){cr();var t=U.f;if(!H&&(t&ee)!==0&&A!==null&&!A.i){var n=A;(n.e??=[]).push(e)}else return mr(e)}function mr(e){return ur(1048580,e)}function hr(e){vn.ensure();let t=ur(524352,e);return()=>{G(t)}}function gr(e){vn.ensure();let t=ur(524352,e);return(e={})=>new Promise(n=>{e.outro?kr(t,()=>{G(t),n(void 0)}):(G(t),n(void 0))})}function _r(e){return ur(g,e)}function vr(e){return ur(4718592,e)}function yr(e,t=0){return ur(_|t,e)}function br(e,t=[],n=[],r=[]){Jt(r,t,n,t=>{ur(_,()=>{e(...t.map(W))})})}function xr(e,t=0){return ur(y|t,e)}function Sr(e,t=0){return ur(v|t,e)}function Cr(e){return ur(524320,e)}function wr(e){var t=e.teardown;if(t!==null){let n=Fn,r=H;In(!0),Rn(null);try{t.call(null)}catch(t){jt(t,e.parent)}finally{In(n),Rn(r)}}}function Tr(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Kt(()=>{e.abort(ye)});var r=n.next;(n.f&b)===0?G(n,t):n.parent=null,n=r}}function Er(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ee)===0&&G(t),t=n}}function G(e,t=!0){var n=!1;(t||(e.f&D)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Dr(e.nodes.start,e.nodes.end),n=!0),e.f|=ie,Tr(e,t&&!n),nr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();wr(e),e.f^=ie,e.f|=E;var i=e.parent;i!==null&&i.first!==null&&Or(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Dr(e,t){for(;e!==null;){var n=e===t?null:Ct(e);e.remove(),e=n}}function Or(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function kr(e,t,n=!0){var r=[];e.f|=ne,Ar(e,r,!0);var i=()=>{n&&G(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Ar(e,t,n){if((e.f&T)===0){e.f^=T;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if((i.f&b)===0){var o=(i.f&ae)!==0||(i.f&ee)!==0&&(e.f&y)!==0;Ar(i,t,o?n:!1)}i=a}}}function jr(e){e.f&=-257,Mr(e,!0)}function Mr(e,t){if((e.f&ne)===0&&(e.f&T)!==0){e.f^=T,(e.f&S)===0&&(L(e,C),vn.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&ae)!==0||(n.f&ee)!==0;Mr(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Nr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Ct(n);t.append(n),n=i}}function Pr(e){let t=0,n=On(0),r;return()=>{dr()&&(W(n),yr(()=>(t===0&&(r=sr(()=>e(()=>Mn(n)))),t+=1,()=>{tt(()=>{--t,t===0&&(r?.(),r=void 0,Mn(n))})})))}}function Fr(e){let t={get:e=>zt(t.store)[e],set:(e,n)=>{typeof e==`string`?Object.assign(zt(t.store),{[e]:n}):Object.assign(zt(t.store),e),t.store.set(zt(t.store))},store:Rt(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Fr({}),i18n:Fr({}),instances:new Set,plugins:new Set},globalThis.$altcha.i18n.set(`en`,{ariaLinkLabel:`Altcha (official website)`,cancel:`Cancel`,enterCode:`Enter code`,enterCodeAria:`Enter code you hear. Press Space to play audio.`,enterCodeFromImage:`To proceed, please enter the code from the image below.`,error:`Verification failed. Try again later.`,expired:`Verification expired. Try again.`,footer:`Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (official website)">ALTCHA</a>`,getAudioChallenge:`Get an audio challenge`,label:`I'm not a robot`,loading:`Loading...`,reload:`Reload`,verify:`Verify`,verificationRequired:`Verification required!`,verified:`Verified`,verifying:`Verifying...`,waitAlert:`Verifying... please wait.`});var Ir=`5`;typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(Ir);var Lr=Symbol(`events`),Rr=new Set,zr=new Set;function Br(e,t,n,r={}){function i(e){if(r.capture||Gr.call(t,e),!e.cancelBubble)return Kt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?tt(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function K(e,t,n,r,i){var a={capture:r,passive:i},o=Br(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&fr(()=>{t.removeEventListener(e,o,a)})}function Vr(e,t,n){(t[Lr]??={})[e]=n}function Hr(e){for(var t=0;t<e.length;t++)Rr.add(e[t]);for(var n of zr)n(e)}var Ur=null,Wr=!1;function Gr(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],o=i[0]||e.target;Ur=e,Wr||(Wr=!0,setTimeout(()=>{Wr=!1,Ur=null}));var s=0,c=Ur===e&&e[Lr];if(c){var l=i.indexOf(c);if(l!==-1&&(t===document||t===window)){e[Lr]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=i[s]||e.target,o!==t){a(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=H,f=U;Rn(null),zn(null);try{for(var p,m=[];o!==null&&o!==t;){try{var h=o[Lr]?.[r];h!=null&&(!o.disabled||e.target===o)&&h.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,o=s<i.length?i[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[Lr]=t,delete e.currentTarget,Rn(d),zn(f)}}}var Kr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function qr(e){return Kr?.createHTML(e)??e}function Jr(e){var t=Ot(`template`);return t.innerHTML=qr(e.replaceAll(`<!>`,`<!---->`)),t.content}function Yr(e,t){var n=U;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function q(e,t){var n=(t&Le)!==0,r=(t&Re)!==0,i,a=!e.startsWith(`<!>`);return()=>{if(M)return Yr(N,null),N;i===void 0&&(i=Jr(a?e:`<!>`+e),n||(i=St(i)));var t=r||_t?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=St(t),s=t.lastChild;Yr(o,s)}else Yr(t,t);return t}}function Xr(e,t,n=`svg`){var r=`<${n}>${e.startsWith(`<!>`)?`<!>`+e:e}</${n}>`,i;return()=>{if(M)return Yr(N,null),N;i||=St(St(Jr(r)));var e=i.cloneNode(!0);return Yr(e,e),e}}function Zr(e,t){return Xr(e,t,`svg`)}function Qr(e=``){if(!M){var t=xt(e+``);return Yr(t,t),t}var n=N;return n.nodeType===xe?kt(n):(n.before(n=xt()),st(n)),Yr(n,n),n}function $r(){if(M)return Yr(N,null),N;var e=document.createDocumentFragment(),t=document.createComment(``),n=xt();return e.append(t,n),Yr(t,n),e}function J(e,t){if(M){var n=U;((n.f&re)===0||n.nodes.end===null)&&(n.nodes.end=N),ct()}else e!==null&&e.before(t)}function ei(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}var ti=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`];function ni(e){return ti.includes(e)}var ri={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`};function ii(e){return e=e.toLowerCase(),ri[e]??e}var ai=[`touchstart`,`touchmove`];function oi(e){return ai.includes(e)}var si=589824;function ci(e,t,n,r){new li(e,t,n,r)}var li=class{parent;is_pending=!1;transform_error;#e;#t=M?N:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=Pr(()=>(this.#m=On(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=U;t.b=this,t.f|=te,n(e)},this.parent=U.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=xr(()=>{if(M){let e=this.#t;ct();let t=e.data===Be;if(e.data.startsWith(Ve)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#y():this.#g()}else this.#b()},si),M&&(this.#e=N)}#g(){try{this.#a=Cr(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#v(e);tt(r),t&&(this.#s=Cr(()=>{t(this.#e,()=>e,()=>n)}))}#v(e){var t=!1,n=!1;let r=()=>{t?at():(t=!0,n&&Ie(),this.#s!==null&&kr(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()}))};return{reset:r,invoke_onerror:()=>{try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){jt(e,this.#i&&this.#i.parent)}}}}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=Cr(()=>e(this.#e)),tt(()=>{var e=this.#c=document.createDocumentFragment(),t=xt(),n=!1;e.append(t),this.#a=this.#S(()=>{try{return Cr(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){jt(e,this.#i.parent)}return null}}),this.#a===null?(this.#c=null,n&&this.#x(R)):this.#u===0&&(this.#e.before(e),this.#c=null,kr(this.#o,()=>{this.#o=null}),this.#x(R))}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=Cr(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Nr(this.#a,e);let t=this.#n.pending;this.#o=Cr(()=>t(this.#e))}else this.#x(R)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){Ft(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=U,n=H,r=A;zn(this.#i),Rn(this.#i),Je(this.#i.ctx);try{return vn.ensure(),e()}finally{zn(t),Rn(n),Je(r)}}#C(e,t){this.has_pending_snippet()?(this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&kr(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))):this.parent&&this.parent.#C(e,t)}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,tt(()=>{this.#d=!1,this.#m&&An(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),W(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;R?.is_fork?(this.#a&&R.skip_effect(this.#a),this.#o&&R.skip_effect(this.#o),this.#s&&R.skip_effect(this.#s),R.oncommit(()=>{this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(G(this.#a),null),this.#o&&=(G(this.#o),null),this.#s&&=(G(this.#s),null),M&&(st(this.#t),lt(),st(ut()));let t=this.#n.failed,n=e=>{let{reset:n,invoke_onerror:r}=this.#v(e);r(),t&&(this.#s=this.#S(()=>{try{return Cr(()=>{var r=U;r.b=this,r.f|=te,t(this.#e,()=>e,()=>n)})}catch(e){return jt(e,this.#i.parent),null}}))};tt(()=>{var t;try{t=this.transform_error(e)}catch(e){jt(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>jt(e,this.#i&&this.#i.parent)):n(t)})}};function ui(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[_e]??=e.nodeValue)&&(e[_e]=n,e.nodeValue=`${n}`)}function di(e,t){return mi(e,t)}function fi(e,t){bt(),t.intro=t.intro??!1;let n=t.target,r=M,i=N;try{for(var a=St(n);a&&(a.nodeType!==Se||a.data!==ze);)a=Ct(a);if(!a)throw Ue;ot(!0),st(a);let r=mi(e,{...t,anchor:a});return ot(!1),r}catch(r){if(r instanceof Error&&r.message.split(`
`).some(e=>e.startsWith(`https://svelte.dev/e/`)))throw r;return r!==Ue&&console.warn(`Failed to hydrate: `,r),t.recover===!1&&Me(),bt(),Et(n),ot(!1),di(e,t)}finally{ot(r),st(i)}}var pi=new Map;function mi(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){bt();var l=void 0,u=gr(()=>{var s=n??t.appendChild(xt());ci(s,{pending:()=>{}},t=>{Ye({});var n=A;if(o&&(n.c=o),a&&(i.$$events=a),M&&Yr(t,null),l=e(t,i)||Ze(),M&&(U.nodes.end=N,N===null||N.nodeType!==Se||N.data!==He))throw j(),Ue;Xe()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=oi(r);for(let e of[t,document]){var a=pi.get(e);a===void 0&&(a=new Map,pi.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,Gr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(Rr)),zr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=pi.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,Gr),r.delete(e),r.size===0&&pi.delete(n)):r.set(e,i)}zr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return hi.set(l,u),l}var hi=new WeakMap;function gi(e,t){let n=hi.get(e);return n?(hi.delete(e),n(t)):Promise.resolve()}var _i=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)jr(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(jr(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(G(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Nr(r,t),t.append(xt()),this.#n.set(e,{effect:r,fragment:t})}else G(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),kr(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(G(n.effect),this.#n.delete(e))};ensure(e,t){var n=R,r=Dt();if(t&&!this.#t.has(e)&&!this.#n.has(e)){if(r){var i=document.createDocumentFragment(),a=xt();i.append(a),this.#n.set(e,{effect:Cr(()=>t(a)),fragment:i})}else this.#t.set(e,Cr(()=>t(this.anchor)))}if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else M&&(this.anchor=N),this.#a(n)}};function vi(e,t,...n){var r=new _i(e);xr(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},ae)}function yi(e){A===null&&Ee(),pr(()=>{let t=sr(e);if(typeof t==`function`)return t})}function Y(e,t,n=!1){var r;M&&(r=N,ct());var i=new _i(e),a=n?ae:0;function o(e,t){if(M){var n=dt(r);if(e!==parseInt(n.substring(1))){var a=ut();st(a),i.anchor=a,ot(!1),i.ensure(e,t),ot(!0);return}}i.ensure(e,t)}xr(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}var bi=Symbol(`NaN`);function xi(e,t,n){M&&ct();var r=new _i(e);xr(()=>{var e=t();e!==e&&(e=bi),r.ensure(e,n)})}function Si(e,t,n=!1,r=!1,i=!1,a=!1){var o=e,s=``;if(n){var c=e;M&&(o=st(St(c)))}br(()=>{var e=U;if(s===(s=t()??``))M&&ct();else if(n&&!M)e.nodes=null,c.innerHTML=s,s!==``&&Yr(St(c),c.lastChild);else if(e.nodes!==null&&(Dr(e.nodes.start,e.nodes.end),e.nodes=null),s!==``){if(M){N.data;for(var a=ct(),l=a;a!==null&&(a.nodeType!==Se||a.data!==``);)l=a,a=Ct(a);if(a===null)throw j(),Ue;Yr(N,l),o=st(a)}else{var u=Ot(r?`svg`:i?`math`:`template`,r?Ge:i?Ke:void 0);u.innerHTML=s;var d=r||i?u:u.content;if(Yr(St(d),d.lastChild),r||i)for(;St(d);)o.before(St(d));else o.before(d)}}})}function Ci(e,t,n){var r;M&&(r=N,ct());var i=new _i(e);xr(()=>{var e=t()??null;if(M&&dt(r)===ze!=(e!==null)){var a=ut();st(a),i.anchor=a,ot(!1),i.ensure(e,e&&(t=>n(t,e))),ot(!0)}else i.ensure(e,e&&(t=>n(t,e)))},ae)}function wi(e,t){var n=void 0,r;Sr(()=>{n!==(n=t())&&(r&&=(G(r),null),n&&(r=Cr(()=>{_r(()=>n(e))})))})}function Ti(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ti(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Ei(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ti(e))&&(r&&(r+=` `),r+=t);return r}function Di(e){return typeof e==`object`?Ei(e):e??``}var Oi=[...` 	
\r\f\xA0\v﻿`];function ki(e,t,n){var r=e==null?``:``+e;if(n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Oi.includes(r[o-1]))&&(s===r.length||Oi.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Ai(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function ji(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Mi(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(ji)),i&&c.push(...Object.keys(i).map(ji));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=ji(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=Ai(r)),i&&(n+=Ai(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function Ni(e,t,n,r,i,a){var o=e[he];if(M||o!==n||o===void 0){var s=ki(n,r,a);(!M||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e[he]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Pi(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Fi(e,t,n,r){var i=e[ge];if(M||i!==t){var a=Mi(t,r);(!M||a!==e.getAttribute(`style`))&&(a==null?e.removeAttribute(`style`):e.style.cssText=a),e[ge]=t}else r&&(Array.isArray(r)?(Pi(e,n?.[0],r[0]),Pi(e,n?.[1],r[1],`important`)):Pi(e,n,r));return r}function Ii(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function Li(e,t){var n=!(`__defaultValue`in e);(n||e.__defaultValue!==t)&&(e.__defaultValue=t,Ri(e,!n||`__value`in e))}function Ri(t,n){var r=t.__defaultValue,i=t.multiple,a=i?r??[]:null;if(!i||e(a)){var o=t.selectedIndex,s=n&&i?new Set(t.selectedOptions):null;for(var c of t.options){var l=Vi(c);Ii(c,i?a.includes(l):mt(l,r))}if(n){if(s!==null)for(c of t.options){var u=s.has(c);c.selected!==u&&(c.selected=u)}else t.selectedIndex!==o&&(t.selectedIndex=o)}}}function zi(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return it();for(var i of t.options)i.selected=n.includes(Vi(i))}else{for(i of t.options)if(mt(Vi(i),n)){i.selected=!0;return}(!r||n!==void 0)&&(t.selectedIndex=-1)}}function Bi(e){var t=new MutationObserver(t=>{t.every(Hi)||(`__defaultValue`in e&&Ri(e,!1),`__value`in e&&zi(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),fr(()=>{t.disconnect()})}function Vi(e){return`__value`in e?e.__value:e.value}function Hi(e){if(e.target.closest(`selectedcontent`)!==null)return!0;if(e.type===`childList`){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(e=>e.nodeName===`SELECTEDCONTENT`)}return!1}var Ui=Symbol(`class`),Wi=Symbol(`style`),Gi=Symbol(`is custom element`),Ki=Symbol(`is html`),qi=be?`link`:`LINK`,Ji=be?`input`:`INPUT`,Yi=be?`option`:`OPTION`,Xi=be?`select`:`SELECT`,Zi=be?`progress`:`PROGRESS`;function Qi(e){if(M){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;X(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;X(e,`checked`,null),e.checked=r}}};e[ve]=n,tt(n),Gt()}}function $i(e,t){var n=na(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName===Zi)&&(e.value=t??``)}function X(e,t,n,r){var i=na(e);M&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===qi)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[pe]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&ia(e).has(t)?e[t]=n:e.setAttribute(t,n))}function ea(e,t,n,r,i=!1,a=!1){M&&i&&e.nodeName===Ji&&(`defaultValue`in n||`defaultChecked`in n||Qi(e));var o=na(e),s=o[Gi],c=!o[Ki];let l=M&&s;l&&ot(!1);var u=t||{},d=e.nodeName===Yi,f=e.nodeName===Xi;for(var p in t)!(p in n)&&p[0]+p[1]!==`$$`&&(n[p]=null);n.class?n.class=Di(n.class):n[Ui]&&(n.class=null),n[Wi]&&(n.style??=null);var m=ia(e);if(e.nodeName===Ji&&`type`in n&&(`value`in n||`__value`in n)){var h=n.type;(h!==u.type||h===void 0&&e.hasAttribute(`type`))&&(u.type=h,X(e,`type`,h))}for(let i in n){let a=n[i];if(d&&i===`value`&&a==null)e.value=e.__value=``,u[i]=a;else if(i===`class`)Ni(e,e.namespaceURI===`http://www.w3.org/1999/xhtml`,a,r,t?.[Ui],n[Ui]),u[i]=a,u[Ui]=n[Ui];else if(i===`style`)Fi(e,a,t?.[Wi],n[Wi]),u[i]=a,u[Wi]=n[Wi];else{var g=u[i];if(a!==g||a===void 0&&e.hasAttribute(i)){u[i]=a;var _=i[0]+i[1];if(_!==`$$`){if(_===`on`){let t={},n=`$$`+i,r=i.slice(2);var v=ni(r);if(ei(r)&&(r=r.slice(0,-7),t.capture=!0),!v&&g){if(a!=null)continue;e.removeEventListener(r,u[n],t),u[n]=null}v?(Vr(r,e,a),Hr([r])):a!=null&&(u[n]=Br(r,e,function(e){u[i].call(this,e)},t))}else if(i===`style`)X(e,i,a);else if(i===`autofocus`)Ut(e,!!a);else if(!s&&(i===`__value`||i===`value`&&a!=null))e.value=e.__value=a;else if(i===`selected`&&d)Ii(e,a);else{var y=i;c||(y=ii(y));var ee=y===`defaultValue`||y===`defaultChecked`;if(f&&y===`defaultValue`)continue;if(a==null&&!s&&!ee){if(o[i]=null,y===`value`||y===`checked`){let n=e,r=t===void 0;if(y===`value`){let e=n.defaultValue;n.removeAttribute(y),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(y),n.defaultChecked=e,n.checked=r?e:!1}}else e.removeAttribute(i)}else ee||(s||typeof a!=`string`)&&m.has(y)?(e[y]=a,y in o&&(o[y]=k)):typeof a!=`function`&&X(e,y,a)}}}}}return l&&ot(!0),u}function ta(e,t,n=[],r=[],i=[],a,o=!1,s=!1){Jt(i,n,r,n=>{var r=void 0,i={},c=e.nodeName===Xi,l=!1;if(Sr(()=>{var u=t(...n.map(W)),d=ea(e,r,u,a,o,s);if(l&&c){var f=e;`defaultValue`in u&&Li(f,u.defaultValue),`value`in u&&zi(f,u.value)}for(let e of Object.getOwnPropertySymbols(i))u[e]||G(i[e]);for(let t of Object.getOwnPropertySymbols(u)){var p=u[t];t.description===qe&&(!r||p!==r[t])&&(i[t]&&G(i[t]),i[t]=Cr(()=>wi(e,()=>p))),d[t]=p}r=d}),c){var u=e;_r(()=>{var e=r;`defaultValue`in e&&Li(u,e.defaultValue),zi(u,e.value,!0),Bi(u)})}l=!0})}function na(e){return e[me]??={[Gi]:e.nodeName.includes(`-`),[Ki]:e.namespaceURI===We}}var ra=new Map;function ia(e){var t=e.getAttribute(`is`)||e.nodeName,n=ra.get(t);if(n)return n;ra.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var o in r=s(i),r)r[o].set&&o!==`innerHTML`&&o!==`textContent`&&o!==`innerText`&&n.add(o);i=u(i)}return n}function aa(e,t,n=t){var r=new WeakSet;qt(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=oa(e)?sa(a):a,n(a),R!==null&&r.add(R),await ir(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(M&&e.defaultValue!==e.value||sr(t)==null&&e.value)&&(n(oa(e)?sa(e.value):e.value),R!==null&&r.add(R)),yr(()=>{var n=t();if(e===document.activeElement){var i=R;if(r.has(i))return}oa(e)&&n===sa(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function oa(e){var t=e.type;return t===`number`||t===`range`}function sa(e){return e===``?null:+e}function ca(e,t){return e===t||e?.[ue]===t}function la(e=Ze(),t,n,r){var i=A.r,a=U;return _r(()=>{var r,o;return yr(()=>{r=o,o=[],sr(()=>{ca(n(...o),e)||(t(e,...o),r&&ca(n(...r),e)&&t(null,...r))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&ie;)r=r.parent;let s=()=>{o&&ca(n(...o),e)&&t(null,...o)},c=r.teardown;r.teardown=()=>{s(),c?.()}}}),e}var ua={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return!e.exclude.has(t)&&t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function da(e,t,n){return new Proxy({props:e,exclude:t},ua)}function Z(e,t,n,r){var i=r,a=!0,o=()=>(a&&(a=!1,i=r),i),s=e[t];s===void 0&&r!==void 0&&(s=o());var c=()=>{var n=e[t];return n===void 0?o():(a=!0,n)},l=!1,u=Qt(()=>(l=!1,c())),d=U;return(function(e,t){if(arguments.length>0){let n=t?W(u):e;return V(u,n),l=!0,i!==void 0&&(i=n),e}return Fn&&l||(d.f&E)!==0?u.v:W(u)})}function fa(e){return new pa(e)}var pa=class{#e;#t;constructor(e){var t=new Map,n=(e,n)=>{var r=kn(n,!1,!1);return t.set(e,r),r};let r=new Proxy({...e.props||{},$$events:{}},{get(e,r){return W(t.get(r)??n(r,Reflect.get(e,r)))},has(e,r){return r===fe||(W(t.get(r)??n(r,Reflect.get(e,r))),Reflect.has(e,r))},set(e,r,i){return V(t.get(r)??n(r,i),i),Reflect.set(e,r,i)}});this.#t=(e.hydrate?fi:di)(e.component,{target:e.target,anchor:e.anchor,props:r,context:e.context,intro:e.intro??!1,recover:e.recover,transformError:e.transformError}),(!e?.props?.$$host||e.sync===!1)&&z(),this.#e=r.$$events;for(let e of Object.keys(this.#t))e!==`$set`&&e!==`$destroy`&&e!==`$on`&&a(this,e,{get(){return this.#t[e]},set(t){this.#t[e]=t},enumerable:!0});this.#t.$set=e=>{Object.assign(r,e)},this.#t.$destroy=()=>{gi(this.#t)}}$set(e){this.#t.$set(e)}$on(e,t){this.#e[e]=this.#e[e]||[];let n=(...e)=>t.call(this,...e);return this.#e[e].push(n),()=>{this.#e[e]=this.#e[e].filter(e=>e!==n)}}$destroy(){this.#t.$destroy()}},ma=class{};typeof HTMLElement==`function`&&(ma=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let e=this.$$l_u.get(t);e&&(e(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(e){return t=>{let n=Ot(`slot`);e!=="default"&&(n.name=e),J(t,n)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},n=ga(this);for(let r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(let e of this.attributes){let t=this.$$g_p(e.name);t in this.$$d||(this.$$d[t]=ha(t,e.value,this.$$p_d,`toProp`))}for(let e in this.$$p_d)!(e in this.$$d)&&this[e]!==void 0&&(this.$$d[e]=this[e],delete this[e]);this.$$c=fa({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=hr(()=>{yr(()=>{this.$$r=!0;for(let e of i(this.$$c)){if(!this.$$p_d[e]?.reflect)continue;this.$$d[e]=this.$$c[e];let t=ha(e,this.$$d[e],this.$$p_d,`toAttribute`);t==null?this.removeAttribute(this.$$p_d[e].attribute||e):this.setAttribute(this.$$p_d[e].attribute||e,t)}this.$$r=!1})});for(let e in this.$$l)for(let t of this.$$l[e]){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=ha(e,n,this.$$p_d,`toProp`),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return i(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function ha(e,t,n,r){let i=n[e]?.type;if(t=i===`Boolean`&&typeof t!=`boolean`?t!=null:t,!r||!n[e])return t;if(r===`toAttribute`)switch(i){case`Object`:case`Array`:return t==null?null:JSON.stringify(t);case`Boolean`:return t?``:null;case`Number`:return t??null;default:return t}else switch(i){case`Object`:case`Array`:return t&&JSON.parse(t);case`Boolean`:return t;case`Number`:return t==null?t:+t;default:return t}}function ga(e){let t={};return e.childNodes.forEach(e=>{t[e.slot||`default`]=!0}),t}function _a(e,t,n,r,s,c){let l=class extends ma{constructor(){super(e,n,s),this.$$p_d=t}static get observedAttributes(){return i(t).map(e=>(t[e].attribute||e).toLowerCase())}};return i(t).forEach(e=>{a(l.prototype,e,{get(){return this.$$c&&e in this.$$c?this.$$c[e]:this.$$d[e]},set(n){n=ha(e,n,t),this.$$d[e]=n;var r=this.$$c;r&&(o(r,e)?.get?r[e]=n:r.$set({[e]:n}))}})}),r.forEach(e=>{a(l.prototype,e,{get(){return this.$$c?.[e]}})}),e.element=l,l}var va=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),ya=q(`<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>`);function ba(e,t){Ye(t,!0);let n=Z(t,`loading`),r=da(t,va),i;function a(){i?.click()}var o={get loading(){return n()},set loading(e){n(e),z()}},s=ya(),c=F(s);ta(c,()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),la(c,e=>i=e,()=>i);var l=I(c,2);return lt(2),P(s),br(()=>X(s,`data-loading`,n())),Vr(`click`,l,a),J(e,s),Xe(o)}Hr([`click`]),_a(ba,{loading:{}},[],[],{mode:`open`});var xa=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),Sa=q(`<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>`);function Ca(e,t){Ye(t,!0);let n=Z(t,`loading`),r=da(t,xa);var i={get loading(){return n()},set loading(e){n(e),z()}},a=Sa();return ta(F(a),()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),lt(2),P(a),br(()=>X(a,`data-loading`,n())),J(e,a),Xe(i)}_a(Ca,{loading:{}},[],[],{mode:`open`});var wa=q(`<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>`);function Ta(e,t){Ye(t,!0);let n=Z(t,`strings`);var r={get strings(){return n()},set strings(e){n(e),z()}},i=wa(),a=F(i);return X(a,`href`,`https://altcha.org`),P(i),br(()=>X(a,`aria-label`,n().ariaLinkLabel)),J(e,i),Xe(r)}_a(Ta,{strings:{}},[],[],{mode:`open`});var Ea=q(`<div class="altcha-footer"><p></p> <!></div>`);function Da(e,t){Ye(t,!0);let n=Z(t,`logo`),r=Z(t,`strings`);var i={get logo(){return n()},set logo(e){n(e),z()},get strings(){return r()},set strings(e){r(e),z()}},a=Ea(),o=F(a);Si(o,()=>r().footer,!0),P(o);var s=I(o,2),c=e=>{Ta(e,{get strings(){return r()}})};return Y(s,e=>{n()&&e(c)}),P(a),J(e,a),Xe(i)}_a(Da,{logo:{},strings:{}},[],[],{mode:`open`});var Oa=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),ka=q(`<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>`);function Aa(e,t){Ye(t,!0);let n=Z(t,`loading`),r=da(t,Oa),i;function a(){i?.click()}var o={get loading(){return n()},set loading(e){n(e),z()}},s=ka(),c=F(s);ta(c,()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),la(c,e=>i=e,()=>i);var l=I(c,2);return P(s),br(()=>X(s,`data-loading`,n())),Vr(`click`,l,a),J(e,s),Xe(o)}Hr([`click`]),_a(Aa,{loading:{}},[],[],{mode:`open`});var Q=(e=>(e.ERROR=`error`,e.LOADING=`loading`,e.PLAYING=`playing`,e.PAUSED=`paused`,e.READY=`ready`,e))(Q||{}),ja=(e=>(e.SHA_256=`SHA-256`,e.SHA_384=`SHA-384`,e.SHA_512=`SHA-512`,e))(ja||{}),$=(e=>(e.CODE=`code`,e.ERROR=`error`,e.VERIFIED=`verified`,e.VERIFYING=`verifying`,e.UNVERIFIED=`unverified`,e.EXPIRED=`expired`,e))($||{}),Ma=q(`<div class="altcha-code-challenge-title"> </div>`),Na=q(`<div class="altcha-spinner"></div>`),Pa=Zr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>`),Fa=Zr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>`),Ia=Zr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>`),La=q(`<button type="button" class="altcha-button altcha-button-secondary"><!></button>`),Ra=q(`<audio hidden="" autoplay=""></audio>`),za=q(`<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>`);function Ba(e,t){Ye(t,!0);let n=Z(t,`audioUrl`),r=Z(t,`codeChallenge`),i=Z(t,`config`),a=Z(t,`imageUrl`),o=Z(t,`onCancel`),s=Z(t,`onReload`),c=Z(t,`onSubmit`),l=Z(t,`strings`),u=B(void 0),d=B(void 0),f=B(void 0),p=B(!1),m=B(``),h=B(!1);yi(()=>(i().disableAutoFocus||ir().then(()=>{W(f)?.focus()}),()=>{W(d)&&(W(d).pause(),V(d,void 0))}));function g(){V(u,Q.PAUSED,!0)}function _(e){V(u,Q.ERROR,!0)}function v(){V(u,Q.READY,!0)}function y(){V(u,Q.LOADING,!0)}function ee(){V(u,Q.PLAYING,!0)}function b(){V(u,Q.PAUSED,!0)}function te(e){e.code===`Space`?(e.preventDefault(),e.stopPropagation(),S()):e.code===`Escape`&&(e.preventDefault(),e.stopPropagation(),o()?.())}function ne(e){e.preventDefault(),e.stopPropagation(),c()?.(W(m))}function x(e){e.play().catch(e=>{if(!(e instanceof DOMException&&e.name===`AbortError`))throw e})}function S(){W(d)?W(u)===Q.LOADING||(W(d).paused?(n()&&W(d).src!==n()&&(W(d).src=n()),W(d).currentTime=0,x(W(d))):W(d).pause()):(V(h,!0),requestAnimationFrame(()=>{W(d)&&n()&&(W(d).src=n(),x(W(d)))}))}var C={get audioUrl(){return n()},set audioUrl(e){n(e),z()},get codeChallenge(){return r()},set codeChallenge(e){r(e),z()},get config(){return i()},set config(e){i(e),z()},get imageUrl(){return a()},set imageUrl(e){a(e),z()},get onCancel(){return o()},set onCancel(e){o(e),z()},get onReload(){return s()},set onReload(e){s(e),z()},get onSubmit(){return c()},set onSubmit(e){c(e),z()},get strings(){return l()},set strings(e){l(e),z()}},w=za(),T=F(w),E=F(T),re=e=>{var t=Ma(),n=Tt(t,!0);br(()=>ui(n,l().verificationRequired)),J(e,t)};Y(E,e=>{i().codeChallengeDisplay!==`standard`&&e(re)});var ie=I(E,2),ae=Tt(ie,!0),oe=I(ie,2),D=I(oe,2),O=F(D);Qi(O),O.disabled=W(p),la(O,e=>V(f,e),()=>W(f));var se=I(O,2),ce=e=>{var t=La(),n=F(t),r=e=>{J(e,Na())},i=e=>{J(e,Pa())},a=e=>{J(e,Fa())},o=e=>{J(e,Ia())};Y(n,e=>{W(u)===Q.LOADING?e(r):W(u)===Q.ERROR?e(i,1):W(u)===Q.PLAYING?e(a,2):e(o,-1)}),P(t),br(()=>{X(t,`title`,l().getAudioChallenge),t.disabled=W(u)===Q.LOADING||W(u)===Q.ERROR,X(t,`aria-label`,W(u)===Q.LOADING?l().loading:l().getAudioChallenge)}),K(`click`,t,()=>S(),!0),J(e,t)};Y(se,e=>{r().audio&&e(ce)});var le=I(se,2);P(D);var ue=I(D,2),de=F(ue),fe=Tt(de,!0),pe=I(de,2),me=Tt(pe,!0);P(ue),P(T);var he=I(T,2),ge=e=>{var t=Ra();la(t,e=>V(d,e),()=>W(d)),K(`error`,t,_),K(`loadstart`,t,y),K(`canplay`,t,v),K(`pause`,t,b),K(`playing`,t,ee),K(`ended`,t,g),J(e,t)};return Y(he,e=>{W(h)&&e(ge)}),P(w),br(()=>{ui(ae,l().enterCodeFromImage),X(oe,`src`,a()),X(O,`minlength`,r().length||1),X(O,`maxlength`,r().length),X(O,`placeholder`,l().enterCode),X(O,`aria-label`,W(u)===Q.LOADING?l().loading:W(u)===Q.PLAYING?``:l().enterCodeAria),X(O,`aria-live`,W(u)?`assertive`:`polite`),X(O,`aria-busy`,W(u)===Q.LOADING),X(le,`title`,l().reload),X(le,`aria-label`,l().reload),X(de,`aria-label`,l().verify),ui(fe,l().verify),X(pe,`aria-label`,l().cancel),ui(me,l().cancel)}),K(`submit`,T,ne,!0),Vr(`keydown`,O,te),aa(O,()=>W(m),e=>V(m,e)),K(`click`,le,()=>s()?.(),!0),K(`click`,pe,()=>o()?.(),!0),J(e,w),Xe(C)}Hr([`keydown`]),_a(Ba,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:`open`});var Va=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`anchor`,`children`,`display`,`backdrop`,`onClickOutside`,`onClickOutsideDelay`,`onClose`,`placement`,`updateUISignal`,`variant`]),Ha=q(`<div class="altcha-popover-backdrop" data-backdrop=""></div>`),Ua=q(`<div class="altcha-popover-arrow"></div>`),Wa=q(`<div role="button" class="altcha-popover-close">&times;</div>`),Ga=q(`<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>`,1);function Ka(e,t){Ye(t,!0);let n=Z(t,`anchor`),r=Z(t,`children`),i=Z(t,`display`,7,`standard`),a=Z(t,`backdrop`,7,!1),o=Z(t,`onClickOutside`),s=Z(t,`onClickOutsideDelay`,7,600),c=Z(t,`onClose`),l=Z(t,`placement`,7,`auto`),u=Z(t,`updateUISignal`),d=Z(t,`variant`,7,`neutral`),p=da(t,Va),m=B(void 0),h=B(void 0),g=B(!1),_=B(0);pr(()=>{l()!==`auto`&&V(g,l()===`top`)}),pr(()=>{u()&&te()}),yi(()=>{let e=i()===`bottomsheet`||i()===`overlay`;return e&&(W(h)&&document.body.append(W(h)),W(m)&&document.body.append(W(m))),te(),ir().then(()=>{V(_,Date.now(),!0)}),()=>{e&&(W(h)&&document.body.removeChild(W(h)),W(m)&&document.body.removeChild(W(m)))}});function v(){c()?.()}function y(e){let t=e.target;!W(m)?.contains(t)&&(!s()||W(_)+s()<Date.now())&&o()?.()}function ee(){te()}function b(){te()}function te(){if(n()&&l()===`auto`&&W(m)){let e=n().getBoundingClientRect(),t=document.documentElement.clientHeight-(e.top+e.height)<W(m).clientHeight;W(g)!==t&&V(g,t)}}var ne={get anchor(){return n()},set anchor(e){n(e),z()},get children(){return r()},set children(e){r(e),z()},get display(){return i()},set display(e=`standard`){i(e),z()},get backdrop(){return a()},set backdrop(e=!1){a(e),z()},get onClickOutside(){return o()},set onClickOutside(e){o(e),z()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(e=600){s(e),z()},get onClose(){return c()},set onClose(e){c(e),z()},get placement(){return l()},set placement(e=`auto`){l(e),z()},get updateUISignal(){return u()},set updateUISignal(e){u(e),z()},get variant(){return d()},set variant(e=`neutral`){d(e),z()}},x=Ga();K(`click`,ht,y,!0),K(`resize`,ht,ee),K(`scroll`,ht,b);var S=wt(x),C=e=>{var t=Ha();la(t,e=>V(h,e),()=>W(h)),J(e,t)};Y(S,e=>{a()&&e(C)});var w=I(S,2);ta(w,()=>({...p,class:`altcha-popover ${(t.class||``)??``}`,"data-popover":!0,"data-variant":d(),"data-top":W(g),"data-display":i()}));var T=F(w),E=e=>{J(e,Ua())};Y(T,e=>{i()===`standard`&&e(E)});var re=I(T,2),ie=e=>{var t=Wa();K(`click`,t,v,!0),J(e,t)};Y(re,e=>{i()!==`standard`&&e(ie)});var ae=I(re,2);return vi(F(ae),()=>r()??f),P(ae),P(w),la(w,e=>V(m,e),()=>W(m)),J(e,x),Xe(ne)}_a(Ka,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:`open`});function qa(e){return Array.from(new Uint8Array(e)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Ja(e,t=`altcha-css`,n){if(typeof document<`u`&&document&&!document.getElementById(t)){let n=document.createElement(`style`);n.id=t,n.textContent=e;let r=document.currentScript?.nonce??document.querySelector(`meta[name="csp-nonce"]`)?.content;r&&(n.nonce=r),document.head.appendChild(n)}}Object.values(ja);async function Ya(e){let{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:i,onOutOfMemory:a=e=>e>1?Math.floor(e/2):0,counterMode:o,timeout:s}=e,c=Math.min(16,Math.max(1,n)),l=[],u=()=>{for(let e of l)e.terminate()};for(let e=0;e<c;e++)l.push(await i(t.parameters.algorithm));let d=null;try{d=await Promise.race(l.map((e,n)=>(r.signal.addEventListener(`abort`,()=>{e.postMessage({type:`abort`})}),new Promise((r,i)=>{e.addEventListener(`error`,e=>{i(e)}),e.addEventListener(`message`,t=>{if(t.data){for(let t of l)t!==e&&t.postMessage({type:`abort`});if(t.data.error)return i(Error(t.data.error))}r(t.data)}),e.postMessage({challenge:t,counterMode:o,counterStart:n,counterStep:c,timeout:s,type:`work`})}))))}catch(n){if(n instanceof Error&&n?.message?.includes(`Out of memory`)&&a){u();let n=a(c);if(n)return Ya({...e,challenge:t,controller:r,concurrency:n,createWorker:i})}throw n}finally{u()}return r.signal.aborted?null:d||null}var Xa=class{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(e={}){let{maxSamples:t=60,sampleInterval:n=50,target:r=window}=e;this.maxSamples=t,this.sampleInterval=n,this.target=r,this.attach()}destroy(){let e={capture:!0};this.target.removeEventListener(`focusin`,this.onFocus,e),this.target.removeEventListener(`keydown`,this.onInteraction,e),this.target.removeEventListener(`pointerdown`,this.onInteraction,e),this.target.removeEventListener(`pointermove`,this.onPointer,e),this.target.removeEventListener(`scroll`,this.onScroll,e),this.target.removeEventListener(`touchmove`,this.onTouchMove,e)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){let e={passive:!0,capture:!0};this.target.addEventListener(`focusin`,this.onFocus,e),this.target.addEventListener(`keydown`,this.onInteraction,e),this.target.addEventListener(`pointerdown`,this.onInteraction,e),this.target.addEventListener(`pointermove`,this.onPointer,e),this.target.addEventListener(`scroll`,this.onScroll,e),this.target.addEventListener(`touchmove`,this.onTouchMove,e)}evict(e){e.length>this.maxSamples&&e.splice(0,e.length-this.maxSamples)}onFocus=e=>{if(this.focusInteraction===2)return;let t=e.target;if(!(t instanceof Element))return;let n=performance.now();this.focusStartTime===0&&(this.focusStartTime=n),this.focus.push([Math.round(n-this.focusStartTime),t.tabIndex,this.TAG_CODES[t.tagName]??0,+!!this.focusInteraction]),this.evict(this.focus)};onInteraction=e=>{this.focusInteraction=`keyCode`in e?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=e=>{if(e.pointerType===`touch`)return;let t=e.timeStamp||performance.now();this.pendingPointer=[Math.round(e.clientX),Math.round(e.clientY),Math.round(t)],t-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=t,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{let e=performance.now();e-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(e)]),this.lastScrollSample=e,this.evict(this.scroll))};onTouchMove=e=>{let t=e.timeStamp||performance.now(),n=e.touches[0];n&&(this.pendingTouch=[Math.round(n.clientX),Math.round(n.clientY),Math.round(t),Math.round(n.force*1e3)/1e3,Math.round(n.radiusX||0),Math.round(n.radiusY||0)],t-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=t,this.pendingTouch=null,this.evict(this.touch)))}},Za=q(`<div class="altcha-overlay-backdrop" data-backdrop=""></div>`),Qa=q(`<div class="altcha-overlay-content"></div>`),$a=q(`<div role="button" class="altcha-overlay-close">&times;</div> <!>`,1),eo=q(`<div class="altcha-floating-arrow"></div>`),to=q(`<input type="hidden"/>`),no=q(`<div class="altcha-error">Secure context (HTTPS) required.</div>`),ro=q(`<div class="altcha-error"> </div>`),io=q(`<!> <!>`,1),ao=q(`<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>`,1);function oo(e,t){Ye(t,!0);let n=()=>Vt(c,`$altchaDefaults`,i),r=()=>Vt(f,`$altchaI18nStore`,i),[i,a]=Ht(),o=[`ar`,`fa`,`he`,`ur`],{isSecureContext:s}=globalThis,{store:c}=globalThis.$altcha.defaults,l=navigator.hardwareConcurrency||2,u=navigator.deviceMemory||0,d=u&&u<=4?Math.min(4,l):l,f=globalThis.$altcha.i18n.store,p=t.$$host,m=(e,t)=>{ir().then(()=>{p?.dispatchEvent(new CustomEvent(e,{detail:t}))})},h=null,g=B(ft(new URL(location.origin))),_=B(!1),v=B(null),y=B(null),ee=B(null),b=B(ft($.UNVERIFIED)),te=B(void 0),ne=B(void 0),x=B(null),S=B(void 0),C=B(null),w=B(null),T=B(null),E=B(null),re=B(ft([])),ie=B(0),ae=B(ft({})),oe=B(!0),D=tn(()=>({fetch:(e,t)=>fetch(e,t),audioChallengeLanguage:``,auto:`off`,barPlacement:`bottom`,challenge:``,codeChallenge:null,codeChallengeDisplay:`standard`,credentials:null,debug:!1,disableAutoFocus:!1,display:`standard`,floatingAnchor:``,floatingOffset:8,floatingPersist:!1,floatingPlacement:`auto`,hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:``,mockError:!1,minDuration:500,overlayContent:``,name:`altcha`,popoverPlacement:`auto`,retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:`checkbox`,validationMessage:``,verifyFunction:null,verifyUrl:``,workers:d,...n(),...W(ae)})),O=tn(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*0xe8d4a51000).toString(16)}`),se=tn(()=>De(W(D).type)),ce=tn(()=>W(D).auto),le=tn(()=>W(b)===$.VERIFYING),ue=tn(()=>!W(D).hideFooter),de=tn(()=>!W(D).hideLogo&&W(D).display!==`bar`),fe=tn(()=>Oe(r(),[W(D).language,document.documentElement.lang,...navigator.languages])),pe=tn(()=>o.includes(W(fe).language)?`rtl`:void 0),me=tn(()=>({...W(fe).strings})),he=tn(()=>W(v)?.audio?.match(/^(https?:)?\//)?Pe(W(v).audio,W(g),{language:W(D).audioChallengeLanguage||W(fe).language}).toString():W(v)?.audio),ge=tn(()=>W(v)?.image?.match(/^(https?:)?\//)?Pe(W(v).image,W(g)):W(v)?.image);pr(()=>{et({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),pr(()=>{t.theme?p?.setAttribute(`theme`,t.theme):p?.removeAttribute(`theme`)}),pr(()=>{if(t.configuration)try{et(JSON.parse(t.configuration))}catch{j("unable to parse the `configuration` attribute (JSON expected)")}}),pr(()=>{W(ee)!==W(D).display&&Je(W(D).display)}),pr(()=>{W(_)&&W(b)===$.VERIFYING&&V(_,!1)}),pr(()=>{!W(_)&&W(b)===$.VERIFIED&&V(_,!0)}),pr(()=>{if(!W(_)){let e=Ee();e&&e.checked&&(e.checked=!1)}}),pr(()=>{W(b)===$.VERIFIED&&Ee()?.setCustomValidity(``)}),pr(()=>{if(W(ce)===`onload`){let e=setTimeout(()=>{N()},10);return()=>{e&&clearTimeout(e)}}}),pr(()=>{W(w)&&j(`error:`,W(w))}),pr(()=>{W(E)&&W(D).setCookie&&A(W(E),W(D).setCookie)}),yi(()=>(j(`mounted`,`3.4.1`),p&&globalThis.$altcha.instances.add(p),V(x,Ae(),!0),W(x)?.addEventListener(`reset`,Ve),W(x)?.addEventListener(`submit`,He,{capture:!0}),document.addEventListener(`focusin`,Be),_e(),W(D).humanInteractionSignature&&(j(`human interaction signature enabled`),h=new Xa),m(`load`),s||j(`secure context (HTTPS) required`),()=>{ye(),p&&globalThis.$altcha.instances.delete(p),W(T)&&clearTimeout(W(T)),W(x)?.removeEventListener(`reset`,Ve),W(x)?.removeEventListener(`submit`,He,{capture:!0}),document.removeEventListener(`focusin`,Be),h?.destroy()}));function _e(){V(re,[...globalThis.$altcha.plugins].map(e=>new e(p)),!0),j(`activating plugins`,W(re).map(e=>e.constructor.name));for(let e of W(re))e.activate()}async function ve(e,...t){let n;for(let r of W(re))n=await r[e].call(r,...t);return n}function ye(){for(let e of W(re))e.destroy()}function be(e){let[t,n]=e.salt.split(`?`),r={};if(n)try{Object.assign(r,Object.fromEntries(new URLSearchParams(n).entries()))}catch{}let i={codeChallenge:e.codeChallenge,parameters:{algorithm:e.algorithm,cost:1,data:r,expiresAt:r?.expires?parseInt(r.expires,10):void 0,keyLength:e.algorithm===`SHA-512`?64:e.algorithm===`SHA-384`?48:32,nonce:qa(new TextEncoder().encode(e.salt)),keyPrefix:e.challenge,salt:``},signature:e.signature};return Object.defineProperties(i,{_originalSalt:{enumerable:!1,value:e.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),i}function xe(e,t){return{algorithm:e.parameters.algorithm,challenge:e.parameters.keyPrefix,number:t.counter,salt:`_originalSalt`in e?e._originalSalt:e.parameters.nonce,signature:e.signature,took:t.time||0}}async function Se(e){await new Promise(t=>setTimeout(t,e))}async function Ce(e=W(D).challenge,t){let n=await ve(`onFetchChallenge`,e),r=null;if(n!==void 0)return n;if(typeof e==`string`){if(e.startsWith(`{`)){j(`parsing JSON challenge`);try{r=JSON.parse(e)}catch{throw Error(`Unable to parse JSON challenge.`)}}else{j(`fetching challenge from`,t?.method||`GET`,e),V(g,new URL(e,location.origin),!0);let n=await W(D).fetch(e,{credentials:W(D).credentials||void 0,...t});await Qe(n);let i=n.headers.get(`x-altcha-config`);i&&We(i);let a=await n.json();if(a&&`his`in a&&a.his){if(j(`requested HIS`),!h)throw Error(`Server requested HIS data but collector is disabled.`);return Ce(Pe(a.his.url,W(g)),{body:JSON.stringify({his:h.export()}),headers:{"content-type":`application/json`},method:`POST`})}a&&`hisResult`in a&&a.hisResult&&j(`HIS result`,a.hisResult),r=a}}else if(e&&typeof e==`object`)try{r=JSON.parse(JSON.stringify(e))}catch{throw Error(`Unable to parse JSON challenge.`)}if(we(r)&&(r=be(r)),!Te(r))throw Error(`Challenge validation failed.`);return r}function we(e){return typeof e==`object`&&!!e&&`challenge`in e}function Te(e){return!!e&&typeof e==`object`&&`parameters`in e&&!!e.parameters&&typeof e.parameters==`object`&&`algorithm`in e.parameters&&`nonce`in e.parameters&&`salt`in e.parameters&&`keyPrefix`in e.parameters}function Ee(){return document.getElementById(W(O))}function De(e){switch(e){case`checkbox`:return ba;case`switch`:return Aa;default:return Ca}}function Oe(e,t){let n=Object.keys(e).map(e=>e.toLowerCase()),r=t.reduce((t,r)=>(r=r.toLowerCase(),t||(e[r]?r:null)||n.find(e=>r.split(`-`)[0]===e.split(`-`)[0])||null),null);return e[r||``]||(r=`en`),{language:r,strings:e[r]}}function ke(e){switch(e){case`bar`:return W(D).barPlacement||`bottom`;case`floating`:return W(D).floatingPlacement||`auto`;default:return}}function Ae(){if(t.form){let e=(p?.getRootNode())?.getElementById?.(t.form);return e instanceof HTMLFormElement?e:null}return W(S)?.closest(`form`)??null}function je(e){return W(x)?Array.from(W(x).elements).filter(t=>t.matches(e)):[]}function Me(e){return je(`input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])`).reduce((e,t)=>{let n=t.name,r=t.value;return n&&r&&(e[n]=/\n/.test(r)?r.replace(RegExp(`(?<!\\r)\\n`,`g`),`\r
`):r),e},{})}function Ne(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Pe(e,t,n){let r=new URL(e,t);if(r.search||=t.search,n)for(let e in n)n[e]!==void 0&&n[e]!==null&&r.searchParams.set(e,n[e]);return r.toString()}function Fe(e){!W(_)&&e.currentTarget.checked?(e.preventDefault(),e.currentTarget.checked=!1,W(b)!==$.VERIFYING&&N()):e.currentTarget.checked||(e.preventDefault(),it())}function Ie(e){W(b)===$.VERIFYING?e.currentTarget.setCustomValidity(W(me).waitAlert):W(D).validationMessage&&e.currentTarget.setCustomValidity(W(D).validationMessage)}function Le(){Je(W(D).display),it()}function Re(){ot()}function ze(e){let t=e.target;W(D).display===`floating`&&t&&!p?.contains(t)&&!t.hasAttribute(`data-backdrop`)&&!t.closest(`[data-popover]`)&&W(b)!==$.VERIFIED&&!W(D).floatingPersist&&rt()}function Be(e){let t=e.target;W(ce)===`onfocus`&&W(b)===$.UNVERIFIED&&W(x)&&t instanceof Element&&(W(x).contains(t)||t.form===W(x))&&N()}function Ve(){Je(W(D).display),it()}function He(e){e.target?.getAttribute(`data-code-challenge`)!==`true`&&W(ce)===`onsubmit`&&W(b)===$.UNVERIFIED&&(e.preventDefault(),e.stopPropagation(),V(C,e.submitter,!0),M(),N().then(e=>{e&&!W(v)&&ir().then(()=>{qe(W(C))})}))}function Ue(e){e.persisted&&(Je(W(D).display),it())}function k(){ot()}function We(e){try{let t=JSON.parse(e);t&&typeof t==`object`&&et({serverVerificationFields:t?.sentinel?.fields,serverVerificationTimeZone:t?.sentinel?.timeZone,verifyUrl:t.verifyurl,...t})}catch(e){j(`unable to configure from x-altcha-config header`,e)}}function Ge(e=20){if(!W(S))return;let t=W(D).floatingPlacement;if(!W(ne)&&(V(ne,(W(D).floatingAnchor instanceof HTMLElement?W(D).floatingAnchor:W(D).floatingAnchor?document.querySelector(W(D).floatingAnchor):je(`input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])`)[0])||W(x),!0),!W(ne))){j(`unable to find floating anchor element`);return}let n=parseInt(W(D).floatingOffset,10)||12,r=W(ne).getBoundingClientRect(),i=W(S).getBoundingClientRect(),a=document.documentElement.clientHeight,o=document.documentElement.clientWidth,s=!t||t===`auto`?r.bottom+i.height+n+e>a:t===`top`,c=Math.max(e,Math.min(o-e-i.width,r.left+r.width/2-i.width/2));if(W(S).style.setProperty(`--altcha-floating-left`,`${c}px`),W(S).style.setProperty(`--altcha-floating-top`,s?`${r.top-(i.height+n)}px`:`${r.bottom+n}px`),W(S).setAttribute(`data-floating-position`,s?`top`:`bottom`),W(te)){let e=W(te).getBoundingClientRect();W(te).style.left=r.left-c+r.width/2-e.width/2+`px`}}async function Ke(e,t){let n=await ve(`onRequestServerVerification`,e,t);if(n!==void 0)return n;if(j(`requesting server verification from`,W(D).verifyUrl),!W(D).verifyUrl)throw Error(`Parameter verifyUrl must be set for server verification.`);let r=await W(D).fetch(Pe(W(D).verifyUrl,W(g)),{body:JSON.stringify({code:t,fields:W(D).serverVerificationFields?Me():void 0,payload:e,timeZone:W(D).serverVerificationTimeZone?Ne():void 0}),credentials:W(D).credentials||void 0,headers:{"Content-Type":`application/json`},method:`POST`});await Qe(r);let i=await r.json();return i&&typeof i==`object`&&`payload`in i&&i.payload&&m(`serververification`,i),i}function qe(e){W(x)&&`requestSubmit`in W(x)?W(x).requestSubmit(e):W(x)?.reportValidity()&&(e?e.click():W(x).submit())}function A(e,t={}){let{domain:n,name:r=W(D).name,maxAge:i,path:a,sameSite:o,secure:s}=t,c=`${encodeURIComponent(r)}=${encodeURIComponent(e)}`;n&&(c+=`; Domain=${n}`),i!=null&&(c+=`; Max-Age=${i}`),a&&(c+=`; Path=${a}`),o&&(c+=`; SameSite=${o}`),s&&(c+=`; Secure`),document.cookie=c}function Je(e){switch(e){case`bar`:case`floating`:case`overlay`:rt(),(!W(ce)||W(ce)===`off`)&&(W(ae).auto=`onsubmit`);break;case`standard`:M()}W(ee)!==e&&V(ee,e,!0)}function Ze(e){W(T)&&clearTimeout(W(T));let t=()=>{W(b)===$.UNVERIFIED?it():(V(_,!1),at($.EXPIRED)),m(`expired`)},n=e*1e3-Date.now();n>=1?V(T,setTimeout(t,n),!0):t()}async function Qe(e){if(e.status>=400){if(e.headers.get(`content-type`)?.includes(`/json`)){let t;try{t=await e.json()}catch{}if(t&&`error`in t)throw Error(`Server responded with ${e.status} - ${t.error}`)}throw Error(`Server responded with ${e.status}.`)}let t=e.headers.get(`content-type`);if(!t||!t.includes(`/json`))throw Error(`Server responded with invalid content-type. Expected application/json, received ${t}.`)}async function $e(e){if(!W(E)){at($.ERROR,`Cannot verify code challenge without PoW payload.`);return}at($.VERIFYING);let t=null;if(W(D).verifyUrl)t=await Ke(W(E),e);else if(W(D).verifyFunction)t=await W(D).verifyFunction(W(E),e);else{at($.ERROR,`Parameter verifyUrl is required for code challenge verification.`);return}t?.payload&&(V(E,t.payload,!0),j(`server payload`,W(E))),t?.verified===!0?(j(`verified`),at($.VERIFIED),m(`verified`,{payload:W(E)}),W(ce)===`onsubmit`&&ir().then(()=>{qe(W(C))})):at($.ERROR,t?.reason||`Verification failed.`),W(D).disableAutoFocus||Ee()?.focus()}function et(e){Object.assign(W(ae),{...Object.fromEntries(Object.entries(e).filter(([e,t])=>t!==void 0))})}function tt(){return{...W(D)}}function nt(){return W(b)}function rt(){V(oe,!1)}function j(...e){(W(D).debug||e.some(e=>e instanceof Error))&&console[e[0]instanceof Error?`error`:`log`](`ALTCHA`,`[name=${W(D).name}]`,...e)}function it(e=$.UNVERIFIED,t=null){V(_,!1),V(w,t,!0),V(E,null),W(y)&&W(y).abort(),W(T)&&(clearTimeout(W(T)),V(T,null)),at(e)}function at(e,t=null){V(b,e,!0),V(w,t,!0),m(`statechange`,{payload:W(E),state:W(b)})}function M(){V(oe,!0),ir().then(()=>{ot()})}function ot(){if(W(D).display===`floating`)return Ge();V(ie,W(ie)+1)}async function N(e={}){let{concurrency:t=Math.max(1,W(D).workers),controller:n=new AbortController,minDuration:r=W(D).minDuration}=e,i=performance.now(),a=null,o=null,c=!1,l=await ve(`onVerify`,e);if(l!==void 0)return l;it($.VERIFYING),V(y,n,!0);try{if(!s)throw Error(`Secure context (HTTPS) required.`);if(W(D).mockError)throw Error(`Mock error.`);if(W(D).test)return j(`running test mode with null challenge`),await Se(Math.max(0,r-(performance.now()-i))),W(y)?.signal.aborted?(it(),null):(V(E,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),j(`verified`),at($.VERIFIED),m(`verified`,{payload:W(E)}),{payload:W(E)});if(a=await Ce(),!a)throw Error(`Failed to fetch challenge.`);j(`challenge`,a),`configuration`in a&&(j(`re-configuring from challenge`,a.configuration),et(a.configuration)),a.parameters.expiresAt&&Ze(a.parameters.expiresAt),c=`_version`in a&&a._version===1;let e=globalThis.$altcha.algorithms.get(a.parameters.algorithm);if(!e)throw Error(`Unsupported algorithm ${a.parameters.algorithm}.`);if(o=await Ya({challenge:a,concurrency:t,controller:n,createWorker:e,counterMode:c?`string`:`uint32`,onOutOfMemory:e=>{if(j(`out of memory error received`),m(`outofmemory`),W(D).retryOnOutOfMemoryError&&e>1){let t=Math.floor(e/2);return j(`retrying with ${t} workers...`),t}},timeout:W(D).timeout}),W(y)?.signal.aborted)return it(),null;if(!o)throw Error(`Failed to find solution.`);j(`solution`,o),await Se(Math.max(0,r-(performance.now()-i))),V(v,a.codeChallenge||W(D).codeChallenge||null,!0),c?V(E,btoa(JSON.stringify(xe(a,o))),!0):V(E,btoa(JSON.stringify({challenge:{parameters:a.parameters,signature:a.signature},solution:o})),!0),W(v)?(j(`requesting code verification`),at($.CODE),m(`codechallenge`,{codeChallenge:W(v)})):W(D).verifyUrl?await $e():(j(`verified`),at($.VERIFIED),m(`verified`,{payload:W(E)}))}catch(e){return j(`verification failed`,e),at($.ERROR,String(e)),null}finally{V(y,null)}return{challenge:a,payload:W(E),solution:o}}var st={configure:et,getConfiguration:tt,getState:nt,hide:rt,log:j,reset:it,setState:at,show:M,updateUI:ot,verify:N},ct=ao();K(`scroll`,gt,Re),K(`click`,gt,ze),K(`pageshow`,ht,Ue),K(`resize`,ht,k);var lt=wt(ct),ut=e=>{J(e,Za())};Y(lt,e=>{W(D).display===`overlay`&&W(oe)&&e(ut)});var dt=I(lt,2),pt=F(dt),mt=e=>{var t=$a(),n=wt(t),r=I(n,2),i=e=>{var t=Qa();Si(t,()=>document.querySelector(W(D).overlayContent)?.innerHTML,!0),P(t),J(e,t)};Y(r,e=>{W(D).overlayContent&&e(i)}),K(`click`,n,Le,!0),J(e,t)};Y(pt,e=>{W(D).display===`overlay`&&W(oe)&&e(mt)});var _t=I(pt,2),vt=F(_t),yt=F(vt),bt=F(yt);{let e=tn(()=>W(D).display===`standard`&&W(ce)!==`onsubmit`||W(b)===$.VERIFYING);Ci(bt,()=>W(se),(n,r)=>{r(n,{get id(){return W(O)},get form(){return t.form},name:``,get required(){return W(e)},get loading(){return W(le)},get checked(){return W(_)},onchange:Fe,oninvalid:Ie})})}var xt=I(bt,2),St=F(xt),Ct=e=>{var t=Qr();br(()=>ui(t,W(me).verificationRequired)),J(e,t)},Et=e=>{var t=Qr();br(()=>ui(t,W(me).verifying)),J(e,t)},Dt=e=>{var t=Qr();br(()=>ui(t,W(me).verified)),J(e,t)},Ot=e=>{var t=Qr();br(()=>ui(t,W(me).label)),J(e,t)};Y(St,e=>{W(b)===$.CODE&&W(v)?e(Ct):W(b)===$.VERIFYING?e(Et,1):W(b)===$.VERIFIED?e(Dt,2):e(Ot,-1)}),P(xt),P(yt);var kt=I(yt,2),At=e=>{Ta(e,{get strings(){return W(me)}})};Y(kt,e=>{W(de)&&e(At)}),P(vt);var jt=I(vt,2),Mt=e=>{{let t=tn(()=>W(D).display===`bar`&&W(de));Da(e,{get logo(){return W(t)},get strings(){return W(me)}})}};Y(jt,e=>{W(ue)&&e(Mt)});var L=I(jt,2),Nt=e=>{var t=eo();la(t,e=>V(te,e),()=>W(te)),J(e,t)};Y(L,e=>{W(D).display===`floating`&&e(Nt)});var Pt=I(L,2),Ft=e=>{var n=to();Qi(n),br(()=>{X(n,`form`,t.form),X(n,`name`,W(D).name),$i(n,W(E))}),J(e,n)};Y(Pt,e=>{W(D).setCookie||e(Ft)}),P(_t);var It=I(_t,2),Lt=e=>{Ka(e,{get anchor(){return W(S)},onClickOutside:()=>{s&&it()},get placement(){return W(D).popoverPlacement},role:`alert`,variant:`error`,get dir(){return W(pe)},get updateUISignal(){return W(ie)},children:(e,t)=>{var n=$r(),r=wt(n),i=e=>{J(e,no())},a=e=>{var t=ro(),n=Tt(t,!0);br(()=>ui(n,W(me).expired)),J(e,t)},o=e=>{var t=ro(),n=Tt(t,!0);br(()=>{X(t,`title`,W(w)),ui(n,W(me).error)}),J(e,t)};Y(r,e=>{!W(w)&&!s?e(i):!W(w)&&W(b)===$.EXPIRED?e(a,1):e(o,-1)}),J(e,n)},$$slots:{default:!0}})},Rt=e=>{var t=$r();xi(wt(t),()=>W(v),e=>{{let t=tn(()=>W(D).codeChallengeDisplay!==`standard`);Ka(e,{get anchor(){return W(S)},get backdrop(){return W(t)},get display(){return W(D).codeChallengeDisplay},onClose:()=>{it()},get placement(){return W(D).popoverPlacement},role:`dialog`,get"aria-label"(){return W(me).verificationRequired},get dir(){return W(pe)},get updateUISignal(){return W(ie)},children:(e,t)=>{var n=io(),r=wt(n);Ba(r,{get audioUrl(){return W(he)},get imageUrl(){return W(ge)},onCancel:()=>it(),onReload:()=>N(),onSubmit:e=>$e(e),get codeChallenge(){return W(v)},get config(){return W(D)},get strings(){return W(me)}});var i=I(r,2),a=e=>{Da(e,{get logo(){return W(de)},get strings(){return W(me)}})};Y(i,e=>{W(ue)&&W(D).codeChallengeDisplay!==`standard`&&e(a)}),J(e,n)},$$slots:{default:!0}})}}),J(e,t)};Y(It,e=>{W(w)||W(b)===$.EXPIRED||!s?e(Lt):W(v)&&W(b)===$.CODE&&e(Rt,1)}),P(dt),la(dt,e=>V(S,e),()=>W(S)),br(e=>{X(dt,`data-state`,W(b)),X(dt,`data-display`,W(D).display||void 0),X(dt,`data-placement`,e),X(dt,`data-visible`,W(oe)||void 0),X(dt,`dir`,W(pe)),X(xt,`for`,W(O)),dt.dir=dt.dir},[()=>ke(W(D).display)]),J(e,ct);var zt=Xe(st);return a(),zt}typeof window<`u`&&window.customElements&&!customElements.get(`altcha-widget`)&&customElements.define(`altcha-widget`,_a(oo,{auto:{type:`String`},challenge:{type:`String`},configuration:{type:`String`},display:{type:`String`},form:{type:`String`},language:{type:`String`},name:{type:`String`},theme:{type:`String`},type:{type:`String`},workers:{type:`Number`}},[],[`configure`,`getConfiguration`,`getState`,`hide`,`log`,`reset`,`setState`,`show`,`updateUI`,`verify`]));var so=`(function() {
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
`,co=typeof self<`u`&&self.Blob&&new Blob([`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`,so],{type:`text/javascript;charset=utf-8`});function lo(e){let t;try{if(t=co&&(self.URL||self.webkitURL).createObjectURL(co),!t)throw``;let n=new Worker(t,{name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(so),{name:e?.name})}}var uo=`(function() {
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
`,fo=typeof self<`u`&&self.Blob&&new Blob([`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`,uo],{type:`text/javascript;charset=utf-8`});function po(e){let t;try{if(t=fo&&(self.URL||self.webkitURL).createObjectURL(fo),!t)throw``;let n=new Worker(t,{name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(uo),{name:e?.name})}}Ja(`:root {
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
}`),$altcha.algorithms.set(`SHA-256`,()=>new po),$altcha.algorithms.set(`SHA-384`,()=>new po),$altcha.algorithms.set(`SHA-512`,()=>new po),$altcha.algorithms.set(`PBKDF2/SHA-256`,()=>new lo),$altcha.algorithms.set(`PBKDF2/SHA-384`,()=>new lo),$altcha.algorithms.set(`PBKDF2/SHA-512`,()=>new lo);var mo={ARGON2ID:`argon2id.js`,SCRYPT:`scrypt.js`};function ho(){let e=globalThis.$altcha;return e?.algorithms instanceof Map?e.algorithms:null}function go(e,t=ho()){if(!t||e===``)return 0;let n=e.endsWith(`/`)?e:`${e}/`,r=0;for(let[e,i]of Object.entries(mo))t.has(e)||(t.set(e,()=>new Worker(`${n}${i}`)),r++);return r}var _o=!1;function vo(e){_o=e}function yo(){return{debug(...e){_o&&typeof console<`u`&&typeof console.debug==`function`&&console.debug(`[nowo-altcha-type]`,...e)}}}function bo(e){let t=e.querySelector(`[data-altcha-type-target="input"]`),n=e.querySelector(`[data-altcha-type-target="widget"]`);if(!t||!n)return yo().debug(`init skipped: missing input or widget`),!1;let r=e.getAttribute(`data-altcha-type-workers-url-value`);r&&yo().debug(`algorithm workers registered`,go(r));let i=e=>{let n=e.detail?.payload;typeof n==`string`&&n!==``&&(t.value=n,t.dispatchEvent(new Event(`input`,{bubbles:!0})),t.dispatchEvent(new Event(`change`,{bubbles:!0})),yo().debug(`payload synced to form input`))},a=e=>{let n=e.detail;n?.state===`verified`&&typeof n.payload==`string`&&(t.value=n.payload),(n?.state===`unverified`||n?.state===`error`||n?.state===`expired`)&&(t.value=``)};return n.addEventListener(`verified`,i),n.addEventListener(`statechange`,a),e.__nowoAltchaCleanup=()=>{n.removeEventListener(`verified`,i),n.removeEventListener(`statechange`,a)},yo().debug(`container initialized`),!0}function xo(e){let t=e.__nowoAltchaCleanup;typeof t==`function`&&(t(),delete e.__nowoAltchaCleanup)}var So=`.nowo-altcha-type`;function Co(e=document){e.querySelectorAll(So).forEach(e=>{vo(e.getAttribute(`data-altcha-type-debug-value`)===`1`),bo(e)})}function wo(){yo().debug(`boot`,{buildTime:`a4a1a13105c1`}),Co(),typeof MutationObserver<`u`&&new MutationObserver(e=>{for(let t of e)t.addedNodes.forEach(e=>{e instanceof HTMLElement&&(e.matches(So)?bo(e):Co(e))}),t.removedNodes.forEach(e=>{e instanceof HTMLElement&&e.matches(So)&&xo(e)})}).observe(document.documentElement,{childList:!0,subtree:!0})}var To=`__nowoAltchaTypeBooted`,Eo=window;Eo[To]!==!0&&(Eo[To]=!0,document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,wo,{once:!0}):wo())})();