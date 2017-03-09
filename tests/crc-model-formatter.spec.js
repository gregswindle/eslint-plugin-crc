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
    var idCollection, formatter, template, libFilePath, code;

    beforeEach(function () {
        libFilePath = relativePath(codeFixturePath);
        code = fs.readFileSync(libFilePath);
        libFilePath = path.join(__dirname, '../lib/templates/crc-card.html');
        template = fs.readFileSync(libFilePath).toString();
        idCollection = new IdentifierCollection(code);
        formatter = new CrcModelFormatter(template);
    });

    afterEach(function () {
        template = null;
        _.map(idCollection.models, function (model) {
            model.responsibilities = null;
        });
        idCollection.models = null;
        idCollection = null;
        formatter = null;
    });

    it('takes a template string', function () {
        expect(formatter.template).to.exist;
        formatter = new CrcModelFormatter();
        expect(formatter.template).not.to.exist;
    });

    it('generates HTML/markdown-friendly into a CRC "card" format', function () {
        let report;

        function loadResponsibilities(letters) {
            let info, action;
            info = 'Disambiguation for the letter ';
            action = 'Clarifies pronunciation when spelling with the letter ';
            _.forEach(letters, function (letter, idx) {
                let faa = '"' + letter + '"';
                idCollection.models[idx].responsibilities.push(info + faa);
                idCollection.models[idx].responsibilities.push(action + faa);
            });
        }

        loadResponsibilities([
            'A',
            'B',
            'C',
            'D',
            'E',
            'F'
        ]);
        report = formatter.format(idCollection);
        expect(report).to.exist;
        expect(report.length).to.be.at.least(10);
        //console.log(report);
    });

});
