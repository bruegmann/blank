(this.webpackJsonpblank=this.webpackJsonpblank||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(20),r=s.n(c),o=s(8),i=(s(26),s(27),s(38)),l={HELLO_WORLD:["Hello World!","Hallo Welt!"]};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return t=t||navigator.language.toLowerCase().indexOf("de")>-1?"de-DE":"en-US",(s=s||l)[e]?t.indexOf("de-")>-1?s[e][1]:s[e][0]:e}var m=s(9),j=s(13),u=s(0);function b(e){var t=e.children,s=e.href,a=e.to;return a?Object(u.jsx)(j.b,{to:a,className:Object(m.a)("py-1 px-2"),children:t}):Object(u.jsx)("a",{href:s,className:Object(m.a)("py-1 px-2"),children:t})}var h=s(10),O={primary:void 0,shadow:void 0,silent:void 0};function x(e){var t=e.primary,s=e.shadow,a=e.silent;return Object(m.a)("btn px-3 py-2 rounded",{primary:t,"neumorphism-shadow-sm":"sm"===s||void 0===s,"neumorphism-shadow":!0===s,silent:a},e.className)}function p(e){return Object(u.jsx)("button",Object(h.a)(Object(h.a)({},Object.assign({},e,O)),{},{className:x(e),children:e.children}))}function g(e){return Object(u.jsx)("a",Object(h.a)(Object(h.a)({},Object.assign({},e,O)),{},{className:x(e),children:e.children}))}var v=s(3),f=s(11),k=s(35),y=s(36);function w(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("theme"),s=Object(a.useState)(t&&["dark","light"].includes(t)?t:e.matches?"dark":"light"),n=Object(o.a)(s,2),c=n[0],r=n[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;r(e),document.body.classList.remove("light"),document.body.classList.remove("dark"),document.body.classList.add(e)},l=function(){i(e.matches?"dark":"light"),localStorage.removeItem("theme")};return Object(a.useEffect)((function(){return i(),e.addEventListener("change",l),function(){e.removeEventListener("change",l)}}),[]),Object(u.jsx)(p,{onClick:function(){var e="dark"===c?"light":"dark";localStorage.setItem("theme",e),i(e)},className:"d-inline-flex align-items-center neumorphism-shadow-sm",children:"light"===c?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k.a,{className:"me-1"})," ",d("Switch to dark theme")]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y.a,{className:"me-1"})," ",d("Switch to light theme")]})})}var N=s(37);function S(e){var t=e.children,s=e.toggle,n=e.title,c=e.classNames,r=Object(a.useState)(),i=Object(o.a)(r,2),l=i[0],d=i[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),h=b[0],O=b[1];return Object(a.useEffect)((function(){!0===l&&!1===e.show?(O(!0),setTimeout((function(){O(!1),d(e.show)}),200)):d(e.show)}),[e.show]),Object(u.jsxs)("div",{className:Object(m.a)("modal",{show:l,fadeOut:h}),role:"dialog",tabIndex:-1,children:[Object(u.jsx)("div",{className:"modal-backdrop",onClick:s}),Object(u.jsxs)("div",{className:"modal-content",role:"document",children:[Object(u.jsxs)("div",{className:"modal-header d-flex justify-content-between mt-3 mb-2",children:[Object(u.jsx)("h2",{className:"m-0",children:n}),Object(u.jsx)("button",{className:"btn-close",onClick:s,"aria-label":"Close",children:Object(u.jsx)(N.a,{})})]}),Object(u.jsx)("div",{className:Object(m.a)("modal-body body-bg-stronger p-3 rounded",null===c||void 0===c?void 0:c.modalBody),children:t})]})]})}function C(e){Object(f.a)(e);var t=Object(a.useState)(!1),s=Object(o.a)(t,2),n=s[0],c=s[1],r=function(){return c(!n)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{onClick:r,className:"mb-3 neumorphism-shadow-sm",children:"Open modal"}),Object(u.jsxs)(S,{show:n,toggle:r,title:"Modal title",classNames:{modalBody:"p-4"},children:[Object(u.jsx)("h1",{children:"Modal content"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)(w,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)(p,{primary:!0,className:"me-3",onClick:r,children:"Okay"}),Object(u.jsx)(p,{silent:!0,shadow:!1,onClick:r,children:"Cancel"})]})]})]})]})}var L={};function H(e){var t=e.shadow,s=e.silent;return Object(m.a)("form-control p-2 rounded",{"neumorphism-shadow-sm":"sm"===t||void 0===t,"neumorphism-shadow":!0===t,silent:s},e.className)}function M(e){return Object(u.jsx)("input",Object(h.a)(Object(h.a)({},Object.assign({},e,L)),{},{className:H(e)}))}function B(e){return Object(u.jsx)("textarea",Object(h.a)(Object(h.a)({},Object.assign({},e,L)),{},{className:H(e)}))}function A(e){Object(f.a)(e);var t=Object(a.useState)(""),s=Object(o.a)(t,2),n=s[0],c=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(M,{type:"text",value:n,onChange:function(e){var t=e.target;return c(t.value)}}),Object(u.jsx)(p,{className:"ms-2 me-3",children:"Now click me"}),"You typed: ".concat(n)]}),Object(u.jsxs)("label",{className:"d-block mb-5",children:[Object(u.jsx)("div",{className:"mb-1 position-relative",children:Object(u.jsx)("strong",{children:"Write something"})}),Object(u.jsx)(B,{value:n,onChange:function(e){var t=e.target;return c(t.value)},className:"d-block w-100"})]}),Object(u.jsxs)("label",{className:"d-block mb-5 form-control p-0 neumorphism-shadow-sm rounded",children:[Object(u.jsx)("div",{className:"mb-1 mx-2 mt-2",children:Object(u.jsx)("strong",{children:"Write something"})}),Object(u.jsx)("textarea",{className:"form-control-input p-2 border-0 d-block w-100"})]})]})}function E(e){return Object(f.a)(e),Object(u.jsxs)("div",{className:"container mx-3",children:[Object(u.jsx)("h1",{children:"Blank"}),Object(u.jsx)("a",{href:"#",children:"Normal link"}),Object(u.jsxs)("div",{className:"link-area mb-3",children:[Object(u.jsx)("a",{href:"#",children:"Link in link area"})," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(p,{className:"me-3",children:"Click me!"}),Object(u.jsx)(g,{primary:!0,className:"me-3",href:"https://google.com",target:"_blank",rel:"noopener noreferrer",children:"Open link"}),Object(u.jsx)(p,{silent:!0,className:"me-3",children:"Silent button"}),Object(u.jsx)(p,{silent:!0,shadow:!1,className:"me-3",children:"Silent button without shadow"}),Object(u.jsx)(p,{shadow:!1,children:"Button without shadow"})]}),Object(u.jsx)(A,{}),Object(u.jsxs)("div",{className:"p-3 my-3 body-bg-stronger neumorphism-shadow rounded-3",children:[Object(u.jsx)("h2",{children:"My card content"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(u.jsx)(w,{})]}),Object(u.jsx)(C,{})]})}function _(e){return Object(f.a)(e),Object(u.jsx)("h1",{children:"Hi"})}var z=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",clipRule:"evenodd",viewBox:"0 0 404 404",width:"1em",height:"1em",children:[Object(u.jsx)("g",{transform:"translate(-2733.37 -151.568)",children:Object(u.jsxs)("g",{transform:"translate(2238.48 151.568)",children:[Object(u.jsx)("path",{fill:"none",d:"M494.892 0H898.172V403.28H494.892z"}),Object(u.jsxs)("g",{transform:"translate(494.892)",children:[Object(u.jsx)("path",{fill:"url(#_Linear1)",d:"M403.23 88.693C403.23 39.742 363.488 0 314.537 0H88.773C39.822 0 .08 39.742.08 88.693v225.764c0 48.951 39.742 88.693 88.693 88.693h225.764c48.951 0 88.693-39.742 88.693-88.693V88.693z"}),Object(u.jsx)("clipPath",{id:"_clip2",children:Object(u.jsx)("path",{d:"M403.23 88.693C403.23 39.742 363.488 0 314.537 0H88.773C39.822 0 .08 39.742.08 88.693v225.764c0 48.951 39.742 88.693 88.693 88.693h225.764c48.951 0 88.693-39.742 88.693-88.693V88.693z"})}),Object(u.jsx)("g",{clipPath:"url(#_clip2)",children:Object(u.jsx)("path",{fill:"url(#_Radial3)",d:"M0 0.13H403.15V403.28H0z"})})]}),Object(u.jsx)("path",{fill:"#fff",d:"M3048.02 313.454c0-38.96-31.63-70.59-70.59-70.59h-79.41c-38.96 0-70.59 31.63-70.59 70.59v79.414c0 38.96 31.63 70.59 70.59 70.59h79.41c38.96 0 70.59-31.63 70.59-70.59v-79.414zm-16 0v79.414c0 30.129-24.46 54.59-54.59 54.59h-79.41c-30.13 0-54.59-24.461-54.59-54.59v-79.414c0-30.129 24.46-54.59 54.59-54.59h79.41c30.13 0 54.59 24.461 54.59 54.59z",transform:"matrix(.95197 0 0 .95197 -2100.11 -134.56)"})]})}),Object(u.jsxs)("defs",{children:[Object(u.jsxs)("linearGradient",{id:"_Linear1",x1:"0",x2:"1",y1:"0",y2:"0",gradientTransform:"translate(.08 201.575) scale(403.15)",gradientUnits:"userSpaceOnUse",children:[Object(u.jsx)("stop",{offset:"0",stopColor:"#A6B8E7"}),Object(u.jsx)("stop",{offset:"1",stopColor:"#DCA6E7"})]}),Object(u.jsxs)("radialGradient",{id:"_Radial3",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(201.57 0 0 -201.57 201.57 203.725)",gradientUnits:"userSpaceOnUse",children:[Object(u.jsx)("stop",{offset:"0",stopColor:"#1D1D1B",stopOpacity:"0.2"}),Object(u.jsx)("stop",{offset:"1",stopColor:"#C2C2C1",stopOpacity:"0.2"})]})]})]})};var I=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(u.jsx)(j.a,{basename:"/blank",children:Object(u.jsxs)("div",{className:"App",style:{"--font-family-base":"".concat(s?'"Inter", ':"",'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif')},children:[Object(u.jsxs)("header",{className:"container mx-3 d-flex align-items-center justify-content-between py-4",children:[Object(u.jsxs)("a",{href:"/",className:"d-inline-flex align-items-center",style:{fontSize:"48px"},children:[Object(u.jsx)(z,{})," ",Object(u.jsx)("h5",{className:"ms-2 mb-0",children:"Blank"})]}),Object(u.jsxs)("nav",{children:[Object(u.jsx)(b,{to:"/",children:d("Home")}),Object(u.jsx)(b,{to:"/posts",children:d("Posts demo page")}),Object(u.jsx)(p,{onClick:function(){return n(!s)},children:"Toggle font"})]})]}),Object(u.jsxs)(v.c,{children:[Object(u.jsx)(v.a,{path:"/posts",children:Object(u.jsx)(_,{})}),Object(u.jsx)(v.a,{exact:!0,path:"/",children:Object(u.jsx)(E,{})})]}),Object(u.jsx)("footer",{className:"text-center",children:Object(u.jsxs)("a",{href:"https://github.com/bruegmann/blank",target:"_blank",rel:"noopener noreferrer",className:"d-inline-flex align-items-center",children:[Object(u.jsx)(i.a,{className:"me-1"})," Code on GitHub"]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2914a5c4.chunk.js.map