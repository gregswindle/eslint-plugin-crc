const Polygon = require("./polygon");

const ZERO = 0;

/**
 * A plane figure with four equal straight sides and four right angles.
 *
 * @property {number} area - The extent of a two-dimensional figure or shape,
 * or planar lamina, in the plane.
 * @property {string=Square} name - The geometric `object`'s name.
 * @example
 * let shape = new Square(5)
 * console.log(`${shape.name} has a height ${shape.height} and a width of ${shape.width}, for an area of ${shape.area}.`)
 * @extends Polygon
 */

class Square extends Polygon {
  /**
   * Call the parent class's constructor with lengths
   * provided for the Polygon's width and height.
   *
   * @param {!number=0} length - The length of all sides.
   * @constructor
   */

  constructor (length = ZERO) {
    super(length, length);
    this.name = "Square";
  }

  get area () {
    return this.height * this.width;
  }

  set area (value) {
    this.width = Math.sqrt(value);
    this.height = this.width;
  }
}

module.exports = Square;
