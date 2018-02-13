// Const TocFactory = require("./toc-factory");
// Const fs = require("fs-extra");
// Const path = require("path");
//
// // Const crcLogger = require("../../crc-logger");
//
// Const {esImgMap} = require("./es-version-img-map");
// Const {template} = require("lodash");
//
// /**
//  * Provides a compiled lodash template.
//  *
//  * **Security:** `security/detect-non-literal-fs-filename` has been disabled
//  * For this private function, since the `markdown` formatter does not accept
//  * User-provided values for lodash report templates.
//  *
//  * @example
//  * Const crcPageTemplate =
//  *  TemplateFactory.getTempate("crc-page-template.html", {
//  *    Imports: {
//  *      EsImgMap
//  *    }
//  * });
//  *
//  * @param {string} [templatePath] - The lodash template file path.
//  * @param [options={}] - (Object): The options object.
//  * @param [options.escape=_.templateSettings.escape] - (RegExp): The HTML "escape" delimiter.
//  * @param [options.evaluate=_.templateSettings.evaluate] - (RegExp): The "evaluate" delimiter.
//  * @param [options.imports=_.templateSettings.imports] - (Object): An object to import into the template as free variables.
//  * @param [options.interpolate=_.templateSettings.interpolate] - (RegExp): The "interpolate" delimiter.
//  * @param [options.sourceURL='lodash.templateSources[n]'] - (string): The sourceURL of the compiled template.
//  * @param [options.variable='obj'] - (string): The data object variable name.
//  * @returns {string} The compiled lodash template.
//  * @private
//  */
//
// Const getTemplate = async (templateName, options = opts.defaults) => {
//   Const templatePath = path.join(__dirname, templateName);
//   Const content = await fs.readFile(templatePath, "utf-8");
//   Return template(content, options);
// };
//
// Const crcAnchorTemplate = ".templates/en/crc-anchor-template.html";
// Const crcModelTemplatePath = ".templates/en/crc-model-template.html";
// Const crcPageTemplatePath = ".templates/en/crc-page-template.md";
// Const crcTocTemplatePath = ".templates/en/crc-toc-template.md";
//
// Const opts = {
//   "defaults": {
//   },
//   "model": {
//     "imports": {
//       EsImgMap
//     }
//   },
//   "toc": {
//     "imports": {
//       "toc": TocFactory
//     }
//   }
// };
//
// Module.exports = {
//   "anchor": getTemplate(crcAnchorTemplate, opts.toc),
//   GetTemplate,
//   "model": async (crcModels, options) => {
//     Const content = await getTemplate(crcModelTemplatePath);
//     Return template(content, options);
//   },
//   "options": opts,
//   "page": getTemplate(crcPageTemplatePath),
//   "toc": getTemplate(crcTocTemplatePath)
// };
