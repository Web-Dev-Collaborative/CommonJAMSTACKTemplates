module.exports = (() => {
  var r = {
    192: (r, e, t) => {
      var s = t(622)
      r.exports = function (r, e) {
        if (e) {
          var t = e.map(function (e) {
            return s.resolve(r, e)
          })
        } else {
          var t = r
        }
        var n = t.slice(1).reduce(function (r, e) {
          if (!e.match(/^([A-Za-z]:)?\/|\\/)) {
            throw new Error('relative path without a basedir')
          }
          var t = e.split(/\/+|\\+/)
          for (
            var s = 0;
            r[s] === t[s] && s < Math.min(r.length, t.length);
            s++
          );
          return r.slice(0, s)
        }, t[0].split(/\/+|\\+/))
        return n.length > 1 ? n.join('/') : '/'
      }
    },
    293: (r, e, t) => {
      'use strict'
      const s = t(747)
      const n = t(622)
      const { promisify: o } = t(669)
      const c = t(519)
      const i = c.satisfies(process.version, '>=10.12.0')
      const a = (r) => {
        if (process.platform === 'win32') {
          const e = /[<>:"|?*]/.test(r.replace(n.parse(r).root, ''))
          if (e) {
            const e = new Error(`Path contains invalid characters: ${r}`)
            e.code = 'EINVAL'
            throw e
          }
        }
      }
      const u = (r) => {
        const e = { mode: 511 & ~process.umask(), fs: s }
        return { ...e, ...r }
      }
      const d = (r) => {
        const e = new Error(`operation not permitted, mkdir '${r}'`)
        e.code = 'EPERM'
        e.errno = -4048
        e.path = r
        e.syscall = 'mkdir'
        return e
      }
      const f = async (r, e) => {
        a(r)
        e = u(e)
        const t = o(e.fs.mkdir)
        const c = o(e.fs.stat)
        if (i && e.fs.mkdir === s.mkdir) {
          const s = n.resolve(r)
          await t(s, { mode: e.mode, recursive: true })
          return s
        }
        const f = async (r) => {
          try {
            await t(r, e.mode)
            return r
          } catch (e) {
            if (e.code === 'EPERM') {
              throw e
            }
            if (e.code === 'ENOENT') {
              if (n.dirname(r) === r) {
                throw d(r)
              }
              if (e.message.includes('null bytes')) {
                throw e
              }
              await f(n.dirname(r))
              return f(r)
            }
            try {
              const t = await c(r)
              if (!t.isDirectory()) {
                throw new Error('The path is not a directory')
              }
            } catch (r) {
              throw e
            }
            return r
          }
        }
        return f(n.resolve(r))
      }
      r.exports = f
      r.exports.sync = (r, e) => {
        a(r)
        e = u(e)
        if (i && e.fs.mkdirSync === s.mkdirSync) {
          const t = n.resolve(r)
          s.mkdirSync(t, { mode: e.mode, recursive: true })
          return t
        }
        const t = (r) => {
          try {
            e.fs.mkdirSync(r, e.mode)
          } catch (s) {
            if (s.code === 'EPERM') {
              throw s
            }
            if (s.code === 'ENOENT') {
              if (n.dirname(r) === r) {
                throw d(r)
              }
              if (s.message.includes('null bytes')) {
                throw s
              }
              t(n.dirname(r))
              return t(r)
            }
            try {
              if (!e.fs.statSync(r).isDirectory()) {
                throw new Error('The path is not a directory')
              }
            } catch (r) {
              throw s
            }
          }
          return r
        }
        return t(n.resolve(r))
      }
    },
    477: (r, e, t) => {
      'use strict'
      const s = t(622)
      const n = t(442)
      const o = async (r) => {
        const e = await n('package.json', { cwd: r })
        return e && s.dirname(e)
      }
      r.exports = o
      r.exports.default = o
      r.exports.sync = (r) => {
        const e = n.sync('package.json', { cwd: r })
        return e && s.dirname(e)
      }
    },
    281: (r, e, t) => {
      'use strict'
      const s = t(622)
      const n = t(747)
      const o = t(192)
      const c = t(477)
      const i = t(293)
      const { env: a, cwd: u } = process
      const d = (r) => {
        try {
          n.accessSync(r, n.constants.W_OK)
          return true
        } catch (r) {
          return false
        }
      }
      function useDirectory(r, e) {
        if (e.create) {
          i.sync(r)
        }
        if (e.thunk) {
          return (...e) => s.join(r, ...e)
        }
        return r
      }
      function getNodeModuleDirectory(r) {
        const e = s.join(r, 'node_modules')
        if (!d(e) && (n.existsSync(e) || !d(s.join(r)))) {
          return
        }
        return e
      }
      r.exports = (r = {}) => {
        if (a.CACHE_DIR && !['true', 'false', '1', '0'].includes(a.CACHE_DIR)) {
          return useDirectory(s.join(a.CACHE_DIR, 'find-cache-dir'), r)
        }
        let { cwd: e = u() } = r
        if (r.files) {
          e = o(e, r.files)
        }
        e = c.sync(e)
        if (!e) {
          return
        }
        const t = getNodeModuleDirectory(e)
        if (!t) {
          return undefined
        }
        return useDirectory(s.join(e, 'node_modules', '.cache', r.name), r)
      }
    },
    747: (r) => {
      'use strict'
      r.exports = require('fs')
    },
    442: (r) => {
      'use strict'
      r.exports = require('next/dist/compiled/find-up')
    },
    519: (r) => {
      'use strict'
      r.exports = require('next/dist/compiled/semver')
    },
    622: (r) => {
      'use strict'
      r.exports = require('path')
    },
    669: (r) => {
      'use strict'
      r.exports = require('util')
    },
  }
  var e = {}
  function __nccwpck_require__(t) {
    if (e[t]) {
      return e[t].exports
    }
    var s = (e[t] = { exports: {} })
    var n = true
    try {
      r[t](s, s.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete e[t]
    }
    return s.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(281)
})()
