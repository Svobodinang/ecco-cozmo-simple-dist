(()=>{var e,t,r,o,n={978:(e,t,r)=>{"use strict";r(5251),r(9823),r(9606),r(7472),r(6139),r(7680),r(3085);var o=r(8305);function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initSwipers()}var t,r;return t=e,(r=[{key:"initSwipers",value:function(){(window.innerWidth<=650||window.innerHeight<=650)&&window.innerWidth<=window.innerHeight&&new o.ZP(".swiper-header",{slidesPerView:"auto",modules:[o.W_],centeredSlides:!0,navigation:{nextEl:".header__navigation-item--next",prevEl:".header__navigation-item--prev"}}).slideTo(1),new o.ZP(".swiper-goods",{slidesPerView:"auto",modules:[o.tl,o.W_],pagination:{el:".section-goods__pagination",type:"bullets"},navigation:{nextEl:".section-goods__navigation--next",prevEl:".section-goods__navigation--prev"}});var e=document.querySelector(".slider__pagination"),t=Array.from(document.querySelectorAll(".plus")),r=new o.ZP(".slider__slides",{effect:"fade",speed:600,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[o.tl,o.W_,o.xW],on:{slideChange:function(t){e.innerHTML="0".concat(t.realIndex+1),document.querySelector(".plus.active").classList.remove("active"),document.querySelector(".plus--".concat(t.realIndex+1)).classList.add("active")}}});t.forEach((function(e){e.addEventListener("click",(function(e){console.log(e),r.slideTo(+e.target.getAttribute("index")-1)}))}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();const a=JSON.parse('{"Bs":{"Rk":{"p":"https://edge-msk-1.kinescopecdn.net/3cf9507f-7fc2-4434-bac9-5c0185a3b7d9/videos/c426e540-b0db-4262-9463-6e7876e6dbc3/assets/d5614602-39eb-4c88-9e58-66c81cce91cf/original.mp4#t=0.1","C":"poster.jpeg"}}}');var c,s,l,d,u,p,f,g;new i,c=a.Bs.Rk.p,s=a.Bs.Rk.C,l=a.Bs.Rk.p,d=a.Bs.Rk.C,u=document.getElementById("video"),p=document.createElement("source"),f=null,(window.innerWidth<=500||window.innerHeight<=500)&&window.innerWidth<=window.innerHeight&&l?(f=l,d||r(9909)("./".concat(d)).then((function(e){u.setAttribute("poster",e.default)}))):(f=c,s&&r(9909)("./".concat(s)).then((function(e){u.setAttribute("poster",e.default)}))),p.setAttribute("src",f),p.setAttribute("type","video/mp4"),u.appendChild(p),g=a.buttons,Array.from(document.querySelectorAll(".radio-input")).forEach((function(e){e.addEventListener("change",(function(e){var t=e.target.value;console.log(t);var r=document.querySelector("#input-wrapper"),o=document.querySelector("#blockTitle"),n=document.querySelectorAll(".goods-wrapper"),i=document.querySelector("#blockButton");r.classList="inputs-wrapper",r.classList.add(t),o.classList="block-title",o.classList.add(t),Array.from(n).forEach((function(e){e.classList="goods-wrapper",e.classList.add(t)})),i.querySelector("a").href=g[t]}))}))},9909:(e,t,r)=>{var o={"./arrow-black.svg":[54,54],"./arrow-right.svg":[7164,164],"./arrow.svg":[7670,670],"./boot.png":[5409,409],"./collage.png":[1890,890],"./footer-1.jpg":[2541,541],"./footer-2.jpg":[272,272],"./footer-3.jpg":[4427,427],"./footer-pt.jpg":[4038,38],"./footer.jpg":[804,804],"./goods-1.png":[663,663],"./goods-2.png":[5750,750],"./goods.jpg":[4114,114],"./header-1.jpg":[2794,794],"./header-2-pt.jpg":[7765,765],"./header-2.jpg":[8462,462],"./header-3.jpg":[304,304],"./header-pt.jpg":[9491,491],"./plus.svg":[8701,701],"./poster.jpeg":[7145,145],"./rectBlock11.jpg":[3149,149],"./rectBlock12.jpg":[9952,952],"./rectBlock21.jpg":[6009,9],"./rectBlock22.jpg":[5880,880]};function n(e){if(!r.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return r.e(t[1]).then((()=>r.t(n,17)))}n.keys=()=>Object.keys(o),n.id=9909,e.exports=n}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=(t,r,o,n)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,n]=e[d],c=!0,s=0;s<r.length;s++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(c=!1,n<i&&(i=n));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);a.r(n);var i={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(n,i),n},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"assets/js/"+e+".js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==e){i=d;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=e),o[e]=[t];var u=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=a.p+a.u(t),c=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,o[1](c)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,c,s]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(s)var d=s(a)}for(t&&t(r);l<i.length;l++)n=i[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=a.O(void 0,[13],(()=>a(978)));c=a.O(c)})();
//# sourceMappingURL=app.js.map