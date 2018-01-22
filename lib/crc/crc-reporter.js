const CrcClass = require("./crc-class");
const CrcContextCodebase = require("./crc-context-codebase");
const CrcModel = require("./crc-model");

/**
 * Generates an array of `CrcClasses`.
 */

class CrcReporter {
  constructor () {
    this.crcModels = [];
  }

  /**
   * Create a report from all ECMAScript resources.
   *
   * @param {array.<Result>} results - A list of result objects.
   *
   * @returns {array.<CrcModel>} A list of CrcModels.
   */

  report (results) {
    const codebase = new CrcContextCodebase(results);

    const crcClasses = [];
    codebase.contexts.forEach((context) => {
      const crcClass = CrcClass.factory(context);
      crcClasses.push(crcClass);
    });

    this.crcModels = crcClasses.map((crcClass) => new CrcModel({
      "class": crcClass,
      "collaborators": [],
      "responsibilities": []
    }));

    return this.crcModels;
  }
}

module.exports = CrcReporter;
