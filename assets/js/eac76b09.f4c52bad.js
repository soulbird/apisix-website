"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99492],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72692:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),l=["components"],o={title:"real-ip"},p=void 0,s={unversionedId:"plugins/real-ip",id:"version-2.13/plugins/real-ip",isDocsHomePage:!1,title:"real-ip",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/real-ip.md",sourceDirName:"plugins",slug:"/plugins/real-ip",permalink:"/docs/apisix/2.13/plugins/real-ip",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"real-ip"},sidebar:"version-2.13/docs",previous:{title:"gzip",permalink:"/docs/apisix/2.13/plugins/gzip"},next:{title:"server-info",permalink:"/docs/apisix/2.13/plugins/server-info"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"real-ip")," plugin dynamically changes the client's IP and port seen by APISIX."),(0,a.kt)("p",null,"It works like Nginx's ",(0,a.kt)("inlineCode",{parentName:"p"},"ngx_http_realip_module"),", but is more flexible."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This plugin requires APISIX to run on ",(0,a.kt)("a",{parentName:"strong",href:"/docs/apisix/2.13/how-to-build#step-6-build-openresty-for-apache-apisix"},"APISIX-OpenResty"),".")),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Any Nginx variable like ",(0,a.kt)("inlineCode",{parentName:"td"},"arg_realip")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"http_x_forwarded_for")),(0,a.kt)("td",{parentName:"tr",align:null},"dynamically set the client's IP and port in APISIX's view, according to the value of variable. If the value doesn't contain a port, the client's port won't be changed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"trusted_addresses"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"List of IPs or CIDR ranges"),(0,a.kt)("td",{parentName:"tr",align:null},"dynamically set the ",(0,a.kt)("inlineCode",{parentName:"td"},"set_real_ip_from")," directive")))),(0,a.kt)("p",null,"If the remote address comes from ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," is missing or invalid, this plugin will just let it go and don't change the client address."),(0,a.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,a.kt)("p",null,"Here's an example, enable this plugin on the specified route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "real-ip": {\n            "source": "arg_realip",\n            "trusted_addresses": ["127.0.0.0/24"]\n        },\n        "response-rewrite": {\n            "headers": {\n                "remote_addr": "$remote_addr",\n                "remote_port": "$remote_port"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,a.kt)("p",null,"Use curl to access:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080/index.html?realip=1.2.3.4:9080' -I\n...\nremote-addr: 1.2.3.4\nremote-port: 9080\n")),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"When you want to disable this plugin, it is very simple,\nyou can delete the corresponding JSON configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"This plugin has been disabled now. It works for other plugins."))}c.isMDXComponent=!0}}]);