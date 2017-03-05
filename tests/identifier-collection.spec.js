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
    expect(idCollection.nodes.length).to.equal(12);
    //console.log(idCollection.nodes);
    expect(idCollection.groupByName().length).to.equal(12);
  });

  it('can find an Identifier by name (by object literal or function predicate)', function () {
    let alpha = idCollection.find({name: 'Alpha'});
    expect(alpha).to.exist;
    expect(alpha.name).to.equal('Alpha');
    expect(alpha.astNode.locs.length).to.equal(3);

    //console.log(JSON.stringify(alpha.astNode, null, 1));

    expect(idCollection.find(function(node) {
      return node.name === 'Bravo';
    })).to.exist;

    expect(idCollection.find({name: 'foobar'})).not.to.exist;
  });

  it('track an object\'s usage by line numbers and range', function () {
    let bravo = idCollection.find({name: 'Bravo'});
    expect(bravo).to.exist;

    let range = bravo.astNode.locs[0].range;
    expect(_.first(range)).to.be.a('number');
    expect(_.last(range)).to.be.a('number');

    let start = bravo.astNode.locs[0].loc.start;
    expect(start.line).to.be.a('number');
    expect(start.column).to.be.a('number');

    let end = bravo.astNode.locs[0].loc.end;
    expect(end.line).to.be.a('number');
    expect(end.column).to.be.a('number');
  });

  it('tracks its collaborators');

  it('declare an object\'s prototypal inheritence', function () {
    let Charlie = idCollection.getPrototypeOf('Charlie');
  });

});
