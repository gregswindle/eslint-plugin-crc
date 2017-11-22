const { assign, clone, defaults, first } = require("lodash");


/**
 *
 * @see https://www.codacy.com/app/greg_7/eslint-plugin-crc/file/5650722498/issues/source?bid=4284512&fileBranchId=4284512#l23
 * @param {array} options - An array of CrcModel property values.
 * @returns {array} opts - An array of CrcModel property values.
 * @private
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
     * Return a superClass.name for NewExpressions, e.g., Square.prototype = new Polygon().
     *
     * @param {ASTNode} node The abstract syntax tree node.
     *
     * @returns {string} The name of the superClass.
     * @private
     */
const getSuperClassByNewExpression = (node) => {
    if (node.right && node.right.type === "NewExpression") {
        return node.right.callee.name;
    }
    return null;
};

    /**
     * Return a superClass.name for CallExpressions with Object.create, e.g., Square.prototype = Object.create(Polygon.prototype).
     *
     * @param {ASTNode} node The abstract syntax tree node.
     *
     * @returns {string} The name of the superClass.
     * @private
     */
const getSuperClassByObjectCreate = (node) => {
    if (node.left && node.left.property.name === "prototype" && node.right && node.right.callee.type === "MemberExpression") {
        const rhs = node.right.callee;
        /* istanbul ignore else */
        if (rhs.object.name === "Object" && rhs.property.name === "create") {
            return first(node.right.arguments).object.name;
        }
    }

    return null;
};

    /**
     * Return a superClass.name for constructor AssignmentExpressions, e.g., Square.prototype.constructor = Polygon.
     *
     * @param {ASTNode} node The abstract syntax tree node.
     *
     * @returns {string} The name of the superClass.
     * @private
     */
const getSuperClassByConstructorAssignment = (node) => {
    /* istanbul ignore else */
    if (node.left && node.left.type === "MemberExpression") {
        /* istanbul ignore else */
        if (node.left.object.property.name === "prototype" && node.left.property.name === "constructor") {
            return node.right.name;
        }
    }
    /* istanbul ignore next */
    return null;
};

    /**
     * Driver function to return a superClass.name.
     *
     * @param {ASTNode} node The abstract syntax tree node.
     *
     * @returns {string} The name of the superClass.
     * @private
     */
const getSuperClass = (node) => getSuperClassByNewExpression(node) || getSuperClassByObjectCreate(node) || getSuperClassByConstructorAssignment(node) || node.superClass.name;

/**
 * Represents a **Class-Responsibility-Collaboration model**, which expresses
 * the scope of an object's behaviors (**_responsibilities_**) and the objects
 * it depends on to fulfill its responsibilities (**_collaborators_**).
 */
class CrcModel {
    /**
     * Create a shadow Class-Responsibility-Collaboration model.
     * @class
     * @param {String} name The source code identifier of the class or object to be modeled.
     * @param {Object} [options] A parameter object that optionally sets all of the CrcModel's properties.
     * @param {array.<CrcModel>} [options.collaborators] A collection of zero or more CrcModels that this object depends on.
     * @param {array.<CrcModel>} [options.references] A collection of zero or more Espree Tokens representing where this object is used in the source code.
     * @param {object} [options.identifier] An Espree Identifier object.
     * @param {array.<string>} [options.responsibilities] A list of data this object must maintain and/or operations it must perform.
     * @param {object} [options.declaration] The Espree Identifier that represents "where" this object was declared into being.
     * @param {object} [options.superClass] The `prototype` of the object being modeled. Defaults to `Object`.
     */
    constructor(name, options) {
        this.name = name;
        const opts = loadOptions(options);
        assign(this, opts);
    }


    /**
     * @static factory Create a CrcModel.
     *
     * @param {ASTNode} node An abstract syntax tree node
     * @param {Context} context  An object with relevant information.
     * @see https://eslint.org/docs/developer-guide/working-with-rules-new#the-context-object
     *
     * @returns {CrcModel} A shadow CrcModel.
     */
    static factory(node, context) {
        const lhs = node.left ? node.left.object : node.id;
        const name = lhs.name || lhs.object.name;
        const options = {
            collaborators: [],
            context: {
                fileName: context.getFilename(),
                sourceCode: context.getSourceCode().text
            },
            declarations: context.getDeclaredVariables(node),
            references: [],
            responsibilities: [],
            superClass: getSuperClass(node)
        };

        return new CrcModel(name, options);
    }
}

module.exports = CrcModel;
