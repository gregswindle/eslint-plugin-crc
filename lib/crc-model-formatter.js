

const _ = require('lodash');

(function (){

    class CrcModelFormatter {
        constructor(template) {
            this.template = template || null;
        }

        format(crcModels) {
            const crcModelTemplate = _.template(this.template);
            return crcModelTemplate(crcModels);
        }
  }

    module.exports = CrcModelFormatter;

}());
