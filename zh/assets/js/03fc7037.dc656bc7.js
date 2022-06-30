"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6022],{35318:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return t?r.createElement(k,i(i({ref:n},o),{},{components:t})):r.createElement(k,i({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},87278:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return o}});var r=t(25773),a=t(30808),l=(t(27378),t(35318)),i=["components"],p={title:"consumer-restriction"},u=void 0,d={unversionedId:"plugins/consumer-restriction",id:"version-2.14/plugins/consumer-restriction",isDocsHomePage:!1,title:"consumer-restriction",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.14/plugins/consumer-restriction.md",sourceDirName:"plugins",slug:"/plugins/consumer-restriction",permalink:"/zh/docs/apisix/plugins/consumer-restriction",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"consumer-restriction"},sidebar:"version-2.14/docs",previous:{title:"referer-restriction",permalink:"/zh/docs/apisix/plugins/referer-restriction"},next:{title:"csrf",permalink:"/zh/docs/apisix/plugins/csrf"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u5982\u4f55\u9650\u5236 <code>consumer_name</code>",id:"\u5982\u4f55\u9650\u5236-consumer_name",children:[]},{value:"\u5982\u4f55\u9650\u5236 <code>allowed_by_methods</code>",id:"\u5982\u4f55\u9650\u5236-allowed_by_methods",children:[]},{value:"\u5982\u4f55\u9650\u5236 <code>service_id</code>",id:"\u5982\u4f55\u9650\u5236-service_id",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:o};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," \u6839\u636e\u9009\u62e9\u7684\u4e0d\u540c\u5bf9\u8c61\u505a\u76f8\u5e94\u7684\u8bbf\u95ee\u9650\u5236\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"consumer_name"),(0,l.kt)("td",{parentName:"tr",align:null},'["consumer_name", "service_id", "route_id"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u4e0d\u540c\u7684\u5bf9\u8c61\u505a\u76f8\u5e94\u7684\u9650\u5236\uff0c\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"consumer_name"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"service_id"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"route_id"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e",(0,l.kt)("inlineCode",{parentName:"td"},"blacklist"),"\u4e8c\u9009\u4e00\uff0c\u53ea\u80fd\u5355\u72ec\u542f\u7528\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\uff0c\u4e24\u4e2a\u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blacklist"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e",(0,l.kt)("inlineCode",{parentName:"td"},"whitelist"),"\u4e8c\u9009\u4e00\uff0c\u53ea\u80fd\u5355\u72ec\u542f\u7528\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\uff0c\u4e24\u4e2a\u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"[200,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684\u6d88\u606f\u5185\u5bb9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowed_by_methods"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u7528\u6237\u8bbe\u7f6e\u5141\u8bb8\u7684 HTTP methods \u5217\u8868 , HTTP methods \u53ef\u4ee5\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'["GET"\uff0c"POST"\uff0c"PUT"\uff0c"DELETE"\uff0c"PATCH"\uff0c"HEAD"\uff0c"OPTIONS"\uff0c"CONNECT"\uff0c"TRACE", "PURGE"]'))))),(0,l.kt)("p",null,"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u5b57\u6bb5\u662f\u4e2a\u679a\u4e3e\u7c7b\u578b\uff0c\u5b83\u53ef\u4ee5\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer_name")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"service_id")," \u3002\u5206\u522b\u4ee3\u8868\u4ee5\u4e0b\u542b\u4e49\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"consumer_name"),"\uff1a\u628a ",(0,l.kt)("inlineCode",{parentName:"li"},"consumer")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"username")," \u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\uff08\u652f\u6301\u5355\u4e2a\u6216\u591a\u4e2a consumer\uff09\u6765\u9650\u5236\u5bf9\u670d\u52a1\u6216\u8def\u7ebf\u7684\u8bbf\u95ee\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"service_id"),"\uff1a\u628a ",(0,l.kt)("inlineCode",{parentName:"li"},"service")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," \u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\uff08\u652f\u6301\u4e00\u4e2a\u6216\u591a\u4e2a service\uff09\u6765\u9650\u5236 service \u7684\u8bbf\u95ee\uff0c\u9700\u8981\u7ed3\u5408\u6388\u6743\u63d2\u4ef6\u4e00\u8d77\u4f7f\u7528\u3002")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u5982\u4f55\u9650\u5236-consumer_name"},"\u5982\u4f55\u9650\u5236 ",(0,l.kt)("inlineCode",{parentName:"h3"},"consumer_name")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," \u63d2\u4ef6\uff0c\u9650\u5236 consumer \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "username": "jack1",\n    "plugins": {\n        "basic-auth": {\n            "username":"jack2019",\n            "password": "123456"\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "username": "jack2",\n    "plugins": {\n        "basic-auth": {\n            "username":"jack2020",\n            "password": "123456"\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "whitelist": [\n                "jack1"\n            ]\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,l.kt)("p",null,"jack1 \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -u jack2019:123456 http://127.0.0.1:9080/index.html -i\nHTTP/1.1 200 OK\n...\n")),(0,l.kt)("p",null,"jack2 \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -u jack2020:123456 http://127.0.0.1:9080/index.html -i\nHTTP/1.1 403 Forbidden\n...\n{"message":"The consumer_name is forbidden."}\n')),(0,l.kt)("h3",{id:"\u5982\u4f55\u9650\u5236-allowed_by_methods"},"\u5982\u4f55\u9650\u5236 ",(0,l.kt)("inlineCode",{parentName:"h3"},"allowed_by_methods")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," \u63d2\u4ef6\uff0c\u9650\u5236 ",(0,l.kt)("inlineCode",{parentName:"p"},"jack1")," \u53ea\u80fd\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," \u8fdb\u884c\u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "allowed_by_methods":[{\n                "user": "jack1",\n                "methods": ["POST"]\n            }]\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,l.kt)("p",null,"jack1 \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -u jack2019:123456 http://127.0.0.1:9080/index.html\nHTTP/1.1 403 Forbidden\n...\n{"message":"The consumer_name is forbidden."}\n')),(0,l.kt)("p",null,"\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"jack1")," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," \u8bbf\u95ee\u80fd\u529b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "allowed_by_methods":[{\n                "user": "jack1",\n                "methods": ["POST","GET"]\n            }]\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"jack1 \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -u jack2019:123456 http://127.0.0.1:9080/index.html\nHTTP/1.1 200 OK\n")),(0,l.kt)("h3",{id:"\u5982\u4f55\u9650\u5236-service_id"},"\u5982\u4f55\u9650\u5236 ",(0,l.kt)("inlineCode",{parentName:"h3"},"service_id")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"service_id")," \u65b9\u5f0f\u9700\u8981\u4e0e\u6388\u6743\u63d2\u4ef6\u4e00\u8d77\u914d\u5408\u4f7f\u7528\uff0c\u8fd9\u91cc\u4ee5 key-auth \u6388\u6743\u63d2\u4ef6\u4e3a\u4f8b\u3002"),(0,l.kt)("p",null,"1\u3001\u521b\u5efa\u4e24\u4e2a service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "desc": "new service 001"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/services/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "desc": "new service 002"\n}\'\n')),(0,l.kt)("p",null,"2\u3001\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u4e0a\u7ed1\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," \u63d2\u4ef6 (\u9700\u8981\u4e0e\u4e00\u4e2a\u6388\u6743\u63d2\u4ef6\u914d\u5408\u624d\u80fd\u7ed1\u5b9a),\u5e76\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"service_id")," \u767d\u540d\u5355\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "new_consumer",\n    "plugins": {\n    "key-auth": {\n        "key": "auth-jack"\n    },\n    "consumer-restriction": {\n           "type": "service_id",\n            "whitelist": [\n                "1"\n            ],\n            "rejected_code": 403\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"3\u3001\u5728 route \u4e0a\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u5e76\u7ed1\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"service_id")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "service_id": 1,\n    "plugins": {\n         "key-auth": {\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'apikey: auth-jack' -i\nHTTP/1.1 200 OK\n...\n")),(0,l.kt)("p",null,"\u8bf4\u660e\u5728\u767d\u540d\u5355\u5217\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"service_id")," \u5141\u8bb8\u8bbf\u95ee\uff0c\u63d2\u4ef6\u914d\u7f6e\u751f\u6548\u3002"),(0,l.kt)("p",null,"4\u3001\u5728 route \u4e0a\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u5e76\u7ed1\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"service_id")," \u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "service_id": 2,\n    "plugins": {\n         "key-auth": {\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/index.html -H \'apikey: auth-jack\' -i\nHTTP/1.1 403 Forbidden\n...\n{"message":"The service_id is forbidden."}\n')),(0,l.kt)("p",null,"\u8bf4\u660e\u4e0d\u5728\u767d\u540d\u5355\u5217\u8868\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"service_id")," \u88ab\u62d2\u7edd\u8bbf\u95ee\uff0c\u63d2\u4ef6\u914d\u7f6e\u751f\u6548\u3002"),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {}\n    }\n}\'\n')),(0,l.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u79fb\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," \u63d2\u4ef6\uff0c\u5176\u5b83\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u7c7b\u4f3c\u3002"))}c.isMDXComponent=!0}}]);