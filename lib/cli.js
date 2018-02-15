#!/usr/bin/env node

const crcLogger = require("./crc-logger");
const fs = require("fs-extra");
const meow = require("meow");
const path = require("path");
const {CLIEngine} = require("eslint");

/**
 * Create and copy resources to user-specified destination directories.
 *
 * @param {type} destinationDirectory - The directory path for reports.
 *
 * @returns {void}
 */

const copyAssets = async (destinationDirectory) => {
  const from = path.resolve(__dirname, "./formatters/md/.templates/img");
  const to = path.resolve(__dirname, path.dirname(destinationDirectory));

  try {
    await fs.ensureDir(to);
    await fs.copy(from, to);
    crcLogger.info(`✅  Copied assets to ${to}`);
  } catch (err) {
    crcLogger.error(err, `❌  Unable to copy assets to ${to}.`);
  }
};

/**
 * @private
 */

const msg = {
  "error": "❌  There was a problem generating your CRC Model report.\n   ",

  "success": "✅  CRC Model report generated at ",

  toString (message = "", type = msg.success) {
    return type + message;
  },

  "usage": `
  Usage
    $ eslint-plugin-crc input [options] [info]

  Input
    The path (or glob) of the JavaScript resources you want
    analyzed. [Default: '.']

  Options
    --output, -o  The "CRC Models report" destination directory.
                  [Default: './reports']

  Info
    --help        Show this dialog.
    --version     Display the installed semantic version.

  Examples
    $ eslint-plugin-crc
    ✅  Generated a CRC Model report to
     /Users/you/work/repo/reports/crc-model-report.md.

    $ eslint-plugin-crc 'lib/**/*.js' -o='./tests/analysis'
    ✅  Generated a CRC Model report to
     /Users/you/work/repo/tests/analysis/crc-model-report.md.

    $ eslint-plugin-crc -o='😱 '
    ❌  There was a problem generating your CRC Model report.
        Error: ENOENT: no such file or directory, open '😱 '
  `
};

/**
 * Command-line interface options.
 * @type {object}
 */

const options = {
  "flags": {
    "output": {
      "alias": "o",
      "default": path.resolve(__dirname, "../reports/crc-model-report.md"),
      "type": "string"
    }
  }
};

/**
 * Creates (or overwrites) a CRC Model Report markdown file.
 *
 * @param {string} destinationDirectory - The file system location to save a
 *  report.
 * @param {string} report - The CRC Model Report's text.
 *
 * @returns {void}
 */

const writeReportFile = (destinationDirectory, report) => {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.writeFile(destinationDirectory, report, {
    "flag": "w"
  }, (err) => {
    if (err) {
      crcLogger.error(err, msg.error);
    } else {
      crcLogger.info(msg.toString(destinationDirectory));
    }
  });
};

/**
 * Template function for report generation.
 *
 * @returns {void}
 */

const generateReport = () => {
  const eslintCli = new CLIEngine("./lib/.eslintrc.yml");
  const cli = meow(msg.usage, options);
  const files = eslintCli.resolveFileGlobPatterns(cli.input);
  const report = eslintCli.executeOnFiles(files);
  const formatter = eslintCli.getFormatter("./lib/formatters/md/index.js");
  const crcModelReport = formatter(report.results);
  const destination = cli.flags.output || options.flags.output.default;
  writeReportFile(destination, crcModelReport);
  copyAssets(destination);
};

/**
 * Invokes all other functions sequentially.
 *
 * @returns {void}
 */

const main = () => {
  generateReport();
};

main();
