module.exports = (() => {
  'use strict'
  var e = {
    223: (e) => {
      e.exports = function (e) {
        this.cacheable && this.cacheable()
        return ''
      }
    },
  }
  var r = {}
  function __nccwpck_require__(_) {
    if (r[_]) {
      return r[_].exports
    }
    var t = (r[_] = { exports: {} })
    var a = true
    try {
      e[_](t, t.exports, __nccwpck_require__)
      a = false
    } finally {
      if (a) delete r[_]
    }
    return t.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(223)
})()
