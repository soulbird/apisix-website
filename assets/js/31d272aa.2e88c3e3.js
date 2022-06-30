"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92629],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79036:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),l=["components"],o={title:"ApisixClusterConfig/v2 Reference"},s=void 0,c={unversionedId:"references/apisix_cluster_config_v2",id:"references/apisix_cluster_config_v2",isDocsHomePage:!1,title:"ApisixClusterConfig/v2 Reference",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/references/apisix_cluster_config_v2.md",sourceDirName:"references",slug:"/references/apisix_cluster_config_v2",permalink:"/docs/ingress-controller/references/apisix_cluster_config_v2",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/references/apisix_cluster_config_v2.md",tags:[],version:"current",frontMatter:{title:"ApisixClusterConfig/v2 Reference"},sidebar:"docs",previous:{title:"ApisixTls/v2beta3 Reference",permalink:"/docs/ingress-controller/references/apisix_tls_v2beta3"},next:{title:"ApisixClusterConfig/v2beta3 Reference",permalink:"/docs/ingress-controller/references/apisix_cluster_config_v2beta3"}},p=[{value:"Spec",id:"spec",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"spec"},"Spec"),(0,i.kt)("p",null,"Spec describes the desired state of an ApisixClusterConfig object."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Monitoring settings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring.prometheus"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Prometheus settings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring.prometheus.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to enable Prometheus or not.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring.skywalking"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Skywalking settings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring.skywalking.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to enable Skywalking or not.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"monitoring.skywalking.sampleRatio"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"The sample ratio for spans, value should be in ",(0,i.kt)("inlineCode",{parentName:"td"},"[0, 1]"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"admin"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Administrative settings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"admin.baseURL"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"the base url for APISIX cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"admin.AdminKey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"admin key used for authentication with APISIX cluster.")))))}m.isMDXComponent=!0}}]);