(this["webpackJsonpreact-exercises"]=this["webpackJsonpreact-exercises"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(9),u=n.n(a),s=(n(15),n(2)),r=(n(16),n(5)),l=n(0);var o=function(t){var e=Object(c.useState)([]),n=Object(s.a)(e,2),i=n[0],a=n[1],u=Object(c.useState)(""),o=Object(s.a)(u,2),b=o[0],j=o[1],m=Object(c.useState)(""),d=Object(s.a)(m,2),O=d[0],p=d[1];return Object(c.useEffect)((function(){localStorage.getItem("blogPosts")&&a(JSON.parse(localStorage.getItem("blogPosts")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("blogPosts",JSON.stringify(i))}),[i]),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={title:b,body:O};a([].concat(Object(r.a)(i),[e])),j(""),p("")},children:[Object(l.jsx)("h2",{children:"BlogPostForm"}),Object(l.jsx)("input",{value:b,onChange:function(t){j(t.target.value)},name:"title-input",id:"new-title-input",type:"text",placeholder:"Title goes here"}),Object(l.jsx)("input",{value:O,onChange:function(t){p(t.target.value)},name:"body-input",id:"new-body-input",type:"text",placeholder:"Text goes here"}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})},b=n(3),j=n(20);var m=function(t){return Object(l.jsx)(j.a,{border:"info",style:{width:"18rem"},children:Object(l.jsxs)(j.a.Body,{children:[Object(l.jsxs)(j.a.Title,{children:[" ",t.first," ",t.last]}),Object(l.jsx)(j.a.Text,{children:t.phone}),Object(l.jsxs)(j.a.Text,{children:[t.address," "]})]})})};var d=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(""),u=Object(s.a)(a,2),o=u[0],j=u[1],d=Object(c.useState)(""),O=Object(s.a)(d,2),p=O[0],g=O[1],h=Object(c.useState)(""),x=Object(s.a)(h,2),f=x[0],v=x[1],y=Object(c.useState)(""),S=Object(s.a)(y,2),C=S[0],P=S[1];Object(c.useEffect)((function(){localStorage.getItem("contactList")&&i(JSON.parse(localStorage.getItem("contactList")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("contactList",JSON.stringify(n))}),[n]);var q=n.map((function(t){return Object(l.jsx)(m,Object(b.a)({},t),t.phone)}));return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={first:o,last:p,address:f,phone:C};i([].concat(Object(r.a)(n),[e])),j(""),g(""),v(""),P("")},children:[Object(l.jsx)("h2",{htmlFor:"contact-input",children:Object(l.jsx)("label",{children:"Contact Form"})}),Object(l.jsx)("input",{value:o,name:"first-name",onChange:function(t){j(t.target.value)},type:"text",placeholder:"First Name"}),Object(l.jsx)("input",{value:p,name:"last-name",onChange:function(t){g(t.target.value)},type:"text",placeholder:"Last Name"}),Object(l.jsx)("input",{value:f,name:"address-input",onChange:function(t){v(t.target.value)},type:"text",placeholder:"Address"}),Object(l.jsx)("input",{value:C,name:"tel-input",onChange:function(t){P(t.target.value)},type:"tel",placeholder:"Phone"}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]}),q]})};var O=function(t){var e=t.blogs.map((function(e){return Object(l.jsx)("aside",{style:{width:"30%"},children:Object(l.jsx)("div",{class:"btn-group-vertical",style:{padding:"10px"},children:Object(l.jsx)("button",{class:"btn btn-info btn-large",type:"button",onClick:function(){return t.selectBlog(e.id)},children:e.title})})})}));return Object(l.jsx)("ul",{children:e})};var p=function(t){return Object(l.jsxs)("div",{style:{width:"60%"},children:[Object(l.jsx)("h2",{children:t.blog.title}),Object(l.jsx)("p",{children:t.blog.body})]})};var g=function(){var t,e=Object(c.useState)(),n=Object(s.a)(e,2),i=n[0],a=n[1],u=Object(c.useState)([]),r=Object(s.a)(u,2),o=r[0],b=r[1];return Object(c.useEffect)((function(){b([{id:1,title:"Jimmy Goes to Publix 1",body:"Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac."},{id:2,title:"Jimmy Goes to Publix 2",body:"Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac."},{id:3,title:"Jimmy Goes to Publix 3",body:"Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac."}])}),[]),i&&(t=o.find((function(t){return t.id===i}))),Object(l.jsxs)("main",{style:{display:"flex"},children:[Object(l.jsx)(O,{blogs:o,selectBlog:function(t){a(t)}}),i&&Object(l.jsx)(p,{blog:t})]})};var h=function(){var t=Object(c.useState)([{url:"Jimmy Goes to Publix 2",title:"Jimmy Goes to Publix 2",tag:"2"},{url:"Jimmy Goes to Publix 2",title:"Jimmy Goes to Publix 2",tag:"2"},{url:"Jimmy Goes to Publix 3",title:"Jimmy Goes to Publix 3",tag:"3"}]),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(""),u=Object(s.a)(a,2),o=u[0],b=u[1],j=Object(c.useState)(""),m=Object(s.a)(j,2),d=m[0],O=m[1],p=Object(c.useState)(""),g=Object(s.a)(p,2),h=g[0],x=g[1],f=Object(c.useState)(),v=Object(s.a)(f,2),y=v[0],S=v[1];Object(c.useEffect)((function(){localStorage.setItem("bookmarks",JSON.stringify(n))}),[n]);var C=n.filter((function(t){return y?t.tag===y:t})).map((function(t,e){return Object(l.jsx)("li",{children:t.title},e)})),P=n.map((function(t){return t.tag})),q=Object(r.a)(new Set(P)).map((function(t){return Object(l.jsx)("option",{value:t,children:t},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={url:o,title:d,tag:h};i([].concat(Object(r.a)(n),[e])),b(""),O(""),x(""),console.log(n)},children:[Object(l.jsx)("input",{type:"url",name:"Url",value:o,placeholder:"URL",onChange:function(t){b(t.target.value)}}),Object(l.jsx)("input",{type:"text",name:"Title",value:d,placeholder:"Title",onChange:function(t){O(t.target.value)}}),Object(l.jsx)("input",{type:"text",name:"Tag",value:h,placeholder:"Tag",onChange:function(t){x(t.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]}),Object(l.jsxs)("select",{name:"",id:"",onChange:function(t){"all"===t.target.value?S(null):S(t.target.value)},children:[Object(l.jsx)("option",{value:"all",children:"All"}),q]}),Object(l.jsx)("div",{children:C})]})};var x=function(){return Object(l.jsx)("div",{children:"Demonstrate Full CRUD Here."})};n(18);var f=function(){var t,e=Object(c.useState)("blogForm"),n=Object(s.a)(e,2),i=n[0],a=n[1];return"blogForm"===i?t=Object(l.jsx)(o,{}):"contactForm"===i?t=Object(l.jsx)(d,{}):"blogReading"===i?t=Object(l.jsx)(g,{}):"bookmarking"===i?t=Object(l.jsx)(h,{}):"blogApp"===i&&(t=Object(l.jsx)(x,{})),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("button",{type:"button",onClick:function(){return a("blogForm")},children:"Blog Form"}),Object(l.jsx)("button",{type:"button",onClick:function(){return a("contactForm")},children:"Contact Form"}),Object(l.jsx)("button",{type:"button",onClick:function(){return a("blogReading")},children:"Blog Reading App"}),Object(l.jsx)("button",{type:"button",onClick:function(){return a("bookmarking")},children:"Bookmarking App"}),Object(l.jsxs)("button",{type:"button",onClick:function(){return a("blogApp")},children:[" ","Blog App"]})]}),t]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),c(t),i(t),a(t),u(t)}))};u.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.a5c5adff.chunk.js.map