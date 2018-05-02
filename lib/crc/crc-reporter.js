const CrcClass = require('./crc-class')
const CrcCodebase = require('./crc-codebase')
const CrcModel = require('./crc-model')

/**
 * @class CrcReporter
 *
 * @classdesc Generates an array of CrcModels.
 *
 * @prop {array.<CrcModel>} crcModels - Provides all CrcModels for a set of source
 *  code files.
 * @prop {CrcCodebase} codebase - Provides the AST for a set of source code files.
 *
 * @this CrcReporter
 */

class CrcReporter {
  constructor () {
    this.crcModels = []
    this.codebase = null
  }

  /**
   * Creates a report from all ECMAScript resources.
   *
   * @param {array.<Result>} results - A list of result objects.
   *
   * @returns {array.<CrcModel>} A list of CrcModels.
   */

  report (results) {
    this.codebase = new CrcCodebase(results)

    const crcClasses = []
    this.codebase.contexts.forEach((context) => {
      const crcClass = CrcClass.create(context)
      crcClasses.push(crcClass)
    })

    this.crcModels = crcClasses.map((crcClass) => new CrcModel({
      'class': crcClass,
      'collaborators': [],
      'responsibilities': []
    }))

    return this.crcModels
  }
}

module.exports = CrcReporter
