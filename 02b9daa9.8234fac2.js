(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{130:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/trade8-05b780d5fddcb44e561ee0a574cf1cfc.png"},131:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/trade9-d036e74e140acc8c5156936d53ab668c.png"},132:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/trade10-44c418c8146ec4b7acc0fc6e6a98575c.png"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(87)),i={id:"tutorial_trading",title:"Trading"},c={unversionedId:"tutorial_trading",id:"tutorial_trading",isDocsHomePage:!1,title:"Trading",description:'On "Trade" page, select the Base, Quote and Maturity, and you will have the details of contract.',source:"@site/docs\\tutorial_trading.md",slug:"/tutorial_trading",permalink:"/docs/docs/tutorial_trading",editUrl:"https://github.com/SynFutures/docs/edit/master/docs/docs/tutorial_trading.md",version:"current",sidebar:"docs",previous:{title:"Create new trading pairs",permalink:"/docs/docs/tutorial_new_pair"},next:{title:"Settlement",permalink:"/docs/docs/tutorial_settlement"}},u=[],s={rightToc:u};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'On "Trade" page, select the Base, Quote and Maturity, and you will have the details of contract.\nBefore trading, we need to deposit some margin token, in our example, DAI to the pair using the "Margin Operations" component.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(130).default})),Object(o.b)("p",null,"After deposit is done, we can go LONG or SHORT within allowed amount range."),Object(o.b)("p",null,"There are several limits on the trading amount for each trade for security considerations, which can be found in our FAQ (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://synfutures.github.io/docs/docs/parameters"}),"https://synfutures.github.io/docs/docs/parameters"),'). Input the trade amount and click "BUY/SELL" button. After the transaction is confirmed, we can see the related changes in the "Position Detail" component.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(131).default})),Object(o.b)("p",null,'To maintain these positions, we need to ensure the margin balance is higher than maintenance margin to avoid being liquidated. You could deposit and withdraw margin on "trade" page or "account" page.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(132).default})))}l.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);