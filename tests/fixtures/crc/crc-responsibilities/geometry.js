
/** Class representing a point. */
class Point {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */
  constructor(x, y) {
      this.x = x
      this.y = y
  }

  /**
   * Get the x value.
   * @return {number} The x value.
   */
  getX() {
      return this.x
  }

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY() {
      return this.y
  }

  /**
   * Convert a string containing two comma-separated numbers into a point.
   * @param {string} str - The string containing two comma-separated numbers.
   * @return {Point} A Point object.
   */
  static fromString(str) {
    const [x, y] = str.split(',').map(number => parseFloat(number.trim()))
    return new Point(x, y)
  }
}

/**
 * @classdesc A plane figure with at least three straight sides and angles, and typically five or more.
 *
 * @class
 */
class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.name = 'Polygon'
  }
}


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
    * @param {!number=0} length - The length of all sides.
    * @constructor
    */
  constructor(length = 0) {
    super(length, length)
    this.name = 'Square'
  }

  get area() {
    return this.height * this.width
  }

  set area(value) {
    this.height = this.width = Math.sqrt(value)
  }
}

/**
 * @desc A plane figure with four straight sides and four right angles,
 * especially one with unequal adjacent sides, in contrast to a square.
 *
 * @extends Square
 */
class Rectangle extends Square {
  constructor(height, width) {
    super(height, width);
    this.name = 'Rectangle';
  }

  /**
   * @override
   */
  set area(value) {
    this.height = value.height
    this.width = value.width
    this.area = this.height * this.width
  }
}

/**
 * @summary The branch of mathematics concerned with shapes.
 *
 */
module.exports = {
  Point,
  Polygon,
  Square,
  Rectangle
};
