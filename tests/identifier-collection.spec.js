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
    expect(idCollection.nodes.length).to.be.at.least(12);
    //console.log(idCollection.nodes);
    expect(idCollection.groupByName().length).to.be.at.least(12);
  });

  it('can find an Identifier by name (by object literal or function predicate)', function () {
    let alpha = idCollection.find({name: 'Alpha'});
    expect(alpha).to.exist;
    expect(alpha.name).to.equal('Alpha');
    expect(alpha.references.length).to.be.at.least(3);
    let alphaCount = _.filter(idCollection.nodes, {
      name: 'Alpha'
    }).length;
    expect(alphaCount).to.equal(1);

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

    let start = bravo.references[0].loc.start;
    expect(start.line).to.be.a('number');
    expect(start.column).to.be.a('number');

    let end = bravo.references[0].loc.end;
    expect(end.line).to.be.a('number');
    expect(end.column).to.be.a('number');
  });

  it('associate collaborators with classes and objects', function () {
    // Foxtrot creates a prototype of Alpha.
    // Foxtrot is Alpha's parent.
    // STEP 1: identify collaborators as child Identifiers of parents,
    //         OR, if an object has a parent Identifer, match its name and assign
    //         itself as a collaborator to its parent.
    // Alternatives: if an object is referenced in an AssignmentExpression, then
    //         match it with another object's AssignmentExpression.
    let collaborators = idCollection.associateCollaborators();
  });

  it('declare an object\'s prototypal inheritence', function () {
    let Charlie = idCollection.getPrototypeOf('Charlie');
  });

});
