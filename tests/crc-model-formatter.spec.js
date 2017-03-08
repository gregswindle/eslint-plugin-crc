'use strict';

const relativePath = require('relative-path');
const expect = require('chai').expect;
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const codeFixturePath = './fixtures/es5-object-identification.js';
const libCrc = require('require-dir')('../lib', {
  camelcase: true
});
const CrcModelFormatter = libCrc.crcModelFormatter;
const IdentifierCollection = libCrc.identifierCollection;

describe('CrcModelFormatter', function () {
  var idCollection, formatter, template;

  before(function () {
    let libFilePath, code;
    libFilePath = relativePath(codeFixturePath);
    code = fs.readFileSync(libFilePath);

    libFilePath = path.join(__dirname, '../lib/templates/crc-card.html');
    template = fs.readFileSync(libFilePath).toString();
    idCollection = new IdentifierCollection(code);
  });

  beforeEach(function () {
    formatter = new CrcModelFormatter(template);
  });

  it('takes a template string', function () {
    expect(formatter.template).to.exist;

    formatter = new CrcModelFormatter();
    expect(formatter.template).not.to.exist;
  });

  it('generates HTML/markdown-friendly into a CRC "card" format', function() {
    let report = formatter.format(idCollection);
    expect(report).to.exist;
    expect(report.length).to.be.at.least(10);
    console.log(report);
  });

});
