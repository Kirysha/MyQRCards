(this.webpackJsonpMyQRCards=this.webpackJsonpMyQRCards||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(34),r=n.n(i),s=n(18),a=n.n(s),o=n(33),d=n(19),j=n(13),l=(n(152),n(156)),u=n(10),b=function(e){var t=e.id,n=e.setActivePanel,i=e.setCurentLink;Object(c.useEffect)((function(){a.a.send("VKWebAppStorageGetKeys").then((function(e){var t=e.keys;return b(t)}))}));var r=Object(c.useState)([]),s=Object(o.a)(r,2),d=s[0],b=s[1];return Object(u.jsxs)(j.g,{id:t,children:[Object(u.jsx)(j.h,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"}),Object(u.jsx)(j.f,{children:Object(u.jsx)(j.d,{size:"l",children:d.map((function(e){return Object(u.jsx)(j.e,{header:e,onClick:(t=e,function(){i("https://card.myqrcards.com/links/"+t+"/info"),n("frame")})},e);var t}))})}),Object(u.jsx)(j.c,{style:{position:"fixed",right:10,bottom:10,zIndex:2},size:"m",onClick:function(e){a.a.send("VKWebAppOpenCodeReader").then((function(e){var t=e.code_data;if(t){var c=t.replace("https://card.myqrcards.com/links/","").replace("/info","");i(t),b(d.concat(c)),a.a.send("VKWebAppStorageSet",{key:c,value:t}),n("frame")}}))},children:Object(u.jsx)(l.a,{})})]})},f=(n(154),n(157)),O=function(e){return Object(u.jsxs)(j.g,{id:e.id,children:[Object(u.jsx)(j.c,{style:{position:"fixed",left:5,top:5,zIndex:2},size:"s",onClick:function(){return e.setActivePanel("history")},mode:"tertiary",children:Object(u.jsx)(f.a,{fill:"#fff"})}),e.curentLink&&Object(u.jsx)("iframe",{id:"my_iframe",style:{flex:1},src:e.curentLink,onLoad:function(e){return console.log()},seamless:!0})]})},h=function(){var e=Object(c.useState)("history"),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),a=s[0],l=s[1];return Object(u.jsx)(j.a,{children:Object(u.jsx)(j.b,{children:Object(u.jsxs)(d.a,{activePanel:n,children:[Object(u.jsx)(b,{id:"history",setActivePanel:i,setCurentLink:l}),Object(u.jsx)(O,{id:"frame",setActivePanel:i,curentLink:a})]})})})};a.a.send("VKWebAppInit"),r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.5233d12e.chunk.js.map