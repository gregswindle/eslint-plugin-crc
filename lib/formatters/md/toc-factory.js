const MdnReference = require("./mdn-reference");
const markdownToc = require("markdown-toc");

const mdnRef = new MdnReference();

const toSlug = (crcModel) => `${crcModel.class.meta.kind} ${crcModel.class.name}`;

class TocFactory {
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
