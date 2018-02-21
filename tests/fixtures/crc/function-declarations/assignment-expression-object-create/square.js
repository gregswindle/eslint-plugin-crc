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

// Option 2: by Object.create

Square.prototype = Object.create(Polygon.prototype);

module.exports = Square;
