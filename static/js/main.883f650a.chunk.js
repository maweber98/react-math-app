(this["webpackJsonpreact-match-app"]=this["webpackJsonpreact-match-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a.n(c),s=a(7),r=a.n(s),j=(a(13),a(14),a(6),a(2)),l=a(3),u=a(17),b=function(e){var t=Object(c.useState)(Math.ceil(10*Math.random())),a=Object(j.a)(t,2),i=a[0],s=a[1],r=Object(c.useState)(Math.ceil(10*Math.random())),b=Object(j.a)(r,2),o=b[0],d=b[1],h=Object(c.useState)(0),O=Object(j.a)(h,2),m=O[0],v=O[1],p=Object(c.useState)(!0),x=Object(j.a)(p,2),f=x[0],g=x[1],S=Object(c.useState)("+"),M=Object(j.a)(S,2),C=M[0],k=M[1],y=Object(c.useState)(0),F=Object(j.a)(y,2),A=F[0],I=F[1],N=function(e){k(e.target.value)};return Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)("h1",{children:"Math Quiz"}),Object(n.jsxs)("span",{children:[Object(n.jsx)(l.a,{variant:"outline-dark m-1 mb-3",value:"+",onClick:N,children:"Add"}),Object(n.jsx)(l.a,{variant:"outline-dark m-1 mb-3",value:"*",onClick:N,children:"Multiply"})]}),Object(n.jsxs)("h2",{children:[i," ",C," ",o]}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(!0),console.log("Orignal State",f),s(Math.ceil(10*Math.random())),d(Math.ceil(10*Math.random()));var t=parseInt(e.target.name.value);("+"===C?i+o:i*o)===t?(g(!0),v(m+1),e.target.name.value=""):(g(!1),I(Object(u.a)()),e.target.name.value="")},children:[Object(n.jsx)("input",{size:"10",type:"text",name:"name"}),Object(n.jsx)(l.a,{variant:"secondary",type:"submit",children:"Submit"})]}),Object(n.jsx)("div",{className:f?"fadeOut":"isFalse fadeInAnimation",children:f?"CORRECT":"FALSE"},A),Object(n.jsxs)("h3",{children:["Score: ",m>=10?"You are now the smartest man alive!":m]})]})};var o=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("div",{className:"jumbotron-image",children:Object(n.jsx)(b,{})})})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(o,{})}),document.getElementById("root")),d()},6:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.883f650a.chunk.js.map