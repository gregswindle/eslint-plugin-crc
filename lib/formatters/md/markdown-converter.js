const markdownIt = require("markdown-it");

class MarkdownConverter {
  constructor () {
    this.converter = markdownIt({
      "html": true,
      "linkify": true
    });
  }
}

module.exports = MarkdownConverter;
