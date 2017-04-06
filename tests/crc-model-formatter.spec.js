

const relativePath = require('relative-path');
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const {expect} = chai;
const { forEach, map } = require('lodash');
const fs = require('fs');
const path = require('path');
const codeFixturePath = './fixtures/es5-object-identification.js';
const CrcModelFormatter = require('../lib/crc-model-formatter');
const CrcModelList = require('../lib/crc-model-list');

chai.use(dirtyChai);

describe('CrcModelFormatter', function () {
    let code, crcModelList, formatter, libFilePath, template;

    beforeEach(function () {
        libFilePath = relativePath(codeFixturePath);
        code = fs.readFileSync(libFilePath);
        libFilePath = path.join(__dirname, '../lib/templates/crc-card.html');
        template = fs.readFileSync(libFilePath).toString();
        crcModelList = new CrcModelList(code);
        formatter = new CrcModelFormatter(template);
    });

    afterEach(function () {
        template = null;
        map(crcModelList.models, function (model) {
            model.responsibilities = null;
        });
        crcModelList.models = null;
        crcModelList = null;
        formatter = null;
    });

    it('takes a template string', function () {
        expect(formatter.template).to.exist();
        formatter = new CrcModelFormatter();
        expect(formatter.template).not.to.exist();
    });

    it('formats an CrcModelList as an HTML/markdown-friendly report of CRC "cards"', function () {
        let report;

        const loadResponsibilities = (letters) => {
            const info = 'Disambiguation for the letter ';
            const action = 'Clarifies pronunciation when spelling with the letter ';
            forEach(letters, function (letter, idx) {
                let faa = '"' + letter + '"';
                crcModelList.models[idx].responsibilities.push(info + faa);
                crcModelList.models[idx].responsibilities.push(action + faa);
            });
        };

        loadResponsibilities([
            'A',
            'B',
            'C',
            'D',
            'E',
            'F'
        ]);
        report = formatter.format(crcModelList);
        expect(report).to.exist();
        expect(report.length).to.be.at.least(10);
        //Console.log(report);
    });

});
