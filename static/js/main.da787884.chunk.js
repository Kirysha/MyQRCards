(this.webpackJsonpMyQRCards=this.webpackJsonpMyQRCards||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(58),i=a.n(r),l=a(33),s=a.n(l),o=a(69),m=a.n(o),u=a(73),d=a(64),p=a(30),h=a(51),f=a(70),E=(a(160),a(35)),b=a(31),g=a(43),y=a(49),k=a(42),v=a(52),O=a(48),j=a(47),C=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(E.a,{id:t},c.a.createElement(b.a,null,"Example"),n&&c.a.createElement(k.a,{header:c.a.createElement(g.a,{mode:"secondary"},"User Data Fetched with VK Bridge")},c.a.createElement(v.a,{before:n.photo_200?c.a.createElement(j.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(k.a,{header:c.a.createElement(g.a,{mode:"secondary"},"Navigation Example")},c.a.createElement(O.a,null,c.a.createElement(y.a,{stretched:!0,size:"l",mode:"secondary",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},w=a(54),A=a.p+"static/media/persik.ae9f0072.png",K=(a(165),function(e){return c.a.createElement(E.a,{id:e.id},c.a.createElement(b.a,{left:c.a.createElement(w.a,{onClick:e.go,"data-to":"home"})},"Persik"),c.a.createElement("img",{className:"Persik",src:A,alt:"Persik The Cat"}))}),P=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(null)),i=Object(d.a)(r,2),l=i[0],o=i[1],E=Object(n.useState)(c.a.createElement(h.a,{size:"large"})),b=Object(d.a)(E,2),g=b[0],y=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,o(t),y(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){s.a.send("VKWebAppOpenCodeReader").then((function(e){console.log("test",e)}))};return c.a.createElement(f.a,null,c.a.createElement(f.b,null,c.a.createElement(p.a,{activePanel:a,popout:g},c.a.createElement(C,{id:"home",fetchedUser:l,go:k}),c.a.createElement(K,{id:"persik",go:k}))))};s.a.send("VKWebAppInit"),i.a.render(c.a.createElement(P,null),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.da787884.chunk.js.map