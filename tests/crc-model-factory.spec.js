'use strict';

const relativePath = require('relative-path');
const expect = require('chai').expect;
const _ = require('lodash');
const libCrc = require('require-dir')('../lib', {
    camelcase: true
});
const CrcModelFactory = libCrc.crcModelFactory;
const IdentifierCollection = libCrc.identifierCollection;

describe('CrcModelFactory', function () {
    it('provides several static "helper" methods for generating CrcModel objects', function () {
        let idCollection, isInScope;
        idCollection = new IdentifierCollection('\'use strict\';');
        isInScope = CrcModelFactory.inOwnDeclarationScope({name: null}, idCollection);
        expect(isInScope).to.be.false;
    });
});
