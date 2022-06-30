"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16869],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(n),g=i,d=f["".concat(c,".").concat(g)]||f[g]||u[g]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56430:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),l=["components"],o={title:"ApisixPluginConfig/v2 Reference"},c=void 0,p={unversionedId:"references/apisix_pluginconfig_v2",id:"references/apisix_pluginconfig_v2",isDocsHomePage:!1,title:"ApisixPluginConfig/v2 Reference",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/references/apisix_pluginconfig_v2.md",sourceDirName:"references",slug:"/references/apisix_pluginconfig_v2",permalink:"/docs/ingress-controller/references/apisix_pluginconfig_v2",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/references/apisix_pluginconfig_v2.md",tags:[],version:"current",frontMatter:{title:"ApisixPluginConfig/v2 Reference"},sidebar:"docs",previous:{title:"ApisixClusterConfig/v2beta3 Reference",permalink:"/docs/ingress-controller/references/apisix_cluster_config_v2beta3"},next:{title:"ApisixPluginConfig/v2beta3 Reference",permalink:"/docs/ingress-controller/references/apisix_pluginconfig_v2beta3"}},s=[{value:"Spec",id:"spec",children:[]}],u={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"spec"},"Spec"),(0,a.kt)("p",null,"Spec describes the desired state of an ApisixPluginConfig object."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugins"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"A series of custom plugins that will be executed once this route rule is matched")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugins[].name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The plugin name, see ",(0,a.kt)("a",{parentName:"td",href:"http://apisix.apache.org/docs/apisix/getting-started"},"docs")," for learning the available plugins.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugins[].enable"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the plugin would be used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugins[].config"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"The configuration of the plugin that must have the same fields as in APISIX.")))))}f.isMDXComponent=!0}}]);