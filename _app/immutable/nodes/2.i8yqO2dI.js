import{s as Se,n as ge}from"../chunks/scheduler.CWjhCeRH.js";import{S as Te,i as ze,y as D,t as He,z as V,a as r,d as a,b as Pe,o as e,g as Fe,h as t,j as Le,e as c,s as $,u as R,c as h,A as je,f as w,v as U,p as d,w as W,n as X,l as Z,x as ee}from"../chunks/index.CArVBWmo.js";import"../chunks/paths.DWDs4tDY.js";const Oe=!0,Qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Oe},Symbol.toStringTag,{value:"Module"}));function qe(u){let n,v,f,l,s;return{c(){n=D("svg"),v=D("polygon"),f=D("polygon"),l=D("text"),s=He(u[0]),this.h()},l(o){n=V(o,"svg",{viewBox:!0,class:!0});var i=r(n);v=V(i,"polygon",{class:!0,points:!0}),r(v).forEach(a),f=V(i,"polygon",{class:!0,points:!0}),r(f).forEach(a),l=V(i,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,class:!0});var x=r(l);s=Pe(x,u[0]),x.forEach(a),i.forEach(a),this.h()},h(){e(v,"class","outer-hexagon svelte-bkwr46"),e(v,"points",Ae(50,[50,50])),e(f,"class","inner-hexagon svelte-bkwr46"),e(f,"points",Ae(45,[50,50])),e(l,"x","50%"),e(l,"y","50%"),e(l,"dominant-baseline","middle"),e(l,"text-anchor","middle"),e(l,"class","svelte-bkwr46"),e(n,"viewBox","0 0 100 100"),e(n,"class","svelte-bkwr46")},m(o,i){Fe(o,n,i),t(n,v),t(n,f),t(n,l),t(l,s)},p(o,[i]){i&1&&Le(s,o[0])},i:ge,o:ge,d(o){o&&a(n)}}}function Ae(u,n){let v="",f=Math.PI/3;for(let l=0;l<6;l++){let s=l*f,o=n[0]+Math.sin(s)*u,i=n[1]+Math.cos(s)*u;v+=o.toFixed(2)+" "+i.toFixed(2)+" "}return v}function Ne(u,n,v){let{label:f="N/A"}=n;const l="N/A";return u.$$set=s=>{"label"in s&&v(0,f=s.label)},[f,l]}class te extends Te{constructor(n){super(),ze(this,n,Ne,qe,Se,{label:0,page_link:1})}get page_link(){return this.$$.ctx[1]}}function Ge(u){let n,v,f=`.hexagon-holder {
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
        }`,l,s,o,i,x,re,p,k,y,oe,b,T,z,M,le,F,H,B,ie,_,P,L,j,de,E,fe=`<div class="centered">Melody
                    <hr/></div>`,ve,O,q,A,ce,I,N,G,C,he,Y,J,S,ne;return M=new te({props:{label:"Overview"}}),B=new te({props:{label:"Abilities"}}),j=new te({props:{label:"History"}}),A=new te({props:{label:"Gallery"}}),C=new te({props:{label:"Trivia"}}),S=new te({props:{label:"Attributes"}}),{c(){n=c("div"),v=c("style"),v.textContent=f,l=$(),s=c("div"),o=c("div"),i=D("svg"),x=D("polygon"),re=$(),p=c("div"),k=D("svg"),y=D("polygon"),oe=$(),b=c("div"),T=c("div"),z=c("div"),R(M.$$.fragment),le=$(),F=c("div"),H=c("div"),R(B.$$.fragment),ie=$(),_=c("div"),P=c("div"),L=c("div"),R(j.$$.fragment),de=$(),E=c("div"),E.innerHTML=fe,ve=$(),O=c("div"),q=c("div"),R(A.$$.fragment),ce=$(),I=c("div"),N=c("div"),G=c("div"),R(C.$$.fragment),he=$(),Y=c("div"),J=c("div"),R(S.$$.fragment),this.h()},l(g){n=h(g,"DIV",{class:!0});var K=r(n);v=h(K,"STYLE",{"data-svelte-h":!0}),je(v)!=="svelte-n48w6v"&&(v.textContent=f),l=w(K),s=h(K,"DIV",{class:!0});var m=r(s);o=h(m,"DIV",{style:!0});var ue=r(o);i=V(ue,"svg",{viewBox:!0,style:!0});var pe=r(i);x=V(pe,"polygon",{fill:!0,stroke:!0,"stroke-width":!0,points:!0}),r(x).forEach(a),pe.forEach(a),ue.forEach(a),re=w(m),p=h(m,"DIV",{style:!0});var xe=r(p);k=V(xe,"svg",{viewBox:!0,style:!0});var _e=r(k);y=V(_e,"polygon",{fill:!0,stroke:!0,"stroke-width":!0,points:!0}),r(y).forEach(a),_e.forEach(a),xe.forEach(a),oe=w(m),b=h(m,"DIV",{class:!0});var ae=r(b);T=h(ae,"DIV",{class:!0});var me=r(T);z=h(me,"DIV",{class:!0});var $e=r(z);U(M.$$.fragment,$e),$e.forEach(a),me.forEach(a),le=w(ae),F=h(ae,"DIV",{class:!0});var we=r(F);H=h(we,"DIV",{class:!0});var ye=r(H);U(B.$$.fragment,ye),ye.forEach(a),we.forEach(a),ae.forEach(a),ie=w(m),_=h(m,"DIV",{class:!0});var Q=r(_);P=h(Q,"DIV",{class:!0});var be=r(P);L=h(be,"DIV",{class:!0});var Ee=r(L);U(j.$$.fragment,Ee),Ee.forEach(a),be.forEach(a),de=w(Q),E=h(Q,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),je(E)!=="svelte-1m9qr0z"&&(E.innerHTML=fe),ve=w(Q),O=h(Q,"DIV",{class:!0});var Ie=r(O);q=h(Ie,"DIV",{class:!0});var De=r(q);U(A.$$.fragment,De),De.forEach(a),Ie.forEach(a),Q.forEach(a),ce=w(m),I=h(m,"DIV",{class:!0});var se=r(I);N=h(se,"DIV",{class:!0});var Ve=r(N);G=h(Ve,"DIV",{class:!0});var ke=r(G);U(C.$$.fragment,ke),ke.forEach(a),Ve.forEach(a),he=w(se),Y=h(se,"DIV",{class:!0});var Me=r(Y);J=h(Me,"DIV",{class:!0});var Be=r(J);U(S.$$.fragment,Be),Be.forEach(a),Me.forEach(a),se.forEach(a),m.forEach(a),K.forEach(a),this.h()},h(){e(x,"fill","#0000"),e(x,"stroke","black"),e(x,"stroke-width","2px"),e(x,"points",Ce(50,[52,52])),e(i,"viewBox","0 0 104 104"),d(i,"position","relative"),d(i,"filter","drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))"),d(i,"transform-origin","52 52"),d(i,"transform","rotate(90deg)"),d(o,"width","100%"),d(o,"height","100%"),d(o,"position","absolute"),d(o,"width","83%"),d(o,"height","83%"),d(o,"left","50%"),d(o,"top","50%"),d(o,"transform","translate(-50%, -50%)"),e(y,"fill","#0000"),e(y,"stroke","black"),e(y,"stroke-width","2px"),e(y,"points",Ce(50,[52,52])),e(k,"viewBox","0 0 104 104"),d(k,"position","relative"),d(p,"width","100%"),d(p,"height","100%"),d(p,"position","absolute"),d(p,"width","80%"),d(p,"height","80%"),d(p,"left","50%"),d(p,"top","50%"),d(p,"transform","translate(-50%, -50%)"),e(z,"class","hex"),e(T,"class","hexagon"),e(H,"class","hex"),e(F,"class","hexagon"),e(b,"class","hexagon-row"),e(L,"class","hex"),e(P,"class","hexagon"),e(E,"class","hexagon"),d(E,"display","flex"),e(q,"class","hex"),e(O,"class","hexagon"),e(_,"class","hexagon-row"),e(G,"class","hex"),e(N,"class","hexagon"),e(J,"class","hex"),e(Y,"class","hexagon"),e(I,"class","hexagon-row"),e(s,"class","hexagon-holder"),e(n,"class","container")},m(g,K){Fe(g,n,K),t(n,v),t(n,l),t(n,s),t(s,o),t(o,i),t(i,x),t(s,re),t(s,p),t(p,k),t(k,y),t(s,oe),t(s,b),t(b,T),t(T,z),W(M,z,null),t(b,le),t(b,F),t(F,H),W(B,H,null),t(s,ie),t(s,_),t(_,P),t(P,L),W(j,L,null),t(_,de),t(_,E),t(_,ve),t(_,O),t(O,q),W(A,q,null),t(s,ce),t(s,I),t(I,N),t(N,G),W(C,G,null),t(I,he),t(I,Y),t(Y,J),W(S,J,null),ne=!0},p:ge,i(g){ne||(X(M.$$.fragment,g),X(B.$$.fragment,g),X(j.$$.fragment,g),X(A.$$.fragment,g),X(C.$$.fragment,g),X(S.$$.fragment,g),ne=!0)},o(g){Z(M.$$.fragment,g),Z(B.$$.fragment,g),Z(j.$$.fragment,g),Z(A.$$.fragment,g),Z(C.$$.fragment,g),Z(S.$$.fragment,g),ne=!1},d(g){g&&a(n),ee(M),ee(B),ee(j),ee(A),ee(C),ee(S)}}}function Ce(u,n){let v="",f=Math.PI/3;for(let l=0;l<6;l++){let s=l*f,o=n[0]+Math.cos(s)*u,i=n[1]+Math.sin(s)*u;v+=o.toFixed(2)+" "+i.toFixed(2)+" "}return v}class Re extends Te{constructor(n){super(),ze(this,n,null,Ge,Se,{})}}export{Re as component,Qe as universal};
