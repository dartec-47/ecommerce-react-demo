(this.webpackJsonpprojectz=this.webpackJsonpprojectz||[]).push([[0],{193:function(e,t,n){},194:function(e,t,n){},223:function(e,t){},225:function(e,t){},238:function(e,t){},240:function(e,t){},270:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(51),i=n.n(r),j=(n(193),n(14)),s=(n(194),n(10)),o=n(366),l=n(363),d=n(368),u=n(364),b=n(98),O=n(166),x=n(159),h=n.n(x),m=n(367),f=n(358),p=n(349),g=n(355),v=n(15),y=n(4),C=n(52),w=n(361),k=n(360),q=n(376),S=n(353),F=n(377),_=n(343),A=n(359),P=n(93),I=n.n(P),T=n(67),V=n.n(T),B=n(66),E=n.n(B),z=n(1);function L(e){var t=e.product,n=e.removeFromCart,a=e.addQuantity,r=e.removeQuantity,i=c.useState(!1),j=Object(s.a)(i,1)[0];return Object(z.jsx)(l.a,{sx:{flexGrow:1},children:Object(z.jsx)(A.a,{item:!0,xs:12,md:12,children:Object(z.jsxs)(q.a,{dense:j,children:[Object(z.jsx)(S.a,{secondaryAction:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(u.a,{onClick:function(){return r(t)},children:Object(z.jsx)(E.a,{})}),Object(z.jsx)(u.a,{onClick:function(){return a(t)},children:Object(z.jsx)(V.a,{})}),Object(z.jsx)(u.a,{edge:"end","aria-label":"delete",onClick:function(){return n(t)},children:Object(z.jsx)(I.a,{})})]})}),Object(z.jsx)(F.a,{children:Object(z.jsx)(f.a,{children:Object(z.jsx)(f.a,{alt:t.images[0].alt,src:t.images[0].src})})}),Object(z.jsx)(_.a,{primary:t.name,secondary:t.quantity+"x"+t.price+" \u20ac = "+ +t.quantity*+t.price+" \u20ac"})]})})})}var D=n(34),N=n(158),W=n.n(N),G=[],Q=Object(c.createContext)(G),K=function(e){var t=Object(c.useState)(G),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(z.jsx)(Q.Provider,{value:[a,r],children:e.children})},R=n(356);function M(){var e=a.a.useState({right:!1}),t=Object(s.a)(e,2),n=t[0],r=t[1],i=function(e,t){return function(c){("keydown"!==c.type||"Tab"!==c.key&&"Shift"!==c.key)&&r(Object(C.a)(Object(C.a)({},n),{},Object(y.a)({},e,t)))}},j=function(e){return Object(z.jsxs)(l.a,{sx:{width:"top"===e||"bottom"===e?"auto":250},role:"presentation",onKeyDown:i(e,!1),children:[Object(z.jsx)(b.a,{children:"CART"}),Object(z.jsx)(q.a,{children:u.map((function(e,t){return Object(z.jsx)(L,{product:e,removeFromCart:g,addQuantity:F,removeQuantity:S},t)}))}),Object(z.jsxs)(b.a,{children:["Tot: ",m+" \u20ac"]}),Object(z.jsx)(k.a,{component:D.b,to:"/ecommerce-react-demo/checkout",onClick:i(e,!1),children:"Checkout"})]})},o=Object(c.useContext)(Q),d=Object(s.a)(o,2),u=d[0],O=d[1],x=Object(c.useState)(0),h=Object(s.a)(x,2),m=h[0],f=h[1],p=u.map((function(e){return e.price}));p.length>0&&p.reduce((function(e,t){return e+t}));var g=function(e){var t=u.filter((function(t){return t.id!==e.id}));O(t)},S=function(e){e.quantity--,O((function(e){return Object(v.a)(e)})),0===e.quantity&&g(e)},F=function(e){e.quantity++,O((function(e){return Object(v.a)(e)}))};Object(c.useEffect)((function(){var e=u.map((function(e){return e.price*e.quantity})),t=0;e.length>0&&(t=e.reduce((function(e,t){return e+t}))),f(t)}));var _=u.map((function(e){return e.quantity})),A=0;return _.length>0&&(A=_.reduce((function(e,t){return e+t}))),Object(z.jsx)("div",{children:["right"].map((function(e){return Object(z.jsxs)(a.a.Fragment,{children:[Object(z.jsx)(R.a,{badgeContent:A,color:"warning",children:Object(z.jsx)(W.a,{onClick:i(e,!0)})}),Object(z.jsx)(w.a,{anchor:e,open:n[e],onClose:i(e,!1),children:j(e)})]},e)}))})}var J=["Profile","Account","Dashboard","Logout"],H=function(){var e=c.useState(null),t=Object(s.a)(e,2),n=(t[0],t[1]),a=c.useState(null),r=Object(s.a)(a,2),i=r[0],j=r[1],x=function(){j(null)};return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(o.a,{position:"static",children:Object(z.jsx)(m.a,{maxWidth:"xl",children:Object(z.jsxs)(d.a,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between"},children:[Object(z.jsx)(b.a,{variant:"h6",noWrap:!0,component:D.b,to:"/ecommerce-react-demo",sx:{mr:2,display:{xs:"none",md:"flex"},textDecoration:"none",color:"white"},children:"React e-commerce"}),Object(z.jsx)(l.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:Object(z.jsx)(u.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"inherit",children:Object(z.jsx)(h.a,{})})}),Object(z.jsx)(b.a,{variant:"h6",noWrap:!0,component:D.b,to:"/ecommerce-react-demo",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"React e-commerce"}),Object(z.jsxs)(l.a,{sx:{flexGrow:0},children:[Object(z.jsx)(u.a,{sx:{mr:2},children:Object(z.jsx)(M,{})}),Object(z.jsx)(p.a,{title:"Open settings",children:Object(z.jsx)(u.a,{onClick:function(e){j(e.currentTarget)},sx:{p:0},children:Object(z.jsx)(f.a,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),Object(z.jsx)(O.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(i),onClose:x,children:J.map((function(e){return Object(z.jsx)(g.a,{onClick:x,children:Object(z.jsx)(b.a,{textAlign:"center",children:e})},e)}))})]})]})})})})},U=n(68),X=new U.a({url:"https://ecommerce-react-demo.x10.mx/wp/",consumerKey:"ck_0fbeec789c4e12780070d60ebaccf11245dba721",consumerSecret:"cs_ba3eb67352f860a6ca7102fd9aca0b5242fcbd71",wpAPI:!0,version:"wc/v3"}),Y=n(378),Z=n(379),$=n(380),ee=n(381);function te(e){var t=e.product,n=Object(c.useContext)(Q),a=Object(s.a)(n,2),r=a[0],i=a[1],j=!1;r.map((function(e){e.id!==t.id||(j=!0)}));var o=function(e){e.quantity--,i((function(e){return Object(v.a)(e)})),0===e.quantity&&function(e){var t=r.filter((function(t){return t.id!==e.id}));i(t)}(e)};return Object(z.jsxs)(Y.a,{sx:{maxWidth:345,m:2},children:[Object(z.jsx)(Z.a,{title:t.name}),Object(z.jsx)($.a,{component:"img",height:"194",image:t.images[0].src,alt:t.images[0].name}),Object(z.jsx)(ee.a,{disableSpacing:!0,children:!1===j?Object(z.jsx)(k.a,{onClick:function(){return function(e){e.quantity=1,i((function(t){return[].concat(Object(v.a)(t),[e])}))}(t)},sx:{my:2,display:"block"},children:"Add to cart"}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(u.a,{onClick:function(){return o(t)},children:Object(z.jsx)(E.a,{})}),Object(z.jsx)(u.a,{onClick:function(){return t.quantity++,void i((function(e){return Object(v.a)(e)}))},children:Object(z.jsx)(V.a,{})})]})})]})}var ne=n(382),ce=n(362);function ae(){return Object(z.jsxs)(Y.a,{sx:{maxWidth:345,m:2},children:[Object(z.jsx)(Z.a,{title:Object(z.jsx)(ce.a,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:Object(z.jsx)(ce.a,{animation:"wave",height:10,width:"40%"})}),Object(z.jsx)(ce.a,{sx:{height:190},animation:"wave",variant:"rectangular"}),Object(z.jsxs)(ne.a,{children:[Object(z.jsx)(ce.a,{animation:"wave",height:10,style:{marginBottom:6}}),Object(z.jsx)(ce.a,{animation:"wave",height:10,width:"80%"})]})]})}function re(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(ae,{})})}function ie(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(s.a)(r,2),j=i[0],o=i[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){X.get("products").then((function(e){200===e.status&&(a(e.data),o(!0))}))};return Object(z.jsx)(A.a,{container:!0,spacing:1,justifyContent:"center",children:Object(z.jsx)(A.a,{item:!0,xs:10,children:Object(z.jsx)(A.a,{container:!0,spacing:2,children:!1===j?function(e){for(var t=[],n=0;n<e;n++)t.push(n);return t.map((function(e,t){return Object(z.jsx)(A.a,{item:!0,xs:4,children:Object(z.jsx)(re,{},t)})}))}(10):n.map((function(e,t){return Object(z.jsx)(A.a,{item:!0,xs:4,children:Object(z.jsx)(te,{product:e})},t)}))})})})}var je=n(163),se=n(351),oe=n(348),le=n(370),de=n(374),ue=n(373),be=n(369),Oe=n(371),xe=n(372),he=n(365),me=n(357),fe=n(375),pe=n(350);function ge(e){var t=e.handleInformation;return Object(z.jsx)(l.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:Object(z.jsxs)("div",{children:[Object(z.jsx)(b.a,{children:"Shipping Information"}),Object(z.jsx)(pe.a,{required:!0,id:"outlined-required",label:"First Name",name:"first_name",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{required:!0,id:"outlined-required",label:"Last Name",name:"last_name",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{required:!0,id:"outlined-required",label:"Address 1",name:"address_1",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{id:"outlined-required",label:"Address 2",name:"address_2",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{id:"outlined-required",label:"City",name:"city",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{id:"outlined-required",label:"State",name:"state",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{id:"outlined-required",label:"Postcode",name:"postcode",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{id:"outlined-required",label:"Country",name:"country",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{id:"outlined-required",type:"email",label:"Email",name:"email",defaultValue:"",onChange:t}),Object(z.jsx)(pe.a,{id:"outlined-required",type:"tel",label:"Phone",name:"phone",defaultValue:"",onChange:t})]})})}var ve=Object(se.a)((function(){return Object(oe.a)({root:{display:"flex",padding:"5%"}})})),ye=new U.a({url:"https://ecommerce-react-demo.x10.mx/wp/",consumerKey:"ck_0fbeec789c4e12780070d60ebaccf11245dba721",consumerSecret:"cs_ba3eb67352f860a6ca7102fd9aca0b5242fcbd71",wpAPI:!0,version:"wc/v3"});function Ce(){var e=ve(),t=Object(c.useContext)(Q),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(0),o=Object(s.a)(i,2),l=o[0],d=o[1],b=Object(c.useState)({}),O=Object(s.a)(b,2),x=O[0],h=O[1],m=Object(c.useState)(!1),f=Object(s.a)(m,2),p=f[0],g=(f[1],Object(j.f)()),y=a.map((function(e){return{product_id:e.id,quantity:e.quantity}}));return Object(c.useEffect)((function(){var e=a.map((function(e){return e.price*e.quantity})),t=0;e.length>0&&(t=e.reduce((function(e,t){return e+t}))),d(t)})),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:e.root,children:[Object(z.jsx)("div",{children:Object(z.jsx)(ge,{handleInformation:function(e){var t=Object.assign({},x);t[e.target.name]=e.target.value,h(t)}})}),Object(z.jsxs)("div",{children:[Object(z.jsx)(be.a,{component:he.a,children:Object(z.jsxs)(le.a,{sx:{minWidth:700},"aria-label":"spanning table",children:[Object(z.jsxs)(Oe.a,{children:[Object(z.jsxs)(xe.a,{children:[Object(z.jsx)(ue.a,{align:"center",colSpan:3,children:"Details"}),Object(z.jsx)(ue.a,{align:"right",children:"Price"})]}),Object(z.jsxs)(xe.a,{children:[Object(z.jsx)(ue.a,{children:"Desc."}),Object(z.jsx)(ue.a,{align:"right",children:"Actions"}),Object(z.jsx)(ue.a,{align:"right",children:"Qty."}),Object(z.jsx)(ue.a,{align:"right",children:"Sum"})]})]}),Object(z.jsxs)(de.a,{children:[a.map((function(e){return Object(z.jsxs)(xe.a,{children:[Object(z.jsx)(ue.a,{children:e.name}),Object(z.jsxs)(ue.a,{children:[Object(z.jsx)(u.a,{onClick:function(){return e.quantity++,void r((function(e){return Object(v.a)(e)}))},children:Object(z.jsx)(V.a,{})}),Object(z.jsx)(u.a,{onClick:function(){return e.quantity--,void r((function(e){return Object(v.a)(e)}))},children:Object(z.jsx)(E.a,{})}),Object(z.jsx)(u.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e.id}));r(t)}(e)},children:Object(z.jsx)(I.a,{})})]}),Object(z.jsx)(ue.a,{align:"right",children:e.quantity}),Object(z.jsx)(ue.a,{align:"right",children:e.price*e.quantity})]},e.name)})),Object(z.jsxs)(xe.a,{children:[Object(z.jsx)(ue.a,{rowSpan:3}),Object(z.jsx)(ue.a,{colSpan:2,children:"Total"}),Object(z.jsx)(ue.a,{align:"right",children:l})]})]})]})}),Object(z.jsx)(k.a,{onClick:function(){Object(je.a)("setBackdrop");var e={billing:x,shipping:x,line_items:y};ye.post("orders",e).then((function(e){r([]),g("/ecommerce-react-demo//order/".concat(e.data.id))}))},children:"Create Order"}),Object(z.jsx)(k.a,{component:D.b,to:"/ecommerce-react-demo/checkout",children:"Back to shop"})]})]}),!0===p&&Object(z.jsx)(me.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},children:Object(z.jsx)(fe.a,{color:"inherit"})})]})}var we={},ke=Object(c.createContext)(we),qe=function(e){var t=Object(c.useState)(we),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(z.jsx)(ke.Provider,{value:[a,r],children:e.children})},Se=n(164),Fe=n.n(Se);function _e(){var e=Object(c.useContext)(ke),t=Object(s.a)(e,2),n=(t[0],t[1],{username:"admin",password:"admin"});return Object(c.useEffect)((function(){Fe.a.post("http://localhost/projectz/wp-json/jwt-auth/v1/token",n).then((function(e){return console.log(e.data)}))})),Object(z.jsx)("div",{children:"Login"})}var Ae=Object(se.a)((function(){return Object(oe.a)({root:{display:"flex"},container:{marginTop:"10%",paddingLeft:"30%"}})})),Pe=new U.a({url:"https://ecommerce-react-demo.x10.mx/wp/",consumerKey:"ck_0fbeec789c4e12780070d60ebaccf11245dba721",consumerSecret:"cs_ba3eb67352f860a6ca7102fd9aca0b5242fcbd71",wpAPI:!0,version:"wc/v3"});function Ie(){var e=Ae(),t=Object(c.useState)({}),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),l=o[0],d=o[1],u=Object(j.g)();Object(c.useEffect)((function(){O()}),[]);var O=function(){Pe.get("orders/"+u.id).then((function(e){200===e.status&&(r(e.data),d(!0))}))};return Object(z.jsx)(z.Fragment,{children:!0===l?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:e.container,children:[Object(z.jsxs)("div",{className:e.root,children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(b.a,{children:"Order Numer: "+a.number}),Object(z.jsx)(b.a,{children:"Billing Information"}),Object(z.jsx)(b.a,{children:"Firstname: "+a.billing.first_name}),Object(z.jsx)(b.a,{children:"Lastname: "+a.billing.last_name}),Object(z.jsx)(b.a,{children:"Address 1: "+a.billing.address_1}),Object(z.jsx)(b.a,{children:"Address 2: "+a.billing.address_2}),Object(z.jsx)(b.a,{children:"City: "+a.billing.city}),Object(z.jsx)(b.a,{children:"State: "+a.billing.state}),Object(z.jsx)(b.a,{children:"Postcode: "+a.billing.postcode}),Object(z.jsx)(b.a,{children:"Country"+a.billing.country}),Object(z.jsx)(b.a,{children:"Email: "+a.billing.email}),Object(z.jsx)(b.a,{children:"Phone"+a.billing.phone})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(b.a,{children:"Shipping Information"}),Object(z.jsx)(b.a,{children:"Firstname: "+a.shipping.first_name}),Object(z.jsx)(b.a,{children:"Lastname: "+a.shipping.last_name}),Object(z.jsx)(b.a,{children:"Address 1: "+a.shipping.address_1}),Object(z.jsx)(b.a,{children:"City: "+a.shipping.city}),Object(z.jsx)(b.a,{children:"State: "+a.shipping.state}),Object(z.jsx)(b.a,{children:"Postcode: "+a.shipping.postcode}),Object(z.jsx)(b.a,{children:"Country"+a.shipping.country})]})]}),a.line_items.map((function(e){return Object(z.jsxs)(xe.a,{children:[Object(z.jsx)(ue.a,{children:e.name}),Object(z.jsx)(ue.a,{align:"right",children:e.quantity}),Object(z.jsx)(ue.a,{align:"right",children:e.price+"x"+e.quantity+"="+e.total+" \u20ac"})]},e.name)})),Object(z.jsx)(b.a,{children:"Total: "+a.total+" \u20ac"})]}),Object(z.jsx)(k.a,{component:D.b,to:"/ecommerce-react-demo",children:"Back to shop"})]}):Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(b.a,{component:"div",children:Object(z.jsx)(fe.a,{})})})})}var Te=function(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(qe,{children:Object(z.jsxs)(K,{children:[Object(z.jsx)(H,{}),Object(z.jsx)("main",{children:Object(z.jsxs)(j.c,{children:[Object(z.jsx)(j.a,{path:"/ecommerce-react-demo",element:Object(z.jsx)(ie,{})}),Object(z.jsx)(j.a,{path:"/ecommerce-react-demo/order/:id",element:Object(z.jsx)(Ie,{})}),Object(z.jsx)(j.a,{path:"/ecommerce-react-demo/checkout",element:Object(z.jsx)(Ce,{})}),Object(z.jsx)(j.a,{path:"/ecommerce-react-demo/login",element:Object(z.jsx)(_e,{})})]})})]})})})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,383)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(D.a,{children:Object(z.jsx)(Te,{})})}),document.getElementById("root")),Ve()}},[[270,1,2]]]);
//# sourceMappingURL=main.bf6fd286.chunk.js.map