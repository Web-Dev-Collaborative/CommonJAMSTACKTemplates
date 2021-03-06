module.exports = (() => {
  'use strict'
  var r = {
    948: (r) => {
      var e = /(?:^|,)\s*?no-cache\s*?(?:,|$)/
      r.exports = fresh
      function fresh(r, a) {
        var t = r['if-modified-since']
        var s = r['if-none-match']
        if (!t && !s) {
          return false
        }
        var i = r['cache-control']
        if (i && e.test(i)) {
          return false
        }
        if (s && s !== '*') {
          var f = a['etag']
          if (!f) {
            return false
          }
          var n = true
          var u = parseTokenList(s)
          for (var o = 0; o < u.length; o++) {
            var p = u[o]
            if (p === f || p === 'W/' + f || 'W/' + p === f) {
              n = false
              break
            }
          }
          if (n) {
            return false
          }
        }
        if (t) {
          var _ = a['last-modified']
          var c = !_ || !(parseHttpDate(_) <= parseHttpDate(t))
          if (c) {
            return false
          }
        }
        return true
      }
      function parseHttpDate(r) {
        var e = r && Date.parse(r)
        return typeof e === 'number' ? e : NaN
      }
      function parseTokenList(r) {
        var e = 0
        var a = []
        var t = 0
        for (var s = 0, i = r.length; s < i; s++) {
          switch (r.charCodeAt(s)) {
            case 32:
              if (t === e) {
                t = e = s + 1
              }
              break
            case 44:
              a.push(r.substring(t, e))
              t = e = s + 1
              break
            default:
              e = s + 1
              break
          }
        }
        a.push(r.substring(t, e))
        return a
      }
    },
  }
  var e = {}
  function __nccwpck_require__(a) {
    if (e[a]) {
      return e[a].exports
    }
    var t = (e[a] = { exports: {} })
    var s = true
    try {
      r[a](t, t.exports, __nccwpck_require__)
      s = false
    } finally {
      if (s) delete e[a]
    }
    return t.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(948)
})()
