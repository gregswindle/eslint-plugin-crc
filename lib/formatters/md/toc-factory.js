/**
 *  @module crc/formatters/md/toc-factory
 */

const MdnReference = require("./mdn-reference");
const markdownToc = require("markdown-toc");

const mdnRef = new MdnReference();

const toSlug =
  (crcModel) => `${crcModel.class.meta.kind} ${crcModel.class.name}`;

/**
 * Generates links for tables of content.
 *
 * @class TocFactory
 */

class TocFactory {
  /**
   * Generates a LinkElement basesd on a crcModel.
   *
   * @static
   * @param {CrcModel} crcModel - A CrcModel instance.
   * @returns {string} A unique HTMLLinkElement string.
   * @memberof TocFactory
   */

  static toAnchor (crcModel) {
    const slug = toSlug(crcModel);
    return markdownToc.slugify(slug);
  }

  static toDataTypeLink (crcModel) {
    // False-positive
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    return mdnRef.link(crcModel.class.meta.kind);
  }

  static link (crcModel) {
    const slug = toSlug(crcModel);
    return markdownToc.linkify(slug);
  }
}

module.exports = TocFactory;
