(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RLlu:function(e,t,c){"use strict";(function(e){var n=c("q1tI");t.a=function(){function t(){var t,c;return{width:null===(t=e.window)||void 0===t?void 0:t.innerWidth,height:null===(c=e.window)||void 0===c?void 0:c.innerHeight}}var c=Object(n.useState)(t),i=c[0],r=c[1];return Object(n.useEffect)((function(){function e(){r(t())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}}).call(this,c("yLpj"))},h2aq:function(e,t,c){"use strict";t.a=function(e){return"".concat(e/16,"rem")}},iuXm:function(e,t,c){"use strict";var n=c("qKvR"),i=c("h2aq"),r=Object(n.b)("font-size:",Object(i.a)(30),";");t.a=r},qzpU:function(e,t,c){"use strict";var n=c("q1tI"),i=c("/MKj"),r=c("tTVs"),o=c("lJMC"),a=c("/OUa"),s=c("jQch"),l=c("VMFb"),u=c("Ff2n"),b=c("33pW"),d=c("dP9C"),f=function(e){var t=e.types,c=e.steps;if(!(c&&Array.isArray(c)&&t&&Array.isArray(t)))return null;var n={},i=[];return t.forEach((function(e,t){n[e]=n[e]||[];var r=0===t;c.forEach((function(t,c){var o=t.id,a=!(!1===t.visible),s=Object(u.a)(t,["id","visible"])[e];if(function(e){var t,c;if(!(null===e||void 0===e?void 0:null===(t=e.script)||void 0===t?void 0:t.db)||!(null===e||void 0===e?void 0:null===(c=e.script)||void 0===c?void 0:c.snippets))return!1;if("string"!==typeof e.script.db)return!1;if(!Array.isArray(e.script.snippets))return!1;for(var n=0;n<e.script.snippets.length;n+=1)if("string"!==typeof e.script.snippets[n])return!1;if(void 0!==e.description&&"string"!==typeof e.description)return!1;if(void 0!==e.dependency&&!Object(b.b)(e.dependency))return!1;if(void 0!==e.choices){if(!Array.isArray(e.choices))return!1;for(var i=0;i<e.choices.length;i+=1)if("string"!==typeof e.choices[i]||Object(d.b)(e.choices[i]))return!1}return!0}(s)){var l;if(r&&!a)l=s.choices&&Array.isArray(s.choices)?s.choices.reduce((function(e,t){return"string"===typeof t?e[t]={id:t}:e[t.id]=t,e}),{}):{yes:{id:"yes"},no:{id:"no"}},i.push({id:o,choices:l});n[e].push({id:o,visible:a,scriptType:e,order:c,description:s.description,script:s.script,dependency:s.dependency})}}))})),{parsedSteps:n,choiceControl:i}};t.a=function(e){var t=Object(i.b)();Object(n.useEffect)((function(){var c=null===e||void 0===e?void 0:e.types,n=null===e||void 0===e?void 0:e.db;if((null===c||void 0===c?void 0:c.length)&&(null===n||void 0===n?void 0:n.length)){t(Object(r.b)(c)),t(Object(o.b)(n)),t(Object(a.b)(null===e||void 0===e?void 0:e.vars)),t(Object(s.b)(null===e||void 0===e?void 0:e.snippets));var i=f({steps:null===e||void 0===e?void 0:e.steps,types:c})||{},u=i.parsedSteps,b=i.choiceControl;t(Object(l.d)({steps:u,types:c})),t(Object(l.c)(b))}}),[e])}},sOKc:function(e,t,c){"use strict";var n=c("q1tI"),i=c.n(n),r=c("qKvR"),o=c("h2aq"),a=Object(r.b)("font-size:",Object(o.a)(20),";text-align:center;"),s=(i.a.createElement,Object(r.b)("width:calc(100% - 2 * ",Object(o.a)(5),");border-top:",Object(o.a)(1)," solid black;margin:",Object(o.a)(5),";")),l=function(){return Object(r.c)("div",{css:s})},u=c("/MKj"),b=c("33pW"),d=function(e){return e.step.steps[e.scriptType[0]]||b.a.getInitialState()},f=function(e){return e.step.currentStepId},v=c("RLlu"),j=function(){var e=Object(n.useState)(),t=e[0],c=e[1];return{size:t,measureRef:Object(n.useCallback)((function(e){null!==e&&c(e.getBoundingClientRect())}),[])}},O=function(){var e=Object(v.a)(),t=j(),c=t.size,n=t.measureRef;return{height:e.height&&(null===c||void 0===c?void 0:c.top)?e.height-(null===c||void 0===c?void 0:c.top):0,measureRef:n}},p=c("VMFb"),h=function(e){var t=e.id,c=e.order;return"step ".concat(c,": ").concat(t)},g=(i.a.createElement,function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(r.b)("font-size:",Object(o.a)(18),";",t&&"font-weight: bold; font-style: italic;",";margin:",Object(o.a)(5),";",e&&"\n    font-family: inherent;\n    text-align: left;\n    color: blue;\n    cursor: pointer;\n    &:hover {\n      color: red;\n    }\n  ",";")}),y=function(e){var t=e.id,c=e.order,n=e.visible,i=e.selected,o=h({id:t,order:c}),a=Object(u.b)();return n?Object(r.c)("button",{type:"button",css:g(n,i),onClick:function(){a(Object(p.a)(t))}},o):Object(r.c)("p",{css:g(n,i)},o)},m=(i.a.createElement,Object(r.b)("max-width:",Object(o.a)(400),";width:30%;border-right:",Object(o.a)(1)," solid black;margin-right:",Object(o.a)(10),";")),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return Object(r.b)("margin:",Object(o.a)(10),";margin-bottom:",Object(o.a)(t),";display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;overflow:hidden;overflow-y:auto;max-height:calc(",Object(o.a)(e)," - ",Object(o.a)(t),");")},E=b.a.getSelectors(d).selectAll,k=function(){var e=Object(u.c)(E),t=Object(u.c)(f),c=O(),n=c.height,i=c.measureRef;return Object(r.c)("div",{css:m},Object(r.c)("h3",{css:a},"content table"),Object(r.c)(l,null),Object(r.c)("div",{css:w(n),ref:i},e.map((function(e){var c=e.id,n=e.visible,i=e.order;return Object(r.c)(y,{key:"".concat(c,"-").concat(n),id:c,visible:n,order:i,selected:c===t})}))))},x=c("PIag"),A=(i.a.createElement,function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(Object(r.b)("font-size:",e?Object(o.a)(24):Object(o.a)(18),";margin:",Object(o.a)(8),";font-family:inherent;",!e&&"\n    text-align: left;\n    color: blue;\n    cursor: pointer;\n    &:hover {\n      color: red;\n    }\n  ",";"))}),q=function(e){var t=e.current,c=void 0!==t&&t,n=e.label,i=e.id,o=void 0===i?"":i,a=Object(u.b)();return c?Object(r.c)("div",{css:A(!0)},n):Object(r.c)("button",{type:"button",css:A(!1),onClick:function(){o&&a(Object(p.a)(o))}},n)},R=(i.a.createElement,["\u25b2 ","","\u25bc "]),z=Object(r.b)("margin-bottom:",Object(o.a)(10),";"),I=b.a.getSelectors(d),C=I.selectEntities,S=I.selectIds,K=function(){var e=Object(u.c)(f),t=Object(u.c)(S),c=Object(u.c)(C),n=Object(x.b)({ids:t,entities:c,endId:e}),i=Object(x.a)({ids:t,entities:c,startId:e});return Object(r.c)("div",{css:z},[n,e,i].map((function(e,t){if(e&&c[e]){var n=c[e];return Object(r.c)(q,{key:"".concat(t,"-").concat(e),current:1===t,label:"".concat(R[t]).concat(h(n)),id:e})}return Object(r.c)(q,{key:"".concat(t,"-").concat(e),current:1===t,label:R[t]})})))};i.a.createElement;var L={name:"8atqhb",styles:"width:100%;"},M=function(){return Object(r.c)("div",{css:L},Object(r.c)(K,null))},F=(i.a.createElement,Object(r.b)("max-width:",Object(o.a)(500),";width:30%;border-left:",Object(o.a)(1)," solid black;margin-left:",Object(o.a)(10),";")),J=function(){return Object(r.c)("div",{css:F},Object(r.c)("h3",{css:a},"script result"),Object(r.c)(l,null))},T=(i.a.createElement,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return Object(r.b)("display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;height:calc(",Object(o.a)(e)||"100%"," - ",Object(o.a)(t),");margin:",Object(o.a)(20)," 0 ",Object(o.a)(t),";")});t.a=function(){var e=O(),t=e.height,c=e.measureRef;return Object(r.c)("div",{css:T(t),ref:c},Object(r.c)(k,null),Object(r.c)(M,null),Object(r.c)(J,null))}}}]);