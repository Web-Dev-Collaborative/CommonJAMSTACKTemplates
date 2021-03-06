module.exports = (() => {
  'use strict'
  var e = {
    583: (e, r) => {
      r.parse = parse
      r.serialize = serialize
      var i = decodeURIComponent
      var t = encodeURIComponent
      var a = /; */
      var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
      function parse(e, r) {
        if (typeof e !== 'string') {
          throw new TypeError('argument str must be a string')
        }
        var t = {}
        var n = r || {}
        var o = e.split(a)
        var s = n.decode || i
        for (var p = 0; p < o.length; p++) {
          var f = o[p]
          var u = f.indexOf('=')
          if (u < 0) {
            continue
          }
          var c = f.substr(0, u).trim()
          var v = f.substr(++u, f.length).trim()
          if ('"' == v[0]) {
            v = v.slice(1, -1)
          }
          if (undefined == t[c]) {
            t[c] = tryDecode(v, s)
          }
        }
        return t
      }
      function serialize(e, r, i) {
        var a = i || {}
        var o = a.encode || t
        if (typeof o !== 'function') {
          throw new TypeError('option encode is invalid')
        }
        if (!n.test(e)) {
          throw new TypeError('argument name is invalid')
        }
        var s = o(r)
        if (s && !n.test(s)) {
          throw new TypeError('argument val is invalid')
        }
        var p = e + '=' + s
        if (null != a.maxAge) {
          var f = a.maxAge - 0
          if (isNaN(f) || !isFinite(f)) {
            throw new TypeError('option maxAge is invalid')
          }
          p += '; Max-Age=' + Math.floor(f)
        }
        if (a.domain) {
          if (!n.test(a.domain)) {
            throw new TypeError('option domain is invalid')
          }
          p += '; Domain=' + a.domain
        }
        if (a.path) {
          if (!n.test(a.path)) {
            throw new TypeError('option path is invalid')
          }
          p += '; Path=' + a.path
        }
        if (a.expires) {
          if (typeof a.expires.toUTCString !== 'function') {
            throw new TypeError('option expires is invalid')
          }
          p += '; Expires=' + a.expires.toUTCString()
        }
        if (a.httpOnly) {
          p += '; HttpOnly'
        }
        if (a.secure) {
          p += '; Secure'
        }
        if (a.sameSite) {
          var u =
            typeof a.sameSite === 'string'
              ? a.sameSite.toLowerCase()
              : a.sameSite
          switch (u) {
            case true:
              p += '; SameSite=Strict'
              break
            case 'lax':
              p += '; SameSite=Lax'
              break
            case 'strict':
              p += '; SameSite=Strict'
              break
            case 'none':
              p += '; SameSite=None'
              break
            default:
              throw new TypeError('option sameSite is invalid')
          }
        }
        return p
      }
      function tryDecode(e, r) {
        try {
          return r(e)
        } catch (r) {
          return e
        }
      }
    },
  }
  var r = {}
  function __nccwpck_require__(i) {
    if (r[i]) {
      return r[i].exports
    }
    var t = (r[i] = { exports: {} })
    var a = true
    try {
      e[i](t, t.exports, __nccwpck_require__)
      a = false
    } finally {
      if (a) delete r[i]
    }
    return t.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(583)
})()
