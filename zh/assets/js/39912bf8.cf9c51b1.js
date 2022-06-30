"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90069],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16539:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(25773),a=n(30808),l=(n(27378),n(35318)),i=["components"],o={title:"ua-restriction"},p=void 0,u={unversionedId:"plugins/ua-restriction",id:"version-2.13/plugins/ua-restriction",isDocsHomePage:!1,title:"ua-restriction",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/plugins/ua-restriction.md",sourceDirName:"plugins",slug:"/plugins/ua-restriction",permalink:"/zh/docs/apisix/2.13/plugins/ua-restriction",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"ua-restriction"},sidebar:"version-2.13/docs",previous:{title:"ip-restriction",permalink:"/zh/docs/apisix/2.13/plugins/ip-restriction"},next:{title:"referer-restriction",permalink:"/zh/docs/apisix/2.13/plugins/referer-restriction"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u53ef\u4ee5\u901a\u8fc7\u5c06\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"User-Agent")," \u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u7684\u65b9\u5f0f\u6765\u9650\u5236\u5bf9\u670d\u52a1\u6216\u63a5\u53e3\u7684\u8bbf\u95ee\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bypass_missing"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"User-Agent \u4e0d\u5b58\u5728\u65f6\u662f\u5426\u7ed5\u8fc7\u68c0\u67e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowlist"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0\u5165\u767d\u540d\u5355\u7684 User-Agent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"denylist"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0\u5165\u9ed1\u540d\u5355\u7684 User-Agent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"Not allowed."),(0,l.kt)("td",{parentName:"tr",align:null},"\u957f\u5ea6\u9650\u5236\uff1a","[1, 1024]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u672a\u5141\u8bb8\u7684 User-Agent \u8bbf\u95ee\u7684\u60c5\u51b5\u4e0b\u8fd4\u56de\u7684\u4fe1\u606f")))),(0,l.kt)("p",null,"\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u53ef\u4ee5\u540c\u65f6\u542f\u7528\uff0c\u6b64\u63d2\u4ef6\u5bf9 User-Agent \u7684\u68c0\u67e5\u5148\u540e\u987a\u5e8f\u4f9d\u6b21\u5982\u4e0b\uff1a\u767d\u540d\u5355\u3001\u9ed1\u540d\u5355\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"message")," \u53ef\u4ee5\u7531\u7528\u6237\u81ea\u5b9a\u4e49\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u63d2\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "ua-restriction": {\n            "bypass_missing": true,\n             "allowlist": [\n                 "my-bot1",\n                 "(Baiduspider)/(\\\\d+)\\\\.(\\\\d+)"\n             ],\n             "denylist": [\n                 "my-bot2",\n                 "(Twitterspider)/(\\\\d+)\\\\.(\\\\d+)"\n             ]\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u5f53\u672a\u5141\u8bb8\u7684 User-Agent \u8bbf\u95ee\u65f6\uff0c\u9ed8\u8ba4\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},'{"message":"Not allowed"}'),"\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"message"),"\uff0c\u53ef\u4ee5\u5728\u63d2\u4ef6\u90e8\u5206\u8fdb\u884c\u914d\u7f6e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"plugins": {\n    "ua-restriction": {\n        "denylist": [\n            "my-bot2",\n            "(Twitterspider)/(\\\\d+)\\\\.(\\\\d+)"\n        ],\n        "message": "Do you want to do something bad?"\n    }\n}\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u901a\u8fc7\u6b63\u5e38\u7684 UA \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html --header 'User-Agent: YourApp/2.0.0'\nHTTP/1.1 200 OK\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u722c\u866b User-Agent \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html --header 'User-Agent: Twitterspider/2.0'\nHTTP/1.1 403 Forbidden\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u79fb\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u63d2\u4ef6\uff0c\u5176\u5b83\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u7c7b\u4f3c\u3002"))}c.isMDXComponent=!0}}]);