(this["webpackJsonprealtime-news"]=this["webpackJsonprealtime-news"]||[]).push([[0],{31:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),r=n.n(c),s=n(24),i=n.n(s),o=(n(31),n(8)),l=n.n(o),u=n(15),j=n(9),d=n(11),b=n.n(d),m="https://ruanyf.github.io/sina-news/rss.json",x=[{value:"sina",text:"\u65b0\u6d6a\u65b0\u95fb"},{value:"caijing",text:"\u8d22\u7ecf\u65b0\u95fb"},{value:"internet",text:"\u4e92\u8054\u7f51\u8d44\u8baf"},{value:"guonei",text:"\u56fd\u5185\u65b0\u95fb"},{value:"social",text:"\u793e\u4f1a\u65b0\u95fb"},{value:"world",text:"\u56fd\u9645\u65b0\u95fb"}],f=(n(51),n(52),n(58)),h=n(63),p=n(59),O=n(60),v=n(25),g=n(62),w=n(61);var y=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(0),i=Object(j.a)(s,2),o=i[0],d=i[1],y=Object(c.useState)("sina"),S=Object(j.a)(y,2),k=S[0],N=S[1],T=Object(c.useState)(!1),E=Object(j.a)(T,2),L=E[0],C=E[1],I=function(){var e,t=window.localStorage;e=document.documentElement.scrollTop||document.body.scrollTop,t.setItem("sTop",e)};return Object(c.useEffect)((function(){var e=window.localStorage;if(e.getItem("sTop")){var t=Number(e.getItem("sTop"));t&&(document.documentElement.scrollTop=t,document.body.scrollTop=t)}})),Object(c.useEffect)((function(){return window.addEventListener("scroll",I),function(){window.removeEventListener("scroll",I)}}),[]),Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(m);case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(f.a,{fluid:"xl",children:n&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"text-center mt-2 text-secondary",id:"heading",children:"\u65b0\u95fb\u6c47\u603b"}),Object(a.jsxs)(h.a,{className:"pl-5 pr-5 d-flex justify-content-start",children:[Object(a.jsxs)(h.a.Group,{className:" mt-2 mr-2",children:[Object(a.jsx)(h.a.Label,{children:"\u8c03\u8282\u5b57\u4f53\u5927\u5c0f"}),Object(a.jsx)(h.a.Control,{type:"range",custom:!0,min:"1",max:"20",step:"1",value:o,onChange:function(e){var t;t=e.target.value,d(Number(t))}})]}),Object(a.jsxs)(h.a.Group,{children:[Object(a.jsx)(h.a.Label,{children:"\u9009\u62e9\u7c7b\u522b"}),Object(a.jsx)(h.a.Control,{as:"select",custom:!0,value:k,onChange:function(e){var t;t=e.target.value,function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("sina"!==t){e.next=7;break}return C(!0),e.next=4,b.a.get(m);case 4:n=e.sent,e.next=11;break;case 7:return C(!0),e.next=10,b.a.get("https://api.tianapi.com/".concat(t,"/index?key=84f91abca9ea39adad5bb11d05b65057&num=50"));case 10:n=e.sent;case 11:N(t),r(n.data),C(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},children:x.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.text},e.value)}))})]})]}),L&&Object(a.jsx)(p.a,{animation:"border",size:"sm",role:"status",style:{width:"200px",height:"200px",margin:"auto",display:"block"}}),"sina"===k&&!L&&Object(a.jsx)(O.a,{className:"justify-content-md-center",children:Object(a.jsx)(v.a,{xs:!0,md:"auto",children:Object(a.jsx)(g.a,{children:n.items.map((function(e,t){return Object(a.jsxs)(g.a.Item,{className:"main-font-size",style:{fontSize:"".concat(20+o,"px")},children:[t+1,".",e.title,"(",Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.url,children:new Date(e.date_modified).toLocaleString()}),")"]},e.id)}))})})}),"sina"!==k&&!L&&Object(a.jsx)(O.a,{className:"justify-content-md-center",children:Object(a.jsx)(v.a,{xs:!0,md:"auto",children:Object(a.jsx)(g.a,{children:n.newslist.map((function(e,t){return Object(a.jsx)(g.a.Item,{className:"main-font-size",style:{fontSize:"".concat(20+o,"px")},children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(v.a,{xs:12,md:3,children:Object(a.jsx)(w.a,{src:e.picUrl,fluid:!0,thumbnail:!0,className:" w-100"})}),Object(a.jsxs)(v.a,{xs:12,md:9,children:[t+1,".",e.title,"(",Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.url,children:new Date(e.ctime.replace(/-/g,"/")).toLocaleString()}),")"]})]})},e.description+t)}))})})})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[56,1,2]]]);
//# sourceMappingURL=main.cf06b222.chunk.js.map