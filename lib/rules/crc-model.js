const { assign, clone, defaults } = require('lodash');

(function () {
    /**
   * @private
   * @see https://www.codacy.com/app/greg_7/eslint-plugin-crc/file/5650722498/issues/source?bid=4284512&fileBranchId=4284512#l23
   * @param {array} options - An array of CrcModel property values.
   * @returns {array} opts - An array of CrcModel property values.
   */
    const loadOptions = function (options) {
        const defaultOptions = {
            collaborators: [],
            context: null,
            declaration: null,
            identifier: null,
            references: [],
            responsibilities: []
        };
        const opts = defaults(options, defaultOptions);
        return clone(opts);
    };

    /**
     * Represents a Class-Responsibility-Collaboration model, which expresses the
     * scope of an object's behaviors (responsibilities) and the objects it depends
     * on to fulfill its responsibilities (collaborators).
     */
    class CrcModel {
        /**
         * Create a shadow Class-Responsibility-Collaboration model.
         * @param {string} name - The source code identifier of the class or object to be modeled.
         * @param {object} [options] - A parameter object that optionally sets all of the CrcModel's properties.
         * @param {array} [options.collaborators] - A collection of zero or more CrcModels that this object depends on.
         * @param {array} [options.references] - A collection of zero or more Espree Tokens representing where this object is used in the source code.
         * @param {object} [options.identifier] - An Espree Identifier object.
         * @param {array} [options.responsibilities] - A list of data this object must maintain and/or operations it must perform.
         * @param {object} [options.declaration] - The Espree Identifier that represents "where" this object was declared into being.
         * @param {object} [options.superClass] - The `prototype` of the object being modeled. Defaults to `Object`.
         */
        constructor(name, options) {
            this.name = name;
            const opts = loadOptions(options);
            assign(this, opts);
        }

        /**
         *
         * @static factory - Generates a `CrcModel` based on additional abstract syntax tree data.
         * @param {object} options - A parameter object that optionally sets all of the CrcModel's properties.
         * @param {string} options.name -The source code identifier of the class or object to be modeled.
         * @param {array} [options.collaborators] - A collection of zero or more CrcModels that this object depends on.
         * @param {array} options.references - A collection of zero or more Espree Tokens representing where this object is used in the source code.
         * @param {object} [options.identifier] - An Espree Identifier object.
         * @param {array} [options.responsibilities] - A list of data this object must maintain and/or operations it must perform.
         * @param {object} [options.declaration] - The Espree Identifier that represents "where" this object was declared into being.
         * @param {object} ast - The Espree abstract syntax tree used to analyze the codebase.
         *
         * @returns {CrcModel} A shadow of CrcModel.
         */
        static factory(node, context) {
            const lhs = node.left.object;
            //Const rhs = node.right.object;
            const name = lhs.name || lhs.object.name;
            const options = {
                collaborators: [],
                context: {
                    fileName: context.getFilename(),
                    sourceCode: context.getSourceCode().text
                },
                declarations: context.getDeclaredVariables(node),
                references: [],
                responsibilities: []
            };

            return new CrcModel(name, options);
        }
    }

    module.exports = CrcModel;

}());
