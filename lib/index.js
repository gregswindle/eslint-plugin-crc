/**
 * Analyze and refactor JavaScript codebases with auto-generated
 * Class-Responsibility-Collaboration models.
 *
 * @module eslint-plugin-crc
 */

/*
 *----------------------------------------------------------------------------
 *  Requirements
 *----------------------------------------------------------------------------
 */

const crcLogger = require("./crc-logger");
const path = require("path");
const requireIndex = require("requireindex");

/*
 *----------------------------------------------------------------------------
 *  Helpers
 *----------------------------------------------------------------------------
 */

const crcPath = path.resolve(__dirname, "crc");
const formattersPath = path.resolve(__dirname, "formatters/crc");

/*
 *----------------------------------------------------------------------------
 *  Plugin Definition
 *----------------------------------------------------------------------------
 */

const eslintPluginCrc = {
  // Import the common library modules

  "crc": requireIndex(crcPath, [
    "ast-config",
    "crc-class",
    "crc-context-codebase",
    "crc-context",
    "crc-model",
    "crc-reporter",
    "crc-responsibility",
    "node-manager",
    "null-source-code",
    "source-code-factory"
  ]),

  // Import the markdown formatters

  "formatters": requireIndex(formattersPath, [
    "ecma-script-img-map",
    "index",
    "mdn-reference"
  ]),

  // Import the default logger

  "logger": crcLogger
};

module.exports = eslintPluginCrc;
