"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31630],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,h=f["".concat(i,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(h,u(u({ref:t},p),{},{components:n})):r.createElement(h,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),u=["components"],c={title:"azure-functions \u63d2\u4ef6\u53d1\u5e03\uff0cApache APISIX \u652f\u6301 Azure Functions \u96c6\u6210",author:"Bisakh Mondal",authorURL:"https://github.com/bisakhmondal",authorImageURL:"https://avatars.githubusercontent.com/u/41498427?v=4",keywords:["Apache APISIX","Azure Functions","Microsoft","Serverless"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u6700\u8fd1\u65b0\u589e\u7684\u63d2\u4ef6 `azure-functions`\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u4e86\u5982\u4f55\u5c06 Azure Functions\uff08\u4e00\u79cd\u5e7f\u6cdb\u4f7f\u7528\u7684 serverless \u89e3\u51b3\u65b9\u6848\uff09\u96c6\u6210\u5230 Apache APISIX \u4e2d\u3002",tags:["Technology"]},i=void 0,s={permalink:"/zh/blog/2021/12/01/apisix-supports-azure-functions",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/12/01/apisix-supports-azure-functions.md",title:"azure-functions \u63d2\u4ef6\u53d1\u5e03\uff0cApache APISIX \u652f\u6301 Azure Functions \u96c6\u6210",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u6700\u8fd1\u65b0\u589e\u7684\u63d2\u4ef6 `azure-functions`\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u4e86\u5982\u4f55\u5c06 Azure Functions\uff08\u4e00\u79cd\u5e7f\u6cdb\u4f7f\u7528\u7684 serverless \u89e3\u51b3\u65b9\u6848\uff09\u96c6\u6210\u5230 Apache APISIX \u4e2d\u3002",date:"2021-12-01T00:00:00.000Z",formattedDate:"2021\u5e7412\u67081\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:9.17,truncated:!0,authors:[{name:"Bisakh Mondal",url:"https://github.com/bisakhmondal",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff0811.15-11.30\uff09",permalink:"/zh/blog/2021/12/02/weekly-report-1130"},nextItem:{title:"Apache APISIX 2.11.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/12/01/release-apache-apisix-2.11"}},p={authorsImageUrls:[void 0]},l=[],f={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u6700\u8fd1\u65b0\u589e\u7684\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"azure-functions"),"\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u4e86\u5982\u4f55\u5c06 Azure Functions \u96c6\u6210\u5230 Apache APISIX \u4e2d\u3002")))}m.isMDXComponent=!0}}]);