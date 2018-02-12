const CrcResponsibility = require("../../../lib/crc/crc-responsibility");
const context = require("../../fixtures/crc/crc-responsibilities/geometry-context");
const squareContext = require("../../fixtures/crc/crc-responsibilities/square-context");
const { expect } = require("chai");

describe("CrcResponsibility", () => {
  describe("tries to extract a \"responsibility\" from these JSDoc comments", () => {
    const POINT = 0;
    const POLYGON = 1;
    const SQUARE = 2;
    const RECTANGLE = 3;
    const nodes = context.code.ast.body;

    specify("* @classdesc", () => {
      const crc =
        CrcResponsibility.create(nodes[POLYGON], context);

      expect(crc.responsibility).to.equal("A plane figure with at least three straight sides and angles, and typically five or more.");
    });

    specify("* @desc", () => {
      const { responsibility } =
        CrcResponsibility.create(nodes[RECTANGLE], context);

      expect(responsibility).to.contain("A plane figure with four straight sides and four right angles");
    });

    specify("* @description", () => {
      const GET = 1;
      const areaAccessorNode = context.code.ast.body[0].body.body[GET];
      expect(CrcResponsibility.create(areaAccessorNode, squareContext).responsibility).to.be.ok;
    });

    specify("* @summary", () => {
      const MODULE = 4;
      const moduleNode = context.code.ast.body[MODULE];
      expect(CrcResponsibility.create(moduleNode, context).responsibility).to.equal("The branch of mathematics concerned with shapes.");
    });

    specify("* no tag, but first comment entry", () => {
      const { responsibility } =
        CrcResponsibility.create(nodes[SQUARE], context);
      expect(responsibility).to.equal("A plane figure with four equal straight sides and four right angles.");
    });
  });

  describe("logs a Bunyan error if parse options set attachComment: false", () => {
    const GET = 1;
    const areaAccessorNode = squareContext.code.ast.body[0].body.body[GET];
    expect(CrcResponsibility.create(areaAccessorNode, squareContext).responsibility).not.to.be.ok;
  });
});
