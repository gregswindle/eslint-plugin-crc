const CommentsStrategy = require('../comments-strategy')
const documentation = require('documentation')

/**
 * Uses the documentation library to generate tokenized comments.
 *
 * @class DocumentationStrategy
 * @extends {CommentsStrategy}
 *
 * @prop {array.<String>} [files=[]] - An array of source code file paths.
 *
 * @param {array.<String>} [files=[]] - An array of source code file paths.
 * @memberOf module:crc/typedef
 *
 */

class DocumentationStrategy extends CommentsStrategy {
  /**
   * Provides documentation.js-tokenized JSDoc comments.
   *
   * @async
   * @override
   * @memberof DocumentationStrategy
   * @instance
   *
   * @returns {array.<Comment>} A collection of normalized
   *  JSDoc comments.
   */

  async parse () {
    const comments = await documentation.build(this.files, {
    })
    return comments
  }

  /**
   * Serializes documentation.js comments as JSON.
   *
   * @async
   * @override
   * @method toString
   * @memberof DocumentationStrategy
   * @instance
   *
   * @returns {string} A normalized JSON string representation of the comments.
   */

  async toString () {
    const comments = await this.parse()
    return documentation.formats.json(comments)
  }
}

module.exports = DocumentationStrategy
