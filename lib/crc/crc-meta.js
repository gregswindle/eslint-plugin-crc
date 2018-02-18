
const defaultConstructorParams = {
  "context": null,
  "description": "",
  "filePath": null,
  "kind": "class",
  "references": [],
  "toc": {
    "anchor": null,
    "link": null
  }
};

/**
 * A summary object used for reporting.
 *
 * @class
 */

class CrcMeta {
  /**
   * Collect metadata for CrcClasses, ESTree
   * [ASTNodes](https://goo.gl/yTwW1m#node-objects), and ESLint Contexts.
   *
   * @param {Object} [params] - All possible parameters.
   * @param {Context} [params.context] - The ESLint Context object.
   * @param {string} [params.description] - A summary of the object's purpose.
   * @param {string} [params.filePath] - The full path to the source code file.
   * @param {string} [params.kind] - The
   *  [`ASTNodes`](https://goo.gl/yTwW1m#node-objects) type.
   * @param {array.<ASTNode>} [params.references] - A list of dependents.
   * @param {object} [params.toc] - Table of content links for template
   *  rendering.
   * @param {string} [params.toc.anchor] - An HTMLLinkElement string.
   * @param {string} [params.toc.link] - A slugified markdown link.
   * @constructor
   */

  constructor (params = defaultConstructorParams) {
    this.context = params.context;
    this.description = params.description;
    this.filePath = params.filePath;
    this.kind = params.kind;
    this.references = params.references;
    this.toc = params.toc;
  }

  /**
   * @static
   * @description A CrcMeta NullObject.
   *
   * 🔒 **Note:** `NullCrcMeta` instances can **only** be created
   *  using the static getter `CrcMeta.nullObject`.
   * @type NullCrcMeta
   * @returns {NullCrcMeta} A CrcMeta NullObject.
   */

  static get nullObject () {
    /**
     * A CrcMeta NullObject.
     *
     * 🔒 **Note:** `NullCrcMeta` instances can **only** be created using the
     *  static getter `CrcMeta.nullObject`.
     *
     * @extends CrcMeta
     * @protected
     * @inner
     * @example
     * const nullCrcMeta = CrcMeta.nullObject;
     */

    class NullCrcMeta extends CrcMeta {}
    return new NullCrcMeta();
  }
}

module.exports = CrcMeta;
