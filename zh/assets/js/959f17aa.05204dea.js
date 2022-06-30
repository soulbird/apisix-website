"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[430],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),b=o,m=f["".concat(u,".").concat(b)]||f[b]||s[b]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83024:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),i=["components"],c={title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",slug:"2021/07/06/the-road-to-customization-of-sina-weibo-api-gateway-based-on-apache-apisix",author:"\u8042\u6c38",keywords:["Apache APISIX","\u65b0\u6d6a\u5fae\u535a","Weibo","API Gateway"],description:"\u5fae\u535a\u4e4b\u524d\u7684 HTTP API \u7f51\u5173\u57fa\u4e8e NGINX \u642d\u5efa\uff0c\u6240\u6709\u8def\u7531\u89c4\u5219\u5b58\u653e\u5728 NGINX conf \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u95ee\u9898\uff1a\u5347\u7ea7\u6b65\u9aa4\u957f\uff0c\u5bf9\u670d\u52a1\u589e\u3001\u5220\u3001\u6539\u6216\u8ddf\u8e2a\u95ee\u9898\u65f6\uff0c\u4e0d\u591f\u7075\u6d3b\u4e14\u96be\u4ee5\u6392\u67e5\u95ee\u9898\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u9884\u671f\u3001\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\uff0c\u501f\u52a9\u5176\u52a8\u6001\u3001\u9ad8\u6548\u3001\u7a33\u5b9a\u7b49\u7279\u6027\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u7684\u5feb\u901f\u54cd\u5e94\u8981\u6c42\u3002",tags:["User Case"]},u=void 0,p={permalink:"/zh/blog/2021/07/06/the-road-to-customization-of-sina-weibo-api-gateway-based-on-apache-apisix",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX.md",title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",description:"\u5fae\u535a\u4e4b\u524d\u7684 HTTP API \u7f51\u5173\u57fa\u4e8e NGINX \u642d\u5efa\uff0c\u6240\u6709\u8def\u7531\u89c4\u5219\u5b58\u653e\u5728 NGINX conf \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u95ee\u9898\uff1a\u5347\u7ea7\u6b65\u9aa4\u957f\uff0c\u5bf9\u670d\u52a1\u589e\u3001\u5220\u3001\u6539\u6216\u8ddf\u8e2a\u95ee\u9898\u65f6\uff0c\u4e0d\u591f\u7075\u6d3b\u4e14\u96be\u4ee5\u6392\u67e5\u95ee\u9898\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u9884\u671f\u3001\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\uff0c\u501f\u52a9\u5176\u52a8\u6001\u3001\u9ad8\u6548\u3001\u7a33\u5b9a\u7b49\u7279\u6027\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u7684\u5feb\u901f\u54cd\u5e94\u8981\u6c42\u3002",date:"2021-07-14T00:00:00.000Z",formattedDate:"2021\u5e747\u670814\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:18.43,truncated:!0,authors:[{name:"\u8042\u6c38"}],prevItem:{title:"\u76f4\u64ad\u9884\u544a\uff5cApache APISIX x Kubernetes",permalink:"/zh/blog/2021/07/21/apache-apisix-kubernetes"},nextItem:{title:"Apache APISIX has over 200 contributors in GitHub main repo! ",permalink:"/zh/blog/2021/07/06/celebrate-200-contributors"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65b0\u6d6a\u5fae\u535a\u4e4b\u524d\u7684 HTTP API \u7f51\u5173\u57fa\u4e8e NGINX \u642d\u5efa\uff0c\u6240\u6709\u8def\u7531\u89c4\u5219\u5b58\u653e\u5728 NGINX conf \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u95ee\u9898\uff1a\u5347\u7ea7\u6b65\u9aa4\u957f\uff0c\u5bf9\u670d\u52a1\u589e\u3001\u5220\u3001\u6539\u6216\u8ddf\u8e2a\u95ee\u9898\u65f6\uff0c\u4e0d\u591f\u7075\u6d3b\u4e14\u96be\u4ee5\u6392\u67e5\u95ee\u9898\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u9884\u671f\u3001\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\uff0c\u501f\u52a9\u5176\u52a8\u6001\u3001\u9ad8\u6548\u3001\u7a33\u5b9a\u7b49\u7279\u6027\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u7684\u5feb\u901f\u54cd\u5e94\u8981\u6c42\u3002")))}b.isMDXComponent=!0}}]);