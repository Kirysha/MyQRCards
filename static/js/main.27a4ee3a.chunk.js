(this.webpackJsonpMyQRCards=this.webpackJsonpMyQRCards||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(33),i=n.n(s),a=n(21),r=n.n(a),o=n(42),d=n(18),l=n(13),j=(n(152),n(156)),u=n(10),b=function(e){var t=e.id,n=e.setActivePanel,c=e.setCurentLink,s=e.data;e.setData;return Object(u.jsxs)(l.g,{id:t,children:[Object(u.jsx)(l.h,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"}),Object(u.jsx)(l.f,{children:Object(u.jsx)(l.d,{size:"l",children:s.map((function(e){return Object(u.jsx)(l.e,{subtitle:e&&e.company||e,header:e&&e.name||e,caption:e&&e.work||e,image:e&&e.img||null,onClick:(t=e,function(){c("https://card.myqrcards.com/links/"+t+"/info"),n("frame")})},e&&e.name||e);var t}))})}),Object(u.jsx)(l.c,{style:{position:"fixed",right:10,bottom:10,zIndex:2},size:"m",onClick:function(e){r.a.send("VKWebAppOpenCodeReader").then((function(e){var t=e.code_data;if(t){t.replace("https://card.myqrcards.com/links/","").replace(/\?v=[0-9]*/gm,"");c(t),n("frame")}}))},children:Object(u.jsx)(j.a,{})})]})},p=(n(154),n(157)),f=function(e){return Object(u.jsxs)(l.g,{id:e.id,children:[Object(u.jsx)(l.c,{style:{position:"fixed",left:5,top:5,zIndex:2},size:"s",onClick:function(){return e.setActivePanel("history")},mode:"tertiary",children:Object(u.jsx)(p.a,{fill:"#fff"})}),e.curentLink&&Object(u.jsx)("iframe",{id:"my_iframe",style:{flex:1},src:e.curentLink,onLoad:function(e){return console.log()},seamless:!0})]})},m=function(){var e=Object(c.useState)("history"),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),a=Object(o.a)(i,2),j=a[0],p=a[1],m=Object(c.useState)([{img:"https://api.selcdn.ru/v1/SEL_83360/Public/EJu_IqFkI0iFJgddx-yLpw.jpeg",name:"\u0422\u044e\u043a\u0430\u043b\u043e \u041a\u0438\u0440\u0438\u043b\u043b",work:"\u041c\u043b\u0430\u0434\u0448\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",company:"\u041e\u041e\u041e \u0421\u043c\u0430\u0440\u0442 \u0421\u0435\u0440\u0432\u0438\u0441"},{img:"https://st3.depositphotos.com/1007566/12802/v/950/depositphotos_128028148-stock-illustration-businessman-avatar-elegant-icon.jpg",name:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041f\u0435\u0442\u0440",work:"\u041c\u043b\u0430\u0434\u0448\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",company:"\u041e\u041e\u041e \u0421\u043c\u0430\u0440\u0442 \u0421\u0435\u0440\u0432\u0438\u0441"}]),h=Object(o.a)(m,2),O=h[0],x=h[1];return Object(c.useEffect)((function(){r.a.send("VKWebAppStorageGetKeys",{count:20,offset:0}).then((function(e){var t=e.keys;return x(O.concat(t))}))}),[]),Object(u.jsx)(l.a,{children:Object(u.jsx)(l.b,{children:Object(u.jsxs)(d.a,{activePanel:n,children:[Object(u.jsx)(b,{id:"history",setActivePanel:s,setCurentLink:p,data:O,setData:x}),Object(u.jsx)(f,{id:"frame",setActivePanel:s,curentLink:j})]})})})};r.a.send("VKWebAppInit"),i.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.27a4ee3a.chunk.js.map