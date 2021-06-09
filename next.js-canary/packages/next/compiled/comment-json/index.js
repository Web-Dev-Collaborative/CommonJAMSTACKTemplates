module.exports = (() => {
  var t = {
    210: (t, e, i) => {
      const r = i(577)
      const { isObject: n, isArray: s } = i(334)
      const a = 'before'
      const u = 'after-prop'
      const h = 'after-colon'
      const o = 'after-value'
      const l = 'after-comma'
      const c = [a, u, h, o, l]
      const p = ':'
      const f = undefined
      const D = (t, e) => Symbol.for(t + p + e)
      const x = (t, e, i, n, s, a) => {
        const u = D(s, n)
        if (!r(e, u)) {
          return
        }
        const h = i === n ? u : D(s, i)
        t[h] = e[u]
        if (a) {
          delete e[u]
        }
      }
      const E = (t, e, i) => {
        i.forEach((i) => {
          if (!r(e, i)) {
            return
          }
          t[i] = e[i]
          c.forEach((r) => {
            x(t, e, i, i, r)
          })
        })
        return t
      }
      const m = (t, e, i) => {
        if (e === i) {
          return
        }
        c.forEach((n) => {
          const s = D(n, i)
          if (!r(t, s)) {
            x(t, t, i, e, n)
            return
          }
          const a = t[s]
          x(t, t, i, e, n)
          t[D(n, e)] = a
        })
      }
      const v = (t) => {
        const { length: e } = t
        let i = 0
        const r = e / 2
        for (; i < r; i++) {
          m(t, i, e - i - 1)
        }
      }
      const C = (t, e, i, r, n) => {
        c.forEach((s) => {
          x(t, e, i + r, i, s, n)
        })
      }
      const S = (t, e, i, r, n, s) => {
        if (n > 0) {
          let a = r
          while (a-- > 0) {
            C(t, e, i + a, n, s && a < n)
          }
          return
        }
        let a = 0
        const u = r + n
        while (a < r) {
          const r = a++
          C(t, e, i + r, n, s && a >= u)
        }
      }
      class CommentArray extends Array {
        splice(...t) {
          const { length: e } = this
          const i = super.splice(...t)
          let [r, n, ...s] = t
          if (r < 0) {
            r += e
          }
          if (arguments.length === 1) {
            n = e - r
          } else {
            n = Math.min(e - r, n)
          }
          const { length: a } = s
          const u = a - n
          const h = r + n
          const o = e - h
          S(this, this, h, o, u, true)
          return i
        }
        slice(...t) {
          const { length: e } = this
          const i = super.slice(...t)
          if (!i.length) {
            return new CommentArray()
          }
          let [r, n] = t
          if (n === f) {
            n = e
          } else if (n < 0) {
            n += e
          }
          if (r < 0) {
            r += e
          } else if (r === f) {
            r = 0
          }
          S(i, this, r, n - r, -r)
          return i
        }
        unshift(...t) {
          const { length: e } = this
          const i = super.unshift(...t)
          const { length: r } = t
          if (r > 0) {
            S(this, this, 0, e, r, true)
          }
          return i
        }
        shift() {
          const t = super.shift()
          const { length: e } = this
          S(this, this, 1, e, -1, true)
          return t
        }
        reverse() {
          super.reverse()
          v(this)
          return this
        }
        pop() {
          const t = super.pop()
          const { length: e } = this
          c.forEach((t) => {
            const i = D(t, e)
            delete this[i]
          })
          return t
        }
        concat(...t) {
          let { length: e } = this
          const i = super.concat(...t)
          if (!t.length) {
            return i
          }
          t.forEach((t) => {
            const r = e
            e += s(t) ? t.length : 1
            if (!(t instanceof CommentArray)) {
              return
            }
            S(i, t, 0, t.length, r)
          })
          return i
        }
      }
      t.exports = {
        CommentArray: CommentArray,
        assign(t, e, i) {
          if (!n(t)) {
            throw new TypeError('Cannot convert undefined or null to object')
          }
          if (!n(e)) {
            return t
          }
          if (i === f) {
            i = Object.keys(e)
          } else if (!s(i)) {
            throw new TypeError('keys must be array or undefined')
          }
          return E(t, e, i)
        },
        PREFIX_BEFORE: a,
        PREFIX_AFTER_PROP: u,
        PREFIX_AFTER_COLON: h,
        PREFIX_AFTER_VALUE: o,
        PREFIX_AFTER_COMMA: l,
        COLON: p,
        UNDEFINED: f,
      }
    },
    20: (t, e, i) => {
      const { parse: r, tokenize: n } = i(762)
      const s = i(703)
      const { CommentArray: a, assign: u } = i(210)
      t.exports = {
        parse: r,
        stringify: s,
        tokenize: n,
        CommentArray: a,
        assign: u,
      }
    },
    762: (t, e, i) => {
      const r = i(609)
      const {
        CommentArray: n,
        PREFIX_BEFORE: s,
        PREFIX_AFTER_PROP: a,
        PREFIX_AFTER_COLON: u,
        PREFIX_AFTER_VALUE: h,
        PREFIX_AFTER_COMMA: o,
        COLON: l,
        UNDEFINED: c,
      } = i(210)
      const p = (t) => r.tokenize(t, { comment: true, loc: true })
      const f = []
      let D = null
      let x = null
      const E = []
      let m
      let v = false
      let C = false
      let S = null
      let d = null
      let y = null
      let A
      let F = null
      const w = () => {
        E.length = f.length = 0
        d = null
        m = c
      }
      const b = () => {
        w()
        S.length = 0
        x = D = S = d = y = F = null
      }
      const B = 'before-all'
      const g = 'after'
      const P = 'after-all'
      const T = '['
      const I = ']'
      const M = '{'
      const X = '}'
      const J = ','
      const k = ''
      const N = '-'
      const L = (t) => Symbol.for(m !== c ? `${t}:${m}` : t)
      const O = (t, e) => (F ? F(t, e) : e)
      const U = () => {
        const t = new SyntaxError(`Unexpected token ${y.value.slice(0, 1)}`)
        Object.assign(t, y.loc.start)
        throw t
      }
      const R = () => {
        const t = new SyntaxError('Unexpected end of JSON input')
        Object.assign(t, d ? d.loc.end : { line: 1, column: 0 })
        throw t
      }
      const z = () => {
        const t = S[++A]
        C = (y && t && y.loc.end.line === t.loc.start.line) || false
        d = y
        y = t
      }
      const K = () => {
        if (!y) {
          R()
        }
        return y.type === 'Punctuator' ? y.value : y.type
      }
      const j = (t) => K() === t
      const H = (t) => {
        if (!j(t)) {
          U()
        }
      }
      const W = (t) => {
        f.push(D)
        D = t
      }
      const V = () => {
        D = f.pop()
      }
      const G = () => {
        if (!x) {
          return
        }
        const t = []
        for (const e of x) {
          if (e.inline) {
            t.push(e)
          } else {
            break
          }
        }
        const { length: e } = t
        if (!e) {
          return
        }
        if (e === x.length) {
          x = null
        } else {
          x.splice(0, e)
        }
        D[L(o)] = t
      }
      const Y = (t) => {
        if (!x) {
          return
        }
        D[L(t)] = x
        x = null
      }
      const q = (t) => {
        const e = []
        while (y && (j('LineComment') || j('BlockComment'))) {
          const t = { ...y, inline: C }
          e.push(t)
          z()
        }
        if (v) {
          return
        }
        if (!e.length) {
          return
        }
        if (t) {
          D[L(t)] = e
          return
        }
        x = e
      }
      const $ = (t, e) => {
        if (e) {
          E.push(m)
        }
        m = t
      }
      const Q = () => {
        m = E.pop()
      }
      const Z = () => {
        const t = {}
        W(t)
        $(c, true)
        let e = false
        let i
        q()
        while (!j(X)) {
          if (e) {
            H(J)
            z()
            q()
            G()
            if (j(X)) {
              break
            }
          }
          e = true
          H('String')
          i = JSON.parse(y.value)
          $(i)
          Y(s)
          z()
          q(a)
          H(l)
          z()
          q(u)
          t[i] = O(i, walk())
          q(h)
        }
        z()
        m = undefined
        Y(e ? g : s)
        V()
        Q()
        return t
      }
      const _ = () => {
        const t = new n()
        W(t)
        $(c, true)
        let e = false
        let i = 0
        q()
        while (!j(I)) {
          if (e) {
            H(J)
            z()
            q()
            G()
            if (j(I)) {
              break
            }
          }
          e = true
          $(i)
          Y(s)
          t[i] = O(i, walk())
          q(h)
          i++
        }
        z()
        m = undefined
        Y(e ? g : s)
        V()
        Q()
        return t
      }
      function walk() {
        let t = K()
        if (t === M) {
          z()
          return Z()
        }
        if (t === T) {
          z()
          return _()
        }
        let e = k
        if (t === N) {
          z()
          t = K()
          e = N
        }
        let i
        switch (t) {
          case 'String':
          case 'Boolean':
          case 'Null':
          case 'Numeric':
            i = y.value
            z()
            return JSON.parse(e + i)
          default:
        }
      }
      const tt = (t) => Object(t) === t
      const et = (t, e, i) => {
        w()
        S = p(t)
        F = e
        v = i
        if (!S.length) {
          R()
        }
        A = -1
        z()
        W({})
        q(B)
        let r = walk()
        q(P)
        if (y) {
          U()
        }
        if (!i && r !== null) {
          if (!tt(r)) {
            r = new Object(r)
          }
          Object.assign(r, D)
        }
        V()
        r = O('', r)
        b()
        return r
      }
      t.exports = {
        parse: et,
        tokenize: p,
        PREFIX_BEFORE: s,
        PREFIX_BEFORE_ALL: B,
        PREFIX_AFTER_PROP: a,
        PREFIX_AFTER_COLON: u,
        PREFIX_AFTER_VALUE: h,
        PREFIX_AFTER_COMMA: o,
        PREFIX_AFTER: g,
        PREFIX_AFTER_ALL: P,
        BRACKET_OPEN: T,
        BRACKET_CLOSE: I,
        CURLY_BRACKET_OPEN: M,
        CURLY_BRACKET_CLOSE: X,
        COLON: l,
        COMMA: J,
        EMPTY: k,
        UNDEFINED: c,
      }
    },
    703: (t, e, i) => {
      const {
        isArray: r,
        isObject: n,
        isFunction: s,
        isNumber: a,
        isString: u,
      } = i(334)
      const h = i(332)
      const {
        PREFIX_BEFORE_ALL: o,
        PREFIX_BEFORE: l,
        PREFIX_AFTER_PROP: c,
        PREFIX_AFTER_COLON: p,
        PREFIX_AFTER_VALUE: f,
        PREFIX_AFTER_COMMA: D,
        PREFIX_AFTER: x,
        PREFIX_AFTER_ALL: E,
        BRACKET_OPEN: m,
        BRACKET_CLOSE: v,
        CURLY_BRACKET_OPEN: C,
        CURLY_BRACKET_CLOSE: S,
        COLON: d,
        COMMA: y,
        EMPTY: A,
        UNDEFINED: F,
      } = i(762)
      const w =
        /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
      const b = ' '
      const B = '\n'
      const g = 'null'
      const P = (t) => `${l}:${t}`
      const T = (t) => `${c}:${t}`
      const I = (t) => `${p}:${t}`
      const M = (t) => `${f}:${t}`
      const X = (t) => `${D}:${t}`
      const J = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\',
      }
      const k = (t) => {
        w.lastIndex = 0
        if (!w.test(t)) {
          return t
        }
        return t.replace(w, (t) => {
          const e = J[t]
          return typeof e === 'string' ? e : t
        })
      }
      const N = (t) => `"${k(t)}"`
      const L = (t, e) => (e ? `//${t}` : `/*${t}*/`)
      const O = (t, e, i, r) => {
        const n = t[Symbol.for(e)]
        if (!n || !n.length) {
          return A
        }
        let s = false
        const a = n.reduce((t, { inline: e, type: r, value: n }) => {
          const a = e ? b : B + i
          s = r === 'LineComment'
          return t + a + L(n, s)
        }, A)
        return r || s ? a + B + i : a
      }
      let U = null
      let R = A
      const z = () => {
        U = null
        R = A
      }
      const K = (t, e, i) =>
        t
          ? e
            ? t + e.trim() + B + i
            : t.trimRight() + B + i
          : e
          ? e.trimRight() + B + i
          : A
      const j = (t, e, i) => {
        const r = O(e, l, i + R, true)
        return K(r, t, i)
      }
      const H = (t, e) => {
        const i = e + R
        const { length: r } = t
        let n = A
        let s = A
        for (let e = 0; e < r; e++) {
          if (e !== 0) {
            n += y
          }
          const r = K(s, O(t, P(e), i), i)
          n += r || B + i
          n += stringify(e, t, i) || g
          n += O(t, M(e), i)
          s = O(t, X(e), i)
        }
        n += K(s, O(t, x, i), i)
        return m + j(n, t, e) + v
      }
      const W = (t, e) => {
        if (!t) {
          return 'null'
        }
        const i = e + R
        let n = A
        let s = A
        let a = true
        const u = r(U) ? U : Object.keys(t)
        const h = (e) => {
          const r = stringify(e, t, i)
          if (r === F) {
            return
          }
          if (!a) {
            n += y
          }
          a = false
          const u = K(s, O(t, P(e), i), i)
          n += u || B + i
          n += N(e) + O(t, T(e), i) + d + O(t, I(e), i) + b + r + O(t, M(e), i)
          s = O(t, X(e), i)
        }
        u.forEach(h)
        n += K(s, O(t, x, i), i)
        return C + j(n, t, e) + S
      }
      function stringify(t, e, i) {
        let a = e[t]
        if (n(a) && s(a.toJSON)) {
          a = a.toJSON(t)
        }
        if (s(U)) {
          a = U.call(e, t, a)
        }
        switch (typeof a) {
          case 'string':
            return N(a)
          case 'number':
            return Number.isFinite(a) ? String(a) : g
          case 'boolean':
          case 'null':
            return String(a)
          case 'object':
            return r(a) ? H(a, i) : W(a, i)
          default:
        }
      }
      const V = (t) => (u(t) ? t : a(t) ? h(b, t) : A)
      const { toString: G } = Object.prototype
      const Y = ['[object Number]', '[object String]', '[object Boolean]']
      const q = (t) => {
        if (typeof t !== 'object') {
          return false
        }
        const e = G.call(t)
        return Y.includes(e)
      }
      t.exports = (t, e, i) => {
        const a = V(i)
        if (!a) {
          return JSON.stringify(t, e)
        }
        if (!s(e) && !r(e)) {
          e = null
        }
        U = e
        R = a
        const u = q(t) ? JSON.stringify(t) : stringify('', { '': t }, A)
        z()
        return n(t) ? O(t, o, A).trimLeft() + u + O(t, E, A).trimRight() : u
      }
    },
    334: (t, e) => {
      function isArray(t) {
        if (Array.isArray) {
          return Array.isArray(t)
        }
        return objectToString(t) === '[object Array]'
      }
      e.isArray = isArray
      function isBoolean(t) {
        return typeof t === 'boolean'
      }
      e.isBoolean = isBoolean
      function isNull(t) {
        return t === null
      }
      e.isNull = isNull
      function isNullOrUndefined(t) {
        return t == null
      }
      e.isNullOrUndefined = isNullOrUndefined
      function isNumber(t) {
        return typeof t === 'number'
      }
      e.isNumber = isNumber
      function isString(t) {
        return typeof t === 'string'
      }
      e.isString = isString
      function isSymbol(t) {
        return typeof t === 'symbol'
      }
      e.isSymbol = isSymbol
      function isUndefined(t) {
        return t === void 0
      }
      e.isUndefined = isUndefined
      function isRegExp(t) {
        return objectToString(t) === '[object RegExp]'
      }
      e.isRegExp = isRegExp
      function isObject(t) {
        return typeof t === 'object' && t !== null
      }
      e.isObject = isObject
      function isDate(t) {
        return objectToString(t) === '[object Date]'
      }
      e.isDate = isDate
      function isError(t) {
        return objectToString(t) === '[object Error]' || t instanceof Error
      }
      e.isError = isError
      function isFunction(t) {
        return typeof t === 'function'
      }
      e.isFunction = isFunction
      function isPrimitive(t) {
        return (
          t === null ||
          typeof t === 'boolean' ||
          typeof t === 'number' ||
          typeof t === 'string' ||
          typeof t === 'symbol' ||
          typeof t === 'undefined'
        )
      }
      e.isPrimitive = isPrimitive
      e.isBuffer = Buffer.isBuffer
      function objectToString(t) {
        return Object.prototype.toString.call(t)
      }
    },
    609: function (t) {
      ;(function webpackUniversalModuleDefinition(e, i) {
        if (true) t.exports = i()
        else {
        }
      })(this, function () {
        return (function (t) {
          var e = {}
          function __nested_webpack_require_583__(i) {
            if (e[i]) return e[i].exports
            var r = (e[i] = { exports: {}, id: i, loaded: false })
            t[i].call(r.exports, r, r.exports, __nested_webpack_require_583__)
            r.loaded = true
            return r.exports
          }
          __nested_webpack_require_583__.m = t
          __nested_webpack_require_583__.c = e
          __nested_webpack_require_583__.p = ''
          return __nested_webpack_require_583__(0)
        })([
          function (t, e, i) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var r = i(1)
            var n = i(3)
            var s = i(8)
            var a = i(15)
            function parse(t, e, i) {
              var a = null
              var u = function (t, e) {
                if (i) {
                  i(t, e)
                }
                if (a) {
                  a.visit(t, e)
                }
              }
              var h = typeof i === 'function' ? u : null
              var o = false
              if (e) {
                o = typeof e.comment === 'boolean' && e.comment
                var l = typeof e.attachComment === 'boolean' && e.attachComment
                if (o || l) {
                  a = new r.CommentHandler()
                  a.attach = l
                  e.comment = true
                  h = u
                }
              }
              var c = false
              if (e && typeof e.sourceType === 'string') {
                c = e.sourceType === 'module'
              }
              var p
              if (e && typeof e.jsx === 'boolean' && e.jsx) {
                p = new n.JSXParser(t, e, h)
              } else {
                p = new s.Parser(t, e, h)
              }
              var f = c ? p.parseModule() : p.parseScript()
              var D = f
              if (o && a) {
                D.comments = a.comments
              }
              if (p.config.tokens) {
                D.tokens = p.tokens
              }
              if (p.config.tolerant) {
                D.errors = p.errorHandler.errors
              }
              return D
            }
            e.parse = parse
            function parseModule(t, e, i) {
              var r = e || {}
              r.sourceType = 'module'
              return parse(t, r, i)
            }
            e.parseModule = parseModule
            function parseScript(t, e, i) {
              var r = e || {}
              r.sourceType = 'script'
              return parse(t, r, i)
            }
            e.parseScript = parseScript
            function tokenize(t, e, i) {
              var r = new a.Tokenizer(t, e)
              var n
              n = []
              try {
                while (true) {
                  var s = r.getNextToken()
                  if (!s) {
                    break
                  }
                  if (i) {
                    s = i(s)
                  }
                  n.push(s)
                }
              } catch (t) {
                r.errorHandler.tolerate(t)
              }
              if (r.errorHandler.tolerant) {
                n.errors = r.errors()
              }
              return n
            }
            e.tokenize = tokenize
            var u = i(2)
            e.Syntax = u.Syntax
            e.version = '4.0.1'
          },
          function (t, e, i) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var r = i(2)
            var n = (function () {
              function CommentHandler() {
                this.attach = false
                this.comments = []
                this.stack = []
                this.leading = []
                this.trailing = []
              }
              CommentHandler.prototype.insertInnerComments = function (t, e) {
                if (t.type === r.Syntax.BlockStatement && t.body.length === 0) {
                  var i = []
                  for (var n = this.leading.length - 1; n >= 0; --n) {
                    var s = this.leading[n]
                    if (e.end.offset >= s.start) {
                      i.unshift(s.comment)
                      this.leading.splice(n, 1)
                      this.trailing.splice(n, 1)
                    }
                  }
                  if (i.length) {
                    t.innerComments = i
                  }
                }
              }
              CommentHandler.prototype.findTrailingComments = function (t) {
                var e = []
                if (this.trailing.length > 0) {
                  for (var i = this.trailing.length - 1; i >= 0; --i) {
                    var r = this.trailing[i]
                    if (r.start >= t.end.offset) {
                      e.unshift(r.comment)
                    }
                  }
                  this.trailing.length = 0
                  return e
                }
                var n = this.stack[this.stack.length - 1]
                if (n && n.node.trailingComments) {
                  var s = n.node.trailingComments[0]
                  if (s && s.range[0] >= t.end.offset) {
                    e = n.node.trailingComments
                    delete n.node.trailingComments
                  }
                }
                return e
              }
              CommentHandler.prototype.findLeadingComments = function (t) {
                var e = []
                var i
                while (this.stack.length > 0) {
                  var r = this.stack[this.stack.length - 1]
                  if (r && r.start >= t.start.offset) {
                    i = r.node
                    this.stack.pop()
                  } else {
                    break
                  }
                }
                if (i) {
                  var n = i.leadingComments ? i.leadingComments.length : 0
                  for (var s = n - 1; s >= 0; --s) {
                    var a = i.leadingComments[s]
                    if (a.range[1] <= t.start.offset) {
                      e.unshift(a)
                      i.leadingComments.splice(s, 1)
                    }
                  }
                  if (i.leadingComments && i.leadingComments.length === 0) {
                    delete i.leadingComments
                  }
                  return e
                }
                for (var s = this.leading.length - 1; s >= 0; --s) {
                  var r = this.leading[s]
                  if (r.start <= t.start.offset) {
                    e.unshift(r.comment)
                    this.leading.splice(s, 1)
                  }
                }
                return e
              }
              CommentHandler.prototype.visitNode = function (t, e) {
                if (t.type === r.Syntax.Program && t.body.length > 0) {
                  return
                }
                this.insertInnerComments(t, e)
                var i = this.findTrailingComments(e)
                var n = this.findLeadingComments(e)
                if (n.length > 0) {
                  t.leadingComments = n
                }
                if (i.length > 0) {
                  t.trailingComments = i
                }
                this.stack.push({ node: t, start: e.start.offset })
              }
              CommentHandler.prototype.visitComment = function (t, e) {
                var i = t.type[0] === 'L' ? 'Line' : 'Block'
                var r = { type: i, value: t.value }
                if (t.range) {
                  r.range = t.range
                }
                if (t.loc) {
                  r.loc = t.loc
                }
                this.comments.push(r)
                if (this.attach) {
                  var n = {
                    comment: {
                      type: i,
                      value: t.value,
                      range: [e.start.offset, e.end.offset],
                    },
                    start: e.start.offset,
                  }
                  if (t.loc) {
                    n.comment.loc = t.loc
                  }
                  t.type = i
                  this.leading.push(n)
                  this.trailing.push(n)
                }
              }
              CommentHandler.prototype.visit = function (t, e) {
                if (t.type === 'LineComment') {
                  this.visitComment(t, e)
                } else if (t.type === 'BlockComment') {
                  this.visitComment(t, e)
                } else if (this.attach) {
                  this.visitNode(t, e)
                }
              }
              return CommentHandler
            })()
            e.CommentHandler = n
          },
          function (t, e) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            e.Syntax = {
              AssignmentExpression: 'AssignmentExpression',
              AssignmentPattern: 'AssignmentPattern',
              ArrayExpression: 'ArrayExpression',
              ArrayPattern: 'ArrayPattern',
              ArrowFunctionExpression: 'ArrowFunctionExpression',
              AwaitExpression: 'AwaitExpression',
              BlockStatement: 'BlockStatement',
              BinaryExpression: 'BinaryExpression',
              BreakStatement: 'BreakStatement',
              CallExpression: 'CallExpression',
              CatchClause: 'CatchClause',
              ClassBody: 'ClassBody',
              ClassDeclaration: 'ClassDeclaration',
              ClassExpression: 'ClassExpression',
              ConditionalExpression: 'ConditionalExpression',
              ContinueStatement: 'ContinueStatement',
              DoWhileStatement: 'DoWhileStatement',
              DebuggerStatement: 'DebuggerStatement',
              EmptyStatement: 'EmptyStatement',
              ExportAllDeclaration: 'ExportAllDeclaration',
              ExportDefaultDeclaration: 'ExportDefaultDeclaration',
              ExportNamedDeclaration: 'ExportNamedDeclaration',
              ExportSpecifier: 'ExportSpecifier',
              ExpressionStatement: 'ExpressionStatement',
              ForStatement: 'ForStatement',
              ForOfStatement: 'ForOfStatement',
              ForInStatement: 'ForInStatement',
              FunctionDeclaration: 'FunctionDeclaration',
              FunctionExpression: 'FunctionExpression',
              Identifier: 'Identifier',
              IfStatement: 'IfStatement',
              ImportDeclaration: 'ImportDeclaration',
              ImportDefaultSpecifier: 'ImportDefaultSpecifier',
              ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
              ImportSpecifier: 'ImportSpecifier',
              Literal: 'Literal',
              LabeledStatement: 'LabeledStatement',
              LogicalExpression: 'LogicalExpression',
              MemberExpression: 'MemberExpression',
              MetaProperty: 'MetaProperty',
              MethodDefinition: 'MethodDefinition',
              NewExpression: 'NewExpression',
              ObjectExpression: 'ObjectExpression',
              ObjectPattern: 'ObjectPattern',
              Program: 'Program',
              Property: 'Property',
              RestElement: 'RestElement',
              ReturnStatement: 'ReturnStatement',
              SequenceExpression: 'SequenceExpression',
              SpreadElement: 'SpreadElement',
              Super: 'Super',
              SwitchCase: 'SwitchCase',
              SwitchStatement: 'SwitchStatement',
              TaggedTemplateExpression: 'TaggedTemplateExpression',
              TemplateElement: 'TemplateElement',
              TemplateLiteral: 'TemplateLiteral',
              ThisExpression: 'ThisExpression',
              ThrowStatement: 'ThrowStatement',
              TryStatement: 'TryStatement',
              UnaryExpression: 'UnaryExpression',
              UpdateExpression: 'UpdateExpression',
              VariableDeclaration: 'VariableDeclaration',
              VariableDeclarator: 'VariableDeclarator',
              WhileStatement: 'WhileStatement',
              WithStatement: 'WithStatement',
              YieldExpression: 'YieldExpression',
            }
          },
          function (t, e, i) {
            'use strict'
            var r =
              (this && this.__extends) ||
              (function () {
                var t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e
                    }) ||
                  function (t, e) {
                    for (var i in e) if (e.hasOwnProperty(i)) t[i] = e[i]
                  }
                return function (e, i) {
                  t(e, i)
                  function __() {
                    this.constructor = e
                  }
                  e.prototype =
                    i === null
                      ? Object.create(i)
                      : ((__.prototype = i.prototype), new __())
                }
              })()
            Object.defineProperty(e, '__esModule', { value: true })
            var n = i(4)
            var s = i(5)
            var a = i(6)
            var u = i(7)
            var h = i(8)
            var o = i(13)
            var l = i(14)
            o.TokenName[100] = 'JSXIdentifier'
            o.TokenName[101] = 'JSXText'
            function getQualifiedElementName(t) {
              var e
              switch (t.type) {
                case a.JSXSyntax.JSXIdentifier:
                  var i = t
                  e = i.name
                  break
                case a.JSXSyntax.JSXNamespacedName:
                  var r = t
                  e =
                    getQualifiedElementName(r.namespace) +
                    ':' +
                    getQualifiedElementName(r.name)
                  break
                case a.JSXSyntax.JSXMemberExpression:
                  var n = t
                  e =
                    getQualifiedElementName(n.object) +
                    '.' +
                    getQualifiedElementName(n.property)
                  break
                default:
                  break
              }
              return e
            }
            var c = (function (t) {
              r(JSXParser, t)
              function JSXParser(e, i, r) {
                return t.call(this, e, i, r) || this
              }
              JSXParser.prototype.parsePrimaryExpression = function () {
                return this.match('<')
                  ? this.parseJSXRoot()
                  : t.prototype.parsePrimaryExpression.call(this)
              }
              JSXParser.prototype.startJSX = function () {
                this.scanner.index = this.startMarker.index
                this.scanner.lineNumber = this.startMarker.line
                this.scanner.lineStart =
                  this.startMarker.index - this.startMarker.column
              }
              JSXParser.prototype.finishJSX = function () {
                this.nextToken()
              }
              JSXParser.prototype.reenterJSX = function () {
                this.startJSX()
                this.expectJSX('}')
                if (this.config.tokens) {
                  this.tokens.pop()
                }
              }
              JSXParser.prototype.createJSXNode = function () {
                this.collectComments()
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart,
                }
              }
              JSXParser.prototype.createJSXChildNode = function () {
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart,
                }
              }
              JSXParser.prototype.scanXHTMLEntity = function (t) {
                var e = '&'
                var i = true
                var r = false
                var s = false
                var a = false
                while (!this.scanner.eof() && i && !r) {
                  var u = this.scanner.source[this.scanner.index]
                  if (u === t) {
                    break
                  }
                  r = u === ';'
                  e += u
                  ++this.scanner.index
                  if (!r) {
                    switch (e.length) {
                      case 2:
                        s = u === '#'
                        break
                      case 3:
                        if (s) {
                          a = u === 'x'
                          i = a || n.Character.isDecimalDigit(u.charCodeAt(0))
                          s = s && !a
                        }
                        break
                      default:
                        i =
                          i &&
                          !(s && !n.Character.isDecimalDigit(u.charCodeAt(0)))
                        i =
                          i && !(a && !n.Character.isHexDigit(u.charCodeAt(0)))
                        break
                    }
                  }
                }
                if (i && r && e.length > 2) {
                  var h = e.substr(1, e.length - 2)
                  if (s && h.length > 1) {
                    e = String.fromCharCode(parseInt(h.substr(1), 10))
                  } else if (a && h.length > 2) {
                    e = String.fromCharCode(parseInt('0' + h.substr(1), 16))
                  } else if (!s && !a && l.XHTMLEntities[h]) {
                    e = l.XHTMLEntities[h]
                  }
                }
                return e
              }
              JSXParser.prototype.lexJSX = function () {
                var t = this.scanner.source.charCodeAt(this.scanner.index)
                if (
                  t === 60 ||
                  t === 62 ||
                  t === 47 ||
                  t === 58 ||
                  t === 61 ||
                  t === 123 ||
                  t === 125
                ) {
                  var e = this.scanner.source[this.scanner.index++]
                  return {
                    type: 7,
                    value: e,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index - 1,
                    end: this.scanner.index,
                  }
                }
                if (t === 34 || t === 39) {
                  var i = this.scanner.index
                  var r = this.scanner.source[this.scanner.index++]
                  var s = ''
                  while (!this.scanner.eof()) {
                    var a = this.scanner.source[this.scanner.index++]
                    if (a === r) {
                      break
                    } else if (a === '&') {
                      s += this.scanXHTMLEntity(r)
                    } else {
                      s += a
                    }
                  }
                  return {
                    type: 8,
                    value: s,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: i,
                    end: this.scanner.index,
                  }
                }
                if (t === 46) {
                  var u = this.scanner.source.charCodeAt(this.scanner.index + 1)
                  var h = this.scanner.source.charCodeAt(this.scanner.index + 2)
                  var e = u === 46 && h === 46 ? '...' : '.'
                  var i = this.scanner.index
                  this.scanner.index += e.length
                  return {
                    type: 7,
                    value: e,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: i,
                    end: this.scanner.index,
                  }
                }
                if (t === 96) {
                  return {
                    type: 10,
                    value: '',
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index,
                    end: this.scanner.index,
                  }
                }
                if (n.Character.isIdentifierStart(t) && t !== 92) {
                  var i = this.scanner.index
                  ++this.scanner.index
                  while (!this.scanner.eof()) {
                    var a = this.scanner.source.charCodeAt(this.scanner.index)
                    if (n.Character.isIdentifierPart(a) && a !== 92) {
                      ++this.scanner.index
                    } else if (a === 45) {
                      ++this.scanner.index
                    } else {
                      break
                    }
                  }
                  var o = this.scanner.source.slice(i, this.scanner.index)
                  return {
                    type: 100,
                    value: o,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: i,
                    end: this.scanner.index,
                  }
                }
                return this.scanner.lex()
              }
              JSXParser.prototype.nextJSXToken = function () {
                this.collectComments()
                this.startMarker.index = this.scanner.index
                this.startMarker.line = this.scanner.lineNumber
                this.startMarker.column =
                  this.scanner.index - this.scanner.lineStart
                var t = this.lexJSX()
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                if (this.config.tokens) {
                  this.tokens.push(this.convertToken(t))
                }
                return t
              }
              JSXParser.prototype.nextJSXText = function () {
                this.startMarker.index = this.scanner.index
                this.startMarker.line = this.scanner.lineNumber
                this.startMarker.column =
                  this.scanner.index - this.scanner.lineStart
                var t = this.scanner.index
                var e = ''
                while (!this.scanner.eof()) {
                  var i = this.scanner.source[this.scanner.index]
                  if (i === '{' || i === '<') {
                    break
                  }
                  ++this.scanner.index
                  e += i
                  if (n.Character.isLineTerminator(i.charCodeAt(0))) {
                    ++this.scanner.lineNumber
                    if (
                      i === '\r' &&
                      this.scanner.source[this.scanner.index] === '\n'
                    ) {
                      ++this.scanner.index
                    }
                    this.scanner.lineStart = this.scanner.index
                  }
                }
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                var r = {
                  type: 101,
                  value: e,
                  lineNumber: this.scanner.lineNumber,
                  lineStart: this.scanner.lineStart,
                  start: t,
                  end: this.scanner.index,
                }
                if (e.length > 0 && this.config.tokens) {
                  this.tokens.push(this.convertToken(r))
                }
                return r
              }
              JSXParser.prototype.peekJSXToken = function () {
                var t = this.scanner.saveState()
                this.scanner.scanComments()
                var e = this.lexJSX()
                this.scanner.restoreState(t)
                return e
              }
              JSXParser.prototype.expectJSX = function (t) {
                var e = this.nextJSXToken()
                if (e.type !== 7 || e.value !== t) {
                  this.throwUnexpectedToken(e)
                }
              }
              JSXParser.prototype.matchJSX = function (t) {
                var e = this.peekJSXToken()
                return e.type === 7 && e.value === t
              }
              JSXParser.prototype.parseJSXIdentifier = function () {
                var t = this.createJSXNode()
                var e = this.nextJSXToken()
                if (e.type !== 100) {
                  this.throwUnexpectedToken(e)
                }
                return this.finalize(t, new s.JSXIdentifier(e.value))
              }
              JSXParser.prototype.parseJSXElementName = function () {
                var t = this.createJSXNode()
                var e = this.parseJSXIdentifier()
                if (this.matchJSX(':')) {
                  var i = e
                  this.expectJSX(':')
                  var r = this.parseJSXIdentifier()
                  e = this.finalize(t, new s.JSXNamespacedName(i, r))
                } else if (this.matchJSX('.')) {
                  while (this.matchJSX('.')) {
                    var n = e
                    this.expectJSX('.')
                    var a = this.parseJSXIdentifier()
                    e = this.finalize(t, new s.JSXMemberExpression(n, a))
                  }
                }
                return e
              }
              JSXParser.prototype.parseJSXAttributeName = function () {
                var t = this.createJSXNode()
                var e
                var i = this.parseJSXIdentifier()
                if (this.matchJSX(':')) {
                  var r = i
                  this.expectJSX(':')
                  var n = this.parseJSXIdentifier()
                  e = this.finalize(t, new s.JSXNamespacedName(r, n))
                } else {
                  e = i
                }
                return e
              }
              JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
                var t = this.createJSXNode()
                var e = this.nextJSXToken()
                if (e.type !== 8) {
                  this.throwUnexpectedToken(e)
                }
                var i = this.getTokenRaw(e)
                return this.finalize(t, new u.Literal(e.value, i))
              }
              JSXParser.prototype.parseJSXExpressionAttribute = function () {
                var t = this.createJSXNode()
                this.expectJSX('{')
                this.finishJSX()
                if (this.match('}')) {
                  this.tolerateError(
                    'JSX attributes must only be assigned a non-empty expression'
                  )
                }
                var e = this.parseAssignmentExpression()
                this.reenterJSX()
                return this.finalize(t, new s.JSXExpressionContainer(e))
              }
              JSXParser.prototype.parseJSXAttributeValue = function () {
                return this.matchJSX('{')
                  ? this.parseJSXExpressionAttribute()
                  : this.matchJSX('<')
                  ? this.parseJSXElement()
                  : this.parseJSXStringLiteralAttribute()
              }
              JSXParser.prototype.parseJSXNameValueAttribute = function () {
                var t = this.createJSXNode()
                var e = this.parseJSXAttributeName()
                var i = null
                if (this.matchJSX('=')) {
                  this.expectJSX('=')
                  i = this.parseJSXAttributeValue()
                }
                return this.finalize(t, new s.JSXAttribute(e, i))
              }
              JSXParser.prototype.parseJSXSpreadAttribute = function () {
                var t = this.createJSXNode()
                this.expectJSX('{')
                this.expectJSX('...')
                this.finishJSX()
                var e = this.parseAssignmentExpression()
                this.reenterJSX()
                return this.finalize(t, new s.JSXSpreadAttribute(e))
              }
              JSXParser.prototype.parseJSXAttributes = function () {
                var t = []
                while (!this.matchJSX('/') && !this.matchJSX('>')) {
                  var e = this.matchJSX('{')
                    ? this.parseJSXSpreadAttribute()
                    : this.parseJSXNameValueAttribute()
                  t.push(e)
                }
                return t
              }
              JSXParser.prototype.parseJSXOpeningElement = function () {
                var t = this.createJSXNode()
                this.expectJSX('<')
                var e = this.parseJSXElementName()
                var i = this.parseJSXAttributes()
                var r = this.matchJSX('/')
                if (r) {
                  this.expectJSX('/')
                }
                this.expectJSX('>')
                return this.finalize(t, new s.JSXOpeningElement(e, r, i))
              }
              JSXParser.prototype.parseJSXBoundaryElement = function () {
                var t = this.createJSXNode()
                this.expectJSX('<')
                if (this.matchJSX('/')) {
                  this.expectJSX('/')
                  var e = this.parseJSXElementName()
                  this.expectJSX('>')
                  return this.finalize(t, new s.JSXClosingElement(e))
                }
                var i = this.parseJSXElementName()
                var r = this.parseJSXAttributes()
                var n = this.matchJSX('/')
                if (n) {
                  this.expectJSX('/')
                }
                this.expectJSX('>')
                return this.finalize(t, new s.JSXOpeningElement(i, n, r))
              }
              JSXParser.prototype.parseJSXEmptyExpression = function () {
                var t = this.createJSXChildNode()
                this.collectComments()
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                return this.finalize(t, new s.JSXEmptyExpression())
              }
              JSXParser.prototype.parseJSXExpressionContainer = function () {
                var t = this.createJSXNode()
                this.expectJSX('{')
                var e
                if (this.matchJSX('}')) {
                  e = this.parseJSXEmptyExpression()
                  this.expectJSX('}')
                } else {
                  this.finishJSX()
                  e = this.parseAssignmentExpression()
                  this.reenterJSX()
                }
                return this.finalize(t, new s.JSXExpressionContainer(e))
              }
              JSXParser.prototype.parseJSXChildren = function () {
                var t = []
                while (!this.scanner.eof()) {
                  var e = this.createJSXChildNode()
                  var i = this.nextJSXText()
                  if (i.start < i.end) {
                    var r = this.getTokenRaw(i)
                    var n = this.finalize(e, new s.JSXText(i.value, r))
                    t.push(n)
                  }
                  if (this.scanner.source[this.scanner.index] === '{') {
                    var a = this.parseJSXExpressionContainer()
                    t.push(a)
                  } else {
                    break
                  }
                }
                return t
              }
              JSXParser.prototype.parseComplexJSXElement = function (t) {
                var e = []
                while (!this.scanner.eof()) {
                  t.children = t.children.concat(this.parseJSXChildren())
                  var i = this.createJSXChildNode()
                  var r = this.parseJSXBoundaryElement()
                  if (r.type === a.JSXSyntax.JSXOpeningElement) {
                    var n = r
                    if (n.selfClosing) {
                      var u = this.finalize(i, new s.JSXElement(n, [], null))
                      t.children.push(u)
                    } else {
                      e.push(t)
                      t = { node: i, opening: n, closing: null, children: [] }
                    }
                  }
                  if (r.type === a.JSXSyntax.JSXClosingElement) {
                    t.closing = r
                    var h = getQualifiedElementName(t.opening.name)
                    var o = getQualifiedElementName(t.closing.name)
                    if (h !== o) {
                      this.tolerateError(
                        'Expected corresponding JSX closing tag for %0',
                        h
                      )
                    }
                    if (e.length > 0) {
                      var u = this.finalize(
                        t.node,
                        new s.JSXElement(t.opening, t.children, t.closing)
                      )
                      t = e[e.length - 1]
                      t.children.push(u)
                      e.pop()
                    } else {
                      break
                    }
                  }
                }
                return t
              }
              JSXParser.prototype.parseJSXElement = function () {
                var t = this.createJSXNode()
                var e = this.parseJSXOpeningElement()
                var i = []
                var r = null
                if (!e.selfClosing) {
                  var n = this.parseComplexJSXElement({
                    node: t,
                    opening: e,
                    closing: r,
                    children: i,
                  })
                  i = n.children
                  r = n.closing
                }
                return this.finalize(t, new s.JSXElement(e, i, r))
              }
              JSXParser.prototype.parseJSXRoot = function () {
                if (this.config.tokens) {
                  this.tokens.pop()
                }
                this.startJSX()
                var t = this.parseJSXElement()
                this.finishJSX()
                return t
              }
              JSXParser.prototype.isStartOfExpression = function () {
                return (
                  t.prototype.isStartOfExpression.call(this) || this.match('<')
                )
              }
              return JSXParser
            })(h.Parser)
            e.JSXParser = c
          },
          function (t, e) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var i = {
              NonAsciiIdentifierStart:
                /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              NonAsciiIdentifierPart:
                /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
            }
            e.Character = {
              fromCodePoint: function (t) {
                return t < 65536
                  ? String.fromCharCode(t)
                  : String.fromCharCode(55296 + ((t - 65536) >> 10)) +
                      String.fromCharCode(56320 + ((t - 65536) & 1023))
              },
              isWhiteSpace: function (t) {
                return (
                  t === 32 ||
                  t === 9 ||
                  t === 11 ||
                  t === 12 ||
                  t === 160 ||
                  (t >= 5760 &&
                    [
                      5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199,
                      8200, 8201, 8202, 8239, 8287, 12288, 65279,
                    ].indexOf(t) >= 0)
                )
              },
              isLineTerminator: function (t) {
                return t === 10 || t === 13 || t === 8232 || t === 8233
              },
              isIdentifierStart: function (t) {
                return (
                  t === 36 ||
                  t === 95 ||
                  (t >= 65 && t <= 90) ||
                  (t >= 97 && t <= 122) ||
                  t === 92 ||
                  (t >= 128 &&
                    i.NonAsciiIdentifierStart.test(
                      e.Character.fromCodePoint(t)
                    ))
                )
              },
              isIdentifierPart: function (t) {
                return (
                  t === 36 ||
                  t === 95 ||
                  (t >= 65 && t <= 90) ||
                  (t >= 97 && t <= 122) ||
                  (t >= 48 && t <= 57) ||
                  t === 92 ||
                  (t >= 128 &&
                    i.NonAsciiIdentifierPart.test(e.Character.fromCodePoint(t)))
                )
              },
              isDecimalDigit: function (t) {
                return t >= 48 && t <= 57
              },
              isHexDigit: function (t) {
                return (
                  (t >= 48 && t <= 57) ||
                  (t >= 65 && t <= 70) ||
                  (t >= 97 && t <= 102)
                )
              },
              isOctalDigit: function (t) {
                return t >= 48 && t <= 55
              },
            }
          },
          function (t, e, i) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var r = i(6)
            var n = (function () {
              function JSXClosingElement(t) {
                this.type = r.JSXSyntax.JSXClosingElement
                this.name = t
              }
              return JSXClosingElement
            })()
            e.JSXClosingElement = n
            var s = (function () {
              function JSXElement(t, e, i) {
                this.type = r.JSXSyntax.JSXElement
                this.openingElement = t
                this.children = e
                this.closingElement = i
              }
              return JSXElement
            })()
            e.JSXElement = s
            var a = (function () {
              function JSXEmptyExpression() {
                this.type = r.JSXSyntax.JSXEmptyExpression
              }
              return JSXEmptyExpression
            })()
            e.JSXEmptyExpression = a
            var u = (function () {
              function JSXExpressionContainer(t) {
                this.type = r.JSXSyntax.JSXExpressionContainer
                this.expression = t
              }
              return JSXExpressionContainer
            })()
            e.JSXExpressionContainer = u
            var h = (function () {
              function JSXIdentifier(t) {
                this.type = r.JSXSyntax.JSXIdentifier
                this.name = t
              }
              return JSXIdentifier
            })()
            e.JSXIdentifier = h
            var o = (function () {
              function JSXMemberExpression(t, e) {
                this.type = r.JSXSyntax.JSXMemberExpression
                this.object = t
                this.property = e
              }
              return JSXMemberExpression
            })()
            e.JSXMemberExpression = o
            var l = (function () {
              function JSXAttribute(t, e) {
                this.type = r.JSXSyntax.JSXAttribute
                this.name = t
                this.value = e
              }
              return JSXAttribute
            })()
            e.JSXAttribute = l
            var c = (function () {
              function JSXNamespacedName(t, e) {
                this.type = r.JSXSyntax.JSXNamespacedName
                this.namespace = t
                this.name = e
              }
              return JSXNamespacedName
            })()
            e.JSXNamespacedName = c
            var p = (function () {
              function JSXOpeningElement(t, e, i) {
                this.type = r.JSXSyntax.JSXOpeningElement
                this.name = t
                this.selfClosing = e
                this.attributes = i
              }
              return JSXOpeningElement
            })()
            e.JSXOpeningElement = p
            var f = (function () {
              function JSXSpreadAttribute(t) {
                this.type = r.JSXSyntax.JSXSpreadAttribute
                this.argument = t
              }
              return JSXSpreadAttribute
            })()
            e.JSXSpreadAttribute = f
            var D = (function () {
              function JSXText(t, e) {
                this.type = r.JSXSyntax.JSXText
                this.value = t
                this.raw = e
              }
              return JSXText
            })()
            e.JSXText = D
          },
          function (t, e) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            e.JSXSyntax = {
              JSXAttribute: 'JSXAttribute',
              JSXClosingElement: 'JSXClosingElement',
              JSXElement: 'JSXElement',
              JSXEmptyExpression: 'JSXEmptyExpression',
              JSXExpressionContainer: 'JSXExpressionContainer',
              JSXIdentifier: 'JSXIdentifier',
              JSXMemberExpression: 'JSXMemberExpression',
              JSXNamespacedName: 'JSXNamespacedName',
              JSXOpeningElement: 'JSXOpeningElement',
              JSXSpreadAttribute: 'JSXSpreadAttribute',
              JSXText: 'JSXText',
            }
          },
          function (t, e, i) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var r = i(2)
            var n = (function () {
              function ArrayExpression(t) {
                this.type = r.Syntax.ArrayExpression
                this.elements = t
              }
              return ArrayExpression
            })()
            e.ArrayExpression = n
            var s = (function () {
              function ArrayPattern(t) {
                this.type = r.Syntax.ArrayPattern
                this.elements = t
              }
              return ArrayPattern
            })()
            e.ArrayPattern = s
            var a = (function () {
              function ArrowFunctionExpression(t, e, i) {
                this.type = r.Syntax.ArrowFunctionExpression
                this.id = null
                this.params = t
                this.body = e
                this.generator = false
                this.expression = i
                this.async = false
              }
              return ArrowFunctionExpression
            })()
            e.ArrowFunctionExpression = a
            var u = (function () {
              function AssignmentExpression(t, e, i) {
                this.type = r.Syntax.AssignmentExpression
                this.operator = t
                this.left = e
                this.right = i
              }
              return AssignmentExpression
            })()
            e.AssignmentExpression = u
            var h = (function () {
              function AssignmentPattern(t, e) {
                this.type = r.Syntax.AssignmentPattern
                this.left = t
                this.right = e
              }
              return AssignmentPattern
            })()
            e.AssignmentPattern = h
            var o = (function () {
              function AsyncArrowFunctionExpression(t, e, i) {
                this.type = r.Syntax.ArrowFunctionExpression
                this.id = null
                this.params = t
                this.body = e
                this.generator = false
                this.expression = i
                this.async = true
              }
              return AsyncArrowFunctionExpression
            })()
            e.AsyncArrowFunctionExpression = o
            var l = (function () {
              function AsyncFunctionDeclaration(t, e, i) {
                this.type = r.Syntax.FunctionDeclaration
                this.id = t
                this.params = e
                this.body = i
                this.generator = false
                this.expression = false
                this.async = true
              }
              return AsyncFunctionDeclaration
            })()
            e.AsyncFunctionDeclaration = l
            var c = (function () {
              function AsyncFunctionExpression(t, e, i) {
                this.type = r.Syntax.FunctionExpression
                this.id = t
                this.params = e
                this.body = i
                this.generator = false
                this.expression = false
                this.async = true
              }
              return AsyncFunctionExpression
            })()
            e.AsyncFunctionExpression = c
            var p = (function () {
              function AwaitExpression(t) {
                this.type = r.Syntax.AwaitExpression
                this.argument = t
              }
              return AwaitExpression
            })()
            e.AwaitExpression = p
            var f = (function () {
              function BinaryExpression(t, e, i) {
                var n = t === '||' || t === '&&'
                this.type = n
                  ? r.Syntax.LogicalExpression
                  : r.Syntax.BinaryExpression
                this.operator = t
                this.left = e
                this.right = i
              }
              return BinaryExpression
            })()
            e.BinaryExpression = f
            var D = (function () {
              function BlockStatement(t) {
                this.type = r.Syntax.BlockStatement
                this.body = t
              }
              return BlockStatement
            })()
            e.BlockStatement = D
            var x = (function () {
              function BreakStatement(t) {
                this.type = r.Syntax.BreakStatement
                this.label = t
              }
              return BreakStatement
            })()
            e.BreakStatement = x
            var E = (function () {
              function CallExpression(t, e) {
                this.type = r.Syntax.CallExpression
                this.callee = t
                this.arguments = e
              }
              return CallExpression
            })()
            e.CallExpression = E
            var m = (function () {
              function CatchClause(t, e) {
                this.type = r.Syntax.CatchClause
                this.param = t
                this.body = e
              }
              return CatchClause
            })()
            e.CatchClause = m
            var v = (function () {
              function ClassBody(t) {
                this.type = r.Syntax.ClassBody
                this.body = t
              }
              return ClassBody
            })()
            e.ClassBody = v
            var C = (function () {
              function ClassDeclaration(t, e, i) {
                this.type = r.Syntax.ClassDeclaration
                this.id = t
                this.superClass = e
                this.body = i
              }
              return ClassDeclaration
            })()
            e.ClassDeclaration = C
            var S = (function () {
              function ClassExpression(t, e, i) {
                this.type = r.Syntax.ClassExpression
                this.id = t
                this.superClass = e
                this.body = i
              }
              return ClassExpression
            })()
            e.ClassExpression = S
            var d = (function () {
              function ComputedMemberExpression(t, e) {
                this.type = r.Syntax.MemberExpression
                this.computed = true
                this.object = t
                this.property = e
              }
              return ComputedMemberExpression
            })()
            e.ComputedMemberExpression = d
            var y = (function () {
              function ConditionalExpression(t, e, i) {
                this.type = r.Syntax.ConditionalExpression
                this.test = t
                this.consequent = e
                this.alternate = i
              }
              return ConditionalExpression
            })()
            e.ConditionalExpression = y
            var A = (function () {
              function ContinueStatement(t) {
                this.type = r.Syntax.ContinueStatement
                this.label = t
              }
              return ContinueStatement
            })()
            e.ContinueStatement = A
            var F = (function () {
              function DebuggerStatement() {
                this.type = r.Syntax.DebuggerStatement
              }
              return DebuggerStatement
            })()
            e.DebuggerStatement = F
            var w = (function () {
              function Directive(t, e) {
                this.type = r.Syntax.ExpressionStatement
                this.expression = t
                this.directive = e
              }
              return Directive
            })()
            e.Directive = w
            var b = (function () {
              function DoWhileStatement(t, e) {
                this.type = r.Syntax.DoWhileStatement
                this.body = t
                this.test = e
              }
              return DoWhileStatement
            })()
            e.DoWhileStatement = b
            var B = (function () {
              function EmptyStatement() {
                this.type = r.Syntax.EmptyStatement
              }
              return EmptyStatement
            })()
            e.EmptyStatement = B
            var g = (function () {
              function ExportAllDeclaration(t) {
                this.type = r.Syntax.ExportAllDeclaration
                this.source = t
              }
              return ExportAllDeclaration
            })()
            e.ExportAllDeclaration = g
            var P = (function () {
              function ExportDefaultDeclaration(t) {
                this.type = r.Syntax.ExportDefaultDeclaration
                this.declaration = t
              }
              return ExportDefaultDeclaration
            })()
            e.ExportDefaultDeclaration = P
            var T = (function () {
              function ExportNamedDeclaration(t, e, i) {
                this.type = r.Syntax.ExportNamedDeclaration
                this.declaration = t
                this.specifiers = e
                this.source = i
              }
              return ExportNamedDeclaration
            })()
            e.ExportNamedDeclaration = T
            var I = (function () {
              function ExportSpecifier(t, e) {
                this.type = r.Syntax.ExportSpecifier
                this.exported = e
                this.local = t
              }
              return ExportSpecifier
            })()
            e.ExportSpecifier = I
            var M = (function () {
              function ExpressionStatement(t) {
                this.type = r.Syntax.ExpressionStatement
                this.expression = t
              }
              return ExpressionStatement
            })()
            e.ExpressionStatement = M
            var X = (function () {
              function ForInStatement(t, e, i) {
                this.type = r.Syntax.ForInStatement
                this.left = t
                this.right = e
                this.body = i
                this.each = false
              }
              return ForInStatement
            })()
            e.ForInStatement = X
            var J = (function () {
              function ForOfStatement(t, e, i) {
                this.type = r.Syntax.ForOfStatement
                this.left = t
                this.right = e
                this.body = i
              }
              return ForOfStatement
            })()
            e.ForOfStatement = J
            var k = (function () {
              function ForStatement(t, e, i, n) {
                this.type = r.Syntax.ForStatement
                this.init = t
                this.test = e
                this.update = i
                this.body = n
              }
              return ForStatement
            })()
            e.ForStatement = k
            var N = (function () {
              function FunctionDeclaration(t, e, i, n) {
                this.type = r.Syntax.FunctionDeclaration
                this.id = t
                this.params = e
                this.body = i
                this.generator = n
                this.expression = false
                this.async = false
              }
              return FunctionDeclaration
            })()
            e.FunctionDeclaration = N
            var L = (function () {
              function FunctionExpression(t, e, i, n) {
                this.type = r.Syntax.FunctionExpression
                this.id = t
                this.params = e
                this.body = i
                this.generator = n
                this.expression = false
                this.async = false
              }
              return FunctionExpression
            })()
            e.FunctionExpression = L
            var O = (function () {
              function Identifier(t) {
                this.type = r.Syntax.Identifier
                this.name = t
              }
              return Identifier
            })()
            e.Identifier = O
            var U = (function () {
              function IfStatement(t, e, i) {
                this.type = r.Syntax.IfStatement
                this.test = t
                this.consequent = e
                this.alternate = i
              }
              return IfStatement
            })()
            e.IfStatement = U
            var R = (function () {
              function ImportDeclaration(t, e) {
                this.type = r.Syntax.ImportDeclaration
                this.specifiers = t
                this.source = e
              }
              return ImportDeclaration
            })()
            e.ImportDeclaration = R
            var z = (function () {
              function ImportDefaultSpecifier(t) {
                this.type = r.Syntax.ImportDefaultSpecifier
                this.local = t
              }
              return ImportDefaultSpecifier
            })()
            e.ImportDefaultSpecifier = z
            var K = (function () {
              function ImportNamespaceSpecifier(t) {
                this.type = r.Syntax.ImportNamespaceSpecifier
                this.local = t
              }
              return ImportNamespaceSpecifier
            })()
            e.ImportNamespaceSpecifier = K
            var j = (function () {
              function ImportSpecifier(t, e) {
                this.type = r.Syntax.ImportSpecifier
                this.local = t
                this.imported = e
              }
              return ImportSpecifier
            })()
            e.ImportSpecifier = j
            var H = (function () {
              function LabeledStatement(t, e) {
                this.type = r.Syntax.LabeledStatement
                this.label = t
                this.body = e
              }
              return LabeledStatement
            })()
            e.LabeledStatement = H
            var W = (function () {
              function Literal(t, e) {
                this.type = r.Syntax.Literal
                this.value = t
                this.raw = e
              }
              return Literal
            })()
            e.Literal = W
            var V = (function () {
              function MetaProperty(t, e) {
                this.type = r.Syntax.MetaProperty
                this.meta = t
                this.property = e
              }
              return MetaProperty
            })()
            e.MetaProperty = V
            var G = (function () {
              function MethodDefinition(t, e, i, n, s) {
                this.type = r.Syntax.MethodDefinition
                this.key = t
                this.computed = e
                this.value = i
                this.kind = n
                this.static = s
              }
              return MethodDefinition
            })()
            e.MethodDefinition = G
            var Y = (function () {
              function Module(t) {
                this.type = r.Syntax.Program
                this.body = t
                this.sourceType = 'module'
              }
              return Module
            })()
            e.Module = Y
            var q = (function () {
              function NewExpression(t, e) {
                this.type = r.Syntax.NewExpression
                this.callee = t
                this.arguments = e
              }
              return NewExpression
            })()
            e.NewExpression = q
            var $ = (function () {
              function ObjectExpression(t) {
                this.type = r.Syntax.ObjectExpression
                this.properties = t
              }
              return ObjectExpression
            })()
            e.ObjectExpression = $
            var Q = (function () {
              function ObjectPattern(t) {
                this.type = r.Syntax.ObjectPattern
                this.properties = t
              }
              return ObjectPattern
            })()
            e.ObjectPattern = Q
            var Z = (function () {
              function Property(t, e, i, n, s, a) {
                this.type = r.Syntax.Property
                this.key = e
                this.computed = i
                this.value = n
                this.kind = t
                this.method = s
                this.shorthand = a
              }
              return Property
            })()
            e.Property = Z
            var _ = (function () {
              function RegexLiteral(t, e, i, n) {
                this.type = r.Syntax.Literal
                this.value = t
                this.raw = e
                this.regex = { pattern: i, flags: n }
              }
              return RegexLiteral
            })()
            e.RegexLiteral = _
            var tt = (function () {
              function RestElement(t) {
                this.type = r.Syntax.RestElement
                this.argument = t
              }
              return RestElement
            })()
            e.RestElement = tt
            var et = (function () {
              function ReturnStatement(t) {
                this.type = r.Syntax.ReturnStatement
                this.argument = t
              }
              return ReturnStatement
            })()
            e.ReturnStatement = et
            var it = (function () {
              function Script(t) {
                this.type = r.Syntax.Program
                this.body = t
                this.sourceType = 'script'
              }
              return Script
            })()
            e.Script = it
            var rt = (function () {
              function SequenceExpression(t) {
                this.type = r.Syntax.SequenceExpression
                this.expressions = t
              }
              return SequenceExpression
            })()
            e.SequenceExpression = rt
            var nt = (function () {
              function SpreadElement(t) {
                this.type = r.Syntax.SpreadElement
                this.argument = t
              }
              return SpreadElement
            })()
            e.SpreadElement = nt
            var st = (function () {
              function StaticMemberExpression(t, e) {
                this.type = r.Syntax.MemberExpression
                this.computed = false
                this.object = t
                this.property = e
              }
              return StaticMemberExpression
            })()
            e.StaticMemberExpression = st
            var at = (function () {
              function Super() {
                this.type = r.Syntax.Super
              }
              return Super
            })()
            e.Super = at
            var ut = (function () {
              function SwitchCase(t, e) {
                this.type = r.Syntax.SwitchCase
                this.test = t
                this.consequent = e
              }
              return SwitchCase
            })()
            e.SwitchCase = ut
            var ht = (function () {
              function SwitchStatement(t, e) {
                this.type = r.Syntax.SwitchStatement
                this.discriminant = t
                this.cases = e
              }
              return SwitchStatement
            })()
            e.SwitchStatement = ht
            var ot = (function () {
              function TaggedTemplateExpression(t, e) {
                this.type = r.Syntax.TaggedTemplateExpression
                this.tag = t
                this.quasi = e
              }
              return TaggedTemplateExpression
            })()
            e.TaggedTemplateExpression = ot
            var lt = (function () {
              function TemplateElement(t, e) {
                this.type = r.Syntax.TemplateElement
                this.value = t
                this.tail = e
              }
              return TemplateElement
            })()
            e.TemplateElement = lt
            var ct = (function () {
              function TemplateLiteral(t, e) {
                this.type = r.Syntax.TemplateLiteral
                this.quasis = t
                this.expressions = e
              }
              return TemplateLiteral
            })()
            e.TemplateLiteral = ct
            var pt = (function () {
              function ThisExpression() {
                this.type = r.Syntax.ThisExpression
              }
              return ThisExpression
            })()
            e.ThisExpression = pt
            var ft = (function () {
              function ThrowStatement(t) {
                this.type = r.Syntax.ThrowStatement
                this.argument = t
              }
              return ThrowStatement
            })()
            e.ThrowStatement = ft
            var Dt = (function () {
              function TryStatement(t, e, i) {
                this.type = r.Syntax.TryStatement
                this.block = t
                this.handler = e
                this.finalizer = i
              }
              return TryStatement
            })()
            e.TryStatement = Dt
            var xt = (function () {
              function UnaryExpression(t, e) {
                this.type = r.Syntax.UnaryExpression
                this.operator = t
                this.argument = e
                this.prefix = true
              }
              return UnaryExpression
            })()
            e.UnaryExpression = xt
            var Et = (function () {
              function UpdateExpression(t, e, i) {
                this.type = r.Syntax.UpdateExpression
                this.operator = t
                this.argument = e
                this.prefix = i
              }
              return UpdateExpression
            })()
            e.UpdateExpression = Et
            var mt = (function () {
              function VariableDeclaration(t, e) {
                this.type = r.Syntax.VariableDeclaration
                this.declarations = t
                this.kind = e
              }
              return VariableDeclaration
            })()
            e.VariableDeclaration = mt
            var vt = (function () {
              function VariableDeclarator(t, e) {
                this.type = r.Syntax.VariableDeclarator
                this.id = t
                this.init = e
              }
              return VariableDeclarator
            })()
            e.VariableDeclarator = vt
            var Ct = (function () {
              function WhileStatement(t, e) {
                this.type = r.Syntax.WhileStatement
                this.test = t
                this.body = e
              }
              return WhileStatement
            })()
            e.WhileStatement = Ct
            var St = (function () {
              function WithStatement(t, e) {
                this.type = r.Syntax.WithStatement
                this.object = t
                this.body = e
              }
              return WithStatement
            })()
            e.WithStatement = St
            var dt = (function () {
              function YieldExpression(t, e) {
                this.type = r.Syntax.YieldExpression
                this.argument = t
                this.delegate = e
              }
              return YieldExpression
            })()
            e.YieldExpression = dt
          },
          function (t, e, i) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var r = i(9)
            var n = i(10)
            var s = i(11)
            var a = i(7)
            var u = i(12)
            var h = i(2)
            var o = i(13)
            var l = 'ArrowParameterPlaceHolder'
            var c = (function () {
              function Parser(t, e, i) {
                if (e === void 0) {
                  e = {}
                }
                this.config = {
                  range: typeof e.range === 'boolean' && e.range,
                  loc: typeof e.loc === 'boolean' && e.loc,
                  source: null,
                  tokens: typeof e.tokens === 'boolean' && e.tokens,
                  comment: typeof e.comment === 'boolean' && e.comment,
                  tolerant: typeof e.tolerant === 'boolean' && e.tolerant,
                }
                if (this.config.loc && e.source && e.source !== null) {
                  this.config.source = String(e.source)
                }
                this.delegate = i
                this.errorHandler = new n.ErrorHandler()
                this.errorHandler.tolerant = this.config.tolerant
                this.scanner = new u.Scanner(t, this.errorHandler)
                this.scanner.trackComment = this.config.comment
                this.operatorPrecedence = {
                  ')': 0,
                  ';': 0,
                  ',': 0,
                  '=': 0,
                  ']': 0,
                  '||': 1,
                  '&&': 2,
                  '|': 3,
                  '^': 4,
                  '&': 5,
                  '==': 6,
                  '!=': 6,
                  '===': 6,
                  '!==': 6,
                  '<': 7,
                  '>': 7,
                  '<=': 7,
                  '>=': 7,
                  '<<': 8,
                  '>>': 8,
                  '>>>': 8,
                  '+': 9,
                  '-': 9,
                  '*': 11,
                  '/': 11,
                  '%': 11,
                }
                this.lookahead = {
                  type: 2,
                  value: '',
                  lineNumber: this.scanner.lineNumber,
                  lineStart: 0,
                  start: 0,
                  end: 0,
                }
                this.hasLineTerminator = false
                this.context = {
                  isModule: false,
                  await: false,
                  allowIn: true,
                  allowStrictDirective: true,
                  allowYield: true,
                  firstCoverInitializedNameError: null,
                  isAssignmentTarget: false,
                  isBindingElement: false,
                  inFunctionBody: false,
                  inIteration: false,
                  inSwitch: false,
                  labelSet: {},
                  strict: false,
                }
                this.tokens = []
                this.startMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0,
                }
                this.lastMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0,
                }
                this.nextToken()
                this.lastMarker = {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart,
                }
              }
              Parser.prototype.throwError = function (t) {
                var e = []
                for (var i = 1; i < arguments.length; i++) {
                  e[i - 1] = arguments[i]
                }
                var n = Array.prototype.slice.call(arguments, 1)
                var s = t.replace(/%(\d)/g, function (t, e) {
                  r.assert(e < n.length, 'Message reference must be in range')
                  return n[e]
                })
                var a = this.lastMarker.index
                var u = this.lastMarker.line
                var h = this.lastMarker.column + 1
                throw this.errorHandler.createError(a, u, h, s)
              }
              Parser.prototype.tolerateError = function (t) {
                var e = []
                for (var i = 1; i < arguments.length; i++) {
                  e[i - 1] = arguments[i]
                }
                var n = Array.prototype.slice.call(arguments, 1)
                var s = t.replace(/%(\d)/g, function (t, e) {
                  r.assert(e < n.length, 'Message reference must be in range')
                  return n[e]
                })
                var a = this.lastMarker.index
                var u = this.scanner.lineNumber
                var h = this.lastMarker.column + 1
                this.errorHandler.tolerateError(a, u, h, s)
              }
              Parser.prototype.unexpectedTokenError = function (t, e) {
                var i = e || s.Messages.UnexpectedToken
                var r
                if (t) {
                  if (!e) {
                    i =
                      t.type === 2
                        ? s.Messages.UnexpectedEOS
                        : t.type === 3
                        ? s.Messages.UnexpectedIdentifier
                        : t.type === 6
                        ? s.Messages.UnexpectedNumber
                        : t.type === 8
                        ? s.Messages.UnexpectedString
                        : t.type === 10
                        ? s.Messages.UnexpectedTemplate
                        : s.Messages.UnexpectedToken
                    if (t.type === 4) {
                      if (this.scanner.isFutureReservedWord(t.value)) {
                        i = s.Messages.UnexpectedReserved
                      } else if (
                        this.context.strict &&
                        this.scanner.isStrictModeReservedWord(t.value)
                      ) {
                        i = s.Messages.StrictReservedWord
                      }
                    }
                  }
                  r = t.value
                } else {
                  r = 'ILLEGAL'
                }
                i = i.replace('%0', r)
                if (t && typeof t.lineNumber === 'number') {
                  var n = t.start
                  var a = t.lineNumber
                  var u = this.lastMarker.index - this.lastMarker.column
                  var h = t.start - u + 1
                  return this.errorHandler.createError(n, a, h, i)
                } else {
                  var n = this.lastMarker.index
                  var a = this.lastMarker.line
                  var h = this.lastMarker.column + 1
                  return this.errorHandler.createError(n, a, h, i)
                }
              }
              Parser.prototype.throwUnexpectedToken = function (t, e) {
                throw this.unexpectedTokenError(t, e)
              }
              Parser.prototype.tolerateUnexpectedToken = function (t, e) {
                this.errorHandler.tolerate(this.unexpectedTokenError(t, e))
              }
              Parser.prototype.collectComments = function () {
                if (!this.config.comment) {
                  this.scanner.scanComments()
                } else {
                  var t = this.scanner.scanComments()
                  if (t.length > 0 && this.delegate) {
                    for (var e = 0; e < t.length; ++e) {
                      var i = t[e]
                      var r = void 0
                      r = {
                        type: i.multiLine ? 'BlockComment' : 'LineComment',
                        value: this.scanner.source.slice(
                          i.slice[0],
                          i.slice[1]
                        ),
                      }
                      if (this.config.range) {
                        r.range = i.range
                      }
                      if (this.config.loc) {
                        r.loc = i.loc
                      }
                      var n = {
                        start: {
                          line: i.loc.start.line,
                          column: i.loc.start.column,
                          offset: i.range[0],
                        },
                        end: {
                          line: i.loc.end.line,
                          column: i.loc.end.column,
                          offset: i.range[1],
                        },
                      }
                      this.delegate(r, n)
                    }
                  }
                }
              }
              Parser.prototype.getTokenRaw = function (t) {
                return this.scanner.source.slice(t.start, t.end)
              }
              Parser.prototype.convertToken = function (t) {
                var e = {
                  type: o.TokenName[t.type],
                  value: this.getTokenRaw(t),
                }
                if (this.config.range) {
                  e.range = [t.start, t.end]
                }
                if (this.config.loc) {
                  e.loc = {
                    start: {
                      line: this.startMarker.line,
                      column: this.startMarker.column,
                    },
                    end: {
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart,
                    },
                  }
                }
                if (t.type === 9) {
                  var i = t.pattern
                  var r = t.flags
                  e.regex = { pattern: i, flags: r }
                }
                return e
              }
              Parser.prototype.nextToken = function () {
                var t = this.lookahead
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                this.collectComments()
                if (this.scanner.index !== this.startMarker.index) {
                  this.startMarker.index = this.scanner.index
                  this.startMarker.line = this.scanner.lineNumber
                  this.startMarker.column =
                    this.scanner.index - this.scanner.lineStart
                }
                var e = this.scanner.lex()
                this.hasLineTerminator = t.lineNumber !== e.lineNumber
                if (e && this.context.strict && e.type === 3) {
                  if (this.scanner.isStrictModeReservedWord(e.value)) {
                    e.type = 4
                  }
                }
                this.lookahead = e
                if (this.config.tokens && e.type !== 2) {
                  this.tokens.push(this.convertToken(e))
                }
                return t
              }
              Parser.prototype.nextRegexToken = function () {
                this.collectComments()
                var t = this.scanner.scanRegExp()
                if (this.config.tokens) {
                  this.tokens.pop()
                  this.tokens.push(this.convertToken(t))
                }
                this.lookahead = t
                this.nextToken()
                return t
              }
              Parser.prototype.createNode = function () {
                return {
                  index: this.startMarker.index,
                  line: this.startMarker.line,
                  column: this.startMarker.column,
                }
              }
              Parser.prototype.startNode = function (t, e) {
                if (e === void 0) {
                  e = 0
                }
                var i = t.start - t.lineStart
                var r = t.lineNumber
                if (i < 0) {
                  i += e
                  r--
                }
                return { index: t.start, line: r, column: i }
              }
              Parser.prototype.finalize = function (t, e) {
                if (this.config.range) {
                  e.range = [t.index, this.lastMarker.index]
                }
                if (this.config.loc) {
                  e.loc = {
                    start: { line: t.line, column: t.column },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                    },
                  }
                  if (this.config.source) {
                    e.loc.source = this.config.source
                  }
                }
                if (this.delegate) {
                  var i = {
                    start: { line: t.line, column: t.column, offset: t.index },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                      offset: this.lastMarker.index,
                    },
                  }
                  this.delegate(e, i)
                }
                return e
              }
              Parser.prototype.expect = function (t) {
                var e = this.nextToken()
                if (e.type !== 7 || e.value !== t) {
                  this.throwUnexpectedToken(e)
                }
              }
              Parser.prototype.expectCommaSeparator = function () {
                if (this.config.tolerant) {
                  var t = this.lookahead
                  if (t.type === 7 && t.value === ',') {
                    this.nextToken()
                  } else if (t.type === 7 && t.value === ';') {
                    this.nextToken()
                    this.tolerateUnexpectedToken(t)
                  } else {
                    this.tolerateUnexpectedToken(t, s.Messages.UnexpectedToken)
                  }
                } else {
                  this.expect(',')
                }
              }
              Parser.prototype.expectKeyword = function (t) {
                var e = this.nextToken()
                if (e.type !== 4 || e.value !== t) {
                  this.throwUnexpectedToken(e)
                }
              }
              Parser.prototype.match = function (t) {
                return this.lookahead.type === 7 && this.lookahead.value === t
              }
              Parser.prototype.matchKeyword = function (t) {
                return this.lookahead.type === 4 && this.lookahead.value === t
              }
              Parser.prototype.matchContextualKeyword = function (t) {
                return this.lookahead.type === 3 && this.lookahead.value === t
              }
              Parser.prototype.matchAssign = function () {
                if (this.lookahead.type !== 7) {
                  return false
                }
                var t = this.lookahead.value
                return (
                  t === '=' ||
                  t === '*=' ||
                  t === '**=' ||
                  t === '/=' ||
                  t === '%=' ||
                  t === '+=' ||
                  t === '-=' ||
                  t === '<<=' ||
                  t === '>>=' ||
                  t === '>>>=' ||
                  t === '&=' ||
                  t === '^=' ||
                  t === '|='
                )
              }
              Parser.prototype.isolateCoverGrammar = function (t) {
                var e = this.context.isBindingElement
                var i = this.context.isAssignmentTarget
                var r = this.context.firstCoverInitializedNameError
                this.context.isBindingElement = true
                this.context.isAssignmentTarget = true
                this.context.firstCoverInitializedNameError = null
                var n = t.call(this)
                if (this.context.firstCoverInitializedNameError !== null) {
                  this.throwUnexpectedToken(
                    this.context.firstCoverInitializedNameError
                  )
                }
                this.context.isBindingElement = e
                this.context.isAssignmentTarget = i
                this.context.firstCoverInitializedNameError = r
                return n
              }
              Parser.prototype.inheritCoverGrammar = function (t) {
                var e = this.context.isBindingElement
                var i = this.context.isAssignmentTarget
                var r = this.context.firstCoverInitializedNameError
                this.context.isBindingElement = true
                this.context.isAssignmentTarget = true
                this.context.firstCoverInitializedNameError = null
                var n = t.call(this)
                this.context.isBindingElement =
                  this.context.isBindingElement && e
                this.context.isAssignmentTarget =
                  this.context.isAssignmentTarget && i
                this.context.firstCoverInitializedNameError =
                  r || this.context.firstCoverInitializedNameError
                return n
              }
              Parser.prototype.consumeSemicolon = function () {
                if (this.match(';')) {
                  this.nextToken()
                } else if (!this.hasLineTerminator) {
                  if (this.lookahead.type !== 2 && !this.match('}')) {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                  this.lastMarker.index = this.startMarker.index
                  this.lastMarker.line = this.startMarker.line
                  this.lastMarker.column = this.startMarker.column
                }
              }
              Parser.prototype.parsePrimaryExpression = function () {
                var t = this.createNode()
                var e
                var i, r
                switch (this.lookahead.type) {
                  case 3:
                    if (
                      (this.context.isModule || this.context.await) &&
                      this.lookahead.value === 'await'
                    ) {
                      this.tolerateUnexpectedToken(this.lookahead)
                    }
                    e = this.matchAsyncFunction()
                      ? this.parseFunctionExpression()
                      : this.finalize(
                          t,
                          new a.Identifier(this.nextToken().value)
                        )
                    break
                  case 6:
                  case 8:
                    if (this.context.strict && this.lookahead.octal) {
                      this.tolerateUnexpectedToken(
                        this.lookahead,
                        s.Messages.StrictOctalLiteral
                      )
                    }
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    i = this.nextToken()
                    r = this.getTokenRaw(i)
                    e = this.finalize(t, new a.Literal(i.value, r))
                    break
                  case 1:
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    i = this.nextToken()
                    r = this.getTokenRaw(i)
                    e = this.finalize(t, new a.Literal(i.value === 'true', r))
                    break
                  case 5:
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    i = this.nextToken()
                    r = this.getTokenRaw(i)
                    e = this.finalize(t, new a.Literal(null, r))
                    break
                  case 10:
                    e = this.parseTemplateLiteral()
                    break
                  case 7:
                    switch (this.lookahead.value) {
                      case '(':
                        this.context.isBindingElement = false
                        e = this.inheritCoverGrammar(this.parseGroupExpression)
                        break
                      case '[':
                        e = this.inheritCoverGrammar(this.parseArrayInitializer)
                        break
                      case '{':
                        e = this.inheritCoverGrammar(
                          this.parseObjectInitializer
                        )
                        break
                      case '/':
                      case '/=':
                        this.context.isAssignmentTarget = false
                        this.context.isBindingElement = false
                        this.scanner.index = this.startMarker.index
                        i = this.nextRegexToken()
                        r = this.getTokenRaw(i)
                        e = this.finalize(
                          t,
                          new a.RegexLiteral(i.regex, r, i.pattern, i.flags)
                        )
                        break
                      default:
                        e = this.throwUnexpectedToken(this.nextToken())
                    }
                    break
                  case 4:
                    if (
                      !this.context.strict &&
                      this.context.allowYield &&
                      this.matchKeyword('yield')
                    ) {
                      e = this.parseIdentifierName()
                    } else if (
                      !this.context.strict &&
                      this.matchKeyword('let')
                    ) {
                      e = this.finalize(
                        t,
                        new a.Identifier(this.nextToken().value)
                      )
                    } else {
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      if (this.matchKeyword('function')) {
                        e = this.parseFunctionExpression()
                      } else if (this.matchKeyword('this')) {
                        this.nextToken()
                        e = this.finalize(t, new a.ThisExpression())
                      } else if (this.matchKeyword('class')) {
                        e = this.parseClassExpression()
                      } else {
                        e = this.throwUnexpectedToken(this.nextToken())
                      }
                    }
                    break
                  default:
                    e = this.throwUnexpectedToken(this.nextToken())
                }
                return e
              }
              Parser.prototype.parseSpreadElement = function () {
                var t = this.createNode()
                this.expect('...')
                var e = this.inheritCoverGrammar(this.parseAssignmentExpression)
                return this.finalize(t, new a.SpreadElement(e))
              }
              Parser.prototype.parseArrayInitializer = function () {
                var t = this.createNode()
                var e = []
                this.expect('[')
                while (!this.match(']')) {
                  if (this.match(',')) {
                    this.nextToken()
                    e.push(null)
                  } else if (this.match('...')) {
                    var i = this.parseSpreadElement()
                    if (!this.match(']')) {
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      this.expect(',')
                    }
                    e.push(i)
                  } else {
                    e.push(
                      this.inheritCoverGrammar(this.parseAssignmentExpression)
                    )
                    if (!this.match(']')) {
                      this.expect(',')
                    }
                  }
                }
                this.expect(']')
                return this.finalize(t, new a.ArrayExpression(e))
              }
              Parser.prototype.parsePropertyMethod = function (t) {
                this.context.isAssignmentTarget = false
                this.context.isBindingElement = false
                var e = this.context.strict
                var i = this.context.allowStrictDirective
                this.context.allowStrictDirective = t.simple
                var r = this.isolateCoverGrammar(
                  this.parseFunctionSourceElements
                )
                if (this.context.strict && t.firstRestricted) {
                  this.tolerateUnexpectedToken(t.firstRestricted, t.message)
                }
                if (this.context.strict && t.stricted) {
                  this.tolerateUnexpectedToken(t.stricted, t.message)
                }
                this.context.strict = e
                this.context.allowStrictDirective = i
                return r
              }
              Parser.prototype.parsePropertyMethodFunction = function () {
                var t = false
                var e = this.createNode()
                var i = this.context.allowYield
                this.context.allowYield = true
                var r = this.parseFormalParameters()
                var n = this.parsePropertyMethod(r)
                this.context.allowYield = i
                return this.finalize(
                  e,
                  new a.FunctionExpression(null, r.params, n, t)
                )
              }
              Parser.prototype.parsePropertyMethodAsyncFunction = function () {
                var t = this.createNode()
                var e = this.context.allowYield
                var i = this.context.await
                this.context.allowYield = false
                this.context.await = true
                var r = this.parseFormalParameters()
                var n = this.parsePropertyMethod(r)
                this.context.allowYield = e
                this.context.await = i
                return this.finalize(
                  t,
                  new a.AsyncFunctionExpression(null, r.params, n)
                )
              }
              Parser.prototype.parseObjectPropertyKey = function () {
                var t = this.createNode()
                var e = this.nextToken()
                var i
                switch (e.type) {
                  case 8:
                  case 6:
                    if (this.context.strict && e.octal) {
                      this.tolerateUnexpectedToken(
                        e,
                        s.Messages.StrictOctalLiteral
                      )
                    }
                    var r = this.getTokenRaw(e)
                    i = this.finalize(t, new a.Literal(e.value, r))
                    break
                  case 3:
                  case 1:
                  case 5:
                  case 4:
                    i = this.finalize(t, new a.Identifier(e.value))
                    break
                  case 7:
                    if (e.value === '[') {
                      i = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      this.expect(']')
                    } else {
                      i = this.throwUnexpectedToken(e)
                    }
                    break
                  default:
                    i = this.throwUnexpectedToken(e)
                }
                return i
              }
              Parser.prototype.isPropertyKey = function (t, e) {
                return (
                  (t.type === h.Syntax.Identifier && t.name === e) ||
                  (t.type === h.Syntax.Literal && t.value === e)
                )
              }
              Parser.prototype.parseObjectProperty = function (t) {
                var e = this.createNode()
                var i = this.lookahead
                var r
                var n = null
                var u = null
                var h = false
                var o = false
                var l = false
                var c = false
                if (i.type === 3) {
                  var p = i.value
                  this.nextToken()
                  h = this.match('[')
                  c =
                    !this.hasLineTerminator &&
                    p === 'async' &&
                    !this.match(':') &&
                    !this.match('(') &&
                    !this.match('*') &&
                    !this.match(',')
                  n = c
                    ? this.parseObjectPropertyKey()
                    : this.finalize(e, new a.Identifier(p))
                } else if (this.match('*')) {
                  this.nextToken()
                } else {
                  h = this.match('[')
                  n = this.parseObjectPropertyKey()
                }
                var f = this.qualifiedPropertyName(this.lookahead)
                if (i.type === 3 && !c && i.value === 'get' && f) {
                  r = 'get'
                  h = this.match('[')
                  n = this.parseObjectPropertyKey()
                  this.context.allowYield = false
                  u = this.parseGetterMethod()
                } else if (i.type === 3 && !c && i.value === 'set' && f) {
                  r = 'set'
                  h = this.match('[')
                  n = this.parseObjectPropertyKey()
                  u = this.parseSetterMethod()
                } else if (i.type === 7 && i.value === '*' && f) {
                  r = 'init'
                  h = this.match('[')
                  n = this.parseObjectPropertyKey()
                  u = this.parseGeneratorMethod()
                  o = true
                } else {
                  if (!n) {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                  r = 'init'
                  if (this.match(':') && !c) {
                    if (!h && this.isPropertyKey(n, '__proto__')) {
                      if (t.value) {
                        this.tolerateError(s.Messages.DuplicateProtoProperty)
                      }
                      t.value = true
                    }
                    this.nextToken()
                    u = this.inheritCoverGrammar(this.parseAssignmentExpression)
                  } else if (this.match('(')) {
                    u = c
                      ? this.parsePropertyMethodAsyncFunction()
                      : this.parsePropertyMethodFunction()
                    o = true
                  } else if (i.type === 3) {
                    var p = this.finalize(e, new a.Identifier(i.value))
                    if (this.match('=')) {
                      this.context.firstCoverInitializedNameError =
                        this.lookahead
                      this.nextToken()
                      l = true
                      var D = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      u = this.finalize(e, new a.AssignmentPattern(p, D))
                    } else {
                      l = true
                      u = p
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                }
                return this.finalize(e, new a.Property(r, n, h, u, o, l))
              }
              Parser.prototype.parseObjectInitializer = function () {
                var t = this.createNode()
                this.expect('{')
                var e = []
                var i = { value: false }
                while (!this.match('}')) {
                  e.push(this.parseObjectProperty(i))
                  if (!this.match('}')) {
                    this.expectCommaSeparator()
                  }
                }
                this.expect('}')
                return this.finalize(t, new a.ObjectExpression(e))
              }
              Parser.prototype.parseTemplateHead = function () {
                r.assert(
                  this.lookahead.head,
                  'Template literal must start with a template head'
                )
                var t = this.createNode()
                var e = this.nextToken()
                var i = e.value
                var n = e.cooked
                return this.finalize(
                  t,
                  new a.TemplateElement({ raw: i, cooked: n }, e.tail)
                )
              }
              Parser.prototype.parseTemplateElement = function () {
                if (this.lookahead.type !== 10) {
                  this.throwUnexpectedToken()
                }
                var t = this.createNode()
                var e = this.nextToken()
                var i = e.value
                var r = e.cooked
                return this.finalize(
                  t,
                  new a.TemplateElement({ raw: i, cooked: r }, e.tail)
                )
              }
              Parser.prototype.parseTemplateLiteral = function () {
                var t = this.createNode()
                var e = []
                var i = []
                var r = this.parseTemplateHead()
                i.push(r)
                while (!r.tail) {
                  e.push(this.parseExpression())
                  r = this.parseTemplateElement()
                  i.push(r)
                }
                return this.finalize(t, new a.TemplateLiteral(i, e))
              }
              Parser.prototype.reinterpretExpressionAsPattern = function (t) {
                switch (t.type) {
                  case h.Syntax.Identifier:
                  case h.Syntax.MemberExpression:
                  case h.Syntax.RestElement:
                  case h.Syntax.AssignmentPattern:
                    break
                  case h.Syntax.SpreadElement:
                    t.type = h.Syntax.RestElement
                    this.reinterpretExpressionAsPattern(t.argument)
                    break
                  case h.Syntax.ArrayExpression:
                    t.type = h.Syntax.ArrayPattern
                    for (var e = 0; e < t.elements.length; e++) {
                      if (t.elements[e] !== null) {
                        this.reinterpretExpressionAsPattern(t.elements[e])
                      }
                    }
                    break
                  case h.Syntax.ObjectExpression:
                    t.type = h.Syntax.ObjectPattern
                    for (var e = 0; e < t.properties.length; e++) {
                      this.reinterpretExpressionAsPattern(t.properties[e].value)
                    }
                    break
                  case h.Syntax.AssignmentExpression:
                    t.type = h.Syntax.AssignmentPattern
                    delete t.operator
                    this.reinterpretExpressionAsPattern(t.left)
                    break
                  default:
                    break
                }
              }
              Parser.prototype.parseGroupExpression = function () {
                var t
                this.expect('(')
                if (this.match(')')) {
                  this.nextToken()
                  if (!this.match('=>')) {
                    this.expect('=>')
                  }
                  t = { type: l, params: [], async: false }
                } else {
                  var e = this.lookahead
                  var i = []
                  if (this.match('...')) {
                    t = this.parseRestElement(i)
                    this.expect(')')
                    if (!this.match('=>')) {
                      this.expect('=>')
                    }
                    t = { type: l, params: [t], async: false }
                  } else {
                    var r = false
                    this.context.isBindingElement = true
                    t = this.inheritCoverGrammar(this.parseAssignmentExpression)
                    if (this.match(',')) {
                      var n = []
                      this.context.isAssignmentTarget = false
                      n.push(t)
                      while (this.lookahead.type !== 2) {
                        if (!this.match(',')) {
                          break
                        }
                        this.nextToken()
                        if (this.match(')')) {
                          this.nextToken()
                          for (var s = 0; s < n.length; s++) {
                            this.reinterpretExpressionAsPattern(n[s])
                          }
                          r = true
                          t = { type: l, params: n, async: false }
                        } else if (this.match('...')) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead)
                          }
                          n.push(this.parseRestElement(i))
                          this.expect(')')
                          if (!this.match('=>')) {
                            this.expect('=>')
                          }
                          this.context.isBindingElement = false
                          for (var s = 0; s < n.length; s++) {
                            this.reinterpretExpressionAsPattern(n[s])
                          }
                          r = true
                          t = { type: l, params: n, async: false }
                        } else {
                          n.push(
                            this.inheritCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          )
                        }
                        if (r) {
                          break
                        }
                      }
                      if (!r) {
                        t = this.finalize(
                          this.startNode(e),
                          new a.SequenceExpression(n)
                        )
                      }
                    }
                    if (!r) {
                      this.expect(')')
                      if (this.match('=>')) {
                        if (
                          t.type === h.Syntax.Identifier &&
                          t.name === 'yield'
                        ) {
                          r = true
                          t = { type: l, params: [t], async: false }
                        }
                        if (!r) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead)
                          }
                          if (t.type === h.Syntax.SequenceExpression) {
                            for (var s = 0; s < t.expressions.length; s++) {
                              this.reinterpretExpressionAsPattern(
                                t.expressions[s]
                              )
                            }
                          } else {
                            this.reinterpretExpressionAsPattern(t)
                          }
                          var u =
                            t.type === h.Syntax.SequenceExpression
                              ? t.expressions
                              : [t]
                          t = { type: l, params: u, async: false }
                        }
                      }
                      this.context.isBindingElement = false
                    }
                  }
                }
                return t
              }
              Parser.prototype.parseArguments = function () {
                this.expect('(')
                var t = []
                if (!this.match(')')) {
                  while (true) {
                    var e = this.match('...')
                      ? this.parseSpreadElement()
                      : this.isolateCoverGrammar(this.parseAssignmentExpression)
                    t.push(e)
                    if (this.match(')')) {
                      break
                    }
                    this.expectCommaSeparator()
                    if (this.match(')')) {
                      break
                    }
                  }
                }
                this.expect(')')
                return t
              }
              Parser.prototype.isIdentifierName = function (t) {
                return (
                  t.type === 3 || t.type === 4 || t.type === 1 || t.type === 5
                )
              }
              Parser.prototype.parseIdentifierName = function () {
                var t = this.createNode()
                var e = this.nextToken()
                if (!this.isIdentifierName(e)) {
                  this.throwUnexpectedToken(e)
                }
                return this.finalize(t, new a.Identifier(e.value))
              }
              Parser.prototype.parseNewExpression = function () {
                var t = this.createNode()
                var e = this.parseIdentifierName()
                r.assert(
                  e.name === 'new',
                  'New expression must start with `new`'
                )
                var i
                if (this.match('.')) {
                  this.nextToken()
                  if (
                    this.lookahead.type === 3 &&
                    this.context.inFunctionBody &&
                    this.lookahead.value === 'target'
                  ) {
                    var n = this.parseIdentifierName()
                    i = new a.MetaProperty(e, n)
                  } else {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                } else {
                  var s = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpression
                  )
                  var u = this.match('(') ? this.parseArguments() : []
                  i = new a.NewExpression(s, u)
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                }
                return this.finalize(t, i)
              }
              Parser.prototype.parseAsyncArgument = function () {
                var t = this.parseAssignmentExpression()
                this.context.firstCoverInitializedNameError = null
                return t
              }
              Parser.prototype.parseAsyncArguments = function () {
                this.expect('(')
                var t = []
                if (!this.match(')')) {
                  while (true) {
                    var e = this.match('...')
                      ? this.parseSpreadElement()
                      : this.isolateCoverGrammar(this.parseAsyncArgument)
                    t.push(e)
                    if (this.match(')')) {
                      break
                    }
                    this.expectCommaSeparator()
                    if (this.match(')')) {
                      break
                    }
                  }
                }
                this.expect(')')
                return t
              }
              Parser.prototype.parseLeftHandSideExpressionAllowCall =
                function () {
                  var t = this.lookahead
                  var e = this.matchContextualKeyword('async')
                  var i = this.context.allowIn
                  this.context.allowIn = true
                  var r
                  if (
                    this.matchKeyword('super') &&
                    this.context.inFunctionBody
                  ) {
                    r = this.createNode()
                    this.nextToken()
                    r = this.finalize(r, new a.Super())
                    if (
                      !this.match('(') &&
                      !this.match('.') &&
                      !this.match('[')
                    ) {
                      this.throwUnexpectedToken(this.lookahead)
                    }
                  } else {
                    r = this.inheritCoverGrammar(
                      this.matchKeyword('new')
                        ? this.parseNewExpression
                        : this.parsePrimaryExpression
                    )
                  }
                  while (true) {
                    if (this.match('.')) {
                      this.context.isBindingElement = false
                      this.context.isAssignmentTarget = true
                      this.expect('.')
                      var n = this.parseIdentifierName()
                      r = this.finalize(
                        this.startNode(t),
                        new a.StaticMemberExpression(r, n)
                      )
                    } else if (this.match('(')) {
                      var s = e && t.lineNumber === this.lookahead.lineNumber
                      this.context.isBindingElement = false
                      this.context.isAssignmentTarget = false
                      var u = s
                        ? this.parseAsyncArguments()
                        : this.parseArguments()
                      r = this.finalize(
                        this.startNode(t),
                        new a.CallExpression(r, u)
                      )
                      if (s && this.match('=>')) {
                        for (var h = 0; h < u.length; ++h) {
                          this.reinterpretExpressionAsPattern(u[h])
                        }
                        r = { type: l, params: u, async: true }
                      }
                    } else if (this.match('[')) {
                      this.context.isBindingElement = false
                      this.context.isAssignmentTarget = true
                      this.expect('[')
                      var n = this.isolateCoverGrammar(this.parseExpression)
                      this.expect(']')
                      r = this.finalize(
                        this.startNode(t),
                        new a.ComputedMemberExpression(r, n)
                      )
                    } else if (
                      this.lookahead.type === 10 &&
                      this.lookahead.head
                    ) {
                      var o = this.parseTemplateLiteral()
                      r = this.finalize(
                        this.startNode(t),
                        new a.TaggedTemplateExpression(r, o)
                      )
                    } else {
                      break
                    }
                  }
                  this.context.allowIn = i
                  return r
                }
              Parser.prototype.parseSuper = function () {
                var t = this.createNode()
                this.expectKeyword('super')
                if (!this.match('[') && !this.match('.')) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                return this.finalize(t, new a.Super())
              }
              Parser.prototype.parseLeftHandSideExpression = function () {
                r.assert(
                  this.context.allowIn,
                  'callee of new expression always allow in keyword.'
                )
                var t = this.startNode(this.lookahead)
                var e =
                  this.matchKeyword('super') && this.context.inFunctionBody
                    ? this.parseSuper()
                    : this.inheritCoverGrammar(
                        this.matchKeyword('new')
                          ? this.parseNewExpression
                          : this.parsePrimaryExpression
                      )
                while (true) {
                  if (this.match('[')) {
                    this.context.isBindingElement = false
                    this.context.isAssignmentTarget = true
                    this.expect('[')
                    var i = this.isolateCoverGrammar(this.parseExpression)
                    this.expect(']')
                    e = this.finalize(t, new a.ComputedMemberExpression(e, i))
                  } else if (this.match('.')) {
                    this.context.isBindingElement = false
                    this.context.isAssignmentTarget = true
                    this.expect('.')
                    var i = this.parseIdentifierName()
                    e = this.finalize(t, new a.StaticMemberExpression(e, i))
                  } else if (
                    this.lookahead.type === 10 &&
                    this.lookahead.head
                  ) {
                    var n = this.parseTemplateLiteral()
                    e = this.finalize(t, new a.TaggedTemplateExpression(e, n))
                  } else {
                    break
                  }
                }
                return e
              }
              Parser.prototype.parseUpdateExpression = function () {
                var t
                var e = this.lookahead
                if (this.match('++') || this.match('--')) {
                  var i = this.startNode(e)
                  var r = this.nextToken()
                  t = this.inheritCoverGrammar(this.parseUnaryExpression)
                  if (
                    this.context.strict &&
                    t.type === h.Syntax.Identifier &&
                    this.scanner.isRestrictedWord(t.name)
                  ) {
                    this.tolerateError(s.Messages.StrictLHSPrefix)
                  }
                  if (!this.context.isAssignmentTarget) {
                    this.tolerateError(s.Messages.InvalidLHSInAssignment)
                  }
                  var n = true
                  t = this.finalize(i, new a.UpdateExpression(r.value, t, n))
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                } else {
                  t = this.inheritCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                  if (!this.hasLineTerminator && this.lookahead.type === 7) {
                    if (this.match('++') || this.match('--')) {
                      if (
                        this.context.strict &&
                        t.type === h.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(t.name)
                      ) {
                        this.tolerateError(s.Messages.StrictLHSPostfix)
                      }
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(s.Messages.InvalidLHSInAssignment)
                      }
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      var u = this.nextToken().value
                      var n = false
                      t = this.finalize(
                        this.startNode(e),
                        new a.UpdateExpression(u, t, n)
                      )
                    }
                  }
                }
                return t
              }
              Parser.prototype.parseAwaitExpression = function () {
                var t = this.createNode()
                this.nextToken()
                var e = this.parseUnaryExpression()
                return this.finalize(t, new a.AwaitExpression(e))
              }
              Parser.prototype.parseUnaryExpression = function () {
                var t
                if (
                  this.match('+') ||
                  this.match('-') ||
                  this.match('~') ||
                  this.match('!') ||
                  this.matchKeyword('delete') ||
                  this.matchKeyword('void') ||
                  this.matchKeyword('typeof')
                ) {
                  var e = this.startNode(this.lookahead)
                  var i = this.nextToken()
                  t = this.inheritCoverGrammar(this.parseUnaryExpression)
                  t = this.finalize(e, new a.UnaryExpression(i.value, t))
                  if (
                    this.context.strict &&
                    t.operator === 'delete' &&
                    t.argument.type === h.Syntax.Identifier
                  ) {
                    this.tolerateError(s.Messages.StrictDelete)
                  }
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                } else if (
                  this.context.await &&
                  this.matchContextualKeyword('await')
                ) {
                  t = this.parseAwaitExpression()
                } else {
                  t = this.parseUpdateExpression()
                }
                return t
              }
              Parser.prototype.parseExponentiationExpression = function () {
                var t = this.lookahead
                var e = this.inheritCoverGrammar(this.parseUnaryExpression)
                if (e.type !== h.Syntax.UnaryExpression && this.match('**')) {
                  this.nextToken()
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                  var i = e
                  var r = this.isolateCoverGrammar(
                    this.parseExponentiationExpression
                  )
                  e = this.finalize(
                    this.startNode(t),
                    new a.BinaryExpression('**', i, r)
                  )
                }
                return e
              }
              Parser.prototype.binaryPrecedence = function (t) {
                var e = t.value
                var i
                if (t.type === 7) {
                  i = this.operatorPrecedence[e] || 0
                } else if (t.type === 4) {
                  i =
                    e === 'instanceof' || (this.context.allowIn && e === 'in')
                      ? 7
                      : 0
                } else {
                  i = 0
                }
                return i
              }
              Parser.prototype.parseBinaryExpression = function () {
                var t = this.lookahead
                var e = this.inheritCoverGrammar(
                  this.parseExponentiationExpression
                )
                var i = this.lookahead
                var r = this.binaryPrecedence(i)
                if (r > 0) {
                  this.nextToken()
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                  var n = [t, this.lookahead]
                  var s = e
                  var u = this.isolateCoverGrammar(
                    this.parseExponentiationExpression
                  )
                  var h = [s, i.value, u]
                  var o = [r]
                  while (true) {
                    r = this.binaryPrecedence(this.lookahead)
                    if (r <= 0) {
                      break
                    }
                    while (h.length > 2 && r <= o[o.length - 1]) {
                      u = h.pop()
                      var l = h.pop()
                      o.pop()
                      s = h.pop()
                      n.pop()
                      var c = this.startNode(n[n.length - 1])
                      h.push(this.finalize(c, new a.BinaryExpression(l, s, u)))
                    }
                    h.push(this.nextToken().value)
                    o.push(r)
                    n.push(this.lookahead)
                    h.push(
                      this.isolateCoverGrammar(
                        this.parseExponentiationExpression
                      )
                    )
                  }
                  var p = h.length - 1
                  e = h[p]
                  var f = n.pop()
                  while (p > 1) {
                    var D = n.pop()
                    var x = f && f.lineStart
                    var c = this.startNode(D, x)
                    var l = h[p - 1]
                    e = this.finalize(c, new a.BinaryExpression(l, h[p - 2], e))
                    p -= 2
                    f = D
                  }
                }
                return e
              }
              Parser.prototype.parseConditionalExpression = function () {
                var t = this.lookahead
                var e = this.inheritCoverGrammar(this.parseBinaryExpression)
                if (this.match('?')) {
                  this.nextToken()
                  var i = this.context.allowIn
                  this.context.allowIn = true
                  var r = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  this.context.allowIn = i
                  this.expect(':')
                  var n = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  e = this.finalize(
                    this.startNode(t),
                    new a.ConditionalExpression(e, r, n)
                  )
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                }
                return e
              }
              Parser.prototype.checkPatternParam = function (t, e) {
                switch (e.type) {
                  case h.Syntax.Identifier:
                    this.validateParam(t, e, e.name)
                    break
                  case h.Syntax.RestElement:
                    this.checkPatternParam(t, e.argument)
                    break
                  case h.Syntax.AssignmentPattern:
                    this.checkPatternParam(t, e.left)
                    break
                  case h.Syntax.ArrayPattern:
                    for (var i = 0; i < e.elements.length; i++) {
                      if (e.elements[i] !== null) {
                        this.checkPatternParam(t, e.elements[i])
                      }
                    }
                    break
                  case h.Syntax.ObjectPattern:
                    for (var i = 0; i < e.properties.length; i++) {
                      this.checkPatternParam(t, e.properties[i].value)
                    }
                    break
                  default:
                    break
                }
                t.simple = t.simple && e instanceof a.Identifier
              }
              Parser.prototype.reinterpretAsCoverFormalsList = function (t) {
                var e = [t]
                var i
                var r = false
                switch (t.type) {
                  case h.Syntax.Identifier:
                    break
                  case l:
                    e = t.params
                    r = t.async
                    break
                  default:
                    return null
                }
                i = { simple: true, paramSet: {} }
                for (var n = 0; n < e.length; ++n) {
                  var a = e[n]
                  if (a.type === h.Syntax.AssignmentPattern) {
                    if (a.right.type === h.Syntax.YieldExpression) {
                      if (a.right.argument) {
                        this.throwUnexpectedToken(this.lookahead)
                      }
                      a.right.type = h.Syntax.Identifier
                      a.right.name = 'yield'
                      delete a.right.argument
                      delete a.right.delegate
                    }
                  } else if (
                    r &&
                    a.type === h.Syntax.Identifier &&
                    a.name === 'await'
                  ) {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                  this.checkPatternParam(i, a)
                  e[n] = a
                }
                if (this.context.strict || !this.context.allowYield) {
                  for (var n = 0; n < e.length; ++n) {
                    var a = e[n]
                    if (a.type === h.Syntax.YieldExpression) {
                      this.throwUnexpectedToken(this.lookahead)
                    }
                  }
                }
                if (i.message === s.Messages.StrictParamDupe) {
                  var u = this.context.strict ? i.stricted : i.firstRestricted
                  this.throwUnexpectedToken(u, i.message)
                }
                return {
                  simple: i.simple,
                  params: e,
                  stricted: i.stricted,
                  firstRestricted: i.firstRestricted,
                  message: i.message,
                }
              }
              Parser.prototype.parseAssignmentExpression = function () {
                var t
                if (!this.context.allowYield && this.matchKeyword('yield')) {
                  t = this.parseYieldExpression()
                } else {
                  var e = this.lookahead
                  var i = e
                  t = this.parseConditionalExpression()
                  if (
                    i.type === 3 &&
                    i.lineNumber === this.lookahead.lineNumber &&
                    i.value === 'async'
                  ) {
                    if (
                      this.lookahead.type === 3 ||
                      this.matchKeyword('yield')
                    ) {
                      var r = this.parsePrimaryExpression()
                      this.reinterpretExpressionAsPattern(r)
                      t = { type: l, params: [r], async: true }
                    }
                  }
                  if (t.type === l || this.match('=>')) {
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    var n = t.async
                    var u = this.reinterpretAsCoverFormalsList(t)
                    if (u) {
                      if (this.hasLineTerminator) {
                        this.tolerateUnexpectedToken(this.lookahead)
                      }
                      this.context.firstCoverInitializedNameError = null
                      var o = this.context.strict
                      var c = this.context.allowStrictDirective
                      this.context.allowStrictDirective = u.simple
                      var p = this.context.allowYield
                      var f = this.context.await
                      this.context.allowYield = true
                      this.context.await = n
                      var D = this.startNode(e)
                      this.expect('=>')
                      var x = void 0
                      if (this.match('{')) {
                        var E = this.context.allowIn
                        this.context.allowIn = true
                        x = this.parseFunctionSourceElements()
                        this.context.allowIn = E
                      } else {
                        x = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        )
                      }
                      var m = x.type !== h.Syntax.BlockStatement
                      if (this.context.strict && u.firstRestricted) {
                        this.throwUnexpectedToken(u.firstRestricted, u.message)
                      }
                      if (this.context.strict && u.stricted) {
                        this.tolerateUnexpectedToken(u.stricted, u.message)
                      }
                      t = n
                        ? this.finalize(
                            D,
                            new a.AsyncArrowFunctionExpression(u.params, x, m)
                          )
                        : this.finalize(
                            D,
                            new a.ArrowFunctionExpression(u.params, x, m)
                          )
                      this.context.strict = o
                      this.context.allowStrictDirective = c
                      this.context.allowYield = p
                      this.context.await = f
                    }
                  } else {
                    if (this.matchAssign()) {
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(s.Messages.InvalidLHSInAssignment)
                      }
                      if (
                        this.context.strict &&
                        t.type === h.Syntax.Identifier
                      ) {
                        var v = t
                        if (this.scanner.isRestrictedWord(v.name)) {
                          this.tolerateUnexpectedToken(
                            i,
                            s.Messages.StrictLHSAssignment
                          )
                        }
                        if (this.scanner.isStrictModeReservedWord(v.name)) {
                          this.tolerateUnexpectedToken(
                            i,
                            s.Messages.StrictReservedWord
                          )
                        }
                      }
                      if (!this.match('=')) {
                        this.context.isAssignmentTarget = false
                        this.context.isBindingElement = false
                      } else {
                        this.reinterpretExpressionAsPattern(t)
                      }
                      i = this.nextToken()
                      var C = i.value
                      var S = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      t = this.finalize(
                        this.startNode(e),
                        new a.AssignmentExpression(C, t, S)
                      )
                      this.context.firstCoverInitializedNameError = null
                    }
                  }
                }
                return t
              }
              Parser.prototype.parseExpression = function () {
                var t = this.lookahead
                var e = this.isolateCoverGrammar(this.parseAssignmentExpression)
                if (this.match(',')) {
                  var i = []
                  i.push(e)
                  while (this.lookahead.type !== 2) {
                    if (!this.match(',')) {
                      break
                    }
                    this.nextToken()
                    i.push(
                      this.isolateCoverGrammar(this.parseAssignmentExpression)
                    )
                  }
                  e = this.finalize(
                    this.startNode(t),
                    new a.SequenceExpression(i)
                  )
                }
                return e
              }
              Parser.prototype.parseStatementListItem = function () {
                var t
                this.context.isAssignmentTarget = true
                this.context.isBindingElement = true
                if (this.lookahead.type === 4) {
                  switch (this.lookahead.value) {
                    case 'export':
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(
                          this.lookahead,
                          s.Messages.IllegalExportDeclaration
                        )
                      }
                      t = this.parseExportDeclaration()
                      break
                    case 'import':
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(
                          this.lookahead,
                          s.Messages.IllegalImportDeclaration
                        )
                      }
                      t = this.parseImportDeclaration()
                      break
                    case 'const':
                      t = this.parseLexicalDeclaration({ inFor: false })
                      break
                    case 'function':
                      t = this.parseFunctionDeclaration()
                      break
                    case 'class':
                      t = this.parseClassDeclaration()
                      break
                    case 'let':
                      t = this.isLexicalDeclaration()
                        ? this.parseLexicalDeclaration({ inFor: false })
                        : this.parseStatement()
                      break
                    default:
                      t = this.parseStatement()
                      break
                  }
                } else {
                  t = this.parseStatement()
                }
                return t
              }
              Parser.prototype.parseBlock = function () {
                var t = this.createNode()
                this.expect('{')
                var e = []
                while (true) {
                  if (this.match('}')) {
                    break
                  }
                  e.push(this.parseStatementListItem())
                }
                this.expect('}')
                return this.finalize(t, new a.BlockStatement(e))
              }
              Parser.prototype.parseLexicalBinding = function (t, e) {
                var i = this.createNode()
                var r = []
                var n = this.parsePattern(r, t)
                if (this.context.strict && n.type === h.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(n.name)) {
                    this.tolerateError(s.Messages.StrictVarName)
                  }
                }
                var u = null
                if (t === 'const') {
                  if (
                    !this.matchKeyword('in') &&
                    !this.matchContextualKeyword('of')
                  ) {
                    if (this.match('=')) {
                      this.nextToken()
                      u = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                    } else {
                      this.throwError(
                        s.Messages.DeclarationMissingInitializer,
                        'const'
                      )
                    }
                  }
                } else if (
                  (!e.inFor && n.type !== h.Syntax.Identifier) ||
                  this.match('=')
                ) {
                  this.expect('=')
                  u = this.isolateCoverGrammar(this.parseAssignmentExpression)
                }
                return this.finalize(i, new a.VariableDeclarator(n, u))
              }
              Parser.prototype.parseBindingList = function (t, e) {
                var i = [this.parseLexicalBinding(t, e)]
                while (this.match(',')) {
                  this.nextToken()
                  i.push(this.parseLexicalBinding(t, e))
                }
                return i
              }
              Parser.prototype.isLexicalDeclaration = function () {
                var t = this.scanner.saveState()
                this.scanner.scanComments()
                var e = this.scanner.lex()
                this.scanner.restoreState(t)
                return (
                  e.type === 3 ||
                  (e.type === 7 && e.value === '[') ||
                  (e.type === 7 && e.value === '{') ||
                  (e.type === 4 && e.value === 'let') ||
                  (e.type === 4 && e.value === 'yield')
                )
              }
              Parser.prototype.parseLexicalDeclaration = function (t) {
                var e = this.createNode()
                var i = this.nextToken().value
                r.assert(
                  i === 'let' || i === 'const',
                  'Lexical declaration must be either let or const'
                )
                var n = this.parseBindingList(i, t)
                this.consumeSemicolon()
                return this.finalize(e, new a.VariableDeclaration(n, i))
              }
              Parser.prototype.parseBindingRestElement = function (t, e) {
                var i = this.createNode()
                this.expect('...')
                var r = this.parsePattern(t, e)
                return this.finalize(i, new a.RestElement(r))
              }
              Parser.prototype.parseArrayPattern = function (t, e) {
                var i = this.createNode()
                this.expect('[')
                var r = []
                while (!this.match(']')) {
                  if (this.match(',')) {
                    this.nextToken()
                    r.push(null)
                  } else {
                    if (this.match('...')) {
                      r.push(this.parseBindingRestElement(t, e))
                      break
                    } else {
                      r.push(this.parsePatternWithDefault(t, e))
                    }
                    if (!this.match(']')) {
                      this.expect(',')
                    }
                  }
                }
                this.expect(']')
                return this.finalize(i, new a.ArrayPattern(r))
              }
              Parser.prototype.parsePropertyPattern = function (t, e) {
                var i = this.createNode()
                var r = false
                var n = false
                var s = false
                var u
                var h
                if (this.lookahead.type === 3) {
                  var o = this.lookahead
                  u = this.parseVariableIdentifier()
                  var l = this.finalize(i, new a.Identifier(o.value))
                  if (this.match('=')) {
                    t.push(o)
                    n = true
                    this.nextToken()
                    var c = this.parseAssignmentExpression()
                    h = this.finalize(
                      this.startNode(o),
                      new a.AssignmentPattern(l, c)
                    )
                  } else if (!this.match(':')) {
                    t.push(o)
                    n = true
                    h = l
                  } else {
                    this.expect(':')
                    h = this.parsePatternWithDefault(t, e)
                  }
                } else {
                  r = this.match('[')
                  u = this.parseObjectPropertyKey()
                  this.expect(':')
                  h = this.parsePatternWithDefault(t, e)
                }
                return this.finalize(i, new a.Property('init', u, r, h, s, n))
              }
              Parser.prototype.parseObjectPattern = function (t, e) {
                var i = this.createNode()
                var r = []
                this.expect('{')
                while (!this.match('}')) {
                  r.push(this.parsePropertyPattern(t, e))
                  if (!this.match('}')) {
                    this.expect(',')
                  }
                }
                this.expect('}')
                return this.finalize(i, new a.ObjectPattern(r))
              }
              Parser.prototype.parsePattern = function (t, e) {
                var i
                if (this.match('[')) {
                  i = this.parseArrayPattern(t, e)
                } else if (this.match('{')) {
                  i = this.parseObjectPattern(t, e)
                } else {
                  if (
                    this.matchKeyword('let') &&
                    (e === 'const' || e === 'let')
                  ) {
                    this.tolerateUnexpectedToken(
                      this.lookahead,
                      s.Messages.LetInLexicalBinding
                    )
                  }
                  t.push(this.lookahead)
                  i = this.parseVariableIdentifier(e)
                }
                return i
              }
              Parser.prototype.parsePatternWithDefault = function (t, e) {
                var i = this.lookahead
                var r = this.parsePattern(t, e)
                if (this.match('=')) {
                  this.nextToken()
                  var n = this.context.allowYield
                  this.context.allowYield = true
                  var s = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  this.context.allowYield = n
                  r = this.finalize(
                    this.startNode(i),
                    new a.AssignmentPattern(r, s)
                  )
                }
                return r
              }
              Parser.prototype.parseVariableIdentifier = function (t) {
                var e = this.createNode()
                var i = this.nextToken()
                if (i.type === 4 && i.value === 'yield') {
                  if (this.context.strict) {
                    this.tolerateUnexpectedToken(
                      i,
                      s.Messages.StrictReservedWord
                    )
                  } else if (!this.context.allowYield) {
                    this.throwUnexpectedToken(i)
                  }
                } else if (i.type !== 3) {
                  if (
                    this.context.strict &&
                    i.type === 4 &&
                    this.scanner.isStrictModeReservedWord(i.value)
                  ) {
                    this.tolerateUnexpectedToken(
                      i,
                      s.Messages.StrictReservedWord
                    )
                  } else {
                    if (
                      this.context.strict ||
                      i.value !== 'let' ||
                      t !== 'var'
                    ) {
                      this.throwUnexpectedToken(i)
                    }
                  }
                } else if (
                  (this.context.isModule || this.context.await) &&
                  i.type === 3 &&
                  i.value === 'await'
                ) {
                  this.tolerateUnexpectedToken(i)
                }
                return this.finalize(e, new a.Identifier(i.value))
              }
              Parser.prototype.parseVariableDeclaration = function (t) {
                var e = this.createNode()
                var i = []
                var r = this.parsePattern(i, 'var')
                if (this.context.strict && r.type === h.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(r.name)) {
                    this.tolerateError(s.Messages.StrictVarName)
                  }
                }
                var n = null
                if (this.match('=')) {
                  this.nextToken()
                  n = this.isolateCoverGrammar(this.parseAssignmentExpression)
                } else if (r.type !== h.Syntax.Identifier && !t.inFor) {
                  this.expect('=')
                }
                return this.finalize(e, new a.VariableDeclarator(r, n))
              }
              Parser.prototype.parseVariableDeclarationList = function (t) {
                var e = { inFor: t.inFor }
                var i = []
                i.push(this.parseVariableDeclaration(e))
                while (this.match(',')) {
                  this.nextToken()
                  i.push(this.parseVariableDeclaration(e))
                }
                return i
              }
              Parser.prototype.parseVariableStatement = function () {
                var t = this.createNode()
                this.expectKeyword('var')
                var e = this.parseVariableDeclarationList({ inFor: false })
                this.consumeSemicolon()
                return this.finalize(t, new a.VariableDeclaration(e, 'var'))
              }
              Parser.prototype.parseEmptyStatement = function () {
                var t = this.createNode()
                this.expect(';')
                return this.finalize(t, new a.EmptyStatement())
              }
              Parser.prototype.parseExpressionStatement = function () {
                var t = this.createNode()
                var e = this.parseExpression()
                this.consumeSemicolon()
                return this.finalize(t, new a.ExpressionStatement(e))
              }
              Parser.prototype.parseIfClause = function () {
                if (this.context.strict && this.matchKeyword('function')) {
                  this.tolerateError(s.Messages.StrictFunction)
                }
                return this.parseStatement()
              }
              Parser.prototype.parseIfStatement = function () {
                var t = this.createNode()
                var e
                var i = null
                this.expectKeyword('if')
                this.expect('(')
                var r = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  e = this.finalize(this.createNode(), new a.EmptyStatement())
                } else {
                  this.expect(')')
                  e = this.parseIfClause()
                  if (this.matchKeyword('else')) {
                    this.nextToken()
                    i = this.parseIfClause()
                  }
                }
                return this.finalize(t, new a.IfStatement(r, e, i))
              }
              Parser.prototype.parseDoWhileStatement = function () {
                var t = this.createNode()
                this.expectKeyword('do')
                var e = this.context.inIteration
                this.context.inIteration = true
                var i = this.parseStatement()
                this.context.inIteration = e
                this.expectKeyword('while')
                this.expect('(')
                var r = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                } else {
                  this.expect(')')
                  if (this.match(';')) {
                    this.nextToken()
                  }
                }
                return this.finalize(t, new a.DoWhileStatement(i, r))
              }
              Parser.prototype.parseWhileStatement = function () {
                var t = this.createNode()
                var e
                this.expectKeyword('while')
                this.expect('(')
                var i = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  e = this.finalize(this.createNode(), new a.EmptyStatement())
                } else {
                  this.expect(')')
                  var r = this.context.inIteration
                  this.context.inIteration = true
                  e = this.parseStatement()
                  this.context.inIteration = r
                }
                return this.finalize(t, new a.WhileStatement(i, e))
              }
              Parser.prototype.parseForStatement = function () {
                var t = null
                var e = null
                var i = null
                var r = true
                var n, u
                var o = this.createNode()
                this.expectKeyword('for')
                this.expect('(')
                if (this.match(';')) {
                  this.nextToken()
                } else {
                  if (this.matchKeyword('var')) {
                    t = this.createNode()
                    this.nextToken()
                    var l = this.context.allowIn
                    this.context.allowIn = false
                    var c = this.parseVariableDeclarationList({ inFor: true })
                    this.context.allowIn = l
                    if (c.length === 1 && this.matchKeyword('in')) {
                      var p = c[0]
                      if (
                        p.init &&
                        (p.id.type === h.Syntax.ArrayPattern ||
                          p.id.type === h.Syntax.ObjectPattern ||
                          this.context.strict)
                      ) {
                        this.tolerateError(
                          s.Messages.ForInOfLoopInitializer,
                          'for-in'
                        )
                      }
                      t = this.finalize(t, new a.VariableDeclaration(c, 'var'))
                      this.nextToken()
                      n = t
                      u = this.parseExpression()
                      t = null
                    } else if (
                      c.length === 1 &&
                      c[0].init === null &&
                      this.matchContextualKeyword('of')
                    ) {
                      t = this.finalize(t, new a.VariableDeclaration(c, 'var'))
                      this.nextToken()
                      n = t
                      u = this.parseAssignmentExpression()
                      t = null
                      r = false
                    } else {
                      t = this.finalize(t, new a.VariableDeclaration(c, 'var'))
                      this.expect(';')
                    }
                  } else if (
                    this.matchKeyword('const') ||
                    this.matchKeyword('let')
                  ) {
                    t = this.createNode()
                    var f = this.nextToken().value
                    if (!this.context.strict && this.lookahead.value === 'in') {
                      t = this.finalize(t, new a.Identifier(f))
                      this.nextToken()
                      n = t
                      u = this.parseExpression()
                      t = null
                    } else {
                      var l = this.context.allowIn
                      this.context.allowIn = false
                      var c = this.parseBindingList(f, { inFor: true })
                      this.context.allowIn = l
                      if (
                        c.length === 1 &&
                        c[0].init === null &&
                        this.matchKeyword('in')
                      ) {
                        t = this.finalize(t, new a.VariableDeclaration(c, f))
                        this.nextToken()
                        n = t
                        u = this.parseExpression()
                        t = null
                      } else if (
                        c.length === 1 &&
                        c[0].init === null &&
                        this.matchContextualKeyword('of')
                      ) {
                        t = this.finalize(t, new a.VariableDeclaration(c, f))
                        this.nextToken()
                        n = t
                        u = this.parseAssignmentExpression()
                        t = null
                        r = false
                      } else {
                        this.consumeSemicolon()
                        t = this.finalize(t, new a.VariableDeclaration(c, f))
                      }
                    }
                  } else {
                    var D = this.lookahead
                    var l = this.context.allowIn
                    this.context.allowIn = false
                    t = this.inheritCoverGrammar(this.parseAssignmentExpression)
                    this.context.allowIn = l
                    if (this.matchKeyword('in')) {
                      if (
                        !this.context.isAssignmentTarget ||
                        t.type === h.Syntax.AssignmentExpression
                      ) {
                        this.tolerateError(s.Messages.InvalidLHSInForIn)
                      }
                      this.nextToken()
                      this.reinterpretExpressionAsPattern(t)
                      n = t
                      u = this.parseExpression()
                      t = null
                    } else if (this.matchContextualKeyword('of')) {
                      if (
                        !this.context.isAssignmentTarget ||
                        t.type === h.Syntax.AssignmentExpression
                      ) {
                        this.tolerateError(s.Messages.InvalidLHSInForLoop)
                      }
                      this.nextToken()
                      this.reinterpretExpressionAsPattern(t)
                      n = t
                      u = this.parseAssignmentExpression()
                      t = null
                      r = false
                    } else {
                      if (this.match(',')) {
                        var x = [t]
                        while (this.match(',')) {
                          this.nextToken()
                          x.push(
                            this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          )
                        }
                        t = this.finalize(
                          this.startNode(D),
                          new a.SequenceExpression(x)
                        )
                      }
                      this.expect(';')
                    }
                  }
                }
                if (typeof n === 'undefined') {
                  if (!this.match(';')) {
                    e = this.parseExpression()
                  }
                  this.expect(';')
                  if (!this.match(')')) {
                    i = this.parseExpression()
                  }
                }
                var E
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  E = this.finalize(this.createNode(), new a.EmptyStatement())
                } else {
                  this.expect(')')
                  var m = this.context.inIteration
                  this.context.inIteration = true
                  E = this.isolateCoverGrammar(this.parseStatement)
                  this.context.inIteration = m
                }
                return typeof n === 'undefined'
                  ? this.finalize(o, new a.ForStatement(t, e, i, E))
                  : r
                  ? this.finalize(o, new a.ForInStatement(n, u, E))
                  : this.finalize(o, new a.ForOfStatement(n, u, E))
              }
              Parser.prototype.parseContinueStatement = function () {
                var t = this.createNode()
                this.expectKeyword('continue')
                var e = null
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var i = this.parseVariableIdentifier()
                  e = i
                  var r = '$' + i.name
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      r
                    )
                  ) {
                    this.throwError(s.Messages.UnknownLabel, i.name)
                  }
                }
                this.consumeSemicolon()
                if (e === null && !this.context.inIteration) {
                  this.throwError(s.Messages.IllegalContinue)
                }
                return this.finalize(t, new a.ContinueStatement(e))
              }
              Parser.prototype.parseBreakStatement = function () {
                var t = this.createNode()
                this.expectKeyword('break')
                var e = null
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var i = this.parseVariableIdentifier()
                  var r = '$' + i.name
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      r
                    )
                  ) {
                    this.throwError(s.Messages.UnknownLabel, i.name)
                  }
                  e = i
                }
                this.consumeSemicolon()
                if (
                  e === null &&
                  !this.context.inIteration &&
                  !this.context.inSwitch
                ) {
                  this.throwError(s.Messages.IllegalBreak)
                }
                return this.finalize(t, new a.BreakStatement(e))
              }
              Parser.prototype.parseReturnStatement = function () {
                if (!this.context.inFunctionBody) {
                  this.tolerateError(s.Messages.IllegalReturn)
                }
                var t = this.createNode()
                this.expectKeyword('return')
                var e =
                  (!this.match(';') &&
                    !this.match('}') &&
                    !this.hasLineTerminator &&
                    this.lookahead.type !== 2) ||
                  this.lookahead.type === 8 ||
                  this.lookahead.type === 10
                var i = e ? this.parseExpression() : null
                this.consumeSemicolon()
                return this.finalize(t, new a.ReturnStatement(i))
              }
              Parser.prototype.parseWithStatement = function () {
                if (this.context.strict) {
                  this.tolerateError(s.Messages.StrictModeWith)
                }
                var t = this.createNode()
                var e
                this.expectKeyword('with')
                this.expect('(')
                var i = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  e = this.finalize(this.createNode(), new a.EmptyStatement())
                } else {
                  this.expect(')')
                  e = this.parseStatement()
                }
                return this.finalize(t, new a.WithStatement(i, e))
              }
              Parser.prototype.parseSwitchCase = function () {
                var t = this.createNode()
                var e
                if (this.matchKeyword('default')) {
                  this.nextToken()
                  e = null
                } else {
                  this.expectKeyword('case')
                  e = this.parseExpression()
                }
                this.expect(':')
                var i = []
                while (true) {
                  if (
                    this.match('}') ||
                    this.matchKeyword('default') ||
                    this.matchKeyword('case')
                  ) {
                    break
                  }
                  i.push(this.parseStatementListItem())
                }
                return this.finalize(t, new a.SwitchCase(e, i))
              }
              Parser.prototype.parseSwitchStatement = function () {
                var t = this.createNode()
                this.expectKeyword('switch')
                this.expect('(')
                var e = this.parseExpression()
                this.expect(')')
                var i = this.context.inSwitch
                this.context.inSwitch = true
                var r = []
                var n = false
                this.expect('{')
                while (true) {
                  if (this.match('}')) {
                    break
                  }
                  var u = this.parseSwitchCase()
                  if (u.test === null) {
                    if (n) {
                      this.throwError(s.Messages.MultipleDefaultsInSwitch)
                    }
                    n = true
                  }
                  r.push(u)
                }
                this.expect('}')
                this.context.inSwitch = i
                return this.finalize(t, new a.SwitchStatement(e, r))
              }
              Parser.prototype.parseLabelledStatement = function () {
                var t = this.createNode()
                var e = this.parseExpression()
                var i
                if (e.type === h.Syntax.Identifier && this.match(':')) {
                  this.nextToken()
                  var r = e
                  var n = '$' + r.name
                  if (
                    Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      n
                    )
                  ) {
                    this.throwError(s.Messages.Redeclaration, 'Label', r.name)
                  }
                  this.context.labelSet[n] = true
                  var u = void 0
                  if (this.matchKeyword('class')) {
                    this.tolerateUnexpectedToken(this.lookahead)
                    u = this.parseClassDeclaration()
                  } else if (this.matchKeyword('function')) {
                    var o = this.lookahead
                    var l = this.parseFunctionDeclaration()
                    if (this.context.strict) {
                      this.tolerateUnexpectedToken(o, s.Messages.StrictFunction)
                    } else if (l.generator) {
                      this.tolerateUnexpectedToken(
                        o,
                        s.Messages.GeneratorInLegacyContext
                      )
                    }
                    u = l
                  } else {
                    u = this.parseStatement()
                  }
                  delete this.context.labelSet[n]
                  i = new a.LabeledStatement(r, u)
                } else {
                  this.consumeSemicolon()
                  i = new a.ExpressionStatement(e)
                }
                return this.finalize(t, i)
              }
              Parser.prototype.parseThrowStatement = function () {
                var t = this.createNode()
                this.expectKeyword('throw')
                if (this.hasLineTerminator) {
                  this.throwError(s.Messages.NewlineAfterThrow)
                }
                var e = this.parseExpression()
                this.consumeSemicolon()
                return this.finalize(t, new a.ThrowStatement(e))
              }
              Parser.prototype.parseCatchClause = function () {
                var t = this.createNode()
                this.expectKeyword('catch')
                this.expect('(')
                if (this.match(')')) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                var e = []
                var i = this.parsePattern(e)
                var r = {}
                for (var n = 0; n < e.length; n++) {
                  var u = '$' + e[n].value
                  if (Object.prototype.hasOwnProperty.call(r, u)) {
                    this.tolerateError(s.Messages.DuplicateBinding, e[n].value)
                  }
                  r[u] = true
                }
                if (this.context.strict && i.type === h.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(i.name)) {
                    this.tolerateError(s.Messages.StrictCatchVariable)
                  }
                }
                this.expect(')')
                var o = this.parseBlock()
                return this.finalize(t, new a.CatchClause(i, o))
              }
              Parser.prototype.parseFinallyClause = function () {
                this.expectKeyword('finally')
                return this.parseBlock()
              }
              Parser.prototype.parseTryStatement = function () {
                var t = this.createNode()
                this.expectKeyword('try')
                var e = this.parseBlock()
                var i = this.matchKeyword('catch')
                  ? this.parseCatchClause()
                  : null
                var r = this.matchKeyword('finally')
                  ? this.parseFinallyClause()
                  : null
                if (!i && !r) {
                  this.throwError(s.Messages.NoCatchOrFinally)
                }
                return this.finalize(t, new a.TryStatement(e, i, r))
              }
              Parser.prototype.parseDebuggerStatement = function () {
                var t = this.createNode()
                this.expectKeyword('debugger')
                this.consumeSemicolon()
                return this.finalize(t, new a.DebuggerStatement())
              }
              Parser.prototype.parseStatement = function () {
                var t
                switch (this.lookahead.type) {
                  case 1:
                  case 5:
                  case 6:
                  case 8:
                  case 10:
                  case 9:
                    t = this.parseExpressionStatement()
                    break
                  case 7:
                    var e = this.lookahead.value
                    if (e === '{') {
                      t = this.parseBlock()
                    } else if (e === '(') {
                      t = this.parseExpressionStatement()
                    } else if (e === ';') {
                      t = this.parseEmptyStatement()
                    } else {
                      t = this.parseExpressionStatement()
                    }
                    break
                  case 3:
                    t = this.matchAsyncFunction()
                      ? this.parseFunctionDeclaration()
                      : this.parseLabelledStatement()
                    break
                  case 4:
                    switch (this.lookahead.value) {
                      case 'break':
                        t = this.parseBreakStatement()
                        break
                      case 'continue':
                        t = this.parseContinueStatement()
                        break
                      case 'debugger':
                        t = this.parseDebuggerStatement()
                        break
                      case 'do':
                        t = this.parseDoWhileStatement()
                        break
                      case 'for':
                        t = this.parseForStatement()
                        break
                      case 'function':
                        t = this.parseFunctionDeclaration()
                        break
                      case 'if':
                        t = this.parseIfStatement()
                        break
                      case 'return':
                        t = this.parseReturnStatement()
                        break
                      case 'switch':
                        t = this.parseSwitchStatement()
                        break
                      case 'throw':
                        t = this.parseThrowStatement()
                        break
                      case 'try':
                        t = this.parseTryStatement()
                        break
                      case 'var':
                        t = this.parseVariableStatement()
                        break
                      case 'while':
                        t = this.parseWhileStatement()
                        break
                      case 'with':
                        t = this.parseWithStatement()
                        break
                      default:
                        t = this.parseExpressionStatement()
                        break
                    }
                    break
                  default:
                    t = this.throwUnexpectedToken(this.lookahead)
                }
                return t
              }
              Parser.prototype.parseFunctionSourceElements = function () {
                var t = this.createNode()
                this.expect('{')
                var e = this.parseDirectivePrologues()
                var i = this.context.labelSet
                var r = this.context.inIteration
                var n = this.context.inSwitch
                var s = this.context.inFunctionBody
                this.context.labelSet = {}
                this.context.inIteration = false
                this.context.inSwitch = false
                this.context.inFunctionBody = true
                while (this.lookahead.type !== 2) {
                  if (this.match('}')) {
                    break
                  }
                  e.push(this.parseStatementListItem())
                }
                this.expect('}')
                this.context.labelSet = i
                this.context.inIteration = r
                this.context.inSwitch = n
                this.context.inFunctionBody = s
                return this.finalize(t, new a.BlockStatement(e))
              }
              Parser.prototype.validateParam = function (t, e, i) {
                var r = '$' + i
                if (this.context.strict) {
                  if (this.scanner.isRestrictedWord(i)) {
                    t.stricted = e
                    t.message = s.Messages.StrictParamName
                  }
                  if (Object.prototype.hasOwnProperty.call(t.paramSet, r)) {
                    t.stricted = e
                    t.message = s.Messages.StrictParamDupe
                  }
                } else if (!t.firstRestricted) {
                  if (this.scanner.isRestrictedWord(i)) {
                    t.firstRestricted = e
                    t.message = s.Messages.StrictParamName
                  } else if (this.scanner.isStrictModeReservedWord(i)) {
                    t.firstRestricted = e
                    t.message = s.Messages.StrictReservedWord
                  } else if (
                    Object.prototype.hasOwnProperty.call(t.paramSet, r)
                  ) {
                    t.stricted = e
                    t.message = s.Messages.StrictParamDupe
                  }
                }
                if (typeof Object.defineProperty === 'function') {
                  Object.defineProperty(t.paramSet, r, {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true,
                  })
                } else {
                  t.paramSet[r] = true
                }
              }
              Parser.prototype.parseRestElement = function (t) {
                var e = this.createNode()
                this.expect('...')
                var i = this.parsePattern(t)
                if (this.match('=')) {
                  this.throwError(s.Messages.DefaultRestParameter)
                }
                if (!this.match(')')) {
                  this.throwError(s.Messages.ParameterAfterRestParameter)
                }
                return this.finalize(e, new a.RestElement(i))
              }
              Parser.prototype.parseFormalParameter = function (t) {
                var e = []
                var i = this.match('...')
                  ? this.parseRestElement(e)
                  : this.parsePatternWithDefault(e)
                for (var r = 0; r < e.length; r++) {
                  this.validateParam(t, e[r], e[r].value)
                }
                t.simple = t.simple && i instanceof a.Identifier
                t.params.push(i)
              }
              Parser.prototype.parseFormalParameters = function (t) {
                var e
                e = { simple: true, params: [], firstRestricted: t }
                this.expect('(')
                if (!this.match(')')) {
                  e.paramSet = {}
                  while (this.lookahead.type !== 2) {
                    this.parseFormalParameter(e)
                    if (this.match(')')) {
                      break
                    }
                    this.expect(',')
                    if (this.match(')')) {
                      break
                    }
                  }
                }
                this.expect(')')
                return {
                  simple: e.simple,
                  params: e.params,
                  stricted: e.stricted,
                  firstRestricted: e.firstRestricted,
                  message: e.message,
                }
              }
              Parser.prototype.matchAsyncFunction = function () {
                var t = this.matchContextualKeyword('async')
                if (t) {
                  var e = this.scanner.saveState()
                  this.scanner.scanComments()
                  var i = this.scanner.lex()
                  this.scanner.restoreState(e)
                  t =
                    e.lineNumber === i.lineNumber &&
                    i.type === 4 &&
                    i.value === 'function'
                }
                return t
              }
              Parser.prototype.parseFunctionDeclaration = function (t) {
                var e = this.createNode()
                var i = this.matchContextualKeyword('async')
                if (i) {
                  this.nextToken()
                }
                this.expectKeyword('function')
                var r = i ? false : this.match('*')
                if (r) {
                  this.nextToken()
                }
                var n
                var u = null
                var h = null
                if (!t || !this.match('(')) {
                  var o = this.lookahead
                  u = this.parseVariableIdentifier()
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(o.value)) {
                      this.tolerateUnexpectedToken(
                        o,
                        s.Messages.StrictFunctionName
                      )
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(o.value)) {
                      h = o
                      n = s.Messages.StrictFunctionName
                    } else if (this.scanner.isStrictModeReservedWord(o.value)) {
                      h = o
                      n = s.Messages.StrictReservedWord
                    }
                  }
                }
                var l = this.context.await
                var c = this.context.allowYield
                this.context.await = i
                this.context.allowYield = !r
                var p = this.parseFormalParameters(h)
                var f = p.params
                var D = p.stricted
                h = p.firstRestricted
                if (p.message) {
                  n = p.message
                }
                var x = this.context.strict
                var E = this.context.allowStrictDirective
                this.context.allowStrictDirective = p.simple
                var m = this.parseFunctionSourceElements()
                if (this.context.strict && h) {
                  this.throwUnexpectedToken(h, n)
                }
                if (this.context.strict && D) {
                  this.tolerateUnexpectedToken(D, n)
                }
                this.context.strict = x
                this.context.allowStrictDirective = E
                this.context.await = l
                this.context.allowYield = c
                return i
                  ? this.finalize(e, new a.AsyncFunctionDeclaration(u, f, m))
                  : this.finalize(e, new a.FunctionDeclaration(u, f, m, r))
              }
              Parser.prototype.parseFunctionExpression = function () {
                var t = this.createNode()
                var e = this.matchContextualKeyword('async')
                if (e) {
                  this.nextToken()
                }
                this.expectKeyword('function')
                var i = e ? false : this.match('*')
                if (i) {
                  this.nextToken()
                }
                var r
                var n = null
                var u
                var h = this.context.await
                var o = this.context.allowYield
                this.context.await = e
                this.context.allowYield = !i
                if (!this.match('(')) {
                  var l = this.lookahead
                  n =
                    !this.context.strict && !i && this.matchKeyword('yield')
                      ? this.parseIdentifierName()
                      : this.parseVariableIdentifier()
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(l.value)) {
                      this.tolerateUnexpectedToken(
                        l,
                        s.Messages.StrictFunctionName
                      )
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(l.value)) {
                      u = l
                      r = s.Messages.StrictFunctionName
                    } else if (this.scanner.isStrictModeReservedWord(l.value)) {
                      u = l
                      r = s.Messages.StrictReservedWord
                    }
                  }
                }
                var c = this.parseFormalParameters(u)
                var p = c.params
                var f = c.stricted
                u = c.firstRestricted
                if (c.message) {
                  r = c.message
                }
                var D = this.context.strict
                var x = this.context.allowStrictDirective
                this.context.allowStrictDirective = c.simple
                var E = this.parseFunctionSourceElements()
                if (this.context.strict && u) {
                  this.throwUnexpectedToken(u, r)
                }
                if (this.context.strict && f) {
                  this.tolerateUnexpectedToken(f, r)
                }
                this.context.strict = D
                this.context.allowStrictDirective = x
                this.context.await = h
                this.context.allowYield = o
                return e
                  ? this.finalize(t, new a.AsyncFunctionExpression(n, p, E))
                  : this.finalize(t, new a.FunctionExpression(n, p, E, i))
              }
              Parser.prototype.parseDirective = function () {
                var t = this.lookahead
                var e = this.createNode()
                var i = this.parseExpression()
                var r =
                  i.type === h.Syntax.Literal
                    ? this.getTokenRaw(t).slice(1, -1)
                    : null
                this.consumeSemicolon()
                return this.finalize(
                  e,
                  r ? new a.Directive(i, r) : new a.ExpressionStatement(i)
                )
              }
              Parser.prototype.parseDirectivePrologues = function () {
                var t = null
                var e = []
                while (true) {
                  var i = this.lookahead
                  if (i.type !== 8) {
                    break
                  }
                  var r = this.parseDirective()
                  e.push(r)
                  var n = r.directive
                  if (typeof n !== 'string') {
                    break
                  }
                  if (n === 'use strict') {
                    this.context.strict = true
                    if (t) {
                      this.tolerateUnexpectedToken(
                        t,
                        s.Messages.StrictOctalLiteral
                      )
                    }
                    if (!this.context.allowStrictDirective) {
                      this.tolerateUnexpectedToken(
                        i,
                        s.Messages.IllegalLanguageModeDirective
                      )
                    }
                  } else {
                    if (!t && i.octal) {
                      t = i
                    }
                  }
                }
                return e
              }
              Parser.prototype.qualifiedPropertyName = function (t) {
                switch (t.type) {
                  case 3:
                  case 8:
                  case 1:
                  case 5:
                  case 6:
                  case 4:
                    return true
                  case 7:
                    return t.value === '['
                  default:
                    break
                }
                return false
              }
              Parser.prototype.parseGetterMethod = function () {
                var t = this.createNode()
                var e = false
                var i = this.context.allowYield
                this.context.allowYield = !e
                var r = this.parseFormalParameters()
                if (r.params.length > 0) {
                  this.tolerateError(s.Messages.BadGetterArity)
                }
                var n = this.parsePropertyMethod(r)
                this.context.allowYield = i
                return this.finalize(
                  t,
                  new a.FunctionExpression(null, r.params, n, e)
                )
              }
              Parser.prototype.parseSetterMethod = function () {
                var t = this.createNode()
                var e = false
                var i = this.context.allowYield
                this.context.allowYield = !e
                var r = this.parseFormalParameters()
                if (r.params.length !== 1) {
                  this.tolerateError(s.Messages.BadSetterArity)
                } else if (r.params[0] instanceof a.RestElement) {
                  this.tolerateError(s.Messages.BadSetterRestParameter)
                }
                var n = this.parsePropertyMethod(r)
                this.context.allowYield = i
                return this.finalize(
                  t,
                  new a.FunctionExpression(null, r.params, n, e)
                )
              }
              Parser.prototype.parseGeneratorMethod = function () {
                var t = this.createNode()
                var e = true
                var i = this.context.allowYield
                this.context.allowYield = true
                var r = this.parseFormalParameters()
                this.context.allowYield = false
                var n = this.parsePropertyMethod(r)
                this.context.allowYield = i
                return this.finalize(
                  t,
                  new a.FunctionExpression(null, r.params, n, e)
                )
              }
              Parser.prototype.isStartOfExpression = function () {
                var t = true
                var e = this.lookahead.value
                switch (this.lookahead.type) {
                  case 7:
                    t =
                      e === '[' ||
                      e === '(' ||
                      e === '{' ||
                      e === '+' ||
                      e === '-' ||
                      e === '!' ||
                      e === '~' ||
                      e === '++' ||
                      e === '--' ||
                      e === '/' ||
                      e === '/='
                    break
                  case 4:
                    t =
                      e === 'class' ||
                      e === 'delete' ||
                      e === 'function' ||
                      e === 'let' ||
                      e === 'new' ||
                      e === 'super' ||
                      e === 'this' ||
                      e === 'typeof' ||
                      e === 'void' ||
                      e === 'yield'
                    break
                  default:
                    break
                }
                return t
              }
              Parser.prototype.parseYieldExpression = function () {
                var t = this.createNode()
                this.expectKeyword('yield')
                var e = null
                var i = false
                if (!this.hasLineTerminator) {
                  var r = this.context.allowYield
                  this.context.allowYield = false
                  i = this.match('*')
                  if (i) {
                    this.nextToken()
                    e = this.parseAssignmentExpression()
                  } else if (this.isStartOfExpression()) {
                    e = this.parseAssignmentExpression()
                  }
                  this.context.allowYield = r
                }
                return this.finalize(t, new a.YieldExpression(e, i))
              }
              Parser.prototype.parseClassElement = function (t) {
                var e = this.lookahead
                var i = this.createNode()
                var r = ''
                var n = null
                var u = null
                var h = false
                var o = false
                var l = false
                var c = false
                if (this.match('*')) {
                  this.nextToken()
                } else {
                  h = this.match('[')
                  n = this.parseObjectPropertyKey()
                  var p = n
                  if (
                    p.name === 'static' &&
                    (this.qualifiedPropertyName(this.lookahead) ||
                      this.match('*'))
                  ) {
                    e = this.lookahead
                    l = true
                    h = this.match('[')
                    if (this.match('*')) {
                      this.nextToken()
                    } else {
                      n = this.parseObjectPropertyKey()
                    }
                  }
                  if (
                    e.type === 3 &&
                    !this.hasLineTerminator &&
                    e.value === 'async'
                  ) {
                    var f = this.lookahead.value
                    if (f !== ':' && f !== '(' && f !== '*') {
                      c = true
                      e = this.lookahead
                      n = this.parseObjectPropertyKey()
                      if (e.type === 3 && e.value === 'constructor') {
                        this.tolerateUnexpectedToken(
                          e,
                          s.Messages.ConstructorIsAsync
                        )
                      }
                    }
                  }
                }
                var D = this.qualifiedPropertyName(this.lookahead)
                if (e.type === 3) {
                  if (e.value === 'get' && D) {
                    r = 'get'
                    h = this.match('[')
                    n = this.parseObjectPropertyKey()
                    this.context.allowYield = false
                    u = this.parseGetterMethod()
                  } else if (e.value === 'set' && D) {
                    r = 'set'
                    h = this.match('[')
                    n = this.parseObjectPropertyKey()
                    u = this.parseSetterMethod()
                  }
                } else if (e.type === 7 && e.value === '*' && D) {
                  r = 'init'
                  h = this.match('[')
                  n = this.parseObjectPropertyKey()
                  u = this.parseGeneratorMethod()
                  o = true
                }
                if (!r && n && this.match('(')) {
                  r = 'init'
                  u = c
                    ? this.parsePropertyMethodAsyncFunction()
                    : this.parsePropertyMethodFunction()
                  o = true
                }
                if (!r) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                if (r === 'init') {
                  r = 'method'
                }
                if (!h) {
                  if (l && this.isPropertyKey(n, 'prototype')) {
                    this.throwUnexpectedToken(e, s.Messages.StaticPrototype)
                  }
                  if (!l && this.isPropertyKey(n, 'constructor')) {
                    if (r !== 'method' || !o || (u && u.generator)) {
                      this.throwUnexpectedToken(
                        e,
                        s.Messages.ConstructorSpecialMethod
                      )
                    }
                    if (t.value) {
                      this.throwUnexpectedToken(
                        e,
                        s.Messages.DuplicateConstructor
                      )
                    } else {
                      t.value = true
                    }
                    r = 'constructor'
                  }
                }
                return this.finalize(i, new a.MethodDefinition(n, h, u, r, l))
              }
              Parser.prototype.parseClassElementList = function () {
                var t = []
                var e = { value: false }
                this.expect('{')
                while (!this.match('}')) {
                  if (this.match(';')) {
                    this.nextToken()
                  } else {
                    t.push(this.parseClassElement(e))
                  }
                }
                this.expect('}')
                return t
              }
              Parser.prototype.parseClassBody = function () {
                var t = this.createNode()
                var e = this.parseClassElementList()
                return this.finalize(t, new a.ClassBody(e))
              }
              Parser.prototype.parseClassDeclaration = function (t) {
                var e = this.createNode()
                var i = this.context.strict
                this.context.strict = true
                this.expectKeyword('class')
                var r =
                  t && this.lookahead.type !== 3
                    ? null
                    : this.parseVariableIdentifier()
                var n = null
                if (this.matchKeyword('extends')) {
                  this.nextToken()
                  n = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                }
                var s = this.parseClassBody()
                this.context.strict = i
                return this.finalize(e, new a.ClassDeclaration(r, n, s))
              }
              Parser.prototype.parseClassExpression = function () {
                var t = this.createNode()
                var e = this.context.strict
                this.context.strict = true
                this.expectKeyword('class')
                var i =
                  this.lookahead.type === 3
                    ? this.parseVariableIdentifier()
                    : null
                var r = null
                if (this.matchKeyword('extends')) {
                  this.nextToken()
                  r = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                }
                var n = this.parseClassBody()
                this.context.strict = e
                return this.finalize(t, new a.ClassExpression(i, r, n))
              }
              Parser.prototype.parseModule = function () {
                this.context.strict = true
                this.context.isModule = true
                this.scanner.isModule = true
                var t = this.createNode()
                var e = this.parseDirectivePrologues()
                while (this.lookahead.type !== 2) {
                  e.push(this.parseStatementListItem())
                }
                return this.finalize(t, new a.Module(e))
              }
              Parser.prototype.parseScript = function () {
                var t = this.createNode()
                var e = this.parseDirectivePrologues()
                while (this.lookahead.type !== 2) {
                  e.push(this.parseStatementListItem())
                }
                return this.finalize(t, new a.Script(e))
              }
              Parser.prototype.parseModuleSpecifier = function () {
                var t = this.createNode()
                if (this.lookahead.type !== 8) {
                  this.throwError(s.Messages.InvalidModuleSpecifier)
                }
                var e = this.nextToken()
                var i = this.getTokenRaw(e)
                return this.finalize(t, new a.Literal(e.value, i))
              }
              Parser.prototype.parseImportSpecifier = function () {
                var t = this.createNode()
                var e
                var i
                if (this.lookahead.type === 3) {
                  e = this.parseVariableIdentifier()
                  i = e
                  if (this.matchContextualKeyword('as')) {
                    this.nextToken()
                    i = this.parseVariableIdentifier()
                  }
                } else {
                  e = this.parseIdentifierName()
                  i = e
                  if (this.matchContextualKeyword('as')) {
                    this.nextToken()
                    i = this.parseVariableIdentifier()
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                }
                return this.finalize(t, new a.ImportSpecifier(i, e))
              }
              Parser.prototype.parseNamedImports = function () {
                this.expect('{')
                var t = []
                while (!this.match('}')) {
                  t.push(this.parseImportSpecifier())
                  if (!this.match('}')) {
                    this.expect(',')
                  }
                }
                this.expect('}')
                return t
              }
              Parser.prototype.parseImportDefaultSpecifier = function () {
                var t = this.createNode()
                var e = this.parseIdentifierName()
                return this.finalize(t, new a.ImportDefaultSpecifier(e))
              }
              Parser.prototype.parseImportNamespaceSpecifier = function () {
                var t = this.createNode()
                this.expect('*')
                if (!this.matchContextualKeyword('as')) {
                  this.throwError(s.Messages.NoAsAfterImportNamespace)
                }
                this.nextToken()
                var e = this.parseIdentifierName()
                return this.finalize(t, new a.ImportNamespaceSpecifier(e))
              }
              Parser.prototype.parseImportDeclaration = function () {
                if (this.context.inFunctionBody) {
                  this.throwError(s.Messages.IllegalImportDeclaration)
                }
                var t = this.createNode()
                this.expectKeyword('import')
                var e
                var i = []
                if (this.lookahead.type === 8) {
                  e = this.parseModuleSpecifier()
                } else {
                  if (this.match('{')) {
                    i = i.concat(this.parseNamedImports())
                  } else if (this.match('*')) {
                    i.push(this.parseImportNamespaceSpecifier())
                  } else if (
                    this.isIdentifierName(this.lookahead) &&
                    !this.matchKeyword('default')
                  ) {
                    i.push(this.parseImportDefaultSpecifier())
                    if (this.match(',')) {
                      this.nextToken()
                      if (this.match('*')) {
                        i.push(this.parseImportNamespaceSpecifier())
                      } else if (this.match('{')) {
                        i = i.concat(this.parseNamedImports())
                      } else {
                        this.throwUnexpectedToken(this.lookahead)
                      }
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                  if (!this.matchContextualKeyword('from')) {
                    var r = this.lookahead.value
                      ? s.Messages.UnexpectedToken
                      : s.Messages.MissingFromClause
                    this.throwError(r, this.lookahead.value)
                  }
                  this.nextToken()
                  e = this.parseModuleSpecifier()
                }
                this.consumeSemicolon()
                return this.finalize(t, new a.ImportDeclaration(i, e))
              }
              Parser.prototype.parseExportSpecifier = function () {
                var t = this.createNode()
                var e = this.parseIdentifierName()
                var i = e
                if (this.matchContextualKeyword('as')) {
                  this.nextToken()
                  i = this.parseIdentifierName()
                }
                return this.finalize(t, new a.ExportSpecifier(e, i))
              }
              Parser.prototype.parseExportDeclaration = function () {
                if (this.context.inFunctionBody) {
                  this.throwError(s.Messages.IllegalExportDeclaration)
                }
                var t = this.createNode()
                this.expectKeyword('export')
                var e
                if (this.matchKeyword('default')) {
                  this.nextToken()
                  if (this.matchKeyword('function')) {
                    var i = this.parseFunctionDeclaration(true)
                    e = this.finalize(t, new a.ExportDefaultDeclaration(i))
                  } else if (this.matchKeyword('class')) {
                    var i = this.parseClassDeclaration(true)
                    e = this.finalize(t, new a.ExportDefaultDeclaration(i))
                  } else if (this.matchContextualKeyword('async')) {
                    var i = this.matchAsyncFunction()
                      ? this.parseFunctionDeclaration(true)
                      : this.parseAssignmentExpression()
                    e = this.finalize(t, new a.ExportDefaultDeclaration(i))
                  } else {
                    if (this.matchContextualKeyword('from')) {
                      this.throwError(
                        s.Messages.UnexpectedToken,
                        this.lookahead.value
                      )
                    }
                    var i = this.match('{')
                      ? this.parseObjectInitializer()
                      : this.match('[')
                      ? this.parseArrayInitializer()
                      : this.parseAssignmentExpression()
                    this.consumeSemicolon()
                    e = this.finalize(t, new a.ExportDefaultDeclaration(i))
                  }
                } else if (this.match('*')) {
                  this.nextToken()
                  if (!this.matchContextualKeyword('from')) {
                    var r = this.lookahead.value
                      ? s.Messages.UnexpectedToken
                      : s.Messages.MissingFromClause
                    this.throwError(r, this.lookahead.value)
                  }
                  this.nextToken()
                  var n = this.parseModuleSpecifier()
                  this.consumeSemicolon()
                  e = this.finalize(t, new a.ExportAllDeclaration(n))
                } else if (this.lookahead.type === 4) {
                  var i = void 0
                  switch (this.lookahead.value) {
                    case 'let':
                    case 'const':
                      i = this.parseLexicalDeclaration({ inFor: false })
                      break
                    case 'var':
                    case 'class':
                    case 'function':
                      i = this.parseStatementListItem()
                      break
                    default:
                      this.throwUnexpectedToken(this.lookahead)
                  }
                  e = this.finalize(
                    t,
                    new a.ExportNamedDeclaration(i, [], null)
                  )
                } else if (this.matchAsyncFunction()) {
                  var i = this.parseFunctionDeclaration()
                  e = this.finalize(
                    t,
                    new a.ExportNamedDeclaration(i, [], null)
                  )
                } else {
                  var u = []
                  var h = null
                  var o = false
                  this.expect('{')
                  while (!this.match('}')) {
                    o = o || this.matchKeyword('default')
                    u.push(this.parseExportSpecifier())
                    if (!this.match('}')) {
                      this.expect(',')
                    }
                  }
                  this.expect('}')
                  if (this.matchContextualKeyword('from')) {
                    this.nextToken()
                    h = this.parseModuleSpecifier()
                    this.consumeSemicolon()
                  } else if (o) {
                    var r = this.lookahead.value
                      ? s.Messages.UnexpectedToken
                      : s.Messages.MissingFromClause
                    this.throwError(r, this.lookahead.value)
                  } else {
                    this.consumeSemicolon()
                  }
                  e = this.finalize(t, new a.ExportNamedDeclaration(null, u, h))
                }
                return e
              }
              return Parser
            })()
            e.Parser = c
          },
          function (t, e) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            function assert(t, e) {
              if (!t) {
                throw new Error('ASSERT: ' + e)
              }
            }
            e.assert = assert
          },
          function (t, e) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var i = (function () {
              function ErrorHandler() {
                this.errors = []
                this.tolerant = false
              }
              ErrorHandler.prototype.recordError = function (t) {
                this.errors.push(t)
              }
              ErrorHandler.prototype.tolerate = function (t) {
                if (this.tolerant) {
                  this.recordError(t)
                } else {
                  throw t
                }
              }
              ErrorHandler.prototype.constructError = function (t, e) {
                var i = new Error(t)
                try {
                  throw i
                } catch (t) {
                  if (Object.create && Object.defineProperty) {
                    i = Object.create(t)
                    Object.defineProperty(i, 'column', { value: e })
                  }
                }
                return i
              }
              ErrorHandler.prototype.createError = function (t, e, i, r) {
                var n = 'Line ' + e + ': ' + r
                var s = this.constructError(n, i)
                s.index = t
                s.lineNumber = e
                s.description = r
                return s
              }
              ErrorHandler.prototype.throwError = function (t, e, i, r) {
                throw this.createError(t, e, i, r)
              }
              ErrorHandler.prototype.tolerateError = function (t, e, i, r) {
                var n = this.createError(t, e, i, r)
                if (this.tolerant) {
                  this.recordError(n)
                } else {
                  throw n
                }
              }
              return ErrorHandler
            })()
            e.ErrorHandler = i
          },
          function (t, e) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            e.Messages = {
              BadGetterArity: 'Getter must not have any formal parameters',
              BadSetterArity: 'Setter must have exactly one formal parameter',
              BadSetterRestParameter:
                'Setter function argument must not be a rest parameter',
              ConstructorIsAsync:
                'Class constructor may not be an async method',
              ConstructorSpecialMethod:
                'Class constructor may not be an accessor',
              DeclarationMissingInitializer:
                'Missing initializer in %0 declaration',
              DefaultRestParameter: 'Unexpected token =',
              DuplicateBinding: 'Duplicate binding %0',
              DuplicateConstructor: 'A class may only have one constructor',
              DuplicateProtoProperty:
                'Duplicate __proto__ fields are not allowed in object literals',
              ForInOfLoopInitializer:
                '%0 loop variable declaration may not have an initializer',
              GeneratorInLegacyContext:
                'Generator declarations are not allowed in legacy contexts',
              IllegalBreak: 'Illegal break statement',
              IllegalContinue: 'Illegal continue statement',
              IllegalExportDeclaration: 'Unexpected token',
              IllegalImportDeclaration: 'Unexpected token',
              IllegalLanguageModeDirective:
                "Illegal 'use strict' directive in function with non-simple parameter list",
              IllegalReturn: 'Illegal return statement',
              InvalidEscapedReservedWord:
                'Keyword must not contain escaped characters',
              InvalidHexEscapeSequence: 'Invalid hexadecimal escape sequence',
              InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
              InvalidLHSInForIn: 'Invalid left-hand side in for-in',
              InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
              InvalidModuleSpecifier: 'Unexpected token',
              InvalidRegExp: 'Invalid regular expression',
              LetInLexicalBinding:
                'let is disallowed as a lexically bound name',
              MissingFromClause: 'Unexpected token',
              MultipleDefaultsInSwitch:
                'More than one default clause in switch statement',
              NewlineAfterThrow: 'Illegal newline after throw',
              NoAsAfterImportNamespace: 'Unexpected token',
              NoCatchOrFinally: 'Missing catch or finally after try',
              ParameterAfterRestParameter:
                'Rest parameter must be last formal parameter',
              Redeclaration: "%0 '%1' has already been declared",
              StaticPrototype:
                'Classes may not have static property named prototype',
              StrictCatchVariable:
                'Catch variable may not be eval or arguments in strict mode',
              StrictDelete:
                'Delete of an unqualified identifier in strict mode.',
              StrictFunction:
                'In strict mode code, functions can only be declared at top level or inside a block',
              StrictFunctionName:
                'Function name may not be eval or arguments in strict mode',
              StrictLHSAssignment:
                'Assignment to eval or arguments is not allowed in strict mode',
              StrictLHSPostfix:
                'Postfix increment/decrement may not have eval or arguments operand in strict mode',
              StrictLHSPrefix:
                'Prefix increment/decrement may not have eval or arguments operand in strict mode',
              StrictModeWith:
                'Strict mode code may not include a with statement',
              StrictOctalLiteral:
                'Octal literals are not allowed in strict mode.',
              StrictParamDupe:
                'Strict mode function may not have duplicate parameter names',
              StrictParamName:
                'Parameter name eval or arguments is not allowed in strict mode',
              StrictReservedWord: 'Use of future reserved word in strict mode',
              StrictVarName:
                'Variable name may not be eval or arguments in strict mode',
              TemplateOctalLiteral:
                'Octal literals are not allowed in template strings.',
              UnexpectedEOS: 'Unexpected end of input',
              UnexpectedIdentifier: 'Unexpected identifier',
              UnexpectedNumber: 'Unexpected number',
              UnexpectedReserved: 'Unexpected reserved word',
              UnexpectedString: 'Unexpected string',
              UnexpectedTemplate: 'Unexpected quasi %0',
              UnexpectedToken: 'Unexpected token %0',
              UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
              UnknownLabel: "Undefined label '%0'",
              UnterminatedRegExp: 'Invalid regular expression: missing /',
            }
          },
          function (t, e, i) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var r = i(9)
            var n = i(4)
            var s = i(11)
            function hexValue(t) {
              return '0123456789abcdef'.indexOf(t.toLowerCase())
            }
            function octalValue(t) {
              return '01234567'.indexOf(t)
            }
            var a = (function () {
              function Scanner(t, e) {
                this.source = t
                this.errorHandler = e
                this.trackComment = false
                this.isModule = false
                this.length = t.length
                this.index = 0
                this.lineNumber = t.length > 0 ? 1 : 0
                this.lineStart = 0
                this.curlyStack = []
              }
              Scanner.prototype.saveState = function () {
                return {
                  index: this.index,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                }
              }
              Scanner.prototype.restoreState = function (t) {
                this.index = t.index
                this.lineNumber = t.lineNumber
                this.lineStart = t.lineStart
              }
              Scanner.prototype.eof = function () {
                return this.index >= this.length
              }
              Scanner.prototype.throwUnexpectedToken = function (t) {
                if (t === void 0) {
                  t = s.Messages.UnexpectedTokenIllegal
                }
                return this.errorHandler.throwError(
                  this.index,
                  this.lineNumber,
                  this.index - this.lineStart + 1,
                  t
                )
              }
              Scanner.prototype.tolerateUnexpectedToken = function (t) {
                if (t === void 0) {
                  t = s.Messages.UnexpectedTokenIllegal
                }
                this.errorHandler.tolerateError(
                  this.index,
                  this.lineNumber,
                  this.index - this.lineStart + 1,
                  t
                )
              }
              Scanner.prototype.skipSingleLineComment = function (t) {
                var e = []
                var i, r
                if (this.trackComment) {
                  e = []
                  i = this.index - t
                  r = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - t,
                    },
                    end: {},
                  }
                }
                while (!this.eof()) {
                  var s = this.source.charCodeAt(this.index)
                  ++this.index
                  if (n.Character.isLineTerminator(s)) {
                    if (this.trackComment) {
                      r.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 1,
                      }
                      var a = {
                        multiLine: false,
                        slice: [i + t, this.index - 1],
                        range: [i, this.index - 1],
                        loc: r,
                      }
                      e.push(a)
                    }
                    if (s === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index
                    }
                    ++this.lineNumber
                    this.lineStart = this.index
                    return e
                  }
                }
                if (this.trackComment) {
                  r.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart,
                  }
                  var a = {
                    multiLine: false,
                    slice: [i + t, this.index],
                    range: [i, this.index],
                    loc: r,
                  }
                  e.push(a)
                }
                return e
              }
              Scanner.prototype.skipMultiLineComment = function () {
                var t = []
                var e, i
                if (this.trackComment) {
                  t = []
                  e = this.index - 2
                  i = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - 2,
                    },
                    end: {},
                  }
                }
                while (!this.eof()) {
                  var r = this.source.charCodeAt(this.index)
                  if (n.Character.isLineTerminator(r)) {
                    if (
                      r === 13 &&
                      this.source.charCodeAt(this.index + 1) === 10
                    ) {
                      ++this.index
                    }
                    ++this.lineNumber
                    ++this.index
                    this.lineStart = this.index
                  } else if (r === 42) {
                    if (this.source.charCodeAt(this.index + 1) === 47) {
                      this.index += 2
                      if (this.trackComment) {
                        i.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart,
                        }
                        var s = {
                          multiLine: true,
                          slice: [e + 2, this.index - 2],
                          range: [e, this.index],
                          loc: i,
                        }
                        t.push(s)
                      }
                      return t
                    }
                    ++this.index
                  } else {
                    ++this.index
                  }
                }
                if (this.trackComment) {
                  i.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart,
                  }
                  var s = {
                    multiLine: true,
                    slice: [e + 2, this.index],
                    range: [e, this.index],
                    loc: i,
                  }
                  t.push(s)
                }
                this.tolerateUnexpectedToken()
                return t
              }
              Scanner.prototype.scanComments = function () {
                var t
                if (this.trackComment) {
                  t = []
                }
                var e = this.index === 0
                while (!this.eof()) {
                  var i = this.source.charCodeAt(this.index)
                  if (n.Character.isWhiteSpace(i)) {
                    ++this.index
                  } else if (n.Character.isLineTerminator(i)) {
                    ++this.index
                    if (i === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index
                    }
                    ++this.lineNumber
                    this.lineStart = this.index
                    e = true
                  } else if (i === 47) {
                    i = this.source.charCodeAt(this.index + 1)
                    if (i === 47) {
                      this.index += 2
                      var r = this.skipSingleLineComment(2)
                      if (this.trackComment) {
                        t = t.concat(r)
                      }
                      e = true
                    } else if (i === 42) {
                      this.index += 2
                      var r = this.skipMultiLineComment()
                      if (this.trackComment) {
                        t = t.concat(r)
                      }
                    } else {
                      break
                    }
                  } else if (e && i === 45) {
                    if (
                      this.source.charCodeAt(this.index + 1) === 45 &&
                      this.source.charCodeAt(this.index + 2) === 62
                    ) {
                      this.index += 3
                      var r = this.skipSingleLineComment(3)
                      if (this.trackComment) {
                        t = t.concat(r)
                      }
                    } else {
                      break
                    }
                  } else if (i === 60 && !this.isModule) {
                    if (
                      this.source.slice(this.index + 1, this.index + 4) ===
                      '!--'
                    ) {
                      this.index += 4
                      var r = this.skipSingleLineComment(4)
                      if (this.trackComment) {
                        t = t.concat(r)
                      }
                    } else {
                      break
                    }
                  } else {
                    break
                  }
                }
                return t
              }
              Scanner.prototype.isFutureReservedWord = function (t) {
                switch (t) {
                  case 'enum':
                  case 'export':
                  case 'import':
                  case 'super':
                    return true
                  default:
                    return false
                }
              }
              Scanner.prototype.isStrictModeReservedWord = function (t) {
                switch (t) {
                  case 'implements':
                  case 'interface':
                  case 'package':
                  case 'private':
                  case 'protected':
                  case 'public':
                  case 'static':
                  case 'yield':
                  case 'let':
                    return true
                  default:
                    return false
                }
              }
              Scanner.prototype.isRestrictedWord = function (t) {
                return t === 'eval' || t === 'arguments'
              }
              Scanner.prototype.isKeyword = function (t) {
                switch (t.length) {
                  case 2:
                    return t === 'if' || t === 'in' || t === 'do'
                  case 3:
                    return (
                      t === 'var' ||
                      t === 'for' ||
                      t === 'new' ||
                      t === 'try' ||
                      t === 'let'
                    )
                  case 4:
                    return (
                      t === 'this' ||
                      t === 'else' ||
                      t === 'case' ||
                      t === 'void' ||
                      t === 'with' ||
                      t === 'enum'
                    )
                  case 5:
                    return (
                      t === 'while' ||
                      t === 'break' ||
                      t === 'catch' ||
                      t === 'throw' ||
                      t === 'const' ||
                      t === 'yield' ||
                      t === 'class' ||
                      t === 'super'
                    )
                  case 6:
                    return (
                      t === 'return' ||
                      t === 'typeof' ||
                      t === 'delete' ||
                      t === 'switch' ||
                      t === 'export' ||
                      t === 'import'
                    )
                  case 7:
                    return t === 'default' || t === 'finally' || t === 'extends'
                  case 8:
                    return (
                      t === 'function' || t === 'continue' || t === 'debugger'
                    )
                  case 10:
                    return t === 'instanceof'
                  default:
                    return false
                }
              }
              Scanner.prototype.codePointAt = function (t) {
                var e = this.source.charCodeAt(t)
                if (e >= 55296 && e <= 56319) {
                  var i = this.source.charCodeAt(t + 1)
                  if (i >= 56320 && i <= 57343) {
                    var r = e
                    e = (r - 55296) * 1024 + i - 56320 + 65536
                  }
                }
                return e
              }
              Scanner.prototype.scanHexEscape = function (t) {
                var e = t === 'u' ? 4 : 2
                var i = 0
                for (var r = 0; r < e; ++r) {
                  if (
                    !this.eof() &&
                    n.Character.isHexDigit(this.source.charCodeAt(this.index))
                  ) {
                    i = i * 16 + hexValue(this.source[this.index++])
                  } else {
                    return null
                  }
                }
                return String.fromCharCode(i)
              }
              Scanner.prototype.scanUnicodeCodePointEscape = function () {
                var t = this.source[this.index]
                var e = 0
                if (t === '}') {
                  this.throwUnexpectedToken()
                }
                while (!this.eof()) {
                  t = this.source[this.index++]
                  if (!n.Character.isHexDigit(t.charCodeAt(0))) {
                    break
                  }
                  e = e * 16 + hexValue(t)
                }
                if (e > 1114111 || t !== '}') {
                  this.throwUnexpectedToken()
                }
                return n.Character.fromCodePoint(e)
              }
              Scanner.prototype.getIdentifier = function () {
                var t = this.index++
                while (!this.eof()) {
                  var e = this.source.charCodeAt(this.index)
                  if (e === 92) {
                    this.index = t
                    return this.getComplexIdentifier()
                  } else if (e >= 55296 && e < 57343) {
                    this.index = t
                    return this.getComplexIdentifier()
                  }
                  if (n.Character.isIdentifierPart(e)) {
                    ++this.index
                  } else {
                    break
                  }
                }
                return this.source.slice(t, this.index)
              }
              Scanner.prototype.getComplexIdentifier = function () {
                var t = this.codePointAt(this.index)
                var e = n.Character.fromCodePoint(t)
                this.index += e.length
                var i
                if (t === 92) {
                  if (this.source.charCodeAt(this.index) !== 117) {
                    this.throwUnexpectedToken()
                  }
                  ++this.index
                  if (this.source[this.index] === '{') {
                    ++this.index
                    i = this.scanUnicodeCodePointEscape()
                  } else {
                    i = this.scanHexEscape('u')
                    if (
                      i === null ||
                      i === '\\' ||
                      !n.Character.isIdentifierStart(i.charCodeAt(0))
                    ) {
                      this.throwUnexpectedToken()
                    }
                  }
                  e = i
                }
                while (!this.eof()) {
                  t = this.codePointAt(this.index)
                  if (!n.Character.isIdentifierPart(t)) {
                    break
                  }
                  i = n.Character.fromCodePoint(t)
                  e += i
                  this.index += i.length
                  if (t === 92) {
                    e = e.substr(0, e.length - 1)
                    if (this.source.charCodeAt(this.index) !== 117) {
                      this.throwUnexpectedToken()
                    }
                    ++this.index
                    if (this.source[this.index] === '{') {
                      ++this.index
                      i = this.scanUnicodeCodePointEscape()
                    } else {
                      i = this.scanHexEscape('u')
                      if (
                        i === null ||
                        i === '\\' ||
                        !n.Character.isIdentifierPart(i.charCodeAt(0))
                      ) {
                        this.throwUnexpectedToken()
                      }
                    }
                    e += i
                  }
                }
                return e
              }
              Scanner.prototype.octalToDecimal = function (t) {
                var e = t !== '0'
                var i = octalValue(t)
                if (
                  !this.eof() &&
                  n.Character.isOctalDigit(this.source.charCodeAt(this.index))
                ) {
                  e = true
                  i = i * 8 + octalValue(this.source[this.index++])
                  if (
                    '0123'.indexOf(t) >= 0 &&
                    !this.eof() &&
                    n.Character.isOctalDigit(this.source.charCodeAt(this.index))
                  ) {
                    i = i * 8 + octalValue(this.source[this.index++])
                  }
                }
                return { code: i, octal: e }
              }
              Scanner.prototype.scanIdentifier = function () {
                var t
                var e = this.index
                var i =
                  this.source.charCodeAt(e) === 92
                    ? this.getComplexIdentifier()
                    : this.getIdentifier()
                if (i.length === 1) {
                  t = 3
                } else if (this.isKeyword(i)) {
                  t = 4
                } else if (i === 'null') {
                  t = 5
                } else if (i === 'true' || i === 'false') {
                  t = 1
                } else {
                  t = 3
                }
                if (t !== 3 && e + i.length !== this.index) {
                  var r = this.index
                  this.index = e
                  this.tolerateUnexpectedToken(
                    s.Messages.InvalidEscapedReservedWord
                  )
                  this.index = r
                }
                return {
                  type: t,
                  value: i,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanPunctuator = function () {
                var t = this.index
                var e = this.source[this.index]
                switch (e) {
                  case '(':
                  case '{':
                    if (e === '{') {
                      this.curlyStack.push('{')
                    }
                    ++this.index
                    break
                  case '.':
                    ++this.index
                    if (
                      this.source[this.index] === '.' &&
                      this.source[this.index + 1] === '.'
                    ) {
                      this.index += 2
                      e = '...'
                    }
                    break
                  case '}':
                    ++this.index
                    this.curlyStack.pop()
                    break
                  case ')':
                  case ';':
                  case ',':
                  case '[':
                  case ']':
                  case ':':
                  case '?':
                  case '~':
                    ++this.index
                    break
                  default:
                    e = this.source.substr(this.index, 4)
                    if (e === '>>>=') {
                      this.index += 4
                    } else {
                      e = e.substr(0, 3)
                      if (
                        e === '===' ||
                        e === '!==' ||
                        e === '>>>' ||
                        e === '<<=' ||
                        e === '>>=' ||
                        e === '**='
                      ) {
                        this.index += 3
                      } else {
                        e = e.substr(0, 2)
                        if (
                          e === '&&' ||
                          e === '||' ||
                          e === '==' ||
                          e === '!=' ||
                          e === '+=' ||
                          e === '-=' ||
                          e === '*=' ||
                          e === '/=' ||
                          e === '++' ||
                          e === '--' ||
                          e === '<<' ||
                          e === '>>' ||
                          e === '&=' ||
                          e === '|=' ||
                          e === '^=' ||
                          e === '%=' ||
                          e === '<=' ||
                          e === '>=' ||
                          e === '=>' ||
                          e === '**'
                        ) {
                          this.index += 2
                        } else {
                          e = this.source[this.index]
                          if ('<>=!+-*%&|^/'.indexOf(e) >= 0) {
                            ++this.index
                          }
                        }
                      }
                    }
                }
                if (this.index === t) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 7,
                  value: e,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.scanHexLiteral = function (t) {
                var e = ''
                while (!this.eof()) {
                  if (
                    !n.Character.isHexDigit(this.source.charCodeAt(this.index))
                  ) {
                    break
                  }
                  e += this.source[this.index++]
                }
                if (e.length === 0) {
                  this.throwUnexpectedToken()
                }
                if (
                  n.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  )
                ) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 6,
                  value: parseInt('0x' + e, 16),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.scanBinaryLiteral = function (t) {
                var e = ''
                var i
                while (!this.eof()) {
                  i = this.source[this.index]
                  if (i !== '0' && i !== '1') {
                    break
                  }
                  e += this.source[this.index++]
                }
                if (e.length === 0) {
                  this.throwUnexpectedToken()
                }
                if (!this.eof()) {
                  i = this.source.charCodeAt(this.index)
                  if (
                    n.Character.isIdentifierStart(i) ||
                    n.Character.isDecimalDigit(i)
                  ) {
                    this.throwUnexpectedToken()
                  }
                }
                return {
                  type: 6,
                  value: parseInt(e, 2),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.scanOctalLiteral = function (t, e) {
                var i = ''
                var r = false
                if (n.Character.isOctalDigit(t.charCodeAt(0))) {
                  r = true
                  i = '0' + this.source[this.index++]
                } else {
                  ++this.index
                }
                while (!this.eof()) {
                  if (
                    !n.Character.isOctalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    break
                  }
                  i += this.source[this.index++]
                }
                if (!r && i.length === 0) {
                  this.throwUnexpectedToken()
                }
                if (
                  n.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  ) ||
                  n.Character.isDecimalDigit(this.source.charCodeAt(this.index))
                ) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 6,
                  value: parseInt(i, 8),
                  octal: r,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.isImplicitOctalLiteral = function () {
                for (var t = this.index + 1; t < this.length; ++t) {
                  var e = this.source[t]
                  if (e === '8' || e === '9') {
                    return false
                  }
                  if (!n.Character.isOctalDigit(e.charCodeAt(0))) {
                    return true
                  }
                }
                return true
              }
              Scanner.prototype.scanNumericLiteral = function () {
                var t = this.index
                var e = this.source[t]
                r.assert(
                  n.Character.isDecimalDigit(e.charCodeAt(0)) || e === '.',
                  'Numeric literal must start with a decimal digit or a decimal point'
                )
                var i = ''
                if (e !== '.') {
                  i = this.source[this.index++]
                  e = this.source[this.index]
                  if (i === '0') {
                    if (e === 'x' || e === 'X') {
                      ++this.index
                      return this.scanHexLiteral(t)
                    }
                    if (e === 'b' || e === 'B') {
                      ++this.index
                      return this.scanBinaryLiteral(t)
                    }
                    if (e === 'o' || e === 'O') {
                      return this.scanOctalLiteral(e, t)
                    }
                    if (e && n.Character.isOctalDigit(e.charCodeAt(0))) {
                      if (this.isImplicitOctalLiteral()) {
                        return this.scanOctalLiteral(e, t)
                      }
                    }
                  }
                  while (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    i += this.source[this.index++]
                  }
                  e = this.source[this.index]
                }
                if (e === '.') {
                  i += this.source[this.index++]
                  while (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    i += this.source[this.index++]
                  }
                  e = this.source[this.index]
                }
                if (e === 'e' || e === 'E') {
                  i += this.source[this.index++]
                  e = this.source[this.index]
                  if (e === '+' || e === '-') {
                    i += this.source[this.index++]
                  }
                  if (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    while (
                      n.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      )
                    ) {
                      i += this.source[this.index++]
                    }
                  } else {
                    this.throwUnexpectedToken()
                  }
                }
                if (
                  n.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  )
                ) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 6,
                  value: parseFloat(i),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.scanStringLiteral = function () {
                var t = this.index
                var e = this.source[t]
                r.assert(
                  e === "'" || e === '"',
                  'String literal must starts with a quote'
                )
                ++this.index
                var i = false
                var a = ''
                while (!this.eof()) {
                  var u = this.source[this.index++]
                  if (u === e) {
                    e = ''
                    break
                  } else if (u === '\\') {
                    u = this.source[this.index++]
                    if (!u || !n.Character.isLineTerminator(u.charCodeAt(0))) {
                      switch (u) {
                        case 'u':
                          if (this.source[this.index] === '{') {
                            ++this.index
                            a += this.scanUnicodeCodePointEscape()
                          } else {
                            var h = this.scanHexEscape(u)
                            if (h === null) {
                              this.throwUnexpectedToken()
                            }
                            a += h
                          }
                          break
                        case 'x':
                          var o = this.scanHexEscape(u)
                          if (o === null) {
                            this.throwUnexpectedToken(
                              s.Messages.InvalidHexEscapeSequence
                            )
                          }
                          a += o
                          break
                        case 'n':
                          a += '\n'
                          break
                        case 'r':
                          a += '\r'
                          break
                        case 't':
                          a += '\t'
                          break
                        case 'b':
                          a += '\b'
                          break
                        case 'f':
                          a += '\f'
                          break
                        case 'v':
                          a += '\v'
                          break
                        case '8':
                        case '9':
                          a += u
                          this.tolerateUnexpectedToken()
                          break
                        default:
                          if (u && n.Character.isOctalDigit(u.charCodeAt(0))) {
                            var l = this.octalToDecimal(u)
                            i = l.octal || i
                            a += String.fromCharCode(l.code)
                          } else {
                            a += u
                          }
                          break
                      }
                    } else {
                      ++this.lineNumber
                      if (u === '\r' && this.source[this.index] === '\n') {
                        ++this.index
                      }
                      this.lineStart = this.index
                    }
                  } else if (n.Character.isLineTerminator(u.charCodeAt(0))) {
                    break
                  } else {
                    a += u
                  }
                }
                if (e !== '') {
                  this.index = t
                  this.throwUnexpectedToken()
                }
                return {
                  type: 8,
                  value: a,
                  octal: i,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.scanTemplate = function () {
                var t = ''
                var e = false
                var i = this.index
                var r = this.source[i] === '`'
                var a = false
                var u = 2
                ++this.index
                while (!this.eof()) {
                  var h = this.source[this.index++]
                  if (h === '`') {
                    u = 1
                    a = true
                    e = true
                    break
                  } else if (h === '$') {
                    if (this.source[this.index] === '{') {
                      this.curlyStack.push('${')
                      ++this.index
                      e = true
                      break
                    }
                    t += h
                  } else if (h === '\\') {
                    h = this.source[this.index++]
                    if (!n.Character.isLineTerminator(h.charCodeAt(0))) {
                      switch (h) {
                        case 'n':
                          t += '\n'
                          break
                        case 'r':
                          t += '\r'
                          break
                        case 't':
                          t += '\t'
                          break
                        case 'u':
                          if (this.source[this.index] === '{') {
                            ++this.index
                            t += this.scanUnicodeCodePointEscape()
                          } else {
                            var o = this.index
                            var l = this.scanHexEscape(h)
                            if (l !== null) {
                              t += l
                            } else {
                              this.index = o
                              t += h
                            }
                          }
                          break
                        case 'x':
                          var c = this.scanHexEscape(h)
                          if (c === null) {
                            this.throwUnexpectedToken(
                              s.Messages.InvalidHexEscapeSequence
                            )
                          }
                          t += c
                          break
                        case 'b':
                          t += '\b'
                          break
                        case 'f':
                          t += '\f'
                          break
                        case 'v':
                          t += '\v'
                          break
                        default:
                          if (h === '0') {
                            if (
                              n.Character.isDecimalDigit(
                                this.source.charCodeAt(this.index)
                              )
                            ) {
                              this.throwUnexpectedToken(
                                s.Messages.TemplateOctalLiteral
                              )
                            }
                            t += '\0'
                          } else if (
                            n.Character.isOctalDigit(h.charCodeAt(0))
                          ) {
                            this.throwUnexpectedToken(
                              s.Messages.TemplateOctalLiteral
                            )
                          } else {
                            t += h
                          }
                          break
                      }
                    } else {
                      ++this.lineNumber
                      if (h === '\r' && this.source[this.index] === '\n') {
                        ++this.index
                      }
                      this.lineStart = this.index
                    }
                  } else if (n.Character.isLineTerminator(h.charCodeAt(0))) {
                    ++this.lineNumber
                    if (h === '\r' && this.source[this.index] === '\n') {
                      ++this.index
                    }
                    this.lineStart = this.index
                    t += '\n'
                  } else {
                    t += h
                  }
                }
                if (!e) {
                  this.throwUnexpectedToken()
                }
                if (!r) {
                  this.curlyStack.pop()
                }
                return {
                  type: 10,
                  value: this.source.slice(i + 1, this.index - u),
                  cooked: t,
                  head: r,
                  tail: a,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: i,
                  end: this.index,
                }
              }
              Scanner.prototype.testRegExp = function (t, e) {
                var i = '￿'
                var r = t
                var n = this
                if (e.indexOf('u') >= 0) {
                  r = r
                    .replace(
                      /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                      function (t, e, r) {
                        var a = parseInt(e || r, 16)
                        if (a > 1114111) {
                          n.throwUnexpectedToken(s.Messages.InvalidRegExp)
                        }
                        if (a <= 65535) {
                          return String.fromCharCode(a)
                        }
                        return i
                      }
                    )
                    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, i)
                }
                try {
                  RegExp(r)
                } catch (t) {
                  this.throwUnexpectedToken(s.Messages.InvalidRegExp)
                }
                try {
                  return new RegExp(t, e)
                } catch (t) {
                  return null
                }
              }
              Scanner.prototype.scanRegExpBody = function () {
                var t = this.source[this.index]
                r.assert(
                  t === '/',
                  'Regular expression literal must start with a slash'
                )
                var e = this.source[this.index++]
                var i = false
                var a = false
                while (!this.eof()) {
                  t = this.source[this.index++]
                  e += t
                  if (t === '\\') {
                    t = this.source[this.index++]
                    if (n.Character.isLineTerminator(t.charCodeAt(0))) {
                      this.throwUnexpectedToken(s.Messages.UnterminatedRegExp)
                    }
                    e += t
                  } else if (n.Character.isLineTerminator(t.charCodeAt(0))) {
                    this.throwUnexpectedToken(s.Messages.UnterminatedRegExp)
                  } else if (i) {
                    if (t === ']') {
                      i = false
                    }
                  } else {
                    if (t === '/') {
                      a = true
                      break
                    } else if (t === '[') {
                      i = true
                    }
                  }
                }
                if (!a) {
                  this.throwUnexpectedToken(s.Messages.UnterminatedRegExp)
                }
                return e.substr(1, e.length - 2)
              }
              Scanner.prototype.scanRegExpFlags = function () {
                var t = ''
                var e = ''
                while (!this.eof()) {
                  var i = this.source[this.index]
                  if (!n.Character.isIdentifierPart(i.charCodeAt(0))) {
                    break
                  }
                  ++this.index
                  if (i === '\\' && !this.eof()) {
                    i = this.source[this.index]
                    if (i === 'u') {
                      ++this.index
                      var r = this.index
                      var s = this.scanHexEscape('u')
                      if (s !== null) {
                        e += s
                        for (t += '\\u'; r < this.index; ++r) {
                          t += this.source[r]
                        }
                      } else {
                        this.index = r
                        e += 'u'
                        t += '\\u'
                      }
                      this.tolerateUnexpectedToken()
                    } else {
                      t += '\\'
                      this.tolerateUnexpectedToken()
                    }
                  } else {
                    e += i
                    t += i
                  }
                }
                return e
              }
              Scanner.prototype.scanRegExp = function () {
                var t = this.index
                var e = this.scanRegExpBody()
                var i = this.scanRegExpFlags()
                var r = this.testRegExp(e, i)
                return {
                  type: 9,
                  value: '',
                  pattern: e,
                  flags: i,
                  regex: r,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.lex = function () {
                if (this.eof()) {
                  return {
                    type: 2,
                    value: '',
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: this.index,
                    end: this.index,
                  }
                }
                var t = this.source.charCodeAt(this.index)
                if (n.Character.isIdentifierStart(t)) {
                  return this.scanIdentifier()
                }
                if (t === 40 || t === 41 || t === 59) {
                  return this.scanPunctuator()
                }
                if (t === 39 || t === 34) {
                  return this.scanStringLiteral()
                }
                if (t === 46) {
                  if (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index + 1)
                    )
                  ) {
                    return this.scanNumericLiteral()
                  }
                  return this.scanPunctuator()
                }
                if (n.Character.isDecimalDigit(t)) {
                  return this.scanNumericLiteral()
                }
                if (
                  t === 96 ||
                  (t === 125 &&
                    this.curlyStack[this.curlyStack.length - 1] === '${')
                ) {
                  return this.scanTemplate()
                }
                if (t >= 55296 && t < 57343) {
                  if (
                    n.Character.isIdentifierStart(this.codePointAt(this.index))
                  ) {
                    return this.scanIdentifier()
                  }
                }
                return this.scanPunctuator()
              }
              return Scanner
            })()
            e.Scanner = a
          },
          function (t, e) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            e.TokenName = {}
            e.TokenName[1] = 'Boolean'
            e.TokenName[2] = '<end>'
            e.TokenName[3] = 'Identifier'
            e.TokenName[4] = 'Keyword'
            e.TokenName[5] = 'Null'
            e.TokenName[6] = 'Numeric'
            e.TokenName[7] = 'Punctuator'
            e.TokenName[8] = 'String'
            e.TokenName[9] = 'RegularExpression'
            e.TokenName[10] = 'Template'
          },
          function (t, e) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            e.XHTMLEntities = {
              quot: '"',
              amp: '&',
              apos: "'",
              gt: '>',
              nbsp: ' ',
              iexcl: '¡',
              cent: '¢',
              pound: '£',
              curren: '¤',
              yen: '¥',
              brvbar: '¦',
              sect: '§',
              uml: '¨',
              copy: '©',
              ordf: 'ª',
              laquo: '«',
              not: '¬',
              shy: '­',
              reg: '®',
              macr: '¯',
              deg: '°',
              plusmn: '±',
              sup2: '²',
              sup3: '³',
              acute: '´',
              micro: 'µ',
              para: '¶',
              middot: '·',
              cedil: '¸',
              sup1: '¹',
              ordm: 'º',
              raquo: '»',
              frac14: '¼',
              frac12: '½',
              frac34: '¾',
              iquest: '¿',
              Agrave: 'À',
              Aacute: 'Á',
              Acirc: 'Â',
              Atilde: 'Ã',
              Auml: 'Ä',
              Aring: 'Å',
              AElig: 'Æ',
              Ccedil: 'Ç',
              Egrave: 'È',
              Eacute: 'É',
              Ecirc: 'Ê',
              Euml: 'Ë',
              Igrave: 'Ì',
              Iacute: 'Í',
              Icirc: 'Î',
              Iuml: 'Ï',
              ETH: 'Ð',
              Ntilde: 'Ñ',
              Ograve: 'Ò',
              Oacute: 'Ó',
              Ocirc: 'Ô',
              Otilde: 'Õ',
              Ouml: 'Ö',
              times: '×',
              Oslash: 'Ø',
              Ugrave: 'Ù',
              Uacute: 'Ú',
              Ucirc: 'Û',
              Uuml: 'Ü',
              Yacute: 'Ý',
              THORN: 'Þ',
              szlig: 'ß',
              agrave: 'à',
              aacute: 'á',
              acirc: 'â',
              atilde: 'ã',
              auml: 'ä',
              aring: 'å',
              aelig: 'æ',
              ccedil: 'ç',
              egrave: 'è',
              eacute: 'é',
              ecirc: 'ê',
              euml: 'ë',
              igrave: 'ì',
              iacute: 'í',
              icirc: 'î',
              iuml: 'ï',
              eth: 'ð',
              ntilde: 'ñ',
              ograve: 'ò',
              oacute: 'ó',
              ocirc: 'ô',
              otilde: 'õ',
              ouml: 'ö',
              divide: '÷',
              oslash: 'ø',
              ugrave: 'ù',
              uacute: 'ú',
              ucirc: 'û',
              uuml: 'ü',
              yacute: 'ý',
              thorn: 'þ',
              yuml: 'ÿ',
              OElig: 'Œ',
              oelig: 'œ',
              Scaron: 'Š',
              scaron: 'š',
              Yuml: 'Ÿ',
              fnof: 'ƒ',
              circ: 'ˆ',
              tilde: '˜',
              Alpha: 'Α',
              Beta: 'Β',
              Gamma: 'Γ',
              Delta: 'Δ',
              Epsilon: 'Ε',
              Zeta: 'Ζ',
              Eta: 'Η',
              Theta: 'Θ',
              Iota: 'Ι',
              Kappa: 'Κ',
              Lambda: 'Λ',
              Mu: 'Μ',
              Nu: 'Ν',
              Xi: 'Ξ',
              Omicron: 'Ο',
              Pi: 'Π',
              Rho: 'Ρ',
              Sigma: 'Σ',
              Tau: 'Τ',
              Upsilon: 'Υ',
              Phi: 'Φ',
              Chi: 'Χ',
              Psi: 'Ψ',
              Omega: 'Ω',
              alpha: 'α',
              beta: 'β',
              gamma: 'γ',
              delta: 'δ',
              epsilon: 'ε',
              zeta: 'ζ',
              eta: 'η',
              theta: 'θ',
              iota: 'ι',
              kappa: 'κ',
              lambda: 'λ',
              mu: 'μ',
              nu: 'ν',
              xi: 'ξ',
              omicron: 'ο',
              pi: 'π',
              rho: 'ρ',
              sigmaf: 'ς',
              sigma: 'σ',
              tau: 'τ',
              upsilon: 'υ',
              phi: 'φ',
              chi: 'χ',
              psi: 'ψ',
              omega: 'ω',
              thetasym: 'ϑ',
              upsih: 'ϒ',
              piv: 'ϖ',
              ensp: ' ',
              emsp: ' ',
              thinsp: ' ',
              zwnj: '‌',
              zwj: '‍',
              lrm: '‎',
              rlm: '‏',
              ndash: '–',
              mdash: '—',
              lsquo: '‘',
              rsquo: '’',
              sbquo: '‚',
              ldquo: '“',
              rdquo: '”',
              bdquo: '„',
              dagger: '†',
              Dagger: '‡',
              bull: '•',
              hellip: '…',
              permil: '‰',
              prime: '′',
              Prime: '″',
              lsaquo: '‹',
              rsaquo: '›',
              oline: '‾',
              frasl: '⁄',
              euro: '€',
              image: 'ℑ',
              weierp: '℘',
              real: 'ℜ',
              trade: '™',
              alefsym: 'ℵ',
              larr: '←',
              uarr: '↑',
              rarr: '→',
              darr: '↓',
              harr: '↔',
              crarr: '↵',
              lArr: '⇐',
              uArr: '⇑',
              rArr: '⇒',
              dArr: '⇓',
              hArr: '⇔',
              forall: '∀',
              part: '∂',
              exist: '∃',
              empty: '∅',
              nabla: '∇',
              isin: '∈',
              notin: '∉',
              ni: '∋',
              prod: '∏',
              sum: '∑',
              minus: '−',
              lowast: '∗',
              radic: '√',
              prop: '∝',
              infin: '∞',
              ang: '∠',
              and: '∧',
              or: '∨',
              cap: '∩',
              cup: '∪',
              int: '∫',
              there4: '∴',
              sim: '∼',
              cong: '≅',
              asymp: '≈',
              ne: '≠',
              equiv: '≡',
              le: '≤',
              ge: '≥',
              sub: '⊂',
              sup: '⊃',
              nsub: '⊄',
              sube: '⊆',
              supe: '⊇',
              oplus: '⊕',
              otimes: '⊗',
              perp: '⊥',
              sdot: '⋅',
              lceil: '⌈',
              rceil: '⌉',
              lfloor: '⌊',
              rfloor: '⌋',
              loz: '◊',
              spades: '♠',
              clubs: '♣',
              hearts: '♥',
              diams: '♦',
              lang: '⟨',
              rang: '⟩',
            }
          },
          function (t, e, i) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: true })
            var r = i(10)
            var n = i(12)
            var s = i(13)
            var a = (function () {
              function Reader() {
                this.values = []
                this.curly = this.paren = -1
              }
              Reader.prototype.beforeFunctionExpression = function (t) {
                return (
                  [
                    '(',
                    '{',
                    '[',
                    'in',
                    'typeof',
                    'instanceof',
                    'new',
                    'return',
                    'case',
                    'delete',
                    'throw',
                    'void',
                    '=',
                    '+=',
                    '-=',
                    '*=',
                    '**=',
                    '/=',
                    '%=',
                    '<<=',
                    '>>=',
                    '>>>=',
                    '&=',
                    '|=',
                    '^=',
                    ',',
                    '+',
                    '-',
                    '*',
                    '**',
                    '/',
                    '%',
                    '++',
                    '--',
                    '<<',
                    '>>',
                    '>>>',
                    '&',
                    '|',
                    '^',
                    '!',
                    '~',
                    '&&',
                    '||',
                    '?',
                    ':',
                    '===',
                    '==',
                    '>=',
                    '<=',
                    '<',
                    '>',
                    '!=',
                    '!==',
                  ].indexOf(t) >= 0
                )
              }
              Reader.prototype.isRegexStart = function () {
                var t = this.values[this.values.length - 1]
                var e = t !== null
                switch (t) {
                  case 'this':
                  case ']':
                    e = false
                    break
                  case ')':
                    var i = this.values[this.paren - 1]
                    e =
                      i === 'if' || i === 'while' || i === 'for' || i === 'with'
                    break
                  case '}':
                    e = false
                    if (this.values[this.curly - 3] === 'function') {
                      var r = this.values[this.curly - 4]
                      e = r ? !this.beforeFunctionExpression(r) : false
                    } else if (this.values[this.curly - 4] === 'function') {
                      var r = this.values[this.curly - 5]
                      e = r ? !this.beforeFunctionExpression(r) : true
                    }
                    break
                  default:
                    break
                }
                return e
              }
              Reader.prototype.push = function (t) {
                if (t.type === 7 || t.type === 4) {
                  if (t.value === '{') {
                    this.curly = this.values.length
                  } else if (t.value === '(') {
                    this.paren = this.values.length
                  }
                  this.values.push(t.value)
                } else {
                  this.values.push(null)
                }
              }
              return Reader
            })()
            var u = (function () {
              function Tokenizer(t, e) {
                this.errorHandler = new r.ErrorHandler()
                this.errorHandler.tolerant = e
                  ? typeof e.tolerant === 'boolean' && e.tolerant
                  : false
                this.scanner = new n.Scanner(t, this.errorHandler)
                this.scanner.trackComment = e
                  ? typeof e.comment === 'boolean' && e.comment
                  : false
                this.trackRange = e
                  ? typeof e.range === 'boolean' && e.range
                  : false
                this.trackLoc = e ? typeof e.loc === 'boolean' && e.loc : false
                this.buffer = []
                this.reader = new a()
              }
              Tokenizer.prototype.errors = function () {
                return this.errorHandler.errors
              }
              Tokenizer.prototype.getNextToken = function () {
                if (this.buffer.length === 0) {
                  var t = this.scanner.scanComments()
                  if (this.scanner.trackComment) {
                    for (var e = 0; e < t.length; ++e) {
                      var i = t[e]
                      var r = this.scanner.source.slice(i.slice[0], i.slice[1])
                      var n = {
                        type: i.multiLine ? 'BlockComment' : 'LineComment',
                        value: r,
                      }
                      if (this.trackRange) {
                        n.range = i.range
                      }
                      if (this.trackLoc) {
                        n.loc = i.loc
                      }
                      this.buffer.push(n)
                    }
                  }
                  if (!this.scanner.eof()) {
                    var a = void 0
                    if (this.trackLoc) {
                      a = {
                        start: {
                          line: this.scanner.lineNumber,
                          column: this.scanner.index - this.scanner.lineStart,
                        },
                        end: {},
                      }
                    }
                    var u =
                      this.scanner.source[this.scanner.index] === '/' &&
                      this.reader.isRegexStart()
                    var h = u ? this.scanner.scanRegExp() : this.scanner.lex()
                    this.reader.push(h)
                    var o = {
                      type: s.TokenName[h.type],
                      value: this.scanner.source.slice(h.start, h.end),
                    }
                    if (this.trackRange) {
                      o.range = [h.start, h.end]
                    }
                    if (this.trackLoc) {
                      a.end = {
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart,
                      }
                      o.loc = a
                    }
                    if (h.type === 9) {
                      var l = h.pattern
                      var c = h.flags
                      o.regex = { pattern: l, flags: c }
                    }
                    this.buffer.push(o)
                  }
                }
                return this.buffer.shift()
              }
              return Tokenizer
            })()
            e.Tokenizer = u
          },
        ])
      })
    },
    577: (t) => {
      'use strict'
      const e = Object.prototype.hasOwnProperty
      t.exports = (t, i) => e.call(t, i)
    },
    332: (t) => {
      'use strict'
      var e = ''
      var i
      t.exports = repeat
      function repeat(t, r) {
        if (typeof t !== 'string') {
          throw new TypeError('expected a string')
        }
        if (r === 1) return t
        if (r === 2) return t + t
        var n = t.length * r
        if (i !== t || typeof i === 'undefined') {
          i = t
          e = ''
        } else if (e.length >= n) {
          return e.substr(0, n)
        }
        while (n > e.length && r > 1) {
          if (r & 1) {
            e += t
          }
          r >>= 1
          t += t
        }
        e += t
        e = e.substr(0, n)
        return e
      }
    },
  }
  var e = {}
  function __nccwpck_require__(i) {
    if (e[i]) {
      return e[i].exports
    }
    var r = (e[i] = { exports: {} })
    var n = true
    try {
      t[i].call(r.exports, r, r.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete e[i]
    }
    return r.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(20)
})()
