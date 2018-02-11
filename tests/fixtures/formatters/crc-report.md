# CRC Model Report

> Object count: 15. _Generated on 2018-01-29T09:27:48.158Z_.

## Table of contents

- [const-astConfig](#const-astconfig)
- [class-CrcClass](#class-crcclass)
- [class-CrcCodebase](#class-CrcCodebase)
- [class-CrcContext](#class-crccontext)
- [class-CrcMeta](#class-crcmeta)
- [class-CrcModel](#class-crcmodel)
- [class-CrcReporter](#class-crcreporter)
- [class-CrcResponsibility](#class-crcresponsibility)
- [class-__dirname](#class-__dirname)
- [class-NodeManager](#class-nodemanager)
- [class-NullCrcClass](#class-nullcrcclass)
- [class-NullCrcMeta](#class-nullcrcmeta)
- [class-NullSourceCode](#class-nullsourcecode)
- [const-isReachable](#const-isreachable)
- [class-SourceCodeFactory](#class-sourcecodefactory)

## CRC Models

<a name="const-astconfig"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
            title="This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do not become properties of the window object, unlike var variables. An initializer for a constant is required; that is, you must specify its value in the same statement in which it's declared (which makes sense, given that it can't be changed later).">const</a><code>astConfig</code></samp></h3><blockquote>`eslint-plugin-crc`&#39;s default Espree AST parsing options.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>astConfig</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
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

module.exports = Object.freeze(astConfig);

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/ast-config.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-crcclass"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>CrcClass</code></samp></h3><blockquote>Const crcLogger = require(&quot;../crc-logger&quot;);</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>CrcClass</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const NullCrcClass = require("./null-crc-class");

// Const crcLogger = require("../crc-logger");

// Const prototypableFinder = require("./prototypable");

const {
  chain,
  find,
  first,
  get
} = require("lodash");

// eslint-disable-next-line max-len
const findNode = (name, astNodes) => astNodes.filter((node) => find(node.declarations, {
  "id": {
    name
  }
}));

/**
 * Create CrcClass.prototype.constructor parameters.
 *
 * @ignore
 * @private
 * @param {CrcContext} context - A CrcContext object.
 *
 * @returns {object} Constructor parameters for a new CrcContext.
 */

const crcClassParamsFactory = {
  "create" (context) {
    return crcClassParamsFactory.fromCrcContext(context);
  },

  "fromCrcContext" (context) {
    const code = get(context, "code");
    const nodes = get(context, "nodes");
    const firstNode = nodes.values().next().value;
    const name = get(firstNode, "name");
    const srcNode = findNode(name, code.ast.body);

    return {
      code,
      "meta": {
        context,
        "filePath": get(context, "filePath"),
        "kind": get(first(srcNode), "kind") || "class",
        "references": getReferences(name, code)
      },
      name
    };
  }
};

const getReferences = (name, sourceCode) => {
  const tokens = get(sourceCode, "ast.tokens");
  return chain(tokens)
    .filter((token) => name === token.value)
    .sortBy(["start"])
    .value();
};

class CrcClass extends NullCrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {CrcContext} context - A summary object with information to derive
   * a CrcModel.
   * @example
   * const crcClass = CrcClass.create(context);
   * @returns {CrcClass} A summary representation of a prototypable object.
   */

  static factory (context) {
    const params = crcClassParamsFactory.create(context);

    // CrcLogger.info(JSON.stringify(prototypableFinder, null, 2));

    return new CrcClass(params);
  }
}

module.exports = CrcClass;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-class.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-CrcCodebase"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>CrcCodebase</code></samp></h3><blockquote>Tracks contextual data for a collection of source code files.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>CrcCodebase</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const CrcContext = require("./crc-context");
const {sortedUniq} = require("lodash");

const defaultConstructorParams = {
  "code": new Map(),
  "contexts": [],
  "filePaths": [],
  "nodes": new Map()
};

/**
 * Tracks contextual data for a collection of source code files.
 *
 */

class CrcCodebase {
  constructor (results) {
    Object.assign(this, defaultConstructorParams);
    this.load(results);
  }

  /**
   * Adds.
   *
   * @param {array.<Result>} results - All
   *
   * @returns {type} Description.
   */

  load (results) {
    results.forEach((result) => {
      const context = CrcContext.parse(result);
      this.contexts.push(context);
      this.filePaths.push(result.filePath);
      context.nodes.forEach((node, namespace) => {
        if (!this.nodes.has(namespace)) {
          this.nodes.set(namespace, node);
        }
      });
    });
    this.filePaths = sortedUniq(this.filePaths);
  }

  /**
   * Factory method for generating a CrcCodebase object.
   *
   * @static
   * @param {array.<Result>} results - An ESLint Rule Result array.
   * @example
   * const codeBaseContext = CrcCodebase.create(results);
   * @returns {CrcCodebase} A CrcCodebase object.
   */

  static parse (results) {
    return new CrcCodebase(results);
  }
}

module.exports = CrcCodebase;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-codebase.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-crccontext"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>CrcContext</code></samp></h3><blockquote>Provides contextual information about source code.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>CrcContext</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const NodeManager = require("./node-manager");
const SourceCodeFactory = require("./source-code-factory");

const defaultConstructorParams = {
  "code": SourceCodeFactory.create(),
  "filePath": null,
  "nodes": new Map()
};

/**
 * Provides contextual information about source code.
 *
 */

class CrcContext {
  constructor (params = defaultConstructorParams) {
    this.code = params.code;
    this.filePath = NodeManager.getNamespace(params.filePath);
    this.nodes = params.nodes;
  }

  /**
   * Factory method for generating a CrcContext object.
   *
   * @static
   * @param {Result} result - An ESLint Rule Result.
   * with ESQuery selectors.
   * @example
   * const context = CrcContext.parse(result);
   * @returns {CrcContext} A CrcContext object.
   */

  static parse (result) {
    const code = SourceCodeFactory.parse(result);
    const {filePath} = result;
    const nodes = NodeManager.getAllNodes(
      NodeManager.getNamespace(filePath),
      code
    );

    return new CrcContext({
      code,
      filePath,
      nodes
    });
  }
}

module.exports = CrcContext;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-context.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-crcmeta"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>CrcMeta</code></samp></h3><blockquote>Metadata for CrcClasses and CrcReporters.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>CrcMeta</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const NullCrcMeta = require("./null-crc-meta");

/**
 * Metadata for CrcClasses and CrcReporters.
 *
 * @class
 * @extends NullCrcMeta
 */

class CrcMeta extends NullCrcMeta {
}

module.exports = CrcMeta;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-meta.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-crcmodel"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>CrcModel</code></samp></h3><blockquote>Default parameters for a CrcModel NullObject.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>CrcModel</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const CrcClass = require("./crc-class");
const CrcResponsibility = require("./crc-responsibility");

/**
 * Default parameters for a CrcModel NullObject.
 *
 * @private
 */

const defaultConstructorParams = {
  "class": new CrcClass(),
  "collaborators": [],
  "meta": {
    "toc": {
      "anchor": null,
      "link": null
    }
  },
  "responsibilities": []
};

/**
 * Represents a <strong>Class-Responsibility-Collaboration model</strong>,
 * which expresses the scope of an object's behaviors
 * (<strong><em>responsibilities</em></strong>) and the objects
 * it depends on to fulfill its responsibilities
 * (<strong><em>collaborators</em></strong>).
 *
 * @property {CrcClass} class - A summary representation of prototypable
 *  objects.
 * @property {array.<CrcClass>} collaborators - An array of zero or more objects
 *  required to fulfill the CrcModel#class's responsibilities.
 * @property {CrcMeta} meta - Additional information.
 * @property {array.<CrcResponsibility>} responsibilities - A list of
 * data this object must maintain and/or operations it must perform.
 * @example
 * // Pass without parameters to create a NullCrcModel object
 * const crcModel = new CrcModel();
 *
 * // Provide a CrcClass instance to reveal its responsibilities and
 * // collaborators.
 * const crcModel = new CrcModel({
 *   class
 * });
 */

class CrcModel {
  /**
   * Create a shadow Class-Responsibility-Collaboration model.
   *
   * @class
   * @param {Object} [params] - A parameter object that optionally sets all of
   * the CrcModel's properties.
   * @param {CrcClass} [params.class] - A <code>class</code> representation.
   * @param {array.<CrcClass>} [params.collaborators] - A collection of zero or
   * more CrcClasses that this object depends on.
   * @param {object} [params.meta] - An object with meta data necessary for
   *  visually rendering the CrcModel.
   * @param {array.<CrcResponsibility>} [params.responsibilities] - A list of
   * data this object must maintain and/or operations it must perform.
   */

  constructor (params = defaultConstructorParams) {
    this.class = params.class;
    this.collaborators = params.collaborators;
    this.meta = params.meta;
    this.responsibilities = CrcResponsibility.assign(params.class);
  }
}

module.exports = CrcModel;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-model.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-crcreporter"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>CrcReporter</code></samp></h3><blockquote>Generates an array of `CrcClasses`.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>CrcReporter</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const CrcClass = require("./crc-class");
const CrcCodebase = require("./crc-codebase");
const CrcModel = require("./crc-model");

/**
 * Generates an array of `CrcClasses`.
 */

class CrcReporter {
  constructor () {
    this.crcModels = [];
    this.codebase = null;
  }

  /**
   * Create a report from all ECMAScript resources.
   *
   * @param {array.<Result>} results - A list of result objects.
   *
   * @returns {array.<CrcModel>} A list of CrcModels.
   */

  report (results) {
    this.codebase = new CrcCodebase(results);

    const crcClasses = [];
    this.codebase.contexts.forEach((context) => {
      const crcClass = CrcClass.create(context);
      crcClasses.push(crcClass);
    });

    this.crcModels = crcClasses.map((crcClass) => new CrcModel({
      "class": crcClass,
      "collaborators": [],
      "responsibilities": []
    }));

    return this.crcModels;
  }
}

module.exports = CrcReporter;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-reporter.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-crcresponsibility"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>CrcResponsibility</code></samp></h3><blockquote>Evaluates objects for declarations of intent, i.e., responsibility.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>CrcResponsibility</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const debug = require("debug");
const doctrine = require("doctrine");
const {first, get, isEmpty} = require("lodash");

/**
 * Evaluates objects for declarations of intent, i.e., responsibility.
 *
 */

class CrcResponsibility {
  /**
   * A factory method that generates a
   * {@link https://github.com/eslint/doctrine doctrine} AST and
   * responsibility string (if found).
   *
   * @param {ASTNode} node - An ESLint representation of ECMAScript programming
   * elements.
   * @param {Context} context - A summary object with `SourceCode` and file info.
   * @returns {CrcResponsibility} An object with a `doctrine` AST and the
   * stated responsibility for the `node`.
   */

  static create (crcClass) {
    const comments = getComments(crcClass);
    debug("%O", comments);
  }

  static assign (crcClass) {
    setDescription(crcClass);
  }
}

const getComments = (crcClass) => {
  const comments = get(crcClass, "code.ast.comments");
  if (!isEmpty(comments)) {
    return comments.map((comment) => doctrine.parse(comment.value, {
      "recoverable": true,
      "sloppy": true,
      "unwrap": true
    }));
  }
  return [];
};

const getDescription = (crcClass) => {
  const comments = get(crcClass, "code.ast.comments");
  if (!isEmpty(comments)) {
    const ast = doctrine.parse(first(comments).value, {
      "recoverable": true,
      "sloppy": true,
      "unwrap": true
    });
    return ast.description.replace(/\s+/g, " ");
  }
  return "";
};

/**
 * Assigns a value to CrcClass#description, if one exists in JSDoc comments.
 *
 * @param {CrcClass} crcClass - The object/class we want to describe.
 *
 * @returns {void} Void.
 *
 * @example
 * setDescription(crcClass);
 * @ignore
 * @private
 */

const setDescription = (crcClass) => {
  crcClass.meta.description = getDescription(crcClass);
};

module.exports = CrcResponsibility;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-responsibility.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-__dirname"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>__dirname</code></samp></h3><blockquote>Create class-responsibilities-collaborators reporting model objects.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>__dirname</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
/**
 * Create class-responsibilities-collaborators
 * reporting model objects.
 *
 * @module eslint-plugin-crc/crc
 */

/*
 * ----------------------------------------------------------------------------
 * Requirements
 * ----------------------------------------------------------------------------
 */

const requireIndex = require("requireindex");

/*
 * ----------------------------------------------------------------------------
 * Plugin Definition
 * ----------------------------------------------------------------------------
 */

module.exports = requireIndex(__dirname);

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/index.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-nodemanager"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>NodeManager</code></samp></h3><blockquote>A utility object that manages ASTNode identity and parsing.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>NodeManager</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const SourceCodeFactory = require("./source-code-factory");
const estraverse = require("estraverse");
const {get} = require("lodash");

/**
 * A utility object that manages ASTNode identity and parsing.
 */

class NodeManager {
  /**
   * @static getAllNodes - Provide all nodes within an `eslint.SourceCode`
   *  object.
   *
   * @param {string} namespace  The full path to a source file appended with
   *  a hash (#) to identify specific objects.
   * @param {SourceCode} sourceCode An `eslint.SourceCode` object.
   *
   * @returns {Map.<string, ASTNode>} A Map of all nodes, referencable by
   *  source file.
   */

  static getAllNodes (namespace, sourceCode) {
    const nodes = new Map();
    estraverse.traverse(sourceCode.ast, {
      enter (node) {
        const ns = NodeManager.getNamespace(namespace, node);
        nodes.set(ns, node);
      }
    });

    return nodes;
  }

  /**
   * @static getNamespace - Provides a unique key for ASTNodes in source code
   *  files.
   *
   * @param {string} filePath - The path to the file with source code.
   * @param {ASTNode} node    - The ASTNode within a source code file.
   *
   * @returns {string} The source code file path followed by #Identifier.name
   *  (if applicable).
   */

  static getNamespace (filePath, node) {
    return `${filePath}${NodeManager.getNodeName(node)}`;
  }

  /**
   * @static getNodeName - Provides the name of an ASTNode.
   *
   * @param {ASTNode} node - The ASTNode within a source code file.
   *
   * @returns {string} The name of an ASTNode, prepended by `/#`.
   */

  static getNodeName (node) {
    const nodeName = get(node, "id.name");
    if (nodeName) {
      return `/${nodeName}`;
    }
    return "";
  }

  /**
   * @static parse - Extracts all nodes from a single eslint Result object.
   *
   * @param {Result} result - The eslint Result object with ASTNodes.
   *
   * @returns {Map.<string, ASTNode>} A Map of all nodes withing multiple
   *  source code files, referencable by source file.
   */

  static parse (result) {
    const code = SourceCodeFactory.parse(result);
    const namespace = NodeManager.getNamespace(result.filePath);
    return NodeManager.getAllNodes(namespace, code);
  }
}

module.exports = NodeManager;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/node-manager.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-nullcrcclass"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>NullCrcClass</code></samp></h3><blockquote>Create a `class` representation for use in a CrcClass (Class-Responsibility-Collaboration model).</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>NullCrcClass</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const NullCrcMeta = require("./null-crc-meta");
const NullSourceCode = require("./null-source-code");

const defaultConstructorParams = {
  "code": new NullSourceCode(),
  "meta": new NullCrcMeta(),
  "name": null,
  "superClass": null
};

class NullCrcClass {
  /**
   * Create a `class` representation for use in a CrcClass
   * (Class-Responsibility-Collaboration model).
   *
   * @param {Object} [params] - A parameter object that sets all of
   * the CrcClass's properties.
   * @param {SourceCode} [params.code] - The ESLint
   * {@link http://bit.ly/2kfR79f `SourceCode`} object.
   * @param {string} [params.filePath] - The physcical path the source code
   *  file.
   * @param {CrcMeta} [params.meta] - Information about the bo
   * @param {string} [params.name] - The source code identifier of the class or
   * object to be modeled.
   * @param {array<ASTNode>} [params.references] - ASTNodes with locations.
   * @param {CrcClass} [params.superClass] - The `prototype` of the object being
   * modeled. Defaults to `null`.
   * @example
   * const crcClass = new CrcClass({
   *   code: sourceCode,
   *   meta: {
   *     context,
   *     description,
   *     filePath,
   *     references
   *   },
   *   name: "Bravo",
   *   superClass: Alpha
   * });
   */

  constructor (params = defaultConstructorParams) {
    this.code = params.code;
    this.meta = params.meta;
    this.name = params.name;
    this.superClass = params.superClass;
  }
}

module.exports = NullCrcClass;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/null-crc-class.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-nullcrcmeta"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>NullCrcMeta</code></samp></h3><blockquote>Represents as prototypal summary object used for reporting.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>NullCrcMeta</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const defaultConstructorParams = {
  "context": null,
  "description": "",
  "filePath": null,
  "kind": "class",
  "references": []
};

/**
 * Represents as prototypal summary object used for reporting.
 *
 * @class
 */

class NullCrcMeta {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {Object} [params] - All possible parameters.
   * @param {Context} [params.context] - The ESLint Context object.
   * @param {string} [params.description] - A summary of the object's purpose.
   * @param {string} [params.filePath] - The full path to the source code file.
   * @param {string} [params.kind] - The ASTNode type.
   * @param {array<ASTNode>} [params.references] - A list of dependents.
   */

  constructor (params = defaultConstructorParams) {
    this.context = params.context;
    this.description = params.description;
    this.filePath = params.filePath;
    this.kind = params.kind;
    this.references = params.references;
  }
}

module.exports = NullCrcMeta;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/null-crc-meta.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-nullsourcecode"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>NullSourceCode</code></samp></h3><blockquote>Eslint.SourceCode NullObject.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>NullSourceCode</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const astConfig = require("./ast-config");
const espree = require("espree");
const {SourceCode} = require("eslint");

const emptyCode = "";
const nullAst = espree.parse(emptyCode, astConfig);

/**
 * Eslint.SourceCode NullObject.
 *
 * @extends SourceCode
 */

/**
 * Returns an eslint.SourceCode NullObject.
 *
 * @returns {SourceCode} An eslint.SourceCode NullObject.
 */

class NullSourceCode extends SourceCode {
  constructor () {
    super(emptyCode, nullAst);
  }

  static create () {
    return new NullSourceCode();
  }
}

module.exports = NullSourceCode;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/null-source-code.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="const-isreachable"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
            title="This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do not become properties of the window object, unlike var variables. An initializer for a constant is required; that is, you must specify its value in the same statement in which it's declared (which makes sense, given that it can't be changed later).">const</a><code>isReachable</code></samp></h3><blockquote>----------- Private -----------</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>isReachable</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const constructorSuper = require("eslint/lib/rules/constructor-super");
const {last} = require("lodash");

/*
 *-----------
 * Private
 *-----------
 */

/**
 * @ignore
 */

const isReachable = (segment) => segment.reachable;

/**
 * @ignore
 */

const isConstructorFunction = (node) => (node.type === "FunctionExpression" && node.parent.type === "MethodDefinition" && node.parent.kind === "constructor");

/**
 * @ignore
 */

const isPossibleConstructor = (node) => {
  if (!node) {
    return false;
  }

  switch (node.type) {
          case "CallExpression":
          case "ClassExpression":
          case "FunctionExpression":
          case "MemberExpression":
          case "MetaProperty":
          case "NewExpression":
          case "TaggedTemplateExpression":
          case "ThisExpression":
          case "YieldExpression":
            return true;

          case "AssignmentExpression":
            return isPossibleConstructor(node.right);

          case "ConditionalExpression":
            return (isPossibleConstructor(node.alternate) || isPossibleConstructor(node.consequent));

          case "Identifier":
            return node.name !== "undefined";

          case "LogicalExpression":
            return (isPossibleConstructor(node.left) || isPossibleConstructor(node.right));

          case "SequenceExpression":
            return isPossibleConstructor(last(node.expressions));

          default:
            return false;
  }
};

module.exports = {
  constructorSuper,

  /**
   * Checks whether or not a given node is a constructor.
   *
   * @param {ASTNode} node - A node to check. This node type is one of
   *   `Program`, `FunctionDeclaratikon`, `FunctionExpression`, and
   *   `ArrowFunctionExpression`.
   * @returns {boolean} `true` if the node is a constructor.
   */

  isConstructorFunction,

  /**
   * Checks whether a given node can be a constructor or not.
   *
   * @param {ASTNode} node - A node to check.
   * @returns {boolean} `true` if the node can be a constructor.
   */

  isPossibleConstructor,

  /**
   * Checks whether a given code path segment is reachable or not.
   *
   * @param {CodePathSegment} segment - A code path segment to check.
   * @returns {boolean} `true` if the segment is reachable.
   */

  isReachable
};

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/prototypable.js</blockquote></dd></dl></details></td></tr></tfoot></table>
<a name="class-sourcecodefactory"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>SourceCodeFactory</code></samp></h3><blockquote>A helper object that generates eslint SourceCode objects.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="" alt="Select to toggle details" align="top" title="Select to toggle details"><code>SourceCodeFactory</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const NullSourceCode = require("./null-source-code.js");
const astConfig = require("./ast-config");
const crcLogger = require("../crc-logger");
const espree = require("espree");
const fs = require("fs-extra");
const path = require("path");
const {SourceCode} = require("eslint");

/**
 * A helper object that generates eslint SourceCode objects.
 */

class SourceCodeFactory {
  static create (src, ast) {
    try {
      return new SourceCode(src, ast);
    } catch (err) {
      crcLogger.error(err, "Returning a NullSourceCode object.");
    }
    return new NullSourceCode();
  }

  static getAst (src) {
    return espree.parse(src, astConfig);
  }

  static parse (result) {
    const src = SourceCodeFactory.toSourceString(result.filePath);
    const ast = SourceCodeFactory.getAst(src);
    return SourceCodeFactory.create(src, ast);
  }

  static toSourceString (filePath) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    return fs.readFileSync(path.resolve(filePath)).toString();
  }
}

module.exports = SourceCodeFactory;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/source-code-factory.js</blockquote></dd></dl></details></td></tr></tfoot></table>
