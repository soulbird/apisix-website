(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29514,85916,72139],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52332:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(30808),r=n(25773),i=n(27378),l=n(38944),o=n(11787),c=n(35013),s="anchorWithStickyNavbar_XX5z",d="anchorWithHideOnScrollNavbar_c7R8",u=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,m=(0,a.Z)(e,u),p=(0,c.LU)().navbar.hideOnScroll;return r?i.createElement(t,m,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,(n={},n[d]=p,n[s]=!p,n)),id:r}),m.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,m)});var t}},78873:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(25773),r=n(30808),i=n(27378),l=n(55361),o=n(24142),c=n(95644),s=n(52332),d=n(38944),u=n(35013),m="details_4nRH";function p(e){var t=Object.assign({},e);return i.createElement(u.PO,(0,a.Z)({},t,{className:(0,d.Z)("alert alert--info",m,t.className)}))}var f=["mdxType","originalType"];var h={head:function(e){var t=i.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,l=(a.mdxType,a.originalType,(0,r.Z)(a,f));return i.createElement(e.props.originalType,l)}return e}(e)}));return i.createElement(l.Z,e,t)},code:function(e){var t=e.children;return(0,i.isValidElement)(t)?t:t.includes("\n")?i.createElement(c.Z,e):i.createElement("code",e)},a:function(e){return i.createElement(o.Z,e)},pre:function(e){var t,n=e.children;return(0,i.isValidElement)(n)&&(0,i.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:i.createElement(c.Z,(0,i.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=i.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=i.createElement(i.Fragment,null,t.filter((function(e){return e!==n})));return i.createElement(p,(0,a.Z)({},e,{summary:n}),r)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},46119:function(e,t,n){"use strict";n.r(t);var a=n(27378),r=n(51996),i=n(11787);t.default=function(){return a.createElement(r.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},86923:function(e){e.exports={versions:["2.12","2.13","2.14"],archivedVersions:[{label:"2.11",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.10",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/2.10/getting-started/"},{label:"2.9",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.8",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.8/getting-started/"},{label:"2.7",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.7/getting-started/"},{label:"2.6",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.6/getting-started/"},{label:"2.5",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.5/getting-started/"},{label:"2.4",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.4/getting-started/"}]}},22328:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return se}});var a=n(25773),r=n(27378),i=n(35318),l=n(36028),o=n(51996),c=n(38944),s=n(35013),d=n(98245),u=n(95135),m=n(13059),p=function(e){return r.createElement("svg",(0,a.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(11787),h=n(30808),b=n(24142),v=n(45626),g=n(31554),E="menuLinkText_edfa",y=["items"],Z=["item"],I=["item","onItemClick","activePath"],k=["item","onItemClick","activePath"],_=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},C=(0,r.memo)((function(e){var t=e.items,n=(0,h.Z)(e,y);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(S,(0,a.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,h.Z)(e,Z);return"category"===t.type?0===t.items.length?null:r.createElement(x,(0,a.Z)({item:t},n)):r.createElement(P,(0,a.Z)({item:t},n))}function x(e){var t,n=e.item,i=e.onItemClick,l=e.activePath,o=(0,h.Z)(e,I),d=n.items,u=n.label,m=n.collapsible,p=_(n,l),f=(0,s.uR)({initialState:function(){return!!m&&(!p&&n.collapsed)}}),b=f.collapsed,v=f.setCollapsed,g=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,i=(0,s.D9)(t);(0,r.useEffect)((function(){t&&!i&&n&&a(!1)}),[t,i,n])}({isActive:p,collapsed:b,setCollapsed:v}),r.createElement("li",{className:(0,c.Z)(s.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},r.createElement("a",(0,a.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&p},t[E]=!m,t)),onClick:m?function(e){e.preventDefault(),g()}:void 0,href:m?"#":void 0},o),u),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},r.createElement(C,{items:d,tabIndex:b?-1:0,onItemClick:i,activePath:l})))}function P(e){var t=e.item,n=e.onItemClick,i=e.activePath,l=(0,h.Z)(e,k),o=t.href,d=t.label,u=_(t,i);return r.createElement("li",{className:(0,c.Z)(s.kM.docs.docSidebarItemLink,"menu__list-item"),key:d},r.createElement(b.Z,(0,a.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:o},(0,v.Z)(o)&&{onClick:n},l),(0,v.Z)(o)?d:r.createElement("span",null,d,r.createElement(g.Z,null))))}var N=n(18259),T=n(86923),w="sidebar_LIo8",A="sidebarWithHideableNavbar_CMI-",O="sidebarHidden_4BoQ",M="sidebarLogo_P87M",j="menu_oAhv",B="menuWithAnnouncementBar_IVfW",L="collapseSidebarButton_EBxv",D="collapseSidebarButtonIcon_AF9Q",F="sidebarVersionSwitch_0QIZ";var H=function(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",L),onClick:t},r.createElement(p,{className:D}))},R=function(e){var t=e.docsPluginId;return r.createElement("div",{className:F},"Version:",r.createElement(N.Z,{docsPluginId:t,dropdownItemsBefore:[],dropdownItemsAfter:"docs-apisix"===t?T.archivedVersions:[],items:[]}))},W=r.memo(R),X=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path,i=e.docsPluginId;return r.createElement(r.Fragment,null,r.createElement(W,{docsPluginId:i}),r.createElement("ul",{className:(0,c.Z)(s.kM.docs.docSidebarMenu,"menu__list")},r.createElement(C,{items:n,activePath:a,onItemClick:function(){return t()}})))},z=function(e){return r.createElement(s.Cv,{component:X,props:e})},V=function(e){var t,n,a=e.path,i=e.sidebar,l=e.onCollapse,o=e.isHidden,d=e.docsPluginId,p=function(){var e=(0,s.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),f=(0,s.LU)(),h=f.navbar.hideOnScroll,b=f.hideableSidebar,v=(0,s.nT)().isClosed;return r.createElement("div",{className:(0,c.Z)(w,(t={},t[A]=h,t[O]=o,t))},h&&r.createElement(m.Z,{tabIndex:-1,className:M}),r.createElement(W,{docsPluginId:d}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",j,(n={},n[B]=!v&&p,n))},r.createElement("ul",{className:(0,c.Z)(s.kM.docs.docSidebarMenu,"menu__list")},r.createElement(C,{items:i,activePath:a}))),b&&r.createElement(H,{onClick:l}))},Q=r.memo(z),q=r.memo(V),U=function(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(q,e),a&&r.createElement(Q,e))},G=n(78873),Y=n(46119),J=n(69635),K="backToTopButton_THz+",$="backToTopButtonShow_98vQ";function ee(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var te=function(){var e,t=(0,J.TH)(),n=ee(),a=n.smoothScrollTop,i=n.cancelScrollToTop,l=(0,r.useState)(!1),o=l[0],s=l[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||i(),n<300)s(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),r.createElement("button",{className:(0,c.Z)("clean-btn",K,(e={},e[$]=o,e)),type:"button",onClick:function(){return a()}},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},ne=n(55361),ae=n(48295),re={docPage:"docPage_GMj9",docMainContainer:"docMainContainer_Q970",docSidebarContainer:"docSidebarContainer_k0Pq",docMainContainerEnhanced:"docMainContainerEnhanced_ipQ4",docSidebarContainerHidden:"docSidebarContainerHidden_05py",collapsedDocSidebar:"collapsedDocSidebar_3Col",expandSidebarButtonIcon:"expandSidebarButtonIcon_Dhhx",docItemWrapperEnhanced:"docItemWrapperEnhanced_JuqB"},ie={general:"General",apisix:"Apache APISIX\xae",dashboard:"Apache APISIX\xae Dashboard","ingress-controller":"Apache APISIX\xae Ingress Controller","helm-chart":"Apache APISIX\xae Helm Chart",docker:"Apache APISIX\xae Docker","java-plugin-runner":"Apache APISIX\xae Java Plugin Runner","go-plugin-runner":"Apache APISIX\xae Go Plugin Runner","python-plugin-runner":"Apache APISIX\xae Python Plugin Runner"},le=Object.keys(ie),oe=Object.assign({},G.Z,{img:function(e){return r.createElement(ae.Z,(0,a.Z)({},e,{preview:{mask:"Click to Preview"}}))}}),ce=function(e){var t,n,a,l=e.currentDocRoute,d=e.versionMetadata,u=e.children,m=d.pluginId,h=d.version,b=l.sidebar,v=b?d.docsSidebars[b]:void 0,g=(0,r.useState)(!1),E=g[0],y=g[1],Z=(0,r.useState)(!1),I=Z[0],k=Z[1];(0,r.useEffect)((function(){var e=document.querySelector(".navbar__items--right").childElementCount,t=document.querySelector(".navbar__items--right").childNodes[e-2];t.style.display=window.innerWidth>745?"block":"none";var n=l.path.split("/").slice(2,4).reduce((function(e,t){return le.includes(t)?t:e}),"");return document.querySelectorAll(".navbar__link")[0].innerText=ie[n],function(){t.style.display="none"}}),[]);var _=(0,r.useCallback)((function(){I&&k(!1),y(!E)}),[I]);return r.createElement(o.Z,{wrapperClassName:s.kM.wrapper.docsPages,pageClassName:s.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,s.os)(m,h)}},r.createElement("div",{className:re.docPage},r.createElement(te,null),v&&r.createElement("aside",{className:(0,c.Z)(re.docSidebarContainer,(t={},t[re.docSidebarContainerHidden]=E,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(re.docSidebarContainer)&&E&&k(!0)}},r.createElement(U,{key:b,sidebar:v,path:l.path,onCollapse:_,isHidden:I,docsPluginId:m}),I&&r.createElement("div",{className:re.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},r.createElement(p,{className:re.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(re.docMainContainer,(n={},n[re.docMainContainerEnhanced]=E||!v,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",re.docItemWrapper,(a={},a[re.docItemWrapperEnhanced]=E,a))},r.createElement(i.Zo,{components:oe},u)))))},se=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,i=t.find((function(e){return(0,J.LX)(a.pathname,e)}));return i?r.createElement(r.Fragment,null,r.createElement(ne.Z,null,r.createElement("html",{className:n.className})),r.createElement(ce,{currentDocRoute:i,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n}))):r.createElement(Y.default,e)}},94867:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(25773),r=n(30808),i=n(27378),l=n(43727),o=n(76281),c=n(50353),s=n(35013),d=n(69635),u="iconLanguage_zID8",m=["mobile","dropdownItemsBefore","dropdownItemsAfter"],p=function(e){var t=e.mobile,n=e.dropdownItemsBefore,p=e.dropdownItemsAfter,f=(0,r.Z)(e,m),h=(0,c.Z)().i18n,b=h.currentLocale,v=h.locales,g=h.localeConfigs,E=(0,s.l5)(),y=(0,d.TH)().pathname;if(y.startsWith("/zh/blog")||y.startsWith("/blog"))return null;function Z(e){return g[e].label}var I=v.map((function(e){var t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:Z(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===b?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),k=[].concat(n,I,p),_=t?"Languages":Z(b);return i.createElement(l.Z,(0,a.Z)({},f,{href:"#",mobile:t,label:i.createElement("span",null,i.createElement(o.Z,{className:u}),i.createElement("span",null,_)),items:k}))}}}]);