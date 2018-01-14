/**
 * @fileoverview Analyze and refactor JavaScript codebases with auto-generated
 * Class-Responsibility-Collaboration models.
 * @author Greg Swindle <greg@swindle.net>
 */

/* ------------------------------------------------------------------------------ Requirements ------------------------------------------------------------------------------ */

const path = require("path");
const requireIndex = require("requireindex");

/* ------------------------------------------------------------------------------ Plugin Definition ------------------------------------------------------------------------------ */

module.exports = {
  // Import the markdown formatter

  "formatters": {"crc": requireIndex(path.resolve(__dirname, "formatters/crc"))},

  // Immport Crc services

  "services": requireIndex(path.resolve(__dirname, "crc"))

  /*
   * Import processors
   * processors: {},
   */

  /*
   * Import all rules in lib/rules
   * rules: requireIndex(path.resolve(__dirname, "rules"))
   */
};
