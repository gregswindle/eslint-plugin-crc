// const CrcClass = require("../crc-class");
//
// class ClassExpressionCrcClass extends CrcClass {
//   /**
//    * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
//    *
//    * @static
//    * @param {ASTNode} node - An abstract syntax tree node.
//    * @param {Context} context  - An ESLint
//    * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
//    * @example
//    * const crcClass = ClassExpressionCrcClass.factory(node, context);
//    * @returns {CrcClass} A NullObject for CrcClass.
//    */
//
//   static factory (node, context) {
//     const sourceCode = context.getSourceCode();
//     // eslint-disable-next-line no-console
//     // console.log(node);
//     const params = {
//       node,
//       description: sourceCode.getJSDocComment(node),
//       src: sourceCode,
//       name: node.id.name,
//       superClass: node.init.superClass.name
//     };
//
//     return new CrcClass(params);
//   }
//
//   /**
//      * @static selector - An ESQuery selector that identifies ClassExpressions.
//      *
//      * @returns {string} An ESQuery selector that identifies ClassExpressions.
//      */
//   static get descriptor () {
//     return "VariableDeclarator[init.type=ClassExpression]";
//   }
// }
//
// module.exports = ClassExpressionCrcClass;
