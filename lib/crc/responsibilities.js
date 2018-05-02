const DocumentationStrategy =
  require('./comment-strategies/documentation-strategy')

const defaultConstructorOptions = {
  'jsdocParser' (filePaths) {
    return new DocumentationStrategy(filePaths)
  }
}

/**
 * @class Responsibilities
 *
 * @classdesc
 * Evaluates objects for declarations of intent, i.e., responsibility.
 *
 * @property {array.<Comment>} comments - A list of doctrine comments.
 * @property {array.<string>} descriptions - A list of descriptions.
 * @property {string} primary - The description for a given CrcClass.
 *
 * @param {CrcClass} crcClass - The ECMAScript object under analysis.
 *
 * @requires module:crc/comments-strategy
 * @requires module:crc/comments-strategy/documentation-strategy
 * @this CrcResponsibility
 */

class Responsibilities {
  constructor (crcClass, options = defaultConstructorOptions) {
    this.jsdocParser = options.jsdocParser([crcClass.meta.filePath])
    this.class = crcClass
    this.descriptions = null
    this.primary = null
  }
}

module.exports = Responsibilities
