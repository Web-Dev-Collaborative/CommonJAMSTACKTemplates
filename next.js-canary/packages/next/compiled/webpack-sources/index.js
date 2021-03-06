module.exports = (function () {
  var e = {
    667: function (e, t, n) {
      'use strict'
      const r = n(495).y
      const i = n(495).P
      class CodeNode {
        constructor(e) {
          this.generatedCode = e
        }
        clone() {
          return new CodeNode(this.generatedCode)
        }
        getGeneratedCode() {
          return this.generatedCode
        }
        getMappings(e) {
          const t = r(this.generatedCode)
          const n = Array(t + 1).join(';')
          if (t > 0) {
            e.unfinishedGeneratedLine = i(this.generatedCode)
            if (e.unfinishedGeneratedLine > 0) {
              return n + 'A'
            } else {
              return n
            }
          } else {
            const t = e.unfinishedGeneratedLine
            e.unfinishedGeneratedLine += i(this.generatedCode)
            if (t === 0 && e.unfinishedGeneratedLine > 0) {
              return 'A'
            } else {
              return ''
            }
          }
        }
        addGeneratedCode(e) {
          this.generatedCode += e
        }
        mapGeneratedCode(e) {
          const t = e(this.generatedCode)
          return new CodeNode(t)
        }
        getNormalizedNodes() {
          return [this]
        }
        merge(e) {
          if (e instanceof CodeNode) {
            this.generatedCode += e.generatedCode
            return this
          }
          return false
        }
      }
      e.exports = CodeNode
    },
    432: function (e) {
      'use strict'
      class MappingsContext {
        constructor() {
          this.sourcesIndices = new Map()
          this.sourcesContent = new Map()
          this.hasSourceContent = false
          this.currentOriginalLine = 1
          this.currentSource = 0
          this.unfinishedGeneratedLine = false
        }
        ensureSource(e, t) {
          let n = this.sourcesIndices.get(e)
          if (typeof n === 'number') {
            return n
          }
          n = this.sourcesIndices.size
          this.sourcesIndices.set(e, n)
          this.sourcesContent.set(e, t)
          if (typeof t === 'string') this.hasSourceContent = true
          return n
        }
        getArrays() {
          const e = []
          const t = []
          for (const n of this.sourcesContent) {
            e.push(n[0])
            t.push(n[1])
          }
          return { sources: e, sourcesContent: t }
        }
      }
      e.exports = MappingsContext
    },
    664: function (e, t, n) {
      'use strict'
      const r = n(430)
      const i = n(495).y
      const s = n(495).P
      const o = ';AAAA'
      class SingleLineNode {
        constructor(e, t, n, r) {
          this.generatedCode = e
          this.originalSource = n
          this.source = t
          this.line = r || 1
          this._numberOfLines = i(this.generatedCode)
          this._endsWithNewLine = e[e.length - 1] === '\n'
        }
        clone() {
          return new SingleLineNode(
            this.generatedCode,
            this.source,
            this.originalSource,
            this.line
          )
        }
        getGeneratedCode() {
          return this.generatedCode
        }
        getMappings(e) {
          if (!this.generatedCode) return ''
          const t = this._numberOfLines
          const n = e.ensureSource(this.source, this.originalSource)
          let i = 'A'
          if (e.unfinishedGeneratedLine)
            i = ',' + r.encode(e.unfinishedGeneratedLine)
          i += r.encode(n - e.currentSource)
          i += r.encode(this.line - e.currentOriginalLine)
          i += 'A'
          e.currentSource = n
          e.currentOriginalLine = this.line
          const u = (e.unfinishedGeneratedLine = s(this.generatedCode))
          i += Array(t).join(o)
          if (u === 0) {
            i += ';'
          } else {
            if (t !== 0) i += o
          }
          return i
        }
        getNormalizedNodes() {
          return [this]
        }
        mapGeneratedCode(e) {
          const t = e(this.generatedCode)
          return new SingleLineNode(
            t,
            this.source,
            this.originalSource,
            this.line
          )
        }
        merge(e) {
          if (e instanceof SingleLineNode) {
            return this.mergeSingleLineNode(e)
          }
          return false
        }
        mergeSingleLineNode(e) {
          if (
            this.source === e.source &&
            this.originalSource === e.originalSource
          ) {
            if (this.line === e.line) {
              this.generatedCode += e.generatedCode
              this._numberOfLines += e._numberOfLines
              this._endsWithNewLine = e._endsWithNewLine
              return this
            } else if (
              this.line + 1 === e.line &&
              this._endsWithNewLine &&
              this._numberOfLines === 1 &&
              e._numberOfLines <= 1
            ) {
              return new u(
                this.generatedCode + e.generatedCode,
                this.source,
                this.originalSource,
                this.line
              )
            }
          }
          return false
        }
      }
      e.exports = SingleLineNode
      const u = n(176)
    },
    361: function (e, t, n) {
      'use strict'
      const r = n(667)
      const i = n(176)
      const s = n(432)
      const o = n(495).y
      class SourceListMap {
        constructor(e, t, n) {
          if (Array.isArray(e)) {
            this.children = e
          } else {
            this.children = []
            if (e || t) this.add(e, t, n)
          }
        }
        add(e, t, n) {
          if (typeof e === 'string') {
            if (t) {
              this.children.push(new i(e, t, n))
            } else if (
              this.children.length > 0 &&
              this.children[this.children.length - 1] instanceof r
            ) {
              this.children[this.children.length - 1].addGeneratedCode(e)
            } else {
              this.children.push(new r(e))
            }
          } else if (e.getMappings && e.getGeneratedCode) {
            this.children.push(e)
          } else if (e.children) {
            e.children.forEach(function (e) {
              this.children.push(e)
            }, this)
          } else {
            throw new Error(
              'Invalid arguments to SourceListMap.protfotype.add: Expected string, Node or SourceListMap'
            )
          }
        }
        preprend(e, t, n) {
          if (typeof e === 'string') {
            if (t) {
              this.children.unshift(new i(e, t, n))
            } else if (
              this.children.length > 0 &&
              this.children[this.children.length - 1].preprendGeneratedCode
            ) {
              this.children[this.children.length - 1].preprendGeneratedCode(e)
            } else {
              this.children.unshift(new r(e))
            }
          } else if (e.getMappings && e.getGeneratedCode) {
            this.children.unshift(e)
          } else if (e.children) {
            e.children
              .slice()
              .reverse()
              .forEach(function (e) {
                this.children.unshift(e)
              }, this)
          } else {
            throw new Error(
              'Invalid arguments to SourceListMap.protfotype.prerend: Expected string, Node or SourceListMap'
            )
          }
        }
        mapGeneratedCode(e) {
          const t = []
          this.children.forEach(function (e) {
            e.getNormalizedNodes().forEach(function (e) {
              t.push(e)
            })
          })
          const n = []
          t.forEach(function (t) {
            t = t.mapGeneratedCode(e)
            if (n.length === 0) {
              n.push(t)
            } else {
              const e = n[n.length - 1]
              const r = e.merge(t)
              if (r) {
                n[n.length - 1] = r
              } else {
                n.push(t)
              }
            }
          })
          return new SourceListMap(n)
        }
        toString() {
          return this.children
            .map(function (e) {
              return e.getGeneratedCode()
            })
            .join('')
        }
        toStringWithSourceMap(e) {
          const t = new s()
          const n = this.children
            .map(function (e) {
              return e.getGeneratedCode()
            })
            .join('')
          const r = this.children
            .map(function (e) {
              return e.getMappings(t)
            })
            .join('')
          const i = t.getArrays()
          return {
            source: n,
            map: {
              version: 3,
              file: e && e.file,
              sources: i.sources,
              sourcesContent: t.hasSourceContent ? i.sourcesContent : undefined,
              mappings: r,
            },
          }
        }
      }
      e.exports = SourceListMap
    },
    176: function (e, t, n) {
      'use strict'
      const r = n(430)
      const i = n(495).y
      const s = n(495).P
      const o = ';AACA'
      class SourceNode {
        constructor(e, t, n, r) {
          this.generatedCode = e
          this.originalSource = n
          this.source = t
          this.startingLine = r || 1
          this._numberOfLines = i(this.generatedCode)
          this._endsWithNewLine = e[e.length - 1] === '\n'
        }
        clone() {
          return new SourceNode(
            this.generatedCode,
            this.source,
            this.originalSource,
            this.startingLine
          )
        }
        getGeneratedCode() {
          return this.generatedCode
        }
        addGeneratedCode(e) {
          this.generatedCode += e
          this._numberOfLines += i(e)
          this._endsWithNewLine = e[e.length - 1] === '\n'
        }
        getMappings(e) {
          if (!this.generatedCode) return ''
          const t = this._numberOfLines
          const n = e.ensureSource(this.source, this.originalSource)
          let i = 'A'
          if (e.unfinishedGeneratedLine)
            i = ',' + r.encode(e.unfinishedGeneratedLine)
          i += r.encode(n - e.currentSource)
          i += r.encode(this.startingLine - e.currentOriginalLine)
          i += 'A'
          e.currentSource = n
          e.currentOriginalLine = this.startingLine + t - 1
          const u = (e.unfinishedGeneratedLine = s(this.generatedCode))
          i += Array(t).join(o)
          if (u === 0) {
            i += ';'
          } else {
            if (t !== 0) {
              i += o
            }
            e.currentOriginalLine++
          }
          return i
        }
        mapGeneratedCode(e) {
          throw new Error(
            'Cannot map generated code on a SourceMap. Normalize to SingleLineNode first.'
          )
        }
        getNormalizedNodes() {
          var e = []
          var t = this.startingLine
          var n = this.generatedCode
          var r = 0
          var i = n.length
          while (r < i) {
            var s = n.indexOf('\n', r) + 1
            if (s === 0) s = i
            var o = n.substr(r, s - r)
            e.push(new u(o, this.source, this.originalSource, t))
            r = s
            t++
          }
          return e
        }
        merge(e) {
          if (e instanceof SourceNode) {
            return this.mergeSourceNode(e)
          } else if (e instanceof u) {
            return this.mergeSingleLineNode(e)
          }
          return false
        }
        mergeSourceNode(e) {
          if (
            this.source === e.source &&
            this._endsWithNewLine &&
            this.startingLine + this._numberOfLines === e.startingLine
          ) {
            this.generatedCode += e.generatedCode
            this._numberOfLines += e._numberOfLines
            this._endsWithNewLine = e._endsWithNewLine
            return this
          }
          return false
        }
        mergeSingleLineNode(e) {
          if (
            this.source === e.source &&
            this._endsWithNewLine &&
            this.startingLine + this._numberOfLines === e.line &&
            e._numberOfLines <= 1
          ) {
            this.addSingleLineNode(e)
            return this
          }
          return false
        }
        addSingleLineNode(e) {
          this.generatedCode += e.generatedCode
          this._numberOfLines += e._numberOfLines
          this._endsWithNewLine = e._endsWithNewLine
        }
      }
      e.exports = SourceNode
      const u = n(664)
    },
    430: function (e, t) {
      var n = {}
      var r = {}
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
        .split('')
        .forEach(function (e, t) {
          n[e] = t
          r[t] = e
        })
      var i = {}
      i.encode = function base64_encode(e) {
        if (e in r) {
          return r[e]
        }
        throw new TypeError('Must be between 0 and 63: ' + e)
      }
      i.decode = function base64_decode(e) {
        if (e in n) {
          return n[e]
        }
        throw new TypeError('Not a valid base 64 digit: ' + e)
      }
      var s = 5
      var o = 1 << s
      var u = o - 1
      var a = o
      function toVLQSigned(e) {
        return e < 0 ? (-e << 1) + 1 : (e << 1) + 0
      }
      function fromVLQSigned(e) {
        var t = (e & 1) === 1
        var n = e >> 1
        return t ? -n : n
      }
      t.encode = function base64VLQ_encode(e) {
        var t = ''
        var n
        var r = toVLQSigned(e)
        do {
          n = r & u
          r >>>= s
          if (r > 0) {
            n |= a
          }
          t += i.encode(n)
        } while (r > 0)
        return t
      }
      t.decode = function base64VLQ_decode(e, t) {
        var n = 0
        var r = e.length
        var o = 0
        var c = 0
        var h, l
        do {
          if (n >= r) {
            throw new Error('Expected more digits in base 64 VLQ value.')
          }
          l = i.decode(e.charAt(n++))
          h = !!(l & a)
          l &= u
          o = o + (l << c)
          c += s
        } while (h)
        t.value = fromVLQSigned(o)
        t.rest = e.slice(n)
      }
    },
    444: function (e, t, n) {
      'use strict'
      const r = n(430)
      const i = n(176)
      const s = n(667)
      const o = n(361)
      e.exports = function fromStringWithSourceMap(e, t) {
        const n = t.sources
        const u = t.sourcesContent
        const a = t.mappings.split(';')
        const c = e.split('\n')
        const h = []
        let l = null
        let f = 1
        let d = 0
        let p
        function addCode(e) {
          if (l && l instanceof s) {
            l.addGeneratedCode(e)
          } else if (l && l instanceof i && !e.trim()) {
            l.addGeneratedCode(e)
            p++
          } else {
            l = new s(e)
            h.push(l)
          }
        }
        function addSource(e, t, n, r) {
          if (l && l instanceof i && l.source === t && p === r) {
            l.addGeneratedCode(e)
            p++
          } else {
            l = new i(e, t, n, r)
            p = r + 1
            h.push(l)
          }
        }
        a.forEach(function (e, t) {
          let n = c[t]
          if (typeof n === 'undefined') return
          if (t !== c.length - 1) n += '\n'
          if (!e) return addCode(n)
          e = { value: 0, rest: e }
          let r = false
          while (e.rest) r = processMapping(e, n, r) || r
          if (!r) addCode(n)
        })
        if (a.length < c.length) {
          let e = a.length
          while (!c[e].trim() && e < c.length - 1) {
            addCode(c[e] + '\n')
            e++
          }
          addCode(c.slice(e).join('\n'))
        }
        return new o(h)
        function processMapping(e, t, i) {
          if (e.rest && e.rest[0] !== ',') {
            r.decode(e.rest, e)
          }
          if (!e.rest) return false
          if (e.rest[0] === ',') {
            e.rest = e.rest.substr(1)
            return false
          }
          r.decode(e.rest, e)
          const s = e.value + d
          d = s
          let o
          if (e.rest && e.rest[0] !== ',') {
            r.decode(e.rest, e)
            o = e.value + f
            f = o
          } else {
            o = f
          }
          if (e.rest) {
            const t = e.rest.indexOf(',')
            e.rest = t === -1 ? '' : e.rest.substr(t)
          }
          if (!i) {
            addSource(t, n ? n[s] : null, u ? u[s] : null, o)
            return true
          }
        }
      }
    },
    495: function (e, t) {
      'use strict'
      t.y = function getNumberOfLines(e) {
        let t = -1
        let n = -1
        do {
          t++
          n = e.indexOf('\n', n + 1)
        } while (n >= 0)
        return t
      }
      t.P = function getUnfinishedLine(e) {
        const t = e.lastIndexOf('\n')
        if (t === -1) return e.length
        else return e.length - t - 1
      }
    },
    524: function (e, t, n) {
      t.SourceListMap = n(361)
      n(176)
      n(664)
      n(667)
      n(432)
      t.fromStringWithSourceMap = n(444)
    },
    411: function (e, t, n) {
      'use strict'
      const r = n(781)
      class CachedSource extends r {
        constructor(e) {
          super()
          this._source = e
          this._cachedSource = undefined
          this._cachedSize = undefined
          this._cachedMaps = {}
          if (e.node)
            this.node = function (e) {
              return this._source.node(e)
            }
          if (e.listMap)
            this.listMap = function (e) {
              return this._source.listMap(e)
            }
        }
        source() {
          if (typeof this._cachedSource !== 'undefined')
            return this._cachedSource
          return (this._cachedSource = this._source.source())
        }
        size() {
          if (typeof this._cachedSize !== 'undefined') return this._cachedSize
          if (typeof this._cachedSource !== 'undefined') {
            if (Buffer.from.length === 1)
              return new Buffer(this._cachedSource).length
            return (this._cachedSize = Buffer.byteLength(this._cachedSource))
          }
          return (this._cachedSize = this._source.size())
        }
        sourceAndMap(e) {
          const t = JSON.stringify(e)
          if (
            typeof this._cachedSource !== 'undefined' &&
            t in this._cachedMaps
          )
            return { source: this._cachedSource, map: this._cachedMaps[t] }
          else if (typeof this._cachedSource !== 'undefined') {
            return {
              source: this._cachedSource,
              map: (this._cachedMaps[t] = this._source.map(e)),
            }
          } else if (t in this._cachedMaps) {
            return {
              source: (this._cachedSource = this._source.source()),
              map: this._cachedMaps[t],
            }
          }
          const n = this._source.sourceAndMap(e)
          this._cachedSource = n.source
          this._cachedMaps[t] = n.map
          return { source: this._cachedSource, map: this._cachedMaps[t] }
        }
        map(e) {
          if (!e) e = {}
          const t = JSON.stringify(e)
          if (t in this._cachedMaps) return this._cachedMaps[t]
          return (this._cachedMaps[t] = this._source.map())
        }
        updateHash(e) {
          this._source.updateHash(e)
        }
      }
      e.exports = CachedSource
    },
    744: function (e, t, n) {
      'use strict'
      const r = n(241).SourceNode
      const i = n(524).SourceListMap
      const s = n(781)
      class ConcatSource extends s {
        constructor() {
          super()
          this.children = []
          for (var e = 0; e < arguments.length; e++) {
            var t = arguments[e]
            if (t instanceof ConcatSource) {
              var n = t.children
              for (var r = 0; r < n.length; r++) this.children.push(n[r])
            } else {
              this.children.push(t)
            }
          }
        }
        add(e) {
          if (e instanceof ConcatSource) {
            var t = e.children
            for (var n = 0; n < t.length; n++) this.children.push(t[n])
          } else {
            this.children.push(e)
          }
        }
        source() {
          let e = ''
          const t = this.children
          for (let n = 0; n < t.length; n++) {
            const r = t[n]
            e += typeof r === 'string' ? r : r.source()
          }
          return e
        }
        size() {
          let e = 0
          const t = this.children
          for (let n = 0; n < t.length; n++) {
            const r = t[n]
            e += typeof r === 'string' ? r.length : r.size()
          }
          return e
        }
        node(e) {
          const t = new r(
            null,
            null,
            null,
            this.children.map(function (t) {
              return typeof t === 'string' ? t : t.node(e)
            })
          )
          return t
        }
        listMap(e) {
          const t = new i()
          var n = this.children
          for (var r = 0; r < n.length; r++) {
            var s = n[r]
            if (typeof s === 'string') t.add(s)
            else t.add(s.listMap(e))
          }
          return t
        }
        updateHash(e) {
          var t = this.children
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            if (typeof r === 'string') e.update(r)
            else r.updateHash(e)
          }
        }
      }
      n(733)(ConcatSource.prototype)
      e.exports = ConcatSource
    },
    820: function (e, t, n) {
      'use strict'
      var r = n(241).SourceNode
      var i = n(241).SourceMapConsumer
      var s = n(524).SourceListMap
      var o = n(781)
      class LineToLineMappedSource extends o {
        constructor(e, t, n) {
          super()
          this._value = e
          this._name = t
          this._originalSource = n
        }
        source() {
          return this._value
        }
        node(e) {
          var t = this._value
          var n = this._name
          var i = t.split('\n')
          var s = new r(
            null,
            null,
            null,
            i.map(function (e, t) {
              return new r(t + 1, 0, n, e + (t != i.length - 1 ? '\n' : ''))
            })
          )
          s.setSourceContent(n, this._originalSource)
          return s
        }
        listMap(e) {
          return new s(this._value, this._name, this._originalSource)
        }
        updateHash(e) {
          e.update(this._value)
          e.update(this._originalSource)
        }
      }
      n(733)(LineToLineMappedSource.prototype)
      e.exports = LineToLineMappedSource
    },
    221: function (e, t, n) {
      'use strict'
      var r = n(241).SourceNode
      var i = n(241).SourceMapConsumer
      var s = n(524).SourceListMap
      var o = n(781)
      var u = /(?!$)[^\n\r;{}]*[\n\r;{}]*/g
      function _splitCode(e) {
        return e.match(u) || []
      }
      class OriginalSource extends o {
        constructor(e, t) {
          super()
          this._value = e
          this._name = t
        }
        source() {
          return this._value
        }
        node(e) {
          e = e || {}
          var t = this._sourceMap
          var n = this._value
          var i = this._name
          var s = n.split('\n')
          var o = new r(
            null,
            null,
            null,
            s.map(function (t, n) {
              var o = 0
              if (e.columns === false) {
                var u = t + (n != s.length - 1 ? '\n' : '')
                return new r(n + 1, 0, i, u)
              }
              return new r(
                null,
                null,
                null,
                _splitCode(t + (n != s.length - 1 ? '\n' : '')).map(function (
                  e
                ) {
                  if (/^\s*$/.test(e)) {
                    o += e.length
                    return e
                  }
                  var t = new r(n + 1, o, i, e)
                  o += e.length
                  return t
                })
              )
            })
          )
          o.setSourceContent(i, n)
          return o
        }
        listMap(e) {
          return new s(this._value, this._name, this._value)
        }
        updateHash(e) {
          e.update(this._value)
        }
      }
      n(733)(OriginalSource.prototype)
      e.exports = OriginalSource
    },
    141: function (e, t, n) {
      'use strict'
      var r = n(781)
      var i = n(241).SourceNode
      var s = /\n(?=.|\s)/g
      function cloneAndPrefix(e, t, n) {
        if (typeof e === 'string') {
          var r = e.replace(s, '\n' + t)
          if (n.length > 0) r = n.pop() + r
          if (/\n$/.test(e)) n.push(t)
          return r
        } else {
          var o = new i(
            e.line,
            e.column,
            e.source,
            e.children.map(function (e) {
              return cloneAndPrefix(e, t, n)
            }),
            e.name
          )
          o.sourceContents = e.sourceContents
          return o
        }
      }
      class PrefixSource extends r {
        constructor(e, t) {
          super()
          this._source = t
          this._prefix = e
        }
        source() {
          var e =
            typeof this._source === 'string'
              ? this._source
              : this._source.source()
          var t = this._prefix
          return t + e.replace(s, '\n' + t)
        }
        node(e) {
          var t = this._source.node(e)
          var n = this._prefix
          var r = []
          var s = new i()
          t.walkSourceContents(function (e, t) {
            s.setSourceContent(e, t)
          })
          var o = true
          t.walk(function (e, t) {
            var s = e.split(/(\n)/)
            for (var u = 0; u < s.length; u += 2) {
              var a = u + 1 < s.length
              var c = s[u] + (a ? '\n' : '')
              if (c) {
                if (o) {
                  r.push(n)
                }
                r.push(new i(t.line, t.column, t.source, c, t.name))
                o = a
              }
            }
          })
          s.add(r)
          return s
        }
        listMap(e) {
          var t = this._prefix
          var n = this._source.listMap(e)
          return n.mapGeneratedCode(function (e) {
            return t + e.replace(s, '\n' + t)
          })
        }
        updateHash(e) {
          if (typeof this._source === 'string') e.update(this._source)
          else this._source.updateHash(e)
          if (typeof this._prefix === 'string') e.update(this._prefix)
          else this._prefix.updateHash(e)
        }
      }
      n(733)(PrefixSource.prototype)
      e.exports = PrefixSource
    },
    76: function (e, t, n) {
      'use strict'
      var r = n(781)
      var i = n(241).SourceNode
      var s = n(524).SourceListMap
      class RawSource extends r {
        constructor(e) {
          super()
          this._value = e
        }
        source() {
          return this._value
        }
        map(e) {
          return null
        }
        node(e) {
          return new i(null, null, null, this._value)
        }
        listMap(e) {
          return new s(this._value)
        }
        updateHash(e) {
          e.update(this._value)
        }
      }
      e.exports = RawSource
    },
    22: function (e, t, n) {
      'use strict'
      var r = n(781)
      var i = n(241).SourceNode
      class Replacement {
        constructor(e, t, n, r, i) {
          this.start = e
          this.end = t
          this.content = n
          this.insertIndex = r
          this.name = i
        }
      }
      class ReplaceSource extends r {
        constructor(e, t) {
          super()
          this._source = e
          this._name = t
          this.replacements = []
        }
        replace(e, t, n, r) {
          if (typeof n !== 'string')
            throw new Error('insertion must be a string, but is a ' + typeof n)
          this.replacements.push(
            new Replacement(e, t, n, this.replacements.length, r)
          )
        }
        insert(e, t, n) {
          if (typeof t !== 'string')
            throw new Error(
              'insertion must be a string, but is a ' + typeof t + ': ' + t
            )
          this.replacements.push(
            new Replacement(e, e - 1, t, this.replacements.length, n)
          )
        }
        source(e) {
          return this._replaceString(this._source.source())
        }
        original() {
          return this._source
        }
        _sortReplacements() {
          this.replacements.sort(function (e, t) {
            var n = t.end - e.end
            if (n !== 0) return n
            n = t.start - e.start
            if (n !== 0) return n
            return t.insertIndex - e.insertIndex
          })
        }
        _replaceString(e) {
          if (typeof e !== 'string')
            throw new Error(
              'str must be a string, but is a ' + typeof e + ': ' + e
            )
          this._sortReplacements()
          var t = [e]
          this.replacements.forEach(function (e) {
            var n = t.pop()
            var r = this._splitString(n, Math.floor(e.end + 1))
            var i = this._splitString(r[0], Math.floor(e.start))
            t.push(r[1], e.content, i[0])
          }, this)
          let n = ''
          for (let e = t.length - 1; e >= 0; --e) {
            n += t[e]
          }
          return n
        }
        node(e) {
          var t = this._source.node(e)
          if (this.replacements.length === 0) {
            return t
          }
          this._sortReplacements()
          var n = new ReplacementEnumerator(this.replacements)
          var r = []
          var s = 0
          var o = Object.create(null)
          var u = Object.create(null)
          var a = new i()
          t.walkSourceContents(function (e, t) {
            a.setSourceContent(e, t)
            o['$' + e] = t
          })
          var c = this._replaceInStringNode.bind(
            this,
            r,
            n,
            function getOriginalSource(e) {
              var t = '$' + e.source
              var n = u[t]
              if (!n) {
                var r = o[t]
                if (!r) return null
                n = r.split('\n').map(function (e) {
                  return e + '\n'
                })
                u[t] = n
              }
              if (e.line > n.length) return null
              var i = n[e.line - 1]
              return i.substr(e.column)
            }
          )
          t.walk(function (e, t) {
            s = c(e, s, t)
          })
          var h = n.footer()
          if (h) {
            r.push(h)
          }
          a.add(r)
          return a
        }
        listMap(e) {
          this._sortReplacements()
          var t = this._source.listMap(e)
          var n = 0
          var r = this.replacements
          var i = r.length - 1
          var s = 0
          t = t.mapGeneratedCode(function (e) {
            var t = n + e.length
            if (s > e.length) {
              s -= e.length
              e = ''
            } else {
              if (s > 0) {
                e = e.substr(s)
                n += s
                s = 0
              }
              var o = ''
              while (i >= 0 && r[i].start < t) {
                var u = r[i]
                var a = Math.floor(u.start)
                var c = Math.floor(u.end + 1)
                var h = e.substr(0, Math.max(0, a - n))
                if (c <= t) {
                  var l = e.substr(Math.max(0, c - n))
                  o += h + u.content
                  e = l
                  n = Math.max(n, c)
                } else {
                  o += h + u.content
                  e = ''
                  s = c - t
                }
                i--
              }
              e = o + e
            }
            n = t
            return e
          })
          var o = ''
          while (i >= 0) {
            o += r[i].content
            i--
          }
          if (o) {
            t.add(o)
          }
          return t
        }
        _splitString(e, t) {
          return t <= 0 ? ['', e] : [e.substr(0, t), e.substr(t)]
        }
        _replaceInStringNode(e, t, n, r, s, o) {
          var u = undefined
          do {
            var a = t.position - s
            if (a < 0) {
              a = 0
            }
            if (a >= r.length || t.done) {
              if (t.emit) {
                var c = new i(o.line, o.column, o.source, r, o.name)
                e.push(c)
              }
              return s + r.length
            }
            var h = o.column
            var l
            if (a > 0) {
              l = r.slice(0, a)
              if (u === undefined) {
                u = n(o)
              }
              if (u && u.length >= a && u.startsWith(l)) {
                o.column += a
                u = u.substr(a)
              }
            }
            var f = t.next()
            if (!f) {
              if (a > 0) {
                var d = new i(o.line, h, o.source, l, o.name)
                e.push(d)
              }
              if (t.value) {
                e.push(
                  new i(o.line, o.column, o.source, t.value, o.name || t.name)
                )
              }
            }
            r = r.substr(a)
            s += a
          } while (true)
        }
      }
      class ReplacementEnumerator {
        constructor(e) {
          this.replacements = e || []
          this.index = this.replacements.length
          this.done = false
          this.emit = false
          this.next()
        }
        next() {
          if (this.done) return true
          if (this.emit) {
            var e = this.replacements[this.index]
            var t = Math.floor(e.end + 1)
            this.position = t
            this.value = e.content
            this.name = e.name
          } else {
            this.index--
            if (this.index < 0) {
              this.done = true
            } else {
              var n = this.replacements[this.index]
              var r = Math.floor(n.start)
              this.position = r
            }
          }
          if (this.position < 0) this.position = 0
          this.emit = !this.emit
          return this.emit
        }
        footer() {
          if (!this.done && !this.emit) this.next()
          if (this.done) {
            return []
          } else {
            var e = ''
            for (var t = this.index; t >= 0; t--) {
              var n = this.replacements[t]
              e += n.content
            }
            return e
          }
        }
      }
      n(733)(ReplaceSource.prototype)
      e.exports = ReplaceSource
    },
    781: function (e, t, n) {
      'use strict'
      var r = n(241).SourceNode
      var i = n(241).SourceMapConsumer
      class Source {
        source() {
          throw new Error('Abstract')
        }
        size() {
          if (Buffer.from.length === 1) return new Buffer(this.source()).length
          return Buffer.byteLength(this.source())
        }
        map(e) {
          return null
        }
        sourceAndMap(e) {
          return { source: this.source(), map: this.map() }
        }
        node() {
          throw new Error('Abstract')
        }
        listNode() {
          throw new Error('Abstract')
        }
        updateHash(e) {
          var t = this.source()
          e.update(t || '')
        }
      }
      e.exports = Source
    },
    733: function (e) {
      'use strict'
      e.exports = function mixinSourceAndMap(e) {
        e.map = function (e) {
          e = e || {}
          if (e.columns === false) {
            return this.listMap(e).toStringWithSourceMap({ file: 'x' }).map
          }
          return this.node(e).toStringWithSourceMap({ file: 'x' }).map.toJSON()
        }
        e.sourceAndMap = function (e) {
          e = e || {}
          if (e.columns === false) {
            return this.listMap(e).toStringWithSourceMap({ file: 'x' })
          }
          var t = this.node(e).toStringWithSourceMap({ file: 'x' })
          return { source: t.code, map: t.map.toJSON() }
        }
      }
    },
    203: function (e, t, n) {
      'use strict'
      var r = n(241).SourceNode
      var i = n(241).SourceMapConsumer
      var s = n(241).SourceMapGenerator
      var o = n(524).SourceListMap
      var u = n(524).fromStringWithSourceMap
      var a = n(781)
      var c = n(540)
      class SourceMapSource extends a {
        constructor(e, t, n, r, i, s) {
          super()
          this._value = e
          this._name = t
          this._sourceMap = n
          this._originalSource = r
          this._innerSourceMap = i
          this._removeOriginalSource = s
        }
        source() {
          return this._value
        }
        node(e) {
          var t = this._sourceMap
          var n = r.fromStringWithSourceMap(this._value, new i(t))
          n.setSourceContent(this._name, this._originalSource)
          var s = this._innerSourceMap
          if (s) {
            n = c(n, new i(s), this._name, this._removeOriginalSource)
          }
          return n
        }
        listMap(e) {
          e = e || {}
          if (e.module === false)
            return new o(this._value, this._name, this._value)
          return u(
            this._value,
            typeof this._sourceMap === 'string'
              ? JSON.parse(this._sourceMap)
              : this._sourceMap
          )
        }
        updateHash(e) {
          e.update(this._value)
          if (this._originalSource) e.update(this._originalSource)
        }
      }
      n(733)(SourceMapSource.prototype)
      e.exports = SourceMapSource
    },
    540: function (e, t, n) {
      'use strict'
      var r = n(241).SourceNode
      var i = n(241).SourceMapConsumer
      var s = function (e, t, n, s) {
        var o = new r()
        var u = []
        var a = {}
        var c = {}
        var h = {}
        var l = {}
        t.eachMapping(
          function (e) {
            ;(c[e.generatedLine] = c[e.generatedLine] || []).push(e)
          },
          null,
          i.GENERATED_ORDER
        )
        e.walkSourceContents(function (e, t) {
          a['$' + e] = t
        })
        var f = a['$' + n]
        var d = f ? f.split('\n') : undefined
        e.walk(function (e, i) {
          var f
          if (i.source === n && i.line && c[i.line]) {
            var p
            var v = c[i.line]
            for (var _ = 0; _ < v.length; _++) {
              if (v[_].generatedColumn <= i.column) {
                p = v[_]
              }
            }
            if (p) {
              var g = false
              var S
              var m
              var w
              var M = p.source
              if (
                d &&
                M &&
                (S = d[p.generatedLine - 1]) &&
                ((w = l[M]) || (m = t.sourceContentFor(M, true)))
              ) {
                if (!w) {
                  w = l[M] = m.split('\n')
                }
                var L = w[p.originalLine - 1]
                if (L) {
                  var x = i.column - p.generatedColumn
                  if (x > 0) {
                    var C = S.slice(p.generatedColumn, i.column)
                    var b = L.slice(p.originalColumn, p.originalColumn + x)
                    if (C === b) {
                      p = Object.assign({}, p, {
                        originalColumn: p.originalColumn + x,
                        generatedColumn: i.column,
                      })
                    }
                  }
                  if (!p.name && i.name) {
                    g =
                      L.slice(
                        p.originalColumn,
                        p.originalColumn + i.name.length
                      ) === i.name
                  }
                }
              }
              f = p.source
              u.push(
                new r(
                  p.originalLine,
                  p.originalColumn,
                  f,
                  e,
                  g ? i.name : p.name
                )
              )
              if (!('$' + f in h)) {
                h['$' + f] = true
                var y = t.sourceContentFor(f, true)
                if (y) {
                  o.setSourceContent(f, y)
                }
              }
              return
            }
          }
          if ((s && i.source === n) || !i.source) {
            u.push(e)
            return
          }
          f = i.source
          u.push(new r(i.line, i.column, f, e, i.name))
          if ('$' + f in a) {
            if (!('$' + f in h)) {
              o.setSourceContent(f, a['$' + f])
              delete a['$' + f]
            }
          }
        })
        o.add(u)
        return o
      }
      e.exports = s
    },
    368: function (e, t, n) {
      t.Source = n(781)
      t.RawSource = n(76)
      t.OriginalSource = n(221)
      t.SourceMapSource = n(203)
      t.LineToLineMappedSource = n(820)
      t.CachedSource = n(411)
      t.ConcatSource = n(744)
      t.ReplaceSource = n(22)
      t.PrefixSource = n(141)
    },
    241: function (e) {
      'use strict'
      e.exports = require('next/dist/compiled/source-map')
    },
  }
  var t = {}
  function __nccwpck_require__(n) {
    if (t[n]) {
      return t[n].exports
    }
    var r = (t[n] = { exports: {} })
    var i = true
    try {
      e[n](r, r.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete t[n]
    }
    return r.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(368)
})()
