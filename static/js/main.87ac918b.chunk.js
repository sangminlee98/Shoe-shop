(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{49:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),r=c(14),j=c.n(r),d=(c(71),c(17)),l=c(21),o=(c(72),c(108)),b=c(105),h=c(109),O=c(107),u=c(106),x=c(65),p=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],f=c(25),m=c(7),v=c(42),g=c(43),y=(c(49),c(110)),k=c(28),N=c(2),C=g.a.div(n||(n=Object(v.a)(["\n  padding : 20px;\n"]))),S=g.a.h4(i||(i=Object(v.a)(["\n  font-size : 25px;\n  color : ","\n"])),(function(e){return e.\uc0c9\uc0c1}));function w(e){return Object(s.useEffect)((function(){e.\uc2a4\uc704\uce58\ubcc0\uacbd(!0)})),0===e.\ub204\ub978\ud0ed?Object(N.jsx)("div",{children:"0\ubc88\uc9f8"}):1===e.\ub204\ub978\ud0ed?Object(N.jsx)("div",{children:"1\ubc88\uc9f8"}):void 0}function I(e){return Object(N.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[e.num]]})}var B=Object(k.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(0),r=Object(l.a)(a,2),j=r[0],o=r[1],b=Object(s.useState)(!1),O=Object(l.a)(b,2),u=O[0],x=O[1];Object(s.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){clearTimeout(e)}}),[n]);var p=Object(m.g)().id,f=Object(m.f)(),v=e.shoes.find((function(e){return e.id==p}));return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(C,{children:Object(N.jsx)(S,{className:"red",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),!0===n?Object(N.jsx)("div",{className:"my-alert",children:Object(N.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-6",children:Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(v.id+1)+".jpg",width:"100%"})}),Object(N.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(N.jsx)("h4",{className:"pt-5",children:v.title}),Object(N.jsx)("p",{children:v.content}),Object(N.jsxs)("p",{children:[v.price,"\uc6d0"]}),Object(N.jsx)(I,{"\uc7ac\uace0":e.\uc7ac\uace0,num:v.id}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=e.\uc7ac\uace0[v.id]-1,c=Object(d.a)(e.\uc7ac\uace0);c[v.id]=t,e.\uc7ac\uace0\ubcc0\uacbd(c),e.dispatch({type:"\ud56d\ubaa9\ucd94\uac00",data:{id:v.id,name:v.title,quan:1}})},children:"\uc8fc\ubb38\ud558\uae30"}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){f.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(N.jsxs)(h.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[Object(N.jsx)(h.a.Item,{children:Object(N.jsx)(h.a.Link,{eventKey:"link-0",onClick:function(){x(!1),o(0)},children:"\uc0c1\ud488\uc124\uba85"})}),Object(N.jsx)(h.a.Item,{children:Object(N.jsx)(h.a.Link,{eventKey:"link-1",onClick:function(){x(!1),o(1)},children:"\ubc30\uc1a1\uc815\ubcf4"})})]}),Object(N.jsx)(y.a,{in:u,classNames:"wow",timeout:500,children:Object(N.jsx)(w,{"\ub204\ub978\ud0ed":j,"\uc2a4\uc704\uce58\ubcc0\uacbd":x})}),Object(N.jsx)("div",{style:{height:"100px"}})]})})),L=c(104);var T=Object(k.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsxs)(L.a,{responsive:"sm",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"\uc0c1\ud488\ubc88\ud638"}),Object(N.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(N.jsx)("th",{children:"\uc218\ub7c9"}),Object(N.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(N.jsx)("tbody",{children:e.state.map((function(t,c){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:t.id}),Object(N.jsx)("td",{children:t.name}),Object(N.jsx)("td",{children:t.quan}),Object(N.jsxs)("td",{children:[Object(N.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00",payload:t.id})},children:"+"}),Object(N.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c",payload:t.id})},children:"-"})]})]},c)}))})]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(N.jsxs)("div",{className:"my-alert",children:[Object(N.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uba74 20% \ud560\uc778"}),Object(N.jsx)("button",{className:"close-btn",onClick:function(){e.dispatch({type:"close"})},children:"X"})]}):null]})})),q=c(62),F=c.n(q),A=c.p+"static/media/loading1.f5b0fa9b.jpeg",K=a.a.createContext();function P(e){var t=Object(m.f)();return Object(N.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(N.jsx)("h4",{style:{cursor:"pointer"},children:e.shoes.title}),Object(N.jsx)("p",{children:e.shoes.content}),Object(N.jsxs)("p",{children:[e.shoes.price,"\u20a9"]}),Object(N.jsx)(D,{i:e.i})]})}function D(e){var t=Object(s.useContext)(K);return Object(N.jsxs)("p",{children:["\uc7ac\uace0 : ",t[e.i]]})}var E=function(){var e=Object(s.useState)(p),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!1),a=Object(l.a)(i,2),r=a[0],j=a[1],v=Object(s.useState)([10,11,12]),g=Object(l.a)(v,2),y=g[0],k=g[1];return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(o.a,{bg:"light",expand:"lg",children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(o.a.Brand,{as:f.b,to:"/",children:"ShoeShop"}),Object(N.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(h.a,{className:"me-auto",children:[Object(N.jsx)(h.a.Link,{as:f.b,to:"/",children:"Home"}),Object(N.jsx)(h.a.Link,{as:f.b,to:"/cart",children:"Cart"}),Object(N.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(N.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(N.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(N.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(N.jsx)(O.a.Divider,{}),Object(N.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(N.jsxs)(m.c,{children:[Object(N.jsxs)(m.a,{exact:!0,path:"/",children:[Object(N.jsxs)(u.a,{className:"background",children:[Object(N.jsx)("h1",{children:"20% Season Off"}),Object(N.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(N.jsx)("p",{children:Object(N.jsx)(x.a,{variant:"primary",children:"Learn more"})})]}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(K.Provider,{value:y,children:Object(N.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(N.jsx)(P,{shoes:e,i:t},t)}))})}),Object(N.jsx)("button",{className:"btn btn-primary",onClick:function(){j(!0),F.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){setTimeout((function(){j(!1),n([].concat(Object(d.a)(c),Object(d.a)(e.data)))}),1e3)})).catch((function(){j(!1),console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"}),!0===r?Object(N.jsx)("div",{children:Object(N.jsx)("img",{style:{width:"50px"},src:A})}):null]})]}),Object(N.jsx)(m.a,{path:"/detail/:id",children:Object(N.jsx)(K.Provider,{value:y,children:Object(N.jsx)(B,{shoes:c,"\uc7ac\uace0":y,"\uc7ac\uace0\ubcc0\uacbd":k})})}),Object(N.jsx)(m.a,{path:"/cart",children:Object(N.jsx)(T,{})})]})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},z=c(46),G=[];var H=Object(z.b)(Object(z.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var c=Object(d.a)(e),n=c.findIndex((function(e){return e.id===t.data.id}));return n>=0?(c[n].quan++,c):(c.push(t.data),c)}if("\uc218\ub7c9\uc99d\uac00"===t.type){var i=Object(d.a)(e),s=i.findIndex((function(e){return e.id===t.payload}));return i[s].quan++,i}if("\uc218\ub7c9\uac10\uc18c"===t.type){var a=Object(d.a)(e),r=a.findIndex((function(e){return e.id===t.payload}));return a[r].quan<=0||a[r].quan--,a}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"close"!==t.type&&e}}));j.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(f.a,{children:Object(N.jsx)(k.a,{store:H,children:Object(N.jsx)(E,{})})})}),document.getElementById("root")),J()}},[[99,1,2]]]);
//# sourceMappingURL=main.87ac918b.chunk.js.map