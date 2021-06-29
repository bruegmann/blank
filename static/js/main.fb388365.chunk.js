(this.webpackJsonpblank=this.webpackJsonpblank||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"src\\\\components\\\\Button.tsx":{"description":"","displayName":"Button","methods":[],"props":{"noHover":{"required":false,"tsType":{"name":"boolean"},"description":"Disables hover effect, e.g. when button should marked as active."},"primary":{"required":false,"tsType":{"name":"boolean"},"description":""},"shadow":{"required":false,"tsType":{"name":"union","raw":"boolean | \\"sm\\"","elements":[{"name":"boolean"},{"name":"literal","value":"\\"sm\\""}]},"description":""},"silent":{"required":false,"tsType":{"name":"boolean"},"description":""},"spacing":{"required":false,"tsType":{"name":"string"},"description":"","defaultValue":{"value":"\\"px-3 py-2\\"","computed":false}},"tag":{"required":false,"tsType":{"name":"ElementType"},"description":""}},"composes":["AnchorHTMLAttributes"]},"src\\\\components\\\\FormControl.tsx":{"description":"","displayName":"FormControl","methods":[],"props":{"shadow":{"required":false,"tsType":{"name":"union","raw":"boolean | \\"sm\\"","elements":[{"name":"boolean"},{"name":"literal","value":"\\"sm\\""}]},"description":""},"silent":{"required":false,"tsType":{"name":"boolean"},"description":""},"tag":{"required":false,"tsType":{"name":"ElementType"},"description":""}},"composes":["InputHTMLAttributes"]},"src\\\\components\\\\MenuItem.tsx":{"description":"","displayName":"MenuItem","methods":[],"props":{"tag":{"required":false,"tsType":{"name":"ElementType"},"description":""}},"composes":["AnchorHTMLAttributes"]},"src\\\\components\\\\Modal.tsx":{"description":"","displayName":"Modal","methods":[],"props":{"children":{"required":true,"tsType":{"name":"ReactNode"},"description":""},"classNames":{"required":false,"tsType":{"name":"signature","type":"object","raw":"{\\r\\n    modalBody?: string\\r\\n}","signature":{"properties":[{"key":"modalBody","value":{"name":"string","required":false}}]}},"description":"Set className of inner elements"},"show":{"required":true,"tsType":{"name":"boolean"},"description":""},"title":{"required":false,"tsType":{"name":"string"},"description":""},"toggle":{"required":true,"tsType":{"name":"signature","type":"function","raw":"() => void","signature":{"arguments":[],"return":{"name":"void"}}},"description":""}}}}')},31:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(25),r=s.n(c),o=s(5),i=(s(31),s(44)),l=s(45),d=s(46),m=s(47),j={HELLO_WORLD:["Hello World!","Hallo Welt!"]};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return t=t||navigator.language.toLowerCase().indexOf("de")>-1?"de-DE":"en-US",(s=s||j)[e]?t.indexOf("de-")>-1?s[e][1]:s[e][0]:e}var u=s(9),h=s(14),p=s(11),O=s(0),x=["tag"];function f(e){var t=e.tag,s=Object(h.a)(e,x),a=t||(s.href?"a":"button");return Object(O.jsx)(a,Object(u.a)(Object(u.a)({},s),{},{className:Object(p.a)("menu-item py-2 px-3 rounded d-flex d-md-inline-flex",s.className)}))}var g=s(15),v=s(3),y=s(8),N=s(39),w=s(40),k=["tag","primary","shadow","silent","noHover","spacing"];function C(e){var t=e.tag,s=e.primary,a=e.shadow,n=e.silent,c=e.noHover,r=e.spacing,o=void 0===r?"px-3 py-2":r,i=Object(h.a)(e,k),l=t||(i.href?"a":"button");return Object(O.jsx)(l,Object(u.a)(Object(u.a)({},i),{},{className:Object(p.a)("btn ".concat(o," rounded"),{primary:s,"neumorphism-shadow-sm":"sm"===a||void 0===a,"neumorphism-shadow":!0===a,silent:n,"no-hover":c},i.className)}))}function S(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("theme"),s=Object(a.useState)(t&&["dark","light"].includes(t)?t:e.matches?"dark":"light"),n=Object(o.a)(s,2),c=n[0],r=n[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;r(e),document.documentElement.classList.remove("light"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add(e)},l=function(){i(e.matches?"dark":"light"),localStorage.removeItem("theme")};return Object(a.useEffect)((function(){return i(),e.addEventListener("change",l),function(){e.removeEventListener("change",l)}}),[]),Object(O.jsx)(C,{onClick:function(){var e="dark"===c?"light":"dark";localStorage.setItem("theme",e),i(e)},className:"d-inline-flex align-items-center neumorphism-shadow-sm",children:"light"===c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N.a,{className:"me-1"})," ",b("Switch to dark theme")]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w.a,{className:"me-1"})," ",b("Switch to light theme")]})})}var L=s(41);function H(e){var t=e.children,s=e.toggle,n=e.title,c=e.classNames,r=Object(a.useState)(),i=Object(o.a)(r,2),l=i[0],d=i[1],m=Object(a.useState)(!1),j=Object(o.a)(m,2),b=j[0],u=j[1];return Object(a.useEffect)((function(){!0===l&&!1===e.show?(u(!0),setTimeout((function(){u(!1),d(e.show)}),200)):d(e.show)}),[e.show]),Object(O.jsxs)("div",{className:Object(p.a)("modal",{show:l,fadeOut:b}),role:"dialog",tabIndex:-1,children:[Object(O.jsx)("div",{className:"modal-backdrop",onClick:s}),Object(O.jsxs)("div",{className:"modal-content",role:"document",children:[Object(O.jsxs)("div",{className:"modal-header d-flex justify-content-between mt-3 mb-2",children:[Object(O.jsx)("h2",{className:"m-0",children:n}),Object(O.jsx)("button",{className:"btn-close",onClick:s,"aria-label":"Close",children:Object(O.jsx)(L.a,{})})]}),Object(O.jsx)("div",{className:Object(p.a)("modal-body body-bg-stronger p-3 rounded",null===c||void 0===c?void 0:c.modalBody),children:t})]})]})}function T(e){Object(y.a)(e);var t=Object(a.useState)(!1),s=Object(o.a)(t,2),n=s[0],c=s[1],r=function(){return c(!n)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C,{onClick:r,className:"mb-3 neumorphism-shadow-sm",children:"Open modal"}),Object(O.jsxs)(H,{show:n,toggle:r,title:"Modal title",classNames:{modalBody:"p-4"},children:[Object(O.jsx)("h1",{children:"Modal content"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(O.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(O.jsx)(S,{}),Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{primary:!0,className:"me-3",onClick:r,children:"Okay"}),Object(O.jsx)(C,{silent:!0,shadow:!1,onClick:r,children:"Cancel"})]})]})]})]})}var M=["tag","shadow","silent"];function q(e){var t=e.tag,s=e.shadow,a=e.silent,n=Object(h.a)(e,M),c=t||"input";return Object(O.jsx)(c,Object(u.a)(Object(u.a)({},n),{},{className:Object(p.a)("form-control p-2 rounded",{"neumorphism-shadow-sm":"sm"===s||void 0===s,"neumorphism-shadow":!0===s,silent:a},n.className)}))}function E(e){Object(y.a)(e);var t=Object(a.useState)(""),s=Object(o.a)(t,2),n=s[0],c=s[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)(q,{type:"text",value:n,onChange:function(e){var t=e.target;return c(t.value)}}),Object(O.jsx)(C,{className:"ms-2 me-3",children:"Now click me"}),"You typed: ".concat(n)]}),Object(O.jsxs)("label",{className:"d-block mb-5",children:[Object(O.jsx)("div",{className:"mb-1 position-relative",children:Object(O.jsx)("strong",{children:"Write something"})}),Object(O.jsx)(q,{tag:"textarea",value:n,onChange:function(e){var t=e.target;return c(t.value)},className:"d-block w-100"})]}),Object(O.jsxs)("label",{className:"d-block mb-5 form-control p-0 neumorphism-shadow-sm rounded",children:[Object(O.jsx)("div",{className:"mb-1 mx-2 mt-2",children:Object(O.jsx)("strong",{children:"Write something"})}),Object(O.jsx)("textarea",{className:"form-control-input p-2 border-0 d-block w-100"})]})]})}var A=s(12);function B(e){Object(y.a)(e);var t=window.matchMedia("(prefers-color-scheme: dark)"),s=Object(a.useState)([]),n=Object(o.a)(s,2),c=n[0],r=n[1],i=function(){var e=Array.from(document.styleSheets).filter((function(e){return null===e.href||e.href.startsWith(window.location.origin)})).reduce((function(e,t){return[].concat(Object(A.a)(e),Object(A.a)(Array.from(t.cssRules).reduce((function(e,t){return":root"===t.selectorText?[].concat(Object(A.a)(e),Object(A.a)(Array.from(t.style).filter((function(e){return e.startsWith("--")})))):e}),[])))}),[]);r(Object(A.a)(e))};return Object(a.useEffect)((function(){i(),t.addEventListener("change",i);var e=new MutationObserver(i);return e.observe(document.documentElement,{attributes:!0}),function(){t.removeEventListener("change",i),e.disconnect()}}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:"mt-3",children:"CSS variables"}),Object(O.jsxs)("p",{children:["All ",Object(O.jsx)("code",{children:"*-tone"})," color variables only include the HSL values (e.g. ",Object(O.jsx)("code",{children:"0deg, 0%, 100%"}),"). This way you can easily handle the alpha value yourself like this: ",Object(O.jsx)("code",{children:"hsla(var(--body-color-tone), .5)"})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("code",{children:[":root ","{"]})}),c.map((function(e){return Object(O.jsxs)("div",{className:"ms-3",children:[Object(O.jsxs)("code",{children:[Object(O.jsx)("strong",{children:e}),": ",getComputedStyle(document.documentElement).getPropertyValue(e)]}),Object(O.jsx)("div",{className:"d-inline-block border ms-1 rounded",style:{width:".8em",height:".8em",backgroundColor:e.includes("-tone")?"hsl(var(".concat(e,"))"):"var(".concat(e,")")}})]},e)})),Object(O.jsx)("div",{children:Object(O.jsx)("code",{children:"}"})})]})}function R(e){return Object(y.a)(e),Object(O.jsxs)("div",{className:"container mx-3",children:[Object(O.jsx)("h1",{children:"Blank"}),Object(O.jsx)("a",{href:"#",children:"Normal link"}),Object(O.jsxs)("div",{className:"link-area mb-3",children:[Object(O.jsx)("a",{href:"#",children:"Link in link area"})," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)(C,{className:"me-3",children:"Click me!"}),Object(O.jsx)(C,{primary:!0,className:"me-3",href:"https://google.com",target:"_blank",rel:"noopener noreferrer",children:"Open link"}),Object(O.jsx)(C,{silent:!0,className:"me-3",children:"Silent button"}),Object(O.jsx)(C,{silent:!0,shadow:!1,className:"me-3",children:"Silent button without shadow"}),Object(O.jsx)(C,{shadow:!1,className:"me-3",children:"Button without shadow"}),Object(O.jsx)(C,{noHover:!0,children:"Button with no hover for active state"})]}),Object(O.jsx)(E,{}),Object(O.jsxs)("div",{className:"p-3 my-3 body-bg-stronger neumorphism-shadow rounded-3",children:[Object(O.jsx)("h2",{children:"My card content"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(O.jsx)(S,{})]}),Object(O.jsx)(T,{}),Object(O.jsx)(B,{})]})}var D=s(42),_=s(43);function z(e){var t=e.className;return Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",clipRule:"evenodd",viewBox:"0 0 404 404",width:"1em",height:"1em",className:t,children:[Object(O.jsx)("g",{transform:"translate(-4867.44 -693.889)",children:Object(O.jsxs)("g",{transform:"matrix(.97588 0 0 .97635 4322.69 703.248)",children:[Object(O.jsx)("path",{fill:"none",d:"M558.205 -9.585H971.268V403.28000000000003H558.205z"}),Object(O.jsx)("clipPath",{id:"_clip1",children:Object(O.jsx)("path",{d:"M558.205 -9.585H971.268V403.28000000000003H558.205z"})}),Object(O.jsxs)("g",{clipPath:"url(#_clip1)",children:[Object(O.jsxs)("g",{transform:"matrix(1.02472 0 0 1.02423 558.205 -9.585)",children:[Object(O.jsx)("path",{fill:"#2ECC71",d:"M403.15 88.693C403.15 39.742 363.408 0 314.457 0H88.693C39.742 0 0 39.742 0 88.693v225.764c0 48.951 39.742 88.693 88.693 88.693h225.764c48.951 0 88.693-39.742 88.693-88.693V88.693z"}),Object(O.jsx)("clipPath",{id:"_clip2",children:Object(O.jsx)("path",{d:"M403.15 88.693C403.15 39.742 363.408 0 314.457 0H88.693C39.742 0 0 39.742 0 88.693v225.764c0 48.951 39.742 88.693 88.693 88.693h225.764c48.951 0 88.693-39.742 88.693-88.693V88.693z"})}),Object(O.jsx)("g",{clipPath:"url(#_clip2)",children:Object(O.jsx)("path",{fill:"url(#_Radial3)",d:"M-1 -1H1V1H-1z",transform:"matrix(-201.575 0 0 201.575 201.575 201.575)"})})]}),Object(O.jsx)("path",{fill:"#fff",fillOpacity:"0.8",fillRule:"nonzero",d:"M0-5.578l139.987-43.533-102.341 62.34 63.92 31.977 31.697-15.865 32.998-90.752-200.778 18.25-20.294 10.162L0-5.578zm-81.303-36.251l39.629-19.83c1.147-.558 2.355-.899 3.532-.992l218.129-19.861c5.454-.464 10.256 3.533 10.752 8.955a10.374 10.374 0 01-.558 4.276l-39.66 109.064c-.96 2.665-2.943 4.647-5.36 5.701l-39.164 19.582a9.873 9.873 0 01-8.892-.031L57.011 44.989 18.746 73.711a10.535 10.535 0 01-2.541 1.549c-5.019 2.138-10.845-.217-12.983-5.236l-28.319-66.09-56.206-28.102a9.87 9.87 0 01-4.43-13.262c.991-1.982 2.571-3.47 4.43-4.399",transform:"matrix(1.02472 0 0 1.02423 711.481 200.201)"})]})]})}),Object(O.jsx)("defs",{children:Object(O.jsxs)("radialGradient",{id:"_Radial3",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(-1 0 0 1 0 0)",gradientUnits:"userSpaceOnUse",children:[Object(O.jsx)("stop",{offset:"0",stopColor:"#1D1D1B",stopOpacity:"0.2"}),Object(O.jsx)("stop",{offset:"1",stopColor:"#C2C2C1",stopOpacity:"0.2"})]})})]})}function U(e){Object(y.a)(e);var t=Object(a.useState)([{content:"Hello, I just wanted to write something",author:"LGK",date:"20.06.2021 / 11:26",likes:2},{content:"Nother one",author:"HGT",date:"20.06.2021 / 12:26",likes:0}]),s=Object(o.a)(t,2),n=s[0],c=s[1],r=Object(a.useState)({content:"",author:"USR",date:(new Date).toDateString(),likes:0}),i=Object(o.a)(r,2),l=i[0],d=i[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("header",{className:"container mx-3",children:Object(O.jsxs)("h2",{className:"d-flex align-items-center",children:[Object(O.jsx)(z,{className:"me-1"})," Afflatus"]})}),Object(O.jsxs)("div",{className:"container mx-3",children:[Object(O.jsxs)("form",{className:"my-3 form-control body-bg-stronger neumorphism-shadow rounded-3",onSubmit:function(e){e.preventDefault();var t=Object(A.a)(n);t.push(l),c(t),d({content:"",author:"USR",date:(new Date).toDateString(),likes:0})},children:[Object(O.jsxs)("label",{className:"d-block",children:[Object(O.jsx)("div",{className:"mb-1 mx-3 mt-3",children:Object(O.jsx)("strong",{children:"New post"})}),Object(O.jsx)("textarea",{className:"form-control-input p-3 border-0 d-block w-100",placeholder:"What's going on?",value:l.content,onChange:function(e){var t=e.target;return d(Object(u.a)(Object(u.a)({},l),{},{content:t.value}))}})]}),Object(O.jsxs)("div",{className:"p-3 d-flex justify-content-between",children:[Object(O.jsx)(C,{title:"Upload image",silent:!0,type:"button",children:Object(O.jsx)(D.a,{})}),Object(O.jsxs)(C,{primary:!0,type:"submit",children:["Submit post as ",l.author]})]})]}),Object(A.a)(n).reverse().map((function(e,t){return Object(O.jsxs)("div",{className:Object(p.a)("px-3 py-4",{"border-bottom":t!==n.length-1}),children:[Object(O.jsxs)("header",{className:"d-flex justify-content-between",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"rounded-circle d-inline-flex align-items-center justify-content-center me-2",style:{width:"32px",height:"32px",backgroundColor:"#076d7f",color:"white"},children:e.author}),Object(O.jsx)("a",{href:"#",children:e.date})]}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)(C,{silent:!0,shadow:!1,className:"d-inline-flex align-items-center me-2",children:[Object(O.jsx)(_.a,{className:"me-1"})," ",e.likes]}),Object(O.jsx)(C,{shadow:!1,children:"Reply"})]})]}),Object(O.jsx)("div",{children:e.content})]},t)}))]})]})}var V=function(){return Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",clipRule:"evenodd",viewBox:"0 0 404 404",width:"1em",height:"1em",children:[Object(O.jsx)("g",{transform:"translate(-2733.37 -151.568)",children:Object(O.jsxs)("g",{transform:"translate(2238.48 151.568)",children:[Object(O.jsx)("path",{fill:"none",d:"M494.892 0H898.172V403.28H494.892z"}),Object(O.jsxs)("g",{transform:"translate(494.892)",children:[Object(O.jsx)("path",{fill:"url(#_Linear1)",d:"M403.23 88.693C403.23 39.742 363.488 0 314.537 0H88.773C39.822 0 .08 39.742.08 88.693v225.764c0 48.951 39.742 88.693 88.693 88.693h225.764c48.951 0 88.693-39.742 88.693-88.693V88.693z"}),Object(O.jsx)("clipPath",{id:"_clip2",children:Object(O.jsx)("path",{d:"M403.23 88.693C403.23 39.742 363.488 0 314.537 0H88.773C39.822 0 .08 39.742.08 88.693v225.764c0 48.951 39.742 88.693 88.693 88.693h225.764c48.951 0 88.693-39.742 88.693-88.693V88.693z"})}),Object(O.jsx)("g",{clipPath:"url(#_clip2)",children:Object(O.jsx)("path",{fill:"url(#_Radial3)",d:"M0 0.13H403.15V403.28H0z"})})]}),Object(O.jsx)("path",{fill:"#fff",d:"M3048.02 313.454c0-38.96-31.63-70.59-70.59-70.59h-79.41c-38.96 0-70.59 31.63-70.59 70.59v79.414c0 38.96 31.63 70.59 70.59 70.59h79.41c38.96 0 70.59-31.63 70.59-70.59v-79.414zm-16 0v79.414c0 30.129-24.46 54.59-54.59 54.59h-79.41c-30.13 0-54.59-24.461-54.59-54.59v-79.414c0-30.129 24.46-54.59 54.59-54.59h79.41c30.13 0 54.59 24.461 54.59 54.59z",transform:"matrix(.95197 0 0 .95197 -2100.11 -134.56)"})]})}),Object(O.jsxs)("defs",{children:[Object(O.jsxs)("linearGradient",{id:"_Linear1",x1:"0",x2:"1",y1:"0",y2:"0",gradientTransform:"translate(.08 201.575) scale(403.15)",gradientUnits:"userSpaceOnUse",children:[Object(O.jsx)("stop",{offset:"0",stopColor:"#A6B8E7"}),Object(O.jsx)("stop",{offset:"1",stopColor:"#DCA6E7"})]}),Object(O.jsxs)("radialGradient",{id:"_Radial3",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(201.57 0 0 -201.57 201.57 203.725)",gradientUnits:"userSpaceOnUse",children:[Object(O.jsx)("stop",{offset:"0",stopColor:"#1D1D1B",stopOpacity:"0.2"}),Object(O.jsx)("stop",{offset:"1",stopColor:"#C2C2C1",stopOpacity:"0.2"})]})]})]})};function I(e){var t=e.comp;return Object(O.jsxs)("article",{className:"mb-5",children:[Object(O.jsx)("h2",{className:"mt-2",children:t.displayName}),Object(O.jsx)("h3",{children:"Props"}),Object(O.jsxs)("table",{className:"table table-bordered",style:{backgroundColor:"var(--control-bg)"},children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Component"}),Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Type"}),Object(O.jsx)("th",{children:"Default value"})]})}),Object(O.jsx)("tbody",{children:t.props&&Object.keys(t.props).map((function(e){var s;return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[Object(O.jsx)("code",{style:{fontWeight:t.props[e].required?"bold":void 0},children:e}),t.props[e].required&&" (required)"]}),Object(O.jsx)("td",{children:t.props[e].description}),Object(O.jsx)("td",{children:t.props[e].tsType.raw||t.props[e].tsType.name}),Object(O.jsx)("td",{children:Object(O.jsx)("code",{children:null===(s=t.props[e].defaultValue)||void 0===s?void 0:s.value})})]},e)}))})]})]})}var W=s(21);function F(e){return Object(y.a)(e),Object(O.jsx)("div",{className:"container mx-3",children:W&&Object.values(W).map((function(e,t){return Object(O.jsx)(I,{comp:e},t)}))})}var P=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0];return t[1],Object(O.jsx)(g.a,{basename:"/blank",children:Object(O.jsxs)("div",{className:"App",style:{"--font-family-base":"".concat(s?'"Inter", ':"",'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif')},children:[Object(O.jsxs)("header",{className:"container mx-3 d-md-flex align-items-center justify-content-between py-4",children:[Object(O.jsxs)(g.b,{to:"/",className:"d-inline-flex align-items-center",style:{fontSize:"48px"},children:[Object(O.jsx)(V,{})," ",Object(O.jsx)("h6",{className:"ms-2 mb-0",children:"Blank"})]}),Object(O.jsxs)("nav",{className:"d-sm-flex align-items-center",children:[Object(O.jsxs)(f,{tag:g.c,exact:!0,to:"/",className:"align-items-center",children:[Object(O.jsx)(i.a,{className:"me-1"})," ",b("Home")]}),Object(O.jsxs)(f,{tag:g.c,to:"/components",className:"align-items-center",children:[Object(O.jsx)(l.a,{className:"me-1"})," ",b("Components")]}),Object(O.jsxs)(f,{tag:g.c,to:"/posts",className:"align-items-center",children:[Object(O.jsx)(d.a,{className:"me-1"})," ",b("Posts")]}),Object(O.jsx)(f,{href:"https://bruegmann.github.io/blue-react",target:"_blank",rel:"noopener noreferrer",children:"Blue React"}),Object(O.jsx)(f,{onClick:function(){return alert("Hi!")},className:"me-1",children:"Click me !"}),Object(O.jsx)(S,{})]})]}),Object(O.jsx)("div",{className:"mx-3 mb-3 border-top"}),Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{path:"/posts",children:Object(O.jsx)(U,{})}),Object(O.jsx)(v.a,{path:"/components",children:Object(O.jsx)(F,{})}),Object(O.jsx)(v.a,{exact:!0,path:"/",children:Object(O.jsx)(R,{})})]}),Object(O.jsx)("footer",{className:"text-center py-3",children:Object(O.jsxs)("a",{href:"https://github.com/bruegmann/blank",target:"_blank",rel:"noopener noreferrer",className:"d-inline-flex align-items-center",children:[Object(O.jsx)(m.a,{className:"me-1"})," Code on GitHub"]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.fb388365.chunk.js.map