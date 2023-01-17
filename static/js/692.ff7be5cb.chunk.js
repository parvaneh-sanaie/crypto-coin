"use strict";(self.webpackChunkcrypto_coin=self.webpackChunkcrypto_coin||[]).push([[692],{5719:function(e,t,n){n.d(t,{C1:function(){return r},HP:function(){return s},TF:function(){return c},ir:function(){return d},kI:function(){return o},lT:function(){return f},ly:function(){return i},oS:function(){return l},pG:function(){return u},zy:function(){return p}});var a=n(188),c=function(e,t){return{key:e,type:"".concat(a.Z.ONE.KEY).concat(e),payload:t}},r=function(e,t){return{key:e,type:"".concat(a.Z.ALL.KEY).concat(e),payload:t}},s=function(e,t){return{key:e,type:"".concat(a.Z.LIST.KEY).concat(e),payload:t}},i=function(e,t){return{key:e,type:"".concat(a.Z.LIST.SUCCESS.KEY).concat(e),payload:t}},o=function(e,t){return{key:e,type:"".concat(a.Z.ONE.SUCCESS.KEY).concat(e),payload:t}},l=function(e,t){return{key:e,type:"".concat(a.Z.ALL.SUCCESS.KEY).concat(e),payload:t}},d=function(e,t){return{key:e,type:"".concat(a.Z.LIST.FAILURE.KEY).concat(e),payload:t}},u=function(e,t){return{key:e,type:"".concat(a.Z.ONE.FAILURE.KEY).concat(e),payload:t}},f=function(e,t){return{key:e,type:"".concat(a.Z.ALL.FAILURE.KEY).concat(e),payload:t}},p=function(e){return{key:e,type:"".concat(a.Z.RESET.KEY).concat(e)}}},1318:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(9806),c=n(3705),r=n(7897),s=(n(2791),n(3071)),i=n(184);var o=function(){return(0,i.jsx)("div",{"data-testid":"progressBar",className:"mw-100",children:(0,i.jsxs)("span",{className:"progress-root",children:[(0,i.jsx)("span",{className:"animated1"}),(0,i.jsx)("span",{className:"animated2"})]})})};function l(e){var t=e.showProgress;return(0,i.jsxs)("div",{"data-testid":"Header",children:[(0,i.jsxs)("nav",{"data-testid":"navbar",className:"navbar navbar-expand navbar-dark bg-dark",children:[(0,i.jsxs)("a",{"data-testid":"homeLink",className:"navbar-brand ps-3",href:"/crypto-coin/",children:[(0,i.jsx)(a.G,{icon:r.wp,className:"fa-fw me-2"}),"Crypto Coin"]}),(0,i.jsx)(s.Z,{}),(0,i.jsx)("ul",{"data-testid":"userProfileLink",className:"navbar-nav ms-auto ms-md-0 me-3 me-lg-4",children:(0,i.jsx)("li",{className:"nav-item dropdown",children:(0,i.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,i.jsx)(a.G,{icon:c.IL,className:"fa-fw"})})})})]}),t&&(0,i.jsx)(o,{})]})}l.defaultProps={showProgress:!1};var d=l},3071:function(e,t,n){var a=n(9439),c=n(2791),r=n(9806),s=n(3914),i=n(184);function o(e){var t=e.onSearch,n=(0,c.useState)(""),o=(0,a.Z)(n,2),l=o[0],d=o[1];return(0,i.jsx)("form",{"data-testid":"search-field-form",className:"d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0",children:(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("input",{"data-testid":"search-field-input",value:l,onChange:function(e){d(e.target.value),t(e.target.value)},className:"form-control",type:"text",placeholder:"Search for...","aria-label":"Search for...","aria-describedby":"btnNavbarSearch"}),(0,i.jsx)("button",{"data-testid":"search-field-button",className:"btn btn-primary",id:"btnNavbarSearch",type:"button",children:(0,i.jsx)(r.G,{icon:s.wn})})]})})}o.defaultProps={onSearch:function(e){return e}},t.Z=o},4361:function(e,t){var n="/CRUD/GET",a={ALL:{KEY:"".concat(n,"/ALL/"),FAILURE:{KEY:"".concat(n,"/ALL/FAILURE/")},SUCCESS:{KEY:"".concat(n,"/ALL/SUCCESS/")}},LIST:{KEY:"".concat(n,"/LIST/"),FAILURE:{KEY:"".concat(n,"/LIST/FAILURE/")},SUCCESS:{KEY:"".concat(n,"/LIST/SUCCESS/")}},ONE:{KEY:"".concat(n,"/ONE/"),FAILURE:{KEY:"".concat(n,"/ONE/FAILURE/")},SUCCESS:{KEY:"".concat(n,"/ONE/SUCCESS/")}},RESET:{KEY:"".concat(n,"/RESET/")}};t.Z=a},188:function(e,t,n){var a=n(4361);t.Z=a.Z},5692:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(9439),c=n(2791),r=(n(7632),n(7689)),s=n(812),i=n(9806),o=n(5362),l={COIN:{DETAIL:"COIN_DETAIL",TOP10MARKETS:"TOP_10_MARKETS"}},d=n(1318),u=n(763),f=n.n(u),p=n(601),g=n(4160),h=n(466),x=n(2891),m=n(7281),y=n(2839),j=n(6710),v=n(5667),S=function(e){return e>1e9?"".concat((e/1e9).toString()," B"):e>1e6?"".concat((e/1e6).toString()," M"):e>1e3?"".concat((e/1e3).toString()," K"):e.toString()},E=n(184);function b(e){var t=e.data,n=e.height,r=e.barConfig,s=e.tooltip,i=e.xAxisFormatterType,o=e.xAxisDataKey,l=(0,c.useState)([]),d=(0,a.Z)(l,1)[0],u=f().toPairs(r).map((function(e){return{dataKey:e[0],color:e[1].fill,value:e[1].name}}));return(0,E.jsx)(p.h,{width:"100%",height:n,children:(0,E.jsxs)(g.c,{height:n,data:t,children:[(0,E.jsx)(h.K,{dataKey:o,style:{fontSize:"10px",fontWeight:"700"},tickFormatter:i.toLowerCase(),padding:{left:10,right:30},color:"#e31958"}),(0,E.jsx)(x.B,{style:{fontSize:"10px",fontWeight:"700"},tickFormatter:S}),(0,E.jsx)(m.D,{layout:"horizontal",verticalAlign:"top",align:"left",payload:u,wrapperStyle:{fontSize:"12px",top:0,left:0,marginTop:-20,transform:"translate(1, 0)"}}),(0,E.jsx)(y.q,{fill:"#f8fafa",fillOpacity:1,horizontal:!1,vertical:!1}),f().toPairs(r).filter((function(e){return!f().includes(d,e[0])})).map((function(e){var t=(new Date).getMilliseconds()+Math.random();return(0,E.jsx)(j.$,{dataKey:null,stackId:e[1].stack,background:{fill:"#FFFFFF"},maxBarSize:50},t)})),f().toPairs(r).filter((function(e){return!f().includes(d,e[0])})).map((function(e){var t=(new Date).getMilliseconds()+Math.random();return(0,E.jsx)(j.$,{name:e[1].name,dataKey:e[1].dataKey,stackId:e[1].stack,fill:e[1].fill,fillOpacity:1,maxBarSize:50},t)})),s&&(0,E.jsx)(v.u,{})]})})}b.defaultProps={tooltip:!1,xAxisDataKey:"date",xAxisFormatterType:"name",barConfig:[]};var k=b,N=n(956),L=n(8617),C=n(2926),Z=n(4165),A=n(7780),T=n(188),K=n(8845),I=n(5719),O=(0,Z.Z)().mark(F),R=(0,Z.Z)().mark(G),P=(0,Z.Z)().mark(_),w=(0,Z.Z)().mark(Y);function F(e){var t,n,a;return(0,Z.Z)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload.id,n="https://api.coinlore.net/api/ticker/?id=".concat(t),c.next=5,(0,A.RE)(K.Z,n);case 5:if(!(a=c.sent).error){c.next=11;break}return c.next=9,(0,A.gz)((0,I.pG)(e.key,{error:a.error}));case 9:c.next=14;break;case 11:if(!a.data){c.next=14;break}return c.next=14,(0,A.gz)((0,I.kI)(e.key,{data:a.data[0],success:!0}));case 14:c.next=20;break;case 16:return c.prev=16,c.t0=c.catch(0),c.next=20,(0,A.gz)((0,I.pG)(e.key,{error:c.t0}));case 20:case"end":return c.stop()}}),O,null,[[0,16]])}function G(e){var t,n,a,c;return(0,Z.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload.id,n="https://api.coinlore.net/api/coin/markets/?id=".concat(t),r.next=5,(0,A.RE)(K.Z,n);case 5:if(!(a=r.sent).error){r.next=11;break}return r.next=9,(0,A.gz)((0,I.lT)(e.key,{error:a.error}));case 9:r.next=15;break;case 11:if(!a.data){r.next=15;break}return c=f().orderBy(a.data,["volume"],["desc"]).slice(0,10),r.next=15,(0,A.gz)((0,I.oS)(e.key,{data:c,success:!0}));case 15:r.next=21;break;case 17:return r.prev=17,r.t0=r.catch(0),r.next=21,(0,A.gz)((0,I.lT)(e.key,{error:r.t0}));case 21:case"end":return r.stop()}}),R,null,[[0,17]])}function _(){return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,A.Fm)("".concat(T.Z.ONE.KEY).concat(l.COIN.DETAIL),F);case 2:case"end":return e.stop()}}),P)}function Y(){return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,A.Fm)("".concat(T.Z.ALL.KEY).concat(l.COIN.TOP10MARKETS),G);case 2:case"end":return e.stop()}}),w)}var U=[{name:"Volume",dataKey:"volume",fill:"#2347F3",stack:"0"}];var D=function(){var e=(0,r.UO)().coinId,t=(0,N.Z)(l.COIN.DETAIL);(0,L.n)({key:l.COIN.DETAIL,reducer:t}),(0,L.H)({key:l.COIN.DETAIL,saga:_});var n=(0,N.Z)(l.COIN.TOP10MARKETS);(0,L.n)({key:l.COIN.TOP10MARKETS,reducer:n}),(0,L.H)({key:l.COIN.TOP10MARKETS,saga:Y});var u=(0,C.Z)(l.COIN.DETAIL),f=u.crudGetOne,p=u.crudGetOnePayload,g=u.crudGetOneLoading,h=u.crudGetOneSuccess,x=(0,C.Z)(l.COIN.TOP10MARKETS),m=x.crudGetAll,y=x.crudGetAllPayload,j=x.crudGetAllLoading,v=x.crudGetAllSuccess,S=(0,c.useState)(null),b=(0,a.Z)(S,2),Z=b[0],A=b[1],T=(0,c.useState)(null),K=(0,a.Z)(T,2),I=K[0],O=K[1];return(0,c.useEffect)((function(){null!=p||null!=y||j||g||(f({id:e}),m({id:e}))}),[e,j,y,g,p,f,m]),(0,c.useEffect)((function(){h&&O(p.data)}),[p,h]),(0,c.useEffect)((function(){v&&A(y.data)}),[y,v]),(0,E.jsxs)("div",{"data-testid":"CoinDetail",children:[(0,E.jsx)(d.Z,{showProgress:g||j}),(0,E.jsx)("div",{"data-testid":"container",className:"container-fluid px-4 small",children:I&&Z&&(0,E.jsxs)("div",{className:"row",children:[(0,E.jsxs)("div",{className:"col-xl-7 col-md-6 mt-4",children:[(0,E.jsxs)("div",{"data-testid":"TitleCard",className:"row card card-body flex-row",children:[(0,E.jsxs)("div",{className:"col-xl-10 col-md-8",children:[(0,E.jsx)("img",{className:"px-1 rounded-circle",src:"https://www.coinlore.com/img/25x25/".concat(I.nameid,".png"),alt:I.symbol}),(0,E.jsx)("strong",{"data-testid":"coin_symbol",children:I.symbol})," Price / Everything About ",(0,E.jsx)("strong",{"data-testid":"coin_name",children:I.name})]}),(0,E.jsxs)("div",{className:"text-end align-self-end col-xl-2 col-md-4",children:["Rank:"," ",(0,E.jsx)("div",{"data-testid":"coin_rank",className:I.rank<=10?"badge bg-success":"badge bg-primary",children:I.rank})]})]}),(0,E.jsx)("div",{className:"card row mt-4",children:(0,E.jsx)("div",{className:"card-body table-responsive",children:(0,E.jsxs)("table",{className:"table table-sm",children:[(0,E.jsx)("thead",{children:(0,E.jsxs)("tr",{children:[(0,E.jsx)("th",{children:"Market Cap"}),(0,E.jsx)("th",{children:"Vol (24H)"}),(0,E.jsx)("th",{children:"Circulating Supply"}),(0,E.jsx)("th",{children:"Total Supply"})]})}),(0,E.jsx)("tbody",{children:(0,E.jsxs)("tr",{children:[(0,E.jsxs)("td",{children:["$",I.market_cap_usd]}),(0,E.jsxs)("td",{children:[(0,E.jsxs)("div",{children:["$",I.volume24]}),(0,E.jsxs)("div",{className:"text-secondary small",children:[I.volume24_native,(0,E.jsxs)("strong",{children:[" ",I.symbol]})]})]}),(0,E.jsxs)("td",{"data-testid":"csupply",children:["$",I.csupply]}),(0,E.jsxs)("td",{"data-testid":"tsupply",children:["$",I.tsupply]})]})})]})})}),(0,E.jsxs)("div",{className:"row d-flex align-content-between",children:[(0,E.jsx)("div",{className:"col-xl-3 col-md-6 mt-4 pe-1 ps-0",children:(0,E.jsx)("div",{className:"card",children:(0,E.jsxs)("div",{className:"card-body",children:[(0,E.jsxs)("div",{className:"card-header",children:[(0,E.jsx)(i.G,{icon:o.n7,className:"me-1"}),(0,E.jsx)("strong",{children:"Price"})]}),(0,E.jsxs)("div",{className:"list-group-flush",children:[(0,E.jsxs)("div",{className:"list-group-item",children:[(0,E.jsx)("span",{children:"USD: "}),(0,E.jsxs)("span",{"data-testid":"price_usd",className:"text-primary small",children:["$",I.price_usd]})]}),(0,E.jsxs)("div",{className:"list-group-item",children:[(0,E.jsx)("span",{children:"BTC: "}),(0,E.jsxs)("span",{"data-testid":"price_btc",className:"text-primary small",children:[I.price_btc," ",(0,E.jsx)("small",{children:"(BTC)"})]})]})]})]})})}),(0,E.jsx)("div",{className:"card card-body col-xl-9 col-md-12 mt-4",children:(0,E.jsxs)("table",{className:"table table-striped table-bordered table-hover table-sm",children:[(0,E.jsx)("thead",{children:(0,E.jsxs)("tr",{children:[(0,E.jsx)("th",{children:"VS"}),(0,E.jsx)("th",{children:"1h"}),(0,E.jsx)("th",{children:"24h"}),(0,E.jsx)("th",{children:"7d"})]})}),(0,E.jsx)("tbody",{children:(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:"USD"}),(0,E.jsxs)("td",{"data-testid":"percent_change_1h",className:I.percent_change_1h>0?"text-success":"text-danger",children:[I.percent_change_1h,"%"]}),(0,E.jsxs)("td",{"data-testid":"percent_change_24h",className:I.percent_change_24h>0?"text-success":"text-danger",children:[I.percent_change_24h,"%"]}),(0,E.jsxs)("td",{"data-testid":"percent_change_7d",className:I.percent_change_7d>0?"text-success":"text-danger",children:[I.percent_change_7d,"%"]})]})})]})})]})]}),(0,E.jsx)("div",{className:"col-xl-5 col-md-6 mt-4",children:(0,E.jsxs)("div",{className:"card mb-4",children:[(0,E.jsxs)("div",{className:"card-header",children:[(0,E.jsx)(i.G,{icon:s.Wp,className:"me-1"}),"Top 10 Markets for ",I.name,"(",I.symbol,")"]}),(0,E.jsx)("div",{"data-testid":"top10Markets",className:"card-body flex-row pt-4",children:(0,E.jsx)(k,{width:600,height:268,data:Z,barConfig:U,tooltip:!0,xAxisDataKey:"name"})})]})})]})})]})}},2926:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(9434),c=n(6916),r=n(956),s=function(e,t){return e[t]||r.a},i=n(5719);var o=function(e){var t=(0,a.I0)(),n=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.list.payload}))}(e),r=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.one.payload}))}(e),o=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.all.payload}))}(e),l=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.list.failure}))}(e),d=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.one.failure}))}(e),u=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.all.failure}))}(e),f=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.list.success}))}(e),p=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.one.success}))}(e),g=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.all.success}))}(e),h=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.list.loading}))}(e),x=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.all.loading}))}(e),m=function(e){return(0,c.P1)((function(t){return s(t,e)}),(function(e){return e.get.one.loading}))}(e),y=(0,a.v9)(n),j=(0,a.v9)(o),v=(0,a.v9)(r),S=(0,a.v9)(g),E=(0,a.v9)(f),b=(0,a.v9)(p),k=(0,a.v9)(u),N=(0,a.v9)(l),L=(0,a.v9)(d),C=(0,a.v9)(h),Z=(0,a.v9)(x);return{crudGetOne:function(n){t((0,i.TF)(e,n))},crudGetAll:function(n){t((0,i.C1)(e,n))},crudGetList:function(n){t((0,i.HP)(e,n))},crudGetReset:function(){t((0,i.zy)(e))},crudGetOnePayload:v,crudGetListPayload:y,crudGetAllPayload:j,crudGetOneLoading:(0,a.v9)(m),crudGetAllLoading:Z,crudGetListLoading:C,crudGetOneFailure:L,crudGetAllFailure:k,crudGetListFailure:N,crudGetOneSuccess:b,crudGetAllSuccess:S,crudGetListSuccess:E}}},956:function(e,t,n){n.d(t,{a:function(){return r}});var a=n(2546),c=n(4361),r={get:{all:{payload:null,loading:!1,success:!1,failure:!1},list:{payload:null,loading:!1,success:!1,failure:!1},one:{payload:null,loading:!1,success:!1,failure:!1}}};t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0,s=n.key;return s!==e?t:(0,a.ZP)(t,(function(e){switch(n.type){case"".concat(c.Z.ONE.KEY).concat(s):e.get.one.payload=n.payload,e.get.one.loading=!0,e.get.one.success=!1,e.get.one.failure=!1;break;case"".concat(c.Z.ALL.KEY).concat(s):e.get.all.payload=n.payload,e.get.all.loading=!0,e.get.all.success=!1,e.get.all.failure=!1;break;case"".concat(c.Z.LIST.KEY).concat(s):e.get.list.payload=n.payload,e.get.list.loading=!0,e.get.list.success=!1,e.get.list.failure=!1;break;case"".concat(c.Z.LIST.SUCCESS.KEY).concat(s):e.get.list.payload=n.payload,e.get.list.success=!0,e.get.list.loading=!1,e.get.list.failure=!1;break;case"".concat(c.Z.ONE.SUCCESS.KEY).concat(s):e.get.one.payload=n.payload,e.get.one.success=!0,e.get.one.loading=!1,e.get.one.failure=!1;break;case"".concat(c.Z.ALL.SUCCESS.KEY).concat(s):e.get.all.payload=n.payload,e.get.all.success=!0,e.get.all.loading=!1,e.get.all.failure=!1;break;case"".concat(c.Z.LIST.FAILURE.KEY).concat(s):e.get.list.payload=n.payload,e.get.list.failure=!0,e.get.list.loading=!1,e.get.list.success=!1;break;case"".concat(c.Z.ONE.FAILURE.KEY).concat(s):e.get.one.payload=n.payload,e.get.one.failure=!0,e.get.one.loading=!1,e.get.one.success=!1;break;case"".concat(c.Z.ALL.FAILURE.KEY).concat(s):e.get.all.payload=n.payload,e.get.all.failure=!0,e.get.all.loading=!1,e.get.all.success=!1;break;case"".concat(c.Z.RESET.KEY).concat(s):e.get.all.payload=null,e.get.all.failure=!1,e.get.all.loading=!1,e.get.all.success=!1,e.get.list.payload=null,e.get.list.failure=!1,e.get.list.loading=!1,e.get.list.success=!1,e.get.one.payload=null,e.get.one.failure=!1,e.get.one.loading=!1,e.get.one.success=!1}}))}}},8617:function(e,t,n){n.d(t,{n:function(){return u},H:function(){return j}});var a=n(2791),c=n(9434),r=n(2176),s=n.n(r),i=n(763);function o(e){var t={dispatch:i.isFunction,subscribe:i.isFunction,getState:i.isFunction,replaceReducer:i.isFunction,runSaga:i.isFunction,injectedReducers:i.isObject,injectedSagas:i.isObject};s()((0,i.conformsTo)(e,t),"(app/utils...) injectors: Expected a valid redux store")}var l=n(5251);function d(e,t){return function(n,a){t||o(e),s()((0,i.isString)(n)&&!(0,i.isEmpty)(n)&&(0,i.isFunction)(a),"(src/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===a||(e.injectedReducers[n]=a,e.replaceReducer((0,l.Z)(e.injectedReducers)))}}var u=function(e){var t=e.key,n=e.reducer,r=a.useContext(c.ET);a.useEffect((function(){var e;(e=r.store,o(e),{injectReducer:d(e,!0)}).injectReducer(t,n)}))},f=n(8683),p="@@saga-injector/daemon",g="@@saga-injector/once-till-unmount",h=["@@saga-injector/restart-on-remount",p,g],x=function(e){return s()((0,i.isString)(e)&&!(0,i.isEmpty)(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")};function m(e,t){return function(n,a,c){t||o(e);var r=(0,f.Z)((0,f.Z)({},a||{}),{},{mode:a.mode||p}),l=r.saga,d=r.mode;x(n),function(e){var t={saga:i.isFunction,mode:function(e){return(0,i.isString)(e)&&h.includes(e)}};s()((0,i.conformsTo)(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")}(r);var u=Reflect.has(e.injectedSagas,n);(!u||u&&d!==p&&d!==g)&&(e.injectedSagas[n]=(0,f.Z)((0,f.Z)({},r),{},{task:e.runSaga(l,c)}))}}function y(e,t){return function(n){if(t||o(e),x(n),Reflect.has(e.injectedSagas,n)){var a=e.injectedSagas[n];a.mode&&a.mode!==p&&(a.task.cancel(),e.injectedSagas[n]="done")}}}var j=function(e){var t=e.key,n=e.saga,r=e.mode,s=a.useContext(c.ET);a.useEffect((function(){var e,a=(o(e=s.store),{injectSaga:m(e,!0),ejectSaga:y(e,!0)});return a.injectSaga(t,{saga:n,mode:r}),function(){a.ejectSaga(t)}}))}},8845:function(e,t){t.Z=function(e){var t={};return fetch(e).then((function(e){return e.json()})).then((function(e){return t.data=e,t})).catch((function(e){return t.error=e,t}))}}}]);
//# sourceMappingURL=692.ff7be5cb.chunk.js.map