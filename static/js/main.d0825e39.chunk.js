(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a.n(n),s=a(4),b=a(5),i=a(8),r=a(7),l=a(1),o=a.n(l),d=(a(13),a(14),a(6)),u=a.n(d),j=a(0),h=function(t){var e=t.tabs,a=t.selectedTab,n=t.onTabSelected;return Object(j.jsxs)("div",{className:"tabs",children:[Object(j.jsxs)("div",{className:"tabs__container",children:[Object(j.jsx)("div",{className:"tabs__buttons",children:e.map((function(t){return Object(j.jsx)("button",{type:"button",value:t.id,onClick:function(){return n(t)},className:u()("tabs__tab",{tabs__active:t.id===a.id}),children:t.title},t.id)}))}),Object(j.jsx)("div",{className:"tabs__line"})]}),Object(j.jsx)("p",{className:"tabs__text",children:a.content})]})},m=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],v=function(t){Object(i.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),b=0;b<n;b++)c[b]=arguments[b];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:m[0]},t.selectTabHandler=function(e){t.setState({selectedTab:e})},t}return Object(b.a)(a,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Selected tab is ".concat(t.title)}),Object(j.jsx)(h,{tabs:m,selectedTab:t,onTabSelected:this.selectTabHandler})]})}}]),a}(o.a.PureComponent);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d0825e39.chunk.js.map