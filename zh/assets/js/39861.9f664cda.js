(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39861],{39861:function(e,t,r){(()=>{var t={296:(e,t,r)=>{var o=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,a=u||l||Function("return this")(),f=Object.prototype.toString,p=Math.max,y=Math.min,d=function(){return a.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=i.test(e);return r||s.test(e)?c(e.slice(2),r?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var o,n,i,s,c,u,l=0,a=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=o,i=n;return o=n=void 0,l=t,s=e.apply(i,r)}function O(e){return l=e,c=setTimeout(g,t),a?m(e):s}function w(e){var r=e-u;return void 0===u||r>=t||r<0||f&&e-l>=i}function g(){var e=d();if(w(e))return P(e);c=setTimeout(g,function(e){var r=t-(e-u);return f?y(r,i-(e-l)):r}(e))}function P(e){return c=void 0,v&&o?m(e):(o=n=void 0,s)}function T(){var e=d(),r=w(e);if(o=arguments,n=this,u=e,r){if(void 0===c)return O(u);if(f)return c=setTimeout(g,t),m(u)}return void 0===c&&(c=setTimeout(g,t)),s}return t=h(t)||0,b(r)&&(a=!!r.leading,i=(f="maxWait"in r)?p(h(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),T.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=n=c=void 0},T.flush=function(){return void 0===c?s:P(d())},T}},96:(e,t,r)=>{var o="Expected a function",n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,a="object"==typeof self&&self&&self.Object===Object&&self,f=l||a||Function("return this")(),p=Object.prototype.toString,y=Math.max,d=Math.min,b=function(){return f.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=s.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return h(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),function(e,t,r){var n,i,s,c,u,l,a=0,f=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function O(t){var r=n,o=i;return n=i=void 0,a=t,c=e.apply(o,r)}function w(e){return a=e,u=setTimeout(P,t),f?O(e):c}function g(e){var r=e-l;return void 0===l||r>=t||r<0||p&&e-a>=s}function P(){var e=b();if(g(e))return T(e);u=setTimeout(P,function(e){var r=t-(e-l);return p?d(r,s-(e-a)):r}(e))}function T(e){return u=void 0,m&&n?O(e):(n=i=void 0,c)}function j(){var e=b(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===u)return w(l);if(p)return u=setTimeout(P,t),O(l)}return void 0===u&&(u=setTimeout(P,t)),c}return t=v(t)||0,h(r)&&(f=!!r.leading,s=(p="maxWait"in r)?y(v(r.maxWait)||0,t):s,m="trailing"in r?!!r.trailing:m),j.cancel=function(){void 0!==u&&clearTimeout(u),a=0,n=l=i=u=void 0},j.flush=function(){return void 0===u?c:T(b())},j}(e,t,{leading:n,maxWait:t,trailing:i})}},703:(e,t,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,s){if(s!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{LazyLoadComponent:()=>X,LazyLoadImage:()=>te,trackWindowScroll:()=>D});const e=r(27378);var t=n.n(e),o=n(697);const s=r(31542);var c=n.n(s);function u(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},h={},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(n){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return y(this,e)});function s(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&u(),t.supportsObserver){var r=e.threshold;t.observer=function(e){return h[e]=h[e]||new IntersectionObserver(b,{rootMargin:e+"px"}),h[e]}(r)}return t}return(r=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),r=c().findDOMNode(this.placeholder).style,o={left:parseInt(r.getPropertyValue("margin-left"),10)||0,top:parseInt(r.getPropertyValue("margin-top"),10)||0};return{bottom:e.y+t.bottom+o.top,left:e.x+t.left+o.left,right:e.x+t.right+o.left,top:e.y+t.top+o.top}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,r=e.threshold,o=this.getPlaceholderBoundingBox(t),n=t.y+window.innerHeight,i=t.x,s=t.x+window.innerWidth,c=t.y;return Boolean(c-r<=o.bottom&&n+r>=o.top&&i-r<=o.right&&s+r>=o.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,r=this.props,o=r.className,n=r.height,i=r.placeholder,s=r.style,c=r.width;if(i&&"function"!=typeof i.type)return t().cloneElement(i,{ref:function(t){return e.placeholder=t}});var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({display:"inline-block"},s);return void 0!==c&&(u.width=c),void 0!==n&&(u.height=n),t().createElement("span",{className:o,ref:function(t){return e.placeholder=t},style:u},i)}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,r),s}(t().Component);v.propTypes={onVisible:o.PropTypes.func.isRequired,className:o.PropTypes.string,height:o.PropTypes.oneOfType([o.PropTypes.number,o.PropTypes.string]),placeholder:o.PropTypes.element,threshold:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool,scrollPosition:o.PropTypes.shape({x:o.PropTypes.number.isRequired,y:o.PropTypes.number.isRequired}),width:o.PropTypes.oneOfType([o.PropTypes.number,o.PropTypes.string])},v.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const m=v;var O=n(296),w=n.n(O),g=n(96),P=n.n(g),T=function(e){var t=getComputedStyle(e,null);return t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x")};const j=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t instanceof HTMLElement;){if(/(scroll|auto)/.test(T(t)))return t;t=t.parentNode}return window};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=["delayMethod","delayTime"];function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},C=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};const D=function(e){var r=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(l,r);var o,n,i,s=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(n);if(i){var r=k(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return L(this,e)});function l(e){var r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=s.call(this,e)).useIntersectionObserver=e.useIntersectionObserver&&u(),r.useIntersectionObserver)return L(r);var o=r.onChangeScroll.bind(x(r));return"debounce"===e.delayMethod?r.delayedScroll=w()(o,e.delayTime):"throttle"===e.delayMethod&&(r.delayedScroll=P()(o,e.delayTime)),r.state={scrollPosition:{x:R(),y:C()}},r.baseComponentRef=t().createRef(),r}return(o=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||j(c().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=j(c().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:R(),y:C()}})}},{key:"render",value:function(){var r=this.props,o=(r.delayMethod,r.delayTime,function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(r,E)),n=this.useIntersectionObserver?null:this.state.scrollPosition;return t().createElement(e,_({forwardRef:this.baseComponentRef,scrollPosition:n},o))}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(l.prototype,o),l}(t().Component);return r.propTypes={delayMethod:o.PropTypes.oneOf(["debounce","throttle"]),delayTime:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool},r.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},r};function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(s,e);var r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(o);if(n){var r=V(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return B(this,e)});function s(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,e)}return(r=[{key:"render",value:function(){return t().createElement(m,this.props)}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,r),s}(t().Component);const z=D(W);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return q(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(s,e);var r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(o);if(n){var r=H(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return F(this,e)});function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=i.call(this,e);var r=e.afterLoad,o=e.beforeLoad,n=e.scrollPosition,c=e.visibleByDefault;return t.state={visible:c},c&&(o(),r()),t.onVisible=t.onVisible.bind(q(t)),t.isScrollTracked=Boolean(n&&Number.isFinite(n.x)&&n.x>=0&&Number.isFinite(n.y)&&n.y>=0),t}return(r=[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,r=e.className,o=e.delayMethod,n=e.delayTime,i=e.height,s=e.placeholder,c=e.scrollPosition,l=e.style,a=e.threshold,f=e.useIntersectionObserver,p=e.width;return this.isScrollTracked||f&&u()?t().createElement(m,{className:r,height:i,onVisible:this.onVisible,placeholder:s,scrollPosition:c,style:l,threshold:a,useIntersectionObserver:f,width:p}):t().createElement(z,{className:r,delayMethod:o,delayTime:n,height:i,onVisible:this.onVisible,placeholder:s,style:l,threshold:a,width:p})}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,r),s}(t().Component);Y.propTypes={afterLoad:o.PropTypes.func,beforeLoad:o.PropTypes.func,useIntersectionObserver:o.PropTypes.bool,visibleByDefault:o.PropTypes.bool},Y.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const X=Y;function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var G=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(s,e);var r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(o);if(n){var r=Z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Q(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={loaded:!1},t}return(r=[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(){e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,r=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,G));return t().createElement("img",J({onLoad:this.onImageLoad()},r))}},{key:"getLazyLoadImage",value:function(){var e=this.props,r=e.beforeLoad,o=e.className,n=e.delayMethod,i=e.delayTime,s=e.height,c=e.placeholder,u=e.scrollPosition,l=e.style,a=e.threshold,f=e.useIntersectionObserver,p=e.visibleByDefault,y=e.width;return t().createElement(X,{beforeLoad:r,className:o,delayMethod:n,delayTime:i,height:s,placeholder:c,scrollPosition:u,style:l,threshold:a,useIntersectionObserver:f,visibleByDefault:p,width:y},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var r=this.props,o=r.effect,n=r.height,i=r.placeholderSrc,s=r.width,c=r.wrapperClassName,u=r.wrapperProps,l=this.state.loaded,a=l?" lazy-load-image-loaded":"";return t().createElement("span",J({className:c+" lazy-load-image-background "+o+a,style:{backgroundImage:l||!i?"":"url(".concat(i,")"),backgroundSize:l||!i?"":"100% 100%",color:"transparent",display:"inline-block",height:n,width:s}},u),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,r=e.placeholderSrc,o=e.visibleByDefault,n=e.wrapperClassName,i=e.wrapperProps,s=this.getLazyLoadImage();return(t||r)&&!o||n||i?this.getWrappedLazyLoadImage(s):s}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,r),s}(t().Component);ee.propTypes={afterLoad:o.PropTypes.func,beforeLoad:o.PropTypes.func,delayMethod:o.PropTypes.string,delayTime:o.PropTypes.number,effect:o.PropTypes.string,placeholderSrc:o.PropTypes.string,threshold:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool,visibleByDefault:o.PropTypes.bool,wrapperClassName:o.PropTypes.string,wrapperProps:o.PropTypes.object},ee.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const te=ee})(),e.exports=i})()}}]);