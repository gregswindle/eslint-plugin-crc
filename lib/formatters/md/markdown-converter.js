const markdownIt = require('markdown-it')
const markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default

/**
 * @private
 * @constant
 */

const SECOND_H2 = 2

const markdownConverter = markdownIt({
  'html': true,
  'linkify': true,
  'typography': true
}).use(markdownItTocAndAnchor, {
  'tocFirstLevel': SECOND_H2
})

console.log(Object.keys(markdownConverter))

/**
 * A proxy/wrapper for markdown tables of content and links.
 *
 * @requires markdown-it
 * @requires markdown-it-toc-and-anchor
 * @name markdownConverter
 *
 */

module.exports = markdownConverter
