"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2378],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65067:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),o=["components"],s={title:"Consumer"},u=void 0,l={unversionedId:"architecture-design/consumer",id:"version-2.13/architecture-design/consumer",isDocsHomePage:!1,title:"Consumer",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/architecture-design/consumer.md",sourceDirName:"architecture-design",slug:"/architecture-design/consumer",permalink:"/docs/apisix/2.13/architecture-design/consumer",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"Consumer"},sidebar:"version-2.13/docs",previous:{title:"Service",permalink:"/docs/apisix/2.13/architecture-design/service"},next:{title:"Upstream",permalink:"/docs/apisix/2.13/architecture-design/upstream"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For an API gateway, it is usually possible to identify the type of the requester by using things like their request domain name and client IP address. A gateway like APISIX can then filter these requests using ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/architecture-design/plugin"},"Plugins")," and forward it to the specified ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/architecture-design/upstream"},"Upstream"),"."),(0,a.kt)("p",null,"But this level of depth can be insufficient in some occasions."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/consumer-who.png",alt:"consumer-who"})),(0,a.kt)("p",null,"An API gateway should know who the consumer of the API is to configure different rules for different consumers."),(0,a.kt)("p",null,"This is where the Consumer construct comes in APISIX. The fields are defined below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the consumer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugins"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Plugin configuration of the Consumer. It has the highest priority: Consumer > Route > Service. For specific Plugin configurations, refer the ",(0,a.kt)("a",{parentName:"td",href:"/docs/apisix/2.13/architecture-design/plugin"},"Plugins")," section.")))),(0,a.kt)("p",null,"The process of identifying a Consumer in APISIX is described below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/consumer-internal.png",alt:"consumer-internal"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The first step is Authentication. This is achieved by Authentication Plugins like ",(0,a.kt)("a",{parentName:"li",href:"/docs/apisix/2.13/plugins/key-auth"},"key-auth")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/apisix/2.13/plugins/jwt-auth"},"JWT"),"."),(0,a.kt)("li",{parentName:"ol"},"After authenticating, you can obtain the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," of the Consumer. This ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," will be the unique identifier of a Consumer."),(0,a.kt)("li",{parentName:"ol"},"The configurations like Plugins and Upstream bound to the Consumer are then executed.")),(0,a.kt)("p",null,"Consumers are useful when you have different consumers requesting the same API and you need to execute different Plugin and Upstream configurations based on the consumer. These need to be used in conjunction with the user authentication system."),(0,a.kt)("p",null,"Refer the documentation for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/key-auth"},"key-auth")," authentication Plugin to further understand the concept of a Consumer."),(0,a.kt)("p",null,"The example below shows how you can enable a Plugin for a specific Consumer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Create a Consumer, specify the authentication plugin key-auth, and enable the specific plugin limit-count\n$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n\n# Create a Router, set routing rules and enable plugin configuration\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n\n# Send a test request, the first two return to normal, did not reach the speed limit threshold\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\n...\n\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\n...\n\n# The third test returns 503 and the request is restricted\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\nHTTP/1.1 503 Service Temporarily Unavailable\n...\n\n')),(0,a.kt)("p",null,"We can use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/consumer-restriction"},"consumer-restriction"),' Plugin to restrict our user "Jack" from accessing the API.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Add Jack to the blacklist\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {},\n        "consumer-restriction": {\n            "blacklist": [\n                "jack"\n            ]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n\n# Repeated tests, all return 403; Jack is forbidden to access this API\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\nHTTP/1.1 403\n...\n\n')))}d.isMDXComponent=!0}}]);