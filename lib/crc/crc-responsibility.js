const doctrine = require("doctrine");
const bunyan = require("bunyan");
const {find, get} = require("lodash");

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

  static create (node, context) {
    const ast = doctrine.parse(unwrapComments(node, context), {
      "recoverable": true,
      "sloppy": true
    });
    const responsibility = getResponsibility(ast);
    return {
      ast,
      responsibility
    };
  }
}

/**
 * @private
 */

const logger = bunyan.createLogger({
  "level": "error",
  "name": "[eslint-plugin-crc-logger]"
});

/**
 * Remove all comment delimiters.
 *
 * @param {ASTNode} node - An ESLint representation of ECMAScript programming
 * elements.
 * @param {Context} context - A summary object with `SourceCode` and file info.
 * @returns {string} JSDoc tags associated with a prototypal `object`, stripped
 * of comment delimiters.
 * @private
 */

const unwrapComments = (node, context) => {
  let comments = [];
  try {
    comments = node.leadingComments ||
      context.getCommentsBefore(node);
  } catch (err) {
    logger.error(`${err}.

      Please configure your parser settings with "attachComment: true".`);
  }

  const unwrappedComments = comments.reduce((accumulator, comment) => (
    accumulator + comment.value
      .replace(/^\s*\//gm, "")
      .replace(/^\s*\**/gm, "")
      .replace(/^\s+/gm, "")
      .trim()
  ), "");
  return unwrappedComments;
};

/**
 * Iterates over elements of a `doctrine` AST, returning the first element
 * predicate returns truthy for.
 *
 * @param {AST} ast - A {@link https://github.com/eslint/doctrine doctrine}
 * representation of JSDoc tags.
 * @returns {string} The description of the `object`.
 * @private
 */

const getResponsibility = (ast) => {
  const descTags = [
    "classdesc",
    "desc",
    "description",
    "summary"
  ];
  const responsibility = get(ast, "description");
  if (responsibility) {
    return responsibility.replace(/\n/gm, "");
  }
  return get(
    find(ast.tags, (tag) => descTags.includes(tag.title)),
    "description"
  );
};

module.exports = CrcResponsibility;
