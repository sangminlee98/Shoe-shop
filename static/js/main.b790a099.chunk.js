(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),j=c.n(s),a=c(14),r=c.n(a),d=(c(70),c(20)),l=c(22),o=(c(71),c(108)),b=c(105),h=c(109),O=c(107),u=c(106),x=c(64),p=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],m=c(19),f=c(7),v=c(42),g=c(43),k=(c(72),c(110)),y=c(2),N=g.a.div(n||(n=Object(v.a)(["\n  padding : 20px;\n"]))),C=g.a.h4(i||(i=Object(v.a)(["\n  font-size : 25px;\n  color : ","\n"])),(function(e){return e.\uc0c9\uc0c1}));function S(e){return Object(s.useEffect)((function(){e.\uc2a4\uc704\uce58\ubcc0\uacbd(!0)})),0===e.\ub204\ub978\ud0ed?Object(y.jsx)("div",{children:"0\ubc88\uc9f8"}):1===e.\ub204\ub978\ud0ed?Object(y.jsx)("div",{children:"1\ubc88\uc9f8"}):2===e.\ub204\ub978\ud0ed?Object(y.jsx)("div",{children:"2\ubc88\uc9f8"}):void 0}function w(e){return Object(y.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[e.num]]})}var I=function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],j=Object(s.useState)(0),a=Object(l.a)(j,2),r=a[0],o=a[1],b=Object(s.useState)(!1),O=Object(l.a)(b,2),u=O[0],x=O[1];Object(s.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){clearTimeout(e)}}),[n]);var p=Object(f.g)().id,m=Object(f.f)(),v=e.shoes.find((function(e){return e.id==p}));return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(N,{children:Object(y.jsx)(C,{className:"red",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),!0===n?Object(y.jsx)("div",{className:"my-alert",children:Object(y.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-6",children:Object(y.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(v.id+1)+".jpg",width:"100%"})}),Object(y.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(y.jsx)("h4",{className:"pt-5",children:v.title}),Object(y.jsx)("p",{children:v.content}),Object(y.jsxs)("p",{children:[v.price,"\uc6d0"]}),Object(y.jsx)(w,{"\uc7ac\uace0":e.\uc7ac\uace0,num:v.id}),Object(y.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=e.\uc7ac\uace0[v.id]-1,c=Object(d.a)(e.\uc7ac\uace0);c[v.id]=t,e.\uc7ac\uace0\ubcc0\uacbd(c)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(y.jsx)("button",{className:"btn btn-danger",onClick:function(){m.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(y.jsxs)(h.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[Object(y.jsx)(h.a.Item,{children:Object(y.jsx)(h.a.Link,{eventKey:"link-0",onClick:function(){x(!1),o(0)},children:"Active"})}),Object(y.jsx)(h.a.Item,{children:Object(y.jsx)(h.a.Link,{eventKey:"link-1",onClick:function(){x(!1),o(1)},children:"Option 1"})}),Object(y.jsx)(h.a.Item,{children:Object(y.jsx)(h.a.Link,{eventKey:"link-2",onClick:function(){x(!1),o(2)},children:"Option 2"})})]}),Object(y.jsx)(k.a,{in:u,classNames:"wow",timeout:500,children:Object(y.jsx)(S,{"\ub204\ub978\ud0ed":r,"\uc2a4\uc704\uce58\ubcc0\uacbd":x})}),Object(y.jsx)("div",{style:{height:"100px"}})]})},B=c(104),L=c(38);var T=Object(L.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsxs)(B.a,{responsive:"sm",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"#"}),Object(y.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(y.jsx)("th",{children:"\uc218\ub7c9"}),Object(y.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(y.jsx)("tbody",{children:e.state.map((function(t,c){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:t.id}),Object(y.jsx)("td",{children:t.name}),Object(y.jsx)("td",{children:t.quan}),Object(y.jsxs)("td",{children:[Object(y.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00"})},children:"+"}),Object(y.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c"})},children:"-"})]})]},c)}))})]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(y.jsxs)("div",{className:"my-alert",children:[Object(y.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uba74 20% \ud560\uc778"}),Object(y.jsx)("button",{onClick:function(){e.dispatch({type:"close"})},children:"\ub2eb\uae30"})]}):null]})})),q=c(61),A=c.n(q),F=c.p+"static/media/loading1.f5b0fa9b.jpeg",K=j.a.createContext();function P(e){return Object(y.jsxs)("div",{className:"col-md-4",children:[Object(y.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(y.jsx)("h4",{children:Object(y.jsx)(m.b,{to:"/detail/"+e.i,children:e.shoes.title})}),Object(y.jsx)("p",{children:e.shoes.content}),Object(y.jsxs)("p",{children:[e.shoes.price,"\u20a9"]}),Object(y.jsx)(D,{i:e.i})]})}function D(e){var t=Object(s.useContext)(K);return Object(y.jsxs)("p",{children:["\uc7ac\uace0 : ",t[e.i]]})}var E=function(){var e=Object(s.useState)(p),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!1),j=Object(l.a)(i,2),a=j[0],r=j[1],v=Object(s.useState)([10,11,12]),g=Object(l.a)(v,2),k=g[0],N=g[1];return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(o.a,{bg:"light",expand:"lg",children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)(o.a.Brand,{as:m.b,to:"/",children:"ShoeShop"}),Object(y.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(y.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(y.jsxs)(h.a,{className:"me-auto",children:[Object(y.jsx)(h.a.Link,{as:m.b,to:"/",children:"Home"}),Object(y.jsx)(h.a.Link,{as:m.b,to:"/cart",children:"Cart"}),Object(y.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(y.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(y.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(y.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(y.jsx)(O.a.Divider,{}),Object(y.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(y.jsxs)(f.c,{children:[Object(y.jsxs)(f.a,{exact:!0,path:"/",children:[Object(y.jsxs)(u.a,{className:"background",children:[Object(y.jsx)("h1",{children:"20% Season Off"}),Object(y.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(y.jsx)("p",{children:Object(y.jsx)(x.a,{variant:"primary",children:"Learn more"})})]}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(K.Provider,{value:k,children:Object(y.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(y.jsx)(P,{shoes:e,i:t},t)}))})}),Object(y.jsx)("button",{className:"btn btn-primary",onClick:function(){r(!0),A.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){setTimeout((function(){r(!1),n([].concat(Object(d.a)(c),Object(d.a)(e.data)))}),1e3)})).catch((function(){r(!1),console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"}),!0===a?Object(y.jsx)("div",{children:Object(y.jsx)("img",{style:{width:"50px"},src:F})}):null]})]}),Object(y.jsx)(f.a,{path:"/detail/:id",children:Object(y.jsx)(K.Provider,{value:k,children:Object(y.jsx)(I,{shoes:c,"\uc7ac\uace0":k,"\uc7ac\uace0\ubcc0\uacbd":N})})}),Object(y.jsx)(f.a,{path:"/cart",children:Object(y.jsx)(T,{})})]})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),n(e),i(e),s(e),j(e)}))},z=c(46),G=[{id:0,name:"\uba4b\uc9c4\uc2e0\ubc1c",quan:2},{id:1,name:"\uc774\uc05c\uc2e0\ubc1c",quan:4}];var H=Object(z.b)(Object(z.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;if("\uc218\ub7c9\uc99d\uac00"===t.type){var c=Object(d.a)(e);return c[0].quan++,c}if("\uc218\ub7c9\uac10\uc18c"===t.type){var n=Object(d.a)(e);return n[0].quan--,n}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"close"!==t.type&&e}}));r.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(m.a,{children:Object(y.jsx)(L.a,{store:H,children:Object(y.jsx)(E,{})})})}),document.getElementById("root")),J()}},[[99,1,2]]]);
//# sourceMappingURL=main.b790a099.chunk.js.map