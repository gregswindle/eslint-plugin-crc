const debug = require("debug");
const doctrine = require("doctrine");
const {first, get, isEmpty} = require("lodash");

/**
 * Evaluates objects for declarations of intent, i.e., responsibility.
 *
 */

class CrcResponsibility {
  /**
   * A factory method that generates a
   * {@link https://github.com/eslint/doctrine doctrine} AST and
   * responsibility string (if found).
   *
   * @param {ASTNode} node - An ESLint representation of ECMAScript programming
   * elements.
   * @param {Context} context - A summary object with `SourceCode` and file info.
   * @returns {CrcResponsibility} An object with a `doctrine` AST and the
   * stated responsibility for the `node`.
   */

  static create (crcClass) {
    const comments = getComments(crcClass);
    debug("%O", comments);
  }

  static assign (crcClass) {
    setDescription(crcClass);
  }
}

const getComments = (crcClass) => {
  const comments = get(crcClass, "code.ast.comments");
  if (!isEmpty(comments)) {
    return comments.map((comment) => doctrine.parse(comment.value, {
      "recoverable": true,
      "sloppy": true,
      "unwrap": true
    }));
  }
  return [];
};

const getDescription = (crcClass) => {
  const comments = get(crcClass, "code.ast.comments");
  if (!isEmpty(comments)) {
    const ast = doctrine.parse(first(comments).value, {
      "recoverable": true,
      "sloppy": true,
      "unwrap": true
    });
    return ast.description.replace(/\s+/g, " ");
  }
  return "";
};

/**
 * Assigns a value to CrcClass#description, if one exists in JSDoc comments.
 *
 * @param {CrcClass} crcClass - The object/class we want to describe.
 *
 * @returns {void} Void.
 *
 * @example
 * setDescription(crcClass);
 * @ignore
 * @private
 */

const setDescription = (crcClass) => {
  crcClass.meta.description = getDescription(crcClass);
};

module.exports = CrcResponsibility;
