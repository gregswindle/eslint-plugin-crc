

const { template } = require('lodash');

(function (){

    /**
     * Transforms one or more `CrcModel` objects into  human-readable,
     * HTML- and markdown-friendly tables, aka "cards".
     */
    class CrcModelFormatter {

        /**
         * Constructor - Creates a `CrcModelFormatter` object.
         *
         * @param {string} template A lodash-compliant template string.
         *
         * @returns {CrcModelFormatter} A `CrcModelFormatter` object.
         */
        constructor(template) {
            this.template = template || null;
        }

        /**
         * Format - Generaters CRC Model "cards" out of a list of `CrcModels`.
         *
         * @param {CrcModel[]} crcModels An array of `CrcModel` objects.
         *
         * @requires [lodash#template](https://lodash.com/docs/4.17.4#template)
         *
         * @returns {string} HTML of human-readable CRC Models.
         */
        format(crcModels) {
            const crcModelTemplate = template(this.template);
            return crcModelTemplate(crcModels);
        }
  }

    module.exports = CrcModelFormatter;

}());
