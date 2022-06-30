"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69897],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),c=i,h=d["".concat(p,".").concat(c)]||d[c]||g[c]||a;return t?r.createElement(h,o(o({ref:n},s),{},{components:t})):r.createElement(h,o({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7811:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(25773),i=t(30808),a=(t(27378),t(35318)),o=["components"],l={title:"Getting started"},p=void 0,u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"\x3c!--",source:"@site/docs/apisix-go-plugin-runner/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/go-plugin-runner/next/getting-started",editUrl:"https://github.com/apache/apisix-go-plugin-runner/edit/master/docs/en/latest/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting started"},sidebar:"docs",next:{title:"Developer Guide",permalink:"/docs/go-plugin-runner/next/developer-guide"}},s=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Compatibility with Golang",id:"compatibility-with-golang",children:[]},{value:"Compatibility with Apache APISIX",id:"compatibility-with-apache-apisix",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Development",id:"development",children:[{value:"Developing with the Go Runner SDK",id:"developing-with-the-go-runner-sdk",children:[]},{value:"Setting up APISIX (debugging)",id:"setting-up-apisix-debugging",children:[]},{value:"Setting up APISIX (running)",id:"setting-up-apisix-running",children:[]}]}],g={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"compatibility-with-golang"},"Compatibility with Golang"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go (>= 1.15)")),(0,a.kt)("h3",{id:"compatibility-with-apache-apisix"},"Compatibility with Apache APISIX"),(0,a.kt)("p",null,"The following table describes the compatibility between apisix-go-plugin-runner and\n",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"},"apisix-go-plugin-runner"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Apache APISIX"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"master")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.14.1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.14.1")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"0.4.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.14.1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.14.1")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"0.3.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.13.0"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.13.0")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"0.2.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.9.0"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.9.0")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"0.1.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7.0"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.7.0")," is recommended.")))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"For now, we need to use Go Runner as a library. ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd/go-runner")," in this project is an official example showing how to use the Go Runner SDK.\nWe will also support loading pre-compiled plugins through the Go Plugin mechanism later."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("h3",{id:"developing-with-the-go-runner-sdk"},"Developing with the Go Runner SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tree cmd/go-runner\ncmd/go-runner\n\u251c\u2500\u2500 main.go\n\u251c\u2500\u2500 main_test.go\n\u251c\u2500\u2500 plugins\n\u2502 \u251c\u2500\u2500 say.go\n\u2502 \u2514\u2500\u2500 say_test.go\n\u2514\u2500\u2500 version.go\n")),(0,a.kt)("p",null,"Above is the directory structure of the official example. ",(0,a.kt)("inlineCode",{parentName:"p"},"main.go")," is the entry point, where the most critical part is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"cfg := runner.RunnerConfig{}\n...\nrunner.Run(cfg)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RunnerConfig")," can be used to control the log level and log output location."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"runner.Run")," will make the application listen to the target socket path, receive requests and execute the registered plugins. The application will remain in this state until it exits."),(0,a.kt)("p",null,"Then let's look at the plugin implementation."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/say.go"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func init() {\n    err := plugin.RegisterPlugin(&Say{})\n    if err ! = nil {\n        log.Fatalf("failed to register plugin say: %s", err)\n    }\n}\n')),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"main.go")," imports the plugins package,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  ...\n    _ "github.com/apache/apisix-go-plugin-runner/cmd/go-runner/plugins"\n  ...\n)\n')),(0,a.kt)("p",null,"in this way we register ",(0,a.kt)("inlineCode",{parentName:"p"},"Say")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.RegisterPlugin")," before executing ",(0,a.kt)("inlineCode",{parentName:"p"},"runner.Run"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Say")," needs to implement the following methods:"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," method returns the plugin name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'func (p *Say) Name() string {\n    return "say"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ParseConf")," will be called when the plugin configuration changes, parsing the configuration and returning the plugin specific configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (p *Say) ParseConf(in []byte) (interface{}, error) {\n    conf := SayConf{}\n    err := json.Unmarshal(in, &conf)\n    return conf, err\n}\n")),(0,a.kt)("p",null,"The configuration of the plugin looks like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'type SayConf struct {\n    Body string `json: "body"`\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RequestFilter")," will be executed on every request with the say plugin configured."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'func (p *Say) RequestFilter(conf interface{}, w http.ResponseWriter, r pkgHTTP.Request) {\n    body := conf.(SayConf).\n    if len(body) == 0 {\n        return\n    }\n\n    w.Header().Add("X-Resp-A6-Runner", "Go")\n    _, err := w.Write([]byte(body))\n    if err ! = nil {\n        log.Errorf("failed to write: %s", err)\n    }\n}\n')),(0,a.kt)("p",null,"We can see that the RequestFilter takes the value of the body set in the configuration as the response body. If we call ",(0,a.kt)("inlineCode",{parentName:"p"},"Write")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteHeader")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"http.ResponseWriter"),"\n(respond directly in the plugin), it will response directly in the APISIX without touching the upstream. We can also set response headers in the plugin and touch the upstream\nat the same time by set RespHeader in ",(0,a.kt)("inlineCode",{parentName:"p"},"pkgHTTP.Request"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ResponseFilter")," supports rewriting the response during the response phase, we can see an example of its use in the ResponseRewrite plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type ResponseRewriteConf struct {\n    Status  int               `json:"status"`\n    Headers map[string]string `json:"headers"`\n    Body    string            `json:"body"`\n}\n\nfunc (p *ResponseRewrite) ResponseFilter(conf interface{}, w pkgHTTP.Response) {\n    cfg := conf.(ResponseRewriteConf)\n    if cfg.Status > 0 {\n        w.WriteHeader(200)\n    }\n\n    w.Header().Set("X-Resp-A6-Runner", "Go")\n    if len(cfg.Headers) > 0 {\n        for k, v := range cfg.Headers {\n            w.Header().Set(k, v)\n        }\n    }\n\n    if len(cfg.Body) == 0 {\n        return\n    }\n    _, err := w.Write([]byte(cfg.Body))\n    if err != nil {\n        log.Errorf("failed to write: %s", err)\n    }\n}\n')),(0,a.kt)("p",null,"We can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseFilter")," will rewrite the status, header, and response body of the response phase according to the configuration."),(0,a.kt)("p",null,"In addition, we can also get the status and headers in the original response through ",(0,a.kt)("inlineCode",{parentName:"p"},"pkgHTTP.Response"),"."),(0,a.kt)("p",null,"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"pkgHTTP.Request")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pkgHTTP.Response"),", you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/apisix-go-plugin-runner"},"API documentation")," provided by the Go Runner SDK."),(0,a.kt)("p",null,"After building the application (",(0,a.kt)("inlineCode",{parentName:"p"},"make build")," in the example), we need to set some environment variables at runtime:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock"))),(0,a.kt)("p",null,"Like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock ./go-runner run\n")),(0,a.kt)("p",null,"The application will listen to ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/runner.sock")," when it runs."),(0,a.kt)("h3",{id:"setting-up-apisix-debugging"},"Setting up APISIX (debugging)"),(0,a.kt)("p",null,"First you need to have APISIX on your machine, which needs to be on the same instance as Go Runner."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-go-plugin-runner/master/docs/assets/images/runner-overview.png",alt:"runner-overview"})),(0,a.kt)("p",null,"The diagram above shows the workflow of APISIX on the left, while the plugin runner on the right is responsible for running external plugins written in different languages. apisix-go-plugin-runner is one such runner that supports Go."),(0,a.kt)("p",null,"When you configure a plugin runner in APISIX, APISIX will treat the plugin runner as a child process of its own. This sub-process belongs to the same user as the APISIX process. When we restart or reload APISIX, the plugin runner will also be restarted."),(0,a.kt)("p",null,"If you configure the ext-plugin-* plugin for a given route, a request to hit that route will trigger APISIX to make an RPC call to the plugin runner via a unix socket. The call is broken down into two phases."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ext-plugin-pre-req: executed during handling the request, before most of the APISIX built-in plugins (Lua language plugins)"),(0,a.kt)("li",{parentName:"ul"},"ext-plugin-post-req: executed during handling the request, after most of the APISIX built-in plugins (Lua language plugins)"),(0,a.kt)("li",{parentName:"ul"},"ext-plugin-post-resp: executed during handling the response, after most of the APISIX built-in plugins (Lua language plugins)")),(0,a.kt)("p",null,"Configure the timing of plugin runner execution as needed."),(0,a.kt)("p",null,"The plugin runner handles the RPC calls, creates a mock request from it, then runs the plugins written in other languages and returns the results to APISIX."),(0,a.kt)("p",null,"The order of execution of these plugins is defined in the ext-plugin-* plugin configuration. Like other plugins, they can be enabled and disabled on the fly."),(0,a.kt)("p",null,"Let's go back to the examples. To show how to develop Go plugins, we first set APISIX into debug mode. Add the following configuration to config.yaml."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ext-plugin:\n  path_for_test: /tmp/runner.sock\n")),(0,a.kt)("p",null,"This configuration means that after hitting a routing rule, APISIX will make an RPC request to /tmp/runner.sock."),(0,a.kt)("p",null,"Next, prepare the routing rule."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "ext-plugin-pre-req": {\n      "conf": [\n        { "name": "say", "value":"{\\"body\\":\\"hello\\"}"}\n      ]\n    }\n  },\n  "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\n\'\n')),(0,a.kt)("p",null,"Note that the plugin name is configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and the plugin configuration (after JSON serialization) is placed in ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,a.kt)("p",null,"If you see ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh cache and try again")," warning on APISIX side and ",(0,a.kt)("inlineCode",{parentName:"p"},"key not found")," warning on Runner side during development, this is due to configuration cache inconsistency. Because the Runner is not managed by APISIX in the development state, the internal state may be inconsistent. Don't worry, APISIX will retry."),(0,a.kt)("p",null,"Then we request: curl 127.0.0.1:9080/get"),(0,a.kt)("p",null,"We can see that the interface returns hello and does not access anything upstream."),(0,a.kt)("h3",{id:"setting-up-apisix-running"},"Setting up APISIX (running)"),(0,a.kt)("p",null,"Here's an example of go-runner, you just need to configure the command line to run it inside ext-plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ext-plugin:\n  # path_for_test: /tmp/runner.sock\n  cmd: ["/path/to/apisix-go-plugin-runner/go-runner", "run"]\n')),(0,a.kt)("p",null,"APISIX will treat the plugin runner as a child process of its own, managing its entire lifecycle."),(0,a.kt)("p",null,"APISIX will automatically assign a unix socket address for the runner to listen to when it starts. environment variables do not need to be set manually."))}d.isMDXComponent=!0}}]);