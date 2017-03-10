/**
 @fileoverview Espree AST parsing options. Ensure that the "tokens" property is set to true
 in order for CRC models to maintain a list of "references", i.e., where they
 themselves are referenced.
 */
module.exports = {

  /** attach range information to each node */
    range: true,

  /** attach line/column location information to each node */
    loc: true,

  /** create a top-level comments array containing all comments */
    comment: true,

  /** attach comments to the closest relevant node as leadingComments and
      trailingComments */
    attachComment: true,

  /** create a top-level tokens array containing all tokens */
    tokens: true,

  /** set to 3, 5 (default), 6, 7, or 8 to specify the version of ECMAScript syntax you want to use.
      You can also set to 2015 (same as 6), 2016 (same as 7), or 2017 (same as 8) to use the year-based naming. */
    ecmaVersion: 6,

  /** specify which type of script you're parsing (script or module, default is script) */
    sourceType: 'script',

  /** specify additional language features */
    ecmaFeatures: {

    /** enable JSX parsing */
        jsx: true,

    /** enable return in global scope */
        globalReturn: true,

    /** enable implied strict mode (if ecmaVersion >= 5) */
        impliedStrict: true,

    /** allow experimental object rest/spread */
        experimentalObjectRestSpread: true
    }
};
