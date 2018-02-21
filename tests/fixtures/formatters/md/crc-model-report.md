# CRC Model Report

> Object count: 1. _Generated on 2018-01-29T09:52:54.132Z_.

## Table of contents

- [class-Square](#class-square)

## CRC Models

<a name="class-square"></a>
<table width="100%"><thead><tr valign="top" align="left"><th colspan="2"><h3><samp><a rel="noopener"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"
            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a><code>Square</code></samp></h3><blockquote>A plane figure with four equal straight sides and four right angles.</blockquote></th></tr><tr valign="top" align="left"><th>Responsibilities</th><th>Collaborators</th></tr></thead><tbody><tr valign="top" align="left"><td width="50%">None found. </td><td width="50%"> None found. </td></tr></tbody><tfoot valign="top" align="left"><tr valign="top" align="left" width="100%"><td bgcolor="#fcfcfc" colspan="2"><details><summary><img src="icon-javascript-filled-25.png" alt="Select to toggle details" align="top" title="Select to toggle details"><code>Square</code> details...</summary><dl><dt><p><strong>Source code</strong></dt><dd><blockquote>

```js
const Polygon = require("./polygon");

/**
 * A plane figure with four equal straight sides and four right
 * angles.
 *
 * @property {number} area - The extent of a two-dimensional figure
 * or shape, or planar lamina, in the plane.
 * @property {string=Square} name - The geometric `object`'s name.
 * @extends Polygon
 */
class Square extends Polygon {
  /**
    * Call the parent class's constructor with lengths
    * provided for the Polygon's width and height.
    * @param {!number=0} length - The length of all sides.
    * @constructor
    */
  constructor(length = 0) {
    super(length, length)
    this.name = 'Square'
  }

  get area() {
    return this.height * this.width
  }

  set area(value) {
    this.height = this.width = Math.sqrt(value)
  }
}

module.exports = Square;

```

</blockquote></dd><dt><p><strong>References</strong></dt><dd><blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br><ol><li>TODO: reference one.</li><li>TODO: reference two.</li><li>TODO: reference one.</li></ol></blockquote></dd><dt><p><strong>Path</strong></dt><dd><blockquote>/Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/tests/fixtures/crc/class-declaration/square.js</blockquote></dd></dl></details></td></tr></tfoot></table>
