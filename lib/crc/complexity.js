// Const astConfig = require("./ast-config");

const escomplex = require("escomplex");

// Const espree = require("espree");

class Complexity {
  static analyze (context) {
    return escomplex.analyse(context);
  }
}

module.exports = Complexity;
