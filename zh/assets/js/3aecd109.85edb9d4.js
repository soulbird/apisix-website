"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11597],{35318:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(27378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),h=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=h(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=h(t),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||p;return t?n.createElement(d,l(l({ref:a},c),{},{components:t})):n.createElement(d,l({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=s;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var h=2;h<p;h++)l[h]=t[h];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},86500:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return h},toc:function(){return u}});var n=t(25773),r=t(30808),p=(t(27378),t(35318)),l=["components"],i={title:"GraphQL \u78b0\u649e API \u7f51\u5173 Apache APISIX\uff0c\u63d0\u5347 API \u9886\u57df\u7684\u5b89\u5168\u4e0e\u6027\u80fd",authors:[{name:"\u6c5f\u6668\u709c",title:"Author",url:"https://github.com/Chever-John",image_url:"https://avatars.githubusercontent.com/u/43690894?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","GraphQL","Ecosystem"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u548c GraphQL \u7684\u7279\u6027\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u4ee3\u7406 GraphQL \u8bf7\u6c42\uff0c\u5e76\u63d0\u51fa\u89e3\u51b3\u5b9e\u9645\u573a\u666f\u75db\u70b9\u7684\u65b9\u6848\u3002",tags:["Technology","Ecosystem"]},o=void 0,h={permalink:"/zh/blog/2022/03/02/apisix-integration-graphql-plugin",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/03/02/apisix-integration-graphql-plugin.md",title:"GraphQL \u78b0\u649e API \u7f51\u5173 Apache APISIX\uff0c\u63d0\u5347 API \u9886\u57df\u7684\u5b89\u5168\u4e0e\u6027\u80fd",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u548c GraphQL \u7684\u7279\u6027\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u4ee3\u7406 GraphQL \u8bf7\u6c42\uff0c\u5e76\u63d0\u51fa\u89e3\u51b3\u5b9e\u9645\u573a\u666f\u75db\u70b9\u7684\u65b9\u6848\u3002",date:"2022-03-02T00:00:00.000Z",formattedDate:"2022\u5e743\u67082\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:11.87,truncated:!0,authors:[{name:"\u6c5f\u6668\u709c",title:"Author",url:"https://github.com/Chever-John",image_url:"https://avatars.githubusercontent.com/u/43690894?v=4",imageURL:"https://avatars.githubusercontent.com/u/43690894?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c2.15-2.28 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2022/03/03/weekly-report-0228"},nextItem:{title:"APISIX \u5728\u4f17\u5b89\u4fdd\u9669\u7684\u5e94\u7528\u5b9e\u8df5",permalink:"/zh/blog/2022/03/02/zhongan-usercase-with-apache-apisix"}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",children:[{value:"\u573a\u666f\u89e3\u6790",id:"\u573a\u666f\u89e3\u6790",children:[]},{value:"\u5b9e\u9645\u573a\u666f\u4e2d\u9047\u5230\u7684\u95ee\u9898",id:"\u5b9e\u9645\u573a\u666f\u4e2d\u9047\u5230\u7684\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]}]},{value:"GraphQL \u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528",id:"graphql-\u5728-apache-apisix-\u4e2d\u7684\u5e94\u7528",children:[{value:"\u57fa\u672c\u903b\u8f91",id:"\u57fa\u672c\u903b\u8f91",children:[]},{value:"\u5177\u4f53\u914d\u7f6e",id:"\u5177\u4f53\u914d\u7f6e",children:[]}]},{value:"\u8fdb\u9636\u64cd\u4f5c",id:"\u8fdb\u9636\u64cd\u4f5c",children:[{value:"\u4f7f\u7528 <code>graphql_name</code> \u5339\u914d Upstream",id:"\u4f7f\u7528-graphql_name-\u5339\u914d-upstream",children:[]},{value:"\u4f7f\u7528 <code>graphql_operation</code> \u8fdb\u884c\u4e0d\u540c\u7684\u6743\u9650\u6821\u9a8c",id:"\u4f7f\u7528-graphql_operation-\u8fdb\u884c\u4e0d\u540c\u7684\u6743\u9650\u6821\u9a8c",children:[]}]},{value:"\u642d\u914d\u63d2\u4ef6",id:"\u642d\u914d\u63d2\u4ef6",children:[{value:"<code>limit-count</code> \u901f\u5ea6\u63d2\u4ef6",id:"limit-count-\u901f\u5ea6\u63d2\u4ef6",children:[]},{value:"\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6",id:"\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],s={toc:u};function m(e){var a=e.components,t=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u548c GraphQL \u7684\u7279\u6027\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u4ee3\u7406 GraphQL \u8bf7\u6c42\uff0c\u5e76\u63d0\u51fa\u89e3\u51b3\u5b9e\u9645\u573a\u666f\u75db\u70b9\u7684\u65b9\u6848\u3002")),(0,p.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,p.kt)("p",null,"GraphQL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u9762\u5411 API \u800c\u521b\u9020\u51fa\u6765\u7684\u6570\u636e\u67e5\u8be2\u64cd\u4f5c\u8bed\u8a00\u4ee5\u53ca\u76f8\u5e94\u7684\u8fd0\u884c\u73af\u5883\u3002\u6700\u521d\u7531 Facebook \u4e8e 2012 \u5e74\u5185\u90e8\u5f00\u53d1\uff0c2015 \u5e74\u516c\u5f00\u53d1\u5e03\u30022018 \u5e74 11 \u6708 7 \u65e5\uff0cFacebook \u5c06 GraphQL \u9879\u76ee\u8f6c\u79fb\u5230\u65b0\u6210\u7acb\u7684 GraphQL \u57fa\u91d1\u4f1a\u3002"),(0,p.kt)("p",null,"\u60a8\u53ef\u4ee5\u628a GraphQL \u7c7b\u6bd4\u4e3a SQL \u67e5\u8be2\u8bed\u53e5\u6765\u7406\u89e3\uff0c\u4e0e SQL \u67e5\u8be2\u8bed\u53e5\u76f8\u6bd4\uff0cGraphQL \u5bf9 API \u4e2d\u7684\u6570\u636e\u63d0\u4f9b\u4e86\u4e00\u5957\u6613\u4e8e\u7406\u89e3\u7684\u5b8c\u6574\u63cf\u8ff0\uff0c\u8ba9\u5ba2\u6237\u7aef\u80fd\u591f\u901a\u8fc7\u81ea\u5b9a\u4e49\u7684\u63cf\u8ff0\u6765\u51c6\u786e\u83b7\u5f97\u5176\u6240\u9700\u8981\u7684\u6570\u636e\u3002\u8fd9\u4e5f\u8ba9 API \u80fd\u591f\u4ece\u5bb9\u9762\u5bf9\u65e5\u76ca\u590d\u6742\u7684\u63a5\u53e3\u53d1\u5c55\uff0c\u5e76\u907f\u514d\u6700\u7ec8\u6210\u4e3a\u4e00\u4e2a\u4ee4\u4eba\u671b\u800c\u751f\u754f\u7684\u590d\u6742\u63a5\u53e3\u3002"),(0,p.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002"),(0,p.kt)("p",null,"Apache APISIX \u4f5c\u4e3a\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u5728\u8bbe\u8ba1\u4e4b\u521d\u5c31\u5df2\u7ecf\u5177\u5907\u8bc6\u522b GraphQL \u8bed\u6cd5\u7684\u5339\u914d\u80fd\u529b\u3002\u901a\u8fc7\u5bf9\u8bf7\u6c42\u4e2d\u643a\u5e26\u7684 GraphQL \u8bed\u53e5\u8fdb\u884c\u9ad8\u6548\u5339\u914d\uff0c\u7b5b\u9664\u5f02\u5e38\u6d41\u91cf\uff0c\u8fdb\u4e00\u6b65\u4fdd\u8bc1\u5b89\u5168\u6027\u548c\u63d0\u9ad8\u7cfb\u7edf\u6027\u80fd\u3002"),(0,p.kt)("h3",{id:"\u573a\u666f\u89e3\u6790"},"\u573a\u666f\u89e3\u6790"),(0,p.kt)("p",null,"\u6211\u4eec\u6b63\u5904\u4e8e\u5927\u6570\u636e\u5927\u6d41\u91cf\u7684\u65f6\u4ee3\uff0cApache APISIX \u548c  GraphQL \u53ef\u4ee5\u901a\u8fc7\u7ed3\u5408\u7684\u65b9\u5f0f\uff0c\u5f62\u6210\u5171\u8d62\u7684\u5c40\u9762\u3002\u63a5\u4e0b\u6765\u4e3e\u4e00\u4e2a\u573a\u666f\u5177\u4f53\u8bf4\u660e\u3002"),(0,p.kt)("p",null,"\u672c\u6587\u5c06\u4f1a\u8ba8\u8bba\u5fae\u670d\u52a1\u67b6\u6784\u573a\u666f\u4e0b\u7684 Apache APISIX \u548c GraphQL \u7684\u5b9e\u9645\u5e94\u7528\u3002"),(0,p.kt)("h3",{id:"\u5b9e\u9645\u573a\u666f\u4e2d\u9047\u5230\u7684\u95ee\u9898"},"\u5b9e\u9645\u573a\u666f\u4e2d\u9047\u5230\u7684\u95ee\u9898"),(0,p.kt)("p",null,"\u5728\u9879\u76ee\u8fdb\u884c\u5230\u540e\u671f\u65f6\uff0c\u5f80\u5f80\u4f1a\u51fa\u73b0\u4e1a\u52a1\u590d\u6742\u5316\u3001\u56e2\u961f\u4eba\u5458\u6d41\u52a8\u6027\u9ad8\u7b49\u95ee\u9898\uff0c\u800c\u5fae\u670d\u52a1\u67b6\u6784\u5df2\u7ecf\u6210\u4e3a\u89e3\u51b3\u8fd9\u7c7b\u95ee\u9898\u7684\u5e38\u89c1\u89e3\u51b3\u65b9\u6848\u3002\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0cGraphQL \u66b4\u9732\u51fa\u7684\u63a5\u53e3\u5206\u4e3a\u5206\u6563\u5f0f\u548c\u96c6\u4e2d\u5f0f\u4e24\u79cd\uff0c\u7136\u800c\u53ea\u6709\u96c6\u4e2d\u5f0f\u63a5\u53e3\u8bbe\u8ba1\u624d\u80fd\u591f\u6700\u5927\u5316\u4f53\u73b0 GraphQL \u7684\u4f18\u52bf\uff0c\u4f46\u662f\u5728\u96c6\u4e2d\u5f0f\u63a5\u53e3\u8bbe\u8ba1\u4e2d\uff0c\u6240\u6709\u7684\u5fae\u670d\u52a1\u5bf9\u5916\u66b4\u9732\u7684\u662f\u540c\u4e00\u4e2a\u63a5\u53e3\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u56e0\u6b64\u5904\u7406\u6d41\u91cf\u7684\u8def\u7531\u5c31\u4e0d\u80fd\u7b80\u5355\u5730\u6839\u636e URL \u8fdb\u884c\u8f6c\u53d1\uff0c\u800c\u662f\u5e94\u8be5\u6839\u636e\u8bf7\u6c42\u4e2d\u5305\u542b\u7684\u4e0d\u540c\u5b57\u6bb5\u8fdb\u884c\u8f6c\u53d1"),"\u3002"),(0,p.kt)("p",null,"\u7531\u4e8e NGINX \u5904\u7406\u8bf7\u6c42\u65f6\u4ec5\u4f1a\u5904\u7406 URL \u4ee5\u53ca\u4e00\u4e9b\u53c2\u6570\uff0c\u4f46\u662f\u53ea\u6709\u89e3\u6790\u8bf7\u6c42\u53c2\u6570\u4e2d\u7684\u67e5\u8be2\u4fe1\u606f\u624d\u53ef\u4ee5\u77e5\u9053\u5ba2\u6237\u7aef\u8bbf\u95ee\u7684\u8d44\u6e90\uff0c\u4ece\u800c\u8fdb\u884c\u8def\u7531\u8f6c\u53d1\uff0c\u56e0\u6b64\u8fd9\u79cd\u8def\u7531\u8f6c\u53d1\u65b9\u5f0f\u901a\u8fc7\u4f20\u7edf\u7684 NGINX \u662f\u65e0\u6cd5\u5b8c\u6210\u7684\u3002\u5728\u5b9e\u9645\u5e94\u7528\u573a\u666f\u4e2d\uff0c\u5c06 GraphQL \u63a5\u53e3\u76f4\u63a5\u5bf9\u5916\u66b4\u9732\u975e\u5e38\u5371\u9669\uff0c\u56e0\u6b64\u9700\u8981\u4e00\u4e2a\u4e13\u4e1a\u7684\u9ad8\u6027\u80fd API \u7f51\u5173\u4fdd\u62a4 GraphQL \u7684\u63a5\u53e3\u3002"),(0,p.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,p.kt)("p",null,"\u57fa\u4e8e Apache APISIX \u5b89\u5168\u3001\u7a33\u5b9a\u3001\u9ad8\u6027\u80fd\u7684\u7279\u6027\uff0c\u589e\u52a0 GraphQL \u7075\u6d3b\u7684\u8def\u7531\u5339\u914d\u89c4\u5219\u662f\u89e3\u51b3 GraphQL \u96c6\u4e2d\u5f0f\u63a5\u53e3\u8bbe\u8ba1\u95ee\u9898\u7684\u6700\u4f73\u65b9\u6848\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646200966179-1d649ab0-8d49-49f5-a8fa-a1a30af0519d.png",alt:"error/graphql architecture.png"})),(0,p.kt)("p",null,"\u5728\u6b64\u65b9\u6848\u4e2d\uff0cApache APISIX \u4f5c\u4e3a API \u7f51\u5173\u90e8\u7f72\u5728 GraphQL Server \u4e4b\u524d\uff0c\u4e3a\u6574\u4e2a\u540e\u7aef\u7cfb\u7edf\u63d0\u4f9b\u4e86\u5b89\u5168\u4fdd\u969c\uff0c\u5e76\u4e14 Apache APISIX \u6839\u636e\u81ea\u8eab\u6240\u5177\u5907\u7684 GraphQL \u5339\u914d\u529f\u80fd\uff0c\u7b5b\u9009\u4e00\u90e8\u5206\u8bf7\u6c42\u4e4b\u540e\u518d\u7531 GraphQL Server \u8fdb\u884c\u5904\u7406\uff0c\u4f7f\u6574\u4e2a\u8bf7\u6c42\u8d44\u6e90\u8fc7\u7a0b\u53d8\u5f97\u66f4\u9ad8\u6548\u3002"),(0,p.kt)("p",null,"\u5f97\u76ca\u4e8e Apache APISIX \u7684\u52a8\u6001\u7279\u6027\uff0c\u60a8\u53ef\u4ee5\u542f\u7528\u9650\u6d41\u9650\u901f\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u63d2\u4ef6\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u6b64\u65b9\u6848\u7684\u8fd0\u884c\u6548\u7387\uff0c\u65b9\u4fbf\u8fd0\u7ef4\u5de5\u4f5c\u3002"),(0,p.kt)("p",null,"\u6b64\u5916\uff0cApache APISIX \u8fd8\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql_operation")," \u8fdb\u884c\u4e0d\u540c\u7684\u6743\u9650\u6821\u9a8c\u3001\u9488\u5bf9\u4e0d\u540c\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql_name")," \u8f6c\u53d1\u5230\u4e0d\u540c\u7684 Upstream\uff0c\u5177\u4f53\u7ec6\u8282\u5c06\u4f1a\u5728\u4e0b\u6587\u4e2d\u8fdb\u884c\u63cf\u8ff0\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u7efc\u4e0a\u6240\u8ff0\uff0cApache APISIX + GraphQL \u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5728\u5145\u5206\u5229\u7528 GraphQL \u641c\u7d22\u4f18\u52bf\u7684\u540c\u65f6\u4e5f\u80fd\u62e5\u6709 Apache APISIX \u4f5c\u4e3a API \u7f51\u5173\u6240\u5177\u5907\u7684\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027\u3002")),(0,p.kt)("h2",{id:"graphql-\u5728-apache-apisix-\u4e2d\u7684\u5e94\u7528"},"GraphQL \u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528"),(0,p.kt)("h3",{id:"\u57fa\u672c\u903b\u8f91"},"\u57fa\u672c\u903b\u8f91"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646201215532-f5965158-7456-443a-84a7-cadadb95fc1f.png",alt:"error/GraphQL principle.png"})),(0,p.kt)("p",null,"\u76ee\u524d GraphQL \u5728 Apache APISIX \u4e2d\u7684\u6267\u884c\u903b\u8f91\u5982\u4e0b\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Clients \u5411 Apache APISIX \u53d1\u8d77\u5e26\u6709 GraphQL \u8bed\u53e5\u7684\u8bf7\u6c42\uff1b"),(0,p.kt)("li",{parentName:"ol"},"Apache APISIX \u5339\u914d\u8def\u7531\u5e76\u63d0\u53d6\u9884\u8bbe\u7684 GraphQL \u6570\u636e\uff1b"),(0,p.kt)("li",{parentName:"ol"},"Apache APISIX \u901a\u8fc7\u9884\u8bbe GraphQL \u6570\u636e\u5bf9\u8bf7\u6c42\u6570\u636e\u8fdb\u884c\u5339\u914d\uff1b")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5339\u914d\u6210\u529f\uff0cApache APISIX \u5c06\u7ee7\u7eed\u8f6c\u53d1\u8bf7\u6c42\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u5339\u914d\u5931\u8d25\uff0cApache APISIX \u5c06\u7acb\u523b\u7ec8\u6b62\u8bf7\u6c42\u3002")),(0,p.kt)("ol",{start:4},(0,p.kt)("li",{parentName:"ol"},"\u662f\u5426\u5b58\u5728\u63d2\u4ef6\uff1b")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b58\u5728\u63d2\u4ef6\uff0c\u8bf7\u6c42\u5c06\u7ee7\u7eed\u88ab\u63d2\u4ef6\u5904\u7406\uff0c\u5904\u7406\u5b8c\u6210\u540e\uff0c\u7ee7\u7eed\u8f6c\u53d1\u5230 GraphQL Server\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5b58\u5728\u63d2\u4ef6\uff0c\u8bf7\u6c42\u5c06\u76f4\u63a5\u8f6c\u53d1\u5230 GraphQL Server\u3002")),(0,p.kt)("p",null,"\u5728 APISIX core \u91cc\u5185\u90e8\u5339\u914d\u4e2d\uff0cApache APISIX \u901a\u8fc7 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/bjornbytes/graphql-lua"},(0,p.kt)("inlineCode",{parentName:"a"},"graphql-lua"))," \u5e93\u5b9e\u73b0\u5bf9 GraphQL \u7684\u652f\u6301\u3002Apache APISIX GraphQL \u89e3\u6790\u5e93\u4f1a\u5148\u5bf9\u643a\u5e26 GraphQL \u8bed\u6cd5\u7684\u8bf7\u6c42\u8fdb\u884c\u89e3\u6790\uff0c\u4e4b\u540e\u5c06\u89e3\u6790\u540e\u7684\u8bf7\u6c42\u4e0e\u9884\u8bbe\u5728 Apache APISIX \u6570\u636e\u5e93\u91cc\u7684\u914d\u7f6e\u6570\u636e\u8fdb\u884c\u5339\u914d\u3002\u5982\u679c\u5339\u914d\u6210\u529f Apache APISIX \u4f1a\u653e\u884c\u5e76\u8f6c\u53d1\u8bf7\u6c42\uff0c\u53cd\u4e4b\u5219\u7ec8\u6b62\u8bf7\u6c42"),(0,p.kt)("h3",{id:"\u5177\u4f53\u914d\u7f6e"},"\u5177\u4f53\u914d\u7f6e"),(0,p.kt)("p",null,"Apache APISIX \u76ee\u524d\u652f\u6301\u901a\u8fc7 GraphQL \u7684\u4e00\u4e9b\u5c5e\u6027\u8fc7\u6ee4\u8def\u7531\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"graphql_operation"),(0,p.kt)("li",{parentName:"ul"},"graphql_name"),(0,p.kt)("li",{parentName:"ul"},"graphql_root_fields")),(0,p.kt)("p",null,"GraphQL \u7684\u5c5e\u6027\u4e0e\u4e0b\u9762\u7684\u6240\u5c55\u793a GraphQL query \u8bed\u53e5\u4e00\u4e00\u5bf9\u5e94\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Nginx"},"  query getRepo {\n      owner {\n          name\n      }\n      repo {\n          created\n      }\n  }\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"graphql_operation")," \u5bf9\u5e94 ",(0,p.kt)("inlineCode",{parentName:"li"},"query")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"graphql_name")," \u5bf9\u5e94 ",(0,p.kt)("inlineCode",{parentName:"li"},"getRepo")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"graphql_root_fields")," \u5bf9\u5e94 ",(0,p.kt)("inlineCode",{parentName:"li"},'["owner", "repo"]'))),(0,p.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u793a\u4f8b\u4e3a Apache APISIX \u8bbe\u7f6e\u4e00\u6761\u8def\u7531\u6765\u9a8c\u8bc1\u5bf9 GraphQL \u7684\u5339\u914d\u80fd\u529b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n  {\n      "methods": ["POST"],\n      "uri": "/_graphql",\n      "vars": [\n          ["graphql_operation", "==", "query"],\n          ["graphql_name", "==", "getRepo"],\n          ["graphql_root_fields", "has", "owner"]\n      ],\n      "upstream": {\n          "type": "roundrobin",\n          "nodes": {\n              "192.168.1.200:4000": 1\n          }\n      }\n  }\'\n')),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\u4f7f\u7528\u5e26\u6709 GraphQL \u8bed\u53e5\u7684\u8bf7\u6c42\u53bb\u8bbf\u95ee\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"curl -H 'content-type: application/graphql' \\\n-X POST http://127.0.0.1:9080/graphql -d '\nquery getRepo {\n    owner {\n        name\n    }\n    repo {\n        created\n    }\n}'\n")),(0,p.kt)("p",null,"\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5219 Apache APISIX \u7ee7\u7eed\u8fdb\u884c\u8bf7\u6c42\u8f6c\u53d1\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"HTTP/1.1 200 OK\n")),(0,p.kt)("p",null,"\u53cd\u4e4b\uff0c\u5219\u7ec8\u6b62\u8bf7\u6c42\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"HTTP/1.1 404 Not Found\n")),(0,p.kt)("h2",{id:"\u8fdb\u9636\u64cd\u4f5c"},"\u8fdb\u9636\u64cd\u4f5c"),(0,p.kt)("p",null," Apache APISIX \u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql_name")," \u8f6c\u53d1\u5230\u4e0d\u540c\u7684 Upstream\uff0c\u4ee5\u53ca\u6839\u636e\u4e0d\u540c ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql_operation")," \u8fdb\u884c\u4e0d\u540c\u7684\u6743\u9650\u6821\u9a8c\u3002\u4e0b\u6587\u5c06\u4e3a\u60a8\u5c55\u793a\u6b64\u7279\u6027\u7684\u4ee3\u7801\u914d\u7f6e\u3002"),(0,p.kt)("h3",{id:"\u4f7f\u7528-graphql_name-\u5339\u914d-upstream"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"h3"},"graphql_name")," \u5339\u914d Upstream"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u521b\u5efa\u7b2c\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},'  curl http://192.168.1.200:9080/apisix/admin/upstreams/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n  {\n      "type": "chash",\n      "key": "remote_addr",\n      "nodes": {\n          "192.168.1.200:1980": 1\n      }\n  }\'\n')),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e0e\u7b2c\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\u7ed1\u5b9a\u7684 GraphQL \u8def\u7531\uff0c",(0,p.kt)("inlineCode",{parentName:"li"},"graphql_name")," \u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"li"},"getRepo111"),"\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},'  curl http://192.168.1.200:9080/apisix/admin/routes/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n  {\n      "methods": ["POST"],\n      "uri": "/graphql",\n      "vars": [\n          ["graphql_operation", "==", "query"],\n          ["graphql_name", "==", "getRepo111"],\n          ["graphql_root_fields", "has", "owner"]\n      ],\n      "upstream_id": "1"\n  }\'\n')),(0,p.kt)("ol",{start:3},(0,p.kt)("li",{parentName:"ol"},"\u521b\u5efa\u7b2c\u4e8c\u4e2a\u4e0a\u6e38\u670d\u52a1\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},'  curl http://192.168.1.200:9080/apisix/admin/upstreams/2 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n  {\n      "type": "chash",\n      "key": "remote_addr",\n      "nodes": {\n          "192.168.1.200:1981": 1\n      }\n  }\'\n')),(0,p.kt)("ol",{start:4},(0,p.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e0e\u7b2c\u4e8c\u4e2a\u4e0a\u6e38\u670d\u52a1\u7ed1\u5b9a\u7684 GraphQL \u8def\u7531\uff0c",(0,p.kt)("inlineCode",{parentName:"li"},"graphql_name")," \u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"li"},"getRepo222"),"\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},'  curl http://192.168.1.200:9080/apisix/admin/routes/2 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n  {\n      "methods": ["POST"],\n      "uri": "/graphql",\n      "vars": [\n          ["graphql_operation", "==", "query"],\n          ["graphql_name", "==", "getRepo222"],\n          ["graphql_root_fields", "has", "owner"]\n      ],\n      "upstream_id": 2\n  }\'\n')),(0,p.kt)("ol",{start:5},(0,p.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u793a\u4f8b")),(0,p.kt)("p",null,"\u4f7f\u7528\u4e4b\u524d\u6240\u521b\u5efa\u7684\u4e24\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql_name")," \u670d\u52a1\u8fdb\u884c\u6d4b\u8bd5\uff0c\u60a8\u53ef\u4ee5\u53d1\u73b0 Apache APISIX \u53ef\u4ee5\u6839\u636e\u8bf7\u6c42\u4e2d\u4e0d\u540c\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql_name")," \u81ea\u52a8\u9009\u62e9\u8f6c\u53d1\u7684 Upstream\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bf7\u6c42\u662f\u6b64\u793a\u4f8b\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"  curl -i -H 'content-type: application/graphql' \\\n  -X POST http://192.168.1.200:9080/graphql -d '\n  query getRepo111 {\n      owner {\n          name\n      }\n      repo {\n          created\n      }\n  }'\n")),(0,p.kt)("p",null,"\u5219\u4f1a\u8fd4\u56de\u6765\u81ea\u4e0a\u6e38 ",(0,p.kt)("inlineCode",{parentName:"p"},"192.168.1.200:1980")," \u7684\u54cd\u5e94\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"  HTTP/1.1 200 OK\n  ---URI\n  /graphql\n  ---Service Node\n  Centos-port: 1980\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bf7\u6c42\u662f\u8fd9\u4e2a\u793a\u4f8b\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"  curl -i -H 'content-type: application/graphql' \\\n  -X POST http://192.168.1.200:9080/graphql -d '\n  query getRepo222 {\n      owner {\n          name\n      }\n      repo {\n          created\n      }\n  }'\n")),(0,p.kt)("p",null,"\u5219\u4f1a\u8fd4\u56de\u6765\u81ea\u4e0a\u6e38 ",(0,p.kt)("inlineCode",{parentName:"p"},"192.168.1.200:1981")," \u7684\u54cd\u5e94\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"  HTTP/1.1 200 OK\n  ---URI\n  /graphql\n  ---Service Node\n  Centos-port: 1981\n")),(0,p.kt)("h3",{id:"\u4f7f\u7528-graphql_operation-\u8fdb\u884c\u4e0d\u540c\u7684\u6743\u9650\u6821\u9a8c"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"h3"},"graphql_operation")," \u8fdb\u884c\u4e0d\u540c\u7684\u6743\u9650\u6821\u9a8c"),(0,p.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u63d0\u4f9b\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql_operation")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"query")," \u7684\u5339\u914d\u89c4\u5219\uff0c\u73b0\u5728\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"mutation")," \u5f62\u5f0f\u7684 GraphQL \u8bf7\u6c42\u3002"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u914d\u7f6e Apache APISIX\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://192.168.1.200:9080/apisix/admin/routes/11 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST"],\n    "uri": "/hello",\n    "vars": [\n        ["graphql_operation", "==", "mutation"],\n        ["graphql_name", "==", "repo"]\n    ],\n    "upstream": {\n        "nodes": {\n            "192.168.1.200:1982": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u53d1\u8d77 ",(0,p.kt)("inlineCode",{parentName:"li"},"mutation")," \u8bf7\u6c42\u7528\u6765\u9a8c\u8bc1 Apache APISIX \u7684\u914d\u7f6e\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"curl -i -H 'content-type: application/graphql' \\\n-X POST http://192.168.1.200:9080/hello -d '\nmutation repo($ep: Episode!, $review: ReviewInput!) {\n  createReview(episode: $ep, review: $review) {\n    stars\n    commentary\n  }\n}'\n")),(0,p.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"HTTP/1.1 200 OK\n---URI\n/hello\n---Service Node\nCentos-port: 1982\n")),(0,p.kt)("h2",{id:"\u642d\u914d\u63d2\u4ef6"},"\u642d\u914d\u63d2\u4ef6"),(0,p.kt)("p",null,"Apache APISIX \u62e5\u6709\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001\u4ee5\u5e94\u5bf9\u4e0d\u540c\u7684\u4f7f\u7528\u573a\u666f\uff0c\u5982\u679c\u5728\u4f7f\u7528 Apache APISIX + GraphQL \u65f6\u6dfb\u52a0\u9002\u5408\u7684\u63d2\u4ef6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u65b9\u6848\u5e94\u7528\u7684\u573a\u666f\u53d8\u5f97\u66f4\u591a\u3002"),(0,p.kt)("p",null,"\u672c\u6587\u4ec5\u9009\u53d6\u4e86\u4ee5\u4e0b\u4e24\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u8fdb\u884c\u4e3e\u4f8b\u3002"),(0,p.kt)("h3",{id:"limit-count-\u901f\u5ea6\u63d2\u4ef6"},(0,p.kt)("inlineCode",{parentName:"h3"},"limit-count")," \u901f\u5ea6\u63d2\u4ef6"),(0,p.kt)("p",null,"\u642d\u914d\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\uff0c\u6d41\u91cf\u7ecf\u8fc7 GraphQL \u5339\u914d\u89c4\u5219\u5f97\u5230\u8f6c\u53d1\u4e4b\u540e\u8fdb\u4e00\u6b65\u88ab\u9650\u5236\u3002\u5f97\u76ca\u4e8e Apache APISIX \u7684\u7279\u6027\uff0c\u53ef\u4ee5\u8fbe\u5230\u52a8\u6001\u3001\u7cbe\u7ec6\u5316\u3001\u5206\u5e03\u5f0f\u7684\u9650\u6d41\u9650\u901f\u3002\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/limit-count"},"Apache APISIX \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,p.kt)("h3",{id:"\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6"},"\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6"),(0,p.kt)("p",null,"Apache APISIX \u63d0\u4f9b\u4e86\u5305\u62ec\u4f46\u4e0d\u4ec5\u9650\u4e8e ",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/prometheus"},(0,p.kt)("inlineCode",{parentName:"a"},"prometheus")),"\u3001",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/skywalking"},(0,p.kt)("inlineCode",{parentName:"a"},"skywalking"))," \u7b49\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6\uff0c\u80fd\u591f\u4e3a\u7cfb\u7edf\u63d0\u4f9b\u66f4\u591a\u76d1\u63a7\u6307\u6807\u6570\u636e\uff0c\u65b9\u4fbf\u7cfb\u7edf\u540e\u7eed\u7684\u8fd0\u8425\u7ef4\u62a4\u7b49\u5b9e\u73b0\u3002"),(0,p.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,p.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u521d\u6b65\u4ecb\u7ecd\u4e86 GraphQL \u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\uff0c\u5e76\u4e14\u4f7f\u7528\u5b9e\u9645\u4ee3\u7801\uff0c\u4e3a\u60a8\u5c55\u793a\u4e86Apache APISIX \u4e0e GraphQL \u4e24\u9879\u6280\u672f\u7684\u7ed3\u5408\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u7684\u4e1a\u52a1\u9700\u6c42\u548c\u5b9e\u9645\u573a\u666f\u5728 Apache APISIX \u4e2d\u4f7f\u7528 GraphQL\u3002"),(0,p.kt)("p",null,"\u5173\u4e8e GraphQL \u7684\u66f4\u591a\u8bf4\u660e\u548c\u5b8c\u6574\u914d\u7f6e\u4fe1\u606f\uff0c\u53ef\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/router-radixtree/#%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87-graphql-%E5%B1%9E%E6%80%A7%E8%BF%87%E6%BB%A4%E8%B7%AF%E7%94%B1"},"Apache APISIX\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,p.kt)("p",null,"Apache APISIX \u9879\u76ee\u76ee\u524d\u6b63\u5728\u5f00\u53d1\u5176\u4ed6\u63d2\u4ef6\u4ee5\u652f\u6301\u96c6\u6210\u66f4\u591a\u670d\u52a1\uff0c\u5982\u679c\u60a8\u5bf9\u6b64\u6709\u5174\u8da3\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41."))}m.isMDXComponent=!0}}]);