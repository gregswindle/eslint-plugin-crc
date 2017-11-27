const Polygon = require("./polygon");

function Square(sideLength) {
  // Inherit Polygon's properties.
  // Without Polygon.call (or Polygon.apply),
  // s.hasOwnProperty('height') => false
  Polygon.call(this, sideLength, sideLength)
}

module.exports = {
  Square
}
