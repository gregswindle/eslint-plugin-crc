/** Eslint security/detect-non-literal-fs-filename: ["warn"] */

/**
 * Format ESTree {@link https://goo.gl/yTwW1m#node-objects ASTNodes}
 * as CRC Models.
 *
 * @module eslint-plugin-crc/formatters/md
 * @see module:eslint-plugin-crc/crc
 */

const CrcReporter = require("../../crc/crc-reporter");
const MdnReference = require("./mdn-reference");
const tocFactory = require("./toc-factory");
const fs = require("fs-extra");
const markdownToc = require("markdown-toc");
const path = require("path");
const {esImgMap} = require("./es-version-img-map");
const {
  nth,
  template
} = require("lodash");

/*
 * --------------------------------------------------------------------------
 * Helpers
 * --------------------------------------------------------------------------
 */

/**
 * @private
 * @ignore
 */

const importOpts = {
  "imports": {
    esImgMap,
    "toc": tocFactory
  }
};

/**
 * Provides a compiled lodash template.
 *
 * **Security:** `security/detect-non-literal-fs-filename` has been disabled
 * for this private function, since the `markdown` formatter does not accept
 * user-provided values for lodash report templates.
 *
 * @example
 * const crcPageTemplate =
 *  getTempate("crc-page-template.html", {
 *    imports: {
 *      esImgMap
 *    }
 * });
 *
 * @param {string} templateName - The lodash template file name.
 * @returns {string} The compiled lodash template.
 * @private
 */

const getTempate = (templateName, options = {
}) => template(
  fs.readFileSync(
    path.join(__dirname, templateName),
    "utf-8"
  ),
  options
);

const crcModelTemplate =
   getTempate(".templates/en/crc-model-template.html", importOpts);
const crcPageTemplate =
   getTempate(".templates/en/crc-page-template.md");
const crcTocTemplate =
   getTempate(".templates/en/crc-toc-template.md");

/**
 * @private
 * @ignore
 */

const createTableOfContents = (crcModels, toc) => {
  const tableOfContents = crcModels.map((crcModel) => crcTocTemplate({
    crcModel,
    toc
  })).join("");
  return markdownToc(tableOfContents).content;
};

/**
 * @private
 * @ignore
 */

const decorateBuiltInsWithLinks = (crcModels) => {
  const mdnRef = new MdnReference();
  crcModels.forEach((model, index, models) => {
    const hyperlink = mdnRef.link(model.class.meta.kind);
    nth(models, index).class.meta.kind = hyperlink;
  });
};

/*
 * --------------------------------------------------------------------------
 * Public Interface
 * --------------------------------------------------------------------------
 */

/**
 * Create a markdown-based report of CrcModels.
 *
 * @function format
 * @param {array.<Result>} results - A list of ESLint rule parser
 * {@link  https://goo.gl/XMjsa1#the-result-object results}.
 * @example
 * # Run from a Terminal or CLI:
 * eslint \
 *   --format 'eslint-plugin-crc/formatters/md' \
 *   --output 'reports/crc-model-report.md' \
 *   lib/ \
 *   --fix
 * @returns {string} CrcModels rendered as GitHub-flavored markdown with HTML
 *  tables.
 */

module.exports = function format (results) {
  const crcReporter = new CrcReporter();
  const crcModels = crcReporter.report(results);

  // Const codebase = crcReporter.codebase;

  const toc = createTableOfContents(crcModels, tocFactory);

  // Console.log(codebase);

  decorateBuiltInsWithLinks(crcModels);
  const models = crcModels.map((crcModel) => crcModelTemplate({
    crcModel,
    tocFactory
  })).join("");

  const report = crcPageTemplate({
    "date": new Date(),
    "results": models,
    "summary": `Object count: ${crcModels.length}`,
    toc
  });

  return report;
};
