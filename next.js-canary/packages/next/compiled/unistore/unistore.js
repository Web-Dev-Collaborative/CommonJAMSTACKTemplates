module.exports = (() => {
  var r = {
    164: (r) => {
      function n(r, e) {
        for (var n in e) r[n] = e[n]
        return r
      }
      r.exports = function (t) {
        var i = []
        function u(r) {
          for (var e = [], n = 0; n < i.length; n++)
            i[n] === r ? (r = null) : e.push(i[n])
          i = e
        }
        function e(r, e, u) {
          t = e ? r : n(n({}, t), r)
          for (var o = i, a = 0; a < o.length; a++) o[a](t, u)
        }
        return (
          (t = t || {}),
          {
            action: function (n) {
              function r(r) {
                e(r, !1, n)
              }
              return function () {
                for (
                  var e = arguments, u = [t], i = 0;
                  i < arguments.length;
                  i++
                )
                  u.push(e[i])
                var o = n.apply(this, u)
                if (null != o) return o.then ? o.then(r) : r(o)
              }
            },
            setState: e,
            subscribe: function (r) {
              return (
                i.push(r),
                function () {
                  u(r)
                }
              )
            },
            unsubscribe: u,
            getState: function () {
              return t
            },
          }
        )
      }
    },
  }
  var e = {}
  function __nccwpck_require__(n) {
    if (e[n]) {
      return e[n].exports
    }
    var t = (e[n] = { exports: {} })
    var u = true
    try {
      r[n](t, t.exports, __nccwpck_require__)
      u = false
    } finally {
      if (u) delete e[n]
    }
    return t.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(164)
})()
