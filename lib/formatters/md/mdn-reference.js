const mdnReferences = require("./data/mdn-references");

/**
 * A lightweight interface used for decorating strings with
 * a simplified {@link https://goo.gl/qUyKr2 HTMLLinkElement}.
 *
 * @interface LinkElement
 *
 * @property {string} href - Represents the URI for the target resource.
 * @property {string} text - A readable description of the target resource.
 * @property {string} title - The text that appears in a popup box when a mouse
 *  hovers over the LinkElement's text.
 */

/**
 * Creates an [HTMLLinkElement](https://goo.gl/qUyKr2) string.
 *
 * @method LinkElement#link
 * @param {string} topic - A valid topic key.
 *
 * @returns {string} An an [HTMLLinkElement](https://goo.gl/qUyKr2) string.
 */

/**
 * Provides hyperlinks to Mozilla Developer Network (MDN) reference materials
 * for JavaScript's standard, built-in objects, including their methods and
 * properties.
 *
 * @property {array<LinkElement>} references - A list of MDN resources.
 * @class MdnReference
 * @implements {LinkElement}
 */

class MdnReference {
  constructor (references = mdnReferences) {
    this.references = references;
  }

  /**
   * Returns an MDN URL for an ECMAScript help/tutorial page.
   *
   * @method MdnReference#get
   * @param {string} topic - The help topic.
   * @returns {string|undefined} - A URL string or undefined.
   */

  get (topic) {
    return this.references.find((ref) => topic === ref.text);
  }

  /**
   * Create an {@link https://goo.gl/qUyKr2 HTMLLinkElement} string.
   *
   * @method
   * @name MdnReference#link
   *
   * @param {string} topic - The key of the MDN built-in object to reference.
   * @returns {string} An {@link https://goo.gl/qUyKr2 HTMLLinkElement} string.
   * @implements {LinkElement#link}
   */

  link (topic) {
    const ref = this.get(topic);
    if (ref) {
      return `<a rel="noopener"
            href="${ref.href}"
            title="${ref.title}">${ref.text}</a>`;
    }
    return topic;
  }
}

module.exports = MdnReference;
