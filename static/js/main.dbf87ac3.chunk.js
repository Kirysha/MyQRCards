(this.webpackJsonpMyQRCards=this.webpackJsonpMyQRCards||[]).push([[0],{152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(33),s=n.n(i),r=n(21),a=n.n(r),j=n(32),d=n(18),b=n(15),o=(n(150),n(154)),u=n(10),O=function(e){var t=e.id,n=e.setActivePanel,i=e.setCurentLink;Object(c.useEffect)((function(){}));var s=Object(c.useState)([]),r=Object(j.a)(s,2),d=r[0];r[1];return Object(u.jsxs)(b.g,{id:t,children:[Object(u.jsx)(b.h,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"}),Object(u.jsx)(b.f,{children:Object(u.jsx)(b.d,{size:"l",children:d.map((function(e){return Object(u.jsx)(b.e,{header:e,onClick:(t=e,function(){i(t),n("frame")})},e);var t}))})}),Object(u.jsx)(b.c,{style:{position:"fixed",right:10,bottom:10,zIndex:2},size:"m",onClick:function(e){a.a.send("VKWebAppOpenCodeReader").then((function(e){var t=e.code_data;t&&(i(t),n("frame"),a.a.send("VKWebAppStorageSet",{key:t,value:t}))}))},children:Object(u.jsx)(o.a,{})})]})},l=(n(152),function(e){return Object(u.jsx)(b.g,{id:e.id})}),f=function(){var e=Object(c.useState)("history"),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(null),r=Object(j.a)(s,2),a=r[0],o=r[1];return Object(u.jsx)(b.a,{children:Object(u.jsx)(b.b,{children:Object(u.jsxs)(d.a,{activePanel:n,children:[Object(u.jsx)(O,{id:"history",setActivePanel:i,setCurentLink:o}),Object(u.jsx)(l,{id:"frame",setActivePanel:i,curentLink:a})]})})})};a.a.send("VKWebAppInit"),s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.dbf87ac3.chunk.js.map