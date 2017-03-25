// #!/usr/bin/env node --harmony
// Const CrcModelFormatter = require('./crc-model-formatter');
// Const CrcModelList = require('./crc-model-list');
// Const concat = require('concat');
// Const fs = require('fs');
// Const glob = require('glob');
// Const mkdirp = require('mkdirp');
// Const path = require('path');
// Const program = require('commander');
// Const {version} = require('../package');
//
// /**
//  * Prepend JavaScript comments to shebangs (!#) to prevent breaking the AST parser.
//  *
//  * @private
//  * @param {string} code The source code to be parsed.
//  *
//  * @returns {string} The source code with shebangs commented (if any).
//  */
// Const preprocessShebangs = (code) => {
//     Return code.replace('#!', '// #!');
// };
//
// /**
//  * Saves `CrcModels` to file.
//  *
//  * @private
//  * @param {array<string>} files  A list of files to be parsed.
//  * @param {string} reportFilePath The filesystem location for the report.
//  *
//  * @returns {void}
//  */
// Const generateReport = (files, output) => {
//     Concat(files).then((code) => {
//         Const crcModelList = new CrcModelList(preprocessShebangs(code));
//         Const template = fs.readFileSync(path.resolve(__dirname, 'templates', 'crc-card.html'));
//         Const formatter = new CrcModelFormatter(template);
//         Const report = formatter.format(crcModelList);
//         SaveToFile(report, output);
//     }, (reason) => {
//         Console.error(reason);
//     }).catch((err) => {
//         Console.warn(err);
//     });
// };
//
// /**
//  * Saves a Class-Responsibility-Collaboration report to the filesystem.
//  *
//  * @private
//  * @param {string} report   The CRC Model report.
//  * @param {string} filepath The filesystem location for the report.
//  *
//  * @throws {Error} Throws an `Error` if the report cannot be saved.
//  *
//  * @returns {void}
//  */
// Const saveToFile = (report, filepath) => {
//     Const buffer = new Buffer(report);
//     Const msg = 'Class-Responsibility-Collaborators report';
//     Fs.open(filepath, 'w', function(err, fd) {
//         If (err) {
//             Throw `Error saving ${msg}: ${err}`;
//         }
//
//         Fs.write(fd, buffer, 0, buffer.length, null, function(err) {
//             If (err) {
//                 Throw `Error saving ${msg}: ${err}`;
//             }
//             Fs.close(fd, function() {
//                 Console.log(`Saved ${msg} to ${filepath}.`);
//             });
//         });
//     });
// };
//
// /**
//  * A command-line interface that creates a Class-Responsibility-Collaborators report.
//  */
// Program
//   .version(version)
//   .description('Generates a Class-Responsibility-Collaboration report for analysis and refactoring.')
//   .arguments('<files>')
//   .option('-o, --output [output]', 'The report destination. Defaults to "./crc-model-report."')
//   .action((filePattern) => {
//       Glob(filePattern, (err, files) => {
//           If (err) {
//               Console.error(err);
//           }
//           Const destFile = program.output || './reports/crc-model-report.md';
//           Const destPath = path.dirname(destFile);
//           Mkdirp(destPath, function (err) {
//               If (err) {
//                   Console.error(err);
//               }
//               Else {
//                   GenerateReport(files, destFile);
//               }
//           });
//       });
//   });
//
// Const isCli = require.main === module;
//
// If (isCli) {
//     Program.parse(process.argv);
// }
//
// Module.exports = program;
