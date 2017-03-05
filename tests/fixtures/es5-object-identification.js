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

module.exports = Alpha;

module.exports = Bravo;

module.exports = Charlie;

module.exports = Delta;

module.exports = Echo;
