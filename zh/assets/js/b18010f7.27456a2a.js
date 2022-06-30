"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11196],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32362:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],l={title:"Rebuild Docker image"},c=void 0,s={unversionedId:"deploy-with-docker",id:"version-2.11/deploy-with-docker",isDocsHomePage:!1,title:"Rebuild Docker image",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.11/deploy-with-docker.md",sourceDirName:".",slug:"/deploy-with-docker",permalink:"/zh/docs/dashboard/2.11/deploy-with-docker",editUrl:null,tags:[],version:"2.11",frontMatter:{title:"Rebuild Docker image"},sidebar:"version-2.11/docs",previous:{title:"Basic Deploy",permalink:"/zh/docs/dashboard/2.11/install"},next:{title:"Development Guide",permalink:"/zh/docs/dashboard/2.11/develop"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Launch",id:"launch",children:[]},{value:"Other",id:"other",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," We support Docker Image, please visit ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix-dashboard"},"DockerHub")," for more information. The following steps are for building Docker Image manually."),(0,o.kt)("p",null,"To build the Dashboard with Docker, you simply download the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," file from the ",(0,o.kt)("strong",{parentName:"p"},"root directory")," to your device (no need to download all source codes) then follow this guide."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before using Docker to build images and start containers, make sure that the following dependencies are installed and running in your environment."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Execute the build command in the directory where the Dockerfile is located (by default, the project root), specifying the tag manually.\n$ docker build -t apisix-dashboard:$tag .\n\n# For users in mainland China, the `ENABLE_PROXY` parameter can be provided to speed up module downloads.\n$ docker build -t apisix-dashboard:$tag . --build-arg ENABLE_PROXY=true\n\n# If you want to use the latest codes to build, you can specify the `APISIX_DASHBOARD_VERSION` parameter to `master`.\n# This parameter can also be specified as branch name of a specific version, such as `v2.1.1`.\n$ docker build -t apisix-dashboard:$tag . --build-arg APISIX_DASHBOARD_VERSION=master\n")),(0,o.kt)("h2",{id:"launch"},"Launch"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Preparing configuration files")),(0,o.kt)("p",null,"Before starting the container, the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.yaml")," needs to be prepared inside the ",(0,o.kt)("strong",{parentName:"p"},"host")," to override the default ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/api/conf/conf.yaml"},"configuration file")," inside the container."),(0,o.kt)("p",null,"Kindly note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only when ",(0,o.kt)("inlineCode",{parentName:"li"},"conf.listen.host")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," can the external network access the services within the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conf.etcd.endpoints")," must be able to access the ",(0,o.kt)("inlineCode",{parentName:"li"},"etcd")," service within the container. For example: use ",(0,o.kt)("inlineCode",{parentName:"li"},"host.docker.internal:2379")," so that the container can access ",(0,o.kt)("inlineCode",{parentName:"li"},"etcd")," on the host network.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Launch the Dashboard")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# /path/to/conf.yaml Requires an absolute path pointing to the configuration file mentioned above.\n$ docker run -d -p 9000:9000 -v /path/to/conf.yaml:/usr/local/apisix-dashboard/conf/conf.yaml --name apisix-dashboard apisix-dashboard:$tag\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check if the container started successfully")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker ps -a\n")),(0,o.kt)("p",null,"If the container ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-dashboard")," is ok, visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Stop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker stop apisix-dashboard\n")),(0,o.kt)("h2",{id:"other"},"Other"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Caching is not recommended when building a image multiple times.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker build -t apisix-dashboard:$tag . --no-cache=true\n")))}u.isMDXComponent=!0}}]);