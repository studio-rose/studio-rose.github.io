import{s as S,n as E,d as T,e as I,u as P,g as U,f as V}from"../chunks/scheduler.B2TW1UpP.js";import{S as A,i as C,s as y,e as _,f as k,c as m,p as $,q as H,g as d,z as q,o as p,r as z,m as b,n as B,d as u,k as N,A as h,v as D,a as K,w as O,x as j,h as F,y as G}from"../chunks/index.DrgGSHiu.js";import{b as f}from"../chunks/paths.CSxOeJ2n.js";import{f as x,s as L}from"../chunks/index.CjAEjFXM.js";function M(c){let s,r="",l,n,e,t=`<u>Navigation</u> <br/> <a href="${f}/characters/silver" class="svelte-gewprd">Silver</a><br/> <a href="${f}/characters/echo" class="svelte-gewprd">Echo</a><br/> <a href="${f}/characters/narcissus" class="svelte-gewprd">Narcissus</a><br/> <a href="${f}/characters/pandora" class="svelte-gewprd">Pandora</a><br/> <a href="${f}/characters/melody" class="svelte-gewprd">Melody</a><br/> <a href="${f}/characters/horus" class="svelte-gewprd">Horus</a><br/> <a href="${f}/characters/anubis" class="svelte-gewprd">Anubis</a><br/> <a href="${f}/characters/kamui" class="svelte-gewprd">Kamui</a><br/> <a href="${f}/characters/hammurabi" class="svelte-gewprd">Hammurabi</a><br/>`,a,o,v,w;return{c(){s=_("button"),s.innerHTML=r,n=y(),e=_("nav"),e.innerHTML=t,this.h()},l(i){s=m(i,"BUTTON",{class:!0,"data-svelte-h":!0}),N(s)!=="svelte-1cyuosx"&&(s.innerHTML=r),n=k(i),e=m(i,"NAV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-16ld0uc"&&(e.innerHTML=t),this.h()},h(){$(s,"class","modal svelte-gewprd"),$(e,"class","svelte-gewprd")},m(i,g){d(i,s,g),d(i,n,g),d(i,e,g),o=!0,v||(w=q(s,"click",c[1]),v=!0)},p:E,i(i){o||(i&&T(()=>{o&&(l||(l=h(s,x,{delay:0,duration:100},!0)),l.run(1))}),i&&T(()=>{o&&(a||(a=h(e,L,{delay:0,duration:400,axis:"x"},!0)),a.run(1))}),o=!0)},o(i){i&&(l||(l=h(s,x,{delay:0,duration:100},!1)),l.run(0)),i&&(a||(a=h(e,L,{delay:0,duration:400,axis:"x"},!1)),a.run(0)),o=!1},d(i){i&&(u(s),u(n),u(e)),i&&l&&l.end(),i&&a&&a.end(),v=!1,w()}}}function J(c){let s,r,l,n,e=c[0]&&M(c);return{c(){e&&e.c(),s=y(),r=_("input"),this.h()},l(t){e&&e.l(t),s=k(t),r=m(t,"INPUT",{type:!0,style:!0}),this.h()},h(){$(r,"type","checkbox"),H(r,"position","fixed"),H(r,"top","0px")},m(t,a){e&&e.m(t,a),d(t,s,a),d(t,r,a),r.checked=c[0],l||(n=q(r,"change",c[2]),l=!0)},p(t,[a]){t[0]?e?(e.p(t,a),a&1&&p(e,1)):(e=M(t),e.c(),p(e,1),e.m(s.parentNode,s)):e&&(z(),b(e,1,1,()=>{e=null}),B()),a&1&&(r.checked=t[0])},i(t){p(e)},o(t){b(e)},d(t){t&&(u(s),u(r)),e&&e.d(t),l=!1,n()}}}function Q(c,s,r){let l=!1;const n=()=>{r(0,l=!1)};function e(){l=this.checked,r(0,l)}return[l,n,e]}class R extends A{constructor(s){super(),C(this,s,Q,J,S,{})}}function W(c){let s,r,l,n;r=new R({});const e=c[1].default,t=I(e,c,c[0],null);return{c(){s=_("div"),D(r.$$.fragment),l=y(),t&&t.c(),this.h()},l(a){s=m(a,"DIV",{class:!0});var o=K(s);O(r.$$.fragment,o),l=k(o),t&&t.l(o),o.forEach(u),this.h()},h(){$(s,"class","flex-container svelte-xclg3k")},m(a,o){d(a,s,o),j(r,s,null),F(s,l),t&&t.m(s,null),n=!0},p(a,[o]){t&&t.p&&(!n||o&1)&&P(t,e,a,a[0],n?V(e,a[0],o,null):U(a[0]),null)},i(a){n||(p(r.$$.fragment,a),p(t,a),n=!0)},o(a){b(r.$$.fragment,a),b(t,a),n=!1},d(a){a&&u(s),G(r),t&&t.d(a)}}}function X(c,s,r){let{$$slots:l={},$$scope:n}=s;return c.$$set=e=>{"$$scope"in e&&r(0,n=e.$$scope)},[n,l]}class te extends A{constructor(s){super(),C(this,s,X,W,S,{})}}export{te as component};
