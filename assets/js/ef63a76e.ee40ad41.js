"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18846],{35318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,g=d["".concat(a,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=d;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,c[1]=u;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26817:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=t(25773),i=t(30808),o=(t(27378),t(35318)),c=["components"],u={title:"Plugin Config"},a=void 0,l={unversionedId:"architecture-design/plugin-config",id:"architecture-design/plugin-config",isDocsHomePage:!1,title:"Plugin Config",description:"\x3c!--",source:"@site/docs/apisix/architecture-design/plugin-config.md",sourceDirName:"architecture-design",slug:"/architecture-design/plugin-config",permalink:"/docs/apisix/next/architecture-design/plugin-config",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/plugin-config.md",tags:[],version:"current",frontMatter:{title:"Plugin Config"},sidebar:"docs",previous:{title:"APISIX",permalink:"/docs/apisix/next/architecture-design/apisix"},next:{title:"Debug Mode",permalink:"/docs/apisix/next/architecture-design/debug-mode"}},p=[],s={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Plugin Configs are used to extract commonly used ",(0,o.kt)("a",{parentName:"p",href:"./plugin.md"},"Plugin")," configurations and can be bound directly to a ",(0,o.kt)("a",{parentName:"p",href:"./route.md"},"Route"),"."),(0,o.kt)("p",null,"The example below illustrates how this can be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# create a plugin config\n$ curl http://127.0.0.1:9080/apisix/admin/plugin_configs/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "desc": "blah",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n\n# bind it to route\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"When APISIX can't find the Plugin Config with the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", the requests reaching this Route are terminated with a status code of 503."),(0,o.kt)("p",null,"If a Route already has the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," field configured, the plugins in the Plugin Config will effectively be merged to it. The same plugin in the Plugin Config will override the ones configured directly in the Route."),(0,o.kt)("p",null,"For example, if we configure a Plugin Config as shown below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "desc": "I am plugin_config 1",\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')),(0,o.kt)("p",null,"to a Route as shown below,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 20,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"the effective configuration will be as the one shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);