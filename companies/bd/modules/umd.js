// UMD 通用模块: AMD + CommonJS + global -> 代码同时运行在 Node 和 浏览器上
;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global.libName = factory())
})(this, function () {
  'use strict'
})
