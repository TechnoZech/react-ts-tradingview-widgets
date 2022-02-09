/*! For license information please see common.d63b1ba0.js.LICENSE.txt */
(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[592],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return p}});var i=o(7378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)o=l[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)o=l[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),g=s(o),p=r,m=g["".concat(d,".").concat(p)]||g[p]||h[p]||l;return o?i.createElement(m,a(a({ref:t},c),{},{components:o})):i.createElement(m,a({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=g;var n={};for(var d in t)hasOwnProperty.call(t,d)&&(n[d]=t[d]);n.originalType=e,n.mdxType="string"==typeof e?e:r,a[1]=n;for(var s=2;s<l;s++)a[s]=o[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}g.displayName="MDXCreateElement"},8829:function(e,t,o){var i=o(7378);function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=r(i),a=function(){return(a=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function n(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(o[i[r]]=e[i[r]])}return o}var d=function(e){for(var t="",o="abcdef0123456789",i=o.length,r=0;r<e;r++)t+=o.charAt(Math.floor(Math.random()*i));return t},s=function(e){var t=e.href,o=e.spanText,i=e.text,r=void 0===i?"By TradingView":i,a=e.copyrightStyles,n={fontSize:"13px",lineHeight:"32px",textAlign:"center",verticalAlign:"center",fontFamily:"Trebuchet MS, Arial, sans-serif",color:"#9db2bd"},d={textDecoration:"none",color:"#9db2bd"},s={color:"#2962FF"};return l.default.createElement("div",{style:Object.assign({},n,null==a?void 0:a.parent)},l.default.createElement("a",{style:Object.assign({},d,null==a?void 0:a.link),href:t,target:"_blank"},l.default.createElement("span",{style:Object.assign({},s,null==a?void 0:a.span)},o," ")),r)},c=function(e){var t=e.scriptHTML,o=e.scriptSRC,r=e.containerId,a=e.type,n=i.createRef();return i.useEffect((function(){var e;if(n.current){var i=document.createElement("script");i.src=o,i.async=!0,i.type="text/javascript","Widget"===a||"MediumWidget"===a?void 0!==typeof TradingView&&(i.onload=function(){i.innerHTML=JSON.stringify("Widget"===a?new TradingView.widget(t):"MediumWidget"===a?new TradingView.MediumWidget(t):void 0)}):i.innerHTML=JSON.stringify(t),n.current.appendChild(i),e=n.current}return function(){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}}),[n,t]),l.default.createElement("div",{ref:n,id:r})},h=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],g=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],p=[{name:"Indices",originalName:"Indices",symbols:[{name:"FOREXCOM:SPXUSD",displayName:"S&P 500"},{name:"FOREXCOM:NSXUSD",displayName:"Nasdaq 100"},{name:"FOREXCOM:DJI",displayName:"Dow 30"},{name:"INDEX:NKY",displayName:"Nikkei 225"},{name:"INDEX:DEU30",displayName:"DAX Index"},{name:"FOREXCOM:UKXGBP",displayName:"UK 100"}]},{name:"Commodities",originalName:"Commodities",symbols:[{name:"CME_MINI:ES1!",displayName:"S&P 500"},{name:"CME:6E1!",displayName:"Euro"},{name:"COMEX:GC1!",displayName:"Gold"},{name:"NYMEX:CL1!",displayName:"Crude Oil"},{name:"NYMEX:NG1!",displayName:"Natural Gas"},{name:"CBOT:ZC1!",displayName:"Corn"}]},{name:"Bonds",originalName:"Bonds",symbols:[{name:"CME:GE1!",displayName:"Eurodollar"},{name:"CBOT:ZB1!",displayName:"T-Bond"},{name:"CBOT:UB1!",displayName:"Ultra T-Bond"},{name:"EUREX:FGBL1!",displayName:"Euro Bund"},{name:"EUREX:FBTP1!",displayName:"Euro BTP"},{name:"EUREX:FGBM1!",displayName:"Euro BOBL"}]},{name:"Forex",originalName:"Forex",symbols:[{name:"FX:EURUSD"},{name:"FX:GBPUSD"},{name:"FX:USDJPY"},{name:"FX:USDCHF"},{name:"FX:AUDUSD"},{name:"FX:USDCAD"}]}],m=[{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"},{s:"FOREXCOM:DJI",d:"Dow 30"},{s:"INDEX:NKY",d:"Nikkei 225"},{s:"INDEX:DEU30",d:"DAX Index"},{s:"FOREXCOM:UKXGBP",d:"UK 100"}],originalTitle:"Indices"},{title:"Commodities",symbols:[{s:"CME_MINI:ES1!",d:"S&P 500"},{s:"CME:6E1!",d:"Euro"},{s:"COMEX:GC1!",d:"Gold"},{s:"NYMEX:CL1!",d:"Crude Oil"},{s:"NYMEX:NG1!",d:"Natural Gas"},{s:"CBOT:ZC1!",d:"Corn"}],originalTitle:"Commodities"},{title:"Bonds",symbols:[{s:"CME:GE1!",d:"Eurodollar"},{s:"CBOT:ZB1!",d:"T-Bond"},{s:"CBOT:UB1!",d:"Ultra T-Bond"},{s:"EUREX:FGBL1!",d:"Euro Bund"},{s:"EUREX:FBTP1!",d:"Euro BTP"},{s:"EUREX:FGBM1!",d:"Euro BOBL"}],originalTitle:"Bonds"},{title:"Forex",symbols:[{s:"FX:EURUSD"},{s:"FX:GBPUSD"},{s:"FX:USDJPY"},{s:"FX:USDCHF"},{s:"FX:AUDUSD"},{s:"FX:USDCAD"}],originalTitle:"Forex"}],v=[["Apple","AAPL"],["Google","GOOGL"],["Microsoft","MSFT"]],w=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}],y=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}];t.rJ=function(e){var t=e.width,o=void 0===t?980:t,i=e.height,r=void 0===i?610:i,h=e.autosize,g=void 0!==h&&h,p=e.symbol,m=void 0===p?"NASDAQ:AAPL":p,v=e.interval,w=void 0===v?"1":v,y=e.range,u=void 0===y?void 0:y,b=e.timezone,C=void 0===b?"UTC":b,f=e.theme,T=void 0===f?"light":f,S=e.style,E=void 0===S?"1":S,F=e.locale,U=void 0===F?"en":F,L=e.toolbar_bg,_=void 0===L?"#f1f3f6":L,M=e.enable_publishing,O=void 0!==M&&M,D=e.hide_top_toolbar,x=void 0!==D&&D,N=e.hide_legend,k=void 0!==N&&N,B=e.withdateranges,R=void 0===B||B,X=e.hide_side_toolbar,P=void 0!==X&&X,A=e.allow_symbol_change,j=void 0===A||A,G=e.save_image,z=void 0===G||G,H=e.details,I=void 0!==H&&H,Y=e.hotlist,J=void 0!==Y&&Y,K=e.calendar,Q=void 0!==K&&K,W=e.show_popup_button,Z=void 0!==W&&W,q=e.popup_width,V=void 0===q?"600":q,$=e.popup_height,ee=void 0===$?"400":$,te=e.watchlist,oe=void 0===te?void 0:te,ie=e.studies,re=void 0===ie?void 0:ie,le=e.container_id,ae=void 0===le?"tradingview_"+d(5):le,ne=e.copyrightStyles,de=n(e,["width","height","autosize","symbol","interval","range","timezone","theme","style","locale","toolbar_bg","enable_publishing","hide_top_toolbar","hide_legend","withdateranges","hide_side_toolbar","allow_symbol_change","save_image","details","hotlist","calendar","show_popup_button","popup_width","popup_height","watchlist","studies","container_id","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a(a(a(a(a({},g?{width:"100%"}:{width:o}),g?{height:"100%"}:{height:r}),{autosize:g,symbol:m}),u?{range:u}:{interval:w}),{timezone:C,theme:T,style:E,locale:U,toolbar_bg:_,enable_publishing:O,hide_top_toolbar:x,hide_legend:k,withdateranges:R,hide_side_toolbar:P,allow_symbol_change:j,save_image:z,details:I,hotlist:J,calendar:Q}),Z&&{show_popup_button:Z,popup_width:V,popup_height:ee}),{watchlist:oe,studies:re,container_id:ae}),de),scriptSRC:"https://s3.tradingview.com/tv.js",containerId:ae,type:"Widget"}),l.default.createElement(s,{copyrightStyles:ne,href:"https://www.tradingview.com/symbols/"+m,spanText:m+" Chart"}))},t.SB=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.width,r=void 0===i?480:i,d=e.height,h=void 0===d?650:d,g=e.autosize,p=void 0!==g&&g,m=e.colorTheme,v=void 0===m?"light":m,w=e.isTransparent,y=void 0!==w&&w,u=e.locale,b=void 0===u?"en":u,C=e.largeChartUrl,f=void 0===C?void 0:C,T=e.copyrightStyles,S=n(e,["symbol","width","height","autosize","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({},p?{width:"100%"}:{width:r}),p?{height:"100%"}:{height:h}),{symbol:o,colorTheme:v,isTransparent:y,locale:b,largeChartUrl:f}),S),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"}),l.default.createElement(s,{copyrightStyles:T,href:"https://www.tradingview.com/symbols/"+o+"/",spanText:o+" Profile"}))},t.aY=function(e){var t=e.width,o=void 0===t?1e3:t,i=e.height,r=void 0===i?490:i,d=e.autosize,h=void 0!==d&&d,g=e.defaultColumn,p=void 0===g?"overview":g,m=e.screener_type,v=void 0===m?"crypto_mkt":m,w=e.displayCurrency,y=void 0===w?"USD":w,u=e.colorTheme,b=void 0===u?"light":u,C=e.locale,f=void 0===C?"en":C,T=e.isTransparent,S=void 0!==T&&T,E=e.copyrightStyles,F=n(e,["width","height","autosize","defaultColumn","screener_type","displayCurrency","colorTheme","locale","isTransparent","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({},h?{width:"100%"}:{width:o}),h?{height:"100%"}:{height:r}),{defaultColumn:p,screener_type:v,displayCurrency:y,colorTheme:b,locale:f,isTransparent:S}),F),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-screener.js"}),l.default.createElement(s,{copyrightStyles:E,href:"https://www.tradingview.com/markets/cryptocurrencies/prices-all/",spanText:"Cryptocurrency Markets"}))},t.On=function(e){var t=e.colorTheme,o=void 0===t?"light":t,i=e.isTransparent,r=void 0!==i&&i,d=e.width,h=void 0===d?510:d,g=e.height,p=void 0===g?600:g,m=e.autosize,v=void 0!==m&&m,w=e.locale,y=void 0===w?"en":w,u=e.importanceFilter,b=void 0===u?"-1,0,1":u,C=e.currencyFilter,f=void 0===C?void 0:C,T=e.copyrightStyles,S=n(e,["colorTheme","isTransparent","width","height","autosize","locale","importanceFilter","currencyFilter","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({colorTheme:o,isTransparent:r},v?{width:"100%"}:{width:h}),v?{height:"100%"}:{height:p}),{locale:y,importanceFilter:b,currencyFilter:f}),S),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-events.js"}),l.default.createElement(s,{copyrightStyles:T,href:"https://www.tradingview.com/markets/currencies/economic-calendar/",spanText:"Economic Calendar"}))},t.Oi=function(e){var t=e.width,o=void 0===t?770:t,i=e.height,r=void 0===i?400:i,d=e.autosize,g=void 0!==d&&d,p=e.currencies,m=void 0===p?h:p,v=e.isTransparent,w=void 0!==v&&v,y=e.colorTheme,u=void 0===y?"light":y,b=e.locale,C=void 0===b?"en":b,f=e.largeChartUrl,T=void 0===f?void 0:f,S=e.copyrightStyles,E=n(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({},g?{width:"100%"}:{width:o}),g?{height:"100%"}:{height:r}),{currencies:m,isTransparent:w,colorTheme:u,locale:C,largeChartUrl:T}),E),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"}),l.default.createElement(s,{copyrightStyles:S,href:"https://www.tradingview.com/markets/currencies/forex-cross-rates/",spanText:"Exchange Rates"}))},t.R6=function(e){var t=e.width,o=void 0===t?700:t,i=e.height,r=void 0===i?400:i,d=e.autosize,h=void 0!==d&&d,p=e.currencies,m=void 0===p?g:p,v=e.isTransparent,w=void 0!==v&&v,y=e.colorTheme,u=void 0===y?"light":y,b=e.locale,C=void 0===b?"en":b,f=e.largeChartUrl,T=void 0===f?void 0:f,S=e.copyrightStyles,E=n(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({},h?{width:"100%"}:{width:o}),h?{height:"100%"}:{height:r}),{currencies:m,isTransparent:w,colorTheme:u,locale:C,largeChartUrl:T}),E),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js"}),l.default.createElement(s,{copyrightStyles:S,href:"https://www.tradingview.com/markets/currencies/forex-heat-map/",spanText:"Forex Heat Map"}))},t.wf=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.colorTheme,r=void 0===i?"light":i,d=e.isTransparent,h=void 0!==d&&d,g=e.largeChartUrl,p=void 0===g?void 0:g,m=e.displayMode,v=void 0===m?"regular":m,w=e.width,y=void 0===w?480:w,u=e.height,b=void 0===u?830:u,C=e.autosize,f=void 0!==C&&C,T=e.locale,S=void 0===T?"en":T,E=e.copyrightStyles,F=n(e,["symbol","colorTheme","isTransparent","largeChartUrl","displayMode","width","height","autosize","locale","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({},f?{width:"100%"}:{width:y}),f?{height:"100%"}:{height:b}),{symbol:o,colorTheme:r,isTransparent:h,largeChartUrl:p,displayMode:v,locale:S}),F),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-financials.js"}),l.default.createElement(s,{copyrightStyles:E,href:"https://www.tradingview.com/symbols/"+o.replace(":","-")+"/financials-overview/",spanText:o+" Fundamental Data"}))},t.bg=function(e){var t=e.width,o=void 0===t?770:t,i=e.height,r=void 0===i?450:i,d=e.autosize,h=void 0!==d&&d,g=e.symbolsGroups,m=void 0===g?p:g,v=e.showSymbolLogo,w=void 0===v||v,y=e.colorTheme,u=void 0===y?"light":y,b=e.isTransparent,C=void 0!==b&&b,f=e.locale,T=void 0===f?"en":f,S=e.largeChartUrl,E=void 0===S?void 0:S,F=e.copyrightStyles,U=n(e,["width","height","autosize","symbolsGroups","showSymbolLogo","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({},h?{width:"100%"}:{width:o}),h?{height:"100%"}:{height:r}),{symbolsGroups:m,showSymbolLogo:w,colorTheme:u,isTransparent:C,locale:T,largeChartUrl:E}),U),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"}),l.default.createElement(s,{copyrightStyles:F,spanText:"Financial Markets",href:"https://www.tradingview.com/markets/"}))},t.dN=function(e){var t=e.colorTheme,o=void 0===t?"light":t,i=e.dateRange,r=void 0===i?"12M":i,d=e.showChart,h=void 0===d||d,g=e.locale,p=void 0===g?"en":g,v=e.largeChartUrl,w=void 0===v?void 0:v,y=e.isTransparent,u=void 0!==y&&y,b=e.showSymbolLogo,C=void 0===b||b,f=e.showFloatingTooltip,T=void 0!==f&&f,S=e.width,E=void 0===S?400:S,F=e.height,U=void 0===F?660:F,L=e.autosize,_=void 0!==L&&L,M=e.plotLineColorGrowing,O=void 0===M?"rgba(33, 150, 243, 1)":M,D=e.plotLineColorFalling,x=void 0===D?"rgba(33, 150, 243, 1)":D,N=e.gridLineColor,k=void 0===N?"rgba(240, 243, 250, 1)":N,B=e.scaleFontColor,R=void 0===B?"rgba(120, 123, 134, 1)":B,X=e.belowLineFillColorGrowing,P=void 0===X?"rgba(33, 150, 243, 0.12)":X,A=e.belowLineFillColorFalling,j=void 0===A?"rgba(33, 150, 243, 0.12)":A,G=e.belowLineFillColorGrowingBottom,z=void 0===G?"rgba(41, 98, 255, 0)":G,H=e.belowLineFillColorFallingBottom,I=void 0===H?"rgba(41, 98, 255, 0)":H,Y=e.symbolActiveColor,J=void 0===Y?"rgba(33, 150, 243, 0.12)":Y,K=e.tabs,Q=void 0===K?m:K,W=e.copyrightStyles,Z=n(e,["colorTheme","dateRange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","showFloatingTooltip","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","symbolActiveColor","tabs","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a(a({colorTheme:o,dateRange:r,showChart:h,locale:p,largeChartUrl:w,isTransparent:u,showSymbolLogo:C,showFloatingTooltip:T},_?{width:"100%"}:{width:E}),_?{height:"100%"}:{height:U}),h&&{plotLineColorGrowing:O,plotLineColorFalling:x,gridLineColor:k,scaleFontColor:R,belowLineFillColorGrowing:P,belowLineFillColorFalling:j,belowLineFillColorGrowingBottom:z,belowLineFillColorFallingBottom:I,symbolActiveColor:J}),{tabs:Q}),Z),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"}),l.default.createElement(s,{copyrightStyles:W,spanText:"Financial Markets",href:"https://www.tradingview.com/markets/"}))},t.h7=function(e){var t=e.symbol,o=void 0===t?"FX:EURUSD":t,i=e.width,r=void 0===i?350:i,d=e.height,h=void 0===d?220:d,g=e.locale,p=void 0===g?"en":g,m=e.dateRange,v=void 0===m?"12M":m,w=e.colorTheme,y=void 0===w?"light":w,u=e.trendLineColor,b=void 0===u?"rgba(41, 98, 255, 1)":u,C=e.underLineColor,f=void 0===C?"rgba(41, 98, 255, 0.3)":C;e.underLineBottomColor;var T=e.isTransparent,S=void 0!==T&&T,E=e.autosize,F=void 0!==E&&E,U=e.largeChartUrl,L=void 0===U?void 0:U,_=e.copyrightStyles,M=n(e,["symbol","width","height","locale","dateRange","colorTheme","trendLineColor","underLineColor","underLineBottomColor","isTransparent","autosize","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({symbol:o},F?{width:"100%"}:{width:r}),F?{height:"100%"}:{height:h}),{locale:p,dateRange:v,colorTheme:y,trendLineColor:b,underLineColor:f,isTransparent:S,autosize:F,largeChartUrl:L}),M),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"}),l.default.createElement(s,{copyrightStyles:_,href:"https://www.tradingview.com/symbols/"+o+"/",spanText:o+" Rates"}))},t.o4=function(e){var t=e.width,o=void 0===t?1100:t,i=e.height,r=void 0===i?512:i,d=e.autosize,h=void 0!==d&&d,g=e.defaultColumn,p=void 0===g?"overview":g,m=e.defaultScreen,v=void 0===m?"general":m,w=e.market,y=void 0===w?"forex":w,u=e.showToolbar,b=void 0===u||u,C=e.colorTheme,f=void 0===C?"light":C,T=e.locale,S=void 0===T?"en":T,E=e.isTransparent,F=void 0!==E&&E,U=e.largeChartUrl,L=void 0===U?void 0:U,_=e.copyrightStyles,M=n(e,["width","height","autosize","defaultColumn","defaultScreen","market","showToolbar","colorTheme","locale","isTransparent","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({},h?{width:"100%"}:{width:o}),h?{height:"100%"}:{height:r}),{defaultColumn:p,defaultScreen:v,market:y,showToolbar:b,colorTheme:f,locale:S,isTransparent:F,largeChartUrl:L}),M),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-screener.js"}),l.default.createElement(s,{copyrightStyles:_,href:"https://www.tradingview.com/forex-screener/",spanText:"Forex Screener"}))},t.kK=function(e){var t=e.symbol,o=void 0===t?"FX:EURUSD":t,i=e.width,r=void 0===i?350:i,d=e.autosize,h=void 0!==d&&d,g=e.colorTheme,p=void 0===g?"light":g,m=e.isTransparent,v=void 0!==m&&m,w=e.locale,y=void 0===w?"en":w,u=e.largeChartUrl,b=void 0===u?void 0:u,C=e.copyrightStyles,f=n(e,["symbol","width","autosize","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a({symbol:o},h?{width:"100%"}:{width:r}),{colorTheme:p,isTransparent:v,locale:y,largeChartUrl:b}),f),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"}),l.default.createElement(s,{copyrightStyles:C,href:"https://www.tradingview.com/symbols/"+o+"/",spanText:o+" Rates"}))},t.xO=function(e){var t=e.colorTheme,o=void 0===t?"light":t,i=e.dateRange,r=void 0===i?"12M":i,d=e.exchange,h=void 0===d?"US":d,g=e.showChart,p=void 0===g||g,m=e.locale,v=void 0===m?"en":m,w=e.largeChartUrl,y=void 0===w?void 0:w,u=e.isTransparent,b=void 0!==u&&u,C=e.showSymbolLogo,f=void 0===C||C;e.showFloatingTooltip;var T=e.width,S=void 0===T?400:T,E=e.height,F=void 0===E?600:E,U=e.autosize,L=void 0!==U&&U,_=e.plotLineColorGrowing,M=void 0===_?"rgba(33, 150, 243, 1)":_,O=e.plotLineColorFalling,D=void 0===O?"rgba(33, 150, 243, 1)":O,x=e.gridLineColor,N=void 0===x?"rgba(240, 243, 250, 1)":x,k=e.scaleFontColor,B=void 0===k?"rgba(120, 123, 134, 1)":k,R=e.belowLineFillColorGrowing,X=void 0===R?"rgba(33, 150, 243, 0.12)":R,P=e.belowLineFillColorFalling,A=void 0===P?"rgba(33, 150, 243, 0.12)":P,j=e.belowLineFillColorGrowingBottom,G=void 0===j?"rgba(41, 98, 255, 0)":j,z=e.belowLineFillColorFallingBottom,H=void 0===z?"rgba(41, 98, 255, 0)":z,I=e.symbolActiveColor,Y=void 0===I?"rgba(33, 150, 243, 0.12)":I,J=e.copyrightStyles,K=n(e,["colorTheme","dateRange","exchange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","showFloatingTooltip","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","symbolActiveColor","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({colorTheme:o,dateRange:r,exchange:h,showChart:p,locale:v,largeChartUrl:y,isTransparent:b,showSymbolLogo:f},L?{width:"100%"}:{width:S}),L?{height:"100%"}:{height:F}),p&&{plotLineColorGrowing:M,plotLineColorFalling:D,gridLineColor:N,scaleFontColor:B,belowLineFillColorGrowing:X,belowLineFillColorFalling:A,belowLineFillColorGrowingBottom:G,belowLineFillColorFallingBottom:H,symbolActiveColor:Y}),K),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"}),l.default.createElement(s,{copyrightStyles:J,href:"https://www.tradingview.com/markets/stocks-usa/",spanText:"Stock market Today"}))},t.o2=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.width,r=void 0===i?1e3:i,d=e.autosize,h=void 0!==d&&d,g=e.locale,p=void 0===g?"en":g,m=e.colorTheme,v=void 0===m?"light":m,w=e.isTransparent,y=void 0!==w&&w,u=e.largeChartUrl,b=void 0===u?void 0:u,C=e.copyrightStyles,f=n(e,["symbol","width","autosize","locale","colorTheme","isTransparent","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a({symbol:o},h?{width:"100%"}:{width:r}),{locale:p,colorTheme:v,isTransparent:y,largeChartUrl:b}),f),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"}),l.default.createElement(s,{copyrightStyles:C,href:"https://www.tradingview.com/symbols/"+o+"/",spanText:o+" Price Today"}))},t.vF=function(e){var t=e.symbols,o=void 0===t?v:t,i=e.chartOnly,r=void 0!==i&&i,h=e.width,g=void 0===h?1e3:h,p=e.height,m=void 0===p?400:p,w=e.locale,y=void 0===w?"en":w,u=e.colorTheme,b=void 0===u?"light":u,C=e.gridLineColor,f=void 0===C?"rgba(42, 46, 57, 0)":C,T=e.fontColor,S=void 0===T?"#787B86":T,E=e.isTransparent,F=void 0!==E&&E,U=e.showFloatingTooltip,L=void 0===U||U,_=e.scalePosition,M=void 0===_?"no":_,O=e.scaleMode,D=void 0===O?"Normal":O,x=e.fontFamily,N=void 0===x?"Trebuchet MS, sans-serif":x,k=e.noTimeScale,B=void 0!==k&&k,R=e.chartType,X=void 0===R?"area":R,P=e.lineColor,A=void 0===P?"#2962FF":P,j=e.bottomColor,G=void 0===j?"rgba(41, 98, 255, 0)":j,z=e.topColor,H=void 0===z?"rgba(41, 98, 255, 0.3)":z,I=e.upColor,Y=void 0===I?"#26a69a":I,J=e.downColor,K=void 0===J?"#ef5350":J,Q=e.borderUpColor,W=void 0===Q?"#26a69a":Q,Z=e.borderDownColor,q=void 0===Z?"#ef5350":Z,V=e.wickUpColor,$=void 0===V?"#26a69a":V,ee=e.wickDownColor,te=void 0===ee?"#ef5350":ee,oe=e.autosize,ie=void 0!==oe&&oe,re=e.container_id,le=void 0===re?"tradingview_"+d(5):re,ae=e.copyrightStyles,ne=n(e,["symbols","chartOnly","width","height","locale","colorTheme","gridLineColor","fontColor","isTransparent","showFloatingTooltip","scalePosition","scaleMode","fontFamily","noTimeScale","chartType","lineColor","bottomColor","topColor","upColor","downColor","borderUpColor","borderDownColor","wickUpColor","wickDownColor","autosize","container_id","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a(a(a(a(a({symbols:o,chartOnly:r},ie?{width:"100%"}:{width:g}),ie?{height:"100%"}:{height:m}),{locale:y,colorTheme:b,gridLineColor:f,fontColor:S,isTransparent:F,showFloatingTooltip:L,scalePosition:M,scaleMode:D,fontFamily:N,noTimeScale:B,chartType:X}),"area"===X&&{lineColor:A,bottomColor:G,topColor:H}),("bars"===X||"candlesticks"===X)&&{upColor:Y,downColor:K}),"candlesticks"===X&&{borderUpColor:W,borderDownColor:q,wickUpColor:$,wickDownColor:te}),{autosize:ie,container_id:le}),ne),scriptSRC:"https://s3.tradingview.com/tv.js",containerId:le,type:"MediumWidget"}),l.default.createElement(s,{copyrightStyles:ae,href:"https://www.tradingview.com/symbols/"+o[0][1],spanText:""+o[0][1]}))},t.Xw=function(e){var t=e.interval,o=void 0===t?"1m":t,i=e.width,r=void 0===i?425:i,d=e.height,h=void 0===d?450:d,g=e.autosize,p=void 0!==g&&g,m=e.isTransparent,v=void 0!==m&&m,w=e.symbol,y=void 0===w?"NASDAQ:AAPL":w,u=e.showIntervalTabs,b=void 0===u||u,C=e.locale,f=void 0===C?"en":C,T=e.colorTheme,S=void 0===T?"light":T,E=e.largeChartUrl,F=void 0===E?void 0:E,U=e.copyrightStyles,L=n(e,["interval","width","height","autosize","isTransparent","symbol","showIntervalTabs","locale","colorTheme","largeChartUrl","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a({interval:o},p?{width:"100%"}:{width:r}),p?{height:"100%"}:{height:h}),{isTransparent:v,symbol:y,showIntervalTabs:b,locale:f,colorTheme:S,largeChartUrl:F}),L),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"}),l.default.createElement(s,{copyrightStyles:U,href:"https://www.tradingview.com/symbols/"+y.replace(":","-")+"/technicals/",spanText:"Technical Analysis for "+y}))},t.vB=function(e){var t=e.colorTheme,o=void 0===t?"light":t,i=e.isTransparent,r=void 0!==i&&i,d=e.showSymbolLogo,h=void 0===d||d,g=e.locale,p=void 0===g?"en":g,m=e.symbols,v=void 0===m?w:m,y=e.copyrightStyles,u=n(e,["colorTheme","isTransparent","showSymbolLogo","locale","symbols","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a({colorTheme:o,isTransparent:r,showSymbolLogo:h,locale:p,symbols:v},u),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"}),l.default.createElement(s,{copyrightStyles:y,href:"https://www.tradingview.com/",spanText:"Qoutes"}))},t.GQ=function(e){var t=e.symbols,o=void 0===t?y:t,i=e.showSymbolLogo,r=void 0===i||i,d=e.colorTheme,h=void 0===d?"light":d,g=e.isTransparent,p=void 0!==g&&g,m=e.largeChartUrl,v=void 0===m?void 0:m,w=e.displayMode,u=void 0===w?"adaptive":w,b=e.locale,C=void 0===b?"en":b,f=e.copyrightStyles,T=n(e,["symbols","showSymbolLogo","colorTheme","isTransparent","largeChartUrl","displayMode","locale","copyrightStyles"]);return l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a({symbols:o,showSymbolLogo:r,colorTheme:h,isTransparent:p,largeChartUrl:v,displayMode:u,locale:C},T),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"}),l.default.createElement(s,{copyrightStyles:f,href:"https://www.tradingview.com/markets/",spanText:"Markets"}))},t.TY=function(e){var t=e.feedMode,o=void 0===t?"all_symbols":t,r=e.colorTheme,d=void 0===r?"light":r,h=e.isTransparent,g=void 0!==h&&h,p=e.displayMode,m=void 0===p?"regular":p,v=e.width,w=void 0===v?480:v,y=e.height,u=void 0===y?830:y,b=e.autosize,C=void 0!==b&&b,f=e.locale,T=void 0===f?"en":f,S=e.largeChartUrl,E=void 0===S?void 0:S,F=e.copyrightStyles,U=e.symbol,L=void 0===U?"BTCUSD":U,_=e.market,M=void 0===_?"crypto":_,O=n(e,["feedMode","colorTheme","isTransparent","displayMode","width","height","autosize","locale","largeChartUrl","copyrightStyles","symbol","market"]),D=i.useState(""),x=D[0],N=D[1],k=i.useState(""),B=k[0],R=k[1];return i.useEffect((function(){if("all_symbols"==o)N("key_events"),R("Daily news roundup");else if("market"==o)switch(M){case"crypto":N("markets/cryptocurrencies/key-events/"),R("Daily cryptocurrency news");break;case"forex":N("markets/currencies/key-events/"),R("Daily currency news");break;case"stock":N("markets/stocks-usa/key-events/"),R("Daily stock news");break;case"index":N("markets/indices/key-events/"),R("Daily index news");break;case"futures":N("markets/futures/key-events/"),R("Daily futures news");break;case"cfd":N("markets/bonds/key-events/"),R("Daily bonds news")}else"symbol"==o&&(N("symbols/"+L+"/history-timeline/"),R(L+" History"))}),[o,L,M]),l.default.createElement("div",{id:"tradingview_widget_wrapper"},l.default.createElement(c,{scriptHTML:a(a(a(a(a(a({},C?{width:"100%"}:{width:w}),C?{height:"100%"}:{height:u}),{feedMode:o}),"market"==o?{market:M}:"symbol"==o?{symbol:L}:{}),{colorTheme:d,isTransparent:g,displayMode:m,locale:T,largeChartUrl:E}),O),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"}),l.default.createElement(s,{copyrightStyles:F,href:"https://www.tradingview.com/"+x,spanText:B}))}}}]);