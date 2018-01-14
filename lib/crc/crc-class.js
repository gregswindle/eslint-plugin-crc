/**
 * @fileoverview Create a `class` summary object for CrcModels.
 * @author Greg Swindle (https://github.com/gregswindle)
 */

const doctrine = require("doctrine");
// eslint-disable-next-line node/no-unsupported-features
const {first, get, isEmpty, defaults} = require("lodash");

/**
 * Default NullObject constructor parameters.
 *
 * @ignore
 * @private
 */

const defaultConstructorParams = {
  "code": null,
  "description": null,
  "meta": {},
  "name": null,
  "superClass": null
};

/**
 * Assigns a value to CrcClass#description, if one exists in JSDoc comments.
 *
 * @param {CrcClass} crcClass - The object/class we want to describe.
 *
 * @returns {void} Void.
 *
 * @example
 * setDescription(crcClass);
 * @ignore
 * @private
 */

const setDescription = (crcClass) => {
  const comments = get(crcClass, "code.ast.comments");
  if (!isEmpty(comments)) {
    const ast = doctrine.parse(first(comments).value, {
      "recoverable": true,
      "sloppy": true,
      "unwrap": true
    });
    crcClass.description = ast.description.replace(/\s+/g, " ");
  }
};

/**
 * Represents `class` "summary" `Object` used for reporting.
 *
 * @property {string} description - The purpose or intent of the `class`.
 * @property {string} name - The name of the `class`.
 * @property {SourceCode} code - The ESLint
 * {@link http://bit.ly/2kfR79f `SourceCode`} object.
 * @property {CrcClass} superClass - The `prototype` of the object being
 * modeled. Defaults to `null`.
 */

class CrcClass {
  /**
   * @classdesc Create a `class` representation for use in a CrcClass
   * (Class-Responsibility-Collaboration model).
   * @class
   * @public
   * @param {Object} [params] - A parameter object that sets all of
   * the CrcClass's properties.
   * @param {SourceCode} [params.code] - The ESLint
   * {@link http://bit.ly/2kfR79f `SourceCode`} object.
   * @param {object} []
   * @param {string} [params.name] - The source code identifier of the class or
   * object to be modeled.
   * @param {string} [params.description] - A summary of the
   * object's purpose.
   * @param {CrcClass} [params.superClass] - The `prototype` of the object being
   * modeled. Defaults to `null`.
   * @example
   * const crcClass = new CrcClass({
   *   code: sourceCode,
   *   description: "Disambiguates the letter \"B\" when stating english letters.",
   *   name: "Bravo",
   *   superClass: Alpha
   * });
   */
  // eslint-disable-next-line node/no-unsupported-features
  constructor (params = defaultConstructorParams) {
    this.description = params.description;
    this.meta = params.meta;
    this.name = params.name;
    this.code = params.code;
    this.superClass = params.superClass;
    setDescription(this);
  }

  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {CrcContext} context - A summary object with information to derive
   * a CrcModel.
   * @example
   * const crcClass = CrcClass.factory(context);
   * @returns {CrcClass} A `NullObject` for CrcClass.
   */
  // eslint-disable-next-line node/no-unsupported-features
  static factory (context) {
    const ctxt = context || {"code": null};
    const params = defaults({
      "code": ctxt.code,
      "meta": {"filePath": ctxt.filePath}
    }, defaultConstructorParams);

    return new CrcClass(params);
  }
}

module.exports = CrcClass;
