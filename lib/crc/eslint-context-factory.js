const astConfig = require("./ast-config");
const espree = require("espree");
const fs = require("fs");
const path = require("path");
const { SourceCode } = require("eslint");

const eslintContextFactory = {
  create: (result, descriptorFactory) => {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const src = fs.readFileSync(path.resolve(result.filePath)).toString();
    const ast = espree.parse(src, astConfig);
    return {
      code: new SourceCode(src, ast),
      filePath: result.filePath,
      descriptor: descriptorFactory.descriptor
    };
  }
};

module.exports = eslintContextFactory;
