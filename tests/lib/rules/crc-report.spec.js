/**
 * @fileoverview Generate class-responsibilities-collaborators models to assess and refactor JavaScript source code.
 * @author Greg Swindle
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
// eslint-disable-next-line node/no-unsupported-features
const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/crc-report");

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
// Const invalidPattern = {
//     Code: "",
//     Errors: [{
//         Message: "Fill me in.",
//         Type: "Me too"
//     }]
// };

ruleTester.run("rule:crc-report", rule, {

  valid: [
    // Give me some code that won't trigger a warning
    "Square.prototype = new Polygon()",
    "Square.prototype = Object.create(Polygon.prototype)",
    "Square.prototype.constructor = Polygon",
    "class Square extends Polygon {}"
  ],

  invalid: []
});
