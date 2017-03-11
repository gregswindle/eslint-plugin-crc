/**
 * @fileoverview Analyze and refactor JavaScript codebases with auto-generated Class-Responsibility-Collaboration models.
 * @author Greg Swindle <greg@swindle.net>
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');

// import processors
module.exports.processors = {

  // add your processors here
};
