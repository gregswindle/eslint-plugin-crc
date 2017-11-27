/**
 * @fileoverview Generate class-responsibilities-collaborators models to assess
 * and refactor JavaScript source code.
 * @author Greg Swindle (https://github.com/gregswindle)
 */

const CrcModel = require("../crc/crc-model");
const ClassDeclarationCrcClass = require("../crc/class-declaration-crc-class");
const NewExpressionCrcClass = require("../crc/new-expression-crc-class");
const ObjectExpressionCrcClass = require("../crc/object-expression-crc-class");
const PrototypeConstructorCrcClass = require("../crc/prototype-constructor-crc-class");
const crcReportSchema = require("../crc/crc-report-schema");

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

/**
 * An ESLint rule to identify ECMAScript `classes` and generate CRC Model reports.
 * @module eslint-plugin-crc/rules/crc-report
 * @alias CrcReport
 * @property {Object} meta - Provides metadata about the Rule.
 * @property {String} meta.fixable - Either `"code"` or `"whitespace"` if the
 * `--fix` option on the
 * [command line](https://eslint.org/docs/user-guide/command-line-interface#fix)
 * automatically fixes problems reported by the rule. **Important:** Without
 * the `fixable` property, ESLint does not
 * [apply fixes](https://eslint.org/docs/developer-guide/working-with-rules-new#applying-fixes)
 * even if the rule implements `fix` functions. Omit the `fixable`
 * property if the rule is not fixable.
 * @property {array.<Object>} meta.schema - Specifies the
 * [options](https://eslint.org/docs/developer-guide/working-with-rules-new#options-schemas)
 * so ESLint can prevent invalid
 * [rule configurations](https://eslint.org/docs/user-guide/configuring#configuring-rules).
 * @property {Object} meta.docs - Provides Rule documentation.
 * @property {String} meta.docs.category - Specifies the heading under which the
 * rule is listed in the [rules index](https://eslint.org/docs/rules/).
 * @property {String} meta.docs.description - Provides the short description of
 * the rule in the [rules index](https://eslint.org/docs/rules/).
 * @property {Boolean} meta.docs.recommended - Whether the "extends":
 * `"eslint:recommended"` property in a
 * [configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
 * enables the rule.
 */
module.exports = {
  meta: {
    /** @lends CrcReport.meta **/
    docs: {
      /** @lends CrcReport.meta.description **/
      description: "Generate class-responsibilities-collaborators models to" +
      " assess and refactor JavaScript source code.",
      category: "Best Practices",
      recommended: false
    },
    fixable: null,
    schema: [
      {
        "enum": [
          "always",
          "never"
        ]
      },
      crcReportSchema
    ]
  },

  /**
     * Create an AST node visitor.
     *
     * @function create
     * @param {Context} context - Contains additional functionality that is
     * helpful for rules to do their jobs.
     *
     * As the name implies, the
     * {@link  https://eslint.org/docs/developer-guide/working-with-rules-new#the-context-object `context`}
     * object contains information that is relevant to the `context` of the rule.
     * @example
     * eslint .
     *
     * @returns {Object} An object with methods that ESLint calls to “visit”
     * nodes while traversing the abstract syntax tree (AST as defined by
     * [ESTree](https://github.com/estree/estree)) of JavaScript code.
     */
  create (context) {
    // Variables should be defined here

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    // Any helper functions should go here or else delete this section
    /**
     * Create a CrcModel and add it to the crcModelList.
     *
     * @param {ASTNode} node - An Espree AST node.
     * @param {Context} context - Contains information that is relevant to the
     * [context](https://eslint.org/docs/developer-guide/working-with-rules#the-context-object)
     * of the rule.
     * @param {CrcClass} crcClass - A `CrcClass` instance.
     * @example
     * addCrcModel(node, context);
     *
     * @private
     */
    const addCrcModel = (node, context, crcClass) => {
      const crcModel = new CrcModel({
        class: crcClass.factory(node, context),
        responsibilities: [],
        collaborators: []
      });
      context.report({
        node,
        message: {
          message: "",
          crcModel
        }
      });
    };

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {

      // Detect constructor-based prototypal inheritance, i.e., "classes"
      /* eslint-disable max-len */
      "ExpressionStatement > [left.property.name=\"prototype\"][right.type=\"NewExpression\"]" (node) {
        addCrcModel(
          node,
          context,
          new NewExpressionCrcClass()
        );
      },

      "AssignmentExpression[left.property.name=\"prototype\"][right.type=\"CallExpression\"],[right.callee.object.name=\"Object\"][callee.property.name=\"create\"][arguments] [object][property.name=\"prototype\"]" (node) {
        addCrcModel(
          node,
          context,
          new ObjectExpressionCrcClass()
        );
      },

      "AssignmentExpression[left.property.name=\"constructor\"][right.type=\"Identifier\"]" (node) {
        addCrcModel(
          node,
          context,
          new PrototypeConstructorCrcClass()
        );
      },

      "ClassDeclaration[superClass]" (node) {
        addCrcModel(
          node,
          context,
          ClassDeclarationCrcClass
        );
      }
      /* eslint-enable */
    };
  }
};
