import{s as Te,n as ge}from"../chunks/scheduler.CFxx3VbY.js";import{S as Ae,i as Fe,D,t as Pe,E as k,a as r,d as a,b as qe,p as e,g as He,h as t,j as ze,e as c,s as $,v as R,c as h,k as je,f as w,w as U,q as d,x as W,o as X,m as Z,y as ee}from"../chunks/index.Bo6tT3Cs.js";import"../chunks/paths.CxKfeR_9.js";const Le=!0,Qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"}));function Oe(u){let n,v,f,l,s;return{c(){n=D("svg"),v=D("polygon"),f=D("polygon"),l=D("text"),s=Pe(u[0]),this.h()},l(o){n=k(o,"svg",{viewBox:!0,class:!0});var i=r(n);v=k(i,"polygon",{class:!0,points:!0}),r(v).forEach(a),f=k(i,"polygon",{class:!0,points:!0}),r(f).forEach(a),l=k(i,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,class:!0});var x=r(l);s=qe(x,u[0]),x.forEach(a),i.forEach(a),this.h()},h(){e(v,"class","outer-hexagon svelte-bkwr46"),e(v,"points",Ce(50,[50,50])),e(f,"class","inner-hexagon svelte-bkwr46"),e(f,"points",Ce(45,[50,50])),e(l,"x","50%"),e(l,"y","50%"),e(l,"dominant-baseline","middle"),e(l,"text-anchor","middle"),e(l,"class","svelte-bkwr46"),e(n,"viewBox","0 0 100 100"),e(n,"class","svelte-bkwr46")},m(o,i){He(o,n,i),t(n,v),t(n,f),t(n,l),t(l,s)},p(o,[i]){i&1&&ze(s,o[0])},i:ge,o:ge,d(o){o&&a(n)}}}function Ce(u,n){let v="",f=Math.PI/3;for(let l=0;l<6;l++){let s=l*f,o=n[0]+Math.sin(s)*u,i=n[1]+Math.cos(s)*u;v+=o.toFixed(2)+" "+i.toFixed(2)+" "}return v}function Ne(u,n,v){let{label:f="N/A"}=n;const l="N/A";return u.$$set=s=>{"label"in s&&v(0,f=s.label)},[f,l]}class te extends Ae{constructor(n){super(),Fe(this,n,Ne,Oe,Te,{label:0,page_link:1})}get page_link(){return this.$$.ctx[1]}}function Ge(u){let n,v,f=`.hexagon-holder {
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
        }`,l,s,o,i,x,re,p,V,y,oe,b,A,F,M,le,H,P,B,ie,m,q,z,j,de,E,fe=`<div class="centered">Melody
                    <hr/></div>`,ve,L,O,C,ce,I,N,G,S,he,Y,J,T,ne;return M=new te({props:{label:"Overview"}}),B=new te({props:{label:"Abilities"}}),j=new te({props:{label:"History"}}),C=new te({props:{label:"Gallery"}}),S=new te({props:{label:"Trivia"}}),T=new te({props:{label:"Attributes"}}),{c(){n=c("div"),v=c("style"),v.textContent=f,l=$(),s=c("div"),o=c("div"),i=D("svg"),x=D("polygon"),re=$(),p=c("div"),V=D("svg"),y=D("polygon"),oe=$(),b=c("div"),A=c("div"),F=c("div"),R(M.$$.fragment),le=$(),H=c("div"),P=c("div"),R(B.$$.fragment),ie=$(),m=c("div"),q=c("div"),z=c("div"),R(j.$$.fragment),de=$(),E=c("div"),E.innerHTML=fe,ve=$(),L=c("div"),O=c("div"),R(C.$$.fragment),ce=$(),I=c("div"),N=c("div"),G=c("div"),R(S.$$.fragment),he=$(),Y=c("div"),J=c("div"),R(T.$$.fragment),this.h()},l(g){n=h(g,"DIV",{class:!0});var K=r(n);v=h(K,"STYLE",{"data-svelte-h":!0}),je(v)!=="svelte-n48w6v"&&(v.textContent=f),l=w(K),s=h(K,"DIV",{class:!0});var _=r(s);o=h(_,"DIV",{style:!0});var ue=r(o);i=k(ue,"svg",{viewBox:!0,style:!0});var pe=r(i);x=k(pe,"polygon",{fill:!0,stroke:!0,"stroke-width":!0,points:!0}),r(x).forEach(a),pe.forEach(a),ue.forEach(a),re=w(_),p=h(_,"DIV",{style:!0});var xe=r(p);V=k(xe,"svg",{viewBox:!0,style:!0});var me=r(V);y=k(me,"polygon",{fill:!0,stroke:!0,"stroke-width":!0,points:!0}),r(y).forEach(a),me.forEach(a),xe.forEach(a),oe=w(_),b=h(_,"DIV",{class:!0});var ae=r(b);A=h(ae,"DIV",{class:!0});var _e=r(A);F=h(_e,"DIV",{class:!0});var $e=r(F);U(M.$$.fragment,$e),$e.forEach(a),_e.forEach(a),le=w(ae),H=h(ae,"DIV",{class:!0});var we=r(H);P=h(we,"DIV",{class:!0});var ye=r(P);U(B.$$.fragment,ye),ye.forEach(a),we.forEach(a),ae.forEach(a),ie=w(_),m=h(_,"DIV",{class:!0});var Q=r(m);q=h(Q,"DIV",{class:!0});var be=r(q);z=h(be,"DIV",{class:!0});var Ee=r(z);U(j.$$.fragment,Ee),Ee.forEach(a),be.forEach(a),de=w(Q),E=h(Q,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),je(E)!=="svelte-1m9qr0z"&&(E.innerHTML=fe),ve=w(Q),L=h(Q,"DIV",{class:!0});var Ie=r(L);O=h(Ie,"DIV",{class:!0});var De=r(O);U(C.$$.fragment,De),De.forEach(a),Ie.forEach(a),Q.forEach(a),ce=w(_),I=h(_,"DIV",{class:!0});var se=r(I);N=h(se,"DIV",{class:!0});var ke=r(N);G=h(ke,"DIV",{class:!0});var Ve=r(G);U(S.$$.fragment,Ve),Ve.forEach(a),ke.forEach(a),he=w(se),Y=h(se,"DIV",{class:!0});var Me=r(Y);J=h(Me,"DIV",{class:!0});var Be=r(J);U(T.$$.fragment,Be),Be.forEach(a),Me.forEach(a),se.forEach(a),_.forEach(a),K.forEach(a),this.h()},h(){e(x,"fill","#0000"),e(x,"stroke","black"),e(x,"stroke-width","2px"),e(x,"points",Se(50,[52,52])),e(i,"viewBox","0 0 104 104"),d(i,"position","relative"),d(i,"filter","drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))"),d(i,"transform-origin","52 52"),d(i,"transform","rotate(90deg)"),d(o,"width","100%"),d(o,"height","100%"),d(o,"position","absolute"),d(o,"width","83%"),d(o,"height","83%"),d(o,"left","50%"),d(o,"top","50%"),d(o,"transform","translate(-50%, -50%)"),e(y,"fill","#0000"),e(y,"stroke","black"),e(y,"stroke-width","2px"),e(y,"points",Se(50,[52,52])),e(V,"viewBox","0 0 104 104"),d(V,"position","relative"),d(p,"width","100%"),d(p,"height","100%"),d(p,"position","absolute"),d(p,"width","80%"),d(p,"height","80%"),d(p,"left","50%"),d(p,"top","50%"),d(p,"transform","translate(-50%, -50%)"),e(F,"class","hex"),e(A,"class","hexagon"),e(P,"class","hex"),e(H,"class","hexagon"),e(b,"class","hexagon-row"),e(z,"class","hex"),e(q,"class","hexagon"),e(E,"class","hexagon"),d(E,"display","flex"),e(O,"class","hex"),e(L,"class","hexagon"),e(m,"class","hexagon-row"),e(G,"class","hex"),e(N,"class","hexagon"),e(J,"class","hex"),e(Y,"class","hexagon"),e(I,"class","hexagon-row"),e(s,"class","hexagon-holder"),e(n,"class","container")},m(g,K){He(g,n,K),t(n,v),t(n,l),t(n,s),t(s,o),t(o,i),t(i,x),t(s,re),t(s,p),t(p,V),t(V,y),t(s,oe),t(s,b),t(b,A),t(A,F),W(M,F,null),t(b,le),t(b,H),t(H,P),W(B,P,null),t(s,ie),t(s,m),t(m,q),t(q,z),W(j,z,null),t(m,de),t(m,E),t(m,ve),t(m,L),t(L,O),W(C,O,null),t(s,ce),t(s,I),t(I,N),t(N,G),W(S,G,null),t(I,he),t(I,Y),t(Y,J),W(T,J,null),ne=!0},p:ge,i(g){ne||(X(M.$$.fragment,g),X(B.$$.fragment,g),X(j.$$.fragment,g),X(C.$$.fragment,g),X(S.$$.fragment,g),X(T.$$.fragment,g),ne=!0)},o(g){Z(M.$$.fragment,g),Z(B.$$.fragment,g),Z(j.$$.fragment,g),Z(C.$$.fragment,g),Z(S.$$.fragment,g),Z(T.$$.fragment,g),ne=!1},d(g){g&&a(n),ee(M),ee(B),ee(j),ee(C),ee(S),ee(T)}}}function Se(u,n){let v="",f=Math.PI/3;for(let l=0;l<6;l++){let s=l*f,o=n[0]+Math.cos(s)*u,i=n[1]+Math.sin(s)*u;v+=o.toFixed(2)+" "+i.toFixed(2)+" "}return v}class Re extends Ae{constructor(n){super(),Fe(this,n,null,Ge,Te,{})}}export{Re as component,Qe as universal};
