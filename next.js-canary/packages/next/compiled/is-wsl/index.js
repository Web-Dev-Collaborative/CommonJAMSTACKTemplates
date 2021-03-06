module.exports = (() => {
  'use strict'
  var e = {
    559: (e, r, t) => {
      const s = t(87)
      const o = t(747)
      const _ = t(1)
      const i = () => {
        if (process.platform !== 'linux') {
          return false
        }
        if (s.release().toLowerCase().includes('microsoft')) {
          if (_()) {
            return false
          }
          return true
        }
        try {
          return o
            .readFileSync('/proc/version', 'utf8')
            .toLowerCase()
            .includes('microsoft')
            ? !_()
            : false
        } catch (e) {
          return false
        }
      }
      if (process.env.__IS_WSL_TEST__) {
        e.exports = i
      } else {
        e.exports = i()
      }
    },
    747: (e) => {
      e.exports = require('fs')
    },
    1: (e) => {
      e.exports = require('next/dist/compiled/is-docker')
    },
    87: (e) => {
      e.exports = require('os')
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    if (r[t]) {
      return r[t].exports
    }
    var s = (r[t] = { exports: {} })
    var o = true
    try {
      e[t](s, s.exports, __nccwpck_require__)
      o = false
    } finally {
      if (o) delete r[t]
    }
    return s.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(559)
})()
