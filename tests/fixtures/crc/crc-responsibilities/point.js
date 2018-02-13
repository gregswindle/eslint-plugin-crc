/**
 * @class Point
 * @description Represents a point.
 */

class Point {
  /**
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */

  // eslint-disable-next-line  id-length
  constructor (x, y) {
    // eslint-disable-next-line  id-length
    this.x = x;
    // eslint-disable-next-line  id-length
    this.y = y;
  }

  /**
   * @method - Get the x value.
   *
   * @return {number} The x value.
   */

  getX () {
    // eslint-disable-next-line  id-length
    return this.x;
  }

  /**
   * @function - Get the y value.
   *
   * @return {number} The y value.
   */

  getY () {
    // eslint-disable-next-line  id-length
    return this.y;
  }

  /**
   * @static
   *
   * @description Convert a string containing two comma-separated numbers into a point.
   * @description Convert a string containing two comma-separated numbers into a point.
   *
   * @param {string} str - The string containing two comma-separated numbers.
   * @return {Point} A Point object.
   */

  static fromString (str) {
    const [
      x,
      y
    ] = str.split(",").map((number) => parseFloat(number.trim()));
    return new Point(x, y);
  }
}

module.exports = Point;
