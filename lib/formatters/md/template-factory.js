const TocFactory = require("./toc-factory");
const fs = require("fs-extra");
const path = require("path");

// Const crcLogger = require("../../crc-logger");

const {esImgMap} = require("./es-version-img-map");
const {template} = require("lodash");

/**
 * Provides a compiled lodash template.
 *
 * **Security:** `security/detect-non-literal-fs-filename` has been disabled
 * for this private function, since the `markdown` formatter does not accept
 * user-provided values for lodash report templates.
 *
 * @example
 * const crcPageTemplate =
 *  TemplateFactory.getTempate("crc-page-template.html", {
 *    imports: {
 *      esImgMap
 *    }
 * });
 *
 * @param {string} [templatePath] - The lodash template file path.
 * @param [options={}] - (Object): The options object.
 * @param [options.escape=_.templateSettings.escape] - (RegExp): The HTML "escape" delimiter.
 * @param [options.evaluate=_.templateSettings.evaluate] - (RegExp): The "evaluate" delimiter.
 * @param [options.imports=_.templateSettings.imports] - (Object): An object to import into the template as free variables.
 * @param [options.interpolate=_.templateSettings.interpolate] - (RegExp): The "interpolate" delimiter.
 * @param [options.sourceURL='lodash.templateSources[n]'] - (string): The sourceURL of the compiled template.
 * @param [options.variable='obj'] - (string): The data object variable name.
 * @returns {string} The compiled lodash template.
 * @private
 */

const getTemplate = async (templateName, options = opts.defaults) => {
  const templatePath = path.join(__dirname, templateName);
  const content = await fs.readFile(templatePath, "utf-8");
  return template(content, options);
};

const crcAnchorTemplate = ".templates/en/crc-anchor-template.html";
const crcModelTemplatePath = ".templates/en/crc-model-template.html";
const crcPageTemplatePath = ".templates/en/crc-page-template.md";
const crcTocTemplatePath = ".templates/en/crc-toc-template.md";

const opts = {
  "defaults": {
  },
  "model": {
    "imports": {
      esImgMap
    }
  },
  "toc": {
    "imports": {
      "toc": TocFactory
    }
  }
};

module.exports = {
  "anchor": getTemplate(crcAnchorTemplate, opts.toc),
  getTemplate,
  "model": async (crcModels, options) => {
    const content = await getTemplate(crcModelTemplatePath);
    return template(content, options);
  },
  "options": opts,
  "page": getTemplate(crcPageTemplatePath),
  "toc": getTemplate(crcTocTemplatePath)
};
