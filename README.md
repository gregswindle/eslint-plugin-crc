# `eslint-plugin-crc`

> Document, analyze, and refactor JavaScript codebases with auto-generated CRC (Class-Responsibility-Collaborator) Models.

[![License][license-image]][license-url]
[![FOSSA Status][fossa-image]][fossa-url]
[![NSP Status][nsp-image]][nsp-url]
[![Dependencies][daviddm-image]][daviddm-url]
[![Dependencies][daviddm-dev-image]][daviddm-dev-url]<br>
[![Travis branch][travis-image]][travis-url]
[![AppVeyor Windows build status][appveyor-image]][appveyor-url]
[![Coveralls coverage][coveralls-image]][coveralls-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Quality Gate][sonar-quality-gate-image]][sonar-quality-gate-url]
[![PRs Welcome][makeapullrequest-image]][makeapullrequest-url]

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Background](#1-background)
  * [1.1. Anatomy of a CRC model](#11-anatomy-of-a-crc-model)
  * [1.2. Sample report](#12-sample-report)
- [2. **Installation**](#2-installation)
- [3. **Usage**](#3-usage)
  * [3.1. Generate CRC Model reports](#31-generate-crc-model-reports)
  * [3.2. Reporting options](#32-reporting-options)
- [4. Benefits](#4-benefits)
  * [4.1. Documentation](#41-documentation)
  * [4.2. Simplicity](#42-simplicity)
  * [4.3. Refactoring support](#43-refactoring-support)
  * [4.4. Technical debt reduction](#44-technical-debt-reduction)
  * [4.5. Design thinking](#45-design-thinking)
  * [4.6. Behavior-driven development](#46-behavior-driven-development)
- [5. **Contributing**](#5-contributing)
- [6. Version](#6-version)
- [7. License](#7-license)
- [8. References](#8-references)
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Background

As software programs get bigger, subtle structural problems accumulate, resulting in [_complexity_][complexity-dfn-url]. As complexity grows over time, it becomes riskier and harder to add features and fix defects.

Tools like CRC Models can help document, analyze, [**refactor**][refactoring-url], and manage software complexity and design. CRC Models portray source code as tables with three simple sections:

<dl>
  <dt>1. Name</dt>
  <dd>What the prototypal object is called in source code.</dd>
  <dt>2. Responsibilities</dt>
  <dd>The work that the object is expected to perform, and the data it's supposed to maintain.</dd>
  <dt>3. Collaborators</dt>
  <dd>Other objects this class directly invokes in order to do its work.</dd>
</dl>

### 1.1. Anatomy of a CRC model

> ![Citation][icon-quote-left-image] A Class Responsibility Collaborator (CRC) model...is...divided into three sections.... A class represents a collection of similar objects, a responsibility is something that a class knows or does, and a collaborator is another class that a class interacts with to fulfill its responsibilities.<sup><a href="#ref-crc-definition">[1]</a></sup>

<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2"><h3><samp>kind <code>Prototypable</code> [<em>extends <code>Object</code></em>]<samp></h3>
      <blockquote>Description of the prototyped object.</blockquote>
      </th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top" align="left">
      <td width="50%">
      <p><code>Prototypable</code>'s activities and purpose:
        <ol>
          <li>What <code>Prototypable</code> does.
          <li>The information it maintains.
        </ol></p>
      </td>
      <td width="50%">
      <p>Objects that <code>Prototypable</code> depends on to:
        <ol>
          <li>Assist <code>Prototypable</code> with its work.
          <li>Provide info/data that <code>Prototypable</code> needs.
        </ol></p>
      </td>
    </tr>
  </tbody>
</table>

### 1.2. Sample report

> Object count: 2. Generated on 2018-01-13T12:44:42.724Z.

 <!-- crc-model-template:html,markdown -->
<a name="crc-model-polygon"></a>
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2">
        <h3>
          <samp><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a>
            <code>Polygon</code>
            extends
            <a rel="noopener" href="https://is.gd/ZZBLcn" target="mdn"><code>Object</code></a></samp>
       </h3>
       <blockquote></blockquote>
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
          <summary><img src="docs/img/icons8/icon-javascript-filled-25.png" alt="Select to toggle" align="top"><code>Polygon</code> details...</summary>
            <dl>
            <dt><strong>Source code</strong></dt>
            <dd><blockquote>

```js
class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.name = 'Polygon'
  }
}

module.exports = Polygon
```

</blockquote></dd>
            <dt><strong>References</strong></dt>
            <dd>
              <blockquote><strong>Polygon is referenced <em>2</em> times in <em>2</em> files.</strong><br><br>
            <ol>
              <li>calculator.js</li>
              <li>dimensions.js</li>
           </ol></blockquote></dd>
           <dt><strong>Path</strong></dt>
           <dd>
            <blockquote>
              /path/to/eslint-plugin-crc/tests/fixtures/crc/class-declaration/polygon.js
            </blockquote>
           </dd>
            </dl>
        </details>
      </td>
    </tr>
  </tfoot>
  <tbody>
    <tr valign="top" align="left">
    <td width="50%">
      <ol><li>Provide <code>height</code>, the measurement of a shape from base to top.</li>
      <li>Provide <code>name</code>, what the geometric shape is called.</li>
      <li>Provide <code>width</code>, the length of a shape from side to side.
      </ol>
    </td>
    <td width="50%">
      <ol> None found. </ol>
    </td>
    </tr>
  </tbody>
</table>

<!--/crc-model-template:html,markdown -->

<!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2">
        <h3><samp>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a>
            <code>Square</code>
            extends
            <a href="#crc-model-polygon"><code>Polygon</code></a></samp>
       </h3>
       <blockquote>A plane figure with four equal straight sides and four right angles.</blockquote>
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
          <summary><img src="docs/img/icons8/icon-javascript-filled-25.png" alt="Select to toggle" align="top"><code>Square</code> details...</summary>
            <dl>
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
 * @property {string=Square} name - The geometric `object`'s name.
 * @extends Polygon
 * @example
 * const square = new Square(2)
 * square.area
 * // => 4
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

module.exports = Square
```

</blockquote></dd>
            <dt><strong>Example</strong></dt>
            <dd><blockquote>

```js
const square = new Square(2)
square.area
// => 4
```

</blockquote></dd>
            <dt><strong>References</strong></dt>
            <dd>
              <blockquote><strong>Square is referenced <em>1</em> time in <em>1</em> file.</strong><br><br>
            <ol>
              <li>foobar.js</li>
           </ol></blockquote></dd>
           <dt><strong>Path</strong></dt>
           <dd>
            <blockquote>
              /path/to/eslint-plugin-crc/tests/fixtures/crc/class-declaration/square.js
            </blockquote>
           </dd>
            </dl>
        </details>
      </td>
    </tr>
  </tfoot>
  <tbody>
    <tr valign="top" align="left">
    <td width="50%">
      <ol><li>Provide <code>area</code>, the extent of a two-dimensional figure or shape, or planar lamina, in the plane.</li></ol>
    </td>
    <td width="50%">
      <ol><li><code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" title="View definition on MDN.">Math</a></code> [226 32:48]</ol>
    </td>
    </tr>
  </tbody>
</table>

<!--/crc-model-template:html,markdown -->

> ![Use of terms][icon-info-image] Despite the implementation of the `class`, `constructor`, `static`, `extends`, and `super` keywords in ES2015, JavaScript _still_ achieves encapsulation, inheritance, and polymorphism with `prototype` chains. Nevertheless, I use the word `class` to refer to JavaScript objects with `prototype`-based inheritance.

## 2. **Installation**

You'll first need to install [ESLint](http://eslint.org):

```bash
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-crc`.

> :octocat: `eslint-plugin-crc` isn't available via `npm` yet, so you'll have to clone this repository, for now.

```bash
# Clone this repository
$ git clone https://github.com/gregswindle/eslint-plugin-crc.git

# Change into the eslint-plugin-crc directory
$ cd eslint-plugin-crc

# Symlink the eslint-plugin-crc package directory
# so you can run eslint-plugin-crc globally
$ npm link
```

## 3. **Usage**

### 3.1. Generate CRC Model reports

For local (`devDependency`) installations, run:

```bash
$ ./node_modules/.bin/eslint \
  -f './lib/formatters/crc' tests/fixtures/crc/class-declaration/*.js \
  -o reports/crc-model-report.md
```

If you installed `eslint-plugin-crc` globally, you can run the `cli` client:

```bash
$ eslint-plugin-crc test/fixtures/crc/class-declaration/*.js
# => ✅  Generated a CRC Model report to /Users/you/repo/reports/crc-model-report.md
```

### 3.2. Reporting options

You can provide a custom report destination, too:

```bash
$ eslint-plugin-crc test/fixtures/crc/class-declaration/*.js \
  --output="./tests/reports/refactoring.md"
# => ✅  Generated a CRC Model report to ./tests/reports/refactoring.md
```

Use the `--help` flag to view all options:

```bash
$ eslint-plugin-crc --help

  Generate CRC (Class-Responsibility-Collaboration) Model
  reports to analyze and refactor JavaScript codebases.

  Usage
    $ eslint-plugin-crc input [options] [info]

  Input
    The path (or glob) of the JavaScript resources you want
    analyzed. [Default: '.']

  Options
    --output, -o  The "CRC Models report" destination directory.
                  [Default: './reports']

  Info
    --help        Show this dialog.
    --version     Display the installed semantic version.

  Examples
    $ eslint-plugin-crc
    ✅  Generated a CRC Model report to
     /Users/you/work/repo/reports/crc-model-report.md.

    $ eslint-plugin-crc 'lib/**/*.js' -o='./tests/analysis'
    ✅  Generated a CRC Model report to
     /Users/you/work/repo/tests/analysis/crc-model-report.md.

    $ eslint-plugin-crc -o='😱'
    ❌  There was a problem generating your CRC Model report.
        Error: ENOENT: no such file or directory, open '😱'

```

## 4. Benefits

### 4.1. Documentation

CRC Models are small and easy to read. CRC Models portray software programs in a technology-agnostic way by focusing on accurate _names_, _responsibilities_, and _collaboration_ instead of technical mechanics.

### 4.2. Simplicity

CRC Models express how software programs behave and interact in order to fulfill defined responsibilities.

CRC models focus on the **purpose** of classes instead of their **mechanics**. Because of their simplicity, CRC models are useful for

 * Designing new features
 * Improving the design of existing software
 * Understanding existing codebases

Consequently, analysts don't need much (if any) training. All stakeholders can participate.

### 4.3. Refactoring support

As software programs grow over time, engineers detect whiffs of potentially deeper problems wafting from source code. Like an odor you can't quite find the right words for, software also starts giving off [code smells][code-smell-url]. _Code smells signify software that is sweating under the strain of complexity or an imbalanced design._

Software can become brittle and inextensible unless we sniff out the structural problems that create code smells. CRC Models can help us clean and deodorize malodorous software with [_refactorings_][refactoring-url].

> <dl><strong>Refactoring defined</strong>
> <dt>:book: noun</dt>
> <dd>a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior</dd>
>
> <dt>:book: verb</dt>
> <dd>to restructure software by applying a series of refactorings without changing its observable behavior <sup><a href="#ref-refactoring-definition">[2]</a></sup></dd>
> </dl>

### 4.4. Technical debt reduction

Code smells often indicate technical debt.

> :book: <dfn><strong>Technical debt</strong></dfn> (also known as _design debt_ or _code debt_) is a concept in software development that reflects the implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer. <sup><a href="#ref-technical-debt">[3]</a></sup>

As technical debt increases, new features take longer to ship, and defects become harder to fix. CRC Models can help address the causes of technical debt, including:  

 * Deficient documentation
 * Delayed refactoring
 * Faulty understanding
 * Inadequate collaboration
 * Insufficient definitions
 * Tightly-coupled components

### 4.5. Design thinking

[Design thinking](https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process)'s non-linear, iterative process model deliberately introduces exercises and methods in order to encourage:

 * [Divergent thinking](https://en.wikipedia.org/wiki/Divergent_thinking), which ideates many possible solutions, as well as
 * [Convergent thinking](https://en.wikipedia.org/wiki/Convergent_thinking), which hones in on a user-centered solution based on test results from rapid prototypes.

![Design thinking's non-linear process model.][design-thinking-process-model-img]

**CRC Models focus on software's _purpose_, _behavior_, and _interactions_.** This focus encourages divergent thinking to _redefine_ and _ideate_ software before jumping to convergent thinking--_prototyping_ and _testing_--required to improve software design. CRC Models therefore compliment creative, solution-based methodologies like design thinking.

### 4.6. Behavior-driven development

Behavior-driven development (BDD) incorporates **_design_** as a routine exercise during product delivery. **BDD is a process model** that incorporates solution-based testing, programming, and design into an iterative routine. BDD begins with tests-as-specifications (specs) first, followed by source code development, which then leads to discrete design improvements with refactorings.

![BDD incorporates testing, programming, and design improvement into a repeatable process model.][bdd-process-image]

The very structure of Class-Responsibility-Collaboration models, with their emphasis on the appropriate distribution of responsibilities among classes (and therefore how those classes collaborate) reflects BDD's emphasis on behavior _as well as_ of mechanics.

## 5. **Contributing**

[![PRs Welcome][makeapullrequest-image]][makeapullrequest-url] We welcome contributions with GitHub **issues** and **pull requests**.

---

[:beginner: Read **Contributing to `eslint-plugin-crc`** to get started :beginner:][contributing-url].

[:mortar_board: Free and independent training][makeapullrequest-url] is available, too.

---

[**Contributing**][contributing-url] with GitHub issues and pull requests is welcome. Before embarking on a significant change, please:

 1. Read the [Code of Conduct][code-of-conduct-url];
 1. Create an issue to   

    [![Propose a new feature][btn-feature-img]][issues-new-feature-url] or

    [![Report a defect][btn-defect-img]][issues-new-defect-url]

 1. Follow [**Contributing to `eslint-plugin-crc's`**][contributing-url] guidelines (if you're willing and able to program or want to learn how).

## 6. Version

`eslint-plugin-crc`'s latest version is <!-- semver --> [`v0.2.0`][changelog-url] <!-- semverend --> . Please read the [CHANGELOG][changelog-url] for details.

## 7. License

[MIT][license-url] © [Greg Swindle][author-url]

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-crc.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-crc?ref=badge_large)

View [`eslint-plugin-crc`'s third party software dependencies](NOTICE.md).

## 8. References

<a name="ref-crc-definition"></a>
**[1]** S. Ambler, "Class Responsibility Collaborator (CRC) Models: An Agile Introduction", Agilemodeling.com, 2017. [Online]. Available: http://agilemodeling.com/artifacts/crcModel.htm. [Accessed: 22- Nov- 2017]

<a name="ref-refactoring-definition"></a>
**[2]** M. Fowler, "Refactoring", Refactoring.com, 2017. [Online]. Available: https://refactoring.com/. [Accessed: 22- Nov- 2017]

<a name="ref-refactoring-definition"></a>
**[3]** "Technical debt", En.wikipedia.org, 2018. [Online].
   Available: https://en.wikipedia.org/wiki/Technical_debt. [Accessed: 21- Jan- 2018]

---

[![License][license-image]][license-url]
[![Readme Score](http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/gregswindle/eslint-plugin-crc/blob/master/readme.md)](http://clayallsopp.github.io/readme-score?url=https://github.com/gregswindle/eslint-plugin-crc)
[![Greenkeeper][greenkeeper-img]][greenkeeper-url]

[api-docs-url]: https://github.com/gregswindle/eslint-plugin-crc/docs/API.md
[apigee-edge-js-url]: http://docs.apigee.com/api-services/reference/javascript-object-model
[appveyor-image]: https://img.shields.io/appveyor/ci/gregswindle/eslint-plugin-crc.svg?style=flat-square&logo=appveyor
[appveyor-url]: https://ci.appveyor.com/project/gregswindle/eslint-plugin-crc
[author-url]: https://github.com/gregswindle
[bdd-process-image]: docs/img/bdd-process.png
[btn-defect-img]: docs/img/icon-button-report-a-defect.png
[btn-feature-img]: docs/img/icon-button-propose-a-new-feature.png
[changelog-url]: https://github.com/gregswindle/eslint-plugin-crc/blob/master/CHANGELOG.md
[classes-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[codacy-coverage-image]: https://api.codacy.com/project/badge/Coverage/fa4ade3f68a04b9cad26165a59ceb88e
[codacy-coverage-url]: https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&utm_medium=referral&utm_content=gregswindle/eslint-plugin-crc&utm_campaign=Badge_Coverage
[codacy-image]: https://img.shields.io/codacy/grade/685cb41fec6746038e6deaa1bfddb71a.svg?style=flat-square
[codacy-url]: https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gregswindle/eslint-plugin-crc&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: https://github.com/gregswindle/eslint-plugin-crc/blob/master/.github/CODE_OF_CONDUCT.md
[code-smell-url]: https://en.wikipedia.org/wiki/Code_smell
[complexity-dfn-url]: https://en.wikipedia.org/wiki/Programming_complexity
[complexity-report-url]: https://github.com/escomplex/complexity-report
[contributing-url]: https://github.com/gregswindle/eslint-plugin-crc/blob/master/.github/CONTRIBUTING.md
[coveralls-image]: https://img.shields.io/coveralls/github/gregswindle/eslint-plugin-crc.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/gregswindle/eslint-plugin-crc?branch=master
[daviddm-dev-image]: https://david-dm.org/gregswindle/eslint-plugin-crc/dev-status.svg?style=flat-square
[daviddm-dev-url]: https://david-dm.org/gregswindle/eslint-plugin-crc?type=dev
[daviddm-image]: https://david-dm.org/gregswindle/eslint-plugin-crc.svg?theme=shields.io&style=flat-square
[daviddm-url]: https://david-dm.org/gregswindle/eslint-plugin-crc
[design-thinking-process-model-img]: docs/img/design-thinking-process.png
[editorconfig-url]: http://editorconfig.org/
[eslint-github-url]: https://github.com/eslint/eslint
[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgregswindle%2Feslint-plugin-crc.svg?type=shield&style=flat-square
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fgregswindle%2Feslint-plugin-crc?ref=badge_shield
[greenkeeper-img]: https://badges.greenkeeper.io/gregswindle/eslint-plugin-crc.svg?style=flat-square
[greenkeeper-url]: https://greenkeeper.io/
[icon-info-image]: docs/img/icons8/icon-info-30.png
[icon-quote-left-image]: docs/img/icons8/icon-quote-left-25.png
[issues-new-defect-url]: https://github.com/gregswindle/eslint-plugin-crc/issues/new?title=fix%28affected-scope%29%3A+50-character-defect-summary&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feature-url]: https://github.com/gregswindle/eslint-plugin-crc/issues/new?title=feat%28affected-scope%29%3A+50-character-change-proposal-summary&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-url]: https://github.com/gregswindle/eslint-plugin-crc/issues
[jsdoc2md-url]: https://github.com/jsdoc2md/jsdoc-to-markdown
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/gregswindle/eslint-plugin-crc/blob/master/LICENSE
[lint-def-url]: https://en.wikipedia.org/wiki/Lint_(software)
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[npm-image]: https://badge.fury.io/js/eslint-plugin-crc.svg
[npm-url]: https://npmjs.org/package/eslint-plugin-crc
[nsp-image]: https://nodesecurity.io/orgs/gregswindle/projects/da7e6d96-620d-4acb-8559-85c06c66921a/badge?style=flat-square
[nsp-url]: https://nodesecurity.io/orgs/gregswindle/projects/da7e6d96-620d-4acb-8559-85c06c66921a
[pr-url]: https://github.com/gregswindle/eslint-plugin-crc/pulls
[readme-score-img]: http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/gregswindle/eslint-plugin-crc
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/gregswindle/eslint-plugin-crc
[refactoring-url]: https://github.com/gregswindle/eslint-plugin-crc/wiki/Refactorings-by-category
[scoreme-url]: http://clayallsopp.github.io/readme-score/?url=https://github.com/gregswindle/eslint-plugin-crc/blob/master/README.md
[sonar-cognitive-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=cognitive_complexity
[sonar-cognitive-url]: https://sonarcloud.io/component_measures/metric/cognitive_complexity/list?id=gregswindle-eslint-plugin-crc
[sonar-complexity-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=function_complexity
[sonar-complexity-url]: https://sonarcloud.io/component_measures/domain/Complexity?id=gregswindle-eslint-plugin-crc
[sonar-coverage-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=coverage
[sonar-coverage-url]: https://sonarcloud.io/component_measures/domain/Coverage?id=gregswindle-eslint-plugin-crc
[sonar-quality-gate-image]: https://sonarcloud.io/api/badges/gate?key=gregswindle-eslint-plugin-crc
[sonar-quality-gate-url]: https://sonarcloud.io/dashboard/index/gregswindle-eslint-plugin-crc
[sonar-tech-debt-img]: https://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=sqale_debt_ratio
[sonar-tech-debt-url]: https://sonarcloud.io/component_measures/metric/sqale_index/list?id=gregswindle-eslint-plugin-crc
[travis-image]: https://img.shields.io/travis/gregswindle/eslint-plugin-crc/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/gregswindle/eslint-plugin-crc
