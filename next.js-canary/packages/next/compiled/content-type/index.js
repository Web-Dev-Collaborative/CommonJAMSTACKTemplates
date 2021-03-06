module.exports = (() => {
  'use strict'
  var e = {
    899: (e, r) => {
      var t =
        /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
      var a = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
      var n = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/
      var i = /\\([\u000b\u0020-\u00ff])/g
      var o = /([\\"])/g
      var u = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/
      r.format = format
      r.parse = parse
      function format(e) {
        if (!e || typeof e !== 'object') {
          throw new TypeError('argument obj is required')
        }
        var r = e.parameters
        var t = e.type
        if (!t || !u.test(t)) {
          throw new TypeError('invalid type')
        }
        var a = t
        if (r && typeof r === 'object') {
          var i
          var o = Object.keys(r).sort()
          for (var f = 0; f < o.length; f++) {
            i = o[f]
            if (!n.test(i)) {
              throw new TypeError('invalid parameter name')
            }
            a += '; ' + i + '=' + qstring(r[i])
          }
        }
        return a
      }
      function parse(e) {
        if (!e) {
          throw new TypeError('argument string is required')
        }
        var r = typeof e === 'object' ? getcontenttype(e) : e
        if (typeof r !== 'string') {
          throw new TypeError('argument string is required to be a string')
        }
        var a = r.indexOf(';')
        var n = a !== -1 ? r.substr(0, a).trim() : r.trim()
        if (!u.test(n)) {
          throw new TypeError('invalid media type')
        }
        var o = new ContentType(n.toLowerCase())
        if (a !== -1) {
          var f
          var p
          var s
          t.lastIndex = a
          while ((p = t.exec(r))) {
            if (p.index !== a) {
              throw new TypeError('invalid parameter format')
            }
            a += p[0].length
            f = p[1].toLowerCase()
            s = p[2]
            if (s[0] === '"') {
              s = s.substr(1, s.length - 2).replace(i, '$1')
            }
            o.parameters[f] = s
          }
          if (a !== r.length) {
            throw new TypeError('invalid parameter format')
          }
        }
        return o
      }
      function getcontenttype(e) {
        var r
        if (typeof e.getHeader === 'function') {
          r = e.getHeader('content-type')
        } else if (typeof e.headers === 'object') {
          r = e.headers && e.headers['content-type']
        }
        if (typeof r !== 'string') {
          throw new TypeError('content-type header is missing from object')
        }
        return r
      }
      function qstring(e) {
        var r = String(e)
        if (n.test(r)) {
          return r
        }
        if (r.length > 0 && !a.test(r)) {
          throw new TypeError('invalid parameter value')
        }
        return '"' + r.replace(o, '\\$1') + '"'
      }
      function ContentType(e) {
        this.parameters = Object.create(null)
        this.type = e
      }
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    if (r[t]) {
      return r[t].exports
    }
    var a = (r[t] = { exports: {} })
    var n = true
    try {
      e[t](a, a.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete r[t]
    }
    return a.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(899)
})()
