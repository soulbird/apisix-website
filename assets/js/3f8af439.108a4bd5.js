"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34185],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=u(r),f=o,m=h["".concat(s,".").concat(f)]||h[f]||l[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},90093:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),i=["components"],c={title:"Use GraphQL with API Gateway Apache APISIX",authors:[{name:"JohnChever",title:"Author",url:"https://github.com/Chever-John",image_url:"https://avatars.githubusercontent.com/u/43690894?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","GraphQL","Ecosystem"],description:"This article introduces the features of Apache APISIX and GraphQL, and how to use the API gateway Apache APISIX to proxy GraphQL requests, and proposes solutions to solve the pain points of practical scenarios.",tags:["Technology","Ecosystem"]},s=void 0,u={permalink:"/blog/2022/03/02/apisix-integration-graphql-plugin",source:"@site/blog/2022/03/02/apisix-integration-graphql-plugin.md",title:"Use GraphQL with API Gateway Apache APISIX",description:"This article introduces the features of Apache APISIX and GraphQL, and how to use the API gateway Apache APISIX to proxy GraphQL requests, and proposes solutions to solve the pain points of practical scenarios.",date:"2022-03-02T00:00:00.000Z",formattedDate:"March 2, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:8.365,truncated:!0,authors:[{name:"JohnChever",title:"Author",url:"https://github.com/Chever-John",image_url:"https://avatars.githubusercontent.com/u/43690894?v=4",imageURL:"https://avatars.githubusercontent.com/u/43690894?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"Biweekly Report\uff5cExplore the week of Feb 15 - Feb 28",permalink:"/blog/2022/03/03/weekly-report-0228"},nextItem:{title:"Implement Traffic Governance in Internet Insurance with APISIX",permalink:"/blog/2022/03/02/zhongan-usercase-with-apache-apisix"}},p={authorsImageUrls:[void 0,void 0]},l=[],h={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article introduces the features of Apache APISIX and GraphQL, and how to use the API gateway Apache APISIX to proxy GraphQL requests, and proposes solutions to solve the pain points of practical scenarios.")))}f.isMDXComponent=!0}}]);