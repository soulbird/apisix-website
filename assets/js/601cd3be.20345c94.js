"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45224],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,b=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51087:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=["components"],o={title:"dubbo-proxy",keywords:["APISIX","API Gateway","Plugin","Apache Dubbo","dubbo-proxy"],description:"This document contains information about the Apache APISIX dubbo-proxy Plugin."},u=void 0,p={unversionedId:"plugins/dubbo-proxy",id:"plugins/dubbo-proxy",isDocsHomePage:!1,title:"dubbo-proxy",description:"This document contains information about the Apache APISIX dubbo-proxy Plugin.",source:"@site/docs/apisix/plugins/dubbo-proxy.md",sourceDirName:"plugins",slug:"/plugins/dubbo-proxy",permalink:"/docs/apisix/next/plugins/dubbo-proxy",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/dubbo-proxy.md",tags:[],version:"current",frontMatter:{title:"dubbo-proxy",keywords:["APISIX","API Gateway","Plugin","Apache Dubbo","dubbo-proxy"],description:"This document contains information about the Apache APISIX dubbo-proxy Plugin."},sidebar:"docs",previous:{title:"aws-lambda",permalink:"/docs/apisix/next/plugins/aws-lambda"},next:{title:"mqtt-proxy",permalink:"/docs/apisix/next/plugins/mqtt-proxy"}},d=[{value:"Description",id:"description",children:[]},{value:"Runtime Attributes",id:"runtime-attributes",children:[]},{value:"Static Attributes",id:"static-attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dubbo-proxy")," Plugin allows you to proxy HTTP requests to ",(0,i.kt)("a",{parentName:"p",href:"https://dubbo.apache.org/en/index.html"},"Apache Dubbo"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are using OpenResty, you need to build it with Dubbo support. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/FAQ#how-do-i-build-the-apisix-base-environment"},"How do I build the APISIX base environment")," for details."))),(0,i.kt)("h2",{id:"runtime-attributes"},"Runtime Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Dubbo provider service name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service_version"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Dubbo provider service version.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"method"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"The path of the URI."),(0,i.kt)("td",{parentName:"tr",align:null},"Dubbo provider service method.")))),(0,i.kt)("h2",{id:"static-attributes"},"Static Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream_multiplex_count"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"32"),(0,i.kt)("td",{parentName:"tr",align:null},">= 1"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum number of multiplex requests in an upstream connection.")))),(0,i.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,i.kt)("p",null,"To enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"dubbo-proxy")," Plugin, you have to add it in your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - ...\n  - dubbo-proxy\n")),(0,i.kt)("p",null,"Now, when APISIX is reloaded, you can add it to a specific Route as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/upstreams/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "nodes": {\n        "127.0.0.1:20880": 1\n    },\n    "type": "roundrobin"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uris": [\n        "/hello"\n    ],\n    "plugins": {\n        "dubbo-proxy": {\n            "service_name": "org.apache.dubbo.sample.tengine.DemoService",\n            "service_version": "0.0.0",\n            "method": "tengineDubbo"\n        }\n    },\n    "upstream_id": 1\n}\'\n')),(0,i.kt)("h2",{id:"example-usage"},"Example usage"),(0,i.kt)("p",null,"You can follow the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/tengine/tree/master/modules/mod_dubbo#quick-start"},"Quick Start")," guide in Tengine with the configuration above for testing."),(0,i.kt)("p",null,"Dubbo returns data in the form ",(0,i.kt)("inlineCode",{parentName:"p"},"Map<String, String>"),"."),(0,i.kt)("p",null,"If the returned data is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "200",\n  "header1": "value1",\n  "header2": "value2",\n  "body": "body of the message"\n}\n')),(0,i.kt)("p",null,"The converted HTTP response will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\nheader1: value1\nheader2: value2\n...\n\nbody of the message\n")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"To disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"dubbo-proxy")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/hello"\n    ],\n    "plugins": {\n    },\n    "upstream_id": 1\n    }\n}\'\n')),(0,i.kt)("p",null,"To completely disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"dubbo-proxy")," Plugin, you can remove it from your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  # - dubbo-proxy\n")))}c.isMDXComponent=!0}}]);