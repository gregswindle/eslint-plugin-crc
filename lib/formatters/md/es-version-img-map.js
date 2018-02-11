const esDescriptorVersionMap = require("./data/es-descriptor-version-map");
const path = require("path");
const {kebabCase, toString} = require("lodash");

/**
 * Holds key-value pairs of ECMAScript editions (called `versions`) and
 * ESTree AST node type `descriptors`, as well as convient `findBy*` functions
 * that return the relative path to an image declaring the ECMAScript edition
 * in which a Symbol was introduced and updated.
 *
 * @property {string} default - The default path to an ES edition image.
 * @property {object} descriptor - A key-value collections of ASTNode type
 *  descriptors to ECMAScript edition or year values.
 * @property {string} info - The information icon/image.
 * @property {object} version - A key-value collections of ECMAScript editions
 *  to a standard abbreviation in the pattern of /^es[\d{1,4}|\+]$/
 * @extends Map
 */

class EsImgMap extends Map {
  constructor (params = [
    [
      "default",
      "icon-javascript-filled-25.png"
    ],
    [
      "descriptor",
      esDescriptorVersionMap.descriptor
    ],
    [
      "info",
      "icon-info-30.png"
    ],
    [
      "relPath",
      "./"
    ],
    [
      "version",
      esDescriptorVersionMap.version
    ]
  ]) {
    super(params);
    this.default = this.get("version").default;
  }

  /**
   * Return the relative image path to the ECMAScript version associated with
   * a JavaScript Symbol.
   *
   * @param {string} astDescriptor - A valid
   *  [ESTree ASTNode type descriptor]{@link https://goo.gl/yTwW1m}.
   *
   * @returns {string} The relative path to an image file that indicates
   *  the ECMAScript version(s) in which the object was introduced (and updated
   *  if applicable).
   */

  findByDescriptor (astDescriptor) {
    const kebabedDescriptor = kebabCase(astDescriptor);
    const version = this.get("descriptor")[kebabedDescriptor];
    return this.findByEsVersion(version);
  }

  /**
   * Return the relative image path to an ECMAScript version.
   *
   * @param {string|number} esVersion -The ECMAScript version.
   *
   * @returns {string} The relative image path to an ECMAScript version.
   */

  findByEsVersion (esVersion) {
    return this.get("version")[toString(esVersion)] || this.default;
  }

  /**
   * Returns the relative path to an img resource associated an AST descriptor,
   * or a default "js" image.
   *
   * @param {string} astDescriptor A syntactic representation of an ECMAScript
   *  ASTNode.
   *
   * @returns {string} The relative path to an image file name that represents
   *  the version of ECMAScript associated with an ASTNode.
   */

  toHtmlLinkElemString (astDescriptor) {
    return path.join(this.get("relPath"), this.findByDescriptor(astDescriptor));
  }
}

/**
 * A frozen instance of EsImgMap, loaded with versions and descriptors.
 *
 * @readonly
 */

const esImgMap = Object.freeze(new EsImgMap());

module.exports = {
  EsImgMap,
  esImgMap
};
