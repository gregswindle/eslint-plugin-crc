const astNodeFactories = require("requireindex")(__dirname);
const { values } = require("lodash");

class AstNodeFactoryMap extends Map {
  constructor (entries) {
    super(entries);
    values(astNodeFactories).forEach((nodeFactory) => {
      this.set(nodeFactory.descriptor, nodeFactory);
    });
  }
}

module.exports = {
  astNodeFactories,
  AstNodeFactoryMap,
  astNodeFactoryMap: new AstNodeFactoryMap()
};
