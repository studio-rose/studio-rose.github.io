import{_ as r}from"../chunks/preload-helper.D6kgxu3v.js";import{R as s}from"../chunks/control.CYgJF_JY.js";import{s as c,n as i}from"../chunks/scheduler.CJrvluM7.js";import{S as n,i as m,e as l,c as u,k as p,g as d,d as v}from"../chunks/index.BtYbdtSa.js";function h(e,t){throw new s(e,t.toString())}new TextEncoder;async function E({url:e}){h(303,`${e.pathname}/overview`)}async function b(){const e=await Object.assign({"/src/lib/character_data/anubis.json":()=>r(()=>import("../chunks/anubis.DomQkrqA.js"),[],import.meta.url),"/src/lib/character_data/base.json":()=>r(()=>import("../chunks/base.CXjGVp1_.js"),[],import.meta.url),"/src/lib/character_data/echo.json":()=>r(()=>import("../chunks/echo.CXjGVp1_.js"),[],import.meta.url),"/src/lib/character_data/hammurabi.json":()=>r(()=>import("../chunks/hammurabi.CXjGVp1_.js"),[],import.meta.url),"/src/lib/character_data/horus.json":()=>r(()=>import("../chunks/horus.BNhclOYT.js"),[],import.meta.url),"/src/lib/character_data/kamui.json":()=>r(()=>import("../chunks/kamui.CXjGVp1_.js"),[],import.meta.url),"/src/lib/character_data/melody.json":()=>r(()=>import("../chunks/melody.DK8lV5qQ.js"),[],import.meta.url),"/src/lib/character_data/narcissus.json":()=>r(()=>import("../chunks/narcissus.CXjGVp1_.js"),[],import.meta.url),"/src/lib/character_data/pandora.json":()=>r(()=>import("../chunks/pandora.DzBDzt7i.js"),[],import.meta.url),"/src/lib/character_data/silver.json":()=>r(()=>import("../chunks/silver.BNdvF_KG.js"),[],import.meta.url)});return Object.keys(e).map(o=>({character:o.split("/").slice(-1)[0].replace(".json","")}))}const j=!0,R=Object.freeze(Object.defineProperty({__proto__:null,entries:b,load:E,prerender:j},Symbol.toStringTag,{value:"Module"}));function f(e){let t,o="Test character page";return{c(){t=l("div"),t.textContent=o},l(a){t=u(a,"DIV",{"data-svelte-h":!0}),p(t)!=="svelte-dpabx8"&&(t.textContent=o)},m(a,_){d(a,t,_)},p:i,i,o:i,d(a){a&&v(t)}}}class D extends n{constructor(t){super(),m(this,t,null,f,c,{})}}export{D as component,R as universal};
