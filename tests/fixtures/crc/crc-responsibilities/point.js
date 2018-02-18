/**
 * @class Point - Represents a point.
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
   * @method getX - Get the x value.
   *
   * @return {number} The x value.
   * @memberOf Point.prototype
   */

  getX () {
    // eslint-disable-next-line  id-length
    return this.x;
  }

  /**
   * @description Get the y value.
   *
   * @function getY
   * @return {number} The y value.
   * @memberOf Point.prototype
   */

  getY () {
    // eslint-disable-next-line  id-length
    return this.y;
  }

  /**
   * @description Convert a string containing two comma-separated numbers into a point.
   *
   * @static
   * @method fromString
   * @param {string} str - The string containing two comma-separated numbers.
   * @returns {Point} A Point object.
   * @memberof Point
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
