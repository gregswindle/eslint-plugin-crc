const SourceCodeFactory = require("./source-code-factory");
const estraverse = require("estraverse");
const {get} = require("lodash");

/**
 * A utility object that manages ASTNode identity and parsing.
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
   * @returns {Map.<string, ASTNode>} A Map of all nodes, referencable by
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
   * @static getNamespace - Provides a unique key for ASTNodes in source code
   *  files.
   *
   * @param {string} filePath - The path to the file with source code.
   * @param {ASTNode} node    - The ASTNode within a source code file.
   *
   * @returns {string} The source code file path followed by #Identifier.name
   *  (if applicable).
   */

  static getNamespace (filePath, node) {
    return `${filePath}${NodeManager.getNodeName(node)}`;
  }

  /**
   * @static getNodeName - Provides the name of an ASTNode.
   *
   * @param {ASTNode} node - The ASTNode within a source code file.
   *
   * @returns {string} The name of an ASTNode, prepended by `/#`.
   */

  static getNodeName (node) {
    const nodeName = get(node, "id.name");
    if (nodeName) {
      return `/${nodeName}`;
    }
    return "";
  }

  /**
   * @static parse - Extracts all nodes from a single eslint Result object.
   *
   * @param {Result} result - The eslint Result object with ASTNodes.
   *
   * @returns {Map.<string, ASTNode>} A Map of all nodes withing multiple
   *  source code files, referencable by source file.
   */

  static parse (result) {
    const code = SourceCodeFactory.parse(result);
    const namespace = NodeManager.getNamespace(result.filePath);
    return NodeManager.getAllNodes(namespace, code);
  }
}

module.exports = NodeManager;
