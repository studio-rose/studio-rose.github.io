import{s as $e,n as se}from"../chunks/scheduler.B2TW1UpP.js";import{S as ye,i as be,C as U,t as we,D as W,a as r,d as n,b as De,o as a,g as Ee,h as t,j as Ie,e as i,s as D,u as B,c as d,z as me,f as I,v as F,p as Ve,w as N,n as q,l as G,x as Y}from"../chunks/index.DocpK9cr.js";import"../chunks/paths.BpOtYRkS.js";const Me=!0,He=Object.freeze(Object.defineProperty({__proto__:null,prerender:Me},Symbol.toStringTag,{value:"Module"}));function ke(f){let e,c,g,l,s;return{c(){e=U("svg"),c=U("polygon"),g=U("polygon"),l=U("text"),s=we(f[0]),this.h()},l(v){e=W(v,"svg",{viewBox:!0,class:!0});var h=r(e);c=W(h,"polygon",{class:!0,points:!0}),r(c).forEach(n),g=W(h,"polygon",{class:!0,points:!0}),r(g).forEach(n),l=W(h,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,class:!0});var x=r(l);s=De(x,f[0]),x.forEach(n),h.forEach(n),this.h()},h(){a(c,"class","outer-hexagon svelte-hes1rg"),a(c,"points",_e(50,[50,50])),a(g,"class","inner-hexagon svelte-hes1rg"),a(g,"points",_e(45,[50,50])),a(l,"x","50%"),a(l,"y","50%"),a(l,"dominant-baseline","middle"),a(l,"text-anchor","middle"),a(l,"class","svelte-hes1rg"),a(e,"viewBox","0 0 100 100"),a(e,"class","svelte-hes1rg")},m(v,h){Ee(v,e,h),t(e,c),t(e,g),t(e,l),t(l,s)},p(v,[h]){h&1&&Ie(s,v[0])},i:se,o:se,d(v){v&&n(e)}}}function _e(f,e){let c="",g=Math.PI/3;for(let l=0;l<6;l++){let s=l*g,v=e[0]+Math.sin(s)*f,h=e[1]+Math.cos(s)*f;c+=v.toFixed(2)+" "+h.toFixed(2)+" "}return c}function Ce(f,e,c){let{label:g="N/A"}=e;const l="N/A";return f.$$set=s=>{"label"in s&&c(0,g=s.label)},[g,l]}class J extends ye{constructor(e){super(),be(this,e,Ce,ke,$e,{label:0,page_link:1})}get page_link(){return this.$$.ctx[1]}}function Te(f){let e,c,g=`.hexagon-holder {
            display:flex;
            flex-flow: column nowrap;
            justify-content: center;
            border:1px solid white;
            width: 40%;
            margin: 8px;
            aspect-ratio: 1;
        }
        .hexagon-row {
            border:0px solid red;
            display: flex;
            justify-content: center;
            flex-shrink: 0;
            width: 100%;
            height: 30%;
            margin: 8px 0px;
        }
        .hexagon {
            border:0px solid blue;
            width:30%;
            aspect-ratio: 1;
            flex-shrink: 0;
            margin: 0px 8px;
        }
        .hex {
            padding:0%;
        }
        .centered {
            text-align: center;
            margin: auto;
        }`,l,s,v,h,x,_,X,V,M,$,Z,u,k,C,y,ee,p,re=`<div class="centered"><span>Melody</span> <hr/>
                    The Magician</div>`,te,T,j,b,ae,m,S,A,E,ne,H,L,w,K;return _=new J({props:{label:"Overview"}}),$=new J({props:{label:"Abilities"}}),y=new J({props:{label:"History"}}),b=new J({props:{label:"Gallery"}}),E=new J({props:{label:"Trivia"}}),w=new J({props:{label:"Attributes"}}),{c(){e=i("div"),c=i("style"),c.textContent=g,l=D(),s=i("div"),v=i("div"),h=i("div"),x=i("div"),B(_.$$.fragment),X=D(),V=i("div"),M=i("div"),B($.$$.fragment),Z=D(),u=i("div"),k=i("div"),C=i("div"),B(y.$$.fragment),ee=D(),p=i("div"),p.innerHTML=re,te=D(),T=i("div"),j=i("div"),B(b.$$.fragment),ae=D(),m=i("div"),S=i("div"),A=i("div"),B(E.$$.fragment),ne=D(),H=i("div"),L=i("div"),B(w.$$.fragment),this.h()},l(o){e=d(o,"DIV",{class:!0});var O=r(e);c=d(O,"STYLE",{"data-svelte-h":!0}),me(c)!=="svelte-dk5tx7"&&(c.textContent=g),l=I(O),s=d(O,"DIV",{class:!0});var P=r(s);v=d(P,"DIV",{class:!0});var Q=r(v);h=d(Q,"DIV",{class:!0});var le=r(h);x=d(le,"DIV",{class:!0});var oe=r(x);F(_.$$.fragment,oe),oe.forEach(n),le.forEach(n),X=I(Q),V=d(Q,"DIV",{class:!0});var ie=r(V);M=d(ie,"DIV",{class:!0});var de=r(M);F($.$$.fragment,de),de.forEach(n),ie.forEach(n),Q.forEach(n),Z=I(P),u=d(P,"DIV",{class:!0});var z=r(u);k=d(z,"DIV",{class:!0});var ce=r(k);C=d(ce,"DIV",{class:!0});var ve=r(C);F(y.$$.fragment,ve),ve.forEach(n),ce.forEach(n),ee=I(z),p=d(z,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),me(p)!=="svelte-ydscyi"&&(p.innerHTML=re),te=I(z),T=d(z,"DIV",{class:!0});var he=r(T);j=d(he,"DIV",{class:!0});var ge=r(j);F(b.$$.fragment,ge),ge.forEach(n),he.forEach(n),z.forEach(n),ae=I(P),m=d(P,"DIV",{class:!0});var R=r(m);S=d(R,"DIV",{class:!0});var fe=r(S);A=d(fe,"DIV",{class:!0});var ue=r(A);F(E.$$.fragment,ue),ue.forEach(n),fe.forEach(n),ne=I(R),H=d(R,"DIV",{class:!0});var xe=r(H);L=d(xe,"DIV",{class:!0});var pe=r(L);F(w.$$.fragment,pe),pe.forEach(n),xe.forEach(n),R.forEach(n),P.forEach(n),O.forEach(n),this.h()},h(){a(x,"class","hex"),a(h,"class","hexagon"),a(M,"class","hex"),a(V,"class","hexagon"),a(v,"class","hexagon-row"),a(C,"class","hex"),a(k,"class","hexagon"),a(p,"class","hexagon"),Ve(p,"display","flex"),a(j,"class","hex"),a(T,"class","hexagon"),a(u,"class","hexagon-row"),a(A,"class","hex"),a(S,"class","hexagon"),a(L,"class","hex"),a(H,"class","hexagon"),a(m,"class","hexagon-row"),a(s,"class","hexagon-holder"),a(e,"class","container")},m(o,O){Ee(o,e,O),t(e,c),t(e,l),t(e,s),t(s,v),t(v,h),t(h,x),N(_,x,null),t(v,X),t(v,V),t(V,M),N($,M,null),t(s,Z),t(s,u),t(u,k),t(k,C),N(y,C,null),t(u,ee),t(u,p),t(u,te),t(u,T),t(T,j),N(b,j,null),t(s,ae),t(s,m),t(m,S),t(S,A),N(E,A,null),t(m,ne),t(m,H),t(H,L),N(w,L,null),K=!0},p:se,i(o){K||(q(_.$$.fragment,o),q($.$$.fragment,o),q(y.$$.fragment,o),q(b.$$.fragment,o),q(E.$$.fragment,o),q(w.$$.fragment,o),K=!0)},o(o){G(_.$$.fragment,o),G($.$$.fragment,o),G(y.$$.fragment,o),G(b.$$.fragment,o),G(E.$$.fragment,o),G(w.$$.fragment,o),K=!1},d(o){o&&n(e),Y(_),Y($),Y(y),Y(b),Y(E),Y(w)}}}class Le extends ye{constructor(e){super(),be(this,e,null,Te,$e,{})}}export{Le as component,He as universal};
