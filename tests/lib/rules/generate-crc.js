/**
 * @fileoverview Generate class-responsibilities-collaborators models to assess and refactor JavaScript source code.
 * @author Greg Swindle
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/generate-crc"),

    RuleTester = require("eslint").RuleTester;

    RuleTester.setDefaultConfig({
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
      }
    })

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const invalidPattern = {
    code: "",
    errors: [{
        message: "Fill me in.",
        type: "Me too"
    }]
}
ruleTester.run("generate-crc", rule, {

    valid: [
        // give me some code that won't trigger a warning
        'Square.prototype = new Polygon()',
        'Square.prototype = Object.create(Polygon.prototype)',
        'Square.prototype.constructor = Polygon',
        'class Square extends Polygon {}'
    ],

    invalid: [

    ]
});
