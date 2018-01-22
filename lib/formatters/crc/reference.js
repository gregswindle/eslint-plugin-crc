const references = require("./references");

const toHtmlAnchorString = (ref) => `<a rel="noopener"
      href="${ref.href}"
      title="${ref.title}">${ref.text}</a>`;

class Reference {
  constructor () {
    this.references = references;
  }

  get (text) {
    return this.references.find((ref) => text === ref.text);
  }

  link (text) {
    const ref = this.get(text);
    if (ref) {
      return toHtmlAnchorString(ref);
    }
    return text;
  }
}

module.exports = Reference;
