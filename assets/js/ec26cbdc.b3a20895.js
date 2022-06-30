"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53520],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81691:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(25773),a=t(30808),i=(t(27378),t(35318)),o=["components"],s={title:"Control API"},l=void 0,p={unversionedId:"control-api",id:"version-2.12/control-api",isDocsHomePage:!1,title:"Control API",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.12/control-api.md",sourceDirName:".",slug:"/control-api",permalink:"/docs/apisix/2.12/control-api",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"Control API"},sidebar:"version-2.12/docs",previous:{title:"Admin API",permalink:"/docs/apisix/2.12/admin-api"},next:{title:"FAQ",permalink:"/docs/apisix/2.12/FAQ"}},c=[{value:"Control API Added via plugin",id:"control-api-added-via-plugin",children:[]},{value:"Plugin independent Control API",id:"plugin-independent-control-api",children:[{value:"GET /v1/schema",id:"get-v1schema",children:[]},{value:"GET /v1/healthcheck",id:"get-v1healthcheck",children:[]},{value:"POST /v1/gc",id:"post-v1gc",children:[]},{value:"Get /v1/routes",id:"get-v1routes",children:[]},{value:"Get /v1/route/{route_id}",id:"get-v1routeroute_id",children:[]},{value:"Get /v1/services",id:"get-v1services",children:[]},{value:"Get /v1/service/{service_id}",id:"get-v1serviceservice_id",children:[]},{value:"Get /v1/upstreams",id:"get-v1upstreams",children:[]},{value:"Get /v1/upstream/{upstream_id}",id:"get-v1upstreamupstream_id",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The control API can be used to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"expose APISIX internal state"),(0,i.kt)("li",{parentName:"ul"},"control the behavior of a single isolate APISIX data panel")),(0,i.kt)("p",null,"By default, the control API server is enabled and listens to ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9090"),". You can change it via\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"control")," section under ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  ...\n  enable_control: true\n  control:\n    ip: "127.0.0.1"\n    port: 9090\n')),(0,i.kt)("p",null,"The control API server does not support parameter matching by default, if you want to enable parameter matching in plugin's control API\nyou can add ",(0,i.kt)("inlineCode",{parentName:"p"},"router: 'radixtree_uri_with_parameter'")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"control")," section."),(0,i.kt)("p",null,"Note that the control API server should not be configured to listen to the public traffic!"),(0,i.kt)("h2",{id:"control-api-added-via-plugin"},"Control API Added via plugin"),(0,i.kt)("p",null,"Plugin can add its control API when it is enabled.\nSome plugins in APISIX have added their own control APIs. If you are interested in these APIs,\nplease refer to their documentation."),(0,i.kt)("h2",{id:"plugin-independent-control-api"},"Plugin independent Control API"),(0,i.kt)("p",null,"Here is the supported API:"),(0,i.kt)("h3",{id:"get-v1schema"},"GET /v1/schema"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.2"),"."),(0,i.kt)("p",null,"Return the jsonschema used by this APISIX instance in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "main": {\n        "route": {\n            "properties": {...}\n        },\n        "upstream": {\n            "properties": {...}\n        },\n        ...\n    },\n    "plugins": {\n        "example-plugin": {\n            "consumer_schema": {...},\n            "metadata_schema": {...},\n            "schema": {...},\n            "type": ...,\n            "priority": 0,\n            "version": 0.1\n        },\n        ...\n    },\n    "stream-plugins": {\n        "mqtt-proxy": {\n            ...\n        },\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," part, only enabled plugins will be returned. Some plugins may lack\nof fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_schema")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", it is depended on by the plugin's\ndefinition."),(0,i.kt)("h3",{id:"get-v1healthcheck"},"GET /v1/healthcheck"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.3"),"."),(0,i.kt)("p",null,"Return current ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/health-check"},"health check")," status in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/upstreams/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.2",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "upstreams"\n    },\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/routes/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.1",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "routes"\n    }\n]\n')),(0,i.kt)("p",null,"Each entry contains fields below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"src_type: where the health checker comes from. The value is one of ",(0,i.kt)("inlineCode",{parentName:"li"},'["routes", "services", "upstreams"]'),"."),(0,i.kt)("li",{parentName:"ul"},"src_id: the id of object which creates the health checker. For example, if Upstream\nobject with id 1 creates a health checker, the ",(0,i.kt)("inlineCode",{parentName:"li"},"src_type")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"upstreams")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"src_id")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},"name: the name of the health checker."),(0,i.kt)("li",{parentName:"ul"},"nodes: the target nodes of the health checker."),(0,i.kt)("li",{parentName:"ul"},"healthy_nodes: the healthy node known by the health checker.")),(0,i.kt)("p",null,"User can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/healthcheck/$src_type/$src_id")," can get the status of a health checker."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck/upstreams/1")," returns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "healthy_nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "name": "upstream#/upstreams/1",\n    "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1988,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "src_id": "1",\n    "src_type": "upstreams"\n}\n')),(0,i.kt)("h3",{id:"post-v1gc"},"POST /v1/gc"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.8"),"."),(0,i.kt)("p",null,"Trigger a full GC in the http subsystem.\nNote that when you enable stream proxy, APISIX will run another Lua VM for the stream subsystem. It won't trigger a full GC in this Lua VM ."),(0,i.kt)("h3",{id:"get-v1routes"},"Get /v1/routes"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0"),"."),(0,i.kt)("p",null,"Return all routes info in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "update_count": 0,\n    "value": {\n      "priority": 0,\n      "uris": [\n        "/hello"\n      ],\n      "id": "1",\n      "upstream": {\n        "scheme": "http",\n        "pass_host": "pass",\n        "nodes": [\n          {\n            "port": 1980,\n            "host": "127.0.0.1",\n            "weight": 1\n          }\n        ],\n        "type": "roundrobin",\n        "hash_on": "vars"\n      },\n      "status": 1\n    },\n    "clean_handlers": {},\n    "has_domain": false,\n    "orig_modifiedIndex": 1631193445,\n    "modifiedIndex": 1631193445,\n    "key": "/routes/1"\n  }\n]\n')),(0,i.kt)("h3",{id:"get-v1routeroute_id"},"Get /v1/route/{route_id}"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0"),"."),(0,i.kt)("p",null,"Return specific route info with ",(0,i.kt)("strong",{parentName:"p"},"route_id")," in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_count": 0,\n  "value": {\n    "priority": 0,\n    "uris": [\n      "/hello"\n    ],\n    "id": "1",\n    "upstream": {\n      "scheme": "http",\n      "pass_host": "pass",\n      "nodes": [\n        {\n          "port": 1980,\n          "host": "127.0.0.1",\n          "weight": 1\n        }\n      ],\n      "type": "roundrobin",\n      "hash_on": "vars"\n    },\n    "status": 1\n  },\n  "clean_handlers": {},\n  "has_domain": false,\n  "orig_modifiedIndex": 1631193445,\n  "modifiedIndex": 1631193445,\n  "key": "/routes/1"\n}\n')),(0,i.kt)("h3",{id:"get-v1services"},"Get /v1/services"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.11"),"."),(0,i.kt)("p",null,"Return all services info in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "has_domain": false,\n    "clean_handlers": {},\n    "modifiedIndex": 671,\n    "key": "/apisix/services/200",\n    "createdIndex": 671,\n    "value": {\n      "upstream": {\n          "scheme": "http",\n          "hash_on": "vars",\n          "pass_host": "pass",\n          "type": "roundrobin",\n          "nodes": [\n            {\n              "port": 1980,\n              "weight": 1,\n              "host": "127.0.0.1"\n            }\n          ]\n      },\n      "create_time": 1634552648,\n      "id": "200",\n      "plugins": {\n        "limit-count": {\n          "key": "remote_addr",\n          "time_window": 60,\n          "redis_timeout": 1000,\n          "allow_degradation": false,\n          "show_limit_quota_header": true,\n          "policy": "local",\n          "count": 2,\n          "rejected_code": 503\n        }\n      },\n      "update_time": 1634552648\n    }\n  }\n]\n')),(0,i.kt)("h3",{id:"get-v1serviceservice_id"},"Get /v1/service/{service_id}"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.11"),"."),(0,i.kt)("p",null,"Return specific service info with ",(0,i.kt)("strong",{parentName:"p"},"service_id")," in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "has_domain": false,\n  "clean_handlers": {},\n  "modifiedIndex": 728,\n  "key": "/apisix/services/5",\n  "createdIndex": 728,\n  "value": {\n    "create_time": 1634554563,\n    "id": "5",\n    "upstream": {\n      "scheme": "http",\n      "hash_on": "vars",\n      "pass_host": "pass",\n      "type": "roundrobin",\n      "nodes": [\n        {\n          "port": 1980,\n          "weight": 1,\n          "host": "127.0.0.1"\n        }\n      ]\n    },\n    "update_time": 1634554563\n  }\n}\n')),(0,i.kt)("h3",{id:"get-v1upstreams"},"Get /v1/upstreams"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.11.0"),"."),(0,i.kt)("p",null,"Dump all upstreams in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "value":{\n         "scheme":"http",\n         "pass_host":"pass",\n         "nodes":[\n            {\n               "host":"127.0.0.1",\n               "port":80,\n               "weight":1\n            },\n            {\n               "host":"foo.com",\n               "port":80,\n               "weight":2\n            }\n         ],\n         "hash_on":"vars",\n         "update_time":1634543819,\n         "key":"remote_addr",\n         "create_time":1634539759,\n         "id":"1",\n         "type":"chash"\n      },\n      "has_domain":true,\n      "key":"\\/apisix\\/upstreams\\/1",\n      "clean_handlers":{\n      },\n      "createdIndex":938,\n      "modifiedIndex":1225\n   }\n]\n')),(0,i.kt)("h3",{id:"get-v1upstreamupstream_id"},"Get /v1/upstream/{upstream_id}"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.11.0"),"."),(0,i.kt)("p",null,"Dump specific upstream info with ",(0,i.kt)("strong",{parentName:"p"},"upstream_id")," in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "value":{\n      "scheme":"http",\n      "pass_host":"pass",\n      "nodes":[\n         {\n            "host":"127.0.0.1",\n            "port":80,\n            "weight":1\n         },\n         {\n            "host":"foo.com",\n            "port":80,\n            "weight":2\n         }\n      ],\n      "hash_on":"vars",\n      "update_time":1634543819,\n      "key":"remote_addr",\n      "create_time":1634539759,\n      "id":"1",\n      "type":"chash"\n   },\n   "has_domain":true,\n   "key":"\\/apisix\\/upstreams\\/1",\n   "clean_handlers":{\n   },\n   "createdIndex":938,\n   "modifiedIndex":1225\n}\n')))}d.isMDXComponent=!0}}]);