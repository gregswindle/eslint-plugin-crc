/**
 * @fileoverview Analyze and refactor JavaScript codebases with auto-generated
 * Class-Responsibility-Collaboration models.
 * @author Greg Swindle <greg@swindle.net>
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
const path = require("path");
const requireIndex = require("requireindex");

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// Import all rules in lib/rules
module.exports.rules = requireIndex(path.resolve(__dirname, "rules"));

// Import processors
module.exports.processors = {

  // Add your processors here
};
