/**
 * `crc` module.
 * @module eslint-plugin-crc/crc
 * @author Greg Swindle <greg@swindle.net>
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
const CrcClass = require("./crc-class");
const CrcModel = require("./crc-model");

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

/**
 * Create class-responsibilities-collaborators
 * reporting model objects.
 */
module.exports = {
  /**
   * A `class` "summary" `Object` used for reporting.
   * @see CrcClass
   */
  CrcClass,

  /**
   * Represents a Class-Responsibility-Collaboration model, which expresses the
   * scope of an object's behaviors (**responsibilities**) and the objects it
   * depends on to fulfill its responsibilities (**collaborators**).
   * @see CrcModel
   */
  CrcModel
};
