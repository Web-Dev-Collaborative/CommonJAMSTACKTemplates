module.exports = (() => {
  'use strict'
  var e = {
    944: (e) => {
      const t = (e, ...t) =>
        new Promise((r) => {
          r(e(...t))
        })
      e.exports = t
      e.exports.default = t
    },
    486: (e, t, r) => {
      const n = r(622)
      const s = r(447)
      const c = r(978)
      const o = Symbol('findUp.stop')
      e.exports = async (e, t = {}) => {
        let r = n.resolve(t.cwd || '')
        const { root: c } = n.parse(r)
        const i = [].concat(e)
        const a = async (t) => {
          if (typeof e !== 'function') {
            return s(i, t)
          }
          const r = await e(t.cwd)
          if (typeof r === 'string') {
            return s([r], t)
          }
          return r
        }
        while (true) {
          const e = await a({ ...t, cwd: r })
          if (e === o) {
            return
          }
          if (e) {
            return n.resolve(r, e)
          }
          if (r === c) {
            return
          }
          r = n.dirname(r)
        }
      }
      e.exports.sync = (e, t = {}) => {
        let r = n.resolve(t.cwd || '')
        const { root: c } = n.parse(r)
        const i = [].concat(e)
        const a = (t) => {
          if (typeof e !== 'function') {
            return s.sync(i, t)
          }
          const r = e(t.cwd)
          if (typeof r === 'string') {
            return s.sync([r], t)
          }
          return r
        }
        while (true) {
          const e = a({ ...t, cwd: r })
          if (e === o) {
            return
          }
          if (e) {
            return n.resolve(r, e)
          }
          if (r === c) {
            return
          }
          r = n.dirname(r)
        }
      }
      e.exports.exists = c
      e.exports.sync.exists = c.sync
      e.exports.stop = o
    },
    447: (e, t, r) => {
      const n = r(622)
      const s = r(747)
      const { promisify: c } = r(669)
      const o = r(104)
      const i = c(s.stat)
      const a = c(s.lstat)
      const u = { directory: 'isDirectory', file: 'isFile' }
      function checkType({ type: e }) {
        if (e in u) {
          return
        }
        throw new Error(`Invalid type specified: ${e}`)
      }
      const p = (e, t) => e === undefined || t[u[e]]()
      e.exports = async (e, t) => {
        t = { cwd: process.cwd(), type: 'file', allowSymlinks: true, ...t }
        checkType(t)
        const r = t.allowSymlinks ? i : a
        return o(
          e,
          async (e) => {
            try {
              const s = await r(n.resolve(t.cwd, e))
              return p(t.type, s)
            } catch (e) {
              return false
            }
          },
          t
        )
      }
      e.exports.sync = (e, t) => {
        t = { cwd: process.cwd(), allowSymlinks: true, type: 'file', ...t }
        checkType(t)
        const r = t.allowSymlinks ? s.statSync : s.lstatSync
        for (const s of e) {
          try {
            const e = r(n.resolve(t.cwd, s))
            if (p(t.type, e)) {
              return s
            }
          } catch (e) {}
        }
      }
    },
    104: (e, t, r) => {
      const n = r(707)
      class EndError extends Error {
        constructor(e) {
          super()
          this.value = e
        }
      }
      const s = async (e, t) => t(await e)
      const c = async (e) => {
        const t = await Promise.all(e)
        if (t[1] === true) {
          throw new EndError(t[0])
        }
        return false
      }
      const o = async (e, t, r) => {
        r = { concurrency: Infinity, preserveOrder: true, ...r }
        const o = n(r.concurrency)
        const i = [...e].map((e) => [e, o(s, e, t)])
        const a = n(r.preserveOrder ? 1 : Infinity)
        try {
          await Promise.all(i.map((e) => a(c, e)))
        } catch (e) {
          if (e instanceof EndError) {
            return e.value
          }
          throw e
        }
      }
      e.exports = o
      e.exports.default = o
    },
    707: (e, t, r) => {
      const n = r(944)
      const s = (e) => {
        if (!((Number.isInteger(e) || e === Infinity) && e > 0)) {
          return Promise.reject(
            new TypeError('Expected `concurrency` to be a number from 1 and up')
          )
        }
        const t = []
        let r = 0
        const s = () => {
          r--
          if (t.length > 0) {
            t.shift()()
          }
        }
        const c = (e, t, ...c) => {
          r++
          const o = n(e, ...c)
          t(o)
          o.then(s, s)
        }
        const o = (n, s, ...o) => {
          if (r < e) {
            c(n, s, ...o)
          } else {
            t.push(c.bind(null, n, s, ...o))
          }
        }
        const i = (e, ...t) => new Promise((r) => o(e, r, ...t))
        Object.defineProperties(i, {
          activeCount: { get: () => r },
          pendingCount: { get: () => t.length },
          clearQueue: {
            value: () => {
              t.length = 0
            },
          },
        })
        return i
      }
      e.exports = s
      e.exports.default = s
    },
    978: (e, t, r) => {
      const n = r(747)
      const { promisify: s } = r(669)
      const c = s(n.access)
      e.exports = async (e) => {
        try {
          await c(e)
          return true
        } catch (e) {
          return false
        }
      }
      e.exports.sync = (e) => {
        try {
          n.accessSync(e)
          return true
        } catch (e) {
          return false
        }
      }
    },
    747: (e) => {
      e.exports = require('fs')
    },
    622: (e) => {
      e.exports = require('path')
    },
    669: (e) => {
      e.exports = require('util')
    },
  }
  var t = {}
  function __nccwpck_require__(r) {
    if (t[r]) {
      return t[r].exports
    }
    var n = (t[r] = { exports: {} })
    var s = true
    try {
      e[r](n, n.exports, __nccwpck_require__)
      s = false
    } finally {
      if (s) delete t[r]
    }
    return n.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(486)
})()
