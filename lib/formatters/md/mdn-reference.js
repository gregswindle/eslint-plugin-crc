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
 *
 * @module crc/formatters/md/mdn-reference
 * @memberOf module:crc/formatters/md
 * @see module:crc
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
 * @class MdnReference
 *
 * @classdesc
 * Provides hyperlinks to Mozilla Developer Network (MDN) reference materials
 * for JavaScript's standard, built-in objects, including their methods and
 * properties.
 *
 * @property {array<LinkElement>} references - A list of MDN resources.
 *
 * @param {array<LinkElement>} [references=mdnReferences] - A list of MDN resources.
 *
 * @implements {LinkElement}
 * @see /lib/formatters/md/data/mdn-references.json
 */

class MdnReference {
  constructor (references = mdnReferences) {
    this.references = references;
  }

  /**
   * Returns an MDN URL for an ECMAScript help/tutorial page.
   *
   * @method
   * @name get
   * @memberOf MdnReference
   *
   * @param {string} topic - The help topic.
   * @returns {string|undefined} - A URL string or undefined.
   * @instance
   */

  get (topic) {
    return this.references.find((ref) => topic === ref.text);
  }

  /**
   * Create an {@link https://goo.gl/qUyKr2 HTMLLinkElement} string.
   *
   * @method
   * @name link
   * @memberOf MdnReference
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
