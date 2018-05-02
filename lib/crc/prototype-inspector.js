const eslintScope = require('eslint-scope')
const esquery = require('esquery')
const {
  first,
  get,
  isString
} = require('lodash')

/**
 * @private
 * @ignore
 */

const nullResult = {
  'meta': {
    'kind': 'Object'
  },
  'name': null,
  'superClass': {
  }
}

/**
 * @private
 * @ignore
 */

const queryContext = (context, descriptor) => first(esquery.match(
  context.code.ast,
  esquery.parse(descriptor)
))

/**
 * @private
 * @ignore
 */

const visitClass = (context) => {
  const descriptor = ':matches(ClassDeclaration, ClassExpression)'
  const node = queryContext(context, descriptor)
  return {
    'meta': {
      'kind': 'class'
    },
    'name': get(node, 'id.name'),
    'superClass': get(node, 'superClass')
  }
}

/**
 * @private
 * @ignore
 */

const visitNewExpression = (context) => {
  const descriptor =
    'ExpressionStatement > [left.property.name="prototype"]' +
    '[right.type="NewExpression"]'
  const node = queryContext(context, descriptor)
  return {
    'meta': {
      'kind': 'function'
    },
    'name': get(node, 'left.object.name'),
    'superClass': get(node, 'right.callee')
  }
}

/**
 * @private
 * @ignore
 */

const getSuperClass = (context, node) => {
  const superClassName = get(
    first(get(node, 'declarations')),
    'id.name'
  )
  return first(esquery.match(
    context.code.ast,
    esquery.parse(`Identifier[name="${superClassName}"]`)
  ))
}

/**
 * @private
 * @ignore
 */

const visitObjectExpression = (context) => {
  const descriptor = ':matches(VariableDeclaration, AssignmentExpression' +
    '[left.property.name="prototype"][right.type="CallExpression"],' +
    '[right.callee.object.name="Object"]' +
    '[callee.property.name="create"][arguments]' +
    ' [object][property.name="prototype"])'
  const node = queryContext(context, descriptor)
  const superClass = getSuperClass(context, node)
  return {
    'meta': {
      'kind': 'Object'
    },
    'name': get(context.nodes.get(context.filePath), 'name'),
    superClass
  }
}

/**
 * @private
 * @ignore
 */

const visitPrototypeConstructor = (context) => {
  const descriptor = 'AssignmentExpression' +
    '[left.property.name="constructor"][right.type="Identifier"]'
  const node = queryContext(context, descriptor)
  return {
    'meta': {
      'kind': 'function'
    },
    'name': get(node, 'left.object.object.name'),
    'superClass': get(node, 'right')
  }
}

/**
 * Detects the prototype of an object whenever possible.
 *
 * @class
 * @throws {TypeError} ⛔️  **Note:** PrototypeInspector does not have a
 * working constructor. Invoking new PrototypeInspector will throw a TypeError.
 */

class PrototypeInspector {
  constructor () {
    const msg = 'PrototypeInspector is static and does not ' +
      'have a working constructor.'
    throw new TypeError(msg)
  }

  /**
   * Returns a prototype [`ASTNode`](https://goo.gl/yTwW1m#node-objects).
   *
   * @param {ASTNode} node - A node to check. This node type is one of
   *   `Program`, `FunctionDeclaratikon`, `FunctionExpression`, and
   *   `ArrowFunctionExpression`.
   * @memberOf PrototypeInspector
   * @returns {ASTNode} The node's prototype.
   * @static
   */

  static getPrototypeOf (node) {
    let index = 0
    const ONE = 1
    let proto = nullResult
    const fns = [
      visitClass,
      visitNewExpression,
      visitPrototypeConstructor,
      visitObjectExpression
    ]

    for (; index < fns.length; index += ONE) {
      proto = get(fns, index)(node)
      if (isString(get(proto, 'name'))) {
        break
      }
    }

    return proto
  }

  /**
   * Returns the [`Scope`](https://goo.gl/AXjJ84#scope-interface) for
   * a given Context.
   *
   * @param {CrcContext} context - A CrcContext instance.
   * @memberOf PrototypeInspector
   * @returns {Scope} The ESLint [`Scope`](https://goo.gl/AXjJ84#scope-interface).
   * @static
   */

  static getScopeOf (context) {
    const scopeManager = eslintScope.analyze(context.code.ast)
    return scopeManager.acquire(context.code.ast)
  }
}

module.exports = PrototypeInspector
