import{s as Te,n as ge}from"../chunks/scheduler.CFxx3VbY.js";import{S as Ae,i as Fe,D,t as Pe,E as k,a as r,d as s,b as qe,v as e,g as He,h as t,j as ze,e as c,s as y,l as R,c as h,k as je,f as $,m as U,w as d,n as W,o as X,p as Z,q as ee}from"../chunks/index.C4jPNdNZ.js";import"../chunks/paths.Clu3A6MV.js";const Le=!0,Qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"}));function Oe(m){let n,v,f,l,a;return{c(){n=D("svg"),v=D("polygon"),f=D("polygon"),l=D("text"),a=Pe(m[0]),this.h()},l(o){n=k(o,"svg",{viewBox:!0,class:!0});var i=r(n);v=k(i,"polygon",{class:!0,points:!0}),r(v).forEach(s),f=k(i,"polygon",{class:!0,points:!0}),r(f).forEach(s),l=k(i,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,class:!0});var p=r(l);a=qe(p,m[0]),p.forEach(s),i.forEach(s),this.h()},h(){e(v,"class","outer-hexagon svelte-bkwr46"),e(v,"points",Ce(50,[50,50])),e(f,"class","inner-hexagon svelte-bkwr46"),e(f,"points",Ce(45,[50,50])),e(l,"x","50%"),e(l,"y","50%"),e(l,"dominant-baseline","middle"),e(l,"text-anchor","middle"),e(l,"class","svelte-bkwr46"),e(n,"viewBox","0 0 100 100"),e(n,"class","svelte-bkwr46")},m(o,i){He(o,n,i),t(n,v),t(n,f),t(n,l),t(l,a)},p(o,[i]){i&1&&ze(a,o[0])},i:ge,o:ge,d(o){o&&s(n)}}}function Ce(m,n){let v="",f=Math.PI/3;for(let l=0;l<6;l++){let a=l*f,o=n[0]+Math.sin(a)*m,i=n[1]+Math.cos(a)*m;v+=o.toFixed(2)+" "+i.toFixed(2)+" "}return v}function Ne(m,n,v){let{label:f="N/A"}=n;const l="N/A";return m.$$set=a=>{"label"in a&&v(0,f=a.label)},[f,l]}class te extends Ae{constructor(n){super(),Fe(this,n,Ne,Oe,Te,{label:0,page_link:1})}get page_link(){return this.$$.ctx[1]}}function Ge(m){let n,v,f=`.hexagon-holder {
            display:flex;
            flex-flow: column nowrap;
            justify-content: center;
            border:0px solid white;
            max-width:50%;
            margin: 8px auto;
            aspect-ratio: 1;
            position:relative;
        }
        .hexagon-row {
            border:0px solid red;
            display: flex;
            justify-content: center;
            flex-shrink: 0;
            width: 100%;
            height: 30%;
            margin: 0px 0px;
        }
        .hexagon {
            border:0px solid blue;
            width:30%;
            aspect-ratio: 1;
            flex-shrink: 0;
            margin: 0px 10px;
            z-index:1;
        }
        .hex {
            padding:20%;

        }
        .centered {
            text-align: center;
            margin: auto;
        }`,l,a,o,i,p,re,u,V,w,oe,b,A,F,M,le,H,P,B,ie,x,q,z,j,de,E,fe=`<div class="centered svelte-1imnoyd">Melody
                    <hr/></div>`,ve,L,O,C,ce,I,N,G,S,he,Y,J,T,ne;return M=new te({props:{label:"Overview"}}),B=new te({props:{label:"Abilities"}}),j=new te({props:{label:"History"}}),C=new te({props:{label:"Gallery"}}),S=new te({props:{label:"Trivia"}}),T=new te({props:{label:"Attributes"}}),{c(){n=c("div"),v=c("style"),v.textContent=f,l=y(),a=c("div"),o=c("div"),i=D("svg"),p=D("polygon"),re=y(),u=c("div"),V=D("svg"),w=D("polygon"),oe=y(),b=c("div"),A=c("div"),F=c("div"),R(M.$$.fragment),le=y(),H=c("div"),P=c("div"),R(B.$$.fragment),ie=y(),x=c("div"),q=c("div"),z=c("div"),R(j.$$.fragment),de=y(),E=c("div"),E.innerHTML=fe,ve=y(),L=c("div"),O=c("div"),R(C.$$.fragment),ce=y(),I=c("div"),N=c("div"),G=c("div"),R(S.$$.fragment),he=y(),Y=c("div"),J=c("div"),R(T.$$.fragment),this.h()},l(g){n=h(g,"DIV",{class:!0});var K=r(n);v=h(K,"STYLE",{"data-svelte-h":!0}),je(v)!=="svelte-n48w6v"&&(v.textContent=f),l=$(K),a=h(K,"DIV",{class:!0});var _=r(a);o=h(_,"DIV",{style:!0,class:!0});var ue=r(o);i=k(ue,"svg",{viewBox:!0,style:!0});var me=r(i);p=k(me,"polygon",{fill:!0,stroke:!0,"stroke-width":!0,points:!0}),r(p).forEach(s),me.forEach(s),ue.forEach(s),re=$(_),u=h(_,"DIV",{style:!0,class:!0});var pe=r(u);V=k(pe,"svg",{viewBox:!0,style:!0});var xe=r(V);w=k(xe,"polygon",{fill:!0,stroke:!0,"stroke-width":!0,points:!0}),r(w).forEach(s),xe.forEach(s),pe.forEach(s),oe=$(_),b=h(_,"DIV",{class:!0});var se=r(b);A=h(se,"DIV",{class:!0});var _e=r(A);F=h(_e,"DIV",{class:!0});var ye=r(F);U(M.$$.fragment,ye),ye.forEach(s),_e.forEach(s),le=$(se),H=h(se,"DIV",{class:!0});var $e=r(H);P=h($e,"DIV",{class:!0});var we=r(P);U(B.$$.fragment,we),we.forEach(s),$e.forEach(s),se.forEach(s),ie=$(_),x=h(_,"DIV",{class:!0});var Q=r(x);q=h(Q,"DIV",{class:!0});var be=r(q);z=h(be,"DIV",{class:!0});var Ee=r(z);U(j.$$.fragment,Ee),Ee.forEach(s),be.forEach(s),de=$(Q),E=h(Q,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),je(E)!=="svelte-1m9qr0z"&&(E.innerHTML=fe),ve=$(Q),L=h(Q,"DIV",{class:!0});var Ie=r(L);O=h(Ie,"DIV",{class:!0});var De=r(O);U(C.$$.fragment,De),De.forEach(s),Ie.forEach(s),Q.forEach(s),ce=$(_),I=h(_,"DIV",{class:!0});var ae=r(I);N=h(ae,"DIV",{class:!0});var ke=r(N);G=h(ke,"DIV",{class:!0});var Ve=r(G);U(S.$$.fragment,Ve),Ve.forEach(s),ke.forEach(s),he=$(ae),Y=h(ae,"DIV",{class:!0});var Me=r(Y);J=h(Me,"DIV",{class:!0});var Be=r(J);U(T.$$.fragment,Be),Be.forEach(s),Me.forEach(s),ae.forEach(s),_.forEach(s),K.forEach(s),this.h()},h(){e(p,"fill","#0000"),e(p,"stroke","black"),e(p,"stroke-width","2px"),e(p,"points",Se(50,[52,52])),e(i,"viewBox","0 0 104 104"),d(i,"position","relative"),d(i,"filter","drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))"),d(i,"transform-origin","52 52"),d(i,"transform","rotate(90deg)"),d(o,"width","100%"),d(o,"height","100%"),d(o,"position","absolute"),d(o,"width","83%"),d(o,"height","83%"),d(o,"left","50%"),d(o,"top","50%"),d(o,"transform","translate(-50%, -50%)"),e(o,"class","svelte-1imnoyd"),e(w,"fill","#0000"),e(w,"stroke","black"),e(w,"stroke-width","2px"),e(w,"points",Se(50,[52,52])),e(V,"viewBox","0 0 104 104"),d(V,"position","relative"),d(u,"width","100%"),d(u,"height","100%"),d(u,"position","absolute"),d(u,"width","80%"),d(u,"height","80%"),d(u,"left","50%"),d(u,"top","50%"),d(u,"transform","translate(-50%, -50%)"),e(u,"class","svelte-1imnoyd"),e(F,"class","hex svelte-1imnoyd"),e(A,"class","hexagon svelte-1imnoyd"),e(P,"class","hex svelte-1imnoyd"),e(H,"class","hexagon svelte-1imnoyd"),e(b,"class","hexagon-row svelte-1imnoyd"),e(z,"class","hex svelte-1imnoyd"),e(q,"class","hexagon svelte-1imnoyd"),e(E,"class","hexagon svelte-1imnoyd"),d(E,"display","flex"),e(O,"class","hex svelte-1imnoyd"),e(L,"class","hexagon svelte-1imnoyd"),e(x,"class","hexagon-row svelte-1imnoyd"),e(G,"class","hex svelte-1imnoyd"),e(N,"class","hexagon svelte-1imnoyd"),e(J,"class","hex svelte-1imnoyd"),e(Y,"class","hexagon svelte-1imnoyd"),e(I,"class","hexagon-row svelte-1imnoyd"),e(a,"class","hexagon-holder svelte-1imnoyd"),e(n,"class","container svelte-1imnoyd")},m(g,K){He(g,n,K),t(n,v),t(n,l),t(n,a),t(a,o),t(o,i),t(i,p),t(a,re),t(a,u),t(u,V),t(V,w),t(a,oe),t(a,b),t(b,A),t(A,F),W(M,F,null),t(b,le),t(b,H),t(H,P),W(B,P,null),t(a,ie),t(a,x),t(x,q),t(q,z),W(j,z,null),t(x,de),t(x,E),t(x,ve),t(x,L),t(L,O),W(C,O,null),t(a,ce),t(a,I),t(I,N),t(N,G),W(S,G,null),t(I,he),t(I,Y),t(Y,J),W(T,J,null),ne=!0},p:ge,i(g){ne||(X(M.$$.fragment,g),X(B.$$.fragment,g),X(j.$$.fragment,g),X(C.$$.fragment,g),X(S.$$.fragment,g),X(T.$$.fragment,g),ne=!0)},o(g){Z(M.$$.fragment,g),Z(B.$$.fragment,g),Z(j.$$.fragment,g),Z(C.$$.fragment,g),Z(S.$$.fragment,g),Z(T.$$.fragment,g),ne=!1},d(g){g&&s(n),ee(M),ee(B),ee(j),ee(C),ee(S),ee(T)}}}function Se(m,n){let v="",f=Math.PI/3;for(let l=0;l<6;l++){let a=l*f,o=n[0]+Math.cos(a)*m,i=n[1]+Math.sin(a)*m;v+=o.toFixed(2)+" "+i.toFixed(2)+" "}return v}class Re extends Ae{constructor(n){super(),Fe(this,n,null,Ge,Te,{})}}export{Re as component,Qe as universal};