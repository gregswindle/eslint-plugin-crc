# `eslint-plugin-crc`

> Analyze, model, and refactor JavaScript codebases with auto-generated Class-Responsibility-Collaborator models.

[![Inline docs](http://inch-ci.org/github/gregswindle/eslint-plugin-crc.svg?branch=develop&style=flat-sqaure)](http://inch-ci.org/github/gregswindle/eslint-plugin-crc?branch=develop) [![Travis CI Build Status](https://travis-ci.org/gregswindle/eslint-plugin-crc.svg?branch=master)](https://travis-ci.org/gregswindle/eslint-plugin-crc) [![NSP Status](https://nodesecurity.io/orgs/gregswindle/projects/da7e6d96-620d-4acb-8559-85c06c66921a/badge)](https://nodesecurity.io/orgs/gregswindle/projects/da7e6d96-620d-4acb-8559-85c06c66921a) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/685cb41fec6746038e6deaa1bfddb71a)](https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&utm_medium=referral&utm_content=gregswindle/eslint-plugin-crc&utm_campaign=Badge_Grade) [![Coverage Status](https://coveralls.io/repos/github/gregswindle/eslint-plugin-crc/badge.svg?branch=develop)](https://coveralls.io/github/gregswindle/eslint-plugin-crc?branch=develop) [![Quality Gate](https://sonarqube.com/api/badges/gate?key=gregswindle-eslint-plugin-crc)](https://sonarqube.com/dashboard/index/gregswindle-eslint-plugin-crc)
[![bitHound Dependencies](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/badges/dependencies.svg)](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/develop/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/badges/devDependencies.svg)](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/develop/dependencies/npm)

## Table of contents

<!-- toc -->

- [1. Installation](#1-installation)
- [2. Usage](#2-usage)
  * [2.1. Configuration](#21-configuration)
  * [2.2. Report generation](#22-report-generation)
- [3. Benefits](#3-benefits)
  * [3.1. Agile, behavior-driven modeling](#31-agile-behavior-driven-modeling)
  * [3.2. Anatomy of a CRC model](#32-anatomy-of-a-crc-model)
  * [3.3. Refactoring with CRC models](#33-refactoring-with-crc-models)
- [4. Supported Rules](#4-supported-rules)
- [5. Contributing](#5-contributing)
- [6. Version](#6-version)
- [7. License](#7-license)

<!-- tocstop -->

<!-- tocend -->

## 1. Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-crc`:

```
$ npm install eslint-plugin-crc --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-crc` globally.

## 2. Usage

### 2.1. Configuration

Add `crc` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "crc"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "crc/rule-name": 2
    }
}
```
### 2.2. Report generation

Invoke the crc-reporter to generate CRC models:

```bash
$ lib/crc-reporter.js --help

  Usage: crc-reporter [options] <files>

  Generates a Class-Responsibility-Collaboration report for analysis and refactoring.


  Options:

    -V, --version          output the version number
    -o, --output [output]  The report destination. Defaults to "./crc-model-report."
    -x, --exclude [glob]   A glob of files to exclude from analysis."
    -h, --help             output usage information
```

For convenience, create an `npm-script`:

```json
"scripts": {
  "crc-models": "crc-reporter --output ./reports ./lib/**/*.js"
}
```

To automate behavior-driven development's "specify, code, and refactor" cycles, generate CRC models with a `posttest` script:

```json
"scripts": {
  "crc-models": "crc-reporter --output ./reports ./lib/**/*.js",
  "posttest": "npm run crc-models"
}
```

## 3. Benefits

Agile methodologies, as well as DevSecOps activities, attempt to incorporate design exercises as a routine component of product delivery. For example, behavior-driven development (BDD) prescribes iterative activities intended to redefine and contextualize design, testing, and programming as unified activities that share common specifications expressing a product's behavior instead of its technical implementation. BDD extends TDD's focus on refactoring to how classes behave with each other. The very structure of Class-Responsibility-Collaboration models, with their emphasis on the appropriate distribution of responsibilities among classes (and therefore how those classes collaborate) reflects BDD's emphasis on behavior instead of technical assertions.

### 3.1. Agile, behavior-driven modeling

CRC Models express how classes (i.e., prototyped JavaScript objects) behave and interact in order to fulfill their specified responsibilities.

> :speech_balloon: A Class Responsibility Collaborator (CRC) model...is...divided into three sections.... A class represents a collection of similar objects, a responsibility is something that a class knows or does, and a collaborator is another class that a class interacts with to fulfill its responsibilities.
>
> Ambler, S. W. (n.d.). Class Responsibility Collaborator (CRC) Models: An Agile Introduction. Retrieved July 30, 2017, from http://agilemodeling.com/artifacts/crcModel.htm

CRC models are simple to read, write, and update. CRC models focus on the **purpose** of classes instead of their **mechanics**. Because of their simplicity, CRC models are useful for determining why software might be difficult to extend or change.

### 3.2. Anatomy of a CRC model

CRC Models use a simple and scannable template that consist of three simple sections for:

1. **Name**: what the class (or object) is called in source code.
2. **Responsibilities**: the work that the class/object is supposed to perform, and the data it's supposed to maintain.
3. **Collaborators**: other objects this class directly invokes in order to do its work.

<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2"><code>Class/Object name</code></th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top" align="left">
      <td width="50%">
      <p>The <code>class/object</code>'s activities and purpose:
        <ol>
          <li>What the class/object does.
          <li>The information it maintains.
        </ol></p>
      </td>
      <td width="50%">
      <p>Objects that this <code>class</code> depends on to:
        <ol>
          <li>Assist <code>Class name</code> with its work.
          <li>Provide info/data that <code>Class name</code> needs.
        </ol></p>
      </td>
    </tr>
  </tbody>
</table>

> :memo: Despite the implementation of the `class`, `constructor`, `static`, `extends`, and `super` keywords in ES2015, JavaScript _still_ achieves encapsulation, inheritance, and polymorphism with `prototype` chains. Nevertheless, I use the word `class` to refer to JavaScript objects with `prototype`-based inheritance.

### 3.3. Refactoring with CRC models

> :speech_balloon: Refactoring is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.
>
> Its heart is a series of small behavior preserving transformations. Each transformation (called a “refactoring”) does little, but a sequence of transformations can produce a significant restructuring. Since each refactoring is small, it’s less likely to go wrong. The system is kept fully working after each small refactoring, reducing the chances that a system can get seriously broken during the restructuring.
>
> Learning More. (n.d.). Retrieved July 30, 2017, from https://refactoring.com/

CRC Models can help you pinpoint where problems might be, and reveal potential improvements to your design.

<!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2"><code>Delta</code></th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top" align="left">
      <td width="50%">
        <ol>
            <li>Disambiguation for the letter &quot;D&quot;</li>
            <li>Clarifies pronunciation when spelling with the letter &quot;D&quot;</li></ol>
      </td>
      <td width="50%">
        <ol>
            <li><code>Charlie</code>
              <a style="font-size:small">18:26</a>
            </li></ol>
      </td>
    </tr>
  </tbody>
</table>
<!--/crc-model-template:html,markdown -->

<!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2"><code>Echo</code></th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top" align="left">
      <td width="50%">
        <ol>
            <li>Disambiguation for the letter &quot;E&quot;</li>
            <li>Clarifies pronunciation when spelling with the letter &quot;E&quot;</li></ol>
      </td>
      <td width="50%">
        <ol>
            <li><code>Alpha</code>
              <a style="font-size:small">20:25</a>
            </li></ol>
      </td>
    </tr>
  </tbody>
</table>
<!--/crc-model-template:html,markdown -->

## 4. Supported Rules

As of now, there are no rules. I plan on iterative releases, however, in hopes of parsing not only the syntactic structure of code, but also its semantic intent. I'd love to generate [excellent explanations and recommendations like these](https://refactoring.guru/smells/smells), but that's a hefty task.

## 5. Contributing

[![PRs Welcome][makeapullrequest-image]][makeapullrequest-url] We welcome contributors and pull requests. Check out the guidelines for

- [Contributing to `eslint-plugin-crc`](https://github.com/gregswindle/eslint-plugin-crc/blob/master/.github/CONTRIBUTING.md) and our
- [Contributor Covenant Code of Conduct][code-of-conduct-url].

Contributions are stories with a beginning, a middle, and an end, all told through issues, comments, commit logs, and pull requests.

- [Peruse open issues][issues-url] or
- [Open a new pull request (PR)][pr-url]

## 6. Version

`eslint-plugin-crc`'s latest version is <!-- semver --> [`v0.2.0`][changelog-url] <!-- semverend --> . Please read the [CHANGELOG][changelog-url] for details.

## 7. License

[Apache-2.0][license-url] © [Greg Swindle][author-url]

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-crc.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-crc?ref=badge_large)

---

[![License][license-image]][license-url] [![Readme Score][readme-score-img]][readme-score-url] [![Greenkeeper][greenkeeper-img]][greenkeeper-url]

[api-docs-url]: https://github.com/gregswindle/eslint-plugin-crc/docs/API.md
[apigee-edge-js-url]: http://docs.apigee.com/api-services/reference/javascript-object-model
[appveyor-img]: https://ci.appveyor.com/api/projects/status/qcsxteena4etjlfe?svg=true
[appveyor-url]: https://ci.appveyor.com/project/gregswindle/eslint-plugin-crc
[author-url]: https://github.com/gregswindle
[changelog-url]: https://github.com/gregswindle/eslint-plugin-crc/blob/master/CHANGELOG.md
[codacy-coverage-image]: https://api.codacy.com/project/badge/Coverage/fa4ade3f68a04b9cad26165a59ceb88e
[codacy-coverage-url]: https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&utm_medium=referral&utm_content=gregswindle/eslint-plugin-crc&utm_campaign=Badge_Coverage
[codacy-img]: https://api.codacy.com/project/badge/Grade/fa4ade3f68a04b9cad26165a59ceb88e
[codacy-url]: https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gregswindle/eslint-plugin-crc&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: https://github.com/gregswindle/eslint-plugin-crc/blob/master/.github/CODE_OF_CONDUCT.md
[complexity-report-url]: https://github.com/escomplex/complexity-report
[coveralls-img]: https://coveralls.io/repos/github/gregswindle/eslint-plugin-crc/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/gregswindle/eslint-plugin-crc?branch=master
[daviddm-dev-image]: https://david-dm.org/gregswindle/eslint-plugin-crc/dev-status.svg
[daviddm-dev-url]: https://david-dm.org/gregswindle/eslint-plugin-crc?type=dev
[daviddm-image]: https://david-dm.org/gregswindle/eslint-plugin-crc.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/gregswindle/eslint-plugin-crc
[editorconfig-url]: http://editorconfig.org/
[eslint-github-url]: https://github.com/eslint/eslint
[fossa-image]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-crc.svg?type=shield
[fossa-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-crc?ref=badge_shield
[greenkeeper-img]: https://badges.greenkeeper.io/gregswindle/eslint-plugin-crc.svg
[greenkeeper-url]: https://greenkeeper.io/
[issues-url]: https://github.com/gregswindle/eslint-plugin-crc/issues
[jsdoc2md-url]: https://github.com/jsdoc2md/jsdoc-to-markdown
[license-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat
[license-url]: https://github.com/gregswindle/eslint-plugin-crc/blob/master/LICENSE
[lint-def-url]: https://en.wikipedia.org/wiki/Lint_(software)
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[makeapullrequest-url]: http://makeapullrequest.com
[npm-image]: https://badge.fury.io/js/eslint-plugin-crc.svg
[npm-url]: https://npmjs.org/package/eslint-plugin-crc
[nsp-img]: https://nodesecurity.io/orgs/gregswindle/projects/a3912719-529f-457f-9ff6-53fa70d8f475/badge
[nsp-url]: https://nodesecurity.io/orgs/gregswindle/projects/a3912719-529f-457f-9ff6-53fa70d8f475
[pr-url]: https://github.com/gregswindle/eslint-plugin-crc/pulls
[readme-score-img]: http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/gregswindle/eslint-plugin-crc
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/gregswindle/eslint-plugin-crc
[scoreme-url]: http://clayallsopp.github.io/readme-score/
[sonar-cognitive-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=cognitive_complexity
[sonar-cognitive-url]: https://sonarcloud.io/component_measures/metric/cognitive_complexity/list?id=gregswindle-eslint-plugin-crc
[sonar-complexity-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=function_complexity
[sonar-complexity-url]: https://sonarcloud.io/component_measures/domain/Complexity?id=gregswindle-eslint-plugin-crc
[sonar-coverage-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=coverage
[sonar-coverage-url]: https://sonarcloud.io/component_measures/domain/Coverage?id=gregswindle-eslint-plugin-crc
[sonar-gate-img]: http://sonarcloud.io/api/badges/gate?key=gregswindle-eslint-plugin-crc
[sonar-gate-url]: http://sonarcloud.io/dashboard/index/gregswindle-eslint-plugin-crc
[sonar-tech-debt-img]: https://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=sqale_debt_ratio
[sonar-tech-debt-url]: https://sonarcloud.io/component_measures/metric/sqale_index/list?id=gregswindle-eslint-plugin-crc
[swagger-cli-url]: https://github.com/BigstickCarpet/swagger-cli
[swagger-logo-20-img]: https://github.com/gregswindle/eslint-plugin-crc/blob/master/.assets/media/img/swagger-logo-20.png
[swagger-markdown-url]: https://github.com/syroegkin/swagger-markdown
[swagger-validity-img]: https://img.shields.io/swagger/valid/2.0/http/api.swindle.net/cordova/v6/contacts/openapi.json.svg
[swagger-validity-url]: http://online.swagger.io/validator/debug?url=http://api.swindle.net/cordova/v6/contacts/openapi.json
[travis-image]: https://travis-ci.org/gregswindle/eslint-plugin-crc.svg?branch=master
[travis-url]: https://travis-ci.org/gregswindle/eslint-plugin-crc
