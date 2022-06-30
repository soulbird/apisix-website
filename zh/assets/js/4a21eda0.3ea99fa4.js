"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98543],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=o,f=m["".concat(u,".").concat(h)]||m[h]||s[h]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1011:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),i=["components"],c={title:"\u57fa\u4e8e TiDB \u7684 API \u7f51\u5173\u9ad8\u53ef\u7528\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",authors:[{name:"\u5f20\u8d85",title:"Author",url:"https://github.com/tokers",image_url:"https://avatars.githubusercontent.com/u/10428333?v=4"},{name:"\u9976\u96c5\u60e0",title:"Technical Writer",url:"https://github.com/EstelleRao",image_url:"https://github.com/EstelleRao.png"}],keywords:["API \u7f51\u5173","APISIX","TiDB","\u9ad8\u53ef\u7528","TiDB Hackathon"],description:"\u5728 TiDB Hackathon 2021 \u7684\u6bd4\u8d5b\u4e2d\uff0cAPISIX \u53c2\u8d5b\u56e2\u961f\u4ee5\u56db\u4eba\u7ec4\u961f\u65b9\u5f0f\u5448\u73b0\u4e86 TiDB \u4e0e Apache APISIX \u5bf9\u63a5\u5b9e\u73b0\u901a\u7528\u914d\u7f6e\u4e2d\u5fc3\u7684\u80fd\u529b\u3002\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u5e26\u6765\u8be5\u9879\u76ee\u80cc\u540e\u7684\u4e00\u4e9b\u6545\u4e8b\u4ee5\u53ca\u672a\u6765\u5c55\u671b\u3002",tags:["Technology"]},u=void 0,l={permalink:"/zh/blog/2022/04/22/apisix-with-tidb-practice",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/04/22/apisix-with-tidb-practice.md",title:"\u57fa\u4e8e TiDB \u7684 API \u7f51\u5173\u9ad8\u53ef\u7528\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",description:"\u5728 TiDB Hackathon 2021 \u7684\u6bd4\u8d5b\u4e2d\uff0cAPISIX \u53c2\u8d5b\u56e2\u961f\u4ee5\u56db\u4eba\u7ec4\u961f\u65b9\u5f0f\u5448\u73b0\u4e86 TiDB \u4e0e Apache APISIX \u5bf9\u63a5\u5b9e\u73b0\u901a\u7528\u914d\u7f6e\u4e2d\u5fc3\u7684\u80fd\u529b\u3002\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u5e26\u6765\u8be5\u9879\u76ee\u80cc\u540e\u7684\u4e00\u4e9b\u6545\u4e8b\u4ee5\u53ca\u672a\u6765\u5c55\u671b\u3002",date:"2022-04-22T00:00:00.000Z",formattedDate:"2022\u5e744\u670822\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:16.17,truncated:!0,authors:[{name:"\u5f20\u8d85",title:"Author",url:"https://github.com/tokers",image_url:"https://avatars.githubusercontent.com/u/10428333?v=4",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"},{name:"\u9976\u96c5\u60e0",title:"Technical Writer",url:"https://github.com/EstelleRao",image_url:"https://github.com/EstelleRao.png",imageURL:"https://github.com/EstelleRao.png"}],prevItem:{title:"\u741a\u81f4\u8fdc\uff1a95 \u540e Apache Member \u7684\u6210\u957f\u4e4b\u8def",permalink:"/zh/blog/2022/04/29/interview-juzhiyuan-apache-member"},nextItem:{title:"APISIX jwt-auth \u63d2\u4ef6\u5b58\u5728\u9519\u8bef\u54cd\u5e94\u4e2d\u6cc4\u9732\u4fe1\u606f\u7684\u98ce\u9669\u516c\u544a\uff08CVE-2022-29266\uff09",permalink:"/zh/blog/2022/04/20/cve-2022-29266"}},p={authorsImageUrls:[void 0,void 0]},s=[],m={toc:s};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 TiDB Hackathon 2021 \u7684\u6bd4\u8d5b\u4e2d\uff0cAPISIX \u53c2\u8d5b\u56e2\u961f\u4ee5\u56db\u4eba\u7ec4\u961f\u65b9\u5f0f\uff08\u961f\u957f\uff1a\u5f20\u8d85\uff0c\u961f\u5458\uff1a\u767d\u6cfd\u5e73\u3001\u5c60\u6b63\u677e\u3001\u9648\u5a67\u6657\uff09\u5448\u73b0\u4e86 TiDB \u4e0e Apache APISIX \u5bf9\u63a5\u5b9e\u73b0\u901a\u7528\u914d\u7f6e\u4e2d\u5fc3\u7684\u80fd\u529b\u3002\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u5e26\u6765\u8be5\u9879\u76ee\u80cc\u540e\u7684\u4e00\u4e9b\u6545\u4e8b\u4ee5\u53ca\u672a\u6765\u5c55\u671b\uff0c\u5982\u679c\u60a8\u5bf9\u8be5\u9879\u76ee\u611f\u5174\u8da3\uff0c\u4e5f\u6b22\u8fce\u968f\u65f6\u53c2\u4e0e\u5230\u9879\u76ee\u4e2d\u6765\u3002")))}h.isMDXComponent=!0}}]);