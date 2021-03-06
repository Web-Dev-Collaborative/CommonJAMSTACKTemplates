module.exports = (() => {
  'use strict'
  var r = {
    749: (r, e, t) => {
      const u = t(747)
      let n
      function hasDockerEnv() {
        try {
          u.statSync('/.dockerenv')
          return true
        } catch (r) {
          return false
        }
      }
      function hasDockerCGroup() {
        try {
          return u.readFileSync('/proc/self/cgroup', 'utf8').includes('docker')
        } catch (r) {
          return false
        }
      }
      r.exports = () => {
        if (n === undefined) {
          n = hasDockerEnv() || hasDockerCGroup()
        }
        return n
      }
    },
    747: (r) => {
      r.exports = require('fs')
    },
  }
  var e = {}
  function __nccwpck_require__(t) {
    if (e[t]) {
      return e[t].exports
    }
    var u = (e[t] = { exports: {} })
    var n = true
    try {
      r[t](u, u.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete e[t]
    }
    return u.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(749)
})()
