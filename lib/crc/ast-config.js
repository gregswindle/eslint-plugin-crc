/**
 * @fileoverview Espree AST parsing options. Ensure that the "tokens" property is set to true
 * in order for CRC models to maintain a list of "references", i.e., where they
 * themselves are referenced.
 */

module.exports = {

  /**
   * Attach comments to the closest relevant node as leadingComments and
   * trailingComments.
   */

  "attachComment": true,

  /**
   * Create a top-level comments array containing all comments.
   */

  "comment": true,

  /**
   * Specify additional language features
   */

  "ecmaFeatures": {

    /**
     * Allow experimental object rest/spread
     */

    "experimentalObjectRestSpread": true,

    /**
     * Enable return in global scope
     */

    "globalReturn": true,

    /**
     * Enable implied strict mode (if ecmaVersion >= 5)
     */

    "impliedStrict": true,

    /**
     * Enable JSX parsing
     */

    "jsx": true
  },

  /**
   * Specify the version of ECMAScript syntax you want to use.
   * Valid versions are:
   * * 3
   * * 5 (default)
   * * 6 (2015)
   * * 7 (2016)
   * * 8 (2017)
   * * 9
   * You can also set to 2015 (same as 6), 2016 (same as 7), or 2017
   * (same as 8) to use the year-based naming.
   */

  "ecmaVersion": 6,

  /**
   * Attach line/column location information to each node.
   */

  "loc": true,

  /**
   * Attach range information to each node.
   */

  "range": true,

  /**
   * Specify which type of script you're parsing (script or module, default
   * is script)
   */

  "sourceType": "module",

  /**
   * Create a top-level tokens array containing all tokens
   */

  "tokens": true
};
