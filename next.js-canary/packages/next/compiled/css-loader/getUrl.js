module.exports = (function () {
  'use strict'
  var e = {
    91: function (e) {
      e.exports = function (e, r) {
        if (!r) {
          r = {}
        }
        e = e && e.__esModule ? e.default : e
        if (typeof e !== 'string') {
          return e
        }
        if (/^['"].*['"]$/.test(e)) {
          e = e.slice(1, -1)
        }
        if (r.hash) {
          e += r.hash
        }
        if (/["'() \t\n]/.test(e) || r.needQuotes) {
          return '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
        }
        return e
      }
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    if (r[t]) {
      return r[t].exports
    }
    var _ = (r[t] = { exports: {} })
    var n = true
    try {
      e[t](_, _.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete r[t]
    }
    return _.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(91)
})()
