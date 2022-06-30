"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88586],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32585:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),l=["components"],o={title:"server-info"},p=void 0,u={unversionedId:"plugins/server-info",id:"version-2.13/plugins/server-info",isDocsHomePage:!1,title:"server-info",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/server-info.md",sourceDirName:"plugins",slug:"/plugins/server-info",permalink:"/docs/apisix/2.13/plugins/server-info",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"server-info"},sidebar:"version-2.13/docs",previous:{title:"real-ip",permalink:"/docs/apisix/2.13/plugins/real-ip"},next:{title:"ext-plugin-pre-req",permalink:"/docs/apisix/2.13/plugins/ext-plugin-pre-req"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How to Enable",id:"how-to-enable",children:[]},{value:"How to customize the server info report configurations",id:"how-to-customize-the-server-info-report-configurations",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"server-info")," is a plugin that reports basic server information to etcd periodically."),(0,a.kt)("p",null,"The meaning of each item in server information is following:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"boot_time"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Bootstrap time (UNIX timestamp) of the APISIX instance, value will be reset when you hot updating APISIX but is kept for intact if you just reloading APISIX.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"APISIX instance id.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"etcd_version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The etcd cluster version that APISIX is using, value will be ",(0,a.kt)("inlineCode",{parentName:"td"},'"unknown"')," if the network (to etcd) is partitioned.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"APISIX version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname of the machine/pod that APISIX is deployed.")))),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"This plugin exposes one API ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/server_info")," to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/control-api"},"Control API"),"."),(0,a.kt)("h2",{id:"how-to-enable"},"How to Enable"),(0,a.kt)("p",null,"Just configure ",(0,a.kt)("inlineCode",{parentName:"p"},"server-info")," in the plugin list of the configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - node-status\n  - server-info\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,a.kt)("h2",{id:"how-to-customize-the-server-info-report-configurations"},"How to customize the server info report configurations"),(0,a.kt)("p",null,"We can change the report configurations in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin_attr")," section of ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"report_ttl"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"36"),(0,a.kt)("td",{parentName:"tr",align:null},"the live time for server info in etcd (unit: second, maximum: 86400, minimum: 3).")))),(0,a.kt)("p",null,"Here is an example, which modifies the ",(0,a.kt)("inlineCode",{parentName:"p"},"report_ttl")," to one minute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  server-info:\n    report_ttl: 60\n")),(0,a.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,a.kt)("p",null,"After enabling this plugin, you can access these data through the plugin Control API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9090/v1/server_info -s | jq .\n{\n  "etcd_version": "3.5.0",\n  "id": "b7ce1c5c-b1aa-4df7-888a-cbe403f3e948",\n  "hostname": "fedora32",\n  "version": "2.1",\n  "boot_time": 1608522102\n}\n')),(0,a.kt)("p",null,"The APISIX Dashboard will collects server info in etcd, so you may also try to check them through Dashboard."),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"Remove ",(0,a.kt)("inlineCode",{parentName:"p"},"server-info")," in the plugin list of configure file ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - node-status\n  - jwt-auth\n  - zipkin\n  ......\n")))}d.isMDXComponent=!0}}]);