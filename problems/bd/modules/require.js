/**
 * Link: https://segmentfault.com/a/1190000017878394
 */

function wrapper(script) {
  return (
    '(function (exports, require, module, __filename, __dirname) {' +
    script +
    '\n})'
  )
}

function require(id) {
  var cachedModule = Module._cache[id]
  if (cachedModule) {
    return cachedModule.exports
  }

  const module = { exports: {} }

  // 这里先将引用加入缓存 后面循环引用会说到
  Module._cache[id] = module

  //当然不是eval这么简单
  eval(wrapper('module.exports = "123"'))(
    module.exports,
    require,
    module,
    'filename',
    'dirname',
  )

  return module.exports
}
