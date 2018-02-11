/**
 * Detect the prototype of an ASTNode.
 *
 * @exports eslint-plugin-crc/crc/prototypable
 */


const esquery = require("esquery");
const {
  first,
  get,
  isString
} = require("lodash");

const nullResult = {
  "name": null,
  "superClass": {
  }
};

const queryContext = (context, descriptor) => first(esquery.match(
  context.code.ast,
  esquery.parse(descriptor)
));

const visitClass = (context) => {
  const descriptor = ":matches(ClassDeclaration, ClassExpression)";
  const node = queryContext(context, descriptor);
  return {
    "name": get(node, "id.name"),
    "superClass": get(node, "superClass")
  };
};

const visitNewExpression = (context) => {
  const descriptor = "ExpressionStatement > [left.property.name=\"prototype\"]" +
    "[right.type=\"NewExpression\"]";
  const node = queryContext(context, descriptor);
  return {
    "name": get(node, "left.object.name"),
    "superClass": get(node, "right.callee")
  };
};

const getSuperClass = (context, node) => {
  const superClassName = get(
    first(get(node, "right.arguments")),
    "object.name"
  );
  return first(esquery.match(
    context.code.ast,
    esquery.parse(`Identifier[name="${superClassName}"]`)
  ));
};

const visitObjectExpression = (context) => {
  const descriptor = ":matches(VariableDeclaration, AssignmentExpression" +
    "[left.property.name=\"prototype\"][right.type=\"CallExpression\"]," +
    "[right.callee.object.name=\"Object\"]" +
    "[callee.property.name=\"create\"][arguments]" +
    " [object][property.name=\"prototype\"])";
  const node = queryContext(context, descriptor);
  const superClass = getSuperClass(context, node);
  return {
    "name": get(node, "left.object.name"),
    superClass
  };
};

const visitPrototypeConstructor = (context) => {
  const descriptor = "AssignmentExpression" +
    "[left.property.name=\"constructor\"][right.type=\"Identifier\"]";
  const node = queryContext(context, descriptor);
  return {
    "name": get(node, "left.object.object.name"),
    "superClass": get(node, "right")
  };
};

const getPrototypeOf = (node) => {
  let index = 0;
  const ONE = 1;
  const fns = [
    visitClass,
    visitNewExpression,
    visitObjectExpression,
    visitPrototypeConstructor
  ];

  for (; index < fns.length; index += ONE) {
    const proto = fns[index](node);
    if (isString(proto.name)) {
      return proto;
    }
  }
  nullResult.name = get(node.nodes.get(node.filePath), "name");
  return nullResult;
};


module.exports = {
  /**
   * Returns a prototype ASTNode.
   *
   * @param {ASTNode} node - A node to check. This node type is one of
   *   `Program`, `FunctionDeclaratikon`, `FunctionExpression`, and
   *   `ArrowFunctionExpression`.
   * @returns {ASTNode} The node's prototype.
   */
  getPrototypeOf
};
