(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{385:function(e,t,n){__NEXT_REGISTER_PAGE("/blog.html",function(){return e.exports=n(446),{page:e.exports.default}})},446:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),o=n(0),c=n.n(o),l=n(7),i=n(92),m=n(33),u=n(158),s=n(160),p=n(161),f=n(162),b=n(156),y=n(154),d=n(163),E=n(155),g=n(159),h=n(157),w=n(153);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function j(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=[u.metadata,s.metadata,p.metadata,f.metadata,E.metadata,d.metadata,y.metadata,b.metadata,g.metadata,h.metadata,w.metadata].sort(function(e,t){return t.publishedDay-e.publishedDay}),N=k.reduce(function(e,t){var n=t.publishedDay.getFullYear();return e[n]||(e[n]=[]),e[n].push(t),e},{}),T=Object.keys(N).map(Number).sort(function(e,t){return t-e}),C=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=j(this,A(t).call(this,e))).articlesMetadata=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){O(e,t,n[t])})}return e}({},N),n.years=_(T),n}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this;return c.a.createElement(l.a,null,c.a.createElement("h1",{className:"mv0 tc"},"Blog"),this.years.map(function(t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("h3",{className:"black-50 f4 f3-ns mt4"},t),e.articlesMetadata[t].map(function(e){return c.a.createElement("div",{className:"mt4",key:e.title},c.a.createElement(r.a,{href:e.relativeUrl,passHref:!0},c.a.createElement("a",{href:"#!",className:"black-alternative bg-animate br2 db bg-white hover-bg-washed-yellow no-underline overflow-hidden"},e.coverUrl&&c.a.createElement("img",{src:e.coverUrl,alt:e.coverAlt,className:"v-btm"}),c.a.createElement("div",{className:"".concat(e.coverUrl?"bb bl br":"ba"," b--black-10 bw1 pa3")},c.a.createElement("h2",{className:"f4 f3-ns mb3 mt0"},e.title),c.a.createElement("p",{className:"black-alternative-light f6 mb0 mt3"},c.a.createElement("span",null,"Por "),c.a.createElement("strong",null,Object(i.a)(e.authors)),c.a.createElement("span",null,". Publicado el "),c.a.createElement(m.a,{date:e.publishedDay}),c.a.createElement("span",null,".")),c.a.createElement("p",{className:"mv3"},e.description)))))}))}))}}])&&P(n.prototype,a),u&&P(n,u),t}(),R=n(4),I=n.n(R),D=n(5),U=n.n(D),G=I()().publicRuntimeConfig,L={description:"En este blog compartimos información relevante para la comunidad.",title:"Blog - ".concat(G.REACT_APP_TITLE),url:"".concat(G.REACT_APP_URL,"blog.html")};t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(U.a,null,c.a.createElement("title",null,L.title),c.a.createElement("meta",{name:"description",content:L.description}),c.a.createElement("meta",{property:"og:url",content:L.url}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"og:title",content:L.title}),c.a.createElement("meta",{property:"og:description",content:L.description}),c.a.createElement("meta",{property:"og:image",content:G.REACT_APP_SOCIAL_IMAGE}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.a.createElement("meta",{name:"twitter:site",content:"@meetupjs_ar"}),c.a.createElement("meta",{name:"twitter:creator",content:"@meetupjs_ar"}),c.a.createElement("meta",{name:"twitter:title",content:L.title}),c.a.createElement("meta",{name:"twitter:description",content:L.description}),c.a.createElement("meta",{name:"twitter:image",content:G.REACT_APP_SOCIAL_IMAGE})),c.a.createElement(C,null))}}},[[385,1,0]]]);