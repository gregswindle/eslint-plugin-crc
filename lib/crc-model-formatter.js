'use strict';

const _ = require('lodash');

class CrcModelFormatter {
    constructor(template) {
        this.template = template || null;
    }

    format(crcModels) {
        let crcModelTemplate = _.template(this.template);
        return crcModelTemplate(crcModels);
    }
}

module.exports = CrcModelFormatter;
