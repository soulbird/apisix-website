"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7626],{35318:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return u}});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var g=n.createContext({}),p=function(t){var e=n.useContext(g),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(g.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,g=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(a),u=l,s=d["".concat(g,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(s,r(r({ref:e},c),{},{components:a})):n.createElement(s,r({ref:e},c))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=t,i.mdxType="string"==typeof t?t:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66531:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return g},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(25773),l=a(30808),o=(a(27378),a(35318)),r=["components"],i={title:"API \u7f51\u5173\u73b0\u5df2\u652f\u6301\u5bf9\u63a5 Google Cloud Logging",authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","Google Cloud","Google Logging","APISIX","API Gateway"],description:"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u914d\u7f6e\u548c\u4f7f\u7528 Google Cloud Logging \u670d\u52a1\u3002",tags:["Technology","Logging"]},g=void 0,p={permalink:"/zh/blog/2021/12/22/google-logging",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/12/22/google-logging.md",title:"API \u7f51\u5173\u73b0\u5df2\u652f\u6301\u5bf9\u63a5 Google Cloud Logging",description:"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u914d\u7f6e\u548c\u4f7f\u7528 Google Cloud Logging \u670d\u52a1\u3002",date:"2021-12-22T00:00:00.000Z",formattedDate:"2021\u5e7412\u670822\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Logging",permalink:"/zh/blog/tags/logging"}],readingTime:9.58,truncated:!0,authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"Apache APISIX \u96c6\u6210 Open Policy Agent",permalink:"/zh/blog/2021/12/24/open-policy-agent"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff0812.1-12.15\uff09",permalink:"/zh/blog/2021/12/20/weekly-report-1215"}},c={authorsImageUrls:[void 0,void 0]},m=[{value:"\u914d\u7f6e Google Cloud",id:"\u914d\u7f6e-google-cloud",children:[]},{value:"\u914d\u7f6e Apache APISIX",id:"\u914d\u7f6e-apache-apisix",children:[{value:"\u542f\u7528 google-cloud-logging \u63d2\u4ef6",id:"\u542f\u7528-google-cloud-logging-\u63d2\u4ef6",children:[]},{value:"\u9a8c\u8bc1\u63d2\u4ef6\u662f\u5426\u6210\u529f\u8fd0\u884c",id:"\u9a8c\u8bc1\u63d2\u4ef6\u662f\u5426\u6210\u529f\u8fd0\u884c",children:[]},{value:"\u505c\u7528 google-cloud-logging \u63d2\u4ef6",id:"\u505c\u7528-google-cloud-logging-\u63d2\u4ef6",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",children:[]}],d={toc:m};function u(t){var e=t.components,a=(0,l.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u914d\u7f6e\u548c\u4f7f\u7528 Google Cloud Logging \u670d\u52a1\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1640155567091-2611f8b8-8181-42d8-8756-e892b3768a8d.png",alt:"Apache APISIX-Google Cloud logging cover"})),(0,o.kt)("p",null,"\u65e5\u5fd7\u662f\u5927\u578b\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u91cd\u8981\u57fa\u7840\u8bbe\u65bd\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u68c0\u67e5\u89c2\u6d4b\u670d\u52a1\u8fd0\u884c\u7684\u72b6\u6001\uff0c\u63d0\u9ad8\u670d\u52a1\u6545\u969c\u6392\u67e5\u548c\u8bca\u65ad\u6548\u7387\u4ee5\u53ca\u8fdb\u884c\u591a\u7ef4\u5ea6\u7684\u5206\u6790\uff0c\u4ee5\u6b64\u63d0\u9ad8\u7cfb\u7edf\u6574\u4f53\u7684\u7a33\u5b9a\u6027\u548c\u8fd0\u884c\u6548\u7387\u3002"),(0,o.kt)("p",null,"Google Cloud Logging \u662f\u7531 Google Cloud \u63d0\u4f9b\u7684\u5168\u4ee3\u7ba1\u5f0f\u5b9e\u65f6\u65e5\u5fd7\u7ba1\u7406\u670d\u52a1\uff0c\u63d0\u4f9b EB \u7ea7\u7684\u5b58\u50a8\u3001\u641c\u7d22\u3001\u5206\u6790\u548c\u63d0\u9192\u7b49\u670d\u52a1\u3002\u901a\u8fc7 Google Cloud Loging \u7684\u65e5\u5fd7\u6d4f\u89c8\u5668\u4f60\u53ef\u4ee5\u7b80\u5355\u9ad8\u6548\u7684\u5bf9\u65e5\u5fd7\u8fdb\u884c\u5bf9\u65e5\u5fd7\u8fdb\u884c\u641c\u7d22\u3001\u6392\u5e8f\u548c\u5206\u6790\uff0c\u5e76\u4e14 Google Cloud Logging \u8fd8\u63d0\u4f9b\u4e86\u4fdd\u5b58\u67e5\u8be2\u548c\u4e30\u5bcc\u7684\u56fe\u8868\u529f\u80fd\u53ef\u4ee5\u4f7f\u65e5\u5fd7\u7b5b\u67e5\u7ed3\u679c\u53ef\u56de\u6eaf\u4e14\u6709\u66f4\u76f4\u89c2\u7684\u5448\u73b0\u3002"),(0,o.kt)("p",null,"Apache APISIX \u5728\u6b64\u4e4b\u524d\u5df2\u7ecf\u652f\u6301\u96c6\u6210\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/http-logger.md"},"HTTP Logger")," \u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/tcp-logger.md"},"TCP Logger"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/kafka-logger.md"},"Kafka Logger"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/udp-logger.md"},"UDP Logger"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/rocketmq-logger.md"},"RocketMQ Logger"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/skywalking-logger.md"},"SkyWalking Logger"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/sls-logger.md"},"Aliyun Cloud Logging\uff08SLS\uff09"),"\u7b49\u4f17\u591a\u5f00\u6e90\u53ca\u4e91\u65e5\u5fd7\u670d\u52a1\u89e3\u51b3\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u6700\u8fd1\uff0cApache APISIX \u5bf9 Google Cloud Logging \u4e5f\u5b8c\u6210\u4e86\u652f\u6301\uff0c\u5728\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u7f51\u5173\u65f6\u7528\u6237\u53c8\u591a\u4e86\u4e00\u79cd\u65b0\u7684\u65e5\u5fd7\u89e3\u51b3\u65b9\u6848\uff1a\u4f7f\u7528 google-cloud-logging \u63d2\u4ef6\uff0c\u5c06 Apache APISIX \u7684\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 Google Cloud Logging \u670d\u52a1\u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"),(0,o.kt)("p",null,"\u542f\u7528\u8be5\u63d2\u4ef6\u540e\uff0c Apache APISIX \u5c06\u5728 Log Phase \u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f\u5e76\u5e8f\u5217\u5316\u4e3a Google Cloud Logging \u7684\u65e5\u5fd7\u683c\u5f0f\uff0c\u7136\u540e\u5c06\u5e8f\u5217\u5316\u540e\u7684\u65e5\u5fd7\u6570\u636e\u63d0\u4ea4\u5230\u6279\u5904\u7406\u961f\u5217\u4e2d\uff0c\u5f53\u6279\u5904\u7406\u961f\u5217\u89e6\u53d1\u7528\u6237\u8bbe\u7f6e\u7684\u65f6\u95f4\u6216\u6761\u76ee\u9608\u503c\u65f6\u4f1a\u5c06\u65e5\u5fd7\u6570\u636e\u901a\u8fc7 Google Cloud API \u6279\u91cf\u8f6c\u53d1\u5230 Google Cloud Logging \u670d\u52a1\u4e2d\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u914d\u7f6e\u548c\u4f7f\u7528 Google Cloud Logging \u670d\u52a1\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e-google-cloud"},"\u914d\u7f6e Google Cloud"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee Google Cloud \u9996\u9875\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u767b\u5f55 Google Cloud \u63a7\u5236\u53f0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb Google Cloud \u63a7\u5236\u53f0\u5de6\u4fa7\u83dc\u5355\uff0c\u9009\u62e9 \u201cIAM & Admin > Create a Project\u201d\uff0c\u5f00\u59cb\u521b\u5efa\u9879\u76ee\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137078950-3a0b472b-df9f-4f75-9c03-816138860f74.png",alt:"\u521b\u5efa\u9879\u76ee"})),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u9879\u76ee\u540d\u79f0\uff0c\u9009\u62e9\u7ec4\u7ec7\u540d\u79f0\uff0c\u5355\u51fb \u201cCREATE\u201d \u521b\u5efa\u9879\u76ee\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137136967-effec599-2263-45e7-874d-53a547b83aae.png",alt:"\u521b\u5efa\u9879\u76ee-2"})),(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa\u9879\u76ee\u6210\u529f\u540e\uff0c\u63a7\u5236\u53f0\u53f3\u4e0a\u89d2\u63d0\u793a\u521b\u5efa\u6210\u529f\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137177601-6ac703ef-99e4-4ac2-82e3-5b978348f458.png",alt:"\u6210\u529f\u521b\u5efa\u9879\u76ee"})),(0,o.kt)("li",{parentName:"ol"},"\u5728\u7a97\u53e3\u4e2d\u70b9\u51fb\u9009\u62e9\u9879\u76ee\uff0c\u6216\u5728\u63a7\u5236\u53f0\u9996\u9875\u9876\u90e8\u5bfc\u822a\u680f\u9009\u62e9\u9879\u76ee\u64cd\u4f5c\u8def\u5f84\u3002\u9009\u62e9\u9879\u76ee\u540e\uff0c\u5c06\u8df3\u8f6c\u81f3\u63a7\u5236\u53f0\u9996\u9875\uff0c\u6b64\u65f6\u5728\u9876\u90e8\u5bfc\u822a\u680f\u548c\u4fe1\u606f\u4e2d\u5fc3\u7684\u9879\u76ee\u4fe1\u606f\u4e2d\u5df2\u7ecf\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u9879\u76ee\u7684\u76f8\u5173\u6570\u636e\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137215687-4a2a4789-09d3-4cc0-85fa-be67762cf9b7.png",alt:"\u67e5\u770b\u9879\u76ee"})),(0,o.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u9879\u76ee\u521b\u5efa\u540e\uff0c\u4f60\u9700\u8981\u4e3a\u8be5\u9879\u76ee\u521b\u5efa\u670d\u52a1\u8d26\u53f7\u3002\u8bf7\u8fd4\u56de Google Cloud \u63a7\u5236\u53f0\u9996\u9875\uff0c\u5355\u51fb\u5de6\u4fa7\u83dc\u5355\u201cIAM & Admin > Service Account\u201d\uff0c\u5f00\u59cb\u521b\u5efa\u670d\u52a1\u8d26\u53f7\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137733012-6c9808c8-9c96-401e-a680-03a276b964c0.png",alt:"\u5f00\u59cb\u521b\u5efa\u670d\u52a1\u8d26\u53f7"})),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb\u201cCREATE SERVICE ACCOUNT\u201d\u521b\u5efa\u670d\u52a1\u8d26\u53f7\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137784375-e47cbe0e-7735-4e7b-a881-1a9ec1c12ffc.png",alt:"\u521b\u5efa\u670d\u52a1\u8d26\u53f7"})),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u670d\u52a1\u8d26\u53f7\u540d\u79f0\u53ca ID\uff08ID \u4e00\u822c\u8ddf\u968f\u8d26\u53f7\u751f\u6210\uff09\uff0c\u7136\u540e\u5355\u51fb \u201cCREATE AND CONTINUE\u201d\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137834702-76166e6f-ed98-4a85-a759-2ce78f795794.png",alt:"\u521b\u5efa\u670d\u52a1\u8d26\u53f7-2"})),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb\u201cRole\u201d\uff0c\u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165\u201cLogging Admin\u201d\u641c\u7d22\u8fd9\u4e2a\u89d2\u8272\uff0c\u9009\u62e9\u201cLogging Admin\u201d\u4f5c\u4e3a\u89d2\u8272\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137883981-0f780040-8398-4d38-9600-a5e54b29b48e.png",alt:"\u521b\u5efa\u670d\u52a1\u8d26\u53f7-3"})),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb\u201cDONE\u201d\uff0c\u5b8c\u6210\u670d\u52a1\u8d26\u53f7\u521b\u5efa\uff0c\u8df3\u8f6c\u5230\u670d\u52a1\u8d26\u53f7\u9996\u9875\u3002\u6b64\u65f6\u4f60\u53ef\u4ee5\u5728\u5217\u8868\u4e2d\u770b\u5230\u521a\u521a\u521b\u5efa\u7684\u8d26\u53f7\u53ca\u8be6\u60c5\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137970837-ed1994be-87d0-48b8-bec5-010200fe1f1d.png",alt:"\u67e5\u770b\u8d26\u53f7\u53ca\u8be6\u60c5"})),(0,o.kt)("li",{parentName:"ol"},"\u5728\u670d\u52a1\u8d26\u53f7\u6700\u540e\u4e00\u5217\u7684\u64cd\u4f5c\u680f\u5355\u51fb\u201cManage keys\u201d\uff0c\u8fdb\u5165\u79d8\u94a5\u7ba1\u7406\u754c\u9762\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640138660649-cd57da29-5965-4251-9deb-300de830dfd9.png",alt:"\u8fdb\u5165\u79d8\u94a5\u7ba1\u7406\u754c\u9762"})),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb\u201cADD KEY > Create new key\u201d\uff0c\u5f00\u59cb\u521b\u5efa\u65b0\u79d8\u94a5\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640138732589-1aea201b-de2d-455a-8c04-c3f5a28dfa91.png",alt:"\u521b\u5efa\u65b0\u79d8\u94a5"})),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5f39\u7a97\u9875\u4e2d\u9009\u62e9\u79d8\u94a5\u7c7b\u578b\u4e3a\u201cJSON\u201d\uff0c\u7136\u540e\u5355\u51fb\u201cCREATE\u201d\uff0c\u521b\u5efa\u65b0\u79d8\u94a5\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640138785425-23ee8efe-bc0d-428a-a627-2f428440da37.png",alt:"\u521b\u5efa\u65b0\u79d8\u94a5-2"})),(0,o.kt)("li",{parentName:"ol"},"\u79c1\u94a5\u4fe1\u606f\u5c06\u901a\u8fc7\u6d4f\u89c8\u5668\u81ea\u52a8\u4e0b\u8f7d\u5230\u7cfb\u7edf\u9ed8\u8ba4 Downloads \u76ee\u5f55\u4e2d\uff0c\u542f\u7528 google-cloud-logging \u63d2\u4ef6\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u79c1\u94a5\u4e2d\u7684\u4fe1\u606f\uff0c\u56e0\u6b64\u8bf7\u59a5\u5584\u4fdd\u5b58\u79c1\u94a5\u6587\u4ef6\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640138820163-aa459874-e78e-4156-ab74-58fc7e2ae13f.png",alt:"\u4e0b\u8f7d\u79c1\u94a5\u6587\u4ef6"}))),(0,o.kt)("h2",{id:"\u914d\u7f6e-apache-apisix"},"\u914d\u7f6e Apache APISIX"),(0,o.kt)("h3",{id:"\u542f\u7528-google-cloud-logging-\u63d2\u4ef6"},"\u542f\u7528 google-cloud-logging \u63d2\u4ef6"),(0,o.kt)("h4",{id:"\u65b9\u5f0f\u4e00\u4e0a\u4f20\u79c1\u94a5\u6587\u4ef6\u914d\u7f6e"},"\u65b9\u5f0f\u4e00\uff1a\u4e0a\u4f20\u79c1\u94a5\u6587\u4ef6\u914d\u7f6e"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06\u79c1\u94a5\u6587\u4ef6\u4e0a\u4f20\u5230 Apache APISIX \u8282\u70b9\u670d\u52a1\u5668\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u6587\u4ef6\u8def\u5f84\u914d\u7f6e\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"google-cloud-logging. auth_file")," \u914d\u7f6e\u9879\u4e0a\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/logging.do",\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "plugins":{\n        "google-cloud-logging":{\n            // Google Cloud Logging \u79c1\u94a5\u6587\u4ef6\n            "auth_file":"/path/to/apache-apisix-fcafc68c2f41.json",\n            // \u6bcf\u4e2a\u6279\u5904\u7406\u961f\u5217\u6700\u5927\u5bb9\u7eb3\u65e5\u5fd7\u6761\u76ee\u6570\n            "batch_max_size": 1,\n            // \u5237\u65b0\u6279\u5904\u7406\u961f\u5217\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\n            "inactive_timeout": 10\n        }\n    }\n}\'\n')),(0,o.kt)("h4",{id:"\u901a\u8fc7-json-\u6587\u672c\u914d\u7f6e"},"\u901a\u8fc7 JSON \u6587\u672c\u914d\u7f6e"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00\u79c1\u94a5\u6587\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"li"},"project_id")," \u7684\u503c\u914d\u7f6e\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"google-cloud-logging. auth_config.project_id")," \u914d\u7f6e\u9879\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"li"},"private_key")," \u7684\u503c\u914d\u7f6e\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"google-cloud-logging. auth_config. private_key")," \u914d\u7f6e\u9879\u4e2d\u3002")),(0,o.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/logging.do",\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "plugins":{\n        "google-cloud-logging":{\n            // Google Cloud Logging \u79c1\u94a5\u6587\u4ef6\n            "auth_config":{\n                "project_id":"apache-apisix",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----"\n            },\n            // \u6bcf\u4e2a\u6279\u5904\u7406\u961f\u5217\u6700\u5927\u5bb9\u7eb3\u65e5\u5fd7\u6761\u76ee\u6570\n            "batch_max_size": 1,\n            // \u5237\u65b0\u6279\u5904\u7406\u961f\u5217\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\n            "inactive_timeout": 10\n        }\n    }\n}\'\n')),(0,o.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"auth_config"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Google Cloud Logging \u79c1\u94a5\u6587\u4ef6\uff0c\u5fc5\u987b\u914d\u7f6e auth_config \u6216 auth_file \u4e4b\u4e00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"auth_config.private_key"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Google Cloud Logging \u7684\u79c1\u94a5\u53c2\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"auth_config.project_id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8c37\u6b4c\u670d\u52a1\u5e10\u53f7\u7684\u9879\u76ee ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"auth_config.token_uri"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"oauth2.googleapis.com/token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42 Google Service Account \u7684\u4ee4\u724c\u7684 URI")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"auth_config.entries_uri"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"logging.googleapis.com/v2/entries:write"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Google Cloud Logging \u5199\u5165\u65e5\u5fd7\u6761\u76ee\u7684 API")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"auth_config.scopes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},'["https://www.googleapis.com/auth/logging.read","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/logging.admin","https://www.googleapis.com/auth/cloud-platform"]'),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8c37\u6b4c\u670d\u52a1\u8d26\u53f7\u7684\u8bbf\u95ee\u8303\u56f4, \u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/oauth2/scopes#logging"},"OAuth 2.0 Scopes for Google APIs"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"auth_file"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8c37\u6b4c\u670d\u52a1\u8d26\u53f7 JSON \u6587\u4ef6\u7684\u8def\u5f84\uff08\u5fc5\u987b\u914d\u7f6e auth_config \u6216 auth_file \u4e4b\u4e00\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ssl_verify"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u542f\u7528 SSL \u9a8c\u8bc1, \u914d\u7f6e\u6839\u636e ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty documentation"),"\u9009\u9879")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"resource"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},'{"type": "global"}'),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8c37\u6b4c\u76d1\u63a7\u8d44\u6e90\uff0c\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource"},"MonitoredResource"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"log_id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"apisix.apache.org%2Flogs"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8c37\u6b4c\u65e5\u5fd7 ID\uff0c\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"},"LogEntry"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"max_retry_count"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u4ece\u5904\u7406\u7ba1\u9053\u4e2d\u79fb\u9664\u4e4b\u524d\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"retry_delay"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u6d41\u7a0b\u6267\u884c\u5e94\u5ef6\u8fdf\u7684\u79d2\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"buffer_duration"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"60"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b\u5148\u5904\u7406\u6279\u6b21\u4e2d\u6700\u65e7\u6761\u76ee\u7684\u6700\u5927\u671f\u9650\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"inactive_timeout"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"10"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5237\u65b0\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"batch_max_size"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"100"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u4e2a\u6279\u5904\u7406\u961f\u5217\u53ef\u5bb9\u7eb3\u7684\u6700\u5927\u6761\u76ee\u6570")))),(0,o.kt)("h3",{id:"\u9a8c\u8bc1\u63d2\u4ef6\u662f\u5426\u6210\u529f\u8fd0\u884c"},"\u9a8c\u8bc1\u63d2\u4ef6\u662f\u5426\u6210\u529f\u8fd0\u884c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5411 Google Cloud Logging \u53d1\u9001\u8bf7\u6c42\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/logging.do\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Fri, 10 Dec 2021 09:57:52 GMT\nServer: APISIX/2.11.0\n\nHello, Google Cloud Logging\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee Google Cloud \u9996\u9875\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u767b\u5f55 Google Cloud \u63a7\u5236\u53f0\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7\u65e5\u5fd7\u6d4f\u89c8\u5668\u67e5\u770b\u53d1\u9001\u7684\u8bf7\u6c42\u65e5\u5fd7\uff0c\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1640139014263-fac86f87-d008-475c-aeae-289ab4ba62a8.png",alt:"\u67e5\u770b\u65e5\u5fd7"})))),(0,o.kt)("h3",{id:"\u505c\u7528-google-cloud-logging-\u63d2\u4ef6"},"\u505c\u7528 google-cloud-logging \u63d2\u4ef6"),(0,o.kt)("p",null,"\u5982\u4f7f\u7528\u7ed3\u675f\uff0c\u53ef\u4ee5\u79fb\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," \u76f8\u5173\u914d\u7f6e\u5757\u8fdb\u884c\u505c\u7528\u8be5\u63d2\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/logging.do",\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "plugins":{\n    }\n}\'\n')),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u63cf\u8ff0\u4e86 Apache APISIX \u548c Google Cloud Logging \u5bf9\u63a5\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\uff0c\u5e0c\u671b\u901a\u8fc7\u672c\u6587\u53ef\u4ee5\u8ba9\u5927\u5bb6\u5bf9\u4e8e\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Google Cloud Logging \u6709\u66f4\u6e05\u6670\u7684\u7406\u89e3\uff0c\u65b9\u4fbf\u540e\u7eed\u8fdb\u884c\u4e0a\u624b\u5b9e\u64cd\u3002"),(0,o.kt)("p",null,"Apache APISIX \u4e0d\u4ec5\u81f4\u529b\u4e8e\u4fdd\u6301\u81ea\u8eab\u7684\u9ad8\u6027\u80fd\uff0c\u4e5f\u4e00\u76f4\u975e\u5e38\u91cd\u89c6\u5f00\u6e90\u751f\u6001\u7684\u5efa\u8bbe\u3002\u76ee\u524d Apache APISIX \u5df2\u7ecf\u62e5\u6709\u4e86 10+ \u4e2a\u65e5\u5fd7\u76f8\u5173\u7684\u63d2\u4ef6\uff0c\u652f\u6301\u4e0e\u4e1a\u754c\u4e3b\u6d41\u7684\u5f00\u6e90\u65e5\u5fd7\u9879\u76ee\u5bf9\u63a5\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u5bf9\u63a5\u5176\u4ed6\u65e5\u5fd7\u7684\u9700\u6c42\uff0c\u4e0d\u59a8\u8bbf\u95ee Apache APISIX \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"GitHub"),"\uff0c\u901a\u8fc7 issue \u7559\u4e0b\u4f60\u7684\u5efa\u8bae\uff1b\u6216\u8ba2\u9605 Apache APISIX \u7684",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\uff0c\u901a\u8fc7\u90ae\u4ef6\u8868\u8fbe\u4f60\u7684\u60f3\u6cd5\u3002"),(0,o.kt)("h2",{id:"\u76f8\u5173\u9605\u8bfb"},"\u76f8\u5173\u9605\u8bfb"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/12/07/apisix-integrate-skywalking-plugin/"},"\u5f3a\u5f3a\u8054\u5408\uff01APISIX \u96c6\u6210 SkyWalking \u6253\u9020\u5168\u65b9\u4f4d\u65e5\u5fd7\u5904\u7406")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/12/08/apisix-integrate-rocketmq-logger-plugin/"},"Apache APISIX \u643a\u624b RocketMQ \u4e3a\u5b9e\u65f6 API \u65e5\u5fd7\u76d1\u63a7\u529f\u80fd\u518d\u4e0b\u4e00\u57ce")))}u.isMDXComponent=!0}}]);