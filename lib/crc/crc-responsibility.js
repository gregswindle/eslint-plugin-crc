const doctrine = require("doctrine");
const doctrineOpts = require("./doctrine-opts");
const {
  first,
  get,
  isEmpty,
  replace
} = require("lodash");

const getComments = (crcClass) => {
  const comments = get(crcClass, "code.ast.comments", []);
  return comments.map((comment) => doctrine.parse(
    comment.value,
    doctrineOpts.parse
  ));
};

const getPrimaryDescription =
  (comments) => get(
    comments.find((comment) => !isEmpty(comment.description)),
    "description"
  );

const getDescriptionFromTags = (comments) => {
  const comment = comments.find((cmt) => {
    const tags = get(cmt, "tags", []);
    return tags.find((tag) => doctrineOpts.descriptions.includes(tag.title));
  });
  const tags = get(comment, "tags", []);
  return get(first(tags), "description");
};

const descriptionFromContext = (context) => {
  const cxtComments = get(context, "code.ast.comments", []);
  const comments =
    cxtComments.map((comment) => doctrine.parse(comment.value, {
      "recoverable": true,
      "sloppy": true,
      "unwrap": true
    }));

  const description =
    getPrimaryDescription(comments) || getDescriptionFromTags(comments);

  const SINGLE_SPACE = " ";

  return replace(description, /\s+/gim, SINGLE_SPACE).trim();
};

const getDescription =
  (crcClass) => descriptionFromContext(crcClass.meta.context);

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

/**
 * Evaluates objects for declarations of intent, i.e., responsibility.
 *
 * @param {CrcClass} crcClass - The ECMAScript object under analysis.
 */

class CrcResponsibility {
  constructor (crcClass) {
    this.comments = getComments(crcClass);
  }

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
    return new CrcResponsibility(crcClass);
  }

  /**
   * @static descriptionFromContext - Retrieve the purpose of an object based
   *  on its JSDoc @description tag's value.
   *
   * @param {CrcContext} context - The context of the object.
   *
   * @returns {string} A declaration of purpose (if available).
   */

  static descriptionFromContext (context) {
    return descriptionFromContext(context);
  }

  /**
   * @static assign - Set CrcClass property values.
   *
   * @param {CrcClass} crcClass - The CrcClass whose `meta.description` property
   *  you want to assign.
   *
   * @returns {void}
   */

  static assign (crcClass) {
    setDescription(crcClass);
  }
}

module.exports = CrcResponsibility;
