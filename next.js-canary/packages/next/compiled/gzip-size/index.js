module.exports = (() => {
  var n = {
    724: (n, i, o) => {
      var a = o(413)
      var p = ['write', 'end', 'destroy']
      var t = ['resume', 'pause']
      var f = ['data', 'close']
      var e = Array.prototype.slice
      n.exports = duplex
      function forEach(n, i) {
        if (n.forEach) {
          return n.forEach(i)
        }
        for (var o = 0; o < n.length; o++) {
          i(n[o], o)
        }
      }
      function duplex(n, i) {
        var o = new a()
        var c = false
        forEach(p, proxyWriter)
        forEach(t, proxyReader)
        forEach(f, proxyStream)
        i.on('end', handleEnd)
        n.on('drain', function () {
          o.emit('drain')
        })
        n.on('error', reemit)
        i.on('error', reemit)
        o.writable = n.writable
        o.readable = i.readable
        return o
        function proxyWriter(i) {
          o[i] = method
          function method() {
            return n[i].apply(n, arguments)
          }
        }
        function proxyReader(n) {
          o[n] = method
          function method() {
            o.emit(n)
            var a = i[n]
            if (a) {
              return a.apply(i, arguments)
            }
            i.emit(n)
          }
        }
        function proxyStream(n) {
          i.on(n, reemit)
          function reemit() {
            var i = e.call(arguments)
            i.unshift(n)
            o.emit.apply(o, i)
          }
        }
        function handleEnd() {
          if (c) {
            return
          }
          c = true
          var n = e.call(arguments)
          n.unshift('end')
          o.emit.apply(o, n)
        }
        function reemit(n) {
          o.emit('error', n)
        }
      }
    },
    656: (n, i, o) => {
      'use strict'
      const a = o(747)
      const p = o(413)
      const t = o(761)
      const f = o(724)
      const e = o(490)
      const c = (n) => Object.assign({ level: 9 }, n)
      n.exports = (n, i) => {
        if (!n) {
          return Promise.resolve(0)
        }
        return e(t.gzip)(n, c(i))
          .then((n) => n.length)
          .catch((n) => 0)
      }
      n.exports.sync = (n, i) => t.gzipSync(n, c(i)).length
      n.exports.stream = (n) => {
        const i = new p.PassThrough()
        const o = new p.PassThrough()
        const a = f(i, o)
        let e = 0
        const d = t
          .createGzip(c(n))
          .on('data', (n) => {
            e += n.length
          })
          .on('error', () => {
            a.gzipSize = 0
          })
          .on('end', () => {
            a.gzipSize = e
            a.emit('gzip-size', e)
            o.end()
          })
        i.pipe(d)
        i.pipe(o, { end: false })
        return a
      }
      n.exports.file = (i, o) => {
        return new Promise((p, t) => {
          const f = a.createReadStream(i)
          f.on('error', t)
          const e = f.pipe(n.exports.stream(o))
          e.on('error', t)
          e.on('gzip-size', p)
        })
      }
      n.exports.fileSync = (i, o) => n.exports.sync(a.readFileSync(i), o)
    },
    490: (n) => {
      'use strict'
      const i = (n, i) =>
        function (...o) {
          const a = i.promiseModule
          return new a((a, p) => {
            if (i.multiArgs) {
              o.push((...n) => {
                if (i.errorFirst) {
                  if (n[0]) {
                    p(n)
                  } else {
                    n.shift()
                    a(n)
                  }
                } else {
                  a(n)
                }
              })
            } else if (i.errorFirst) {
              o.push((n, i) => {
                if (n) {
                  p(n)
                } else {
                  a(i)
                }
              })
            } else {
              o.push(a)
            }
            n.apply(this, o)
          })
        }
      n.exports = (n, o) => {
        o = Object.assign(
          {
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: true,
            promiseModule: Promise,
          },
          o
        )
        const a = typeof n
        if (!(n !== null && (a === 'object' || a === 'function'))) {
          throw new TypeError(
            `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
              n === null ? 'null' : a
            }\``
          )
        }
        const p = (n) => {
          const i = (i) => (typeof i === 'string' ? n === i : i.test(n))
          return o.include ? o.include.some(i) : !o.exclude.some(i)
        }
        let t
        if (a === 'function') {
          t = function (...a) {
            return o.excludeMain ? n(...a) : i(n, o).apply(this, a)
          }
        } else {
          t = Object.create(Object.getPrototypeOf(n))
        }
        for (const a in n) {
          const f = n[a]
          t[a] = typeof f === 'function' && p(a) ? i(f, o) : f
        }
        return t
      }
    },
    747: (n) => {
      'use strict'
      n.exports = require('fs')
    },
    413: (n) => {
      'use strict'
      n.exports = require('stream')
    },
    761: (n) => {
      'use strict'
      n.exports = require('zlib')
    },
  }
  var i = {}
  function __nccwpck_require__(o) {
    if (i[o]) {
      return i[o].exports
    }
    var a = (i[o] = { exports: {} })
    var p = true
    try {
      n[o](a, a.exports, __nccwpck_require__)
      p = false
    } finally {
      if (p) delete i[o]
    }
    return a.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(656)
})()
