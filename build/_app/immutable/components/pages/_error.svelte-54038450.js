import{S as T,i as U,s as j,k as f,q as y,a as L,l as p,m as c,r as S,h as s,c as P,n as N,b as _,M as o,u as O,B as R,E as w}from"../../chunks/index-965d4597.js";import{s as z}from"../../chunks/singletons-c2ba8907.js";const D=()=>{const r=z;return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},updated:r.updated}},F={subscribe(r){return D().page.subscribe(r)}};function J(r){let a,l=r[0].status+"",i,b,n,v=r[0].error.message+"",$,g,u,E,H,M,k,m,d,h,q;return{c(){a=f("h2"),i=y(l),b=L(),n=f("p"),$=y(v),g=L(),u=f("p"),E=f("strong"),H=y("Sorry!"),M=y(" Maybe try one of these links?"),k=L(),m=f("ul"),d=f("li"),h=f("a"),q=y("Home"),this.h()},l(e){a=p(e,"H2",{});var t=c(a);i=S(t,l),t.forEach(s),b=P(e),n=p(e,"P",{class:!0});var A=c(n);$=S(A,v),A.forEach(s),g=P(e),u=p(e,"P",{});var x=c(u);E=p(x,"STRONG",{});var B=c(E);H=S(B,"Sorry!"),B.forEach(s),M=S(x," Maybe try one of these links?"),x.forEach(s),k=P(e),m=p(e,"UL",{});var C=c(m);d=p(C,"LI",{});var G=c(d);h=p(G,"A",{href:!0});var I=c(h);q=S(I,"Home"),I.forEach(s),G.forEach(s),C.forEach(s),this.h()},h(){N(n,"class","subhead"),N(h,"href","/")},m(e,t){_(e,a,t),o(a,i),_(e,b,t),_(e,n,t),o(n,$),_(e,g,t),_(e,u,t),o(u,E),o(E,H),o(u,M),_(e,k,t),_(e,m,t),o(m,d),o(d,h),o(h,q)},p(e,[t]){t&1&&l!==(l=e[0].status+"")&&O(i,l),t&1&&v!==(v=e[0].error.message+"")&&O($,v)},i:R,o:R,d(e){e&&s(a),e&&s(b),e&&s(n),e&&s(g),e&&s(u),e&&s(k),e&&s(m)}}}function K(r,a,l){let i;return w(r,F,b=>l(0,i=b)),[i]}let W=class extends T{constructor(a){super(),U(this,a,K,J,j,{})}};export{W as default};