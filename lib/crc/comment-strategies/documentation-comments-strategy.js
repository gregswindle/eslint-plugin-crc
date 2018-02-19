const CommentsStrategy = require("../comments-strategy");
const documentation = require("documentation");

/**
 * Uses the documentation library to generate tokenized comments.
 *
 * @class DocumentationCommentsStrategy
 * @extends {CommentsStrategy}
 *
 * @prop {array.<String>} [files=[]] - An array of source code file paths.
 *
 * @param {array.<String>} [files=[]] - An array of source code file paths.
 * @memberOf module:crc/typedef
 *
 */

class DocumentationCommentsStrategy extends CommentsStrategy {
  /**
   * Provides documentation-tokenized JSDoc comments.
   *
   * @async
   * @override
   * @memberof DocumentationCommentsStrategy
   * @instance
   *
   * @returns {array.<ASTNode>} A collection of documentation-tokenized
   *  JSDoc comments.
   */

  async parse () {
    const commentsJson = await this.toString();
    return JSON.parse(commentsJson);
  }

  /**
   * Serializes comments as JSON.
   *
   * @async
   * @override
   * @method toString
   * @memberof DocumentationCommentsStrategy
   * @instance
   *
   * @returns {string} A JSON string representation of the comments.
   */

  async toString () {
    const comments = await documentation.build(this.files, {
      "access": ["public"],
      "extension": [
        "es6",
        "js",
        "jsx"
      ]
    }).then(documentation.formats.json);
    return comments;
  }
}

module.exports = DocumentationCommentsStrategy;
