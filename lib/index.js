/**
 * @fileoverview Analyze and refactor JavaScript codebases with auto-generated
 * Class-Responsibility-Collaboration models.
 * @author Greg Swindle <greg@swindle.net>
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require('path');
const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(path.resolve(__dirname, 'rules'));

// import processors
module.exports.processors = {

  // add your processors here
};
