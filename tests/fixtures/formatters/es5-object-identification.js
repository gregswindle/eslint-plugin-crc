

function Alpha() {
    this.name = 'alpha';
    this.type = 'function contructor';
}

const Bravo = {
    name: 'Bravo',
    type: 'object literal'
};

const Charlie = Object.create({
    name: 'Charlie',
    type: 'Object.create: literal'
});

const Delta = Object.create(Charlie);

const Echo = Object.create(Alpha.prototype);

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
