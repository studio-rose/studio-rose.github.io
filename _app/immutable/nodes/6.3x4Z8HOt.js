import{_ as l}from"../chunks/preload-helper.D6kgxu3v.js";import{_ as p}from"../chunks/dynamic-import-helper.BheWnx7M.js";import{e as O}from"../chunks/routing_utils.CAxh5cO8.js";import{s as P,n as h,e as d}from"../chunks/scheduler.TpFw2XS-.js";import{S as I,i as D,e as m,c as n,a as f,d as c,u as s,g as y,z as V,s as A,f as R,h as g}from"../chunks/index.1KQ7Om9a.js";import{e as v}from"../chunks/each.D6YF6ztN.js";async function T({params:o}){const r=await p(Object.assign({"../../../../lib/character_gallery/anubis.json":()=>l(()=>import("../chunks/anubis.BwZU52lH.js"),[],import.meta.url),"../../../../lib/character_gallery/echo.json":()=>l(()=>import("../chunks/echo.BMugdSQF.js"),[],import.meta.url),"../../../../lib/character_gallery/hammurabi.json":()=>l(()=>import("../chunks/hammurabi.D5d6n3NA.js"),[],import.meta.url),"../../../../lib/character_gallery/horus.json":()=>l(()=>import("../chunks/horus.al-v2tqt.js"),[],import.meta.url),"../../../../lib/character_gallery/kamui.json":()=>l(()=>import("../chunks/kamui.CpPiBVXJ.js"),[],import.meta.url),"../../../../lib/character_gallery/melody.json":()=>l(()=>import("../chunks/melody.B-8NtQNp.js"),[],import.meta.url),"../../../../lib/character_gallery/narcissus.json":()=>l(()=>import("../chunks/narcissus.CxenT61j.js"),[],import.meta.url),"../../../../lib/character_gallery/pandora.json":()=>l(()=>import("../chunks/pandora.CyNVIc-d.js"),[],import.meta.url),"../../../../lib/character_gallery/silver.json":()=>l(()=>import("../chunks/silver.BMugdSQF.js"),[],import.meta.url)}),`../../../../lib/character_gallery/${o.character}.json`,7).then(_=>_.default,_=>new Map),e=Object.values(r).map(_=>p(Object.assign({"../../../../lib/character_images/Echo.png":()=>l(()=>import("../chunks/Echo.Dhh7_CLR.js"),[],import.meta.url),"../../../../lib/character_images/Hammurabi.png":()=>l(()=>import("../chunks/Hammurabi.DDYw6aR-.js"),[],import.meta.url),"../../../../lib/character_images/Horus.png":()=>l(()=>import("../chunks/Horus.DK7zcgEA.js"),[],import.meta.url),"../../../../lib/character_images/Kamui.png":()=>l(()=>import("../chunks/Kamui.K1CYTwe5.js"),[],import.meta.url),"../../../../lib/character_images/Narcissus.png":()=>l(()=>import("../chunks/Narcissus.D8jElm5L.js"),[],import.meta.url),"../../../../lib/character_images/Pandora.png":()=>l(()=>import("../chunks/Pandora.UWYtyhgX.js"),[],import.meta.url),"../../../../lib/character_images/anubis.png":()=>l(()=>import("../chunks/anubis.DIjlTorT.js"),[],import.meta.url),"../../../../lib/character_images/melody.png":()=>l(()=>import("../chunks/melody.D-3Lexqs.js"),[],import.meta.url)}),`../../../../lib/character_images/${_.path}.png`,7)),t=await Promise.all(e);return{gallery:r,image_data:t}}const q=Object.freeze(Object.defineProperty({__proto__:null,entries:O,load:T},Symbol.toStringTag,{value:"Module"}));function b(o,r,i){const e=o.slice();return e[1]=r[i],e}function E(o){let r,i,e,t;return{c(){r=m("div"),i=m("img"),t=A(),this.h()},l(_){r=n(_,"DIV",{class:!0});var a=f(r);i=n(a,"IMG",{src:!0,alt:!0,class:!0}),t=R(a),a.forEach(c),this.h()},h(){d(i.src,e=o[1].default)||s(i,"src",e),s(i,"alt","Alt"),s(i,"class","svelte-byvoah"),s(r,"class","image svelte-byvoah")},m(_,a){y(_,r,a),g(r,i),g(r,t)},p(_,a){a&1&&!d(i.src,e=_[1].default)&&s(i,"src",e)},d(_){_&&c(r)}}}function j(o){let r,i=v(Object.values(o[0].image_data)),e=[];for(let t=0;t<i.length;t+=1)e[t]=E(b(o,i,t));return{c(){r=m("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){r=n(t,"DIV",{class:!0});var _=f(r);for(let a=0;a<e.length;a+=1)e[a].l(_);_.forEach(c),this.h()},h(){s(r,"class","container svelte-byvoah")},m(t,_){y(t,r,_);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(r,null)},p(t,[_]){if(_&1){i=v(Object.values(t[0].image_data));let a;for(a=0;a<i.length;a+=1){const u=b(t,i,a);e[a]?e[a].p(u,_):(e[a]=E(u),e[a].c(),e[a].m(r,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=i.length}},i:h,o:h,d(t){t&&c(r),V(e,t)}}}function L(o,r,i){let{data:e}=r;return o.$$set=t=>{"data"in t&&i(0,e=t.data)},[e]}class z extends I{constructor(r){super(),D(this,r,L,j,P,{data:0})}}export{z as component,q as universal};