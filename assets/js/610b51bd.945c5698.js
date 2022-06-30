"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9923],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=l(n),h=a,m=g["".concat(c,".").concat(h)]||g[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],u={title:"Integrating Splunk HTTP Event Collector with API Gateway",authors:[{name:"Jinchao Shuai",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","Splunk","Observability","API Gateway"],description:"This article explains how to configure and use the Splunk HEC service in Cloud-native API Gateway Apache APISIX.",tags:["Technology","Ecosystem","Logging"]},c=void 0,l={permalink:"/blog/2022/02/10/splunk-apisix-integration",source:"@site/blog/2022/02/10/splunk-apisix-integration.md",title:"Integrating Splunk HTTP Event Collector with API Gateway",description:"This article explains how to configure and use the Splunk HEC service in Cloud-native API Gateway Apache APISIX.",date:"2022-02-10T00:00:00.000Z",formattedDate:"February 10, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Logging",permalink:"/blog/tags/logging"}],readingTime:5.03,truncated:!0,authors:[{name:"Jinchao Shuai",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"Apache APISIX Vulnerability for Rewriting X-REAL-IP Header (CVE-2022-24112)",permalink:"/blog/2022/02/11/cve-2022-24112"},nextItem:{title:"forward-auth Plugin for Authentication Function",permalink:"/blog/2022/01/26/apisix-integrate-forward-auth-plugin"}},s={authorsImageUrls:[void 0,void 0]},p=[],g={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article explains how to configure and use the Splunk HEC service in Apache APISIX.")))}h.isMDXComponent=!0}}]);