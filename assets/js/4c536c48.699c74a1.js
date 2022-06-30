"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89974],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),h=i,f=m["".concat(u,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40370:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(25773),i=r(30808),a=(r(27378),r(35318)),o=["components"],c={title:"Architecture evolution of investment platforms with API gateway",authors:[{name:"Xueqiu Basic Component Team",title:"Author"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["API Gateway","Apache APISIX","ZooKeeper","Authentication","Investment","Observability"],description:"This article is compiled from the sharing at [Apache APISIX Summit ASIA 2022](https://apisix-summit.org/). It introduces how Xueqiu uses APISIX to achieve more flexible services in adjusting the active-active architecture.",tags:["User Case"]},u=void 0,s={permalink:"/blog/2022/06/14/xueqiu-with-apache-apisix",source:"@site/blog/2022/06/14/xueqiu-with-apache-apisix.md",title:"Architecture evolution of investment platforms with API gateway",description:"This article is compiled from the sharing at [Apache APISIX Summit ASIA 2022](https://apisix-summit.org/). It introduces how Xueqiu uses APISIX to achieve more flexible services in adjusting the active-active architecture.",date:"2022-06-14T00:00:00.000Z",formattedDate:"June 14, 2022",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:9.36,truncated:!0,authors:[{name:"Xueqiu Basic Component Team",title:"Author"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Implementation of canary release solution based on Apache APISIX",permalink:"/blog/2022/06/14/how-mse-supports-canary-release-with-apache-apisix"},nextItem:{title:"Installation and performance testing of API Gateway Apache APISIX on AWS Graviton3",permalink:"/blog/2022/06/07/installation-performance-test-of-apigateway-apisix-on-aws-graviton3"}},l={authorsImageUrls:[void 0,void 0]},p=[],m={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article is compiled from the sharing at ",(0,a.kt)("a",{parentName:"p",href:"https://apisix-summit.org/"},"Apache APISIX Summit ASIA 2022"),". It introduces how Xueqiu uses APISIX to achieve more flexible services in adjusting the active-active architecture.")))}h.isMDXComponent=!0}}]);