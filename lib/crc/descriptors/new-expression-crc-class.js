const CrcClass = require("../crc-class");
const { assign, find } = require("lodash");

class NewExpressionCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = NewExpressionCrcClass.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */
  static factory (context) {
    // const lhs = context.code.ast.body.left;
    // const rhs = context.code.ast.right;
    // const params = {
    //   node: context.code.ast,
    //   description: null,
    //   src: context.text,
    //   name: lhs.object.name,
    //   superClass: rhs.callee.name
    // };

    const node = find(context.code.ast.body, {
      type: NewExpressionCrcClass.type
    });
    const crcClass = assign(super.factory(context), {
      name: node.left.object.name,
      superClass: node.right.callee || Object
    });

    return crcClass;
  }

  static get descriptor () {
    return "ExpressionStatement > [left.property.name=\"prototype\"][right.type=\"NewExpression\"]";
  }

  static get type () {
    return NewExpressionCrcClass.descriptor;
  }
}

module.exports = NewExpressionCrcClass;
