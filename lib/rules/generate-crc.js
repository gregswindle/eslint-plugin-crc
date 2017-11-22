/**
 * @fileoverview Generate class-responsibilities-collaborators models to assess and refactor JavaScript source code.
 * @author Greg Swindle
 */

const CrcModel = require("./crc-model");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Generate class-responsibilities-collaborators models to assess and refactor JavaScript source code.",
            category: "Practices",
            recommended: false
        },
        fixable: null,  // Or "code" or "whitespace"
        schema: [
            // Fill in your schema
        ]
    },

    create(context) {

        // Variables should be defined here
        const crcModelList = [];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // Any helper functions should go here or else delete this section

        /**
         * AddCrcModel - Create a CrcModel and add it to the crcModelList
         *
         * @param {object} node  An Espree AST node.
         * @param {type} context Contains information that is relevant to the [context](https://eslint.org/docs/developer-guide/working-with-rules#the-context-object) of the rule.
         *
         * @returns {void}
         */
        const addCrcModel = (node, context) => {
            const crcModel = CrcModel.factory(node, context);
            // eslint-disable-next-line no-console
            console.log(crcModel);
            crcModelList.push(crcModel);
        };



        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // Detect constructor-based prototypal inheritance, i.e., "classes"
            "ExpressionStatement > [left.property.name=\"prototype\"][right.type=\"NewExpression\"]"(node) {
                addCrcModel(node, context);
            },

            "AssignmentExpression[left.property.name=\"prototype\"][right.type=\"CallExpression\"],[right.callee.object.name=\"Object\"][callee.property.name=\"create\"][arguments] [object][property.name=\"prototype\"]"(node) {
                addCrcModel(node, context);
            },

            "AssignmentExpression[left.property.name=\"constructor\"][right.type=\"Identifier\"]"(node) {
                addCrcModel(node, context);
            },

            "ClassDeclaration[superClass]"(node) {
                addCrcModel(node, context);
            }
        };
    }
};
