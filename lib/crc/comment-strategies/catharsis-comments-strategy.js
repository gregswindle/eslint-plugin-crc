const CommentsStrategy = require('../comments-strategy')
const catharsis = require('catharsis')

/**
 * Uses the catharsis library to generate tokenized comments.
 *
 * @class CatharsisCommentsStrategy
 * @extends {CommentsStrategy}
 *
 * @prop {array.<String>} [files=[]] - An array of source code file paths.
 *
 * @param {array.<String>} [files=[]] - An array of source code file paths.
 * @memberOf module:crc/typedef
 *
 */

class CatharsisCommentsStrategy extends CommentsStrategy {
  /**
   * Provides catharsis-tokenized JSDoc comments.
   *
   * @async
   * @override
   * @memberof CatharsisCommentsStrategy
   * @instance
   *
   * @returns {array.<ASTNode>} A collection of catharsis-tokenized
   *  JSDoc comments.
   */

  async parse () {
    const commentsJson = await this.toString()
    return JSON.parse(commentsJson)
  }

  /**
   * Serializes comments as JSON.
   *
   * @async
   * @override
   * @method toString
   * @memberof CatharsisCommentsStrategy
   * @instance
   *
   * @returns {string} A JSON string representation of the comments.
   */

  async toString () {
    const comments = await catharsis.build(this.files, {
      'access': ['public'],
      'extension': [
        'es6',
        'js',
        'jsx'
      ]
    }).then(catharsis.formats.json)
    return comments
  }
}

module.exports = CatharsisCommentsStrategy
