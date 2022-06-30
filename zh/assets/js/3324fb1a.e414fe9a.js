"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14581],{35318:function(e,n,t){t.d(n,{Zo:function(){return k},kt:function(){return E}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},k=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=c(t),E=r,f=s["".concat(l,".").concat(E)]||s[E]||u[E]||o;return t?a.createElement(f,i(i({ref:n},k),{},{components:t})):a.createElement(f,i({ref:n},k))}));function E(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},49208:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return l},default:function(){return E},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=t(25773),r=t(30808),o=(t(27378),t(35318)),i=["components"],p={title:"APISIX \u96c6\u6210 Kafka \u5b9e\u73b0\u9ad8\u6548\u5b9e\u65f6\u65e5\u5fd7\u76d1\u63a7",authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Apache Kafka","Kafka","\u65e5\u5fd7","\u76d1\u63a7"],description:"Apache APISIX \u65e9\u5728 1.2 \u7248\u672c\u5f00\u59cb\u5c31\u5df2\u7ecf\u63d0\u4f9b\u4e86 kafka-logger \u63d2\u4ef6\u7684\u652f\u6301\uff0c\u5176\u540e\u53c8\u7ecf\u8fc7\u591a\u6b21\u529f\u80fd\u5f3a\u5316\uff0c\u76ee\u524d\u5df2\u5177\u5907\u975e\u5e38\u6210\u719f\u4e14\u5b8c\u5584\u7684\u529f\u80fd\u3002\u652f\u6301\u5c06 API \u8bf7\u6c42\u65e5\u5fd7\uff0c\u751a\u81f3\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u4ee5 JSON \u683c\u5f0f\u63a8\u9001\u81f3 Kafka \u96c6\u7fa4\u4e2d\u3002",tags:["Technology"]},l=void 0,c={permalink:"/zh/blog/2022/01/17/apisix-kafka-integration",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/17/apisix-kafka-integration.md",title:"APISIX \u96c6\u6210 Kafka \u5b9e\u73b0\u9ad8\u6548\u5b9e\u65f6\u65e5\u5fd7\u76d1\u63a7",description:"Apache APISIX \u65e9\u5728 1.2 \u7248\u672c\u5f00\u59cb\u5c31\u5df2\u7ecf\u63d0\u4f9b\u4e86 kafka-logger \u63d2\u4ef6\u7684\u652f\u6301\uff0c\u5176\u540e\u53c8\u7ecf\u8fc7\u591a\u6b21\u529f\u80fd\u5f3a\u5316\uff0c\u76ee\u524d\u5df2\u5177\u5907\u975e\u5e38\u6210\u719f\u4e14\u5b8c\u5584\u7684\u529f\u80fd\u3002\u652f\u6301\u5c06 API \u8bf7\u6c42\u65e5\u5fd7\uff0c\u751a\u81f3\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u4ee5 JSON \u683c\u5f0f\u63a8\u9001\u81f3 Kafka \u96c6\u7fa4\u4e2d\u3002",date:"2022-01-17T00:00:00.000Z",formattedDate:"2022\u5e741\u670817\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:6.185,truncated:!0,authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c1.1-1.16 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2022/01/19/weekly-report-0116"},nextItem:{title:"\u8ba9\u4f60\u5728 Apache APISIX \u4e2d\u4ee3\u7406 Dubbo \u670d\u52a1\u66f4\u4fbf\u6377",permalink:"/zh/blog/2022/01/13/how-to-proxy-dubbo-in-apache-apisix"}},k={authorsImageUrls:[void 0,void 0]},u=[{value:"\u5b9e\u73b0\u65b9\u5f0f\uff1akafka-logger",id:"\u5b9e\u73b0\u65b9\u5f0fkafka-logger",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u6b65\u9aa41\uff1a\u542f\u52a8 Kafka \u96c6\u7fa4",id:"\u6b65\u9aa41\u542f\u52a8-kafka-\u96c6\u7fa4",children:[]},{value:"\u6b65\u9aa42\uff1a\u521b\u5efa Topic",id:"\u6b65\u9aa42\u521b\u5efa-topic",children:[]},{value:"\u6b65\u9aa43\uff1a\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f\u63d2\u4ef6",id:"\u6b65\u9aa43\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f\u63d2\u4ef6",children:[]},{value:"\u6b65\u9aa44\uff1a\u53d1\u9001\u8bf7\u6c42",id:"\u6b65\u9aa44\u53d1\u9001\u8bf7\u6c42",children:[]},{value:"\u5173\u95ed\u63d2\u4ef6",id:"\u5173\u95ed\u63d2\u4ef6",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],s={toc:u};function E(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX \u65e9\u5728 1.2 \u7248\u672c\u5f00\u59cb\u5c31\u5df2\u7ecf\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-logger")," \u63d2\u4ef6\u7684\u652f\u6301\uff0c\u5176\u540e\u53c8\u7ecf\u8fc7\u591a\u6b21\u529f\u80fd\u5f3a\u5316\uff0c\u76ee\u524d\u5df2\u5177\u5907\u975e\u5e38\u6210\u719f\u4e14\u5b8c\u5584\u7684\u529f\u80fd\u3002\u652f\u6301\u5c06 API \u8bf7\u6c42\u65e5\u5fd7\uff0c\u751a\u81f3\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u4ee5 JSON \u683c\u5f0f\u63a8\u9001\u81f3 Kafka \u96c6\u7fa4\u4e2d\u3002")),(0,o.kt)("p",null,"Apache Kafka \u662f\u7531 Apache \u7ba1\u7406\u7684\u5f00\u6e90\u6d41\u5904\u7406\u5e73\u53f0\uff0c\u7531 Scala \u548c Java \u7f16\u5199\uff0c\u4e3a\u5904\u7406\u5b9e\u65f6\u6570\u636e\u63d0\u4f9b\u4e86\u7edf\u4e00\u3001\u9ad8\u541e\u5410\u3001\u4f4e\u5ef6\u8fdf\u7684\u529f\u80fd\u7279\u6027\u3002"),(0,o.kt)("p",null,"\u5176\u6301\u4e45\u5316\u5c42\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u201c\u6309\u7167\u5206\u5e03\u5f0f\u4e8b\u52a1\u65e5\u5fd7\u67b6\u6784\u7684\u5927\u89c4\u6a21\u53d1\u5e03/\u8ba2\u9605\u6d88\u606f\u961f\u5217\u201d\uff0c\u8fd9\u4f7f\u5b83\u4f5c\u4e3a\u4f01\u4e1a\u7ea7\u57fa\u7840\u8bbe\u65bd\u6765\u5904\u7406\u6d41\u5f0f\u6570\u636e\u975e\u5e38\u6709\u4ef7\u503c\u3002\u76ee\u524d\u5df2\u88ab\u6570\u5343\u5bb6\u516c\u53f8\u7528\u4e8e\u9ad8\u6027\u80fd\u6570\u636e\u7ba1\u9053\u3001\u6d41\u5206\u6790\u3001\u6570\u636e\u96c6\u6210\u548c\u4efb\u52a1\u5173\u952e\u578b\u5e94\u7528\u7a0b\u5e8f\u7b49\u9886\u57df\u3002"),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u65b9\u5f0fkafka-logger"},"\u5b9e\u73b0\u65b9\u5f0f\uff1akafka-logger"),(0,o.kt)("p",null,"Apache APISIX \u65e9\u5728 1.2 \u7248\u672c\u5f00\u59cb\u5c31\u5df2\u7ecf\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-logger")," \u63d2\u4ef6\u7684\u652f\u6301\uff0c\u5176\u540e\u53c8\u7ecf\u8fc7\u591a\u6b21\u529f\u80fd\u5f3a\u5316\uff0c\u76ee\u524d\u5df2\u5177\u5907\u975e\u5e38\u6210\u719f\u4e14\u5b8c\u5584\u7684\u529f\u80fd\u3002\u652f\u6301\u5c06 API \u8bf7\u6c42\u65e5\u5fd7\uff0c\u751a\u81f3\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u4ee5 JSON \u683c\u5f0f\u63a8\u9001\u81f3 Kafka \u96c6\u7fa4\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-logger")," \u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u53d1\u9001\u591a\u79cd\u6570\u636e\u5e76\u81ea\u5b9a\u4e49\u53d1\u9001\u7684\u65e5\u5fd7\u683c\u5f0f\uff0c\u540c\u65f6\u8fd8\u652f\u6301\u4ee5\u6279\u5904\u7406\u7684\u65b9\u5f0f\u6253\u5305\u53d1\u9001\u65e5\u5fd7\u6216\u8fdb\u884c\u81ea\u52a8\u91cd\u8bd5\u7b49\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u6b65\u9aa41\u542f\u52a8-kafka-\u96c6\u7fa4"},"\u6b65\u9aa41\uff1a\u542f\u52a8 Kafka \u96c6\u7fa4"),(0,o.kt)("p",null,"\u672c\u6587\u793a\u4f8b\u53ea\u6f14\u793a\u4e86\u4e00\u79cd\u542f\u52a8\u65b9\u5f0f\uff0c\u5176\u4ed6\u542f\u52a8\u65b9\u5f0f\u7ec6\u8282\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#quickstart"},"Kafka \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u4f7f\u7528 docker-compose \u542f\u52a8\u4e00\u4e2a\u5177\u6709 1\u4e2a zookeeper \u8282\u70b9\u30013\u4e2a kafka \u8282\u70b9\u7684\u96c6\u7fa4\n# \u540c\u65f6\u8fd8\u542f\u52a8\u4e00\u4e2a EFAK \u7528\u4e8e\u6570\u636e\u76d1\u63a7\u3002\nversion: \'3\'\n\nservices:\n  zookeeper:\n    image: confluentinc/cp-zookeeper:6.2.1\n    hostname: zookeeper\n    ports:\n      - "2181:2181"\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_SERVER_ID: 1\n      ZOOKEEPER_SERVERS: zookeeper:2888:3888\n\n  kafka1:\n    image: confluentinc/cp-kafka:6.2.1\n    hostname: kafka1\n    ports:\n      - "9092:9092"\n    environment:\n      KAFKA_ADVERTISED_LISTENERS: LISTENER_DOCKER_INTERNAL://kafka1:19092,LISTENER_DOCKER_EXTERNAL://${DOCKER_HOST_IP:-127.0.0.1}:9092\n      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: LISTENER_DOCKER_INTERNAL:PLAINTEXT,LISTENER_DOCKER_EXTERNAL:PLAINTEXT\n      KAFKA_INTER_BROKER_LISTENER_NAME: LISTENER_DOCKER_INTERNAL\n      KAFKA_ZOOKEEPER_CONNECT: "zookeeper:2181"\n      KAFKA_BROKER_ID: 1\n      KAFKA_LOG4J_LOGGERS: "kafka.controller=INFO,kafka.producer.async.DefaultEventHandler=INFO,state.change.logger=INFO"\n    depends_on:\n      - zookeeper\n\n  kafka2:\n    image: confluentinc/cp-kafka:6.2.1\n    hostname: kafka2\n    ports:\n      - "9093:9093"\n    environment:\n      KAFKA_ADVERTISED_LISTENERS: LISTENER_DOCKER_INTERNAL://kafka2:19093,LISTENER_DOCKER_EXTERNAL://${DOCKER_HOST_IP:-127.0.0.1}:9093\n      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: LISTENER_DOCKER_INTERNAL:PLAINTEXT,LISTENER_DOCKER_EXTERNAL:PLAINTEXT\n      KAFKA_INTER_BROKER_LISTENER_NAME: LISTENER_DOCKER_INTERNAL\n      KAFKA_ZOOKEEPER_CONNECT: "zookeeper:2181"\n      KAFKA_BROKER_ID: 2\n      KAFKA_LOG4J_LOGGERS: "kafka.controller=INFO,kafka.producer.async.DefaultEventHandler=INFO,state.change.logger=INFO"\n    depends_on:\n      - zookeeper\n\n\n  kafka3:\n    image: confluentinc/cp-kafka:6.2.1\n    hostname: kafka3\n    ports:\n      - "9094:9094"\n    environment:\n      KAFKA_ADVERTISED_LISTENERS: LISTENER_DOCKER_INTERNAL://kafka3:19094,LISTENER_DOCKER_EXTERNAL://${DOCKER_HOST_IP:-127.0.0.1}:9094\n      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: LISTENER_DOCKER_INTERNAL:PLAINTEXT,LISTENER_DOCKER_EXTERNAL:PLAINTEXT\n      KAFKA_INTER_BROKER_LISTENER_NAME: LISTENER_DOCKER_INTERNAL\n      KAFKA_ZOOKEEPER_CONNECT: "zookeeper:2181"\n      KAFKA_BROKER_ID: 3\n      KAFKA_LOG4J_LOGGERS: "kafka.controller=INFO,kafka.producer.async.DefaultEventHandler=INFO,state.change.logger=INFO"\n    depends_on:\n      - zookeeper\n\n  efak:\n    image: nickzurich/kafka-eagle:2.0.9\n    hostname: efak\n    ports:\n      - "8048:8048"\n    depends_on:\n      - kafka1\n      - kafka2\n      - kafka3\n')),(0,o.kt)("h3",{id:"\u6b65\u9aa42\u521b\u5efa-topic"},"\u6b65\u9aa42\uff1a\u521b\u5efa Topic"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"test Topic")," \u7528\u4e8e\u6536\u96c6\u65e5\u5fd7\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642390784736-562187ed-ade9-4a2f-96e1-c79556f9dd7d.png",alt:"test Topic"})),(0,o.kt)("h3",{id:"\u6b65\u9aa43\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f\u63d2\u4ef6"},"\u6b65\u9aa43\uff1a\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f\u63d2\u4ef6"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0b\u65b9\u547d\u4ee4\u53ef\u8fdb\u884c\u8def\u7531\u521b\u5efa\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-logger")," \u63d2\u4ef6\u7684\u5f00\u542f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -XPUT \'http://127.0.0.1:9080/apisix/admin/routes/r1\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "uri": "/*",\n    "plugins": {\n        "kafka-logger": {\n            "batch_max_size": 1,\n            "broker_list": {\n                "127.0.0.1": 9092\n            },\n            "disable": false,\n            "kafka_topic": "test",\n            "producer_type": "sync"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u914d\u7f6e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka broker")," \u5730\u5740\u3001\u76ee\u6807 Topic\u3001\u540c\u6b65\u7684\u751f\u4ea7\u6a21\u5f0f\u548c\u6bcf\u4e00\u6279\u6b21\u5305\u542b\u7684\u6700\u5927\u65e5\u5fd7\u6570\u91cf\u3002\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u5148\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"batch_max_size")," \u8bbe\u7f6e\u4e3a 1\uff0c\u5373\u6bcf\u4ea7\u751f\u4e00\u6761\u65e5\u5fd7\u5c31\u5411 Kafka \u5199\u5165\u4e00\u6761\u6d88\u606f\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u8bbe\u7f6e\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"/*")," \u8def\u5f84\u4e0b\u7684 API \u8bf7\u6c42\u65e5\u5fd7\u53d1\u9001\u81f3 Kafka \u7684\u529f\u80fd\u3002"),(0,o.kt)("h3",{id:"\u6b65\u9aa44\u53d1\u9001\u8bf7\u6c42"},"\u6b65\u9aa44\uff1a\u53d1\u9001\u8bf7\u6c42"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u901a\u8fc7 API \u53d1\u9001\u4e00\u4e9b\u8bf7\u6c42\uff0c\u5e76\u8bb0\u5f55\u4e0b\u8bf7\u6c42\u6b21\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5411 API \u53d1\u9001 10 \u6b21\u8bf7\u6c42\ncurl http://127.0.0.1:9080/get\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0b\u56fe\u53ef\u4ee5\u770b\u5230\uff0c\u6709\u4e00\u4e9b\u65e5\u5fd7\u6d88\u606f\u5df2\u7ecf\u88ab\u5199\u5165\u5230\u6211\u4eec\u521b\u5efa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"test topic"),"2 \u4e2d\u3002\u70b9\u51fb\u67e5\u770b\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u53d1\u73b0\u4e0a\u8ff0\u8fdb\u884c\u7684 API \u8bf7\u6c42\u65e5\u5fd7\u5df2\u7ecf\u88ab\u5199\u5165\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642390828394-721eccfa-ab02-4f8f-a0d8-8039e0eaabc1.png",alt:"\u53d1\u9001\u8bf7\u6c42-1"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642390874028-89683dfb-ab16-48cd-92de-496cc60df3b5.png",alt:"\u53d1\u9001\u8bf7\u6c42-2"})),(0,o.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u7ed3\u6784"},"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u7ed3\u6784"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-logger")," \u63d2\u4ef6\u63d0\u4f9b\u7684\u5143\u6570\u636e\u914d\u7f6e\uff0c\u6765\u8bbe\u7f6e\u53d1\u9001\u81f3 Kafka \u7684\u65e5\u5fd7\u6570\u636e\u7ed3\u6784\u3002\u901a\u8fc7\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"log_format")," \u6570\u636e\uff0c\u53ef\u4ee5\u63a7\u5236\u53d1\u9001\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u4ee5\u4e0b\u6570\u636e\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"$host"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"$time_iso8601")," \u7b49\uff0c\u90fd\u662f\u6765\u81ea\u4e8e Nginx \u63d0\u4f9b\u7684\u5185\u7f6e\u53d8\u91cf\uff1b\u4e5f\u652f\u6301\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"$route_id")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"$service_id")," \u7b49 Apache APISIX \u63d0\u4f9b\u7684\u53d8\u91cf\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -XPUT \'http://127.0.0.1:9080/apisix/admin/plugin_metadata/kafka-logger\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr",\n        "route_id": "$route_id"\n    }\n}\'\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u53d1\u9001\u8bf7\u6c42\u8fdb\u884c\u7b80\u5355\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u770b\u5230\u4e0a\u8ff0\u65e5\u5fd7\u7ed3\u6784\u8bbe\u7f6e\u5df2\u751f\u6548\u3002\u76ee\u524d Apache APISIX \u63d0\u4f9b\u591a\u79cd\u65e5\u5fd7\u683c\u5f0f\u6a21\u677f\uff0c\u5728\u914d\u7f6e\u4e0a\u5177\u6709\u6781\u5927\u7684\u7075\u6d3b\u6027\uff0c\u66f4\u591a\u65e5\u5fd7\u683c\u5f0f\u7ec6\u8282\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/kafka-logger#metadata"},"Apache APISIX \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642390899127-d1eb560a-499e-4a9f-9227-4063ba711e2d.png",alt:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u7ed3\u6784"})),(0,o.kt)("h3",{id:"\u5173\u95ed\u63d2\u4ef6"},"\u5173\u95ed\u63d2\u4ef6"),(0,o.kt)("p",null,"\u5982\u4f7f\u7528\u5b8c\u6bd5\uff0c\u53ea\u9700\u79fb\u9664\u8def\u7531\u914d\u7f6e\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-logger")," \u63d2\u4ef6\u76f8\u5173\u914d\u7f6e\u5e76\u4fdd\u5b58\uff0c\u5373\u53ef\u5173\u95ed\u8def\u7531\u4e0a\u7684\u63d2\u4ef6\u3002\u5f97\u76ca\u4e8e Apache APISIX \u7684\u52a8\u6001\u5316\u4f18\u52bf\uff0c\u5f00\u542f\u5173\u95ed\u63d2\u4ef6\u7684\u8fc7\u7a0b\u90fd\u4e0d\u9700\u8981\u91cd\u542f Apache APISIX\uff0c\u5341\u5206\u65b9\u4fbf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e86\u5173\u4e8e kafka-logger \u63d2\u4ef6\u7684\u529f\u80fd\u524d\u77bb\u4e0e\u4f7f\u7528\u6b65\u9aa4\uff0c\u66f4\u591a\u5173\u4e8e kafka-logger \u63d2\u4ef6\u8bf4\u660e\u548c\u5b8c\u6574\u914d\u7f6e\u5217\u8868\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863\u3002"),(0,o.kt)("p",null,"\u4e5f\u6b22\u8fce\u968f\u65f6\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u4e2d\u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41\u3002"))}E.isMDXComponent=!0}}]);