module.exports = (() => {
  'use strict'
  var e = {
    793: (e) => {
      function process() {
        return new Promise(function (e, r) {
          setTimeout(function () {
            r(
              new Error(
                'This "engine" is designed to fail, for testing purposes only'
              )
            )
          }, 100)
        })
      }
      e.exports = process
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    if (r[t]) {
      return r[t].exports
    }
    var _ = (r[t] = { exports: {} })
    var i = true
    try {
      e[t](_, _.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete r[t]
    }
    return _.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(793)
})()
