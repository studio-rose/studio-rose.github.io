function k(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function w(t){return t()}function A(){return Object.create(null)}function j(t){t.forEach(w)}function B(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(E(n,e))}function S(t,n,e,o){if(t){const c=y(t,n,e,o);return t[0](c)}}function y(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],f=Math.max(n.dirty.length,c.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|c[u];return a}return n.dirty|c}return n.dirty}function v(t,n,e,o,c,a){if(c){const f=y(n,e,o,a);t.p(f,c)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let l;function _(t){l=t}function b(){if(!l)throw new Error("Function called outside component initialization");return l}function I(t){b().$$.on_mount.push(t)}function J(t){b().$$.after_update.push(t)}function K(t){b().$$.on_destroy.push(t)}function L(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const i=[],g=[];let r=[];const d=[],m=Promise.resolve();let p=!1;function O(){p||(p=!0,m.then(z))}function N(){return O(),m}function q(t){r.push(t)}function Q(t){d.push(t)}const h=new Set;let s=0;function z(){if(s!==0)return;const t=l;do{try{for(;s<i.length;){const n=i[s];s++,_(n),D(n.$$)}}catch(n){throw i.length=0,s=0,n}for(_(null),i.length=0,s=0;g.length;)g.pop()();for(let n=0;n<r.length;n+=1){const e=r[n];h.has(e)||(h.add(e),e())}r.length=0}while(i.length);for(;d.length;)d.pop()();p=!1,h.clear(),_(t)}function D(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function R(t){const n=[],e=[];r.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),r=n}export{L as A,x as B,H as C,Q as D,J as a,g as b,P as c,S as d,U as e,A as f,G as g,z as h,B as i,F as j,q as k,R as l,l as m,k as n,I as o,_ as p,w as q,j as r,C as s,N as t,v as u,i as v,O as w,M as x,b as y,K as z};
