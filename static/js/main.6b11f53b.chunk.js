(this.webpackJsonpnelson=this.webpackJsonpnelson||[]).push([[0],{109:function(e,t){},110:function(e,t){},128:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(43),r=a.n(n),s=a(12),l=a(2),o=a(44),i=a.n(o),d=a(45),u=a.n(d),j=a(1),b=function(e){var t=Object(l.f)().search,a=i.a.parse(t).id,n=Object(c.useState)(a),r=Object(s.a)(n,2),o=r[0],d=r[1],b=Object(c.useState)(""),m=Object(s.a)(b,2),x=m[0],h=m[1],p=Object(c.useState)(""),O=Object(s.a)(p,2),g=O[0],f=O[1],v=Object(c.useState)(""),N=Object(s.a)(v,2),y=N[0],I=N[1];return Object(j.jsxs)(j.Fragment,{children:[a&&Object(j.jsx)("div",{className:"container col-xl-10 col-xxl-8 px-4 py-5",children:Object(j.jsxs)("div",{className:"row align-items-center g-lg-5 py-5",children:[Object(j.jsxs)("div",{className:"col-lg-7 text-center text-lg-start",children:[Object(j.jsx)("h1",{className:"display-4 fw-bold lh-1 mb-3 text-white",children:"Registro de Arduino"}),Object(j.jsx)("p",{className:"col-lg-10 fs-4",children:"Por favor, registra el Arduino que utilizar\xe1s hoy para realizar la/-s pr\xe1ctica/-s."})]}),Object(j.jsx)("div",{className:"col-md-10 mx-auto col-lg-5",children:Object(j.jsxs)("form",{id:"registerForm",className:"needs-validation p-4 p-md-5 border rounded-3 bg-dark",onSubmit:function(e){I(!0),e.preventDefault();var t={arduinoId:o,student:x,group:g},a=new Date;t.date=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),new u.a({apiKey:"keyx35wliaVYGESuI"}).base("appJ8IVU0kvp1iHPB")("Table 1").create([{fields:t}],(function(e,t){e&&console.error(e)}))},children:[Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",{value:o,onChange:function(e){return d(e.target.value)},className:"form-control",name:"arduinoId",id:"arduinoId",type:"text",placeholder:"Readonly input here\u2026",readOnly:!0}),Object(j.jsx)("label",{id:"arduinoId",children:"Arduino"})]}),Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",{type:"text",value:x,onChange:function(e){return h(e.target.value)},className:"form-control",id:"nameAndSurname",name:"nameAndSurname",placeholder:"Luis Juarros",required:!0}),Object(j.jsx)("label",{children:"Nombre y Apellidos"})]}),Object(j.jsxs)("div",{className:"form-floating mb-3 text-start",children:[Object(j.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(j.jsx)("input",{type:"radio",name:"group",className:"custom-control-input",onChange:function(e){return f("RoboticaI")},required:!0}),Object(j.jsx)("label",{className:"custom-control-label",children:"Rob\xf3tica I"})]}),Object(j.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(j.jsx)("input",{type:"radio",name:"group",className:"custom-control-input",onChange:function(e){return f("RoboticaII")}}),Object(j.jsx)("label",{className:"custom-control-label",children:"Rob\xf3tica II"})]})]}),Object(j.jsx)("button",{id:"registerButton",className:"w-100 btn btn-lg btn-warning",type:"submit",children:"Registrar"})]})}),Object(j.jsx)("hr",{className:"my-4"}),Object(j.jsx)("small",{className:"text-muted",children:"Happy Coding \ud83d\udc7e"})]})}),!a&&Object(j.jsxs)("div",{children:["\xbfQu\xe9 buscas aqu\xed peque\xf1o hacker?",Object(j.jsx)("br",{}),"Aqu\xed no hay nada que te pueda interesar",Object(j.jsx)("br",{}),"\ud83d\udc80 \ud83d\udc80 \ud83d\udc80"]}),a&&y&&Object(j.jsx)("div",{className:"alert alert-dark",role:"alert",children:"Arduino registrado \ud83d\udc4d"})]})},m=a(19);var x=function(){return Object(j.jsx)(m.a,{children:Object(j.jsx)(l.c,{children:Object(j.jsx)(l.a,{path:"/",component:function(){return Object(j.jsx)(b,{})}})})})};r.a.render(Object(j.jsx)(m.a,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.6b11f53b.chunk.js.map