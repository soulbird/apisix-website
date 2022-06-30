"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58952],{35318:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var r=n(27378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),h=l(n),g=o,m=h["".concat(c,".").concat(g)]||h[g]||s[g]||a;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=h;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47282:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),i=["components"],u={title:"Apache APISIX \u7ed3\u5408 Authing \u5b9e\u73b0\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7ba1\u7406",authors:[{name:"\u6731\u6b23\u6b23",title:"Author",url:"https://github.com/starsz",image_url:"https://avatars.githubusercontent.com/u/25628854?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","Authing","OpenID","Authentication","\u63d2\u4ef6"],description:"\u672c\u6587\u4e3a\u5927\u5bb6\u63cf\u8ff0\u4e86 Apache APISIX \u548c Authing \u5bf9\u63a5\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u5927\u5bb6\u5bf9\u4e8e\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Authing \u6709\u4e86\u66f4\u6e05\u6670\u7684\u7406\u89e3\u3002",tags:["Technology","Authentication"]},c=void 0,l={permalink:"/zh/blog/2022/01/04/authing",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/04/authing.md",title:"Apache APISIX \u7ed3\u5408 Authing \u5b9e\u73b0\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7ba1\u7406",description:"\u672c\u6587\u4e3a\u5927\u5bb6\u63cf\u8ff0\u4e86 Apache APISIX \u548c Authing \u5bf9\u63a5\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u5927\u5bb6\u5bf9\u4e8e\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Authing \u6709\u4e86\u66f4\u6e05\u6670\u7684\u7406\u89e3\u3002",date:"2022-01-04T00:00:00.000Z",formattedDate:"2022\u5e741\u67084\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Authentication",permalink:"/zh/blog/tags/authentication"}],readingTime:12.62,truncated:!0,authors:[{name:"\u6731\u6b23\u6b23",title:"Author",url:"https://github.com/starsz",image_url:"https://avatars.githubusercontent.com/u/25628854?v=4",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff0812.16-12.31\uff09",permalink:"/zh/blog/2022/01/05/weekly-report-1231"},nextItem:{title:"\u4f7f\u7528 Apache APISIX \u4ee3\u7406 gRPC \u670d\u52a1",permalink:"/zh/blog/2021/12/30/apisix-proxy-grpc-service"}},p={authorsImageUrls:[void 0,void 0]},s=[],h={toc:s};function g(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u5927\u5bb6\u63cf\u8ff0\u4e86 Apache APISIX \u548c Authing \u5bf9\u63a5\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u5927\u5bb6\u4f1a\u5bf9\u4e8e\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Authing \u6709\u66f4\u6e05\u6670\u7684\u7406\u89e3\u3002")))}g.isMDXComponent=!0}}]);