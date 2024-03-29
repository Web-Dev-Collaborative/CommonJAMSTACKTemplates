module.exports = (() => {
  var e = {
    306: (e, t, n) => {
      'use strict'
      const r = n(584)
      const o = n(747)
      const i = n(605)
      const s = n(211)
      const u = n(622)
      const a = n(654)
      const c = n(554)
      const l = n(191)
      const f = n(835)
      const p = n(669)
      const h = n(184)
      const m = 'amphtml-validator'
      function hasPrefix(e, t) {
        return e.indexOf(t) == 0
      }
      function isHttpOrHttpsUrl(e) {
        return hasPrefix(e, 'http://') || hasPrefix(e, 'https://')
      }
      function readFromFile(e) {
        return new c(function (t, n) {
          o.readFile(e, 'utf8', function (e, r) {
            if (e) {
              n(e)
            } else {
              t(r.trim())
            }
          })
        })
      }
      function readFromReadable(e, t) {
        return new c(function (n, r) {
          const o = []
          t.setEncoding('utf8')
          t.on('data', function (e) {
            o.push(e)
          })
          t.on('end', function () {
            n(o.join(''))
          })
          t.on('error', function (t) {
            r(new Error('Could not read from ' + e + ' - ' + t.message))
          })
        })
      }
      function readFromStdin() {
        return readFromReadable('stdin', process.stdin).then(function (e) {
          process.stdin.resume()
          return e
        })
      }
      function readFromUrl(e, t) {
        return new c(function (n, r) {
          const o = hasPrefix(e, 'http://') ? i : s
          const u = o.request(e, function (t) {
            if (t.statusCode !== 200) {
              t.resume()
              r(
                new Error(
                  'Unable to fetch ' + e + ' - HTTP Status ' + t.statusCode
                )
              )
            } else {
              n(t)
            }
          })
          u.setHeader('User-Agent', t)
          u.on('error', function (t) {
            r(new Error('Unable to fetch ' + e + ' - ' + t.message))
          })
          u.end()
        }).then(readFromReadable.bind(null, e))
      }
      function ValidationResult() {
        this.status = 'UNKNOWN'
        this.errors = []
      }
      function ValidationError() {
        this.severity = 'UNKNOWN_SEVERITY'
        this.line = 1
        this.col = 0
        this.message = ''
        this.specUrl = null
        this.code = 'UNKNOWN_CODE'
        this.params = []
      }
      function Validator(e) {
        this.sandbox = h.createContext()
        try {
          new h.Script(e).runInContext(this.sandbox)
        } catch (e) {
          throw new Error('Could not instantiate validator.js - ' + e.message)
        }
      }
      Validator.prototype.validateString = function (e, t) {
        const n = this.sandbox.amp.validator.validateString(e, t)
        const r = new ValidationResult()
        r.status = n.status
        for (let e = 0; e < n.errors.length; e++) {
          const t = n.errors[e]
          const o = new ValidationError()
          o.severity = t.severity
          o.line = t.line
          o.col = t.col
          o.message = this.sandbox.amp.validator.renderErrorMessage(t)
          o.specUrl = t.specUrl
          o.code = t.code
          o.params = t.params
          r.errors.push(o)
        }
        return r
      }
      const d = {}
      function getInstance(e, t) {
        const n = e || 'https://cdn.ampproject.org/v0/validator.js'
        const r = t || m
        if (d.hasOwnProperty(n)) {
          return c.resolve(d[n])
        }
        const o = isHttpOrHttpsUrl(n) ? readFromUrl(n, r) : readFromFile(n)
        return o.then(function (e) {
          let t
          try {
            t = new Validator(e)
          } catch (e) {
            throw e
          }
          d[n] = t
          return t
        })
      }
      t.getInstance = getInstance
      function newInstance(e) {
        return new Validator(e)
      }
      t.newInstance = newInstance
      function logValidationResult(e, t, n) {
        if (t.status === 'PASS') {
          process.stdout.write(e + ': ' + (n ? r.green('PASS') : 'PASS') + '\n')
        }
        for (let o = 0; o < t.errors.length; o++) {
          const i = t.errors[o]
          let s = e + ':' + i.line + ':' + i.col + ' '
          if (n) {
            s += (i.severity === 'ERROR' ? r.red : r.magenta)(i.message)
          } else {
            s += i.message
          }
          if (i.specUrl) {
            s += ' (see ' + i.specUrl + ')'
          }
          process.stderr.write(s + '\n')
        }
      }
      function main() {
        a.usage(
          '[options] <fileOrUrlOrMinus...>\n\n' +
            '  Validates the files or urls provided as arguments. If "-" is\n' +
            '  specified, reads from stdin instead.'
        )
          .option(
            '--validator_js <fileOrUrl>',
            'The Validator Javascript.\n' +
              '  Latest published version by default, or\n' +
              '  dist/validator_minified.js (built with build.py)\n' +
              '  for development.',
            'https://cdn.ampproject.org/v0/validator.js'
          )
          .option(
            '--user-agent <userAgent>',
            'User agent string to use in requests.',
            m
          )
          .option(
            '--html_format <AMP|AMP4ADS|AMP4EMAIL>',
            'The input format to be validated.\n' + '  AMP by default.',
            'AMP'
          )
          .option(
            '--format <color|text|json>',
            'How to format the output.\n' +
              '  "color" displays errors/warnings/success in\n' +
              '          red/orange/green.\n' +
              '  "text"  avoids color (e.g., useful in terminals not\n' +
              '          supporting color).\n' +
              '  "json"  emits json corresponding to the ValidationResult\n' +
              '          message in validator.proto.',
            'color'
          )
          .parse(process.argv)
        if (a.args.length === 0) {
          a.outputHelp()
          process.exit(1)
        }
        if (
          a.html_format !== 'AMP' &&
          a.html_format !== 'AMP4ADS' &&
          a.html_format !== 'AMP4EMAIL'
        ) {
          process.stderr.write(
            '--html_format must be set to "AMP", "AMP4ADS", or "AMP4EMAIL".\n',
            function () {
              process.exit(1)
            }
          )
        }
        if (
          a.format !== 'color' &&
          a.format !== 'text' &&
          a.format !== 'json'
        ) {
          process.stderr.write(
            '--format must be set to "color", "text", or "json".\n',
            function () {
              process.exit(1)
            }
          )
        }
        const e = []
        for (let t = 0; t < a.args.length; t++) {
          const n = a.args[t]
          if (n === '-') {
            e.push(readFromStdin())
          } else if (isHttpOrHttpsUrl(n)) {
            e.push(readFromUrl(n, a.userAgent))
          } else {
            e.push(readFromFile(n))
          }
        }
        getInstance(a.validator_js, a.userAgent)
          .then(function (t) {
            c.all(e)
              .then(function (e) {
                const n = {}
                let r = false
                for (let o = 0; o < e.length; o++) {
                  const i = t.validateString(e[o], a.html_format)
                  if (a.format === 'json') {
                    n[a.args[o]] = i
                  } else {
                    logValidationResult(
                      a.args[o],
                      i,
                      a.format === 'color' ? true : false
                    )
                  }
                  if (i.status !== 'PASS') {
                    r = true
                  }
                }
                if (a.format === 'json') {
                  process.stdout.write(JSON.stringify(n) + '\n', function () {
                    process.exit(r ? 1 : 0)
                  })
                } else if (r) {
                  process.stderr.write('', function () {
                    process.exit(1)
                  })
                } else {
                  process.stdout.write('', function () {
                    process.exit(0)
                  })
                }
              })
              .catch(function (e) {
                process.stderr.write(
                  (a.format == 'color' ? r.red(e.message) : e.message) + '\n',
                  function () {
                    process.exit(1)
                  }
                )
              })
          })
          .catch(function (e) {
            process.stderr.write(
              (a.format == 'color' ? r.red(e.message) : e.message) + '\n',
              function () {
                process.exit(1)
              }
            )
          })
      }
      t.main = main
    },
    654: (e, t, n) => {
      var r = n(614).EventEmitter
      var o = n(129).spawn
      var i = n(622)
      var s = i.dirname
      var u = i.basename
      var a = n(747)
      n(669).inherits(Command, r)
      t = e.exports = new Command()
      t.Command = Command
      t.Option = Option
      function Option(e, t) {
        this.flags = e
        this.required = ~e.indexOf('<')
        this.optional = ~e.indexOf('[')
        this.bool = !~e.indexOf('-no-')
        e = e.split(/[ ,|]+/)
        if (e.length > 1 && !/^[[<]/.test(e[1])) this.short = e.shift()
        this.long = e.shift()
        this.description = t || ''
      }
      Option.prototype.name = function () {
        return this.long.replace('--', '').replace('no-', '')
      }
      Option.prototype.attributeName = function () {
        return camelcase(this.name())
      }
      Option.prototype.is = function (e) {
        return this.short === e || this.long === e
      }
      function Command(e) {
        this.commands = []
        this.options = []
        this._execs = {}
        this._allowUnknownOption = false
        this._args = []
        this._name = e || ''
      }
      Command.prototype.command = function (e, t, n) {
        if (typeof t === 'object' && t !== null) {
          n = t
          t = null
        }
        n = n || {}
        var r = e.split(/ +/)
        var o = new Command(r.shift())
        if (t) {
          o.description(t)
          this.executables = true
          this._execs[o._name] = true
          if (n.isDefault) this.defaultExecutable = o._name
        }
        o._noHelp = !!n.noHelp
        this.commands.push(o)
        o.parseExpectedArgs(r)
        o.parent = this
        if (t) return this
        return o
      }
      Command.prototype.arguments = function (e) {
        return this.parseExpectedArgs(e.split(/ +/))
      }
      Command.prototype.addImplicitHelpCommand = function () {
        this.command('help [cmd]', 'display help for [cmd]')
      }
      Command.prototype.parseExpectedArgs = function (e) {
        if (!e.length) return
        var t = this
        e.forEach(function (e) {
          var n = { required: false, name: '', variadic: false }
          switch (e[0]) {
            case '<':
              n.required = true
              n.name = e.slice(1, -1)
              break
            case '[':
              n.name = e.slice(1, -1)
              break
          }
          if (n.name.length > 3 && n.name.slice(-3) === '...') {
            n.variadic = true
            n.name = n.name.slice(0, -3)
          }
          if (n.name) {
            t._args.push(n)
          }
        })
        return this
      }
      Command.prototype.action = function (e) {
        var t = this
        var n = function (n, r) {
          n = n || []
          r = r || []
          var o = t.parseOptions(r)
          outputHelpIfNecessary(t, o.unknown)
          if (o.unknown.length > 0) {
            t.unknownOption(o.unknown[0])
          }
          if (o.args.length) n = o.args.concat(n)
          t._args.forEach(function (e, r) {
            if (e.required && n[r] == null) {
              t.missingArgument(e.name)
            } else if (e.variadic) {
              if (r !== t._args.length - 1) {
                t.variadicArgNotLast(e.name)
              }
              n[r] = n.splice(r)
            }
          })
          if (t._args.length) {
            n[t._args.length] = t
          } else {
            n.push(t)
          }
          e.apply(t, n)
        }
        var r = this.parent || this
        var o = r === this ? '*' : this._name
        r.on('command:' + o, n)
        if (this._alias) r.on('command:' + this._alias, n)
        return this
      }
      Command.prototype.option = function (e, t, n, r) {
        var o = this,
          i = new Option(e, t),
          s = i.name(),
          u = i.attributeName()
        if (typeof n !== 'function') {
          if (n instanceof RegExp) {
            var a = n
            n = function (e, t) {
              var n = a.exec(e)
              return n ? n[0] : t
            }
          } else {
            r = n
            n = null
          }
        }
        if (!i.bool || i.optional || i.required) {
          if (!i.bool) r = true
          if (r !== undefined) {
            o[u] = r
            i.defaultValue = r
          }
        }
        this.options.push(i)
        this.on('option:' + s, function (e) {
          if (e !== null && n) {
            e = n(e, o[u] === undefined ? r : o[u])
          }
          if (typeof o[u] === 'boolean' || typeof o[u] === 'undefined') {
            if (e == null) {
              o[u] = i.bool ? r || true : false
            } else {
              o[u] = e
            }
          } else if (e !== null) {
            o[u] = e
          }
        })
        return this
      }
      Command.prototype.allowUnknownOption = function (e) {
        this._allowUnknownOption = arguments.length === 0 || e
        return this
      }
      Command.prototype.parse = function (e) {
        if (this.executables) this.addImplicitHelpCommand()
        this.rawArgs = e
        this._name = this._name || u(e[1], '.js')
        if (this.executables && e.length < 3 && !this.defaultExecutable) {
          e.push('--help')
        }
        var t = this.parseOptions(this.normalize(e.slice(2)))
        var n = (this.args = t.args)
        var r = this.parseArgs(this.args, t.unknown)
        var o = r.args[0]
        var i = null
        if (o) {
          i = this.commands.filter(function (e) {
            return e.alias() === o
          })[0]
        }
        if (this._execs[o] && typeof this._execs[o] !== 'function') {
          return this.executeSubCommand(e, n, t.unknown)
        } else if (i) {
          n[0] = i._name
          return this.executeSubCommand(e, n, t.unknown)
        } else if (this.defaultExecutable) {
          n.unshift(this.defaultExecutable)
          return this.executeSubCommand(e, n, t.unknown)
        }
        return r
      }
      Command.prototype.executeSubCommand = function (e, t, n) {
        t = t.concat(n)
        if (!t.length) this.help()
        if (t[0] === 'help' && t.length === 1) this.help()
        if (t[0] === 'help') {
          t[0] = t[1]
          t[1] = '--help'
        }
        var r = e[1]
        var c = u(r, '.js') + '-' + t[0]
        var l,
          f = a.lstatSync(r).isSymbolicLink() ? a.readlinkSync(r) : r
        if (f !== r && f.charAt(0) !== '/') {
          f = i.join(s(r), f)
        }
        l = s(f)
        var p = i.join(l, c)
        var h = false
        if (exists(p + '.js')) {
          c = p + '.js'
          h = true
        } else if (exists(p)) {
          c = p
        }
        t = t.slice(1)
        var m
        if (process.platform !== 'win32') {
          if (h) {
            t.unshift(c)
            t = (process.execArgv || []).concat(t)
            m = o(process.argv[0], t, {
              stdio: 'inherit',
              customFds: [0, 1, 2],
            })
          } else {
            m = o(c, t, { stdio: 'inherit', customFds: [0, 1, 2] })
          }
        } else {
          t.unshift(c)
          m = o(process.execPath, t, { stdio: 'inherit' })
        }
        var d = ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP']
        d.forEach(function (e) {
          process.on(e, function () {
            if (m.killed === false && m.exitCode === null) {
              m.kill(e)
            }
          })
        })
        m.on('close', process.exit.bind(process))
        m.on('error', function (e) {
          if (e.code === 'ENOENT') {
            console.error('\n  %s(1) does not exist, try --help\n', c)
          } else if (e.code === 'EACCES') {
            console.error(
              '\n  %s(1) not executable. try chmod or run with root\n',
              c
            )
          }
          process.exit(1)
        })
        this.runningCommand = m
      }
      Command.prototype.normalize = function (e) {
        var t = [],
          n,
          r,
          o
        for (var i = 0, s = e.length; i < s; ++i) {
          n = e[i]
          if (i > 0) {
            r = this.optionFor(e[i - 1])
          }
          if (n === '--') {
            t = t.concat(e.slice(i))
            break
          } else if (r && r.required) {
            t.push(n)
          } else if (n.length > 1 && n[0] === '-' && n[1] !== '-') {
            n.slice(1)
              .split('')
              .forEach(function (e) {
                t.push('-' + e)
              })
          } else if (/^--/.test(n) && ~(o = n.indexOf('='))) {
            t.push(n.slice(0, o), n.slice(o + 1))
          } else {
            t.push(n)
          }
        }
        return t
      }
      Command.prototype.parseArgs = function (e, t) {
        var n
        if (e.length) {
          n = e[0]
          if (this.listeners('command:' + n).length) {
            this.emit('command:' + e.shift(), e, t)
          } else {
            this.emit('command:*', e)
          }
        } else {
          outputHelpIfNecessary(this, t)
          if (t.length > 0) {
            this.unknownOption(t[0])
          }
        }
        return this
      }
      Command.prototype.optionFor = function (e) {
        for (var t = 0, n = this.options.length; t < n; ++t) {
          if (this.options[t].is(e)) {
            return this.options[t]
          }
        }
      }
      Command.prototype.parseOptions = function (e) {
        var t = [],
          n = e.length,
          r,
          o,
          i
        var s = []
        for (var u = 0; u < n; ++u) {
          i = e[u]
          if (r) {
            t.push(i)
            continue
          }
          if (i === '--') {
            r = true
            continue
          }
          o = this.optionFor(i)
          if (o) {
            if (o.required) {
              i = e[++u]
              if (i == null) return this.optionMissingArgument(o)
              this.emit('option:' + o.name(), i)
            } else if (o.optional) {
              i = e[u + 1]
              if (i == null || (i[0] === '-' && i !== '-')) {
                i = null
              } else {
                ++u
              }
              this.emit('option:' + o.name(), i)
            } else {
              this.emit('option:' + o.name())
            }
            continue
          }
          if (i.length > 1 && i[0] === '-') {
            s.push(i)
            if (u + 1 < e.length && e[u + 1][0] !== '-') {
              s.push(e[++u])
            }
            continue
          }
          t.push(i)
        }
        return { args: t, unknown: s }
      }
      Command.prototype.opts = function () {
        var e = {},
          t = this.options.length
        for (var n = 0; n < t; n++) {
          var r = this.options[n].attributeName()
          e[r] = r === this._versionOptionName ? this._version : this[r]
        }
        return e
      }
      Command.prototype.missingArgument = function (e) {
        console.error()
        console.error("  error: missing required argument `%s'", e)
        console.error()
        process.exit(1)
      }
      Command.prototype.optionMissingArgument = function (e, t) {
        console.error()
        if (t) {
          console.error(
            "  error: option `%s' argument missing, got `%s'",
            e.flags,
            t
          )
        } else {
          console.error("  error: option `%s' argument missing", e.flags)
        }
        console.error()
        process.exit(1)
      }
      Command.prototype.unknownOption = function (e) {
        if (this._allowUnknownOption) return
        console.error()
        console.error("  error: unknown option `%s'", e)
        console.error()
        process.exit(1)
      }
      Command.prototype.variadicArgNotLast = function (e) {
        console.error()
        console.error("  error: variadic arguments must be last `%s'", e)
        console.error()
        process.exit(1)
      }
      Command.prototype.version = function (e, t) {
        if (arguments.length === 0) return this._version
        this._version = e
        t = t || '-V, --version'
        var n = new Option(t, 'output the version number')
        this._versionOptionName = n.long.substr(2) || 'version'
        this.options.push(n)
        this.on('option:' + this._versionOptionName, function () {
          process.stdout.write(e + '\n')
          process.exit(0)
        })
        return this
      }
      Command.prototype.description = function (e, t) {
        if (arguments.length === 0) return this._description
        this._description = e
        this._argsDescription = t
        return this
      }
      Command.prototype.alias = function (e) {
        var t = this
        if (this.commands.length !== 0) {
          t = this.commands[this.commands.length - 1]
        }
        if (arguments.length === 0) return t._alias
        if (e === t._name)
          throw new Error("Command alias can't be the same as its name")
        t._alias = e
        return this
      }
      Command.prototype.usage = function (e) {
        var t = this._args.map(function (e) {
          return humanReadableArgName(e)
        })
        var n =
          '[options]' +
          (this.commands.length ? ' [command]' : '') +
          (this._args.length ? ' ' + t.join(' ') : '')
        if (arguments.length === 0) return this._usage || n
        this._usage = e
        return this
      }
      Command.prototype.name = function (e) {
        if (arguments.length === 0) return this._name
        this._name = e
        return this
      }
      Command.prototype.prepareCommands = function () {
        return this.commands
          .filter(function (e) {
            return !e._noHelp
          })
          .map(function (e) {
            var t = e._args
              .map(function (e) {
                return humanReadableArgName(e)
              })
              .join(' ')
            return [
              e._name +
                (e._alias ? '|' + e._alias : '') +
                (e.options.length ? ' [options]' : '') +
                (t ? ' ' + t : ''),
              e._description,
            ]
          })
      }
      Command.prototype.largestCommandLength = function () {
        var e = this.prepareCommands()
        return e.reduce(function (e, t) {
          return Math.max(e, t[0].length)
        }, 0)
      }
      Command.prototype.largestOptionLength = function () {
        var e = [].slice.call(this.options)
        e.push({ flags: '-h, --help' })
        return e.reduce(function (e, t) {
          return Math.max(e, t.flags.length)
        }, 0)
      }
      Command.prototype.largestArgLength = function () {
        return this._args.reduce(function (e, t) {
          return Math.max(e, t.name.length)
        }, 0)
      }
      Command.prototype.padWidth = function () {
        var e = this.largestOptionLength()
        if (this._argsDescription && this._args.length) {
          if (this.largestArgLength() > e) {
            e = this.largestArgLength()
          }
        }
        if (this.commands && this.commands.length) {
          if (this.largestCommandLength() > e) {
            e = this.largestCommandLength()
          }
        }
        return e
      }
      Command.prototype.optionHelp = function () {
        var e = this.padWidth()
        return this.options
          .map(function (t) {
            return (
              pad(t.flags, e) +
              '  ' +
              t.description +
              (t.bool && t.defaultValue !== undefined
                ? ' (default: ' + t.defaultValue + ')'
                : '')
            )
          })
          .concat([pad('-h, --help', e) + '  ' + 'output usage information'])
          .join('\n')
      }
      Command.prototype.commandHelp = function () {
        if (!this.commands.length) return ''
        var e = this.prepareCommands()
        var t = this.padWidth()
        return [
          '  Commands:',
          '',
          e
            .map(function (e) {
              var n = e[1] ? '  ' + e[1] : ''
              return (n ? pad(e[0], t) : e[0]) + n
            })
            .join('\n')
            .replace(/^/gm, '    '),
          '',
        ].join('\n')
      }
      Command.prototype.helpInformation = function () {
        var e = []
        if (this._description) {
          e = ['  ' + this._description, '']
          var t = this._argsDescription
          if (t && this._args.length) {
            var n = this.padWidth()
            e.push('  Arguments:')
            e.push('')
            this._args.forEach(function (r) {
              e.push('    ' + pad(r.name, n) + '  ' + t[r.name])
            })
            e.push('')
          }
        }
        var r = this._name
        if (this._alias) {
          r = r + '|' + this._alias
        }
        var o = ['', '  Usage: ' + r + ' ' + this.usage(), '']
        var i = []
        var s = this.commandHelp()
        if (s) i = [s]
        var u = [
          '  Options:',
          '',
          '' + this.optionHelp().replace(/^/gm, '    '),
          '',
        ]
        return o.concat(e).concat(u).concat(i).join('\n')
      }
      Command.prototype.outputHelp = function (e) {
        if (!e) {
          e = function (e) {
            return e
          }
        }
        process.stdout.write(e(this.helpInformation()))
        this.emit('--help')
      }
      Command.prototype.help = function (e) {
        this.outputHelp(e)
        process.exit()
      }
      function camelcase(e) {
        return e.split('-').reduce(function (e, t) {
          return e + t[0].toUpperCase() + t.slice(1)
        })
      }
      function pad(e, t) {
        var n = Math.max(0, t - e.length)
        return e + Array(n + 1).join(' ')
      }
      function outputHelpIfNecessary(e, t) {
        t = t || []
        for (var n = 0; n < t.length; n++) {
          if (t[n] === '--help' || t[n] === '-h') {
            e.outputHelp()
            process.exit(0)
          }
        }
      }
      function humanReadableArgName(e) {
        var t = e.name + (e.variadic === true ? '...' : '')
        return e.required ? '<' + t + '>' : '[' + t + ']'
      }
      function exists(e) {
        try {
          if (a.statSync(e).isFile()) {
            return true
          }
        } catch (e) {
          return false
        }
      }
    },
    307: (e, t, n) => {
      'use strict'
      var r = n(826)
      var o = []
      e.exports = asap
      function asap(e) {
        var t
        if (o.length) {
          t = o.pop()
        } else {
          t = new RawTask()
        }
        t.task = e
        t.domain = process.domain
        r(t)
      }
      function RawTask() {
        this.task = null
        this.domain = null
      }
      RawTask.prototype.call = function () {
        if (this.domain) {
          this.domain.enter()
        }
        var e = true
        try {
          this.task.call()
          e = false
          if (this.domain) {
            this.domain.exit()
          }
        } finally {
          if (e) {
            r.requestFlush()
          }
          this.task = null
          this.domain = null
          o.push(this)
        }
      }
    },
    826: (e, t, n) => {
      'use strict'
      var r
      var o = typeof setImmediate === 'function'
      e.exports = rawAsap
      function rawAsap(e) {
        if (!i.length) {
          requestFlush()
          s = true
        }
        i[i.length] = e
      }
      var i = []
      var s = false
      var u = 0
      var a = 1024
      function flush() {
        while (u < i.length) {
          var e = u
          u = u + 1
          i[e].call()
          if (u > a) {
            for (var t = 0, n = i.length - u; t < n; t++) {
              i[t] = i[t + u]
            }
            i.length -= u
            u = 0
          }
        }
        i.length = 0
        u = 0
        s = false
      }
      rawAsap.requestFlush = requestFlush
      function requestFlush() {
        var e = process.domain
        if (e) {
          if (!r) {
            r = n(229)
          }
          r.active = process.domain = null
        }
        if (s && o) {
          setImmediate(flush)
        } else {
          process.nextTick(flush)
        }
        if (e) {
          r.active = process.domain = e
        }
      }
    },
    508: (e, t, n) => {
      var r = {}
      e['exports'] = r
      r.themes = {}
      var o = n(669)
      var i = (r.styles = n(401))
      var s = Object.defineProperties
      var u = new RegExp(/[\r\n]+/g)
      r.supportsColor = n(744).supportsColor
      if (typeof r.enabled === 'undefined') {
        r.enabled = r.supportsColor() !== false
      }
      r.enable = function () {
        r.enabled = true
      }
      r.disable = function () {
        r.enabled = false
      }
      r.stripColors = r.strip = function (e) {
        return ('' + e).replace(/\x1B\[\d+m/g, '')
      }
      var a = (r.stylize = function stylize(e, t) {
        if (!r.enabled) {
          return e + ''
        }
        return i[t].open + e + i[t].close
      })
      var c = /[|\\{}()[\]^$+*?.]/g
      var l = function (e) {
        if (typeof e !== 'string') {
          throw new TypeError('Expected a string')
        }
        return e.replace(c, '\\$&')
      }
      function build(e) {
        var t = function builder() {
          return applyStyle.apply(builder, arguments)
        }
        t._styles = e
        t.__proto__ = p
        return t
      }
      var f = (function () {
        var e = {}
        i.grey = i.gray
        Object.keys(i).forEach(function (t) {
          i[t].closeRe = new RegExp(l(i[t].close), 'g')
          e[t] = {
            get: function () {
              return build(this._styles.concat(t))
            },
          }
        })
        return e
      })()
      var p = s(function colors() {}, f)
      function applyStyle() {
        var e = Array.prototype.slice.call(arguments)
        var t = e
          .map(function (e) {
            if (e !== undefined && e.constructor === String) {
              return e
            } else {
              return o.inspect(e)
            }
          })
          .join(' ')
        if (!r.enabled || !t) {
          return t
        }
        var n = t.indexOf('\n') != -1
        var s = this._styles
        var a = s.length
        while (a--) {
          var c = i[s[a]]
          t = c.open + t.replace(c.closeRe, c.open) + c.close
          if (n) {
            t = t.replace(u, c.close + '\n' + c.open)
          }
        }
        return t
      }
      r.setTheme = function (e) {
        if (typeof e === 'string') {
          console.log(
            'colors.setTheme now only accepts an object, not a string.  ' +
              'If you are trying to set a theme from a file, it is now your (the ' +
              "caller's) responsibility to require the file.  The old syntax " +
              'looked like colors.setTheme(__dirname + ' +
              "'/../themes/generic-logging.js'); The new syntax looks like " +
              'colors.setTheme(require(__dirname + ' +
              "'/../themes/generic-logging.js'));"
          )
          return
        }
        for (var t in e) {
          ;(function (t) {
            r[t] = function (n) {
              if (typeof e[t] === 'object') {
                var o = n
                for (var i in e[t]) {
                  o = r[e[t][i]](o)
                }
                return o
              }
              return r[e[t]](n)
            }
          })(t)
        }
      }
      function init() {
        var e = {}
        Object.keys(f).forEach(function (t) {
          e[t] = {
            get: function () {
              return build([t])
            },
          }
        })
        return e
      }
      var h = function sequencer(e, t) {
        var n = t.split('')
        n = n.map(e)
        return n.join('')
      }
      r.trap = n(173)
      r.zalgo = n(393)
      r.maps = {}
      r.maps.america = n(530)
      r.maps.zebra = n(346)
      r.maps.rainbow = n(120)
      r.maps.random = n(243)
      for (var m in r.maps) {
        ;(function (e) {
          r[e] = function (t) {
            return h(r.maps[e], t)
          }
        })(m)
      }
      s(r, init())
    },
    173: (e) => {
      e['exports'] = function runTheTrap(e, t) {
        var n = ''
        e = e || 'Run the trap, drop the bass'
        e = e.split('')
        var r = {
          a: ['@', 'Ą', 'Ⱥ', 'Ʌ', 'Δ', 'Λ', 'Д'],
          b: ['ß', 'Ɓ', 'Ƀ', 'ɮ', 'β', '฿'],
          c: ['©', 'Ȼ', 'Ͼ'],
          d: ['Ð', 'Ɗ', 'Ԁ', 'ԁ', 'Ԃ', 'ԃ'],
          e: ['Ë', 'ĕ', 'Ǝ', 'ɘ', 'Σ', 'ξ', 'Ҽ', '੬'],
          f: ['Ӻ'],
          g: ['ɢ'],
          h: ['Ħ', 'ƕ', 'Ң', 'Һ', 'Ӈ', 'Ԋ'],
          i: ['༏'],
          j: ['Ĵ'],
          k: ['ĸ', 'Ҡ', 'Ӄ', 'Ԟ'],
          l: ['Ĺ'],
          m: ['ʍ', 'Ӎ', 'ӎ', 'Ԡ', 'ԡ', '൩'],
          n: ['Ñ', 'ŋ', 'Ɲ', 'Ͷ', 'Π', 'Ҋ'],
          o: ['Ø', 'õ', 'ø', 'Ǿ', 'ʘ', 'Ѻ', 'ם', '۝', '๏'],
          p: ['Ƿ', 'Ҏ'],
          q: ['্'],
          r: ['®', 'Ʀ', 'Ȑ', 'Ɍ', 'ʀ', 'Я'],
          s: ['§', 'Ϟ', 'ϟ', 'Ϩ'],
          t: ['Ł', 'Ŧ', 'ͳ'],
          u: ['Ʊ', 'Ս'],
          v: ['ט'],
          w: ['Ш', 'Ѡ', 'Ѽ', '൰'],
          x: ['Ҳ', 'Ӿ', 'Ӽ', 'ӽ'],
          y: ['¥', 'Ұ', 'Ӌ'],
          z: ['Ƶ', 'ɀ'],
        }
        e.forEach(function (e) {
          e = e.toLowerCase()
          var t = r[e] || [' ']
          var o = Math.floor(Math.random() * t.length)
          if (typeof r[e] !== 'undefined') {
            n += r[e][o]
          } else {
            n += e
          }
        })
        return n
      }
    },
    393: (e) => {
      e['exports'] = function zalgo(e, t) {
        e = e || '   he is here   '
        var n = {
          up: [
            '̍',
            '̎',
            '̄',
            '̅',
            '̿',
            '̑',
            '̆',
            '̐',
            '͒',
            '͗',
            '͑',
            '̇',
            '̈',
            '̊',
            '͂',
            '̓',
            '̈',
            '͊',
            '͋',
            '͌',
            '̃',
            '̂',
            '̌',
            '͐',
            '̀',
            '́',
            '̋',
            '̏',
            '̒',
            '̓',
            '̔',
            '̽',
            '̉',
            'ͣ',
            'ͤ',
            'ͥ',
            'ͦ',
            'ͧ',
            'ͨ',
            'ͩ',
            'ͪ',
            'ͫ',
            'ͬ',
            'ͭ',
            'ͮ',
            'ͯ',
            '̾',
            '͛',
            '͆',
            '̚',
          ],
          down: [
            '̖',
            '̗',
            '̘',
            '̙',
            '̜',
            '̝',
            '̞',
            '̟',
            '̠',
            '̤',
            '̥',
            '̦',
            '̩',
            '̪',
            '̫',
            '̬',
            '̭',
            '̮',
            '̯',
            '̰',
            '̱',
            '̲',
            '̳',
            '̹',
            '̺',
            '̻',
            '̼',
            'ͅ',
            '͇',
            '͈',
            '͉',
            '͍',
            '͎',
            '͓',
            '͔',
            '͕',
            '͖',
            '͙',
            '͚',
            '̣',
          ],
          mid: [
            '̕',
            '̛',
            '̀',
            '́',
            '͘',
            '̡',
            '̢',
            '̧',
            '̨',
            '̴',
            '̵',
            '̶',
            '͜',
            '͝',
            '͞',
            '͟',
            '͠',
            '͢',
            '̸',
            '̷',
            '͡',
            ' ҉',
          ],
        }
        var r = [].concat(n.up, n.down, n.mid)
        function randomNumber(e) {
          var t = Math.floor(Math.random() * e)
          return t
        }
        function isChar(e) {
          var t = false
          r.filter(function (n) {
            t = n === e
          })
          return t
        }
        function heComes(e, t) {
          var r = ''
          var o
          var i
          t = t || {}
          t['up'] = typeof t['up'] !== 'undefined' ? t['up'] : true
          t['mid'] = typeof t['mid'] !== 'undefined' ? t['mid'] : true
          t['down'] = typeof t['down'] !== 'undefined' ? t['down'] : true
          t['size'] = typeof t['size'] !== 'undefined' ? t['size'] : 'maxi'
          e = e.split('')
          for (i in e) {
            if (isChar(i)) {
              continue
            }
            r = r + e[i]
            o = { up: 0, down: 0, mid: 0 }
            switch (t.size) {
              case 'mini':
                o.up = randomNumber(8)
                o.mid = randomNumber(2)
                o.down = randomNumber(8)
                break
              case 'maxi':
                o.up = randomNumber(16) + 3
                o.mid = randomNumber(4) + 1
                o.down = randomNumber(64) + 3
                break
              default:
                o.up = randomNumber(8) + 1
                o.mid = randomNumber(6) / 2
                o.down = randomNumber(8) + 1
                break
            }
            var s = ['up', 'mid', 'down']
            for (var u in s) {
              var a = s[u]
              for (var c = 0; c <= o[a]; c++) {
                if (t[a]) {
                  r = r + n[a][randomNumber(n[a].length)]
                }
              }
            }
          }
          return r
        }
        return heComes(e, t)
      }
    },
    530: (e, t, n) => {
      var r = n(508)
      e['exports'] = (function () {
        return function (e, t, n) {
          if (e === ' ') return e
          switch (t % 3) {
            case 0:
              return r.red(e)
            case 1:
              return r.white(e)
            case 2:
              return r.blue(e)
          }
        }
      })()
    },
    120: (e, t, n) => {
      var r = n(508)
      e['exports'] = (function () {
        var e = ['red', 'yellow', 'green', 'blue', 'magenta']
        return function (t, n, o) {
          if (t === ' ') {
            return t
          } else {
            return r[e[n++ % e.length]](t)
          }
        }
      })()
    },
    243: (e, t, n) => {
      var r = n(508)
      e['exports'] = (function () {
        var e = [
          'underline',
          'inverse',
          'grey',
          'yellow',
          'red',
          'green',
          'blue',
          'white',
          'cyan',
          'magenta',
        ]
        return function (t, n, o) {
          return t === ' '
            ? t
            : r[e[Math.round(Math.random() * (e.length - 2))]](t)
        }
      })()
    },
    346: (e, t, n) => {
      var r = n(508)
      e['exports'] = function (e, t, n) {
        return t % 2 === 0 ? e : r.inverse(e)
      }
    },
    401: (e) => {
      var t = {}
      e['exports'] = t
      var n = {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        grey: [90, 39],
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        blackBG: [40, 49],
        redBG: [41, 49],
        greenBG: [42, 49],
        yellowBG: [43, 49],
        blueBG: [44, 49],
        magentaBG: [45, 49],
        cyanBG: [46, 49],
        whiteBG: [47, 49],
      }
      Object.keys(n).forEach(function (e) {
        var r = n[e]
        var o = (t[e] = [])
        o.open = '[' + r[0] + 'm'
        o.close = '[' + r[1] + 'm'
      })
    },
    252: (e) => {
      'use strict'
      e.exports = function (e, t) {
        t = t || process.argv
        var n = t.indexOf('--')
        var r = /^-{1,2}/.test(e) ? '' : '--'
        var o = t.indexOf(r + e)
        return o !== -1 && (n === -1 ? true : o < n)
      }
    },
    744: (e, t, n) => {
      'use strict'
      var r = n(87)
      var o = n(252)
      var i = process.env
      var s = void 0
      if (o('no-color') || o('no-colors') || o('color=false')) {
        s = false
      } else if (
        o('color') ||
        o('colors') ||
        o('color=true') ||
        o('color=always')
      ) {
        s = true
      }
      if ('FORCE_COLOR' in i) {
        s = i.FORCE_COLOR.length === 0 || parseInt(i.FORCE_COLOR, 10) !== 0
      }
      function translateLevel(e) {
        if (e === 0) {
          return false
        }
        return { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 }
      }
      function supportsColor(e) {
        if (s === false) {
          return 0
        }
        if (o('color=16m') || o('color=full') || o('color=truecolor')) {
          return 3
        }
        if (o('color=256')) {
          return 2
        }
        if (e && !e.isTTY && s !== true) {
          return 0
        }
        var t = s ? 1 : 0
        if (process.platform === 'win32') {
          var n = r.release().split('.')
          if (
            Number(process.versions.node.split('.')[0]) >= 8 &&
            Number(n[0]) >= 10 &&
            Number(n[2]) >= 10586
          ) {
            return Number(n[2]) >= 14931 ? 3 : 2
          }
          return 1
        }
        if ('CI' in i) {
          if (
            ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (e) {
              return e in i
            }) ||
            i.CI_NAME === 'codeship'
          ) {
            return 1
          }
          return t
        }
        if ('TEAMCITY_VERSION' in i) {
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(i.TEAMCITY_VERSION)
            ? 1
            : 0
        }
        if ('TERM_PROGRAM' in i) {
          var u = parseInt((i.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
          switch (i.TERM_PROGRAM) {
            case 'iTerm.app':
              return u >= 3 ? 3 : 2
            case 'Hyper':
              return 3
            case 'Apple_Terminal':
              return 2
          }
        }
        if (/-256(color)?$/i.test(i.TERM)) {
          return 2
        }
        if (
          /^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(i.TERM)
        ) {
          return 1
        }
        if ('COLORTERM' in i) {
          return 1
        }
        if (i.TERM === 'dumb') {
          return t
        }
        return t
      }
      function getSupportLevel(e) {
        var t = supportsColor(e)
        return translateLevel(t)
      }
      e.exports = {
        supportsColor: getSupportLevel,
        stdout: getSupportLevel(process.stdout),
        stderr: getSupportLevel(process.stderr),
      }
    },
    584: (e, t, n) => {
      var r = n(508)
      e['exports'] = r
    },
    554: (e, t, n) => {
      'use strict'
      e.exports = n(198)
    },
    541: (e, t, n) => {
      'use strict'
      var r = n(826)
      function noop() {}
      var o = null
      var i = {}
      function getThen(e) {
        try {
          return e.then
        } catch (e) {
          o = e
          return i
        }
      }
      function tryCallOne(e, t) {
        try {
          return e(t)
        } catch (e) {
          o = e
          return i
        }
      }
      function tryCallTwo(e, t, n) {
        try {
          e(t, n)
        } catch (e) {
          o = e
          return i
        }
      }
      e.exports = Promise
      function Promise(e) {
        if (typeof this !== 'object') {
          throw new TypeError('Promises must be constructed via new')
        }
        if (typeof e !== 'function') {
          throw new TypeError(
            "Promise constructor's argument is not a function"
          )
        }
        this._75 = 0
        this._83 = 0
        this._18 = null
        this._38 = null
        if (e === noop) return
        doResolve(e, this)
      }
      Promise._47 = null
      Promise._71 = null
      Promise._44 = noop
      Promise.prototype.then = function (e, t) {
        if (this.constructor !== Promise) {
          return safeThen(this, e, t)
        }
        var n = new Promise(noop)
        handle(this, new Handler(e, t, n))
        return n
      }
      function safeThen(e, t, n) {
        return new e.constructor(function (r, o) {
          var i = new Promise(noop)
          i.then(r, o)
          handle(e, new Handler(t, n, i))
        })
      }
      function handle(e, t) {
        while (e._83 === 3) {
          e = e._18
        }
        if (Promise._47) {
          Promise._47(e)
        }
        if (e._83 === 0) {
          if (e._75 === 0) {
            e._75 = 1
            e._38 = t
            return
          }
          if (e._75 === 1) {
            e._75 = 2
            e._38 = [e._38, t]
            return
          }
          e._38.push(t)
          return
        }
        handleResolved(e, t)
      }
      function handleResolved(e, t) {
        r(function () {
          var n = e._83 === 1 ? t.onFulfilled : t.onRejected
          if (n === null) {
            if (e._83 === 1) {
              resolve(t.promise, e._18)
            } else {
              reject(t.promise, e._18)
            }
            return
          }
          var r = tryCallOne(n, e._18)
          if (r === i) {
            reject(t.promise, o)
          } else {
            resolve(t.promise, r)
          }
        })
      }
      function resolve(e, t) {
        if (t === e) {
          return reject(
            e,
            new TypeError('A promise cannot be resolved with itself.')
          )
        }
        if (t && (typeof t === 'object' || typeof t === 'function')) {
          var n = getThen(t)
          if (n === i) {
            return reject(e, o)
          }
          if (n === e.then && t instanceof Promise) {
            e._83 = 3
            e._18 = t
            finale(e)
            return
          } else if (typeof n === 'function') {
            doResolve(n.bind(t), e)
            return
          }
        }
        e._83 = 1
        e._18 = t
        finale(e)
      }
      function reject(e, t) {
        e._83 = 2
        e._18 = t
        if (Promise._71) {
          Promise._71(e, t)
        }
        finale(e)
      }
      function finale(e) {
        if (e._75 === 1) {
          handle(e, e._38)
          e._38 = null
        }
        if (e._75 === 2) {
          for (var t = 0; t < e._38.length; t++) {
            handle(e, e._38[t])
          }
          e._38 = null
        }
      }
      function Handler(e, t, n) {
        this.onFulfilled = typeof e === 'function' ? e : null
        this.onRejected = typeof t === 'function' ? t : null
        this.promise = n
      }
      function doResolve(e, t) {
        var n = false
        var r = tryCallTwo(
          e,
          function (e) {
            if (n) return
            n = true
            resolve(t, e)
          },
          function (e) {
            if (n) return
            n = true
            reject(t, e)
          }
        )
        if (!n && r === i) {
          n = true
          reject(t, o)
        }
      }
    },
    200: (e, t, n) => {
      'use strict'
      var r = n(541)
      e.exports = r
      r.prototype.done = function (e, t) {
        var n = arguments.length ? this.then.apply(this, arguments) : this
        n.then(null, function (e) {
          setTimeout(function () {
            throw e
          }, 0)
        })
      }
    },
    667: (e, t, n) => {
      'use strict'
      var r = n(541)
      e.exports = r
      var o = valuePromise(true)
      var i = valuePromise(false)
      var s = valuePromise(null)
      var u = valuePromise(undefined)
      var a = valuePromise(0)
      var c = valuePromise('')
      function valuePromise(e) {
        var t = new r(r._44)
        t._83 = 1
        t._18 = e
        return t
      }
      r.resolve = function (e) {
        if (e instanceof r) return e
        if (e === null) return s
        if (e === undefined) return u
        if (e === true) return o
        if (e === false) return i
        if (e === 0) return a
        if (e === '') return c
        if (typeof e === 'object' || typeof e === 'function') {
          try {
            var t = e.then
            if (typeof t === 'function') {
              return new r(t.bind(e))
            }
          } catch (e) {
            return new r(function (t, n) {
              n(e)
            })
          }
        }
        return valuePromise(e)
      }
      r.all = function (e) {
        var t = Array.prototype.slice.call(e)
        return new r(function (e, n) {
          if (t.length === 0) return e([])
          var o = t.length
          function res(i, s) {
            if (s && (typeof s === 'object' || typeof s === 'function')) {
              if (s instanceof r && s.then === r.prototype.then) {
                while (s._83 === 3) {
                  s = s._18
                }
                if (s._83 === 1) return res(i, s._18)
                if (s._83 === 2) n(s._18)
                s.then(function (e) {
                  res(i, e)
                }, n)
                return
              } else {
                var u = s.then
                if (typeof u === 'function') {
                  var a = new r(u.bind(s))
                  a.then(function (e) {
                    res(i, e)
                  }, n)
                  return
                }
              }
            }
            t[i] = s
            if (--o === 0) {
              e(t)
            }
          }
          for (var i = 0; i < t.length; i++) {
            res(i, t[i])
          }
        })
      }
      r.reject = function (e) {
        return new r(function (t, n) {
          n(e)
        })
      }
      r.race = function (e) {
        return new r(function (t, n) {
          e.forEach(function (e) {
            r.resolve(e).then(t, n)
          })
        })
      }
      r.prototype['catch'] = function (e) {
        return this.then(null, e)
      }
    },
    579: (e, t, n) => {
      'use strict'
      var r = n(541)
      e.exports = r
      r.prototype['finally'] = function (e) {
        return this.then(
          function (t) {
            return r.resolve(e()).then(function () {
              return t
            })
          },
          function (t) {
            return r.resolve(e()).then(function () {
              throw t
            })
          }
        )
      }
    },
    198: (e, t, n) => {
      'use strict'
      e.exports = n(541)
      n(200)
      n(579)
      n(667)
      n(369)
      n(693)
    },
    369: (e, t, n) => {
      'use strict'
      var r = n(541)
      var o = n(307)
      e.exports = r
      r.denodeify = function (e, t) {
        if (typeof t === 'number' && t !== Infinity) {
          return denodeifyWithCount(e, t)
        } else {
          return denodeifyWithoutCount(e)
        }
      }
      var i =
        'function (err, res) {' +
        'if (err) { rj(err); } else { rs(res); }' +
        '}'
      function denodeifyWithCount(e, t) {
        var n = []
        for (var o = 0; o < t; o++) {
          n.push('a' + o)
        }
        var s = [
          'return function (' + n.join(',') + ') {',
          'var self = this;',
          'return new Promise(function (rs, rj) {',
          'var res = fn.call(',
          ['self'].concat(n).concat([i]).join(','),
          ');',
          'if (res &&',
          '(typeof res === "object" || typeof res === "function") &&',
          'typeof res.then === "function"',
          ') {rs(res);}',
          '});',
          '};',
        ].join('')
        return Function(['Promise', 'fn'], s)(r, e)
      }
      function denodeifyWithoutCount(e) {
        var t = Math.max(e.length - 1, 3)
        var n = []
        for (var o = 0; o < t; o++) {
          n.push('a' + o)
        }
        var s = [
          'return function (' + n.join(',') + ') {',
          'var self = this;',
          'var args;',
          'var argLength = arguments.length;',
          'if (arguments.length > ' + t + ') {',
          'args = new Array(arguments.length + 1);',
          'for (var i = 0; i < arguments.length; i++) {',
          'args[i] = arguments[i];',
          '}',
          '}',
          'return new Promise(function (rs, rj) {',
          'var cb = ' + i + ';',
          'var res;',
          'switch (argLength) {',
          n
            .concat(['extra'])
            .map(function (e, t) {
              return (
                'case ' +
                t +
                ':' +
                'res = fn.call(' +
                ['self'].concat(n.slice(0, t)).concat('cb').join(',') +
                ');' +
                'break;'
              )
            })
            .join(''),
          'default:',
          'args[argLength] = cb;',
          'res = fn.apply(self, args);',
          '}',
          'if (res &&',
          '(typeof res === "object" || typeof res === "function") &&',
          'typeof res.then === "function"',
          ') {rs(res);}',
          '});',
          '};',
        ].join('')
        return Function(['Promise', 'fn'], s)(r, e)
      }
      r.nodeify = function (e) {
        return function () {
          var t = Array.prototype.slice.call(arguments)
          var n = typeof t[t.length - 1] === 'function' ? t.pop() : null
          var i = this
          try {
            return e.apply(this, arguments).nodeify(n, i)
          } catch (e) {
            if (n === null || typeof n == 'undefined') {
              return new r(function (t, n) {
                n(e)
              })
            } else {
              o(function () {
                n.call(i, e)
              })
            }
          }
        }
      }
      r.prototype.nodeify = function (e, t) {
        if (typeof e != 'function') return this
        this.then(
          function (n) {
            o(function () {
              e.call(t, null, n)
            })
          },
          function (n) {
            o(function () {
              e.call(t, n)
            })
          }
        )
      }
    },
    693: (e, t, n) => {
      'use strict'
      var r = n(541)
      e.exports = r
      r.enableSynchronous = function () {
        r.prototype.isPending = function () {
          return this.getState() == 0
        }
        r.prototype.isFulfilled = function () {
          return this.getState() == 1
        }
        r.prototype.isRejected = function () {
          return this.getState() == 2
        }
        r.prototype.getValue = function () {
          if (this._83 === 3) {
            return this._18.getValue()
          }
          if (!this.isFulfilled()) {
            throw new Error('Cannot get a value of an unfulfilled promise.')
          }
          return this._18
        }
        r.prototype.getReason = function () {
          if (this._83 === 3) {
            return this._18.getReason()
          }
          if (!this.isRejected()) {
            throw new Error(
              'Cannot get a rejection reason of a non-rejected promise.'
            )
          }
          return this._18
        }
        r.prototype.getState = function () {
          if (this._83 === 3) {
            return this._18.getState()
          }
          if (this._83 === -1 || this._83 === -2) {
            return 0
          }
          return this._83
        }
      }
      r.disableSynchronous = function () {
        r.prototype.isPending = undefined
        r.prototype.isFulfilled = undefined
        r.prototype.isRejected = undefined
        r.prototype.getValue = undefined
        r.prototype.getReason = undefined
        r.prototype.getState = undefined
      }
    },
    129: (e) => {
      'use strict'
      e.exports = require('child_process')
    },
    229: (e) => {
      'use strict'
      e.exports = require('domain')
    },
    614: (e) => {
      'use strict'
      e.exports = require('events')
    },
    747: (e) => {
      'use strict'
      e.exports = require('fs')
    },
    605: (e) => {
      'use strict'
      e.exports = require('http')
    },
    211: (e) => {
      'use strict'
      e.exports = require('https')
    },
    87: (e) => {
      'use strict'
      e.exports = require('os')
    },
    622: (e) => {
      'use strict'
      e.exports = require('path')
    },
    191: (e) => {
      'use strict'
      e.exports = require('querystring')
    },
    835: (e) => {
      'use strict'
      e.exports = require('url')
    },
    669: (e) => {
      'use strict'
      e.exports = require('util')
    },
    184: (e) => {
      'use strict'
      e.exports = require('vm')
    },
  }
  var t = {}
  function __nccwpck_require__(n) {
    if (t[n]) {
      return t[n].exports
    }
    var r = (t[n] = { exports: {} })
    var o = true
    try {
      e[n](r, r.exports, __nccwpck_require__)
      o = false
    } finally {
      if (o) delete t[n]
    }
    return r.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(306)
})()
