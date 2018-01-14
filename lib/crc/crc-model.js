/**
 * Default parameters for a CrcModel NullObject.
 *
 * @private
 */
const defaultParams = {
  class: null,
  collaborators: [],
  responsibilities: []
};

/**
 * Represents a **Class-Responsibility-Collaboration model**, which expresses
 * the scope of an object's behaviors (**_responsibilities_**) and the objects
 * it depends on to fulfill its responsibilities (**_collaborators_**).
 *
 * @property {CrcClass} class - A summary representation of `class`.
 */
class CrcModel {
  /**
   * Create a shadow Class-Responsibility-Collaboration model.
   *
   * @class
   * @param {Object} params - A parameter object that optionally sets all of
   * the CrcModel's properties.
   * @param {CrcClass} [params.class] - A `class` representation.
   * @param {array.<CrcClass>} [params.collaborators] - A collection of zero or
   * more CrcClasses that this object depends on.
   * @param {array.<CrcResponsibility>} [params.responsibilities] - A list of
   * data this object must maintain and/or operations it must perform.
   * @example
   * const crcModel = new CrcModel({
   *   class,
   *   responsibilities,
   *   collaborators
   * });
   */
  // eslint-disable-next-line node/no-unsupported-features
  constructor (params = defaultParams) {
    this.class = params.class;
    this.collaborators = params.collaborators;
    this.responsibilities = params.responsibilities;
  }

  // eslint-disable-next-line node/no-unsupported-features
  // static parse (rawSource) {
  //
  // }
}

module.exports = CrcModel;
