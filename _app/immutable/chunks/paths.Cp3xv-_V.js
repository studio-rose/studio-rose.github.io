import{n as c,s as g}from"./scheduler.TpFw2XS-.js";const e=[];function p(o,l=c){let i;const n=new Set;function r(t){if(g(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=l(r,u)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1ordogo)==null?void 0:f.base)??"/studio-rose.github.io";var a;const q=((a=globalThis.__sveltekit_1ordogo)==null?void 0:a.assets)??d;export{q as a,d as b,p as w};