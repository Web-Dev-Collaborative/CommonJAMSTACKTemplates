module.exports = (() => {
  var r = {
    401: (r) => {
      r.exports = function (r, n) {
        if (!n) n = {}
        var e = n.hsep === undefined ? '  ' : n.hsep
        var t = n.align || []
        var a =
          n.stringLength ||
          function (r) {
            return String(r).length
          }
        var u = reduce(
          r,
          function (r, n) {
            forEach(n, function (n, e) {
              var t = dotindex(n)
              if (!r[e] || t > r[e]) r[e] = t
            })
            return r
          },
          []
        )
        var o = map(r, function (r) {
          return map(r, function (r, n) {
            var e = String(r)
            if (t[n] === '.') {
              var o = dotindex(e)
              var f = u[n] + (/\./.test(e) ? 1 : 2) - (a(e) - o)
              return e + Array(f).join(' ')
            } else return e
          })
        })
        var f = reduce(
          o,
          function (r, n) {
            forEach(n, function (n, e) {
              var t = a(n)
              if (!r[e] || t > r[e]) r[e] = t
            })
            return r
          },
          []
        )
        return map(o, function (r) {
          return map(r, function (r, n) {
            var e = f[n] - a(r) || 0
            var u = Array(Math.max(e + 1, 1)).join(' ')
            if (t[n] === 'r' || t[n] === '.') {
              return u + r
            }
            if (t[n] === 'c') {
              return (
                Array(Math.ceil(e / 2 + 1)).join(' ') +
                r +
                Array(Math.floor(e / 2 + 1)).join(' ')
              )
            }
            return r + u
          })
            .join(e)
            .replace(/\s+$/, '')
        }).join('\n')
      }
      function dotindex(r) {
        var n = /\.[^.]*$/.exec(r)
        return n ? n.index + 1 : r.length
      }
      function reduce(r, n, e) {
        if (r.reduce) return r.reduce(n, e)
        var t = 0
        var a = arguments.length >= 3 ? e : r[t++]
        for (; t < r.length; t++) {
          n(a, r[t], t)
        }
        return a
      }
      function forEach(r, n) {
        if (r.forEach) return r.forEach(n)
        for (var e = 0; e < r.length; e++) {
          n.call(r, r[e], e)
        }
      }
      function map(r, n) {
        if (r.map) return r.map(n)
        var e = []
        for (var t = 0; t < r.length; t++) {
          e.push(n.call(r, r[t], t))
        }
        return e
      }
    },
  }
  var n = {}
  function __nccwpck_require__(e) {
    if (n[e]) {
      return n[e].exports
    }
    var t = (n[e] = { exports: {} })
    var a = true
    try {
      r[e](t, t.exports, __nccwpck_require__)
      a = false
    } finally {
      if (a) delete n[e]
    }
    return t.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(401)
})()
