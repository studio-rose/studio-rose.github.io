var Q=Object.defineProperty;var X=(t,e,n)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var p=(t,e,n)=>(X(t,typeof e!="symbol"?e+"":e,n),n);import{n as v,r as E,h as O,d as D,i as Y,j as q,k as Z,l as tt,m as et,p as nt,q as z,v as it,w as st,x as rt}from"./scheduler.B2TW1UpP.js";const F=typeof window<"u";let lt=F?()=>window.performance.now():()=>Date.now(),B=F?t=>requestAnimationFrame(t):v;const x=new Set;function U(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&B(U)}function ot(t){let e;return x.size===0&&B(U),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let C=!1;function at(){C=!0}function ct(){C=!1}function ft(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,_=(o>0&&e[n[o]].claim_order<=a?o+1:ft(1,o,h=>e[n[h]].claim_order,a))-1;i[s]=n[_]+1;const f=_+1;n[f]=s,o=Math.max(f,o)}const c=[],r=[];let l=e.length-1;for(let s=n[o]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);l>=s;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<r.length;s++){for(;a<c.length&&r[s].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(r[s],_)}}function _t(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function dt(t){const e=R("style");return e.textContent="/* empty */",ht(V(t),e),e.sheet}function ht(t,e){return _t(t.head||t,e),e.sheet}function mt(t,e){if(C){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){t.insertBefore(e,n||null)}function $t(t,e,n){C&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function R(t){return document.createElement(t)}function yt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function qt(){return I(" ")}function zt(){return I("")}function kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const xt=["width","height"];function Gt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&xt.indexOf(i)===-1?t[i]=e[i]:gt(t,i,e[i])}function Ft(t){return t.dataset.svelteH}function wt(t){return Array.from(t.childNodes)}function W(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function J(t,e,n,i,o=!1){W(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,o||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function vt(t,e,n,i){return J(t,o=>o.nodeName===e,o=>{const c=[];for(let r=0;r<o.attributes.length;r++){const l=o.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>o.removeAttribute(r))},()=>i(e))}function Ut(t,e,n){return vt(t,e,n,R)}function Nt(t,e){return J(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Vt(t){return Nt(t," ")}function k(t,e,n){for(let i=n;i<t.length;i+=1){const o=t[i];if(o.nodeType===8&&o.textContent.trim()===e)return i}return-1}function Wt(t,e){const n=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new P(e);W(t);const o=t.splice(n,i-n+1);N(o[0]),N(o[o.length-1]);const c=o.slice(1,o.length-1);if(c.length===0)return new P(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new P(e,c)}function Jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Kt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class Tt{constructor(e=!1){p(this,"is_svg",!1);p(this,"e");p(this,"n");p(this,"t");p(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=yt(n.nodeName):this.e=R(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)pt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class P extends Tt{constructor(n=!1,i){super(n);p(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$t(this.t,this.n[i],n)}}function Qt(t,e){return new t(e)}const b=new Map;let S=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function bt(t,e){const n={stylesheet:dt(e),rules:{}};return b.set(t,n),n}function G(t,e,n,i,o,c,r,l=0){const s=16.666/i;let a=`{
`;for(let d=0;d<=1;d+=s){const g=e+(n-e)*c(d);a+=d*100+`%{${r(g,1-g)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${At(_)}_${l}`,h=V(t),{stylesheet:y,rules:u}=b.get(h)||bt(h,t);u[f]||(u[f]=!0,y.insertRule(`@keyframes ${f} ${_}`,y.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${o}ms 1 both`,S+=1,f}function St(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),S-=o,S||Ct())}function Ct(){B(()=>{S||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),b.clear())})}let w;function Mt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function j(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const A=new Set;let $;function Xt(){$={r:0,c:[],p:$}}function Yt(){$.r||E($.c),$=$.p}function Ht(t,e){t&&t.i&&(A.delete(t),t.i(e))}function Zt(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),$.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Lt={duration:0};function te(t,e,n,i){let c=e(t,n,{direction:"both"}),r=i?0:1,l=null,s=null,a=null,_;function f(){a&&St(t,a)}function h(u,m){const d=u.b-r;return m*=Math.abs(d),{a:r,b:u.b,d,duration:m,start:u.start,end:u.start+m,group:u.group}}function y(u){const{delay:m=0,duration:d=300,easing:g=Y,tick:M=v,css:H}=c||Lt,L={start:lt()+m,b:u};u||(L.group=$,$.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),l||s?s=L:(H&&(f(),a=G(t,r,u,d,m,g,H)),u&&M(0,1),l=h(L,d),D(()=>j(t,u,"start")),ot(T=>{if(s&&T>s.start&&(l=h(s,d),s=null,j(t,l.b,"start"),H&&(f(),a=G(t,r,l.b,l.duration,0,g,c.css))),l){if(T>=l.end)M(r=l.b,1-r),j(t,l.b,"end"),s||(l.b?f():--l.group.r||E(l.group.c)),l=null;else if(T>=l.start){const K=T-l.start;r=l.a+l.d*g(K/l.duration),M(r,1-r)}}return!!(l||s)}))}return{run(u){O(c)?Mt().then(()=>{c=c({direction:u?"in":"out"}),y(u)}):y(u)},end(){f(),l=s=null}}}function ee(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ne(t){t&&t.c()}function ie(t,e){t&&t.l(e)}function Pt(t,e,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),D(()=>{const c=t.$$.on_mount.map(it).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):E(c),t.$$.on_mount=[]}),o.forEach(D)}function jt(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(st.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,i,o,c,r=null,l=[-1]){const s=nt;z(t);const a=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:o,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:q(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,h,...y)=>{const u=y.length?y[0]:h;return a.ctx&&o(a.ctx[f],a.ctx[f]=u)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](u),_&&Dt(t,f)),h}):[],a.update(),_=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){at();const f=wt(e.target);a.fragment&&a.fragment.l(f),f.forEach(N)}else a.fragment&&a.fragment.c();e.intro&&Ht(t.$$.fragment),Pt(t,e.target,e.anchor),ct(),Z()}z(s)}class re{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){jt(this,1),this.$destroy=v}$on(e,n){if(!O(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ot);export{te as A,Gt as B,ee as C,It as D,Wt as E,P as H,re as S,wt as a,Nt as b,Ut as c,N as d,R as e,Vt as f,$t as g,mt as h,se as i,Jt as j,Ft as k,zt as l,Zt as m,Yt as n,Ht as o,gt as p,Kt as q,Xt as r,qt as s,I as t,Qt as u,ne as v,ie as w,Pt as x,jt as y,kt as z};
