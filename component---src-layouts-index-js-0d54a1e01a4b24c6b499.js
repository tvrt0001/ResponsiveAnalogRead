webpackJsonp([0x67ef26645b2a,60335399758886],{107:function(e,t){e.exports={data:{site:{siteMetadata:{title:"ResponsiveAnalogRead"}}},layoutContext:{}}},204:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=r(a),u=n(208),l=r(u),c=n(107),f=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,f.default))},e.exports=t.default},41:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},97:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),a=r(o),i=n(2),u=r(i),l=n(24),c=r(l);t.default=function(e){return u.default.createElement(c.default,(0,a.default)({element:"code",modifier:"code"},e))}},98:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),a=r(o),i=n(2),u=r(i),l=n(24),c=r(l);t.default=function(e){return u.default.createElement(c.default,(0,a.default)({element:"p",modifier:"margin"},e))}},24:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=r(o),i=n(129),u=r(i);t.default=function(e){var t=e.className,n=e.modifier,r=e.peer,o=e.spruceName,i=void 0===o?"Text":o,l=e.style,c=e.title,f=e.element,s=void 0===f?"span":f,d=e.children;return a.default.createElement(s,{className:(0,u.default)({name:i,modifier:n,className:t,peer:r}),style:l,title:c,children:d})}},99:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(18),a=r(o),i=n(2),u=r(i),l=n(102),c=r(l),f=n(97),s=r(f),d=n(98),T=r(d),p=n(24),E=r(p),A=function(){return u.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Roboto+Mono",rel:"stylesheet"})};e.exports=(0,a.default)({},c.default,{Code:s.default,Head:A,Paragraph:T.default,Text:E.default})},283:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var s=u(e),d=u(t)}catch(e){return!1}if(s.length!=d.length)return!1;for(s.sort(),d.sort(),a=s.length-1;a>=0;a--)if(s[a]!=d[a])return!1;for(a=s.length-1;a>=0;a--)if(f=s[a],!c(e[f],t[f],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(285),l=n(284),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},284:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},285:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},292:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},102:function(e,t,n){function r(e,t){return e[t]=a.default(u[t]||t,i[t]||"div"),e}function o(e,t){return e[t]=e[c[t]],e}var a=n(104),i={Breadcrumb:"ol",BreadcrumbItem:"li",Button:"button",Divider:"hr",Image:"img",Label:"label",Link:"a",List:"ul",ListItem:"li",Select:"select",Table:"table",TableBody:"tbody",TableCell:"td",TableFoot:"tfoot",TableHead:"thead",TableHeadCell:"th",TableRow:"tr",Text:"span"},u={BreadcrumbItem:"Breadcrumb_item",GridItem:"Grid_item",ListItem:"List_item",OverlayContent:"Overlay_content",TableBody:"Table_body",TableCell:"Table_cell",TableFoot:"Table_foot",TableHead:"Table_head",TableHeadCell:"Table_headCell",TableRow:"Table_row",WindowTitle:"Window_title",WindowContent:"Window_content"},l=["Animation","Badge","Box","Breadcrumb","BreadcrumbItem","Button","Checkbox","Choice","DayPicker","Divider","Dropdown","Grid","GridItem","Icon","Image","Input","Label","Link","List","ListItem","Login","Logo","Media","Navigation","Overlay","OverlayContent","Pagination","ProgressBar","Select","Tab","TabSet","Table","Table","TableBody","TableCell","TableFoot","TableHead","TableHeadCell","TableRow","Terminal","Text","Toggle","ToggleSet","Typography","Window","WindowTitle","WindowContent","Wrapper"],c={Column:"GridItem"},f=l.reduce(r,{});e.exports=Object.keys(c).reduce(o,f)},103:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=e.name,n=(0,i.default)(e.modifier).split(" ").filter(function(e){return""!=e}).map(function(e){return t+"-"+e}),r=(0,i.default)(e.peer).split(" ").filter(function(e){return""!=e}).map(function(e){return t+"--"+e}),o=arguments.length,a=Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return(0,i.default)(e.name,n,r,a,e.className).replace(/\s+/g," ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(41),i=r(a)},104:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){function n(n){var r=n.children,o=n.className,a=n.modifier,u=n.peer,c=n.spruceName,s=n.element,T=(0,l.default)(n,["children","className","modifier","peer","spruceName","element"]),p=s||t;return f.default.createElement(p,(0,i.default)({className:(0,d.default)({className:o,modifier:a,peer:u,name:c||e}),children:r},T))}return n.displayName=e,n}Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),i=r(a),u=n(133),l=r(u);t.default=o;var c=n(2),f=r(c),s=n(103),d=r(s)},394:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),s=r(f),d=n(7),T=r(d),p=n(413),E=r(p),A=n(283),y=r(A),m=n(395),b=n(191),h=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case b.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case b.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,m.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),s.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,m.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},_=function(){return null},S=(0,E.default)(m.reducePropsToState,m.handleClientStateChange,m.mapStateOnServer)(_),v=h(S);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},191:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},395:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),u=r(i),l=n(5),c=r(l),f=n(191),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=y(e,f.TAG_NAMES.TITLE),n=y(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return y(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},A=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===f.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=function(e){return{baseTag:E([f.TAG_PROPERTIES.HREF],e),bodyAttributes:p(f.ATTRIBUTE_NAMES.BODY,e),defer:y(e,f.HELMET_PROPS.DEFER),encode:y(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(f.ATTRIBUTE_NAMES.HTML,e),linkTags:A(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:A(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:A(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:A(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:A(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(f.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),h=function(e){return clearTimeout(e)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,M=function(e){O&&S(O),e.defer?O=_(function(){P(e,function(){O=null})}):(P(e),O=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,s=e.styleTags,d=e.title,T=e.titleAttributes;C(f.TAG_NAMES.BODY,r),C(f.TAG_NAMES.HTML,o),g(d,T);var p={baseTag:I(f.TAG_NAMES.BASE,n),linkTags:I(f.TAG_NAMES.LINK,a),metaTags:I(f.TAG_NAMES.META,i),noscriptTags:I(f.TAG_NAMES.NOSCRIPT,u),scriptTags:I(f.TAG_NAMES.SCRIPT,c),styleTags:I(f.TAG_NAMES.STYLE,s)},E={},A={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(A[e]=p[e].oldTags)}),t&&t(),l(e,E,A)},R=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),C(f.TAG_NAMES.TITLE,t)},C=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var s=a.indexOf(l);s!==-1&&a.splice(s,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,i.join(","))}},I=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},w=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=w(n),a=R(t);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),a=G(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,a,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},B=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return L(e,t,n)}}}},k=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,s=e.title,d=void 0===s?"":s,T=e.titleAttributes;return{base:B(f.TAG_NAMES.BASE,t,r),bodyAttributes:B(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:B(f.ATTRIBUTE_NAMES.HTML,o,r),link:B(f.TAG_NAMES.LINK,a,r),meta:B(f.TAG_NAMES.META,i,r),noscript:B(f.TAG_NAMES.NOSCRIPT,u,r),script:B(f.TAG_NAMES.SCRIPT,l,r),style:B(f.TAG_NAMES.STYLE,c,r),title:B(f.TAG_NAMES.TITLE,{title:d,titleAttributes:T},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=M,t.mapStateOnServer=k,t.reducePropsToState=m,t.requestAnimationFrame=_,t.warn=v}).call(t,function(){return this}())},413:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){p=e(T.map(function(e){return e.props})),E.canUseDOM?t(p):n&&(p=n(p))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var T=[],p=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return p},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=p;return p=void 0,T=[],e},t.prototype.shouldComponentUpdate=function(e){return!s(e,this.props)},t.prototype.componentWillMount=function(){T.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),d()},t.prototype.render=function(){return c.createElement(u,this.props)},t}(l.Component);return E.displayName="SideEffect("+r(u)+")",E.canUseDOM=f.canUseDOM,E}}var l=n(2),c=r(l),f=r(n(292)),s=r(n(430));e.exports=u},430:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!u(c))return!1;var f=e[c],s=t[c];if(o=n?n.call(r,f,s,c):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},129:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=e.name,n=(0,i.default)(e.modifier).split(" ").filter(function(e){return""!=e}).map(function(e){return t+"-"+e}),r=(0,i.default)(e.peer).split(" ").filter(function(e){return""!=e}).map(function(e){return t+"--"+e}),o=arguments.length,a=Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return(0,i.default)(e.name,n,r,a,e.className).replace(/\s+/g," ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(41),i=r(a)},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(2),a=r(o),i=n(394),u=r(i),l=n(99);n(323),t.default=function(e){var t=e.children,n=e.data;return a.default.createElement("div",null,a.default.createElement(u.default,null,a.default.createElement("title",null,n.site.siteMetadata.title),a.default.createElement("meta",{name:"description",content:"Website"}),a.default.createElement(l.Head,null)),t())};t.query="** extracted graphql fragment **"},323:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-0d54a1e01a4b24c6b499.js.map