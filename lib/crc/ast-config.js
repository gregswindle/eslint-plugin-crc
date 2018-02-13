/**
 * `eslint-plugin-crc`'s default Espree AST parsing options.
 *
 * @constant
 * @type {object}
 * @name astConfig
 * @property {boolean} attachComment - Attach comments to the closest relevant
 *  node as leadingComments and trailingComments.
 * @property {boolean} comment - Create a top-level comments array containing
 *  all comments.
 * @property {object} ecmaFeatures
 * @property {boolean} ecmaFeatures.experimentalObjectRestSpread - Allow
 *  experimental object rest/spread.
 * @property {boolean} ecmaFeatures.globalReturn - Enable return in global
 *  scope.
 * @property {boolean} ecmaFeatures.impliedStrict - Enable implied strict mode
 *  (if ecmaVersion >= 5).
 * @property {boolean} ecmaFeatures.jsx - Enable JSX parsing.
 * @property {number} ecmaVersion - Specify the version of ECMAScript syntax
 *  you want to use. Valid versions are:
 *
 * * 3
 * * 5 (default)
 * * 6 (2015)
 * * 7 (2016)
 * * 8 (2017)
 * * 9
 *
 * You can also set to 2015 (same as 6), 2016 (same as 7), or 2017
 * (same as 8) to use the year-based naming.
 * @property {boolean} loc - Attach line/column location information to each
 *  node.
 * @property {boolean} range - Attach range information to each node.
 * @property {enum} sourceType - Specify which type of script you're parsing
 *  (script or module, default is script).
 * @property {boolean} tokens - Create a top-level tokens array containing
 *  all tokens. `tokens` must be set to `true` in order for CRC models to
 *  maintain a list of "references", i.e., where they themselves are referenced.
 *
 * @see module:eslint-plugin-crc/crc
 */

const astConfig = {

  "attachComment": true,

  "comment": true,

  "ecmaFeatures": {

    "experimentalObjectRestSpread": true,

    "globalReturn": true,

    "impliedStrict": true,

    "jsx": true
  },

  "ecmaVersion": 6,

  "loc": true,

  "range": true,

  "sourceType": "module",

  "tokens": true
};

/**
 * @alias astConfig
 */

module.exports = Object.freeze(astConfig);
