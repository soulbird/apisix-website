"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49531],{35318:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=u(n),g=r,c=k["".concat(o,".").concat(g)]||k[g]||m[g]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},73982:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],p={title:"rocketmq-logger"},o=void 0,u={unversionedId:"plugins/rocketmq-logger",id:"version-2.14/plugins/rocketmq-logger",isDocsHomePage:!1,title:"rocketmq-logger",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.14/plugins/rocketmq-logger.md",sourceDirName:"plugins",slug:"/plugins/rocketmq-logger",permalink:"/zh/docs/apisix/plugins/rocketmq-logger",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"rocketmq-logger"},sidebar:"version-2.14/docs",previous:{title:"kafka-logger",permalink:"/zh/docs/apisix/plugins/kafka-logger"},next:{title:"udp-logger",permalink:"/zh/docs/apisix/plugins/udp-logger"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"meta_format \u53c2\u8003\u793a\u4f8b",id:"meta_format-\u53c2\u8003\u793a\u4f8b",children:[]}]},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",children:[{value:"Nameserver \u5217\u8868",id:"nameserver-\u5217\u8868",children:[]}]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",children:[{value:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],m={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," \u63d2\u4ef6\u53ef\u4ee5\u5c06\u63a5\u53e3\u8bf7\u6c42\u65e5\u5fd7\u4ee5 JSON \u7684\u5f62\u5f0f\u63a8\u9001\u7ed9\u5916\u90e8 rocketmq \u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u77ed\u65f6\u95f4\u5185\u6ca1\u6709\u6536\u5230\u65e5\u5fd7\u6570\u636e\uff0c\u8bf7\u653e\u5fc3\uff0c\u5b83\u4f1a\u5728\u6211\u4eec\u7684\u6279\u5904\u7406\u5904\u7406\u5668\u4e2d\u7684\u8ba1\u65f6\u5668\u529f\u80fd\u5230\u671f\u540e\u81ea\u52a8\u53d1\u9001\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,"\u6709\u5173 Apache APISIX \u4e2d Batch-Processor \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u3002\n",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nameserver_list"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u63a8\u9001\u7684 rocketmq \u7684 nameserver \u5217\u8868\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u63a8\u9001\u7684 topic \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6d88\u606f\u7684 keys \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tag"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6d88\u606f\u7684 tags \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f TLS \u52a0\u5bc6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ACL \u8ba4\u8bc1\u7684 access key \uff0c\u7a7a\u5b57\u7b26\u4e32\u8868\u793a\u4e0d\u5f00\u542f ACL \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ACL \u8ba4\u8bc1\u7684 secret key \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"rocketmq logger"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"batch processor \u7684\u552f\u4e00\u6807\u8bc6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta_format"),(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"default"'),(0,l.kt)("td",{parentName:"tr",align:null},'["default"\uff0c"origin"]'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default"),"\uff1a\u83b7\u53d6\u8bf7\u6c42\u4fe1\u606f\u4ee5\u9ed8\u8ba4\u7684 JSON \u7f16\u7801\u65b9\u5f0f\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"origin"),"\uff1a\u83b7\u53d6\u8bf7\u6c42\u4fe1\u606f\u4ee5 HTTP \u539f\u59cb\u8bf7\u6c42\u65b9\u5f0f\u3002",(0,l.kt)("a",{parentName:"td",href:"#meta_format-%E5%8F%82%E8%80%83%E7%A4%BA%E4%BE%8B"},"\u5177\u4f53\u793a\u4f8b"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5305\u62ec\u8bf7\u6c42 body \u3002false \uff1a \u8868\u793a\u4e0d\u5305\u542b\u8bf7\u6c42\u7684 body \uff1btrue \uff1a \u8868\u793a\u5305\u542b\u8bf7\u6c42\u7684 body \u3002\u6ce8\u610f\uff1a\u5982\u679c\u8bf7\u6c42 body \u6ca1\u529e\u6cd5\u5b8c\u5168\u653e\u5728\u5185\u5b58\u4e2d\uff0c\u7531\u4e8e Nginx \u7684\u9650\u5236\uff0c\u6211\u4eec\u6ca1\u6709\u529e\u6cd5\u628a\u5b83\u8bb0\u5f55\u4e0b\u6765\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body_expr"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"td"},"include_req_body")," \u5f00\u542f\u65f6\uff0c\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr")," \u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u8fdb\u884c\u8bb0\u5f55\u3002\u5982\u679c\u8be5\u9009\u9879\u5b58\u5728\uff0c\u53ea\u6709\u5728\u8868\u8fbe\u5f0f\u4e3a\u771f\u7684\u65f6\u5019\u624d\u4f1a\u8bb0\u5f55\u8bf7\u6c42 body \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_resp_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5305\u62ec\u54cd\u5e94\u4f53\u3002\u5305\u542b\u54cd\u5e94\u4f53\uff0c\u5f53\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_resp_body_expr"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u91c7\u96c6\u54cd\u4f53\uff0c\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),"\u3002 \u8be5\u9009\u9879\u9700\u8981\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"td"},"include_resp_body"))))),(0,l.kt)("p",null,"\u672c\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6216\u81ea\u5b9a\u4e49\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor")," \u914d\u7f6e\u90e8\u5206\u3002"),(0,l.kt)("h3",{id:"meta_format-\u53c2\u8003\u793a\u4f8b"},"meta_format \u53c2\u8003\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"default"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {\n     "upstream": "127.0.0.1:1980",\n     "start_time": 1619414294760,\n     "client_ip": "127.0.0.1",\n     "service_id": "",\n     "route_id": "1",\n     "request": {\n       "querystring": {\n         "ab": "cd"\n       },\n       "size": 90,\n       "uri": "/hello?ab=cd",\n       "url": "http://localhost:1984/hello?ab=cd",\n       "headers": {\n         "host": "localhost",\n         "content-length": "6",\n         "connection": "close"\n       },\n       "body": "abcdef",\n       "method": "GET"\n     },\n     "response": {\n       "headers": {\n         "connection": "close",\n         "content-type": "text/plain; charset=utf-8",\n         "date": "Mon, 26 Apr 2021 05:18:14 GMT",\n         "server": "APISIX/2.5",\n         "transfer-encoding": "chunked"\n       },\n       "size": 190,\n       "status": 200\n     },\n     "server": {\n       "hostname": "localhost",\n       "version": "2.5"\n     },\n     "latency": 0\n    }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"origin"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"    GET /hello?ab=cd HTTP/1.1\n    host: localhost\n    content-length: 6\n    connection: close\n\n    abcdef\n")),(0,l.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,l.kt)("p",null,"\u6d88\u606f\u5c06\u9996\u5148\u5199\u5165\u7f13\u51b2\u533a\u3002\n\u5f53\u7f13\u51b2\u533a\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_size")," \u65f6\uff0c\u5b83\u5c06\u53d1\u9001\u5230 rocketmq \u670d\u52a1\u5668\uff0c\n\u6216\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer_duration")," \u5237\u65b0\u7f13\u51b2\u533a\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6210\u529f\uff0c\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u3002\n\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," \uff0c\u5e76\u5e26\u6709\u63cf\u8ff0\u9519\u8bef\u7684\u5b57\u7b26\u4e32\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"buffer overflow"),"\uff09\u3002"),(0,l.kt)("h3",{id:"nameserver-\u5217\u8868"},"Nameserver \u5217\u8868"),(0,l.kt)("p",null,"\u914d\u7f6e\u591a\u4e2a nameserver \u5730\u5740\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "127.0.0.1:9876",\n    "127.0.0.2:9876"\n]\n')),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 rocketmq-logger \u63d2\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "rocketmq-logger": {\n           "nameserver_list" : [ "127.0.0.1:9876" ],\n           "topic" : "test2",\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u6210\u529f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u5185\u7f6e\u53d8\u91cf"),"\u3002\u8bf7\u6ce8\u610f\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u8be5\u8bbe\u7f6e\u662f\u5168\u5c40\u751f\u6548\u7684"),"\uff0c\u56e0\u6b64\u5728\u6307\u5b9a log_format \u540e\uff0c\u5c06\u5bf9\u6240\u6709\u7ed1\u5b9a rocketmq-logger \u7684 Route \u6216 Service \u751f\u6548\u3002")))),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"},"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/rocketmq-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,l.kt)("p",null,"\u5728\u65e5\u5fd7\u6536\u96c6\u5904\uff0c\u5c06\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u60a8\u8981\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," \u63d2\u4ef6\u65f6\uff0c\u8fd9\u5f88\u7b80\u5355\uff0c\u60a8\u53ef\u4ee5\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff0c\u5b83\u5c06\u7acb\u5373\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}k.isMDXComponent=!0}}]);