const CrcClass = require("./crc-class");
const CrcResponsibility = require("./crc-responsibility");

/**
 * Default parameters for a CrcModel NullObject.
 *
 * @private
 */

const defaultConstructorParams = {
  "class": new CrcClass(),
  "collaborators": [],
  "meta": {
    "toc": {
      "anchor": null,
      "link": null
    }
  },
  "responsibilities": []
};

/**
 * Represents a <strong>Class-Responsibility-Collaboration model</strong>,
 * which expresses the scope of an object's behaviors
 * (<strong><em>responsibilities</em></strong>) and the objects
 * it depends on to fulfill its responsibilities
 * (<strong><em>collaborators</em></strong>).
 *
 * @property {CrcClass} class - A summary representation of prototypable
 *  objects.
 * @property {array.<CrcClass>} collaborators - An array of zero or more objects
 *  required to fulfill the CrcModel#class's responsibilities.
 * @property {CrcMeta} meta - Additional information.
 * @property {array.<CrcResponsibility>} responsibilities - A list of
 * data this object must maintain and/or operations it must perform.
 * @example
 * // Pass without parameters to create a NullCrcModel object
 * const crcModel = new CrcModel();
 *
 * // Provide a CrcClass instance to reveal its responsibilities and
 * // collaborators.
 * const crcModel = new CrcModel({
 *   class
 * });
 */

class CrcModel {
  /**
   * Create a shadow Class-Responsibility-Collaboration model.
   *
   * @class
   * @param {Object} [params] - A parameter object that optionally sets all of
   * the CrcModel's properties.
   * @param {CrcClass} [params.class] - A <code>class</code> representation.
   * @param {array.<CrcClass>} [params.collaborators] - A collection of zero or
   * more CrcClasses that this object depends on.
   * @param {object} [params.meta] - An object with meta data necessary for
   *  visually rendering the CrcModel.
   * @param {array.<CrcResponsibility>} [params.responsibilities] - A list of
   * data this object must maintain and/or operations it must perform.
   */

  constructor (params = defaultConstructorParams) {
    this.class = params.class;
    this.collaborators = params.collaborators;
    this.meta = params.meta;
    this.responsibilities = CrcResponsibility.assign(params.class);
  }
}

module.exports = CrcModel;
