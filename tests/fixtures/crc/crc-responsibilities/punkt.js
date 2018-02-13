/**
 * @description
 * Punkt represents a mathematical point.
 *
 * In modern mathematics, a point refers usually to an element of some set
 * called a space. More specifically, in Euclidean geometry, a point is a
 * primitive notion upon which the geometry is built, meaning that a point
 * cannot be defined in terms of previously defined objects.
 */

function Punkt (x, y) {
  this.x = x;
  this.y = y;
}

/**
 * @static
 *
 * @function fromString - Convert a string containing two comma-separated numbers into a point.
 *
 * @param {string} str - The string containing two comma-separated numbers.
 * @return {Punkt} A Point object.
 */

Punkt.fromString = (str) => {
  const [
    x,
    y
  ] = str.split(",").map((number) => parseFloat(number.trim()));
  return new Punkt(x, y);
};

module.exports = Punkt;
