"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91066],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(n),c=r,k=g["".concat(p,".").concat(c)]||g[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37408:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],o={title:"skywalking-logger"},p=void 0,s={unversionedId:"plugins/skywalking-logger",id:"version-2.13/plugins/skywalking-logger",isDocsHomePage:!1,title:"skywalking-logger",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/skywalking-logger.md",sourceDirName:"plugins",slug:"/plugins/skywalking-logger",permalink:"/docs/apisix/2.13/plugins/skywalking-logger",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"skywalking-logger"},sidebar:"version-2.13/docs",previous:{title:"http-logger",permalink:"/docs/apisix/2.13/plugins/http-logger"},next:{title:"tcp-logger",permalink:"/docs/apisix/2.13/plugins/tcp-logger"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"skywalking-logger")," is a plugin which push Access Log data to ",(0,l.kt)("inlineCode",{parentName:"p"},"SkyWalking OAP")," server over HTTP. If there is tracing context existing, it sets up the trace-log correlation automatically, and relies on ",(0,l.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/docs/main/latest/en/protocols/skywalking-cross-process-propagation-headers-protocol-v3/"},"SkyWalking Cross Process Propagation Headers Protocol"),"."),(0,l.kt)("p",null,"This will provide the ability to send Access Log as JSON objects to ",(0,l.kt)("inlineCode",{parentName:"p"},"SkyWalking OAP")," server."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The URI of the ",(0,l.kt)("inlineCode",{parentName:"td"},"SkyWalking OAP")," server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"service name for SkyWalking reporter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_instance_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"APISIX Instance Name"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"service instance name for SkyWalking reporter\uff0c  set it to ",(0,l.kt)("inlineCode",{parentName:"td"},"$hostname")," to get local hostname directly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"Time to keep the connection alive after sending a request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"skywalking logger"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A unique identifier to identity the logger.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include the request body. false: indicates that the requested body is not included; true: indicates that the requested body is included.")))),(0,l.kt)("p",null,"The plugin supports the use of batch processors to aggregate and process entries(logs/data) in a batch. This avoids frequent data submissions by the plugin, which by default the batch processor submits data every ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"1000"),". For information or custom batch processor parameter settings, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/batch-processor#configuration"},"Batch-Processor")," configuration section."),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"The following is an example of how to enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"skywalking-logger")," for a specific route. Before that, an available ",(0,l.kt)("inlineCode",{parentName:"p"},"SkyWalking OAP")," server was required and accessible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "skywalking-logger": {\n                "endpoint_addr": "http://127.0.0.1:12800"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"success:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("p",null,"Completion of the steps, could find the Log details on ",(0,l.kt)("inlineCode",{parentName:"p"},"SkyWalking UI"),"."),(0,l.kt)("h2",{id:"metadata"},"Metadata"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"skywalking-logger")," also supports to custom log format like ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/http-logger"},"http-logger"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pair in JSON format. Only string is supported in the ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," part. If the value starts with ",(0,l.kt)("inlineCode",{parentName:"td"},"$"),", it means to get ",(0,l.kt)("inlineCode",{parentName:"td"},"APISIX")," variables or ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variable"),".")))),(0,l.kt)("p",null," Note that ",(0,l.kt)("strong",{parentName:"p"},"the metadata configuration is applied in global scope"),", which means it will take effect on all Route or Service which use ",(0,l.kt)("inlineCode",{parentName:"p"},"skywalking-logger")," plugin."),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"skywalking-logger"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}g.isMDXComponent=!0}}]);