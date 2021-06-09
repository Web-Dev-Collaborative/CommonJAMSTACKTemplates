module.exports = (() => {
  var e = {
    781: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = i(r(574))
      var s = i(r(8))
      function default_1(e) {
        e.use(s.default)
        var t = e.use(n.default)
        var r = e.use(a.default).defaults
        var i = t.Type.def
        var u = t.Type.or
        i('Noop').bases('Statement').build()
        i('DoExpression')
          .bases('Expression')
          .build('body')
          .field('body', [i('Statement')])
        i('Super').bases('Expression').build()
        i('BindExpression')
          .bases('Expression')
          .build('object', 'callee')
          .field('object', u(i('Expression'), null))
          .field('callee', i('Expression'))
        i('Decorator')
          .bases('Node')
          .build('expression')
          .field('expression', i('Expression'))
        i('Property').field('decorators', u([i('Decorator')], null), r['null'])
        i('MethodDefinition').field(
          'decorators',
          u([i('Decorator')], null),
          r['null']
        )
        i('MetaProperty')
          .bases('Expression')
          .build('meta', 'property')
          .field('meta', i('Identifier'))
          .field('property', i('Identifier'))
        i('ParenthesizedExpression')
          .bases('Expression')
          .build('expression')
          .field('expression', i('Expression'))
        i('ImportSpecifier')
          .bases('ModuleSpecifier')
          .build('imported', 'local')
          .field('imported', i('Identifier'))
        i('ImportDefaultSpecifier').bases('ModuleSpecifier').build('local')
        i('ImportNamespaceSpecifier').bases('ModuleSpecifier').build('local')
        i('ExportDefaultDeclaration')
          .bases('Declaration')
          .build('declaration')
          .field('declaration', u(i('Declaration'), i('Expression')))
        i('ExportNamedDeclaration')
          .bases('Declaration')
          .build('declaration', 'specifiers', 'source')
          .field('declaration', u(i('Declaration'), null))
          .field('specifiers', [i('ExportSpecifier')], r.emptyArray)
          .field('source', u(i('Literal'), null), r['null'])
        i('ExportSpecifier')
          .bases('ModuleSpecifier')
          .build('local', 'exported')
          .field('exported', i('Identifier'))
        i('ExportNamespaceSpecifier')
          .bases('Specifier')
          .build('exported')
          .field('exported', i('Identifier'))
        i('ExportDefaultSpecifier')
          .bases('Specifier')
          .build('exported')
          .field('exported', i('Identifier'))
        i('ExportAllDeclaration')
          .bases('Declaration')
          .build('exported', 'source')
          .field('exported', u(i('Identifier'), null))
          .field('source', i('Literal'))
        i('CommentBlock').bases('Comment').build('value', 'leading', 'trailing')
        i('CommentLine').bases('Comment').build('value', 'leading', 'trailing')
        i('Directive')
          .bases('Node')
          .build('value')
          .field('value', i('DirectiveLiteral'))
        i('DirectiveLiteral')
          .bases('Node', 'Expression')
          .build('value')
          .field('value', String, r['use strict'])
        i('InterpreterDirective')
          .bases('Node')
          .build('value')
          .field('value', String)
        i('BlockStatement')
          .bases('Statement')
          .build('body')
          .field('body', [i('Statement')])
          .field('directives', [i('Directive')], r.emptyArray)
        i('Program')
          .bases('Node')
          .build('body')
          .field('body', [i('Statement')])
          .field('directives', [i('Directive')], r.emptyArray)
          .field('interpreter', u(i('InterpreterDirective'), null), r['null'])
        i('StringLiteral')
          .bases('Literal')
          .build('value')
          .field('value', String)
        i('NumericLiteral')
          .bases('Literal')
          .build('value')
          .field('value', Number)
          .field('raw', u(String, null), r['null'])
          .field(
            'extra',
            { rawValue: Number, raw: String },
            function getDefault() {
              return { rawValue: this.value, raw: this.value + '' }
            }
          )
        i('BigIntLiteral')
          .bases('Literal')
          .build('value')
          .field('value', u(String, Number))
          .field(
            'extra',
            { rawValue: String, raw: String },
            function getDefault() {
              return { rawValue: String(this.value), raw: this.value + 'n' }
            }
          )
        i('NullLiteral')
          .bases('Literal')
          .build()
          .field('value', null, r['null'])
        i('BooleanLiteral')
          .bases('Literal')
          .build('value')
          .field('value', Boolean)
        i('RegExpLiteral')
          .bases('Literal')
          .build('pattern', 'flags')
          .field('pattern', String)
          .field('flags', String)
          .field('value', RegExp, function () {
            return new RegExp(this.pattern, this.flags)
          })
        var l = u(
          i('Property'),
          i('ObjectMethod'),
          i('ObjectProperty'),
          i('SpreadProperty'),
          i('SpreadElement')
        )
        i('ObjectExpression')
          .bases('Expression')
          .build('properties')
          .field('properties', [l])
        i('ObjectMethod')
          .bases('Node', 'Function')
          .build('kind', 'key', 'params', 'body', 'computed')
          .field('kind', u('method', 'get', 'set'))
          .field('key', u(i('Literal'), i('Identifier'), i('Expression')))
          .field('params', [i('Pattern')])
          .field('body', i('BlockStatement'))
          .field('computed', Boolean, r['false'])
          .field('generator', Boolean, r['false'])
          .field('async', Boolean, r['false'])
          .field('accessibility', u(i('Literal'), null), r['null'])
          .field('decorators', u([i('Decorator')], null), r['null'])
        i('ObjectProperty')
          .bases('Node')
          .build('key', 'value')
          .field('key', u(i('Literal'), i('Identifier'), i('Expression')))
          .field('value', u(i('Expression'), i('Pattern')))
          .field('accessibility', u(i('Literal'), null), r['null'])
          .field('computed', Boolean, r['false'])
        var o = u(
          i('MethodDefinition'),
          i('VariableDeclarator'),
          i('ClassPropertyDefinition'),
          i('ClassProperty'),
          i('ClassPrivateProperty'),
          i('ClassMethod'),
          i('ClassPrivateMethod')
        )
        i('ClassBody').bases('Declaration').build('body').field('body', [o])
        i('ClassMethod')
          .bases('Declaration', 'Function')
          .build('kind', 'key', 'params', 'body', 'computed', 'static')
          .field('key', u(i('Literal'), i('Identifier'), i('Expression')))
        i('ClassPrivateMethod')
          .bases('Declaration', 'Function')
          .build('key', 'params', 'body', 'kind', 'computed', 'static')
          .field('key', i('PrivateName'))
        ;['ClassMethod', 'ClassPrivateMethod'].forEach(function (e) {
          i(e)
            .field(
              'kind',
              u('get', 'set', 'method', 'constructor'),
              function () {
                return 'method'
              }
            )
            .field('body', i('BlockStatement'))
            .field('computed', Boolean, r['false'])
            .field('static', u(Boolean, null), r['null'])
            .field('abstract', u(Boolean, null), r['null'])
            .field(
              'access',
              u('public', 'private', 'protected', null),
              r['null']
            )
            .field(
              'accessibility',
              u('public', 'private', 'protected', null),
              r['null']
            )
            .field('decorators', u([i('Decorator')], null), r['null'])
            .field('optional', u(Boolean, null), r['null'])
        })
        i('ClassPrivateProperty')
          .bases('ClassProperty')
          .build('key', 'value')
          .field('key', i('PrivateName'))
          .field('value', u(i('Expression'), null), r['null'])
        i('PrivateName')
          .bases('Expression', 'Pattern')
          .build('id')
          .field('id', i('Identifier'))
        var c = u(
          i('Property'),
          i('PropertyPattern'),
          i('SpreadPropertyPattern'),
          i('SpreadProperty'),
          i('ObjectProperty'),
          i('RestProperty')
        )
        i('ObjectPattern')
          .bases('Pattern')
          .build('properties')
          .field('properties', [c])
          .field('decorators', u([i('Decorator')], null), r['null'])
        i('SpreadProperty')
          .bases('Node')
          .build('argument')
          .field('argument', i('Expression'))
        i('RestProperty')
          .bases('Node')
          .build('argument')
          .field('argument', i('Expression'))
        i('ForAwaitStatement')
          .bases('Statement')
          .build('left', 'right', 'body')
          .field('left', u(i('VariableDeclaration'), i('Expression')))
          .field('right', i('Expression'))
          .field('body', i('Statement'))
        i('Import').bases('Expression').build()
      }
      t.default = default_1
      e.exports = t['default']
    },
    716: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(781))
      var a = i(r(544))
      function default_1(e) {
        e.use(n.default)
        e.use(a.default)
      }
      t.default = default_1
      e.exports = t['default']
    },
    201: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = i(r(574))
      function default_1(e) {
        var t = e.use(n.default)
        var r = t.Type
        var i = r.def
        var s = r.or
        var u = e.use(a.default)
        var l = u.defaults
        var o = u.geq
        i('Printable').field(
          'loc',
          s(i('SourceLocation'), null),
          l['null'],
          true
        )
        i('Node')
          .bases('Printable')
          .field('type', String)
          .field('comments', s([i('Comment')], null), l['null'], true)
        i('SourceLocation')
          .field('start', i('Position'))
          .field('end', i('Position'))
          .field('source', s(String, null), l['null'])
        i('Position').field('line', o(1)).field('column', o(0))
        i('File')
          .bases('Node')
          .build('program', 'name')
          .field('program', i('Program'))
          .field('name', s(String, null), l['null'])
        i('Program')
          .bases('Node')
          .build('body')
          .field('body', [i('Statement')])
        i('Function')
          .bases('Node')
          .field('id', s(i('Identifier'), null), l['null'])
          .field('params', [i('Pattern')])
          .field('body', i('BlockStatement'))
          .field('generator', Boolean, l['false'])
          .field('async', Boolean, l['false'])
        i('Statement').bases('Node')
        i('EmptyStatement').bases('Statement').build()
        i('BlockStatement')
          .bases('Statement')
          .build('body')
          .field('body', [i('Statement')])
        i('ExpressionStatement')
          .bases('Statement')
          .build('expression')
          .field('expression', i('Expression'))
        i('IfStatement')
          .bases('Statement')
          .build('test', 'consequent', 'alternate')
          .field('test', i('Expression'))
          .field('consequent', i('Statement'))
          .field('alternate', s(i('Statement'), null), l['null'])
        i('LabeledStatement')
          .bases('Statement')
          .build('label', 'body')
          .field('label', i('Identifier'))
          .field('body', i('Statement'))
        i('BreakStatement')
          .bases('Statement')
          .build('label')
          .field('label', s(i('Identifier'), null), l['null'])
        i('ContinueStatement')
          .bases('Statement')
          .build('label')
          .field('label', s(i('Identifier'), null), l['null'])
        i('WithStatement')
          .bases('Statement')
          .build('object', 'body')
          .field('object', i('Expression'))
          .field('body', i('Statement'))
        i('SwitchStatement')
          .bases('Statement')
          .build('discriminant', 'cases', 'lexical')
          .field('discriminant', i('Expression'))
          .field('cases', [i('SwitchCase')])
          .field('lexical', Boolean, l['false'])
        i('ReturnStatement')
          .bases('Statement')
          .build('argument')
          .field('argument', s(i('Expression'), null))
        i('ThrowStatement')
          .bases('Statement')
          .build('argument')
          .field('argument', i('Expression'))
        i('TryStatement')
          .bases('Statement')
          .build('block', 'handler', 'finalizer')
          .field('block', i('BlockStatement'))
          .field('handler', s(i('CatchClause'), null), function () {
            return (this.handlers && this.handlers[0]) || null
          })
          .field(
            'handlers',
            [i('CatchClause')],
            function () {
              return this.handler ? [this.handler] : []
            },
            true
          )
          .field('guardedHandlers', [i('CatchClause')], l.emptyArray)
          .field('finalizer', s(i('BlockStatement'), null), l['null'])
        i('CatchClause')
          .bases('Node')
          .build('param', 'guard', 'body')
          .field('param', s(i('Pattern'), null), l['null'])
          .field('guard', s(i('Expression'), null), l['null'])
          .field('body', i('BlockStatement'))
        i('WhileStatement')
          .bases('Statement')
          .build('test', 'body')
          .field('test', i('Expression'))
          .field('body', i('Statement'))
        i('DoWhileStatement')
          .bases('Statement')
          .build('body', 'test')
          .field('body', i('Statement'))
          .field('test', i('Expression'))
        i('ForStatement')
          .bases('Statement')
          .build('init', 'test', 'update', 'body')
          .field('init', s(i('VariableDeclaration'), i('Expression'), null))
          .field('test', s(i('Expression'), null))
          .field('update', s(i('Expression'), null))
          .field('body', i('Statement'))
        i('ForInStatement')
          .bases('Statement')
          .build('left', 'right', 'body')
          .field('left', s(i('VariableDeclaration'), i('Expression')))
          .field('right', i('Expression'))
          .field('body', i('Statement'))
        i('DebuggerStatement').bases('Statement').build()
        i('Declaration').bases('Statement')
        i('FunctionDeclaration')
          .bases('Function', 'Declaration')
          .build('id', 'params', 'body')
          .field('id', i('Identifier'))
        i('FunctionExpression')
          .bases('Function', 'Expression')
          .build('id', 'params', 'body')
        i('VariableDeclaration')
          .bases('Declaration')
          .build('kind', 'declarations')
          .field('kind', s('var', 'let', 'const'))
          .field('declarations', [i('VariableDeclarator')])
        i('VariableDeclarator')
          .bases('Node')
          .build('id', 'init')
          .field('id', i('Pattern'))
          .field('init', s(i('Expression'), null), l['null'])
        i('Expression').bases('Node')
        i('ThisExpression').bases('Expression').build()
        i('ArrayExpression')
          .bases('Expression')
          .build('elements')
          .field('elements', [s(i('Expression'), null)])
        i('ObjectExpression')
          .bases('Expression')
          .build('properties')
          .field('properties', [i('Property')])
        i('Property')
          .bases('Node')
          .build('kind', 'key', 'value')
          .field('kind', s('init', 'get', 'set'))
          .field('key', s(i('Literal'), i('Identifier')))
          .field('value', i('Expression'))
        i('SequenceExpression')
          .bases('Expression')
          .build('expressions')
          .field('expressions', [i('Expression')])
        var c = s('-', '+', '!', '~', 'typeof', 'void', 'delete')
        i('UnaryExpression')
          .bases('Expression')
          .build('operator', 'argument', 'prefix')
          .field('operator', c)
          .field('argument', i('Expression'))
          .field('prefix', Boolean, l['true'])
        var h = s(
          '==',
          '!=',
          '===',
          '!==',
          '<',
          '<=',
          '>',
          '>=',
          '<<',
          '>>',
          '>>>',
          '+',
          '-',
          '*',
          '/',
          '%',
          '**',
          '&',
          '|',
          '^',
          'in',
          'instanceof'
        )
        i('BinaryExpression')
          .bases('Expression')
          .build('operator', 'left', 'right')
          .field('operator', h)
          .field('left', i('Expression'))
          .field('right', i('Expression'))
        var f = s(
          '=',
          '+=',
          '-=',
          '*=',
          '/=',
          '%=',
          '<<=',
          '>>=',
          '>>>=',
          '|=',
          '^=',
          '&='
        )
        i('AssignmentExpression')
          .bases('Expression')
          .build('operator', 'left', 'right')
          .field('operator', f)
          .field('left', s(i('Pattern'), i('MemberExpression')))
          .field('right', i('Expression'))
        var p = s('++', '--')
        i('UpdateExpression')
          .bases('Expression')
          .build('operator', 'argument', 'prefix')
          .field('operator', p)
          .field('argument', i('Expression'))
          .field('prefix', Boolean)
        var d = s('||', '&&')
        i('LogicalExpression')
          .bases('Expression')
          .build('operator', 'left', 'right')
          .field('operator', d)
          .field('left', i('Expression'))
          .field('right', i('Expression'))
        i('ConditionalExpression')
          .bases('Expression')
          .build('test', 'consequent', 'alternate')
          .field('test', i('Expression'))
          .field('consequent', i('Expression'))
          .field('alternate', i('Expression'))
        i('NewExpression')
          .bases('Expression')
          .build('callee', 'arguments')
          .field('callee', i('Expression'))
          .field('arguments', [i('Expression')])
        i('CallExpression')
          .bases('Expression')
          .build('callee', 'arguments')
          .field('callee', i('Expression'))
          .field('arguments', [i('Expression')])
        i('MemberExpression')
          .bases('Expression')
          .build('object', 'property', 'computed')
          .field('object', i('Expression'))
          .field('property', s(i('Identifier'), i('Expression')))
          .field('computed', Boolean, function () {
            var e = this.property.type
            if (
              e === 'Literal' ||
              e === 'MemberExpression' ||
              e === 'BinaryExpression'
            ) {
              return true
            }
            return false
          })
        i('Pattern').bases('Node')
        i('SwitchCase')
          .bases('Node')
          .build('test', 'consequent')
          .field('test', s(i('Expression'), null))
          .field('consequent', [i('Statement')])
        i('Identifier')
          .bases('Expression', 'Pattern')
          .build('name')
          .field('name', String)
          .field('optional', Boolean, l['false'])
        i('Literal')
          .bases('Expression')
          .build('value')
          .field('value', s(String, Boolean, null, Number, RegExp))
          .field(
            'regex',
            s({ pattern: String, flags: String }, null),
            function () {
              if (this.value instanceof RegExp) {
                var e = ''
                if (this.value.ignoreCase) e += 'i'
                if (this.value.multiline) e += 'm'
                if (this.value.global) e += 'g'
                return { pattern: this.value.source, flags: e }
              }
              return null
            }
          )
        i('Comment')
          .bases('Printable')
          .field('value', String)
          .field('leading', Boolean, l['true'])
          .field('trailing', Boolean, l['false'])
      }
      t.default = default_1
      e.exports = t['default']
    },
    735: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = i(r(574))
      var s = i(r(201))
      function default_1(e) {
        e.use(s.default)
        var t = e.use(n.default)
        var r = t.Type
        var i = t.Type.def
        var u = r.or
        var l = e.use(a.default)
        var o = l.defaults
        i('OptionalMemberExpression')
          .bases('MemberExpression')
          .build('object', 'property', 'computed', 'optional')
          .field('optional', Boolean, o['true'])
        i('OptionalCallExpression')
          .bases('CallExpression')
          .build('callee', 'arguments', 'optional')
          .field('optional', Boolean, o['true'])
        var c = u('||', '&&', '??')
        i('LogicalExpression').field('operator', c)
      }
      t.default = default_1
      e.exports = t['default']
    },
    933: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(201))
      var a = i(r(361))
      var s = i(r(574))
      function default_1(e) {
        e.use(n.default)
        var t = e.use(a.default)
        var r = t.Type.def
        var i = t.Type.or
        var u = e.use(s.default).defaults
        r('Function')
          .field('generator', Boolean, u['false'])
          .field('expression', Boolean, u['false'])
          .field('defaults', [i(r('Expression'), null)], u.emptyArray)
          .field('rest', i(r('Identifier'), null), u['null'])
        r('RestElement')
          .bases('Pattern')
          .build('argument')
          .field('argument', r('Pattern'))
          .field(
            'typeAnnotation',
            i(r('TypeAnnotation'), r('TSTypeAnnotation'), null),
            u['null']
          )
        r('SpreadElementPattern')
          .bases('Pattern')
          .build('argument')
          .field('argument', r('Pattern'))
        r('FunctionDeclaration').build(
          'id',
          'params',
          'body',
          'generator',
          'expression'
        )
        r('FunctionExpression').build(
          'id',
          'params',
          'body',
          'generator',
          'expression'
        )
        r('ArrowFunctionExpression')
          .bases('Function', 'Expression')
          .build('params', 'body', 'expression')
          .field('id', null, u['null'])
          .field('body', i(r('BlockStatement'), r('Expression')))
          .field('generator', false, u['false'])
        r('ForOfStatement')
          .bases('Statement')
          .build('left', 'right', 'body')
          .field('left', i(r('VariableDeclaration'), r('Pattern')))
          .field('right', r('Expression'))
          .field('body', r('Statement'))
        r('YieldExpression')
          .bases('Expression')
          .build('argument', 'delegate')
          .field('argument', i(r('Expression'), null))
          .field('delegate', Boolean, u['false'])
        r('GeneratorExpression')
          .bases('Expression')
          .build('body', 'blocks', 'filter')
          .field('body', r('Expression'))
          .field('blocks', [r('ComprehensionBlock')])
          .field('filter', i(r('Expression'), null))
        r('ComprehensionExpression')
          .bases('Expression')
          .build('body', 'blocks', 'filter')
          .field('body', r('Expression'))
          .field('blocks', [r('ComprehensionBlock')])
          .field('filter', i(r('Expression'), null))
        r('ComprehensionBlock')
          .bases('Node')
          .build('left', 'right', 'each')
          .field('left', r('Pattern'))
          .field('right', r('Expression'))
          .field('each', Boolean)
        r('Property')
          .field('key', i(r('Literal'), r('Identifier'), r('Expression')))
          .field('value', i(r('Expression'), r('Pattern')))
          .field('method', Boolean, u['false'])
          .field('shorthand', Boolean, u['false'])
          .field('computed', Boolean, u['false'])
        r('ObjectProperty').field('shorthand', Boolean, u['false'])
        r('PropertyPattern')
          .bases('Pattern')
          .build('key', 'pattern')
          .field('key', i(r('Literal'), r('Identifier'), r('Expression')))
          .field('pattern', r('Pattern'))
          .field('computed', Boolean, u['false'])
        r('ObjectPattern')
          .bases('Pattern')
          .build('properties')
          .field('properties', [i(r('PropertyPattern'), r('Property'))])
        r('ArrayPattern')
          .bases('Pattern')
          .build('elements')
          .field('elements', [i(r('Pattern'), null)])
        r('MethodDefinition')
          .bases('Declaration')
          .build('kind', 'key', 'value', 'static')
          .field('kind', i('constructor', 'method', 'get', 'set'))
          .field('key', r('Expression'))
          .field('value', r('Function'))
          .field('computed', Boolean, u['false'])
          .field('static', Boolean, u['false'])
        r('SpreadElement')
          .bases('Node')
          .build('argument')
          .field('argument', r('Expression'))
        r('ArrayExpression').field('elements', [
          i(r('Expression'), r('SpreadElement'), r('RestElement'), null),
        ])
        r('NewExpression').field('arguments', [
          i(r('Expression'), r('SpreadElement')),
        ])
        r('CallExpression').field('arguments', [
          i(r('Expression'), r('SpreadElement')),
        ])
        r('AssignmentPattern')
          .bases('Pattern')
          .build('left', 'right')
          .field('left', r('Pattern'))
          .field('right', r('Expression'))
        var l = i(
          r('MethodDefinition'),
          r('VariableDeclarator'),
          r('ClassPropertyDefinition'),
          r('ClassProperty')
        )
        r('ClassProperty')
          .bases('Declaration')
          .build('key')
          .field('key', i(r('Literal'), r('Identifier'), r('Expression')))
          .field('computed', Boolean, u['false'])
        r('ClassPropertyDefinition')
          .bases('Declaration')
          .build('definition')
          .field('definition', l)
        r('ClassBody').bases('Declaration').build('body').field('body', [l])
        r('ClassDeclaration')
          .bases('Declaration')
          .build('id', 'body', 'superClass')
          .field('id', i(r('Identifier'), null))
          .field('body', r('ClassBody'))
          .field('superClass', i(r('Expression'), null), u['null'])
        r('ClassExpression')
          .bases('Expression')
          .build('id', 'body', 'superClass')
          .field('id', i(r('Identifier'), null), u['null'])
          .field('body', r('ClassBody'))
          .field('superClass', i(r('Expression'), null), u['null'])
        r('Specifier').bases('Node')
        r('ModuleSpecifier')
          .bases('Specifier')
          .field('local', i(r('Identifier'), null), u['null'])
          .field('id', i(r('Identifier'), null), u['null'])
          .field('name', i(r('Identifier'), null), u['null'])
        r('ImportSpecifier').bases('ModuleSpecifier').build('id', 'name')
        r('ImportNamespaceSpecifier').bases('ModuleSpecifier').build('id')
        r('ImportDefaultSpecifier').bases('ModuleSpecifier').build('id')
        r('ImportDeclaration')
          .bases('Declaration')
          .build('specifiers', 'source', 'importKind')
          .field(
            'specifiers',
            [
              i(
                r('ImportSpecifier'),
                r('ImportNamespaceSpecifier'),
                r('ImportDefaultSpecifier')
              ),
            ],
            u.emptyArray
          )
          .field('source', r('Literal'))
          .field('importKind', i('value', 'type'), function () {
            return 'value'
          })
        r('TaggedTemplateExpression')
          .bases('Expression')
          .build('tag', 'quasi')
          .field('tag', r('Expression'))
          .field('quasi', r('TemplateLiteral'))
        r('TemplateLiteral')
          .bases('Expression')
          .build('quasis', 'expressions')
          .field('quasis', [r('TemplateElement')])
          .field('expressions', [r('Expression')])
        r('TemplateElement')
          .bases('Node')
          .build('value', 'tail')
          .field('value', { cooked: String, raw: String })
          .field('tail', Boolean)
      }
      t.default = default_1
      e.exports = t['default']
    },
    8: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(933))
      var a = i(r(361))
      var s = i(r(574))
      function default_1(e) {
        e.use(n.default)
        var t = e.use(a.default)
        var r = t.Type.def
        var i = t.Type.or
        var u = e.use(s.default).defaults
        r('Function').field('async', Boolean, u['false'])
        r('SpreadProperty')
          .bases('Node')
          .build('argument')
          .field('argument', r('Expression'))
        r('ObjectExpression').field('properties', [
          i(r('Property'), r('SpreadProperty'), r('SpreadElement')),
        ])
        r('SpreadPropertyPattern')
          .bases('Pattern')
          .build('argument')
          .field('argument', r('Pattern'))
        r('ObjectPattern').field('properties', [
          i(r('Property'), r('PropertyPattern'), r('SpreadPropertyPattern')),
        ])
        r('AwaitExpression')
          .bases('Expression')
          .build('argument', 'all')
          .field('argument', i(r('Expression'), null))
          .field('all', Boolean, u['false'])
      }
      t.default = default_1
      e.exports = t['default']
    },
    188: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(8))
      var a = i(r(361))
      var s = i(r(574))
      function default_1(e) {
        e.use(n.default)
        var t = e.use(a.default)
        var r = e.use(s.default).defaults
        var i = t.Type.def
        var u = t.Type.or
        i('VariableDeclaration').field('declarations', [
          u(i('VariableDeclarator'), i('Identifier')),
        ])
        i('Property').field('value', u(i('Expression'), i('Pattern')))
        i('ArrayPattern').field('elements', [
          u(i('Pattern'), i('SpreadElement'), null),
        ])
        i('ObjectPattern').field('properties', [
          u(
            i('Property'),
            i('PropertyPattern'),
            i('SpreadPropertyPattern'),
            i('SpreadProperty')
          ),
        ])
        i('ExportSpecifier').bases('ModuleSpecifier').build('id', 'name')
        i('ExportBatchSpecifier').bases('Specifier').build()
        i('ExportDeclaration')
          .bases('Declaration')
          .build('default', 'declaration', 'specifiers', 'source')
          .field('default', Boolean)
          .field('declaration', u(i('Declaration'), i('Expression'), null))
          .field(
            'specifiers',
            [u(i('ExportSpecifier'), i('ExportBatchSpecifier'))],
            r.emptyArray
          )
          .field('source', u(i('Literal'), null), r['null'])
        i('Block').bases('Comment').build('value', 'leading', 'trailing')
        i('Line').bases('Comment').build('value', 'leading', 'trailing')
      }
      t.default = default_1
      e.exports = t['default']
    },
    544: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(8))
      var a = i(r(61))
      var s = i(r(361))
      var u = i(r(574))
      function default_1(e) {
        e.use(n.default)
        e.use(a.default)
        var t = e.use(s.default)
        var r = t.Type.def
        var i = t.Type.or
        var l = e.use(u.default).defaults
        r('Flow').bases('Node')
        r('FlowType').bases('Flow')
        r('AnyTypeAnnotation').bases('FlowType').build()
        r('EmptyTypeAnnotation').bases('FlowType').build()
        r('MixedTypeAnnotation').bases('FlowType').build()
        r('VoidTypeAnnotation').bases('FlowType').build()
        r('NumberTypeAnnotation').bases('FlowType').build()
        r('NumberLiteralTypeAnnotation')
          .bases('FlowType')
          .build('value', 'raw')
          .field('value', Number)
          .field('raw', String)
        r('NumericLiteralTypeAnnotation')
          .bases('FlowType')
          .build('value', 'raw')
          .field('value', Number)
          .field('raw', String)
        r('StringTypeAnnotation').bases('FlowType').build()
        r('StringLiteralTypeAnnotation')
          .bases('FlowType')
          .build('value', 'raw')
          .field('value', String)
          .field('raw', String)
        r('BooleanTypeAnnotation').bases('FlowType').build()
        r('BooleanLiteralTypeAnnotation')
          .bases('FlowType')
          .build('value', 'raw')
          .field('value', Boolean)
          .field('raw', String)
        r('TypeAnnotation')
          .bases('Node')
          .build('typeAnnotation')
          .field('typeAnnotation', r('FlowType'))
        r('NullableTypeAnnotation')
          .bases('FlowType')
          .build('typeAnnotation')
          .field('typeAnnotation', r('FlowType'))
        r('NullLiteralTypeAnnotation').bases('FlowType').build()
        r('NullTypeAnnotation').bases('FlowType').build()
        r('ThisTypeAnnotation').bases('FlowType').build()
        r('ExistsTypeAnnotation').bases('FlowType').build()
        r('ExistentialTypeParam').bases('FlowType').build()
        r('FunctionTypeAnnotation')
          .bases('FlowType')
          .build('params', 'returnType', 'rest', 'typeParameters')
          .field('params', [r('FunctionTypeParam')])
          .field('returnType', r('FlowType'))
          .field('rest', i(r('FunctionTypeParam'), null))
          .field('typeParameters', i(r('TypeParameterDeclaration'), null))
        r('FunctionTypeParam')
          .bases('Node')
          .build('name', 'typeAnnotation', 'optional')
          .field('name', r('Identifier'))
          .field('typeAnnotation', r('FlowType'))
          .field('optional', Boolean)
        r('ArrayTypeAnnotation')
          .bases('FlowType')
          .build('elementType')
          .field('elementType', r('FlowType'))
        r('ObjectTypeAnnotation')
          .bases('FlowType')
          .build('properties', 'indexers', 'callProperties')
          .field('properties', [
            i(r('ObjectTypeProperty'), r('ObjectTypeSpreadProperty')),
          ])
          .field('indexers', [r('ObjectTypeIndexer')], l.emptyArray)
          .field('callProperties', [r('ObjectTypeCallProperty')], l.emptyArray)
          .field('inexact', i(Boolean, void 0), l['undefined'])
          .field('exact', Boolean, l['false'])
          .field('internalSlots', [r('ObjectTypeInternalSlot')], l.emptyArray)
        r('Variance')
          .bases('Node')
          .build('kind')
          .field('kind', i('plus', 'minus'))
        var o = i(r('Variance'), 'plus', 'minus', null)
        r('ObjectTypeProperty')
          .bases('Node')
          .build('key', 'value', 'optional')
          .field('key', i(r('Literal'), r('Identifier')))
          .field('value', r('FlowType'))
          .field('optional', Boolean)
          .field('variance', o, l['null'])
        r('ObjectTypeIndexer')
          .bases('Node')
          .build('id', 'key', 'value')
          .field('id', r('Identifier'))
          .field('key', r('FlowType'))
          .field('value', r('FlowType'))
          .field('variance', o, l['null'])
        r('ObjectTypeCallProperty')
          .bases('Node')
          .build('value')
          .field('value', r('FunctionTypeAnnotation'))
          .field('static', Boolean, l['false'])
        r('QualifiedTypeIdentifier')
          .bases('Node')
          .build('qualification', 'id')
          .field(
            'qualification',
            i(r('Identifier'), r('QualifiedTypeIdentifier'))
          )
          .field('id', r('Identifier'))
        r('GenericTypeAnnotation')
          .bases('FlowType')
          .build('id', 'typeParameters')
          .field('id', i(r('Identifier'), r('QualifiedTypeIdentifier')))
          .field('typeParameters', i(r('TypeParameterInstantiation'), null))
        r('MemberTypeAnnotation')
          .bases('FlowType')
          .build('object', 'property')
          .field('object', r('Identifier'))
          .field(
            'property',
            i(r('MemberTypeAnnotation'), r('GenericTypeAnnotation'))
          )
        r('UnionTypeAnnotation')
          .bases('FlowType')
          .build('types')
          .field('types', [r('FlowType')])
        r('IntersectionTypeAnnotation')
          .bases('FlowType')
          .build('types')
          .field('types', [r('FlowType')])
        r('TypeofTypeAnnotation')
          .bases('FlowType')
          .build('argument')
          .field('argument', r('FlowType'))
        r('ObjectTypeSpreadProperty')
          .bases('Node')
          .build('argument')
          .field('argument', r('FlowType'))
        r('ObjectTypeInternalSlot')
          .bases('Node')
          .build('id', 'value', 'optional', 'static', 'method')
          .field('id', r('Identifier'))
          .field('value', r('FlowType'))
          .field('optional', Boolean)
          .field('static', Boolean)
          .field('method', Boolean)
        r('TypeParameterDeclaration')
          .bases('Node')
          .build('params')
          .field('params', [r('TypeParameter')])
        r('TypeParameterInstantiation')
          .bases('Node')
          .build('params')
          .field('params', [r('FlowType')])
        r('TypeParameter')
          .bases('FlowType')
          .build('name', 'variance', 'bound')
          .field('name', String)
          .field('variance', o, l['null'])
          .field('bound', i(r('TypeAnnotation'), null), l['null'])
        r('ClassProperty').field('variance', o, l['null'])
        r('ClassImplements')
          .bases('Node')
          .build('id')
          .field('id', r('Identifier'))
          .field('superClass', i(r('Expression'), null), l['null'])
          .field(
            'typeParameters',
            i(r('TypeParameterInstantiation'), null),
            l['null']
          )
        r('InterfaceTypeAnnotation')
          .bases('FlowType')
          .build('body', 'extends')
          .field('body', r('ObjectTypeAnnotation'))
          .field('extends', i([r('InterfaceExtends')], null), l['null'])
        r('InterfaceDeclaration')
          .bases('Declaration')
          .build('id', 'body', 'extends')
          .field('id', r('Identifier'))
          .field(
            'typeParameters',
            i(r('TypeParameterDeclaration'), null),
            l['null']
          )
          .field('body', r('ObjectTypeAnnotation'))
          .field('extends', [r('InterfaceExtends')])
        r('DeclareInterface')
          .bases('InterfaceDeclaration')
          .build('id', 'body', 'extends')
        r('InterfaceExtends')
          .bases('Node')
          .build('id')
          .field('id', r('Identifier'))
          .field(
            'typeParameters',
            i(r('TypeParameterInstantiation'), null),
            l['null']
          )
        r('TypeAlias')
          .bases('Declaration')
          .build('id', 'typeParameters', 'right')
          .field('id', r('Identifier'))
          .field('typeParameters', i(r('TypeParameterDeclaration'), null))
          .field('right', r('FlowType'))
        r('OpaqueType')
          .bases('Declaration')
          .build('id', 'typeParameters', 'impltype', 'supertype')
          .field('id', r('Identifier'))
          .field('typeParameters', i(r('TypeParameterDeclaration'), null))
          .field('impltype', r('FlowType'))
          .field('supertype', r('FlowType'))
        r('DeclareTypeAlias')
          .bases('TypeAlias')
          .build('id', 'typeParameters', 'right')
        r('DeclareOpaqueType')
          .bases('TypeAlias')
          .build('id', 'typeParameters', 'supertype')
        r('TypeCastExpression')
          .bases('Expression')
          .build('expression', 'typeAnnotation')
          .field('expression', r('Expression'))
          .field('typeAnnotation', r('TypeAnnotation'))
        r('TupleTypeAnnotation')
          .bases('FlowType')
          .build('types')
          .field('types', [r('FlowType')])
        r('DeclareVariable')
          .bases('Statement')
          .build('id')
          .field('id', r('Identifier'))
        r('DeclareFunction')
          .bases('Statement')
          .build('id')
          .field('id', r('Identifier'))
        r('DeclareClass').bases('InterfaceDeclaration').build('id')
        r('DeclareModule')
          .bases('Statement')
          .build('id', 'body')
          .field('id', i(r('Identifier'), r('Literal')))
          .field('body', r('BlockStatement'))
        r('DeclareModuleExports')
          .bases('Statement')
          .build('typeAnnotation')
          .field('typeAnnotation', r('TypeAnnotation'))
        r('DeclareExportDeclaration')
          .bases('Declaration')
          .build('default', 'declaration', 'specifiers', 'source')
          .field('default', Boolean)
          .field(
            'declaration',
            i(
              r('DeclareVariable'),
              r('DeclareFunction'),
              r('DeclareClass'),
              r('FlowType'),
              null
            )
          )
          .field(
            'specifiers',
            [i(r('ExportSpecifier'), r('ExportBatchSpecifier'))],
            l.emptyArray
          )
          .field('source', i(r('Literal'), null), l['null'])
        r('DeclareExportAllDeclaration')
          .bases('Declaration')
          .build('source')
          .field('source', i(r('Literal'), null), l['null'])
        r('FlowPredicate').bases('Flow')
        r('InferredPredicate').bases('FlowPredicate').build()
        r('DeclaredPredicate')
          .bases('FlowPredicate')
          .build('value')
          .field('value', r('Expression'))
        r('CallExpression').field(
          'typeArguments',
          i(null, r('TypeParameterInstantiation')),
          l['null']
        )
        r('NewExpression').field(
          'typeArguments',
          i(null, r('TypeParameterInstantiation')),
          l['null']
        )
      }
      t.default = default_1
      e.exports = t['default']
    },
    894: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(8))
      var a = i(r(361))
      var s = i(r(574))
      function default_1(e) {
        e.use(n.default)
        var t = e.use(a.default)
        var r = t.Type.def
        var i = t.Type.or
        var u = e.use(s.default).defaults
        r('JSXAttribute')
          .bases('Node')
          .build('name', 'value')
          .field('name', i(r('JSXIdentifier'), r('JSXNamespacedName')))
          .field(
            'value',
            i(r('Literal'), r('JSXExpressionContainer'), null),
            u['null']
          )
        r('JSXIdentifier')
          .bases('Identifier')
          .build('name')
          .field('name', String)
        r('JSXNamespacedName')
          .bases('Node')
          .build('namespace', 'name')
          .field('namespace', r('JSXIdentifier'))
          .field('name', r('JSXIdentifier'))
        r('JSXMemberExpression')
          .bases('MemberExpression')
          .build('object', 'property')
          .field('object', i(r('JSXIdentifier'), r('JSXMemberExpression')))
          .field('property', r('JSXIdentifier'))
          .field('computed', Boolean, u.false)
        var l = i(
          r('JSXIdentifier'),
          r('JSXNamespacedName'),
          r('JSXMemberExpression')
        )
        r('JSXSpreadAttribute')
          .bases('Node')
          .build('argument')
          .field('argument', r('Expression'))
        var o = [i(r('JSXAttribute'), r('JSXSpreadAttribute'))]
        r('JSXExpressionContainer')
          .bases('Expression')
          .build('expression')
          .field('expression', r('Expression'))
        r('JSXElement')
          .bases('Expression')
          .build('openingElement', 'closingElement', 'children')
          .field('openingElement', r('JSXOpeningElement'))
          .field('closingElement', i(r('JSXClosingElement'), null), u['null'])
          .field(
            'children',
            [
              i(
                r('JSXElement'),
                r('JSXExpressionContainer'),
                r('JSXFragment'),
                r('JSXText'),
                r('Literal')
              ),
            ],
            u.emptyArray
          )
          .field(
            'name',
            l,
            function () {
              return this.openingElement.name
            },
            true
          )
          .field(
            'selfClosing',
            Boolean,
            function () {
              return this.openingElement.selfClosing
            },
            true
          )
          .field(
            'attributes',
            o,
            function () {
              return this.openingElement.attributes
            },
            true
          )
        r('JSXOpeningElement')
          .bases('Node')
          .build('name', 'attributes', 'selfClosing')
          .field('name', l)
          .field('attributes', o, u.emptyArray)
          .field('selfClosing', Boolean, u['false'])
        r('JSXClosingElement').bases('Node').build('name').field('name', l)
        r('JSXFragment')
          .bases('Expression')
          .build('openingElement', 'closingElement', 'children')
          .field('openingElement', r('JSXOpeningFragment'))
          .field('closingElement', r('JSXClosingFragment'))
          .field(
            'children',
            [
              i(
                r('JSXElement'),
                r('JSXExpressionContainer'),
                r('JSXFragment'),
                r('JSXText'),
                r('Literal')
              ),
            ],
            u.emptyArray
          )
        r('JSXOpeningFragment').bases('Node').build()
        r('JSXClosingFragment').bases('Node').build()
        r('JSXText').bases('Literal').build('value').field('value', String)
        r('JSXEmptyExpression').bases('Expression').build()
        r('JSXSpreadChild')
          .bases('Expression')
          .build('expression')
          .field('expression', r('Expression'))
      }
      t.default = default_1
      e.exports = t['default']
    },
    61: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = i(r(574))
      function default_1(e) {
        var t = e.use(n.default)
        var r = t.Type.def
        var i = t.Type.or
        var s = e.use(a.default).defaults
        var u = i(r('TypeAnnotation'), r('TSTypeAnnotation'), null)
        var l = i(
          r('TypeParameterDeclaration'),
          r('TSTypeParameterDeclaration'),
          null
        )
        r('Identifier').field('typeAnnotation', u, s['null'])
        r('ObjectPattern').field('typeAnnotation', u, s['null'])
        r('Function')
          .field('returnType', u, s['null'])
          .field('typeParameters', l, s['null'])
        r('ClassProperty')
          .build('key', 'value', 'typeAnnotation', 'static')
          .field('value', i(r('Expression'), null))
          .field('static', Boolean, s['false'])
          .field('typeAnnotation', u, s['null'])
        ;['ClassDeclaration', 'ClassExpression'].forEach(function (e) {
          r(e)
            .field('typeParameters', l, s['null'])
            .field(
              'superTypeParameters',
              i(
                r('TypeParameterInstantiation'),
                r('TSTypeParameterInstantiation'),
                null
              ),
              s['null']
            )
            .field(
              'implements',
              i([r('ClassImplements')], [r('TSExpressionWithTypeArguments')]),
              s.emptyArray
            )
        })
      }
      t.default = default_1
      e.exports = t['default']
    },
    284: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(781))
      var a = i(r(61))
      var s = i(r(361))
      var u = i(r(574))
      function default_1(e) {
        e.use(n.default)
        e.use(a.default)
        var t = e.use(s.default)
        var r = t.namedTypes
        var i = t.Type.def
        var l = t.Type.or
        var o = e.use(u.default).defaults
        var c = t.Type.from(function (e, t) {
          if (r.StringLiteral && r.StringLiteral.check(e, t)) {
            return true
          }
          if (
            r.Literal &&
            r.Literal.check(e, t) &&
            typeof e.value === 'string'
          ) {
            return true
          }
          return false
        }, 'StringLiteral')
        i('TSType').bases('Node')
        var h = l(i('Identifier'), i('TSQualifiedName'))
        i('TSTypeReference')
          .bases('TSType', 'TSHasOptionalTypeParameterInstantiation')
          .build('typeName', 'typeParameters')
          .field('typeName', h)
        i('TSHasOptionalTypeParameterInstantiation').field(
          'typeParameters',
          l(i('TSTypeParameterInstantiation'), null),
          o['null']
        )
        i('TSHasOptionalTypeParameters').field(
          'typeParameters',
          l(i('TSTypeParameterDeclaration'), null, void 0),
          o['null']
        )
        i('TSHasOptionalTypeAnnotation').field(
          'typeAnnotation',
          l(i('TSTypeAnnotation'), null),
          o['null']
        )
        i('TSQualifiedName')
          .bases('Node')
          .build('left', 'right')
          .field('left', h)
          .field('right', h)
        i('TSAsExpression')
          .bases('Expression', 'Pattern')
          .build('expression', 'typeAnnotation')
          .field('expression', i('Expression'))
          .field('typeAnnotation', i('TSType'))
          .field('extra', l({ parenthesized: Boolean }, null), o['null'])
        i('TSNonNullExpression')
          .bases('Expression', 'Pattern')
          .build('expression')
          .field('expression', i('Expression'))
        ;[
          'TSAnyKeyword',
          'TSBigIntKeyword',
          'TSBooleanKeyword',
          'TSNeverKeyword',
          'TSNullKeyword',
          'TSNumberKeyword',
          'TSObjectKeyword',
          'TSStringKeyword',
          'TSSymbolKeyword',
          'TSUndefinedKeyword',
          'TSUnknownKeyword',
          'TSVoidKeyword',
          'TSThisType',
        ].forEach(function (e) {
          i(e).bases('TSType').build()
        })
        i('TSArrayType')
          .bases('TSType')
          .build('elementType')
          .field('elementType', i('TSType'))
        i('TSLiteralType')
          .bases('TSType')
          .build('literal')
          .field(
            'literal',
            l(
              i('NumericLiteral'),
              i('StringLiteral'),
              i('BooleanLiteral'),
              i('TemplateLiteral'),
              i('UnaryExpression')
            )
          )
        ;['TSUnionType', 'TSIntersectionType'].forEach(function (e) {
          i(e)
            .bases('TSType')
            .build('types')
            .field('types', [i('TSType')])
        })
        i('TSConditionalType')
          .bases('TSType')
          .build('checkType', 'extendsType', 'trueType', 'falseType')
          .field('checkType', i('TSType'))
          .field('extendsType', i('TSType'))
          .field('trueType', i('TSType'))
          .field('falseType', i('TSType'))
        i('TSInferType')
          .bases('TSType')
          .build('typeParameter')
          .field('typeParameter', i('TSTypeParameter'))
        i('TSParenthesizedType')
          .bases('TSType')
          .build('typeAnnotation')
          .field('typeAnnotation', i('TSType'))
        var f = [
          l(
            i('Identifier'),
            i('RestElement'),
            i('ArrayPattern'),
            i('ObjectPattern')
          ),
        ]
        ;['TSFunctionType', 'TSConstructorType'].forEach(function (e) {
          i(e)
            .bases(
              'TSType',
              'TSHasOptionalTypeParameters',
              'TSHasOptionalTypeAnnotation'
            )
            .build('parameters')
            .field('parameters', f)
        })
        i('TSDeclareFunction')
          .bases('Declaration', 'TSHasOptionalTypeParameters')
          .build('id', 'params', 'returnType')
          .field('declare', Boolean, o['false'])
          .field('async', Boolean, o['false'])
          .field('generator', Boolean, o['false'])
          .field('id', l(i('Identifier'), null), o['null'])
          .field('params', [i('Pattern')])
          .field(
            'returnType',
            l(i('TSTypeAnnotation'), i('Noop'), null),
            o['null']
          )
        i('TSDeclareMethod')
          .bases('Declaration', 'TSHasOptionalTypeParameters')
          .build('key', 'params', 'returnType')
          .field('async', Boolean, o['false'])
          .field('generator', Boolean, o['false'])
          .field('params', [i('Pattern')])
          .field('abstract', Boolean, o['false'])
          .field(
            'accessibility',
            l('public', 'private', 'protected', void 0),
            o['undefined']
          )
          .field('static', Boolean, o['false'])
          .field('computed', Boolean, o['false'])
          .field('optional', Boolean, o['false'])
          .field(
            'key',
            l(
              i('Identifier'),
              i('StringLiteral'),
              i('NumericLiteral'),
              i('Expression')
            )
          )
          .field(
            'kind',
            l('get', 'set', 'method', 'constructor'),
            function getDefault() {
              return 'method'
            }
          )
          .field(
            'access',
            l('public', 'private', 'protected', void 0),
            o['undefined']
          )
          .field('decorators', l([i('Decorator')], null), o['null'])
          .field(
            'returnType',
            l(i('TSTypeAnnotation'), i('Noop'), null),
            o['null']
          )
        i('TSMappedType')
          .bases('TSType')
          .build('typeParameter', 'typeAnnotation')
          .field('readonly', l(Boolean, '+', '-'), o['false'])
          .field('typeParameter', i('TSTypeParameter'))
          .field('optional', l(Boolean, '+', '-'), o['false'])
          .field('typeAnnotation', l(i('TSType'), null), o['null'])
        i('TSTupleType')
          .bases('TSType')
          .build('elementTypes')
          .field('elementTypes', [i('TSType')])
        i('TSRestType')
          .bases('TSType')
          .build('typeAnnotation')
          .field('typeAnnotation', i('TSType'))
        i('TSOptionalType')
          .bases('TSType')
          .build('typeAnnotation')
          .field('typeAnnotation', i('TSType'))
        i('TSIndexedAccessType')
          .bases('TSType')
          .build('objectType', 'indexType')
          .field('objectType', i('TSType'))
          .field('indexType', i('TSType'))
        i('TSTypeOperator')
          .bases('TSType')
          .build('operator')
          .field('operator', String)
          .field('typeAnnotation', i('TSType'))
        i('TSTypeAnnotation')
          .bases('Node')
          .build('typeAnnotation')
          .field('typeAnnotation', l(i('TSType'), i('TSTypeAnnotation')))
        i('TSIndexSignature')
          .bases('Declaration', 'TSHasOptionalTypeAnnotation')
          .build('parameters', 'typeAnnotation')
          .field('parameters', [i('Identifier')])
          .field('readonly', Boolean, o['false'])
        i('TSPropertySignature')
          .bases('Declaration', 'TSHasOptionalTypeAnnotation')
          .build('key', 'typeAnnotation', 'optional')
          .field('key', i('Expression'))
          .field('computed', Boolean, o['false'])
          .field('readonly', Boolean, o['false'])
          .field('optional', Boolean, o['false'])
          .field('initializer', l(i('Expression'), null), o['null'])
        i('TSMethodSignature')
          .bases(
            'Declaration',
            'TSHasOptionalTypeParameters',
            'TSHasOptionalTypeAnnotation'
          )
          .build('key', 'parameters', 'typeAnnotation')
          .field('key', i('Expression'))
          .field('computed', Boolean, o['false'])
          .field('optional', Boolean, o['false'])
          .field('parameters', f)
        i('TSTypePredicate')
          .bases('TSTypeAnnotation')
          .build('parameterName', 'typeAnnotation')
          .field('parameterName', l(i('Identifier'), i('TSThisType')))
          .field('typeAnnotation', i('TSTypeAnnotation'))
        ;[
          'TSCallSignatureDeclaration',
          'TSConstructSignatureDeclaration',
        ].forEach(function (e) {
          i(e)
            .bases(
              'Declaration',
              'TSHasOptionalTypeParameters',
              'TSHasOptionalTypeAnnotation'
            )
            .build('parameters', 'typeAnnotation')
            .field('parameters', f)
        })
        i('TSEnumMember')
          .bases('Node')
          .build('id', 'initializer')
          .field('id', l(i('Identifier'), c))
          .field('initializer', l(i('Expression'), null), o['null'])
        i('TSTypeQuery')
          .bases('TSType')
          .build('exprName')
          .field('exprName', l(h, i('TSImportType')))
        var p = l(
          i('TSCallSignatureDeclaration'),
          i('TSConstructSignatureDeclaration'),
          i('TSIndexSignature'),
          i('TSMethodSignature'),
          i('TSPropertySignature')
        )
        i('TSTypeLiteral')
          .bases('TSType')
          .build('members')
          .field('members', [p])
        i('TSTypeParameter')
          .bases('Identifier')
          .build('name', 'constraint', 'default')
          .field('name', String)
          .field('constraint', l(i('TSType'), void 0), o['undefined'])
          .field('default', l(i('TSType'), void 0), o['undefined'])
        i('TSTypeAssertion')
          .bases('Expression', 'Pattern')
          .build('typeAnnotation', 'expression')
          .field('typeAnnotation', i('TSType'))
          .field('expression', i('Expression'))
          .field('extra', l({ parenthesized: Boolean }, null), o['null'])
        i('TSTypeParameterDeclaration')
          .bases('Declaration')
          .build('params')
          .field('params', [i('TSTypeParameter')])
        i('TSTypeParameterInstantiation')
          .bases('Node')
          .build('params')
          .field('params', [i('TSType')])
        i('TSEnumDeclaration')
          .bases('Declaration')
          .build('id', 'members')
          .field('id', i('Identifier'))
          .field('const', Boolean, o['false'])
          .field('declare', Boolean, o['false'])
          .field('members', [i('TSEnumMember')])
          .field('initializer', l(i('Expression'), null), o['null'])
        i('TSTypeAliasDeclaration')
          .bases('Declaration', 'TSHasOptionalTypeParameters')
          .build('id', 'typeAnnotation')
          .field('id', i('Identifier'))
          .field('declare', Boolean, o['false'])
          .field('typeAnnotation', i('TSType'))
        i('TSModuleBlock')
          .bases('Node')
          .build('body')
          .field('body', [i('Statement')])
        i('TSModuleDeclaration')
          .bases('Declaration')
          .build('id', 'body')
          .field('id', l(c, h))
          .field('declare', Boolean, o['false'])
          .field('global', Boolean, o['false'])
          .field(
            'body',
            l(i('TSModuleBlock'), i('TSModuleDeclaration'), null),
            o['null']
          )
        i('TSImportType')
          .bases('TSType', 'TSHasOptionalTypeParameterInstantiation')
          .build('argument', 'qualifier', 'typeParameters')
          .field('argument', c)
          .field('qualifier', l(h, void 0), o['undefined'])
        i('TSImportEqualsDeclaration')
          .bases('Declaration')
          .build('id', 'moduleReference')
          .field('id', i('Identifier'))
          .field('isExport', Boolean, o['false'])
          .field('moduleReference', l(h, i('TSExternalModuleReference')))
        i('TSExternalModuleReference')
          .bases('Declaration')
          .build('expression')
          .field('expression', c)
        i('TSExportAssignment')
          .bases('Statement')
          .build('expression')
          .field('expression', i('Expression'))
        i('TSNamespaceExportDeclaration')
          .bases('Declaration')
          .build('id')
          .field('id', i('Identifier'))
        i('TSInterfaceBody').bases('Node').build('body').field('body', [p])
        i('TSExpressionWithTypeArguments')
          .bases('TSType', 'TSHasOptionalTypeParameterInstantiation')
          .build('expression', 'typeParameters')
          .field('expression', h)
        i('TSInterfaceDeclaration')
          .bases('Declaration', 'TSHasOptionalTypeParameters')
          .build('id', 'body')
          .field('id', h)
          .field('declare', Boolean, o['false'])
          .field(
            'extends',
            l([i('TSExpressionWithTypeArguments')], null),
            o['null']
          )
          .field('body', i('TSInterfaceBody'))
        i('TSParameterProperty')
          .bases('Pattern')
          .build('parameter')
          .field(
            'accessibility',
            l('public', 'private', 'protected', void 0),
            o['undefined']
          )
          .field('readonly', Boolean, o['false'])
          .field('parameter', l(i('Identifier'), i('AssignmentPattern')))
        i('ClassProperty').field(
          'access',
          l('public', 'private', 'protected', void 0),
          o['undefined']
        )
        i('ClassBody').field('body', [
          l(
            i('MethodDefinition'),
            i('VariableDeclarator'),
            i('ClassPropertyDefinition'),
            i('ClassProperty'),
            i('ClassPrivateProperty'),
            i('ClassMethod'),
            i('ClassPrivateMethod'),
            i('TSDeclareMethod'),
            p
          ),
        ])
      }
      t.default = default_1
      e.exports = t['default']
    },
    997: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = i(r(504))
      var s = i(r(500))
      var u = i(r(890))
      var l = i(r(724))
      function default_1(e) {
        var t = createFork()
        var r = t.use(n.default)
        e.forEach(t.use)
        r.finalize()
        var i = t.use(a.default)
        return {
          Type: r.Type,
          builtInTypes: r.builtInTypes,
          namedTypes: r.namedTypes,
          builders: r.builders,
          defineMethod: r.defineMethod,
          getFieldNames: r.getFieldNames,
          getFieldValue: r.getFieldValue,
          eachField: r.eachField,
          someField: r.someField,
          getSupertypeNames: r.getSupertypeNames,
          getBuilderName: r.getBuilderName,
          astNodesAreEquivalent: t.use(s.default),
          finalize: r.finalize,
          Path: t.use(u.default),
          NodePath: t.use(l.default),
          PathVisitor: i,
          use: t.use,
          visit: i.visit,
        }
      }
      t.default = default_1
      function createFork() {
        var e = []
        var t = []
        function use(i) {
          var n = e.indexOf(i)
          if (n === -1) {
            n = e.length
            e.push(i)
            t[n] = i(r)
          }
          return t[n]
        }
        var r = { use: use }
        return r
      }
      e.exports = t['default']
    },
    895: (e, t) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: true })
      var r
      ;(function (e) {})((r = t.namedTypes || (t.namedTypes = {})))
    },
    500: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      function default_1(e) {
        var t = e.use(n.default)
        var r = t.getFieldNames
        var i = t.getFieldValue
        var a = t.builtInTypes.array
        var s = t.builtInTypes.object
        var u = t.builtInTypes.Date
        var l = t.builtInTypes.RegExp
        var o = Object.prototype.hasOwnProperty
        function astNodesAreEquivalent(e, t, r) {
          if (a.check(r)) {
            r.length = 0
          } else {
            r = null
          }
          return areEquivalent(e, t, r)
        }
        astNodesAreEquivalent.assert = function (e, t) {
          var r = []
          if (!astNodesAreEquivalent(e, t, r)) {
            if (r.length === 0) {
              if (e !== t) {
                throw new Error('Nodes must be equal')
              }
            } else {
              throw new Error(
                'Nodes differ in the following path: ' +
                  r.map(subscriptForProperty).join('')
              )
            }
          }
        }
        function subscriptForProperty(e) {
          if (/[_$a-z][_$a-z0-9]*/i.test(e)) {
            return '.' + e
          }
          return '[' + JSON.stringify(e) + ']'
        }
        function areEquivalent(e, t, r) {
          if (e === t) {
            return true
          }
          if (a.check(e)) {
            return arraysAreEquivalent(e, t, r)
          }
          if (s.check(e)) {
            return objectsAreEquivalent(e, t, r)
          }
          if (u.check(e)) {
            return u.check(t) && +e === +t
          }
          if (l.check(e)) {
            return (
              l.check(t) &&
              e.source === t.source &&
              e.global === t.global &&
              e.multiline === t.multiline &&
              e.ignoreCase === t.ignoreCase
            )
          }
          return e == t
        }
        function arraysAreEquivalent(e, t, r) {
          a.assert(e)
          var i = e.length
          if (!a.check(t) || t.length !== i) {
            if (r) {
              r.push('length')
            }
            return false
          }
          for (var n = 0; n < i; ++n) {
            if (r) {
              r.push(n)
            }
            if (n in e !== n in t) {
              return false
            }
            if (!areEquivalent(e[n], t[n], r)) {
              return false
            }
            if (r) {
              var s = r.pop()
              if (s !== n) {
                throw new Error('' + s)
              }
            }
          }
          return true
        }
        function objectsAreEquivalent(e, t, n) {
          s.assert(e)
          if (!s.check(t)) {
            return false
          }
          if (e.type !== t.type) {
            if (n) {
              n.push('type')
            }
            return false
          }
          var a = r(e)
          var u = a.length
          var l = r(t)
          var c = l.length
          if (u === c) {
            for (var h = 0; h < u; ++h) {
              var f = a[h]
              var p = i(e, f)
              var d = i(t, f)
              if (n) {
                n.push(f)
              }
              if (!areEquivalent(p, d, n)) {
                return false
              }
              if (n) {
                var m = n.pop()
                if (m !== f) {
                  throw new Error('' + m)
                }
              }
            }
            return true
          }
          if (!n) {
            return false
          }
          var v = Object.create(null)
          for (h = 0; h < u; ++h) {
            v[a[h]] = true
          }
          for (h = 0; h < c; ++h) {
            f = l[h]
            if (!o.call(v, f)) {
              n.push(f)
              return false
            }
            delete v[f]
          }
          for (f in v) {
            n.push(f)
            break
          }
          return false
        }
        return astNodesAreEquivalent
      }
      t.default = default_1
      e.exports = t['default']
    },
    724: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = i(r(890))
      var s = i(r(712))
      function nodePathPlugin(e) {
        var t = e.use(n.default)
        var r = t.namedTypes
        var i = t.builders
        var u = t.builtInTypes.number
        var l = t.builtInTypes.array
        var o = e.use(a.default)
        var c = e.use(s.default)
        var h = function NodePath(e, t, r) {
          if (!(this instanceof NodePath)) {
            throw new Error(
              "NodePath constructor cannot be invoked without 'new'"
            )
          }
          o.call(this, e, t, r)
        }
        var f = (h.prototype = Object.create(o.prototype, {
          constructor: {
            value: h,
            enumerable: false,
            writable: true,
            configurable: true,
          },
        }))
        Object.defineProperties(f, {
          node: {
            get: function () {
              Object.defineProperty(this, 'node', {
                configurable: true,
                value: this._computeNode(),
              })
              return this.node
            },
          },
          parent: {
            get: function () {
              Object.defineProperty(this, 'parent', {
                configurable: true,
                value: this._computeParent(),
              })
              return this.parent
            },
          },
          scope: {
            get: function () {
              Object.defineProperty(this, 'scope', {
                configurable: true,
                value: this._computeScope(),
              })
              return this.scope
            },
          },
        })
        f.replace = function () {
          delete this.node
          delete this.parent
          delete this.scope
          return o.prototype.replace.apply(this, arguments)
        }
        f.prune = function () {
          var e = this.parent
          this.replace()
          return cleanUpNodesAfterPrune(e)
        }
        f._computeNode = function () {
          var e = this.value
          if (r.Node.check(e)) {
            return e
          }
          var t = this.parentPath
          return (t && t.node) || null
        }
        f._computeParent = function () {
          var e = this.value
          var t = this.parentPath
          if (!r.Node.check(e)) {
            while (t && !r.Node.check(t.value)) {
              t = t.parentPath
            }
            if (t) {
              t = t.parentPath
            }
          }
          while (t && !r.Node.check(t.value)) {
            t = t.parentPath
          }
          return t || null
        }
        f._computeScope = function () {
          var e = this.value
          var t = this.parentPath
          var i = t && t.scope
          if (r.Node.check(e) && c.isEstablishedBy(e)) {
            i = new c(this, i)
          }
          return i || null
        }
        f.getValueProperty = function (e) {
          return t.getFieldValue(this.value, e)
        }
        f.needsParens = function (e) {
          var t = this.parentPath
          if (!t) {
            return false
          }
          var i = this.value
          if (!r.Expression.check(i)) {
            return false
          }
          if (i.type === 'Identifier') {
            return false
          }
          while (!r.Node.check(t.value)) {
            t = t.parentPath
            if (!t) {
              return false
            }
          }
          var n = t.value
          switch (i.type) {
            case 'UnaryExpression':
            case 'SpreadElement':
            case 'SpreadProperty':
              return (
                n.type === 'MemberExpression' &&
                this.name === 'object' &&
                n.object === i
              )
            case 'BinaryExpression':
            case 'LogicalExpression':
              switch (n.type) {
                case 'CallExpression':
                  return this.name === 'callee' && n.callee === i
                case 'UnaryExpression':
                case 'SpreadElement':
                case 'SpreadProperty':
                  return true
                case 'MemberExpression':
                  return this.name === 'object' && n.object === i
                case 'BinaryExpression':
                case 'LogicalExpression': {
                  var a = i
                  var s = n.operator
                  var l = p[s]
                  var o = a.operator
                  var c = p[o]
                  if (l > c) {
                    return true
                  }
                  if (l === c && this.name === 'right') {
                    if (n.right !== a) {
                      throw new Error('Nodes must be equal')
                    }
                    return true
                  }
                }
                default:
                  return false
              }
            case 'SequenceExpression':
              switch (n.type) {
                case 'ForStatement':
                  return false
                case 'ExpressionStatement':
                  return this.name !== 'expression'
                default:
                  return true
              }
            case 'YieldExpression':
              switch (n.type) {
                case 'BinaryExpression':
                case 'LogicalExpression':
                case 'UnaryExpression':
                case 'SpreadElement':
                case 'SpreadProperty':
                case 'CallExpression':
                case 'MemberExpression':
                case 'NewExpression':
                case 'ConditionalExpression':
                case 'YieldExpression':
                  return true
                default:
                  return false
              }
            case 'Literal':
              return (
                n.type === 'MemberExpression' &&
                u.check(i.value) &&
                this.name === 'object' &&
                n.object === i
              )
            case 'AssignmentExpression':
            case 'ConditionalExpression':
              switch (n.type) {
                case 'UnaryExpression':
                case 'SpreadElement':
                case 'SpreadProperty':
                case 'BinaryExpression':
                case 'LogicalExpression':
                  return true
                case 'CallExpression':
                  return this.name === 'callee' && n.callee === i
                case 'ConditionalExpression':
                  return this.name === 'test' && n.test === i
                case 'MemberExpression':
                  return this.name === 'object' && n.object === i
                default:
                  return false
              }
            default:
              if (
                n.type === 'NewExpression' &&
                this.name === 'callee' &&
                n.callee === i
              ) {
                return containsCallExpression(i)
              }
          }
          if (
            e !== true &&
            !this.canBeFirstInStatement() &&
            this.firstInStatement()
          )
            return true
          return false
        }
        function isBinary(e) {
          return r.BinaryExpression.check(e) || r.LogicalExpression.check(e)
        }
        function isUnaryLike(e) {
          return (
            r.UnaryExpression.check(e) ||
            (r.SpreadElement && r.SpreadElement.check(e)) ||
            (r.SpreadProperty && r.SpreadProperty.check(e))
          )
        }
        var p = {}
        ;[
          ['||'],
          ['&&'],
          ['|'],
          ['^'],
          ['&'],
          ['==', '===', '!=', '!=='],
          ['<', '>', '<=', '>=', 'in', 'instanceof'],
          ['>>', '<<', '>>>'],
          ['+', '-'],
          ['*', '/', '%'],
        ].forEach(function (e, t) {
          e.forEach(function (e) {
            p[e] = t
          })
        })
        function containsCallExpression(e) {
          if (r.CallExpression.check(e)) {
            return true
          }
          if (l.check(e)) {
            return e.some(containsCallExpression)
          }
          if (r.Node.check(e)) {
            return t.someField(e, function (e, t) {
              return containsCallExpression(t)
            })
          }
          return false
        }
        f.canBeFirstInStatement = function () {
          var e = this.node
          return !r.FunctionExpression.check(e) && !r.ObjectExpression.check(e)
        }
        f.firstInStatement = function () {
          return firstInStatement(this)
        }
        function firstInStatement(e) {
          for (var t, i; e.parent; e = e.parent) {
            t = e.node
            i = e.parent.node
            if (
              r.BlockStatement.check(i) &&
              e.parent.name === 'body' &&
              e.name === 0
            ) {
              if (i.body[0] !== t) {
                throw new Error('Nodes must be equal')
              }
              return true
            }
            if (r.ExpressionStatement.check(i) && e.name === 'expression') {
              if (i.expression !== t) {
                throw new Error('Nodes must be equal')
              }
              return true
            }
            if (
              r.SequenceExpression.check(i) &&
              e.parent.name === 'expressions' &&
              e.name === 0
            ) {
              if (i.expressions[0] !== t) {
                throw new Error('Nodes must be equal')
              }
              continue
            }
            if (r.CallExpression.check(i) && e.name === 'callee') {
              if (i.callee !== t) {
                throw new Error('Nodes must be equal')
              }
              continue
            }
            if (r.MemberExpression.check(i) && e.name === 'object') {
              if (i.object !== t) {
                throw new Error('Nodes must be equal')
              }
              continue
            }
            if (r.ConditionalExpression.check(i) && e.name === 'test') {
              if (i.test !== t) {
                throw new Error('Nodes must be equal')
              }
              continue
            }
            if (isBinary(i) && e.name === 'left') {
              if (i.left !== t) {
                throw new Error('Nodes must be equal')
              }
              continue
            }
            if (
              r.UnaryExpression.check(i) &&
              !i.prefix &&
              e.name === 'argument'
            ) {
              if (i.argument !== t) {
                throw new Error('Nodes must be equal')
              }
              continue
            }
            return false
          }
          return true
        }
        function cleanUpNodesAfterPrune(e) {
          if (r.VariableDeclaration.check(e.node)) {
            var t = e.get('declarations').value
            if (!t || t.length === 0) {
              return e.prune()
            }
          } else if (r.ExpressionStatement.check(e.node)) {
            if (!e.get('expression').value) {
              return e.prune()
            }
          } else if (r.IfStatement.check(e.node)) {
            cleanUpIfStatementAfterPrune(e)
          }
          return e
        }
        function cleanUpIfStatementAfterPrune(e) {
          var t = e.get('test').value
          var n = e.get('alternate').value
          var a = e.get('consequent').value
          if (!a && !n) {
            var s = i.expressionStatement(t)
            e.replace(s)
          } else if (!a && n) {
            var u = i.unaryExpression('!', t, true)
            if (r.UnaryExpression.check(t) && t.operator === '!') {
              u = t.argument
            }
            e.get('test').replace(u)
            e.get('consequent').replace(n)
            e.get('alternate').replace()
          }
        }
        return h
      }
      t.default = nodePathPlugin
      e.exports = t['default']
    },
    504: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = i(r(724))
      var s = Object.prototype.hasOwnProperty
      function pathVisitorPlugin(e) {
        var t = e.use(n.default)
        var r = e.use(a.default)
        var i = t.builtInTypes.array
        var u = t.builtInTypes.object
        var l = t.builtInTypes.function
        var o
        var c = function PathVisitor() {
          if (!(this instanceof PathVisitor)) {
            throw new Error(
              "PathVisitor constructor cannot be invoked without 'new'"
            )
          }
          this._reusableContextStack = []
          this._methodNameTable = computeMethodNameTable(this)
          this._shouldVisitComments =
            s.call(this._methodNameTable, 'Block') ||
            s.call(this._methodNameTable, 'Line')
          this.Context = makeContextConstructor(this)
          this._visiting = false
          this._changeReported = false
        }
        function computeMethodNameTable(e) {
          var r = Object.create(null)
          for (var i in e) {
            if (/^visit[A-Z]/.test(i)) {
              r[i.slice('visit'.length)] = true
            }
          }
          var n = t.computeSupertypeLookupTable(r)
          var a = Object.create(null)
          var s = Object.keys(n)
          var u = s.length
          for (var o = 0; o < u; ++o) {
            var c = s[o]
            i = 'visit' + n[c]
            if (l.check(e[i])) {
              a[c] = i
            }
          }
          return a
        }
        c.fromMethodsObject = function fromMethodsObject(e) {
          if (e instanceof c) {
            return e
          }
          if (!u.check(e)) {
            return new c()
          }
          var t = function Visitor() {
            if (!(this instanceof Visitor)) {
              throw new Error(
                "Visitor constructor cannot be invoked without 'new'"
              )
            }
            c.call(this)
          }
          var r = (t.prototype = Object.create(h))
          r.constructor = t
          extend(r, e)
          extend(t, c)
          l.assert(t.fromMethodsObject)
          l.assert(t.visit)
          return new t()
        }
        function extend(e, t) {
          for (var r in t) {
            if (s.call(t, r)) {
              e[r] = t[r]
            }
          }
          return e
        }
        c.visit = function visit(e, t) {
          return c.fromMethodsObject(t).visit(e)
        }
        var h = c.prototype
        h.visit = function () {
          if (this._visiting) {
            throw new Error(
              'Recursively calling visitor.visit(path) resets visitor state. ' +
                'Try this.visit(path) or this.traverse(path) instead.'
            )
          }
          this._visiting = true
          this._changeReported = false
          this._abortRequested = false
          var e = arguments.length
          var t = new Array(e)
          for (var i = 0; i < e; ++i) {
            t[i] = arguments[i]
          }
          if (!(t[0] instanceof r)) {
            t[0] = new r({ root: t[0] }).get('root')
          }
          this.reset.apply(this, t)
          var n
          try {
            var a = this.visitWithoutReset(t[0])
            n = true
          } finally {
            this._visiting = false
            if (!n && this._abortRequested) {
              return t[0].value
            }
          }
          return a
        }
        h.AbortRequest = function AbortRequest() {}
        h.abort = function () {
          var e = this
          e._abortRequested = true
          var t = new e.AbortRequest()
          t.cancel = function () {
            e._abortRequested = false
          }
          throw t
        }
        h.reset = function (e) {}
        h.visitWithoutReset = function (e) {
          if (this instanceof this.Context) {
            return this.visitor.visitWithoutReset(e)
          }
          if (!(e instanceof r)) {
            throw new Error('')
          }
          var t = e.value
          var i =
            t &&
            typeof t === 'object' &&
            typeof t.type === 'string' &&
            this._methodNameTable[t.type]
          if (i) {
            var n = this.acquireContext(e)
            try {
              return n.invokeVisitorMethod(i)
            } finally {
              this.releaseContext(n)
            }
          } else {
            return visitChildren(e, this)
          }
        }
        function visitChildren(e, n) {
          if (!(e instanceof r)) {
            throw new Error('')
          }
          if (!(n instanceof c)) {
            throw new Error('')
          }
          var a = e.value
          if (i.check(a)) {
            e.each(n.visitWithoutReset, n)
          } else if (!u.check(a)) {
          } else {
            var l = t.getFieldNames(a)
            if (
              n._shouldVisitComments &&
              a.comments &&
              l.indexOf('comments') < 0
            ) {
              l.push('comments')
            }
            var o = l.length
            var h = []
            for (var f = 0; f < o; ++f) {
              var p = l[f]
              if (!s.call(a, p)) {
                a[p] = t.getFieldValue(a, p)
              }
              h.push(e.get(p))
            }
            for (var f = 0; f < o; ++f) {
              n.visitWithoutReset(h[f])
            }
          }
          return e.value
        }
        h.acquireContext = function (e) {
          if (this._reusableContextStack.length === 0) {
            return new this.Context(e)
          }
          return this._reusableContextStack.pop().reset(e)
        }
        h.releaseContext = function (e) {
          if (!(e instanceof this.Context)) {
            throw new Error('')
          }
          this._reusableContextStack.push(e)
          e.currentPath = null
        }
        h.reportChanged = function () {
          this._changeReported = true
        }
        h.wasChangeReported = function () {
          return this._changeReported
        }
        function makeContextConstructor(e) {
          function Context(t) {
            if (!(this instanceof Context)) {
              throw new Error('')
            }
            if (!(this instanceof c)) {
              throw new Error('')
            }
            if (!(t instanceof r)) {
              throw new Error('')
            }
            Object.defineProperty(this, 'visitor', {
              value: e,
              writable: false,
              enumerable: true,
              configurable: false,
            })
            this.currentPath = t
            this.needToCallTraverse = true
            Object.seal(this)
          }
          if (!(e instanceof c)) {
            throw new Error('')
          }
          var t = (Context.prototype = Object.create(e))
          t.constructor = Context
          extend(t, f)
          return Context
        }
        var f = Object.create(null)
        f.reset = function reset(e) {
          if (!(this instanceof this.Context)) {
            throw new Error('')
          }
          if (!(e instanceof r)) {
            throw new Error('')
          }
          this.currentPath = e
          this.needToCallTraverse = true
          return this
        }
        f.invokeVisitorMethod = function invokeVisitorMethod(e) {
          if (!(this instanceof this.Context)) {
            throw new Error('')
          }
          if (!(this.currentPath instanceof r)) {
            throw new Error('')
          }
          var t = this.visitor[e].call(this, this.currentPath)
          if (t === false) {
            this.needToCallTraverse = false
          } else if (t !== o) {
            this.currentPath = this.currentPath.replace(t)[0]
            if (this.needToCallTraverse) {
              this.traverse(this.currentPath)
            }
          }
          if (this.needToCallTraverse !== false) {
            throw new Error(
              'Must either call this.traverse or return false in ' + e
            )
          }
          var i = this.currentPath
          return i && i.value
        }
        f.traverse = function traverse(e, t) {
          if (!(this instanceof this.Context)) {
            throw new Error('')
          }
          if (!(e instanceof r)) {
            throw new Error('')
          }
          if (!(this.currentPath instanceof r)) {
            throw new Error('')
          }
          this.needToCallTraverse = false
          return visitChildren(e, c.fromMethodsObject(t || this.visitor))
        }
        f.visit = function visit(e, t) {
          if (!(this instanceof this.Context)) {
            throw new Error('')
          }
          if (!(e instanceof r)) {
            throw new Error('')
          }
          if (!(this.currentPath instanceof r)) {
            throw new Error('')
          }
          this.needToCallTraverse = false
          return c.fromMethodsObject(t || this.visitor).visitWithoutReset(e)
        }
        f.reportChanged = function reportChanged() {
          this.visitor.reportChanged()
        }
        f.abort = function abort() {
          this.needToCallTraverse = false
          this.visitor.abort()
        }
        return c
      }
      t.default = pathVisitorPlugin
      e.exports = t['default']
    },
    890: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = Object.prototype
      var s = a.hasOwnProperty
      function pathPlugin(e) {
        var t = e.use(n.default)
        var r = t.builtInTypes.array
        var i = t.builtInTypes.number
        var a = function Path(e, t, r) {
          if (!(this instanceof Path)) {
            throw new Error("Path constructor cannot be invoked without 'new'")
          }
          if (t) {
            if (!(t instanceof Path)) {
              throw new Error('')
            }
          } else {
            t = null
            r = null
          }
          this.value = e
          this.parentPath = t
          this.name = r
          this.__childCache = null
        }
        var u = a.prototype
        function getChildCache(e) {
          return e.__childCache || (e.__childCache = Object.create(null))
        }
        function getChildPath(e, t) {
          var r = getChildCache(e)
          var i = e.getValueProperty(t)
          var n = r[t]
          if (!s.call(r, t) || n.value !== i) {
            n = r[t] = new e.constructor(i, e, t)
          }
          return n
        }
        u.getValueProperty = function getValueProperty(e) {
          return this.value[e]
        }
        u.get = function get() {
          var e = []
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t]
          }
          var r = this
          var i = e.length
          for (var n = 0; n < i; ++n) {
            r = getChildPath(r, e[n])
          }
          return r
        }
        u.each = function each(e, t) {
          var r = []
          var i = this.value.length
          var n = 0
          for (var n = 0; n < i; ++n) {
            if (s.call(this.value, n)) {
              r[n] = this.get(n)
            }
          }
          t = t || this
          for (n = 0; n < i; ++n) {
            if (s.call(r, n)) {
              e.call(t, r[n])
            }
          }
        }
        u.map = function map(e, t) {
          var r = []
          this.each(function (t) {
            r.push(e.call(this, t))
          }, t)
          return r
        }
        u.filter = function filter(e, t) {
          var r = []
          this.each(function (t) {
            if (e.call(this, t)) {
              r.push(t)
            }
          }, t)
          return r
        }
        function emptyMoves() {}
        function getMoves(e, t, n, a) {
          r.assert(e.value)
          if (t === 0) {
            return emptyMoves
          }
          var u = e.value.length
          if (u < 1) {
            return emptyMoves
          }
          var l = arguments.length
          if (l === 2) {
            n = 0
            a = u
          } else if (l === 3) {
            n = Math.max(n, 0)
            a = u
          } else {
            n = Math.max(n, 0)
            a = Math.min(a, u)
          }
          i.assert(n)
          i.assert(a)
          var o = Object.create(null)
          var c = getChildCache(e)
          for (var h = n; h < a; ++h) {
            if (s.call(e.value, h)) {
              var f = e.get(h)
              if (f.name !== h) {
                throw new Error('')
              }
              var p = h + t
              f.name = p
              o[p] = f
              delete c[h]
            }
          }
          delete c.length
          return function () {
            for (var t in o) {
              var r = o[t]
              if (r.name !== +t) {
                throw new Error('')
              }
              c[t] = r
              e.value[t] = r.value
            }
          }
        }
        u.shift = function shift() {
          var e = getMoves(this, -1)
          var t = this.value.shift()
          e()
          return t
        }
        u.unshift = function unshift() {
          var e = []
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t]
          }
          var r = getMoves(this, e.length)
          var i = this.value.unshift.apply(this.value, e)
          r()
          return i
        }
        u.push = function push() {
          var e = []
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t]
          }
          r.assert(this.value)
          delete getChildCache(this).length
          return this.value.push.apply(this.value, e)
        }
        u.pop = function pop() {
          r.assert(this.value)
          var e = getChildCache(this)
          delete e[this.value.length - 1]
          delete e.length
          return this.value.pop()
        }
        u.insertAt = function insertAt(e) {
          var t = arguments.length
          var r = getMoves(this, t - 1, e)
          if (r === emptyMoves && t <= 1) {
            return this
          }
          e = Math.max(e, 0)
          for (var i = 1; i < t; ++i) {
            this.value[e + i - 1] = arguments[i]
          }
          r()
          return this
        }
        u.insertBefore = function insertBefore() {
          var e = []
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t]
          }
          var r = this.parentPath
          var i = e.length
          var n = [this.name]
          for (var a = 0; a < i; ++a) {
            n.push(e[a])
          }
          return r.insertAt.apply(r, n)
        }
        u.insertAfter = function insertAfter() {
          var e = []
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t]
          }
          var r = this.parentPath
          var i = e.length
          var n = [this.name + 1]
          for (var a = 0; a < i; ++a) {
            n.push(e[a])
          }
          return r.insertAt.apply(r, n)
        }
        function repairRelationshipWithParent(e) {
          if (!(e instanceof a)) {
            throw new Error('')
          }
          var t = e.parentPath
          if (!t) {
            return e
          }
          var i = t.value
          var n = getChildCache(t)
          if (i[e.name] === e.value) {
            n[e.name] = e
          } else if (r.check(i)) {
            var s = i.indexOf(e.value)
            if (s >= 0) {
              n[(e.name = s)] = e
            }
          } else {
            i[e.name] = e.value
            n[e.name] = e
          }
          if (i[e.name] !== e.value) {
            throw new Error('')
          }
          if (e.parentPath.get(e.name) !== e) {
            throw new Error('')
          }
          return e
        }
        u.replace = function replace(e) {
          var t = []
          var i = this.parentPath.value
          var n = getChildCache(this.parentPath)
          var a = arguments.length
          repairRelationshipWithParent(this)
          if (r.check(i)) {
            var s = i.length
            var u = getMoves(this.parentPath, a - 1, this.name + 1)
            var l = [this.name, 1]
            for (var o = 0; o < a; ++o) {
              l.push(arguments[o])
            }
            var c = i.splice.apply(i, l)
            if (c[0] !== this.value) {
              throw new Error('')
            }
            if (i.length !== s - 1 + a) {
              throw new Error('')
            }
            u()
            if (a === 0) {
              delete this.value
              delete n[this.name]
              this.__childCache = null
            } else {
              if (i[this.name] !== e) {
                throw new Error('')
              }
              if (this.value !== e) {
                this.value = e
                this.__childCache = null
              }
              for (o = 0; o < a; ++o) {
                t.push(this.parentPath.get(this.name + o))
              }
              if (t[0] !== this) {
                throw new Error('')
              }
            }
          } else if (a === 1) {
            if (this.value !== e) {
              this.__childCache = null
            }
            this.value = i[this.name] = e
            t.push(this)
          } else if (a === 0) {
            delete i[this.name]
            delete this.value
            this.__childCache = null
          } else {
            throw new Error('Could not replace path')
          }
          return t
        }
        return a
      }
      t.default = pathPlugin
      e.exports = t['default']
    },
    712: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      var a = Object.prototype.hasOwnProperty
      function scopePlugin(e) {
        var t = e.use(n.default)
        var r = t.Type
        var i = t.namedTypes
        var s = i.Node
        var u = i.Expression
        var l = t.builtInTypes.array
        var o = t.builders
        var c = function Scope(e, t) {
          if (!(this instanceof Scope)) {
            throw new Error("Scope constructor cannot be invoked without 'new'")
          }
          f.assert(e.value)
          var r
          if (t) {
            if (!(t instanceof Scope)) {
              throw new Error('')
            }
            r = t.depth + 1
          } else {
            t = null
            r = 0
          }
          Object.defineProperties(this, {
            path: { value: e },
            node: { value: e.value },
            isGlobal: { value: !t, enumerable: true },
            depth: { value: r },
            parent: { value: t },
            bindings: { value: {} },
            types: { value: {} },
          })
        }
        var h = [i.Program, i.Function, i.CatchClause]
        var f = r.or.apply(r, h)
        c.isEstablishedBy = function (e) {
          return f.check(e)
        }
        var p = c.prototype
        p.didScan = false
        p.declares = function (e) {
          this.scan()
          return a.call(this.bindings, e)
        }
        p.declaresType = function (e) {
          this.scan()
          return a.call(this.types, e)
        }
        p.declareTemporary = function (e) {
          if (e) {
            if (!/^[a-z$_]/i.test(e)) {
              throw new Error('')
            }
          } else {
            e = 't$'
          }
          e += this.depth.toString(36) + '$'
          this.scan()
          var r = 0
          while (this.declares(e + r)) {
            ++r
          }
          var i = e + r
          return (this.bindings[i] = t.builders.identifier(i))
        }
        p.injectTemporary = function (e, t) {
          e || (e = this.declareTemporary())
          var r = this.path.get('body')
          if (i.BlockStatement.check(r.value)) {
            r = r.get('body')
          }
          r.unshift(
            o.variableDeclaration('var', [o.variableDeclarator(e, t || null)])
          )
          return e
        }
        p.scan = function (e) {
          if (e || !this.didScan) {
            for (var t in this.bindings) {
              delete this.bindings[t]
            }
            scanScope(this.path, this.bindings, this.types)
            this.didScan = true
          }
        }
        p.getBindings = function () {
          this.scan()
          return this.bindings
        }
        p.getTypes = function () {
          this.scan()
          return this.types
        }
        function scanScope(e, t, r) {
          var n = e.value
          f.assert(n)
          if (i.CatchClause.check(n)) {
            addPattern(e.get('param'), t)
          } else {
            recursiveScanScope(e, t, r)
          }
        }
        function recursiveScanScope(e, r, n) {
          var a = e.value
          if (
            e.parent &&
            i.FunctionExpression.check(e.parent.node) &&
            e.parent.node.id
          ) {
            addPattern(e.parent.get('id'), r)
          }
          if (!a) {
          } else if (l.check(a)) {
            e.each(function (e) {
              recursiveScanChild(e, r, n)
            })
          } else if (i.Function.check(a)) {
            e.get('params').each(function (e) {
              addPattern(e, r)
            })
            recursiveScanChild(e.get('body'), r, n)
          } else if (
            (i.TypeAlias && i.TypeAlias.check(a)) ||
            (i.InterfaceDeclaration && i.InterfaceDeclaration.check(a)) ||
            (i.TSTypeAliasDeclaration && i.TSTypeAliasDeclaration.check(a)) ||
            (i.TSInterfaceDeclaration && i.TSInterfaceDeclaration.check(a))
          ) {
            addTypePattern(e.get('id'), n)
          } else if (i.VariableDeclarator.check(a)) {
            addPattern(e.get('id'), r)
            recursiveScanChild(e.get('init'), r, n)
          } else if (
            a.type === 'ImportSpecifier' ||
            a.type === 'ImportNamespaceSpecifier' ||
            a.type === 'ImportDefaultSpecifier'
          ) {
            addPattern(e.get(a.local ? 'local' : a.name ? 'name' : 'id'), r)
          } else if (s.check(a) && !u.check(a)) {
            t.eachField(a, function (t, i) {
              var a = e.get(t)
              if (!pathHasValue(a, i)) {
                throw new Error('')
              }
              recursiveScanChild(a, r, n)
            })
          }
        }
        function pathHasValue(e, t) {
          if (e.value === t) {
            return true
          }
          if (
            Array.isArray(e.value) &&
            e.value.length === 0 &&
            Array.isArray(t) &&
            t.length === 0
          ) {
            return true
          }
          return false
        }
        function recursiveScanChild(e, t, r) {
          var n = e.value
          if (!n || u.check(n)) {
          } else if (i.FunctionDeclaration.check(n) && n.id !== null) {
            addPattern(e.get('id'), t)
          } else if (i.ClassDeclaration && i.ClassDeclaration.check(n)) {
            addPattern(e.get('id'), t)
          } else if (f.check(n)) {
            if (i.CatchClause.check(n) && i.Identifier.check(n.param)) {
              var s = n.param.name
              var l = a.call(t, s)
              recursiveScanScope(e.get('body'), t, r)
              if (!l) {
                delete t[s]
              }
            }
          } else {
            recursiveScanScope(e, t, r)
          }
        }
        function addPattern(e, t) {
          var r = e.value
          i.Pattern.assert(r)
          if (i.Identifier.check(r)) {
            if (a.call(t, r.name)) {
              t[r.name].push(e)
            } else {
              t[r.name] = [e]
            }
          } else if (i.AssignmentPattern && i.AssignmentPattern.check(r)) {
            addPattern(e.get('left'), t)
          } else if (i.ObjectPattern && i.ObjectPattern.check(r)) {
            e.get('properties').each(function (e) {
              var r = e.value
              if (i.Pattern.check(r)) {
                addPattern(e, t)
              } else if (i.Property.check(r)) {
                addPattern(e.get('value'), t)
              } else if (i.SpreadProperty && i.SpreadProperty.check(r)) {
                addPattern(e.get('argument'), t)
              }
            })
          } else if (i.ArrayPattern && i.ArrayPattern.check(r)) {
            e.get('elements').each(function (e) {
              var r = e.value
              if (i.Pattern.check(r)) {
                addPattern(e, t)
              } else if (i.SpreadElement && i.SpreadElement.check(r)) {
                addPattern(e.get('argument'), t)
              }
            })
          } else if (i.PropertyPattern && i.PropertyPattern.check(r)) {
            addPattern(e.get('pattern'), t)
          } else if (
            (i.SpreadElementPattern && i.SpreadElementPattern.check(r)) ||
            (i.SpreadPropertyPattern && i.SpreadPropertyPattern.check(r))
          ) {
            addPattern(e.get('argument'), t)
          }
        }
        function addTypePattern(e, t) {
          var r = e.value
          i.Pattern.assert(r)
          if (i.Identifier.check(r)) {
            if (a.call(t, r.name)) {
              t[r.name].push(e)
            } else {
              t[r.name] = [e]
            }
          }
        }
        p.lookup = function (e) {
          for (var t = this; t; t = t.parent) if (t.declares(e)) break
          return t
        }
        p.lookupType = function (e) {
          for (var t = this; t; t = t.parent) if (t.declaresType(e)) break
          return t
        }
        p.getGlobalScope = function () {
          var e = this
          while (!e.isGlobal) e = e.parent
          return e
        }
        return c
      }
      t.default = scopePlugin
      e.exports = t['default']
    },
    574: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(361))
      function default_1(e) {
        var t = e.use(n.default)
        var r = t.Type
        var i = t.builtInTypes
        var a = i.number
        function geq(e) {
          return r.from(function (t) {
            return a.check(t) && t >= e
          }, a + ' >= ' + e)
        }
        var s = {
          null: function () {
            return null
          },
          emptyArray: function () {
            return []
          },
          false: function () {
            return false
          },
          true: function () {
            return true
          },
          undefined: function () {},
          'use strict': function () {
            return 'use strict'
          },
        }
        var u = r.or(i.string, i.number, i.boolean, i.null, i.undefined)
        var l = r.from(function (e) {
          if (e === null) return true
          var t = typeof e
          if (t === 'object' || t === 'function') {
            return false
          }
          return true
        }, u.toString())
        return { geq: geq, defaults: s, isPrimitive: l }
      }
      t.default = default_1
      e.exports = t['default']
    },
    361: function (e, t) {
      'use strict'
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var r in t) if (t.hasOwnProperty(r)) e[r] = t[r]
              }
            return e(t, r)
          }
          return function (t, r) {
            e(t, r)
            function __() {
              this.constructor = t
            }
            t.prototype =
              r === null
                ? Object.create(r)
                : ((__.prototype = r.prototype), new __())
          }
        })()
      Object.defineProperty(t, '__esModule', { value: true })
      var i = Object.prototype
      var n = i.toString
      var a = i.hasOwnProperty
      var s = (function () {
        function BaseType() {}
        BaseType.prototype.assert = function (e, t) {
          if (!this.check(e, t)) {
            var r = shallowStringify(e)
            throw new Error(r + ' does not match type ' + this)
          }
          return true
        }
        BaseType.prototype.arrayOf = function () {
          var e = this
          return new u(e)
        }
        return BaseType
      })()
      var u = (function (e) {
        r(ArrayType, e)
        function ArrayType(t) {
          var r = e.call(this) || this
          r.elemType = t
          r.kind = 'ArrayType'
          return r
        }
        ArrayType.prototype.toString = function () {
          return '[' + this.elemType + ']'
        }
        ArrayType.prototype.check = function (e, t) {
          var r = this
          return (
            Array.isArray(e) &&
            e.every(function (e) {
              return r.elemType.check(e, t)
            })
          )
        }
        return ArrayType
      })(s)
      var l = (function (e) {
        r(IdentityType, e)
        function IdentityType(t) {
          var r = e.call(this) || this
          r.value = t
          r.kind = 'IdentityType'
          return r
        }
        IdentityType.prototype.toString = function () {
          return String(this.value)
        }
        IdentityType.prototype.check = function (e, t) {
          var r = e === this.value
          if (!r && typeof t === 'function') {
            t(this, e)
          }
          return r
        }
        return IdentityType
      })(s)
      var o = (function (e) {
        r(ObjectType, e)
        function ObjectType(t) {
          var r = e.call(this) || this
          r.fields = t
          r.kind = 'ObjectType'
          return r
        }
        ObjectType.prototype.toString = function () {
          return '{ ' + this.fields.join(', ') + ' }'
        }
        ObjectType.prototype.check = function (e, t) {
          return (
            n.call(e) === n.call({}) &&
            this.fields.every(function (r) {
              return r.type.check(e[r.name], t)
            })
          )
        }
        return ObjectType
      })(s)
      var c = (function (e) {
        r(OrType, e)
        function OrType(t) {
          var r = e.call(this) || this
          r.types = t
          r.kind = 'OrType'
          return r
        }
        OrType.prototype.toString = function () {
          return this.types.join(' | ')
        }
        OrType.prototype.check = function (e, t) {
          return this.types.some(function (r) {
            return r.check(e, t)
          })
        }
        return OrType
      })(s)
      var h = (function (e) {
        r(PredicateType, e)
        function PredicateType(t, r) {
          var i = e.call(this) || this
          i.name = t
          i.predicate = r
          i.kind = 'PredicateType'
          return i
        }
        PredicateType.prototype.toString = function () {
          return this.name
        }
        PredicateType.prototype.check = function (e, t) {
          var r = this.predicate(e, t)
          if (!r && typeof t === 'function') {
            t(this, e)
          }
          return r
        }
        return PredicateType
      })(s)
      var f = (function () {
        function Def(e, t) {
          this.type = e
          this.typeName = t
          this.baseNames = []
          this.ownFields = Object.create(null)
          this.allSupertypes = Object.create(null)
          this.supertypeList = []
          this.allFields = Object.create(null)
          this.fieldNames = []
          this.finalized = false
          this.buildable = false
          this.buildParams = []
        }
        Def.prototype.isSupertypeOf = function (e) {
          if (e instanceof Def) {
            if (this.finalized !== true || e.finalized !== true) {
              throw new Error('')
            }
            return a.call(e.allSupertypes, this.typeName)
          } else {
            throw new Error(e + ' is not a Def')
          }
        }
        Def.prototype.checkAllFields = function (e, t) {
          var r = this.allFields
          if (this.finalized !== true) {
            throw new Error('' + this.typeName)
          }
          function checkFieldByName(i) {
            var n = r[i]
            var a = n.type
            var s = n.getValue(e)
            return a.check(s, t)
          }
          return (
            e !== null &&
            typeof e === 'object' &&
            Object.keys(r).every(checkFieldByName)
          )
        }
        Def.prototype.bases = function () {
          var e = []
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t]
          }
          var r = this.baseNames
          if (this.finalized) {
            if (e.length !== r.length) {
              throw new Error('')
            }
            for (var i = 0; i < e.length; i++) {
              if (e[i] !== r[i]) {
                throw new Error('')
              }
            }
            return this
          }
          e.forEach(function (e) {
            if (r.indexOf(e) < 0) {
              r.push(e)
            }
          })
          return this
        }
        return Def
      })()
      t.Def = f
      var p = (function () {
        function Field(e, t, r, i) {
          this.name = e
          this.type = t
          this.defaultFn = r
          this.hidden = !!i
        }
        Field.prototype.toString = function () {
          return JSON.stringify(this.name) + ': ' + this.type
        }
        Field.prototype.getValue = function (e) {
          var t = e[this.name]
          if (typeof t !== 'undefined') {
            return t
          }
          if (typeof this.defaultFn === 'function') {
            t = this.defaultFn.call(e)
          }
          return t
        }
        return Field
      })()
      function shallowStringify(e) {
        if (Array.isArray(e)) {
          return '[' + e.map(shallowStringify).join(', ') + ']'
        }
        if (e && typeof e === 'object') {
          return (
            '{ ' +
            Object.keys(e)
              .map(function (t) {
                return t + ': ' + e[t]
              })
              .join(', ') +
            ' }'
          )
        }
        return JSON.stringify(e)
      }
      function typesPlugin(e) {
        var t = {
          or: function () {
            var e = []
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r]
            }
            return new c(
              e.map(function (e) {
                return t.from(e)
              })
            )
          },
          from: function (e, r) {
            if (
              e instanceof u ||
              e instanceof l ||
              e instanceof o ||
              e instanceof c ||
              e instanceof h
            ) {
              return e
            }
            if (e instanceof f) {
              return e.type
            }
            if (y.check(e)) {
              if (e.length !== 1) {
                throw new Error(
                  'only one element type is permitted for typed arrays'
                )
              }
              return new u(t.from(e[0]))
            }
            if (x.check(e)) {
              return new o(
                Object.keys(e).map(function (r) {
                  return new p(r, t.from(e[r], r))
                })
              )
            }
            if (typeof e === 'function') {
              var n = i.indexOf(e)
              if (n >= 0) {
                return s[n]
              }
              if (typeof r !== 'string') {
                throw new Error('missing name')
              }
              return new h(r, e)
            }
            return new l(e)
          },
          def: function (e) {
            return a.call(A, e) ? A[e] : (A[e] = new T(e))
          },
          hasDef: function (e) {
            return a.call(A, e)
          },
        }
        var i = []
        var s = []
        var d = {}
        function defBuiltInType(e, t) {
          var r = n.call(e)
          var a = new h(t, function (e) {
            return n.call(e) === r
          })
          d[t] = a
          if (e && typeof e.constructor === 'function') {
            i.push(e.constructor)
            s.push(a)
          }
          return a
        }
        var m = defBuiltInType('truthy', 'string')
        var v = defBuiltInType(function () {}, 'function')
        var y = defBuiltInType([], 'array')
        var x = defBuiltInType({}, 'object')
        var E = defBuiltInType(/./, 'RegExp')
        var S = defBuiltInType(new Date(), 'Date')
        var D = defBuiltInType(3, 'number')
        var b = defBuiltInType(true, 'boolean')
        var g = defBuiltInType(null, 'null')
        var C = defBuiltInType(void 0, 'undefined')
        var A = Object.create(null)
        function defFromValue(e) {
          if (e && typeof e === 'object') {
            var t = e.type
            if (typeof t === 'string' && a.call(A, t)) {
              var r = A[t]
              if (r.finalized) {
                return r
              }
            }
          }
          return null
        }
        var T = (function (e) {
          r(DefImpl, e)
          function DefImpl(t) {
            var r =
              e.call(
                this,
                new h(t, function (e, t) {
                  return r.check(e, t)
                }),
                t
              ) || this
            return r
          }
          DefImpl.prototype.check = function (e, t) {
            if (this.finalized !== true) {
              throw new Error(
                'prematurely checking unfinalized type ' + this.typeName
              )
            }
            if (e === null || typeof e !== 'object') {
              return false
            }
            var r = defFromValue(e)
            if (!r) {
              if (
                this.typeName === 'SourceLocation' ||
                this.typeName === 'Position'
              ) {
                return this.checkAllFields(e, t)
              }
              return false
            }
            if (t && r === this) {
              return this.checkAllFields(e, t)
            }
            if (!this.isSupertypeOf(r)) {
              return false
            }
            if (!t) {
              return true
            }
            return r.checkAllFields(e, t) && this.checkAllFields(e, false)
          }
          DefImpl.prototype.build = function () {
            var e = this
            var t = []
            for (var r = 0; r < arguments.length; r++) {
              t[r] = arguments[r]
            }
            this.buildParams = t
            if (this.buildable) {
              return this
            }
            this.field('type', String, function () {
              return e.typeName
            })
            this.buildable = true
            var i = function (t, r, i, n) {
              if (a.call(t, r)) return
              var s = e.allFields
              if (!a.call(s, r)) {
                throw new Error('' + r)
              }
              var u = s[r]
              var l = u.type
              var o
              if (n) {
                o = i
              } else if (u.defaultFn) {
                o = u.defaultFn.call(t)
              } else {
                var c =
                  'no value or default function given for field ' +
                  JSON.stringify(r) +
                  ' of ' +
                  e.typeName +
                  '(' +
                  e.buildParams
                    .map(function (e) {
                      return s[e]
                    })
                    .join(', ') +
                  ')'
                throw new Error(c)
              }
              if (!l.check(o)) {
                throw new Error(
                  shallowStringify(o) +
                    ' does not match field ' +
                    u +
                    ' of type ' +
                    e.typeName
                )
              }
              t[r] = o
            }
            var n = function () {
              var t = []
              for (var r = 0; r < arguments.length; r++) {
                t[r] = arguments[r]
              }
              var n = t.length
              if (!e.finalized) {
                throw new Error(
                  'attempting to instantiate unfinalized type ' + e.typeName
                )
              }
              var a = Object.create(w)
              e.buildParams.forEach(function (e, r) {
                if (r < n) {
                  i(a, e, t[r], true)
                } else {
                  i(a, e, null, false)
                }
              })
              Object.keys(e.allFields).forEach(function (e) {
                i(a, e, null, false)
              })
              if (a.type !== e.typeName) {
                throw new Error('')
              }
              return a
            }
            n.from = function (t) {
              if (!e.finalized) {
                throw new Error(
                  'attempting to instantiate unfinalized type ' + e.typeName
                )
              }
              var r = Object.create(w)
              Object.keys(e.allFields).forEach(function (e) {
                if (a.call(t, e)) {
                  i(r, e, t[e], true)
                } else {
                  i(r, e, null, false)
                }
              })
              if (r.type !== e.typeName) {
                throw new Error('')
              }
              return r
            }
            Object.defineProperty(F, getBuilderName(this.typeName), {
              enumerable: true,
              value: n,
            })
            return this
          }
          DefImpl.prototype.field = function (e, r, i, n) {
            if (this.finalized) {
              console.error(
                'Ignoring attempt to redefine field ' +
                  JSON.stringify(e) +
                  ' of finalized type ' +
                  JSON.stringify(this.typeName)
              )
              return this
            }
            this.ownFields[e] = new p(e, t.from(r), i, n)
            return this
          }
          DefImpl.prototype.finalize = function () {
            var e = this
            if (!this.finalized) {
              var t = this.allFields
              var r = this.allSupertypes
              this.baseNames.forEach(function (i) {
                var n = A[i]
                if (n instanceof f) {
                  n.finalize()
                  extend(t, n.allFields)
                  extend(r, n.allSupertypes)
                } else {
                  var a =
                    'unknown supertype name ' +
                    JSON.stringify(i) +
                    ' for subtype ' +
                    JSON.stringify(e.typeName)
                  throw new Error(a)
                }
              })
              extend(t, this.ownFields)
              r[this.typeName] = this
              this.fieldNames.length = 0
              for (var i in t) {
                if (a.call(t, i) && !t[i].hidden) {
                  this.fieldNames.push(i)
                }
              }
              Object.defineProperty(P, this.typeName, {
                enumerable: true,
                value: this.type,
              })
              this.finalized = true
              populateSupertypeList(this.typeName, this.supertypeList)
              if (
                this.buildable &&
                this.supertypeList.lastIndexOf('Expression') >= 0
              ) {
                wrapExpressionBuilderWithStatement(this.typeName)
              }
            }
          }
          return DefImpl
        })(f)
        function getSupertypeNames(e) {
          if (!a.call(A, e)) {
            throw new Error('')
          }
          var t = A[e]
          if (t.finalized !== true) {
            throw new Error('')
          }
          return t.supertypeList.slice(1)
        }
        function computeSupertypeLookupTable(e) {
          var t = {}
          var r = Object.keys(A)
          var i = r.length
          for (var n = 0; n < i; ++n) {
            var s = r[n]
            var u = A[s]
            if (u.finalized !== true) {
              throw new Error('' + s)
            }
            for (var l = 0; l < u.supertypeList.length; ++l) {
              var o = u.supertypeList[l]
              if (a.call(e, o)) {
                t[s] = o
                break
              }
            }
          }
          return t
        }
        var F = Object.create(null)
        var w = {}
        function defineMethod(e, t) {
          var r = w[e]
          if (C.check(t)) {
            delete w[e]
          } else {
            v.assert(t)
            Object.defineProperty(w, e, {
              enumerable: true,
              configurable: true,
              value: t,
            })
          }
          return r
        }
        function getBuilderName(e) {
          return e.replace(/^[A-Z]+/, function (e) {
            var t = e.length
            switch (t) {
              case 0:
                return ''
              case 1:
                return e.toLowerCase()
              default:
                return e.slice(0, t - 1).toLowerCase() + e.charAt(t - 1)
            }
          })
        }
        function getStatementBuilderName(e) {
          e = getBuilderName(e)
          return e.replace(/(Expression)?$/, 'Statement')
        }
        var P = {}
        function getFieldNames(e) {
          var t = defFromValue(e)
          if (t) {
            return t.fieldNames.slice(0)
          }
          if ('type' in e) {
            throw new Error(
              'did not recognize object of type ' + JSON.stringify(e.type)
            )
          }
          return Object.keys(e)
        }
        function getFieldValue(e, t) {
          var r = defFromValue(e)
          if (r) {
            var i = r.allFields[t]
            if (i) {
              return i.getValue(e)
            }
          }
          return e && e[t]
        }
        function eachField(e, t, r) {
          getFieldNames(e).forEach(function (r) {
            t.call(this, r, getFieldValue(e, r))
          }, r)
        }
        function someField(e, t, r) {
          return getFieldNames(e).some(function (r) {
            return t.call(this, r, getFieldValue(e, r))
          }, r)
        }
        function wrapExpressionBuilderWithStatement(e) {
          var t = getStatementBuilderName(e)
          if (F[t]) return
          var r = F[getBuilderName(e)]
          if (!r) return
          var i = function () {
            var e = []
            for (var t = 0; t < arguments.length; t++) {
              e[t] = arguments[t]
            }
            return F.expressionStatement(r.apply(F, e))
          }
          i.from = function () {
            var e = []
            for (var t = 0; t < arguments.length; t++) {
              e[t] = arguments[t]
            }
            return F.expressionStatement(r.from.apply(F, e))
          }
          F[t] = i
        }
        function populateSupertypeList(e, t) {
          t.length = 0
          t.push(e)
          var r = Object.create(null)
          for (var i = 0; i < t.length; ++i) {
            e = t[i]
            var n = A[e]
            if (n.finalized !== true) {
              throw new Error('')
            }
            if (a.call(r, e)) {
              delete t[r[e]]
            }
            r[e] = i
            t.push.apply(t, n.baseNames)
          }
          for (var s = 0, u = s, l = t.length; u < l; ++u) {
            if (a.call(t, u)) {
              t[s++] = t[u]
            }
          }
          t.length = s
        }
        function extend(e, t) {
          Object.keys(t).forEach(function (r) {
            e[r] = t[r]
          })
          return e
        }
        function finalize() {
          Object.keys(A).forEach(function (e) {
            A[e].finalize()
          })
        }
        return {
          Type: t,
          builtInTypes: d,
          getSupertypeNames: getSupertypeNames,
          computeSupertypeLookupTable: computeSupertypeLookupTable,
          builders: F,
          defineMethod: defineMethod,
          getBuilderName: getBuilderName,
          getStatementBuilderName: getStatementBuilderName,
          namedTypes: P,
          getFieldNames: getFieldNames,
          getFieldValue: getFieldValue,
          eachField: eachField,
          someField: someField,
          finalize: finalize,
        }
      }
      t.default = typesPlugin
    },
    593: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(997))
      var a = i(r(201))
      var s = i(r(933))
      var u = i(r(8))
      var l = i(r(894))
      var o = i(r(544))
      var c = i(r(188))
      var h = i(r(716))
      var f = i(r(284))
      var p = i(r(735))
      var d = r(895)
      t.namedTypes = d.namedTypes
      var m = n.default([
          a.default,
          s.default,
          u.default,
          l.default,
          o.default,
          c.default,
          h.default,
          f.default,
          p.default,
        ]),
        v = m.astNodesAreEquivalent,
        y = m.builders,
        x = m.builtInTypes,
        E = m.defineMethod,
        S = m.eachField,
        D = m.finalize,
        b = m.getBuilderName,
        g = m.getFieldNames,
        C = m.getFieldValue,
        A = m.getSupertypeNames,
        T = m.namedTypes,
        F = m.NodePath,
        w = m.Path,
        P = m.PathVisitor,
        k = m.someField,
        B = m.Type,
        M = m.use,
        I = m.visit
      t.astNodesAreEquivalent = v
      t.builders = y
      t.builtInTypes = x
      t.defineMethod = E
      t.eachField = S
      t.finalize = D
      t.getBuilderName = b
      t.getFieldNames = g
      t.getFieldValue = C
      t.getSupertypeNames = A
      t.NodePath = F
      t.Path = w
      t.PathVisitor = P
      t.someField = k
      t.Type = B
      t.use = M
      t.visit = I
      Object.assign(d.namedTypes, T)
    },
    609: function (e) {
      ;(function webpackUniversalModuleDefinition(t, r) {
        if (true) e.exports = r()
        else {
        }
      })(this, function () {
        return (function (e) {
          var t = {}
          function __nested_webpack_require_583__(r) {
            if (t[r]) return t[r].exports
            var i = (t[r] = { exports: {}, id: r, loaded: false })
            e[r].call(i.exports, i, i.exports, __nested_webpack_require_583__)
            i.loaded = true
            return i.exports
          }
          __nested_webpack_require_583__.m = e
          __nested_webpack_require_583__.c = t
          __nested_webpack_require_583__.p = ''
          return __nested_webpack_require_583__(0)
        })([
          function (e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = r(1)
            var n = r(3)
            var a = r(8)
            var s = r(15)
            function parse(e, t, r) {
              var s = null
              var u = function (e, t) {
                if (r) {
                  r(e, t)
                }
                if (s) {
                  s.visit(e, t)
                }
              }
              var l = typeof r === 'function' ? u : null
              var o = false
              if (t) {
                o = typeof t.comment === 'boolean' && t.comment
                var c = typeof t.attachComment === 'boolean' && t.attachComment
                if (o || c) {
                  s = new i.CommentHandler()
                  s.attach = c
                  t.comment = true
                  l = u
                }
              }
              var h = false
              if (t && typeof t.sourceType === 'string') {
                h = t.sourceType === 'module'
              }
              var f
              if (t && typeof t.jsx === 'boolean' && t.jsx) {
                f = new n.JSXParser(e, t, l)
              } else {
                f = new a.Parser(e, t, l)
              }
              var p = h ? f.parseModule() : f.parseScript()
              var d = p
              if (o && s) {
                d.comments = s.comments
              }
              if (f.config.tokens) {
                d.tokens = f.tokens
              }
              if (f.config.tolerant) {
                d.errors = f.errorHandler.errors
              }
              return d
            }
            t.parse = parse
            function parseModule(e, t, r) {
              var i = t || {}
              i.sourceType = 'module'
              return parse(e, i, r)
            }
            t.parseModule = parseModule
            function parseScript(e, t, r) {
              var i = t || {}
              i.sourceType = 'script'
              return parse(e, i, r)
            }
            t.parseScript = parseScript
            function tokenize(e, t, r) {
              var i = new s.Tokenizer(e, t)
              var n
              n = []
              try {
                while (true) {
                  var a = i.getNextToken()
                  if (!a) {
                    break
                  }
                  if (r) {
                    a = r(a)
                  }
                  n.push(a)
                }
              } catch (e) {
                i.errorHandler.tolerate(e)
              }
              if (i.errorHandler.tolerant) {
                n.errors = i.errors()
              }
              return n
            }
            t.tokenize = tokenize
            var u = r(2)
            t.Syntax = u.Syntax
            t.version = '4.0.1'
          },
          function (e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = r(2)
            var n = (function () {
              function CommentHandler() {
                this.attach = false
                this.comments = []
                this.stack = []
                this.leading = []
                this.trailing = []
              }
              CommentHandler.prototype.insertInnerComments = function (e, t) {
                if (e.type === i.Syntax.BlockStatement && e.body.length === 0) {
                  var r = []
                  for (var n = this.leading.length - 1; n >= 0; --n) {
                    var a = this.leading[n]
                    if (t.end.offset >= a.start) {
                      r.unshift(a.comment)
                      this.leading.splice(n, 1)
                      this.trailing.splice(n, 1)
                    }
                  }
                  if (r.length) {
                    e.innerComments = r
                  }
                }
              }
              CommentHandler.prototype.findTrailingComments = function (e) {
                var t = []
                if (this.trailing.length > 0) {
                  for (var r = this.trailing.length - 1; r >= 0; --r) {
                    var i = this.trailing[r]
                    if (i.start >= e.end.offset) {
                      t.unshift(i.comment)
                    }
                  }
                  this.trailing.length = 0
                  return t
                }
                var n = this.stack[this.stack.length - 1]
                if (n && n.node.trailingComments) {
                  var a = n.node.trailingComments[0]
                  if (a && a.range[0] >= e.end.offset) {
                    t = n.node.trailingComments
                    delete n.node.trailingComments
                  }
                }
                return t
              }
              CommentHandler.prototype.findLeadingComments = function (e) {
                var t = []
                var r
                while (this.stack.length > 0) {
                  var i = this.stack[this.stack.length - 1]
                  if (i && i.start >= e.start.offset) {
                    r = i.node
                    this.stack.pop()
                  } else {
                    break
                  }
                }
                if (r) {
                  var n = r.leadingComments ? r.leadingComments.length : 0
                  for (var a = n - 1; a >= 0; --a) {
                    var s = r.leadingComments[a]
                    if (s.range[1] <= e.start.offset) {
                      t.unshift(s)
                      r.leadingComments.splice(a, 1)
                    }
                  }
                  if (r.leadingComments && r.leadingComments.length === 0) {
                    delete r.leadingComments
                  }
                  return t
                }
                for (var a = this.leading.length - 1; a >= 0; --a) {
                  var i = this.leading[a]
                  if (i.start <= e.start.offset) {
                    t.unshift(i.comment)
                    this.leading.splice(a, 1)
                  }
                }
                return t
              }
              CommentHandler.prototype.visitNode = function (e, t) {
                if (e.type === i.Syntax.Program && e.body.length > 0) {
                  return
                }
                this.insertInnerComments(e, t)
                var r = this.findTrailingComments(t)
                var n = this.findLeadingComments(t)
                if (n.length > 0) {
                  e.leadingComments = n
                }
                if (r.length > 0) {
                  e.trailingComments = r
                }
                this.stack.push({ node: e, start: t.start.offset })
              }
              CommentHandler.prototype.visitComment = function (e, t) {
                var r = e.type[0] === 'L' ? 'Line' : 'Block'
                var i = { type: r, value: e.value }
                if (e.range) {
                  i.range = e.range
                }
                if (e.loc) {
                  i.loc = e.loc
                }
                this.comments.push(i)
                if (this.attach) {
                  var n = {
                    comment: {
                      type: r,
                      value: e.value,
                      range: [t.start.offset, t.end.offset],
                    },
                    start: t.start.offset,
                  }
                  if (e.loc) {
                    n.comment.loc = e.loc
                  }
                  e.type = r
                  this.leading.push(n)
                  this.trailing.push(n)
                }
              }
              CommentHandler.prototype.visit = function (e, t) {
                if (e.type === 'LineComment') {
                  this.visitComment(e, t)
                } else if (e.type === 'BlockComment') {
                  this.visitComment(e, t)
                } else if (this.attach) {
                  this.visitNode(e, t)
                }
              }
              return CommentHandler
            })()
            t.CommentHandler = n
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.Syntax = {
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
          function (e, t, r) {
            'use strict'
            var i =
              (this && this.__extends) ||
              (function () {
                var e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t
                    }) ||
                  function (e, t) {
                    for (var r in t) if (t.hasOwnProperty(r)) e[r] = t[r]
                  }
                return function (t, r) {
                  e(t, r)
                  function __() {
                    this.constructor = t
                  }
                  t.prototype =
                    r === null
                      ? Object.create(r)
                      : ((__.prototype = r.prototype), new __())
                }
              })()
            Object.defineProperty(t, '__esModule', { value: true })
            var n = r(4)
            var a = r(5)
            var s = r(6)
            var u = r(7)
            var l = r(8)
            var o = r(13)
            var c = r(14)
            o.TokenName[100] = 'JSXIdentifier'
            o.TokenName[101] = 'JSXText'
            function getQualifiedElementName(e) {
              var t
              switch (e.type) {
                case s.JSXSyntax.JSXIdentifier:
                  var r = e
                  t = r.name
                  break
                case s.JSXSyntax.JSXNamespacedName:
                  var i = e
                  t =
                    getQualifiedElementName(i.namespace) +
                    ':' +
                    getQualifiedElementName(i.name)
                  break
                case s.JSXSyntax.JSXMemberExpression:
                  var n = e
                  t =
                    getQualifiedElementName(n.object) +
                    '.' +
                    getQualifiedElementName(n.property)
                  break
                default:
                  break
              }
              return t
            }
            var h = (function (e) {
              i(JSXParser, e)
              function JSXParser(t, r, i) {
                return e.call(this, t, r, i) || this
              }
              JSXParser.prototype.parsePrimaryExpression = function () {
                return this.match('<')
                  ? this.parseJSXRoot()
                  : e.prototype.parsePrimaryExpression.call(this)
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
              JSXParser.prototype.scanXHTMLEntity = function (e) {
                var t = '&'
                var r = true
                var i = false
                var a = false
                var s = false
                while (!this.scanner.eof() && r && !i) {
                  var u = this.scanner.source[this.scanner.index]
                  if (u === e) {
                    break
                  }
                  i = u === ';'
                  t += u
                  ++this.scanner.index
                  if (!i) {
                    switch (t.length) {
                      case 2:
                        a = u === '#'
                        break
                      case 3:
                        if (a) {
                          s = u === 'x'
                          r = s || n.Character.isDecimalDigit(u.charCodeAt(0))
                          a = a && !s
                        }
                        break
                      default:
                        r =
                          r &&
                          !(a && !n.Character.isDecimalDigit(u.charCodeAt(0)))
                        r =
                          r && !(s && !n.Character.isHexDigit(u.charCodeAt(0)))
                        break
                    }
                  }
                }
                if (r && i && t.length > 2) {
                  var l = t.substr(1, t.length - 2)
                  if (a && l.length > 1) {
                    t = String.fromCharCode(parseInt(l.substr(1), 10))
                  } else if (s && l.length > 2) {
                    t = String.fromCharCode(parseInt('0' + l.substr(1), 16))
                  } else if (!a && !s && c.XHTMLEntities[l]) {
                    t = c.XHTMLEntities[l]
                  }
                }
                return t
              }
              JSXParser.prototype.lexJSX = function () {
                var e = this.scanner.source.charCodeAt(this.scanner.index)
                if (
                  e === 60 ||
                  e === 62 ||
                  e === 47 ||
                  e === 58 ||
                  e === 61 ||
                  e === 123 ||
                  e === 125
                ) {
                  var t = this.scanner.source[this.scanner.index++]
                  return {
                    type: 7,
                    value: t,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index - 1,
                    end: this.scanner.index,
                  }
                }
                if (e === 34 || e === 39) {
                  var r = this.scanner.index
                  var i = this.scanner.source[this.scanner.index++]
                  var a = ''
                  while (!this.scanner.eof()) {
                    var s = this.scanner.source[this.scanner.index++]
                    if (s === i) {
                      break
                    } else if (s === '&') {
                      a += this.scanXHTMLEntity(i)
                    } else {
                      a += s
                    }
                  }
                  return {
                    type: 8,
                    value: a,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: r,
                    end: this.scanner.index,
                  }
                }
                if (e === 46) {
                  var u = this.scanner.source.charCodeAt(this.scanner.index + 1)
                  var l = this.scanner.source.charCodeAt(this.scanner.index + 2)
                  var t = u === 46 && l === 46 ? '...' : '.'
                  var r = this.scanner.index
                  this.scanner.index += t.length
                  return {
                    type: 7,
                    value: t,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: r,
                    end: this.scanner.index,
                  }
                }
                if (e === 96) {
                  return {
                    type: 10,
                    value: '',
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index,
                    end: this.scanner.index,
                  }
                }
                if (n.Character.isIdentifierStart(e) && e !== 92) {
                  var r = this.scanner.index
                  ++this.scanner.index
                  while (!this.scanner.eof()) {
                    var s = this.scanner.source.charCodeAt(this.scanner.index)
                    if (n.Character.isIdentifierPart(s) && s !== 92) {
                      ++this.scanner.index
                    } else if (s === 45) {
                      ++this.scanner.index
                    } else {
                      break
                    }
                  }
                  var o = this.scanner.source.slice(r, this.scanner.index)
                  return {
                    type: 100,
                    value: o,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: r,
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
                var e = this.lexJSX()
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                if (this.config.tokens) {
                  this.tokens.push(this.convertToken(e))
                }
                return e
              }
              JSXParser.prototype.nextJSXText = function () {
                this.startMarker.index = this.scanner.index
                this.startMarker.line = this.scanner.lineNumber
                this.startMarker.column =
                  this.scanner.index - this.scanner.lineStart
                var e = this.scanner.index
                var t = ''
                while (!this.scanner.eof()) {
                  var r = this.scanner.source[this.scanner.index]
                  if (r === '{' || r === '<') {
                    break
                  }
                  ++this.scanner.index
                  t += r
                  if (n.Character.isLineTerminator(r.charCodeAt(0))) {
                    ++this.scanner.lineNumber
                    if (
                      r === '\r' &&
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
                var i = {
                  type: 101,
                  value: t,
                  lineNumber: this.scanner.lineNumber,
                  lineStart: this.scanner.lineStart,
                  start: e,
                  end: this.scanner.index,
                }
                if (t.length > 0 && this.config.tokens) {
                  this.tokens.push(this.convertToken(i))
                }
                return i
              }
              JSXParser.prototype.peekJSXToken = function () {
                var e = this.scanner.saveState()
                this.scanner.scanComments()
                var t = this.lexJSX()
                this.scanner.restoreState(e)
                return t
              }
              JSXParser.prototype.expectJSX = function (e) {
                var t = this.nextJSXToken()
                if (t.type !== 7 || t.value !== e) {
                  this.throwUnexpectedToken(t)
                }
              }
              JSXParser.prototype.matchJSX = function (e) {
                var t = this.peekJSXToken()
                return t.type === 7 && t.value === e
              }
              JSXParser.prototype.parseJSXIdentifier = function () {
                var e = this.createJSXNode()
                var t = this.nextJSXToken()
                if (t.type !== 100) {
                  this.throwUnexpectedToken(t)
                }
                return this.finalize(e, new a.JSXIdentifier(t.value))
              }
              JSXParser.prototype.parseJSXElementName = function () {
                var e = this.createJSXNode()
                var t = this.parseJSXIdentifier()
                if (this.matchJSX(':')) {
                  var r = t
                  this.expectJSX(':')
                  var i = this.parseJSXIdentifier()
                  t = this.finalize(e, new a.JSXNamespacedName(r, i))
                } else if (this.matchJSX('.')) {
                  while (this.matchJSX('.')) {
                    var n = t
                    this.expectJSX('.')
                    var s = this.parseJSXIdentifier()
                    t = this.finalize(e, new a.JSXMemberExpression(n, s))
                  }
                }
                return t
              }
              JSXParser.prototype.parseJSXAttributeName = function () {
                var e = this.createJSXNode()
                var t
                var r = this.parseJSXIdentifier()
                if (this.matchJSX(':')) {
                  var i = r
                  this.expectJSX(':')
                  var n = this.parseJSXIdentifier()
                  t = this.finalize(e, new a.JSXNamespacedName(i, n))
                } else {
                  t = r
                }
                return t
              }
              JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
                var e = this.createJSXNode()
                var t = this.nextJSXToken()
                if (t.type !== 8) {
                  this.throwUnexpectedToken(t)
                }
                var r = this.getTokenRaw(t)
                return this.finalize(e, new u.Literal(t.value, r))
              }
              JSXParser.prototype.parseJSXExpressionAttribute = function () {
                var e = this.createJSXNode()
                this.expectJSX('{')
                this.finishJSX()
                if (this.match('}')) {
                  this.tolerateError(
                    'JSX attributes must only be assigned a non-empty expression'
                  )
                }
                var t = this.parseAssignmentExpression()
                this.reenterJSX()
                return this.finalize(e, new a.JSXExpressionContainer(t))
              }
              JSXParser.prototype.parseJSXAttributeValue = function () {
                return this.matchJSX('{')
                  ? this.parseJSXExpressionAttribute()
                  : this.matchJSX('<')
                  ? this.parseJSXElement()
                  : this.parseJSXStringLiteralAttribute()
              }
              JSXParser.prototype.parseJSXNameValueAttribute = function () {
                var e = this.createJSXNode()
                var t = this.parseJSXAttributeName()
                var r = null
                if (this.matchJSX('=')) {
                  this.expectJSX('=')
                  r = this.parseJSXAttributeValue()
                }
                return this.finalize(e, new a.JSXAttribute(t, r))
              }
              JSXParser.prototype.parseJSXSpreadAttribute = function () {
                var e = this.createJSXNode()
                this.expectJSX('{')
                this.expectJSX('...')
                this.finishJSX()
                var t = this.parseAssignmentExpression()
                this.reenterJSX()
                return this.finalize(e, new a.JSXSpreadAttribute(t))
              }
              JSXParser.prototype.parseJSXAttributes = function () {
                var e = []
                while (!this.matchJSX('/') && !this.matchJSX('>')) {
                  var t = this.matchJSX('{')
                    ? this.parseJSXSpreadAttribute()
                    : this.parseJSXNameValueAttribute()
                  e.push(t)
                }
                return e
              }
              JSXParser.prototype.parseJSXOpeningElement = function () {
                var e = this.createJSXNode()
                this.expectJSX('<')
                var t = this.parseJSXElementName()
                var r = this.parseJSXAttributes()
                var i = this.matchJSX('/')
                if (i) {
                  this.expectJSX('/')
                }
                this.expectJSX('>')
                return this.finalize(e, new a.JSXOpeningElement(t, i, r))
              }
              JSXParser.prototype.parseJSXBoundaryElement = function () {
                var e = this.createJSXNode()
                this.expectJSX('<')
                if (this.matchJSX('/')) {
                  this.expectJSX('/')
                  var t = this.parseJSXElementName()
                  this.expectJSX('>')
                  return this.finalize(e, new a.JSXClosingElement(t))
                }
                var r = this.parseJSXElementName()
                var i = this.parseJSXAttributes()
                var n = this.matchJSX('/')
                if (n) {
                  this.expectJSX('/')
                }
                this.expectJSX('>')
                return this.finalize(e, new a.JSXOpeningElement(r, n, i))
              }
              JSXParser.prototype.parseJSXEmptyExpression = function () {
                var e = this.createJSXChildNode()
                this.collectComments()
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                return this.finalize(e, new a.JSXEmptyExpression())
              }
              JSXParser.prototype.parseJSXExpressionContainer = function () {
                var e = this.createJSXNode()
                this.expectJSX('{')
                var t
                if (this.matchJSX('}')) {
                  t = this.parseJSXEmptyExpression()
                  this.expectJSX('}')
                } else {
                  this.finishJSX()
                  t = this.parseAssignmentExpression()
                  this.reenterJSX()
                }
                return this.finalize(e, new a.JSXExpressionContainer(t))
              }
              JSXParser.prototype.parseJSXChildren = function () {
                var e = []
                while (!this.scanner.eof()) {
                  var t = this.createJSXChildNode()
                  var r = this.nextJSXText()
                  if (r.start < r.end) {
                    var i = this.getTokenRaw(r)
                    var n = this.finalize(t, new a.JSXText(r.value, i))
                    e.push(n)
                  }
                  if (this.scanner.source[this.scanner.index] === '{') {
                    var s = this.parseJSXExpressionContainer()
                    e.push(s)
                  } else {
                    break
                  }
                }
                return e
              }
              JSXParser.prototype.parseComplexJSXElement = function (e) {
                var t = []
                while (!this.scanner.eof()) {
                  e.children = e.children.concat(this.parseJSXChildren())
                  var r = this.createJSXChildNode()
                  var i = this.parseJSXBoundaryElement()
                  if (i.type === s.JSXSyntax.JSXOpeningElement) {
                    var n = i
                    if (n.selfClosing) {
                      var u = this.finalize(r, new a.JSXElement(n, [], null))
                      e.children.push(u)
                    } else {
                      t.push(e)
                      e = { node: r, opening: n, closing: null, children: [] }
                    }
                  }
                  if (i.type === s.JSXSyntax.JSXClosingElement) {
                    e.closing = i
                    var l = getQualifiedElementName(e.opening.name)
                    var o = getQualifiedElementName(e.closing.name)
                    if (l !== o) {
                      this.tolerateError(
                        'Expected corresponding JSX closing tag for %0',
                        l
                      )
                    }
                    if (t.length > 0) {
                      var u = this.finalize(
                        e.node,
                        new a.JSXElement(e.opening, e.children, e.closing)
                      )
                      e = t[t.length - 1]
                      e.children.push(u)
                      t.pop()
                    } else {
                      break
                    }
                  }
                }
                return e
              }
              JSXParser.prototype.parseJSXElement = function () {
                var e = this.createJSXNode()
                var t = this.parseJSXOpeningElement()
                var r = []
                var i = null
                if (!t.selfClosing) {
                  var n = this.parseComplexJSXElement({
                    node: e,
                    opening: t,
                    closing: i,
                    children: r,
                  })
                  r = n.children
                  i = n.closing
                }
                return this.finalize(e, new a.JSXElement(t, r, i))
              }
              JSXParser.prototype.parseJSXRoot = function () {
                if (this.config.tokens) {
                  this.tokens.pop()
                }
                this.startJSX()
                var e = this.parseJSXElement()
                this.finishJSX()
                return e
              }
              JSXParser.prototype.isStartOfExpression = function () {
                return (
                  e.prototype.isStartOfExpression.call(this) || this.match('<')
                )
              }
              return JSXParser
            })(l.Parser)
            t.JSXParser = h
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = {
              NonAsciiIdentifierStart:
                /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              NonAsciiIdentifierPart:
                /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
            }
            t.Character = {
              fromCodePoint: function (e) {
                return e < 65536
                  ? String.fromCharCode(e)
                  : String.fromCharCode(55296 + ((e - 65536) >> 10)) +
                      String.fromCharCode(56320 + ((e - 65536) & 1023))
              },
              isWhiteSpace: function (e) {
                return (
                  e === 32 ||
                  e === 9 ||
                  e === 11 ||
                  e === 12 ||
                  e === 160 ||
                  (e >= 5760 &&
                    [
                      5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199,
                      8200, 8201, 8202, 8239, 8287, 12288, 65279,
                    ].indexOf(e) >= 0)
                )
              },
              isLineTerminator: function (e) {
                return e === 10 || e === 13 || e === 8232 || e === 8233
              },
              isIdentifierStart: function (e) {
                return (
                  e === 36 ||
                  e === 95 ||
                  (e >= 65 && e <= 90) ||
                  (e >= 97 && e <= 122) ||
                  e === 92 ||
                  (e >= 128 &&
                    r.NonAsciiIdentifierStart.test(
                      t.Character.fromCodePoint(e)
                    ))
                )
              },
              isIdentifierPart: function (e) {
                return (
                  e === 36 ||
                  e === 95 ||
                  (e >= 65 && e <= 90) ||
                  (e >= 97 && e <= 122) ||
                  (e >= 48 && e <= 57) ||
                  e === 92 ||
                  (e >= 128 &&
                    r.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e)))
                )
              },
              isDecimalDigit: function (e) {
                return e >= 48 && e <= 57
              },
              isHexDigit: function (e) {
                return (
                  (e >= 48 && e <= 57) ||
                  (e >= 65 && e <= 70) ||
                  (e >= 97 && e <= 102)
                )
              },
              isOctalDigit: function (e) {
                return e >= 48 && e <= 55
              },
            }
          },
          function (e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = r(6)
            var n = (function () {
              function JSXClosingElement(e) {
                this.type = i.JSXSyntax.JSXClosingElement
                this.name = e
              }
              return JSXClosingElement
            })()
            t.JSXClosingElement = n
            var a = (function () {
              function JSXElement(e, t, r) {
                this.type = i.JSXSyntax.JSXElement
                this.openingElement = e
                this.children = t
                this.closingElement = r
              }
              return JSXElement
            })()
            t.JSXElement = a
            var s = (function () {
              function JSXEmptyExpression() {
                this.type = i.JSXSyntax.JSXEmptyExpression
              }
              return JSXEmptyExpression
            })()
            t.JSXEmptyExpression = s
            var u = (function () {
              function JSXExpressionContainer(e) {
                this.type = i.JSXSyntax.JSXExpressionContainer
                this.expression = e
              }
              return JSXExpressionContainer
            })()
            t.JSXExpressionContainer = u
            var l = (function () {
              function JSXIdentifier(e) {
                this.type = i.JSXSyntax.JSXIdentifier
                this.name = e
              }
              return JSXIdentifier
            })()
            t.JSXIdentifier = l
            var o = (function () {
              function JSXMemberExpression(e, t) {
                this.type = i.JSXSyntax.JSXMemberExpression
                this.object = e
                this.property = t
              }
              return JSXMemberExpression
            })()
            t.JSXMemberExpression = o
            var c = (function () {
              function JSXAttribute(e, t) {
                this.type = i.JSXSyntax.JSXAttribute
                this.name = e
                this.value = t
              }
              return JSXAttribute
            })()
            t.JSXAttribute = c
            var h = (function () {
              function JSXNamespacedName(e, t) {
                this.type = i.JSXSyntax.JSXNamespacedName
                this.namespace = e
                this.name = t
              }
              return JSXNamespacedName
            })()
            t.JSXNamespacedName = h
            var f = (function () {
              function JSXOpeningElement(e, t, r) {
                this.type = i.JSXSyntax.JSXOpeningElement
                this.name = e
                this.selfClosing = t
                this.attributes = r
              }
              return JSXOpeningElement
            })()
            t.JSXOpeningElement = f
            var p = (function () {
              function JSXSpreadAttribute(e) {
                this.type = i.JSXSyntax.JSXSpreadAttribute
                this.argument = e
              }
              return JSXSpreadAttribute
            })()
            t.JSXSpreadAttribute = p
            var d = (function () {
              function JSXText(e, t) {
                this.type = i.JSXSyntax.JSXText
                this.value = e
                this.raw = t
              }
              return JSXText
            })()
            t.JSXText = d
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.JSXSyntax = {
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
          function (e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = r(2)
            var n = (function () {
              function ArrayExpression(e) {
                this.type = i.Syntax.ArrayExpression
                this.elements = e
              }
              return ArrayExpression
            })()
            t.ArrayExpression = n
            var a = (function () {
              function ArrayPattern(e) {
                this.type = i.Syntax.ArrayPattern
                this.elements = e
              }
              return ArrayPattern
            })()
            t.ArrayPattern = a
            var s = (function () {
              function ArrowFunctionExpression(e, t, r) {
                this.type = i.Syntax.ArrowFunctionExpression
                this.id = null
                this.params = e
                this.body = t
                this.generator = false
                this.expression = r
                this.async = false
              }
              return ArrowFunctionExpression
            })()
            t.ArrowFunctionExpression = s
            var u = (function () {
              function AssignmentExpression(e, t, r) {
                this.type = i.Syntax.AssignmentExpression
                this.operator = e
                this.left = t
                this.right = r
              }
              return AssignmentExpression
            })()
            t.AssignmentExpression = u
            var l = (function () {
              function AssignmentPattern(e, t) {
                this.type = i.Syntax.AssignmentPattern
                this.left = e
                this.right = t
              }
              return AssignmentPattern
            })()
            t.AssignmentPattern = l
            var o = (function () {
              function AsyncArrowFunctionExpression(e, t, r) {
                this.type = i.Syntax.ArrowFunctionExpression
                this.id = null
                this.params = e
                this.body = t
                this.generator = false
                this.expression = r
                this.async = true
              }
              return AsyncArrowFunctionExpression
            })()
            t.AsyncArrowFunctionExpression = o
            var c = (function () {
              function AsyncFunctionDeclaration(e, t, r) {
                this.type = i.Syntax.FunctionDeclaration
                this.id = e
                this.params = t
                this.body = r
                this.generator = false
                this.expression = false
                this.async = true
              }
              return AsyncFunctionDeclaration
            })()
            t.AsyncFunctionDeclaration = c
            var h = (function () {
              function AsyncFunctionExpression(e, t, r) {
                this.type = i.Syntax.FunctionExpression
                this.id = e
                this.params = t
                this.body = r
                this.generator = false
                this.expression = false
                this.async = true
              }
              return AsyncFunctionExpression
            })()
            t.AsyncFunctionExpression = h
            var f = (function () {
              function AwaitExpression(e) {
                this.type = i.Syntax.AwaitExpression
                this.argument = e
              }
              return AwaitExpression
            })()
            t.AwaitExpression = f
            var p = (function () {
              function BinaryExpression(e, t, r) {
                var n = e === '||' || e === '&&'
                this.type = n
                  ? i.Syntax.LogicalExpression
                  : i.Syntax.BinaryExpression
                this.operator = e
                this.left = t
                this.right = r
              }
              return BinaryExpression
            })()
            t.BinaryExpression = p
            var d = (function () {
              function BlockStatement(e) {
                this.type = i.Syntax.BlockStatement
                this.body = e
              }
              return BlockStatement
            })()
            t.BlockStatement = d
            var m = (function () {
              function BreakStatement(e) {
                this.type = i.Syntax.BreakStatement
                this.label = e
              }
              return BreakStatement
            })()
            t.BreakStatement = m
            var v = (function () {
              function CallExpression(e, t) {
                this.type = i.Syntax.CallExpression
                this.callee = e
                this.arguments = t
              }
              return CallExpression
            })()
            t.CallExpression = v
            var y = (function () {
              function CatchClause(e, t) {
                this.type = i.Syntax.CatchClause
                this.param = e
                this.body = t
              }
              return CatchClause
            })()
            t.CatchClause = y
            var x = (function () {
              function ClassBody(e) {
                this.type = i.Syntax.ClassBody
                this.body = e
              }
              return ClassBody
            })()
            t.ClassBody = x
            var E = (function () {
              function ClassDeclaration(e, t, r) {
                this.type = i.Syntax.ClassDeclaration
                this.id = e
                this.superClass = t
                this.body = r
              }
              return ClassDeclaration
            })()
            t.ClassDeclaration = E
            var S = (function () {
              function ClassExpression(e, t, r) {
                this.type = i.Syntax.ClassExpression
                this.id = e
                this.superClass = t
                this.body = r
              }
              return ClassExpression
            })()
            t.ClassExpression = S
            var D = (function () {
              function ComputedMemberExpression(e, t) {
                this.type = i.Syntax.MemberExpression
                this.computed = true
                this.object = e
                this.property = t
              }
              return ComputedMemberExpression
            })()
            t.ComputedMemberExpression = D
            var b = (function () {
              function ConditionalExpression(e, t, r) {
                this.type = i.Syntax.ConditionalExpression
                this.test = e
                this.consequent = t
                this.alternate = r
              }
              return ConditionalExpression
            })()
            t.ConditionalExpression = b
            var g = (function () {
              function ContinueStatement(e) {
                this.type = i.Syntax.ContinueStatement
                this.label = e
              }
              return ContinueStatement
            })()
            t.ContinueStatement = g
            var C = (function () {
              function DebuggerStatement() {
                this.type = i.Syntax.DebuggerStatement
              }
              return DebuggerStatement
            })()
            t.DebuggerStatement = C
            var A = (function () {
              function Directive(e, t) {
                this.type = i.Syntax.ExpressionStatement
                this.expression = e
                this.directive = t
              }
              return Directive
            })()
            t.Directive = A
            var T = (function () {
              function DoWhileStatement(e, t) {
                this.type = i.Syntax.DoWhileStatement
                this.body = e
                this.test = t
              }
              return DoWhileStatement
            })()
            t.DoWhileStatement = T
            var F = (function () {
              function EmptyStatement() {
                this.type = i.Syntax.EmptyStatement
              }
              return EmptyStatement
            })()
            t.EmptyStatement = F
            var w = (function () {
              function ExportAllDeclaration(e) {
                this.type = i.Syntax.ExportAllDeclaration
                this.source = e
              }
              return ExportAllDeclaration
            })()
            t.ExportAllDeclaration = w
            var P = (function () {
              function ExportDefaultDeclaration(e) {
                this.type = i.Syntax.ExportDefaultDeclaration
                this.declaration = e
              }
              return ExportDefaultDeclaration
            })()
            t.ExportDefaultDeclaration = P
            var k = (function () {
              function ExportNamedDeclaration(e, t, r) {
                this.type = i.Syntax.ExportNamedDeclaration
                this.declaration = e
                this.specifiers = t
                this.source = r
              }
              return ExportNamedDeclaration
            })()
            t.ExportNamedDeclaration = k
            var B = (function () {
              function ExportSpecifier(e, t) {
                this.type = i.Syntax.ExportSpecifier
                this.exported = t
                this.local = e
              }
              return ExportSpecifier
            })()
            t.ExportSpecifier = B
            var M = (function () {
              function ExpressionStatement(e) {
                this.type = i.Syntax.ExpressionStatement
                this.expression = e
              }
              return ExpressionStatement
            })()
            t.ExpressionStatement = M
            var I = (function () {
              function ForInStatement(e, t, r) {
                this.type = i.Syntax.ForInStatement
                this.left = e
                this.right = t
                this.body = r
                this.each = false
              }
              return ForInStatement
            })()
            t.ForInStatement = I
            var N = (function () {
              function ForOfStatement(e, t, r) {
                this.type = i.Syntax.ForOfStatement
                this.left = e
                this.right = t
                this.body = r
              }
              return ForOfStatement
            })()
            t.ForOfStatement = N
            var O = (function () {
              function ForStatement(e, t, r, n) {
                this.type = i.Syntax.ForStatement
                this.init = e
                this.test = t
                this.update = r
                this.body = n
              }
              return ForStatement
            })()
            t.ForStatement = O
            var j = (function () {
              function FunctionDeclaration(e, t, r, n) {
                this.type = i.Syntax.FunctionDeclaration
                this.id = e
                this.params = t
                this.body = r
                this.generator = n
                this.expression = false
                this.async = false
              }
              return FunctionDeclaration
            })()
            t.FunctionDeclaration = j
            var X = (function () {
              function FunctionExpression(e, t, r, n) {
                this.type = i.Syntax.FunctionExpression
                this.id = e
                this.params = t
                this.body = r
                this.generator = n
                this.expression = false
                this.async = false
              }
              return FunctionExpression
            })()
            t.FunctionExpression = X
            var J = (function () {
              function Identifier(e) {
                this.type = i.Syntax.Identifier
                this.name = e
              }
              return Identifier
            })()
            t.Identifier = J
            var L = (function () {
              function IfStatement(e, t, r) {
                this.type = i.Syntax.IfStatement
                this.test = e
                this.consequent = t
                this.alternate = r
              }
              return IfStatement
            })()
            t.IfStatement = L
            var z = (function () {
              function ImportDeclaration(e, t) {
                this.type = i.Syntax.ImportDeclaration
                this.specifiers = e
                this.source = t
              }
              return ImportDeclaration
            })()
            t.ImportDeclaration = z
            var U = (function () {
              function ImportDefaultSpecifier(e) {
                this.type = i.Syntax.ImportDefaultSpecifier
                this.local = e
              }
              return ImportDefaultSpecifier
            })()
            t.ImportDefaultSpecifier = U
            var R = (function () {
              function ImportNamespaceSpecifier(e) {
                this.type = i.Syntax.ImportNamespaceSpecifier
                this.local = e
              }
              return ImportNamespaceSpecifier
            })()
            t.ImportNamespaceSpecifier = R
            var q = (function () {
              function ImportSpecifier(e, t) {
                this.type = i.Syntax.ImportSpecifier
                this.local = e
                this.imported = t
              }
              return ImportSpecifier
            })()
            t.ImportSpecifier = q
            var V = (function () {
              function LabeledStatement(e, t) {
                this.type = i.Syntax.LabeledStatement
                this.label = e
                this.body = t
              }
              return LabeledStatement
            })()
            t.LabeledStatement = V
            var W = (function () {
              function Literal(e, t) {
                this.type = i.Syntax.Literal
                this.value = e
                this.raw = t
              }
              return Literal
            })()
            t.Literal = W
            var K = (function () {
              function MetaProperty(e, t) {
                this.type = i.Syntax.MetaProperty
                this.meta = e
                this.property = t
              }
              return MetaProperty
            })()
            t.MetaProperty = K
            var H = (function () {
              function MethodDefinition(e, t, r, n, a) {
                this.type = i.Syntax.MethodDefinition
                this.key = e
                this.computed = t
                this.value = r
                this.kind = n
                this.static = a
              }
              return MethodDefinition
            })()
            t.MethodDefinition = H
            var Y = (function () {
              function Module(e) {
                this.type = i.Syntax.Program
                this.body = e
                this.sourceType = 'module'
              }
              return Module
            })()
            t.Module = Y
            var G = (function () {
              function NewExpression(e, t) {
                this.type = i.Syntax.NewExpression
                this.callee = e
                this.arguments = t
              }
              return NewExpression
            })()
            t.NewExpression = G
            var Q = (function () {
              function ObjectExpression(e) {
                this.type = i.Syntax.ObjectExpression
                this.properties = e
              }
              return ObjectExpression
            })()
            t.ObjectExpression = Q
            var $ = (function () {
              function ObjectPattern(e) {
                this.type = i.Syntax.ObjectPattern
                this.properties = e
              }
              return ObjectPattern
            })()
            t.ObjectPattern = $
            var Z = (function () {
              function Property(e, t, r, n, a, s) {
                this.type = i.Syntax.Property
                this.key = t
                this.computed = r
                this.value = n
                this.kind = e
                this.method = a
                this.shorthand = s
              }
              return Property
            })()
            t.Property = Z
            var _ = (function () {
              function RegexLiteral(e, t, r, n) {
                this.type = i.Syntax.Literal
                this.value = e
                this.raw = t
                this.regex = { pattern: r, flags: n }
              }
              return RegexLiteral
            })()
            t.RegexLiteral = _
            var ee = (function () {
              function RestElement(e) {
                this.type = i.Syntax.RestElement
                this.argument = e
              }
              return RestElement
            })()
            t.RestElement = ee
            var te = (function () {
              function ReturnStatement(e) {
                this.type = i.Syntax.ReturnStatement
                this.argument = e
              }
              return ReturnStatement
            })()
            t.ReturnStatement = te
            var re = (function () {
              function Script(e) {
                this.type = i.Syntax.Program
                this.body = e
                this.sourceType = 'script'
              }
              return Script
            })()
            t.Script = re
            var ie = (function () {
              function SequenceExpression(e) {
                this.type = i.Syntax.SequenceExpression
                this.expressions = e
              }
              return SequenceExpression
            })()
            t.SequenceExpression = ie
            var ne = (function () {
              function SpreadElement(e) {
                this.type = i.Syntax.SpreadElement
                this.argument = e
              }
              return SpreadElement
            })()
            t.SpreadElement = ne
            var ae = (function () {
              function StaticMemberExpression(e, t) {
                this.type = i.Syntax.MemberExpression
                this.computed = false
                this.object = e
                this.property = t
              }
              return StaticMemberExpression
            })()
            t.StaticMemberExpression = ae
            var se = (function () {
              function Super() {
                this.type = i.Syntax.Super
              }
              return Super
            })()
            t.Super = se
            var ue = (function () {
              function SwitchCase(e, t) {
                this.type = i.Syntax.SwitchCase
                this.test = e
                this.consequent = t
              }
              return SwitchCase
            })()
            t.SwitchCase = ue
            var le = (function () {
              function SwitchStatement(e, t) {
                this.type = i.Syntax.SwitchStatement
                this.discriminant = e
                this.cases = t
              }
              return SwitchStatement
            })()
            t.SwitchStatement = le
            var oe = (function () {
              function TaggedTemplateExpression(e, t) {
                this.type = i.Syntax.TaggedTemplateExpression
                this.tag = e
                this.quasi = t
              }
              return TaggedTemplateExpression
            })()
            t.TaggedTemplateExpression = oe
            var ce = (function () {
              function TemplateElement(e, t) {
                this.type = i.Syntax.TemplateElement
                this.value = e
                this.tail = t
              }
              return TemplateElement
            })()
            t.TemplateElement = ce
            var he = (function () {
              function TemplateLiteral(e, t) {
                this.type = i.Syntax.TemplateLiteral
                this.quasis = e
                this.expressions = t
              }
              return TemplateLiteral
            })()
            t.TemplateLiteral = he
            var fe = (function () {
              function ThisExpression() {
                this.type = i.Syntax.ThisExpression
              }
              return ThisExpression
            })()
            t.ThisExpression = fe
            var pe = (function () {
              function ThrowStatement(e) {
                this.type = i.Syntax.ThrowStatement
                this.argument = e
              }
              return ThrowStatement
            })()
            t.ThrowStatement = pe
            var de = (function () {
              function TryStatement(e, t, r) {
                this.type = i.Syntax.TryStatement
                this.block = e
                this.handler = t
                this.finalizer = r
              }
              return TryStatement
            })()
            t.TryStatement = de
            var me = (function () {
              function UnaryExpression(e, t) {
                this.type = i.Syntax.UnaryExpression
                this.operator = e
                this.argument = t
                this.prefix = true
              }
              return UnaryExpression
            })()
            t.UnaryExpression = me
            var ve = (function () {
              function UpdateExpression(e, t, r) {
                this.type = i.Syntax.UpdateExpression
                this.operator = e
                this.argument = t
                this.prefix = r
              }
              return UpdateExpression
            })()
            t.UpdateExpression = ve
            var ye = (function () {
              function VariableDeclaration(e, t) {
                this.type = i.Syntax.VariableDeclaration
                this.declarations = e
                this.kind = t
              }
              return VariableDeclaration
            })()
            t.VariableDeclaration = ye
            var xe = (function () {
              function VariableDeclarator(e, t) {
                this.type = i.Syntax.VariableDeclarator
                this.id = e
                this.init = t
              }
              return VariableDeclarator
            })()
            t.VariableDeclarator = xe
            var Ee = (function () {
              function WhileStatement(e, t) {
                this.type = i.Syntax.WhileStatement
                this.test = e
                this.body = t
              }
              return WhileStatement
            })()
            t.WhileStatement = Ee
            var Se = (function () {
              function WithStatement(e, t) {
                this.type = i.Syntax.WithStatement
                this.object = e
                this.body = t
              }
              return WithStatement
            })()
            t.WithStatement = Se
            var De = (function () {
              function YieldExpression(e, t) {
                this.type = i.Syntax.YieldExpression
                this.argument = e
                this.delegate = t
              }
              return YieldExpression
            })()
            t.YieldExpression = De
          },
          function (e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = r(9)
            var n = r(10)
            var a = r(11)
            var s = r(7)
            var u = r(12)
            var l = r(2)
            var o = r(13)
            var c = 'ArrowParameterPlaceHolder'
            var h = (function () {
              function Parser(e, t, r) {
                if (t === void 0) {
                  t = {}
                }
                this.config = {
                  range: typeof t.range === 'boolean' && t.range,
                  loc: typeof t.loc === 'boolean' && t.loc,
                  source: null,
                  tokens: typeof t.tokens === 'boolean' && t.tokens,
                  comment: typeof t.comment === 'boolean' && t.comment,
                  tolerant: typeof t.tolerant === 'boolean' && t.tolerant,
                }
                if (this.config.loc && t.source && t.source !== null) {
                  this.config.source = String(t.source)
                }
                this.delegate = r
                this.errorHandler = new n.ErrorHandler()
                this.errorHandler.tolerant = this.config.tolerant
                this.scanner = new u.Scanner(e, this.errorHandler)
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
              Parser.prototype.throwError = function (e) {
                var t = []
                for (var r = 1; r < arguments.length; r++) {
                  t[r - 1] = arguments[r]
                }
                var n = Array.prototype.slice.call(arguments, 1)
                var a = e.replace(/%(\d)/g, function (e, t) {
                  i.assert(t < n.length, 'Message reference must be in range')
                  return n[t]
                })
                var s = this.lastMarker.index
                var u = this.lastMarker.line
                var l = this.lastMarker.column + 1
                throw this.errorHandler.createError(s, u, l, a)
              }
              Parser.prototype.tolerateError = function (e) {
                var t = []
                for (var r = 1; r < arguments.length; r++) {
                  t[r - 1] = arguments[r]
                }
                var n = Array.prototype.slice.call(arguments, 1)
                var a = e.replace(/%(\d)/g, function (e, t) {
                  i.assert(t < n.length, 'Message reference must be in range')
                  return n[t]
                })
                var s = this.lastMarker.index
                var u = this.scanner.lineNumber
                var l = this.lastMarker.column + 1
                this.errorHandler.tolerateError(s, u, l, a)
              }
              Parser.prototype.unexpectedTokenError = function (e, t) {
                var r = t || a.Messages.UnexpectedToken
                var i
                if (e) {
                  if (!t) {
                    r =
                      e.type === 2
                        ? a.Messages.UnexpectedEOS
                        : e.type === 3
                        ? a.Messages.UnexpectedIdentifier
                        : e.type === 6
                        ? a.Messages.UnexpectedNumber
                        : e.type === 8
                        ? a.Messages.UnexpectedString
                        : e.type === 10
                        ? a.Messages.UnexpectedTemplate
                        : a.Messages.UnexpectedToken
                    if (e.type === 4) {
                      if (this.scanner.isFutureReservedWord(e.value)) {
                        r = a.Messages.UnexpectedReserved
                      } else if (
                        this.context.strict &&
                        this.scanner.isStrictModeReservedWord(e.value)
                      ) {
                        r = a.Messages.StrictReservedWord
                      }
                    }
                  }
                  i = e.value
                } else {
                  i = 'ILLEGAL'
                }
                r = r.replace('%0', i)
                if (e && typeof e.lineNumber === 'number') {
                  var n = e.start
                  var s = e.lineNumber
                  var u = this.lastMarker.index - this.lastMarker.column
                  var l = e.start - u + 1
                  return this.errorHandler.createError(n, s, l, r)
                } else {
                  var n = this.lastMarker.index
                  var s = this.lastMarker.line
                  var l = this.lastMarker.column + 1
                  return this.errorHandler.createError(n, s, l, r)
                }
              }
              Parser.prototype.throwUnexpectedToken = function (e, t) {
                throw this.unexpectedTokenError(e, t)
              }
              Parser.prototype.tolerateUnexpectedToken = function (e, t) {
                this.errorHandler.tolerate(this.unexpectedTokenError(e, t))
              }
              Parser.prototype.collectComments = function () {
                if (!this.config.comment) {
                  this.scanner.scanComments()
                } else {
                  var e = this.scanner.scanComments()
                  if (e.length > 0 && this.delegate) {
                    for (var t = 0; t < e.length; ++t) {
                      var r = e[t]
                      var i = void 0
                      i = {
                        type: r.multiLine ? 'BlockComment' : 'LineComment',
                        value: this.scanner.source.slice(
                          r.slice[0],
                          r.slice[1]
                        ),
                      }
                      if (this.config.range) {
                        i.range = r.range
                      }
                      if (this.config.loc) {
                        i.loc = r.loc
                      }
                      var n = {
                        start: {
                          line: r.loc.start.line,
                          column: r.loc.start.column,
                          offset: r.range[0],
                        },
                        end: {
                          line: r.loc.end.line,
                          column: r.loc.end.column,
                          offset: r.range[1],
                        },
                      }
                      this.delegate(i, n)
                    }
                  }
                }
              }
              Parser.prototype.getTokenRaw = function (e) {
                return this.scanner.source.slice(e.start, e.end)
              }
              Parser.prototype.convertToken = function (e) {
                var t = {
                  type: o.TokenName[e.type],
                  value: this.getTokenRaw(e),
                }
                if (this.config.range) {
                  t.range = [e.start, e.end]
                }
                if (this.config.loc) {
                  t.loc = {
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
                if (e.type === 9) {
                  var r = e.pattern
                  var i = e.flags
                  t.regex = { pattern: r, flags: i }
                }
                return t
              }
              Parser.prototype.nextToken = function () {
                var e = this.lookahead
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
                var t = this.scanner.lex()
                this.hasLineTerminator = e.lineNumber !== t.lineNumber
                if (t && this.context.strict && t.type === 3) {
                  if (this.scanner.isStrictModeReservedWord(t.value)) {
                    t.type = 4
                  }
                }
                this.lookahead = t
                if (this.config.tokens && t.type !== 2) {
                  this.tokens.push(this.convertToken(t))
                }
                return e
              }
              Parser.prototype.nextRegexToken = function () {
                this.collectComments()
                var e = this.scanner.scanRegExp()
                if (this.config.tokens) {
                  this.tokens.pop()
                  this.tokens.push(this.convertToken(e))
                }
                this.lookahead = e
                this.nextToken()
                return e
              }
              Parser.prototype.createNode = function () {
                return {
                  index: this.startMarker.index,
                  line: this.startMarker.line,
                  column: this.startMarker.column,
                }
              }
              Parser.prototype.startNode = function (e, t) {
                if (t === void 0) {
                  t = 0
                }
                var r = e.start - e.lineStart
                var i = e.lineNumber
                if (r < 0) {
                  r += t
                  i--
                }
                return { index: e.start, line: i, column: r }
              }
              Parser.prototype.finalize = function (e, t) {
                if (this.config.range) {
                  t.range = [e.index, this.lastMarker.index]
                }
                if (this.config.loc) {
                  t.loc = {
                    start: { line: e.line, column: e.column },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                    },
                  }
                  if (this.config.source) {
                    t.loc.source = this.config.source
                  }
                }
                if (this.delegate) {
                  var r = {
                    start: { line: e.line, column: e.column, offset: e.index },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                      offset: this.lastMarker.index,
                    },
                  }
                  this.delegate(t, r)
                }
                return t
              }
              Parser.prototype.expect = function (e) {
                var t = this.nextToken()
                if (t.type !== 7 || t.value !== e) {
                  this.throwUnexpectedToken(t)
                }
              }
              Parser.prototype.expectCommaSeparator = function () {
                if (this.config.tolerant) {
                  var e = this.lookahead
                  if (e.type === 7 && e.value === ',') {
                    this.nextToken()
                  } else if (e.type === 7 && e.value === ';') {
                    this.nextToken()
                    this.tolerateUnexpectedToken(e)
                  } else {
                    this.tolerateUnexpectedToken(e, a.Messages.UnexpectedToken)
                  }
                } else {
                  this.expect(',')
                }
              }
              Parser.prototype.expectKeyword = function (e) {
                var t = this.nextToken()
                if (t.type !== 4 || t.value !== e) {
                  this.throwUnexpectedToken(t)
                }
              }
              Parser.prototype.match = function (e) {
                return this.lookahead.type === 7 && this.lookahead.value === e
              }
              Parser.prototype.matchKeyword = function (e) {
                return this.lookahead.type === 4 && this.lookahead.value === e
              }
              Parser.prototype.matchContextualKeyword = function (e) {
                return this.lookahead.type === 3 && this.lookahead.value === e
              }
              Parser.prototype.matchAssign = function () {
                if (this.lookahead.type !== 7) {
                  return false
                }
                var e = this.lookahead.value
                return (
                  e === '=' ||
                  e === '*=' ||
                  e === '**=' ||
                  e === '/=' ||
                  e === '%=' ||
                  e === '+=' ||
                  e === '-=' ||
                  e === '<<=' ||
                  e === '>>=' ||
                  e === '>>>=' ||
                  e === '&=' ||
                  e === '^=' ||
                  e === '|='
                )
              }
              Parser.prototype.isolateCoverGrammar = function (e) {
                var t = this.context.isBindingElement
                var r = this.context.isAssignmentTarget
                var i = this.context.firstCoverInitializedNameError
                this.context.isBindingElement = true
                this.context.isAssignmentTarget = true
                this.context.firstCoverInitializedNameError = null
                var n = e.call(this)
                if (this.context.firstCoverInitializedNameError !== null) {
                  this.throwUnexpectedToken(
                    this.context.firstCoverInitializedNameError
                  )
                }
                this.context.isBindingElement = t
                this.context.isAssignmentTarget = r
                this.context.firstCoverInitializedNameError = i
                return n
              }
              Parser.prototype.inheritCoverGrammar = function (e) {
                var t = this.context.isBindingElement
                var r = this.context.isAssignmentTarget
                var i = this.context.firstCoverInitializedNameError
                this.context.isBindingElement = true
                this.context.isAssignmentTarget = true
                this.context.firstCoverInitializedNameError = null
                var n = e.call(this)
                this.context.isBindingElement =
                  this.context.isBindingElement && t
                this.context.isAssignmentTarget =
                  this.context.isAssignmentTarget && r
                this.context.firstCoverInitializedNameError =
                  i || this.context.firstCoverInitializedNameError
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
                var e = this.createNode()
                var t
                var r, i
                switch (this.lookahead.type) {
                  case 3:
                    if (
                      (this.context.isModule || this.context.await) &&
                      this.lookahead.value === 'await'
                    ) {
                      this.tolerateUnexpectedToken(this.lookahead)
                    }
                    t = this.matchAsyncFunction()
                      ? this.parseFunctionExpression()
                      : this.finalize(
                          e,
                          new s.Identifier(this.nextToken().value)
                        )
                    break
                  case 6:
                  case 8:
                    if (this.context.strict && this.lookahead.octal) {
                      this.tolerateUnexpectedToken(
                        this.lookahead,
                        a.Messages.StrictOctalLiteral
                      )
                    }
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    r = this.nextToken()
                    i = this.getTokenRaw(r)
                    t = this.finalize(e, new s.Literal(r.value, i))
                    break
                  case 1:
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    r = this.nextToken()
                    i = this.getTokenRaw(r)
                    t = this.finalize(e, new s.Literal(r.value === 'true', i))
                    break
                  case 5:
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    r = this.nextToken()
                    i = this.getTokenRaw(r)
                    t = this.finalize(e, new s.Literal(null, i))
                    break
                  case 10:
                    t = this.parseTemplateLiteral()
                    break
                  case 7:
                    switch (this.lookahead.value) {
                      case '(':
                        this.context.isBindingElement = false
                        t = this.inheritCoverGrammar(this.parseGroupExpression)
                        break
                      case '[':
                        t = this.inheritCoverGrammar(this.parseArrayInitializer)
                        break
                      case '{':
                        t = this.inheritCoverGrammar(
                          this.parseObjectInitializer
                        )
                        break
                      case '/':
                      case '/=':
                        this.context.isAssignmentTarget = false
                        this.context.isBindingElement = false
                        this.scanner.index = this.startMarker.index
                        r = this.nextRegexToken()
                        i = this.getTokenRaw(r)
                        t = this.finalize(
                          e,
                          new s.RegexLiteral(r.regex, i, r.pattern, r.flags)
                        )
                        break
                      default:
                        t = this.throwUnexpectedToken(this.nextToken())
                    }
                    break
                  case 4:
                    if (
                      !this.context.strict &&
                      this.context.allowYield &&
                      this.matchKeyword('yield')
                    ) {
                      t = this.parseIdentifierName()
                    } else if (
                      !this.context.strict &&
                      this.matchKeyword('let')
                    ) {
                      t = this.finalize(
                        e,
                        new s.Identifier(this.nextToken().value)
                      )
                    } else {
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      if (this.matchKeyword('function')) {
                        t = this.parseFunctionExpression()
                      } else if (this.matchKeyword('this')) {
                        this.nextToken()
                        t = this.finalize(e, new s.ThisExpression())
                      } else if (this.matchKeyword('class')) {
                        t = this.parseClassExpression()
                      } else {
                        t = this.throwUnexpectedToken(this.nextToken())
                      }
                    }
                    break
                  default:
                    t = this.throwUnexpectedToken(this.nextToken())
                }
                return t
              }
              Parser.prototype.parseSpreadElement = function () {
                var e = this.createNode()
                this.expect('...')
                var t = this.inheritCoverGrammar(this.parseAssignmentExpression)
                return this.finalize(e, new s.SpreadElement(t))
              }
              Parser.prototype.parseArrayInitializer = function () {
                var e = this.createNode()
                var t = []
                this.expect('[')
                while (!this.match(']')) {
                  if (this.match(',')) {
                    this.nextToken()
                    t.push(null)
                  } else if (this.match('...')) {
                    var r = this.parseSpreadElement()
                    if (!this.match(']')) {
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      this.expect(',')
                    }
                    t.push(r)
                  } else {
                    t.push(
                      this.inheritCoverGrammar(this.parseAssignmentExpression)
                    )
                    if (!this.match(']')) {
                      this.expect(',')
                    }
                  }
                }
                this.expect(']')
                return this.finalize(e, new s.ArrayExpression(t))
              }
              Parser.prototype.parsePropertyMethod = function (e) {
                this.context.isAssignmentTarget = false
                this.context.isBindingElement = false
                var t = this.context.strict
                var r = this.context.allowStrictDirective
                this.context.allowStrictDirective = e.simple
                var i = this.isolateCoverGrammar(
                  this.parseFunctionSourceElements
                )
                if (this.context.strict && e.firstRestricted) {
                  this.tolerateUnexpectedToken(e.firstRestricted, e.message)
                }
                if (this.context.strict && e.stricted) {
                  this.tolerateUnexpectedToken(e.stricted, e.message)
                }
                this.context.strict = t
                this.context.allowStrictDirective = r
                return i
              }
              Parser.prototype.parsePropertyMethodFunction = function () {
                var e = false
                var t = this.createNode()
                var r = this.context.allowYield
                this.context.allowYield = true
                var i = this.parseFormalParameters()
                var n = this.parsePropertyMethod(i)
                this.context.allowYield = r
                return this.finalize(
                  t,
                  new s.FunctionExpression(null, i.params, n, e)
                )
              }
              Parser.prototype.parsePropertyMethodAsyncFunction = function () {
                var e = this.createNode()
                var t = this.context.allowYield
                var r = this.context.await
                this.context.allowYield = false
                this.context.await = true
                var i = this.parseFormalParameters()
                var n = this.parsePropertyMethod(i)
                this.context.allowYield = t
                this.context.await = r
                return this.finalize(
                  e,
                  new s.AsyncFunctionExpression(null, i.params, n)
                )
              }
              Parser.prototype.parseObjectPropertyKey = function () {
                var e = this.createNode()
                var t = this.nextToken()
                var r
                switch (t.type) {
                  case 8:
                  case 6:
                    if (this.context.strict && t.octal) {
                      this.tolerateUnexpectedToken(
                        t,
                        a.Messages.StrictOctalLiteral
                      )
                    }
                    var i = this.getTokenRaw(t)
                    r = this.finalize(e, new s.Literal(t.value, i))
                    break
                  case 3:
                  case 1:
                  case 5:
                  case 4:
                    r = this.finalize(e, new s.Identifier(t.value))
                    break
                  case 7:
                    if (t.value === '[') {
                      r = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      this.expect(']')
                    } else {
                      r = this.throwUnexpectedToken(t)
                    }
                    break
                  default:
                    r = this.throwUnexpectedToken(t)
                }
                return r
              }
              Parser.prototype.isPropertyKey = function (e, t) {
                return (
                  (e.type === l.Syntax.Identifier && e.name === t) ||
                  (e.type === l.Syntax.Literal && e.value === t)
                )
              }
              Parser.prototype.parseObjectProperty = function (e) {
                var t = this.createNode()
                var r = this.lookahead
                var i
                var n = null
                var u = null
                var l = false
                var o = false
                var c = false
                var h = false
                if (r.type === 3) {
                  var f = r.value
                  this.nextToken()
                  l = this.match('[')
                  h =
                    !this.hasLineTerminator &&
                    f === 'async' &&
                    !this.match(':') &&
                    !this.match('(') &&
                    !this.match('*') &&
                    !this.match(',')
                  n = h
                    ? this.parseObjectPropertyKey()
                    : this.finalize(t, new s.Identifier(f))
                } else if (this.match('*')) {
                  this.nextToken()
                } else {
                  l = this.match('[')
                  n = this.parseObjectPropertyKey()
                }
                var p = this.qualifiedPropertyName(this.lookahead)
                if (r.type === 3 && !h && r.value === 'get' && p) {
                  i = 'get'
                  l = this.match('[')
                  n = this.parseObjectPropertyKey()
                  this.context.allowYield = false
                  u = this.parseGetterMethod()
                } else if (r.type === 3 && !h && r.value === 'set' && p) {
                  i = 'set'
                  l = this.match('[')
                  n = this.parseObjectPropertyKey()
                  u = this.parseSetterMethod()
                } else if (r.type === 7 && r.value === '*' && p) {
                  i = 'init'
                  l = this.match('[')
                  n = this.parseObjectPropertyKey()
                  u = this.parseGeneratorMethod()
                  o = true
                } else {
                  if (!n) {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                  i = 'init'
                  if (this.match(':') && !h) {
                    if (!l && this.isPropertyKey(n, '__proto__')) {
                      if (e.value) {
                        this.tolerateError(a.Messages.DuplicateProtoProperty)
                      }
                      e.value = true
                    }
                    this.nextToken()
                    u = this.inheritCoverGrammar(this.parseAssignmentExpression)
                  } else if (this.match('(')) {
                    u = h
                      ? this.parsePropertyMethodAsyncFunction()
                      : this.parsePropertyMethodFunction()
                    o = true
                  } else if (r.type === 3) {
                    var f = this.finalize(t, new s.Identifier(r.value))
                    if (this.match('=')) {
                      this.context.firstCoverInitializedNameError =
                        this.lookahead
                      this.nextToken()
                      c = true
                      var d = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      u = this.finalize(t, new s.AssignmentPattern(f, d))
                    } else {
                      c = true
                      u = f
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                }
                return this.finalize(t, new s.Property(i, n, l, u, o, c))
              }
              Parser.prototype.parseObjectInitializer = function () {
                var e = this.createNode()
                this.expect('{')
                var t = []
                var r = { value: false }
                while (!this.match('}')) {
                  t.push(this.parseObjectProperty(r))
                  if (!this.match('}')) {
                    this.expectCommaSeparator()
                  }
                }
                this.expect('}')
                return this.finalize(e, new s.ObjectExpression(t))
              }
              Parser.prototype.parseTemplateHead = function () {
                i.assert(
                  this.lookahead.head,
                  'Template literal must start with a template head'
                )
                var e = this.createNode()
                var t = this.nextToken()
                var r = t.value
                var n = t.cooked
                return this.finalize(
                  e,
                  new s.TemplateElement({ raw: r, cooked: n }, t.tail)
                )
              }
              Parser.prototype.parseTemplateElement = function () {
                if (this.lookahead.type !== 10) {
                  this.throwUnexpectedToken()
                }
                var e = this.createNode()
                var t = this.nextToken()
                var r = t.value
                var i = t.cooked
                return this.finalize(
                  e,
                  new s.TemplateElement({ raw: r, cooked: i }, t.tail)
                )
              }
              Parser.prototype.parseTemplateLiteral = function () {
                var e = this.createNode()
                var t = []
                var r = []
                var i = this.parseTemplateHead()
                r.push(i)
                while (!i.tail) {
                  t.push(this.parseExpression())
                  i = this.parseTemplateElement()
                  r.push(i)
                }
                return this.finalize(e, new s.TemplateLiteral(r, t))
              }
              Parser.prototype.reinterpretExpressionAsPattern = function (e) {
                switch (e.type) {
                  case l.Syntax.Identifier:
                  case l.Syntax.MemberExpression:
                  case l.Syntax.RestElement:
                  case l.Syntax.AssignmentPattern:
                    break
                  case l.Syntax.SpreadElement:
                    e.type = l.Syntax.RestElement
                    this.reinterpretExpressionAsPattern(e.argument)
                    break
                  case l.Syntax.ArrayExpression:
                    e.type = l.Syntax.ArrayPattern
                    for (var t = 0; t < e.elements.length; t++) {
                      if (e.elements[t] !== null) {
                        this.reinterpretExpressionAsPattern(e.elements[t])
                      }
                    }
                    break
                  case l.Syntax.ObjectExpression:
                    e.type = l.Syntax.ObjectPattern
                    for (var t = 0; t < e.properties.length; t++) {
                      this.reinterpretExpressionAsPattern(e.properties[t].value)
                    }
                    break
                  case l.Syntax.AssignmentExpression:
                    e.type = l.Syntax.AssignmentPattern
                    delete e.operator
                    this.reinterpretExpressionAsPattern(e.left)
                    break
                  default:
                    break
                }
              }
              Parser.prototype.parseGroupExpression = function () {
                var e
                this.expect('(')
                if (this.match(')')) {
                  this.nextToken()
                  if (!this.match('=>')) {
                    this.expect('=>')
                  }
                  e = { type: c, params: [], async: false }
                } else {
                  var t = this.lookahead
                  var r = []
                  if (this.match('...')) {
                    e = this.parseRestElement(r)
                    this.expect(')')
                    if (!this.match('=>')) {
                      this.expect('=>')
                    }
                    e = { type: c, params: [e], async: false }
                  } else {
                    var i = false
                    this.context.isBindingElement = true
                    e = this.inheritCoverGrammar(this.parseAssignmentExpression)
                    if (this.match(',')) {
                      var n = []
                      this.context.isAssignmentTarget = false
                      n.push(e)
                      while (this.lookahead.type !== 2) {
                        if (!this.match(',')) {
                          break
                        }
                        this.nextToken()
                        if (this.match(')')) {
                          this.nextToken()
                          for (var a = 0; a < n.length; a++) {
                            this.reinterpretExpressionAsPattern(n[a])
                          }
                          i = true
                          e = { type: c, params: n, async: false }
                        } else if (this.match('...')) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead)
                          }
                          n.push(this.parseRestElement(r))
                          this.expect(')')
                          if (!this.match('=>')) {
                            this.expect('=>')
                          }
                          this.context.isBindingElement = false
                          for (var a = 0; a < n.length; a++) {
                            this.reinterpretExpressionAsPattern(n[a])
                          }
                          i = true
                          e = { type: c, params: n, async: false }
                        } else {
                          n.push(
                            this.inheritCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          )
                        }
                        if (i) {
                          break
                        }
                      }
                      if (!i) {
                        e = this.finalize(
                          this.startNode(t),
                          new s.SequenceExpression(n)
                        )
                      }
                    }
                    if (!i) {
                      this.expect(')')
                      if (this.match('=>')) {
                        if (
                          e.type === l.Syntax.Identifier &&
                          e.name === 'yield'
                        ) {
                          i = true
                          e = { type: c, params: [e], async: false }
                        }
                        if (!i) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead)
                          }
                          if (e.type === l.Syntax.SequenceExpression) {
                            for (var a = 0; a < e.expressions.length; a++) {
                              this.reinterpretExpressionAsPattern(
                                e.expressions[a]
                              )
                            }
                          } else {
                            this.reinterpretExpressionAsPattern(e)
                          }
                          var u =
                            e.type === l.Syntax.SequenceExpression
                              ? e.expressions
                              : [e]
                          e = { type: c, params: u, async: false }
                        }
                      }
                      this.context.isBindingElement = false
                    }
                  }
                }
                return e
              }
              Parser.prototype.parseArguments = function () {
                this.expect('(')
                var e = []
                if (!this.match(')')) {
                  while (true) {
                    var t = this.match('...')
                      ? this.parseSpreadElement()
                      : this.isolateCoverGrammar(this.parseAssignmentExpression)
                    e.push(t)
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
                return e
              }
              Parser.prototype.isIdentifierName = function (e) {
                return (
                  e.type === 3 || e.type === 4 || e.type === 1 || e.type === 5
                )
              }
              Parser.prototype.parseIdentifierName = function () {
                var e = this.createNode()
                var t = this.nextToken()
                if (!this.isIdentifierName(t)) {
                  this.throwUnexpectedToken(t)
                }
                return this.finalize(e, new s.Identifier(t.value))
              }
              Parser.prototype.parseNewExpression = function () {
                var e = this.createNode()
                var t = this.parseIdentifierName()
                i.assert(
                  t.name === 'new',
                  'New expression must start with `new`'
                )
                var r
                if (this.match('.')) {
                  this.nextToken()
                  if (
                    this.lookahead.type === 3 &&
                    this.context.inFunctionBody &&
                    this.lookahead.value === 'target'
                  ) {
                    var n = this.parseIdentifierName()
                    r = new s.MetaProperty(t, n)
                  } else {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                } else {
                  var a = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpression
                  )
                  var u = this.match('(') ? this.parseArguments() : []
                  r = new s.NewExpression(a, u)
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                }
                return this.finalize(e, r)
              }
              Parser.prototype.parseAsyncArgument = function () {
                var e = this.parseAssignmentExpression()
                this.context.firstCoverInitializedNameError = null
                return e
              }
              Parser.prototype.parseAsyncArguments = function () {
                this.expect('(')
                var e = []
                if (!this.match(')')) {
                  while (true) {
                    var t = this.match('...')
                      ? this.parseSpreadElement()
                      : this.isolateCoverGrammar(this.parseAsyncArgument)
                    e.push(t)
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
                return e
              }
              Parser.prototype.parseLeftHandSideExpressionAllowCall =
                function () {
                  var e = this.lookahead
                  var t = this.matchContextualKeyword('async')
                  var r = this.context.allowIn
                  this.context.allowIn = true
                  var i
                  if (
                    this.matchKeyword('super') &&
                    this.context.inFunctionBody
                  ) {
                    i = this.createNode()
                    this.nextToken()
                    i = this.finalize(i, new s.Super())
                    if (
                      !this.match('(') &&
                      !this.match('.') &&
                      !this.match('[')
                    ) {
                      this.throwUnexpectedToken(this.lookahead)
                    }
                  } else {
                    i = this.inheritCoverGrammar(
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
                      i = this.finalize(
                        this.startNode(e),
                        new s.StaticMemberExpression(i, n)
                      )
                    } else if (this.match('(')) {
                      var a = t && e.lineNumber === this.lookahead.lineNumber
                      this.context.isBindingElement = false
                      this.context.isAssignmentTarget = false
                      var u = a
                        ? this.parseAsyncArguments()
                        : this.parseArguments()
                      i = this.finalize(
                        this.startNode(e),
                        new s.CallExpression(i, u)
                      )
                      if (a && this.match('=>')) {
                        for (var l = 0; l < u.length; ++l) {
                          this.reinterpretExpressionAsPattern(u[l])
                        }
                        i = { type: c, params: u, async: true }
                      }
                    } else if (this.match('[')) {
                      this.context.isBindingElement = false
                      this.context.isAssignmentTarget = true
                      this.expect('[')
                      var n = this.isolateCoverGrammar(this.parseExpression)
                      this.expect(']')
                      i = this.finalize(
                        this.startNode(e),
                        new s.ComputedMemberExpression(i, n)
                      )
                    } else if (
                      this.lookahead.type === 10 &&
                      this.lookahead.head
                    ) {
                      var o = this.parseTemplateLiteral()
                      i = this.finalize(
                        this.startNode(e),
                        new s.TaggedTemplateExpression(i, o)
                      )
                    } else {
                      break
                    }
                  }
                  this.context.allowIn = r
                  return i
                }
              Parser.prototype.parseSuper = function () {
                var e = this.createNode()
                this.expectKeyword('super')
                if (!this.match('[') && !this.match('.')) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                return this.finalize(e, new s.Super())
              }
              Parser.prototype.parseLeftHandSideExpression = function () {
                i.assert(
                  this.context.allowIn,
                  'callee of new expression always allow in keyword.'
                )
                var e = this.startNode(this.lookahead)
                var t =
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
                    var r = this.isolateCoverGrammar(this.parseExpression)
                    this.expect(']')
                    t = this.finalize(e, new s.ComputedMemberExpression(t, r))
                  } else if (this.match('.')) {
                    this.context.isBindingElement = false
                    this.context.isAssignmentTarget = true
                    this.expect('.')
                    var r = this.parseIdentifierName()
                    t = this.finalize(e, new s.StaticMemberExpression(t, r))
                  } else if (
                    this.lookahead.type === 10 &&
                    this.lookahead.head
                  ) {
                    var n = this.parseTemplateLiteral()
                    t = this.finalize(e, new s.TaggedTemplateExpression(t, n))
                  } else {
                    break
                  }
                }
                return t
              }
              Parser.prototype.parseUpdateExpression = function () {
                var e
                var t = this.lookahead
                if (this.match('++') || this.match('--')) {
                  var r = this.startNode(t)
                  var i = this.nextToken()
                  e = this.inheritCoverGrammar(this.parseUnaryExpression)
                  if (
                    this.context.strict &&
                    e.type === l.Syntax.Identifier &&
                    this.scanner.isRestrictedWord(e.name)
                  ) {
                    this.tolerateError(a.Messages.StrictLHSPrefix)
                  }
                  if (!this.context.isAssignmentTarget) {
                    this.tolerateError(a.Messages.InvalidLHSInAssignment)
                  }
                  var n = true
                  e = this.finalize(r, new s.UpdateExpression(i.value, e, n))
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                } else {
                  e = this.inheritCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                  if (!this.hasLineTerminator && this.lookahead.type === 7) {
                    if (this.match('++') || this.match('--')) {
                      if (
                        this.context.strict &&
                        e.type === l.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(e.name)
                      ) {
                        this.tolerateError(a.Messages.StrictLHSPostfix)
                      }
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(a.Messages.InvalidLHSInAssignment)
                      }
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      var u = this.nextToken().value
                      var n = false
                      e = this.finalize(
                        this.startNode(t),
                        new s.UpdateExpression(u, e, n)
                      )
                    }
                  }
                }
                return e
              }
              Parser.prototype.parseAwaitExpression = function () {
                var e = this.createNode()
                this.nextToken()
                var t = this.parseUnaryExpression()
                return this.finalize(e, new s.AwaitExpression(t))
              }
              Parser.prototype.parseUnaryExpression = function () {
                var e
                if (
                  this.match('+') ||
                  this.match('-') ||
                  this.match('~') ||
                  this.match('!') ||
                  this.matchKeyword('delete') ||
                  this.matchKeyword('void') ||
                  this.matchKeyword('typeof')
                ) {
                  var t = this.startNode(this.lookahead)
                  var r = this.nextToken()
                  e = this.inheritCoverGrammar(this.parseUnaryExpression)
                  e = this.finalize(t, new s.UnaryExpression(r.value, e))
                  if (
                    this.context.strict &&
                    e.operator === 'delete' &&
                    e.argument.type === l.Syntax.Identifier
                  ) {
                    this.tolerateError(a.Messages.StrictDelete)
                  }
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                } else if (
                  this.context.await &&
                  this.matchContextualKeyword('await')
                ) {
                  e = this.parseAwaitExpression()
                } else {
                  e = this.parseUpdateExpression()
                }
                return e
              }
              Parser.prototype.parseExponentiationExpression = function () {
                var e = this.lookahead
                var t = this.inheritCoverGrammar(this.parseUnaryExpression)
                if (t.type !== l.Syntax.UnaryExpression && this.match('**')) {
                  this.nextToken()
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                  var r = t
                  var i = this.isolateCoverGrammar(
                    this.parseExponentiationExpression
                  )
                  t = this.finalize(
                    this.startNode(e),
                    new s.BinaryExpression('**', r, i)
                  )
                }
                return t
              }
              Parser.prototype.binaryPrecedence = function (e) {
                var t = e.value
                var r
                if (e.type === 7) {
                  r = this.operatorPrecedence[t] || 0
                } else if (e.type === 4) {
                  r =
                    t === 'instanceof' || (this.context.allowIn && t === 'in')
                      ? 7
                      : 0
                } else {
                  r = 0
                }
                return r
              }
              Parser.prototype.parseBinaryExpression = function () {
                var e = this.lookahead
                var t = this.inheritCoverGrammar(
                  this.parseExponentiationExpression
                )
                var r = this.lookahead
                var i = this.binaryPrecedence(r)
                if (i > 0) {
                  this.nextToken()
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                  var n = [e, this.lookahead]
                  var a = t
                  var u = this.isolateCoverGrammar(
                    this.parseExponentiationExpression
                  )
                  var l = [a, r.value, u]
                  var o = [i]
                  while (true) {
                    i = this.binaryPrecedence(this.lookahead)
                    if (i <= 0) {
                      break
                    }
                    while (l.length > 2 && i <= o[o.length - 1]) {
                      u = l.pop()
                      var c = l.pop()
                      o.pop()
                      a = l.pop()
                      n.pop()
                      var h = this.startNode(n[n.length - 1])
                      l.push(this.finalize(h, new s.BinaryExpression(c, a, u)))
                    }
                    l.push(this.nextToken().value)
                    o.push(i)
                    n.push(this.lookahead)
                    l.push(
                      this.isolateCoverGrammar(
                        this.parseExponentiationExpression
                      )
                    )
                  }
                  var f = l.length - 1
                  t = l[f]
                  var p = n.pop()
                  while (f > 1) {
                    var d = n.pop()
                    var m = p && p.lineStart
                    var h = this.startNode(d, m)
                    var c = l[f - 1]
                    t = this.finalize(h, new s.BinaryExpression(c, l[f - 2], t))
                    f -= 2
                    p = d
                  }
                }
                return t
              }
              Parser.prototype.parseConditionalExpression = function () {
                var e = this.lookahead
                var t = this.inheritCoverGrammar(this.parseBinaryExpression)
                if (this.match('?')) {
                  this.nextToken()
                  var r = this.context.allowIn
                  this.context.allowIn = true
                  var i = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  this.context.allowIn = r
                  this.expect(':')
                  var n = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  t = this.finalize(
                    this.startNode(e),
                    new s.ConditionalExpression(t, i, n)
                  )
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                }
                return t
              }
              Parser.prototype.checkPatternParam = function (e, t) {
                switch (t.type) {
                  case l.Syntax.Identifier:
                    this.validateParam(e, t, t.name)
                    break
                  case l.Syntax.RestElement:
                    this.checkPatternParam(e, t.argument)
                    break
                  case l.Syntax.AssignmentPattern:
                    this.checkPatternParam(e, t.left)
                    break
                  case l.Syntax.ArrayPattern:
                    for (var r = 0; r < t.elements.length; r++) {
                      if (t.elements[r] !== null) {
                        this.checkPatternParam(e, t.elements[r])
                      }
                    }
                    break
                  case l.Syntax.ObjectPattern:
                    for (var r = 0; r < t.properties.length; r++) {
                      this.checkPatternParam(e, t.properties[r].value)
                    }
                    break
                  default:
                    break
                }
                e.simple = e.simple && t instanceof s.Identifier
              }
              Parser.prototype.reinterpretAsCoverFormalsList = function (e) {
                var t = [e]
                var r
                var i = false
                switch (e.type) {
                  case l.Syntax.Identifier:
                    break
                  case c:
                    t = e.params
                    i = e.async
                    break
                  default:
                    return null
                }
                r = { simple: true, paramSet: {} }
                for (var n = 0; n < t.length; ++n) {
                  var s = t[n]
                  if (s.type === l.Syntax.AssignmentPattern) {
                    if (s.right.type === l.Syntax.YieldExpression) {
                      if (s.right.argument) {
                        this.throwUnexpectedToken(this.lookahead)
                      }
                      s.right.type = l.Syntax.Identifier
                      s.right.name = 'yield'
                      delete s.right.argument
                      delete s.right.delegate
                    }
                  } else if (
                    i &&
                    s.type === l.Syntax.Identifier &&
                    s.name === 'await'
                  ) {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                  this.checkPatternParam(r, s)
                  t[n] = s
                }
                if (this.context.strict || !this.context.allowYield) {
                  for (var n = 0; n < t.length; ++n) {
                    var s = t[n]
                    if (s.type === l.Syntax.YieldExpression) {
                      this.throwUnexpectedToken(this.lookahead)
                    }
                  }
                }
                if (r.message === a.Messages.StrictParamDupe) {
                  var u = this.context.strict ? r.stricted : r.firstRestricted
                  this.throwUnexpectedToken(u, r.message)
                }
                return {
                  simple: r.simple,
                  params: t,
                  stricted: r.stricted,
                  firstRestricted: r.firstRestricted,
                  message: r.message,
                }
              }
              Parser.prototype.parseAssignmentExpression = function () {
                var e
                if (!this.context.allowYield && this.matchKeyword('yield')) {
                  e = this.parseYieldExpression()
                } else {
                  var t = this.lookahead
                  var r = t
                  e = this.parseConditionalExpression()
                  if (
                    r.type === 3 &&
                    r.lineNumber === this.lookahead.lineNumber &&
                    r.value === 'async'
                  ) {
                    if (
                      this.lookahead.type === 3 ||
                      this.matchKeyword('yield')
                    ) {
                      var i = this.parsePrimaryExpression()
                      this.reinterpretExpressionAsPattern(i)
                      e = { type: c, params: [i], async: true }
                    }
                  }
                  if (e.type === c || this.match('=>')) {
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    var n = e.async
                    var u = this.reinterpretAsCoverFormalsList(e)
                    if (u) {
                      if (this.hasLineTerminator) {
                        this.tolerateUnexpectedToken(this.lookahead)
                      }
                      this.context.firstCoverInitializedNameError = null
                      var o = this.context.strict
                      var h = this.context.allowStrictDirective
                      this.context.allowStrictDirective = u.simple
                      var f = this.context.allowYield
                      var p = this.context.await
                      this.context.allowYield = true
                      this.context.await = n
                      var d = this.startNode(t)
                      this.expect('=>')
                      var m = void 0
                      if (this.match('{')) {
                        var v = this.context.allowIn
                        this.context.allowIn = true
                        m = this.parseFunctionSourceElements()
                        this.context.allowIn = v
                      } else {
                        m = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        )
                      }
                      var y = m.type !== l.Syntax.BlockStatement
                      if (this.context.strict && u.firstRestricted) {
                        this.throwUnexpectedToken(u.firstRestricted, u.message)
                      }
                      if (this.context.strict && u.stricted) {
                        this.tolerateUnexpectedToken(u.stricted, u.message)
                      }
                      e = n
                        ? this.finalize(
                            d,
                            new s.AsyncArrowFunctionExpression(u.params, m, y)
                          )
                        : this.finalize(
                            d,
                            new s.ArrowFunctionExpression(u.params, m, y)
                          )
                      this.context.strict = o
                      this.context.allowStrictDirective = h
                      this.context.allowYield = f
                      this.context.await = p
                    }
                  } else {
                    if (this.matchAssign()) {
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(a.Messages.InvalidLHSInAssignment)
                      }
                      if (
                        this.context.strict &&
                        e.type === l.Syntax.Identifier
                      ) {
                        var x = e
                        if (this.scanner.isRestrictedWord(x.name)) {
                          this.tolerateUnexpectedToken(
                            r,
                            a.Messages.StrictLHSAssignment
                          )
                        }
                        if (this.scanner.isStrictModeReservedWord(x.name)) {
                          this.tolerateUnexpectedToken(
                            r,
                            a.Messages.StrictReservedWord
                          )
                        }
                      }
                      if (!this.match('=')) {
                        this.context.isAssignmentTarget = false
                        this.context.isBindingElement = false
                      } else {
                        this.reinterpretExpressionAsPattern(e)
                      }
                      r = this.nextToken()
                      var E = r.value
                      var S = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      e = this.finalize(
                        this.startNode(t),
                        new s.AssignmentExpression(E, e, S)
                      )
                      this.context.firstCoverInitializedNameError = null
                    }
                  }
                }
                return e
              }
              Parser.prototype.parseExpression = function () {
                var e = this.lookahead
                var t = this.isolateCoverGrammar(this.parseAssignmentExpression)
                if (this.match(',')) {
                  var r = []
                  r.push(t)
                  while (this.lookahead.type !== 2) {
                    if (!this.match(',')) {
                      break
                    }
                    this.nextToken()
                    r.push(
                      this.isolateCoverGrammar(this.parseAssignmentExpression)
                    )
                  }
                  t = this.finalize(
                    this.startNode(e),
                    new s.SequenceExpression(r)
                  )
                }
                return t
              }
              Parser.prototype.parseStatementListItem = function () {
                var e
                this.context.isAssignmentTarget = true
                this.context.isBindingElement = true
                if (this.lookahead.type === 4) {
                  switch (this.lookahead.value) {
                    case 'export':
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(
                          this.lookahead,
                          a.Messages.IllegalExportDeclaration
                        )
                      }
                      e = this.parseExportDeclaration()
                      break
                    case 'import':
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(
                          this.lookahead,
                          a.Messages.IllegalImportDeclaration
                        )
                      }
                      e = this.parseImportDeclaration()
                      break
                    case 'const':
                      e = this.parseLexicalDeclaration({ inFor: false })
                      break
                    case 'function':
                      e = this.parseFunctionDeclaration()
                      break
                    case 'class':
                      e = this.parseClassDeclaration()
                      break
                    case 'let':
                      e = this.isLexicalDeclaration()
                        ? this.parseLexicalDeclaration({ inFor: false })
                        : this.parseStatement()
                      break
                    default:
                      e = this.parseStatement()
                      break
                  }
                } else {
                  e = this.parseStatement()
                }
                return e
              }
              Parser.prototype.parseBlock = function () {
                var e = this.createNode()
                this.expect('{')
                var t = []
                while (true) {
                  if (this.match('}')) {
                    break
                  }
                  t.push(this.parseStatementListItem())
                }
                this.expect('}')
                return this.finalize(e, new s.BlockStatement(t))
              }
              Parser.prototype.parseLexicalBinding = function (e, t) {
                var r = this.createNode()
                var i = []
                var n = this.parsePattern(i, e)
                if (this.context.strict && n.type === l.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(n.name)) {
                    this.tolerateError(a.Messages.StrictVarName)
                  }
                }
                var u = null
                if (e === 'const') {
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
                        a.Messages.DeclarationMissingInitializer,
                        'const'
                      )
                    }
                  }
                } else if (
                  (!t.inFor && n.type !== l.Syntax.Identifier) ||
                  this.match('=')
                ) {
                  this.expect('=')
                  u = this.isolateCoverGrammar(this.parseAssignmentExpression)
                }
                return this.finalize(r, new s.VariableDeclarator(n, u))
              }
              Parser.prototype.parseBindingList = function (e, t) {
                var r = [this.parseLexicalBinding(e, t)]
                while (this.match(',')) {
                  this.nextToken()
                  r.push(this.parseLexicalBinding(e, t))
                }
                return r
              }
              Parser.prototype.isLexicalDeclaration = function () {
                var e = this.scanner.saveState()
                this.scanner.scanComments()
                var t = this.scanner.lex()
                this.scanner.restoreState(e)
                return (
                  t.type === 3 ||
                  (t.type === 7 && t.value === '[') ||
                  (t.type === 7 && t.value === '{') ||
                  (t.type === 4 && t.value === 'let') ||
                  (t.type === 4 && t.value === 'yield')
                )
              }
              Parser.prototype.parseLexicalDeclaration = function (e) {
                var t = this.createNode()
                var r = this.nextToken().value
                i.assert(
                  r === 'let' || r === 'const',
                  'Lexical declaration must be either let or const'
                )
                var n = this.parseBindingList(r, e)
                this.consumeSemicolon()
                return this.finalize(t, new s.VariableDeclaration(n, r))
              }
              Parser.prototype.parseBindingRestElement = function (e, t) {
                var r = this.createNode()
                this.expect('...')
                var i = this.parsePattern(e, t)
                return this.finalize(r, new s.RestElement(i))
              }
              Parser.prototype.parseArrayPattern = function (e, t) {
                var r = this.createNode()
                this.expect('[')
                var i = []
                while (!this.match(']')) {
                  if (this.match(',')) {
                    this.nextToken()
                    i.push(null)
                  } else {
                    if (this.match('...')) {
                      i.push(this.parseBindingRestElement(e, t))
                      break
                    } else {
                      i.push(this.parsePatternWithDefault(e, t))
                    }
                    if (!this.match(']')) {
                      this.expect(',')
                    }
                  }
                }
                this.expect(']')
                return this.finalize(r, new s.ArrayPattern(i))
              }
              Parser.prototype.parsePropertyPattern = function (e, t) {
                var r = this.createNode()
                var i = false
                var n = false
                var a = false
                var u
                var l
                if (this.lookahead.type === 3) {
                  var o = this.lookahead
                  u = this.parseVariableIdentifier()
                  var c = this.finalize(r, new s.Identifier(o.value))
                  if (this.match('=')) {
                    e.push(o)
                    n = true
                    this.nextToken()
                    var h = this.parseAssignmentExpression()
                    l = this.finalize(
                      this.startNode(o),
                      new s.AssignmentPattern(c, h)
                    )
                  } else if (!this.match(':')) {
                    e.push(o)
                    n = true
                    l = c
                  } else {
                    this.expect(':')
                    l = this.parsePatternWithDefault(e, t)
                  }
                } else {
                  i = this.match('[')
                  u = this.parseObjectPropertyKey()
                  this.expect(':')
                  l = this.parsePatternWithDefault(e, t)
                }
                return this.finalize(r, new s.Property('init', u, i, l, a, n))
              }
              Parser.prototype.parseObjectPattern = function (e, t) {
                var r = this.createNode()
                var i = []
                this.expect('{')
                while (!this.match('}')) {
                  i.push(this.parsePropertyPattern(e, t))
                  if (!this.match('}')) {
                    this.expect(',')
                  }
                }
                this.expect('}')
                return this.finalize(r, new s.ObjectPattern(i))
              }
              Parser.prototype.parsePattern = function (e, t) {
                var r
                if (this.match('[')) {
                  r = this.parseArrayPattern(e, t)
                } else if (this.match('{')) {
                  r = this.parseObjectPattern(e, t)
                } else {
                  if (
                    this.matchKeyword('let') &&
                    (t === 'const' || t === 'let')
                  ) {
                    this.tolerateUnexpectedToken(
                      this.lookahead,
                      a.Messages.LetInLexicalBinding
                    )
                  }
                  e.push(this.lookahead)
                  r = this.parseVariableIdentifier(t)
                }
                return r
              }
              Parser.prototype.parsePatternWithDefault = function (e, t) {
                var r = this.lookahead
                var i = this.parsePattern(e, t)
                if (this.match('=')) {
                  this.nextToken()
                  var n = this.context.allowYield
                  this.context.allowYield = true
                  var a = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  this.context.allowYield = n
                  i = this.finalize(
                    this.startNode(r),
                    new s.AssignmentPattern(i, a)
                  )
                }
                return i
              }
              Parser.prototype.parseVariableIdentifier = function (e) {
                var t = this.createNode()
                var r = this.nextToken()
                if (r.type === 4 && r.value === 'yield') {
                  if (this.context.strict) {
                    this.tolerateUnexpectedToken(
                      r,
                      a.Messages.StrictReservedWord
                    )
                  } else if (!this.context.allowYield) {
                    this.throwUnexpectedToken(r)
                  }
                } else if (r.type !== 3) {
                  if (
                    this.context.strict &&
                    r.type === 4 &&
                    this.scanner.isStrictModeReservedWord(r.value)
                  ) {
                    this.tolerateUnexpectedToken(
                      r,
                      a.Messages.StrictReservedWord
                    )
                  } else {
                    if (
                      this.context.strict ||
                      r.value !== 'let' ||
                      e !== 'var'
                    ) {
                      this.throwUnexpectedToken(r)
                    }
                  }
                } else if (
                  (this.context.isModule || this.context.await) &&
                  r.type === 3 &&
                  r.value === 'await'
                ) {
                  this.tolerateUnexpectedToken(r)
                }
                return this.finalize(t, new s.Identifier(r.value))
              }
              Parser.prototype.parseVariableDeclaration = function (e) {
                var t = this.createNode()
                var r = []
                var i = this.parsePattern(r, 'var')
                if (this.context.strict && i.type === l.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(i.name)) {
                    this.tolerateError(a.Messages.StrictVarName)
                  }
                }
                var n = null
                if (this.match('=')) {
                  this.nextToken()
                  n = this.isolateCoverGrammar(this.parseAssignmentExpression)
                } else if (i.type !== l.Syntax.Identifier && !e.inFor) {
                  this.expect('=')
                }
                return this.finalize(t, new s.VariableDeclarator(i, n))
              }
              Parser.prototype.parseVariableDeclarationList = function (e) {
                var t = { inFor: e.inFor }
                var r = []
                r.push(this.parseVariableDeclaration(t))
                while (this.match(',')) {
                  this.nextToken()
                  r.push(this.parseVariableDeclaration(t))
                }
                return r
              }
              Parser.prototype.parseVariableStatement = function () {
                var e = this.createNode()
                this.expectKeyword('var')
                var t = this.parseVariableDeclarationList({ inFor: false })
                this.consumeSemicolon()
                return this.finalize(e, new s.VariableDeclaration(t, 'var'))
              }
              Parser.prototype.parseEmptyStatement = function () {
                var e = this.createNode()
                this.expect(';')
                return this.finalize(e, new s.EmptyStatement())
              }
              Parser.prototype.parseExpressionStatement = function () {
                var e = this.createNode()
                var t = this.parseExpression()
                this.consumeSemicolon()
                return this.finalize(e, new s.ExpressionStatement(t))
              }
              Parser.prototype.parseIfClause = function () {
                if (this.context.strict && this.matchKeyword('function')) {
                  this.tolerateError(a.Messages.StrictFunction)
                }
                return this.parseStatement()
              }
              Parser.prototype.parseIfStatement = function () {
                var e = this.createNode()
                var t
                var r = null
                this.expectKeyword('if')
                this.expect('(')
                var i = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  t = this.finalize(this.createNode(), new s.EmptyStatement())
                } else {
                  this.expect(')')
                  t = this.parseIfClause()
                  if (this.matchKeyword('else')) {
                    this.nextToken()
                    r = this.parseIfClause()
                  }
                }
                return this.finalize(e, new s.IfStatement(i, t, r))
              }
              Parser.prototype.parseDoWhileStatement = function () {
                var e = this.createNode()
                this.expectKeyword('do')
                var t = this.context.inIteration
                this.context.inIteration = true
                var r = this.parseStatement()
                this.context.inIteration = t
                this.expectKeyword('while')
                this.expect('(')
                var i = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                } else {
                  this.expect(')')
                  if (this.match(';')) {
                    this.nextToken()
                  }
                }
                return this.finalize(e, new s.DoWhileStatement(r, i))
              }
              Parser.prototype.parseWhileStatement = function () {
                var e = this.createNode()
                var t
                this.expectKeyword('while')
                this.expect('(')
                var r = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  t = this.finalize(this.createNode(), new s.EmptyStatement())
                } else {
                  this.expect(')')
                  var i = this.context.inIteration
                  this.context.inIteration = true
                  t = this.parseStatement()
                  this.context.inIteration = i
                }
                return this.finalize(e, new s.WhileStatement(r, t))
              }
              Parser.prototype.parseForStatement = function () {
                var e = null
                var t = null
                var r = null
                var i = true
                var n, u
                var o = this.createNode()
                this.expectKeyword('for')
                this.expect('(')
                if (this.match(';')) {
                  this.nextToken()
                } else {
                  if (this.matchKeyword('var')) {
                    e = this.createNode()
                    this.nextToken()
                    var c = this.context.allowIn
                    this.context.allowIn = false
                    var h = this.parseVariableDeclarationList({ inFor: true })
                    this.context.allowIn = c
                    if (h.length === 1 && this.matchKeyword('in')) {
                      var f = h[0]
                      if (
                        f.init &&
                        (f.id.type === l.Syntax.ArrayPattern ||
                          f.id.type === l.Syntax.ObjectPattern ||
                          this.context.strict)
                      ) {
                        this.tolerateError(
                          a.Messages.ForInOfLoopInitializer,
                          'for-in'
                        )
                      }
                      e = this.finalize(e, new s.VariableDeclaration(h, 'var'))
                      this.nextToken()
                      n = e
                      u = this.parseExpression()
                      e = null
                    } else if (
                      h.length === 1 &&
                      h[0].init === null &&
                      this.matchContextualKeyword('of')
                    ) {
                      e = this.finalize(e, new s.VariableDeclaration(h, 'var'))
                      this.nextToken()
                      n = e
                      u = this.parseAssignmentExpression()
                      e = null
                      i = false
                    } else {
                      e = this.finalize(e, new s.VariableDeclaration(h, 'var'))
                      this.expect(';')
                    }
                  } else if (
                    this.matchKeyword('const') ||
                    this.matchKeyword('let')
                  ) {
                    e = this.createNode()
                    var p = this.nextToken().value
                    if (!this.context.strict && this.lookahead.value === 'in') {
                      e = this.finalize(e, new s.Identifier(p))
                      this.nextToken()
                      n = e
                      u = this.parseExpression()
                      e = null
                    } else {
                      var c = this.context.allowIn
                      this.context.allowIn = false
                      var h = this.parseBindingList(p, { inFor: true })
                      this.context.allowIn = c
                      if (
                        h.length === 1 &&
                        h[0].init === null &&
                        this.matchKeyword('in')
                      ) {
                        e = this.finalize(e, new s.VariableDeclaration(h, p))
                        this.nextToken()
                        n = e
                        u = this.parseExpression()
                        e = null
                      } else if (
                        h.length === 1 &&
                        h[0].init === null &&
                        this.matchContextualKeyword('of')
                      ) {
                        e = this.finalize(e, new s.VariableDeclaration(h, p))
                        this.nextToken()
                        n = e
                        u = this.parseAssignmentExpression()
                        e = null
                        i = false
                      } else {
                        this.consumeSemicolon()
                        e = this.finalize(e, new s.VariableDeclaration(h, p))
                      }
                    }
                  } else {
                    var d = this.lookahead
                    var c = this.context.allowIn
                    this.context.allowIn = false
                    e = this.inheritCoverGrammar(this.parseAssignmentExpression)
                    this.context.allowIn = c
                    if (this.matchKeyword('in')) {
                      if (
                        !this.context.isAssignmentTarget ||
                        e.type === l.Syntax.AssignmentExpression
                      ) {
                        this.tolerateError(a.Messages.InvalidLHSInForIn)
                      }
                      this.nextToken()
                      this.reinterpretExpressionAsPattern(e)
                      n = e
                      u = this.parseExpression()
                      e = null
                    } else if (this.matchContextualKeyword('of')) {
                      if (
                        !this.context.isAssignmentTarget ||
                        e.type === l.Syntax.AssignmentExpression
                      ) {
                        this.tolerateError(a.Messages.InvalidLHSInForLoop)
                      }
                      this.nextToken()
                      this.reinterpretExpressionAsPattern(e)
                      n = e
                      u = this.parseAssignmentExpression()
                      e = null
                      i = false
                    } else {
                      if (this.match(',')) {
                        var m = [e]
                        while (this.match(',')) {
                          this.nextToken()
                          m.push(
                            this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          )
                        }
                        e = this.finalize(
                          this.startNode(d),
                          new s.SequenceExpression(m)
                        )
                      }
                      this.expect(';')
                    }
                  }
                }
                if (typeof n === 'undefined') {
                  if (!this.match(';')) {
                    t = this.parseExpression()
                  }
                  this.expect(';')
                  if (!this.match(')')) {
                    r = this.parseExpression()
                  }
                }
                var v
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  v = this.finalize(this.createNode(), new s.EmptyStatement())
                } else {
                  this.expect(')')
                  var y = this.context.inIteration
                  this.context.inIteration = true
                  v = this.isolateCoverGrammar(this.parseStatement)
                  this.context.inIteration = y
                }
                return typeof n === 'undefined'
                  ? this.finalize(o, new s.ForStatement(e, t, r, v))
                  : i
                  ? this.finalize(o, new s.ForInStatement(n, u, v))
                  : this.finalize(o, new s.ForOfStatement(n, u, v))
              }
              Parser.prototype.parseContinueStatement = function () {
                var e = this.createNode()
                this.expectKeyword('continue')
                var t = null
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var r = this.parseVariableIdentifier()
                  t = r
                  var i = '$' + r.name
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      i
                    )
                  ) {
                    this.throwError(a.Messages.UnknownLabel, r.name)
                  }
                }
                this.consumeSemicolon()
                if (t === null && !this.context.inIteration) {
                  this.throwError(a.Messages.IllegalContinue)
                }
                return this.finalize(e, new s.ContinueStatement(t))
              }
              Parser.prototype.parseBreakStatement = function () {
                var e = this.createNode()
                this.expectKeyword('break')
                var t = null
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var r = this.parseVariableIdentifier()
                  var i = '$' + r.name
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      i
                    )
                  ) {
                    this.throwError(a.Messages.UnknownLabel, r.name)
                  }
                  t = r
                }
                this.consumeSemicolon()
                if (
                  t === null &&
                  !this.context.inIteration &&
                  !this.context.inSwitch
                ) {
                  this.throwError(a.Messages.IllegalBreak)
                }
                return this.finalize(e, new s.BreakStatement(t))
              }
              Parser.prototype.parseReturnStatement = function () {
                if (!this.context.inFunctionBody) {
                  this.tolerateError(a.Messages.IllegalReturn)
                }
                var e = this.createNode()
                this.expectKeyword('return')
                var t =
                  (!this.match(';') &&
                    !this.match('}') &&
                    !this.hasLineTerminator &&
                    this.lookahead.type !== 2) ||
                  this.lookahead.type === 8 ||
                  this.lookahead.type === 10
                var r = t ? this.parseExpression() : null
                this.consumeSemicolon()
                return this.finalize(e, new s.ReturnStatement(r))
              }
              Parser.prototype.parseWithStatement = function () {
                if (this.context.strict) {
                  this.tolerateError(a.Messages.StrictModeWith)
                }
                var e = this.createNode()
                var t
                this.expectKeyword('with')
                this.expect('(')
                var r = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  t = this.finalize(this.createNode(), new s.EmptyStatement())
                } else {
                  this.expect(')')
                  t = this.parseStatement()
                }
                return this.finalize(e, new s.WithStatement(r, t))
              }
              Parser.prototype.parseSwitchCase = function () {
                var e = this.createNode()
                var t
                if (this.matchKeyword('default')) {
                  this.nextToken()
                  t = null
                } else {
                  this.expectKeyword('case')
                  t = this.parseExpression()
                }
                this.expect(':')
                var r = []
                while (true) {
                  if (
                    this.match('}') ||
                    this.matchKeyword('default') ||
                    this.matchKeyword('case')
                  ) {
                    break
                  }
                  r.push(this.parseStatementListItem())
                }
                return this.finalize(e, new s.SwitchCase(t, r))
              }
              Parser.prototype.parseSwitchStatement = function () {
                var e = this.createNode()
                this.expectKeyword('switch')
                this.expect('(')
                var t = this.parseExpression()
                this.expect(')')
                var r = this.context.inSwitch
                this.context.inSwitch = true
                var i = []
                var n = false
                this.expect('{')
                while (true) {
                  if (this.match('}')) {
                    break
                  }
                  var u = this.parseSwitchCase()
                  if (u.test === null) {
                    if (n) {
                      this.throwError(a.Messages.MultipleDefaultsInSwitch)
                    }
                    n = true
                  }
                  i.push(u)
                }
                this.expect('}')
                this.context.inSwitch = r
                return this.finalize(e, new s.SwitchStatement(t, i))
              }
              Parser.prototype.parseLabelledStatement = function () {
                var e = this.createNode()
                var t = this.parseExpression()
                var r
                if (t.type === l.Syntax.Identifier && this.match(':')) {
                  this.nextToken()
                  var i = t
                  var n = '$' + i.name
                  if (
                    Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      n
                    )
                  ) {
                    this.throwError(a.Messages.Redeclaration, 'Label', i.name)
                  }
                  this.context.labelSet[n] = true
                  var u = void 0
                  if (this.matchKeyword('class')) {
                    this.tolerateUnexpectedToken(this.lookahead)
                    u = this.parseClassDeclaration()
                  } else if (this.matchKeyword('function')) {
                    var o = this.lookahead
                    var c = this.parseFunctionDeclaration()
                    if (this.context.strict) {
                      this.tolerateUnexpectedToken(o, a.Messages.StrictFunction)
                    } else if (c.generator) {
                      this.tolerateUnexpectedToken(
                        o,
                        a.Messages.GeneratorInLegacyContext
                      )
                    }
                    u = c
                  } else {
                    u = this.parseStatement()
                  }
                  delete this.context.labelSet[n]
                  r = new s.LabeledStatement(i, u)
                } else {
                  this.consumeSemicolon()
                  r = new s.ExpressionStatement(t)
                }
                return this.finalize(e, r)
              }
              Parser.prototype.parseThrowStatement = function () {
                var e = this.createNode()
                this.expectKeyword('throw')
                if (this.hasLineTerminator) {
                  this.throwError(a.Messages.NewlineAfterThrow)
                }
                var t = this.parseExpression()
                this.consumeSemicolon()
                return this.finalize(e, new s.ThrowStatement(t))
              }
              Parser.prototype.parseCatchClause = function () {
                var e = this.createNode()
                this.expectKeyword('catch')
                this.expect('(')
                if (this.match(')')) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                var t = []
                var r = this.parsePattern(t)
                var i = {}
                for (var n = 0; n < t.length; n++) {
                  var u = '$' + t[n].value
                  if (Object.prototype.hasOwnProperty.call(i, u)) {
                    this.tolerateError(a.Messages.DuplicateBinding, t[n].value)
                  }
                  i[u] = true
                }
                if (this.context.strict && r.type === l.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(r.name)) {
                    this.tolerateError(a.Messages.StrictCatchVariable)
                  }
                }
                this.expect(')')
                var o = this.parseBlock()
                return this.finalize(e, new s.CatchClause(r, o))
              }
              Parser.prototype.parseFinallyClause = function () {
                this.expectKeyword('finally')
                return this.parseBlock()
              }
              Parser.prototype.parseTryStatement = function () {
                var e = this.createNode()
                this.expectKeyword('try')
                var t = this.parseBlock()
                var r = this.matchKeyword('catch')
                  ? this.parseCatchClause()
                  : null
                var i = this.matchKeyword('finally')
                  ? this.parseFinallyClause()
                  : null
                if (!r && !i) {
                  this.throwError(a.Messages.NoCatchOrFinally)
                }
                return this.finalize(e, new s.TryStatement(t, r, i))
              }
              Parser.prototype.parseDebuggerStatement = function () {
                var e = this.createNode()
                this.expectKeyword('debugger')
                this.consumeSemicolon()
                return this.finalize(e, new s.DebuggerStatement())
              }
              Parser.prototype.parseStatement = function () {
                var e
                switch (this.lookahead.type) {
                  case 1:
                  case 5:
                  case 6:
                  case 8:
                  case 10:
                  case 9:
                    e = this.parseExpressionStatement()
                    break
                  case 7:
                    var t = this.lookahead.value
                    if (t === '{') {
                      e = this.parseBlock()
                    } else if (t === '(') {
                      e = this.parseExpressionStatement()
                    } else if (t === ';') {
                      e = this.parseEmptyStatement()
                    } else {
                      e = this.parseExpressionStatement()
                    }
                    break
                  case 3:
                    e = this.matchAsyncFunction()
                      ? this.parseFunctionDeclaration()
                      : this.parseLabelledStatement()
                    break
                  case 4:
                    switch (this.lookahead.value) {
                      case 'break':
                        e = this.parseBreakStatement()
                        break
                      case 'continue':
                        e = this.parseContinueStatement()
                        break
                      case 'debugger':
                        e = this.parseDebuggerStatement()
                        break
                      case 'do':
                        e = this.parseDoWhileStatement()
                        break
                      case 'for':
                        e = this.parseForStatement()
                        break
                      case 'function':
                        e = this.parseFunctionDeclaration()
                        break
                      case 'if':
                        e = this.parseIfStatement()
                        break
                      case 'return':
                        e = this.parseReturnStatement()
                        break
                      case 'switch':
                        e = this.parseSwitchStatement()
                        break
                      case 'throw':
                        e = this.parseThrowStatement()
                        break
                      case 'try':
                        e = this.parseTryStatement()
                        break
                      case 'var':
                        e = this.parseVariableStatement()
                        break
                      case 'while':
                        e = this.parseWhileStatement()
                        break
                      case 'with':
                        e = this.parseWithStatement()
                        break
                      default:
                        e = this.parseExpressionStatement()
                        break
                    }
                    break
                  default:
                    e = this.throwUnexpectedToken(this.lookahead)
                }
                return e
              }
              Parser.prototype.parseFunctionSourceElements = function () {
                var e = this.createNode()
                this.expect('{')
                var t = this.parseDirectivePrologues()
                var r = this.context.labelSet
                var i = this.context.inIteration
                var n = this.context.inSwitch
                var a = this.context.inFunctionBody
                this.context.labelSet = {}
                this.context.inIteration = false
                this.context.inSwitch = false
                this.context.inFunctionBody = true
                while (this.lookahead.type !== 2) {
                  if (this.match('}')) {
                    break
                  }
                  t.push(this.parseStatementListItem())
                }
                this.expect('}')
                this.context.labelSet = r
                this.context.inIteration = i
                this.context.inSwitch = n
                this.context.inFunctionBody = a
                return this.finalize(e, new s.BlockStatement(t))
              }
              Parser.prototype.validateParam = function (e, t, r) {
                var i = '$' + r
                if (this.context.strict) {
                  if (this.scanner.isRestrictedWord(r)) {
                    e.stricted = t
                    e.message = a.Messages.StrictParamName
                  }
                  if (Object.prototype.hasOwnProperty.call(e.paramSet, i)) {
                    e.stricted = t
                    e.message = a.Messages.StrictParamDupe
                  }
                } else if (!e.firstRestricted) {
                  if (this.scanner.isRestrictedWord(r)) {
                    e.firstRestricted = t
                    e.message = a.Messages.StrictParamName
                  } else if (this.scanner.isStrictModeReservedWord(r)) {
                    e.firstRestricted = t
                    e.message = a.Messages.StrictReservedWord
                  } else if (
                    Object.prototype.hasOwnProperty.call(e.paramSet, i)
                  ) {
                    e.stricted = t
                    e.message = a.Messages.StrictParamDupe
                  }
                }
                if (typeof Object.defineProperty === 'function') {
                  Object.defineProperty(e.paramSet, i, {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true,
                  })
                } else {
                  e.paramSet[i] = true
                }
              }
              Parser.prototype.parseRestElement = function (e) {
                var t = this.createNode()
                this.expect('...')
                var r = this.parsePattern(e)
                if (this.match('=')) {
                  this.throwError(a.Messages.DefaultRestParameter)
                }
                if (!this.match(')')) {
                  this.throwError(a.Messages.ParameterAfterRestParameter)
                }
                return this.finalize(t, new s.RestElement(r))
              }
              Parser.prototype.parseFormalParameter = function (e) {
                var t = []
                var r = this.match('...')
                  ? this.parseRestElement(t)
                  : this.parsePatternWithDefault(t)
                for (var i = 0; i < t.length; i++) {
                  this.validateParam(e, t[i], t[i].value)
                }
                e.simple = e.simple && r instanceof s.Identifier
                e.params.push(r)
              }
              Parser.prototype.parseFormalParameters = function (e) {
                var t
                t = { simple: true, params: [], firstRestricted: e }
                this.expect('(')
                if (!this.match(')')) {
                  t.paramSet = {}
                  while (this.lookahead.type !== 2) {
                    this.parseFormalParameter(t)
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
                  simple: t.simple,
                  params: t.params,
                  stricted: t.stricted,
                  firstRestricted: t.firstRestricted,
                  message: t.message,
                }
              }
              Parser.prototype.matchAsyncFunction = function () {
                var e = this.matchContextualKeyword('async')
                if (e) {
                  var t = this.scanner.saveState()
                  this.scanner.scanComments()
                  var r = this.scanner.lex()
                  this.scanner.restoreState(t)
                  e =
                    t.lineNumber === r.lineNumber &&
                    r.type === 4 &&
                    r.value === 'function'
                }
                return e
              }
              Parser.prototype.parseFunctionDeclaration = function (e) {
                var t = this.createNode()
                var r = this.matchContextualKeyword('async')
                if (r) {
                  this.nextToken()
                }
                this.expectKeyword('function')
                var i = r ? false : this.match('*')
                if (i) {
                  this.nextToken()
                }
                var n
                var u = null
                var l = null
                if (!e || !this.match('(')) {
                  var o = this.lookahead
                  u = this.parseVariableIdentifier()
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(o.value)) {
                      this.tolerateUnexpectedToken(
                        o,
                        a.Messages.StrictFunctionName
                      )
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(o.value)) {
                      l = o
                      n = a.Messages.StrictFunctionName
                    } else if (this.scanner.isStrictModeReservedWord(o.value)) {
                      l = o
                      n = a.Messages.StrictReservedWord
                    }
                  }
                }
                var c = this.context.await
                var h = this.context.allowYield
                this.context.await = r
                this.context.allowYield = !i
                var f = this.parseFormalParameters(l)
                var p = f.params
                var d = f.stricted
                l = f.firstRestricted
                if (f.message) {
                  n = f.message
                }
                var m = this.context.strict
                var v = this.context.allowStrictDirective
                this.context.allowStrictDirective = f.simple
                var y = this.parseFunctionSourceElements()
                if (this.context.strict && l) {
                  this.throwUnexpectedToken(l, n)
                }
                if (this.context.strict && d) {
                  this.tolerateUnexpectedToken(d, n)
                }
                this.context.strict = m
                this.context.allowStrictDirective = v
                this.context.await = c
                this.context.allowYield = h
                return r
                  ? this.finalize(t, new s.AsyncFunctionDeclaration(u, p, y))
                  : this.finalize(t, new s.FunctionDeclaration(u, p, y, i))
              }
              Parser.prototype.parseFunctionExpression = function () {
                var e = this.createNode()
                var t = this.matchContextualKeyword('async')
                if (t) {
                  this.nextToken()
                }
                this.expectKeyword('function')
                var r = t ? false : this.match('*')
                if (r) {
                  this.nextToken()
                }
                var i
                var n = null
                var u
                var l = this.context.await
                var o = this.context.allowYield
                this.context.await = t
                this.context.allowYield = !r
                if (!this.match('(')) {
                  var c = this.lookahead
                  n =
                    !this.context.strict && !r && this.matchKeyword('yield')
                      ? this.parseIdentifierName()
                      : this.parseVariableIdentifier()
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(c.value)) {
                      this.tolerateUnexpectedToken(
                        c,
                        a.Messages.StrictFunctionName
                      )
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(c.value)) {
                      u = c
                      i = a.Messages.StrictFunctionName
                    } else if (this.scanner.isStrictModeReservedWord(c.value)) {
                      u = c
                      i = a.Messages.StrictReservedWord
                    }
                  }
                }
                var h = this.parseFormalParameters(u)
                var f = h.params
                var p = h.stricted
                u = h.firstRestricted
                if (h.message) {
                  i = h.message
                }
                var d = this.context.strict
                var m = this.context.allowStrictDirective
                this.context.allowStrictDirective = h.simple
                var v = this.parseFunctionSourceElements()
                if (this.context.strict && u) {
                  this.throwUnexpectedToken(u, i)
                }
                if (this.context.strict && p) {
                  this.tolerateUnexpectedToken(p, i)
                }
                this.context.strict = d
                this.context.allowStrictDirective = m
                this.context.await = l
                this.context.allowYield = o
                return t
                  ? this.finalize(e, new s.AsyncFunctionExpression(n, f, v))
                  : this.finalize(e, new s.FunctionExpression(n, f, v, r))
              }
              Parser.prototype.parseDirective = function () {
                var e = this.lookahead
                var t = this.createNode()
                var r = this.parseExpression()
                var i =
                  r.type === l.Syntax.Literal
                    ? this.getTokenRaw(e).slice(1, -1)
                    : null
                this.consumeSemicolon()
                return this.finalize(
                  t,
                  i ? new s.Directive(r, i) : new s.ExpressionStatement(r)
                )
              }
              Parser.prototype.parseDirectivePrologues = function () {
                var e = null
                var t = []
                while (true) {
                  var r = this.lookahead
                  if (r.type !== 8) {
                    break
                  }
                  var i = this.parseDirective()
                  t.push(i)
                  var n = i.directive
                  if (typeof n !== 'string') {
                    break
                  }
                  if (n === 'use strict') {
                    this.context.strict = true
                    if (e) {
                      this.tolerateUnexpectedToken(
                        e,
                        a.Messages.StrictOctalLiteral
                      )
                    }
                    if (!this.context.allowStrictDirective) {
                      this.tolerateUnexpectedToken(
                        r,
                        a.Messages.IllegalLanguageModeDirective
                      )
                    }
                  } else {
                    if (!e && r.octal) {
                      e = r
                    }
                  }
                }
                return t
              }
              Parser.prototype.qualifiedPropertyName = function (e) {
                switch (e.type) {
                  case 3:
                  case 8:
                  case 1:
                  case 5:
                  case 6:
                  case 4:
                    return true
                  case 7:
                    return e.value === '['
                  default:
                    break
                }
                return false
              }
              Parser.prototype.parseGetterMethod = function () {
                var e = this.createNode()
                var t = false
                var r = this.context.allowYield
                this.context.allowYield = !t
                var i = this.parseFormalParameters()
                if (i.params.length > 0) {
                  this.tolerateError(a.Messages.BadGetterArity)
                }
                var n = this.parsePropertyMethod(i)
                this.context.allowYield = r
                return this.finalize(
                  e,
                  new s.FunctionExpression(null, i.params, n, t)
                )
              }
              Parser.prototype.parseSetterMethod = function () {
                var e = this.createNode()
                var t = false
                var r = this.context.allowYield
                this.context.allowYield = !t
                var i = this.parseFormalParameters()
                if (i.params.length !== 1) {
                  this.tolerateError(a.Messages.BadSetterArity)
                } else if (i.params[0] instanceof s.RestElement) {
                  this.tolerateError(a.Messages.BadSetterRestParameter)
                }
                var n = this.parsePropertyMethod(i)
                this.context.allowYield = r
                return this.finalize(
                  e,
                  new s.FunctionExpression(null, i.params, n, t)
                )
              }
              Parser.prototype.parseGeneratorMethod = function () {
                var e = this.createNode()
                var t = true
                var r = this.context.allowYield
                this.context.allowYield = true
                var i = this.parseFormalParameters()
                this.context.allowYield = false
                var n = this.parsePropertyMethod(i)
                this.context.allowYield = r
                return this.finalize(
                  e,
                  new s.FunctionExpression(null, i.params, n, t)
                )
              }
              Parser.prototype.isStartOfExpression = function () {
                var e = true
                var t = this.lookahead.value
                switch (this.lookahead.type) {
                  case 7:
                    e =
                      t === '[' ||
                      t === '(' ||
                      t === '{' ||
                      t === '+' ||
                      t === '-' ||
                      t === '!' ||
                      t === '~' ||
                      t === '++' ||
                      t === '--' ||
                      t === '/' ||
                      t === '/='
                    break
                  case 4:
                    e =
                      t === 'class' ||
                      t === 'delete' ||
                      t === 'function' ||
                      t === 'let' ||
                      t === 'new' ||
                      t === 'super' ||
                      t === 'this' ||
                      t === 'typeof' ||
                      t === 'void' ||
                      t === 'yield'
                    break
                  default:
                    break
                }
                return e
              }
              Parser.prototype.parseYieldExpression = function () {
                var e = this.createNode()
                this.expectKeyword('yield')
                var t = null
                var r = false
                if (!this.hasLineTerminator) {
                  var i = this.context.allowYield
                  this.context.allowYield = false
                  r = this.match('*')
                  if (r) {
                    this.nextToken()
                    t = this.parseAssignmentExpression()
                  } else if (this.isStartOfExpression()) {
                    t = this.parseAssignmentExpression()
                  }
                  this.context.allowYield = i
                }
                return this.finalize(e, new s.YieldExpression(t, r))
              }
              Parser.prototype.parseClassElement = function (e) {
                var t = this.lookahead
                var r = this.createNode()
                var i = ''
                var n = null
                var u = null
                var l = false
                var o = false
                var c = false
                var h = false
                if (this.match('*')) {
                  this.nextToken()
                } else {
                  l = this.match('[')
                  n = this.parseObjectPropertyKey()
                  var f = n
                  if (
                    f.name === 'static' &&
                    (this.qualifiedPropertyName(this.lookahead) ||
                      this.match('*'))
                  ) {
                    t = this.lookahead
                    c = true
                    l = this.match('[')
                    if (this.match('*')) {
                      this.nextToken()
                    } else {
                      n = this.parseObjectPropertyKey()
                    }
                  }
                  if (
                    t.type === 3 &&
                    !this.hasLineTerminator &&
                    t.value === 'async'
                  ) {
                    var p = this.lookahead.value
                    if (p !== ':' && p !== '(' && p !== '*') {
                      h = true
                      t = this.lookahead
                      n = this.parseObjectPropertyKey()
                      if (t.type === 3 && t.value === 'constructor') {
                        this.tolerateUnexpectedToken(
                          t,
                          a.Messages.ConstructorIsAsync
                        )
                      }
                    }
                  }
                }
                var d = this.qualifiedPropertyName(this.lookahead)
                if (t.type === 3) {
                  if (t.value === 'get' && d) {
                    i = 'get'
                    l = this.match('[')
                    n = this.parseObjectPropertyKey()
                    this.context.allowYield = false
                    u = this.parseGetterMethod()
                  } else if (t.value === 'set' && d) {
                    i = 'set'
                    l = this.match('[')
                    n = this.parseObjectPropertyKey()
                    u = this.parseSetterMethod()
                  }
                } else if (t.type === 7 && t.value === '*' && d) {
                  i = 'init'
                  l = this.match('[')
                  n = this.parseObjectPropertyKey()
                  u = this.parseGeneratorMethod()
                  o = true
                }
                if (!i && n && this.match('(')) {
                  i = 'init'
                  u = h
                    ? this.parsePropertyMethodAsyncFunction()
                    : this.parsePropertyMethodFunction()
                  o = true
                }
                if (!i) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                if (i === 'init') {
                  i = 'method'
                }
                if (!l) {
                  if (c && this.isPropertyKey(n, 'prototype')) {
                    this.throwUnexpectedToken(t, a.Messages.StaticPrototype)
                  }
                  if (!c && this.isPropertyKey(n, 'constructor')) {
                    if (i !== 'method' || !o || (u && u.generator)) {
                      this.throwUnexpectedToken(
                        t,
                        a.Messages.ConstructorSpecialMethod
                      )
                    }
                    if (e.value) {
                      this.throwUnexpectedToken(
                        t,
                        a.Messages.DuplicateConstructor
                      )
                    } else {
                      e.value = true
                    }
                    i = 'constructor'
                  }
                }
                return this.finalize(r, new s.MethodDefinition(n, l, u, i, c))
              }
              Parser.prototype.parseClassElementList = function () {
                var e = []
                var t = { value: false }
                this.expect('{')
                while (!this.match('}')) {
                  if (this.match(';')) {
                    this.nextToken()
                  } else {
                    e.push(this.parseClassElement(t))
                  }
                }
                this.expect('}')
                return e
              }
              Parser.prototype.parseClassBody = function () {
                var e = this.createNode()
                var t = this.parseClassElementList()
                return this.finalize(e, new s.ClassBody(t))
              }
              Parser.prototype.parseClassDeclaration = function (e) {
                var t = this.createNode()
                var r = this.context.strict
                this.context.strict = true
                this.expectKeyword('class')
                var i =
                  e && this.lookahead.type !== 3
                    ? null
                    : this.parseVariableIdentifier()
                var n = null
                if (this.matchKeyword('extends')) {
                  this.nextToken()
                  n = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                }
                var a = this.parseClassBody()
                this.context.strict = r
                return this.finalize(t, new s.ClassDeclaration(i, n, a))
              }
              Parser.prototype.parseClassExpression = function () {
                var e = this.createNode()
                var t = this.context.strict
                this.context.strict = true
                this.expectKeyword('class')
                var r =
                  this.lookahead.type === 3
                    ? this.parseVariableIdentifier()
                    : null
                var i = null
                if (this.matchKeyword('extends')) {
                  this.nextToken()
                  i = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                }
                var n = this.parseClassBody()
                this.context.strict = t
                return this.finalize(e, new s.ClassExpression(r, i, n))
              }
              Parser.prototype.parseModule = function () {
                this.context.strict = true
                this.context.isModule = true
                this.scanner.isModule = true
                var e = this.createNode()
                var t = this.parseDirectivePrologues()
                while (this.lookahead.type !== 2) {
                  t.push(this.parseStatementListItem())
                }
                return this.finalize(e, new s.Module(t))
              }
              Parser.prototype.parseScript = function () {
                var e = this.createNode()
                var t = this.parseDirectivePrologues()
                while (this.lookahead.type !== 2) {
                  t.push(this.parseStatementListItem())
                }
                return this.finalize(e, new s.Script(t))
              }
              Parser.prototype.parseModuleSpecifier = function () {
                var e = this.createNode()
                if (this.lookahead.type !== 8) {
                  this.throwError(a.Messages.InvalidModuleSpecifier)
                }
                var t = this.nextToken()
                var r = this.getTokenRaw(t)
                return this.finalize(e, new s.Literal(t.value, r))
              }
              Parser.prototype.parseImportSpecifier = function () {
                var e = this.createNode()
                var t
                var r
                if (this.lookahead.type === 3) {
                  t = this.parseVariableIdentifier()
                  r = t
                  if (this.matchContextualKeyword('as')) {
                    this.nextToken()
                    r = this.parseVariableIdentifier()
                  }
                } else {
                  t = this.parseIdentifierName()
                  r = t
                  if (this.matchContextualKeyword('as')) {
                    this.nextToken()
                    r = this.parseVariableIdentifier()
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                }
                return this.finalize(e, new s.ImportSpecifier(r, t))
              }
              Parser.prototype.parseNamedImports = function () {
                this.expect('{')
                var e = []
                while (!this.match('}')) {
                  e.push(this.parseImportSpecifier())
                  if (!this.match('}')) {
                    this.expect(',')
                  }
                }
                this.expect('}')
                return e
              }
              Parser.prototype.parseImportDefaultSpecifier = function () {
                var e = this.createNode()
                var t = this.parseIdentifierName()
                return this.finalize(e, new s.ImportDefaultSpecifier(t))
              }
              Parser.prototype.parseImportNamespaceSpecifier = function () {
                var e = this.createNode()
                this.expect('*')
                if (!this.matchContextualKeyword('as')) {
                  this.throwError(a.Messages.NoAsAfterImportNamespace)
                }
                this.nextToken()
                var t = this.parseIdentifierName()
                return this.finalize(e, new s.ImportNamespaceSpecifier(t))
              }
              Parser.prototype.parseImportDeclaration = function () {
                if (this.context.inFunctionBody) {
                  this.throwError(a.Messages.IllegalImportDeclaration)
                }
                var e = this.createNode()
                this.expectKeyword('import')
                var t
                var r = []
                if (this.lookahead.type === 8) {
                  t = this.parseModuleSpecifier()
                } else {
                  if (this.match('{')) {
                    r = r.concat(this.parseNamedImports())
                  } else if (this.match('*')) {
                    r.push(this.parseImportNamespaceSpecifier())
                  } else if (
                    this.isIdentifierName(this.lookahead) &&
                    !this.matchKeyword('default')
                  ) {
                    r.push(this.parseImportDefaultSpecifier())
                    if (this.match(',')) {
                      this.nextToken()
                      if (this.match('*')) {
                        r.push(this.parseImportNamespaceSpecifier())
                      } else if (this.match('{')) {
                        r = r.concat(this.parseNamedImports())
                      } else {
                        this.throwUnexpectedToken(this.lookahead)
                      }
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                  if (!this.matchContextualKeyword('from')) {
                    var i = this.lookahead.value
                      ? a.Messages.UnexpectedToken
                      : a.Messages.MissingFromClause
                    this.throwError(i, this.lookahead.value)
                  }
                  this.nextToken()
                  t = this.parseModuleSpecifier()
                }
                this.consumeSemicolon()
                return this.finalize(e, new s.ImportDeclaration(r, t))
              }
              Parser.prototype.parseExportSpecifier = function () {
                var e = this.createNode()
                var t = this.parseIdentifierName()
                var r = t
                if (this.matchContextualKeyword('as')) {
                  this.nextToken()
                  r = this.parseIdentifierName()
                }
                return this.finalize(e, new s.ExportSpecifier(t, r))
              }
              Parser.prototype.parseExportDeclaration = function () {
                if (this.context.inFunctionBody) {
                  this.throwError(a.Messages.IllegalExportDeclaration)
                }
                var e = this.createNode()
                this.expectKeyword('export')
                var t
                if (this.matchKeyword('default')) {
                  this.nextToken()
                  if (this.matchKeyword('function')) {
                    var r = this.parseFunctionDeclaration(true)
                    t = this.finalize(e, new s.ExportDefaultDeclaration(r))
                  } else if (this.matchKeyword('class')) {
                    var r = this.parseClassDeclaration(true)
                    t = this.finalize(e, new s.ExportDefaultDeclaration(r))
                  } else if (this.matchContextualKeyword('async')) {
                    var r = this.matchAsyncFunction()
                      ? this.parseFunctionDeclaration(true)
                      : this.parseAssignmentExpression()
                    t = this.finalize(e, new s.ExportDefaultDeclaration(r))
                  } else {
                    if (this.matchContextualKeyword('from')) {
                      this.throwError(
                        a.Messages.UnexpectedToken,
                        this.lookahead.value
                      )
                    }
                    var r = this.match('{')
                      ? this.parseObjectInitializer()
                      : this.match('[')
                      ? this.parseArrayInitializer()
                      : this.parseAssignmentExpression()
                    this.consumeSemicolon()
                    t = this.finalize(e, new s.ExportDefaultDeclaration(r))
                  }
                } else if (this.match('*')) {
                  this.nextToken()
                  if (!this.matchContextualKeyword('from')) {
                    var i = this.lookahead.value
                      ? a.Messages.UnexpectedToken
                      : a.Messages.MissingFromClause
                    this.throwError(i, this.lookahead.value)
                  }
                  this.nextToken()
                  var n = this.parseModuleSpecifier()
                  this.consumeSemicolon()
                  t = this.finalize(e, new s.ExportAllDeclaration(n))
                } else if (this.lookahead.type === 4) {
                  var r = void 0
                  switch (this.lookahead.value) {
                    case 'let':
                    case 'const':
                      r = this.parseLexicalDeclaration({ inFor: false })
                      break
                    case 'var':
                    case 'class':
                    case 'function':
                      r = this.parseStatementListItem()
                      break
                    default:
                      this.throwUnexpectedToken(this.lookahead)
                  }
                  t = this.finalize(
                    e,
                    new s.ExportNamedDeclaration(r, [], null)
                  )
                } else if (this.matchAsyncFunction()) {
                  var r = this.parseFunctionDeclaration()
                  t = this.finalize(
                    e,
                    new s.ExportNamedDeclaration(r, [], null)
                  )
                } else {
                  var u = []
                  var l = null
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
                    l = this.parseModuleSpecifier()
                    this.consumeSemicolon()
                  } else if (o) {
                    var i = this.lookahead.value
                      ? a.Messages.UnexpectedToken
                      : a.Messages.MissingFromClause
                    this.throwError(i, this.lookahead.value)
                  } else {
                    this.consumeSemicolon()
                  }
                  t = this.finalize(e, new s.ExportNamedDeclaration(null, u, l))
                }
                return t
              }
              return Parser
            })()
            t.Parser = h
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            function assert(e, t) {
              if (!e) {
                throw new Error('ASSERT: ' + t)
              }
            }
            t.assert = assert
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = (function () {
              function ErrorHandler() {
                this.errors = []
                this.tolerant = false
              }
              ErrorHandler.prototype.recordError = function (e) {
                this.errors.push(e)
              }
              ErrorHandler.prototype.tolerate = function (e) {
                if (this.tolerant) {
                  this.recordError(e)
                } else {
                  throw e
                }
              }
              ErrorHandler.prototype.constructError = function (e, t) {
                var r = new Error(e)
                try {
                  throw r
                } catch (e) {
                  if (Object.create && Object.defineProperty) {
                    r = Object.create(e)
                    Object.defineProperty(r, 'column', { value: t })
                  }
                }
                return r
              }
              ErrorHandler.prototype.createError = function (e, t, r, i) {
                var n = 'Line ' + t + ': ' + i
                var a = this.constructError(n, r)
                a.index = e
                a.lineNumber = t
                a.description = i
                return a
              }
              ErrorHandler.prototype.throwError = function (e, t, r, i) {
                throw this.createError(e, t, r, i)
              }
              ErrorHandler.prototype.tolerateError = function (e, t, r, i) {
                var n = this.createError(e, t, r, i)
                if (this.tolerant) {
                  this.recordError(n)
                } else {
                  throw n
                }
              }
              return ErrorHandler
            })()
            t.ErrorHandler = r
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.Messages = {
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
          function (e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = r(9)
            var n = r(4)
            var a = r(11)
            function hexValue(e) {
              return '0123456789abcdef'.indexOf(e.toLowerCase())
            }
            function octalValue(e) {
              return '01234567'.indexOf(e)
            }
            var s = (function () {
              function Scanner(e, t) {
                this.source = e
                this.errorHandler = t
                this.trackComment = false
                this.isModule = false
                this.length = e.length
                this.index = 0
                this.lineNumber = e.length > 0 ? 1 : 0
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
              Scanner.prototype.restoreState = function (e) {
                this.index = e.index
                this.lineNumber = e.lineNumber
                this.lineStart = e.lineStart
              }
              Scanner.prototype.eof = function () {
                return this.index >= this.length
              }
              Scanner.prototype.throwUnexpectedToken = function (e) {
                if (e === void 0) {
                  e = a.Messages.UnexpectedTokenIllegal
                }
                return this.errorHandler.throwError(
                  this.index,
                  this.lineNumber,
                  this.index - this.lineStart + 1,
                  e
                )
              }
              Scanner.prototype.tolerateUnexpectedToken = function (e) {
                if (e === void 0) {
                  e = a.Messages.UnexpectedTokenIllegal
                }
                this.errorHandler.tolerateError(
                  this.index,
                  this.lineNumber,
                  this.index - this.lineStart + 1,
                  e
                )
              }
              Scanner.prototype.skipSingleLineComment = function (e) {
                var t = []
                var r, i
                if (this.trackComment) {
                  t = []
                  r = this.index - e
                  i = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - e,
                    },
                    end: {},
                  }
                }
                while (!this.eof()) {
                  var a = this.source.charCodeAt(this.index)
                  ++this.index
                  if (n.Character.isLineTerminator(a)) {
                    if (this.trackComment) {
                      i.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 1,
                      }
                      var s = {
                        multiLine: false,
                        slice: [r + e, this.index - 1],
                        range: [r, this.index - 1],
                        loc: i,
                      }
                      t.push(s)
                    }
                    if (a === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index
                    }
                    ++this.lineNumber
                    this.lineStart = this.index
                    return t
                  }
                }
                if (this.trackComment) {
                  i.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart,
                  }
                  var s = {
                    multiLine: false,
                    slice: [r + e, this.index],
                    range: [r, this.index],
                    loc: i,
                  }
                  t.push(s)
                }
                return t
              }
              Scanner.prototype.skipMultiLineComment = function () {
                var e = []
                var t, r
                if (this.trackComment) {
                  e = []
                  t = this.index - 2
                  r = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - 2,
                    },
                    end: {},
                  }
                }
                while (!this.eof()) {
                  var i = this.source.charCodeAt(this.index)
                  if (n.Character.isLineTerminator(i)) {
                    if (
                      i === 13 &&
                      this.source.charCodeAt(this.index + 1) === 10
                    ) {
                      ++this.index
                    }
                    ++this.lineNumber
                    ++this.index
                    this.lineStart = this.index
                  } else if (i === 42) {
                    if (this.source.charCodeAt(this.index + 1) === 47) {
                      this.index += 2
                      if (this.trackComment) {
                        r.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart,
                        }
                        var a = {
                          multiLine: true,
                          slice: [t + 2, this.index - 2],
                          range: [t, this.index],
                          loc: r,
                        }
                        e.push(a)
                      }
                      return e
                    }
                    ++this.index
                  } else {
                    ++this.index
                  }
                }
                if (this.trackComment) {
                  r.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart,
                  }
                  var a = {
                    multiLine: true,
                    slice: [t + 2, this.index],
                    range: [t, this.index],
                    loc: r,
                  }
                  e.push(a)
                }
                this.tolerateUnexpectedToken()
                return e
              }
              Scanner.prototype.scanComments = function () {
                var e
                if (this.trackComment) {
                  e = []
                }
                var t = this.index === 0
                while (!this.eof()) {
                  var r = this.source.charCodeAt(this.index)
                  if (n.Character.isWhiteSpace(r)) {
                    ++this.index
                  } else if (n.Character.isLineTerminator(r)) {
                    ++this.index
                    if (r === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index
                    }
                    ++this.lineNumber
                    this.lineStart = this.index
                    t = true
                  } else if (r === 47) {
                    r = this.source.charCodeAt(this.index + 1)
                    if (r === 47) {
                      this.index += 2
                      var i = this.skipSingleLineComment(2)
                      if (this.trackComment) {
                        e = e.concat(i)
                      }
                      t = true
                    } else if (r === 42) {
                      this.index += 2
                      var i = this.skipMultiLineComment()
                      if (this.trackComment) {
                        e = e.concat(i)
                      }
                    } else {
                      break
                    }
                  } else if (t && r === 45) {
                    if (
                      this.source.charCodeAt(this.index + 1) === 45 &&
                      this.source.charCodeAt(this.index + 2) === 62
                    ) {
                      this.index += 3
                      var i = this.skipSingleLineComment(3)
                      if (this.trackComment) {
                        e = e.concat(i)
                      }
                    } else {
                      break
                    }
                  } else if (r === 60 && !this.isModule) {
                    if (
                      this.source.slice(this.index + 1, this.index + 4) ===
                      '!--'
                    ) {
                      this.index += 4
                      var i = this.skipSingleLineComment(4)
                      if (this.trackComment) {
                        e = e.concat(i)
                      }
                    } else {
                      break
                    }
                  } else {
                    break
                  }
                }
                return e
              }
              Scanner.prototype.isFutureReservedWord = function (e) {
                switch (e) {
                  case 'enum':
                  case 'export':
                  case 'import':
                  case 'super':
                    return true
                  default:
                    return false
                }
              }
              Scanner.prototype.isStrictModeReservedWord = function (e) {
                switch (e) {
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
              Scanner.prototype.isRestrictedWord = function (e) {
                return e === 'eval' || e === 'arguments'
              }
              Scanner.prototype.isKeyword = function (e) {
                switch (e.length) {
                  case 2:
                    return e === 'if' || e === 'in' || e === 'do'
                  case 3:
                    return (
                      e === 'var' ||
                      e === 'for' ||
                      e === 'new' ||
                      e === 'try' ||
                      e === 'let'
                    )
                  case 4:
                    return (
                      e === 'this' ||
                      e === 'else' ||
                      e === 'case' ||
                      e === 'void' ||
                      e === 'with' ||
                      e === 'enum'
                    )
                  case 5:
                    return (
                      e === 'while' ||
                      e === 'break' ||
                      e === 'catch' ||
                      e === 'throw' ||
                      e === 'const' ||
                      e === 'yield' ||
                      e === 'class' ||
                      e === 'super'
                    )
                  case 6:
                    return (
                      e === 'return' ||
                      e === 'typeof' ||
                      e === 'delete' ||
                      e === 'switch' ||
                      e === 'export' ||
                      e === 'import'
                    )
                  case 7:
                    return e === 'default' || e === 'finally' || e === 'extends'
                  case 8:
                    return (
                      e === 'function' || e === 'continue' || e === 'debugger'
                    )
                  case 10:
                    return e === 'instanceof'
                  default:
                    return false
                }
              }
              Scanner.prototype.codePointAt = function (e) {
                var t = this.source.charCodeAt(e)
                if (t >= 55296 && t <= 56319) {
                  var r = this.source.charCodeAt(e + 1)
                  if (r >= 56320 && r <= 57343) {
                    var i = t
                    t = (i - 55296) * 1024 + r - 56320 + 65536
                  }
                }
                return t
              }
              Scanner.prototype.scanHexEscape = function (e) {
                var t = e === 'u' ? 4 : 2
                var r = 0
                for (var i = 0; i < t; ++i) {
                  if (
                    !this.eof() &&
                    n.Character.isHexDigit(this.source.charCodeAt(this.index))
                  ) {
                    r = r * 16 + hexValue(this.source[this.index++])
                  } else {
                    return null
                  }
                }
                return String.fromCharCode(r)
              }
              Scanner.prototype.scanUnicodeCodePointEscape = function () {
                var e = this.source[this.index]
                var t = 0
                if (e === '}') {
                  this.throwUnexpectedToken()
                }
                while (!this.eof()) {
                  e = this.source[this.index++]
                  if (!n.Character.isHexDigit(e.charCodeAt(0))) {
                    break
                  }
                  t = t * 16 + hexValue(e)
                }
                if (t > 1114111 || e !== '}') {
                  this.throwUnexpectedToken()
                }
                return n.Character.fromCodePoint(t)
              }
              Scanner.prototype.getIdentifier = function () {
                var e = this.index++
                while (!this.eof()) {
                  var t = this.source.charCodeAt(this.index)
                  if (t === 92) {
                    this.index = e
                    return this.getComplexIdentifier()
                  } else if (t >= 55296 && t < 57343) {
                    this.index = e
                    return this.getComplexIdentifier()
                  }
                  if (n.Character.isIdentifierPart(t)) {
                    ++this.index
                  } else {
                    break
                  }
                }
                return this.source.slice(e, this.index)
              }
              Scanner.prototype.getComplexIdentifier = function () {
                var e = this.codePointAt(this.index)
                var t = n.Character.fromCodePoint(e)
                this.index += t.length
                var r
                if (e === 92) {
                  if (this.source.charCodeAt(this.index) !== 117) {
                    this.throwUnexpectedToken()
                  }
                  ++this.index
                  if (this.source[this.index] === '{') {
                    ++this.index
                    r = this.scanUnicodeCodePointEscape()
                  } else {
                    r = this.scanHexEscape('u')
                    if (
                      r === null ||
                      r === '\\' ||
                      !n.Character.isIdentifierStart(r.charCodeAt(0))
                    ) {
                      this.throwUnexpectedToken()
                    }
                  }
                  t = r
                }
                while (!this.eof()) {
                  e = this.codePointAt(this.index)
                  if (!n.Character.isIdentifierPart(e)) {
                    break
                  }
                  r = n.Character.fromCodePoint(e)
                  t += r
                  this.index += r.length
                  if (e === 92) {
                    t = t.substr(0, t.length - 1)
                    if (this.source.charCodeAt(this.index) !== 117) {
                      this.throwUnexpectedToken()
                    }
                    ++this.index
                    if (this.source[this.index] === '{') {
                      ++this.index
                      r = this.scanUnicodeCodePointEscape()
                    } else {
                      r = this.scanHexEscape('u')
                      if (
                        r === null ||
                        r === '\\' ||
                        !n.Character.isIdentifierPart(r.charCodeAt(0))
                      ) {
                        this.throwUnexpectedToken()
                      }
                    }
                    t += r
                  }
                }
                return t
              }
              Scanner.prototype.octalToDecimal = function (e) {
                var t = e !== '0'
                var r = octalValue(e)
                if (
                  !this.eof() &&
                  n.Character.isOctalDigit(this.source.charCodeAt(this.index))
                ) {
                  t = true
                  r = r * 8 + octalValue(this.source[this.index++])
                  if (
                    '0123'.indexOf(e) >= 0 &&
                    !this.eof() &&
                    n.Character.isOctalDigit(this.source.charCodeAt(this.index))
                  ) {
                    r = r * 8 + octalValue(this.source[this.index++])
                  }
                }
                return { code: r, octal: t }
              }
              Scanner.prototype.scanIdentifier = function () {
                var e
                var t = this.index
                var r =
                  this.source.charCodeAt(t) === 92
                    ? this.getComplexIdentifier()
                    : this.getIdentifier()
                if (r.length === 1) {
                  e = 3
                } else if (this.isKeyword(r)) {
                  e = 4
                } else if (r === 'null') {
                  e = 5
                } else if (r === 'true' || r === 'false') {
                  e = 1
                } else {
                  e = 3
                }
                if (e !== 3 && t + r.length !== this.index) {
                  var i = this.index
                  this.index = t
                  this.tolerateUnexpectedToken(
                    a.Messages.InvalidEscapedReservedWord
                  )
                  this.index = i
                }
                return {
                  type: e,
                  value: r,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.scanPunctuator = function () {
                var e = this.index
                var t = this.source[this.index]
                switch (t) {
                  case '(':
                  case '{':
                    if (t === '{') {
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
                      t = '...'
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
                    t = this.source.substr(this.index, 4)
                    if (t === '>>>=') {
                      this.index += 4
                    } else {
                      t = t.substr(0, 3)
                      if (
                        t === '===' ||
                        t === '!==' ||
                        t === '>>>' ||
                        t === '<<=' ||
                        t === '>>=' ||
                        t === '**='
                      ) {
                        this.index += 3
                      } else {
                        t = t.substr(0, 2)
                        if (
                          t === '&&' ||
                          t === '||' ||
                          t === '==' ||
                          t === '!=' ||
                          t === '+=' ||
                          t === '-=' ||
                          t === '*=' ||
                          t === '/=' ||
                          t === '++' ||
                          t === '--' ||
                          t === '<<' ||
                          t === '>>' ||
                          t === '&=' ||
                          t === '|=' ||
                          t === '^=' ||
                          t === '%=' ||
                          t === '<=' ||
                          t === '>=' ||
                          t === '=>' ||
                          t === '**'
                        ) {
                          this.index += 2
                        } else {
                          t = this.source[this.index]
                          if ('<>=!+-*%&|^/'.indexOf(t) >= 0) {
                            ++this.index
                          }
                        }
                      }
                    }
                }
                if (this.index === e) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 7,
                  value: t,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanHexLiteral = function (e) {
                var t = ''
                while (!this.eof()) {
                  if (
                    !n.Character.isHexDigit(this.source.charCodeAt(this.index))
                  ) {
                    break
                  }
                  t += this.source[this.index++]
                }
                if (t.length === 0) {
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
                  value: parseInt('0x' + t, 16),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanBinaryLiteral = function (e) {
                var t = ''
                var r
                while (!this.eof()) {
                  r = this.source[this.index]
                  if (r !== '0' && r !== '1') {
                    break
                  }
                  t += this.source[this.index++]
                }
                if (t.length === 0) {
                  this.throwUnexpectedToken()
                }
                if (!this.eof()) {
                  r = this.source.charCodeAt(this.index)
                  if (
                    n.Character.isIdentifierStart(r) ||
                    n.Character.isDecimalDigit(r)
                  ) {
                    this.throwUnexpectedToken()
                  }
                }
                return {
                  type: 6,
                  value: parseInt(t, 2),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanOctalLiteral = function (e, t) {
                var r = ''
                var i = false
                if (n.Character.isOctalDigit(e.charCodeAt(0))) {
                  i = true
                  r = '0' + this.source[this.index++]
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
                  r += this.source[this.index++]
                }
                if (!i && r.length === 0) {
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
                  value: parseInt(r, 8),
                  octal: i,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.isImplicitOctalLiteral = function () {
                for (var e = this.index + 1; e < this.length; ++e) {
                  var t = this.source[e]
                  if (t === '8' || t === '9') {
                    return false
                  }
                  if (!n.Character.isOctalDigit(t.charCodeAt(0))) {
                    return true
                  }
                }
                return true
              }
              Scanner.prototype.scanNumericLiteral = function () {
                var e = this.index
                var t = this.source[e]
                i.assert(
                  n.Character.isDecimalDigit(t.charCodeAt(0)) || t === '.',
                  'Numeric literal must start with a decimal digit or a decimal point'
                )
                var r = ''
                if (t !== '.') {
                  r = this.source[this.index++]
                  t = this.source[this.index]
                  if (r === '0') {
                    if (t === 'x' || t === 'X') {
                      ++this.index
                      return this.scanHexLiteral(e)
                    }
                    if (t === 'b' || t === 'B') {
                      ++this.index
                      return this.scanBinaryLiteral(e)
                    }
                    if (t === 'o' || t === 'O') {
                      return this.scanOctalLiteral(t, e)
                    }
                    if (t && n.Character.isOctalDigit(t.charCodeAt(0))) {
                      if (this.isImplicitOctalLiteral()) {
                        return this.scanOctalLiteral(t, e)
                      }
                    }
                  }
                  while (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    r += this.source[this.index++]
                  }
                  t = this.source[this.index]
                }
                if (t === '.') {
                  r += this.source[this.index++]
                  while (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    r += this.source[this.index++]
                  }
                  t = this.source[this.index]
                }
                if (t === 'e' || t === 'E') {
                  r += this.source[this.index++]
                  t = this.source[this.index]
                  if (t === '+' || t === '-') {
                    r += this.source[this.index++]
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
                      r += this.source[this.index++]
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
                  value: parseFloat(r),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanStringLiteral = function () {
                var e = this.index
                var t = this.source[e]
                i.assert(
                  t === "'" || t === '"',
                  'String literal must starts with a quote'
                )
                ++this.index
                var r = false
                var s = ''
                while (!this.eof()) {
                  var u = this.source[this.index++]
                  if (u === t) {
                    t = ''
                    break
                  } else if (u === '\\') {
                    u = this.source[this.index++]
                    if (!u || !n.Character.isLineTerminator(u.charCodeAt(0))) {
                      switch (u) {
                        case 'u':
                          if (this.source[this.index] === '{') {
                            ++this.index
                            s += this.scanUnicodeCodePointEscape()
                          } else {
                            var l = this.scanHexEscape(u)
                            if (l === null) {
                              this.throwUnexpectedToken()
                            }
                            s += l
                          }
                          break
                        case 'x':
                          var o = this.scanHexEscape(u)
                          if (o === null) {
                            this.throwUnexpectedToken(
                              a.Messages.InvalidHexEscapeSequence
                            )
                          }
                          s += o
                          break
                        case 'n':
                          s += '\n'
                          break
                        case 'r':
                          s += '\r'
                          break
                        case 't':
                          s += '\t'
                          break
                        case 'b':
                          s += '\b'
                          break
                        case 'f':
                          s += '\f'
                          break
                        case 'v':
                          s += '\v'
                          break
                        case '8':
                        case '9':
                          s += u
                          this.tolerateUnexpectedToken()
                          break
                        default:
                          if (u && n.Character.isOctalDigit(u.charCodeAt(0))) {
                            var c = this.octalToDecimal(u)
                            r = c.octal || r
                            s += String.fromCharCode(c.code)
                          } else {
                            s += u
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
                    s += u
                  }
                }
                if (t !== '') {
                  this.index = e
                  this.throwUnexpectedToken()
                }
                return {
                  type: 8,
                  value: s,
                  octal: r,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanTemplate = function () {
                var e = ''
                var t = false
                var r = this.index
                var i = this.source[r] === '`'
                var s = false
                var u = 2
                ++this.index
                while (!this.eof()) {
                  var l = this.source[this.index++]
                  if (l === '`') {
                    u = 1
                    s = true
                    t = true
                    break
                  } else if (l === '$') {
                    if (this.source[this.index] === '{') {
                      this.curlyStack.push('${')
                      ++this.index
                      t = true
                      break
                    }
                    e += l
                  } else if (l === '\\') {
                    l = this.source[this.index++]
                    if (!n.Character.isLineTerminator(l.charCodeAt(0))) {
                      switch (l) {
                        case 'n':
                          e += '\n'
                          break
                        case 'r':
                          e += '\r'
                          break
                        case 't':
                          e += '\t'
                          break
                        case 'u':
                          if (this.source[this.index] === '{') {
                            ++this.index
                            e += this.scanUnicodeCodePointEscape()
                          } else {
                            var o = this.index
                            var c = this.scanHexEscape(l)
                            if (c !== null) {
                              e += c
                            } else {
                              this.index = o
                              e += l
                            }
                          }
                          break
                        case 'x':
                          var h = this.scanHexEscape(l)
                          if (h === null) {
                            this.throwUnexpectedToken(
                              a.Messages.InvalidHexEscapeSequence
                            )
                          }
                          e += h
                          break
                        case 'b':
                          e += '\b'
                          break
                        case 'f':
                          e += '\f'
                          break
                        case 'v':
                          e += '\v'
                          break
                        default:
                          if (l === '0') {
                            if (
                              n.Character.isDecimalDigit(
                                this.source.charCodeAt(this.index)
                              )
                            ) {
                              this.throwUnexpectedToken(
                                a.Messages.TemplateOctalLiteral
                              )
                            }
                            e += '\0'
                          } else if (
                            n.Character.isOctalDigit(l.charCodeAt(0))
                          ) {
                            this.throwUnexpectedToken(
                              a.Messages.TemplateOctalLiteral
                            )
                          } else {
                            e += l
                          }
                          break
                      }
                    } else {
                      ++this.lineNumber
                      if (l === '\r' && this.source[this.index] === '\n') {
                        ++this.index
                      }
                      this.lineStart = this.index
                    }
                  } else if (n.Character.isLineTerminator(l.charCodeAt(0))) {
                    ++this.lineNumber
                    if (l === '\r' && this.source[this.index] === '\n') {
                      ++this.index
                    }
                    this.lineStart = this.index
                    e += '\n'
                  } else {
                    e += l
                  }
                }
                if (!t) {
                  this.throwUnexpectedToken()
                }
                if (!i) {
                  this.curlyStack.pop()
                }
                return {
                  type: 10,
                  value: this.source.slice(r + 1, this.index - u),
                  cooked: e,
                  head: i,
                  tail: s,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: r,
                  end: this.index,
                }
              }
              Scanner.prototype.testRegExp = function (e, t) {
                var r = '￿'
                var i = e
                var n = this
                if (t.indexOf('u') >= 0) {
                  i = i
                    .replace(
                      /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                      function (e, t, i) {
                        var s = parseInt(t || i, 16)
                        if (s > 1114111) {
                          n.throwUnexpectedToken(a.Messages.InvalidRegExp)
                        }
                        if (s <= 65535) {
                          return String.fromCharCode(s)
                        }
                        return r
                      }
                    )
                    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, r)
                }
                try {
                  RegExp(i)
                } catch (e) {
                  this.throwUnexpectedToken(a.Messages.InvalidRegExp)
                }
                try {
                  return new RegExp(e, t)
                } catch (e) {
                  return null
                }
              }
              Scanner.prototype.scanRegExpBody = function () {
                var e = this.source[this.index]
                i.assert(
                  e === '/',
                  'Regular expression literal must start with a slash'
                )
                var t = this.source[this.index++]
                var r = false
                var s = false
                while (!this.eof()) {
                  e = this.source[this.index++]
                  t += e
                  if (e === '\\') {
                    e = this.source[this.index++]
                    if (n.Character.isLineTerminator(e.charCodeAt(0))) {
                      this.throwUnexpectedToken(a.Messages.UnterminatedRegExp)
                    }
                    t += e
                  } else if (n.Character.isLineTerminator(e.charCodeAt(0))) {
                    this.throwUnexpectedToken(a.Messages.UnterminatedRegExp)
                  } else if (r) {
                    if (e === ']') {
                      r = false
                    }
                  } else {
                    if (e === '/') {
                      s = true
                      break
                    } else if (e === '[') {
                      r = true
                    }
                  }
                }
                if (!s) {
                  this.throwUnexpectedToken(a.Messages.UnterminatedRegExp)
                }
                return t.substr(1, t.length - 2)
              }
              Scanner.prototype.scanRegExpFlags = function () {
                var e = ''
                var t = ''
                while (!this.eof()) {
                  var r = this.source[this.index]
                  if (!n.Character.isIdentifierPart(r.charCodeAt(0))) {
                    break
                  }
                  ++this.index
                  if (r === '\\' && !this.eof()) {
                    r = this.source[this.index]
                    if (r === 'u') {
                      ++this.index
                      var i = this.index
                      var a = this.scanHexEscape('u')
                      if (a !== null) {
                        t += a
                        for (e += '\\u'; i < this.index; ++i) {
                          e += this.source[i]
                        }
                      } else {
                        this.index = i
                        t += 'u'
                        e += '\\u'
                      }
                      this.tolerateUnexpectedToken()
                    } else {
                      e += '\\'
                      this.tolerateUnexpectedToken()
                    }
                  } else {
                    t += r
                    e += r
                  }
                }
                return t
              }
              Scanner.prototype.scanRegExp = function () {
                var e = this.index
                var t = this.scanRegExpBody()
                var r = this.scanRegExpFlags()
                var i = this.testRegExp(t, r)
                return {
                  type: 9,
                  value: '',
                  pattern: t,
                  flags: r,
                  regex: i,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
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
                var e = this.source.charCodeAt(this.index)
                if (n.Character.isIdentifierStart(e)) {
                  return this.scanIdentifier()
                }
                if (e === 40 || e === 41 || e === 59) {
                  return this.scanPunctuator()
                }
                if (e === 39 || e === 34) {
                  return this.scanStringLiteral()
                }
                if (e === 46) {
                  if (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index + 1)
                    )
                  ) {
                    return this.scanNumericLiteral()
                  }
                  return this.scanPunctuator()
                }
                if (n.Character.isDecimalDigit(e)) {
                  return this.scanNumericLiteral()
                }
                if (
                  e === 96 ||
                  (e === 125 &&
                    this.curlyStack[this.curlyStack.length - 1] === '${')
                ) {
                  return this.scanTemplate()
                }
                if (e >= 55296 && e < 57343) {
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
            t.Scanner = s
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.TokenName = {}
            t.TokenName[1] = 'Boolean'
            t.TokenName[2] = '<end>'
            t.TokenName[3] = 'Identifier'
            t.TokenName[4] = 'Keyword'
            t.TokenName[5] = 'Null'
            t.TokenName[6] = 'Numeric'
            t.TokenName[7] = 'Punctuator'
            t.TokenName[8] = 'String'
            t.TokenName[9] = 'RegularExpression'
            t.TokenName[10] = 'Template'
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.XHTMLEntities = {
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
          function (e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = r(10)
            var n = r(12)
            var a = r(13)
            var s = (function () {
              function Reader() {
                this.values = []
                this.curly = this.paren = -1
              }
              Reader.prototype.beforeFunctionExpression = function (e) {
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
                  ].indexOf(e) >= 0
                )
              }
              Reader.prototype.isRegexStart = function () {
                var e = this.values[this.values.length - 1]
                var t = e !== null
                switch (e) {
                  case 'this':
                  case ']':
                    t = false
                    break
                  case ')':
                    var r = this.values[this.paren - 1]
                    t =
                      r === 'if' || r === 'while' || r === 'for' || r === 'with'
                    break
                  case '}':
                    t = false
                    if (this.values[this.curly - 3] === 'function') {
                      var i = this.values[this.curly - 4]
                      t = i ? !this.beforeFunctionExpression(i) : false
                    } else if (this.values[this.curly - 4] === 'function') {
                      var i = this.values[this.curly - 5]
                      t = i ? !this.beforeFunctionExpression(i) : true
                    }
                    break
                  default:
                    break
                }
                return t
              }
              Reader.prototype.push = function (e) {
                if (e.type === 7 || e.type === 4) {
                  if (e.value === '{') {
                    this.curly = this.values.length
                  } else if (e.value === '(') {
                    this.paren = this.values.length
                  }
                  this.values.push(e.value)
                } else {
                  this.values.push(null)
                }
              }
              return Reader
            })()
            var u = (function () {
              function Tokenizer(e, t) {
                this.errorHandler = new i.ErrorHandler()
                this.errorHandler.tolerant = t
                  ? typeof t.tolerant === 'boolean' && t.tolerant
                  : false
                this.scanner = new n.Scanner(e, this.errorHandler)
                this.scanner.trackComment = t
                  ? typeof t.comment === 'boolean' && t.comment
                  : false
                this.trackRange = t
                  ? typeof t.range === 'boolean' && t.range
                  : false
                this.trackLoc = t ? typeof t.loc === 'boolean' && t.loc : false
                this.buffer = []
                this.reader = new s()
              }
              Tokenizer.prototype.errors = function () {
                return this.errorHandler.errors
              }
              Tokenizer.prototype.getNextToken = function () {
                if (this.buffer.length === 0) {
                  var e = this.scanner.scanComments()
                  if (this.scanner.trackComment) {
                    for (var t = 0; t < e.length; ++t) {
                      var r = e[t]
                      var i = this.scanner.source.slice(r.slice[0], r.slice[1])
                      var n = {
                        type: r.multiLine ? 'BlockComment' : 'LineComment',
                        value: i,
                      }
                      if (this.trackRange) {
                        n.range = r.range
                      }
                      if (this.trackLoc) {
                        n.loc = r.loc
                      }
                      this.buffer.push(n)
                    }
                  }
                  if (!this.scanner.eof()) {
                    var s = void 0
                    if (this.trackLoc) {
                      s = {
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
                    var l = u ? this.scanner.scanRegExp() : this.scanner.lex()
                    this.reader.push(l)
                    var o = {
                      type: a.TokenName[l.type],
                      value: this.scanner.source.slice(l.start, l.end),
                    }
                    if (this.trackRange) {
                      o.range = [l.start, l.end]
                    }
                    if (this.trackLoc) {
                      s.end = {
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart,
                      }
                      o.loc = s
                    }
                    if (l.type === 9) {
                      var c = l.pattern
                      var h = l.flags
                      o.regex = { pattern: c, flags: h }
                    }
                    this.buffer.push(o)
                  }
                }
                return this.buffer.shift()
              }
              return Tokenizer
            })()
            t.Tokenizer = u
          },
        ])
      })
    },
    495: (e, t) => {
      'use strict'
      var r = Object
      var i = Object.defineProperty
      var n = Object.create
      function defProp(e, t, n) {
        if (i)
          try {
            i.call(r, e, t, { value: n })
          } catch (r) {
            e[t] = n
          }
        else {
          e[t] = n
        }
      }
      function makeSafeToCall(e) {
        if (e) {
          defProp(e, 'call', e.call)
          defProp(e, 'apply', e.apply)
        }
        return e
      }
      makeSafeToCall(i)
      makeSafeToCall(n)
      var a = makeSafeToCall(Object.prototype.hasOwnProperty)
      var s = makeSafeToCall(Number.prototype.toString)
      var u = makeSafeToCall(String.prototype.slice)
      var l = function () {}
      function create(e) {
        if (n) {
          return n.call(r, e)
        }
        l.prototype = e || null
        return new l()
      }
      var o = Math.random
      var c = create(null)
      function makeUniqueKey() {
        do {
          var e = internString(u.call(s.call(o(), 36), 2))
        } while (a.call(c, e))
        return (c[e] = e)
      }
      function internString(e) {
        var t = {}
        t[e] = true
        return Object.keys(t)[0]
      }
      t.makeUniqueKey = makeUniqueKey
      var h = Object.getOwnPropertyNames
      Object.getOwnPropertyNames = function getOwnPropertyNames(e) {
        for (var t = h(e), r = 0, i = 0, n = t.length; r < n; ++r) {
          if (!a.call(c, t[r])) {
            if (r > i) {
              t[i] = t[r]
            }
            ++i
          }
        }
        t.length = i
        return t
      }
      function defaultCreatorFn(e) {
        return create(null)
      }
      function makeAccessor(e) {
        var t = makeUniqueKey()
        var r = create(null)
        e = e || defaultCreatorFn
        function register(i) {
          var n
          function vault(t, a) {
            if (t === r) {
              return a ? (n = null) : n || (n = e(i))
            }
          }
          defProp(i, t, vault)
        }
        function accessor(e) {
          if (!a.call(e, t)) register(e)
          return e[t](r)
        }
        accessor.forget = function (e) {
          if (a.call(e, t)) e[t](r, true)
        }
        return accessor
      }
      t.makeAccessor = makeAccessor
    },
    998: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (e != null)
            for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r]
          t['default'] = e
          return t
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var a = i(r(357))
      var s = n(r(593))
      var u = s.namedTypes
      var l = s.builtInTypes.array
      var o = s.builtInTypes.object
      var c = r(687)
      var h = r(721)
      var f = r(495)
      var p = f.makeUniqueKey()
      function getSortedChildNodes(e, t, r) {
        if (!e) {
          return
        }
        h.fixFaultyLocations(e, t)
        if (r) {
          if (u.Node.check(e) && u.SourceLocation.check(e.loc)) {
            for (var i = r.length - 1; i >= 0; --i) {
              if (h.comparePos(r[i].loc.end, e.loc.start) <= 0) {
                break
              }
            }
            r.splice(i + 1, 0, e)
            return
          }
        } else if (e[p]) {
          return e[p]
        }
        var n
        if (l.check(e)) {
          n = Object.keys(e)
        } else if (o.check(e)) {
          n = s.getFieldNames(e)
        } else {
          return
        }
        if (!r) {
          Object.defineProperty(e, p, { value: (r = []), enumerable: false })
        }
        for (var i = 0, a = n.length; i < a; ++i) {
          getSortedChildNodes(e[n[i]], t, r)
        }
        return r
      }
      function decorateComment(e, t, r) {
        var i = getSortedChildNodes(e, r)
        var n = 0,
          a = i.length
        while (n < a) {
          var s = (n + a) >> 1
          var u = i[s]
          if (
            h.comparePos(u.loc.start, t.loc.start) <= 0 &&
            h.comparePos(t.loc.end, u.loc.end) <= 0
          ) {
            decorateComment((t.enclosingNode = u), t, r)
            return
          }
          if (h.comparePos(u.loc.end, t.loc.start) <= 0) {
            var l = u
            n = s + 1
            continue
          }
          if (h.comparePos(t.loc.end, u.loc.start) <= 0) {
            var o = u
            a = s
            continue
          }
          throw new Error('Comment location overlaps with node location')
        }
        if (l) {
          t.precedingNode = l
        }
        if (o) {
          t.followingNode = o
        }
      }
      function attach(e, t, r) {
        if (!l.check(e)) {
          return
        }
        var i = []
        e.forEach(function (e) {
          e.loc.lines = r
          decorateComment(t, e, r)
          var n = e.precedingNode
          var s = e.enclosingNode
          var u = e.followingNode
          if (n && u) {
            var l = i.length
            if (l > 0) {
              var o = i[l - 1]
              a.default.strictEqual(
                o.precedingNode === e.precedingNode,
                o.followingNode === e.followingNode
              )
              if (o.followingNode !== e.followingNode) {
                breakTies(i, r)
              }
            }
            i.push(e)
          } else if (n) {
            breakTies(i, r)
            addTrailingComment(n, e)
          } else if (u) {
            breakTies(i, r)
            addLeadingComment(u, e)
          } else if (s) {
            breakTies(i, r)
            addDanglingComment(s, e)
          } else {
            throw new Error('AST contains no nodes at all?')
          }
        })
        breakTies(i, r)
        e.forEach(function (e) {
          delete e.precedingNode
          delete e.enclosingNode
          delete e.followingNode
        })
      }
      t.attach = attach
      function breakTies(e, t) {
        var r = e.length
        if (r === 0) {
          return
        }
        var i = e[0].precedingNode
        var n = e[0].followingNode
        var s = n.loc.start
        for (var u = r; u > 0; --u) {
          var l = e[u - 1]
          a.default.strictEqual(l.precedingNode, i)
          a.default.strictEqual(l.followingNode, n)
          var o = t.sliceString(l.loc.end, s)
          if (/\S/.test(o)) {
            break
          }
          s = l.loc.start
        }
        while (
          u <= r &&
          (l = e[u]) &&
          (l.type === 'Line' || l.type === 'CommentLine') &&
          l.loc.start.column > n.loc.start.column
        ) {
          ++u
        }
        e.forEach(function (e, t) {
          if (t < u) {
            addTrailingComment(i, e)
          } else {
            addLeadingComment(n, e)
          }
        })
        e.length = 0
      }
      function addCommentHelper(e, t) {
        var r = e.comments || (e.comments = [])
        r.push(t)
      }
      function addLeadingComment(e, t) {
        t.leading = true
        t.trailing = false
        addCommentHelper(e, t)
      }
      function addDanglingComment(e, t) {
        t.leading = false
        t.trailing = false
        addCommentHelper(e, t)
      }
      function addTrailingComment(e, t) {
        t.leading = false
        t.trailing = true
        addCommentHelper(e, t)
      }
      function printLeadingComment(e, t) {
        var r = e.getValue()
        u.Comment.assert(r)
        var i = r.loc
        var n = i && i.lines
        var a = [t(e)]
        if (r.trailing) {
          a.push('\n')
        } else if (n instanceof c.Lines) {
          var s = n.slice(i.end, n.skipSpaces(i.end) || n.lastPos())
          if (s.length === 1) {
            a.push(s)
          } else {
            a.push(new Array(s.length).join('\n'))
          }
        } else {
          a.push('\n')
        }
        return c.concat(a)
      }
      function printTrailingComment(e, t) {
        var r = e.getValue(e)
        u.Comment.assert(r)
        var i = r.loc
        var n = i && i.lines
        var a = []
        if (n instanceof c.Lines) {
          var s = n.skipSpaces(i.start, true) || n.firstPos()
          var l = n.slice(s, i.start)
          if (l.length === 1) {
            a.push(l)
          } else {
            a.push(new Array(l.length).join('\n'))
          }
        }
        a.push(t(e))
        return c.concat(a)
      }
      function printComments(e, t) {
        var r = e.getValue()
        var i = t(e)
        var n = u.Node.check(r) && s.getFieldValue(r, 'comments')
        if (!n || n.length === 0) {
          return i
        }
        var a = []
        var l = [i]
        e.each(function (e) {
          var i = e.getValue()
          var n = s.getFieldValue(i, 'leading')
          var o = s.getFieldValue(i, 'trailing')
          if (
            n ||
            (o &&
              !(
                u.Statement.check(r) ||
                i.type === 'Block' ||
                i.type === 'CommentBlock'
              ))
          ) {
            a.push(printLeadingComment(e, t))
          } else if (o) {
            l.push(printTrailingComment(e, t))
          }
        }, 'comments')
        a.push.apply(a, l)
        return c.concat(a)
      }
      t.printComments = printComments
    },
    236: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (e != null)
            for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r]
          t['default'] = e
          return t
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var a = i(r(357))
      var s = n(r(593))
      var u = s.namedTypes
      var l = s.builtInTypes.array
      var o = s.builtInTypes.number
      var c = n(r(721))
      var h = function FastPath(e) {
        a.default.ok(this instanceof FastPath)
        this.stack = [e]
      }
      var f = h.prototype
      h.from = function (e) {
        if (e instanceof h) {
          return e.copy()
        }
        if (e instanceof s.NodePath) {
          var t = Object.create(h.prototype)
          var r = [e.value]
          for (var i; (i = e.parentPath); e = i) r.push(e.name, i.value)
          t.stack = r.reverse()
          return t
        }
        return new h(e)
      }
      f.copy = function copy() {
        var copy = Object.create(h.prototype)
        copy.stack = this.stack.slice(0)
        return copy
      }
      f.getName = function getName() {
        var e = this.stack
        var t = e.length
        if (t > 1) {
          return e[t - 2]
        }
        return null
      }
      f.getValue = function getValue() {
        var e = this.stack
        return e[e.length - 1]
      }
      f.valueIsDuplicate = function () {
        var e = this.stack
        var t = e.length - 1
        return e.lastIndexOf(e[t], t - 1) >= 0
      }
      function getNodeHelper(e, t) {
        var r = e.stack
        for (var i = r.length - 1; i >= 0; i -= 2) {
          var n = r[i]
          if (u.Node.check(n) && --t < 0) {
            return n
          }
        }
        return null
      }
      f.getNode = function getNode(e) {
        if (e === void 0) {
          e = 0
        }
        return getNodeHelper(this, ~~e)
      }
      f.getParentNode = function getParentNode(e) {
        if (e === void 0) {
          e = 0
        }
        return getNodeHelper(this, ~~e + 1)
      }
      f.getRootValue = function getRootValue() {
        var e = this.stack
        if (e.length % 2 === 0) {
          return e[1]
        }
        return e[0]
      }
      f.call = function call(e) {
        var t = this.stack
        var r = t.length
        var i = t[r - 1]
        var n = arguments.length
        for (var a = 1; a < n; ++a) {
          var s = arguments[a]
          i = i[s]
          t.push(s, i)
        }
        var u = e(this)
        t.length = r
        return u
      }
      f.each = function each(e) {
        var t = this.stack
        var r = t.length
        var i = t[r - 1]
        var n = arguments.length
        for (var a = 1; a < n; ++a) {
          var s = arguments[a]
          i = i[s]
          t.push(s, i)
        }
        for (var a = 0; a < i.length; ++a) {
          if (a in i) {
            t.push(a, i[a])
            e(this)
            t.length -= 2
          }
        }
        t.length = r
      }
      f.map = function map(e) {
        var t = this.stack
        var r = t.length
        var i = t[r - 1]
        var n = arguments.length
        for (var a = 1; a < n; ++a) {
          var s = arguments[a]
          i = i[s]
          t.push(s, i)
        }
        var u = new Array(i.length)
        for (var a = 0; a < i.length; ++a) {
          if (a in i) {
            t.push(a, i[a])
            u[a] = e(this, a)
            t.length -= 2
          }
        }
        t.length = r
        return u
      }
      f.hasParens = function () {
        var e = this.getNode()
        var t = this.getPrevToken(e)
        if (!t) {
          return false
        }
        var r = this.getNextToken(e)
        if (!r) {
          return false
        }
        if (t.value === '(') {
          if (r.value === ')') {
            return true
          }
          var i =
            !this.canBeFirstInStatement() &&
            this.firstInStatement() &&
            !this.needsParens(true)
          if (i) {
            return true
          }
        }
        return false
      }
      f.getPrevToken = function (e) {
        e = e || this.getNode()
        var t = e && e.loc
        var r = t && t.tokens
        if (r && t.start.token > 0) {
          var i = r[t.start.token - 1]
          if (i) {
            var n = this.getRootValue().loc
            if (c.comparePos(n.start, i.loc.start) <= 0) {
              return i
            }
          }
        }
        return null
      }
      f.getNextToken = function (e) {
        e = e || this.getNode()
        var t = e && e.loc
        var r = t && t.tokens
        if (r && t.end.token < r.length) {
          var i = r[t.end.token]
          if (i) {
            var n = this.getRootValue().loc
            if (c.comparePos(i.loc.end, n.end) <= 0) {
              return i
            }
          }
        }
        return null
      }
      f.needsParens = function (e) {
        var t = this.getNode()
        if (
          t.type === 'AssignmentExpression' &&
          t.left.type === 'ObjectPattern'
        ) {
          return true
        }
        var r = this.getParentNode()
        if (!r) {
          return false
        }
        var i = this.getName()
        if (this.getValue() !== t) {
          return false
        }
        if (u.Statement.check(t)) {
          return false
        }
        if (t.type === 'Identifier') {
          return false
        }
        if (r.type === 'ParenthesizedExpression') {
          return false
        }
        switch (t.type) {
          case 'UnaryExpression':
          case 'SpreadElement':
          case 'SpreadProperty':
            return (
              r.type === 'MemberExpression' && i === 'object' && r.object === t
            )
          case 'BinaryExpression':
          case 'LogicalExpression':
            switch (r.type) {
              case 'CallExpression':
                return i === 'callee' && r.callee === t
              case 'UnaryExpression':
              case 'SpreadElement':
              case 'SpreadProperty':
                return true
              case 'MemberExpression':
                return i === 'object' && r.object === t
              case 'BinaryExpression':
              case 'LogicalExpression':
                var n = r.operator
                var s = p[n]
                var l = t.operator
                var c = p[l]
                if (s > c) {
                  return true
                }
                if (s === c && i === 'right') {
                  a.default.strictEqual(r.right, t)
                  return true
                }
              default:
                return false
            }
          case 'SequenceExpression':
            switch (r.type) {
              case 'ReturnStatement':
                return false
              case 'ForStatement':
                return false
              case 'ExpressionStatement':
                return i !== 'expression'
              default:
                return true
            }
          case 'YieldExpression':
            switch (r.type) {
              case 'BinaryExpression':
              case 'LogicalExpression':
              case 'UnaryExpression':
              case 'SpreadElement':
              case 'SpreadProperty':
              case 'CallExpression':
              case 'MemberExpression':
              case 'NewExpression':
              case 'ConditionalExpression':
              case 'YieldExpression':
                return true
              default:
                return false
            }
          case 'IntersectionTypeAnnotation':
          case 'UnionTypeAnnotation':
            return r.type === 'NullableTypeAnnotation'
          case 'Literal':
            return (
              r.type === 'MemberExpression' &&
              o.check(t.value) &&
              i === 'object' &&
              r.object === t
            )
          case 'NumericLiteral':
            return (
              r.type === 'MemberExpression' && i === 'object' && r.object === t
            )
          case 'AssignmentExpression':
          case 'ConditionalExpression':
            switch (r.type) {
              case 'UnaryExpression':
              case 'SpreadElement':
              case 'SpreadProperty':
              case 'BinaryExpression':
              case 'LogicalExpression':
                return true
              case 'CallExpression':
              case 'NewExpression':
                return i === 'callee' && r.callee === t
              case 'ConditionalExpression':
                return i === 'test' && r.test === t
              case 'MemberExpression':
                return i === 'object' && r.object === t
              default:
                return false
            }
          case 'ArrowFunctionExpression':
            if (u.CallExpression.check(r) && i === 'callee') {
              return true
            }
            if (u.MemberExpression.check(r) && i === 'object') {
              return true
            }
            return isBinary(r)
          case 'ObjectExpression':
            if (r.type === 'ArrowFunctionExpression' && i === 'body') {
              return true
            }
            break
          case 'TSAsExpression':
            if (
              r.type === 'ArrowFunctionExpression' &&
              i === 'body' &&
              t.expression.type === 'ObjectExpression'
            ) {
              return true
            }
            break
          case 'CallExpression':
            if (
              i === 'declaration' &&
              u.ExportDefaultDeclaration.check(r) &&
              u.FunctionExpression.check(t.callee)
            ) {
              return true
            }
        }
        if (r.type === 'NewExpression' && i === 'callee' && r.callee === t) {
          return containsCallExpression(t)
        }
        if (
          e !== true &&
          !this.canBeFirstInStatement() &&
          this.firstInStatement()
        ) {
          return true
        }
        return false
      }
      function isBinary(e) {
        return u.BinaryExpression.check(e) || u.LogicalExpression.check(e)
      }
      function isUnaryLike(e) {
        return (
          u.UnaryExpression.check(e) ||
          (u.SpreadElement && u.SpreadElement.check(e)) ||
          (u.SpreadProperty && u.SpreadProperty.check(e))
        )
      }
      var p = {}
      ;[
        ['||'],
        ['&&'],
        ['|'],
        ['^'],
        ['&'],
        ['==', '===', '!=', '!=='],
        ['<', '>', '<=', '>=', 'in', 'instanceof'],
        ['>>', '<<', '>>>'],
        ['+', '-'],
        ['*', '/', '%', '**'],
      ].forEach(function (e, t) {
        e.forEach(function (e) {
          p[e] = t
        })
      })
      function containsCallExpression(e) {
        if (u.CallExpression.check(e)) {
          return true
        }
        if (l.check(e)) {
          return e.some(containsCallExpression)
        }
        if (u.Node.check(e)) {
          return s.someField(e, function (e, t) {
            return containsCallExpression(t)
          })
        }
        return false
      }
      f.canBeFirstInStatement = function () {
        var e = this.getNode()
        if (u.FunctionExpression.check(e)) {
          return false
        }
        if (u.ObjectExpression.check(e)) {
          return false
        }
        if (u.ClassExpression.check(e)) {
          return false
        }
        return true
      }
      f.firstInStatement = function () {
        var e = this.stack
        var t, r
        var i, n
        for (var s = e.length - 1; s >= 0; s -= 2) {
          if (u.Node.check(e[s])) {
            i = t
            n = r
            t = e[s - 1]
            r = e[s]
          }
          if (!r || !n) {
            continue
          }
          if (u.BlockStatement.check(r) && t === 'body' && i === 0) {
            a.default.strictEqual(r.body[0], n)
            return true
          }
          if (u.ExpressionStatement.check(r) && i === 'expression') {
            a.default.strictEqual(r.expression, n)
            return true
          }
          if (u.AssignmentExpression.check(r) && i === 'left') {
            a.default.strictEqual(r.left, n)
            return true
          }
          if (u.ArrowFunctionExpression.check(r) && i === 'body') {
            a.default.strictEqual(r.body, n)
            return true
          }
          if (u.SequenceExpression.check(r) && t === 'expressions' && i === 0) {
            a.default.strictEqual(r.expressions[0], n)
            continue
          }
          if (u.CallExpression.check(r) && i === 'callee') {
            a.default.strictEqual(r.callee, n)
            continue
          }
          if (u.MemberExpression.check(r) && i === 'object') {
            a.default.strictEqual(r.object, n)
            continue
          }
          if (u.ConditionalExpression.check(r) && i === 'test') {
            a.default.strictEqual(r.test, n)
            continue
          }
          if (isBinary(r) && i === 'left') {
            a.default.strictEqual(r.left, n)
            continue
          }
          if (u.UnaryExpression.check(r) && !r.prefix && i === 'argument') {
            a.default.strictEqual(r.argument, n)
            continue
          }
          return false
        }
        return true
      }
      t.default = h
    },
    687: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__assign) ||
        function () {
          i =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++) {
                t = arguments[r]
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n]
              }
              return e
            }
          return i.apply(this, arguments)
        }
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var a = n(r(357))
      var s = n(r(241))
      var u = r(309)
      var l = r(721)
      var o = n(r(788))
      var c = (function () {
        function Lines(e, t) {
          if (t === void 0) {
            t = null
          }
          this.infos = e
          this.mappings = []
          this.cachedSourceMap = null
          this.cachedTabWidth = void 0
          a.default.ok(e.length > 0)
          this.length = e.length
          this.name = t || null
          if (this.name) {
            this.mappings.push(
              new o.default(this, {
                start: this.firstPos(),
                end: this.lastPos(),
              })
            )
          }
        }
        Lines.prototype.toString = function (e) {
          return this.sliceString(this.firstPos(), this.lastPos(), e)
        }
        Lines.prototype.getSourceMap = function (e, t) {
          if (!e) {
            return null
          }
          var r = this
          function updateJSON(r) {
            r = r || {}
            r.file = e
            if (t) {
              r.sourceRoot = t
            }
            return r
          }
          if (r.cachedSourceMap) {
            return updateJSON(r.cachedSourceMap.toJSON())
          }
          var i = new s.default.SourceMapGenerator(updateJSON())
          var n = {}
          r.mappings.forEach(function (e) {
            var t =
              e.sourceLines.skipSpaces(e.sourceLoc.start) ||
              e.sourceLines.lastPos()
            var s = r.skipSpaces(e.targetLoc.start) || r.lastPos()
            while (
              l.comparePos(t, e.sourceLoc.end) < 0 &&
              l.comparePos(s, e.targetLoc.end) < 0
            ) {
              var u = e.sourceLines.charAt(t)
              var o = r.charAt(s)
              a.default.strictEqual(u, o)
              var c = e.sourceLines.name
              i.addMapping({
                source: c,
                original: { line: t.line, column: t.column },
                generated: { line: s.line, column: s.column },
              })
              if (!f.call(n, c)) {
                var h = e.sourceLines.toString()
                i.setSourceContent(c, h)
                n[c] = h
              }
              r.nextPos(s, true)
              e.sourceLines.nextPos(t, true)
            }
          })
          r.cachedSourceMap = i
          return i.toJSON()
        }
        Lines.prototype.bootstrapCharAt = function (e) {
          a.default.strictEqual(typeof e, 'object')
          a.default.strictEqual(typeof e.line, 'number')
          a.default.strictEqual(typeof e.column, 'number')
          var t = e.line,
            r = e.column,
            i = this.toString().split(m),
            n = i[t - 1]
          if (typeof n === 'undefined') return ''
          if (r === n.length && t < i.length) return '\n'
          if (r >= n.length) return ''
          return n.charAt(r)
        }
        Lines.prototype.charAt = function (e) {
          a.default.strictEqual(typeof e, 'object')
          a.default.strictEqual(typeof e.line, 'number')
          a.default.strictEqual(typeof e.column, 'number')
          var t = e.line,
            r = e.column,
            i = this,
            n = i.infos,
            s = n[t - 1],
            u = r
          if (typeof s === 'undefined' || u < 0) return ''
          var l = this.getIndentAt(t)
          if (u < l) return ' '
          u += s.sliceStart - l
          if (u === s.sliceEnd && t < this.length) return '\n'
          if (u >= s.sliceEnd) return ''
          return s.line.charAt(u)
        }
        Lines.prototype.stripMargin = function (e, t) {
          if (e === 0) return this
          a.default.ok(e > 0, 'negative margin: ' + e)
          if (t && this.length === 1) return this
          var r = new Lines(
            this.infos.map(function (r, n) {
              if (r.line && (n > 0 || !t)) {
                r = i({}, r, { indent: Math.max(0, r.indent - e) })
              }
              return r
            })
          )
          if (this.mappings.length > 0) {
            var n = r.mappings
            a.default.strictEqual(n.length, 0)
            this.mappings.forEach(function (r) {
              n.push(r.indent(e, t, true))
            })
          }
          return r
        }
        Lines.prototype.indent = function (e) {
          if (e === 0) {
            return this
          }
          var t = new Lines(
            this.infos.map(function (t) {
              if (t.line && !t.locked) {
                t = i({}, t, { indent: t.indent + e })
              }
              return t
            })
          )
          if (this.mappings.length > 0) {
            var r = t.mappings
            a.default.strictEqual(r.length, 0)
            this.mappings.forEach(function (t) {
              r.push(t.indent(e))
            })
          }
          return t
        }
        Lines.prototype.indentTail = function (e) {
          if (e === 0) {
            return this
          }
          if (this.length < 2) {
            return this
          }
          var t = new Lines(
            this.infos.map(function (t, r) {
              if (r > 0 && t.line && !t.locked) {
                t = i({}, t, { indent: t.indent + e })
              }
              return t
            })
          )
          if (this.mappings.length > 0) {
            var r = t.mappings
            a.default.strictEqual(r.length, 0)
            this.mappings.forEach(function (t) {
              r.push(t.indent(e, true))
            })
          }
          return t
        }
        Lines.prototype.lockIndentTail = function () {
          if (this.length < 2) {
            return this
          }
          return new Lines(
            this.infos.map(function (e, t) {
              return i({}, e, { locked: t > 0 })
            })
          )
        }
        Lines.prototype.getIndentAt = function (e) {
          a.default.ok(e >= 1, 'no line ' + e + ' (line numbers start from 1)')
          return Math.max(this.infos[e - 1].indent, 0)
        }
        Lines.prototype.guessTabWidth = function () {
          if (typeof this.cachedTabWidth === 'number') {
            return this.cachedTabWidth
          }
          var e = []
          var t = 0
          for (var r = 1, i = this.length; r <= i; ++r) {
            var n = this.infos[r - 1]
            var a = n.line.slice(n.sliceStart, n.sliceEnd)
            if (isOnlyWhitespace(a)) {
              continue
            }
            var s = Math.abs(n.indent - t)
            e[s] = ~~e[s] + 1
            t = n.indent
          }
          var u = -1
          var l = 2
          for (var o = 1; o < e.length; o += 1) {
            if (f.call(e, o) && e[o] > u) {
              u = e[o]
              l = o
            }
          }
          return (this.cachedTabWidth = l)
        }
        Lines.prototype.startsWithComment = function () {
          if (this.infos.length === 0) {
            return false
          }
          var e = this.infos[0],
            t = e.sliceStart,
            r = e.sliceEnd,
            i = e.line.slice(t, r).trim()
          return (
            i.length === 0 || i.slice(0, 2) === '//' || i.slice(0, 2) === '/*'
          )
        }
        Lines.prototype.isOnlyWhitespace = function () {
          return isOnlyWhitespace(this.toString())
        }
        Lines.prototype.isPrecededOnlyByWhitespace = function (e) {
          var t = this.infos[e.line - 1]
          var r = Math.max(t.indent, 0)
          var i = e.column - r
          if (i <= 0) {
            return true
          }
          var n = t.sliceStart
          var a = Math.min(n + i, t.sliceEnd)
          var s = t.line.slice(n, a)
          return isOnlyWhitespace(s)
        }
        Lines.prototype.getLineLength = function (e) {
          var t = this.infos[e - 1]
          return this.getIndentAt(e) + t.sliceEnd - t.sliceStart
        }
        Lines.prototype.nextPos = function (e, t) {
          if (t === void 0) {
            t = false
          }
          var r = Math.max(e.line, 0),
            i = Math.max(e.column, 0)
          if (i < this.getLineLength(r)) {
            e.column += 1
            return t ? !!this.skipSpaces(e, false, true) : true
          }
          if (r < this.length) {
            e.line += 1
            e.column = 0
            return t ? !!this.skipSpaces(e, false, true) : true
          }
          return false
        }
        Lines.prototype.prevPos = function (e, t) {
          if (t === void 0) {
            t = false
          }
          var r = e.line,
            i = e.column
          if (i < 1) {
            r -= 1
            if (r < 1) return false
            i = this.getLineLength(r)
          } else {
            i = Math.min(i - 1, this.getLineLength(r))
          }
          e.line = r
          e.column = i
          return t ? !!this.skipSpaces(e, true, true) : true
        }
        Lines.prototype.firstPos = function () {
          return { line: 1, column: 0 }
        }
        Lines.prototype.lastPos = function () {
          return { line: this.length, column: this.getLineLength(this.length) }
        }
        Lines.prototype.skipSpaces = function (e, t, r) {
          if (t === void 0) {
            t = false
          }
          if (r === void 0) {
            r = false
          }
          if (e) {
            e = r ? e : { line: e.line, column: e.column }
          } else if (t) {
            e = this.lastPos()
          } else {
            e = this.firstPos()
          }
          if (t) {
            while (this.prevPos(e)) {
              if (!isOnlyWhitespace(this.charAt(e)) && this.nextPos(e)) {
                return e
              }
            }
            return null
          } else {
            while (isOnlyWhitespace(this.charAt(e))) {
              if (!this.nextPos(e)) {
                return null
              }
            }
            return e
          }
        }
        Lines.prototype.trimLeft = function () {
          var e = this.skipSpaces(this.firstPos(), false, true)
          return e ? this.slice(e) : v
        }
        Lines.prototype.trimRight = function () {
          var e = this.skipSpaces(this.lastPos(), true, true)
          return e ? this.slice(this.firstPos(), e) : v
        }
        Lines.prototype.trim = function () {
          var e = this.skipSpaces(this.firstPos(), false, true)
          if (e === null) {
            return v
          }
          var t = this.skipSpaces(this.lastPos(), true, true)
          if (t === null) {
            return v
          }
          return this.slice(e, t)
        }
        Lines.prototype.eachPos = function (e, t, r) {
          if (t === void 0) {
            t = this.firstPos()
          }
          if (r === void 0) {
            r = false
          }
          var i = this.firstPos()
          if (t) {
            ;(i.line = t.line), (i.column = t.column)
          }
          if (r && !this.skipSpaces(i, false, true)) {
            return
          }
          do {
            e.call(this, i)
          } while (this.nextPos(i, r))
        }
        Lines.prototype.bootstrapSlice = function (e, t) {
          var r = this.toString()
            .split(m)
            .slice(e.line - 1, t.line)
          if (r.length > 0) {
            r.push(r.pop().slice(0, t.column))
            r[0] = r[0].slice(e.column)
          }
          return fromString(r.join('\n'))
        }
        Lines.prototype.slice = function (e, t) {
          if (!t) {
            if (!e) {
              return this
            }
            t = this.lastPos()
          }
          if (!e) {
            throw new Error('cannot slice with end but not start')
          }
          var r = this.infos.slice(e.line - 1, t.line)
          if (e.line === t.line) {
            r[0] = sliceInfo(r[0], e.column, t.column)
          } else {
            a.default.ok(e.line < t.line)
            r[0] = sliceInfo(r[0], e.column)
            r.push(sliceInfo(r.pop(), 0, t.column))
          }
          var i = new Lines(r)
          if (this.mappings.length > 0) {
            var n = i.mappings
            a.default.strictEqual(n.length, 0)
            this.mappings.forEach(function (r) {
              var i = r.slice(this, e, t)
              if (i) {
                n.push(i)
              }
            }, this)
          }
          return i
        }
        Lines.prototype.bootstrapSliceString = function (e, t, r) {
          return this.slice(e, t).toString(r)
        }
        Lines.prototype.sliceString = function (e, t, r) {
          if (e === void 0) {
            e = this.firstPos()
          }
          if (t === void 0) {
            t = this.lastPos()
          }
          r = u.normalize(r)
          var i = []
          var n = r.tabWidth,
            a = n === void 0 ? 2 : n
          for (var s = e.line; s <= t.line; ++s) {
            var l = this.infos[s - 1]
            if (s === e.line) {
              if (s === t.line) {
                l = sliceInfo(l, e.column, t.column)
              } else {
                l = sliceInfo(l, e.column)
              }
            } else if (s === t.line) {
              l = sliceInfo(l, 0, t.column)
            }
            var o = Math.max(l.indent, 0)
            var c = l.line.slice(0, l.sliceStart)
            if (
              r.reuseWhitespace &&
              isOnlyWhitespace(c) &&
              countSpaces(c, r.tabWidth) === o
            ) {
              i.push(l.line.slice(0, l.sliceEnd))
              continue
            }
            var h = 0
            var f = o
            if (r.useTabs) {
              h = Math.floor(o / a)
              f -= h * a
            }
            var p = ''
            if (h > 0) {
              p += new Array(h + 1).join('\t')
            }
            if (f > 0) {
              p += new Array(f + 1).join(' ')
            }
            p += l.line.slice(l.sliceStart, l.sliceEnd)
            i.push(p)
          }
          return i.join(r.lineTerminator)
        }
        Lines.prototype.isEmpty = function () {
          return this.length < 2 && this.getLineLength(1) < 1
        }
        Lines.prototype.join = function (e) {
          var t = this
          var r = []
          var n = []
          var a
          function appendLines(e) {
            if (e === null) {
              return
            }
            if (a) {
              var t = e.infos[0]
              var s = new Array(t.indent + 1).join(' ')
              var u = r.length
              var l = Math.max(a.indent, 0) + a.sliceEnd - a.sliceStart
              a.line =
                a.line.slice(0, a.sliceEnd) +
                s +
                t.line.slice(t.sliceStart, t.sliceEnd)
              a.locked = a.locked || t.locked
              a.sliceEnd = a.line.length
              if (e.mappings.length > 0) {
                e.mappings.forEach(function (e) {
                  n.push(e.add(u, l))
                })
              }
            } else if (e.mappings.length > 0) {
              n.push.apply(n, e.mappings)
            }
            e.infos.forEach(function (e, t) {
              if (!a || t > 0) {
                a = i({}, e)
                r.push(a)
              }
            })
          }
          function appendWithSeparator(e, r) {
            if (r > 0) appendLines(t)
            appendLines(e)
          }
          e.map(function (e) {
            var t = fromString(e)
            if (t.isEmpty()) return null
            return t
          }).forEach(function (e, r) {
            if (t.isEmpty()) {
              appendLines(e)
            } else {
              appendWithSeparator(e, r)
            }
          })
          if (r.length < 1) return v
          var s = new Lines(r)
          s.mappings = n
          return s
        }
        Lines.prototype.concat = function () {
          var e = []
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t]
          }
          var r = [this]
          r.push.apply(r, e)
          a.default.strictEqual(r.length, e.length + 1)
          return v.join(r)
        }
        return Lines
      })()
      t.Lines = c
      var h = {}
      var f = h.hasOwnProperty
      var p = 10
      function countSpaces(e, t) {
        var r = 0
        var i = e.length
        for (var n = 0; n < i; ++n) {
          switch (e.charCodeAt(n)) {
            case 9:
              a.default.strictEqual(typeof t, 'number')
              a.default.ok(t > 0)
              var s = Math.ceil(r / t) * t
              if (s === r) {
                r += t
              } else {
                r = s
              }
              break
            case 11:
            case 12:
            case 13:
            case 65279:
              break
            case 32:
            default:
              r += 1
              break
          }
        }
        return r
      }
      t.countSpaces = countSpaces
      var d = /^\s*/
      var m = /\u000D\u000A|\u000D(?!\u000A)|\u000A|\u2028|\u2029/
      function fromString(e, t) {
        if (e instanceof c) return e
        e += ''
        var r = t && t.tabWidth
        var i = e.indexOf('\t') < 0
        var n = !t && i && e.length <= p
        a.default.ok(
          r || i,
          'No tab width specified but encountered tabs in string\n' + e
        )
        if (n && f.call(h, e)) return h[e]
        var s = new c(
          e.split(m).map(function (e) {
            var t = d.exec(e)[0]
            return {
              line: e,
              indent: countSpaces(t, r),
              locked: false,
              sliceStart: t.length,
              sliceEnd: e.length,
            }
          }),
          u.normalize(t).sourceFileName
        )
        if (n) h[e] = s
        return s
      }
      t.fromString = fromString
      function isOnlyWhitespace(e) {
        return !/\S/.test(e)
      }
      function sliceInfo(e, t, r) {
        var i = e.sliceStart
        var n = e.sliceEnd
        var s = Math.max(e.indent, 0)
        var u = s + n - i
        if (typeof r === 'undefined') {
          r = u
        }
        t = Math.max(t, 0)
        r = Math.min(r, u)
        r = Math.max(r, t)
        if (r < s) {
          s = r
          n = i
        } else {
          n -= u - r
        }
        u = r
        u -= t
        if (t < s) {
          s -= t
        } else {
          t -= s
          s = 0
          i += t
        }
        a.default.ok(s >= 0)
        a.default.ok(i <= n)
        a.default.strictEqual(u, s + n - i)
        if (e.indent === s && e.sliceStart === i && e.sliceEnd === n) {
          return e
        }
        return {
          line: e.line,
          indent: s,
          locked: false,
          sliceStart: i,
          sliceEnd: n,
        }
      }
      function concat(e) {
        return v.join(e)
      }
      t.concat = concat
      var v = fromString('')
    },
    788: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var n = i(r(357))
      var a = r(721)
      var s = (function () {
        function Mapping(e, t, r) {
          if (r === void 0) {
            r = t
          }
          this.sourceLines = e
          this.sourceLoc = t
          this.targetLoc = r
        }
        Mapping.prototype.slice = function (e, t, r) {
          if (r === void 0) {
            r = e.lastPos()
          }
          var i = this.sourceLines
          var s = this.sourceLoc
          var u = this.targetLoc
          function skip(a) {
            var l = s[a]
            var o = u[a]
            var c = t
            if (a === 'end') {
              c = r
            } else {
              n.default.strictEqual(a, 'start')
            }
            return skipChars(i, l, e, o, c)
          }
          if (a.comparePos(t, u.start) <= 0) {
            if (a.comparePos(u.end, r) <= 0) {
              u = {
                start: subtractPos(u.start, t.line, t.column),
                end: subtractPos(u.end, t.line, t.column),
              }
            } else if (a.comparePos(r, u.start) <= 0) {
              return null
            } else {
              s = { start: s.start, end: skip('end') }
              u = {
                start: subtractPos(u.start, t.line, t.column),
                end: subtractPos(r, t.line, t.column),
              }
            }
          } else {
            if (a.comparePos(u.end, t) <= 0) {
              return null
            }
            if (a.comparePos(u.end, r) <= 0) {
              s = { start: skip('start'), end: s.end }
              u = {
                start: { line: 1, column: 0 },
                end: subtractPos(u.end, t.line, t.column),
              }
            } else {
              s = { start: skip('start'), end: skip('end') }
              u = {
                start: { line: 1, column: 0 },
                end: subtractPos(r, t.line, t.column),
              }
            }
          }
          return new Mapping(this.sourceLines, s, u)
        }
        Mapping.prototype.add = function (e, t) {
          return new Mapping(this.sourceLines, this.sourceLoc, {
            start: addPos(this.targetLoc.start, e, t),
            end: addPos(this.targetLoc.end, e, t),
          })
        }
        Mapping.prototype.subtract = function (e, t) {
          return new Mapping(this.sourceLines, this.sourceLoc, {
            start: subtractPos(this.targetLoc.start, e, t),
            end: subtractPos(this.targetLoc.end, e, t),
          })
        }
        Mapping.prototype.indent = function (e, t, r) {
          if (t === void 0) {
            t = false
          }
          if (r === void 0) {
            r = false
          }
          if (e === 0) {
            return this
          }
          var i = this.targetLoc
          var n = i.start.line
          var a = i.end.line
          if (t && n === 1 && a === 1) {
            return this
          }
          i = { start: i.start, end: i.end }
          if (!t || n > 1) {
            var s = i.start.column + e
            i.start = { line: n, column: r ? Math.max(0, s) : s }
          }
          if (!t || a > 1) {
            var u = i.end.column + e
            i.end = { line: a, column: r ? Math.max(0, u) : u }
          }
          return new Mapping(this.sourceLines, this.sourceLoc, i)
        }
        return Mapping
      })()
      t.default = s
      function addPos(e, t, r) {
        return {
          line: e.line + t - 1,
          column: e.line === 1 ? e.column + r : e.column,
        }
      }
      function subtractPos(e, t, r) {
        return {
          line: e.line - t + 1,
          column: e.line === t ? e.column - r : e.column,
        }
      }
      function skipChars(e, t, r, i, s) {
        var u = a.comparePos(i, s)
        if (u === 0) {
          return t
        }
        if (u < 0) {
          var l = e.skipSpaces(t) || e.lastPos()
          var o = r.skipSpaces(i) || r.lastPos()
          var c = s.line - o.line
          l.line += c
          o.line += c
          if (c > 0) {
            l.column = 0
            o.column = 0
          } else {
            n.default.strictEqual(c, 0)
          }
          while (a.comparePos(o, s) < 0 && r.nextPos(o, true)) {
            n.default.ok(e.nextPos(l, true))
            n.default.strictEqual(e.charAt(l), r.charAt(o))
          }
        } else {
          var l = e.skipSpaces(t, true) || e.firstPos()
          var o = r.skipSpaces(i, true) || r.firstPos()
          var c = s.line - o.line
          l.line += c
          o.line += c
          if (c < 0) {
            l.column = e.getLineLength(l.line)
            o.column = r.getLineLength(o.line)
          } else {
            n.default.strictEqual(c, 0)
          }
          while (a.comparePos(s, o) < 0 && r.prevPos(o, true)) {
            n.default.ok(e.prevPos(l, true))
            n.default.strictEqual(e.charAt(l), r.charAt(o))
          }
        }
        return l
      }
    },
    309: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: true })
      var i = {
          parser: r(685),
          tabWidth: 4,
          useTabs: false,
          reuseWhitespace: true,
          lineTerminator: r(87).EOL || '\n',
          wrapColumn: 74,
          sourceFileName: null,
          sourceMapName: null,
          sourceRoot: null,
          inputSourceMap: null,
          range: false,
          tolerant: true,
          quote: null,
          trailingComma: false,
          arrayBracketSpacing: false,
          objectCurlySpacing: true,
          arrowParensAlways: false,
          flowObjectCommas: true,
          tokens: true,
        },
        n = i.hasOwnProperty
      function normalize(e) {
        var t = e || i
        function get(e) {
          return n.call(t, e) ? t[e] : i[e]
        }
        return {
          tabWidth: +get('tabWidth'),
          useTabs: !!get('useTabs'),
          reuseWhitespace: !!get('reuseWhitespace'),
          lineTerminator: get('lineTerminator'),
          wrapColumn: Math.max(get('wrapColumn'), 0),
          sourceFileName: get('sourceFileName'),
          sourceMapName: get('sourceMapName'),
          sourceRoot: get('sourceRoot'),
          inputSourceMap: get('inputSourceMap'),
          parser: get('esprima') || get('parser'),
          range: get('range'),
          tolerant: get('tolerant'),
          quote: get('quote'),
          trailingComma: get('trailingComma'),
          arrayBracketSpacing: get('arrayBracketSpacing'),
          objectCurlySpacing: get('objectCurlySpacing'),
          arrowParensAlways: get('arrowParensAlways'),
          flowObjectCommas: get('flowObjectCommas'),
          tokens: !!get('tokens'),
        }
      }
      t.normalize = normalize
    },
    382: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (e != null)
            for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r]
          t['default'] = e
          return t
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var a = i(r(357))
      var s = n(r(593))
      var u = s.builders
      var l = s.builtInTypes.object
      var o = s.builtInTypes.array
      var c = r(309)
      var h = r(687)
      var f = r(998)
      var p = n(r(721))
      function parse(e, t) {
        t = c.normalize(t)
        var i = h.fromString(e, t)
        var n = i.toString({
          tabWidth: t.tabWidth,
          reuseWhitespace: false,
          useTabs: false,
        })
        var a = []
        var s = t.parser.parse(n, {
          jsx: true,
          loc: true,
          locations: true,
          range: t.range,
          comment: true,
          onComment: a,
          tolerant: p.getOption(t, 'tolerant', true),
          ecmaVersion: 6,
          sourceType: p.getOption(t, 'sourceType', 'module'),
        })
        var l = Array.isArray(s.tokens)
          ? s.tokens
          : r(609).tokenize(n, { loc: true })
        delete s.tokens
        l.forEach(function (e) {
          if (typeof e.value !== 'string') {
            e.value = i.sliceString(e.loc.start, e.loc.end)
          }
        })
        if (Array.isArray(s.comments)) {
          a = s.comments
          delete s.comments
        }
        if (s.loc) {
          p.fixFaultyLocations(s, i)
        } else {
          s.loc = { start: i.firstPos(), end: i.lastPos() }
        }
        s.loc.lines = i
        s.loc.indent = 0
        var o
        var m
        if (s.type === 'Program') {
          m = s
          o = u.file(s, t.sourceFileName || null)
          o.loc = { start: i.firstPos(), end: i.lastPos(), lines: i, indent: 0 }
        } else if (s.type === 'File') {
          o = s
          m = o.program
        }
        if (t.tokens) {
          o.tokens = l
        }
        var v = p.getTrueLoc(
          { type: m.type, loc: m.loc, body: [], comments: a },
          i
        )
        m.loc.start = v.start
        m.loc.end = v.end
        f.attach(a, m.body.length ? o.program : o, i)
        return new d(i, l).copy(o)
      }
      t.parse = parse
      var d = function TreeCopier(e, t) {
        a.default.ok(this instanceof TreeCopier)
        this.lines = e
        this.tokens = t
        this.startTokenIndex = 0
        this.endTokenIndex = t.length
        this.indent = 0
        this.seen = new Map()
      }
      var m = d.prototype
      m.copy = function (e) {
        if (this.seen.has(e)) {
          return this.seen.get(e)
        }
        if (o.check(e)) {
          var t = new Array(e.length)
          this.seen.set(e, t)
          e.forEach(function (e, r) {
            t[r] = this.copy(e)
          }, this)
          return t
        }
        if (!l.check(e)) {
          return e
        }
        p.fixFaultyLocations(e, this.lines)
        var t = Object.create(Object.getPrototypeOf(e), {
          original: {
            value: e,
            configurable: false,
            enumerable: false,
            writable: true,
          },
        })
        this.seen.set(e, t)
        var r = e.loc
        var i = this.indent
        var n = i
        var a = this.startTokenIndex
        var s = this.endTokenIndex
        if (r) {
          if (
            e.type === 'Block' ||
            e.type === 'Line' ||
            e.type === 'CommentBlock' ||
            e.type === 'CommentLine' ||
            this.lines.isPrecededOnlyByWhitespace(r.start)
          ) {
            n = this.indent = r.start.column
          }
          r.lines = this.lines
          r.tokens = this.tokens
          r.indent = n
          this.findTokenRange(r)
        }
        var u = Object.keys(e)
        var c = u.length
        for (var h = 0; h < c; ++h) {
          var f = u[h]
          if (f === 'loc') {
            t[f] = e[f]
          } else if (f === 'tokens' && e.type === 'File') {
            t[f] = e[f]
          } else {
            t[f] = this.copy(e[f])
          }
        }
        this.indent = i
        this.startTokenIndex = a
        this.endTokenIndex = s
        return t
      }
      m.findTokenRange = function (e) {
        while (this.startTokenIndex > 0) {
          var t = e.tokens[this.startTokenIndex]
          if (p.comparePos(e.start, t.loc.start) < 0) {
            --this.startTokenIndex
          } else break
        }
        while (this.endTokenIndex < e.tokens.length) {
          var t = e.tokens[this.endTokenIndex]
          if (p.comparePos(t.loc.end, e.end) < 0) {
            ++this.endTokenIndex
          } else break
        }
        while (this.startTokenIndex < this.endTokenIndex) {
          var t = e.tokens[this.startTokenIndex]
          if (p.comparePos(t.loc.start, e.start) < 0) {
            ++this.startTokenIndex
          } else break
        }
        e.start.token = this.startTokenIndex
        while (this.endTokenIndex > this.startTokenIndex) {
          var t = e.tokens[this.endTokenIndex - 1]
          if (p.comparePos(e.end, t.loc.end) < 0) {
            --this.endTokenIndex
          } else break
        }
        e.end.token = this.endTokenIndex
      }
    },
    844: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (e != null)
            for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r]
          t['default'] = e
          return t
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var a = i(r(357))
      var s = n(r(687))
      var u = n(r(593))
      var l = u.namedTypes.Printable
      var o = u.namedTypes.Expression
      var c = u.namedTypes.ReturnStatement
      var h = u.namedTypes.SourceLocation
      var f = r(721)
      var p = i(r(236))
      var d = u.builtInTypes.object
      var m = u.builtInTypes.array
      var v = u.builtInTypes.string
      var y = /[0-9a-z_$]/i
      var x = function Patcher(e) {
        a.default.ok(this instanceof Patcher)
        a.default.ok(e instanceof s.Lines)
        var t = this,
          r = []
        t.replace = function (e, t) {
          if (v.check(t)) t = s.fromString(t)
          r.push({ lines: t, start: e.start, end: e.end })
        }
        t.get = function (t) {
          t = t || {
            start: { line: 1, column: 0 },
            end: { line: e.length, column: e.getLineLength(e.length) },
          }
          var i = t.start,
            n = []
          function pushSlice(t, r) {
            a.default.ok(f.comparePos(t, r) <= 0)
            n.push(e.slice(t, r))
          }
          r.sort(function (e, t) {
            return f.comparePos(e.start, t.start)
          }).forEach(function (e) {
            if (f.comparePos(i, e.start) > 0) {
            } else {
              pushSlice(i, e.start)
              n.push(e.lines)
              i = e.end
            }
          })
          pushSlice(i, t.end)
          return s.concat(n)
        }
      }
      t.Patcher = x
      var E = x.prototype
      E.tryToReprintComments = function (e, t, r) {
        var i = this
        if (!e.comments && !t.comments) {
          return true
        }
        var n = p.default.from(e)
        var s = p.default.from(t)
        n.stack.push('comments', getSurroundingComments(e))
        s.stack.push('comments', getSurroundingComments(t))
        var u = []
        var l = findArrayReprints(n, s, u)
        if (l && u.length > 0) {
          u.forEach(function (e) {
            var t = e.oldPath.getValue()
            a.default.ok(t.leading || t.trailing)
            i.replace(t.loc, r(e.newPath).indentTail(t.loc.indent))
          })
        }
        return l
      }
      function getSurroundingComments(e) {
        var t = []
        if (e.comments && e.comments.length > 0) {
          e.comments.forEach(function (e) {
            if (e.leading || e.trailing) {
              t.push(e)
            }
          })
        }
        return t
      }
      E.deleteComments = function (e) {
        if (!e.comments) {
          return
        }
        var t = this
        e.comments.forEach(function (r) {
          if (r.leading) {
            t.replace(
              {
                start: r.loc.start,
                end: e.loc.lines.skipSpaces(r.loc.end, false, false),
              },
              ''
            )
          } else if (r.trailing) {
            t.replace(
              {
                start: e.loc.lines.skipSpaces(r.loc.start, true, false),
                end: r.loc.end,
              },
              ''
            )
          }
        })
      }
      function getReprinter(e) {
        a.default.ok(e instanceof p.default)
        var t = e.getValue()
        if (!l.check(t)) return
        var r = t.original
        var i = r && r.loc
        var n = i && i.lines
        var u = []
        if (!n || !findReprints(e, u)) return
        return function (t) {
          var a = new x(n)
          u.forEach(function (e) {
            var r = e.newPath.getValue()
            var i = e.oldPath.getValue()
            h.assert(i.loc, true)
            var u = !a.tryToReprintComments(r, i, t)
            if (u) {
              a.deleteComments(i)
            }
            var l = t(e.newPath, {
              includeComments: u,
              avoidRootParens: i.type === r.type && e.oldPath.hasParens(),
            }).indentTail(i.loc.indent)
            var o = needsLeadingSpace(n, i.loc, l)
            var c = needsTrailingSpace(n, i.loc, l)
            if (o || c) {
              var f = []
              o && f.push(' ')
              f.push(l)
              c && f.push(' ')
              l = s.concat(f)
            }
            a.replace(i.loc, l)
          })
          var l = a.get(i).indentTail(-r.loc.indent)
          if (e.needsParens()) {
            return s.concat(['(', l, ')'])
          }
          return l
        }
      }
      t.getReprinter = getReprinter
      function needsLeadingSpace(e, t, r) {
        var i = f.copyPos(t.start)
        var n = e.prevPos(i) && e.charAt(i)
        var a = r.charAt(r.firstPos())
        return n && y.test(n) && a && y.test(a)
      }
      function needsTrailingSpace(e, t, r) {
        var i = e.charAt(t.end)
        var n = r.lastPos()
        var a = r.prevPos(n) && r.charAt(n)
        return a && y.test(a) && i && y.test(i)
      }
      function findReprints(e, t) {
        var r = e.getValue()
        l.assert(r)
        var i = r.original
        l.assert(i)
        a.default.deepEqual(t, [])
        if (r.type !== i.type) {
          return false
        }
        var n = new p.default(i)
        var s = findChildReprints(e, n, t)
        if (!s) {
          t.length = 0
        }
        return s
      }
      function findAnyReprints(e, t, r) {
        var i = e.getValue()
        var n = t.getValue()
        if (i === n) return true
        if (m.check(i)) return findArrayReprints(e, t, r)
        if (d.check(i)) return findObjectReprints(e, t, r)
        return false
      }
      function findArrayReprints(e, t, r) {
        var i = e.getValue()
        var n = t.getValue()
        if (i === n || e.valueIsDuplicate() || t.valueIsDuplicate()) {
          return true
        }
        m.assert(i)
        var a = i.length
        if (!(m.check(n) && n.length === a)) return false
        for (var s = 0; s < a; ++s) {
          e.stack.push(s, i[s])
          t.stack.push(s, n[s])
          var u = findAnyReprints(e, t, r)
          e.stack.length -= 2
          t.stack.length -= 2
          if (!u) {
            return false
          }
        }
        return true
      }
      function findObjectReprints(e, t, r) {
        var i = e.getValue()
        d.assert(i)
        if (i.original === null) {
          return false
        }
        var n = t.getValue()
        if (!d.check(n)) return false
        if (i === n || e.valueIsDuplicate() || t.valueIsDuplicate()) {
          return true
        }
        if (l.check(i)) {
          if (!l.check(n)) {
            return false
          }
          if (i.type === n.type) {
            var a = []
            if (findChildReprints(e, t, a)) {
              r.push.apply(r, a)
            } else if (n.loc) {
              r.push({ oldPath: t.copy(), newPath: e.copy() })
            } else {
              return false
            }
            return true
          }
          if (o.check(i) && o.check(n) && n.loc) {
            r.push({ oldPath: t.copy(), newPath: e.copy() })
            return true
          }
          return false
        }
        return findChildReprints(e, t, r)
      }
      function findChildReprints(e, t, r) {
        var i = e.getValue()
        var n = t.getValue()
        d.assert(i)
        d.assert(n)
        if (i.original === null) {
          return false
        }
        if (e.needsParens() && !t.hasParens()) {
          return false
        }
        var a = f.getUnionOfKeys(n, i)
        if (n.type === 'File' || i.type === 'File') {
          delete a.tokens
        }
        delete a.loc
        var s = r.length
        for (var l in a) {
          if (l.charAt(0) === '_') {
            continue
          }
          e.stack.push(l, u.getFieldValue(i, l))
          t.stack.push(l, u.getFieldValue(n, l))
          var o = findAnyReprints(e, t, r)
          e.stack.length -= 2
          t.stack.length -= 2
          if (!o) {
            return false
          }
        }
        if (c.check(e.getNode()) && r.length > s) {
          return false
        }
        return true
      }
    },
    413: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (e != null)
            for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r]
          t['default'] = e
          return t
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var a = i(r(357))
      var s = r(998)
      var u = r(687)
      var l = r(309)
      var o = r(844)
      var c = n(r(593))
      var h = c.namedTypes
      var f = c.builtInTypes.string
      var p = c.builtInTypes.object
      var d = i(r(236))
      var m = n(r(721))
      var v = function PrintResult(e, t) {
        a.default.ok(this instanceof PrintResult)
        f.assert(e)
        this.code = e
        if (t) {
          p.assert(t)
          this.map = t
        }
      }
      var y = v.prototype
      var x = false
      y.toString = function () {
        if (!x) {
          console.warn(
            'Deprecation warning: recast.print now returns an object with ' +
              'a .code property. You appear to be treating the object as a ' +
              'string, which might still work but is strongly discouraged.'
          )
          x = true
        }
        return this.code
      }
      var E = new v('')
      var S = function Printer(e) {
        a.default.ok(this instanceof Printer)
        var t = e && e.tabWidth
        e = l.normalize(e)
        e.sourceFileName = null
        function makePrintFunctionWith(e, t) {
          e = Object.assign({}, e, t)
          return function (t) {
            return print(t, e)
          }
        }
        function print(r, i) {
          a.default.ok(r instanceof d.default)
          i = i || {}
          if (i.includeComments) {
            return s.printComments(
              r,
              makePrintFunctionWith(i, { includeComments: false })
            )
          }
          var n = e.tabWidth
          if (!t) {
            var u = r.getNode().loc
            if (u && u.lines && u.lines.guessTabWidth) {
              e.tabWidth = u.lines.guessTabWidth()
            }
          }
          var l = o.getReprinter(r)
          var c = l
            ? l(print)
            : genericPrint(
                r,
                e,
                i,
                makePrintFunctionWith(i, {
                  includeComments: true,
                  avoidRootParens: false,
                })
              )
          e.tabWidth = n
          return c
        }
        this.print = function (t) {
          if (!t) {
            return E
          }
          var r = print(d.default.from(t), {
            includeComments: true,
            avoidRootParens: false,
          })
          return new v(
            r.toString(e),
            m.composeSourceMaps(
              e.inputSourceMap,
              r.getSourceMap(e.sourceMapName, e.sourceRoot)
            )
          )
        }
        this.printGenerically = function (t) {
          if (!t) {
            return E
          }
          function printGenerically(t) {
            return s.printComments(t, function (t) {
              return genericPrint(
                t,
                e,
                { includeComments: true, avoidRootParens: false },
                printGenerically
              )
            })
          }
          var r = d.default.from(t)
          var i = e.reuseWhitespace
          e.reuseWhitespace = false
          var n = new v(printGenerically(r).toString(e))
          e.reuseWhitespace = i
          return n
        }
      }
      t.Printer = S
      function genericPrint(e, t, r, i) {
        a.default.ok(e instanceof d.default)
        var n = e.getValue()
        var s = []
        var l = genericPrintNoParens(e, t, i)
        if (!n || l.isEmpty()) {
          return l
        }
        var o = false
        var c = printDecorators(e, i)
        if (c.isEmpty()) {
          if (!r.avoidRootParens) {
            o = e.needsParens()
          }
        } else {
          s.push(c)
        }
        if (o) {
          s.unshift('(')
        }
        s.push(l)
        if (o) {
          s.push(')')
        }
        return u.concat(s)
      }
      function genericPrintNoParens(e, t, r) {
        var i = e.getValue()
        if (!i) {
          return u.fromString('')
        }
        if (typeof i === 'string') {
          return u.fromString(i, t)
        }
        h.Printable.assert(i)
        var n = []
        switch (i.type) {
          case 'File':
            return e.call(r, 'program')
          case 'Program':
            if (i.directives) {
              e.each(function (e) {
                n.push(r(e), ';\n')
              }, 'directives')
            }
            if (i.interpreter) {
              n.push(e.call(r, 'interpreter'))
            }
            n.push(
              e.call(function (e) {
                return printStatementSequence(e, t, r)
              }, 'body')
            )
            return u.concat(n)
          case 'Noop':
          case 'EmptyStatement':
            return u.fromString('')
          case 'ExpressionStatement':
            return u.concat([e.call(r, 'expression'), ';'])
          case 'ParenthesizedExpression':
            return u.concat(['(', e.call(r, 'expression'), ')'])
          case 'BinaryExpression':
          case 'LogicalExpression':
          case 'AssignmentExpression':
            return u
              .fromString(' ')
              .join([e.call(r, 'left'), i.operator, e.call(r, 'right')])
          case 'AssignmentPattern':
            return u.concat([e.call(r, 'left'), ' = ', e.call(r, 'right')])
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            n.push(e.call(r, 'object'))
            var s = e.call(r, 'property')
            var l = i.type === 'OptionalMemberExpression' && i.optional
            if (i.computed) {
              n.push(l ? '?.[' : '[', s, ']')
            } else {
              n.push(l ? '?.' : '.', s)
            }
            return u.concat(n)
          case 'MetaProperty':
            return u.concat([e.call(r, 'meta'), '.', e.call(r, 'property')])
          case 'BindExpression':
            if (i.object) {
              n.push(e.call(r, 'object'))
            }
            n.push('::', e.call(r, 'callee'))
            return u.concat(n)
          case 'Path':
            return u.fromString('.').join(i.body)
          case 'Identifier':
            return u.concat([
              u.fromString(i.name, t),
              i.optional ? '?' : '',
              e.call(r, 'typeAnnotation'),
            ])
          case 'SpreadElement':
          case 'SpreadElementPattern':
          case 'RestProperty':
          case 'SpreadProperty':
          case 'SpreadPropertyPattern':
          case 'ObjectTypeSpreadProperty':
          case 'RestElement':
            return u.concat([
              '...',
              e.call(r, 'argument'),
              e.call(r, 'typeAnnotation'),
            ])
          case 'FunctionDeclaration':
          case 'FunctionExpression':
          case 'TSDeclareFunction':
            if (i.declare) {
              n.push('declare ')
            }
            if (i.async) {
              n.push('async ')
            }
            n.push('function')
            if (i.generator) n.push('*')
            if (i.id) {
              n.push(' ', e.call(r, 'id'), e.call(r, 'typeParameters'))
            } else {
              if (i.typeParameters) {
                n.push(e.call(r, 'typeParameters'))
              }
            }
            n.push(
              '(',
              printFunctionParams(e, t, r),
              ')',
              e.call(r, 'returnType')
            )
            if (i.body) {
              n.push(' ', e.call(r, 'body'))
            }
            return u.concat(n)
          case 'ArrowFunctionExpression':
            if (i.async) {
              n.push('async ')
            }
            if (i.typeParameters) {
              n.push(e.call(r, 'typeParameters'))
            }
            if (
              !t.arrowParensAlways &&
              i.params.length === 1 &&
              !i.rest &&
              i.params[0].type === 'Identifier' &&
              !i.params[0].typeAnnotation &&
              !i.returnType
            ) {
              n.push(e.call(r, 'params', 0))
            } else {
              n.push(
                '(',
                printFunctionParams(e, t, r),
                ')',
                e.call(r, 'returnType')
              )
            }
            n.push(' => ', e.call(r, 'body'))
            return u.concat(n)
          case 'MethodDefinition':
            return printMethod(e, t, r)
          case 'YieldExpression':
            n.push('yield')
            if (i.delegate) n.push('*')
            if (i.argument) n.push(' ', e.call(r, 'argument'))
            return u.concat(n)
          case 'AwaitExpression':
            n.push('await')
            if (i.all) n.push('*')
            if (i.argument) n.push(' ', e.call(r, 'argument'))
            return u.concat(n)
          case 'ModuleDeclaration':
            n.push('module', e.call(r, 'id'))
            if (i.source) {
              a.default.ok(!i.body)
              n.push('from', e.call(r, 'source'))
            } else {
              n.push(e.call(r, 'body'))
            }
            return u.fromString(' ').join(n)
          case 'ImportSpecifier':
            if (i.importKind && i.importKind !== 'value') {
              n.push(i.importKind + ' ')
            }
            if (i.imported) {
              n.push(e.call(r, 'imported'))
              if (i.local && i.local.name !== i.imported.name) {
                n.push(' as ', e.call(r, 'local'))
              }
            } else if (i.id) {
              n.push(e.call(r, 'id'))
              if (i.name) {
                n.push(' as ', e.call(r, 'name'))
              }
            }
            return u.concat(n)
          case 'ExportSpecifier':
            if (i.local) {
              n.push(e.call(r, 'local'))
              if (i.exported && i.exported.name !== i.local.name) {
                n.push(' as ', e.call(r, 'exported'))
              }
            } else if (i.id) {
              n.push(e.call(r, 'id'))
              if (i.name) {
                n.push(' as ', e.call(r, 'name'))
              }
            }
            return u.concat(n)
          case 'ExportBatchSpecifier':
            return u.fromString('*')
          case 'ImportNamespaceSpecifier':
            n.push('* as ')
            if (i.local) {
              n.push(e.call(r, 'local'))
            } else if (i.id) {
              n.push(e.call(r, 'id'))
            }
            return u.concat(n)
          case 'ImportDefaultSpecifier':
            if (i.local) {
              return e.call(r, 'local')
            }
            return e.call(r, 'id')
          case 'TSExportAssignment':
            return u.concat(['export = ', e.call(r, 'expression')])
          case 'ExportDeclaration':
          case 'ExportDefaultDeclaration':
          case 'ExportNamedDeclaration':
            return printExportDeclaration(e, t, r)
          case 'ExportAllDeclaration':
            n.push('export *')
            if (i.exported) {
              n.push(' as ', e.call(r, 'exported'))
            }
            n.push(' from ', e.call(r, 'source'), ';')
            return u.concat(n)
          case 'TSNamespaceExportDeclaration':
            n.push('export as namespace ', e.call(r, 'id'))
            return maybeAddSemicolon(u.concat(n))
          case 'ExportNamespaceSpecifier':
            return u.concat(['* as ', e.call(r, 'exported')])
          case 'ExportDefaultSpecifier':
            return e.call(r, 'exported')
          case 'Import':
            return u.fromString('import', t)
          case 'ImportDeclaration': {
            n.push('import ')
            if (i.importKind && i.importKind !== 'value') {
              n.push(i.importKind + ' ')
            }
            if (i.specifiers && i.specifiers.length > 0) {
              var o = []
              var c = []
              e.each(function (e) {
                var t = e.getValue()
                if (t.type === 'ImportSpecifier') {
                  c.push(r(e))
                } else if (
                  t.type === 'ImportDefaultSpecifier' ||
                  t.type === 'ImportNamespaceSpecifier'
                ) {
                  o.push(r(e))
                }
              }, 'specifiers')
              o.forEach(function (e, t) {
                if (t > 0) {
                  n.push(', ')
                }
                n.push(e)
              })
              if (c.length > 0) {
                var f = u.fromString(', ').join(c)
                if (f.getLineLength(1) > t.wrapColumn) {
                  f = u.concat([
                    u.fromString(',\n').join(c).indent(t.tabWidth),
                    ',',
                  ])
                }
                if (o.length > 0) {
                  n.push(', ')
                }
                if (f.length > 1) {
                  n.push('{\n', f, '\n}')
                } else if (t.objectCurlySpacing) {
                  n.push('{ ', f, ' }')
                } else {
                  n.push('{', f, '}')
                }
              }
              n.push(' from ')
            }
            n.push(e.call(r, 'source'), ';')
            return u.concat(n)
          }
          case 'BlockStatement':
            var p = e.call(function (e) {
              return printStatementSequence(e, t, r)
            }, 'body')
            if (p.isEmpty()) {
              if (!i.directives || i.directives.length === 0) {
                return u.fromString('{}')
              }
            }
            n.push('{\n')
            if (i.directives) {
              e.each(function (e) {
                n.push(
                  maybeAddSemicolon(r(e).indent(t.tabWidth)),
                  i.directives.length > 1 || !p.isEmpty() ? '\n' : ''
                )
              }, 'directives')
            }
            n.push(p.indent(t.tabWidth))
            n.push('\n}')
            return u.concat(n)
          case 'ReturnStatement':
            n.push('return')
            if (i.argument) {
              var d = e.call(r, 'argument')
              if (
                d.startsWithComment() ||
                (d.length > 1 && h.JSXElement && h.JSXElement.check(i.argument))
              ) {
                n.push(' (\n', d.indent(t.tabWidth), '\n)')
              } else {
                n.push(' ', d)
              }
            }
            n.push(';')
            return u.concat(n)
          case 'CallExpression':
          case 'OptionalCallExpression':
            n.push(e.call(r, 'callee'))
            if (i.typeParameters) {
              n.push(e.call(r, 'typeParameters'))
            }
            if (i.typeArguments) {
              n.push(e.call(r, 'typeArguments'))
            }
            if (
              i.type === 'OptionalCallExpression' &&
              i.callee.type !== 'OptionalMemberExpression'
            ) {
              n.push('?.')
            }
            n.push(printArgumentsList(e, t, r))
            return u.concat(n)
          case 'ObjectExpression':
          case 'ObjectPattern':
          case 'ObjectTypeAnnotation':
            var v = false
            var y = i.type === 'ObjectTypeAnnotation'
            var x = t.flowObjectCommas ? ',' : y ? ';' : ','
            var E = []
            if (y) {
              E.push('indexers', 'callProperties')
              if (i.internalSlots != null) {
                E.push('internalSlots')
              }
            }
            E.push('properties')
            var S = 0
            E.forEach(function (e) {
              S += i[e].length
            })
            var D = (y && S === 1) || S === 0
            var b = i.exact ? '{|' : '{'
            var g = i.exact ? '|}' : '}'
            n.push(D ? b : b + '\n')
            var C = n.length - 1
            var A = 0
            E.forEach(function (i) {
              e.each(function (e) {
                var i = r(e)
                if (!D) {
                  i = i.indent(t.tabWidth)
                }
                var a = !y && i.length > 1
                if (a && v) {
                  n.push('\n')
                }
                n.push(i)
                if (A < S - 1) {
                  n.push(x + (a ? '\n\n' : '\n'))
                  v = !a
                } else if (S !== 1 && y) {
                  n.push(x)
                } else if (!D && m.isTrailingCommaEnabled(t, 'objects')) {
                  n.push(x)
                }
                A++
              }, i)
            })
            if (i.inexact) {
              var T = u.fromString('...', t)
              if (D) {
                if (S > 0) {
                  n.push(x, ' ')
                }
                n.push(T)
              } else {
                n.push('\n', T.indent(t.tabWidth))
              }
            }
            n.push(D ? g : '\n' + g)
            if (A !== 0 && D && t.objectCurlySpacing) {
              n[C] = b + ' '
              n[n.length - 1] = ' ' + g
            }
            if (i.typeAnnotation) {
              n.push(e.call(r, 'typeAnnotation'))
            }
            return u.concat(n)
          case 'PropertyPattern':
            return u.concat([e.call(r, 'key'), ': ', e.call(r, 'pattern')])
          case 'ObjectProperty':
          case 'Property':
            if (i.method || i.kind === 'get' || i.kind === 'set') {
              return printMethod(e, t, r)
            }
            if (i.shorthand && i.value.type === 'AssignmentPattern') {
              return e.call(r, 'value')
            }
            var F = e.call(r, 'key')
            if (i.computed) {
              n.push('[', F, ']')
            } else {
              n.push(F)
            }
            if (!i.shorthand) {
              n.push(': ', e.call(r, 'value'))
            }
            return u.concat(n)
          case 'ClassMethod':
          case 'ObjectMethod':
          case 'ClassPrivateMethod':
          case 'TSDeclareMethod':
            return printMethod(e, t, r)
          case 'PrivateName':
            return u.concat(['#', e.call(r, 'id')])
          case 'Decorator':
            return u.concat(['@', e.call(r, 'expression')])
          case 'ArrayExpression':
          case 'ArrayPattern':
            var w = i.elements,
              S = w.length
            var P = e.map(r, 'elements')
            var k = u.fromString(', ').join(P)
            var D = k.getLineLength(1) <= t.wrapColumn
            if (D) {
              if (t.arrayBracketSpacing) {
                n.push('[ ')
              } else {
                n.push('[')
              }
            } else {
              n.push('[\n')
            }
            e.each(function (e) {
              var r = e.getName()
              var i = e.getValue()
              if (!i) {
                n.push(',')
              } else {
                var a = P[r]
                if (D) {
                  if (r > 0) n.push(' ')
                } else {
                  a = a.indent(t.tabWidth)
                }
                n.push(a)
                if (r < S - 1 || (!D && m.isTrailingCommaEnabled(t, 'arrays')))
                  n.push(',')
                if (!D) n.push('\n')
              }
            }, 'elements')
            if (D && t.arrayBracketSpacing) {
              n.push(' ]')
            } else {
              n.push(']')
            }
            if (i.typeAnnotation) {
              n.push(e.call(r, 'typeAnnotation'))
            }
            return u.concat(n)
          case 'SequenceExpression':
            return u.fromString(', ').join(e.map(r, 'expressions'))
          case 'ThisExpression':
            return u.fromString('this')
          case 'Super':
            return u.fromString('super')
          case 'NullLiteral':
            return u.fromString('null')
          case 'RegExpLiteral':
            return u.fromString(i.extra.raw)
          case 'BigIntLiteral':
            return u.fromString(i.value + 'n')
          case 'NumericLiteral':
            if (
              i.extra &&
              typeof i.extra.raw === 'string' &&
              Number(i.extra.raw) === i.value
            ) {
              return u.fromString(i.extra.raw, t)
            }
            return u.fromString(i.value, t)
          case 'BooleanLiteral':
          case 'StringLiteral':
          case 'Literal':
            if (
              typeof i.value === 'number' &&
              typeof i.raw === 'string' &&
              Number(i.raw) === i.value
            ) {
              return u.fromString(i.raw, t)
            }
            if (typeof i.value !== 'string') {
              return u.fromString(i.value, t)
            }
            return u.fromString(nodeStr(i.value, t), t)
          case 'Directive':
            return e.call(r, 'value')
          case 'DirectiveLiteral':
            return u.fromString(nodeStr(i.value, t))
          case 'InterpreterDirective':
            return u.fromString('#!' + i.value + '\n', t)
          case 'ModuleSpecifier':
            if (i.local) {
              throw new Error(
                'The ESTree ModuleSpecifier type should be abstract'
              )
            }
            return u.fromString(nodeStr(i.value, t), t)
          case 'UnaryExpression':
            n.push(i.operator)
            if (/[a-z]$/.test(i.operator)) n.push(' ')
            n.push(e.call(r, 'argument'))
            return u.concat(n)
          case 'UpdateExpression':
            n.push(e.call(r, 'argument'), i.operator)
            if (i.prefix) n.reverse()
            return u.concat(n)
          case 'ConditionalExpression':
            return u.concat([
              e.call(r, 'test'),
              ' ? ',
              e.call(r, 'consequent'),
              ' : ',
              e.call(r, 'alternate'),
            ])
          case 'NewExpression':
            n.push('new ', e.call(r, 'callee'))
            if (i.typeParameters) {
              n.push(e.call(r, 'typeParameters'))
            }
            if (i.typeArguments) {
              n.push(e.call(r, 'typeArguments'))
            }
            var B = i.arguments
            if (B) {
              n.push(printArgumentsList(e, t, r))
            }
            return u.concat(n)
          case 'VariableDeclaration':
            if (i.declare) {
              n.push('declare ')
            }
            n.push(i.kind, ' ')
            var M = 0
            var P = e.map(function (e) {
              var t = r(e)
              M = Math.max(t.length, M)
              return t
            }, 'declarations')
            if (M === 1) {
              n.push(u.fromString(', ').join(P))
            } else if (P.length > 1) {
              n.push(
                u
                  .fromString(',\n')
                  .join(P)
                  .indentTail(i.kind.length + 1)
              )
            } else {
              n.push(P[0])
            }
            var I = e.getParentNode()
            if (
              !h.ForStatement.check(I) &&
              !h.ForInStatement.check(I) &&
              !(h.ForOfStatement && h.ForOfStatement.check(I)) &&
              !(h.ForAwaitStatement && h.ForAwaitStatement.check(I))
            ) {
              n.push(';')
            }
            return u.concat(n)
          case 'VariableDeclarator':
            return i.init
              ? u.fromString(' = ').join([e.call(r, 'id'), e.call(r, 'init')])
              : e.call(r, 'id')
          case 'WithStatement':
            return u.concat([
              'with (',
              e.call(r, 'object'),
              ') ',
              e.call(r, 'body'),
            ])
          case 'IfStatement':
            var N = adjustClause(e.call(r, 'consequent'), t)
            n.push('if (', e.call(r, 'test'), ')', N)
            if (i.alternate)
              n.push(
                endsWithBrace(N) ? ' else' : '\nelse',
                adjustClause(e.call(r, 'alternate'), t)
              )
            return u.concat(n)
          case 'ForStatement':
            var O = e.call(r, 'init'),
              j = O.length > 1 ? ';\n' : '; ',
              X = 'for (',
              J = u
                .fromString(j)
                .join([O, e.call(r, 'test'), e.call(r, 'update')])
                .indentTail(X.length),
              L = u.concat([X, J, ')']),
              z = adjustClause(e.call(r, 'body'), t)
            n.push(L)
            if (L.length > 1) {
              n.push('\n')
              z = z.trimLeft()
            }
            n.push(z)
            return u.concat(n)
          case 'WhileStatement':
            return u.concat([
              'while (',
              e.call(r, 'test'),
              ')',
              adjustClause(e.call(r, 'body'), t),
            ])
          case 'ForInStatement':
            return u.concat([
              i.each ? 'for each (' : 'for (',
              e.call(r, 'left'),
              ' in ',
              e.call(r, 'right'),
              ')',
              adjustClause(e.call(r, 'body'), t),
            ])
          case 'ForOfStatement':
          case 'ForAwaitStatement':
            n.push('for ')
            if (i.await || i.type === 'ForAwaitStatement') {
              n.push('await ')
            }
            n.push(
              '(',
              e.call(r, 'left'),
              ' of ',
              e.call(r, 'right'),
              ')',
              adjustClause(e.call(r, 'body'), t)
            )
            return u.concat(n)
          case 'DoWhileStatement':
            var U = u.concat(['do', adjustClause(e.call(r, 'body'), t)])
            n.push(U)
            if (endsWithBrace(U)) n.push(' while')
            else n.push('\nwhile')
            n.push(' (', e.call(r, 'test'), ');')
            return u.concat(n)
          case 'DoExpression':
            var R = e.call(function (e) {
              return printStatementSequence(e, t, r)
            }, 'body')
            return u.concat(['do {\n', R.indent(t.tabWidth), '\n}'])
          case 'BreakStatement':
            n.push('break')
            if (i.label) n.push(' ', e.call(r, 'label'))
            n.push(';')
            return u.concat(n)
          case 'ContinueStatement':
            n.push('continue')
            if (i.label) n.push(' ', e.call(r, 'label'))
            n.push(';')
            return u.concat(n)
          case 'LabeledStatement':
            return u.concat([e.call(r, 'label'), ':\n', e.call(r, 'body')])
          case 'TryStatement':
            n.push('try ', e.call(r, 'block'))
            if (i.handler) {
              n.push(' ', e.call(r, 'handler'))
            } else if (i.handlers) {
              e.each(function (e) {
                n.push(' ', r(e))
              }, 'handlers')
            }
            if (i.finalizer) {
              n.push(' finally ', e.call(r, 'finalizer'))
            }
            return u.concat(n)
          case 'CatchClause':
            n.push('catch ')
            if (i.param) {
              n.push('(', e.call(r, 'param'))
            }
            if (i.guard) {
              n.push(' if ', e.call(r, 'guard'))
            }
            if (i.param) {
              n.push(') ')
            }
            n.push(e.call(r, 'body'))
            return u.concat(n)
          case 'ThrowStatement':
            return u.concat(['throw ', e.call(r, 'argument'), ';'])
          case 'SwitchStatement':
            return u.concat([
              'switch (',
              e.call(r, 'discriminant'),
              ') {\n',
              u.fromString('\n').join(e.map(r, 'cases')),
              '\n}',
            ])
          case 'SwitchCase':
            if (i.test) n.push('case ', e.call(r, 'test'), ':')
            else n.push('default:')
            if (i.consequent.length > 0) {
              n.push(
                '\n',
                e
                  .call(function (e) {
                    return printStatementSequence(e, t, r)
                  }, 'consequent')
                  .indent(t.tabWidth)
              )
            }
            return u.concat(n)
          case 'DebuggerStatement':
            return u.fromString('debugger;')
          case 'JSXAttribute':
            n.push(e.call(r, 'name'))
            if (i.value) n.push('=', e.call(r, 'value'))
            return u.concat(n)
          case 'JSXIdentifier':
            return u.fromString(i.name, t)
          case 'JSXNamespacedName':
            return u
              .fromString(':')
              .join([e.call(r, 'namespace'), e.call(r, 'name')])
          case 'JSXMemberExpression':
            return u
              .fromString('.')
              .join([e.call(r, 'object'), e.call(r, 'property')])
          case 'JSXSpreadAttribute':
            return u.concat(['{...', e.call(r, 'argument'), '}'])
          case 'JSXSpreadChild':
            return u.concat(['{...', e.call(r, 'expression'), '}'])
          case 'JSXExpressionContainer':
            return u.concat(['{', e.call(r, 'expression'), '}'])
          case 'JSXElement':
          case 'JSXFragment':
            var q =
              'opening' + (i.type === 'JSXElement' ? 'Element' : 'Fragment')
            var V =
              'closing' + (i.type === 'JSXElement' ? 'Element' : 'Fragment')
            var W = e.call(r, q)
            if (i[q].selfClosing) {
              a.default.ok(
                !i[V],
                'unexpected ' + V + ' element in self-closing ' + i.type
              )
              return W
            }
            var K = u
              .concat(
                e.map(function (e) {
                  var t = e.getValue()
                  if (h.Literal.check(t) && typeof t.value === 'string') {
                    if (/\S/.test(t.value)) {
                      return t.value.replace(/^\s+|\s+$/g, '')
                    } else if (/\n/.test(t.value)) {
                      return '\n'
                    }
                  }
                  return r(e)
                }, 'children')
              )
              .indentTail(t.tabWidth)
            var H = e.call(r, V)
            return u.concat([W, K, H])
          case 'JSXOpeningElement':
            n.push('<', e.call(r, 'name'))
            var Y = []
            e.each(function (e) {
              Y.push(' ', r(e))
            }, 'attributes')
            var G = u.concat(Y)
            var Q = G.length > 1 || G.getLineLength(1) > t.wrapColumn
            if (Q) {
              Y.forEach(function (e, t) {
                if (e === ' ') {
                  a.default.strictEqual(t % 2, 0)
                  Y[t] = '\n'
                }
              })
              G = u.concat(Y).indentTail(t.tabWidth)
            }
            n.push(G, i.selfClosing ? ' />' : '>')
            return u.concat(n)
          case 'JSXClosingElement':
            return u.concat(['</', e.call(r, 'name'), '>'])
          case 'JSXOpeningFragment':
            return u.fromString('<>')
          case 'JSXClosingFragment':
            return u.fromString('</>')
          case 'JSXText':
            return u.fromString(i.value, t)
          case 'JSXEmptyExpression':
            return u.fromString('')
          case 'TypeAnnotatedIdentifier':
            return u.concat([
              e.call(r, 'annotation'),
              ' ',
              e.call(r, 'identifier'),
            ])
          case 'ClassBody':
            if (i.body.length === 0) {
              return u.fromString('{}')
            }
            return u.concat([
              '{\n',
              e
                .call(function (e) {
                  return printStatementSequence(e, t, r)
                }, 'body')
                .indent(t.tabWidth),
              '\n}',
            ])
          case 'ClassPropertyDefinition':
            n.push('static ', e.call(r, 'definition'))
            if (!h.MethodDefinition.check(i.definition)) n.push(';')
            return u.concat(n)
          case 'ClassProperty':
            var $ = i.accessibility || i.access
            if (typeof $ === 'string') {
              n.push($, ' ')
            }
            if (i.static) {
              n.push('static ')
            }
            if (i.abstract) {
              n.push('abstract ')
            }
            if (i.readonly) {
              n.push('readonly ')
            }
            var F = e.call(r, 'key')
            if (i.computed) {
              F = u.concat(['[', F, ']'])
            }
            if (i.variance) {
              F = u.concat([printVariance(e, r), F])
            }
            n.push(F)
            if (i.optional) {
              n.push('?')
            }
            if (i.typeAnnotation) {
              n.push(e.call(r, 'typeAnnotation'))
            }
            if (i.value) {
              n.push(' = ', e.call(r, 'value'))
            }
            n.push(';')
            return u.concat(n)
          case 'ClassPrivateProperty':
            if (i.static) {
              n.push('static ')
            }
            n.push(e.call(r, 'key'))
            if (i.typeAnnotation) {
              n.push(e.call(r, 'typeAnnotation'))
            }
            if (i.value) {
              n.push(' = ', e.call(r, 'value'))
            }
            n.push(';')
            return u.concat(n)
          case 'ClassDeclaration':
          case 'ClassExpression':
            if (i.declare) {
              n.push('declare ')
            }
            if (i.abstract) {
              n.push('abstract ')
            }
            n.push('class')
            if (i.id) {
              n.push(' ', e.call(r, 'id'))
            }
            if (i.typeParameters) {
              n.push(e.call(r, 'typeParameters'))
            }
            if (i.superClass) {
              n.push(
                ' extends ',
                e.call(r, 'superClass'),
                e.call(r, 'superTypeParameters')
              )
            }
            if (i['implements'] && i['implements'].length > 0) {
              n.push(
                ' implements ',
                u.fromString(', ').join(e.map(r, 'implements'))
              )
            }
            n.push(' ', e.call(r, 'body'))
            return u.concat(n)
          case 'TemplateElement':
            return u.fromString(i.value.raw, t).lockIndentTail()
          case 'TemplateLiteral':
            var Z = e.map(r, 'expressions')
            n.push('`')
            e.each(function (e) {
              var t = e.getName()
              n.push(r(e))
              if (t < Z.length) {
                n.push('${', Z[t], '}')
              }
            }, 'quasis')
            n.push('`')
            return u.concat(n).lockIndentTail()
          case 'TaggedTemplateExpression':
            return u.concat([e.call(r, 'tag'), e.call(r, 'quasi')])
          case 'Node':
          case 'Printable':
          case 'SourceLocation':
          case 'Position':
          case 'Statement':
          case 'Function':
          case 'Pattern':
          case 'Expression':
          case 'Declaration':
          case 'Specifier':
          case 'NamedSpecifier':
          case 'Comment':
          case 'Flow':
          case 'FlowType':
          case 'FlowPredicate':
          case 'MemberTypeAnnotation':
          case 'Type':
          case 'TSHasOptionalTypeParameterInstantiation':
          case 'TSHasOptionalTypeParameters':
          case 'TSHasOptionalTypeAnnotation':
            throw new Error('unprintable type: ' + JSON.stringify(i.type))
          case 'CommentBlock':
          case 'Block':
            return u.concat(['/*', u.fromString(i.value, t), '*/'])
          case 'CommentLine':
          case 'Line':
            return u.concat(['//', u.fromString(i.value, t)])
          case 'TypeAnnotation':
            if (i.typeAnnotation) {
              if (i.typeAnnotation.type !== 'FunctionTypeAnnotation') {
                n.push(': ')
              }
              n.push(e.call(r, 'typeAnnotation'))
              return u.concat(n)
            }
            return u.fromString('')
          case 'ExistentialTypeParam':
          case 'ExistsTypeAnnotation':
            return u.fromString('*', t)
          case 'EmptyTypeAnnotation':
            return u.fromString('empty', t)
          case 'AnyTypeAnnotation':
            return u.fromString('any', t)
          case 'MixedTypeAnnotation':
            return u.fromString('mixed', t)
          case 'ArrayTypeAnnotation':
            return u.concat([e.call(r, 'elementType'), '[]'])
          case 'TupleTypeAnnotation':
            var P = e.map(r, 'types')
            var k = u.fromString(', ').join(P)
            var D = k.getLineLength(1) <= t.wrapColumn
            if (D) {
              if (t.arrayBracketSpacing) {
                n.push('[ ')
              } else {
                n.push('[')
              }
            } else {
              n.push('[\n')
            }
            e.each(function (e) {
              var r = e.getName()
              var a = e.getValue()
              if (!a) {
                n.push(',')
              } else {
                var s = P[r]
                if (D) {
                  if (r > 0) n.push(' ')
                } else {
                  s = s.indent(t.tabWidth)
                }
                n.push(s)
                if (
                  r < i.types.length - 1 ||
                  (!D && m.isTrailingCommaEnabled(t, 'arrays'))
                )
                  n.push(',')
                if (!D) n.push('\n')
              }
            }, 'types')
            if (D && t.arrayBracketSpacing) {
              n.push(' ]')
            } else {
              n.push(']')
            }
            return u.concat(n)
          case 'BooleanTypeAnnotation':
            return u.fromString('boolean', t)
          case 'BooleanLiteralTypeAnnotation':
            a.default.strictEqual(typeof i.value, 'boolean')
            return u.fromString('' + i.value, t)
          case 'InterfaceTypeAnnotation':
            n.push('interface')
            if (i.extends && i.extends.length > 0) {
              n.push(' extends ', u.fromString(', ').join(e.map(r, 'extends')))
            }
            n.push(' ', e.call(r, 'body'))
            return u.concat(n)
          case 'DeclareClass':
            return printFlowDeclaration(e, [
              'class ',
              e.call(r, 'id'),
              ' ',
              e.call(r, 'body'),
            ])
          case 'DeclareFunction':
            return printFlowDeclaration(e, ['function ', e.call(r, 'id'), ';'])
          case 'DeclareModule':
            return printFlowDeclaration(e, [
              'module ',
              e.call(r, 'id'),
              ' ',
              e.call(r, 'body'),
            ])
          case 'DeclareModuleExports':
            return printFlowDeclaration(e, [
              'module.exports',
              e.call(r, 'typeAnnotation'),
            ])
          case 'DeclareVariable':
            return printFlowDeclaration(e, ['var ', e.call(r, 'id'), ';'])
          case 'DeclareExportDeclaration':
          case 'DeclareExportAllDeclaration':
            return u.concat(['declare ', printExportDeclaration(e, t, r)])
          case 'InferredPredicate':
            return u.fromString('%checks', t)
          case 'DeclaredPredicate':
            return u.concat(['%checks(', e.call(r, 'value'), ')'])
          case 'FunctionTypeAnnotation':
            var _ = e.getParentNode(0)
            var ee = !(
              h.ObjectTypeCallProperty.check(_) ||
              (h.ObjectTypeInternalSlot.check(_) && _.method) ||
              h.DeclareFunction.check(e.getParentNode(2))
            )
            var te = ee && !h.FunctionTypeParam.check(_)
            if (te) {
              n.push(': ')
            }
            n.push('(', printFunctionParams(e, t, r), ')')
            if (i.returnType) {
              n.push(ee ? ' => ' : ': ', e.call(r, 'returnType'))
            }
            return u.concat(n)
          case 'FunctionTypeParam':
            return u.concat([
              e.call(r, 'name'),
              i.optional ? '?' : '',
              ': ',
              e.call(r, 'typeAnnotation'),
            ])
          case 'GenericTypeAnnotation':
            return u.concat([e.call(r, 'id'), e.call(r, 'typeParameters')])
          case 'DeclareInterface':
            n.push('declare ')
          case 'InterfaceDeclaration':
          case 'TSInterfaceDeclaration':
            if (i.declare) {
              n.push('declare ')
            }
            n.push(
              'interface ',
              e.call(r, 'id'),
              e.call(r, 'typeParameters'),
              ' '
            )
            if (i['extends'] && i['extends'].length > 0) {
              n.push(
                'extends ',
                u.fromString(', ').join(e.map(r, 'extends')),
                ' '
              )
            }
            if (i.body) {
              n.push(e.call(r, 'body'))
            }
            return u.concat(n)
          case 'ClassImplements':
          case 'InterfaceExtends':
            return u.concat([e.call(r, 'id'), e.call(r, 'typeParameters')])
          case 'IntersectionTypeAnnotation':
            return u.fromString(' & ').join(e.map(r, 'types'))
          case 'NullableTypeAnnotation':
            return u.concat(['?', e.call(r, 'typeAnnotation')])
          case 'NullLiteralTypeAnnotation':
            return u.fromString('null', t)
          case 'ThisTypeAnnotation':
            return u.fromString('this', t)
          case 'NumberTypeAnnotation':
            return u.fromString('number', t)
          case 'ObjectTypeCallProperty':
            return e.call(r, 'value')
          case 'ObjectTypeIndexer':
            return u.concat([
              printVariance(e, r),
              '[',
              e.call(r, 'id'),
              ': ',
              e.call(r, 'key'),
              ']: ',
              e.call(r, 'value'),
            ])
          case 'ObjectTypeProperty':
            return u.concat([
              printVariance(e, r),
              e.call(r, 'key'),
              i.optional ? '?' : '',
              ': ',
              e.call(r, 'value'),
            ])
          case 'ObjectTypeInternalSlot':
            return u.concat([
              i.static ? 'static ' : '',
              '[[',
              e.call(r, 'id'),
              ']]',
              i.optional ? '?' : '',
              i.value.type !== 'FunctionTypeAnnotation' ? ': ' : '',
              e.call(r, 'value'),
            ])
          case 'QualifiedTypeIdentifier':
            return u.concat([e.call(r, 'qualification'), '.', e.call(r, 'id')])
          case 'StringLiteralTypeAnnotation':
            return u.fromString(nodeStr(i.value, t), t)
          case 'NumberLiteralTypeAnnotation':
          case 'NumericLiteralTypeAnnotation':
            a.default.strictEqual(typeof i.value, 'number')
            return u.fromString(JSON.stringify(i.value), t)
          case 'StringTypeAnnotation':
            return u.fromString('string', t)
          case 'DeclareTypeAlias':
            n.push('declare ')
          case 'TypeAlias':
            return u.concat([
              'type ',
              e.call(r, 'id'),
              e.call(r, 'typeParameters'),
              ' = ',
              e.call(r, 'right'),
              ';',
            ])
          case 'DeclareOpaqueType':
            n.push('declare ')
          case 'OpaqueType':
            n.push('opaque type ', e.call(r, 'id'), e.call(r, 'typeParameters'))
            if (i['supertype']) {
              n.push(': ', e.call(r, 'supertype'))
            }
            if (i['impltype']) {
              n.push(' = ', e.call(r, 'impltype'))
            }
            n.push(';')
            return u.concat(n)
          case 'TypeCastExpression':
            return u.concat([
              '(',
              e.call(r, 'expression'),
              e.call(r, 'typeAnnotation'),
              ')',
            ])
          case 'TypeParameterDeclaration':
          case 'TypeParameterInstantiation':
            return u.concat([
              '<',
              u.fromString(', ').join(e.map(r, 'params')),
              '>',
            ])
          case 'Variance':
            if (i.kind === 'plus') {
              return u.fromString('+')
            }
            if (i.kind === 'minus') {
              return u.fromString('-')
            }
            return u.fromString('')
          case 'TypeParameter':
            if (i.variance) {
              n.push(printVariance(e, r))
            }
            n.push(e.call(r, 'name'))
            if (i.bound) {
              n.push(e.call(r, 'bound'))
            }
            if (i['default']) {
              n.push('=', e.call(r, 'default'))
            }
            return u.concat(n)
          case 'TypeofTypeAnnotation':
            return u.concat([u.fromString('typeof ', t), e.call(r, 'argument')])
          case 'UnionTypeAnnotation':
            return u.fromString(' | ').join(e.map(r, 'types'))
          case 'VoidTypeAnnotation':
            return u.fromString('void', t)
          case 'NullTypeAnnotation':
            return u.fromString('null', t)
          case 'TSType':
            throw new Error('unprintable type: ' + JSON.stringify(i.type))
          case 'TSNumberKeyword':
            return u.fromString('number', t)
          case 'TSBigIntKeyword':
            return u.fromString('bigint', t)
          case 'TSObjectKeyword':
            return u.fromString('object', t)
          case 'TSBooleanKeyword':
            return u.fromString('boolean', t)
          case 'TSStringKeyword':
            return u.fromString('string', t)
          case 'TSSymbolKeyword':
            return u.fromString('symbol', t)
          case 'TSAnyKeyword':
            return u.fromString('any', t)
          case 'TSVoidKeyword':
            return u.fromString('void', t)
          case 'TSThisType':
            return u.fromString('this', t)
          case 'TSNullKeyword':
            return u.fromString('null', t)
          case 'TSUndefinedKeyword':
            return u.fromString('undefined', t)
          case 'TSUnknownKeyword':
            return u.fromString('unknown', t)
          case 'TSNeverKeyword':
            return u.fromString('never', t)
          case 'TSArrayType':
            return u.concat([e.call(r, 'elementType'), '[]'])
          case 'TSLiteralType':
            return e.call(r, 'literal')
          case 'TSUnionType':
            return u.fromString(' | ').join(e.map(r, 'types'))
          case 'TSIntersectionType':
            return u.fromString(' & ').join(e.map(r, 'types'))
          case 'TSConditionalType':
            n.push(
              e.call(r, 'checkType'),
              ' extends ',
              e.call(r, 'extendsType'),
              ' ? ',
              e.call(r, 'trueType'),
              ' : ',
              e.call(r, 'falseType')
            )
            return u.concat(n)
          case 'TSInferType':
            n.push('infer ', e.call(r, 'typeParameter'))
            return u.concat(n)
          case 'TSParenthesizedType':
            return u.concat(['(', e.call(r, 'typeAnnotation'), ')'])
          case 'TSFunctionType':
            return u.concat([
              e.call(r, 'typeParameters'),
              '(',
              printFunctionParams(e, t, r),
              ')',
              e.call(r, 'typeAnnotation'),
            ])
          case 'TSConstructorType':
            return u.concat([
              'new ',
              e.call(r, 'typeParameters'),
              '(',
              printFunctionParams(e, t, r),
              ')',
              e.call(r, 'typeAnnotation'),
            ])
          case 'TSMappedType': {
            n.push(
              i.readonly ? 'readonly ' : '',
              '[',
              e.call(r, 'typeParameter'),
              ']',
              i.optional ? '?' : ''
            )
            if (i.typeAnnotation) {
              n.push(': ', e.call(r, 'typeAnnotation'), ';')
            }
            return u.concat(['{\n', u.concat(n).indent(t.tabWidth), '\n}'])
          }
          case 'TSTupleType':
            return u.concat([
              '[',
              u.fromString(', ').join(e.map(r, 'elementTypes')),
              ']',
            ])
          case 'TSRestType':
            return u.concat(['...', e.call(r, 'typeAnnotation'), '[]'])
          case 'TSOptionalType':
            return u.concat([e.call(r, 'typeAnnotation'), '?'])
          case 'TSIndexedAccessType':
            return u.concat([
              e.call(r, 'objectType'),
              '[',
              e.call(r, 'indexType'),
              ']',
            ])
          case 'TSTypeOperator':
            return u.concat([
              e.call(r, 'operator'),
              ' ',
              e.call(r, 'typeAnnotation'),
            ])
          case 'TSTypeLiteral': {
            var re = u.fromString(',\n').join(e.map(r, 'members'))
            if (re.isEmpty()) {
              return u.fromString('{}', t)
            }
            n.push('{\n', re.indent(t.tabWidth), '\n}')
            return u.concat(n)
          }
          case 'TSEnumMember':
            n.push(e.call(r, 'id'))
            if (i.initializer) {
              n.push(' = ', e.call(r, 'initializer'))
            }
            return u.concat(n)
          case 'TSTypeQuery':
            return u.concat(['typeof ', e.call(r, 'exprName')])
          case 'TSParameterProperty':
            if (i.accessibility) {
              n.push(i.accessibility, ' ')
            }
            if (i.export) {
              n.push('export ')
            }
            if (i.static) {
              n.push('static ')
            }
            if (i.readonly) {
              n.push('readonly ')
            }
            n.push(e.call(r, 'parameter'))
            return u.concat(n)
          case 'TSTypeReference':
            return u.concat([
              e.call(r, 'typeName'),
              e.call(r, 'typeParameters'),
            ])
          case 'TSQualifiedName':
            return u.concat([e.call(r, 'left'), '.', e.call(r, 'right')])
          case 'TSAsExpression': {
            var ie = i.extra && i.extra.parenthesized === true
            if (ie) n.push('(')
            n.push(
              e.call(r, 'expression'),
              u.fromString(' as '),
              e.call(r, 'typeAnnotation')
            )
            if (ie) n.push(')')
            return u.concat(n)
          }
          case 'TSNonNullExpression':
            return u.concat([e.call(r, 'expression'), '!'])
          case 'TSTypeAnnotation': {
            var _ = e.getParentNode(0)
            var ne = ': '
            if (h.TSFunctionType.check(_) || h.TSConstructorType.check(_)) {
              ne = ' => '
            }
            if (h.TSTypePredicate.check(_)) {
              ne = ' is '
            }
            return u.concat([ne, e.call(r, 'typeAnnotation')])
          }
          case 'TSIndexSignature':
            return u.concat([
              i.readonly ? 'readonly ' : '',
              '[',
              e.map(r, 'parameters'),
              ']',
              e.call(r, 'typeAnnotation'),
            ])
          case 'TSPropertySignature':
            n.push(printVariance(e, r), i.readonly ? 'readonly ' : '')
            if (i.computed) {
              n.push('[', e.call(r, 'key'), ']')
            } else {
              n.push(e.call(r, 'key'))
            }
            n.push(i.optional ? '?' : '', e.call(r, 'typeAnnotation'))
            return u.concat(n)
          case 'TSMethodSignature':
            if (i.computed) {
              n.push('[', e.call(r, 'key'), ']')
            } else {
              n.push(e.call(r, 'key'))
            }
            if (i.optional) {
              n.push('?')
            }
            n.push(
              e.call(r, 'typeParameters'),
              '(',
              printFunctionParams(e, t, r),
              ')',
              e.call(r, 'typeAnnotation')
            )
            return u.concat(n)
          case 'TSTypePredicate':
            return u.concat([
              e.call(r, 'parameterName'),
              e.call(r, 'typeAnnotation'),
            ])
          case 'TSCallSignatureDeclaration':
            return u.concat([
              e.call(r, 'typeParameters'),
              '(',
              printFunctionParams(e, t, r),
              ')',
              e.call(r, 'typeAnnotation'),
            ])
          case 'TSConstructSignatureDeclaration':
            if (i.typeParameters) {
              n.push('new', e.call(r, 'typeParameters'))
            } else {
              n.push('new ')
            }
            n.push(
              '(',
              printFunctionParams(e, t, r),
              ')',
              e.call(r, 'typeAnnotation')
            )
            return u.concat(n)
          case 'TSTypeAliasDeclaration':
            return u.concat([
              i.declare ? 'declare ' : '',
              'type ',
              e.call(r, 'id'),
              e.call(r, 'typeParameters'),
              ' = ',
              e.call(r, 'typeAnnotation'),
              ';',
            ])
          case 'TSTypeParameter':
            n.push(e.call(r, 'name'))
            var _ = e.getParentNode(0)
            var ae = h.TSMappedType.check(_)
            if (i.constraint) {
              n.push(ae ? ' in ' : ' extends ', e.call(r, 'constraint'))
            }
            if (i['default']) {
              n.push(' = ', e.call(r, 'default'))
            }
            return u.concat(n)
          case 'TSTypeAssertion':
            var ie = i.extra && i.extra.parenthesized === true
            if (ie) {
              n.push('(')
            }
            n.push(
              '<',
              e.call(r, 'typeAnnotation'),
              '> ',
              e.call(r, 'expression')
            )
            if (ie) {
              n.push(')')
            }
            return u.concat(n)
          case 'TSTypeParameterDeclaration':
          case 'TSTypeParameterInstantiation':
            return u.concat([
              '<',
              u.fromString(', ').join(e.map(r, 'params')),
              '>',
            ])
          case 'TSEnumDeclaration':
            n.push(
              i.declare ? 'declare ' : '',
              i.const ? 'const ' : '',
              'enum ',
              e.call(r, 'id')
            )
            var se = u.fromString(',\n').join(e.map(r, 'members'))
            if (se.isEmpty()) {
              n.push(' {}')
            } else {
              n.push(' {\n', se.indent(t.tabWidth), '\n}')
            }
            return u.concat(n)
          case 'TSExpressionWithTypeArguments':
            return u.concat([
              e.call(r, 'expression'),
              e.call(r, 'typeParameters'),
            ])
          case 'TSInterfaceBody':
            var ue = u.fromString(';\n').join(e.map(r, 'body'))
            if (ue.isEmpty()) {
              return u.fromString('{}', t)
            }
            return u.concat(['{\n', ue.indent(t.tabWidth), ';', '\n}'])
          case 'TSImportType':
            n.push('import(', e.call(r, 'argument'), ')')
            if (i.qualifier) {
              n.push('.', e.call(r, 'qualifier'))
            }
            if (i.typeParameters) {
              n.push(e.call(r, 'typeParameters'))
            }
            return u.concat(n)
          case 'TSImportEqualsDeclaration':
            if (i.isExport) {
              n.push('export ')
            }
            n.push(
              'import ',
              e.call(r, 'id'),
              ' = ',
              e.call(r, 'moduleReference')
            )
            return maybeAddSemicolon(u.concat(n))
          case 'TSExternalModuleReference':
            return u.concat(['require(', e.call(r, 'expression'), ')'])
          case 'TSModuleDeclaration': {
            var le = e.getParentNode()
            if (le.type === 'TSModuleDeclaration') {
              n.push('.')
            } else {
              if (i.declare) {
                n.push('declare ')
              }
              if (!i.global) {
                var oe =
                  i.id.type === 'StringLiteral' ||
                  (i.id.type === 'Literal' && typeof i.id.value === 'string')
                if (oe) {
                  n.push('module ')
                } else if (i.loc && i.loc.lines && i.id.loc) {
                  var ce = i.loc.lines.sliceString(i.loc.start, i.id.loc.start)
                  if (ce.indexOf('module') >= 0) {
                    n.push('module ')
                  } else {
                    n.push('namespace ')
                  }
                } else {
                  n.push('namespace ')
                }
              }
            }
            n.push(e.call(r, 'id'))
            if (i.body && i.body.type === 'TSModuleDeclaration') {
              n.push(e.call(r, 'body'))
            } else if (i.body) {
              var he = e.call(r, 'body')
              if (he.isEmpty()) {
                n.push(' {}')
              } else {
                n.push(' {\n', he.indent(t.tabWidth), '\n}')
              }
            }
            return u.concat(n)
          }
          case 'TSModuleBlock':
            return e.call(function (e) {
              return printStatementSequence(e, t, r)
            }, 'body')
          case 'ClassHeritage':
          case 'ComprehensionBlock':
          case 'ComprehensionExpression':
          case 'Glob':
          case 'GeneratorExpression':
          case 'LetStatement':
          case 'LetExpression':
          case 'GraphExpression':
          case 'GraphIndexExpression':
          case 'XMLDefaultDeclaration':
          case 'XMLAnyName':
          case 'XMLQualifiedIdentifier':
          case 'XMLFunctionQualifiedIdentifier':
          case 'XMLAttributeSelector':
          case 'XMLFilterExpression':
          case 'XML':
          case 'XMLElement':
          case 'XMLList':
          case 'XMLEscape':
          case 'XMLText':
          case 'XMLStartTag':
          case 'XMLEndTag':
          case 'XMLPointTag':
          case 'XMLName':
          case 'XMLAttribute':
          case 'XMLCdata':
          case 'XMLComment':
          case 'XMLProcessingInstruction':
          default:
            debugger
            throw new Error('unknown type: ' + JSON.stringify(i.type))
        }
      }
      function printDecorators(e, t) {
        var r = []
        var i = e.getValue()
        if (
          i.decorators &&
          i.decorators.length > 0 &&
          !m.getParentExportDeclaration(e)
        ) {
          e.each(function (e) {
            r.push(t(e), '\n')
          }, 'decorators')
        } else if (
          m.isExportDeclaration(i) &&
          i.declaration &&
          i.declaration.decorators
        ) {
          e.each(
            function (e) {
              r.push(t(e), '\n')
            },
            'declaration',
            'decorators'
          )
        }
        return u.concat(r)
      }
      function printStatementSequence(e, t, r) {
        var i = []
        var n = false
        var s = false
        e.each(function (e) {
          var t = e.getValue()
          if (!t) {
            return
          }
          if (
            t.type === 'EmptyStatement' &&
            !(t.comments && t.comments.length > 0)
          ) {
            return
          }
          if (h.Comment.check(t)) {
            n = true
          } else if (h.Statement.check(t)) {
            s = true
          } else {
            f.assert(t)
          }
          i.push({ node: t, printed: r(e) })
        })
        if (n) {
          a.default.strictEqual(
            s,
            false,
            'Comments may appear as statements in otherwise empty statement ' +
              'lists, but may not coexist with non-Comment nodes.'
          )
        }
        var l = null
        var o = i.length
        var c = []
        i.forEach(function (e, r) {
          var i = e.printed
          var n = e.node
          var a = i.length > 1
          var s = r > 0
          var u = r < o - 1
          var h
          var f
          var p = n && n.loc && n.loc.lines
          var d = p && t.reuseWhitespace && m.getTrueLoc(n, p)
          if (s) {
            if (d) {
              var v = p.skipSpaces(d.start, true)
              var y = v ? v.line : 1
              var x = d.start.line - y
              h = Array(x + 1).join('\n')
            } else {
              h = a ? '\n\n' : '\n'
            }
          } else {
            h = ''
          }
          if (u) {
            if (d) {
              var E = p.skipSpaces(d.end)
              var S = E ? E.line : p.length
              var D = S - d.end.line
              f = Array(D + 1).join('\n')
            } else {
              f = a ? '\n\n' : '\n'
            }
          } else {
            f = ''
          }
          c.push(maxSpace(l, h), i)
          if (u) {
            l = f
          } else if (f) {
            c.push(f)
          }
        })
        return u.concat(c)
      }
      function maxSpace(e, t) {
        if (!e && !t) {
          return u.fromString('')
        }
        if (!e) {
          return u.fromString(t)
        }
        if (!t) {
          return u.fromString(e)
        }
        var r = u.fromString(e)
        var i = u.fromString(t)
        if (i.length > r.length) {
          return i
        }
        return r
      }
      function printMethod(e, t, r) {
        var i = e.getNode()
        var n = i.kind
        var a = []
        var s = i.value
        if (!h.FunctionExpression.check(s)) {
          s = i
        }
        var l = i.accessibility || i.access
        if (typeof l === 'string') {
          a.push(l, ' ')
        }
        if (i.static) {
          a.push('static ')
        }
        if (i.abstract) {
          a.push('abstract ')
        }
        if (i.readonly) {
          a.push('readonly ')
        }
        if (s.async) {
          a.push('async ')
        }
        if (s.generator) {
          a.push('*')
        }
        if (n === 'get' || n === 'set') {
          a.push(n, ' ')
        }
        var o = e.call(r, 'key')
        if (i.computed) {
          o = u.concat(['[', o, ']'])
        }
        a.push(o)
        if (i.optional) {
          a.push('?')
        }
        if (i === s) {
          a.push(
            e.call(r, 'typeParameters'),
            '(',
            printFunctionParams(e, t, r),
            ')',
            e.call(r, 'returnType')
          )
          if (i.body) {
            a.push(' ', e.call(r, 'body'))
          } else {
            a.push(';')
          }
        } else {
          a.push(
            e.call(r, 'value', 'typeParameters'),
            '(',
            e.call(function (e) {
              return printFunctionParams(e, t, r)
            }, 'value'),
            ')',
            e.call(r, 'value', 'returnType')
          )
          if (s.body) {
            a.push(' ', e.call(r, 'value', 'body'))
          } else {
            a.push(';')
          }
        }
        return u.concat(a)
      }
      function printArgumentsList(e, t, r) {
        var i = e.map(r, 'arguments')
        var n = m.isTrailingCommaEnabled(t, 'parameters')
        var a = u.fromString(', ').join(i)
        if (a.getLineLength(1) > t.wrapColumn) {
          a = u.fromString(',\n').join(i)
          return u.concat(['(\n', a.indent(t.tabWidth), n ? ',\n)' : '\n)'])
        }
        return u.concat(['(', a, ')'])
      }
      function printFunctionParams(e, t, r) {
        var i = e.getValue()
        if (i.params) {
          var n = i.params
          var a = e.map(r, 'params')
        } else if (i.parameters) {
          n = i.parameters
          a = e.map(r, 'parameters')
        }
        if (i.defaults) {
          e.each(function (e) {
            var t = e.getName()
            var i = a[t]
            if (i && e.getValue()) {
              a[t] = u.concat([i, ' = ', r(e)])
            }
          }, 'defaults')
        }
        if (i.rest) {
          a.push(u.concat(['...', e.call(r, 'rest')]))
        }
        var s = u.fromString(', ').join(a)
        if (s.length > 1 || s.getLineLength(1) > t.wrapColumn) {
          s = u.fromString(',\n').join(a)
          if (
            m.isTrailingCommaEnabled(t, 'parameters') &&
            !i.rest &&
            n[n.length - 1].type !== 'RestElement'
          ) {
            s = u.concat([s, ',\n'])
          } else {
            s = u.concat([s, '\n'])
          }
          return u.concat(['\n', s.indent(t.tabWidth)])
        }
        return s
      }
      function printExportDeclaration(e, t, r) {
        var i = e.getValue()
        var n = ['export ']
        if (i.exportKind && i.exportKind !== 'value') {
          n.push(i.exportKind + ' ')
        }
        var a = t.objectCurlySpacing
        h.Declaration.assert(i)
        if (i['default'] || i.type === 'ExportDefaultDeclaration') {
          n.push('default ')
        }
        if (i.declaration) {
          n.push(e.call(r, 'declaration'))
        } else if (i.specifiers) {
          if (
            i.specifiers.length === 1 &&
            i.specifiers[0].type === 'ExportBatchSpecifier'
          ) {
            n.push('*')
          } else if (i.specifiers.length === 0) {
            n.push('{}')
          } else if (i.specifiers[0].type === 'ExportDefaultSpecifier') {
            var s = []
            var l = []
            e.each(function (e) {
              var t = e.getValue()
              if (t.type === 'ExportDefaultSpecifier') {
                s.push(r(e))
              } else {
                l.push(r(e))
              }
            }, 'specifiers')
            s.forEach(function (e, t) {
              if (t > 0) {
                n.push(', ')
              }
              n.push(e)
            })
            if (l.length > 0) {
              var o = u.fromString(', ').join(l)
              if (o.getLineLength(1) > t.wrapColumn) {
                o = u.concat([
                  u.fromString(',\n').join(l).indent(t.tabWidth),
                  ',',
                ])
              }
              if (s.length > 0) {
                n.push(', ')
              }
              if (o.length > 1) {
                n.push('{\n', o, '\n}')
              } else if (t.objectCurlySpacing) {
                n.push('{ ', o, ' }')
              } else {
                n.push('{', o, '}')
              }
            }
          } else {
            n.push(
              a ? '{ ' : '{',
              u.fromString(', ').join(e.map(r, 'specifiers')),
              a ? ' }' : '}'
            )
          }
          if (i.source) {
            n.push(' from ', e.call(r, 'source'))
          }
        }
        var c = u.concat(n)
        if (
          lastNonSpaceCharacter(c) !== ';' &&
          !(
            i.declaration &&
            (i.declaration.type === 'FunctionDeclaration' ||
              i.declaration.type === 'ClassDeclaration' ||
              i.declaration.type === 'TSModuleDeclaration' ||
              i.declaration.type === 'TSInterfaceDeclaration' ||
              i.declaration.type === 'TSEnumDeclaration')
          )
        ) {
          c = u.concat([c, ';'])
        }
        return c
      }
      function printFlowDeclaration(e, t) {
        var r = m.getParentExportDeclaration(e)
        if (r) {
          a.default.strictEqual(r.type, 'DeclareExportDeclaration')
        } else {
          t.unshift('declare ')
        }
        return u.concat(t)
      }
      function printVariance(e, t) {
        return e.call(function (e) {
          var r = e.getValue()
          if (r) {
            if (r === 'plus') {
              return u.fromString('+')
            }
            if (r === 'minus') {
              return u.fromString('-')
            }
            return t(e)
          }
          return u.fromString('')
        }, 'variance')
      }
      function adjustClause(e, t) {
        if (e.length > 1) return u.concat([' ', e])
        return u.concat(['\n', maybeAddSemicolon(e).indent(t.tabWidth)])
      }
      function lastNonSpaceCharacter(e) {
        var t = e.lastPos()
        do {
          var r = e.charAt(t)
          if (/\S/.test(r)) return r
        } while (e.prevPos(t))
      }
      function endsWithBrace(e) {
        return lastNonSpaceCharacter(e) === '}'
      }
      function swapQuotes(e) {
        return e.replace(/['"]/g, function (e) {
          return e === '"' ? "'" : '"'
        })
      }
      function nodeStr(e, t) {
        f.assert(e)
        switch (t.quote) {
          case 'auto':
            var r = JSON.stringify(e)
            var i = swapQuotes(JSON.stringify(swapQuotes(e)))
            return r.length > i.length ? i : r
          case 'single':
            return swapQuotes(JSON.stringify(swapQuotes(e)))
          case 'double':
          default:
            return JSON.stringify(e)
        }
      }
      function maybeAddSemicolon(e) {
        var t = lastNonSpaceCharacter(e)
        if (!t || '\n};'.indexOf(t) < 0) return u.concat([e, ';'])
        return e
      }
    },
    721: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (e != null)
            for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r]
          t['default'] = e
          return t
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var a = i(r(357))
      var s = n(r(593))
      var u = s.namedTypes
      var l = i(r(241))
      var o = l.default.SourceMapConsumer
      var c = l.default.SourceMapGenerator
      var h = Object.prototype.hasOwnProperty
      function getOption(e, t, r) {
        if (e && h.call(e, t)) {
          return e[t]
        }
        return r
      }
      t.getOption = getOption
      function getUnionOfKeys() {
        var e = []
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t]
        }
        var r = {}
        var i = e.length
        for (var n = 0; n < i; ++n) {
          var a = Object.keys(e[n])
          var s = a.length
          for (var u = 0; u < s; ++u) {
            r[a[u]] = true
          }
        }
        return r
      }
      t.getUnionOfKeys = getUnionOfKeys
      function comparePos(e, t) {
        return e.line - t.line || e.column - t.column
      }
      t.comparePos = comparePos
      function copyPos(e) {
        return { line: e.line, column: e.column }
      }
      t.copyPos = copyPos
      function composeSourceMaps(e, t) {
        if (e) {
          if (!t) {
            return e
          }
        } else {
          return t || null
        }
        var r = new o(e)
        var i = new o(t)
        var n = new c({ file: t.file, sourceRoot: t.sourceRoot })
        var a = {}
        i.eachMapping(function (e) {
          var t = r.originalPositionFor({
            line: e.originalLine,
            column: e.originalColumn,
          })
          var i = t.source
          if (i === null) {
            return
          }
          n.addMapping({
            source: i,
            original: copyPos(t),
            generated: { line: e.generatedLine, column: e.generatedColumn },
            name: e.name,
          })
          var s = r.sourceContentFor(i)
          if (s && !h.call(a, i)) {
            a[i] = s
            n.setSourceContent(i, s)
          }
        })
        return n.toJSON()
      }
      t.composeSourceMaps = composeSourceMaps
      function getTrueLoc(e, t) {
        if (!e.loc) {
          return null
        }
        var r = { start: e.loc.start, end: e.loc.end }
        function include(e) {
          expandLoc(r, e.loc)
        }
        if (
          e.declaration &&
          e.declaration.decorators &&
          isExportDeclaration(e)
        ) {
          e.declaration.decorators.forEach(include)
        }
        if (comparePos(r.start, r.end) < 0) {
          r.start = copyPos(r.start)
          t.skipSpaces(r.start, false, true)
          if (comparePos(r.start, r.end) < 0) {
            r.end = copyPos(r.end)
            t.skipSpaces(r.end, true, true)
          }
        }
        if (e.comments) {
          e.comments.forEach(include)
        }
        return r
      }
      t.getTrueLoc = getTrueLoc
      function expandLoc(e, t) {
        if (e && t) {
          if (comparePos(t.start, e.start) < 0) {
            e.start = t.start
          }
          if (comparePos(e.end, t.end) < 0) {
            e.end = t.end
          }
        }
      }
      function fixFaultyLocations(e, t) {
        var r = e.loc
        if (r) {
          if (r.start.line < 1) {
            r.start.line = 1
          }
          if (r.end.line < 1) {
            r.end.line = 1
          }
        }
        if (e.type === 'File') {
          r.start = t.firstPos()
          r.end = t.lastPos()
        }
        fixForLoopHead(e, t)
        fixTemplateLiteral(e, t)
        if (r && e.decorators) {
          e.decorators.forEach(function (e) {
            expandLoc(r, e.loc)
          })
        } else if (e.declaration && isExportDeclaration(e)) {
          e.declaration.loc = null
          var i = e.declaration.decorators
          if (i) {
            i.forEach(function (e) {
              expandLoc(r, e.loc)
            })
          }
        } else if (
          (u.MethodDefinition && u.MethodDefinition.check(e)) ||
          (u.Property.check(e) && (e.method || e.shorthand))
        ) {
          e.value.loc = null
          if (u.FunctionExpression.check(e.value)) {
            e.value.id = null
          }
        } else if (e.type === 'ObjectTypeProperty') {
          var r = e.loc
          var n = r && r.end
          if (n) {
            n = copyPos(n)
            if (t.prevPos(n) && t.charAt(n) === ',') {
              if ((n = t.skipSpaces(n, true, true))) {
                r.end = n
              }
            }
          }
        }
      }
      t.fixFaultyLocations = fixFaultyLocations
      function fixForLoopHead(e, t) {
        if (e.type !== 'ForStatement') {
          return
        }
        function fix(e) {
          var r = e && e.loc
          var i = r && r.start
          var n = r && copyPos(r.end)
          while (i && n && comparePos(i, n) < 0) {
            t.prevPos(n)
            if (t.charAt(n) === ';') {
              r.end.line = n.line
              r.end.column = n.column
            } else {
              break
            }
          }
        }
        fix(e.init)
        fix(e.test)
        fix(e.update)
      }
      function fixTemplateLiteral(e, t) {
        if (e.type !== 'TemplateLiteral') {
          return
        }
        if (e.quasis.length === 0) {
          return
        }
        if (e.loc) {
          var r = copyPos(e.loc.start)
          a.default.strictEqual(t.charAt(r), '`')
          a.default.ok(t.nextPos(r))
          var i = e.quasis[0]
          if (comparePos(i.loc.start, r) < 0) {
            i.loc.start = r
          }
          var n = copyPos(e.loc.end)
          a.default.ok(t.prevPos(n))
          a.default.strictEqual(t.charAt(n), '`')
          var s = e.quasis[e.quasis.length - 1]
          if (comparePos(n, s.loc.end) < 0) {
            s.loc.end = n
          }
        }
        e.expressions.forEach(function (r, i) {
          var n = t.skipSpaces(r.loc.start, true, false)
          if (
            t.prevPos(n) &&
            t.charAt(n) === '{' &&
            t.prevPos(n) &&
            t.charAt(n) === '$'
          ) {
            var s = e.quasis[i]
            if (comparePos(n, s.loc.end) < 0) {
              s.loc.end = n
            }
          }
          var u = t.skipSpaces(r.loc.end, false, false)
          if (t.charAt(u) === '}') {
            a.default.ok(t.nextPos(u))
            var l = e.quasis[i + 1]
            if (comparePos(l.loc.start, u) < 0) {
              l.loc.start = u
            }
          }
        })
      }
      function isExportDeclaration(e) {
        if (e)
          switch (e.type) {
            case 'ExportDeclaration':
            case 'ExportDefaultDeclaration':
            case 'ExportDefaultSpecifier':
            case 'DeclareExportDeclaration':
            case 'ExportNamedDeclaration':
            case 'ExportAllDeclaration':
              return true
          }
        return false
      }
      t.isExportDeclaration = isExportDeclaration
      function getParentExportDeclaration(e) {
        var t = e.getParentNode()
        if (e.getName() === 'declaration' && isExportDeclaration(t)) {
          return t
        }
        return null
      }
      t.getParentExportDeclaration = getParentExportDeclaration
      function isTrailingCommaEnabled(e, t) {
        var r = e.trailingComma
        if (typeof r === 'object') {
          return !!r[t]
        }
        return !!r
      }
      t.isTrailingCommaEnabled = isTrailingCommaEnabled
    },
    313: function (e, t, r) {
      'use strict'
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (e != null)
            for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r]
          t['default'] = e
          return t
        }
      Object.defineProperty(t, '__esModule', { value: true })
      var a = i(r(747))
      var s = n(r(593))
      t.types = s
      var u = r(382)
      t.parse = u.parse
      var l = r(413)
      var o = r(593)
      t.visit = o.visit
      function print(e, t) {
        return new l.Printer(t).print(e)
      }
      t.print = print
      function prettyPrint(e, t) {
        return new l.Printer(t).printGenerically(e)
      }
      t.prettyPrint = prettyPrint
      function run(e, t) {
        return runFile(process.argv[2], e, t)
      }
      t.run = run
      function runFile(e, t, r) {
        a.default.readFile(e, 'utf-8', function (e, i) {
          if (e) {
            console.error(e)
            return
          }
          runString(i, t, r)
        })
      }
      function defaultWriteback(e) {
        process.stdout.write(e)
      }
      function runString(e, t, r) {
        var i = (r && r.writeback) || defaultWriteback
        t(u.parse(e, r), function (e) {
          i(print(e, r).code)
        })
      }
    },
    685: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: true })
      var i = r(721)
      function parse(e, t) {
        var n = []
        var a = r(609).parse(e, {
          loc: true,
          locations: true,
          comment: true,
          onComment: n,
          range: i.getOption(t, 'range', false),
          tolerant: i.getOption(t, 'tolerant', true),
          tokens: true,
        })
        if (!Array.isArray(a.comments)) {
          a.comments = n
        }
        return a
      }
      t.parse = parse
    },
    357: (e) => {
      'use strict'
      e.exports = require('assert')
    },
    747: (e) => {
      'use strict'
      e.exports = require('fs')
    },
    241: (e) => {
      'use strict'
      e.exports = require('next/dist/compiled/source-map')
    },
    87: (e) => {
      'use strict'
      e.exports = require('os')
    },
  }
  var t = {}
  function __nccwpck_require__(r) {
    if (t[r]) {
      return t[r].exports
    }
    var i = (t[r] = { exports: {} })
    var n = true
    try {
      e[r].call(i.exports, i, i.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete t[r]
    }
    return i.exports
  }
  __nccwpck_require__.ab = __dirname + '/'
  return __nccwpck_require__(313)
})()
