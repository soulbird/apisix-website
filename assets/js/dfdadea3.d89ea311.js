"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54079],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,g=h["".concat(c,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(25773),i=n(30808),r=(n(27378),n(35318)),s=["components"],o={title:"A thoughtful tutorial to get started with Apache APISIX Ingress from concept to practice",author:"Jintao Zhang",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",date:new Date("2021-10-09T00:00:00.000Z"),keywords:["Apache APISIX","Ingress","Kubernetes"],description:"This article describes and explains Apache APISIX Ingress in detail from both theoretical and practical perspectives.",tags:["Technology"]},c=void 0,l={permalink:"/blog/2021/10/09/apisix-ingress-techblog",source:"@site/blog/2021/10/09/apisix-ingress-techblog.md",title:"A thoughtful tutorial to get started with Apache APISIX Ingress from concept to practice",description:"This article describes and explains Apache APISIX Ingress in detail from both theoretical and practical perspectives.",date:"2021-10-09T00:00:00.000Z",formattedDate:"October 9, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:9.33,truncated:!0,authors:[{name:"Jintao Zhang",url:"https://github.com/tao12345666333",imageURL:"https://avatars.githubusercontent.com/u/3264292?v=4"}],prevItem:{title:"New milestone for the Apache APISIX community - over 300 contributors worldwide!",permalink:"/blog/2021/10/13/celebrating-300-contributors-of-apisix"},nextItem:{title:"Apache APISIX community members help openEuler release first innovation version",permalink:"/blog/2021/10/01/openeuler"}},p={authorsImageUrls:[void 0]},u=[{value:"Apache APISIX Ingress Overview",id:"apache-apisix-ingress-overview",children:[{value:"Apache APISIX Ingress Definition",id:"apache-apisix-ingress-definition",children:[]},{value:"Apache APISIX in a nutshell",id:"apache-apisix-in-a-nutshell",children:[]}]},{value:"APISIX Ingress vs K8s Ingress Nginx",id:"apisix-ingress-vs-k8s-ingress-nginx",children:[{value:"Configuration level",id:"configuration-level",children:[]},{value:"Richness",id:"richness",children:[]},{value:"Architecture separation",id:"architecture-separation",children:[]}]},{value:"APISIX Ingress Features Explained",id:"apisix-ingress-features-explained",children:[{value:"CRD Extensions",id:"crd-extensions",children:[]},{value:"Custom resources",id:"custom-resources",children:[]}]},{value:"APISIX Ingress Hands-On Practice",id:"apisix-ingress-hands-on-practice",children:[{value:"Practice Scenario 1: Traffic Segmentation",id:"practice-scenario-1-traffic-segmentation",children:[]},{value:"Practice Scenario 2: Configuring Authentication",id:"practice-scenario-2-configuring-authentication",children:[]},{value:"Practice Scenario 3: K8s Resource Extensions",id:"practice-scenario-3-k8s-resource-extensions",children:[]}]},{value:"Future Plans",id:"future-plans",children:[]}],h={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Jintao Zhang, Apache APISIX Committer, Kubernetes Ingress Nginx Reviewer, and contributor to several cloud-native open source projects.")),(0,r.kt)("h2",{id:"apache-apisix-ingress-overview"},"Apache APISIX Ingress Overview"),(0,r.kt)("h3",{id:"apache-apisix-ingress-definition"},"Apache APISIX Ingress Definition"),(0,r.kt)("p",null,"In the K8s ecosystem, Ingress is a resource that represents the entry point for K8s traffic. To make it effective, an Ingress Controller is needed to listen to the Ingress resources in K8s and resolve the rules and actually carry the traffic for those resources. The most widely used Ingress Controller implementations in today's trends are Kubernetes Ingress Nginx."),(0,r.kt)("p",null,"APISIX Ingress is another implementation of the Ingress Controller. The main difference with Kubernetes Ingress Nginx is that APISIX Ingress uses Apache APISIX as the actual data plane that carries business traffic. As shown in the figure below, when a user requests a specific service/API/web page, the entire business traffic/user request is transferred to the K8s cluster through an external proxy and then processed by APISIX Ingress."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765366863-8964a75c-0c16-4683-ad9b-c8c83ac64ec6.png",alt:"APISIX Ingress Architecture"})),(0,r.kt)("p",null,"As you can see from the above diagram, APISIX Ingress is divided into two parts. One part is the APISIX Ingress Controller, which is the control plane that will do the configuration management and distribution. The other part is the APISIX Proxy Pod, which is responsible for carrying business traffic and is implemented by means of CRD (Custom Resource Definitions)."),(0,r.kt)("h3",{id:"apache-apisix-in-a-nutshell"},"Apache APISIX in a nutshell"),(0,r.kt)("p",null,"We mentioned earlier that APISIX Ingress uses Apache APISIX as the data surface that actually carries business traffic, so what does the Apache APISIX project do?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765402660-6b20dd1c-bef6-4dcb-974e-fa80334e0623.png",alt:"Apache APISIX Architecture"})),(0,r.kt)("p",null,"Apache APISIX is the top open source project of the Apache Foundation and is currently the most active open source gateway project. As a dynamic, real-time, high-performance open source API gateway, Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, canary release, service meltdown, authentication, observability, and more."),(0,r.kt)("p",null,"Apache APISIX helps enterprises handle API and microservice traffic quickly and securely with features such as flow-limiting authentication, logging security features, and support for rich custom plug-ins. There are also currently relevant integrations with many open source projects such as Apache SkyWalking, Prometheus and other such components."),(0,r.kt)("h2",{id:"apisix-ingress-vs-k8s-ingress-nginx"},"APISIX Ingress vs K8s Ingress Nginx"),(0,r.kt)("p",null,"Since I am involved in the development and maintenance of both APISIX Ingress and K8s Ingress Nginx, many people ask me how to choose between these two projects. Or why do you want to do APISIX Ingress when you have K8s Ingress Nginx."),(0,r.kt)("h3",{id:"configuration-level"},"Configuration level"),(0,r.kt)("p",null,"In APISIX Ingress, we have added some rich and flexible configurations, such as canary release deployment through a single configuration file. However, in K8s Ingress Nginx, you need at least two Ingress resource files to achieve the above effect."),(0,r.kt)("h3",{id:"richness"},"Richness"),(0,r.kt)("p",null,"In terms of richness, because Apache APISIX is feature-rich and allows for multiple plugins, using APISIX Ingress eliminates the need to configure additional features yourself, allowing you to spend more time on actual development."),(0,r.kt)("h3",{id:"architecture-separation"},"Architecture separation"),(0,r.kt)("p",null,"APISIX Ingress uses a separate architecture for the data plane and control plane, so users can choose to deploy the data plane inside/outside the K8s cluster. However, K8s Ingress Nginx puts the control plane and the data plane in the same Pod, so if something happens to the Pod or the control plane, the whole Pod will hang, which will affect business traffic."),(0,r.kt)("p",null,"This architectural separation gives users a more convenient deployment option and facilitates data migration and usage in business architecture adjustment scenarios."),(0,r.kt)("h2",{id:"apisix-ingress-features-explained"},"APISIX Ingress Features Explained"),(0,r.kt)("p",null,"Since Apache APISIX is a fully dynamic, high-performance gateway, APISIX Ingress itself supports full dynamics, including routing, SSL certificates, upstream, plug-ins, and more."),(0,r.kt)("p",null,"APISIX Ingress also has the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRD support for easier understanding of declarative configurations; while state checking ensures quick access to the synchronized state of declarative configurations"),(0,r.kt)("li",{parentName:"ul"},"Support for advanced route matching rules and custom resources, which can be extended with more than 50 official Apache APISIX plug-ins & customer-defined plug-ins"),(0,r.kt)("li",{parentName:"ul"},"Support for K8s native Ingress configuration"),(0,r.kt)("li",{parentName:"ul"},"Support for traffic slicing"),(0,r.kt)("li",{parentName:"ul"},"Support for gRPC plaintext and TCP Layer 4 proxy"),(0,r.kt)("li",{parentName:"ul"},"Automatic service registration and discovery, no fear of scaling up or down"),(0,r.kt)("li",{parentName:"ul"},"More flexible load balancing policy with health check function")),(0,r.kt)("p",null,"The following is a detailed introduction to CRD and custom resources."),(0,r.kt)("h3",{id:"crd-extensions"},"CRD Extensions"),(0,r.kt)("p",null,"We mentioned CRD in the previous introduction, but how does APISIX Ingress use CRD extensions?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765449155-0e25f1d0-e62a-4c4f-ab9a-019f609ed5fb.png",alt:"CRD Extensions"})),(0,r.kt)("p",null,"At the user level, when a request is made by a Client and arrives at Apache APISIX, the corresponding service traffic is directly transferred to the backend (e.g., Service Pod), thus completing the forwarding process. This process does not need to go through the Ingress Controller, which can ensure that if there are problems, or changes, expansion and contraction or migration processing, it will not affect the users and business traffic."),(0,r.kt)("p",null,"On the configuration side, users can apply custom CRD configurations to K8s clusters via kubectl apply, and Ingress Controller will continuously watch these resource changes to apply the corresponding configurations to Apache APISIX."),(0,r.kt)("h3",{id:"custom-resources"},"Custom resources"),(0,r.kt)("p",null,"APISIX Ingress currently supports the following 5 categories of custom resources related to routing, upstream, consumer, certificate related and cluster public configuration."),(0,r.kt)("h4",{id:"apisix-route"},"APISIX Route"),(0,r.kt)("p",null,"The top-level configuration for the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," attribute in the custom resource APISIX Route is ",(0,r.kt)("inlineCode",{parentName:"p"},"http"),". But actually ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," supports both configurations, ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.http")," as in the example below, which is mainly used for Layer 7 proxies, and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.stream"),", which is used for Layer 4 proxies. In the configuration file, we first customize a rule for it, namely the relevant parameter under match."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765501091-e64ff6e5-5e3e-4b0f-adcc-7ff418edb52c.png",alt:"APISIX Route"})),(0,r.kt)("p",null,"As the above back-end configuration example uses the same Service, you can adjust it according to the scenario in actual use. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"weight")," attribute is used to configure the relevant service weight. With the above configuration, a complete set of routing customization resources can be implemented."),(0,r.kt)("h4",{id:"apisix-upstream-upstream"},"APISIX Upstream (Upstream)"),(0,r.kt)("p",null,"When configuring APISIX Upstream, you need to pay attention to the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," to be consistent with the Service of K8s cluster, so as to ensure that the subsequent APISIX Ingress Controller can accurately match its corresponding traffic."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765534667-3ce978ae-2d85-4de7-8a57-3c5be5f57604.png",alt:"APISIX Upstream"})),(0,r.kt)("p",null,"In the configuration file, ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.loadbalancer")," is mainly responsible for setting the load balancing policy, and there are various policy modes to choose from. ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.schem"),"e is for the protocol type configuration, currently only HTTP and gRPC protocols are supported. ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.healthCheck")," is mainly for setting the health check function, such as setting its active status, effective protocol and path and final feedback and other parameters configuration."),(0,r.kt)("h4",{id:"apisix-consumer"},"APISIX Consumer"),(0,r.kt)("p",null,"The APISIX Consumer configuration mainly adds authentication-related features, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.authParameter"),", which currently supports ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicAuth")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyAuth"),", the two more common types of authentication."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765580844-9d17d699-fa45-4b43-9ed9-f8ea9c9cab48.png",alt:"APISIX Consumer"})),(0,r.kt)("p",null,"You can configure the associated ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", or directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),", which is more secure than the plaintext configuration of the former."),(0,r.kt)("h4",{id:"apisix-tls-certificate"},"APISIX TLS (certificate)"),(0,r.kt)("p",null,"APISIX TLS is mainly for certificate management. As the example shows, users can configure multiple domains via ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts"),", and the parameters under ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," are the corresponding configuration certificates."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765614989-88b363c2-3805-4159-abfc-bac1b055559b.png",alt:"APISIX TLS"})),(0,r.kt)("p",null,"Apache APISIX TLS also comes with ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.client")," for configuring mTLS two-way authentication."),(0,r.kt)("h4",{id:"apisix-config"},"APISIX Config"),(0,r.kt)("p",null,"The Config types supported by custom resources are described in two ways."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765647605-6ad1ba44-06fd-475d-a6ae-925b3cc9c1ce.png",alt:"APISIX Cluster Config"})),(0,r.kt)("p",null,"One type is APISIX Cluster Config, which is mainly used for some generic configurations. Currently it supports global use of Prometheus plug-in/global configuration SkyWalking in K8s or Apache APISIX, and we will add some other generic configurations in subsequent development."),(0,r.kt)("p",null,"Another one is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/689"},"APISIX Plugin Config")," that we are currently working on in PR. If you are interested, you can also click the link to join the discussion. Plugin Config is mainly a unified collection of common plug-in configurations, for example, some of the same configuration, users can use APISIX Plugin Config to apply to multiple routes at the same time, eliminating the tedious steps of multiple independent configurations."),(0,r.kt)("h2",{id:"apisix-ingress-hands-on-practice"},"APISIX Ingress Hands-On Practice"),(0,r.kt)("p",null,"Currently, you can deploy APISIX Ingress via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"Helm Charts"),". You can deploy both Apache APISIX and APISIX Ingress, including the etcd required for Apache APISIX, with a single command, which is very simple."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765686788-156b0641-aa78-4de8-833d-a187772470a5.png",alt:"Installation Steps"})),(0,r.kt)("h3",{id:"practice-scenario-1-traffic-segmentation"},"Practice Scenario 1: Traffic Segmentation"),(0,r.kt)("p",null,"By using APISIX Ingress, you can achieve the effect of proportional traffic slicing, as follows."),(0,r.kt)("h4",{id:"step-1-configure-apisix-upstream"},"Step 1: Configure APISIX Upstream"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765722480-edf8b1ec-98a4-4c18-bd3d-843c73f132bc.png",alt:"Configure APISIX Upstream"})),(0,r.kt)("h4",{id:"step-2-configure-apisix-route"},"Step 2: Configure APISIX Route"),(0,r.kt)("p",null,"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"subset")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"weight")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"backends")," to split the incoming user request traffic. The example below shows that 90% of the traffic will go to v1 and 10% of the traffic will go to v2."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765771090-1e51e66c-0979-43b4-852b-28f2284a5d4e.png",alt:"Configure APISIX Route"})),(0,r.kt)("p",null,"With the above two steps, it is very easy to slice and dice traffic proportionally to achieve scenarios like canary release.\nFor more details, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh/blog/traffic-split-in-apache-apisix-ingress-controller"},"Traffic Segmentation in Apache APISIX Ingress Controller"),"."),(0,r.kt)("h3",{id:"practice-scenario-2-configuring-authentication"},"Practice Scenario 2: Configuring Authentication"),(0,r.kt)("p",null,"If you want to configure Basic Auth for certain routes in APISIX Ingress, you can refer to the following actions."),(0,r.kt)("h4",{id:"step-1-create-apisix-consumer-resource"},"Step 1: Create APISIX Consumer resource"),(0,r.kt)("p",null,"As mentioned earlier, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"basicAuth")," to the APISIX Consumer configuration and specify a username and password for it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765803898-7a30c663-7ba8-4064-8772-a19c56cef191.png",alt:"Create Resource"})),(0,r.kt)("h4",{id:"step-2-configure-the-apisix-route-and-add-authentication-related-parameters"},"Step 2: Configure the APISIX Route and add authentication-related parameters"),(0,r.kt)("p",null,"In the custom resource APISIX Route, simply turn it on and specify the authentication type by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"authenticatio"),"n to the backend."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765828596-9a0f0142-f201-4004-b85d-a34de4ee13dc.png",alt:"Add authentication parameters"})),(0,r.kt)("p",null,"With the above steps, it is possible to use Consumer to complete the relevant configuration authentication."),(0,r.kt)("h3",{id:"practice-scenario-3-k8s-resource-extensions"},"Practice Scenario 3: K8s Resource Extensions"),(0,r.kt)("p",null,"As we mentioned at the beginning, APISIX Ingress supports not only custom resources, but also K8s native Ingress resources."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765859904-bc48dcc5-cd7a-4875-b248-5c4c64a2d7c5.png",alt:"K8s native resources"})),(0,r.kt)("p",null,"The image above shows the K8s Ingress resource. Normally if you want to do rewrite on a resource, you can add annotation configuration attributes. This way when the user carries the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org")," request, it can be redirected to /ip via the path /sample."),(0,r.kt)("p",null,"When the above requirement uses APISIX Ingress, simply add a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/ingress.class: apisix")," to Ingress to specify the APISIX Ingress Controller to listen to this resource, and configure ",(0,r.kt)("inlineCode",{parentName:"p"},'k8s.apisix.apache.org/rewrite-target: "/ip"')," to complete the redirection to the /ip path."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765888876-d2d252ee-706c-49f3-b630-03a7e72a0620.png",alt:"APISIX Ingress Resources"})),(0,r.kt)("p",null,"The above example is just one of the ways APISIX Ingress currently supports native K8s Ingress, for more examples you can check the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/practices/proxy-the-httpbin-service-with-ingress"},"specific documentation")," for reference and use."),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"APISIX Ingress will continue to be updated in terms of functionality and ecology, and the current phase has been completed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/en/latest/practices/manage-certificates-with-cert-manager.md"},"APISIX Ingress and Cert-manager integration"),", and the following goals will be achieved step by step."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"complete Kubernetes V1.22+ and CRD V1 version adaptation support (completed, soon to be released in APISIX Ingress V1.3 version)"),(0,r.kt)("li",{parentName:"ol"},"support for Gateway API (expected in Q4)"),(0,r.kt)("li",{parentName:"ol"},"extend the new architecture to allow users to use APISIX Ingress without the need to use etcd"),(0,r.kt)("li",{parentName:"ol"},"enrich the product ecology and expand the APISIX Ingress community")),(0,r.kt)("p",null,"Finally, we hope you can participate in the project more often, for example, there will be an APISIX Ingress community meeting every two weeks on Wednesday at 2 pm, and we will synchronize the current progress of the project or the problems we encountered. Keep an eye on the Apache APISIX video to participate in the live community meetings."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/614"},"Click here")," for more details about the APISIX Ingress community meetings."))}d.isMDXComponent=!0}}]);