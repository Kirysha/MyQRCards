(this.webpackJsonpMyQRCards=this.webpackJsonpMyQRCards||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(33),i=n.n(s),r=n(18),a=n.n(r),o=n(42),d=n(19),j=n(13),l=(n(152),n(156)),u=n(10),b=function(e){var t=e.id,n=e.setActivePanel,c=e.setCurentLink,s=e.data,i=e.setData;return Object(u.jsxs)(j.g,{id:t,children:[Object(u.jsx)(j.h,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"}),Object(u.jsx)(j.f,{children:Object(u.jsx)(j.d,{size:"l",children:s.map((function(e){return Object(u.jsx)(j.e,{subtitle:"Id",header:e,onClick:(t=e,function(){c("https://card.myqrcards.com/links/"+t+"/info"),n("frame")})},e);var t}))})}),Object(u.jsx)(j.c,{style:{position:"fixed",right:10,bottom:10,zIndex:2},size:"m",onClick:function(e){a.a.send("VKWebAppOpenCodeReader").then((function(e){var t=e.code_data;if(t){var n=t.replace("https://card.myqrcards.com/links/","").replace(/\?v=[0-9]*/gm,"");c(t),i(s.concat(n)),a.a.send("VKWebAppStorageSet",{key:n,value:t})}}))},children:Object(u.jsx)(l.a,{})})]})},f=(n(154),n(157)),O=function(e){return Object(u.jsxs)(j.g,{id:e.id,children:[Object(u.jsx)(j.c,{style:{position:"fixed",left:5,top:5,zIndex:2},size:"s",onClick:function(){return e.setActivePanel("history")},mode:"tertiary",children:Object(u.jsx)(f.a,{fill:"#fff"})}),e.curentLink&&Object(u.jsx)("iframe",{id:"my_iframe",style:{flex:1},src:e.curentLink,onLoad:function(e){return console.log()},seamless:!0})]})},h=function(){var e=Object(c.useState)("history"),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),r=Object(o.a)(i,2),l=r[0],f=r[1],h=Object(c.useState)(["testItem"]),p=Object(o.a)(h,2),x=p[0],m=p[1];return Object(c.useEffect)((function(){a.a.send("VKWebAppStorageGetKeys").then((function(e){var t=e.keys;return m(x.concat(t))}))})),Object(u.jsx)(j.a,{children:Object(u.jsx)(j.b,{children:Object(u.jsxs)(d.a,{activePanel:n,children:[Object(u.jsx)(b,{id:"history",setActivePanel:s,setCurentLink:f,data:x,setData:m}),Object(u.jsx)(O,{id:"frame",setActivePanel:s,curentLink:l})]})})})};a.a.send("VKWebAppInit"),i.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.8d2faa90.chunk.js.map