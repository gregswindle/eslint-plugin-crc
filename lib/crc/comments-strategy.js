const SourceCodeFactory = require('./source-code-factory')
// eslint-disable-next-line no-unused-vars
const {JsonString} = require('../typedef')
const {get} = require('lodash')

/**
 * Provides an interface for various ways of
 * retrieving source code comments.
 *
 * @class CommentsStrategy
 *
 * @prop {array.<String>} [files=[]] - An array of source code file paths.
 *
 * @param {array.<String>} [files=[]] - An array of source code file paths.
 */

class CommentsStrategy {
  constructor (files = []) {
    this.files = files
  }

  /**
   * Provides tokenized JSDoc.
   *
   * @abstract
   * @method parse
   * @memberof CommentsStrategy
   * @instance
   *
   * @returns {array.<ESLint.SourceCode#ast#tokensAndComments>} The
   *  ESLint.SourceCode#ast#tokensAndComments.
   */

  parse () {
    return this.files
      .map((file) => new SourceCodeFactory(file))
      .map((source) => get(source, 'code.tokensAndComments', []))
  }

  /**
   * Serializes comments as JSON.
   *
   * @abstract
   * @method toString
   * @memberof CommentsStrategy
   * @instance
   *
   * @returns {JsonString} A JSON string representation of the comments.
   */

  toString () {
    return JSON.stringify(this.parse())
  }
}

module.exports = CommentsStrategy
