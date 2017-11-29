
const astNodeFactories = require("requireindex")(__dirname);

class AstNodeFactoryMap extends Map {
  constructor (entries) {
    super(entries);
    Object.values(astNodeFactories).forEach((nodeFactory) => {
      this.set(nodeFactory.descriptor, nodeFactory);
    });
  }
}

module.exports = {
  astNodeFactories,
  AstNodeFactoryMap,
  astNodeFactoryMap: new AstNodeFactoryMap()
};
