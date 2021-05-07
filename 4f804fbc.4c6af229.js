(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/role-833081bed1a2891fe5ae3bf10736ac17.png"},67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),s=(a(0),a(86)),i={id:"general",title:"General",slug:"/"},o={unversionedId:"general",id:"general",isDocsHomePage:!1,title:"General",description:"1. What is SynFutures?",source:"@site/docs\\general.md",slug:"/",permalink:"/docs/docs/",editUrl:"https://github.com/SynFutures/docs/edit/master/docs/docs/general.md",version:"current",sidebar:"docs",next:{title:"For Traders",permalink:"/docs/docs/traders"}},c=[{value:"1. What is SynFutures?",id:"1-what-is-synfutures",children:[]},{value:"2. Who are the ecosystem players in SynFutures?",id:"2-who-are-the-ecosystem-players-in-synfutures",children:[]},{value:"3. What are the instruments traded on SynFutures?",id:"3-what-are-the-instruments-traded-on-synfutures",children:[]},{value:"4. What Quote assets does SynFutures currently support?",id:"4-what-quote-assets-does-synfutures-currently-support",children:[]},{value:"5. What is the life cycle of a trade?",id:"5-what-is-the-life-cycle-of-a-trade",children:[]},{value:"6. How are prices determined?",id:"6-how-are-prices-determined",children:[]},{value:"7. Has the smart contracts been audited?",id:"7-has-the-smart-contracts-been-audited",children:[]}],l={rightToc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"1-what-is-synfutures"},"1. What is SynFutures?"),Object(s.b)("p",null,"SynFutures is a decentralized synthetic asset derivatives trading platform. In the first version, it launches a Ethereum-based futures market for a variety of assets, including Ethereum native, cross-chain, and off-chain real world assets to be synthesized and freely traded against ERC 20 tokens as margin."),Object(s.b)("h3",{id:"2-who-are-the-ecosystem-players-in-synfutures"},"2. Who are the ecosystem players in SynFutures?"),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(102).default})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Trader"),": trades futures products on the platform."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Liquidity Provider (LP)"),": creates trading pairs, supplies liquidity to the system, always ready to make prices based on model and earn majority of the trading fees."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Liquidator"),": liquidates traders\u2019 positions when margin is insufficient. SynFutures provides two ways for liquidators:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Initiate a trade with liquidator\u2019s own account funds and take over the trader\u2019s position as well as remaining margin."),Object(s.b)("li",{parentName:"ul"},"Initiate a transaction for trader to close its position with Auto Liquidator (in v1, the AMM itself) and earn system rewards.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"System Maintainer"),": helps maintain the operations of the system including system\u2019s trade state update and some other required services such as bug fix, code contribution etc. as the system develops in a later stage, and earn rewards."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Insurance Fund"),": part of trader\u2019s remaining margin when liquidation happens would go to insurance fund and be paid out to liquidator and AMM when liquidation results in balance insolvency."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"System Reserve Fund"),": part of the trader\u2019s trading fees would go to system reserve fund to pay out rewards to liquidators who initiate liquidation with AMM and system maintainers."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Oracle"),": supplies pricing data to the system."),Object(s.b)("h3",{id:"3-what-are-the-instruments-traded-on-synfutures"},"3. What are the instruments traded on SynFutures?"),Object(s.b)("p",null,"In its first version, SynFutures supports trading of linear non-deliverable futures contracts, each of which is uniquely defined by trading pairs and maturity. Trading pair can be further split into Base and Quote assets. As an example, for ETH/USDC, ETH is the Base asset and USDC is the Quote asset."),Object(s.b)("p",null,"The Quote asset should be an ERC 20 token used as the margin for the futures contract and the BASE asset has no restriction as long as such Oracle is available."),Object(s.b)("h3",{id:"4-what-quote-assets-does-synfutures-currently-support"},"4. What Quote assets does SynFutures currently support?"),Object(s.b)("p",null,"Though in design and theory, SynFutures could support any ERC 20 token as Quote asset, for liquidity to be more concentrated, the assets that can be used as Quote when SynFutures@v1 launches include: ETH, USDC, USDT, and DAI."),Object(s.b)("h3",{id:"5-what-is-the-life-cycle-of-a-trade"},"5. What is the life cycle of a trade?"),Object(s.b)("p",null,"A futures trade typically goes through ",Object(s.b)("strong",{parentName:"p"},"three stages"),":"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"TRADING: A futures contract enters the TRADING state when newly created and initialized until the SETTLING state. During this state system players could perform all available functions.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"SETTLING: This state is to prepare for the smooth settlement of contracts. Users are only allowed to reduce but not open or increase position. This implies that a trader can only close outstanding position and LP can remove but not add liquidity. Please refer to contract specs for specific timing for SETTLING period.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"SETTLED: The state the trade enters after futures expiry, where only settlement of the trade is allowed. Trader can only close its own position and settle funds according to the settlement price; and LP can only withdraw assets provided to the liquidity pool with the LP Token."))),Object(s.b)("p",null,"And an additional \u201cEMERGENCY\u201d state would be entered into if unforeseen abnormal conditions on chain (such as Oracle failures, etc.) happens. Normal users and LPs are not allowed to perform any operations, and the system administrator will guide the futures contract into the SETTLED state with a fair and reasonable settlement price."),Object(s.b)("h3",{id:"6-how-are-prices-determined"},"6. How are prices determined?"),Object(s.b)("p",null,"There are three types of price in SynFutures contracts."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"Fair price"),": SynFutures market trading price as implied by AMM inventories. The futures trader execute for a transaction which follows a Constant Product Formula model ",Object(s.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",{parentName:"mrow"},"x"),Object(s.b)("mo",{parentName:"mrow"},"\u2217"),Object(s.b)("mi",{parentName:"mrow"},"y"),Object(s.b)("mo",{parentName:"mrow"},"="),Object(s.b)("mi",{parentName:"mrow"},"k")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x*y=k")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.46528em",verticalAlign:"0em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2217"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"y"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"))))),"."),Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"Index price"),": Spot price of the trading pairs as supplied by Oracles. Currently we use Uniswap and Chainlink for index price."),Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"Mark price"),": Price to determine whether a futures position should be liquidated and the settlement price at expiry. At TRADING state, it is defined as spot IndexPrice + MarkBasis, where the MarkBasis keeps the relationship between futures price and spot index stable by applying Exponential Moving Average (EMA) on past basis. While In the last hour of a futures contract, basis is assumed to be 0 and the MarkPrice will be the Time-Weighted Average Price (TWAP) of Spot Index to facilitate the price convergence to the spot and the eventual settlement.")),Object(s.b)("p",null,"For detailed calculation of the pricings, please check ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/docs/advanced"}),"advanced topics"),"."),Object(s.b)("h3",{id:"7-has-the-smart-contracts-been-audited"},"7. Has the smart contracts been audited?"),Object(s.b)("p",null,"Yes, SynFutures@v1 was audited by PeckShield. ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://synfutures.com/PeckShield-Audit-SynFuturesV1-v1.0.pdf"}),"Check here for the full report"),"."))}u.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return a?r.a.createElement(m,o(o({ref:t},l),{},{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);