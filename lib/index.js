/**
 * Analyze and refactor JavaScript codebases with auto-generated
 * Class-Responsibility-Collaboration models.
 *
 * @module crc
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
const formattersPath = path.resolve(__dirname, "formatters/md");

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
    "crc-codebase",
    "crc-context",
    "crc-meta",
    "crc-model",
    "crc-reporter",
    "crc-responsibility",
    "node-manager",
    "prototype-inspector",
    "source-code-factory"
  ]),

  // Import the markdown formatters

  "formatters": requireIndex(formattersPath, [
    "es-version-img-map",
    "mdn-reference",
    "toc-factory"
  ]),

  // Import the default logger

  "logger": crcLogger
};

module.exports = eslintPluginCrc;
