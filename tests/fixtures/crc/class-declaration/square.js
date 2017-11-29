const Polygon = require("./polygon");

class Square extends Polygon {
  constructor(length) {
    // Call the parent class's constructor with lengths
    // provided for the Polygon's width and height
    super(length, length)

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square'
  }

  get area() {
    return this.height * this.width
  }

  set area(value) {
    this.height = this.width = Math.sqrt(value)
    this.area = value
  }
}

module.exports = Square;
