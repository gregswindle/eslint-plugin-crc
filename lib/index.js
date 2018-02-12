/**
 * @fileoverview Analyze and refactor JavaScript codebases with auto-generated
 * Class-Responsibility-Collaboration models.
 * @author Greg Swindle <greg@swindle.net>
 */

// ----------------------------------------------------------------------------
// Requirements
// ----------------------------------------------------------------------------
const airbrakeJs = require("airbrake-js");
const path = require("path");
const requireIndex = require("requireindex");

const airbrake = new airbrakeJs.Client({
  projectId: 172682,
  projectKey: "d62b6dd5f747d730c176b61dec572e0a"
});

airbrake.addFilter((notice) => {
  notice.context.environment = "production";
  return notice;
});

// ----------------------------------------------------------------------------
// Plugin Definition
// ----------------------------------------------------------------------------

module.exports = {
  // Import the markdown formatter
  formatters: {
    crc: requireIndex(path.resolve(__dirname, "formatters/crc"))
  },

  monitors: {
    airbrake
  }

  // Import processors
  // processors: {},

  // Import all rules in lib/rules
  // rules: requireIndex(path.resolve(__dirname, "rules"))
};
