const constructorSuper = require("eslint/lib/rules/constructor-super");
const {last} = require("lodash");

/*
 *-----------
 * Private
 *-----------
 */

/**
 * @ignore
 */

const isReachable = (segment) => segment.reachable;

/**
 * @ignore
 */

const isConstructorFunction = (node) => (node.type === "FunctionExpression" && node.parent.type === "MethodDefinition" && node.parent.kind === "constructor");

/**
 * @ignore
 */

const isPossibleConstructor = (node) => {
  if (!node) {
    return false;
  }

  switch (node.type) {
          case "CallExpression":
          case "ClassExpression":
          case "FunctionExpression":
          case "MemberExpression":
          case "MetaProperty":
          case "NewExpression":
          case "TaggedTemplateExpression":
          case "ThisExpression":
          case "YieldExpression":
            return true;

          case "AssignmentExpression":
            return isPossibleConstructor(node.right);

          case "ConditionalExpression":
            return (isPossibleConstructor(node.alternate) || isPossibleConstructor(node.consequent));

          case "Identifier":
            return node.name !== "undefined";

          case "LogicalExpression":
            return (isPossibleConstructor(node.left) || isPossibleConstructor(node.right));

          case "SequenceExpression":
            return isPossibleConstructor(last(node.expressions));

          default:
            return false;
  }
};

module.exports = {
  constructorSuper,

  /**
   * Checks whether or not a given node is a constructor.
   *
   * @param {ASTNode} node - A node to check. This node type is one of
   *   `Program`, `FunctionDeclaratikon`, `FunctionExpression`, and
   *   `ArrowFunctionExpression`.
   * @returns {boolean} `true` if the node is a constructor.
   */

  isConstructorFunction,

  /**
   * Checks whether a given node can be a constructor or not.
   *
   * @param {ASTNode} node - A node to check.
   * @returns {boolean} `true` if the node can be a constructor.
   */

  isPossibleConstructor,

  /**
   * Checks whether a given code path segment is reachable or not.
   *
   * @param {CodePathSegment} segment - A code path segment to check.
   * @returns {boolean} `true` if the segment is reachable.
   */

  isReachable
};
