'use strict';

const relativePath = require('relative-path');
const libCrc = require('require-dir')('../lib', {camelcase: true});
const expect = require('chai').expect;
const fs = require('fs');
const _ = require('lodash');
const IdentifierCollection = libCrc.identifierCollection;
const codeFixturePath = './fixtures/es5-object-identification.js';

describe('IdentifierCollections group Identifiers by name. They', function () {
  let idCollection = null;

  before(function() {
    let path = relativePath(codeFixturePath);
    let code = fs.readFileSync(path);
    idCollection = new IdentifierCollection(code);
  });

  it('identify all declared Objects', function() {
    let modelCount = idCollection.models.length;
    expect(modelCount).to.be.at.least(6);
  });

  it('can find an Identifier by name (by object literal or function predicate)', function () {
    let alpha = idCollection.find({name: 'Alpha'});
    expect(alpha).to.exist;
    expect(alpha.name).to.equal('Alpha');

    expect(idCollection.find(function(node) {
      return node.name === 'Bravo';
    })).to.exist;

    expect(idCollection.find({name: 'foobar'})).not.to.exist;
  });

  it('track an object\'s usage by line numbers and range', function () {
    let bravo = idCollection.find({name: 'Bravo'});
    expect(bravo).to.exist;

    let range = bravo.references[0].range;
    expect(_.first(range)).to.be.a('number');
    expect(_.last(range)).to.be.a('number');
  });

  it('associate collaborators with classes and objects', function () {
    let alpha, bravo, charlie, delta, echo, foxtrot;
    alpha   = idCollection.find({name: 'Alpha'});
    bravo   = idCollection.find({name: 'Bravo'});
    charlie = idCollection.find({name: 'Charlie'});
    delta   = idCollection.find({name: 'Delta'});
    echo    = idCollection.find({name: 'Echo'});
    foxtrot = idCollection.find({name: 'Foxtrot'});

    //console.log(delta.collaborators);
    expect(_.find(delta.collaborators,   {name: charlie.name})).to.exist;
    expect(_.find(echo.collaborators,    {name: alpha.name})).to.exist;
    expect(_.find(foxtrot.collaborators, {name: alpha.name})).to.exist;

    // console.log(`alpha.references: ${alpha.references}`);
    // console.log(`bravo.references: ${bravo.references}`);
    // console.log(`charlie.references: ${charlie.references}`);
    // console.log(`delta.references: ${delta.references}`);
    // console.log(`echo.references: ${echo.references}`);
    // console.log(`foxtrot.references: ${foxtrot.references}`);
    expect(alpha.references.length).to.be.at.least(3);

  });

  it('declare an object\'s prototypal inheritence', function () {
    let Charlie = idCollection.getPrototypeOf('Charlie');
  });

});
