/**
 * @fileoverview Analyze and refactor JavaScript codebases with auto-generated
 * Class-Responsibility-Collaboration models.
 * @author Greg Swindle <greg@swindle.net>
 */

/*
 * ------------------------------------------------------------------------------
 * Requirements
 * ------------------------------------------------------------------------------
 */

const path = require("path");
const requireIndex = require("requireindex");

/*
 * ------------------------------------------------------------------------------
 * Plugin Definition
 * ------------------------------------------------------------------------------
 */

module.exports = {
  "formatters": {
    "crc": requireIndex(path.resolve(__dirname, "formatters/crc"))
  },

  "services": requireIndex(path.resolve(__dirname, "crc"))

};
