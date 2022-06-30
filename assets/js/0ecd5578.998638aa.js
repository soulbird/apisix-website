"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81370],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),o=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=o(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<a;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42083:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return s}});var i=n(25773),r=n(30808),a=(n(27378),n(35318)),l=["components"],u={title:"public-api"},p=void 0,o={unversionedId:"plugins/public-api",id:"version-2.13/plugins/public-api",isDocsHomePage:!1,title:"public-api",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/public-api.md",sourceDirName:"plugins",slug:"/plugins/public-api",permalink:"/docs/apisix/2.13/plugins/public-api",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"public-api"},sidebar:"version-2.13/docs",previous:{title:"csrf",permalink:"/docs/apisix/2.13/plugins/csrf"},next:{title:"limit-req",permalink:"/docs/apisix/2.13/plugins/limit-req"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example",id:"example",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic Use Case",id:"basic-use-case",children:[]},{value:"Customize URI",id:"customize-uri",children:[]},{value:"Protect Route",id:"protect-route",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"public-api")," plugin is used to enhance the plugin public API access control.\nWhen current users develop custom plugins, they can register some public APIs for fixed functionality, such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," API in ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt-auth"),". These APIs can only apply limited plugins for access control (currently only ",(0,a.kt)("inlineCode",{parentName:"p"},"ip-restriction"),") by way of plugin interceptors."),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"public-api")," plugin, we put all public APIs into the general HTTP API router, which is consistent with the normal Route registered by the user and can apply any plugin. The public API added in the user plugin is no longer expose by default by APISIX, and the user has to manually configure the Route for it, the user can configure any uri and plugin."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uri"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},'""'),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The uri of the public API. When you set up the route, you can use this to configure the original API uri if it is used in a way that is inconsistent with the original public API uri.")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"We take the ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt-auth")," token sign API as an example to show how to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"public-api")," plugin. Also, the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," will be used to show how to configure the protection plugin for the public API."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The use of key-auth and jwt-auth requires the configuration of a consumer that contains the configuration of these plugins, and you need to create one in advance, the process will be omitted here."),(0,a.kt)("h3",{id:"basic-use-case"},"Basic Use Case"),(0,a.kt)("p",null,"First we will setup a route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -X PUT 'http://127.0.0.1:9080/apisix/admin/routes/r1' \\\n    -H 'X-API-KEY: <api-key>' \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n    \"uri\": \"/apisix/plugin/jwt/sign\",\n    \"plugins\": {\n        \"public-api\": {}\n    }\n}'\n")),(0,a.kt)("p",null,"Let's test it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key'\n")),(0,a.kt)("p",null,"It will respond to a text JWT."),(0,a.kt)("h3",{id:"customize-uri"},"Customize URI"),(0,a.kt)("p",null,"Let's setup another route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/r2\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/gen_token",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/plugin/jwt/sign"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"Let's test it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/gen_token?key=user-key'\n")),(0,a.kt)("p",null,"It will still respond to a text JWT. We can see that users are free to configure URI for the public API to match."),(0,a.kt)("h3",{id:"protect-route"},"Protect Route"),(0,a.kt)("p",null,"Let's modify the last route and add ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," authentication to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/r2\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/gen_token",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/plugin/jwt/sign"\n        },\n        "key-auth": {}\n    }\n}\'\n')),(0,a.kt)("p",null,"Let's test it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i 'http://127.0.0.1:9080/gen_token?key=user-key'\n    -H \"apikey: test-apikey\"\nHTTP/1.1 200 OK\n\n# Failed request\n$ curl -i 'http://127.0.0.1:9080/gen_token?key=user-key'\nHTTP/1.1 401 UNAUTHORIZED\n")),(0,a.kt)("p",null,"It will still respond to a text JWT. If we don't add ",(0,a.kt)("inlineCode",{parentName:"p"},"apikey")," to the request header, it will respond with a 401 block request. In this way, we have implemented a plugin approach to protect the public API."))}d.isMDXComponent=!0}}]);