"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16171],{35318:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return c}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),m=o(n),c=r,s=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47144:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],p={title:"authz-keycloak"},u=void 0,o={unversionedId:"plugins/authz-keycloak",id:"version-2.13/plugins/authz-keycloak",isDocsHomePage:!1,title:"authz-keycloak",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/plugins/authz-keycloak.md",sourceDirName:"plugins",slug:"/plugins/authz-keycloak",permalink:"/zh/docs/apisix/2.13/plugins/authz-keycloak",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"authz-keycloak"},sidebar:"version-2.13/docs",previous:{title:"basic-auth",permalink:"/zh/docs/apisix/2.13/plugins/basic-auth"},next:{title:"wolf-rbac",permalink:"/zh/docs/apisix/2.13/plugins/wolf-rbac"}},k=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"\u7b56\u7565\u6267\u884c\u6a21\u5f0f",id:"\u7b56\u7565\u6267\u884c\u6a21\u5f0f",children:[]}]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u540e\u7eed\u5f00\u53d1",id:"\u540e\u7eed\u5f00\u53d1",children:[]}],d={toc:k};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"\u76ee\u524d ",(0,l.kt)("inlineCode",{parentName:"p"},"authz-plugin")," \u4ec5\u652f\u6301\u901a\u8fc7\u5b9a\u4e49\u8d44\u6e90\u540d\u548c\u8bbf\u95ee\u6743\u9650\u8303\u7574\u6765\u5e94\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"route")," \u7684\u8bbf\u95ee\u7b56\u7565\u3002\u4f46\u662f Keycloak \u5b98\u65b9\u9002\u914d\u7684\u5176\u4ed6\u8bed\u8a00\u7684\u5ba2\u6237\u7aef (Java, JS) \u8fd8\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u67e5\u8be2 Keycloak \u8def\u5f84\u4ee5\u53ca\u61d2\u52a0\u8f7d\u8eab\u4efd\u8d44\u6e90\u7684\u8def\u5f84\u6765\u652f\u6301\u8def\u5f84\u5339\u914d\u3002\u672a\u6765\u7248\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"authz-plugin")," \u5c06\u4f1a\u652f\u6301\u8fd9\u9879\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token_endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[1, 4096]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7 OAuth2 \u517c\u5bb9 token \u7684\u63a5\u53e3\uff0c\u9700\u8981\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"urn:ietf:params:oauth:grant-type:uma-ticket")," \u6388\u6743\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"urn:ietf:params:oauth:grant-type:uma-ticket"'),(0,l.kt)("td",{parentName:"tr",align:null},'["urn:ietf:params:oauth:grant-type:uma-ticket"]'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audience"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5e94\u7528\u8bbf\u95ee\u76f8\u5e94\u7684\u8d44\u6e90\u670d\u52a1\u5668\u65f6\u6240\u9700\u63d0\u4f9b\u7684\u8eab\u4efd\u4fe1\u606f\u3002\u5f53 permissions \u53c2\u6570\u6709\u503c\u65f6\u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u586b\u7684\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permissions"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5ba2\u6237\u7aef\u5e94\u7528\u6240\u9700\u8bbf\u95ee\u7684\u8d44\u6e90\u548c\u6743\u9650\u8303\u56f4\u7684\u5b57\u7b26\u4e32\u3002\u683c\u5f0f\u5fc5\u987b\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"RESOURCE_ID#SCOPE_ID"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1000, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5668\u7684 http \u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_token_expires_in"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"access token \u7684\u8fc7\u671f\u65f6\u95f4(\u79d2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_token_expires_leeway"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"access token \u63d0\u524d\u66f4\u65b0\u65f6\u95f4\uff08\u79d2\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u6b64\u503c\uff0c\u5141\u8bb8\u5728\u8be5\u65f6\u95f4\u6bb5\u5185\u4f7f\u7528\u76f8\u540c\u7684 access token \u4ee4\u724c\u6765\u89e3\u51b3\u6f5c\u5728\u7684\u7f51\u7edc\u5e76\u53d1\u95ee\u9898\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refresh_token_expires_in"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3600"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"refresh token \u7684\u8fc7\u671f\u65f6\u95f4(\u79d2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refresh_token_expires_leeway"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"refresh token \u63d0\u524d\u66f4\u65b0\u65f6\u95f4\uff08\u79d2\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u6b64\u503c\uff0c\u5141\u8bb8\u5728\u8be5\u65f6\u95f4\u6bb5\u5185\u4f7f\u7528\u76f8\u540c\u7684 refresh token \u4ee4\u724c\u6765\u89e3\u51b3\u6f5c\u5728\u7684\u7f51\u7edc\u5e76\u53d1\u95ee\u9898\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1 SSL \u8bc1\u4e66\u4e0e\u4e3b\u673a\u540d\u662f\u5426\u5339\u914d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy_enforcement_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"ENFORCING"'),(0,l.kt)("td",{parentName:"tr",align:null},'["ENFORCING", "PERMISSIVE"]'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_denied_redirect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[1, 2048]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u6388\u6743\u7684\u7528\u6237\u4e0d\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},'"error_description":"not_authorized"'),'\uff0c\u800c\u662f\u4f1a\u5b9a\u91cd\u5b9a\u5411\u81f3\u7ed9\u5b9a\u7684 uri\uff0c\u5982 "',(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1/test%22"},'http://127.0.0.1/test"'))))),(0,l.kt)("p",null,"|"),(0,l.kt)("h3",{id:"\u7b56\u7565\u6267\u884c\u6a21\u5f0f"},"\u7b56\u7565\u6267\u884c\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5b9a\u4e49\u4e86\u5728\u5904\u7406\u8eab\u4efd\u8ba4\u8bc1\u8bf7\u6c42\u65f6\u5982\u4f55\u5e94\u7528\u7b56\u7565"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Enforcing")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uff08\u9ed8\u8ba4\uff09\u5982\u679c\u8d44\u6e90\u6ca1\u6709\u7ed1\u5b9a\u4efb\u4f55\u8bbf\u95ee\u7b56\u7565\uff0c\u8bf7\u6c42\u9ed8\u8ba4\u4f1a\u88ab\u62d2\u7edd\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Permissive")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8d44\u6e90\u6ca1\u6709\u7ed1\u5b9a\u4efb\u4f55\u8bbf\u95ee\u7b56\u7565\uff0c\u8bf7\u6c42\u4f1a\u88ab\u5141\u8bb8\u3002")),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"route")," \u5bf9\u8c61\uff0c\u5e76\u5728\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"route")," \u5bf9\u8c61\u4e0a\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"authz-keycloak")," \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n        "authz-keycloak": {\n            "token_endpoint": "http://127.0.0.1:8090/auth/realms/{client_id}/protocol/openid-connect/token",\n            "permissions": ["resource name#scope name"],\n            "audience": "Client ID"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/get -H 'Authorization: Bearer {JWT Token}'\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u63d2\u4ef6\u8bbe\u7f6e\u9875\u9762\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\u5373\u53ef\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"authz-keycloak")," \u63d2\u4ef6\u3002APISIX \u7684\u63d2\u4ef6\u662f\u70ed\u52a0\u8f7d\u7684\uff0c\u56e0\u6b64\u65e0\u9700\u91cd\u542f APISIX \u670d\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u8bf7\u67e5\u770b authz-keycloak.t \u4e2d\u7684\u5355\u5143\u6d4b\u8bd5\u6765\u4e86\u89e3\u5982\u4f55\u5c06\u8eab\u4efd\u8ba4\u8bc1\u7b56\u7565\u4e0e\u60a8\u7684 API \u5de5\u4f5c\u6d41\u96c6\u6210\u3002\u8fd0\u884c\u4ee5\u4e0b docker \u955c\u50cf\u5e76\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8090")," \u6765\u67e5\u770b\u5355\u5143\u6d4b\u8bd5\u4e2d\u7ed1\u5b9a\u7684\u8bbf\u95ee\u7b56\u7565\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=123456 -p 8090:8080 sshniro/keycloak-apisix\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u8fd9\u5f20\u622a\u56fe\u663e\u793a\u4e86\u5982\u4f55\u5728 Keycloak \u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u8bbf\u95ee\u7b56\u7565\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/plugin/authz-keycloak.png",alt:"Keycloak policy design"})),(0,l.kt)("h2",{id:"\u540e\u7eed\u5f00\u53d1"},"\u540e\u7eed\u5f00\u53d1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76ee\u524d ",(0,l.kt)("inlineCode",{parentName:"p"},"authz-plugin")," \u4ec5\u652f\u6301\u901a\u8fc7\u5b9a\u4e49\u8d44\u6e90\u540d\u548c\u8bbf\u95ee\u6743\u9650\u8303\u7574\u6765\u5e94\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"route")," \u7684\u8bbf\u95ee\u7b56\u7565\u3002\u4f46\u662f Keycloak \u5b98\u65b9\u9002\u914d\u7684\u5176\u4ed6\u8bed\u8a00\u7684\u5ba2\u6237\u7aef (Java, JS) \u8fd8\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u67e5\u8be2 Keycloak\n\u8def\u5f84\u4ee5\u53ca\u61d2\u52a0\u8f7d\u8eab\u4efd\u8d44\u6e90\u7684\u8def\u5f84\u6765\u652f\u6301\u8def\u5f84\u5339\u914d\u3002\u672a\u6765\u7248\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"authz-plugin")," \u5c06\u4f1a\u652f\u6301\u8fd9\u9879\u529f\u80fd\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u652f\u6301\u4ece Keycloak JSON \u6587\u4ef6\u4e2d\u8bfb\u53d6\u6743\u9650\u8303\u7574\u548c\u5176\u4ed6\u914d\u7f6e\u9879\u3002"))))}m.isMDXComponent=!0}}]);