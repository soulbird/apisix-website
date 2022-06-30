"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68549],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52377:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=t(25773),a=t(30808),i=(t(27378),t(35318)),o=["components"],s={title:"Control API"},p=void 0,l={unversionedId:"control-api",id:"version-2.13/control-api",isDocsHomePage:!1,title:"Control API",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/control-api.md",sourceDirName:".",slug:"/control-api",permalink:"/docs/apisix/2.13/control-api",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"Control API"},sidebar:"version-2.13/docs",previous:{title:"Admin API",permalink:"/docs/apisix/2.13/admin-api"},next:{title:"FAQ",permalink:"/docs/apisix/2.13/FAQ"}},c=[{value:"Control API Added via Plugins",id:"control-api-added-via-plugins",children:[]},{value:"Plugin Independent Control API",id:"plugin-independent-control-api",children:[{value:"GET /v1/schema",id:"get-v1schema",children:[]},{value:"GET /v1/healthcheck",id:"get-v1healthcheck",children:[]},{value:"POST /v1/gc",id:"post-v1gc",children:[]},{value:"GET /v1/routes",id:"get-v1routes",children:[]},{value:"GET /v1/route/{route_id}",id:"get-v1routeroute_id",children:[]},{value:"GET /v1/services",id:"get-v1services",children:[]},{value:"GET /v1/service/{service_id}",id:"get-v1serviceservice_id",children:[]},{value:"GET /v1/upstreams",id:"get-v1upstreams",children:[]},{value:"GET /v1/upstream/{upstream_id}",id:"get-v1upstreamupstream_id",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Apache APISIX, the control API is used to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Expose the internal state of APISIX."),(0,i.kt)("li",{parentName:"ul"},"Control the behavior of a single, isolated APISIX data plane.")),(0,i.kt)("p",null,"To change the default endpoint (",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9090"),") of the Control API server, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"control")," section in your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  ...\n  enable_control: true\n  control:\n    ip: "127.0.0.1"\n    port: 9090\n')),(0,i.kt)("p",null,"To enable parameter matching in plugin's control API, add ",(0,i.kt)("inlineCode",{parentName:"p"},"router: 'radixtree_uri_with_parameter'")," to the control section."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Never configure the control API server to listen to public traffic."),(0,i.kt)("h2",{id:"control-api-added-via-plugins"},"Control API Added via Plugins"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/architecture-design/plugin"},"Plugins")," can be enabled to add its control API."),(0,i.kt)("p",null,"Some Plugins have their own control APIs. See the documentation of the specific Plugin to learn more."),(0,i.kt)("h2",{id:"plugin-independent-control-api"},"Plugin Independent Control API"),(0,i.kt)("p",null,"The supported APIs are listed below."),(0,i.kt)("h3",{id:"get-v1schema"},"GET /v1/schema"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.2"},"v2.2"),"."),(0,i.kt)("p",null,"Returns the JSON schema used by the APISIX instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "main": {\n        "route": {\n            "properties": {...}\n        },\n        "upstream": {\n            "properties": {...}\n        },\n        ...\n    },\n    "plugins": {\n        "example-plugin": {\n            "consumer_schema": {...},\n            "metadata_schema": {...},\n            "schema": {...},\n            "type": ...,\n            "priority": 0,\n            "version": 0.1\n        },\n        ...\n    },\n    "stream-plugins": {\n        "mqtt-proxy": {\n            ...\n        },\n        ...\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Only the enabled ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," are returned and they may lack fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_schema")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," depending on how they were defined."),(0,i.kt)("h3",{id:"get-v1healthcheck"},"GET /v1/healthcheck"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.3"},"v2.3"),"."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/health-check"},"health check")," of the APISIX instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/upstreams/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.2",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "upstreams"\n    },\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/routes/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.1",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "routes"\n    }\n]\n')),(0,i.kt)("p",null,"Each of the returned objects contain the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"src_type: where the health checker is reporting from. Value is one of  ",(0,i.kt)("inlineCode",{parentName:"li"},'["routes", "services", "upstreams"]'),"."),(0,i.kt)("li",{parentName:"ul"},"src_id: id of the object creating the health checker. For example, if an Upstream\nobject with id ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," creates a health checker, the ",(0,i.kt)("inlineCode",{parentName:"li"},"src_type")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"upstreams")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"src_id")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},"name: name of the health checker."),(0,i.kt)("li",{parentName:"ul"},"nodes: target nodes of the health checker."),(0,i.kt)("li",{parentName:"ul"},"healthy_nodes: healthy nodes discovered by the health checker.")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/healthcheck/$src_type/$src_id")," to get the health status of specific nodes."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck/upstreams/1")," returns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "healthy_nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "name": "upstream#/upstreams/1",\n    "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1988,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "src_id": "1",\n    "src_type": "upstreams"\n}\n')),(0,i.kt)("h3",{id:"post-v1gc"},"POST /v1/gc"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.8"},"v2.8"),"."),(0,i.kt)("p",null,"Triggers a full garbage collection in the HTTP subsystem."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": When stream proxy is enabled, APISIX runs another Lua VM for the stream subsystem. Full garbage collection is not triggered in this VM."),(0,i.kt)("h3",{id:"get-v1routes"},"GET /v1/routes"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/3.0"},"v3.0"),"."),(0,i.kt)("p",null,"Returns all configured ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/architecture-design/route"},"Routes"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "update_count": 0,\n    "value": {\n      "priority": 0,\n      "uris": [\n        "/hello"\n      ],\n      "id": "1",\n      "upstream": {\n        "scheme": "http",\n        "pass_host": "pass",\n        "nodes": [\n          {\n            "port": 1980,\n            "host": "127.0.0.1",\n            "weight": 1\n          }\n        ],\n        "type": "roundrobin",\n        "hash_on": "vars"\n      },\n      "status": 1\n    },\n    "clean_handlers": {},\n    "has_domain": false,\n    "orig_modifiedIndex": 1631193445,\n    "modifiedIndex": 1631193445,\n    "key": "/routes/1"\n  }\n]\n')),(0,i.kt)("h3",{id:"get-v1routeroute_id"},"GET /v1/route/{route_id}"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/3.0"},"v3.0"),"."),(0,i.kt)("p",null,"Returns the Route with the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"route_id"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_count": 0,\n  "value": {\n    "priority": 0,\n    "uris": [\n      "/hello"\n    ],\n    "id": "1",\n    "upstream": {\n      "scheme": "http",\n      "pass_host": "pass",\n      "nodes": [\n        {\n          "port": 1980,\n          "host": "127.0.0.1",\n          "weight": 1\n        }\n      ],\n      "type": "roundrobin",\n      "hash_on": "vars"\n    },\n    "status": 1\n  },\n  "clean_handlers": {},\n  "has_domain": false,\n  "orig_modifiedIndex": 1631193445,\n  "modifiedIndex": 1631193445,\n  "key": "/routes/1"\n}\n')),(0,i.kt)("h3",{id:"get-v1services"},"GET /v1/services"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.11"},"v2.11"),"."),(0,i.kt)("p",null,"Returns all the Services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "has_domain": false,\n    "clean_handlers": {},\n    "modifiedIndex": 671,\n    "key": "/apisix/services/200",\n    "createdIndex": 671,\n    "value": {\n      "upstream": {\n          "scheme": "http",\n          "hash_on": "vars",\n          "pass_host": "pass",\n          "type": "roundrobin",\n          "nodes": [\n            {\n              "port": 1980,\n              "weight": 1,\n              "host": "127.0.0.1"\n            }\n          ]\n      },\n      "create_time": 1634552648,\n      "id": "200",\n      "plugins": {\n        "limit-count": {\n          "key": "remote_addr",\n          "time_window": 60,\n          "redis_timeout": 1000,\n          "allow_degradation": false,\n          "show_limit_quota_header": true,\n          "policy": "local",\n          "count": 2,\n          "rejected_code": 503\n        }\n      },\n      "update_time": 1634552648\n    }\n  }\n]\n')),(0,i.kt)("h3",{id:"get-v1serviceservice_id"},"GET /v1/service/{service_id}"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.11"},"v2.11"),"."),(0,i.kt)("p",null,"Returns the Service with the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"service_id"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "has_domain": false,\n  "clean_handlers": {},\n  "modifiedIndex": 728,\n  "key": "/apisix/services/5",\n  "createdIndex": 728,\n  "value": {\n    "create_time": 1634554563,\n    "id": "5",\n    "upstream": {\n      "scheme": "http",\n      "hash_on": "vars",\n      "pass_host": "pass",\n      "type": "roundrobin",\n      "nodes": [\n        {\n          "port": 1980,\n          "weight": 1,\n          "host": "127.0.0.1"\n        }\n      ]\n    },\n    "update_time": 1634554563\n  }\n}\n')),(0,i.kt)("h3",{id:"get-v1upstreams"},"GET /v1/upstreams"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.11"},"v2.11"),"."),(0,i.kt)("p",null,"Dumps all Upstreams:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "value":{\n         "scheme":"http",\n         "pass_host":"pass",\n         "nodes":[\n            {\n               "host":"127.0.0.1",\n               "port":80,\n               "weight":1\n            },\n            {\n               "host":"foo.com",\n               "port":80,\n               "weight":2\n            }\n         ],\n         "hash_on":"vars",\n         "update_time":1634543819,\n         "key":"remote_addr",\n         "create_time":1634539759,\n         "id":"1",\n         "type":"chash"\n      },\n      "has_domain":true,\n      "key":"\\/apisix\\/upstreams\\/1",\n      "clean_handlers":{\n      },\n      "createdIndex":938,\n      "modifiedIndex":1225\n   }\n]\n')),(0,i.kt)("h3",{id:"get-v1upstreamupstream_id"},"GET /v1/upstream/{upstream_id}"),(0,i.kt)("p",null,"Introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.11"},"v2.11"),"."),(0,i.kt)("p",null,"Dumps the Upstream with the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream_id"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "value":{\n      "scheme":"http",\n      "pass_host":"pass",\n      "nodes":[\n         {\n            "host":"127.0.0.1",\n            "port":80,\n            "weight":1\n         },\n         {\n            "host":"foo.com",\n            "port":80,\n            "weight":2\n         }\n      ],\n      "hash_on":"vars",\n      "update_time":1634543819,\n      "key":"remote_addr",\n      "create_time":1634539759,\n      "id":"1",\n      "type":"chash"\n   },\n   "has_domain":true,\n   "key":"\\/apisix\\/upstreams\\/1",\n   "clean_handlers":{\n   },\n   "createdIndex":938,\n   "modifiedIndex":1225\n}\n')))}d.isMDXComponent=!0}}]);