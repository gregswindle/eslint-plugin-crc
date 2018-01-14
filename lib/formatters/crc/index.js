/**
 * @fileoverview Markdown reporter
 * @module eslint-plugin-crc/formatters/crc
 * @author Greg Swindle
 */

const CrcReporter = require("../../crc/crc-reporter");
const fs = require("fs");
const path = require("path");
// const pluralize = require("pluralize");
// eslint-disable-next-line node/no-unsupported-features
const { template } = require("lodash");

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

/**
 * Provides a compiled lodash template.
 *
 * **Security:** `security/detect-non-literal-fs-filename` has been disabled
 * for this private function, since the `markdown` formatter does not accept
 * user-provided values for lodash report templates.
 *
 * @example
 * const crcPageTemplate = getTempate("crc-page-template.md");
 * @param {string} templateName - The lodash template file name.
 * @returns {string} The compiled lodash template.
 * @private
 */
const getTempate = (templateName) => {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  return template(fs.readFileSync(path.join(
    __dirname,
    templateName), "utf-8")
  );
};
const crcPageTemplate = getTempate("crc-page-template.html");
const crcModelTemplate = getTempate("crc-model-template.html");

// --------------------------------------------------------------------------
// Public Interface
// --------------------------------------------------------------------------

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

  return crcPageTemplate({
    date: new Date(),
    reportSummary: `Object count: ${crcModels.length}`,
    results: crcModels.map((crcModel) => crcModelTemplate({
      crcModel
    }))
  });
};
