const estraverse = require("estraverse");
const prototypable = require("./prototypable");
const {get} = require("lodash");

/**
 * A utility object that manages {@link https://goo.gl/yTwW1m#node-objects ASTNode} identity and parsing.
 */

class NodeManager {
  /**
   * @static getAllNodes - Provide all nodes within an `eslint.SourceCode`
   *  object.
   *
   * @param {string} namespace  The full path to a source file appended with
   *  a hash (#) to identify specific objects.
   * @param {SourceCode} sourceCode An `eslint.SourceCode` object.
   *
   * @returns {Map.<string, ASTNode>} A Map of all {@link https://goo.gl/yTwW1m#node-objects ASTNodes}, referencable by
   *  source file.
   */

  static getAllNodes (namespace, sourceCode) {
    const nodes = new Map();
    estraverse.traverse(sourceCode.ast, {
      enter (node) {
        const ns = NodeManager.getNamespace(namespace, node);
        nodes.set(ns, node);
      }
    });

    return nodes;
  }

  /**
   * @static getNamespace - Provides a unique key for {@link https://goo.gl/yTwW1m#node-objects ASTNodes} in source code
   *  files.
   *
   * @param {string} filePath - The path to the file with source code.
   * @param {ASTNode} node    - The {@link https://goo.gl/yTwW1m#node-objects ASTNode} within a source code file.
   *
   * @returns {string|null} The source code file path followed by #Identifier.name
   *  (if applicable).
   */

  static getNamespace (filePath, node) {
    if (filePath) {
      return `${filePath}${NodeManager.getNodeName(node)}`;
    }
    return null;
  }

  /**
   * @static getNodeName - Provides the name of an {@link https://goo.gl/yTwW1m#node-objects ASTNode}.
   *
   * @param {ASTNode} node - The {@link https://goo.gl/yTwW1m#node-objects ASTNode} within a source code file.
   *
   * @returns {string} The name of an {@link https://goo.gl/yTwW1m#node-objects ASTNode}, prepended by `/#`.
   */

  static getNodeName (node) {
    const nodeName = get(node, "id.name");
    if (nodeName) {
      return `/${nodeName}`;
    }
    return "";
  }
}

Object.assign(NodeManager, prototypable);

module.exports = NodeManager;
