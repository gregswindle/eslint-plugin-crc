'use strict';

const relativePath = require('relative-path');
const expect = require('chai').expect;
const _ = require('lodash');
const libCrc = require('require-dir')('../lib', {camelcase: true});
const AstNode = libCrc.astNode;

describe('AstNode', function () {
  it('is a "wrapper" for convenient access to a node\'s abstract syntax tree properties', function () {
    let nodeMock = {};
    let locsMock = [{}];
    let astNode = new AstNode(nodeMock, locsMock);
    expect(astNode.node).to.exist;
    expect(astNode.locs).to.exist;
  });

  it('has a constructor that generates a NullObject if no parameters are given', function () {
    let astNode = new AstNode();
    expect(astNode.node).not.to.exist;
    expect(astNode.locs).to.be.empty;
  });
});
