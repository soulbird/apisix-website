"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64906],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return _}});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),_=r,d=m["".concat(c,".").concat(_)]||m[_]||l[_]||s;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91861:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var i=n(25773),r=n(30808),s=(n(27378),n(35318)),o=["components"],a={title:"How to access Apache APISIX Prometheus metrics on Kubernetes"},c=void 0,p={unversionedId:"practices/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",id:"practices/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",isDocsHomePage:!1,title:"How to access Apache APISIX Prometheus metrics on Kubernetes",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/practices/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s.md",sourceDirName:"practices",slug:"/practices/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",permalink:"/docs/ingress-controller/practices/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/practices/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s.md",tags:[],version:"current",frontMatter:{title:"How to access Apache APISIX Prometheus metrics on Kubernetes"}},u=[{value:"Begin to access Apache APISIX Prometheus Metrics",id:"begin-to-access-apache-apisix-prometheus-metrics",children:[{value:"Step 1: Enable Prometheus Plugin",id:"step-1-enable-prometheus-plugin",children:[]},{value:"Step 2: Enable <code>public-api</code> Plugin",id:"step-2-enable-public-api-plugin",children:[]},{value:"Step 3: Collect the Metrics",id:"step-3-collect-the-metrics",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Observability (monitoring functionality) has always played an essential role in system maintenance. A sound monitoring system can help engineers quickly understand the status of services running in production environments and locate problems or give early warning of anomalies when they occur."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Prometheus")," is a leading open-source project focused on metrics and alerting that has changed the way the world does monitoring and observability. For more information, see ",(0,s.kt)("em",{parentName:"p"},"Prometheus"),"'s official ",(0,s.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"website"),"."),(0,s.kt)("h2",{id:"begin-to-access-apache-apisix-prometheus-metrics"},"Begin to access Apache APISIX Prometheus Metrics"),(0,s.kt)("p",null,"Before starting, please make sure that Apache APISIX (version >= 2.13)and APISIX Ingress controller are installed and working correctly. APISIX uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus")," plugin to expose metrics and integrate with prometheus but uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to enhance its security after version 2.13. For more information, see the ",(0,s.kt)("inlineCode",{parentName:"p"},"public-api")," plugin's official ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api/"},"document"),"."),(0,s.kt)("h3",{id:"step-1-enable-prometheus-plugin"},"Step 1: Enable Prometheus Plugin"),(0,s.kt)("p",null,"If you need to monitor Apache APISIX simultaneously, you can create the following ApisixClusterConfig resource."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2beta3\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  monitoring:\n    prometheus:\n      enable: true\n")),(0,s.kt)("h3",{id:"step-2-enable-public-api-plugin"},"Step 2: Enable ",(0,s.kt)("inlineCode",{parentName:"h3"},"public-api")," Plugin"),(0,s.kt)("p",null,"Let's make a basic routing setup, and please note that further configuration should be done based on your local backend service information. The primary solution concept is to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to protect the routes exposed by ",(0,s.kt)("em",{parentName:"p"},"Prometheus"),". For a more detailed configuration, you can refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api/#example"},"example")," section of the ",(0,s.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2beta3\nkind: ApisixRoute\nmetadata:\n  name: prometheus-route\nspec:\n  http:\n  - name: public-api\n    match:\n      hosts:\n      - test.prometheus.org\n      paths:\n      - /apisix/prometheus/metrics\n    backends:\n    ## Please notice that there must be your actual "serviceName" and "servicePort"\n    - serviceName: apisix-admin\n      servicePort: 9180\n    plugins:\n    - name: public-api\n      enable: true\n')),(0,s.kt)("h3",{id:"step-3-collect-the-metrics"},"Step 3: Collect the Metrics"),(0,s.kt)("p",null,"Now you can then get the indicator parameters by requesting command access."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9091/headers -H 'Host: test.prometheus.org'\n")),(0,s.kt)("p",null,"Then you will get the metrics you want."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'chever@cloud-native-01:~/api7/cloud_native/tasks/doc_prometheus$ kubectl exec -it -n ingress-apisix apisix-7d6b8577b6-rqhq9 -- curl http://127.0.0.1:9091/apisix/prometheus/metrics\nDefaulted container "apisix" out of: apisix, wait-etcd (init)\n# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in APISIX\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",route="",service="",consumer="",node=""} 1130\napisix_bandwidth{type="ingress",route="",service="",consumer="",node=""} 517\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 13\napisix_etcd_modify_indexes{key="max_modify_index"} 13\napisix_etcd_modify_indexes{key="prev_index"} 13\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 0\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 13\n# HELP apisix_etcd_reachable Config server etcd reachable from APISIX, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="1"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="2"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="5"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="10"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="20"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="50"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="100"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="200"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="500"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="1000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="2000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="5000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="10000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="30000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="60000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="+Inf"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="1"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="2"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="5"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="10"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="20"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="50"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="100"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="200"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="500"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="1000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="2000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="5000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="10000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="30000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="60000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="+Inf"} 5\napisix_http_latency_count{type="apisix",route="",service="",consumer="",node=""} 5\napisix_http_latency_count{type="request",route="",service="",consumer="",node=""} 5\napisix_http_latency_sum{type="apisix",route="",service="",consumer="",node=""} 0\napisix_http_latency_sum{type="request",route="",service="",consumer="",node=""} 0\n# HELP apisix_http_requests_total The total number of client requests since APISIX started\n# TYPE apisix_http_requests_total gauge\napisix_http_requests_total 82\n# HELP apisix_http_status HTTP status codes per service in APISIX\n# TYPE apisix_http_status counter\napisix_http_status{code="404",route="",matched_uri="",matched_host="",service="",consumer="",node=""} 5\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 2346\napisix_nginx_http_current_connections{state="active"} 1\napisix_nginx_http_current_connections{state="handled"} 2346\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="waiting"} 0\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="apisix-7d6b8577b6-rqhq9"} 1\n')),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"This article describes how to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to protect ",(0,s.kt)("em",{parentName:"p"},"Prometheus")," and monitor the Apache APISIX. Currently, only some basic configurations include. We will continue to polish and upgrade, add more metrics and integrate data surface APISIX metrics to improve your monitoring experience."),(0,s.kt)("p",null,"Of course, we welcome all interested parties to contribute to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"Apache APISIX Ingress Controller project")," and look forward to working together to make the APISIX Ingress Controller more comprehensive."))}m.isMDXComponent=!0}}]);