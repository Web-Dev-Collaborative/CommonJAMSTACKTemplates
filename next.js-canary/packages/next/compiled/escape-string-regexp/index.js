module.exports = (() => {
  'use strict'
  var e = {
    813: (e) => {
      const r = /[|\\{}()[\]^$+*?.-]/g
      e.exports = (e) => {
        if (typeof e !== 'string') {
          throw new TypeError('Expected a string')
        }
        return e.replace(r, '\\$&')
      }
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    if (r[t]) {
      return r[t].exports
    }
    var _ = (r[t] = { exports: {} })
    var a = true
    try {
      e[t](_, _.exports, __nccwpck_require__)
      a = false
    } finally {
      if (a) delete r[t]
    }
    return _.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(813)
})()
