'use strict';

const relativePath = require('relative-path');
const expect = require('chai').expect;
const _ = require('lodash');
const libCrc = require('require-dir')('../lib', {
  camelcase: true
});
const CrcModel = libCrc.crcModel;

describe('CrcModels represent objects\' behaviors and dependencies. A CrcModel', function() {

  it('is identifiable by the object\'s name', function() {
    let crc = new CrcModel('User');
    expect(crc.name).to.exist;
    expect(crc.name).to.equal('User');
    expect(crc.responsibilities).to.be.empty;
    expect(crc.collaborators).to.be.empty;
    expect(crc.astNode.locs).to.be.empty;
  });

  it('must have a name, or an error will be thrown', function() {
    let fn = function() {
      new CrcModel();
    };
    expect(fn).to.throw(TypeError);
  });

  it('lists the object\'s responsibilities', function() {
    let verification = 'Verifies user-agent identity';
    let crc = new CrcModel('Authenticator', [verification]);
    expect(crc.responsibilities).to.contain(verification);
  });

  it('lists other objects that it collaborates with', function() {
    let responsibilities = ['Verifies user-agent identity'];
    let collaborators = [new CrcModel('WebForm')];
    let crc = new CrcModel('Authenticator', responsibilities, collaborators);
    expect(_.first(crc.collaborators)).to.have.all.keys(
      'name',
      'responsibilities',
      'collaborators',
      'astNode'
    );
  });

  it('provides an abstract syntax tree (AST) for static code analysis', function() {
    let ast = JSON.parse('{"type":"MockDeclaration","start":0,"end":14,"range":[0,14]}');
    let responsibilities = null;
    let collaborators = null;
    let astNode = {
      locs: [ast]
    };
    let crc = new CrcModel('BloatedObject', responsibilities, collaborators, astNode);
    expect(crc.astNode).to.exist;
    expect(crc.astNode.locs).not.to.be.empty;

  });

  it('declares its prototype');

  it('declares other prototypal extensions or assignments');

});
