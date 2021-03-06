module.exports = (() => {
  var e = {
    618: (e, r, l) => {
      const { Container: t } = l(43)
      class NestedDeclaration extends t {
        constructor(e) {
          super(e)
          this.type = 'decl'
          this.isNested = true
          if (!this.nodes) this.nodes = []
        }
      }
      e.exports = NestedDeclaration
    },
    327: (e, r, l) => {
      let { Input: t } = l(43)
      let i = l(270)
      e.exports = function scssParse(e, r) {
        let l = new t(e, r)
        let f = new i(l)
        f.parse()
        return f.root
      }
    },
    270: (e, r, l) => {
      let { Comment: t } = l(43)
      let i = l(552)
      let f = l(618)
      let a = l(366)
      class ScssParser extends i {
        createTokenizer() {
          this.tokenizer = a(this.input)
        }
        rule(e) {
          let r = false
          let l = 0
          let t = ''
          for (let i of e) {
            if (r) {
              if (i[0] !== 'comment' && i[0] !== '{') {
                t += i[1]
              }
            } else if (i[0] === 'space' && i[1].includes('\n')) {
              break
            } else if (i[0] === '(') {
              l += 1
            } else if (i[0] === ')') {
              l -= 1
            } else if (l === 0 && i[0] === ':') {
              r = true
            }
          }
          if (!r || t.trim() === '' || /^[#:A-Za-z-]/.test(t)) {
            super.rule(e)
          } else {
            e.pop()
            let r = new f()
            this.init(r, e[0][2])
            let l
            for (let r = e.length - 1; r >= 0; r--) {
              if (e[r][0] !== 'space') {
                l = e[r]
                break
              }
            }
            if (l[3]) {
              let e = this.input.fromOffset(l[3])
              r.source.end = { offset: l[3], line: e.line, column: e.col }
            } else {
              let e = this.input.fromOffset(l[2])
              r.source.end = { offset: l[2], line: e.line, column: e.col }
            }
            while (e[0][0] !== 'word') {
              r.raws.before += e.shift()[1]
            }
            r.source.start = { line: e[0][2], column: e[0][3] }
            r.prop = ''
            while (e.length) {
              let l = e[0][0]
              if (l === ':' || l === 'space' || l === 'comment') {
                break
              }
              r.prop += e.shift()[1]
            }
            r.raws.between = ''
            let t
            while (e.length) {
              t = e.shift()
              if (t[0] === ':') {
                r.raws.between += t[1]
                break
              } else {
                r.raws.between += t[1]
              }
            }
            if (r.prop[0] === '_' || r.prop[0] === '*') {
              r.raws.before += r.prop[0]
              r.prop = r.prop.slice(1)
            }
            r.raws.between += this.spacesAndCommentsFromStart(e)
            this.precheckMissedSemicolon(e)
            for (let l = e.length - 1; l > 0; l--) {
              t = e[l]
              if (t[1] === '!important') {
                r.important = true
                let t = this.stringFrom(e, l)
                t = this.spacesFromEnd(e) + t
                if (t !== ' !important') {
                  r.raws.important = t
                }
                break
              } else if (t[1] === 'important') {
                let t = e.slice(0)
                let i = ''
                for (let e = l; e > 0; e--) {
                  let r = t[e][0]
                  if (i.trim().indexOf('!') === 0 && r !== 'space') {
                    break
                  }
                  i = t.pop()[1] + i
                }
                if (i.trim().indexOf('!') === 0) {
                  r.important = true
                  r.raws.important = i
                  e = t
                }
              }
              if (t[0] !== 'space' && t[0] !== 'comment') {
                break
              }
            }
            this.raw(r, 'value', e)
            if (r.value.includes(':')) {
              this.checkMissedSemicolon(e)
            }
            this.current = r
          }
        }
        comment(e) {
          if (e[4] === 'inline') {
            let r = new t()
            this.init(r, e[2])
            r.raws.inline = true
            let l = this.input.fromOffset(e[3])
            r.source.end = { offset: e[3], line: l.line, column: l.col }
            let i = e[1].slice(2)
            if (/^\s*$/.test(i)) {
              r.text = ''
              r.raws.left = i
              r.raws.right = ''
            } else {
              let e = i.match(/^(\s*)([^]*\S)(\s*)$/)
              let l = e[2].replace(/(\*\/|\/\*)/g, '*//*')
              r.text = l
              r.raws.left = e[1]
              r.raws.right = e[3]
              r.raws.text = e[2]
            }
          } else {
            super.comment(e)
          }
        }
        raw(e, r, l) {
          super.raw(e, r, l)
          if (e.raws[r]) {
            let t = e.raws[r].raw
            e.raws[r].raw = l.reduce((e, r) => {
              if (r[0] === 'comment' && r[4] === 'inline') {
                let l = r[1].slice(2).replace(/(\*\/|\/\*)/g, '*//*')
                return e + '/*' + l + '*/'
              } else {
                return e + r[1]
              }
            }, '')
            if (t !== e.raws[r].raw) {
              e.raws[r].scss = t
            }
          }
        }
      }
      e.exports = ScssParser
    },
    139: (e, r, l) => {
      let t = l(779)
      class ScssStringifier extends t {
        comment(e) {
          let r = this.raw(e, 'left', 'commentLeft')
          let l = this.raw(e, 'right', 'commentRight')
          if (e.raws.inline) {
            let t = e.raws.text || e.text
            this.builder('//' + r + t + l, e)
          } else {
            this.builder('/*' + r + e.text + l + '*/', e)
          }
        }
        decl(e, r) {
          if (!e.isNested) {
            super.decl(e, r)
          } else {
            let r = this.raw(e, 'between', 'colon')
            let l = e.prop + r + this.rawValue(e, 'value')
            if (e.important) {
              l += e.raws.important || ' !important'
            }
            this.builder(l + '{', e, 'start')
            let t
            if (e.nodes && e.nodes.length) {
              this.body(e)
              t = this.raw(e, 'after')
            } else {
              t = this.raw(e, 'after', 'emptyBody')
            }
            if (t) this.builder(t)
            this.builder('}', e, 'end')
          }
        }
        rawValue(e, r) {
          let l = e[r]
          let t = e.raws[r]
          if (t && t.value === l) {
            return t.scss ? t.scss : t.raw
          } else {
            return l
          }
        }
      }
      e.exports = ScssStringifier
    },
    886: (e, r, l) => {
      let t = l(139)
      e.exports = function scssStringify(e, r) {
        let l = new t(r)
        l.stringify(e)
      }
    },
    845: (e, r, l) => {
      let t = l(886)
      let i = l(327)
      e.exports = { parse: i, stringify: t }
    },
    366: (e) => {
      'use strict'
      const r = "'".charCodeAt(0)
      const l = '"'.charCodeAt(0)
      const t = '\\'.charCodeAt(0)
      const i = '/'.charCodeAt(0)
      const f = '\n'.charCodeAt(0)
      const a = ' '.charCodeAt(0)
      const s = '\f'.charCodeAt(0)
      const w = '\t'.charCodeAt(0)
      const h = '\r'.charCodeAt(0)
      const o = '['.charCodeAt(0)
      const u = ']'.charCodeAt(0)
      const n = '('.charCodeAt(0)
      const c = ')'.charCodeAt(0)
      const b = '{'.charCodeAt(0)
      const m = '}'.charCodeAt(0)
      const y = ';'.charCodeAt(0)
      const p = '*'.charCodeAt(0)
      const C = ':'.charCodeAt(0)
      const A = '@'.charCodeAt(0)
      const d = ','.charCodeAt(0)
      const O = '#'.charCodeAt(0)
      const D = /[\t\n\f\r "#'()/;[\\\]{}]/g
      const S = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g
      const q = /.[\n"'(/\\]/
      const z = /[\da-f]/i
      const F = /[\n\f\r]/g
      e.exports = function scssTokenize(e, V = {}) {
        let $ = e.css.valueOf()
        let k = V.ignoreErrors
        let B, I, M, _, U
        let Z, g, j, G
        let J = $.length
        let X = 0
        let Y = []
        let P = []
        let v
        function position() {
          return X
        }
        function unclosed(r) {
          throw e.error('Unclosed ' + r, X)
        }
        function endOfFile() {
          return P.length === 0 && X >= J
        }
        function interpolation() {
          let e = 1
          let i = false
          let f = false
          while (e > 0) {
            I += 1
            if ($.length <= I) unclosed('interpolation')
            B = $.charCodeAt(I)
            j = $.charCodeAt(I + 1)
            if (i) {
              if (!f && B === i) {
                i = false
                f = false
              } else if (B === t) {
                f = !f
              } else if (f) {
                f = false
              }
            } else if (B === r || B === l) {
              i = B
            } else if (B === m) {
              e -= 1
            } else if (B === O && j === b) {
              e += 1
            }
          }
        }
        function nextToken(e) {
          if (P.length) return P.pop()
          if (X >= J) return
          let V = e ? e.ignoreUnclosed : false
          B = $.charCodeAt(X)
          switch (B) {
            case f:
            case a:
            case w:
            case h:
            case s: {
              I = X
              do {
                I += 1
                B = $.charCodeAt(I)
              } while (B === a || B === f || B === w || B === h || B === s)
              G = ['space', $.slice(X, I)]
              X = I - 1
              break
            }
            case o:
            case u:
            case b:
            case m:
            case C:
            case y:
            case c: {
              let e = String.fromCharCode(B)
              G = [e, e, X]
              break
            }
            case d: {
              G = ['word', ',', X, X + 1]
              break
            }
            case n: {
              g = Y.length ? Y.pop()[1] : ''
              j = $.charCodeAt(X + 1)
              if (g === 'url' && j !== r && j !== l) {
                v = 1
                Z = false
                I = X + 1
                while (I <= $.length - 1) {
                  j = $.charCodeAt(I)
                  if (j === t) {
                    Z = !Z
                  } else if (j === n) {
                    v += 1
                  } else if (j === c) {
                    v -= 1
                    if (v === 0) break
                  }
                  I += 1
                }
                _ = $.slice(X, I + 1)
                G = ['brackets', _, X, I]
                X = I
              } else {
                I = $.indexOf(')', X + 1)
                _ = $.slice(X, I + 1)
                if (I === -1 || q.test(_)) {
                  G = ['(', '(', X]
                } else {
                  G = ['brackets', _, X, I]
                  X = I
                }
              }
              break
            }
            case r:
            case l: {
              M = B
              I = X
              Z = false
              while (I < J) {
                I++
                if (I === J) unclosed('string')
                B = $.charCodeAt(I)
                j = $.charCodeAt(I + 1)
                if (!Z && B === M) {
                  break
                } else if (B === t) {
                  Z = !Z
                } else if (Z) {
                  Z = false
                } else if (B === O && j === b) {
                  interpolation()
                }
              }
              G = ['string', $.slice(X, I + 1), X, I]
              X = I
              break
            }
            case A: {
              D.lastIndex = X + 1
              D.test($)
              if (D.lastIndex === 0) {
                I = $.length - 1
              } else {
                I = D.lastIndex - 2
              }
              G = ['at-word', $.slice(X, I + 1), X, I]
              X = I
              break
            }
            case t: {
              I = X
              U = true
              while ($.charCodeAt(I + 1) === t) {
                I += 1
                U = !U
              }
              B = $.charCodeAt(I + 1)
              if (
                U &&
                B !== i &&
                B !== a &&
                B !== f &&
                B !== w &&
                B !== h &&
                B !== s
              ) {
                I += 1
                if (z.test($.charAt(I))) {
                  while (z.test($.charAt(I + 1))) {
                    I += 1
                  }
                  if ($.charCodeAt(I + 1) === a) {
                    I += 1
                  }
                }
              }
              G = ['word', $.slice(X, I + 1), X, I]
              X = I
              break
            }
            default:
              j = $.charCodeAt(X + 1)
              if (B === O && j === b) {
                I = X
                interpolation()
                _ = $.slice(X, I + 1)
                G = ['word', _, X, I]
                X = I
              } else if (B === i && j === p) {
                I = $.indexOf('*/', X + 2) + 1
                if (I === 0) {
                  if (k || V) {
                    I = $.length
                  } else {
                    unclosed('comment')
                  }
                }
                G = ['comment', $.slice(X, I + 1), X, I]
                X = I
              } else if (B === i && j === i) {
                F.lastIndex = X + 1
                F.test($)
                if (F.lastIndex === 0) {
                  I = $.length - 1
                } else {
                  I = F.lastIndex - 2
                }
                _ = $.slice(X, I + 1)
                G = ['comment', _, X, I, 'inline']
                X = I
              } else {
                S.lastIndex = X + 1
                S.test($)
                if (S.lastIndex === 0) {
                  I = $.length - 1
                } else {
                  I = S.lastIndex - 2
                }
                G = ['word', $.slice(X, I + 1), X, I]
                Y.push(G)
                X = I
              }
              break
          }
          X++
          return G
        }
        function back(e) {
          P.push(e)
        }
        return {
          back: back,
          nextToken: nextToken,
          endOfFile: endOfFile,
          position: position,
        }
      }
    },
    779: (e) => {
      'use strict'
      const r = {
        colon: ': ',
        indent: '    ',
        beforeDecl: '\n',
        beforeRule: '\n',
        beforeOpen: ' ',
        beforeClose: '\n',
        beforeComment: '\n',
        after: '\n',
        emptyBody: '',
        commentLeft: ' ',
        commentRight: ' ',
        semicolon: false,
      }
      function capitalize(e) {
        return e[0].toUpperCase() + e.slice(1)
      }
      class Stringifier {
        constructor(e) {
          this.builder = e
        }
        stringify(e, r) {
          if (!this[e.type]) {
            throw new Error(
              'Unknown AST node type ' +
                e.type +
                '. ' +
                'Maybe you need to change PostCSS stringifier.'
            )
          }
          this[e.type](e, r)
        }
        root(e) {
          this.body(e)
          if (e.raws.after) this.builder(e.raws.after)
        }
        comment(e) {
          let r = this.raw(e, 'left', 'commentLeft')
          let l = this.raw(e, 'right', 'commentRight')
          this.builder('/*' + r + e.text + l + '*/', e)
        }
        decl(e, r) {
          let l = this.raw(e, 'between', 'colon')
          let t = e.prop + l + this.rawValue(e, 'value')
          if (e.important) {
            t += e.raws.important || ' !important'
          }
          if (r) t += ';'
          this.builder(t, e)
        }
        rule(e) {
          this.block(e, this.rawValue(e, 'selector'))
          if (e.raws.ownSemicolon) {
            this.builder(e.raws.ownSemicolon, e, 'end')
          }
        }
        atrule(e, r) {
          let l = '@' + e.name
          let t = e.params ? this.rawValue(e, 'params') : ''
          if (typeof e.raws.afterName !== 'undefined') {
            l += e.raws.afterName
          } else if (t) {
            l += ' '
          }
          if (e.nodes) {
            this.block(e, l + t)
          } else {
            let i = (e.raws.between || '') + (r ? ';' : '')
            this.builder(l + t + i, e)
          }
        }
        body(e) {
          let r = e.nodes.length - 1
          while (r > 0) {
            if (e.nodes[r].type !== 'comment') break
            r -= 1
          }
          let l = this.raw(e, 'semicolon')
          for (let t = 0; t < e.nodes.length; t++) {
            let i = e.nodes[t]
            let f = this.raw(i, 'before')
            if (f) this.builder(f)
            this.stringify(i, r !== t || l)
          }
        }
        block(e, r) {
          let l = this.raw(e, 'between', 'beforeOpen')
          this.builder(r + l + '{', e, 'start')
          let t
          if (e.nodes && e.nodes.length) {
            this.body(e)
            t = this.raw(e, 'after')
          } else {
            t = this.raw(e, 'after', 'emptyBody')
          }
          if (t) this.builder(t)
          this.builder('}', e, 'end')
        }
        raw(e, l, t) {
          let i
          if (!t) t = l
          if (l) {
            i = e.raws[l]
            if (typeof i !== 'undefined') return i
          }
          let f = e.parent
          if (t === 'before') {
            if (!f || (f.type === 'root' && f.first === e)) {
              return ''
            }
          }
          if (!f) return r[t]
          let a = e.root()
          if (!a.rawCache) a.rawCache = {}
          if (typeof a.rawCache[t] !== 'undefined') {
            return a.rawCache[t]
          }
          if (t === 'before' || t === 'after') {
            return this.beforeAfter(e, t)
          } else {
            let r = 'raw' + capitalize(t)
            if (this[r]) {
              i = this[r](a, e)
            } else {
              a.walk((e) => {
                i = e.raws[l]
                if (typeof i !== 'undefined') return false
              })
            }
          }
          if (typeof i === 'undefined') i = r[t]
          a.rawCache[t] = i
          return i
        }
        rawSemicolon(e) {
          let r
          e.walk((e) => {
            if (e.nodes && e.nodes.length && e.last.type === 'decl') {
              r = e.raws.semicolon
              if (typeof r !== 'undefined') return false
            }
          })
          return r
        }
        rawEmptyBody(e) {
          let r
          e.walk((e) => {
            if (e.nodes && e.nodes.length === 0) {
              r = e.raws.after
              if (typeof r !== 'undefined') return false
            }
          })
          return r
        }
        rawIndent(e) {
          if (e.raws.indent) return e.raws.indent
          let r
          e.walk((l) => {
            let t = l.parent
            if (t && t !== e && t.parent && t.parent === e) {
              if (typeof l.raws.before !== 'undefined') {
                let e = l.raws.before.split('\n')
                r = e[e.length - 1]
                r = r.replace(/\S/g, '')
                return false
              }
            }
          })
          return r
        }
        rawBeforeComment(e, r) {
          let l
          e.walkComments((e) => {
            if (typeof e.raws.before !== 'undefined') {
              l = e.raws.before
              if (l.includes('\n')) {
                l = l.replace(/[^\n]+$/, '')
              }
              return false
            }
          })
          if (typeof l === 'undefined') {
            l = this.raw(r, null, 'beforeDecl')
          } else if (l) {
            l = l.replace(/\S/g, '')
          }
          return l
        }
        rawBeforeDecl(e, r) {
          let l
          e.walkDecls((e) => {
            if (typeof e.raws.before !== 'undefined') {
              l = e.raws.before
              if (l.includes('\n')) {
                l = l.replace(/[^\n]+$/, '')
              }
              return false
            }
          })
          if (typeof l === 'undefined') {
            l = this.raw(r, null, 'beforeRule')
          } else if (l) {
            l = l.replace(/\S/g, '')
          }
          return l
        }
        rawBeforeRule(e) {
          let r
          e.walk((l) => {
            if (l.nodes && (l.parent !== e || e.first !== l)) {
              if (typeof l.raws.before !== 'undefined') {
                r = l.raws.before
                if (r.includes('\n')) {
                  r = r.replace(/[^\n]+$/, '')
                }
                return false
              }
            }
          })
          if (r) r = r.replace(/\S/g, '')
          return r
        }
        rawBeforeClose(e) {
          let r
          e.walk((e) => {
            if (e.nodes && e.nodes.length > 0) {
              if (typeof e.raws.after !== 'undefined') {
                r = e.raws.after
                if (r.includes('\n')) {
                  r = r.replace(/[^\n]+$/, '')
                }
                return false
              }
            }
          })
          if (r) r = r.replace(/\S/g, '')
          return r
        }
        rawBeforeOpen(e) {
          let r
          e.walk((e) => {
            if (e.type !== 'decl') {
              r = e.raws.between
              if (typeof r !== 'undefined') return false
            }
          })
          return r
        }
        rawColon(e) {
          let r
          e.walkDecls((e) => {
            if (typeof e.raws.between !== 'undefined') {
              r = e.raws.between.replace(/[^\s:]/g, '')
              return false
            }
          })
          return r
        }
        beforeAfter(e, r) {
          let l
          if (e.type === 'decl') {
            l = this.raw(e, null, 'beforeDecl')
          } else if (e.type === 'comment') {
            l = this.raw(e, null, 'beforeComment')
          } else if (r === 'before') {
            l = this.raw(e, null, 'beforeRule')
          } else {
            l = this.raw(e, null, 'beforeClose')
          }
          let t = e.parent
          let i = 0
          while (t && t.type !== 'root') {
            i += 1
            t = t.parent
          }
          if (l.includes('\n')) {
            let r = this.raw(e, null, 'indent')
            if (r.length) {
              for (let e = 0; e < i; e++) l += r
            }
          }
          return l
        }
        rawValue(e, r) {
          let l = e[r]
          let t = e.raws[r]
          if (t && t.value === l) {
            return t.raw
          }
          return l
        }
      }
      e.exports = Stringifier
    },
    43: (e) => {
      'use strict'
      e.exports = require('postcss')
    },
    552: (e) => {
      'use strict'
      e.exports = require('postcss/lib/parser')
    },
  }
  var r = {}
  function __nccwpck_require__(l) {
    if (r[l]) {
      return r[l].exports
    }
    var t = (r[l] = { exports: {} })
    var i = true
    try {
      e[l](t, t.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete r[l]
    }
    return t.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(845)
})()
