"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63523],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22562:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],i={title:"APISIX \u5728\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u7684\u5e94\u7528\u5b9e\u8df5",author:"\u6234\u8bfa\u749f",keywords:["Apache APISIX","\u6709\u8d5e","\u5fae\u670d\u52a1\u6cbb\u7406","\u4e91\u539f\u751f"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u5b9e\u4f8b\u3002",tags:["User Case"]},u=void 0,l={permalink:"/zh/blog/2021/09/14/youzan",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/09/14/youzan.md",title:"APISIX \u5728\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u7684\u5e94\u7528\u5b9e\u8df5",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u5b9e\u4f8b\u3002",date:"2021-09-14T00:00:00.000Z",formattedDate:"2021\u5e749\u670814\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:11.855,truncated:!0,authors:[{name:"\u6234\u8bfa\u749f"}],prevItem:{title:"\u793e\u533a\u5468\u62a5\uff5c\u793e\u533a\u6301\u7eed\u6d3b\u8dc3\uff0c\u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2021/09/15/weekly-report"},nextItem:{title:"APISIX \u5728\u79fb\u52a8\u4e91\u516c\u53f8\u7684\u5e94\u7528\u5b9e\u8df5",permalink:"/zh/blog/2021/09/13/china-mobile-cloud-usercase"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u5b9e\u4f8b\u3002")))}m.isMDXComponent=!0}}]);