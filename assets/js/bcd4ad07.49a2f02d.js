"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24572],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36062:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=["components"],o={title:"limit-count"},d=void 0,s={unversionedId:"plugins/limit-count",id:"version-2.13/plugins/limit-count",isDocsHomePage:!1,title:"limit-count",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/limit-count.md",sourceDirName:"plugins",slug:"/plugins/limit-count",permalink:"/docs/apisix/2.13/plugins/limit-count",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"limit-count"},sidebar:"version-2.13/docs",previous:{title:"limit-conn",permalink:"/docs/apisix/2.13/plugins/limit-conn"},next:{title:"proxy-cache",permalink:"/docs/apisix/2.13/plugins/proxy-cache"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Limit request rate by a fixed number of requests in a given time window."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"count"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"count > 0"),(0,i.kt)("td",{parentName:"tr",align:null},"the specified number of requests threshold.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"time_window"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"time_window > 0"),(0,i.kt)("td",{parentName:"tr",align:null},"the time window in seconds before the request count is reset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key_type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"var"'),(0,i.kt)("td",{parentName:"tr",align:null},'["var", "var_combination", "constant"]'),(0,i.kt)("td",{parentName:"tr",align:null},"the type of key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"remote_addr"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"the user specified key to limit the rate. If the ",(0,i.kt)("inlineCode",{parentName:"td"},"key_type"),' is "constant", the key will be treated as a constant. If the ',(0,i.kt)("inlineCode",{parentName:"td"},"key_type"),' is "var", the key will be treated as a name of variable. If the ',(0,i.kt)("inlineCode",{parentName:"td"},"key_type"),' is "var_combination", the key will be a combination of variables. For example, if we use "$remote_addr $consumer_name" as key, plugin will be restricted by two variables which are "remote_addr" and "consumer_name". If the value of the key is empty, ',(0,i.kt)("inlineCode",{parentName:"td"},"remote_addr")," will be set as the default key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"503"),(0,i.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,i.kt)("td",{parentName:"tr",align:null},"The HTTP status code returned when the request exceeds the threshold is rejected, default 503.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,i.kt)("td",{parentName:"tr",align:null},"The response body returned when the request exceeds the threshold is rejected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"policy"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"local"'),(0,i.kt)("td",{parentName:"tr",align:null},'["local", "redis", "redis-cluster"]'),(0,i.kt)("td",{parentName:"tr",align:null},"The rate-limiting policies to use for retrieving and incrementing the limits. Available values are ",(0,i.kt)("inlineCode",{parentName:"td"},"local"),"(the counters will be stored locally in-memory on the node), ",(0,i.kt)("inlineCode",{parentName:"td"},"redis"),"(counters are stored on a Redis server and will be shared across the nodes, usually use it to do the global speed limit), and ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")," which works the same as ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," but with redis cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to enable plugin degradation when the limit-count function is temporarily unavailable(e.g. redis timeout). Allow requests to continue when the value is set to true, default false.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show_limit_quota_header"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Whether show ",(0,i.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Limit")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Remaining")," (which mean the total number of requests and the remaining number of requests that can be sent) in the response header, default true.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"group"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,i.kt)("td",{parentName:"tr",align:null},"Route configured with the same group will share the same counter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_host"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required for ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," policy, this property specifies the address of the Redis server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_port"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"6379"),(0,i.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," policy, this property specifies the port of the Redis server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis"),"  or ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")," policy, this property specifies the password of the Redis server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_database"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"redis_database >= 0"),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," policy, this property specifies the database you selected of the Redis server, and only for non Redis cluster mode (single instance mode or Redis public cloud service that provides single entry).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis"),"  or ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")," policy, this property specifies the timeout in milliseconds of any command submitted to the Redis server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_cluster_nodes"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"required when policy is ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When using ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")," policy\uff0cThis property is a list of addresses of Redis cluster service nodes (at least two).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_cluster_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required when policy is ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When using ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")," policy, this property is the name of Redis cluster service nodes.")))),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Here's an example, enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin on the specified route when setting ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Here's an example, enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin on the specified route when setting ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"var_combination")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"You also can complete the above operation through the web interface, first add a route, then add limit-count plugin:\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/plugin/limit-count-1.png",alt:"Add limit-count plugin."})),(0,i.kt)("p",null,"It is possible to share the same limit counter across different routes. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 1,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "group": "services_1#1640140620"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,'Every route which group name is "services_1#1640140620" will share the same count limitation ',(0,i.kt)("inlineCode",{parentName:"p"},"1")," in one minute per remote_addr."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "service_id": "1",\n    "uri": "/hello"\n}\'\n\n$ curl -i http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "service_id": "1",\n    "uri": "/hello2"\n}\'\n\n$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 ...\n\n$ curl -i http://127.0.0.1:9080/hello2\nHTTP/1.1 503 ...\n')),(0,i.kt)("p",null,"Note that every limit-count configuration of the same group must be the same.\nTherefore, once update the configuration, we also need to update the group name."),(0,i.kt)("p",null,"It is also possible to share the same limit counter in all requests. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 1,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "key_type": "constant",\n            "group": "services_1#1640140621"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Compared with the previous configuration, we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"constant"),".\nBy setting ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"constant"),", we don't evaluate the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," but treat it as a constant."),(0,i.kt)("p",null,'Now every route which group name is "services_1#1640140621" will share the same count limitation ',(0,i.kt)("inlineCode",{parentName:"p"},"1")," in one minute among all the requests,\neven these requests are from different remote_addr."),(0,i.kt)("p",null,"If you need a cluster-level precision traffic limit, then we can do it with the redis server. The rate limit of the traffic will be shared between different APISIX nodes to limit the rate of cluster traffic."),(0,i.kt)("p",null,"Here is the example if we use single ",(0,i.kt)("inlineCode",{parentName:"p"},"redis")," policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis",\n            "redis_host": "127.0.0.1",\n            "redis_port": 6379,\n            "redis_password": "password",\n            "redis_database": 1,\n            "redis_timeout": 1001\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"If using ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cluster")," policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis-cluster",\n            "redis_cluster_nodes": [\n              "127.0.0.1:5000",\n              "127.0.0.1:5001"\n            ],\n            "redis_password": "password",\n            "redis_cluster_name": "redis-cluster-1"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("p",null,"The above configuration limits access to only 2 times in 60 seconds. The first two visits will be normally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,i.kt)("p",null,"The response header contains ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Limit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Remaining"),",\nwhich mean the total number of requests and the remaining number of requests that can be sent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\nConnection: keep-alive\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 0\nServer: APISIX web server\n")),(0,i.kt)("p",null,"When you visit for the third time, you will receive a response with the 503 HTTP code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,i.kt)("p",null,"At the same time, if you set the property ",(0,i.kt)("inlineCode",{parentName:"p"},"rejected_msg")," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"Requests are too frequent, please try again later."')," , when you visit for the third time, you will receive a response body like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,i.kt)("p",null,"This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin is in effect."),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin has been disabled now. It works for other plugins."))}m.isMDXComponent=!0}}]);