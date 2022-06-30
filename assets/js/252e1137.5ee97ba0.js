"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80509],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||l[m]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89053:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=a(25773),n=a(30808),i=(a(27378),a(35318)),o=["components"],p={title:"Biweekly Report (Jan 1 - Jan 16)",keywords:["Apache APISIX","Weekly Report","Contributor","APISIX","API Gateway","Apache"],description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",tags:["Events"]},s=void 0,c={permalink:"/blog/2022/01/19/weekly-report-0116",source:"@site/blog/2022/01/19/weekly-report-0116.md",title:"Biweekly Report (Jan 1 - Jan 16)",description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",date:"2022-01-19T00:00:00.000Z",formattedDate:"January 19, 2022",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:3.045,truncated:!0,authors:[],prevItem:{title:"The Practice of Public Gateway in CDN Scenario from UPYUN",permalink:"/blog/2022/01/20/upyun-public-gateway-usecase"},nextItem:{title:"APISIX integrate with Kafka for real-time log monitoring",permalink:"/blog/2022/01/17/apisix-kafka-integration"}},u={authorsImageUrls:[]},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributor Statistics",id:"contributor-statistics",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #6078",id:"issue-6078",children:[]},{value:"Issue #5915",id:"issue-5915",children:[]}]},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[]},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[]}],h={toc:l};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From 1.1 to 1.16, 29 contributors submitted 81 commits for Apache APISIX. Thank you all for your contributions to Apache APISIX. It is your selfless contribution to make the Apache APISIX project better!")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache APISIX has grown as a community from the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements cannot be achieved without the joint efforts of our community partners."),(0,i.kt)("p",null,'"If you want to go fast, go alone.If you want to go far, go together." The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.'),(0,i.kt)("p",null,"We have also compiled some issues suitable for newcomers to the community to participate in! If you are interested, don't miss it!"),(0,i.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642497489518-269539d9-69d3-4613-90a1-5e4f272918e9.png",alt:"Contributors List"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642497489537-a7a736dd-fadd-4d67-a9d2-ad22b9d3c090.png",alt:"New Contributors"})),(0,i.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,i.kt)("h3",{id:"issue-6078"},"Issue #6078"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6078"},"https://github.com/apache/apisix/issues/6078")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"Use plugin redirect for http_to_https,the browser access unlimited 301.The reason I found is that our APISIX behind a proxy that responsed for decrypted the TLS and proxied always HTTP scheme to APISIX. Let's see the redirect plugin code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Lua"},'if conf.http_to_https and ctx.var.scheme == "http" then\n-- ignore\nend\n')),(0,i.kt)("p",null,"It will makes the redirect loop apparently. The resolution is patching this plugin just like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Lua"},'local proxy_proto = core.request.header(ctx, "x-forwarded-proto")\nlocal _scheme = proxy_proto and proxy_proto or ctx.var.scheme\nif conf.http_to_https and _scheme == "http" then\n-- ignore\nend\n')),(0,i.kt)("h3",{id:"issue-5915"},"Issue #5915"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5915"},"https://github.com/apache/apisix/issues/5915")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"Suppose I have two fields, ",(0,i.kt)("inlineCode",{parentName:"p"},"include_resp_body")," as the switch, ",(0,i.kt)("inlineCode",{parentName:"p"},"resp_limit_size")," as the limit size. After configuring these two parameters, if resp_body exceeds the size of resp_limit_size, resp_body will not be recorded in the log. The same is true for req_body."),(0,i.kt)("p",null,"We can truncate oversized request and response bodies based on limit size."),(0,i.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6030"},"Support TLS over TCP upstream"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6039"},"Support hide the authentication header in basic-auth with a config"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mangoGoForward"},"mangoGoForward"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6075"},"Set proxy_request_buffering dynamically"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6079"},"Mqtt supports load balancing by client id"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6037"},"Add forward-auth plugin"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5964"},"Support gRPC-Web Proxy"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuaijinchao"},"shuaijinchao"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5984"},"limit-count supports sharing counters between requests"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09"))),(0,i.kt)("p",null,"The Apache APISIX project website and the Github issue have accumulated a wealth of documentation and experience, so if you encounter problems, you can read the documentation, search the issue with keywords, or participate in the discussion on the issue to put forward your own ideas and practical experience."),(0,i.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/01/17/apisix-kafka-integration"},"Apache APISIX Integration with Kafka for Efficient Real-Time Log Monitoring"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"Apache APISIX has been providing support for Apache Kafka since version 1.2 with the ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka-logger")," plugin release. ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka-logger")," has been enhanced several times since then to provide very mature and complete functionality. It supports pushing API request logs, request bodies, and response bodies, to a Kafka cluster in JSON format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/01/13/how-to-proxy-dubbo-in-apache-apisix"},"Makes it More Convenient for You to Proxy Dubbo Services in Apache APISIX"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"In this article, we introduced how to use Apache APISIX to implement a proxy for Dubbo Service. By introducing the dubbo-proxy plugin, you can build a simpler and more efficient traffic link for the back-end system of Dubbo framework.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/01/11/building-apisix-in-ubuntu-for-arm"},"How to build Apache APISIX in ARM Ubuntu"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"By reading this article you will learn how to build Apache APISIX (M1 chip environment) in ARM Ubuntu from source code. The ARM Ubuntu system is installed with the help of ",(0,i.kt)("a",{parentName:"p",href:"https://multipass.run/"},"https://multipass.run/"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/30/apisix-proxy-grpc-service"},"Using the Apache APISIX proxy gRPC service"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article shows you how to proxy client HTTP traffic to the back-end gRPC service via the grpc-transcode plugin in Apache APISIX."))))}m.isMDXComponent=!0}}]);