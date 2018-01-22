/**
 * @fileoverview Markdown reporter
 * @module eslint-plugin-crc/formatters/crc
 * @author Greg Swindle
 */

const CrcReporter = require("../../crc/crc-reporter");
const Reference = require("./reference");
const fs = require("fs");
const path = require("path");
const {template} = require("lodash");

/*
 * --------------------------------------------------------------------------
 * Helpers
 * --------------------------------------------------------------------------
 */

const decorateBuiltInsWithLinks = (crcModels) => {
  const reference = new Reference();
  crcModels.forEach((model, index, models) => {
    const link = reference.link(model.class.meta.kind);
    models[index].class.meta.kind = link;
  });
};

/**
 * Provides a compiled lodash template.
 *
 * **Security:** `security/detect-non-literal-fs-filename` has been disabled
 * for this private function, since the `markdown` formatter does not accept
 * user-provided values for lodash report templates.
 *
 * @example
 * const crcPageTemplate = getTempate("crc-page-template.html");
 * @param {string} templateName - The lodash template file name.
 * @returns {string} The compiled lodash template.
 * @private
 */

const getTempate = (templateName) => template(fs.readFileSync(path.join(
  __dirname,
  templateName
), "utf-8"));

const crcModelTemplate = getTempate("crc-model-template.html");
const crcPageTemplate = getTempate("crc-page-template.html");
const crcTocTemplate = getTempate("crc-toc-template.html");

/*
 * --------------------------------------------------------------------------
 * Public Interface
 * --------------------------------------------------------------------------
 */

/**
 * Create a markdown-based report of CrcModels.
 *
 * @function
 * @param {array.<Result>} results - A list of ESLint rule parser results.
 * @example
 * # Run from a Terminal or CLI:
 * eslint \
 *   --format 'eslint-plugin-crc/formatters/crc' \
 *   --output 'reports/crc-model-report.md' \
 *   lib/ \
 *   --fix
 * @returns {string} CrcModels rendered as markdown.
 */

module.exports = function format (results) {
  const crcReporter = new CrcReporter();
  const crcModels = crcReporter.report(results);
  const toc = crcModels.map((crcModel) => crcTocTemplate({
    crcModel
  }));
  decorateBuiltInsWithLinks(crcModels);
  const models = crcModels.map((crcModel) => crcModelTemplate({
    crcModel
  }));

  const report = crcPageTemplate({
    "date": new Date(),
    "results": models,
    "summary": `Object count: ${crcModels.length}`,
    toc
  });

  return report;
};
