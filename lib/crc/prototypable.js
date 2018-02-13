const eslintScope = require("eslint-scope");
const esquery = require("esquery");
const {
  first,
  get,
  isString
} = require("lodash");

/**
 * @private
 * @ignore
 */

const nullResult = {
  "meta": {
    "kind": "Object"
  },
  "name": null,
  "superClass": {
  }
};

/**
 * @private
 * @ignore
 */

const queryContext = (context, descriptor) => first(esquery.match(
  context.code.ast,
  esquery.parse(descriptor)
));

/**
 * @private
 * @ignore
 */

const visitClass = (context) => {
  const descriptor = ":matches(ClassDeclaration, ClassExpression)";
  const node = queryContext(context, descriptor);
  return {
    "meta": {
      "kind": "class"
    },
    "name": get(node, "id.name"),
    "superClass": get(node, "superClass")
  };
};

/**
 * @private
 * @ignore
 */

const visitNewExpression = (context) => {
  const descriptor = "ExpressionStatement > [left.property.name=\"prototype\"]" +
    "[right.type=\"NewExpression\"]";
  const node = queryContext(context, descriptor);
  return {
    "meta": {
      "kind": "function"
    },
    "name": get(node, "left.object.name"),
    "superClass": get(node, "right.callee")
  };
};

/**
 * @private
 * @ignore
 */

const getSuperClass = (context, node) => {
  const superClassName = get(
    first(get(node, "declarations")),
    "id.name"
  );
  return first(esquery.match(
    context.code.ast,
    esquery.parse(`Identifier[name="${superClassName}"]`)
  ));
};

/**
 * @private
 * @ignore
 */

const visitObjectExpression = (context) => {
  const descriptor = ":matches(VariableDeclaration, AssignmentExpression" +
    "[left.property.name=\"prototype\"][right.type=\"CallExpression\"]," +
    "[right.callee.object.name=\"Object\"]" +
    "[callee.property.name=\"create\"][arguments]" +
    " [object][property.name=\"prototype\"])";
  const node = queryContext(context, descriptor);
  const superClass = getSuperClass(context, node);
  return {
    "meta": {
      "kind": "Object"
    },
    "name": get(context.nodes.get(context.filePath), "name"),
    superClass
  };
};

/**
 * @private
 * @ignore
 */

const visitPrototypeConstructor = (context) => {
  const descriptor = "AssignmentExpression" +
    "[left.property.name=\"constructor\"][right.type=\"Identifier\"]";
  const node = queryContext(context, descriptor);
  return {
    "meta": {
      "kind": "function"
    },
    "name": get(node, "left.object.object.name"),
    "superClass": get(node, "right")
  };
};

/**
 * @private
 * @ignore
 */

const getPrototypeOf = (node) => {
  let index = 0;
  const ONE = 1;
  let proto = nullResult;
  const fns = [
    visitClass,
    visitNewExpression,
    visitPrototypeConstructor,
    visitObjectExpression
  ];

  for (; index < fns.length; index += ONE) {
    proto = fns[index](node);
    if (isString(proto.name)) {
      break;
    }
  }

  return proto;
};

/**
 * @private
 * @ignore
 */

const getScopeOf = (context) => {
  const scopeManager = eslintScope.analyze(context.code.ast);
  return scopeManager.acquire(context.code.ast);
};

/**
 * Detect the prototype of an
 * {@link https://goo.gl/yTwW1m#node-objects ASTNode}.
 *
 * @name prototypable
 * @exports eslint-plugin-crc/crc/prototypable
 * @constant
 */

const prototypable = {
  /**
   * Returns a prototype {@link https://goo.gl/yTwW1m#node-objects ASTNode}.
   *
   * @param {ASTNode} node - A node to check. This node type is one of
   *   `Program`, `FunctionDeclaratikon`, `FunctionExpression`, and
   *   `ArrowFunctionExpression`.
   * @returns {ASTNode} The node's prototype.
   */

  getPrototypeOf,

  /**
   * Returns the {@link https://goo.gl/AXjJ84#scope-interface Scope} for
   * a given Context.
   *
   * @param {CrcContext} context - A CrcContext instance.
   * @returns {@link https://goo.gl/AXjJ84#scope-interface Scope} The scope.
   */

  getScopeOf
};

module.exports = prototypable;
