(this["webpackJsonpjet-gang-benefit"]=this["webpackJsonpjet-gang-benefit"]||[]).push([[51],{726:function(e,n,t){"use strict";t.r(n);var a=t(5),r=t.n(a),l=t(795);function o(e,n,t,a,r,l,o){try{var i=e[l](o),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(a,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var l=e.apply(n,t);function i(e){o(l,a,r,i,s,"next",e)}function s(e){o(l,a,r,i,s,"throw",e)}i(void 0)}))}}n.default=function(e){var n=e.preferred,a=e.label,o=e.svg,s=e.rpcUrl;return{name:a||"Huobi Wallet",svg:o||'\n    <svg id="\u56fe\u5c42_1" data-name="\u56fe\u5c42 1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">\n        <defs>\n            <style>.cls-1{fill:#2d65f8;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#173fff;}.cls-3{fill:#fcfcff;}.cls-4{fill:#fff;}</style>\n        </defs>\n        <title>huobi wallet icon</title>\n        <path class="cls-1" d="M292.28,0H552Q742.79,27,858.24,122.88T1024,392V731.72c0,101.63-10.58,138.48-30.45,175.64a207.13,207.13,0,0,1-86.19,86.19c-37.16,19.87-74,30.45-175.64,30.45H292.28c-101.63,0-138.48-10.58-175.64-30.45a207.13,207.13,0,0,1-86.19-86.19C10.58,870.2,0,833.35,0,731.72V292.28C0,190.65,10.58,153.8,30.45,116.64a207.13,207.13,0,0,1,86.19-86.19C153.8,10.58,190.65,0,292.28,0Z"/>\n        <path class="cls-2" d="M993.55,116.64a207.13,207.13,0,0,0-86.19-86.19C870.21,10.58,833.35,0,731.72,0H552Q742.79,27,858.24,122.88T1024,392V292.28C1024,190.65,1013.42,153.8,993.55,116.64Z"/>\n        <path class="cls-3" d="M591.8,382.71c0-97.43-48-181.13-84.48-208.41,0,0-2.78-1.53-2.59,2.3-3,188-100.19,239-153.65,307.63-123.27,158.45-8.6,332.23,108.14,364.18,65.35,18-15.06-31.95-25.4-136.86C421.21,584.73,591.8,487.81,591.8,382.71Z"/>\n        <path class="cls-4" d="M643.64,445.69c-.78-.51-1.81-.9-2.53.32-2.07,23.74-26.56,74.42-57.67,121C478.07,725,538.08,801.1,571.91,842.18c19.44,23.74,0,0,49-24.25,60.52-36.26,99.8-98.95,105.62-168.62A242.5,242.5,0,0,0,643.64,445.69Z"/>\n    </svg>',wallet:function(){var e=i(r.a.mark((function e(n){var a,l,o,c,u,f,d,p,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getProviderName,l=n.getAddress,o=n.getNetwork,c=n.getBalance,u=window.ethereum||window.web3&&window.web3.currentProvider,!(f="huobiwallet"===a(u))||!s){e.next=7;break}return e.next=6,Promise.all([t.e(0),t.e(1),t.e(2),t.e(3)]).then(t.bind(null,819));case 6:d=e.sent.default;case 7:return p=d?d({rpcUrl:s}):null,h=!1,e.abrupt("return",{provider:u,interface:f?{address:{get:function(){return l(u)}},network:{get:function(){return o(u)}},balance:{get:function(){var e=i(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=3;break}return h||(console.warn('The Huobi Wallet provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the Huobi Wallet initialization object to get the balance.'),h=!0),e.abrupt("return",null);case 3:return e.next=5,l(u);case 5:return n=e.sent,e.abrupt("return",c(p,n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},name:a(u)}:null});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),type:"injected",link:"https://www.huobiwallet.com",installMessage:l.b,mobile:!0,preferred:n}}},795:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var a=function(e){var n=e.currentWallet,t=e.selectedWallet;return n?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n,"</b>\n    installed. If you would prefer to use\n    <b>").concat(t,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===t?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},r=function(e){var n=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n  Tap the button below to <b>Open '.concat(n,"</b>. Please access this site on ").concat(n,"'s in-app browser for a seamless experience.\n  </p>\n  ")}}}]);
//# sourceMappingURL=51.38a85c69.chunk.js.map