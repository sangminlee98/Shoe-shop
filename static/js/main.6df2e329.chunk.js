(this.webpackJsonpshop2=this.webpackJsonpshop2||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(15),a=n.n(r),o=(n(73),n(21)),s=n(39),l=(n(74),n(112)),d=n(109),j=n(113),h=n(111),b=n(110),u=n(64),O=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],p=n(23),x=n(7),f=n(108),v=n(26),g=(n(67),n(2));var m=Object(v.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){var t=Object(v.c)();return Object(v.d)((function(e){return e})),Object(g.jsxs)("div",{children:[Object(g.jsxs)(f.a,{responsive:"sm",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"\uc0c1\ud488\ubc88\ud638"}),Object(g.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(g.jsx)("th",{children:"\uc218\ub7c9"}),Object(g.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(g.jsx)("tbody",{children:e.state.map((function(e,n){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.id}),Object(g.jsx)("td",{children:e.name}),Object(g.jsx)("td",{children:e.quan}),Object(g.jsxs)("td",{children:[Object(g.jsx)("button",{onClick:function(){t({type:"\uc218\ub7c9\uc99d\uac00",payload:e.id})},children:"+"}),Object(g.jsx)("button",{onClick:function(){t({type:"\uc218\ub7c9\uac10\uc18c",payload:e.id})},children:"-"})]})]},n)}))})]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(g.jsxs)("div",{className:"my-alert",children:[Object(g.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uba74 20% \ud560\uc778"}),Object(g.jsx)("button",{className:"close-btn",onClick:function(){e.dispatch({type:"close"})},children:"X"})]}):null]})})),w=n(60),y=n.n(w),k=n.p+"static/media/loading1.f5b0fa9b.jpeg",S=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,121))})),C=i.a.createContext();function N(e){var t=Object(x.f)();return Object(g.jsxs)("div",{className:"col-md-4 card",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(g.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(g.jsx)("h4",{style:{cursor:"pointer"},children:e.shoes.title}),Object(g.jsx)("p",{children:e.shoes.content}),Object(g.jsxs)("p",{children:[e.shoes.price,"\u20a9"]}),Object(g.jsx)(I,{i:e.i})]})}function I(e){var t=Object(c.useContext)(C);return Object(g.jsxs)("p",{children:["\uc7ac\uace0 : ",t[e.i]]})}var W=function(){var e=Object(c.useState)(O),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),a=Object(s.a)(r,2),f=a[0],v=a[1],w=Object(c.useState)([10,11,12]),I=Object(s.a)(w,2),W=I[0],B=I[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(l.a,{bg:"light",expand:"lg",children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(l.a.Brand,{as:p.b,to:"/",children:"ShoeShop"}),Object(g.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(j.a,{className:"me-auto",children:[Object(g.jsx)(j.a.Link,{as:p.b,to:"/",children:"Home"}),Object(g.jsx)(j.a.Link,{as:p.b,to:"/cart",children:"Cart"}),Object(g.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(g.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(g.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(h.a.Divider,{}),Object(g.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(g.jsxs)(x.c,{children:[Object(g.jsxs)(x.a,{exact:!0,path:"/",children:[Object(g.jsxs)(b.a,{className:"background",children:[Object(g.jsx)("h1",{children:"20% Season Off"}),Object(g.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(g.jsx)("p",{children:Object(g.jsx)(u.a,{variant:"primary",children:"Learn more"})})]}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(C.Provider,{value:W,children:Object(g.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(g.jsx)(N,{shoes:e,i:t},t)}))})}),Object(g.jsx)("button",{className:"btn btn-primary",onClick:function(){v(!0),y.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){setTimeout((function(){v(!1),i([].concat(Object(o.a)(n),Object(o.a)(e.data)))}),1e3)})).catch((function(){v(!1),console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"}),!0===f?Object(g.jsx)("div",{children:Object(g.jsx)("img",{style:{width:"50px"},src:k})}):null]})]}),Object(g.jsx)(x.a,{path:"/detail/:id",children:Object(g.jsx)(C.Provider,{value:W,children:Object(g.jsx)(c.Suspense,{fallback:Object(g.jsx)("div",{children:"Loading.."}),children:Object(g.jsx)(S,{shoes:n,"\uc7ac\uace0":W,"\uc7ac\uace0\ubcc0\uacbd":B})})})}),Object(g.jsx)(x.a,{path:"/cart",children:Object(g.jsx)(m,{})})]})]})},B=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,122)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=n(47),A=[];var q=n(65),F=n.n(q),D=Object(T.b)(Object(T.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var n=Object(o.a)(e),c=n.findIndex((function(e){return e.id===t.data.id}));return c>=0?(n[c].quan++,n):(n.push(t.data),n)}if("\uc218\ub7c9\uc99d\uac00"===t.type){var i=Object(o.a)(e),r=i.findIndex((function(e){return e.id===t.payload}));return i[r].quan++,i}if("\uc218\ub7c9\uac10\uc18c"===t.type){var a=Object(o.a)(e),s=a.findIndex((function(e){return e.id===t.payload}));return a[s].quan<=0||a[s].quan--,a}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"close"!==t.type&&e}}));a.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(v.a,{store:D,children:[Object(g.jsx)(F.a,{}),Object(g.jsx)(W,{})]})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),B()},67:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.6df2e329.chunk.js.map