const defaultConstructorParams = {
  "context": null,
  "description": "",
  "filePath": null,
  "kind": "class",
  "references": []
};

/**
 * Represents as prototypal summary object used for reporting.
 *
 * @class
 */

class CrcMeta {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {Object} [params] - All possible parameters.
   * @param {Context} [params.context] - The ESLint Context object.
   * @param {string} [params.description] - A summary of the object's purpose.
   * @param {string} [params.filePath] - The full path to the source code file.
   * @param {string} [params.kind] - The ASTNode type.
   * @param {array.<ASTNode>} [params.references] - A list of dependents.
   */

  constructor (params = defaultConstructorParams) {
    this.context = params.context;
    this.description = params.description;
    this.filePath = params.filePath;
    this.kind = params.kind;
    this.references = params.references;
  }

  static get nullObject () {
    class NullCrcMeta extends CrcMeta {}
    return new NullCrcMeta(defaultConstructorParams);
  }
}

module.exports = CrcMeta;
