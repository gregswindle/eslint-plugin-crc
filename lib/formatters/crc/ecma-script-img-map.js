const ecmaScriptDescriptorMap = require("./ecma-script-descriptor-map");
const path = require("path");
const {toPairs} = require("lodash");

const defaultConstructorParams = {
  "default": "icon-javascript-filled-25.png",
  "ecmaScriptDescriptorMap": toPairs(ecmaScriptDescriptorMap),
  "info": "icon-info-30.png",
  "relPath": "./img"
};

class EsImgMap extends Map {
  constructor (params = defaultConstructorParams) {
    super(params.ecmaScriptDescriptorMap);
    this.default = params.default;
    this.info = params.info;
    this.relPath = params.relPath;
  }

  /**
   * Returns the value associated with an AST descriptor, or a default "js"
   * image.
   *
   * @override
   * @param {string} astDescriptor A syntactic representation of an ECMAScript
   *  ASTNode.
   *
   * @returns {string} An image file name that represents the version of
   *  ECMAScript associated with an ASTNode.
   */

  get (astDescriptor) {
    // Console.log(astDescriptor);

    return super.get(astDescriptor) || this.default;
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

  toSrc (astDescriptor) {
    return path.join(".", this.relPath, this.get(astDescriptor));
  }
}

const esImgMap = new EsImgMap();

module.exports = {
  EsImgMap,
  esImgMap
};
