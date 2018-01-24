const MdnReference = require("./mdn-reference");
const markdownToc = require("markdown-toc");

const mdn = new MdnReference();

const toSlug = (crcModel) => `${crcModel.class.meta.kind} ${crcModel.class.name}`;

class TocFactory {
  static toAnchor (crcModel) {
    const slug = toSlug(crcModel);
    return markdownToc.slugify(slug);
  }

  static toDataTypeLink (crcModel) {
    return mdn.link(crcModel.class.meta.kind);
  }

  static link (crcModel) {
    const slug = toSlug(crcModel);
    return markdownToc.linkify(slug);
  }
}

module.exports = TocFactory;
