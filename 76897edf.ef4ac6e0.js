(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{114:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/synfutures-v1-architecture-fa8e671d64bfff81edf699b4070bee26.png"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(6),a=(n(0),n(72)),u={},c={unversionedId:"synfutures-v1-design-to-impl",id:"synfutures-v1-design-to-impl",isDocsHomePage:!1,title:"synfutures-v1-design-to-impl",description:"SynFutures@v1",source:"@site/docs/synfutures-v1-design-to-impl.md",slug:"/synfutures-v1-design-to-impl",permalink:"/docs/synfutures-v1-design-to-impl",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/synfutures-v1-design-to-impl.md",version:"current"},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u671f\u8d27\u673a\u5236\u8bbe\u8ba1",id:"\u671f\u8d27\u673a\u5236\u8bbe\u8ba1",children:[]},{value:"\u671f\u8d27\u5408\u7ea6\u5b9e\u73b0",id:"\u671f\u8d27\u5408\u7ea6\u5b9e\u73b0",children:[]}],o={rightToc:p};function l(e){var t=e.components,u=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,u,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"synfuturesv1"},"SynFutures@v1"),Object(a.b)("p",null,"20201124"),Object(a.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(a.b)("p",null,"SynFutures@v1\u662f\u53c2\u4e0eUniswap\u7684\u73b0\u8d27\u4ea4\u6613\u6a21\u5f0f\u6784\u5efa\u7684\u5206\u5e03\u5f0f\u671f\u8d27\u4ea4\u6613\u5e73\u53f0\uff0c\u4e0eUniswap\u4e2d\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u73b0\u8d27\u4ea4\u6613\u5bf9\u7c7b\u4f3c\uff0cSynFutures@v1\u5141\u8bb8\u4efb\u4f55\u4eba\u521b\u5efa\u4efb\u610fbase/quote\u3001\u4efb\u610f\u5230\u671f\u65e5\u7684\u671f\u6743\u5e02\u573a\uff0c\u4f8b\u59823\u5929\u540e\u5230\u671f\u7684BTC/USD\u671f\u6743\u5e02\u573a\uff0c\u5f53\u6708\u7684ETH/USDC\u671f\u6743\u5e02\u573a\u4ee5\u53ca\u5f53\u5b63\u7684ETH/USDT\u671f\u6743\u5e02\u573a\u3002"),Object(a.b)("p",null,"\u53d7\u5236\u4e8e\u5f53\u524d\u533a\u5757\u94fe\u884c\u4e1aOracle\u7684\u53d1\u5c55\u73b0\u72b6\uff0c\u5e76\u4e0d\u662f\u6240\u6709\u7684base/quote\u90fd\u6709\u53ef\u9760\u7684\u4ef7\u683cOracle\uff0cSynFutures@v1\u76ee\u524d\u4ec5\u652f\u6301\u4f7f\u7528Uniswap\u548cChainlink\u4f5c\u4e3a\u4ef7\u683c\u6765\u6e90\uff0c\u5e76\u4e14\u8981\u6c42quote\u662fEthereum\u4e0a\u7684\u539f\u751f\u8d44\u4ea7\uff0cSynFutures@v1\u542f\u52a8\u65f6\u5141\u8bb8\u7684\u53ef\u4ee5\u4f5c\u4e3aquote\u7684\u8d44\u4ea7\u5305\u62ec\uff1aETH\u3001USDC\u3001USDT\u3001DAI\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5982\u679cbase\u4e5f\u662fEthereum\u4e0a\u7684\u539f\u751f\u8d44\u4ea7\uff0cSynFutures@v1\u9ed8\u8ba4\u4f7f\u7528Uniswap\u4f5c\u4e3a\u4ef7\u683cOracle\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679cbase\u4e0d\u662fEthereum\u4e0a\u7684\u539f\u751f\u8d44\u4ea7\uff0cSynFutures@v1\u9ed8\u8ba4\u4f7f\u7528Chainlink\u4f5c\u4e3a\u4ef7\u683cOracle\u3002")),Object(a.b)("p",null,"\u7136\u540e\u4f9d\u8d56Uniswap\u6216\u8005\u4f9d\u8d56Chainlink\uff0cSynFutures@v1\u90fd\u8981\u5904\u7406\u4e0e\u7279\u5b9aOracle\u673a\u5236\u76f8\u5173\u7684\u7279\u6b8a\u95ee\u9898\u3002Uniswap\u65b9\u9762\uff0c\u4f7f\u7528Uniswap\u7684\u73b0\u8d27\u4ea4\u6613\u5bf9\u7684Oracle\u5bb9\u6613\u906d\u53d7\u4ef7\u683c\u64cd\u63a7\uff0cSynFutures@v1\u4e2d\u5f15\u5165\u4e86\u989d\u5916\u7684\u63a7\u5236\u673a\u5236\u6765\u5c1d\u8bd5\u51cf\u7f13\u8fd9\u4e00\u5f71\u54cd\uff0c\u540e\u6587\u518d\u505a\u8be6\u7ec6\u4ecb\u7ecd\u3002Chainink\u65b9\u9762\uff0cChainlink\u4e0a\u7684BTC\u7b49\u8d44\u4ea7\u7684\u62a5\u4ef7\u662f\u4ee5USD\u4e3a\u5355\u4f4d\u7684\uff0c\u800cEthereum\u4e0a\u7684USDC\u3001USDT\u3001DAI\u7b49\u7f8e\u91d1\u7a33\u5b9a\u5e01\u76f8\u5bf9USD\u90fd\u4f1a\u6709\u5c0f\u8303\u56f4\u6ce2\u52a8\u3002\u4e3a\u4e86\u5e94\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0c\u5bf9\u4e8e\u4f9d\u8d56Chainlink\u7684\u671f\u8d27\u5408\u7ea6\uff0cSynFutures@v1\u5c06USDC\u4f5c\u4e3aUSD\u5728Ethereum\u4e0a\u951a\u5b9a\u8d44\u4ea7\uff0c\u4e5f\u5373\u4efb\u4f55SynFutures@v1\u4e2d\u4efb\u610f\u4f9d\u8d56Chainlink\u4f5c\u4e3a\u4ef7\u683c\u6765\u6e90\u7684\u671f\u8d27\u5408\u7ea6\u7684quote\u5747\u4e3aUSDC\u3002\u4f8b\u5982SynFutures@v1\u4e2d\u4f9d\u8d56Chainlink\u4f5c\u4e3aOracle\u7684BTC/USD\u671f\u8d27\u5408\u7ea6\u4e2d\u7684quote\u5b9e\u5219\u662fUSDC\uff0c\u4e5f\u5373\u5982\u679cChainlink\u7ed9\u51fa\u7684BTC/USD\u4ef7\u683c\u4e3a18000\uff0c\u5219SynFutures@v1\u7684BTC/USD\u671f\u8d27\u5408\u7ea6\u8ba4\u4e3aBTC\u7684\u5f53\u524d\u4ef7\u683c\u4e3a18000USDC\u3002"),Object(a.b)("p",null,"\u505a\u5e02\u5546\u673a\u5236\u65b9\u9762\uff0c\u4ee5Uniswap\u3001Curve\u4e3a\u4ee3\u8868\u7684\u6052\u5b9a\u51fd\u6570\u505a\u5e02\u5546\u8bc1\u5b9e\u4e86AMM\u7684\u53ef\u884c\u6027\uff0cmcdex\u3001perp\u7b49\u9879\u76ee\u4e5f\u5c06AMM\u673a\u5236\u5f15\u5165\u4e86\u94fe\u4e0a\u6c38\u7eed\u5408\u7ea6\u7684\u6784\u5efa\uff0cSynFutures@v1\u5145\u5206\u501f\u9274\u4e86DeFi\u9886\u57df\u73b0\u8d27\u3001\u884d\u751f\u54c1\u5e02\u573a\u4e0a\u7684AMM\u673a\u5236\u8bbe\u8ba1\uff0c\u5c24\u5176\u662fmcdex\u4e2d\u7528\u4e8e\u6c38\u7eed\u5408\u7ea6\u7684\u6052\u5b9a\u4e58\u79ef\u505a\u5e02\u5546\uff0c\u901a\u8fc7\u5c06\u8be5\u505a\u5e02\u5546\u6a21\u578b\u9002\u914d\u5230\u671f\u8d27\u5408\u7ea6\u7684\u4e1a\u52a1\u573a\u666f\u4e4b\u4e2d\uff0cSynFutures@v1\u5728\u505a\u5e02\u5546\u673a\u5236\u65b9\u9762\u91c7\u7528\u4e86\u6211\u4eec\u79f0\u4e4b\u4e3a\u201csAMM\u201d\u7684\u6052\u5b9a\u4e58\u79ef\u81ea\u52a8\u505a\u5e02\u5546\u6a21\u578b\uff0c\u6765\u4e3a\u4efb\u610f\u671f\u8d27\u5408\u7ea6\u63d0\u4f9b\u5145\u5206\u7684\u6d41\u52a8\u6027\u3002\u4e0eUniswap\u7c7b\u4f3c\uff0c\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\uff08Liquidity Provider\uff0cLP\uff09\u53ef\u4ee5\u521b\u5efa\u4efb\u610f\u7684\u671f\u8d27\u5408\u7ea6\uff0c\u5e76\u4e14\u53ef\u4ee5\u4e3a\u671f\u8d27\u5408\u7ea6\u6ce8\u5165\u6d41\u52a8\u6027\u3002Uniswap\u7684\u6052\u5b9a\u4e58\u79ef\u6a21\u578b\u4e2d\u8981\u6c42LP\u5411\u8d44\u91d1\u6c60\u4e2d\u6ce8\u5165\u4e24\u79cd\u8d44\u4ea7\uff0c\u800c\u5728\u671f\u8d27\u5408\u7ea6\u7684\u89c6\u89d2\u4e0b\uff0c\u8fd9\u662f\u4e0d\u53ef\u884c\u7684\uff0c\u56e0\u4e3aLP\u624b\u4e2d\u901a\u5e38\u5e76\u4e0d\u5b58\u5728base\u7684LONG\u6216\u8005SHORT\u7684\u4ed3\u4f4d\u7684\u8d44\u4ea7\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0cSynFutures@v1\u501f\u9274\u4e86mcdex\u7684\u673a\u5236\u8bbe\u8ba1\uff0cLP\u5411\u5408\u7ea6\u4e2d\u6ce8\u5165\u7684\u6d41\u52a8\u6027\u4e2d\u768450%\u7528\u4e8e\u5408\u6210\u4ed3\u4f4d\u3002\u8fd9\u4e5f\u662fsAMM\u540d\u5b57\u7684\u7531\u6765\uff0c\u5176\u4e2d\u201cs\u201d\u8868\u793a\u201csynthetic\u201d\u3002"),Object(a.b)("p",null,"\u7528\u6237\uff08trader\u548cLP\uff09\u5728\u5176\u53c2\u4e0e\u7684\u671f\u8d27\u5408\u7ea6\u5f53\u4e2d\u90fd\u6709\u76f8\u5e94\u7684\u8d26\u6237\uff08",Object(a.b)("inlineCode",{parentName:"p"},"Account"),"\uff09\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"Account"),"\u4e2d\u8bb0\u5f55\u5f53\u524d\u7528\u6237\u7684\u4ed3\u4f4d\uff08position\uff09\u3001\u8d44\u91d1\u4f59\u989d\uff08balance\uff09\u7b49\u4fe1\u606f\uff08Amm\u4e5f\u6709\u81ea\u5df1\u7684",Object(a.b)("inlineCode",{parentName:"p"},"Account"),"\uff09\u3002\u7528\u6237\u53ef\u4ee5\u5411\u81ea\u5df1\u7684\u8d26\u6237\u8fd9\u79cd\u6ce8\u5165\u8d44\u91d1\uff08",Object(a.b)("inlineCode",{parentName:"p"},"deposit"),"\uff09\u3001\u53d6\u56de\u8d44\u91d1\uff08",Object(a.b)("inlineCode",{parentName:"p"},"withdraw"),"\uff09\u3002\u4e3a\u8d26\u6237\u6ce8\u5165\u8d44\u91d1\u4e4b\u540e\uff0ctrader\u53ef\u4ee5\u901a\u8fc7\u4e0eAmm\u4ea4\u6613\uff08",Object(a.b)("inlineCode",{parentName:"p"},"trade"),"\uff09\u7684\u65b9\u5f0f\u505a\u591a\uff08buy/long\uff09\u6216\u8005\u505a\u7a7a\uff08sell/short\uff09\uff0c\u800cLP\u5219\u53ef\u4ee5\u5229\u7528\u6ce8\u5165\u7684\u8d44\u91d1\u901a\u8fc7\u6dfb\u52a0\u6d41\u52a8\u6027\uff08",Object(a.b)("inlineCode",{parentName:"p"},"addLiquidity"),"\uff09\u6210\u4e3a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\uff08Liquidator Provider\uff09\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u79fb\u9664\u6d41\u52a8\u6027\uff08",Object(a.b)("inlineCode",{parentName:"p"},"removeLiquidity"),"\uff09\uff0c\u6dfb\u52a0\u6d41\u52a8\u6027\u65f6LP\u4f1a\u83b7\u5f97\u76f8\u5e94\u7684LP Token\uff0c\u79fb\u9664\u6d41\u52a8\u6027\u65f6\u4f1a\u71c3\u70e7\u6389\u76f8\u5e94\u7684LP Token\u3002\u6839\u636e\u4ef7\u683c\u6ce2\u52a8\uff0c\u5982\u679c\u4e00\u4e2a\u8d26\u6237\u4e2d\u7684\u8d44\u91d1\u4f59\u989d\u4e0d\u8db3\u4ee5\u4fdd\u8bc1\u5176\u5f53\u524d\u4ed3\u4f4d\u7684\u5b89\u5168\u6027\uff0c\u4efb\u4f55\u4eba\uff08\u9664\u4e86\u8be5\u8d26\u6237\u81ea\u5df1\uff09\u90fd\u53ef\u4ee5\u53d1\u8d77\u5bf9\u8be5\u8d26\u6237\u7684\u6e05\u7b97\uff08",Object(a.b)("inlineCode",{parentName:"p"},"liquidate"),"\uff09\u3002\u6e05\u7b97\u901a\u5e38\u662f\u6307\u6e05\u7b97\u53d1\u8d77\u65b9\u7528\u81ea\u5df1\u7684\u8d26\u6237\u63a5\u7ba1\u76ee\u6807\u8d26\u6237\u7684\u4ed3\u4f4d\uff0c\u8fd9\u5bf9\u4e8e\u6e05\u7b97\u53d1\u8d77\u4eba\u7684\u8d26\u6237\u72b6\u6001\u6709\u8f83\u9ad8\u7684\u8981\u6c42\u3002\u4e3a\u4e86\u964d\u4f4e\u8fd9\u4e00\u95e8\u69db\uff0cSynFutures@v1\u5f15\u5165\u4e86\u989d\u5916\u7684\u6e05\u7b97\u65b9\u5f0f\uff1a\u501f\u52a9Amm\u6e05\u7b97\u76ee\u6807\u8d26\u6237\uff08",Object(a.b)("inlineCode",{parentName:"p"},"liquidateByAmm"),"\uff09\uff0c\u4e5f\u5373\u6e05\u7b97\u53d1\u8d77\u4eba\u53ef\u4ee5\u5229\u7528Amm\u7684\u8d26\u6237\u6765\u6e05\u7b97\u6307\u5b9a\u8d26\u6237\uff0c\u5e76\u83b7\u5f97\u76f8\u5e94\u5956\u52b1\u3002"),Object(a.b)("p",null,"\u5145\u5206\u53c2\u8003\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\u4ee5\u53ca\u4f20\u7edf\u91d1\u878d\u5e02\u573a\u7684\u671f\u8d27\u4ea7\u54c1\u903b\u8f91\uff0cSynFutures@v1\u5c06\u4e00\u4e2a\u671f\u8d27\u5408\u7ea6\u7684\u751f\u547d\u5468\u671f\u5206\u4e3a\uff1aNORMAL\u3001SETTLING\u4ee5\u53caSETTLED\u4e09\u4e2a\u9636\u6bb5\uff0c\u5e76\u4e14\u5f3a\u5236\u671f\u8d27\u5408\u7ea6\u5728\u6210\u719f\u4e4b\u524dSETTLING\u4e00\u5c0f\u65f6\u7684\u65f6\u95f4\u3002\u521a\u521b\u5efa\u5e76\u521d\u59cb\u5316\u5b8c\u6210\u7684\u671f\u8d27\u5408\u7ea6\u8fdb\u5165NORMAL\u72b6\u6001\uff0c\u5728\u9002\u5f53\u65f6\u95f4\u4f1a\u8fdb\u5165SETTLING\u72b6\u6001\uff0c\u7ecf\u8fc7\u81f3\u5c11\u4e00\u4e2a\u5c0f\u65f6\u7684SETTLING\u4e4b\u540e\uff0c\u5408\u7ea6\u72b6\u6001\u53d8\u4e3aSETTLED\u72b6\u6001\u3002\u503c\u5f97\u63d0\u53ca\u7684\u662f\uff0c\u5f3a\u5236\u671f\u8d27\u5408\u7ea6SETTLING\u4e00\u5c0f\u65f6\uff0c\u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5408\u7ea6\u771f\u6b63\u7684\u5230\u671f\u65f6\u95f4\u8981\u665a\u4e8e\u5408\u7ea6\u521b\u5efa\u65f6\u6307\u5b9a\u7684\u5230\u671f\u65f6\u95f4\u3002\u8fd9\u662f\u7531\u4e8e\u667a\u80fd\u5408\u7ea6\u672c\u8eab\u7684\u72b6\u6001\u66f4\u65b0\u53ea\u80fd\u901a\u8fc7\u4ea4\u6613\u89e6\u53d1\u5bfc\u81f4\u7684\uff0c\u4e5f\u56e0\u6b64\u6709\u53ef\u80fd\u4f1a\u51fa\u73b0\u8fd9\u79cd\u60c5\u51b5\uff1a\u5728\u6307\u5b9a\u7684\u5230\u671f\u65f6\u95f4\u7684\u524d\u4e00\u5c0f\u65f6\u5de6\u53f3\u6ca1\u6709\u53d1\u751f\u4efb\u4f55\u4ea4\u6613\uff0c\u4e5f\u5c31\u5bfc\u81f4\u5728\u671f\u8d27\u5408\u7ea6\u65e0\u6cd5\u4e25\u683c\u6267\u884c\u4e00\u5c0f\u65f6\u7684SETTLING\u3002"),Object(a.b)("p",null,"\u4e3a\u4e86\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\u5e76\u4e14\u5f3a\u5236\u5408\u7ea6\u5728\u5230\u671f\u4e4b\u524dSETTLING\u4e00\u5c0f\u65f6\uff0cSynFutures@v1\u91c7\u53d6\u7684\u7b56\u7565\u662f\uff1aNORMAL\u72b6\u6001\u4e0b\u5904\u7406\u4ea4\u6613\u65f6\uff0c\u4f1a\u9996\u5148\u6839\u636e\u6307\u5b9a\u7684\u5230\u671f\u65f6\u95f4\u5224\u65ad\u6b64\u65f6\u5408\u7ea6\u72b6\u6001\u662f\u5426\u5e94\u8be5\u4e3aSETTLING\uff08\u751a\u81f3SETTLED\uff09\uff0c\u5982\u679c\u662f\u5219\u5c06\u5408\u7ea6\u72b6\u6001\u6539\u4e3aSETTLING\uff0c\u5e76\u4e14\u6839\u636e\u6b64\u65f6\u7684\u533a\u5757\u65f6\u95f4\u91cd\u65b0\u8bbe\u7f6e\u5230\u671f\u65f6\u95f4\u4e3a\u4e00\u5c0f\u65f6\u4e4b\u540e\u3002\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u4fdd\u8bc1\u6240\u6709\u5408\u7ea6\u5728\u5230\u671f\u4e4b\u524d\u90fd\u4f1a\u7ecf\u5386\u81f3\u5c11\u5c0f\u65f6\u7684SETTLING\uff08\u7531\u4e8e\u540c\u6837\u7684\u539f\u56e0\uff0c\u671f\u8d27\u5408\u7ea6\u7684SETTLING\u65f6\u95f4\u53ef\u80fd\u5927\u4e8e\u4e00\u5c0f\u65f6\uff09\u3002\u53ef\u4ee5\u9884\u671f\u7684\u662f\u4ea4\u6613\u6d3b\u8dc3\u7684\u671f\u8d27\u5408\u7ea6\uff0c\u771f\u6b63\u7684\u5230\u671f\u65f6\u95f4\u4e0e\u5408\u7ea6\u521b\u5efa\u65f6\u7684\u6307\u5b9a\u7684\u5230\u671f\u65f6\u95f4\u57fa\u672c\u4e00\u81f4\u3002\u53e6\u5916\uff0c\u4e3a\u4e86\u9f13\u52b1\u7528\u6237\u901a\u8fc7\u53d1\u8d77\u4ea4\u6613\u6765\u66f4\u65b0\uff08update\uff09\u671f\u8d27\u5408\u7ea6\u7684\u72b6\u6001\uff0cSynFutures@v1\u5f15\u5165\u4e86\u989d\u5916\u7684\u5956\u52b1\u673a\u5236\u3002"),Object(a.b)("p",null,"NORMAL\u548cSETTLING\u72b6\u6001\u4e0b\uff0cmarkPrice\u7684\u8ba1\u7b97\u65b9\u5f0f\u4e0d\u540c\uff1aSETTLILNG\u72b6\u6001\u4f1a\u91c7\u7528\u65f6\u95f4\u52a0\u6743\u7684\u65b9\u5f0f\u8ba1\u7b97mark price\uff0c\u7a0d\u540e\u518d\u8be6\u7ec6\u4ecb\u7ecd\u3002\u4e0d\u540c\u7684\u5408\u7ea6\u72b6\u6001\u4e0b\uff0ctrader\u548cLP\u53ef\u4ee5\u6267\u884c\u7684\u64cd\u4f5c\u4ee5\u53ca\u9650\u5236\u6709\u6240\u4e0d\u540c\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"NORMAL\u72b6\u6001\u4e0b\uff1atrader\u53ef\u4ee5",Object(a.b)("inlineCode",{parentName:"p"},"deposit"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"withdraw"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"update"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"trade"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"liquidate"),"\u4ee5\u53ca",Object(a.b)("inlineCode",{parentName:"p"},"liquidateByAmm"),"\uff0c\u800cLP\u53ef\u4ee5",Object(a.b)("inlineCode",{parentName:"p"},"deposit"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"withdraw"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"addLiquidity"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"removeLiquidity"),"\u64cd\u4f5c\uff08\u5f53\u7136LP\u4e5f\u53ef\u4ee5\u4f5c\u4e3atrader\u7684\u89d2\u8272",Object(a.b)("inlineCode",{parentName:"p"},"update"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"trade"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"liquidate"),"\u3001\u4ee5\u53ca",Object(a.b)("inlineCode",{parentName:"p"},"liquidateByAmm"),"\uff09\u3002")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"SETTLLING\u72b6\u6001\u4e0b\uff1atrader\u540c\u6837\u53ef\u4ee5\u6267\u884c\u5728NORMAL\u72b6\u6001\u4e0b\u7684\u5404\u79cd\u64cd\u4f5c\uff0c\u4f46\u6709\u4e86\u989d\u5916\u7684\u7ea6\u675f\u6761\u4ef6\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"trade"),"\u65f6\u53ea\u80fd\u5173\u95ed\u81ea\u5df1\u7684\u5df2\u6709\u4ed3\u4f4d\uff0c\u4e0d\u80fd\u589e\u52a0\u81ea\u5df1\u7684\u4ed3\u4f4d\uff1bLP\u65b9\u9762\u5219\u4e0d\u5141\u8bb8",Object(a.b)("inlineCode",{parentName:"p"},"addLiquidity"),"\uff0c\u53ea\u80fd",Object(a.b)("inlineCode",{parentName:"p"},"removeLiquidity"),"\uff0c\u5177\u4f53\u539f\u56e0\u968f\u540e\u518d\u8be6\u7ec6\u4ecb\u7ecd\u3002")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"SETTLED\u72b6\u6001\u4e0b\uff1atrader\u53ea\u80fd\u6839\u636e\u7ed3\u7b97\u4ef7\u683c\u5173\u95ed\u81ea\u5df1\u7684\u4ed3\u4f4d\uff08",Object(a.b)("inlineCode",{parentName:"p"},"settle"),"\uff09\uff1bLP\u65b9\u9762\u5219\u9700\u8981\u901a\u8fc7LP Token\u53d6\u56de\u8d44\u91d1\u6c60\u4e2d\u81ea\u8eab\u7684\u8d44\u4ea7\uff0c\u7136\u540e\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"p"},"settle"),"\u6765\u5173\u95ed\u81ea\u5df1\u7684\u4ed3\u4f4d\u3002\u503c\u5f97\u63d0\u53ca\u7684\u662f\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"settle"),"\u65f6\u7528\u6237\u7684\u8d44\u91d1\u4f1a\u81ea\u52a8\u4ece",Object(a.b)("inlineCode",{parentName:"p"},"Account"),"\u4e2d\u53d6\u56de\uff0c\u65e0\u9700\u989d\u5916\u8c03\u7528",Object(a.b)("inlineCode",{parentName:"p"},"withdraw"),"\u65b9\u6cd5\u6765\u53d6\u56de\u8d44\u91d1\u3002"))),Object(a.b)("p",null,"\u53e6\u5916\u4e3a\u4e86\u5bf9\u5e94\u5f53\u4e0b\u4e0d\u53ef\u9884\u89c1\u7684\u94fe\u4e0a\u5f02\u5e38\u60c5\u51b5\uff08Oracle\u5931\u6548\u7b49\u95ee\u9898\uff09\uff0cSynFutures@v1\u4e2d\u8fd8\u989d\u5916\u5f15\u5165\u4e86\u540d\u4e3aEMERGENCY\u7684\u72b6\u6001\uff0cEMERGENCY\u72b6\u6001\u4e0b\uff0c\u666e\u901a\u7528\u6237\u548cLP\u5747\u4e0d\u5f97\u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\uff0c\u5f15\u5bfc\u671f\u8d27\u5408\u7ea6\u91cd\u65b0\u8fdb\u884cSETTLED\u7684\u72b6\u6001\uff0c\u5e76\u540c\u65f6\u8bbe\u7f6e\u5408\u7406\u7684\u7ed3\u7b97\u4ef7\u683c\uff08Settlement Price\uff09\u3002"),Object(a.b)("h2",{id:"\u671f\u8d27\u673a\u5236\u8bbe\u8ba1"},"\u671f\u8d27\u673a\u5236\u8bbe\u8ba1"),Object(a.b)("h2",{id:"\u671f\u8d27\u5408\u7ea6\u5b9e\u73b0"},"\u671f\u8d27\u5408\u7ea6\u5b9e\u73b0"),Object(a.b)("p",null,Object(a.b)("img",{src:n(114).default})))}l.isMDXComponent=!0},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),l=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=l(n),s=r,m=b["".concat(u,".").concat(s)]||b[s]||d[s]||a;return n?i.a.createElement(m,c(c({ref:t},o),{},{components:n})):i.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var o=2;o<a;o++)u[o]=n[o];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);