(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),s=n(7),i=n(15),u=(n(37),n(25)),l=n.n(u),m=n(10),d=n.n(m),p=n(11),f=n(17),E=n(16),v=n(8),b=n(26),h=n(27),g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIAL":return!0;default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR_MESSAGE":return t.errorMessage;default:return e}},j=function(e){return{type:"SET_POSTS",posts:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return t.posts;case"DELETE_COMMENT":return e.map((function(e){var n;return e.id===t.postId?Object(p.a)(Object(p.a)({},e),{},{comments:null===(n=e.comments)||void 0===n?void 0:n.filter((function(e){return e.id!==t.commentId}))}):e}));default:return e}},I="https://mate-academy.github.io/react_dynamic-list-of-posts/api";function S(e){return w.apply(this,arguments)}function w(){return(w=Object(E.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=Object(v.combineReducers)({initial:y,loading:g,errorMessage:O,posts:N}),_=function(e){return e.loading},x=function(e){return e.initial},L=function(e){return e.posts},A=Object(v.createStore)(T,Object(b.composeWithDevTools)(Object(v.applyMiddleware)(h.a))),R=function(){var e=Object(s.b)(),t=Object(s.c)(_);return r.a.createElement("button",{type:"button",className:l()("button",{"is-loading":t,"is-primary":t}),onClick:function(){return e(function(){var e=Object(E.a)(d.a.mark((function e(t){var n,a,r,c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"START_LOADING"}),e.prev=1,e.next=4,Promise.all([S("posts.json"),S("users.json"),S("comments.json")]);case 4:n=e.sent,a=Object(f.a)(n,3),r=a[0],c=a[1],o=a[2],s=r.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{user:c.find((function(t){return t.id===e.userId})),comments:o.filter((function(t){return t.postId===e.id}))})})),t(j(s)),t({type:"INITIAL"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t({type:"SET_ERROR_MESSAGE",errorMessage:"Error occurred when loading data: ".concat(e.t0)});case 17:t({type:"FINISH_LOADING"});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}())},disabled:t},t?"Loading...":"Load")},M=n(2),k=(n(39),function(e){var t=e.id,n=e.postId,a=e.name,c=e.email,o=e.body,i=Object(s.b)();return r.a.createElement("div",{className:"comment box is-italic is-margin-vertical",id:"".concat(n,"-").concat(t)},r.a.createElement("strong",null,a)," ",r.a.createElement("small",null,c),r.a.createElement("p",null,o),r.a.createElement("button",{type:"button",className:"button is-danger is-rounded comment__hidden-button",onClick:function(){return i(function(e,t){return{type:"DELETE_COMMENT",postId:e,commentId:t}}(n,t))}},"x"))}),C=function(e){var t=e.comments;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(k,e))})))},D=function(e){var t=e.id,n=e.title,a=e.body,c=e.author,o=e.comments;return r.a.createElement("article",{className:"message is-primary",id:"".concat(t)},r.a.createElement("div",{className:"message-header"},r.a.createElement("h1",{className:"title has-text-white is-capitalized is-4"},n)),r.a.createElement("div",{className:"message-body"},c&&r.a.createElement("h2",{className:"subtitle"},"Author: ".concat(c.username)),a,o&&r.a.createElement(C,{comments:o})))},G=function(){var e,t=Object(M.e)(),n=(null===(e=new URLSearchParams(t.search).get("query"))||void 0===e?void 0:e.toLowerCase())||"",c=Object(s.c)(L),o=Object(a.useMemo)((function(){return c.filter((function(e){return"".concat(e.title," ").concat(e.body).replace(/\s*/g," ").includes(n.replace(/\s*/g," "))}))}),[n,c]);return r.a.createElement(r.a.Fragment,null,o.map((function(e){return r.a.createElement(D,Object.assign({},e,{key:e.id}))})))},P=function(){var e,t=Object(M.d)(),n=Object(M.e)(),c=new URLSearchParams(n.search),o=(null===(e=c.get("query"))||void 0===e?void 0:e.toLowerCase())||"",s=Object(a.useState)(o),i=Object(f.a)(s,2),u=i[0],l=i[1],m=Object(a.useCallback)(function(e,t){var n;return function(){var a;clearTimeout(n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];n=(a=window).setTimeout.apply(a,[e,t].concat(c))}}((function(e){""===e?c.delete("query"):c.set("query",e),t.push({search:c.toString()})}),1e3),[]);return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-primary",type:"text",placeholder:"Input text",value:u,onChange:function(e){var t=e.target.value;m(t),l(t)}})))},q=function(){var e=Object(s.c)(x);return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title is-1"},"Redux list of posts"),!e&&r.a.createElement(R,null),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(G,null))))},F=function(){return r.a.createElement(s.a,{store:A},r.a.createElement(i.a,null,r.a.createElement(q,null)))};o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ba092b9d.chunk.js.map