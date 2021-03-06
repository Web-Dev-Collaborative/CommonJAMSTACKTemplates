module.exports = (() => {
  var e = {
    933: (e) => {
      'use strict'
      var t = Object.prototype.hasOwnProperty,
        r = '~'
      function Events() {}
      if (Object.create) {
        Events.prototype = Object.create(null)
        if (!new Events().__proto__) r = false
      }
      function EE(e, t, r) {
        this.fn = e
        this.context = t
        this.once = r || false
      }
      function addListener(e, t, o, n, s) {
        if (typeof o !== 'function') {
          throw new TypeError('The listener must be a function')
        }
        var i = new EE(o, n || e, s),
          a = r ? r + t : t
        if (!e._events[a]) (e._events[a] = i), e._eventsCount++
        else if (!e._events[a].fn) e._events[a].push(i)
        else e._events[a] = [e._events[a], i]
        return e
      }
      function clearEvent(e, t) {
        if (--e._eventsCount === 0) e._events = new Events()
        else delete e._events[t]
      }
      function EventEmitter() {
        this._events = new Events()
        this._eventsCount = 0
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        var e = [],
          o,
          n
        if (this._eventsCount === 0) return e
        for (n in (o = this._events)) {
          if (t.call(o, n)) e.push(r ? n.slice(1) : n)
        }
        if (Object.getOwnPropertySymbols) {
          return e.concat(Object.getOwnPropertySymbols(o))
        }
        return e
      }
      EventEmitter.prototype.listeners = function listeners(e) {
        var t = r ? r + e : e,
          o = this._events[t]
        if (!o) return []
        if (o.fn) return [o.fn]
        for (var n = 0, s = o.length, i = new Array(s); n < s; n++) {
          i[n] = o[n].fn
        }
        return i
      }
      EventEmitter.prototype.listenerCount = function listenerCount(e) {
        var t = r ? r + e : e,
          o = this._events[t]
        if (!o) return 0
        if (o.fn) return 1
        return o.length
      }
      EventEmitter.prototype.emit = function emit(e, t, o, n, s, i) {
        var a = r ? r + e : e
        if (!this._events[a]) return false
        var c = this._events[a],
          f = arguments.length,
          u,
          h
        if (c.fn) {
          if (c.once) this.removeListener(e, c.fn, undefined, true)
          switch (f) {
            case 1:
              return c.fn.call(c.context), true
            case 2:
              return c.fn.call(c.context, t), true
            case 3:
              return c.fn.call(c.context, t, o), true
            case 4:
              return c.fn.call(c.context, t, o, n), true
            case 5:
              return c.fn.call(c.context, t, o, n, s), true
            case 6:
              return c.fn.call(c.context, t, o, n, s, i), true
          }
          for (h = 1, u = new Array(f - 1); h < f; h++) {
            u[h - 1] = arguments[h]
          }
          c.fn.apply(c.context, u)
        } else {
          var p = c.length,
            d
          for (h = 0; h < p; h++) {
            if (c[h].once) this.removeListener(e, c[h].fn, undefined, true)
            switch (f) {
              case 1:
                c[h].fn.call(c[h].context)
                break
              case 2:
                c[h].fn.call(c[h].context, t)
                break
              case 3:
                c[h].fn.call(c[h].context, t, o)
                break
              case 4:
                c[h].fn.call(c[h].context, t, o, n)
                break
              default:
                if (!u)
                  for (d = 1, u = new Array(f - 1); d < f; d++) {
                    u[d - 1] = arguments[d]
                  }
                c[h].fn.apply(c[h].context, u)
            }
          }
        }
        return true
      }
      EventEmitter.prototype.on = function on(e, t, r) {
        return addListener(this, e, t, r, false)
      }
      EventEmitter.prototype.once = function once(e, t, r) {
        return addListener(this, e, t, r, true)
      }
      EventEmitter.prototype.removeListener = function removeListener(
        e,
        t,
        o,
        n
      ) {
        var s = r ? r + e : e
        if (!this._events[s]) return this
        if (!t) {
          clearEvent(this, s)
          return this
        }
        var i = this._events[s]
        if (i.fn) {
          if (i.fn === t && (!n || i.once) && (!o || i.context === o)) {
            clearEvent(this, s)
          }
        } else {
          for (var a = 0, c = [], f = i.length; a < f; a++) {
            if (
              i[a].fn !== t ||
              (n && !i[a].once) ||
              (o && i[a].context !== o)
            ) {
              c.push(i[a])
            }
          }
          if (c.length) this._events[s] = c.length === 1 ? c[0] : c
          else clearEvent(this, s)
        }
        return this
      }
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(
        e
      ) {
        var t
        if (e) {
          t = r ? r + e : e
          if (this._events[t]) clearEvent(this, t)
        } else {
          this._events = new Events()
          this._eventsCount = 0
        }
        return this
      }
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener
      EventEmitter.prototype.addListener = EventEmitter.prototype.on
      EventEmitter.prefixed = r
      EventEmitter.EventEmitter = EventEmitter
      if (true) {
        e.exports = EventEmitter
      }
    },
    382: (e, t, r) => {
      var o = r(835)
      var n = o.URL
      var s = r(605)
      var i = r(211)
      var a = r(357)
      var c = r(413).Writable
      var f = r(185)('follow-redirects')
      var u = { GET: true, HEAD: true, OPTIONS: true, TRACE: true }
      var h = Object.create(null)
      ;['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'].forEach(
        function (e) {
          h[e] = function (t, r, o) {
            this._redirectable.emit(e, t, r, o)
          }
        }
      )
      function RedirectableRequest(e, t) {
        c.call(this)
        this._sanitizeOptions(e)
        this._options = e
        this._ended = false
        this._ending = false
        this._redirectCount = 0
        this._redirects = []
        this._requestBodyLength = 0
        this._requestBodyBuffers = []
        if (t) {
          this.on('response', t)
        }
        var r = this
        this._onNativeResponse = function (e) {
          r._processResponse(e)
        }
        this._performRequest()
      }
      RedirectableRequest.prototype = Object.create(c.prototype)
      RedirectableRequest.prototype.write = function (e, t, r) {
        if (this._ending) {
          throw new Error('write after end')
        }
        if (
          !(typeof e === 'string' || (typeof e === 'object' && 'length' in e))
        ) {
          throw new Error('data should be a string, Buffer or Uint8Array')
        }
        if (typeof t === 'function') {
          r = t
          t = null
        }
        if (e.length === 0) {
          if (r) {
            r()
          }
          return
        }
        if (this._requestBodyLength + e.length <= this._options.maxBodyLength) {
          this._requestBodyLength += e.length
          this._requestBodyBuffers.push({ data: e, encoding: t })
          this._currentRequest.write(e, t, r)
        } else {
          this.emit(
            'error',
            new Error('Request body larger than maxBodyLength limit')
          )
          this.abort()
        }
      }
      RedirectableRequest.prototype.end = function (e, t, r) {
        if (typeof e === 'function') {
          r = e
          e = t = null
        } else if (typeof t === 'function') {
          r = t
          t = null
        }
        if (!e) {
          this._ended = this._ending = true
          this._currentRequest.end(null, null, r)
        } else {
          var o = this
          var n = this._currentRequest
          this.write(e, t, function () {
            o._ended = true
            n.end(null, null, r)
          })
          this._ending = true
        }
      }
      RedirectableRequest.prototype.setHeader = function (e, t) {
        this._options.headers[e] = t
        this._currentRequest.setHeader(e, t)
      }
      RedirectableRequest.prototype.removeHeader = function (e) {
        delete this._options.headers[e]
        this._currentRequest.removeHeader(e)
      }
      RedirectableRequest.prototype.setTimeout = function (e, t) {
        if (t) {
          this.once('timeout', t)
        }
        if (this.socket) {
          startTimer(this, e)
        } else {
          var r = this
          this._currentRequest.once('socket', function () {
            startTimer(r, e)
          })
        }
        this.once('response', clearTimer)
        this.once('error', clearTimer)
        return this
      }
      function startTimer(e, t) {
        clearTimeout(e._timeout)
        e._timeout = setTimeout(function () {
          e.emit('timeout')
        }, t)
      }
      function clearTimer() {
        clearTimeout(this._timeout)
      }
      ;[
        'abort',
        'flushHeaders',
        'getHeader',
        'setNoDelay',
        'setSocketKeepAlive',
      ].forEach(function (e) {
        RedirectableRequest.prototype[e] = function (t, r) {
          return this._currentRequest[e](t, r)
        }
      })
      ;['aborted', 'connection', 'socket'].forEach(function (e) {
        Object.defineProperty(RedirectableRequest.prototype, e, {
          get: function () {
            return this._currentRequest[e]
          },
        })
      })
      RedirectableRequest.prototype._sanitizeOptions = function (e) {
        if (!e.headers) {
          e.headers = {}
        }
        if (e.host) {
          if (!e.hostname) {
            e.hostname = e.host
          }
          delete e.host
        }
        if (!e.pathname && e.path) {
          var t = e.path.indexOf('?')
          if (t < 0) {
            e.pathname = e.path
          } else {
            e.pathname = e.path.substring(0, t)
            e.search = e.path.substring(t)
          }
        }
      }
      RedirectableRequest.prototype._performRequest = function () {
        var e = this._options.protocol
        var t = this._options.nativeProtocols[e]
        if (!t) {
          this.emit('error', new Error('Unsupported protocol ' + e))
          return
        }
        if (this._options.agents) {
          var r = e.substr(0, e.length - 1)
          this._options.agent = this._options.agents[r]
        }
        var n = (this._currentRequest = t.request(
          this._options,
          this._onNativeResponse
        ))
        this._currentUrl = o.format(this._options)
        n._redirectable = this
        for (var s in h) {
          if (s) {
            n.on(s, h[s])
          }
        }
        if (this._isRedirect) {
          var i = 0
          var a = this
          var c = this._requestBodyBuffers
          ;(function writeNext(e) {
            if (n === a._currentRequest) {
              if (e) {
                a.emit('error', e)
              } else if (i < c.length) {
                var t = c[i++]
                if (!n.finished) {
                  n.write(t.data, t.encoding, writeNext)
                }
              } else if (a._ended) {
                n.end()
              }
            }
          })()
        }
      }
      RedirectableRequest.prototype._processResponse = function (e) {
        var t = e.statusCode
        if (this._options.trackRedirects) {
          this._redirects.push({
            url: this._currentUrl,
            headers: e.headers,
            statusCode: t,
          })
        }
        var r = e.headers.location
        if (
          r &&
          this._options.followRedirects !== false &&
          t >= 300 &&
          t < 400
        ) {
          this._currentRequest.removeAllListeners()
          this._currentRequest.on('error', noop)
          this._currentRequest.abort()
          e.destroy()
          if (++this._redirectCount > this._options.maxRedirects) {
            this.emit('error', new Error('Max redirects exceeded.'))
            return
          }
          var n
          var s = this._options.headers
          if (t !== 307 && !(this._options.method in u)) {
            this._options.method = 'GET'
            this._requestBodyBuffers = []
            for (n in s) {
              if (/^content-/i.test(n)) {
                delete s[n]
              }
            }
          }
          if (!this._isRedirect) {
            for (n in s) {
              if (/^host$/i.test(n)) {
                delete s[n]
              }
            }
          }
          var i = o.resolve(this._currentUrl, r)
          f('redirecting to', i)
          Object.assign(this._options, o.parse(i))
          if (typeof this._options.beforeRedirect === 'function') {
            try {
              this._options.beforeRedirect.call(null, this._options)
            } catch (e) {
              this.emit('error', e)
              return
            }
            this._sanitizeOptions(this._options)
          }
          this._isRedirect = true
          this._performRequest()
        } else {
          e.responseUrl = this._currentUrl
          e.redirects = this._redirects
          this.emit('response', e)
          this._requestBodyBuffers = []
        }
      }
      function wrap(e) {
        var t = { maxRedirects: 21, maxBodyLength: 10 * 1024 * 1024 }
        var r = {}
        Object.keys(e).forEach(function (s) {
          var i = s + ':'
          var c = (r[i] = e[s])
          var u = (t[s] = Object.create(c))
          u.request = function (e, s, c) {
            if (typeof e === 'string') {
              var u = e
              try {
                e = urlToOptions(new n(u))
              } catch (t) {
                e = o.parse(u)
              }
            } else if (n && e instanceof n) {
              e = urlToOptions(e)
            } else {
              c = s
              s = e
              e = { protocol: i }
            }
            if (typeof s === 'function') {
              c = s
              s = null
            }
            s = Object.assign(
              { maxRedirects: t.maxRedirects, maxBodyLength: t.maxBodyLength },
              e,
              s
            )
            s.nativeProtocols = r
            a.equal(s.protocol, i, 'protocol mismatch')
            f('options', s)
            return new RedirectableRequest(s, c)
          }
          u.get = function (e, t, r) {
            var o = u.request(e, t, r)
            o.end()
            return o
          }
        })
        return t
      }
      function noop() {}
      function urlToOptions(e) {
        var t = {
          protocol: e.protocol,
          hostname: e.hostname.startsWith('[')
            ? e.hostname.slice(1, -1)
            : e.hostname,
          hash: e.hash,
          search: e.search,
          pathname: e.pathname,
          path: e.pathname + e.search,
          href: e.href,
        }
        if (e.port !== '') {
          t.port = Number(e.port)
        }
        return t
      }
      e.exports = wrap({ http: s, https: i })
      e.exports.wrap = wrap
    },
    737: (e, t, r) => {
      e.exports = r(825)
    },
    825: (e, t, r) => {
      var o = r(130).Server
      function createProxyServer(e) {
        return new o(e)
      }
      o.createProxyServer = createProxyServer
      o.createServer = createProxyServer
      o.createProxy = createProxyServer
      e.exports = o
    },
    658: (e, t, r) => {
      var o = t,
        n = r(835),
        s = r(669)._extend,
        i = r(543)
      var a = /(^|,)\s*upgrade\s*($|,)/i,
        c = /^https|wss/
      o.isSSL = c
      o.setupOutgoing = function (e, t, r, f) {
        e.port =
          t[f || 'target'].port ||
          (c.test(t[f || 'target'].protocol) ? 443 : 80)
        ;[
          'host',
          'hostname',
          'socketPath',
          'pfx',
          'key',
          'passphrase',
          'cert',
          'ca',
          'ciphers',
          'secureProtocol',
        ].forEach(function (r) {
          e[r] = t[f || 'target'][r]
        })
        e.method = t.method || r.method
        e.headers = s({}, r.headers)
        if (t.headers) {
          s(e.headers, t.headers)
        }
        if (t.auth) {
          e.auth = t.auth
        }
        if (t.ca) {
          e.ca = t.ca
        }
        if (c.test(t[f || 'target'].protocol)) {
          e.rejectUnauthorized =
            typeof t.secure === 'undefined' ? true : t.secure
        }
        e.agent = t.agent || false
        e.localAddress = t.localAddress
        if (!e.agent) {
          e.headers = e.headers || {}
          if (
            typeof e.headers.connection !== 'string' ||
            !a.test(e.headers.connection)
          ) {
            e.headers.connection = 'close'
          }
        }
        var u = t[f || 'target']
        var h = u && t.prependPath !== false ? u.path || '' : ''
        var p = !t.toProxy ? n.parse(r.url).path || '' : r.url
        p = !t.ignorePath ? p : ''
        e.path = o.urlJoin(h, p)
        if (t.changeOrigin) {
          e.headers.host =
            i(e.port, t[f || 'target'].protocol) && !hasPort(e.host)
              ? e.host + ':' + e.port
              : e.host
        }
        return e
      }
      o.setupSocket = function (e) {
        e.setTimeout(0)
        e.setNoDelay(true)
        e.setKeepAlive(true, 0)
        return e
      }
      o.getPort = function (e) {
        var t = e.headers.host ? e.headers.host.match(/:(\d+)/) : ''
        return t ? t[1] : o.hasEncryptedConnection(e) ? '443' : '80'
      }
      o.hasEncryptedConnection = function (e) {
        return Boolean(e.connection.encrypted || e.connection.pair)
      }
      o.urlJoin = function () {
        var e = Array.prototype.slice.call(arguments),
          t = e.length - 1,
          r = e[t],
          o = r.split('?'),
          n
        e[t] = o.shift()
        n = [
          e
            .filter(Boolean)
            .join('/')
            .replace(/\/+/g, '/')
            .replace('http:/', 'http://')
            .replace('https:/', 'https://'),
        ]
        n.push.apply(n, o)
        return n.join('?')
      }
      o.rewriteCookieProperty = function rewriteCookieProperty(e, t, r) {
        if (Array.isArray(e)) {
          return e.map(function (e) {
            return rewriteCookieProperty(e, t, r)
          })
        }
        return e.replace(
          new RegExp('(;\\s*' + r + '=)([^;]+)', 'i'),
          function (e, r, o) {
            var n
            if (o in t) {
              n = t[o]
            } else if ('*' in t) {
              n = t['*']
            } else {
              return e
            }
            if (n) {
              return r + n
            } else {
              return ''
            }
          }
        )
      }
      function hasPort(e) {
        return !!~e.indexOf(':')
      }
    },
    130: (e, t, r) => {
      var o = e.exports,
        n = r(669)._extend,
        s = r(835).parse,
        i = r(933),
        a = r(605),
        c = r(211),
        f = r(373),
        u = r(257)
      o.Server = ProxyServer
      function createRightProxy(e) {
        return function (t) {
          return function (r, o) {
            var i = e === 'ws' ? this.wsPasses : this.webPasses,
              a = [].slice.call(arguments),
              c = a.length - 1,
              f,
              u
            if (typeof a[c] === 'function') {
              u = a[c]
              c--
            }
            var h = t
            if (!(a[c] instanceof Buffer) && a[c] !== o) {
              h = n({}, t)
              n(h, a[c])
              c--
            }
            if (a[c] instanceof Buffer) {
              f = a[c]
            }
            ;['target', 'forward'].forEach(function (e) {
              if (typeof h[e] === 'string') h[e] = s(h[e])
            })
            if (!h.target && !h.forward) {
              return this.emit(
                'error',
                new Error('Must provide a proper URL as target')
              )
            }
            for (var p = 0; p < i.length; p++) {
              if (i[p](r, o, h, f, this, u)) {
                break
              }
            }
          }
        }
      }
      o.createRightProxy = createRightProxy
      function ProxyServer(e) {
        i.call(this)
        e = e || {}
        e.prependPath = e.prependPath === false ? false : true
        this.web = this.proxyRequest = createRightProxy('web')(e)
        this.ws = this.proxyWebsocketRequest = createRightProxy('ws')(e)
        this.options = e
        this.webPasses = Object.keys(f).map(function (e) {
          return f[e]
        })
        this.wsPasses = Object.keys(u).map(function (e) {
          return u[e]
        })
        this.on('error', this.onError, this)
      }
      r(669).inherits(ProxyServer, i)
      ProxyServer.prototype.onError = function (e) {
        if (this.listeners('error').length === 1) {
          throw e
        }
      }
      ProxyServer.prototype.listen = function (e, t) {
        var r = this,
          o = function (e, t) {
            r.web(e, t)
          }
        this._server = this.options.ssl
          ? c.createServer(this.options.ssl, o)
          : a.createServer(o)
        if (this.options.ws) {
          this._server.on('upgrade', function (e, t, o) {
            r.ws(e, t, o)
          })
        }
        this._server.listen(e, t)
        return this
      }
      ProxyServer.prototype.close = function (e) {
        var t = this
        if (this._server) {
          this._server.close(done)
        }
        function done() {
          t._server = null
          if (e) {
            e.apply(null, arguments)
          }
        }
      }
      ProxyServer.prototype.before = function (e, t, r) {
        if (e !== 'ws' && e !== 'web') {
          throw new Error('type must be `web` or `ws`')
        }
        var o = e === 'ws' ? this.wsPasses : this.webPasses,
          n = false
        o.forEach(function (e, r) {
          if (e.name === t) n = r
        })
        if (n === false) throw new Error('No such pass')
        o.splice(n, 0, r)
      }
      ProxyServer.prototype.after = function (e, t, r) {
        if (e !== 'ws' && e !== 'web') {
          throw new Error('type must be `web` or `ws`')
        }
        var o = e === 'ws' ? this.wsPasses : this.webPasses,
          n = false
        o.forEach(function (e, r) {
          if (e.name === t) n = r
        })
        if (n === false) throw new Error('No such pass')
        o.splice(n++, 0, r)
      }
    },
    373: (e, t, r) => {
      var o = r(605),
        n = r(211),
        s = r(773),
        i = r(658),
        a = r(382)
      s = Object.keys(s).map(function (e) {
        return s[e]
      })
      var c = { http: o, https: n }
      e.exports = {
        deleteLength: function deleteLength(e, t, r) {
          if (
            (e.method === 'DELETE' || e.method === 'OPTIONS') &&
            !e.headers['content-length']
          ) {
            e.headers['content-length'] = '0'
            delete e.headers['transfer-encoding']
          }
        },
        timeout: function timeout(e, t, r) {
          if (r.timeout) {
            e.socket.setTimeout(r.timeout)
          }
        },
        XHeaders: function XHeaders(e, t, r) {
          if (!r.xfwd) return
          var o = e.isSpdy || i.hasEncryptedConnection(e)
          var n = {
            for: e.connection.remoteAddress || e.socket.remoteAddress,
            port: i.getPort(e),
            proto: o ? 'https' : 'http',
          }
          ;['for', 'port', 'proto'].forEach(function (t) {
            e.headers['x-forwarded-' + t] =
              (e.headers['x-forwarded-' + t] || '') +
              (e.headers['x-forwarded-' + t] ? ',' : '') +
              n[t]
          })
          e.headers['x-forwarded-host'] =
            e.headers['x-forwarded-host'] || e.headers['host'] || ''
        },
        stream: function stream(e, t, r, o, n, f) {
          n.emit('start', e, t, r.target || r.forward)
          var u = r.followRedirects ? a : c
          var h = u.http
          var p = u.https
          if (r.forward) {
            var d = (r.forward.protocol === 'https:' ? p : h).request(
              i.setupOutgoing(r.ssl || {}, r, e, 'forward')
            )
            var l = createErrorHandler(d, r.forward)
            e.on('error', l)
            d.on('error', l)
            ;(r.buffer || e).pipe(d)
            if (!r.target) {
              return t.end()
            }
          }
          var v = (r.target.protocol === 'https:' ? p : h).request(
            i.setupOutgoing(r.ssl || {}, r, e)
          )
          v.on('socket', function (o) {
            if (n && !v.getHeader('expect')) {
              n.emit('proxyReq', v, e, t, r)
            }
          })
          if (r.proxyTimeout) {
            v.setTimeout(r.proxyTimeout, function () {
              v.abort()
            })
          }
          e.on('aborted', function () {
            v.abort()
          })
          var m = createErrorHandler(v, r.target)
          e.on('error', m)
          v.on('error', m)
          function createErrorHandler(r, o) {
            return function proxyError(s) {
              if (e.socket.destroyed && s.code === 'ECONNRESET') {
                n.emit('econnreset', s, e, t, o)
                return r.abort()
              }
              if (f) {
                f(s, e, t, o)
              } else {
                n.emit('error', s, e, t, o)
              }
            }
          }
          ;(r.buffer || e).pipe(v)
          v.on('response', function (o) {
            if (n) {
              n.emit('proxyRes', o, e, t)
            }
            if (!t.headersSent && !r.selfHandleResponse) {
              for (var i = 0; i < s.length; i++) {
                if (s[i](e, t, o, r)) {
                  break
                }
              }
            }
            if (!t.finished) {
              o.on('end', function () {
                if (n) n.emit('end', e, t, o)
              })
              if (!r.selfHandleResponse) o.pipe(t)
            } else {
              if (n) n.emit('end', e, t, o)
            }
          })
        },
      }
    },
    773: (e, t, r) => {
      var o = r(835),
        n = r(658)
      var s = /^201|30(1|2|7|8)$/
      e.exports = {
        removeChunked: function removeChunked(e, t, r) {
          if (e.httpVersion === '1.0') {
            delete r.headers['transfer-encoding']
          }
        },
        setConnection: function setConnection(e, t, r) {
          if (e.httpVersion === '1.0') {
            r.headers.connection = e.headers.connection || 'close'
          } else if (e.httpVersion !== '2.0' && !r.headers.connection) {
            r.headers.connection = e.headers.connection || 'keep-alive'
          }
        },
        setRedirectHostRewrite: function setRedirectHostRewrite(e, t, r, n) {
          if (
            (n.hostRewrite || n.autoRewrite || n.protocolRewrite) &&
            r.headers['location'] &&
            s.test(r.statusCode)
          ) {
            var i = o.parse(n.target)
            var a = o.parse(r.headers['location'])
            if (i.host != a.host) {
              return
            }
            if (n.hostRewrite) {
              a.host = n.hostRewrite
            } else if (n.autoRewrite) {
              a.host = e.headers['host']
            }
            if (n.protocolRewrite) {
              a.protocol = n.protocolRewrite
            }
            r.headers['location'] = a.format()
          }
        },
        writeHeaders: function writeHeaders(e, t, r, o) {
          var s = o.cookieDomainRewrite,
            i = o.cookiePathRewrite,
            a = o.preserveHeaderKeyCase,
            c,
            f = function (e, r) {
              if (r == undefined) return
              if (s && e.toLowerCase() === 'set-cookie') {
                r = n.rewriteCookieProperty(r, s, 'domain')
              }
              if (i && e.toLowerCase() === 'set-cookie') {
                r = n.rewriteCookieProperty(r, i, 'path')
              }
              t.setHeader(String(e).trim(), r)
            }
          if (typeof s === 'string') {
            s = { '*': s }
          }
          if (typeof i === 'string') {
            i = { '*': i }
          }
          if (a && r.rawHeaders != undefined) {
            c = {}
            for (var u = 0; u < r.rawHeaders.length; u += 2) {
              var h = r.rawHeaders[u]
              c[h.toLowerCase()] = h
            }
          }
          Object.keys(r.headers).forEach(function (e) {
            var t = r.headers[e]
            if (a && c) {
              e = c[e] || e
            }
            f(e, t)
          })
        },
        writeStatusCode: function writeStatusCode(e, t, r) {
          if (r.statusMessage) {
            t.statusCode = r.statusCode
            t.statusMessage = r.statusMessage
          } else {
            t.statusCode = r.statusCode
          }
        },
      }
    },
    257: (e, t, r) => {
      var o = r(605),
        n = r(211),
        s = r(658)
      e.exports = {
        checkMethodAndHeader: function checkMethodAndHeader(e, t) {
          if (e.method !== 'GET' || !e.headers.upgrade) {
            t.destroy()
            return true
          }
          if (e.headers.upgrade.toLowerCase() !== 'websocket') {
            t.destroy()
            return true
          }
        },
        XHeaders: function XHeaders(e, t, r) {
          if (!r.xfwd) return
          var o = {
            for: e.connection.remoteAddress || e.socket.remoteAddress,
            port: s.getPort(e),
            proto: s.hasEncryptedConnection(e) ? 'wss' : 'ws',
          }
          ;['for', 'port', 'proto'].forEach(function (t) {
            e.headers['x-forwarded-' + t] =
              (e.headers['x-forwarded-' + t] || '') +
              (e.headers['x-forwarded-' + t] ? ',' : '') +
              o[t]
          })
        },
        stream: function stream(e, t, r, i, a, c) {
          var f = function (e, t) {
            return (
              Object.keys(t)
                .reduce(
                  function (e, r) {
                    var o = t[r]
                    if (!Array.isArray(o)) {
                      e.push(r + ': ' + o)
                      return e
                    }
                    for (var n = 0; n < o.length; n++) {
                      e.push(r + ': ' + o[n])
                    }
                    return e
                  },
                  [e]
                )
                .join('\r\n') + '\r\n\r\n'
            )
          }
          s.setupSocket(t)
          if (i && i.length) t.unshift(i)
          var u = (s.isSSL.test(r.target.protocol) ? n : o).request(
            s.setupOutgoing(r.ssl || {}, r, e)
          )
          if (a) {
            a.emit('proxyReqWs', u, e, t, r, i)
          }
          u.on('error', onOutgoingError)
          u.on('response', function (e) {
            if (!e.upgrade) {
              t.write(
                f(
                  'HTTP/' +
                    e.httpVersion +
                    ' ' +
                    e.statusCode +
                    ' ' +
                    e.statusMessage,
                  e.headers
                )
              )
              e.pipe(t)
            }
          })
          u.on('upgrade', function (e, r, o) {
            r.on('error', onOutgoingError)
            r.on('end', function () {
              a.emit('close', e, r, o)
            })
            t.on('error', function () {
              r.end()
            })
            s.setupSocket(r)
            if (o && o.length) r.unshift(o)
            t.write(f('HTTP/1.1 101 Switching Protocols', e.headers))
            r.pipe(t).pipe(r)
            a.emit('open', r)
            a.emit('proxySocket', r)
          })
          return u.end()
          function onOutgoingError(r) {
            if (c) {
              c(r, e, t)
            } else {
              a.emit('error', r, e, t)
            }
            t.end()
          }
        },
      }
    },
    543: (e) => {
      'use strict'
      e.exports = function required(e, t) {
        t = t.split(':')[0]
        e = +e
        if (!e) return false
        switch (t) {
          case 'http':
          case 'ws':
            return e !== 80
          case 'https':
          case 'wss':
            return e !== 443
          case 'ftp':
            return e !== 21
          case 'gopher':
            return e !== 70
          case 'file':
            return false
        }
        return e !== 0
      }
    },
    357: (e) => {
      'use strict'
      e.exports = require('assert')
    },
    605: (e) => {
      'use strict'
      e.exports = require('http')
    },
    211: (e) => {
      'use strict'
      e.exports = require('https')
    },
    185: (e) => {
      'use strict'
      e.exports = require('next/dist/compiled/debug')
    },
    413: (e) => {
      'use strict'
      e.exports = require('stream')
    },
    835: (e) => {
      'use strict'
      e.exports = require('url')
    },
    669: (e) => {
      'use strict'
      e.exports = require('util')
    },
  }
  var t = {}
  function __nccwpck_require__(r) {
    if (t[r]) {
      return t[r].exports
    }
    var o = (t[r] = { exports: {} })
    var n = true
    try {
      e[r](o, o.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete t[r]
    }
    return o.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(737)
})()
