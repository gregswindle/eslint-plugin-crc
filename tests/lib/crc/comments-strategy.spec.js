const { expect } = require("chai");
const CommentsStrategy = require("../../../lib/crc/comments-strategy");

describe("crc/comments-strategy,", () => {
  let comments = null;

  afterEach(() => {
    comments = null;
  });

  describe("uses a common interface for comment 'plugins', and", () => {
    beforeEach(() => {
      comments = new CommentsStrategy([
        "tests/fixtures/crc/crc-responsibilities/rectangle.js"
      ]);
    });

    it("accepts an array of file paths", () => {
      const ONE = 1;
      expect(comments.files.length).to.eq(ONE);
    });

    it("parses its files into an ESLint.SourceCode#comments collection", () => {
        const ast = comments.parse();
        expect(ast).to.be.an("Array");
      });

      it("generates a JSON string of comments", () => {
        const json = comments.toString();

        expect(json).to.be.a("String");
      });
  });

  describe("when no file parameters are given,", () => {
    it("creates an empty array of 'files'", () => {
      comments = new CommentsStrategy();

      expect(comments.files).to.be.empty;
    });
  });
});
