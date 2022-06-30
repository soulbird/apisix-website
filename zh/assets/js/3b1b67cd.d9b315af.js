"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35308],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91761:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(25773),a=n(30808),l=(n(27378),n(35318)),o=["components"],i={title:"sls-logger"},p=void 0,s={unversionedId:"plugins/sls-logger",id:"version-2.14/plugins/sls-logger",isDocsHomePage:!1,title:"sls-logger",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.14/plugins/sls-logger.md",sourceDirName:"plugins",slug:"/plugins/sls-logger",permalink:"/zh/docs/apisix/plugins/sls-logger",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"sls-logger"},sidebar:"version-2.14/docs",previous:{title:"error-log-logger",permalink:"/zh/docs/apisix/plugins/error-log-logger"},next:{title:"google-cloud-logging",permalink:"/zh/docs/apisix/plugins/google-cloud-logging"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sls-logger")," \u662f\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424"},"RF5424")," \u6807\u51c6\u5c06\u65e5\u5fd7\u6570\u636e\u4ee5 JSON \u683c\u5f0f\u53d1\u9001\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/112903.html?spm=a2c4g.11186623.6.763.21321b47wcwt1u"},"\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1"),"\u3002"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u63d0\u4f9b\u4e86\u5c06 Log Data \u4f5c\u4e3a\u6279\u5904\u7406\u63a8\u9001\u5230\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u5668\u7684\u529f\u80fd\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u65e5\u5fd7\u6570\u636e\uff0c\u8bf7\u653e\u5fc3\u4e00\u4e9b\u65f6\u95f4\uff0c\u5b83\u4f1a\u5728\u6211\u4eec\u7684\u6279\u5904\u7406\u5904\u7406\u5668\u4e2d\u7684\u8ba1\u65f6\u5668\u529f\u80fd\u5230\u671f\u540e\u81ea\u52a8\u53d1\u9001\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,"\u6709\u5173 Apache APISIX \u4e2d Batch-Processor \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP \u670d\u52a1\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\uff0c\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/29008.html?spm=a2c4g.11186623.2.14.49301b4793uX0z#reference-wgx-pwq-zdb"},"\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u5217\u8868"),"\uff0c\u5efa\u8bae\u914d\u7f6e IP \u53d6\u4ee3\u914d\u7f6e\u57df\u540d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7aef\u53e3\uff0c\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u9ed8\u8ba4\u7aef\u53e3\u4e3a 10009\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6570\u636e\u8d85\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"project"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u670d\u52a1 Project \u540d\u79f0\uff0c\u8bf7\u63d0\u524d\u5728\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u4e2d\u521b\u5efa Project\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logstore"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u670d\u52a1 Logstore \u540d\u79f0\uff0c\u8bf7\u63d0\u524d\u5728\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u4e2d\u521b\u5efa Logstore\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"AccessKey ID\u3002\u5efa\u8bae\u4f7f\u7528\u963f\u91cc\u4e91\u5b50\u8d26\u53f7 AK\uff0c\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/47664.html?spm=a2c4g.11186623.2.15.49301b47lfvxXP#task-xsk-ttc-ry"},"\u6388\u6743"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"AccessKey Secret\u3002\u5efa\u8bae\u4f7f\u7528\u963f\u91cc\u4e91\u5b50\u8d26\u53f7 AK\uff0c\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/47664.html?spm=a2c4g.11186623.2.15.49301b47lfvxXP#task-xsk-ttc-ry"},"\u6388\u6743"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5305\u542b\u8bf7\u6c42\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6279\u5904\u7406\u540d\u5b57\u3002")))),(0,l.kt)("p",null,"\u672c\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6216\u81ea\u5b9a\u4e49\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor")," \u914d\u7f6e\u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4e3a\u6307\u5b9a\u8def\u7531\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"li"},"sls-logger")," \u63d2\u4ef6\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "sls-logger": {\n            "host": "100.100.99.135",\n            "port": 10009,\n            "project": "your_project",\n            "logstore": "your_logstore",\n            "access_key_id": "your_access_key_id",\n            "access_key_secret": "your_access_key_secret",\n            "timeout": 30000\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6ce8\u91ca\uff1a\u8fd9\u91cc\u7684 100.100.99.135 \u662f\u963f\u91cc\u4e91\u534e\u5317 3 \u5185\u5916\u5730\u5740\u3002\n")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6210\u529f\u7684\u60c5\u51b5\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u4e0a\u4f20\u8bb0\u5f55\n",(0,l.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/plugin/sls-logger-1.png",alt:"sls logger view",title:"\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u9884\u89c8"}))),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u60f3\u8981\u7981\u7528\u201csls-logger\u201d\u63d2\u4ef6\uff0c\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u5c06\u5bf9\u5e94\u7684\u63d2\u4ef6\u914d\u7f6e\u4ece json \u914d\u7f6e\u5220\u9664\uff0c\u5c31\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);