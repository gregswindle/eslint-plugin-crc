
const Complexity = require("../../../lib/crc/complexity");
// const CrcContext = require("../../../lib/crc/crc-context");
const geometry = require("../../fixtures/crc/crc-responsibilities/geometry");

describe("complexity", () => {
  it("measures how easy source code is for humans to understand");
  it("measures how easy source code is for humans to understand", () => {
    // const descriptorFactory = {
    //   descriptor: "ClassDeclaration"
    // };

    // const result = {
    //   filePath: "./tests/fixtures/crc/crc-responsibilities/geometry.js",
    //   messages: [],
    //   errorCount: 0,
    //   warningCount: 0
    // };
    // const context = CrcContext.create(result, descriptorFactory);
    // TODO:
    const complexity = Complexity.analyze(JSON.stringify(geometry));
    // console.log(complexity);
  });

});

