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
const CrcModelCollection = libCrc.crcModelCollection;

describe('CrcModelFormatter', function () {
    var crcModelCollection, formatter, template, libFilePath, code;

    beforeEach(function () {
        libFilePath = relativePath(codeFixturePath);
        code = fs.readFileSync(libFilePath);
        libFilePath = path.join(__dirname, '../lib/templates/crc-card.html');
        template = fs.readFileSync(libFilePath).toString();
        crcModelCollection = new CrcModelCollection(code);
        formatter = new CrcModelFormatter(template);
    });

    afterEach(function () {
        template = null;
        _.map(crcModelCollection.models, function (model) {
            model.responsibilities = null;
        });
        crcModelCollection.models = null;
        crcModelCollection = null;
        formatter = null;
    });

    it('takes a template string', function () {
        expect(formatter.template).to.exist;
        formatter = new CrcModelFormatter();
        expect(formatter.template).not.to.exist;
    });

    it('formats an CrcModelCollection as an HTML/markdown-friendly report of CRC "cards"', function () {
        let report;

        function loadResponsibilities(letters) {
            let info, action;
            info = 'Disambiguation for the letter ';
            action = 'Clarifies pronunciation when spelling with the letter ';
            _.forEach(letters, function (letter, idx) {
                let faa = '"' + letter + '"';
                crcModelCollection.models[idx].responsibilities.push(info + faa);
                crcModelCollection.models[idx].responsibilities.push(action + faa);
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
        report = formatter.format(crcModelCollection);
        expect(report).to.exist;
        expect(report.length).to.be.at.least(10);
        //console.log(report);
    });

});
