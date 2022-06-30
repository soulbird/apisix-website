"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59749],{35318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(r),b=o,h=m["".concat(s,".").concat(b)]||m[b]||p[b]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83299:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),i=["components"],u={title:"API Observability with APISIX Plugins",keywords:["Apache APISIX","API Gateway","Observability"],authors:[{name:"Boburmirzo",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607?v=4"}],description:"In this blog post, we can leverage the power of some Apache APISIX Observability Plugins and take a look at how to set up these plugins, how to use them to understand API behavior, and later solve problems that impact our users."},s=void 0,l={permalink:"/zh/blog/2022/04/17/api-observability",source:"@site/blog/2022/04/17/api-observability.md",title:"API Observability with APISIX Plugins",description:"In this blog post, we can leverage the power of some Apache APISIX Observability Plugins and take a look at how to set up these plugins, how to use them to understand API behavior, and later solve problems that impact our users.",date:"2022-04-17T00:00:00.000Z",formattedDate:"2022\u5e744\u670817\u65e5",tags:[],readingTime:6.87,truncated:!0,authors:[{name:"Boburmirzo",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607?v=4",imageURL:"https://avatars.githubusercontent.com/u/14247607?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c4.1-4.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2022/04/20/weekly-report-0420"},nextItem:{title:"Apache APISIX Summit ASIA 2022 \u91cd\u78c5\u6765\u88ad",permalink:"/zh/blog/2022/04/12/apisix-summit-asia-2022"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this blog post, we can leverage the power of some Apache APISIX Observability Plugins and take a look at how to set up these plugins, how to use them to understand API behavior, and later solve problems that impact APISIX's users.")))}b.isMDXComponent=!0}}]);