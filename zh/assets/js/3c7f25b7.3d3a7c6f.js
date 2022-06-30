"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33497],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41361:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=a(25773),r=a(30808),l=(a(27378),a(35318)),i=["components"],o={title:"aws-lambda"},p=void 0,u={unversionedId:"plugins/aws-lambda",id:"version-2.14/plugins/aws-lambda",isDocsHomePage:!1,title:"aws-lambda",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.14/plugins/aws-lambda.md",sourceDirName:"plugins",slug:"/plugins/aws-lambda",permalink:"/zh/docs/apisix/plugins/aws-lambda",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"aws-lambda"},sidebar:"version-2.14/docs",previous:{title:"openwhisk",permalink:"/zh/docs/apisix/plugins/openwhisk"},next:{title:"dubbo-proxy",permalink:"/zh/docs/apisix/plugins/dubbo-proxy"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"IAM Authorization Schema",id:"iam-authorization-schema",children:[]}]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Plugin with Path Forwarding",id:"plugin-with-path-forwarding",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"aws-lambda")," is a serverless plugin built into Apache APISIX for seamless integration with ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),", a widely used serverless solution, as a dynamic upstream to proxy all requests for a particular URI to the AWS cloud - one of the highly used public cloud platforms for production environment. If enabled, this plugin terminates the ongoing request to that particular URI and initiates a new request to the AWS lambda gateway uri (the new upstream) on behalf of the client with the suitable authorization details set by the users, request headers, request body, params (all these three components are passed from the original request) and returns the response body, status code and the headers back to the original client that has invoked the request to the APISIX agent.\nAt present, the plugin supports authorization via AWS api key and AWS IAM Secrets."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The AWS api gateway endpoint which triggers the lambda serverless function code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization credentials to access the cloud function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authorization.apikey"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Field inside ",(0,l.kt)("em",{parentName:"td"},"authorization"),". The generate API Key to authorize requests to that endpoint of the AWS gateway.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authorization.iam"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Field inside ",(0,l.kt)("em",{parentName:"td"},"authorization"),". AWS IAM role based authorization, performed via AWS v4 request signing. See schema details below (",(0,l.kt)("a",{parentName:"td",href:"#iam-authorization-schema"},"here"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"[100,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy request timeout in milliseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"If enabled performs SSL verification of the server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"To reuse the same proxy connection in near future. Set to false to disable keepalives and immediately close the connection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of connections in the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1000,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximal idle timeout (ms).")))),(0,l.kt)("h3",{id:"iam-authorization-schema"},"IAM Authorization Schema"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accesskey"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Generated access key ID from AWS IAM console.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Generated access key secret from AWS IAM console.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_region"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"us-east-1"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The AWS region where the request is being sent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"execute-api"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'The service that is receiving the request (In case of Http Trigger it is "execute-api").')))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"The following is an example of how to enable the aws-lambda faas plugin for a specific route URI. Calling the APISIX route uri will make an invocation to the lambda function uri (the new upstream). We are assuming your cloud function is already up and running."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# enable aws lambda for a route via api key authorization\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://x9w6z07gb9.execute-api.us-east-1.amazonaws.com/default/test-apisix",\n            "authorization": {\n                "apikey": "<Generated API Key from aws console>",\n            },\n            "ssl_verify":false\n        }\n    },\n    "uri": "/aws"\n}\'\n')),(0,l.kt)("p",null,"Now any requests (HTTP/1.1, HTTPS, HTTP2) to URI ",(0,l.kt)("inlineCode",{parentName:"p"},"/aws")," will trigger an HTTP invocation to the aforesaid function URI and response body along with the response headers and response code will be proxied back to the client. For example (here AWS lambda function just take the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," query param and returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello $name"),") :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -XGET localhost:9080/aws\\?name=APISIX\nHTTP/1.1 200 OK\nContent-Type: application/json\nConnection: keep-alive\nDate: Sat, 27 Nov 2021 13:08:27 GMT\nx-amz-apigw-id: JdwXuEVxIAMFtKw=\nx-amzn-RequestId: 471289ab-d3b7-4819-9e1a-cb59cac611e0\nContent-Length: 16\nX-Amzn-Trace-Id: Root=1-61a22dca-600c552d1c05fec747fd6db0;Sampled=0\nServer: APISIX/2.10.2\n\n"Hello, APISIX!"\n')),(0,l.kt)("p",null,"For requests where the mode of communication between the client and the Apache APISIX gateway is HTTP/2, the example looks like ( make sure you are running APISIX agent with ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_http2: true")," for a port in ",(0,l.kt)("inlineCode",{parentName:"p"},"config-default.yaml"),". You can do it by uncommenting the port 9081 from ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.node_listen")," field ) :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -XGET --http2 --http2-prior-knowledge localhost:9081/aws\\?name=APISIX\nHTTP/2 200\ncontent-type: application/json\ncontent-length: 16\nx-amz-apigw-id: JdwulHHrIAMFoFg=\ndate: Sat, 27 Nov 2021 13:10:53 GMT\nx-amzn-trace-id: Root=1-61a22e5d-342eb64077dc9877644860dd;Sampled=0\nx-amzn-requestid: a2c2b799-ecc6-44ec-b586-38c0e3b11fe4\nserver: APISIX/2.10.2\n\n"Hello, APISIX!"\n')),(0,l.kt)("p",null,"Similarly, the lambda can be triggered via AWS API Gateway by using AWS ",(0,l.kt)("inlineCode",{parentName:"p"},"IAM")," permissions to authorize access to your API via APISIX aws-lambda plugin. Plugin includes authentication signatures in their HTTP calls via AWS v4 request signing. Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# enable aws lambda for a route via iam authorization\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://ajycz5e0v9.execute-api.us-east-1.amazonaws.com/default/test-apisix",\n            "authorization": {\n                "iam": {\n                    "accesskey": "<access key>",\n                    "secretkey": "<access key secret>"\n                }\n            },\n            "ssl_verify": false\n        }\n    },\n    "uri": "/aws"\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": This approach assumes you already have an iam user with the programmatic access enabled and required permissions (",(0,l.kt)("inlineCode",{parentName:"p"},"AmazonAPIGatewayInvokeFullAccess"),") to access the endpoint."),(0,l.kt)("h3",{id:"plugin-with-path-forwarding"},"Plugin with Path Forwarding"),(0,l.kt)("p",null,'AWS Lambda plugin supports url path forwarding while proxying request to the modified upstream (AWS Gateway URI endpoint). With that being said, any extension to the path of the base request APISIX gateway URI gets "appended" (path join) to the ',(0,l.kt)("inlineCode",{parentName:"p"},"function_uri")," specified in the plugin configuration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": APISIX route uri must be ended with an asterisk (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for this feature to work properly. APISIX routes are strictly matched and the extra asterisk at the suffix means any subpath appended to the original parent path will use the same route object configurations."),(0,l.kt)("p",null,"Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://x9w6z07gb9.execute-api.us-east-1.amazonaws.com",\n            "authorization": {\n                "apikey": "<Generate API key>"\n            },\n            "ssl_verify":false\n        }\n    },\n    "uri": "/aws/*"\n}\'\n')),(0,l.kt)("p",null,"Now any request with path ",(0,l.kt)("inlineCode",{parentName:"p"},"aws/default/test-apisix")," will invoke the aws api gateway endpoint. Here the extra path (where the magic character ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," has been used) up to the query params have been forwarded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -XGET http://127.0.0.1:9080/aws/default/test-apisix\\?name\\=APISIX\nHTTP/1.1 200 OK\nContent-Type: application/json\nConnection: keep-alive\nDate: Wed, 01 Dec 2021 14:23:27 GMT\nX-Amzn-Trace-Id: Root=1-61a7855f-0addc03e0cf54ddc683de505;Sampled=0\nx-amzn-RequestId: f5f4e197-9cdd-49f9-9b41-48f0d269885b\nContent-Length: 16\nx-amz-apigw-id: JrHG8GC4IAMFaGA=\nServer: APISIX/2.11.0\n\n"Hello, APISIX!"\n')),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Remove the corresponding JSON configuration in the plugin configuration to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-lambda")," plugin and add the suitable upstream configuration.\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/aws",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);