const CrcClass = require('./crc-class')
const CrcMeta = require('./crc-meta')
const CrcResponsibility = require('./crc-responsibility')

/**
 * @private
 * @ignore
 */

const defaultConstructorParams = {
  'class': new CrcClass(),
  'collaborators': [],
  'meta': CrcMeta.nullObject,
  'responsibilities': []
}

/**
 * Represents a <strong>Class-Responsibility-Collaboration model</strong>,
 * which expresses the scope of an object's behaviors
 * (<strong><em>responsibilities</em></strong>) and the objects
 * it depends on to fulfill its responsibilities
 * (<strong><em>collaborators</em></strong>).
 *
 * @property {CrcClass} class - Provides a summary representation of PrototypeInspector
 *  objects.
 * @property {array.<CrcClass>} collaborators - Provides an array of zero or more objects
 *  required to fulfill the CrcModel#class's responsibilities.
 * @property {CrcMeta} meta - Provides additional information about the object.
 * @property {array.<CrcResponsibility>} responsibilities - Provides a list of
 * data this object must maintain and/or operations it must perform.
 *
 * @param {Object} [params] - A parameter object that optionally sets all of
 * the CrcModel's properties.
 * @param {CrcClass} [params.class] - A <code>class</code> representation.
 * @param {array.<CrcClass>} [params.collaborators] - A collection of zero or
 * more CrcClasses that this object depends on.
 * @param {CrcMeta} [params.meta] - An object with meta data necessary for
 *  visually rendering the CrcModel.
 * @param {array.<CrcResponsibility>} [params.responsibilities] - A list of
 * data this object must maintain and/or operations it must perform.
 *
 * @example
 * // Pass without parameters to create a NullCrcModel object
 * const crcModel = new CrcModel();
 *
 * // Provide a CrcClass instance to reveal its responsibilities and
 * // collaborators.
 * const crcModel = new CrcModel({
 *   class
 * });
 *
 * @this CrcModel
 */

class CrcModel {
  constructor (params = defaultConstructorParams) {
    this.class = params.class
    this.collaborators = params.collaborators
    this.meta = params.meta
    this.responsibilities = CrcResponsibility.create(this.class)
  }

  /**
   * @static
   * @description A CrcModel NullObject.
   *
   * 🔒 **Note:** `NullCrcModel` instances can **only** be created
   *  using the static getter `CrcModel.nullObject`.
   * @type CrcModel~NullCrcModel
   * @example
   * const nullCrcModel = CrcModel.nullObject;
   * @returns {CrcModel~NullCrcModel} A CrcModel NullObject.
   */

  static get nullObject () {
    /**
     * A CrcModel NullObject.
     *
     * 🔒 **Note:** `NullCrcModel` instances can **only** be created using the
     *  static getter `CrcModel.nullObject`.
     *
     * @extends CrcModel
     * @protected
     * @inner
     * @memberOf CrcModel
     * @example
     * const nullCrcModel = CrcModel.nullObject;
     */

    class NullCrcModel extends CrcModel {}
    return new NullCrcModel()
  }
}

module.exports = CrcModel
