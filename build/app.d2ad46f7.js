parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wnSR":[function(require,module,exports) {

},{"./..\\assets\\SourceSansPro-Regular.otf":[["SourceSansPro-Regular.41e1d9b3.otf","ePvP"],"ePvP"],"./..\\assets\\HelveticaNeueBd.ttf":[["HelveticaNeueBd.a36a372a.ttf","kbOj"],"kbOj"]}],"EL9i":[function(require,module,exports) {

},{"./..\\assets\\arrow-gray-left.png":[["arrow-gray-left.4f2d57e5.png","wJFn"],"wJFn"],"./..\\assets\\arrow-blue-left.png":[["arrow-blue-left.0fd3c650.png","DBKA"],"DBKA"],"./..\\assets\\arrow-gray-right.png":[["arrow-gray-right.0f505778.png","ggxv"],"ggxv"],"./..\\assets\\arrow-blue-right.png":[["arrow-blue-right.1a100067.png","Dsyj"],"Dsyj"]}],"EFww":[function(require,module,exports) {

},{}],"ffN9":[function(require,module,exports) {
"use strict";require("./scss/styles.scss"),require("./scss/content.scss"),require("./scss/header-footer.scss");var t,i=$(".topSlider"),e=$(".bottomSlider"),r=$("#leftBtn"),n=$("#rightBtn"),s=$(".topSlider img").length,o=$(".bottomSlider img").length,c=s,d=o,a=function(t,r){i.css("transform","translateX(".concat(t,"px)")),e.css("transform","translateX(".concat(r,"px)"))},l=function(t){return $("#img-top-".concat(t)).outerWidth()},m=function(t){return $("#img-bottom-".concat(t)).outerWidth()},f=function(){$(".imageSlider div").css("transition","none"),$(".imageSlider div").css("transform","translateX(0px)"),setTimeout(function(){$(".imageSlider div").css("transition","transform 0.5s")})},u=function(){n.attr("disabled","disabled"),r.attr("disabled","disabled")};function g(){"right"===t?(i.prepend($(".topSlider img:last-child")),e.prepend($(".bottomSlider img:last-child"))):"left"===t&&(i.append($(".topSlider img:first-child")),e.append($(".bottomSlider img:first-child"))),f(),setTimeout(function(){n.removeAttr("disabled"),r.removeAttr("disabled")})}n.on("click",function(){u(),t="right";var i=l(c),e=m(d);1===c&&d>1?(c=s,--d):1===d&&c>1?(d=o,--c):1===d&&1===c?(c=s,d=o):(--c,--d),a(i,e)}),r.on("click",function(){u(),t="left",c===s&&d<o?(c=1,++d):d===o&&c<s?(d=1,++c):c===s&&d===o?(c=1,d=1):(++c,++d);var i=l(c),e=m(d);a(-i,-e)}),e.on("transitionend",g);
},{"./scss/styles.scss":"wnSR","./scss/content.scss":"EL9i","./scss/header-footer.scss":"EFww"}]},{},["ffN9"], null)
//# sourceMappingURL=app.d2ad46f7.js.map