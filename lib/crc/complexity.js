// const astConfig = require("./ast-config");
const escomplex = require("escomplex");
// const espree = require("espree");

class Complexity {
  static analyze (context) {
    return escomplex.analyse(context);
  }
}

module.exports = Complexity;
