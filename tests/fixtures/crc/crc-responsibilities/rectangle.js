const Square = require("./square");

/**
 * @desc A plane figure with four straight sides and four right angles,
 * especially one with unequal adjacent sides, in contrast to a square.
 *
 * @extends Square
 */

class Rectangle extends Square {
  constructor (height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  /**
   * @override
   */

  set area (value) {
    this.height = value.height;
    this.width = value.width;
    this.area = this.height * this.width;
  }
}

module.exports = Rectangle;
