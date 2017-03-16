'use strict';

// Example taken from the MDN article "Object.prototype", expect for the ClassDeclaration on line 38.
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
var Person = function () {
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this);
  this.name = name;
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this);
  this.name = name;
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

class Mime extends Person {
  constructor(name) {
    super(name);
    this.canTalk = false;
  }
}

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();

module.exports = Person;

module.exports = Employee;

module.exports = Customer;

module.exports = Mime;

module.exports = examples;
