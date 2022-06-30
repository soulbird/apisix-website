"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87482],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38601:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var n=a(25773),r=a(30808),l=(a(27378),a(35318)),i=a(64535),s=a(70517),o=["components"],p={title:"APISIX \u5b89\u88c5\u6307\u5357",keywords:["APISIX","APISIX \u5b89\u88c5\u6559\u7a0b","\u90e8\u7f72 APISIX"],description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86 APISIX \u591a\u79cd\u5b89\u88c5\u65b9\u6cd5\u3002"},c=void 0,u={unversionedId:"how-to-build",id:"version-2.14/how-to-build",isDocsHomePage:!1,title:"APISIX \u5b89\u88c5\u6307\u5357",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86 APISIX \u591a\u79cd\u5b89\u88c5\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.14/how-to-build.md",sourceDirName:".",slug:"/how-to-build",permalink:"/zh/docs/apisix/how-to-build",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"APISIX \u5b89\u88c5\u6307\u5357",keywords:["APISIX","APISIX \u5b89\u88c5\u6559\u7a0b","\u90e8\u7f72 APISIX"],description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86 APISIX \u591a\u79cd\u5b89\u88c5\u65b9\u6cd5\u3002"},sidebar:"version-2.14/docs",previous:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/apisix/getting-started"},next:{title:"batch-requests",permalink:"/zh/docs/apisix/plugins/batch-requests"}},d=[{value:"\u5b89\u88c5 APISIX",id:"\u5b89\u88c5-apisix",children:[{value:"\u901a\u8fc7 RPM \u4ed3\u5e93\u5b89\u88c5",id:"\u901a\u8fc7-rpm-\u4ed3\u5e93\u5b89\u88c5",children:[]},{value:"\u901a\u8fc7 RPM \u5305\u79bb\u7ebf\u5b89\u88c5\uff1a",id:"\u901a\u8fc7-rpm-\u5305\u79bb\u7ebf\u5b89\u88c5",children:[]},{value:"\u7ba1\u7406 APISIX \u670d\u52a1",id:"\u7ba1\u7406-apisix-\u670d\u52a1",children:[]}]},{value:"\u5b89\u88c5 etcd",id:"\u5b89\u88c5-etcd",children:[]},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",children:[{value:"\u66f4\u65b0 Admin API key",id:"\u66f4\u65b0-admin-api-key",children:[]},{value:"\u4e3a APISIX \u6dfb\u52a0 systemd \u914d\u7f6e\u6587\u4ef6",id:"\u4e3a-apisix-\u6dfb\u52a0-systemd-\u914d\u7f6e\u6587\u4ef6",children:[]}]}],m={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u4f60\u7684\u73af\u5883\u4e2d\u5b89\u88c5\u5e76\u8fd0\u884c APISIX\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u5feb\u901f\u8fd0\u884c Apache APISIX\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/getting-started"},"\u5165\u95e8\u6307\u5357"),"\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-apisix"},"\u5b89\u88c5 APISIX"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u4efb\u610f\u4e00\u79cd\u65b9\u5f0f\u5b89\u88c5 APISIX\uff1a"),(0,l.kt)(i.Z,{groupId:"install-method",defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Helm",value:"helm"},{label:"RPM",value:"rpm"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("p",null,"\u4f7f\u7528\u6b64\u65b9\u6cd5\u5b89\u88c5 APISIX\uff0c\u4f60\u9700\u8981\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),"\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker"},"apisix-docker")," \u4ed3\u5e93\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/apisix-docker.git\ncd apisix-docker/example\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u542f\u7528 APISIX\u3002"),(0,l.kt)(i.Z,{groupId:"cpu-arch",defaultValue:"x86",values:[{label:"x86",value:"x86"},{label:"ARM/M1",value:"arm"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"x86",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -p docker-apisix up -d\n"))),(0,l.kt)(s.Z,{value:"arm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -p docker-apisix -f docker-compose-arm64.yml up -d\n"))))),(0,l.kt)(s.Z,{value:"helm",mdxType:"TabItem"},(0,l.kt)("p",null,"\u901a\u8fc7 Helm \u5b89\u88c5 APISIX\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\nhelm install apisix apisix/apisix --create-namespace  --namespace apisix\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"apisix-helm-chart")," \u4ed3\u5e93\u627e\u5230\u5176\u4ed6\u7ec4\u4ef6\u3002")),(0,l.kt)(s.Z,{value:"rpm",mdxType:"TabItem"},(0,l.kt)("p",null,"\u8be5\u5b89\u88c5\u65b9\u6cd5\u9002\u7528\u4e8e CentOS 7 \u548c CentOS 8\u3002\u5982\u679c\u4f60\u9009\u62e9\u8be5\u65b9\u6cd5\u5b89\u88c5 APISIX\uff0c\u9700\u8981\u5148\u5b89\u88c5 etcd\u3002\u5177\u4f53\u5b89\u88c5\u65b9\u6cd5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"#%E5%AE%89%E8%A3%85-etcd"},"\u5b89\u88c5 etcd"),"\u3002"),(0,l.kt)("h3",{id:"\u901a\u8fc7-rpm-\u4ed3\u5e93\u5b89\u88c5"},"\u901a\u8fc7 RPM \u4ed3\u5e93\u5b89\u88c5"),(0,l.kt)("p",null,"\u5982\u679c\u5f53\u524d\u7cfb\u7edf",(0,l.kt)("strong",{parentName:"p"},"\u6ca1\u6709\u5b89\u88c5 OpenResty"),"\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5 OpenResty \u548c APISIX \u4ed3\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://repos.apiseven.com/packages/centos/apache-apisix-repo-1.0-1.noarch.rpm\n")),(0,l.kt)("p",null,"\u5982\u679c\u5df2\u5b89\u88c5 OpenResty \u7684\u5b98\u65b9 RPM \u4ed3\u5e93\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 APISIX \u7684 RPM \u4ed3\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum-config-manager --add-repo https://repos.apiseven.com/packages/centos/apache-apisix.repo\n")),(0,l.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u540e\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 APISIX\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install apisix\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u4e5f\u53ef\u4ee5\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684 APISIX\uff08\u672c\u793a\u4f8b\u4e3a APISIX v2.13.1 LTS \u7248\u672c\uff09\uff1a"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install apisix-2.13.1\n")))),(0,l.kt)("h3",{id:"\u901a\u8fc7-rpm-\u5305\u79bb\u7ebf\u5b89\u88c5"},"\u901a\u8fc7 RPM \u5305\u79bb\u7ebf\u5b89\u88c5\uff1a"),(0,l.kt)("p",null,"\u5c06 APISIX \u79bb\u7ebf RPM \u5305\u4e0b\u8f7d\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix")," \u6587\u4ef6\u5939\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p apisix\nsudo yum install -y https://repos.apiseven.com/packages/centos/apache-apisix-repo-1.0-1.noarch.rpm\nsudo yum clean all && yum makecache\nsudo yum install -y --downloadonly --downloaddir=./apisix apisix\n")),(0,l.kt)("p",null,"\u7136\u540e\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix")," \u6587\u4ef6\u5939\u590d\u5236\u5230\u76ee\u6807\u4e3b\u673a\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install ./apisix/*.rpm\n")),(0,l.kt)("h3",{id:"\u7ba1\u7406-apisix-\u670d\u52a1"},"\u7ba1\u7406 APISIX \u670d\u52a1"),(0,l.kt)("p",null,"APISIX \u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316 NGINX \u914d\u7f6e\u6587\u4ef6\u548c etcd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 APISIX\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apisix start\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix help")," \u547d\u4ee4\uff0c\u901a\u8fc7\u67e5\u770b\u8fd4\u56de\u7ed3\u679c\uff0c\u83b7\u53d6\u5176\u4ed6\u64cd\u4f5c\u7684\u547d\u4ee4\u53ca\u63cf\u8ff0\u3002"))))),(0,l.kt)("h2",{id:"\u5b89\u88c5-etcd"},"\u5b89\u88c5 etcd"),(0,l.kt)("p",null,"APISIX \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},"etcd")," \u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\u8fdb\u884c\u4fdd\u5b58\u548c\u540c\u6b65\u914d\u7f6e\u3002\u5728\u5b89\u88c5 APISIX \u4e4b\u524d\uff0c\u9700\u8981\u5728\u4f60\u7684\u4e3b\u673a\u4e0a\u5b89\u88c5 etcd\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u5b89\u88c5 APISIX \u65f6\u9009\u62e9\u4e86 Docker \u6216 Helm \u5b89\u88c5\uff0c\u90a3\u4e48 etcd \u5c06\u4f1a\u81ea\u52a8\u5b89\u88c5\uff1b\u5982\u679c\u4f60\u9009\u62e9\u5176\u4ed6\u65b9\u6cd5\u6216\u8005\u9700\u8981\u624b\u52a8\u5b89\u88c5 APISIX\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\u5b89\u88c5 etcd\uff1a"),(0,l.kt)(i.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ETCD_VERSION='3.4.18'\nwget https://github.com/etcd-io/etcd/releases/download/v${ETCD_VERSION}/etcd-v${ETCD_VERSION}-linux-amd64.tar.gz\ntar -xvf etcd-v${ETCD_VERSION}-linux-amd64.tar.gz && \\\n  cd etcd-v${ETCD_VERSION}-linux-amd64 && \\\n  sudo cp -a etcd etcdctl /usr/bin/\nnohup etcd >/tmp/etcd.log 2>&1 &\n"))),(0,l.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install etcd\nbrew services start etcd\n")))),(0,l.kt)("h2",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,l.kt)("h3",{id:"\u66f4\u65b0-admin-api-key"},"\u66f4\u65b0 Admin API key"),(0,l.kt)("p",null,"\u5efa\u8bae\u4fee\u6539 Admin API \u7684 key\uff0c\u4fdd\u62a4 APISIX \u7684\u5b89\u5168\u3002"),(0,l.kt)("p",null,"\u8bf7\u53c2\u8003\u5982\u4e0b\u4fe1\u606f\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'apisix:\n  admin_key\n    -\n      name: "admin"\n      key: newsupersecurekey  # \u8bf7\u4fee\u6539 key \u7684\u503c\n      role: admin\n')),(0,l.kt)("p",null,"\u66f4\u65b0\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u65b0\u7684 key \u8bbf\u95ee Admin API\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/routes?api_key=newsupersecurekey -i\n")),(0,l.kt)("h3",{id:"\u4e3a-apisix-\u6dfb\u52a0-systemd-\u914d\u7f6e\u6587\u4ef6"},"\u4e3a APISIX \u6dfb\u52a0 systemd \u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u662f\u901a\u8fc7 RPM \u5305\u5b89\u88c5 APISIX\uff0c\u914d\u7f6e\u6587\u4ef6\u5df2\u7ecf\u81ea\u52a8\u5b89\u88c5\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start apisix\nsystemctl stop apisix\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u662f\u901a\u8fc7\u5176\u4ed6\u65b9\u6cd5\u5b89\u88c5\u7684 APISIX\uff0c\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools/blob/master/usr/lib/systemd/system/apisix.service"},"\u914d\u7f6e\u6587\u4ef6\u6a21\u677f"),"\u8fdb\u884c\u4fee\u6539\uff0c\u5e76\u5c06\u5176\u6dfb\u52a0\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/apisix.service")," \u8def\u5f84\u4e0b\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u4e86\u89e3 APISIX \u540e\u7eed\u4f7f\u7528\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/getting-started"},"\u5165\u95e8\u6307\u5357"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"))}k.isMDXComponent=!0},70517:function(e,t,a){var n=a(27378);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},64535:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(27378),r=a(84956);var l=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(38944),s="tabItem_a7dU",o="tabItemActive_ewDR";var p=function(e){var t,a=e.lazy,r=e.block,p=e.defaultValue,c=e.values,u=e.groupId,d=e.className,m=n.Children.toArray(e.children),k=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),f=v.tabGroupChoices,g=v.setTabGroupChoices,I=(0,n.useState)(h),y=I[0],b=I[1],N=[];if(null!=u){var x=f[u];null!=x&&x!==y&&k.some((function(e){return e.value===x}))&&b(x)}var P=function(e){var t=e.currentTarget,a=N.indexOf(t),n=k[a].value;b(n),null!=u&&(g(u,n),setTimeout((function(){var e,a,n,r,l,i,s,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,p=i.innerWidth,a>=0&&l<=p&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},k.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:A,onFocus:P,onClick:P},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},84956:function(e,t,a){var n=(0,a(27378).createContext)(void 0);t.Z=n},38944:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);