"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41662],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),y=a,m=f["".concat(u,".").concat(y)]||f[y]||s[y]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],c={title:"Apache APISIX not affected by NGINX CVE-2021-23017",slug:"2021/06/07/apache-apisix-not-affected-by-nginx-cve-2021-23017",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["APISIX","Apache APISIX","Security"],description:"On May 26, NGINX issued a security announcement that fixed a DNS resolver vulnerability (CVE -2021-23017) in the NGINX resolver.",tags:["Security"]},u=void 0,p={permalink:"/zh/blog/2021/06/07/apache-apisix-not-affected-by-nginx-cve-2021-23017",source:"@site/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017.md",title:"Apache APISIX not affected by NGINX CVE-2021-23017",description:"On May 26, NGINX issued a security announcement that fixed a DNS resolver vulnerability (CVE -2021-23017) in the NGINX resolver.",date:"2021-06-07T00:00:00.000Z",formattedDate:"2021\u5e746\u67087\u65e5",tags:[{label:"Security",permalink:"/zh/blog/tags/security"}],readingTime:1.5,truncated:!0,authors:[{name:"Ruofei Zhao",url:"https://github.com/Serendipity96",imageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"}],prevItem:{title:"Apache APISIX \u548c Envoy \u6027\u80fd\u5927\u6bd4\u62fc",permalink:"/zh/blog/2021/06/10/apache-apisix-and-envoy-performance-comparison"},nextItem:{title:"Apache APISIX \u5f00\u6e90 2 \u5468\u5e74\uff01",permalink:"/zh/blog/2021/06/06/apisix-two-years"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"On May 26, NGINX issued a security announcement that fixed a DNS resolver vulnerability (CVE -2021-23017) in the NGINX resolver.")))}y.isMDXComponent=!0}}]);