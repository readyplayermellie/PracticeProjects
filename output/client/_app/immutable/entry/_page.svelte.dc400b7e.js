import{S as N,i as O,s as Q,k as b,q,a as w,l as h,m as v,r as C,h as f,c as z,b as p,C as L,u as S,D as G,J as R}from"../chunks/index.5011f632.js";function K(u,l,i){const n=u.slice();return n[1]=l[i],n}function M(u){let l,i=u[1]+"",n;return{c(){l=b("li"),n=q(i)},l(s){l=h(s,"LI",{});var _=v(l);n=C(_,i),_.forEach(f)},m(s,_){p(s,l,_),L(l,n)},p(s,_){_&1&&i!==(i=s[1]+"")&&S(n,i)},d(s){s&&f(l)}}}function T(u){let l,i=u[0].aboutPage.title+"",n,s,_,E=u[0].aboutPage.content[0]+"",D,H,r,g=u[0].aboutPage.content[1]+"",I,J,m,k=u[0].aboutPage.content[2]+"",U,j,c,P=u[0].aboutPage.prompts,o=[];for(let e=0;e<P.length;e+=1)o[e]=M(K(u,P,e));return{c(){l=b("h2"),n=q(i),s=w(),_=b("p"),D=q(E),H=w(),r=b("p"),I=q(g),J=w(),m=b("p"),U=q(k),j=w(),c=b("ul");for(let e=0;e<o.length;e+=1)o[e].c()},l(e){l=h(e,"H2",{});var a=v(l);n=C(a,i),a.forEach(f),s=z(e),_=h(e,"P",{});var t=v(_);D=C(t,E),t.forEach(f),H=z(e),r=h(e,"P",{});var d=v(r);I=C(d,g),d.forEach(f),J=z(e),m=h(e,"P",{});var B=v(m);U=C(B,k),B.forEach(f),j=z(e),c=h(e,"UL",{});var F=v(c);for(let A=0;A<o.length;A+=1)o[A].l(F);F.forEach(f)},m(e,a){p(e,l,a),L(l,n),p(e,s,a),p(e,_,a),L(_,D),p(e,H,a),p(e,r,a),L(r,I),p(e,J,a),p(e,m,a),L(m,U),p(e,j,a),p(e,c,a);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(c,null)},p(e,[a]){if(a&1&&i!==(i=e[0].aboutPage.title+"")&&S(n,i),a&1&&E!==(E=e[0].aboutPage.content[0]+"")&&S(D,E),a&1&&g!==(g=e[0].aboutPage.content[1]+"")&&S(I,g),a&1&&k!==(k=e[0].aboutPage.content[2]+"")&&S(U,k),a&1){P=e[0].aboutPage.prompts;let t;for(t=0;t<P.length;t+=1){const d=K(e,P,t);o[t]?o[t].p(d,a):(o[t]=M(d),o[t].c(),o[t].m(c,null))}for(;t<o.length;t+=1)o[t].d(1);o.length=P.length}},i:G,o:G,d(e){e&&f(l),e&&f(s),e&&f(_),e&&f(H),e&&f(r),e&&f(J),e&&f(m),e&&f(j),e&&f(c),R(o,e)}}}function V(u,l,i){let{data:n}=l;return u.$$set=s=>{"data"in s&&i(0,n=s.data)},[n]}class X extends N{constructor(l){super(),O(this,l,V,T,Q,{data:0})}}export{X as default};
