module.exports = (function () {
  var e = {
    233: function (e, t, n) {
      'use strict'
      const s = n(335).y
      const i = n(335).P
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
          const t = s(this.generatedCode)
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
    940: function (e) {
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
    482: function (e, t, n) {
      'use strict'
      const s = n(439)
      const i = n(335).y
      const r = n(335).P
      const u = ';AAAA'
      class SingleLineNode {
        constructor(e, t, n, s) {
          this.generatedCode = e
          this.originalSource = n
          this.source = t
          this.line = s || 1
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
            i = ',' + s.encode(e.unfinishedGeneratedLine)
          i += s.encode(n - e.currentSource)
          i += s.encode(this.line - e.currentOriginalLine)
          i += 'A'
          e.currentSource = n
          e.currentOriginalLine = this.line
          const o = (e.unfinishedGeneratedLine = r(this.generatedCode))
          i += Array(t).join(u)
          if (o === 0) {
            i += ';'
          } else {
            if (t !== 0) i += u
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
              return new o(
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
      const o = n(839)
    },
    950: function (e, t, n) {
      'use strict'
      const s = n(233)
      const i = n(839)
      const r = n(940)
      const u = n(335).y
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
              this.children[this.children.length - 1] instanceof s
            ) {
              this.children[this.children.length - 1].addGeneratedCode(e)
            } else {
              this.children.push(new s(e))
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
              this.children.unshift(new s(e))
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
              const s = e.merge(t)
              if (s) {
                n[n.length - 1] = s
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
          const t = new r()
          const n = this.children
            .map(function (e) {
              return e.getGeneratedCode()
            })
            .join('')
          const s = this.children
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
              mappings: s,
            },
          }
        }
      }
      e.exports = SourceListMap
    },
    839: function (e, t, n) {
      'use strict'
      const s = n(439)
      const i = n(335).y
      const r = n(335).P
      const u = ';AACA'
      class SourceNode {
        constructor(e, t, n, s) {
          this.generatedCode = e
          this.originalSource = n
          this.source = t
          this.startingLine = s || 1
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
            i = ',' + s.encode(e.unfinishedGeneratedLine)
          i += s.encode(n - e.currentSource)
          i += s.encode(this.startingLine - e.currentOriginalLine)
          i += 'A'
          e.currentSource = n
          e.currentOriginalLine = this.startingLine + t - 1
          const o = (e.unfinishedGeneratedLine = r(this.generatedCode))
          i += Array(t).join(u)
          if (o === 0) {
            i += ';'
          } else {
            if (t !== 0) {
              i += u
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
          var s = 0
          var i = n.length
          while (s < i) {
            var r = n.indexOf('\n', s) + 1
            if (r === 0) r = i
            var u = n.substr(s, r - s)
            e.push(new o(u, this.source, this.originalSource, t))
            s = r
            t++
          }
          return e
        }
        merge(e) {
          if (e instanceof SourceNode) {
            return this.mergeSourceNode(e)
          } else if (e instanceof o) {
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
      const o = n(482)
    },
    439: function (e, t) {
      var n = {}
      var s = {}
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
        .split('')
        .forEach(function (e, t) {
          n[e] = t
          s[t] = e
        })
      var i = {}
      i.encode = function base64_encode(e) {
        if (e in s) {
          return s[e]
        }
        throw new TypeError('Must be between 0 and 63: ' + e)
      }
      i.decode = function base64_decode(e) {
        if (e in n) {
          return n[e]
        }
        throw new TypeError('Not a valid base 64 digit: ' + e)
      }
      var r = 5
      var u = 1 << r
      var o = u - 1
      var f = u
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
        var s = toVLQSigned(e)
        do {
          n = s & o
          s >>>= r
          if (s > 0) {
            n |= f
          }
          t += i.encode(n)
        } while (s > 0)
        return t
      }
      t.decode = function base64VLQ_decode(e, t) {
        var n = 0
        var s = e.length
        var u = 0
        var c = 0
        var h, a
        do {
          if (n >= s) {
            throw new Error('Expected more digits in base 64 VLQ value.')
          }
          a = i.decode(e.charAt(n++))
          h = !!(a & f)
          a &= o
          u = u + (a << c)
          c += r
        } while (h)
        t.value = fromVLQSigned(u)
        t.rest = e.slice(n)
      }
    },
    835: function (e, t, n) {
      'use strict'
      const s = n(439)
      const i = n(839)
      const r = n(233)
      const u = n(950)
      e.exports = function fromStringWithSourceMap(e, t) {
        const n = t.sources
        const o = t.sourcesContent
        const f = t.mappings.split(';')
        const c = e.split('\n')
        const h = []
        let a = null
        let l = 1
        let d = 0
        let p
        function addCode(e) {
          if (a && a instanceof r) {
            a.addGeneratedCode(e)
          } else if (a && a instanceof i && !e.trim()) {
            a.addGeneratedCode(e)
            p++
          } else {
            a = new r(e)
            h.push(a)
          }
        }
        function addSource(e, t, n, s) {
          if (a && a instanceof i && a.source === t && p === s) {
            a.addGeneratedCode(e)
            p++
          } else {
            a = new i(e, t, n, s)
            p = s + 1
            h.push(a)
          }
        }
        f.forEach(function (e, t) {
          let n = c[t]
          if (typeof n === 'undefined') return
          if (t !== c.length - 1) n += '\n'
          if (!e) return addCode(n)
          e = { value: 0, rest: e }
          let s = false
          while (e.rest) s = processMapping(e, n, s) || s
          if (!s) addCode(n)
        })
        if (f.length < c.length) {
          let e = f.length
          while (!c[e].trim() && e < c.length - 1) {
            addCode(c[e] + '\n')
            e++
          }
          addCode(c.slice(e).join('\n'))
        }
        return new u(h)
        function processMapping(e, t, i) {
          if (e.rest && e.rest[0] !== ',') {
            s.decode(e.rest, e)
          }
          if (!e.rest) return false
          if (e.rest[0] === ',') {
            e.rest = e.rest.substr(1)
            return false
          }
          s.decode(e.rest, e)
          const r = e.value + d
          d = r
          let u
          if (e.rest && e.rest[0] !== ',') {
            s.decode(e.rest, e)
            u = e.value + l
            l = u
          } else {
            u = l
          }
          if (e.rest) {
            const t = e.rest.indexOf(',')
            e.rest = t === -1 ? '' : e.rest.substr(t)
          }
          if (!i) {
            addSource(t, n ? n[r] : null, o ? o[r] : null, u)
            return true
          }
        }
      }
    },
    335: function (e, t) {
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
    728: function (e, t, n) {
      t.SourceListMap = n(950)
      t.SourceNode = n(839)
      t.SingleLineNode = n(482)
      t.CodeNode = n(233)
      t.MappingsContext = n(940)
      t.fromStringWithSourceMap = n(835)
    },
    357: function (e, t, n) {
      'use strict'
      const s = n(598)
      const { SourceMapConsumer: i, SourceNode: r } = n(241)
      const { SourceListMap: u, fromStringWithSourceMap: o } = n(728)
      const f = { columns: false }
      const c = (e) => {
        if (typeof e !== 'object' || !e) return e
        const t = Object.assign({}, e)
        if (e.mappings) {
          t.mappings = Buffer.from(e.mappings, 'utf-8')
        }
        if (e.sourcesContent) {
          t.sourcesContent = e.sourcesContent.map(
            (e) => e && Buffer.from(e, 'utf-8')
          )
        }
        return t
      }
      const h = (e) => {
        if (typeof e !== 'object' || !e) return e
        const t = Object.assign({}, e)
        if (e.mappings) {
          t.mappings = e.mappings.toString('utf-8')
        }
        if (e.sourcesContent) {
          t.sourcesContent = e.sourcesContent.map(
            (e) => e && e.toString('utf-8')
          )
        }
        return t
      }
      const a = (e, t) => {
        if (t) {
          return r.fromStringWithSourceMap(e, new i(t))
        } else {
          return new r(null, null, null, e)
        }
      }
      const l = (e, t) => {
        if (t) {
          return o(e, t)
        } else {
          return new u(e)
        }
      }
      class CachedSource extends s {
        constructor(e, t) {
          super()
          this._source = e
          this._cachedSourceType = t ? t.source : undefined
          this._cachedSource = undefined
          this._cachedBuffer = t ? t.buffer : undefined
          this._cachedSize = t ? t.size : undefined
          this._cachedMaps = t ? t.maps : new Map()
          this._cachedHashUpdate = t ? t.hash : undefined
        }
        getCachedData() {
          const e = new Map()
          for (const t of this._cachedMaps) {
            let n = t[1]
            if (n.bufferedMap === undefined) {
              n.bufferedMap = c(this._getMapFromCacheEntry(n))
            }
            e.set(t[0], {
              map: undefined,
              node: undefined,
              listMap: undefined,
              bufferedMap: n.bufferedMap,
            })
          }
          if (this._cachedSource) {
            this.buffer()
          }
          return {
            buffer: this._cachedBuffer,
            source:
              this._cachedSourceType !== undefined
                ? this._cachedSourceType
                : typeof this._cachedSource === 'string'
                ? true
                : Buffer.isBuffer(this._cachedSource)
                ? false
                : undefined,
            size: this._cachedSize,
            maps: e,
            hash: this._cachedHashUpdate,
          }
        }
        originalLazy() {
          return this._source
        }
        original() {
          if (typeof this._source === 'function') this._source = this._source()
          return this._source
        }
        source() {
          const e = this._getCachedSource()
          if (e !== undefined) return e
          return (this._cachedSource = this.original().source())
        }
        _getMapFromCacheEntry(e) {
          if (e.map !== undefined) {
            return e.map
          } else if (e.bufferedMap !== undefined) {
            return (e.map = h(e.bufferedMap))
          } else if (e.node !== undefined) {
            const t = e.node.toStringWithSourceMap({ file: 'x' })
            if (this._cachedSource === undefined) this._cachedSource = t.code
            return (e.map = t.map.toJSON())
          } else if (e.listMap !== undefined) {
            const t = e.listMap.toStringWithSourceMap({ file: 'x' })
            if (this._cachedSource === undefined) this._cachedSource = t.source
            return (e.map = t.map)
          }
        }
        _getCachedSource() {
          if (this._cachedSource !== undefined) return this._cachedSource
          if (this._cachedBuffer && this._cachedSourceType !== undefined) {
            return (this._cachedSource = this._cachedSourceType
              ? this._cachedBuffer.toString('utf-8')
              : this._cachedBuffer)
          }
          for (const e of this._cachedMaps.values()) {
            if (e.node !== undefined) {
              return (this._cachedSource = e.node.toString())
            }
            if (e.listMap !== undefined) {
              return (this._cachedSource = e.listMap.toString())
            }
          }
        }
        buffer() {
          if (this._cachedBuffer !== undefined) return this._cachedBuffer
          if (this._cachedSource !== undefined) {
            if (Buffer.isBuffer(this._cachedSource)) {
              return (this._cachedBuffer = this._cachedSource)
            }
            return (this._cachedBuffer = Buffer.from(
              this._cachedSource,
              'utf-8'
            ))
          }
          if (typeof this.original().buffer === 'function') {
            return (this._cachedBuffer = this.original().buffer())
          }
          const e = this.source()
          if (Buffer.isBuffer(e)) {
            return (this._cachedBuffer = e)
          }
          return (this._cachedBuffer = Buffer.from(e, 'utf-8'))
        }
        size() {
          if (this._cachedSize !== undefined) return this._cachedSize
          if (this._cachedBuffer !== undefined) {
            return (this._cachedSize = this._cachedBuffer.length)
          }
          const e = this._getCachedSource()
          if (e !== undefined) {
            return (this._cachedSize = Buffer.byteLength(e))
          }
          return (this._cachedSize = this.original().size())
        }
        sourceAndMap(e) {
          const t = e ? JSON.stringify(e) : '{}'
          const n = this._cachedMaps.get(t)
          if (n !== undefined) {
            const e = this._getMapFromCacheEntry(n)
            return { source: this.source(), map: e }
          }
          let s = this._getCachedSource()
          let i
          if (s !== undefined) {
            i = this.original().map(e)
          } else {
            const t = this.original().sourceAndMap(e)
            s = t.source
            i = t.map
            this._cachedSource = s
          }
          this._cachedMaps.set(t, {
            map: i,
            node: undefined,
            listMap: undefined,
            bufferedMap: undefined,
          })
          return { source: s, map: i }
        }
        node(e) {
          const t = e ? JSON.stringify(e) : '{}'
          let n = this._cachedMaps.get(t)
          if (n !== undefined) {
            if (n.node) return n.node
            const e = this._getMapFromCacheEntry(n)
            const t = this.source()
            const s = a(t, e)
            n.node = s
            return s
          }
          let s
          const i = this.original()
          if (typeof i.node === 'function') {
            s = i.node(e)
            this._cachedMaps.set(t, {
              map: undefined,
              node: s,
              listMap: undefined,
              bufferedMap: undefined,
            })
          } else {
            const n = this.sourceAndMap(e)
            s = a(n.source, n.map)
            this._cachedMaps.get(t).node = s
          }
          return s
        }
        listMap(e) {
          let t
          if (!e) {
            t = '{"columns":false}'
            e = f
          } else {
            if (e.columns !== false) {
              e = Object.assign({}, e, f)
            }
            t = JSON.stringify(e)
          }
          let n = this._cachedMaps.get(t)
          if (n !== undefined) {
            if (n.listMap) return n.listMap
            const e = this._getMapFromCacheEntry(n)
            const t = this.source()
            const s = l(t, e)
            n.listMap = s
            return s
          }
          let s
          const i = this.original()
          if (typeof i.listMap === 'function') {
            s = i.listMap(e)
            this._cachedMaps.set(t, {
              map: undefined,
              node: undefined,
              listMap: s,
              bufferedMap: undefined,
            })
          } else {
            const n = this.sourceAndMap(e)
            s = l(n.source, n.map)
            this._cachedMaps.get(t).listMap = s
          }
          return s
        }
        map(e) {
          const t = e ? JSON.stringify(e) : '{}'
          const n = this._cachedMaps.get(t)
          if (n !== undefined) {
            return this._getMapFromCacheEntry(n)
          }
          const s = this.original().map(e)
          this._cachedMaps.set(t, {
            map: s,
            node: undefined,
            listMap: undefined,
            bufferedMap: undefined,
          })
          return s
        }
        updateHash(e) {
          if (this._cachedHashUpdate !== undefined) {
            for (const t of this._cachedHashUpdate) e.update(t)
            return
          }
          const t = []
          let n = undefined
          const s = {
            update: (e) => {
              if (typeof e === 'string' && e.length < 10240) {
                if (n === undefined) {
                  n = e
                } else {
                  n += e
                  if (n > 102400) {
                    t.push(Buffer.from(n))
                    n = undefined
                  }
                }
              } else {
                if (n !== undefined) {
                  t.push(Buffer.from(n))
                  n = undefined
                }
                t.push(e)
              }
            },
          }
          this.original().updateHash(s)
          if (n !== undefined) {
            t.push(Buffer.from(n))
          }
          for (const n of t) e.update(n)
          this._cachedHashUpdate = t
        }
      }
      e.exports = CachedSource
    },
    973: function (e, t, n) {
      'use strict'
      const s = n(598)
      class CompatSource extends s {
        static from(e) {
          return e instanceof s ? e : new CompatSource(e)
        }
        constructor(e) {
          super()
          this._sourceLike = e
        }
        source() {
          return this._sourceLike.source()
        }
        buffer() {
          if (typeof this._sourceLike.buffer === 'function') {
            return this._sourceLike.buffer()
          }
          return super.buffer()
        }
        size() {
          if (typeof this._sourceLike.size === 'function') {
            return this._sourceLike.size()
          }
          return super.size()
        }
        map(e) {
          if (typeof this._sourceLike.map === 'function') {
            return this._sourceLike.map(e)
          }
          return super.map(e)
        }
        sourceAndMap(e) {
          if (typeof this._sourceLike.sourceAndMap === 'function') {
            return this._sourceLike.sourceAndMap(e)
          }
          return super.sourceAndMap(e)
        }
        updateHash(e) {
          if (typeof this._sourceLike.updateHash === 'function') {
            return this._sourceLike.updateHash(e)
          }
          if (typeof this._sourceLike.map === 'function') {
            throw new Error(
              "A Source-like object with a 'map' method must also provide an 'updateHash' method"
            )
          }
          e.update(this.buffer())
        }
      }
      e.exports = CompatSource
    },
    944: function (e, t, n) {
      'use strict'
      const s = n(598)
      const i = n(891)
      const { SourceNode: r, SourceMapConsumer: u } = n(241)
      const { SourceListMap: o, fromStringWithSourceMap: f } = n(728)
      const { getSourceAndMap: c, getMap: h } = n(791)
      const a = new WeakSet()
      class ConcatSource extends s {
        constructor() {
          super()
          this._children = []
          for (let e = 0; e < arguments.length; e++) {
            const t = arguments[e]
            if (t instanceof ConcatSource) {
              for (const e of t._children) {
                this._children.push(e)
              }
            } else {
              this._children.push(t)
            }
          }
          this._isOptimized = arguments.length === 0
        }
        getChildren() {
          if (!this._isOptimized) this._optimize()
          return this._children
        }
        add(e) {
          if (e instanceof ConcatSource) {
            for (const t of e._children) {
              this._children.push(t)
            }
          } else {
            this._children.push(e)
          }
          this._isOptimized = false
        }
        addAllSkipOptimizing(e) {
          for (const t of e) {
            this._children.push(t)
          }
        }
        buffer() {
          if (!this._isOptimized) this._optimize()
          const e = []
          for (const t of this._children) {
            if (typeof t.buffer === 'function') {
              e.push(t.buffer())
            } else {
              const n = t.source()
              if (Buffer.isBuffer(n)) {
                e.push(n)
              } else {
                e.push(Buffer.from(n, 'utf-8'))
              }
            }
          }
          return Buffer.concat(e)
        }
        source() {
          if (!this._isOptimized) this._optimize()
          let e = ''
          for (const t of this._children) {
            e += t.source()
          }
          return e
        }
        size() {
          if (!this._isOptimized) this._optimize()
          let e = 0
          for (const t of this._children) {
            e += t.size()
          }
          return e
        }
        map(e) {
          return h(this, e)
        }
        sourceAndMap(e) {
          return c(this, e)
        }
        node(e) {
          if (!this._isOptimized) this._optimize()
          const t = new r(
            null,
            null,
            null,
            this._children.map(function (t) {
              if (typeof t.node === 'function') return t.node(e)
              const n = t.sourceAndMap(e)
              if (n.map) {
                return r.fromStringWithSourceMap(n.source, new u(n.map))
              } else {
                return n.source
              }
            })
          )
          return t
        }
        listMap(e) {
          if (!this._isOptimized) this._optimize()
          const t = new o()
          for (const n of this._children) {
            if (typeof n === 'string') {
              t.add(n)
            } else if (typeof n.listMap === 'function') {
              t.add(n.listMap(e))
            } else {
              const s = n.sourceAndMap(e)
              if (s.map) {
                t.add(f(s.source, s.map))
              } else {
                t.add(s.source)
              }
            }
          }
          return t
        }
        updateHash(e) {
          if (!this._isOptimized) this._optimize()
          e.update('ConcatSource')
          for (const t of this._children) {
            t.updateHash(e)
          }
        }
        _optimize() {
          const e = []
          let t = undefined
          let n = undefined
          const s = (e) => {
            if (n === undefined) {
              n = e
            } else if (Array.isArray(n)) {
              n.push(e)
            } else {
              n = [typeof n === 'string' ? n : n.source(), e]
            }
          }
          const r = (e) => {
            if (n === undefined) {
              n = e
            } else if (Array.isArray(n)) {
              n.push(e.source())
            } else {
              n = [typeof n === 'string' ? n : n.source(), e.source()]
            }
          }
          const u = () => {
            if (Array.isArray(n)) {
              const t = new i(n.join(''))
              a.add(t)
              e.push(t)
            } else if (typeof n === 'string') {
              const t = new i(n)
              a.add(t)
              e.push(t)
            } else {
              e.push(n)
            }
          }
          for (const i of this._children) {
            if (typeof i === 'string') {
              if (t === undefined) {
                t = i
              } else {
                t += i
              }
            } else {
              if (t !== undefined) {
                s(t)
                t = undefined
              }
              if (a.has(i)) {
                r(i)
              } else {
                if (n !== undefined) {
                  u()
                  n = undefined
                }
                e.push(i)
              }
            }
          }
          if (t !== undefined) {
            s(t)
          }
          if (n !== undefined) {
            u()
          }
          this._children = e
          this._isOptimized = true
        }
      }
      e.exports = ConcatSource
    },
    389: function (e, t, n) {
      'use strict'
      const s = n(598)
      const { SourceNode: i } = n(241)
      const { SourceListMap: r } = n(728)
      const { getSourceAndMap: u, getMap: o } = n(791)
      const f = /(?!$)[^\n\r;{}]*[\n\r;{}]*/g
      function _splitCode(e) {
        return e.match(f) || []
      }
      class OriginalSource extends s {
        constructor(e, t) {
          super()
          const n = Buffer.isBuffer(e)
          this._value = n ? undefined : e
          this._valueAsBuffer = n ? e : undefined
          this._name = t
        }
        getName() {
          return this._name
        }
        source() {
          if (this._value === undefined) {
            this._value = this._valueAsBuffer.toString('utf-8')
          }
          return this._value
        }
        buffer() {
          if (this._valueAsBuffer === undefined) {
            this._valueAsBuffer = Buffer.from(this._value, 'utf-8')
          }
          return this._valueAsBuffer
        }
        map(e) {
          return o(this, e)
        }
        sourceAndMap(e) {
          return u(this, e)
        }
        node(e) {
          if (this._value === undefined) {
            this._value = this._valueAsBuffer.toString('utf-8')
          }
          const t = this._value
          const n = this._name
          const s = t.split('\n')
          const r = new i(
            null,
            null,
            null,
            s.map(function (t, r) {
              let u = 0
              if (e && e.columns === false) {
                const e = t + (r !== s.length - 1 ? '\n' : '')
                return new i(r + 1, 0, n, e)
              }
              return new i(
                null,
                null,
                null,
                _splitCode(t + (r !== s.length - 1 ? '\n' : '')).map(function (
                  e
                ) {
                  if (/^\s*$/.test(e)) {
                    u += e.length
                    return e
                  }
                  const t = new i(r + 1, u, n, e)
                  u += e.length
                  return t
                })
              )
            })
          )
          r.setSourceContent(n, t)
          return r
        }
        listMap(e) {
          if (this._value === undefined) {
            this._value = this._valueAsBuffer.toString('utf-8')
          }
          return new r(this._value, this._name, this._value)
        }
        updateHash(e) {
          if (this._valueAsBuffer === undefined) {
            this._valueAsBuffer = Buffer.from(this._value, 'utf-8')
          }
          e.update('OriginalSource')
          e.update(this._valueAsBuffer)
          e.update(this._name || '')
        }
      }
      e.exports = OriginalSource
    },
    193: function (e, t, n) {
      'use strict'
      const s = n(598)
      const i = n(891)
      const { SourceNode: r } = n(241)
      const { getSourceAndMap: u, getMap: o } = n(791)
      const f = /\n(?=.|\s)/g
      class PrefixSource extends s {
        constructor(e, t) {
          super()
          this._source =
            typeof t === 'string' || Buffer.isBuffer(t) ? new i(t, true) : t
          this._prefix = e
        }
        getPrefix() {
          return this._prefix
        }
        original() {
          return this._source
        }
        source() {
          const e = this._source.source()
          const t = this._prefix
          return t + e.replace(f, '\n' + t)
        }
        map(e) {
          return o(this, e)
        }
        sourceAndMap(e) {
          return u(this, e)
        }
        node(e) {
          const t = this._source.node(e)
          const n = this._prefix
          const s = []
          const i = new r()
          t.walkSourceContents(function (e, t) {
            i.setSourceContent(e, t)
          })
          let u = true
          t.walk(function (e, t) {
            const i = e.split(/(\n)/)
            for (let e = 0; e < i.length; e += 2) {
              const o = e + 1 < i.length
              const f = i[e] + (o ? '\n' : '')
              if (f) {
                if (u) {
                  s.push(n)
                }
                s.push(new r(t.line, t.column, t.source, f, t.name))
                u = o
              }
            }
          })
          i.add(s)
          return i
        }
        listMap(e) {
          const t = this._prefix
          const n = this._source.listMap(e)
          let s = true
          return n.mapGeneratedCode(function (e) {
            let n = e.replace(f, '\n' + t)
            if (s) n = t + n
            s = e.charCodeAt(e.length - 1) === 10
            return n
          })
        }
        updateHash(e) {
          e.update('PrefixSource')
          this._source.updateHash(e)
          e.update(this._prefix)
        }
      }
      e.exports = PrefixSource
    },
    891: function (e, t, n) {
      'use strict'
      const s = n(598)
      const { SourceNode: i } = n(241)
      const { SourceListMap: r } = n(728)
      class RawSource extends s {
        constructor(e, t = false) {
          super()
          const n = Buffer.isBuffer(e)
          if (!n && typeof e !== 'string') {
            throw new TypeError(
              "argument 'value' must be either string of Buffer"
            )
          }
          this._valueIsBuffer = !t && n
          this._value = t && n ? undefined : e
          this._valueAsBuffer = n ? e : undefined
        }
        isBuffer() {
          return this._valueIsBuffer
        }
        source() {
          if (this._value === undefined) {
            this._value = this._valueAsBuffer.toString('utf-8')
          }
          return this._value
        }
        buffer() {
          if (this._valueAsBuffer === undefined) {
            this._valueAsBuffer = Buffer.from(this._value, 'utf-8')
          }
          return this._valueAsBuffer
        }
        map(e) {
          return null
        }
        node(e) {
          if (this._value === undefined) {
            this._value = this._valueAsBuffer.toString('utf-8')
          }
          return new i(null, null, null, this._value)
        }
        listMap(e) {
          if (this._value === undefined) {
            this._value = this._valueAsBuffer.toString('utf-8')
          }
          return new r(this._value)
        }
        updateHash(e) {
          if (this._valueAsBuffer === undefined) {
            this._valueAsBuffer = Buffer.from(this._value, 'utf-8')
          }
          e.update('RawSource')
          e.update(this._valueAsBuffer)
        }
      }
      e.exports = RawSource
    },
    588: function (e, t, n) {
      'use strict'
      const s = n(598)
      const { SourceNode: i } = n(241)
      const {
        getSourceAndMap: r,
        getMap: u,
        getNode: o,
        getListMap: f,
      } = n(791)
      class Replacement {
        constructor(e, t, n, s, i) {
          this.start = e
          this.end = t
          this.content = n
          this.insertIndex = s
          this.name = i
        }
      }
      class ReplaceSource extends s {
        constructor(e, t) {
          super()
          this._source = e
          this._name = t
          this._replacements = []
          this._isSorted = true
        }
        getName() {
          return this._name
        }
        getReplacements() {
          const e = Array.from(this._replacements)
          e.sort((e, t) => {
            return e.insertIndex - t.insertIndex
          })
          return e
        }
        replace(e, t, n, s) {
          if (typeof n !== 'string')
            throw new Error('insertion must be a string, but is a ' + typeof n)
          this._replacements.push(
            new Replacement(e, t, n, this._replacements.length, s)
          )
          this._isSorted = false
        }
        insert(e, t, n) {
          if (typeof t !== 'string')
            throw new Error(
              'insertion must be a string, but is a ' + typeof t + ': ' + t
            )
          this._replacements.push(
            new Replacement(e, e - 1, t, this._replacements.length, n)
          )
          this._isSorted = false
        }
        source() {
          return this._replaceString(this._source.source())
        }
        map(e) {
          if (this._replacements.length === 0) {
            return this._source.map(e)
          }
          return u(this, e)
        }
        sourceAndMap(e) {
          if (this._replacements.length === 0) {
            return this._source.sourceAndMap(e)
          }
          return r(this, e)
        }
        original() {
          return this._source
        }
        _sortReplacements() {
          if (this._isSorted) return
          this._replacements.sort(function (e, t) {
            const n = t.end - e.end
            if (n !== 0) return n
            const s = t.start - e.start
            if (s !== 0) return s
            return t.insertIndex - e.insertIndex
          })
          this._isSorted = true
        }
        _replaceString(e) {
          if (typeof e !== 'string')
            throw new Error(
              'str must be a string, but is a ' + typeof e + ': ' + e
            )
          this._sortReplacements()
          const t = [e]
          this._replacements.forEach(function (e) {
            const n = t.pop()
            const s = this._splitString(n, Math.floor(e.end + 1))
            const i = this._splitString(s[0], Math.floor(e.start))
            t.push(s[1], e.content, i[0])
          }, this)
          let n = ''
          for (let e = t.length - 1; e >= 0; --e) {
            n += t[e]
          }
          return n
        }
        node(e) {
          const t = o(this._source, e)
          if (this._replacements.length === 0) {
            return t
          }
          this._sortReplacements()
          const n = new ReplacementEnumerator(this._replacements)
          const s = []
          let r = 0
          const u = Object.create(null)
          const f = Object.create(null)
          const c = new i()
          t.walkSourceContents(function (e, t) {
            c.setSourceContent(e, t)
            u['$' + e] = t
          })
          const h = this._replaceInStringNode.bind(
            this,
            s,
            n,
            function getOriginalSource(e) {
              const t = '$' + e.source
              let n = f[t]
              if (!n) {
                const e = u[t]
                if (!e) return null
                n = e.split('\n').map(function (e) {
                  return e + '\n'
                })
                f[t] = n
              }
              if (e.line > n.length) return null
              const s = n[e.line - 1]
              return s.substr(e.column)
            }
          )
          t.walk(function (e, t) {
            r = h(e, r, t)
          })
          const a = n.footer()
          if (a) {
            s.push(a)
          }
          c.add(s)
          return c
        }
        listMap(e) {
          let t = f(this._source, e)
          this._sortReplacements()
          let n = 0
          const s = this._replacements
          let i = s.length - 1
          let r = 0
          t = t.mapGeneratedCode(function (e) {
            const t = n + e.length
            if (r > e.length) {
              r -= e.length
              e = ''
            } else {
              if (r > 0) {
                e = e.substr(r)
                n += r
                r = 0
              }
              let u = ''
              while (i >= 0 && s[i].start < t) {
                const o = s[i]
                const f = Math.floor(o.start)
                const c = Math.floor(o.end + 1)
                const h = e.substr(0, Math.max(0, f - n))
                if (c <= t) {
                  const t = e.substr(Math.max(0, c - n))
                  u += h + o.content
                  e = t
                  n = Math.max(n, c)
                } else {
                  u += h + o.content
                  e = ''
                  r = c - t
                }
                i--
              }
              e = u + e
            }
            n = t
            return e
          })
          let u = ''
          while (i >= 0) {
            u += s[i].content
            i--
          }
          if (u) {
            t.add(u)
          }
          return t
        }
        _splitString(e, t) {
          return t <= 0 ? ['', e] : [e.substr(0, t), e.substr(t)]
        }
        _replaceInStringNode(e, t, n, s, r, u) {
          let o = undefined
          do {
            let f = t.position - r
            if (f < 0) {
              f = 0
            }
            if (f >= s.length || t.done) {
              if (t.emit) {
                const t = new i(u.line, u.column, u.source, s, u.name)
                e.push(t)
              }
              return r + s.length
            }
            const c = u.column
            let h
            if (f > 0) {
              h = s.slice(0, f)
              if (o === undefined) {
                o = n(u)
              }
              if (o && o.length >= f && o.startsWith(h)) {
                u.column += f
                o = o.substr(f)
              }
            }
            const a = t.next()
            if (!a) {
              if (f > 0) {
                const t = new i(u.line, c, u.source, h, u.name)
                e.push(t)
              }
              if (t.value) {
                e.push(
                  new i(u.line, u.column, u.source, t.value, u.name || t.name)
                )
              }
            }
            s = s.substr(f)
            r += f
          } while (true)
        }
        updateHash(e) {
          this._sortReplacements()
          e.update('ReplaceSource')
          this._source.updateHash(e)
          e.update(this._name || '')
          for (const t of this._replacements) {
            e.update(`${t.start}`)
            e.update(`${t.end}`)
            e.update(`${t.content}`)
            e.update(`${t.insertIndex}`)
            e.update(`${t.name}`)
          }
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
            const e = this.replacements[this.index]
            const t = Math.floor(e.end + 1)
            this.position = t
            this.value = e.content
            this.name = e.name
          } else {
            this.index--
            if (this.index < 0) {
              this.done = true
            } else {
              const e = this.replacements[this.index]
              const t = Math.floor(e.start)
              this.position = t
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
            let e = ''
            for (let t = this.index; t >= 0; t--) {
              const n = this.replacements[t]
              e += n.content
            }
            return e
          }
        }
      }
      e.exports = ReplaceSource
    },
    271: function (e, t, n) {
      'use strict'
      const s = n(598)
      class SizeOnlySource extends s {
        constructor(e) {
          super()
          this._size = e
        }
        _error() {
          return new Error(
            'Content and Map of this Source is not available (only size() is supported)'
          )
        }
        size() {
          return this._size
        }
        source() {
          throw this._error()
        }
        buffer() {
          throw this._error()
        }
        map(e) {
          throw this._error()
        }
        updateHash() {
          throw this._error()
        }
      }
      e.exports = SizeOnlySource
    },
    598: function (e) {
      'use strict'
      class Source {
        source() {
          throw new Error('Abstract')
        }
        buffer() {
          const e = this.source()
          if (Buffer.isBuffer(e)) return e
          return Buffer.from(e, 'utf-8')
        }
        size() {
          return this.buffer().length
        }
        map(e) {
          return null
        }
        sourceAndMap(e) {
          return { source: this.source(), map: this.map(e) }
        }
        updateHash(e) {
          throw new Error('Abstract')
        }
      }
      e.exports = Source
    },
    287: function (e, t, n) {
      'use strict'
      const s = n(598)
      const { SourceNode: i, SourceMapConsumer: r } = n(241)
      const { SourceListMap: u, fromStringWithSourceMap: o } = n(728)
      const { getSourceAndMap: f, getMap: c } = n(791)
      const h = n(462)
      class SourceMapSource extends s {
        constructor(e, t, n, s, i, r) {
          super()
          const u = Buffer.isBuffer(e)
          this._valueAsString = u ? undefined : e
          this._valueAsBuffer = u ? e : undefined
          this._name = t
          this._hasSourceMap = !!n
          const o = Buffer.isBuffer(n)
          const f = typeof n === 'string'
          this._sourceMapAsObject = o || f ? undefined : n
          this._sourceMapAsString = f ? n : undefined
          this._sourceMapAsBuffer = o ? n : undefined
          this._hasOriginalSource = !!s
          const c = Buffer.isBuffer(s)
          this._originalSourceAsString = c ? undefined : s
          this._originalSourceAsBuffer = c ? s : undefined
          this._hasInnerSourceMap = !!i
          const h = Buffer.isBuffer(i)
          const a = typeof i === 'string'
          this._innerSourceMapAsObject = h || a ? undefined : i
          this._innerSourceMapAsString = a ? i : undefined
          this._innerSourceMapAsBuffer = h ? i : undefined
          this._removeOriginalSource = r
        }
        _ensureValueBuffer() {
          if (this._valueAsBuffer === undefined) {
            this._valueAsBuffer = Buffer.from(this._valueAsString, 'utf-8')
          }
        }
        _ensureValueString() {
          if (this._valueAsString === undefined) {
            this._valueAsString = this._valueAsBuffer.toString('utf-8')
          }
        }
        _ensureOriginalSourceBuffer() {
          if (
            this._originalSourceAsBuffer === undefined &&
            this._hasOriginalSource
          ) {
            this._originalSourceAsBuffer = Buffer.from(
              this._originalSourceAsString,
              'utf-8'
            )
          }
        }
        _ensureOriginalSourceString() {
          if (
            this._originalSourceAsString === undefined &&
            this._hasOriginalSource
          ) {
            this._originalSourceAsString =
              this._originalSourceAsBuffer.toString('utf-8')
          }
        }
        _ensureInnerSourceMapObject() {
          if (
            this._innerSourceMapAsObject === undefined &&
            this._hasInnerSourceMap
          ) {
            this._ensureInnerSourceMapString()
            this._innerSourceMapAsObject = JSON.parse(
              this._innerSourceMapAsString
            )
          }
        }
        _ensureInnerSourceMapBuffer() {
          if (
            this._innerSourceMapAsBuffer === undefined &&
            this._hasInnerSourceMap
          ) {
            this._ensureInnerSourceMapString()
            this._innerSourceMapAsBuffer = Buffer.from(
              this._innerSourceMapAsString,
              'utf-8'
            )
          }
        }
        _ensureInnerSourceMapString() {
          if (
            this._innerSourceMapAsString === undefined &&
            this._hasInnerSourceMap
          ) {
            if (this._innerSourceMapAsBuffer !== undefined) {
              this._innerSourceMapAsString =
                this._innerSourceMapAsBuffer.toString('utf-8')
            } else {
              this._innerSourceMapAsString = JSON.stringify(
                this._innerSourceMapAsObject
              )
            }
          }
        }
        _ensureSourceMapObject() {
          if (this._sourceMapAsObject === undefined) {
            this._ensureSourceMapString()
            this._sourceMapAsObject = JSON.parse(this._sourceMapAsString)
          }
        }
        _ensureSourceMapBuffer() {
          if (this._sourceMapAsBuffer === undefined) {
            this._ensureSourceMapString()
            this._sourceMapAsBuffer = Buffer.from(
              this._sourceMapAsString,
              'utf-8'
            )
          }
        }
        _ensureSourceMapString() {
          if (this._sourceMapAsString === undefined) {
            if (this._sourceMapAsBuffer !== undefined) {
              this._sourceMapAsString =
                this._sourceMapAsBuffer.toString('utf-8')
            } else {
              this._sourceMapAsString = JSON.stringify(this._sourceMapAsObject)
            }
          }
        }
        getArgsAsBuffers() {
          this._ensureValueBuffer()
          this._ensureSourceMapBuffer()
          this._ensureOriginalSourceBuffer()
          this._ensureInnerSourceMapBuffer()
          return [
            this._valueAsBuffer,
            this._name,
            this._sourceMapAsBuffer,
            this._originalSourceAsBuffer,
            this._innerSourceMapAsBuffer,
            this._removeOriginalSource,
          ]
        }
        source() {
          this._ensureValueString()
          return this._valueAsString
        }
        map(e) {
          if (!this._hasInnerSourceMap) {
            this._ensureSourceMapObject()
            return this._sourceMapAsObject
          }
          return c(this, e)
        }
        sourceAndMap(e) {
          if (!this._hasInnerSourceMap) {
            this._ensureValueString()
            this._ensureSourceMapObject()
            return { source: this._valueAsString, map: this._sourceMapAsObject }
          }
          return f(this, e)
        }
        node(e) {
          this._ensureValueString()
          this._ensureSourceMapObject()
          this._ensureOriginalSourceString()
          let t = i.fromStringWithSourceMap(
            this._valueAsString,
            new r(this._sourceMapAsObject)
          )
          t.setSourceContent(this._name, this._originalSourceAsString)
          if (this._hasInnerSourceMap) {
            this._ensureInnerSourceMapObject()
            t = h(
              t,
              new r(this._innerSourceMapAsObject),
              this._name,
              this._removeOriginalSource
            )
          }
          return t
        }
        listMap(e) {
          this._ensureValueString()
          this._ensureSourceMapObject()
          e = e || {}
          if (e.module === false)
            return new u(this._valueAsString, this._name, this._valueAsString)
          return o(this._valueAsString, this._sourceMapAsObject)
        }
        updateHash(e) {
          this._ensureValueBuffer()
          this._ensureSourceMapBuffer()
          this._ensureOriginalSourceBuffer()
          this._ensureInnerSourceMapBuffer()
          e.update('SourceMapSource')
          e.update(this._valueAsBuffer)
          e.update(this._sourceMapAsBuffer)
          if (this._hasOriginalSource) {
            e.update(this._originalSourceAsBuffer)
          }
          if (this._hasInnerSourceMap) {
            e.update(this._innerSourceMapAsBuffer)
          }
          e.update(this._removeOriginalSource ? 'true' : 'false')
        }
      }
      e.exports = SourceMapSource
    },
    462: function (e, t, n) {
      'use strict'
      const s = n(241).SourceNode
      const i = n(241).SourceMapConsumer
      const r = function (e, t, n, r) {
        const u = new s()
        const o = []
        const f = {}
        const c = {}
        const h = {}
        const a = {}
        t.eachMapping(
          function (e) {
            ;(c[e.generatedLine] = c[e.generatedLine] || []).push(e)
          },
          null,
          i.GENERATED_ORDER
        )
        const l = (e, t) => {
          const n = c[e]
          let s = 0
          let i = n.length
          while (s < i) {
            let e = (s + i) >> 1
            if (n[e].generatedColumn <= t) {
              s = e + 1
            } else {
              i = e
            }
          }
          if (s === 0) return undefined
          return n[s - 1]
        }
        e.walkSourceContents(function (e, t) {
          f['$' + e] = t
        })
        const d = f['$' + n]
        const p = d ? d.split('\n') : undefined
        e.walk(function (e, i) {
          if (i.source === n && i.line && c[i.line]) {
            let n = l(i.line, i.column)
            if (n) {
              let r = false
              let f
              let c
              let l
              const d = n.source
              if (
                p &&
                d &&
                (f = p[n.generatedLine - 1]) &&
                ((l = a[d]) || (c = t.sourceContentFor(d, true)))
              ) {
                if (!l) {
                  l = a[d] = c.split('\n')
                }
                const e = l[n.originalLine - 1]
                if (e) {
                  const t = i.column - n.generatedColumn
                  if (t > 0) {
                    const s = f.slice(n.generatedColumn, i.column)
                    const r = e.slice(n.originalColumn, n.originalColumn + t)
                    if (s === r) {
                      n = Object.assign({}, n, {
                        originalColumn: n.originalColumn + t,
                        generatedColumn: i.column,
                        name: undefined,
                      })
                    }
                  }
                  if (!n.name && i.name) {
                    r =
                      e.slice(
                        n.originalColumn,
                        n.originalColumn + i.name.length
                      ) === i.name
                  }
                }
              }
              let _ = n.source
              if (_ && _ !== '.') {
                o.push(
                  new s(
                    n.originalLine,
                    n.originalColumn,
                    _,
                    e,
                    r ? i.name : n.name
                  )
                )
                if (!('$' + _ in h)) {
                  h['$' + _] = true
                  const e = t.sourceContentFor(_, true)
                  if (e) {
                    u.setSourceContent(_, e)
                  }
                }
                return
              }
            }
          }
          if ((r && i.source === n) || !i.source) {
            o.push(e)
            return
          }
          const d = i.source
          o.push(new s(i.line, i.column, d, e, i.name))
          if ('$' + d in f) {
            if (!('$' + d in h)) {
              u.setSourceContent(d, f['$' + d])
              delete f['$' + d]
            }
          }
        })
        u.add(o)
        return u
      }
      e.exports = r
    },
    791: function (e, t, n) {
      'use strict'
      const { SourceNode: s, SourceMapConsumer: i } = n(241)
      const { SourceListMap: r, fromStringWithSourceMap: u } = n(728)
      t.getSourceAndMap = (e, t) => {
        let n
        let s
        if (t && t.columns === false) {
          const i = e.listMap(t).toStringWithSourceMap({ file: 'x' })
          n = i.source
          s = i.map
        } else {
          const i = e.node(t).toStringWithSourceMap({ file: 'x' })
          n = i.code
          s = i.map.toJSON()
        }
        if (!s || !s.sources || s.sources.length === 0) s = null
        return { source: n, map: s }
      }
      t.getMap = (e, t) => {
        let n
        if (t && t.columns === false) {
          n = e.listMap(t).toStringWithSourceMap({ file: 'x' }).map
        } else {
          n = e.node(t).toStringWithSourceMap({ file: 'x' }).map.toJSON()
        }
        if (!n || !n.sources || n.sources.length === 0) return null
        return n
      }
      t.getNode = (e, t) => {
        if (typeof e.node === 'function') {
          return e.node(t)
        } else {
          const n = e.sourceAndMap(t)
          if (n.map) {
            return s.fromStringWithSourceMap(n.source, new i(n.map))
          } else {
            return new s(null, null, null, n.source)
          }
        }
      }
      t.getListMap = (e, t) => {
        if (typeof e.listMap === 'function') {
          return e.listMap(t)
        } else {
          const n = e.sourceAndMap(t)
          if (n.map) {
            return u(n.source, n.map)
          } else {
            return new r(n.source)
          }
        }
      }
    },
    351: function (e, t, n) {
      const s = (e, n) => {
        let s
        Object.defineProperty(t, e, {
          get: () => {
            if (n !== undefined) {
              s = n()
              n = undefined
            }
            return s
          },
          configurable: true,
        })
      }
      s('Source', () => n(598))
      s('RawSource', () => n(891))
      s('OriginalSource', () => n(389))
      s('SourceMapSource', () => n(287))
      s('CachedSource', () => n(357))
      s('ConcatSource', () => n(944))
      s('ReplaceSource', () => n(588))
      s('PrefixSource', () => n(193))
      s('SizeOnlySource', () => n(271))
      s('CompatSource', () => n(973))
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
    var s = (t[n] = { exports: {} })
    var i = true
    try {
      e[n](s, s.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete t[n]
    }
    return s.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(351)
})()
