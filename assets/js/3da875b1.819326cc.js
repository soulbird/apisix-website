"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73394],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,g=d["".concat(p,".").concat(f)]||d[f]||l[f]||c;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6104:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var n=r(25773),i=r(30808),c=(r(27378),r(35318)),o=["components"],a={title:"Script"},p=void 0,u={unversionedId:"architecture-design/script",id:"version-2.13/architecture-design/script",isDocsHomePage:!1,title:"Script",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/architecture-design/script.md",sourceDirName:"architecture-design",slug:"/architecture-design/script",permalink:"/docs/apisix/2.13/architecture-design/script",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"Script"},sidebar:"version-2.13/docs",previous:{title:"Plugin",permalink:"/docs/apisix/2.13/architecture-design/plugin"},next:{title:"Service",permalink:"/docs/apisix/2.13/architecture-design/service"}},s=[],l={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Scripts lets you write arbitrary Lua code or directly call existing plugins and execute them during the HTTP request/response lifecycle."),(0,c.kt)("p",null,"A Script configuration can be directly bound to a ",(0,c.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/architecture-design/route"},"Route"),"."),(0,c.kt)("p",null,"Scripts and ",(0,c.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/architecture-design/plugin"},"Plugins")," are mutually exclusive, and a Script is executed before a Plugin. This means that after configuring a Script, the Plugin configured on the Route will ",(0,c.kt)("strong",{parentName:"p"},"not")," be executed."),(0,c.kt)("p",null,"Scripts also have a concept of execution phase which supports the ",(0,c.kt)("inlineCode",{parentName:"p"},"access"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"header_filter"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"body_filter")," and the ",(0,c.kt)("inlineCode",{parentName:"p"},"log")," phase. The corresponding phase will be executed automatically by the system in the Script."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n}\n')))}d.isMDXComponent=!0}}]);