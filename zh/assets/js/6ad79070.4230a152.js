"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32684],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,g=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86967:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],u={title:"\u5dee\u4e4b\u6beb\u5398\uff1aetcd 3 \u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff1f",slug:"2021/06/30/etcd3-support-http-access-perfectly",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Apache APISIX","etcd","HTTP","gRPC"],Description:"\u4ece\u53bb\u5e74 10 \u6708\u53d1\u5e03 Apache APISIX 2.0 \u7248\u672c\u4ee5\u6765\uff0c\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u4e86 8 \u4e2a\u6708\u3002\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86 etcd \u7684 HTTP API \u7684\u4e00\u4e9b\u8ddf gRPC API \u4ea4\u4e92\u7684\u95ee\u9898\u3002\u4e8b\u5b9e\u4e0a\uff0c\u62e5\u6709 gRPC-gateway \u5e76\u4e0d\u610f\u5473\u7740\u80fd\u591f\u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff0c\u8fd9\u91cc\u8fd8\u662f\u6709\u4e9b\u7ec6\u5fae\u7684\u5dee\u522b\u3002",tags:["Technology"]},i=void 0,p={permalink:"/zh/blog/2021/06/30/etcd3-support-http-access-perfectly",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/06/30/etcd3-support-HTTP-access-perfectly.md",title:"\u5dee\u4e4b\u6beb\u5398\uff1aetcd 3 \u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff1f",description:"\u4ece\u53bb\u5e74 10 \u6708\u53d1\u5e03 Apache APISIX 2.0 \u7248\u672c\u4ee5\u6765\uff0c\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u4e86 8 \u4e2a\u6708\u3002\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86 etcd \u7684 HTTP API \u7684\u4e00\u4e9b\u8ddf gRPC API \u4ea4\u4e92\u7684\u95ee\u9898\u3002\u4e8b\u5b9e\u4e0a\uff0c\u62e5\u6709 gRPC-gateway \u5e76\u4e0d\u610f\u5473\u7740\u80fd\u591f\u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff0c\u8fd9\u91cc\u8fd8\u662f\u6709\u4e9b\u7ec6\u5fae\u7684\u5dee\u522b\u3002",date:"2021-06-30T00:00:00.000Z",formattedDate:"2021\u5e746\u670830\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:6.855,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Apache APISIX has over 200 contributors in GitHub main repo! ",permalink:"/zh/blog/2021/07/06/celebrate-200-contributors"},nextItem:{title:"Apache APISIX 2.7.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/06/29/release-apache-apisix-2.7"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ece\u53bb\u5e74 10 \u6708\u53d1\u5e03 Apache APISIX 2.0 \u7248\u672c\u4ee5\u6765\uff0c\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u4e86 8 \u4e2a\u6708\u3002\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86 etcd \u7684 HTTP API \u7684\u4e00\u4e9b\u8ddf gRPC API \u4ea4\u4e92\u7684\u95ee\u9898\u3002\u4e8b\u5b9e\u4e0a\uff0c\u62e5\u6709 gRPC-gateway \u5e76\u4e0d\u610f\u5473\u7740\u80fd\u591f\u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff0c\u8fd9\u91cc\u8fd8\u662f\u6709\u4e9b\u7ec6\u5fae\u7684\u5dee\u522b\u3002")))}m.isMDXComponent=!0}}]);