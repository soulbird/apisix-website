"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52921],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39583:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(25773),o=a(30808),i=(a(27378),a(35318)),r=["components"],l={title:"How to Easily Deploy Apache APISIX in Kubernetes",authors:[{name:"Bozhong Yu",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Kubernetes","APISIX Dashboard","Deployment","Cluster"],description:"Apache APISIX currently supports multiple ways to install and deploy. This article focuses on how to deploy Apache APISIX and APISIX-Dashboard in a Kubernetes environment.",tags:["Technology","Kubernetes"]},s=void 0,p={permalink:"/blog/2021/12/15/deploy-apisix-in-kubernetes",source:"@site/blog/2021/12/15/deploy-apisix-in-kubernetes.md",title:"How to Easily Deploy Apache APISIX in Kubernetes",description:"Apache APISIX currently supports multiple ways to install and deploy. This article focuses on how to deploy Apache APISIX and APISIX-Dashboard in a Kubernetes environment.",date:"2021-12-15T00:00:00.000Z",formattedDate:"December 15, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:4.83,truncated:!0,authors:[{name:"Bozhong Yu",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4",imageURL:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Webinar | Apache APISIX \xd7 Apache RocketMQ Online Meetup",permalink:"/blog/2021/12/16/apisix-with-rocketmq-meetup"},nextItem:{title:"Monitor APISIX Ingress Controller with Prometheus",permalink:"/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus"}},c={authorsImageUrls:[void 0,void 0]},d=[{value:"Environment Preparation",id:"environment-preparation",children:[]},{value:"Option 1: Installation via Helm",id:"option-1-installation-via-helm",children:[{value:"Deploying Apache APISIX",id:"deploying-apache-apisix",children:[]},{value:"Deploying Apache APISIX-Dashboard",id:"deploying-apache-apisix-dashboard",children:[]}]},{value:"Option 2: Deployment via yaml file",id:"option-2-deployment-via-yaml-file",children:[{value:"Deploying APISIX and Dashboard",id:"deploying-apisix-and-dashboard",children:[]}]},{value:"Summary",id:"summary",children:[]}],u={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache APISIX currently supports multiple ways to install and deploy. This article focuses on how to deploy Apache APISIX and APISIX-Dashboard in a Kubernetes environment.")),(0,i.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance open source API gateway that provides rich traffic management features such as load balancing, dynamic upstream, canary release, service meltdown, authentication, observability, and more."),(0,i.kt)("p",null,"And Kubernetes, an open source system for automatically deploying, scaling, and managing containerized applications, is designed to provide users with support for automatic deployment ",(0,i.kt)("strong",{parentName:"p"},"across host clusters"),", scaling, and related features such as running application containers. Here we have compiled two easy-to-follow installation ideas on how to quickly deploy Apache APISIX in K8s and present related information via Dashboard."),(0,i.kt)("h2",{id:"environment-preparation"},"Environment Preparation"),(0,i.kt)("p",null,"Before deploying, make sure your network is up and ready for K8s clustering.\nHere, we recommend using Kind to build the K8s cluster test environment locally, it is very convenient and easy to get started. After installing Kind according to the ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"official documentation"),", you can set up the K8s cluster environment with a single command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster\n")),(0,i.kt)("h2",{id:"option-1-installation-via-helm"},"Option 1: Installation via Helm"),(0,i.kt)("p",null,"Helm is mainly used to manage applications in Kubernetes. Helm is also known as the package manager in Kubernetes, similar to apt, yum, and pacman, which are package managers in Linux."),(0,i.kt)("p",null,"Currently, Apache APISIX has provided ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart repository"),", and users can easily deploy and uninstall Apache APISIX via Helm."),(0,i.kt)("h3",{id:"deploying-apache-apisix"},"Deploying Apache APISIX"),(0,i.kt)("p",null,"First add the Apache APISIX Helm Chart address and update the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\n")),(0,i.kt)("p",null,"Install Apache APISIX (this demo installs Apache APISIX into Default Namespace, for custom Namespace, please ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/namespaces/#creating-a-new-namespace"},"refer to the documentation"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm install apisix apisix/apisix\n")),(0,i.kt)("p",null,"When the above command is executed successfully, the following return message will be obtained."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\u25b6 helm install apisix apisix/apisix\nNAME: apisix\nLAST DEPLOYED: Sun Dec  5 14:43:19 2021\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\n1. Get the application URL by running these commands:\n  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services apisix-gateway)\n  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")\n  echo http://$NODE_IP:$NODE_PORT\n')),(0,i.kt)("p",null,"With an Apache APISIX deployment installed in the above manner, the Admin API is exposed on port ",(0,i.kt)("inlineCode",{parentName:"p"},"9180")," in the cluster and the Gateway is exposed on port ",(0,i.kt)("inlineCode",{parentName:"p"},"80"),". To access the Admin API, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," to forward the port to a port on the local host."),(0,i.kt)("p",null,"Here is a demonstration of port-forwarding to port ",(0,i.kt)("inlineCode",{parentName:"p"},"9080")," on the local machine, mainly to synchronize with the official Apache APISIX documentation and to facilitate subsequent verification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/apisix-admin 9080:9180\n")),(0,i.kt)("p",null,"After that, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/getting-started/"},"Apache APISIX Quick Start Guide")," to add and bind a Route to Upstream and other related operations."),(0,i.kt)("p",null,"Finally, the verification of the new route is performed."),(0,i.kt)("p",null,"Since this article uses Kind to build a local K8s cluster, the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-gateway")," NodePort is not accessible, so an additional step is needed before validation, i.e. forwarding port ",(0,i.kt)("inlineCode",{parentName:"p"},"80")," from the cluster to port ",(0,i.kt)("inlineCode",{parentName:"p"},"8080")," on the local machine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/apisix-gateway 8080:80\n")),(0,i.kt)("p",null,"Start the verification process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "http://127.0.0.1:8080/get?foo1=bar1&foo2=bar2" -H "Host: httpbin.org"\n')),(0,i.kt)("p",null,"The expected return results can be seen in the example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "foo1": "bar1",\n    "foo2": "bar2"\n  },\n  "headers": {\n    "Accept": "*/*",\n    "Accept-Encoding": "gzip",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-61ac63b5-348d3c5567db393462cd0666",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "origin": "127.0.0.1, 192.46.208.201",\n  "url": "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n}\n')),(0,i.kt)("h3",{id:"deploying-apache-apisix-dashboard"},"Deploying Apache APISIX-Dashboard"),(0,i.kt)("p",null,"As with deploying Apache APISIX, installing Apache APISIX-Dashboard via Helm requires only one command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm install apisix-dashboard apisix/apisix-dashboard\n")),(0,i.kt)("p",null,"Next, forward the Dashboard port to the local machine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/apisix-dashboard 8080:80\n")),(0,i.kt)("p",null,"Finally, visit your ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080")," to see the login page."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The node information of Apache APISIX will not appear in the system information of Apache APISIX-Dashboard deployed here. The ",(0,i.kt)("inlineCode",{parentName:"p"},"server-info")," plug-in is not enabled by default if installed by Helm, so you can add it in the apisix configmap if needed."),(0,i.kt)("p",{parentName:"div"},"For the configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"server-info"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/server-info/"},"relevant documentation"),"."))),(0,i.kt)("h2",{id:"option-2-deployment-via-yaml-file"},"Option 2: Deployment via yaml file"),(0,i.kt)("p",null,"Deploying Apache APISIX using a yaml file is easier than the Helm deployment method described above, and allows you to customize the configuration more easily."),(0,i.kt)("h3",{id:"deploying-apisix-and-dashboard"},"Deploying APISIX and Dashboard"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have already deployed using method 1, you will need to clear the ETCD PVC storage before proceeding with the following installation."))),(0,i.kt)("p",null,"The yaml files needed to deploy Apache APISIX, APISIX-Dashboard, and etcd clusters are already organized here, and you can call the next mentioned files through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zaunist/apisix-on-kubernetes"},"apisix-on-kubernetes repository"),"."),(0,i.kt)("p",null,"First clone the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-on-kubernetes")," repository mentioned above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/zaunist/apisix-on-kubernetes.git\n")),(0,i.kt)("p",null,"Then execute the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f etcd.yaml\nkubectl apply -f apisix.yaml\nkubectl apply -f apisix-dashboard.yaml\n")),(0,i.kt)("p",null,"Wait for the Pod to fully boot and forward the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-dashboard")," port to the local machine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/apisix-dashboard 8080:80\n")),(0,i.kt)("p",null,"Finally, visit ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080")," to see the Dashboard related information. The default login password is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),",",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To visualize the deployment during the installation process, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/dashboard"},"Kubernetes Dashboard")," to see the Pod running on the web side."))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This article has introduced two ways to deploy Apache APISIX and Apache APISIX-Dashboard in Kubernetes. Both approaches have the same ultimate goal, but each has its own advantages in use."),(0,i.kt)("p",null,"For example, it is very easy to install using Helm and perform all operations with just a few commands, while deploying via YAML files makes it easier to make custom configuration changes and more manageable."),(0,i.kt)("p",null,"How to install and deploy Apache APISIX in a real-world scenario depends on your usage habits, so here are just two ideas for you to consider. We hope that you can develop more interesting techniques and methods in the subsequent use of Apache APISIX."))}h.isMDXComponent=!0}}]);