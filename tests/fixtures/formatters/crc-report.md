'# CRC Model results
> Object count: 2. Generated on 2017-12-09T21:40:29.184Z.

 <!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2">
        <h3>
          <tt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a></tt>
            Polygon
            <tt>extends
            <a rel="noopener" href="https://is.gd/ZZBLcn" target="mdn">Object</a></tt>
       </h3>
       <blockquote>

       </blockquote>
       </th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tfoot valign="top" align="left">
    <tr valign="top" align="left" width="100%">
      <td bgcolor="#fcfcfc" colspan="2">
        <details>
          <summary><img src="docs/img/icons8/icon-javascript-filled-25.png" alt="Select to toggle" align="top"> Details...</summary>
            <dl>
            <dt><strong>Example</dt>
            <dd><blockquote>

```js

```

</blockquote>
</dd>
            <dt><strong>Source code</strong></dt>
            <dd><blockquote>

```js
class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.name = \'Polygon\'
  }
}

module.exports = Polygon;

```

</blockquote></dd>
            <dt><strong>References</strong></dt>
            <dd>
              <blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br>
            <ol>
              <li>TODO: reference one.</li>
              <li>TODO: reference two.</li>
              <li>TODO: reference one.</li>
           </ol></blockquote></dd>
            </dl>
        </details>
      </td>
    </tr>
  </tfoot>
  <tbody>
    <tr valign="top" align="left">
    <td width="50%">
      <ol> Undetermined. </ol>
    </td>
    <td width="50%">
      <ol> None found. </ol>
    </td>
    </tr>
  </tbody>
</table>

<!--/crc-model-template:html,markdown -->


[classes-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
,<!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2">
        <h3>
          <tt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a></tt>
            Square
            <tt>extends
            Polygon</tt>
       </h3>
       <blockquote>

       </blockquote>
       </th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tfoot valign="top" align="left">
    <tr valign="top" align="left" width="100%">
      <td bgcolor="#fcfcfc" colspan="2">
        <details>
          <summary><img src="docs/img/icons8/icon-javascript-filled-25.png" alt="Select to toggle" align="top"> Details...</summary>
            <dl>
            <dt><strong>Example</dt>
            <dd><blockquote>

```js

```

</blockquote>
</dd>
            <dt><strong>Source code</strong></dt>
            <dd><blockquote>

```js
const Polygon = require("./polygon");

/**
 * A plane figure with four equal straight sides and four right
 * angles.
 *
 * @property {number} area - The extent of a two-dimensional figure
 * or shape, or planar lamina, in the plane.
 * @property {string=Square} name - The geometric `object`\'s name.
 * @extends Polygon
 */
class Square extends Polygon {
  /**
    * Call the parent class\'s constructor with lengths
    * provided for the Polygon\'s width and height.
    * @param {!number=0} length - The length of all sides.
    * @constructor
    */
  constructor(length = 0) {
    super(length, length)
    this.name = \'Square\'
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

</blockquote></dd>
            <dt><strong>References</strong></dt>
            <dd>
              <blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br>
            <ol>
              <li>TODO: reference one.</li>
              <li>TODO: reference two.</li>
              <li>TODO: reference one.</li>
           </ol></blockquote></dd>
            </dl>
        </details>
      </td>
    </tr>
  </tfoot>
  <tbody>
    <tr valign="top" align="left">
    <td width="50%">
      <ol> Undetermined. </ol>
    </td>
    <td width="50%">
      <ol> None found. </ol>
    </td>
    </tr>
  </tbody>
</table>

<!--/crc-model-template:html,markdown -->


[classes-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


---
