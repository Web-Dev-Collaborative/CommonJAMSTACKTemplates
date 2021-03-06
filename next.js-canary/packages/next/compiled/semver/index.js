module.exports = (() => {
  var e = {
    532: (e, s, t) => {
      const r = Symbol('SemVer ANY')
      class Comparator {
        static get ANY() {
          return r
        }
        constructor(e, s) {
          if (!s || typeof s !== 'object') {
            s = { loose: !!s, includePrerelease: false }
          }
          if (e instanceof Comparator) {
            if (e.loose === !!s.loose) {
              return e
            } else {
              e = e.value
            }
          }
          a('comparator', e, s)
          this.options = s
          this.loose = !!s.loose
          this.parse(e)
          if (this.semver === r) {
            this.value = ''
          } else {
            this.value = this.operator + this.semver.version
          }
          a('comp', this)
        }
        parse(e) {
          const s = this.options.loose ? n[o.COMPARATORLOOSE] : n[o.COMPARATOR]
          const t = e.match(s)
          if (!t) {
            throw new TypeError(`Invalid comparator: ${e}`)
          }
          this.operator = t[1] !== undefined ? t[1] : ''
          if (this.operator === '=') {
            this.operator = ''
          }
          if (!t[2]) {
            this.semver = r
          } else {
            this.semver = new l(t[2], this.options.loose)
          }
        }
        toString() {
          return this.value
        }
        test(e) {
          a('Comparator.test', e, this.options.loose)
          if (this.semver === r || e === r) {
            return true
          }
          if (typeof e === 'string') {
            try {
              e = new l(e, this.options)
            } catch (e) {
              return false
            }
          }
          return i(e, this.operator, this.semver, this.options)
        }
        intersects(e, s) {
          if (!(e instanceof Comparator)) {
            throw new TypeError('a Comparator is required')
          }
          if (!s || typeof s !== 'object') {
            s = { loose: !!s, includePrerelease: false }
          }
          if (this.operator === '') {
            if (this.value === '') {
              return true
            }
            return new c(e.value, s).test(this.value)
          } else if (e.operator === '') {
            if (e.value === '') {
              return true
            }
            return new c(this.value, s).test(e.semver)
          }
          const t =
            (this.operator === '>=' || this.operator === '>') &&
            (e.operator === '>=' || e.operator === '>')
          const r =
            (this.operator === '<=' || this.operator === '<') &&
            (e.operator === '<=' || e.operator === '<')
          const n = this.semver.version === e.semver.version
          const o =
            (this.operator === '>=' || this.operator === '<=') &&
            (e.operator === '>=' || e.operator === '<=')
          const a =
            i(this.semver, '<', e.semver, s) &&
            (this.operator === '>=' || this.operator === '>') &&
            (e.operator === '<=' || e.operator === '<')
          const l =
            i(this.semver, '>', e.semver, s) &&
            (this.operator === '<=' || this.operator === '<') &&
            (e.operator === '>=' || e.operator === '>')
          return t || r || (n && o) || a || l
        }
      }
      e.exports = Comparator
      const { re: n, t: o } = t(523)
      const i = t(98)
      const a = t(427)
      const l = t(88)
      const c = t(828)
    },
    828: (e, s, t) => {
      class Range {
        constructor(e, s) {
          if (!s || typeof s !== 'object') {
            s = { loose: !!s, includePrerelease: false }
          }
          if (e instanceof Range) {
            if (
              e.loose === !!s.loose &&
              e.includePrerelease === !!s.includePrerelease
            ) {
              return e
            } else {
              return new Range(e.raw, s)
            }
          }
          if (e instanceof r) {
            this.raw = e.value
            this.set = [[e]]
            this.format()
            return this
          }
          this.options = s
          this.loose = !!s.loose
          this.includePrerelease = !!s.includePrerelease
          this.raw = e
          this.set = e
            .split(/\s*\|\|\s*/)
            .map((e) => this.parseRange(e.trim()))
            .filter((e) => e.length)
          if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${e}`)
          }
          this.format()
        }
        format() {
          this.range = this.set
            .map((e) => {
              return e.join(' ').trim()
            })
            .join('||')
            .trim()
          return this.range
        }
        toString() {
          return this.range
        }
        parseRange(e) {
          const s = this.options.loose
          e = e.trim()
          const t = s ? i[a.HYPHENRANGELOOSE] : i[a.HYPHENRANGE]
          e = e.replace(t, T(this.options.includePrerelease))
          n('hyphen replace', e)
          e = e.replace(i[a.COMPARATORTRIM], l)
          n('comparator trim', e, i[a.COMPARATORTRIM])
          e = e.replace(i[a.TILDETRIM], c)
          e = e.replace(i[a.CARETTRIM], E)
          e = e.split(/\s+/).join(' ')
          const o = s ? i[a.COMPARATORLOOSE] : i[a.COMPARATOR]
          return e
            .split(' ')
            .map((e) => u(e, this.options))
            .join(' ')
            .split(/\s+/)
            .map((e) => A(e, this.options))
            .filter(this.options.loose ? (e) => !!e.match(o) : () => true)
            .map((e) => new r(e, this.options))
        }
        intersects(e, s) {
          if (!(e instanceof Range)) {
            throw new TypeError('a Range is required')
          }
          return this.set.some((t) => {
            return (
              f(t, s) &&
              e.set.some((e) => {
                return (
                  f(e, s) &&
                  t.every((t) => {
                    return e.every((e) => {
                      return t.intersects(e, s)
                    })
                  })
                )
              })
            )
          })
        }
        test(e) {
          if (!e) {
            return false
          }
          if (typeof e === 'string') {
            try {
              e = new o(e, this.options)
            } catch (e) {
              return false
            }
          }
          for (let s = 0; s < this.set.length; s++) {
            if (S(this.set[s], e, this.options)) {
              return true
            }
          }
          return false
        }
      }
      e.exports = Range
      const r = t(532)
      const n = t(427)
      const o = t(88)
      const {
        re: i,
        t: a,
        comparatorTrimReplace: l,
        tildeTrimReplace: c,
        caretTrimReplace: E,
      } = t(523)
      const f = (e, s) => {
        let t = true
        const r = e.slice()
        let n = r.pop()
        while (t && r.length) {
          t = r.every((e) => {
            return n.intersects(e, s)
          })
          n = r.pop()
        }
        return t
      }
      const u = (e, s) => {
        n('comp', e, s)
        e = R(e, s)
        n('caret', e)
        e = $(e, s)
        n('tildes', e)
        e = N(e, s)
        n('xrange', e)
        e = L(e, s)
        n('stars', e)
        return e
      }
      const h = (e) => !e || e.toLowerCase() === 'x' || e === '*'
      const $ = (e, s) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => {
            return I(e, s)
          })
          .join(' ')
      const I = (e, s) => {
        const t = s.loose ? i[a.TILDELOOSE] : i[a.TILDE]
        return e.replace(t, (s, t, r, o, i) => {
          n('tilde', e, s, t, r, o, i)
          let a
          if (h(t)) {
            a = ''
          } else if (h(r)) {
            a = `>=${t}.0.0 <${+t + 1}.0.0-0`
          } else if (h(o)) {
            a = `>=${t}.${r}.0 <${t}.${+r + 1}.0-0`
          } else if (i) {
            n('replaceTilde pr', i)
            a = `>=${t}.${r}.${o}-${i} <${t}.${+r + 1}.0-0`
          } else {
            a = `>=${t}.${r}.${o} <${t}.${+r + 1}.0-0`
          }
          n('tilde return', a)
          return a
        })
      }
      const R = (e, s) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => {
            return p(e, s)
          })
          .join(' ')
      const p = (e, s) => {
        n('caret', e, s)
        const t = s.loose ? i[a.CARETLOOSE] : i[a.CARET]
        const r = s.includePrerelease ? '-0' : ''
        return e.replace(t, (s, t, o, i, a) => {
          n('caret', e, s, t, o, i, a)
          let l
          if (h(t)) {
            l = ''
          } else if (h(o)) {
            l = `>=${t}.0.0${r} <${+t + 1}.0.0-0`
          } else if (h(i)) {
            if (t === '0') {
              l = `>=${t}.${o}.0${r} <${t}.${+o + 1}.0-0`
            } else {
              l = `>=${t}.${o}.0${r} <${+t + 1}.0.0-0`
            }
          } else if (a) {
            n('replaceCaret pr', a)
            if (t === '0') {
              if (o === '0') {
                l = `>=${t}.${o}.${i}-${a} <${t}.${o}.${+i + 1}-0`
              } else {
                l = `>=${t}.${o}.${i}-${a} <${t}.${+o + 1}.0-0`
              }
            } else {
              l = `>=${t}.${o}.${i}-${a} <${+t + 1}.0.0-0`
            }
          } else {
            n('no pr')
            if (t === '0') {
              if (o === '0') {
                l = `>=${t}.${o}.${i}${r} <${t}.${o}.${+i + 1}-0`
              } else {
                l = `>=${t}.${o}.${i}${r} <${t}.${+o + 1}.0-0`
              }
            } else {
              l = `>=${t}.${o}.${i} <${+t + 1}.0.0-0`
            }
          }
          n('caret return', l)
          return l
        })
      }
      const N = (e, s) => {
        n('replaceXRanges', e, s)
        return e
          .split(/\s+/)
          .map((e) => {
            return O(e, s)
          })
          .join(' ')
      }
      const O = (e, s) => {
        e = e.trim()
        const t = s.loose ? i[a.XRANGELOOSE] : i[a.XRANGE]
        return e.replace(t, (t, r, o, i, a, l) => {
          n('xRange', e, t, r, o, i, a, l)
          const c = h(o)
          const E = c || h(i)
          const f = E || h(a)
          const u = f
          if (r === '=' && u) {
            r = ''
          }
          l = s.includePrerelease ? '-0' : ''
          if (c) {
            if (r === '>' || r === '<') {
              t = '<0.0.0-0'
            } else {
              t = '*'
            }
          } else if (r && u) {
            if (E) {
              i = 0
            }
            a = 0
            if (r === '>') {
              r = '>='
              if (E) {
                o = +o + 1
                i = 0
                a = 0
              } else {
                i = +i + 1
                a = 0
              }
            } else if (r === '<=') {
              r = '<'
              if (E) {
                o = +o + 1
              } else {
                i = +i + 1
              }
            }
            if (r === '<') l = '-0'
            t = `${r + o}.${i}.${a}${l}`
          } else if (E) {
            t = `>=${o}.0.0${l} <${+o + 1}.0.0-0`
          } else if (f) {
            t = `>=${o}.${i}.0${l} <${o}.${+i + 1}.0-0`
          }
          n('xRange return', t)
          return t
        })
      }
      const L = (e, s) => {
        n('replaceStars', e, s)
        return e.trim().replace(i[a.STAR], '')
      }
      const A = (e, s) => {
        n('replaceGTE0', e, s)
        return e.trim().replace(i[s.includePrerelease ? a.GTE0PRE : a.GTE0], '')
      }
      const T = (e) => (s, t, r, n, o, i, a, l, c, E, f, u, $) => {
        if (h(r)) {
          t = ''
        } else if (h(n)) {
          t = `>=${r}.0.0${e ? '-0' : ''}`
        } else if (h(o)) {
          t = `>=${r}.${n}.0${e ? '-0' : ''}`
        } else if (i) {
          t = `>=${t}`
        } else {
          t = `>=${t}${e ? '-0' : ''}`
        }
        if (h(c)) {
          l = ''
        } else if (h(E)) {
          l = `<${+c + 1}.0.0-0`
        } else if (h(f)) {
          l = `<${c}.${+E + 1}.0-0`
        } else if (u) {
          l = `<=${c}.${E}.${f}-${u}`
        } else if (e) {
          l = `<${c}.${E}.${+f + 1}-0`
        } else {
          l = `<=${l}`
        }
        return `${t} ${l}`.trim()
      }
      const S = (e, s, t) => {
        for (let t = 0; t < e.length; t++) {
          if (!e[t].test(s)) {
            return false
          }
        }
        if (s.prerelease.length && !t.includePrerelease) {
          for (let t = 0; t < e.length; t++) {
            n(e[t].semver)
            if (e[t].semver === r.ANY) {
              continue
            }
            if (e[t].semver.prerelease.length > 0) {
              const r = e[t].semver
              if (
                r.major === s.major &&
                r.minor === s.minor &&
                r.patch === s.patch
              ) {
                return true
              }
            }
          }
          return false
        }
        return true
      }
    },
    88: (e, s, t) => {
      const r = t(427)
      const { MAX_LENGTH: n, MAX_SAFE_INTEGER: o } = t(293)
      const { re: i, t: a } = t(523)
      const { compareIdentifiers: l } = t(463)
      class SemVer {
        constructor(e, s) {
          if (!s || typeof s !== 'object') {
            s = { loose: !!s, includePrerelease: false }
          }
          if (e instanceof SemVer) {
            if (
              e.loose === !!s.loose &&
              e.includePrerelease === !!s.includePrerelease
            ) {
              return e
            } else {
              e = e.version
            }
          } else if (typeof e !== 'string') {
            throw new TypeError(`Invalid Version: ${e}`)
          }
          if (e.length > n) {
            throw new TypeError(`version is longer than ${n} characters`)
          }
          r('SemVer', e, s)
          this.options = s
          this.loose = !!s.loose
          this.includePrerelease = !!s.includePrerelease
          const t = e.trim().match(s.loose ? i[a.LOOSE] : i[a.FULL])
          if (!t) {
            throw new TypeError(`Invalid Version: ${e}`)
          }
          this.raw = e
          this.major = +t[1]
          this.minor = +t[2]
          this.patch = +t[3]
          if (this.major > o || this.major < 0) {
            throw new TypeError('Invalid major version')
          }
          if (this.minor > o || this.minor < 0) {
            throw new TypeError('Invalid minor version')
          }
          if (this.patch > o || this.patch < 0) {
            throw new TypeError('Invalid patch version')
          }
          if (!t[4]) {
            this.prerelease = []
          } else {
            this.prerelease = t[4].split('.').map((e) => {
              if (/^[0-9]+$/.test(e)) {
                const s = +e
                if (s >= 0 && s < o) {
                  return s
                }
              }
              return e
            })
          }
          this.build = t[5] ? t[5].split('.') : []
          this.format()
        }
        format() {
          this.version = `${this.major}.${this.minor}.${this.patch}`
          if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`
          }
          return this.version
        }
        toString() {
          return this.version
        }
        compare(e) {
          r('SemVer.compare', this.version, this.options, e)
          if (!(e instanceof SemVer)) {
            if (typeof e === 'string' && e === this.version) {
              return 0
            }
            e = new SemVer(e, this.options)
          }
          if (e.version === this.version) {
            return 0
          }
          return this.compareMain(e) || this.comparePre(e)
        }
        compareMain(e) {
          if (!(e instanceof SemVer)) {
            e = new SemVer(e, this.options)
          }
          return (
            l(this.major, e.major) ||
            l(this.minor, e.minor) ||
            l(this.patch, e.patch)
          )
        }
        comparePre(e) {
          if (!(e instanceof SemVer)) {
            e = new SemVer(e, this.options)
          }
          if (this.prerelease.length && !e.prerelease.length) {
            return -1
          } else if (!this.prerelease.length && e.prerelease.length) {
            return 1
          } else if (!this.prerelease.length && !e.prerelease.length) {
            return 0
          }
          let s = 0
          do {
            const t = this.prerelease[s]
            const n = e.prerelease[s]
            r('prerelease compare', s, t, n)
            if (t === undefined && n === undefined) {
              return 0
            } else if (n === undefined) {
              return 1
            } else if (t === undefined) {
              return -1
            } else if (t === n) {
              continue
            } else {
              return l(t, n)
            }
          } while (++s)
        }
        compareBuild(e) {
          if (!(e instanceof SemVer)) {
            e = new SemVer(e, this.options)
          }
          let s = 0
          do {
            const t = this.build[s]
            const n = e.build[s]
            r('prerelease compare', s, t, n)
            if (t === undefined && n === undefined) {
              return 0
            } else if (n === undefined) {
              return 1
            } else if (t === undefined) {
              return -1
            } else if (t === n) {
              continue
            } else {
              return l(t, n)
            }
          } while (++s)
        }
        inc(e, s) {
          switch (e) {
            case 'premajor':
              this.prerelease.length = 0
              this.patch = 0
              this.minor = 0
              this.major++
              this.inc('pre', s)
              break
            case 'preminor':
              this.prerelease.length = 0
              this.patch = 0
              this.minor++
              this.inc('pre', s)
              break
            case 'prepatch':
              this.prerelease.length = 0
              this.inc('patch', s)
              this.inc('pre', s)
              break
            case 'prerelease':
              if (this.prerelease.length === 0) {
                this.inc('patch', s)
              }
              this.inc('pre', s)
              break
            case 'major':
              if (
                this.minor !== 0 ||
                this.patch !== 0 ||
                this.prerelease.length === 0
              ) {
                this.major++
              }
              this.minor = 0
              this.patch = 0
              this.prerelease = []
              break
            case 'minor':
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++
              }
              this.patch = 0
              this.prerelease = []
              break
            case 'patch':
              if (this.prerelease.length === 0) {
                this.patch++
              }
              this.prerelease = []
              break
            case 'pre':
              if (this.prerelease.length === 0) {
                this.prerelease = [0]
              } else {
                let e = this.prerelease.length
                while (--e >= 0) {
                  if (typeof this.prerelease[e] === 'number') {
                    this.prerelease[e]++
                    e = -2
                  }
                }
                if (e === -1) {
                  this.prerelease.push(0)
                }
              }
              if (s) {
                if (this.prerelease[0] === s) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = [s, 0]
                  }
                } else {
                  this.prerelease = [s, 0]
                }
              }
              break
            default:
              throw new Error(`invalid increment argument: ${e}`)
          }
          this.format()
          this.raw = this.version
          return this
        }
      }
      e.exports = SemVer
    },
    848: (e, s, t) => {
      const r = t(925)
      const n = (e, s) => {
        const t = r(e.trim().replace(/^[=v]+/, ''), s)
        return t ? t.version : null
      }
      e.exports = n
    },
    98: (e, s, t) => {
      const r = t(898)
      const n = t(17)
      const o = t(123)
      const i = t(522)
      const a = t(194)
      const l = t(520)
      const c = (e, s, t, c) => {
        switch (s) {
          case '===':
            if (typeof e === 'object') e = e.version
            if (typeof t === 'object') t = t.version
            return e === t
          case '!==':
            if (typeof e === 'object') e = e.version
            if (typeof t === 'object') t = t.version
            return e !== t
          case '':
          case '=':
          case '==':
            return r(e, t, c)
          case '!=':
            return n(e, t, c)
          case '>':
            return o(e, t, c)
          case '>=':
            return i(e, t, c)
          case '<':
            return a(e, t, c)
          case '<=':
            return l(e, t, c)
          default:
            throw new TypeError(`Invalid operator: ${s}`)
        }
      }
      e.exports = c
    },
    466: (e, s, t) => {
      const r = t(88)
      const n = t(925)
      const { re: o, t: i } = t(523)
      const a = (e, s) => {
        if (e instanceof r) {
          return e
        }
        if (typeof e === 'number') {
          e = String(e)
        }
        if (typeof e !== 'string') {
          return null
        }
        s = s || {}
        let t = null
        if (!s.rtl) {
          t = e.match(o[i.COERCE])
        } else {
          let s
          while (
            (s = o[i.COERCERTL].exec(e)) &&
            (!t || t.index + t[0].length !== e.length)
          ) {
            if (!t || s.index + s[0].length !== t.index + t[0].length) {
              t = s
            }
            o[i.COERCERTL].lastIndex = s.index + s[1].length + s[2].length
          }
          o[i.COERCERTL].lastIndex = -1
        }
        if (t === null) return null
        return n(`${t[2]}.${t[3] || '0'}.${t[4] || '0'}`, s)
      }
      e.exports = a
    },
    156: (e, s, t) => {
      const r = t(88)
      const n = (e, s, t) => {
        const n = new r(e, t)
        const o = new r(s, t)
        return n.compare(o) || n.compareBuild(o)
      }
      e.exports = n
    },
    804: (e, s, t) => {
      const r = t(309)
      const n = (e, s) => r(e, s, true)
      e.exports = n
    },
    309: (e, s, t) => {
      const r = t(88)
      const n = (e, s, t) => new r(e, t).compare(new r(s, t))
      e.exports = n
    },
    297: (e, s, t) => {
      const r = t(925)
      const n = t(898)
      const o = (e, s) => {
        if (n(e, s)) {
          return null
        } else {
          const t = r(e)
          const n = r(s)
          const o = t.prerelease.length || n.prerelease.length
          const i = o ? 'pre' : ''
          const a = o ? 'prerelease' : ''
          for (const e in t) {
            if (e === 'major' || e === 'minor' || e === 'patch') {
              if (t[e] !== n[e]) {
                return i + e
              }
            }
          }
          return a
        }
      }
      e.exports = o
    },
    898: (e, s, t) => {
      const r = t(309)
      const n = (e, s, t) => r(e, s, t) === 0
      e.exports = n
    },
    123: (e, s, t) => {
      const r = t(309)
      const n = (e, s, t) => r(e, s, t) > 0
      e.exports = n
    },
    522: (e, s, t) => {
      const r = t(309)
      const n = (e, s, t) => r(e, s, t) >= 0
      e.exports = n
    },
    900: (e, s, t) => {
      const r = t(88)
      const n = (e, s, t, n) => {
        if (typeof t === 'string') {
          n = t
          t = undefined
        }
        try {
          return new r(e, t).inc(s, n).version
        } catch (e) {
          return null
        }
      }
      e.exports = n
    },
    194: (e, s, t) => {
      const r = t(309)
      const n = (e, s, t) => r(e, s, t) < 0
      e.exports = n
    },
    520: (e, s, t) => {
      const r = t(309)
      const n = (e, s, t) => r(e, s, t) <= 0
      e.exports = n
    },
    688: (e, s, t) => {
      const r = t(88)
      const n = (e, s) => new r(e, s).major
      e.exports = n
    },
    447: (e, s, t) => {
      const r = t(88)
      const n = (e, s) => new r(e, s).minor
      e.exports = n
    },
    17: (e, s, t) => {
      const r = t(309)
      const n = (e, s, t) => r(e, s, t) !== 0
      e.exports = n
    },
    925: (e, s, t) => {
      const { MAX_LENGTH: r } = t(293)
      const { re: n, t: o } = t(523)
      const i = t(88)
      const a = (e, s) => {
        if (!s || typeof s !== 'object') {
          s = { loose: !!s, includePrerelease: false }
        }
        if (e instanceof i) {
          return e
        }
        if (typeof e !== 'string') {
          return null
        }
        if (e.length > r) {
          return null
        }
        const t = s.loose ? n[o.LOOSE] : n[o.FULL]
        if (!t.test(e)) {
          return null
        }
        try {
          return new i(e, s)
        } catch (e) {
          return null
        }
      }
      e.exports = a
    },
    866: (e, s, t) => {
      const r = t(88)
      const n = (e, s) => new r(e, s).patch
      e.exports = n
    },
    16: (e, s, t) => {
      const r = t(925)
      const n = (e, s) => {
        const t = r(e, s)
        return t && t.prerelease.length ? t.prerelease : null
      }
      e.exports = n
    },
    417: (e, s, t) => {
      const r = t(309)
      const n = (e, s, t) => r(s, e, t)
      e.exports = n
    },
    701: (e, s, t) => {
      const r = t(156)
      const n = (e, s) => e.sort((e, t) => r(t, e, s))
      e.exports = n
    },
    55: (e, s, t) => {
      const r = t(828)
      const n = (e, s, t) => {
        try {
          s = new r(s, t)
        } catch (e) {
          return false
        }
        return s.test(e)
      }
      e.exports = n
    },
    426: (e, s, t) => {
      const r = t(156)
      const n = (e, s) => e.sort((e, t) => r(e, t, s))
      e.exports = n
    },
    601: (e, s, t) => {
      const r = t(925)
      const n = (e, s) => {
        const t = r(e, s)
        return t ? t.version : null
      }
      e.exports = n
    },
    383: (e, s, t) => {
      const r = t(523)
      e.exports = {
        re: r.re,
        src: r.src,
        tokens: r.t,
        SEMVER_SPEC_VERSION: t(293).SEMVER_SPEC_VERSION,
        SemVer: t(88),
        compareIdentifiers: t(463).compareIdentifiers,
        rcompareIdentifiers: t(463).rcompareIdentifiers,
        parse: t(925),
        valid: t(601),
        clean: t(848),
        inc: t(900),
        diff: t(297),
        major: t(688),
        minor: t(447),
        patch: t(866),
        prerelease: t(16),
        compare: t(309),
        rcompare: t(417),
        compareLoose: t(804),
        compareBuild: t(156),
        sort: t(426),
        rsort: t(701),
        gt: t(123),
        lt: t(194),
        eq: t(898),
        neq: t(17),
        gte: t(522),
        lte: t(520),
        cmp: t(98),
        coerce: t(466),
        Comparator: t(532),
        Range: t(828),
        satisfies: t(55),
        toComparators: t(706),
        maxSatisfying: t(579),
        minSatisfying: t(832),
        minVersion: t(179),
        validRange: t(741),
        outside: t(420),
        gtr: t(380),
        ltr: t(323),
        intersects: t(8),
        simplifyRange: t(561),
        subset: t(863),
      }
    },
    293: (e) => {
      const s = '2.0.0'
      const t = 256
      const r = Number.MAX_SAFE_INTEGER || 9007199254740991
      const n = 16
      e.exports = {
        SEMVER_SPEC_VERSION: s,
        MAX_LENGTH: t,
        MAX_SAFE_INTEGER: r,
        MAX_SAFE_COMPONENT_LENGTH: n,
      }
    },
    427: (e) => {
      const s =
        typeof process === 'object' &&
        process.env &&
        process.env.NODE_DEBUG &&
        /\bsemver\b/i.test(process.env.NODE_DEBUG)
          ? (...e) => console.error('SEMVER', ...e)
          : () => {}
      e.exports = s
    },
    463: (e) => {
      const s = /^[0-9]+$/
      const t = (e, t) => {
        const r = s.test(e)
        const n = s.test(t)
        if (r && n) {
          e = +e
          t = +t
        }
        return e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
      }
      const r = (e, s) => t(s, e)
      e.exports = { compareIdentifiers: t, rcompareIdentifiers: r }
    },
    523: (e, s, t) => {
      const { MAX_SAFE_COMPONENT_LENGTH: r } = t(293)
      const n = t(427)
      s = e.exports = {}
      const o = (s.re = [])
      const i = (s.src = [])
      const a = (s.t = {})
      let l = 0
      const c = (e, s, t) => {
        const r = l++
        n(r, s)
        a[e] = r
        i[r] = s
        o[r] = new RegExp(s, t ? 'g' : undefined)
      }
      c('NUMERICIDENTIFIER', '0|[1-9]\\d*')
      c('NUMERICIDENTIFIERLOOSE', '[0-9]+')
      c('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')
      c(
        'MAINVERSION',
        `(${i[a.NUMERICIDENTIFIER]})\\.` +
          `(${i[a.NUMERICIDENTIFIER]})\\.` +
          `(${i[a.NUMERICIDENTIFIER]})`
      )
      c(
        'MAINVERSIONLOOSE',
        `(${i[a.NUMERICIDENTIFIERLOOSE]})\\.` +
          `(${i[a.NUMERICIDENTIFIERLOOSE]})\\.` +
          `(${i[a.NUMERICIDENTIFIERLOOSE]})`
      )
      c(
        'PRERELEASEIDENTIFIER',
        `(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`
      )
      c(
        'PRERELEASEIDENTIFIERLOOSE',
        `(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`
      )
      c(
        'PRERELEASE',
        `(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${
          i[a.PRERELEASEIDENTIFIER]
        })*))`
      )
      c(
        'PRERELEASELOOSE',
        `(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
          i[a.PRERELEASEIDENTIFIERLOOSE]
        })*))`
      )
      c('BUILDIDENTIFIER', '[0-9A-Za-z-]+')
      c(
        'BUILD',
        `(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`
      )
      c('FULLPLAIN', `v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`)
      c('FULL', `^${i[a.FULLPLAIN]}$`)
      c(
        'LOOSEPLAIN',
        `[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`
      )
      c('LOOSE', `^${i[a.LOOSEPLAIN]}$`)
      c('GTLT', '((?:<|>)?=?)')
      c('XRANGEIDENTIFIERLOOSE', `${i[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
      c('XRANGEIDENTIFIER', `${i[a.NUMERICIDENTIFIER]}|x|X|\\*`)
      c(
        'XRANGEPLAIN',
        `[v=\\s]*(${i[a.XRANGEIDENTIFIER]})` +
          `(?:\\.(${i[a.XRANGEIDENTIFIER]})` +
          `(?:\\.(${i[a.XRANGEIDENTIFIER]})` +
          `(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?` +
          `)?)?`
      )
      c(
        'XRANGEPLAINLOOSE',
        `[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})` +
          `(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})` +
          `(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})` +
          `(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?` +
          `)?)?`
      )
      c('XRANGE', `^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`)
      c('XRANGELOOSE', `^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`)
      c(
        'COERCE',
        `${'(^|[^\\d])' + '(\\d{1,'}${r}})` +
          `(?:\\.(\\d{1,${r}}))?` +
          `(?:\\.(\\d{1,${r}}))?` +
          `(?:$|[^\\d])`
      )
      c('COERCERTL', i[a.COERCE], true)
      c('LONETILDE', '(?:~>?)')
      c('TILDETRIM', `(\\s*)${i[a.LONETILDE]}\\s+`, true)
      s.tildeTrimReplace = '$1~'
      c('TILDE', `^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`)
      c('TILDELOOSE', `^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`)
      c('LONECARET', '(?:\\^)')
      c('CARETTRIM', `(\\s*)${i[a.LONECARET]}\\s+`, true)
      s.caretTrimReplace = '$1^'
      c('CARET', `^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`)
      c('CARETLOOSE', `^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`)
      c('COMPARATORLOOSE', `^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`)
      c('COMPARATOR', `^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`)
      c(
        'COMPARATORTRIM',
        `(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,
        true
      )
      s.comparatorTrimReplace = '$1$2$3'
      c(
        'HYPHENRANGE',
        `^\\s*(${i[a.XRANGEPLAIN]})` +
          `\\s+-\\s+` +
          `(${i[a.XRANGEPLAIN]})` +
          `\\s*$`
      )
      c(
        'HYPHENRANGELOOSE',
        `^\\s*(${i[a.XRANGEPLAINLOOSE]})` +
          `\\s+-\\s+` +
          `(${i[a.XRANGEPLAINLOOSE]})` +
          `\\s*$`
      )
      c('STAR', '(<|>)?=?\\s*\\*')
      c('GTE0', '^\\s*>=\\s*0.0.0\\s*$')
      c('GTE0PRE', '^\\s*>=\\s*0.0.0-0\\s*$')
    },
    380: (e, s, t) => {
      const r = t(420)
      const n = (e, s, t) => r(e, s, '>', t)
      e.exports = n
    },
    8: (e, s, t) => {
      const r = t(828)
      const n = (e, s, t) => {
        e = new r(e, t)
        s = new r(s, t)
        return e.intersects(s)
      }
      e.exports = n
    },
    323: (e, s, t) => {
      const r = t(420)
      const n = (e, s, t) => r(e, s, '<', t)
      e.exports = n
    },
    579: (e, s, t) => {
      const r = t(88)
      const n = t(828)
      const o = (e, s, t) => {
        let o = null
        let i = null
        let a = null
        try {
          a = new n(s, t)
        } catch (e) {
          return null
        }
        e.forEach((e) => {
          if (a.test(e)) {
            if (!o || i.compare(e) === -1) {
              o = e
              i = new r(o, t)
            }
          }
        })
        return o
      }
      e.exports = o
    },
    832: (e, s, t) => {
      const r = t(88)
      const n = t(828)
      const o = (e, s, t) => {
        let o = null
        let i = null
        let a = null
        try {
          a = new n(s, t)
        } catch (e) {
          return null
        }
        e.forEach((e) => {
          if (a.test(e)) {
            if (!o || i.compare(e) === 1) {
              o = e
              i = new r(o, t)
            }
          }
        })
        return o
      }
      e.exports = o
    },
    179: (e, s, t) => {
      const r = t(88)
      const n = t(828)
      const o = t(123)
      const i = (e, s) => {
        e = new n(e, s)
        let t = new r('0.0.0')
        if (e.test(t)) {
          return t
        }
        t = new r('0.0.0-0')
        if (e.test(t)) {
          return t
        }
        t = null
        for (let s = 0; s < e.set.length; ++s) {
          const n = e.set[s]
          n.forEach((e) => {
            const s = new r(e.semver.version)
            switch (e.operator) {
              case '>':
                if (s.prerelease.length === 0) {
                  s.patch++
                } else {
                  s.prerelease.push(0)
                }
                s.raw = s.format()
              case '':
              case '>=':
                if (!t || o(t, s)) {
                  t = s
                }
                break
              case '<':
              case '<=':
                break
              default:
                throw new Error(`Unexpected operation: ${e.operator}`)
            }
          })
        }
        if (t && e.test(t)) {
          return t
        }
        return null
      }
      e.exports = i
    },
    420: (e, s, t) => {
      const r = t(88)
      const n = t(532)
      const { ANY: o } = n
      const i = t(828)
      const a = t(55)
      const l = t(123)
      const c = t(194)
      const E = t(520)
      const f = t(522)
      const u = (e, s, t, u) => {
        e = new r(e, u)
        s = new i(s, u)
        let h, $, I, R, p
        switch (t) {
          case '>':
            h = l
            $ = E
            I = c
            R = '>'
            p = '>='
            break
          case '<':
            h = c
            $ = f
            I = l
            R = '<'
            p = '<='
            break
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (a(e, s, u)) {
          return false
        }
        for (let t = 0; t < s.set.length; ++t) {
          const r = s.set[t]
          let i = null
          let a = null
          r.forEach((e) => {
            if (e.semver === o) {
              e = new n('>=0.0.0')
            }
            i = i || e
            a = a || e
            if (h(e.semver, i.semver, u)) {
              i = e
            } else if (I(e.semver, a.semver, u)) {
              a = e
            }
          })
          if (i.operator === R || i.operator === p) {
            return false
          }
          if ((!a.operator || a.operator === R) && $(e, a.semver)) {
            return false
          } else if (a.operator === p && I(e, a.semver)) {
            return false
          }
        }
        return true
      }
      e.exports = u
    },
    561: (e, s, t) => {
      const r = t(55)
      const n = t(309)
      e.exports = (e, s, t) => {
        const o = []
        let i = null
        let a = null
        const l = e.sort((e, s) => n(e, s, t))
        for (const e of l) {
          const n = r(e, s, t)
          if (n) {
            a = e
            if (!i) i = e
          } else {
            if (a) {
              o.push([i, a])
            }
            a = null
            i = null
          }
        }
        if (i) o.push([i, null])
        const c = []
        for (const [e, s] of o) {
          if (e === s) c.push(e)
          else if (!s && e === l[0]) c.push('*')
          else if (!s) c.push(`>=${e}`)
          else if (e === l[0]) c.push(`<=${s}`)
          else c.push(`${e} - ${s}`)
        }
        const E = c.join(' || ')
        const f = typeof s.raw === 'string' ? s.raw : String(s)
        return E.length < f.length ? E : s
      }
    },
    863: (e, s, t) => {
      const r = t(828)
      const { ANY: n } = t(532)
      const o = t(55)
      const i = t(309)
      const a = (e, s, t) => {
        e = new r(e, t)
        s = new r(s, t)
        let n = false
        e: for (const r of e.set) {
          for (const e of s.set) {
            const s = l(r, e, t)
            n = n || s !== null
            if (s) continue e
          }
          if (n) return false
        }
        return true
      }
      const l = (e, s, t) => {
        if (e.length === 1 && e[0].semver === n)
          return s.length === 1 && s[0].semver === n
        const r = new Set()
        let a, l
        for (const s of e) {
          if (s.operator === '>' || s.operator === '>=') a = c(a, s, t)
          else if (s.operator === '<' || s.operator === '<=') l = E(l, s, t)
          else r.add(s.semver)
        }
        if (r.size > 1) return null
        let f
        if (a && l) {
          f = i(a.semver, l.semver, t)
          if (f > 0) return null
          else if (f === 0 && (a.operator !== '>=' || l.operator !== '<='))
            return null
        }
        for (const e of r) {
          if (a && !o(e, String(a), t)) return null
          if (l && !o(e, String(l), t)) return null
          for (const r of s) {
            if (!o(e, String(r), t)) return false
          }
          return true
        }
        let u, h
        let $, I
        for (const e of s) {
          I = I || e.operator === '>' || e.operator === '>='
          $ = $ || e.operator === '<' || e.operator === '<='
          if (a) {
            if (e.operator === '>' || e.operator === '>=') {
              u = c(a, e, t)
              if (u === e) return false
            } else if (a.operator === '>=' && !o(a.semver, String(e), t))
              return false
          }
          if (l) {
            if (e.operator === '<' || e.operator === '<=') {
              h = E(l, e, t)
              if (h === e) return false
            } else if (l.operator === '<=' && !o(l.semver, String(e), t))
              return false
          }
          if (!e.operator && (l || a) && f !== 0) return false
        }
        if (a && $ && !l && f !== 0) return false
        if (l && I && !a && f !== 0) return false
        return true
      }
      const c = (e, s, t) => {
        if (!e) return s
        const r = i(e.semver, s.semver, t)
        return r > 0
          ? e
          : r < 0
          ? s
          : s.operator === '>' && e.operator === '>='
          ? s
          : e
      }
      const E = (e, s, t) => {
        if (!e) return s
        const r = i(e.semver, s.semver, t)
        return r < 0
          ? e
          : r > 0
          ? s
          : s.operator === '<' && e.operator === '<='
          ? s
          : e
      }
      e.exports = a
    },
    706: (e, s, t) => {
      const r = t(828)
      const n = (e, s) =>
        new r(e, s).set.map((e) =>
          e
            .map((e) => e.value)
            .join(' ')
            .trim()
            .split(' ')
        )
      e.exports = n
    },
    741: (e, s, t) => {
      const r = t(828)
      const n = (e, s) => {
        try {
          return new r(e, s).range || '*'
        } catch (e) {
          return null
        }
      }
      e.exports = n
    },
  }
  var s = {}
  function __nccwpck_require__(t) {
    if (s[t]) {
      return s[t].exports
    }
    var r = (s[t] = { exports: {} })
    var n = true
    try {
      e[t](r, r.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete s[t]
    }
    return r.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(383)
})()
