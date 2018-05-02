const doctrine = require('doctrine')
const doctrineOpts = require('./doctrine-opts')
const {
  first,
  get,
  isEmpty,
  pull,
  replace
} = require('lodash')

/**
 * @private
 * @ignore
 */

const cleanText = (text) => {
  const SINGLE_SPACE = ' '

  return replace(text, /\s+/gim, SINGLE_SPACE).trim()
}

/**
 * @private
 * @ignore
 */

const getComments = (crcClass) => get(crcClass, 'code.ast.comments', [])
  .map((comment) => doctrine.parse(get(comment, 'value'), doctrineOpts.parse))

/**
 * @private
 * @ignore
 */

const getPrimaryDescription =
  (comments) => get(comments
    .find((cmt) => !isEmpty(get(cmt, 'description'))), 'description', '')

/**
 * @private
 * @ignore
 */

const pullAllTags = (comments) => {
  const comment = comments.find((cmt) => {
    const tags = get(cmt, 'tags', [])
    return tags.find((tag) => doctrineOpts.descriptions.includes(tag.title))
  })
  return get(comment, 'tags', [])
}

/**
 * @private
 * @ignore
 */

const getDescriptionsFromTags = (comments) => {
  const tags = pullAllTags(comments)
  return pull(tags.map((tag) => get(tag, 'description', null)), null)
}

/**
 * @private
 * @ignore
 */

const getDescriptionFromTags = (comments) => {
  const tags = pullAllTags(comments)
  return get(first(tags), 'description')
}

/**
 * @private
 * @ignore
 */

const getDescriptionFromContext = (context) => {
  const cxtComments = context.code.ast.comments
  const comments = cxtComments.map((comment) => doctrine.parse(comment.value, {
    'recoverable': true,
    'sloppy': true,
    'unwrap': true
  }))

  const description =
    getPrimaryDescription(comments) || getDescriptionFromTags(comments)

  return cleanText(description)
}

/**
 * @private
 * @ignore
 */

const getDescription =
  (crcClass) => cleanText(getDescriptionFromContext(crcClass.meta.context))

/**
 * @private
 * @ignore
 */

const getAllDescriptions = (comments) => {
  const descriptions =
    comments
      .filter((comment) => !isEmpty(get(comment, 'description')))
      .map((comment) => get(comment, 'description'))
      .filter((description) => !description.startsWith('eslint-disable'))
  const tagDescriptions = getDescriptionsFromTags(comments)
  return descriptions.concat(tagDescriptions)
}

/**
 * @class CrcResponsibility
 *
 * @classdesc
 * Creates an instance of CrcResponsibility, which evaluates objects
 * for declarations of intent, i.e., responsibility.
 *
 * @property {array.<Comment>} comments - A list of doctrine comments.
 * @property {array.<string>} descriptions - A list of descriptions.
 * @property {string} primary - The description for a given CrcClass.
 *
 * @param {CrcClass} crcClass - The ECMAScript object under analysis.
 *
 * @this CrcResponsibility
 */

class CrcResponsibility {
  constructor (crcClass) {
    this.comments = getComments(crcClass)
    this.descriptions = getAllDescriptions(this.comments)
    this.primary = getDescription(crcClass)
  }

  /**
   * Get all responsibilities.
   *
   * @memberof CrcResponsibility
   * @instance
   *
   * @returns {array.<string>} An arrary of resposibilities.
   */

  valueOf () {
    return this.descriptions
  }

  /**
   * A factory method that generates a doctrine AST and
   * responsibility string.
   *
   * @static
   * @param {ASTNode} node - An ESLint representation of ECMAScript programming
   * elements.
   * @param {Context} context - A summary object with SourceCode and file info.
   * @returns {CrcResponsibility} An object with a doctrine AST and the
   * stated responsibility for the node.
   */

  static create (crcClass) {
    return new CrcResponsibility(crcClass)
  }

  /**
   * Retrieve the purpose of an object based on its JSDoc description tag's value.
   *
   * @static
   * @method descriptionFromContext
   * @param {CrcContext} context - The context of the object.
   * @returns {string} A declaration of purpose.
   */

  static descriptionFromContext (context) {
    return getDescriptionFromContext(context)
  }
}

module.exports = CrcResponsibility
