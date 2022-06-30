"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86267],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=l(r),m=o,h=g["".concat(u,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},58302:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],i={title:"APISIX \u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406",authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","gRPC","gRPC-Web","Ecology"],description:"Apache APISIX \u5df2\u7ecf\u652f\u6301\u4e86 gRPC \u534f\u8bae\u4ee3\u7406\uff0c\u4ee5\u53ca\u901a\u8fc7 gRPC Transcode \u63d2\u4ef6\u652f\u6301\u4e86 HTTP(s) \u5230 gRPC Server \u7684\u4ee3\u7406\u3002\u901a\u8fc7\u793e\u533a\u7684\u79ef\u6781\u8ba8\u8bba\u548c\u8d21\u732e\uff0cApache APISIX \u53c8\u62d3\u5bbd\u4e86 gRPC \u751f\u6001\u7684\u652f\u6301\u8303\u56f4\uff1a\u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406\u3002",tags:["Technology","Ecosystem"]},u=void 0,l={permalink:"/zh/blog/2022/01/25/apisix-grpc-web-integration",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/25/apisix-grpc-web-integration.md",title:"APISIX \u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406",description:"Apache APISIX \u5df2\u7ecf\u652f\u6301\u4e86 gRPC \u534f\u8bae\u4ee3\u7406\uff0c\u4ee5\u53ca\u901a\u8fc7 gRPC Transcode \u63d2\u4ef6\u652f\u6301\u4e86 HTTP(s) \u5230 gRPC Server \u7684\u4ee3\u7406\u3002\u901a\u8fc7\u793e\u533a\u7684\u79ef\u6781\u8ba8\u8bba\u548c\u8d21\u732e\uff0cApache APISIX \u53c8\u62d3\u5bbd\u4e86 gRPC \u751f\u6001\u7684\u652f\u6301\u8303\u56f4\uff1a\u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406\u3002",date:"2022-01-25T00:00:00.000Z",formattedDate:"2022\u5e741\u670825\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:7.89,truncated:!0,authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"\u65b0\u63d2\u4ef6 forward-auth \u5df2\u4e0a\u7ebf\uff0c\u8ba4\u8bc1\u529f\u80fd\u53c8\u591a\u4e00\u9879\u9009\u62e9",permalink:"/zh/blog/2022/01/26/apisix-integrate-forward-auth-plugin"},nextItem:{title:"Apache APISIX 2.12.0 \u7248\u672c\u53d1\u5e03\uff0c\u65b0\u529f\u80fd\u66f4\u9002\u914d\u65b0\u4e00\u5e74\uff01",permalink:"/zh/blog/2022/01/25/release-apache-apisix-2.12"}},s={authorsImageUrls:[void 0,void 0]},p=[],g={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX \u5df2\u7ecf\u652f\u6301\u4e86 gRPC \u534f\u8bae\u4ee3\u7406\uff0c\u4ee5\u53ca\u901a\u8fc7 gRPC Transcode \u63d2\u4ef6\u652f\u6301\u4e86 HTTP(s) \u5230 gRPC Server \u7684\u4ee3\u7406\u3002\u901a\u8fc7\u793e\u533a\u7684\u79ef\u6781\u8ba8\u8bba\u548c\u8d21\u732e\uff0cApache APISIX \u53c8\u62d3\u5bbd\u4e86 gRPC \u751f\u6001\u7684\u652f\u6301\u8303\u56f4\uff1a\u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406\u3002")))}m.isMDXComponent=!0}}]);