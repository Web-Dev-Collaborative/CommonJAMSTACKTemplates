module.exports = (() => {
  var e = {
    161: (e, r, t) => {
      let l = t(417)
      let { urlAlphabet: a } = t(117)
      const n = 32
      let u, i
      let _ = (e) => {
        if (!u || u.length < e) {
          u = Buffer.allocUnsafe(e * n)
          l.randomFillSync(u)
          i = 0
        } else if (i + e > u.length) {
          l.randomFillSync(u)
          i = 0
        }
        let r = u.subarray(i, i + e)
        i += e
        return r
      }
      let h = (e, r, t) => {
        let l = (2 << (31 - Math.clz32((e.length - 1) | 1))) - 1
        let a = Math.ceil((1.6 * l * r) / e.length)
        return () => {
          let n = ''
          while (true) {
            let u = t(a)
            let i = a
            while (i--) {
              n += e[u[i] & l] || ''
              if (n.length === r) return n
            }
          }
        }
      }
      let c = (e, r) => h(e, r, _)
      let s = (e = 21) => {
        let r = _(e)
        let t = ''
        while (e--) {
          t += a[r[e] & 63]
        }
        return t
      }
      e.exports = {
        nanoid: s,
        customAlphabet: c,
        customRandom: h,
        urlAlphabet: a,
        random: _,
      }
    },
    117: (e) => {
      let r = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'
      e.exports = { urlAlphabet: r }
    },
    417: (e) => {
      'use strict'
      e.exports = require('crypto')
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    if (r[t]) {
      return r[t].exports
    }
    var l = (r[t] = { exports: {} })
    var a = true
    try {
      e[t](l, l.exports, __nccwpck_require__)
      a = false
    } finally {
      if (a) delete r[t]
    }
    return l.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(161)
})()
