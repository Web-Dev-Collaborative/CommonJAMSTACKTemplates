module.exports = (() => {
  'use strict'
  var e = {
    161: (e) => {
      e.exports = ({ onlyFirst: e = false } = {}) => {
        const r = [
          '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
          '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
        ].join('|')
        return new RegExp(r, e ? undefined : 'g')
      }
    },
    301: (e, r, t) => {
      const _ = t(161)
      e.exports = (e) => (typeof e === 'string' ? e.replace(_(), '') : e)
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
  return __nccwpck_require__(301)
})()
