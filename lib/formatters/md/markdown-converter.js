const MarkdownIt = require("markdown-it");

class MarkdownConverter {
  constructor () {
    this.converter = MarkdownIt({
      "html": true,
      "linkify": true
    });
  }
}

module.exports = MarkdownConverter;
