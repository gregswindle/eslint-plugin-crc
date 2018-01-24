const mdnReferences = require("./data/mdn-references");

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
  constructor (references = mdnReferences) {
    this.references = references;
  }

  /**
   * Return an MDN URL for an ECMAScript help/tutorial page.
   *
   * @param {string} text - The help topic.
   *
   * @returns {string|undefined} - A URL string or undefined.
   */

  get (text) {
    return this.references.find((ref) => text === ref.text);
  }

  link (text) {
    const ref = this.get(text);
    if (ref) {
      return `<a rel="noopener"
            href="${ref.href}"
            title="${ref.title}">${ref.text}</a>`;
    }
    return text;
  }
}

module.exports = MdnReference;
