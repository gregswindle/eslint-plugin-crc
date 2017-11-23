/* eslint security/detect-non-literal-fs-filename: "warn" */
/**
 * @fileoverview Markdown reporter
 * @author Greg Swindle
 */

(() => {
  const fs = require("fs");
  const path = require("path");
  const pluralize = require("pluralize");
  // eslint-disable-next-line node/no-unsupported-features
  const { map, template } = require("lodash");

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------

  /**
   * Provides a compiled lodash template.
   *
   * @example
   * const crcPageTemplate = getTempate("crc-page-template.md");
   * @param {string} templateName - The lodash template file name.
   * @returns {string} The compiled lodash template.
   * @private
   */
  const getTempate = (templateName) => {
    return template(fs.readFileSync(path.join(
      __dirname,
      templateName), "utf-8")
    );
  };
  const crcPageTemplate = getTempate("crc-page-template.md");
  const crcModelTemplate = getTempate("crc-model-template.md");
  const crcSummaryTemplate = getTempate("crc-summary-template.md");

  /**
   * Renders text along the template of x problems (x errors, x warnings).
   *
   * @example
   * const summary = renderSummary(result.errorCount, result.warningCount);
   * @param {string} totalErrors - Total errors.
   * @param {string} totalWarnings - Total warnings.
   * @returns {string} The formatted string, pluralized where necessary.
   * @private
   */
  function renderSummary (totalErrors, totalWarnings) {
    const totalProblems = totalErrors + totalWarnings;
    let renderedText =
      `${totalProblems} ${pluralize("problem", totalProblems)}`;

    if (totalProblems !== 0) {
      // eslint-disable-next-line max-len
      renderedText += ` (${totalErrors} ${pluralize("error", totalErrors)}, ${totalWarnings} ${pluralize("warning", totalWarnings)})`;
    }
    return renderedText;
  }

  /**
   * Get HTML (table rows) describing the messages.
   *
   * @example
   * const messages = renderMessages(result.messages, 0));
   * @param {Array} messages - Messages.
   * @param {int} parentIndex - Index of the parent HTML row.
   * @returns {string} HTML (table rows) describing the messages.
   * @private
   */
  function renderMessages (messages, parentIndex) {
  /**
   * Get HTML (table row) describing a message.
   * @param {Object} message - Message.
   * @returns {string} HTML (table row) describing a message.
   * @private
   */
    return map(messages, (message) => {
      const lineNumber = message.line || 0;
      const columnNumber = message.column || 0;

      return crcModelTemplate({
        parentIndex,
        lineNumber,
        columnNumber,
        severityNumber: message.severity,
        severityName: message.severity === 1 ? "Warning" : "Error",
        message: JSON.parse(message.message),
        ruleId: message.ruleId
      });
    }).join("\n");
  }

  /**
   * Render results.
   *
   * @example
   * const report = renderResults(results);
   * @param {Array} results - Test results.
   * @returns {string} HTML string describing the results.
   * @private
   */
  function renderResults (results) {
    return map(results, (result, index) => crcSummaryTemplate({
      index,
      filePath: result.filePath,
      summary: renderSummary(result.errorCount, result.warningCount)

    }) + renderMessages(result.messages, index)).join("\n");
  }

  // --------------------------------------------------------------------------
  // Public Interface
  // --------------------------------------------------------------------------

  module.exports = function (results) {
    let totalErrors,
      totalWarnings;

    totalErrors = 0;
    totalWarnings = 0;

    // Iterate over results to get totals
    results.forEach((result) => {
      totalErrors += result.errorCount;
      totalWarnings += result.warningCount;
    });

    return crcPageTemplate({
      date: new Date(),
      reportSummary: renderSummary(totalErrors, totalWarnings),
      results: renderResults(results)
    });
  };
})();
