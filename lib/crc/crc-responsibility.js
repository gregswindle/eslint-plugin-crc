const doctrine = require("doctrine");
const {
  eq,
  first,
  flatMapDeep,
  get,
  isEmpty,
  pick,
  property
} = require("lodash");

const createResponsibility = (tag) => pick(tag, [
  "description",
  "name"
]);

const pluckResponsibilities = (comments) => {
  const responsibilities = [];
  comments.forEach((comment) => {
    const tags = get(comment, "tags");
    return tags.forEach((tag) => {
      if (!isEmpty(tag.name) && eq(tag.title, "property")) {
        responsibilities.push(createResponsibility(tag));
      }
    });
  });
  return responsibilities;
};

/**
 * Evaluates objects for declarations of intent, i.e., responsibility.
 *
 */

class CrcResponsibility {
  constructor (crcClass) {
    this.comments = getComments(crcClass);
    this.all = pluckResponsibilities(this.comments);
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

const getDescriptions = (crcClass) => {
  const comments = getComments(crcClass);
  return flatMapDeep(comments, property("description"));
};

const getDescription = (crcClass) => first(getDescriptions(crcClass));

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
