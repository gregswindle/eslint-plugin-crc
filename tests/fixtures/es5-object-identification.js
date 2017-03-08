'use strict';

function Alpha() {
  this.name = 'alpha';
  this.type = 'function contructor';
}

var Bravo = {
  name: 'Bravo',
  type: 'object literal'
};

var Charlie = Object.create({
  name: 'Charlie',
  type: 'Object.create: literal'
});

var Delta = Object.create(Charlie);

var Echo = Object.create(Alpha.prototype);

function Foxtrot() {
  this.alpha = new Alpha();
}

Foxtrot.prototype.radio = function() {
  return this.alpha.name;
};

module.exports = Alpha;

module.exports = Bravo;

module.exports = Charlie;

module.exports = Delta;

module.exports = Echo;

module.exports = Foxtrot;
