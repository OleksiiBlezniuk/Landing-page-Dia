parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector(".nav__toggler"),e=document.querySelector(".nav__list");t.addEventListener("click",function(){e.classList.contains("nav__list--visible")?setTimeout(function(){e.classList.toggle("nav__list--visible")},500):e.classList.toggle("nav__list--visible"),t.classList.contains("nav__toggler--is-active")?(t.classList.toggle("nav__toggler--is-active"),t.classList.add("nav__toggler--unactive"),setTimeout(function(){t.classList.remove("nav__toggler--unactive")},500)):t.classList.toggle("nav__toggler--is-active"),e.classList.contains("nav__list--is-active")?e.classList.toggle("nav__list--is-active"):setTimeout(function(){e.classList.toggle("nav__list--is-active")},20)});var s=document.querySelector(".slider__line"),i=document.querySelector(".slider__button--prev"),n=document.querySelector(".slider__button--next"),c="first";n.addEventListener("click",function(){"second"!==c&&(s.classList.add("slider__line--switched"),c="second")}),i.addEventListener("click",function(){"first"!==c&&(s.classList.remove("slider__line--switched"),c="first")});var l=document.querySelector(".footer__button"),o=document.querySelectorAll(".footer__input");l.addEventListener("click",function(){o.forEach(function(t){t.value=""})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.43db0ccb.js.map