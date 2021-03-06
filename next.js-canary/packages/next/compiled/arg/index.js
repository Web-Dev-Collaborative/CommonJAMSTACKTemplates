module.exports = (() => {
  var o = {
    762: (o) => {
      const c = Symbol('arg flag')
      function arg(
        o,
        { argv: n, permissive: f = false, stopAtPositional: _ = false } = {}
      ) {
        if (!o) {
          throw new Error('Argument specification object is required')
        }
        const h = { _: [] }
        n = n || process.argv.slice(2)
        const w = {}
        const k = {}
        for (const n of Object.keys(o)) {
          if (!n) {
            throw new TypeError('Argument key cannot be an empty string')
          }
          if (n[0] !== '-') {
            throw new TypeError(
              `Argument key must start with '-' but found: '${n}'`
            )
          }
          if (n.length === 1) {
            throw new TypeError(
              `Argument key must have a name; singular '-' keys are not allowed: ${n}`
            )
          }
          if (typeof o[n] === 'string') {
            w[n] = o[n]
            continue
          }
          let f = o[n]
          let _ = false
          if (
            Array.isArray(f) &&
            f.length === 1 &&
            typeof f[0] === 'function'
          ) {
            const [o] = f
            f = (c, n, f = []) => {
              f.push(o(c, n, f[f.length - 1]))
              return f
            }
            _ = o === Boolean || o[c] === true
          } else if (typeof f === 'function') {
            _ = f === Boolean || f[c] === true
          } else {
            throw new TypeError(
              `Type missing or not a function or valid array type: ${n}`
            )
          }
          if (n[1] !== '-' && n.length > 2) {
            throw new TypeError(
              `Short argument keys (with a single hyphen) must have only one character: ${n}`
            )
          }
          k[n] = [f, _]
        }
        for (let o = 0, c = n.length; o < c; o++) {
          const c = n[o]
          if (_ && h._.length > 0) {
            h._ = h._.concat(n.slice(o))
            break
          }
          if (c === '--') {
            h._ = h._.concat(n.slice(o + 1))
            break
          }
          if (c.length > 1 && c[0] === '-') {
            const _ =
              c[1] === '-' || c.length === 2
                ? [c]
                : c
                    .slice(1)
                    .split('')
                    .map((o) => `-${o}`)
            for (let c = 0; c < _.length; c++) {
              const b = _[c]
              const [$, E] = b[1] === '-' ? b.split('=', 2) : [b, undefined]
              let T = $
              while (T in w) {
                T = w[T]
              }
              if (!(T in k)) {
                if (f) {
                  h._.push(b)
                  continue
                } else {
                  const o = new Error(`Unknown or unexpected option: ${$}`)
                  o.code = 'ARG_UNKNOWN_OPTION'
                  throw o
                }
              }
              const [q, O] = k[T]
              if (!O && c + 1 < _.length) {
                throw new TypeError(
                  `Option requires argument (but was followed by another short argument): ${$}`
                )
              }
              if (O) {
                h[T] = q(true, T, h[T])
              } else if (E === undefined) {
                if (
                  n.length < o + 2 ||
                  (n[o + 1].length > 1 && n[o + 1][0] === '-')
                ) {
                  const o = $ === T ? '' : ` (alias for ${T})`
                  throw new Error(`Option requires argument: ${$}${o}`)
                }
                h[T] = q(n[o + 1], T, h[T])
                ++o
              } else {
                h[T] = q(E, T, h[T])
              }
            }
          } else {
            h._.push(c)
          }
        }
        return h
      }
      arg.flag = (o) => {
        o[c] = true
        return o
      }
      arg.COUNT = arg.flag((o, c, n) => (n || 0) + 1)
      o.exports = arg
    },
  }
  var c = {}
  function __nccwpck_require__(n) {
    if (c[n]) {
      return c[n].exports
    }
    var f = (c[n] = { exports: {} })
    var _ = true
    try {
      o[n](f, f.exports, __nccwpck_require__)
      _ = false
    } finally {
      if (_) delete c[n]
    }
    return f.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(762)
})()
