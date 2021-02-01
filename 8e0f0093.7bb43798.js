(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return u})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return d}));var r=t(2),a=t(6),i=(t(0),t(75)),o={id:"futures",title:"Futures"},u={unversionedId:"futures",id:"futures",isDocsHomePage:!1,title:"Futures",description:"`solidity",source:"@site/docs/futures.md",slug:"/futures",permalink:"/docs/docs/futures",editUrl:"https://github.com/SynFutures/docs/edit/master/docs/docs/futures.md",version:"current"},s=[],c={rightToc:s};function d(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-solidity"}),"// SPDX-License-Identifier: GPL\npragma solidity ^0.7.0; \npragma experimental ABIEncoderV2; // to enable structure-type parameter\n\nimport \"./IAmm.sol\";\nimport \"../library/LibTypes.sol\";\nimport \"./IGlobalConfig.sol\";\n\ninterface IFutures {\n    // Storage interface\n\n    // return global config\n    function config() external view returns (IGlobalConfig);\n    // return Amm\n    function ammProxy() external view returns (IAmm);\n    // return margin token address\n    function margin() external view returns (address);\n    // return scaler for margin token decimal to 10^18\n    function scaler() external view returns (int);\n    // return insurance fund balance\n    function insuranceFundBalance() external view returns (int);\n    // return total open interests of one side\n    function openInterests() external view returns (uint);\n    // return account information of given trader\n    function getAccount(address trader) external view returns (Types.Account memory);\n    // check if an account exist in this futures contract\n    function isUser(address trader) external view returns (bool);\n    // return total number of accounts\n    function totalAccounts() external view returns (uint);\n    // social loss per contract given side\n    function socialLossPerContract(Types.Side side) external view returns (int);\n\n    // Vault interface\n\n    event Deposit(address indexed trader, int wadAmount, int balance);\n    event Withdraw(address indexed trader, int wadAmount, int balance);\n\n    // Account\n\n    event UpdateTraderAccount(address indexed trader, Types.Account account, uint price);\n    event UpdateAmmAccount(Types.Account account, uint price, uint openInterests);\n    event UpdateInsuranceFund(int newVal);\n    event Transfer(address indexed from, address indexed to, int wadAmount, int balanceFrom, int balanceTo);\n    event UpdateSocialLoss(Types.Side side, int newVal);\n\n    // calculate liquidation size to reduce trader's position to meet margin requirement given mark price\n    function calculateLiquidationSize(address trader, uint price) external view returns (Types.Side, uint);\n\n    // Futures interface\n\n    event Trade(address indexed trader, Types.Side side, uint price, uint size);\n    event Liquidate(address indexed liquidator, address indexed trader, uint price);\n    event NewAccount(address indexed trader, uint totalAccounts);\n\n    // initialization function to help futuresProxy's construction, called only once\n    function initialize(address _config, address _margin, uint _marginDecimals) external;\n    // set ammProxy, called only once\n    function setAmm(address _amm) external;\n\n    // deposit to insurance fund, margin amount in 10^18\n    function depositToInsuranceFund(uint wadAmount) external payable; // nonReentrant\n    // withdraw from insurance fund, margin amount in 10^18\n    function withdrawFromInsuranceFund(uint wadAmount) external; // onlyOwner nonReentrant\n\n    // deposit margin into trader's own account, margin amount in 10^18\n    function deposit(uint wadAmount) external returns (uint); // payable onlyTradingOrSettling nonReentrant\n    // withdraw margin from trader's own account, margin amount in 10^18\n    function withdraw(uint wadAmount) external; // onlyTradingOrSettling nonReentrant\n    // settle trader's own position into margin and withdraw entire balance\n    function settle() external; // onlySettled nonReentrant\n    // return detailed account information given a trader's address\n    function inspectAccount(address trader) external view returns (Types.AccountState memory state);\n\n    // return if  (account balance + unrealized pnl) >= initial margin with the specified price\n    function isIMSafeWithPrice(address trader, uint price) external view returns (bool);\n    // return if (account balance + unrealized pnl) >=  (price * position * MMR) with the specified price\n    function isMMSafeWithPrice(address trader, uint price) external view returns (bool);\n\n    // check if an account is safe after trade (IM safe if opened > 0, and MM safe otherwise), also check AMM is safe\n    function isSafeAfterTrade(\n        address trader, uint opened, Types.Param memory param, uint price\n    ) external view returns (bool);\n\n    function ammXY() external view returns (Types.XY memory xy);\n\n    // onlyAmm\n\n    // handle liquidation loss caused by liquidationByAmm\n    function handleLiquidationLossByAmm(address trader, Types.Side side) external;\n    // transfer cash between two accounts\n    function transferAccountBalance(address from, address to, uint amount) external;\n    // deposit margin for account\n    function depositFor(address trader, uint wadAmount) external payable returns (uint); // nonReentrant\n    // place trade for both trader's and AMM's account\n    function tradeFor(\n        address trader, bool buy, uint initBlockPrice, uint price, uint size, bool normal, Types.Param memory param\n    ) external returns (uint, uint);\n    // place trade for both trader's and AMM's account & transfer margin between trader and AMM for add/remove liquidity\n    function tradeWithMarginFor(\n        address trader, Types.Side side, uint price, uint size, bool toAmm\n    ) external returns (uint, uint, uint);\n    // reward trader\n    function rewardTrader(address trader) external;\n    // settle AMM's position into margin in AMM's account, no withdraw\n    function settleAmm(uint price) external;\n    // liquidate an account given mark price\n    function liquidateFor(\n        address liquidator, address trader, uint markPrice, Types.Param memory param\n    ) external returns (uint, int);\n}\n\n")))}d.isMDXComponent=!0},75:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return p}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=a.a.createContext({}),d=function(n){var e=a.a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},l=function(n){var e=d(n.components);return a.a.createElement(c.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},f=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),l=d(t),f=r,p=l["".concat(o,".").concat(f)]||l[f]||m[f]||i;return t?a.a.createElement(p,u(u({ref:e},c),{},{components:t})):a.a.createElement(p,u({ref:e},c))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=f;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u.mdxType="string"==typeof n?n:r,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);