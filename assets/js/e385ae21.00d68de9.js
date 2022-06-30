"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43637],{35318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10864:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(25773),i=t(30808),o=(t(27378),t(35318)),a=["components"],c={title:"Service"},s=void 0,l={unversionedId:"terminology/service",id:"version-2.14/terminology/service",isDocsHomePage:!1,title:"Service",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.14/terminology/service.md",sourceDirName:"terminology",slug:"/terminology/service",permalink:"/docs/apisix/terminology/service",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"Service"},sidebar:"version-2.14/docs",previous:{title:"Script",permalink:"/docs/apisix/terminology/script"},next:{title:"Upstream",permalink:"/docs/apisix/terminology/upstream"}},p=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"A Service is an abstraction of an API (which can also be understood as a set of ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/route"},"Route")," abstractions). It usually corresponds to an upstream service abstraction."),(0,o.kt)("p",null,"The relationship between Routes and a Service is usually N:1 as shown in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/service-example.png",alt:"service-example"})),(0,o.kt)("p",null,"As shown, different Routes could be bound to the same Service. This reduces redundancy as these bounded Routes will have the same ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/upstream"},"Upstream")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin"},"Plugin")," configurations."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The following example creates a Service that enables the current-limit Plugin and then binds it to the Routes with the ids ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"101"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# create new Service\n$ curl http://127.0.0.1:9080/apisix/admin/services/200 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\n# create new Route and reference the service by id `200`\ncurl http://127.0.0.1:9080/apisix/admin/routes/100 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "service_id": "200"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/101 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/foo/index.html",\n    "service_id": "200"\n}\'\n')),(0,o.kt)("p",null,"We can also specify different Plugins or Upstream for the Routes than the ones defined in the Service. The example below creates a Route with a limit-count Plugin. This Route will continue to use the other configurations defined in the Service (here, the Upstream configuration)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/102 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/bar/index.html",\n    "id": "102",\n    "service_id": "200",\n    "plugins": {\n        "limit-count": {\n            "count": 2000,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When a Route and a Service enable the same Plugin, the one defined in the Route is given the higher priority."))))}d.isMDXComponent=!0}}]);