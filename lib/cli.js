#!/usr/bin/env node

const fs = require("fs");
const meow = require("meow");
const path = require("path");
// eslint-disable-next-line node/no-unsupported-features
const {CLIEngine} = require("eslint");

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

const options = {
  "flags": {
    "output": {
      "alias": "o",
      "default": path.resolve(__dirname, "../reports/crc-model-report.md"),
      "type": "string"
    }
  }
};

const writeReportFile = (out, report) => {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.writeFile(out, report, {"flag": "w"}, (err) => {
    if (err) {
      console.error(msg.toString(err, msg.error));
    } else {
      console.log(msg.toString(out));
    }
  });
};

const generateReport = () => {
  const eslintCli = new CLIEngine("./lib/.eslintrc.yml");
  const cli = meow(msg.usage, options);
  const files = eslintCli.resolveFileGlobPatterns(cli.input);
  const report = eslintCli.executeOnFiles(files);
  const formatter = eslintCli.getFormatter("./lib/formatters/crc/index.js");
  const crcModelReport = formatter(report.results);
  const out = cli.flags.output || options.flags.output.default;
  writeReportFile(out, crcModelReport);
};

const main = () => {
  generateReport();
};

main();
