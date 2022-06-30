"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98275],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(25773),i=n(30808),o=(n(27378),n(35318)),r=["components"],s={title:"Licensing with Casbin in Apache APISIX",slug:"2021/08/18/auth-with-casbin-in-apache-apisix",author:"Casbin & Apache APISIX",keywords:["API Gateway","APISIX","Apache APISIX","Casbin","RBAC"],description:"When we are using Apache APISIX, we may want to add complex authorization logic to our application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model.",tags:["Practical Case"]},c=void 0,l={permalink:"/blog/2021/08/18/auth-with-casbin-in-apache-apisix",source:"@site/blog/2021/08/18/Auth-with-Casbin-in-Apache-APISIX.md",title:"Licensing with Casbin in Apache APISIX",description:"When we are using Apache APISIX, we may want to add complex authorization logic to our application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model.",date:"2021-08-18T00:00:00.000Z",formattedDate:"August 18, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:5.415,truncated:!0,authors:[{name:"Casbin & Apache APISIX"}],prevItem:{title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 08-09 \uff5e 08-15",permalink:"/blog/2021/08/19/weekly-report"},nextItem:{title:"Interview with Yang to explore API gateway in Airwallex",permalink:"/blog/2021/08/17/interview-airwallex"}},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",children:[{value:"Apache APISIX",id:"apache-apisix",children:[]},{value:"Casbin",id:"casbin",children:[]},{value:"authz-casbin plugin introduction",id:"authz-casbin-plugin-introduction",children:[]}]},{value:"authz-casbin Usage Guide",id:"authz-casbin-usage-guide",children:[{value:"Create a model",id:"create-a-model",children:[]},{value:"Create a policy",id:"create-a-policy",children:[]},{value:"Using plugins on routes",id:"using-plugins-on-routes",children:[]},{value:"Using plugins with global models/policies",id:"using-plugins-with-global-modelspolicies",children:[]}]},{value:"Finally",id:"finally",children:[]}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When we are using Apache APISIX, we may want to add complex authorization logic to our application. In this post, we will use the built-in Casbin plugin (authz-casbin) for Apache APISIX to implement a role-based access control (RBAC) model.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," is a dynamic, real-time, high-performance API gateway that provides load balancing, dynamic upstream, canary release, fine-grained routing, flow and speed limiting, service degradation, service meltdown, authentication, observability, and hundreds of other features. You can use Apache APISIX for traditional north-south traffic, as well as east-west traffic between services, or as a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"k8s ingress controller"),"."),(0,o.kt)("h3",{id:"casbin"},"Casbin"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://casbin.org/zh-CN/"},"Casbin")," is a powerful and efficient open source access control framework with a permission management mechanism that supports multiple access control models."),(0,o.kt)("h3",{id:"authz-casbin-plugin-introduction"},"authz-casbin plugin introduction"),(0,o.kt)("p",null,"In the use of Apache APISIX, there is an implicit tension between route matching and request authorization: for higher granularity access control, higher granularity routes need to be configured to accurately identify requests and authorize them. In complex authorization model scenarios, this leads to an exponential increase in the number of routes, which increases the complexity of operations and maintenance.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/d9b928321fcdd12eef024df8c7c410424c1e0c8b/docs/en/latest/plugins/authz-casbin.md"},"authz-casbin")," is a lua-casbin based Apache APISIX plugin that supports powerful authorization based on various access models. casbin is a powerful and efficient open source access control framework that supports ACL, RBAC, ABAC and other access control models. lua-casbin is a Lua version implementation of the Casbin access control framework.\nThe authz-casbin plugin can decouple the two functions of route matching and request authorization very well. You can load various authorization access models into Apache APISIX and implement efficient and complex authorization models with the help of lua-casbin."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": If you want to implement authentication, you need to use other plugins or configure yourself to complete the authentication of the user's identity, for example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/zh/latest/plugins/jwt-auth.md"},"jwt-auth")," plugin."),(0,o.kt)("h2",{id:"authz-casbin-usage-guide"},"authz-casbin Usage Guide"),(0,o.kt)("h3",{id:"create-a-model"},"Create a model"),(0,o.kt)("p",null,"The authz-casbin plugin uses three parameters for authorization: subject, object and action. subject is the user name, which refers to the user in the request; object is the URL link that will be accessed, i.e. the resource that will be accessed; action is the action that is requested for authorization, such as read or write. (write).\nIf we want to create a model to access three resources: /, /res1, /res2, we want a model like this"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639467795044-8676c5cb-00e0-48e1-b7b1-929e37c87b75.png",alt:"authz-casbin example"})),(0,o.kt)("p",null,"In this model, all users, such as Jack, have access to the main page (/). And users like Alice and Bob with admin rights have access to all pages and resources (/res1, /res2, /). Thus, we need to restrict users without administrator privileges to access specific resources using the GET request method. The required model is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,o.kt)("h3",{id:"create-a-policy"},"Create a policy"),(0,o.kt)("p",null,"From the above example, the policy should look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob,admin\n")),(0,o.kt)("p",null,"The matcher in the model indicates that."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"(g(r.sub, p.sub) || keyMatch(r.sub, p.sub))"),": The subject in the request and the subject in the policy have the same role or the subject in the request and the subject in the policy can be matched by the built-in method ",(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch")," is a built-in function of Lua Casbin, a description of which and more can be found at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua"},"lua-casbin"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch(r.obj, p.obj)"),": the object in the request and the object in the policy can match each other (proxy for URL links)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch(r.act, p.act)"),": the action in the request and the action in the policy match each other (proxy for the HTTP request method).")),(0,o.kt)("h3",{id:"using-plugins-on-routes"},"Using plugins on routes"),(0,o.kt)("p",null,"Once you have created a model and a policy, you can use it on a route using the APISIX Admin API. To use it, you can model and policy file paths to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model.conf",\n            "policy_path": "/path/to/policy.csv",\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,o.kt)("p",null,"In this case, username is the username passed into the subject. For example, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},'"username": "user"')," to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},'"user": "alice"')," you defined to the username, making the username Alice.\nSimilarly, you can put models and policies directly into"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = some(where (p.eft == allow))\n\n            [matchers]\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin",\n\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,o.kt)("h3",{id:"using-plugins-with-global-modelspolicies"},"Using plugins with global models/policies"),(0,o.kt)("p",null,"In some cases where you may want to use the same model and policy in multiple routes, you can first send a PUT request to send the model and policy configuration to the plugin's metadata at"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl <http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin> -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"model": "[request_definition]\nr = sub, obj, act\n[policy_definition]\np = sub, obj, act\n[role_definition]\ng = _, _\n[policy_effect]\ne = some(where (p.eft == allow))\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin"\n}\'\n')),(0,o.kt)("p",null,"You then need to use the Admin API to send a request to make multiple routes use the same model/policy configuration; the"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,o.kt)("p",null,"This will add the plugin's configuration to the route dynamically. You can easily update the plugin's configuration by sending a request to update the model and policy in the plugin's configuration data."),(0,o.kt)("h2",{id:"finally"},"Finally"),(0,o.kt)("p",null,"Thanks to the developers of Casbin and Apache APISIX communities, from the Casbin community developers rushitote to raise issues and submit PRs, to the Apache APISIX community developers to actively review PRs, this cross-community collaboration is moving forward in a friendly and orderly way, responding to open source makes the world better."),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@rushitote/authorization-in-apisix-using-casbin-59b693669d6d"},"authorization-in-apisix-using-casbin")))}d.isMDXComponent=!0}}]);