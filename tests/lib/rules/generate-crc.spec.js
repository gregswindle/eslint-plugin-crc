/**
 * @fileoverview Generate class-responsibilities-collaborators models to assess and refactor JavaScript source code.
 * @author Greg Swindle
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/generate-crc");

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

ruleTester.run("generate-crc", rule, {

  valid: [
    // Give me some code that won't trigger a warning
    "Square.prototype = new Polygon()",
    "Square.prototype = Object.create(Polygon.prototype)",
    "Square.prototype.constructor = Polygon",
    "class Square extends Polygon {}"
  ],

  invalid: [

  ]
});
