const NullCrcMeta = require("./null-crc-meta");
const NullSourceCode = require("./null-source-code");

const defaultConstructorParams = {
  "code": new NullSourceCode(),
  "meta": new NullCrcMeta(),
  "name": null,
  "superClass": null
};

class NullCrcClass {
  /**
   * Create a `class` representation for use in a CrcClass
   * (Class-Responsibility-Collaboration model).
   *
   * @param {Object} [params] - A parameter object that sets all of
   * the CrcClass's properties.
   * @param {SourceCode} [params.code] - The ESLint
   * {@link http://bit.ly/2kfR79f `SourceCode`} object.
   * @param {string} [params.filePath] - The physcical path the source code
   *  file.
   * @param {CrcMeta} [params.meta] - Information about the bo
   * @param {string} [params.name] - The source code identifier of the class or
   * object to be modeled.
   * @param {array<ASTNode>} [params.references] - ASTNodes with locations.
   * @param {CrcClass} [params.superClass] - The `prototype` of the object being
   * modeled. Defaults to `null`.
   * @example
   * const crcClass = new CrcClass({
   *   code: sourceCode,
   *   meta: {
   *     context,
   *     description,
   *     filePath,
   *     references
   *   },
   *   name: "Bravo",
   *   superClass: Alpha
   * });
   */

  constructor (params = defaultConstructorParams) {
    this.code = params.code;
    this.meta = params.meta;
    this.name = params.name;
    this.superClass = params.superClass;
  }
}

module.exports = NullCrcClass;
