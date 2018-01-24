const references = require("./mdn-references");

/**
 * A lightweight interface used for decorating strings with
 * a simplified HTMLLinkElement.
 *
 * @interface LinkElement
 */

/**
 * @property {string} href - Represents the URI for the target resource.
 * @property {string} text - A readable description of the target resource.
 * @property {string} title - The text that appears in a popup box when a mouse
 *  hovers over the LinkElement's text.
 *
 */

/**
 * Mozilla Developer Network (MDN) reference materials for JavaScript's
 * standard, built-in objects, including their methods and properties.
 *
 * @property {array<LinkElement>} references - A list of MDN resources.
 */

class MdnReference {
  constructor () {
    this.references = references;
  }

  /**
   * Return an MDN
   *
   * @param {type} text Description
   *
   * @returns {type} Description
   */

  get (text) {
    return this.references.find((ref) => text === ref.text);
  }

  link (text) {
    const ref = this.get(text);
    if (ref) {
      return toHtmlLinkString(ref);
    }
    return text;
  }
}

const toHtmlLinkString = (ref) => `<a rel="noopener"
      href="${ref.href}"
      title="${ref.title}">${ref.text}</a>`;

module.exports = MdnReference;
