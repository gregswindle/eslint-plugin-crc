const {expect} = require("chai");
const DocumentationStrategy = require("../../../lib/crc/comment-strategies/documentation-strategy");

describe("crc/documentation-comments-strategy,", () => {
  let comments = null;

  afterEach(() => {
    comments = null;
  });

  describe("uses a common interface for comment 'plugins', and", () => {
    beforeEach(() => {
      comments = new DocumentationStrategy([
        "tests/fixtures/crc/crc-responsibilities/rectangle.js"
      ]);
    });

    it("accepts an array of file paths", () => {
      const ONE = 1;

      expect(comments.files.length).to.eq(ONE);
    });

    it("parses its files into a documentation AST", async () => {
      const ast = await comments.parse();
      expect(ast).to.be.ok;
      expect(ast).to.be.an("Array");
    });

    it("generates a JSON string of comments", async () => {
      const commentsJson = await comments.toString();
      expect(commentsJson).to.be.a("String");
    });
  });
});
