"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6460],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,g=s["".concat(u,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},98325:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],o={title:"limit-conn"},u=void 0,d={unversionedId:"plugins/limit-conn",id:"version-2.13/plugins/limit-conn",isDocsHomePage:!1,title:"limit-conn",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/limit-conn.md",sourceDirName:"plugins",slug:"/plugins/limit-conn",permalink:"/docs/apisix/2.13/plugins/limit-conn",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"limit-conn"},sidebar:"version-2.13/docs",previous:{title:"limit-req",permalink:"/docs/apisix/2.13/plugins/limit-req"},next:{title:"limit-count",permalink:"/docs/apisix/2.13/plugins/limit-count"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Limiting request concurrency plugin."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conn"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"conn > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"the maximum number of concurrent requests allowed. Requests exceeding this ratio (and below ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst"),") will get delayed(the latency seconds is configured by ",(0,l.kt)("inlineCode",{parentName:"td"},"default_conn_delay"),") to conform to this threshold.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"burst"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of excessive concurrent requests (or connections) allowed to be delayed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default_conn_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"default_conn_delay > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"the latency seconds of request when concurrent requests exceeding ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," but below (",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"only_use_default_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,l.kt)("td",{parentName:"tr",align:null},"enable the strict mode of the latency seconds. If you set this option to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", it will run strictly according to the latency seconds you set without additional calculation logic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"var"'),(0,l.kt)("td",{parentName:"tr",align:null},'["var", "var_combination"]'),(0,l.kt)("td",{parentName:"tr",align:null},"the type of key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the user specified key to limit the rate. If the ",(0,l.kt)("inlineCode",{parentName:"td"},"key_type"),' is "var", the key will be treated as a name of variable, like "remote_addr" or "consumer_name". If the ',(0,l.kt)("inlineCode",{parentName:"td"},"key_type"),' is "var_combination", the key will be a combination of variables, like "$remote_addr $consumer_name". If the value of the key is empty, ',(0,l.kt)("inlineCode",{parentName:"td"},"remote_addr")," will be set as the default key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"503"),(0,l.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,l.kt)("td",{parentName:"tr",align:null},"the HTTP status code returned when the request exceeds ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst")," will be rejected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,l.kt)("td",{parentName:"tr",align:null},"the response body returned when the request exceeds ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst")," will be rejected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable plugin degradation when the limit-conn function is temporarily unavailable. Allow requests to continue when the value is set to true, default false.")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Here's an example, enable the limit-conn plugin on the specified route when setting ",(0,l.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "http_a"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"Here's an example, enable the limit-conn plugin on the specified route when setting ",(0,l.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"var_combination")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"You also can complete the above operation through the web interface, first add a route, then add limit-conn plugin:\n",(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/plugin/limit-conn-1.png",alt:"enable limit-conn plugin"})),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("p",null,"The parameters of the plugin enabled above indicate that only one concurrent request is allowed. When more than one concurrent request is received, will return ",(0,l.kt)("inlineCode",{parentName:"p"},"503")," directly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html?sleep=20 &\n\ncurl -i http://127.0.0.1:9080/index.html?sleep=20\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("p",null,"This means that the limit request concurrency plugin is in effect."),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the limit-conn plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The limit-conn plugin has been disabled now. It works for other plugins."))}s.isMDXComponent=!0}}]);