(this["webpackJsonpjet-gang-benefit"]=this["webpackJsonpjet-gang-benefit"]||[]).push([[32],{1028:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"v1",(function(){return v})),n.d(e,"v3",(function(){return j})),n.d(e,"v4",(function(){return x})),n.d(e,"v5",(function(){return T})),n.d(e,"NIL",(function(){return E})),n.d(e,"version",(function(){return N})),n.d(e,"validate",(function(){return c})),n.d(e,"stringify",(function(){return l})),n.d(e,"parse",(function(){return m}));var i=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"===typeof t&&s.test(t)},a=[],u=0;u<256;++u)a.push((u+256).toString(16).substr(1));var d,h,l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n},f=0,p=0;var v=function(t,e,n){var r=e&&n||0,i=e||new Array(16),s=(t=t||{}).node||d,c=void 0!==t.clockseq?t.clockseq:h;if(null==s||null==c){var a=t.random||(t.rng||o)();null==s&&(s=d=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==c&&(c=h=16383&(a[6]<<8|a[7]))}var u=void 0!==t.msecs?t.msecs:Date.now(),v=void 0!==t.nsecs?t.nsecs:p+1,m=u-f+(v-p)/1e4;if(m<0&&void 0===t.clockseq&&(c=c+1&16383),(m<0||u>f)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=u,p=v,h=c;var y=(1e4*(268435455&(u+=122192928e5))+v)%4294967296;i[r++]=y>>>24&255,i[r++]=y>>>16&255,i[r++]=y>>>8&255,i[r++]=255&y;var b=u/4294967296*1e4&268435455;i[r++]=b>>>8&255,i[r++]=255&b,i[r++]=b>>>24&15|16,i[r++]=b>>>16&255,i[r++]=c>>>8|128,i[r++]=255&c;for(var w=0;w<6;++w)i[r+w]=s[w];return e||l(i)};var m=function(t){if(!c(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n};var y=function(t,e,n){function r(t,r,i,o){if("string"===typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}(t)),"string"===typeof r&&(r=m(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+t.length);if(s.set(r),s.set(t,r.length),(s=n(s))[6]=15&s[6]|e,s[8]=63&s[8]|128,i){o=o||0;for(var c=0;c<16;++c)i[o+c]=s[c];return i}return l(s)}try{r.name=t}catch(i){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r};function b(t){return 14+(t+64>>>9<<4)+1}function w(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function g(t,e,n,r,i,o){return w((s=w(w(e,t),w(r,o)))<<(c=i)|s>>>32-c,n);var s,c}function k(t,e,n,r,i,o,s){return g(e&n|~e&r,t,e,i,o,s)}function I(t,e,n,r,i,o,s){return g(e&r|n&~r,t,e,i,o,s)}function C(t,e,n,r,i,o,s){return g(e^n^r,t,e,i,o,s)}function S(t,e,n,r,i,o,s){return g(n^(e|~r),t,e,i,o,s)}var j=y("v3",48,(function(t){if("string"===typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return function(t){for(var e=[],n=32*t.length,r="0123456789abcdef",i=0;i<n;i+=8){var o=t[i>>5]>>>i%32&255,s=parseInt(r.charAt(o>>>4&15)+r.charAt(15&o),16);e.push(s)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[b(e)-1]=e;for(var n=1732584193,r=-271733879,i=-1732584194,o=271733878,s=0;s<t.length;s+=16){var c=n,a=r,u=i,d=o;n=k(n,r,i,o,t[s],7,-680876936),o=k(o,n,r,i,t[s+1],12,-389564586),i=k(i,o,n,r,t[s+2],17,606105819),r=k(r,i,o,n,t[s+3],22,-1044525330),n=k(n,r,i,o,t[s+4],7,-176418897),o=k(o,n,r,i,t[s+5],12,1200080426),i=k(i,o,n,r,t[s+6],17,-1473231341),r=k(r,i,o,n,t[s+7],22,-45705983),n=k(n,r,i,o,t[s+8],7,1770035416),o=k(o,n,r,i,t[s+9],12,-1958414417),i=k(i,o,n,r,t[s+10],17,-42063),r=k(r,i,o,n,t[s+11],22,-1990404162),n=k(n,r,i,o,t[s+12],7,1804603682),o=k(o,n,r,i,t[s+13],12,-40341101),i=k(i,o,n,r,t[s+14],17,-1502002290),n=I(n,r=k(r,i,o,n,t[s+15],22,1236535329),i,o,t[s+1],5,-165796510),o=I(o,n,r,i,t[s+6],9,-1069501632),i=I(i,o,n,r,t[s+11],14,643717713),r=I(r,i,o,n,t[s],20,-373897302),n=I(n,r,i,o,t[s+5],5,-701558691),o=I(o,n,r,i,t[s+10],9,38016083),i=I(i,o,n,r,t[s+15],14,-660478335),r=I(r,i,o,n,t[s+4],20,-405537848),n=I(n,r,i,o,t[s+9],5,568446438),o=I(o,n,r,i,t[s+14],9,-1019803690),i=I(i,o,n,r,t[s+3],14,-187363961),r=I(r,i,o,n,t[s+8],20,1163531501),n=I(n,r,i,o,t[s+13],5,-1444681467),o=I(o,n,r,i,t[s+2],9,-51403784),i=I(i,o,n,r,t[s+7],14,1735328473),n=C(n,r=I(r,i,o,n,t[s+12],20,-1926607734),i,o,t[s+5],4,-378558),o=C(o,n,r,i,t[s+8],11,-2022574463),i=C(i,o,n,r,t[s+11],16,1839030562),r=C(r,i,o,n,t[s+14],23,-35309556),n=C(n,r,i,o,t[s+1],4,-1530992060),o=C(o,n,r,i,t[s+4],11,1272893353),i=C(i,o,n,r,t[s+7],16,-155497632),r=C(r,i,o,n,t[s+10],23,-1094730640),n=C(n,r,i,o,t[s+13],4,681279174),o=C(o,n,r,i,t[s],11,-358537222),i=C(i,o,n,r,t[s+3],16,-722521979),r=C(r,i,o,n,t[s+6],23,76029189),n=C(n,r,i,o,t[s+9],4,-640364487),o=C(o,n,r,i,t[s+12],11,-421815835),i=C(i,o,n,r,t[s+15],16,530742520),n=S(n,r=C(r,i,o,n,t[s+2],23,-995338651),i,o,t[s],6,-198630844),o=S(o,n,r,i,t[s+7],10,1126891415),i=S(i,o,n,r,t[s+14],15,-1416354905),r=S(r,i,o,n,t[s+5],21,-57434055),n=S(n,r,i,o,t[s+12],6,1700485571),o=S(o,n,r,i,t[s+3],10,-1894986606),i=S(i,o,n,r,t[s+10],15,-1051523),r=S(r,i,o,n,t[s+1],21,-2054922799),n=S(n,r,i,o,t[s+8],6,1873313359),o=S(o,n,r,i,t[s+15],10,-30611744),i=S(i,o,n,r,t[s+6],15,-1560198380),r=S(r,i,o,n,t[s+13],21,1309151649),n=S(n,r,i,o,t[s+4],6,-145523070),o=S(o,n,r,i,t[s+11],10,-1120210379),i=S(i,o,n,r,t[s+2],15,718787259),r=S(r,i,o,n,t[s+9],21,-343485551),n=w(n,c),r=w(r,a),i=w(i,u),o=w(o,d)}return[n,r,i,o]}(function(t){if(0===t.length)return[];for(var e=8*t.length,n=new Uint32Array(b(e)),r=0;r<e;r+=8)n[r>>5]|=(255&t[r/8])<<r%32;return n}(t),8*t.length))}));var x=function(t,e,n){var r=(t=t||{}).random||(t.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return l(r)};function A(t,e,n,r){switch(t){case 0:return e&n^~e&r;case 1:case 3:return e^n^r;case 2:return e&n^e&r^n&r}}function _(t,e){return t<<e|t>>>32-e}var T=y("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof t){var r=unescape(encodeURIComponent(t));t=[];for(var i=0;i<r.length;++i)t.push(r.charCodeAt(i))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var o=t.length/4+2,s=Math.ceil(o/16),c=new Array(s),a=0;a<s;++a){for(var u=new Uint32Array(16),d=0;d<16;++d)u[d]=t[64*a+4*d]<<24|t[64*a+4*d+1]<<16|t[64*a+4*d+2]<<8|t[64*a+4*d+3];c[a]=u}c[s-1][14]=8*(t.length-1)/Math.pow(2,32),c[s-1][14]=Math.floor(c[s-1][14]),c[s-1][15]=8*(t.length-1)&4294967295;for(var h=0;h<s;++h){for(var l=new Uint32Array(80),f=0;f<16;++f)l[f]=c[h][f];for(var p=16;p<80;++p)l[p]=_(l[p-3]^l[p-8]^l[p-14]^l[p-16],1);for(var v=n[0],m=n[1],y=n[2],b=n[3],w=n[4],g=0;g<80;++g){var k=Math.floor(g/20),I=_(v,5)+A(k,m,y,b)+w+e[k]+l[g]>>>0;w=b,b=y,y=_(m,30)>>>0,m=v,v=I}n[0]=n[0]+v>>>0,n[1]=n[1]+m>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+b>>>0,n[4]=n[4]+w>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),E="00000000-0000-0000-0000-000000000000";var N=function(t){if(!c(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}},1935:function(t,e,n){var r=n(1936),i=n(1937),o=n(1940),s={ethereum:"undefined"!==typeof window&&"undefined"!==typeof window.ethereum?window.ethereum:null,web3:"undefined"!==typeof window&&"undefined"!==typeof window.web3?window.web3.currentProvider:null},c="undefined"!==typeof window&&"undefined"!==typeof window.WebSocket?window.WebSocket:null,a="undefined"!==typeof window&&"undefined"!==typeof window.XMLHttpRequest?window.XMLHttpRequest:null;s.ethereum&&(s.ethereum.__isProvider=!0);var u={injected:s.ethereum||n(1941)(s.web3),ipc:n(1942)("IPC connections are unavliable in the browser"),ws:n(1943)(c),http:n(1945)(a)};t.exports=function(t,e){!t||Array.isArray(t)||"object"!==typeof t||e||(e=t,t=void 0),t||(t=["injected","frame"]),e||(e={}),(t=[].concat(t)).forEach((function(t){if(t.startsWith("alchemy")&&!e.alchemyId)throw new Error("Alchemy was included as a connection target but no Alchemy project ID was passed in options e.g. { alchemyId: '123abc' }");if(t.startsWith("infura")&&!e.infuraId)throw new Error("Infura was included as a connection target but no Infura project ID was passed in options e.g. { infuraId: '123abc' }")}));var n=o(e);return i(u,r(t,n),e)}},1936:function(t,e,n){var r=n(382).default,i=function(t){return"injected"===t?"injected":t.endsWith(".ipc")?"ipc":t.startsWith("wss://")||t.startsWith("ws://")?"ws":t.startsWith("https://")||t.startsWith("http://")?"http":""};t.exports=function(t,e){var n;return(n=[]).concat.apply(n,r([].concat(t).map((function(t){return e[t]?e[t].map((function(e){return{type:t,location:e,protocol:i(e)}})):{type:"custom",location:t,protocol:i(t)}})))).filter((function(t){return!(!t.protocol&&"injected"!==t.type)||(console.log('eth-provider | Invalid provider preset/location: "'+t.location+'"'),!1)}))}},1937:function(t,e,n){var r=n(6),i=n(196).default,o=n(70),s=n(1938),c=n(1939),a=function(t){function e(e){t.status=e,t instanceof o&&t.emit("status",e)}function n(){return s.apply(this,arguments)}function s(){return(s=i(r.mark((function i(){return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.inSetup){r.next=2;break}return r.abrupt("return",setTimeout(n,1e3));case 2:return r.prev=2,r.next=5,t.send("eth_syncing");case 5:if(!r.sent){r.next=10;break}e("syncing"),setTimeout((function(){return n()}),5e3),r.next=11;break;case 10:e("connected");case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),e("disconnected");case 16:case"end":return r.stop()}}),i,null,[[2,13]])})))).apply(this,arguments)}return e("loading"),n(),t.on("connect",(function(){return n()})),t.on("close",(function(){return e("disconnected")})),t};t.exports=function(t,e,n){if(t.injected.__isProvider&&e.map((function(t){return t.type})).indexOf("injected")>-1)return delete t.injected.__isProvider,a(t.injected);var r=new s(new c(t,e,n));return r.setMaxListeners(128),a(r)}},1938:function(t,e,n){var r=n(382).default,i=n(6),o=n(196).default,s=n(95).default,c=n(96).default,a=n(255).default,u=n(194).default,d=n(195).default,h=function(t){"use strict";u(n,t);var e=d(n);function n(t){var r;return s(this,n),(r=e.call(this)).enable=r.enable.bind(a(r)),r._send=r._send.bind(a(r)),r.send=r.send.bind(a(r)),r._sendBatch=r._sendBatch.bind(a(r)),r.subscribe=r.subscribe.bind(a(r)),r.unsubscribe=r.unsubscribe.bind(a(r)),r.sendAsync=r.sendAsync.bind(a(r)),r.sendAsyncBatch=r.sendAsyncBatch.bind(a(r)),r.isConnected=r.isConnected.bind(a(r)),r.close=r.close.bind(a(r)),r.request=r.request.bind(a(r)),r.connected=!1,r.nextId=0,r.promises={},r.subscriptions=[],r.connection=t,r.connection.on("connect",(function(){return r.checkConnection()})),r.connection.on("close",(function(){r.connected=!1,r.emit("close"),r.emit("disconnect")})),r.connection.on("payload",(function(t){var e=t.id,n=t.method,i=t.error,o=t.result;"undefined"!==typeof e?r.promises[e]&&(t.error?r.promises[e].reject(i):r.promises[e].resolve(o),delete r.promises[e]):n&&n.indexOf("_subscription")>-1&&(r.emit(t.params.subscription,t.params.result),r.emit(n,t.params),r.emit("message",{type:t.method,data:{subscription:t.params.subscription,result:t.params.result}}),r.emit("data",t))})),r.on("newListener",(function(t,e){"chainChanged"===t&&!r.attemptedChainSubscription&&r.connected?r.startChainSubscription():"accountsChanged"===t&&!r.attemptedAccountsSubscription&&r.connected?r.startAccountsSubscription():"networkChanged"===t&&!r.attemptedNetworkSubscription&&r.connected&&(r.startNetworkSubscription(),console.warn("The networkChanged event is being deprecated, use chainChainged instead"))})),r}return c(n,[{key:"checkConnection",value:function(){var t=o(i.mark((function t(){return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=this,t.next=4,this._send("net_version");case 4:t.t1=t.sent,t.t0.emit.call(t.t0,"connect",t.t1),this.connected=!0,this.listenerCount("networkChanged")&&!this.attemptedNetworkSubscription&&this.startNetworkSubscription(),this.listenerCount("chainChanged")&&!this.attemptedChainSubscription&&this.startNetworkSubscription(),this.listenerCount("accountsChanged")&&!this.attemptedAccountsSubscription&&this.startAccountsSubscription(),t.next=15;break;case 12:t.prev=12,t.t2=t.catch(0),this.connected=!1;case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"startNetworkSubscription",value:function(){var t=o(i.mark((function t(){var e,n=this;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.attemptedNetworkSubscription=!0,t.prev=1,t.next=4,this.subscribe("eth_subscribe","networkChanged");case 4:e=t.sent,this.on(e,(function(t){return n.emit("networkChanged",t)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.warn("Unable to subscribe to networkChanged",t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"startChainSubscription",value:function(){var t=o(i.mark((function t(){var e,n=this;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.attemptedChainSubscription=!0,t.prev=1,t.next=4,this.subscribe("eth_subscribe","chainChanged");case 4:e=t.sent,this.on(e,(function(t){return n.emit("chainChanged",t)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.warn("Unable to subscribe to chainChanged",t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"startAccountsSubscription",value:function(){var t=o(i.mark((function t(){var e,n=this;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.attemptedAccountsSubscription=!0,t.prev=1,t.next=4,this.subscribe("eth_subscribe","accountsChanged");case 4:e=t.sent,this.on(e,(function(t){return n.emit("accountsChanged",t)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.warn("Unable to subscribe to accountsChanged",t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"enable",value:function(){var t=this;return new Promise((function(e,n){t._send("eth_accounts").then((function(r){if(r.length>0)t.accounts=r,t.coinbase=r[0],t.emit("enable"),e(r);else{var i=new Error("User Denied Full Provider");i.code=4001,n(i)}})).catch(n)}))}},{key:"_send",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new Promise((function(r,i){var o;"object"===typeof t&&null!==t?((o=t).params=o.params||[],o.jsonrpc="2.0",o.id=e.nextId++):o={jsonrpc:"2.0",id:e.nextId++,method:t,params:n},e.promises[o.id]={resolve:r,reject:i},o.method&&"string"===typeof o.method?o.params instanceof Array?e.connection.send(o):(e.promises[o.id].reject(new Error("Params is not a valid array.")),delete e.promises[o.id]):(e.promises[o.id].reject(new Error("Method is not a valid string.")),delete e.promises[o.id])}))}},{key:"send",value:function(){return this._send.apply(this,arguments)}},{key:"_sendBatch",value:function(t){var e=this;return Promise.all(t.map((function(t){return e._send(t.method,t.params)})))}},{key:"subscribe",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this._send(t,[e].concat(r(i))).then((function(t){return n.subscriptions.push(t),t}))}},{key:"unsubscribe",value:function(t,e){var n=this;return this._send(t,[e]).then((function(t){if(t)return n.subscriptions=n.subscriptions.filter((function(t){return t!==e})),n.removeAllListeners(e),t}))}},{key:"sendAsync",value:function(t,e){return e&&"function"===typeof e?t?(t.jsonrpc="2.0",t.id=t.id||this.nextId++,t instanceof Array?this.sendAsyncBatch(t,e):this._send(t.method,t.params).then((function(n){e(null,{id:t.id,jsonrpc:t.jsonrpc,result:n})})).catch((function(t){e(t)}))):e(new Error("Invalid Payload")):e(new Error("Invalid or undefined callback provided to sendAsync"))}},{key:"sendAsyncBatch",value:function(t,e){return this._sendBatch(t).then((function(n){var r=n.map((function(e,n){return{id:t[n].id,jsonrpc:t[n].jsonrpc,result:e}}));e(null,r)})).catch((function(t){e(t)}))}},{key:"isConnected",value:function(){return this.connected}},{key:"close",value:function(){var t=this;this.connection&&this.connection.close&&this.connection.close(),this.connected=!1;var e=new Error("Provider closed, subscription lost, please subscribe again.");this.subscriptions.forEach((function(n){return t.emit(n,e)})),this.subscriptions=[]}},{key:"request",value:function(t){return this._send(t.method,t.params)}}]),n}(n(70));t.exports=h},1939:function(t,e,n){var r=n(95).default,i=n(96).default,o=n(194).default,s=n(195).default,c=n(70),a=!1,u=function(t){"use strict";o(n,t);var e=s(n);function n(t,i,o){var s;return r(this,n),(s=e.call(this)).targets=i,s.options=o,s.connections=t,s.connected=!1,s.status="loading",s.interval=o.interval||5e3,s.name=o.name||"default",s.inSetup=!0,s.connect(),s}return i(n,[{key:"connect",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.connection&&"connected"===this.connection.status&&e>=this.connection.index)a;else if(0===this.targets.length)a;else{var n=this.targets[e],r=n.protocol,i=n.location;this.connection=this.connections[r](i,this.options),this.connection.on("error",(function(n){return t.connected?t.listenerCount("error")?t.emit("error",n):void console.warn("eth-provider - Uncaught connection error: "+n.message):t.connectionError(e,n)})),this.connection.on("close",(function(){t.connected=!1,t.emitClose(),t.closing||t.refresh()})),this.connection.on("connect",(function(){t.connection.target=t.targets[e],t.connection.index=e,t.targets[e].status=t.connection.status,t.connected=!0,t.inSetup=!1,t.emit("connect")})),this.connection.on("data",(function(e){return t.emit("data",e)})),this.connection.on("payload",(function(e){return t.emit("payload",e)}))}}},{key:"refresh",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.interval;clearTimeout(this.connectTimer),this.connectTimer=setTimeout((function(){return t.connect()}),e)}},{key:"connectionError",value:function(t,e){this.targets[t].status=e,this.targets.length-1===t?(this.inSetup=!1,this.refresh()):this.connect(++t)}},{key:"emitClose",value:function(){this.emit("close")}},{key:"close",value:function(){this.closing=!0,this.connection&&this.connection.close&&!this.connection.closed?this.connection.close():this.emit("close"),clearTimeout(this.connectTimer),clearTimeout(this.setupTimer)}},{key:"error",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}},{key:"send",value:function(t){var e=this;this.inSetup?this.setupTimer=setTimeout((function(){return e.send(t)}),100):this.connection.closed?this.error(t,"Not connected",4900):this.connection.send(t)}}]),n}(c);t.exports=u},1940:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{injected:["injected"],frame:["ws://127.0.0.1:1248","http://127.0.0.1:1248"],direct:["ws://127.0.0.1:8546","http://127.0.0.1:8545"],infura:["wss://mainnet.infura.io/ws/v3/".concat(t.infuraId),"https://mainnet.infura.io/v3/".concat(t.infuraId)],alchemy:["wss://eth-mainnet.ws.alchemyapi.io/v2/".concat(t.alchemyId),"https://eth-mainnet.alchemyapi.io/v2/".concat(t.alchemyId)],infuraRopsten:["wss://ropsten.infura.io/ws/v3/".concat(t.infuraId),"https://ropsten.infura.io/v3/".concat(t.infuraId)],alchemyRopsten:["wss://eth-ropsten.ws.alchemyapi.io/v2/".concat(t.alchemyId),"https://eth-ropsten.alchemyapi.io/v2/".concat(t.alchemyId)],infuraRinkeby:["wss://rinkeby.infura.io/ws/v3/".concat(t.infuraId),"https://rinkeby.infura.io/v3/".concat(t.infuraId)],alchemyRinkeby:["wss://eth-rinkeby.ws.alchemyapi.io/v2/".concat(t.alchemyId),"https://eth-rinkeby.alchemyapi.io/v2/".concat(t.alchemyId)],infuraKovan:["wss://kovan.infura.io/ws/v3/".concat(t.infuraId),"https://kovan.infura.io/v3/".concat(t.infuraId)],alchemyKovan:["wss://eth-kovan.ws.alchemyapi.io/v2/".concat(t.alchemyId),"https://eth-kovan.alchemyapi.io/v2/".concat(t.alchemyId)],infuraGoerli:["wss://goerli.infura.io/ws/v3/".concat(t.infuraId),"https://goerli.infura.io/ws/v3/".concat(t.infuraId)],alchemyGoerli:["wss://eth-goerli.ws.alchemyapi.io/v2/".concat(t.alchemyId),"https://eth-goerli.alchemyapi.io/v2/".concat(t.alchemyId)],idChain:["wss://idchain.one/ws/"],xDai:["https://rpc.xdaichain.com","https://dai.poa.network"],matic:["https://rpc-mainnet.maticvigil.com"]}}},1941:function(t,e,n){var r=n(96).default,i=n(95).default,o=n(194).default,s=n(195).default,c=function(t){"use strict";o(n,t);var e=s(n);function n(t,r){var o;return i(this,n),o=e.call(this),t?setTimeout((function(){return o.emit("error",new Error("Injected web3 provider is not currently supported"))}),0):setTimeout((function(){return o.emit("error",new Error("No injected provider found"))}),0),o}return r(n)}(n(70));t.exports=function(t){return function(e){return new c(t,e)}}},1942:function(t,e,n){var r=n(96).default,i=n(95).default,o=n(194).default,s=n(195).default,c=function(t){"use strict";o(n,t);var e=s(n);function n(t){var r;return i(this,n),r=e.call(this),setTimeout((function(){return r.emit("error",new Error(t))}),0),r}return r(n)}(n(70));t.exports=function(t){return function(){return new c(t)}}},1943:function(t,e,n){var r,i=n(95).default,o=n(96).default,s=n(194).default,c=n(195).default,a=n(70),u=n(1944),d=function(t){"use strict";s(n,t);var e=c(n);function n(t,o,s){var c;return i(this,n),c=e.call(this),r=t,setTimeout((function(){return c.create(o,s)}),0),c}return o(n,[{key:"create",value:function(t,e){var n=this;r||this.emit("error",new Error("No WebSocket transport available"));try{this.socket=new r(t,[],{origin:e.origin})}catch(i){return this.emit("error",i)}this.socket.addEventListener("error",(function(t){return n.emit("error",t)})),this.socket.addEventListener("open",(function(){n.emit("connect"),n.socket.addEventListener("message",(function(t){var e="string"===typeof t.data?t.data:"";u(e,(function(t,e){t||e.forEach((function(t){Array.isArray(t)?t.forEach((function(t){return n.emit("payload",t)})):n.emit("payload",t)}))}))})),n.socket.addEventListener("close",(function(){return n.onClose()}))}))}},{key:"onClose",value:function(){this.socket=null,this.closed=!0,this.emit("close"),this.removeAllListeners()}},{key:"close",value:function(){this.socket?this.socket.close():this.onClose()}},{key:"error",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}},{key:"send",value:function(t){var e=this;this.socket&&this.socket.readyState===this.socket.CONNECTING?setTimeout((function(n){return e.send(t)}),10):!this.socket||this.socket.readyState>1?(this.connected=!1,this.error(t,"Not connected")):this.socket.send(JSON.stringify(t))}}]),n}(a);t.exports=function(t){return function(e,n){return new d(t,e,n)}}},1944:function(t,e){var n,r;t.exports=function(t,e){var i=[];t.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(t){var o;n&&(t=n+t);try{o=JSON.parse(t)}catch(s){return n=t,clearTimeout(r),void(r=setTimeout((function(){return e(new Error("Parse response timeout"))}),15e3))}clearTimeout(r),n=null,o&&i.push(o)})),e(null,i)}},1945:function(t,e,n){var r,i=n(95).default,o=n(96).default,s=n(194).default,c=n(195).default,a=n(70),u=n(1028).v4,d=function(t){"use strict";s(n,t);var e=c(n);function n(t,o,s){var c;return i(this,n),c=e.call(this),r=t,c.options=s,c.connected=!1,c.subscriptions=!1,c.status="loading",c.url=o,c.pollId=u(),setTimeout((function(){return c.create()}),0),c._emit=function(){var t;return c.closed?null:(t=c).emit.apply(t,arguments)},c}return o(n,[{key:"create",value:function(){var t=this;if(!r)return this._emit("error",new Error("No HTTP transport available"));this.on("error",(function(){t.connected&&t.close()})),this.init()}},{key:"init",value:function(){var t=this;this.send({jsonrpc:"2.0",method:"net_version",params:[],id:1},(function(e,n){if(e)return t._emit("error",e);t.connected=!0,t._emit("connect"),t.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[t.pollId,"immediate"]},(function(e,n){e||(t.subscriptions=!0,t.pollSubscriptions())}))}))}},{key:"pollSubscriptions",value:function(){var t=this;this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId]},(function(e,n){if(e)return t.subscriptionTimeout=setTimeout((function(){return t.pollSubscriptions()}),1e4),t._emit("error",e);t.closed||(t.subscriptionTimeout=t.pollSubscriptions()),n&&n.map((function(t){var e;try{e=JSON.parse(t)}catch(n){e=!1}return e})).filter((function(t){return t})).forEach((function(e){return t._emit("payload",e)}))}))}},{key:"close",value:function(){this.closed=!0,this._emit("close"),clearTimeout(this.subscriptionTimeout),this.removeAllListeners()}},{key:"filterStatus",value:function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.res=t,e.message}},{key:"error",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this._emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}},{key:"send",value:function(t,e){var n=this;if(this.closed)return this.error(t,"Not connected");if("eth_subscribe"===t.method){if(!this.subscriptions)return this.error(t,"Subscriptions are not supported by this HTTP endpoint");t.pollId=this.pollId}var i=new r,o=!1,s=function(r,s){if(!o)if(i.abort(),o=!0,e)e(r,s);else{var c=t.id,a=t.jsonrpc,u=r?{id:c,jsonrpc:a,error:{message:r.message,code:r.code}}:{id:c,jsonrpc:a,result:s};n._emit("payload",u)}};i.open("POST",this.url,!0),i.setRequestHeader("Content-Type","application/json"),i.timeout=6e4,i.onerror=s,i.ontimeout=s,i.onreadystatechange=function(){if(4===i.readyState)try{var t=JSON.parse(i.responseText);s(t.error,t.result)}catch(e){s(e)}},i.send(JSON.stringify(t))}}]),n}(a);t.exports=function(t){return function(e,n){return new d(t,e,n)}}}}]);
//# sourceMappingURL=32.2b0c5419.chunk.js.map