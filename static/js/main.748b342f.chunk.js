(this["webpackJsonpall-in-one-react"]=this["webpackJsonpall-in-one-react"]||[]).push([[0],{114:function(e,t,c){},117:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(0),a=c.n(n),r=c(10),j=c.n(r),i=c(151),o=c(152),b=c(153),l=c(32),d=c(12),O=c(39),u=c(156);c(90);var h=function(e){return Object(s.jsxs)(O.a,{style:{width:"12.5rem"},children:[Object(s.jsx)(O.a.Img,{variant:"top",className:"photo",src:e.imgsrc}),Object(s.jsxs)(O.a.Body,{children:[Object(s.jsx)(O.a.Title,{children:e.name}),Object(s.jsx)(O.a.Text,{children:e.decs}),Object(s.jsx)(u.a,{variant:"primary",children:"Click To Watch"})]})]})},x=[{imgsrc:"https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg",name:"IO Movie 5 Star",decs:"One of the last survivors on a post-cataclysmic Earth, is a young scientist dedicated to finding a way for humans to adapt and survive, rather than abandon their world."},{imgsrc:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts:1576732289",name:"Iron Man",decs:"Earth, is a young scientist dedicated to finding a way for humans to adapt and survive, rather than abandon their world."},{imgsrc:"https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg",name:"Wanted",decs:"Young scientist dedicated to finding a way for humans to adapt and survive, rather than abandon their world."},{imgsrc:"https://images-na.ssl-images-amazon.com/images/I/71K69gamJsL._SL1024_.jpg",name:"Love aaj kal",decs:"Survivors on a post-cataclysmic Earth, is a young scientist dedicated to finding a way for humans to adapt and survive, rather than abandon their world."}],p=c(13),m=c(155);function f(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),c=t[0],a=t[1];return console.log(c,a),Object(s.jsxs)("div",{style:{backgroundColor:"#aaaf",width:"18rem"},children:[Object(s.jsxs)("p",{children:["You clicked ",c," times"]}),Object(s.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){return a(c+1)},children:"Click me"})]})}var v=c(79),g=c(75),y=c.n(g),w=c(76),C=c.n(w),S=c(154);function k(){var e=Object(n.useState)(" "),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),j=Object(p.a)(r,2),l=j[0],d=j[1];return Object(s.jsxs)("div",{style:{backgroundColor:"#aaff",width:"18rem"},children:[Object(s.jsx)("p",{style:{fontWeight:"bold",fontSize:"25px"},children:"ToDo List"}),Object(s.jsx)(S.a,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled",onChange:function(e){a(e.target.value)},value:c}),Object(s.jsx)(y.a,{onClick:function(e){d([].concat(Object(v.a)(l),[c])),a(" ")},style:{fontSize:50}}),Object(s.jsx)("br",{}),Object(s.jsx)("ol",{children:l.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsx)(i.a,{children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(b.a,{style:{textAlign:"left"},children:e}),Object(s.jsx)(b.a,{children:Object(s.jsx)(C.a,{onClick:function(){return function(e){d((function(t){return t.filter((function(t,c){return c!==e}))}))}(t)},style:{fontSize:30}})})]})})})}))})]})}var N=function(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),c=(t[0],t[1],Object(n.useState)(0)),a=Object(p.a)(c,2),r=a[0],j=a[1],i=Object(n.useState)(0),o=Object(p.a)(i,2),b=o[0],l=o[1];return Object(n.useEffect)((function(){alert("I am clicked ".concat(r," times!"))}),[r]),Object(s.jsxs)("div",{children:[Object(s.jsx)(u.a,{onClick:function(){return j(r+1)},children:"useEffect"}),"you clicked ",r," times",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)(u.a,{onClick:function(){return l(b+1)},children:"Click me"}),"you clicked ",b," times"]})},I=a.a.createContext("User"),A=I.Provider,E=I.Consumer;function F(){return Object(s.jsx)(E,{children:function(e){return Object(s.jsxs)("div",{style:{textAlign:"right",fontFamily:"Arial"},children:[" Hello ",Object(s.jsxs)("span",{style:{fontSize:15,color:"#a1ca"},children:[" ",e," "]})]})}})}var z=a.a.createContext(null),P=function(){return Object(s.jsx)(z.Consumer,{children:function(e){return Object(s.jsx)("p",{style:{color:e},children:" useContext component C "})}})},R=function(){return Object(s.jsx)(z.Consumer,{children:function(e){return Object(s.jsx)("p",{style:{color:e},children:" useContext component B "})}})},_=function(){return Object(s.jsxs)(z.Provider,{value:"red",children:[Object(s.jsx)(R,{}),Object(s.jsx)(P,{})]})},H=c(55),M=c.n(H),W=c(77),L=c(78),T=c.n(L),q=function(){var e=Object(n.useState)("1"),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),j=Object(p.a)(r,2),i=j[0],o=j[1],b=Object(n.useState)(),l=Object(p.a)(b,2),d=l[0],O=l[1];return Object(n.useEffect)((function(){function e(){return(e=Object(W.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://pokeapi.co/api/v2/pokemon/".concat(c));case 2:t=e.sent,o(t.data.name),O(t.data.moves.length);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("select",{value:c,onChange:function(e){a(e.target.value)},children:[Object(s.jsx)("option",{value:"1",children:" 1 "}),Object(s.jsx)("option",{value:"25",children:" 25 "}),Object(s.jsx)("option",{value:"3",children:" 3 "}),Object(s.jsx)("option",{value:"4",children:" 4 "}),Object(s.jsx)("option",{value:"5",children:" 5 "})]}),Object(s.jsxs)("h1",{children:["You choose ",Object(s.jsx)("span",{style:{color:"red"},children:c})," value"]}),Object(s.jsxs)("h1",{children:["My name is ",Object(s.jsx)("span",{style:{color:"red"},children:i})," value"]}),Object(s.jsxs)("h1",{children:["I have ",Object(s.jsx)("span",{style:{color:"red"},children:d})," moves"]})]})},D=function(){return Object(s.jsx)("h1",{children:" Hello, I am a About Page "})},B=function(){return Object(s.jsx)("h1",{children:" Hello, I am contact page "})},J=function(e){return Object(s.jsxs)("h1",{children:[" Hello, I am product page: ",e.name," "]})},Y=function(e){return Object(s.jsxs)("h1",{children:[" Hello, I am service page: ",e.name," "]})},U=function(){return Object(s.jsx)("h1",{children:" OOps! page not found! "})},K=(c(114),c(150));var V=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("Mumbai"),j=Object(p.a)(r,2),i=j[0],o=j[1],b=Object(n.useState)(""),l=Object(p.a)(b,2),d=l[0],O=l[1],u=Object(n.useState)(""),h=Object(p.a)(u,2),x=h[0],m=h[1],f=Object(n.useState)(""),v=Object(p.a)(f,2),g=v[0],y=v[1],w=Object(n.useState)(""),C=Object(p.a)(w,2),S=C[0],k=C[1],N=Object(n.useState)(""),I=Object(p.a)(N,2),A=I[0],E=I[1];return Object(n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,",ind&appid=").concat("498829c35b8b6426512a21e4716c235d")).then((function(e){return e.json()})).then((function(e){200==e.cod?(O(e.main.feels_like),m(e.main.temp),y(e.weather[0].description),k(e.weather[0].main),E(e.weather[0].icon),a(e)):a(null)}))}),[i]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(K.a,{type:"search",value:i,placeholder:"search by city ...",onChange:function(e){o(e.target.value)}}),c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h4",{children:["Main Temperature : ",Object(s.jsx)("span",{style:{color:"blue"},children:x})," Degrees Celsius"]}),Object(s.jsxs)("h4",{children:["Feels like : ",Object(s.jsx)("span",{style:{color:"blue"},children:d})," Degrees Celsius"]}),Object(s.jsxs)("h4",{children:["Weather Parameter : ",Object(s.jsx)("span",{style:{color:"blue"},children:S})]}),Object(s.jsxs)("h4",{children:["Description : ",Object(s.jsx)("span",{style:{color:"blue"},children:g})]}),Object(s.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(A,"@2x.png")})]}):Object(s.jsx)("h1",{children:" No data found! "})]})},G={fontFamily:"areal",backgroundColor:"powderblue",width:"80rem"},Q={fontFamily:"areal",backgroundColor:"lightblue",width:"80rem"};var X=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("center",{children:[Object(s.jsx)("p",{style:{fontFamily:"Fantasy",fontSize:34,color:"lightpink",textAlign:"center"},children:"React:- All in a single page "}),Object(s.jsxs)("p",{style:Q,children:["... context ... ",Object(s.jsx)(F,{})]}),Object(s.jsx)(i.a,{children:Object(s.jsxs)(o.a,{children:[x.map((function(e){return Object(s.jsxs)(b.a,{sm:!0,children:[Object(s.jsx)(h,{imgsrc:e.imgsrc,name:e.name,decs:e.decs})," "]})}))," "]})}),Object(s.jsx)(i.a,{children:Object(s.jsxs)(o.a,{xs:"8",children:[Object(s.jsxs)(b.a,{style:G,children:[Object(s.jsxs)("div",{className:"separator",children:[Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"... props:- variables passed by its parent component ..."}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)(f,{}),Object(s.jsx)("br",{})," ",Object(s.jsxs)("div",{className:"separator",children:[Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"... useEffect:- do some work after render ..."}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)(N,{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"separator",children:[Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"... useState:- variables, directly initialized and managed by the component ..."}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)(k,{}),Object(s.jsx)("br",{}),"   "]}),Object(s.jsxs)(b.a,{style:Q,children:[Object(s.jsxs)("div",{className:"separator",children:[Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"... Axios get data ..."}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)(q,{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"separator",children:[Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"... About Route :- Menu, NavLink, Switch, Route, component, render, props ..."}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)(l.b,{exact:!0,activeClassName:"active_class",style:{marginRight:10},to:"/",children:" About US "}),Object(s.jsx)(l.b,{exact:!0,activeClassName:"active_class",style:{marginRight:10},to:"/contact",children:" Contact "}),Object(s.jsx)(l.b,{exact:!0,activeClassName:"active_class",style:{marginRight:10},to:"/product",children:" Product "}),Object(s.jsx)(l.b,{exact:!0,activeClassName:"active_class",style:{marginRight:10},to:"/service",children:" Service "}),Object(s.jsxs)(d.c,{children:[" ",Object(s.jsx)(d.a,{exact:!0,path:"/",component:D}),Object(s.jsx)(d.a,{exact:!0,path:"/contact",component:B}),Object(s.jsx)(d.a,{exact:!0,path:"/product",component:function(){return Object(s.jsx)(J,{name:"Product Props"})}}),Object(s.jsx)(d.a,{exact:!0,path:"/service",render:function(){return Object(s.jsx)(Y,{name:"Service Props"})}}),Object(s.jsx)(d.a,{component:U})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"separator",children:[Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"... Weather App:- useEffect, fetch api call ..."}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)(V,{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"separator",children:[Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"... useContext:- accessed throughout the component hierarchy without passing the props down manually to each level ..."}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)(_,{}),Object(s.jsx)("br",{})]})]})})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})};j.a.render(Object(s.jsx)(l.a,{children:Object(s.jsx)(A,{value:"avinash2222",children:Object(s.jsx)(X,{})})}),document.getElementById("root"))},90:function(e,t,c){}},[[117,1,2]]]);
//# sourceMappingURL=main.748b342f.chunk.js.map