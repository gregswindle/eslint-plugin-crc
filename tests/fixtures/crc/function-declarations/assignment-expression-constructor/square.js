const Polygon = require("../polygon");

function Square (sideLength) {
  /*
   * Inherit Polygon's properties.
   * Without Polygon.call (or Polygon.apply),
   * s.hasOwnProperty('height') => false
   */

  Polygon.call(this, sideLength, sideLength);
}

/*
 * Inherit Polygon's constructor
 * Omitting this results in
 * s instanceof Polygon => false
 */

// Option 3: by constructor assignment

Square.prototype.constructor = Polygon;

module.exports = Square;
