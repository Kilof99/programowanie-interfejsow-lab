(this.webpackJsonplab6=this.webpackJsonplab6||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(30),i=n.n(c),l=(n(36),n.p,n(26),n(14)),r=n(20),j=n(21),d=n(23),o=n(22),h=n(5),b=n(1),u=function(e){return Object(b.jsxs)("div",{className:"card text-white bg-success mb-3",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Imi\u0119:"})," ",e.name]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Opis:"})," ",e.desc]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Mail:"})," ",e.mail]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Tagi:"})," ",e.tags]})]})},O=function(e){var t=e.todos.map((function(e){return Object(b.jsx)(u,{name:e.name,desc:e.desc,mail:e.mail,tags:e.tags.join(", ")},e.id)}));return Object(b.jsx)("ul",{children:t})},m=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{className:"boxlabel",htmlFor:e.id,children:e.label}),Object(b.jsx)("input",{id:e.id,type:"text",name:"newItemValue",value:e.newItemValue,onChange:e.handleOnChange})]})})},x=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={newName:"",newDesc:"",newMail:"",newTags:"",showWarning:!1},e.errorMessage="Wymagany jest unikalny adres e-mail",e.handleNewName=function(t){e.setState({newName:t.target.value})},e.handleNewMail=function(t){e.setState({newMail:t.target.value})},e.handleNewDesc=function(t){e.setState({newDesc:t.target.value})},e.handleNewTags=function(t){e.setState({newTags:t.target.value})},e.append=function(){if(""===e.state.newMail||e.props.list.some((function(t){return t.mail===e.state.newMail})))e.setState({showWarning:!0});else{var t=e.state.newTags.split(", "),n={name:e.state.newName,mail:e.state.newMail,desc:e.state.newDesc,tags:t};e.props.adder(n),e.setState({newName:"",newDesc:"",newMail:"",newTags:"",showWarning:!1})}},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{id:"name",label:"Imi\u0119 i nazwisko: ",newItemValue:this.state.newName,handleOnChange:this.handleNewName}),Object(b.jsx)(m,{id:"desc",label:"Opis: ",newItemValue:this.state.newDesc,handleOnChange:this.handleNewDesc}),Object(b.jsx)(m,{id:"mail",label:"Adres e-mail: ",newItemValue:this.state.newMail,handleOnChange:this.handleNewMail}),Object(b.jsx)(m,{id:"tags",label:"Tagi (rozdzielone przecinkiem i spacj\u0105): ",newItemValue:this.state.newTags,handleOnChange:this.handleNewTags}),Object(b.jsx)("button",{onClick:this.append,children:"Dodaj"}),this.state.showWarning&&Object(b.jsx)("h1",{className:"err",children:this.errorMessage})]})}}]),n}(a.Component),p=n(17);n(38),n(46);p.a.apps.length?p.a.app():p.a.initializeApp({apiKey:"AIzaSyCUTNxpnYD6XyugJEizWy6RNcmqQFf0tzU",authDomain:"lab6-db43c.firebaseapp.com",projectId:"lab6-db43c",storageBucket:"lab6-db43c.appspot.com",messagingSenderId:"269229643135",appId:"1:269229643135:web:757dfdcda6e2601228364a",measurementId:"G-913X2F1YWP"});var g=p.a.auth(),w=p.a.firestore(),f=function(e,t,n,a,s){w.collection("students").add({id:e,name:t,desc:n,mail:a,tags:s})},v=function(){var e=[];return w.collection("students").onSnapshot((function(t){t.forEach((function(t){var n={id:t.data().id,name:t.data().name,desc:t.data().desc,mail:t.data().mail,tags:t.data().tags};e.push(n)}))})),e},N=n(9),y=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(N.a)(c,2),l=i[0],r=i[1],j=Object(a.useState)(!1),d=Object(N.a)(j,2),o=d[0],u=d[1],O=Object(a.useState)(!1),m=Object(N.a)(O,2),x=m[0],p=m[1];return o?Object(b.jsx)(h.a,{to:"/"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:" Adres e-mail"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{name:"email",value:n,placeholder:"Adres e-mail",onChange:function(e){return s(e.target.value)}})}),Object(b.jsx)("label",{htmlFor:"password",children:" Has\u0142o"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"password",name:"password",value:l,placeholder:"Haslo",onChange:function(e){return r(e.target.value)}})}),Object(b.jsx)("button",{onClick:function(){g.signInWithEmailAndPassword(n,l).then((function(){u(!0)})).catch((function(e){console.log(e),p(!0)}))},children:"Zaloguj si\u0119"}),Object(b.jsx)("div",{children:x&&Object(b.jsx)("h1",{className:"err",children:"B\u0142\u0119dny login lub has\u0142o"})})]})},S=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(N.a)(c,2),l=i[0],r=i[1],j=Object(a.useState)(""),d=Object(N.a)(j,2),o=d[0],u=d[1],O=Object(a.useState)(!1),m=Object(N.a)(O,2),x=m[0],p=m[1],w=Object(a.useState)(!1),f=Object(N.a)(w,2),v=f[0],y=f[1],S=Object(a.useState)(!1),k=Object(N.a)(S,2),C=k[0],I=k[1];return x?Object(b.jsx)(h.a,{to:"/"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"displayName",children:" Nazwa u\u017cytkownika"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{name:"name",value:o,placeholder:"Nazwa u\u017cytkownika",onChange:function(e){return u(e.target.value)}})}),Object(b.jsx)("label",{htmlFor:"email",children:" Adres e-mail"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{name:"email",value:n,placeholder:"Adres e-mail",onChange:function(e){return s(e.target.value)}})}),Object(b.jsx)("label",{htmlFor:"password",children:" Has\u0142o"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"password",name:"password",value:l,placeholder:"Haslo",onChange:function(e){return r(e.target.value)}})}),Object(b.jsx)("button",{onClick:function(){y(!1),I(!1),g.createUserWithEmailAndPassword(n,l).then((function(){g.signInWithEmailAndPassword(n,l).then((function(e){e.user.updateProfile({displayName:o})})).catch((function(e){console.log(e)})),p(!0)})).catch((function(e){console.log(e),"auth/invalid-email"===e.code&&y(!0),"auth/weak-password"===e.code&&I(!0)}))},children:"Utw\xf3rz konto"}),Object(b.jsxs)("div",{children:[v&&Object(b.jsx)("h1",{className:"err",children:"Niepoprawny adres e-mail"}),C&&Object(b.jsx)("h1",{className:"err",children:"Has\u0142o musi mie\u0107 co najmniej 6 znak\xf3w"})]})]})},k=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={studentsList:v()},e.addNew=function(t){var n=e.state.studentsList.length;e.setState({studentsList:e.state.studentsList.concat({id:n,name:t.name,desc:t.desc,mail:t.mail,tags:t.tags})}),f(n,t.name,t.desc,t.mail,t.tags)},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/",exact:!0,children:Object(b.jsx)("section",{children:Object(b.jsx)(O,{todos:this.state.studentsList})})}),Object(b.jsx)(h.b,{path:"/new",children:Object(b.jsx)("section",{children:Object(b.jsx)(x,{adder:this.addNew,list:this.state.studentsList})})}),Object(b.jsx)(h.b,{path:"/lab6",children:Object(b.jsx)("section",{children:Object(b.jsx)("h1",{children:"Welcome"})})}),Object(b.jsx)(h.b,{path:"/login",children:Object(b.jsx)("section",{children:Object(b.jsx)(y,{})})}),Object(b.jsx)(h.b,{path:"/signup",children:Object(b.jsx)("section",{children:Object(b.jsx)(S,{})})}),Object(b.jsx)(h.b,{children:Object(b.jsx)("section",{children:Object(b.jsx)("h1",{children:"Error 404 - not found"})})})]})}}]),n}(a.Component),C=function(){var e=Object(a.useState)(null),t=Object(N.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){var e=g.onAuthStateChanged((function(e){s(e||null)}));return function(){return e()}}),[]);return n?Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Lista student\xf3w"}),Object(b.jsxs)("nav",{children:[Object(b.jsx)(l.b,{to:"/",children:"Lista student\xf3w"}),Object(b.jsx)(l.b,{to:"/new",children:"Dodaj studenta"}),Object(b.jsx)(l.b,{to:"/login",onClick:function(){g.signOut()},children:"Wyloguj si\u0119"})]})]}):Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Lista student\xf3w"}),Object(b.jsxs)("nav",{children:[Object(b.jsx)(l.b,{to:"/login",exact:!0,children:"Zaloguj si\u0119"}),Object(b.jsx)(l.b,{to:"/signup",children:"Za\u0142\xf3\u017c konto"})]})]})};var I=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{}),Object(b.jsx)(k,{})]})})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d1114ca7.chunk.js.map