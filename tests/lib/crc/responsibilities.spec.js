const CrcClass = require("../../../lib/crc/crc-class");
const Responsibilities = require("../../../lib/crc/responsibilities");
const {expect} = require("chai");

describe ("crc/responsibilities", () => {
  describe("will retrieve as much info from annotated source code as possible", () => {

    const mockCrcClass = CrcClass.nullObject;

    // mockCrcClass.meta.filePath = "tests/fixtures/crc/crc-responsibilities/polygon.js";
    // mockCrcClass.meta.filePath = "tests/fixtures/crc/crc-responsibilities/square.js";
    mockCrcClass.meta.filePath = "lib/crc/responsibilities.js";
    // mockCrcClass.meta.filePath = "lib/crc/formatters/md/mdn-reference.js";

    let responsibilities = null;

    beforeEach(() => {
      responsibilities = new Responsibilities(mockCrcClass);
    });

    afterEach(() => {
      responsibilities = null;
    });

    it("using a comment-strategy like DocumentationCommentStrategy", async () => {
      expect(responsibilities.jsdocParser).to.be.an("Object");
      expect(responsibilities.jsdocParser.files).to.be.an("Array");
      const comments = await responsibilities.jsdocParser.parse();
      expect(comments).to.be.ok;
      // const FIRST = 0;
      console.log(JSON.stringify(comments, null, 1));
    });
  });
});
