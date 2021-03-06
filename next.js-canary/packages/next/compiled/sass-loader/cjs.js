module.exports = (function () {
  var __webpack_modules__ = {
    613: function (e) {
      'use strict'
      e.exports = JSON.parse(
        '{"type":"object","properties":{"implementation":{"description":"The implementation of the sass to be used (https://github.com/webpack-contrib/sass-loader#implementation).","type":"object"},"sassOptions":{"description":"Options for `node-sass` or `sass` (`Dart Sass`) implementation. (https://github.com/webpack-contrib/sass-loader#implementation).","anyOf":[{"type":"object","additionalProperties":true},{"instanceof":"Function"}]},"additionalData":{"description":"Prepends/Appends `Sass`/`SCSS` code before the actual entry file (https://github.com/webpack-contrib/sass-loader#additionaldata).","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"sourceMap":{"description":"Enables/Disables generation of source maps (https://github.com/webpack-contrib/sass-loader#sourcemap).","type":"boolean"},"webpackImporter":{"description":"Enables/Disables default `webpack` importer (https://github.com/webpack-contrib/sass-loader#webpackimporter).","type":"boolean"}},"additionalProperties":false}'
      )
    },
    241: function (e, t) {
      function set(e, t, s) {
        if (typeof s.value === 'object') s.value = klona(s.value)
        if (
          !s.enumerable ||
          s.get ||
          s.set ||
          !s.configurable ||
          !s.writable ||
          t === '__proto__'
        ) {
          Object.defineProperty(e, t, s)
        } else e[t] = s.value
      }
      function klona(e) {
        if (typeof e !== 'object') return e
        var t = 0,
          s,
          n,
          r,
          o = Object.prototype.toString.call(e)
        if (o === '[object Object]') {
          r = Object.create(e.__proto__ || null)
        } else if (o === '[object Array]') {
          r = Array(e.length)
        } else if (o === '[object Set]') {
          r = new Set()
          e.forEach(function (e) {
            r.add(klona(e))
          })
        } else if (o === '[object Map]') {
          r = new Map()
          e.forEach(function (e, t) {
            r.set(klona(t), klona(e))
          })
        } else if (o === '[object Date]') {
          r = new Date(+e)
        } else if (o === '[object RegExp]') {
          r = new RegExp(e.source, e.flags)
        } else if (o === '[object DataView]') {
          r = new e.constructor(klona(e.buffer))
        } else if (o === '[object ArrayBuffer]') {
          r = e.slice(0)
        } else if (o.slice(-6) === 'Array]') {
          r = new e.constructor(e)
        }
        if (r) {
          for (n = Object.getOwnPropertySymbols(e); t < n.length; t++) {
            set(r, n[t], Object.getOwnPropertyDescriptor(e, n[t]))
          }
          for (t = 0, n = Object.getOwnPropertyNames(e); t < n.length; t++) {
            if (Object.hasOwnProperty.call(r, (s = n[t])) && r[s] === e[s])
              continue
            set(r, s, Object.getOwnPropertyDescriptor(e, s))
          }
        }
        return r || e
      }
      t.klona = klona
    },
    76: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: true })
      t.default = void 0
      class SassError extends Error {
        constructor(e) {
          super()
          this.name = 'SassError'
          this.originalSassError = e
          this.loc = { line: e.line, column: e.column }
          this.message = `${this.name}: ${this.originalSassError.message}`
          if (this.originalSassError.formatted) {
            this.message = `${
              this.name
            }: ${this.originalSassError.formatted.replace(/^Error: /, '')}`
            this.hideStack = true
            Error.captureStackTrace(this, this.constructor)
          }
        }
      }
      var s = SassError
      t.default = s
    },
    52: function (e, t, s) {
      'use strict'
      const n = s(252)
      e.exports = n.default
    },
    252: function (e, t, s) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: true })
      t.default = void 0
      var n = _interopRequireDefault(s(622))
      var r = s(286)
      var o = s(443)
      var a = _interopRequireDefault(s(613))
      var i = s(409)
      var c = _interopRequireDefault(s(76))
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function loader(e) {
        const t = (0, o.getOptions)(this)
        ;(0, r.validate)(a.default, t, {
          name: 'Sass Loader',
          baseDataPath: 'options',
        })
        const s = (0, i.getSassImplementation)(t.implementation)
        const u =
          typeof t.sourceMap === 'boolean' ? t.sourceMap : this.sourceMap
        const l = (0, i.getSassOptions)(this, t, e, s, u)
        const p =
          typeof t.webpackImporter === 'boolean' ? t.webpackImporter : true
        if (p) {
          const { includePaths: e } = l
          l.importer.push((0, i.getWebpackImporter)(this, s, e))
        }
        const d = this.async()
        const _ = (0, i.getRenderFunctionFromSassImplementation)(s)
        _(l, (e, t) => {
          if (e) {
            if (e.file) {
              this.addDependency(n.default.normalize(e.file))
            }
            d(new c.default(e))
            return
          }
          let s = t.map ? JSON.parse(t.map) : null
          if (s && u) {
            s = (0, i.normalizeSourceMap)(s, this.rootContext)
          }
          t.stats.includedFiles.forEach((e) => {
            this.addDependency(n.default.normalize(e))
          })
          d(null, t.css.toString(), s)
        })
      }
      var u = loader
      t.default = u
    },
    409: function (__unused_webpack_module, exports, __nccwpck_require__) {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.getSassImplementation = getSassImplementation
      exports.getSassOptions = getSassOptions
      exports.getWebpackResolver = getWebpackResolver
      exports.getWebpackImporter = getWebpackImporter
      exports.getRenderFunctionFromSassImplementation =
        getRenderFunctionFromSassImplementation
      exports.normalizeSourceMap = normalizeSourceMap
      var _url = _interopRequireDefault(__nccwpck_require__(835))
      var _path = _interopRequireDefault(__nccwpck_require__(622))
      var _semver = _interopRequireDefault(__nccwpck_require__(519))
      var _full = __nccwpck_require__(241)
      var _loaderUtils = __nccwpck_require__(443)
      var _neoAsync = _interopRequireDefault(__nccwpck_require__(386))
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function getDefaultSassImplementation() {
        let sassImplPkg = 'sass'
        try {
          require.resolve('sass')
        } catch (error) {
          try {
            eval("require.resolve('node-sass')")
            sassImplPkg = 'node-sass'
          } catch (e) {
            sassImplPkg = 'sass'
          }
        }
        return require(sassImplPkg)
      }
      function getSassImplementation(e) {
        let t = e
        if (!t) {
          t = getDefaultSassImplementation()
        }
        const { info: s } = t
        if (!s) {
          throw new Error('Unknown Sass implementation.')
        }
        const n = s.split('\t')
        if (n.length < 2) {
          throw new Error(`Unknown Sass implementation "${s}".`)
        }
        const [r, o] = n
        if (r === 'dart-sass') {
          if (!_semver.default.satisfies(o, '^1.3.0')) {
            throw new Error(
              `Dart Sass version ${o} is incompatible with ^1.3.0.`
            )
          }
          return t
        } else if (r === 'node-sass') {
          if (!_semver.default.satisfies(o, '^4.0.0 || ^5.0.0')) {
            throw new Error(
              `Node Sass version ${o} is incompatible with ^4.0.0 || ^5.0.0.`
            )
          }
          return t
        }
        throw new Error(`Unknown Sass implementation "${r}".`)
      }
      function isProductionLikeMode(e) {
        return e.mode === 'production' || !e.mode
      }
      function proxyCustomImporters(e, t) {
        return [].concat(e).map((e) => {
          return function proxyImporter(...s) {
            this.webpackLoaderContext = t
            return e.apply(this, s)
          }
        })
      }
      function getSassOptions(e, t, s, n, r) {
        const o = (0, _full.klona)(
          t.sassOptions
            ? typeof t.sassOptions === 'function'
              ? t.sassOptions(e) || {}
              : t.sassOptions
            : {}
        )
        const a = n.info.includes('dart-sass')
        if (a) {
          const e = !o.fiber && o.fiber !== false
          if (e) {
            let e
            try {
              e = require.resolve('fibers')
            } catch (e) {}
            if (e) {
              o.fiber = require(e)
            }
          } else if (o.fiber === false) {
            delete o.fiber
          }
        } else {
          delete o.fiber
        }
        o.file = e.resourcePath
        o.data = t.additionalData
          ? typeof t.additionalData === 'function'
            ? t.additionalData(s, e)
            : `${t.additionalData}\n${s}`
          : s
        if (!o.outputStyle && isProductionLikeMode(e)) {
          o.outputStyle = 'compressed'
        }
        if (r) {
          o.sourceMap = true
          o.outFile = _path.default.join(e.rootContext, 'style.css.map')
          o.sourceMapContents = true
          o.omitSourceMapUrl = true
          o.sourceMapEmbed = false
        }
        const { resourcePath: i } = e
        const c = _path.default.extname(i)
        if (
          c &&
          c.toLowerCase() === '.sass' &&
          typeof o.indentedSyntax === 'undefined'
        ) {
          o.indentedSyntax = true
        } else {
          o.indentedSyntax = Boolean(o.indentedSyntax)
        }
        o.importer = o.importer
          ? proxyCustomImporters(
              Array.isArray(o.importer) ? o.importer : [o.importer],
              e
            )
          : []
        o.includePaths = []
          .concat(process.cwd())
          .concat(o.includePaths || [])
          .concat(
            process.env.SASS_PATH
              ? process.env.SASS_PATH.split(
                  process.platform === 'win32' ? ';' : ':'
                )
              : []
          )
        return o
      }
      const isModuleImport =
        /^~([^/]+|[^/]+\/|@[^/]+[/][^/]+|@[^/]+\/?|@[^/]+[/][^/]+\/)$/
      function getPossibleRequests(e, t = false, s = false) {
        const n = (0, _loaderUtils.urlToRequest)(e, t && s)
        if (t && isModuleImport.test(e)) {
          return [...new Set([n, e])]
        }
        const r = _path.default.extname(n).toLowerCase()
        if (r === '.css') {
          return []
        }
        const o = _path.default.dirname(n)
        const a = _path.default.basename(n)
        return [
          ...new Set(
            [`${o}/_${a}`, n].concat(
              t ? [`${_path.default.dirname(e)}/_${a}`, e] : []
            )
          ),
        ]
      }
      function promiseResolve(e) {
        return (t, s) =>
          new Promise((n, r) => {
            e(t, s, (e, t) => {
              if (e) {
                r(e)
              } else {
                n(t)
              }
            })
          })
      }
      const IS_SPECIAL_MODULE_IMPORT = /^~[^/]+$/
      const IS_NATIVE_WIN32_PATH = /^[a-z]:[/\\]|^\\\\/i
      function getWebpackResolver(e, t, s = [], n = false) {
        async function startResolving(e) {
          if (e.length === 0) {
            return Promise.reject()
          }
          const [{ possibleRequests: t }] = e
          if (t.length === 0) {
            return Promise.reject()
          }
          const [{ resolve: s, context: n }] = e
          try {
            return await s(n, t[0])
          } catch (s) {
            const [, ...n] = t
            if (n.length === 0) {
              const [, ...t] = e
              return startResolving(t)
            }
            e[0].possibleRequests = n
            return startResolving(e)
          }
        }
        const r = t.info.includes('dart-sass')
        const o = promiseResolve(
          e({
            alias: [],
            aliasFields: [],
            conditionNames: [],
            descriptionFiles: [],
            extensions: ['.sass', '.scss', '.css'],
            exportsFields: [],
            mainFields: [],
            mainFiles: ['_index', 'index'],
            modules: [],
            restrictions: [/\.((sa|sc|c)ss)$/i],
          })
        )
        const a = promiseResolve(
          e({
            conditionNames: ['sass', 'style'],
            mainFields: ['sass', 'style', 'main', '...'],
            mainFiles: ['_index', 'index', '...'],
            extensions: ['.sass', '.scss', '.css'],
            restrictions: [/\.((sa|sc|c)ss)$/i],
          })
        )
        return (e, t) => {
          const i = t
          const c = i.slice(0, 5).toLowerCase() === 'file:'
          if (c) {
            try {
              t = _url.default.fileURLToPath(i)
            } catch (e) {
              t = t.slice(7)
            }
          }
          let u = []
          const l =
            !IS_SPECIAL_MODULE_IMPORT.test(t) &&
            !c &&
            !i.startsWith('/') &&
            !IS_NATIVE_WIN32_PATH.test(i)
          if (s.length > 0 && l) {
            const n = getPossibleRequests(t)
            if (!r) {
              u = u.concat({
                resolve: o,
                context: _path.default.dirname(e),
                possibleRequests: n,
              })
            }
            u = u.concat(
              s.map((e) => ({ resolve: o, context: e, possibleRequests: n }))
            )
          }
          const p = getPossibleRequests(t, true, n)
          u = u.concat({
            resolve: a,
            context: _path.default.dirname(e),
            possibleRequests: p,
          })
          return startResolving(u)
        }
      }
      const matchCss = /\.css$/i
      function getWebpackImporter(e, t, s) {
        const n = getWebpackResolver(e.getResolve, t, s, e.rootContext)
        return (t, s, r) => {
          n(s, t)
            .then((t) => {
              e.addDependency(_path.default.normalize(t))
              r({ file: t.replace(matchCss, '') })
            })
            .catch(() => {
              r({ file: t })
            })
        }
      }
      let nodeSassJobQueue = null
      function getRenderFunctionFromSassImplementation(e) {
        const t = e.info.includes('dart-sass')
        if (t) {
          return e.render.bind(e)
        }
        if (nodeSassJobQueue === null) {
          const t = Number(process.env.UV_THREADPOOL_SIZE || 4)
          nodeSassJobQueue = _neoAsync.default.queue(e.render.bind(e), t - 1)
        }
        return nodeSassJobQueue.push.bind(nodeSassJobQueue)
      }
      const ABSOLUTE_SCHEME = /^[A-Za-z0-9+\-.]+:/
      function getURLType(e) {
        if (e[0] === '/') {
          if (e[1] === '/') {
            return 'scheme-relative'
          }
          return 'path-absolute'
        }
        if (IS_NATIVE_WIN32_PATH.test(e)) {
          return 'path-absolute'
        }
        return ABSOLUTE_SCHEME.test(e) ? 'absolute' : 'path-relative'
      }
      function normalizeSourceMap(e, t) {
        const s = e
        delete s.file
        s.sourceRoot = ''
        s.sources = s.sources.map((e) => {
          const s = getURLType(e)
          if (s === 'path-relative') {
            return _path.default.resolve(t, _path.default.normalize(e))
          }
          return e
        })
        return s
      }
    },
    443: function (e) {
      'use strict'
      e.exports = require('next/dist/compiled/loader-utils')
    },
    386: function (e) {
      'use strict'
      e.exports = require('next/dist/compiled/neo-async')
    },
    286: function (e) {
      'use strict'
      e.exports = require('next/dist/compiled/schema-utils3')
    },
    519: function (e) {
      'use strict'
      e.exports = require('next/dist/compiled/semver')
    },
    622: function (e) {
      'use strict'
      e.exports = require('path')
    },
    835: function (e) {
      'use strict'
      e.exports = require('url')
    },
  }
  var __webpack_module_cache__ = {}
  function __nccwpck_require__(e) {
    if (__webpack_module_cache__[e]) {
      return __webpack_module_cache__[e].exports
    }
    var t = (__webpack_module_cache__[e] = { exports: {} })
    var s = true
    try {
      __webpack_modules__[e](t, t.exports, __nccwpck_require__)
      s = false
    } finally {
      if (s) delete __webpack_module_cache__[e]
    }
    return t.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(52)
})()
