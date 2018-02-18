const doctrine = require("doctrine");
const doctrineOpts = require("./doctrine-opts");
const {
  first,
  get,
  isEmpty,
  pull,
  replace
} = require("lodash");

const cleanText = (text) => {
  const SINGLE_SPACE = " ";

  return replace(text, /\s+/gim, SINGLE_SPACE).trim();
};

const getComments = (crcClass) => get(crcClass, "code.ast.comments", [])
  .map((comment) => doctrine.parse(
    get(comment, "value"),
    doctrineOpts.parse
  ));

const getPrimaryDescription =
  (comments) => get(
    comments.find((comment) => !isEmpty(get(comment, "description"))),
    "description",
    ""
  );

const pullAllTags = (comments) => {
  const comment = comments.find((cmt) => {
    const tags = get(cmt, "tags", []);
    return tags.find((tag) => doctrineOpts.descriptions.includes(tag.title));
  });
  return get(comment, "tags", []);
};

const getDescriptionsFromTags = (comments) => {
  const tags = pullAllTags(comments);
  return pull(tags.map((tag) => get(tag, "description", null)), null);
};

const getDescriptionFromTags = (comments) => {
  const tags = pullAllTags(comments);
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

  return cleanText(getPrimaryDescription(comments) ||
    getDescriptionFromTags(comments));
};

const getDescription =
  (crcClass) => cleanText(descriptionFromContext(crcClass.meta.context));

const getAllDescriptions = (comments) => {
  const descriptions =
    comments
      .filter((comment) => !isEmpty(get(comment, "description")))
      .map((comment) => get(comment, "description"))
      .filter((description) => !description.startsWith("eslint-disable"));
  const tagDescriptions = getDescriptionsFromTags(comments);
  return descriptions.concat(tagDescriptions);
};

/**
 * Evaluates objects for declarations of intent, i.e., responsibility.
 *
 * @param {CrcClass} crcClass - The ECMAScript object under analysis.
 */

class CrcResponsibility {
  constructor (crcClass) {
    this.comments = getComments(crcClass);
    this.descriptions = getAllDescriptions(this.comments);
    this.primary = getDescription(crcClass);

    // CrcClass.meta.description = this.primary;
  }

  /**
   * Get all responsibilities.
   *
   * @returns {array.<string>} An arrary of resposibilities.
   * @memberof CrcResponsibility
   */

  valueOf () {
    return this.descriptions;
  }

  /**
   * A factory method that generates a
   * [`doctrine`](https://github.com/eslint/doctrine) AST and
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
}

module.exports = CrcResponsibility;
