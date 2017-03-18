# `eslint-plugin-crc`

> Analyze and refactor JavaScript codebases with auto-generated Class-Responsibility-Collaborator models.

<details><summary>**Status of API docs, security, quality, coverage, builds, and dependencies**</summary>

<table>
<thead>
<tfoot>
<tbody>
<tr>
    <th>Documentation</th>
    <th>Security</th>
</tr>
<tr>
    <td style="vertical-align: top">[![Inline docs](http://inch-ci.org/github/gregswindle/eslint-plugin-crc.svg?branch=develop&style=shields)](http://inch-ci.org/github/gregswindle/eslint-plugin-crc)</td>
    <td style="vertical-align: top">[![NSP Status](https://nodesecurity.io/orgs/gregswindle/projects/da7e6d96-620d-4acb-8559-85c06c66921a/badge)](https://nodesecurity.io/orgs/gregswindle/projects/da7e6d96-620d-4acb-8559-85c06c66921a)</td>
</tr>
<tr>
    <th>Quality</th>
    <th>Coverage</th>
</tr>
<tr>
    <td style="vertical-align: top">[![Codacy Badge](https://api.codacy.com/project/badge/Grade/685cb41fec6746038e6deaa1bfddb71a)](https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&utm_medium=referral&utm_content=gregswindle/eslint-plugin-crc&utm_campaign=Badge_Grade)
        <br> [![Code Climate](https://codeclimate.com/github/gregswindle/eslint-plugin-crc/badges/gpa.svg)](https://codeclimate.com/github/gregswindle/eslint-plugin-crc)
        <br> [![Quality Gate](https://sonarqube.com/api/badges/gate?key=gregswindle-eslint-plugin-crc%3Adevelop)](https://sonarqube.com/dashboard/index/gregswindle-eslint-plugin-crc%3Adevelop)
        <br> [![bitHound Overall Score](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/badges/score.svg)](https://www.bithound.io/github/gregswindle/eslint-plugin-crc)</td>
    <td style="vertical-align: top">[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/685cb41fec6746038e6deaa1bfddb71a)](https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&utm_medium=referral&utm_content=gregswindle/eslint-plugin-crc&utm_campaign=Badge_Coverage)
    <br> [![Coverage Status](https://coveralls.io/repos/github/gregswindle/eslint-plugin-crc/badge.svg?branch=develop)](https://coveralls.io/github/gregswindle/eslint-plugin-crc?branch=develop)
    <br> [![codecov](https://codecov.io/gh/gregswindle/eslint-plugin-crc/branch/develop/graph/badge.svg)](https://codecov.io/gh/gregswindle/eslint-plugin-crc)</td>
</tr>
<tr>
    <th>Builds</th>
    <th>Dependencies</th>
</tr>
<tr>
    <td style="vertical-align: top">[![CircleCI](https://circleci.com/gh/gregswindle/eslint-plugin-crc.svg?style=svg)](https://circleci.com/gh/gregswindle/eslint-plugin-crc)
    <br> [![Travis CI Build Status](https://travis-ci.org/gregswindle/eslint-plugin-crc.svg?branch=master)](https://travis-ci.org/gregswindle/eslint-plugin-crc)</td>
    <td style="vertical-align: top">[![Greenkeeper badge](https://badges.greenkeeper.io/gregswindle/eslint-plugin-crc.svg)](https://greenkeeper.io/)
    <br> [![bitHound Dependencies](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/badges/dependencies.svg)](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/develop/dependencies/npm)
    <br> [![bitHound Dev Dependencies](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/badges/devDependencies.svg)](https://www.bithound.io/github/gregswindle/eslint-plugin-crc/develop/dependencies/npm)
    <br> [![David-DM](https://david-dm.org/gregswindle/eslint-plugin-crc.svg)](https://david-dm.org/gregswindle/eslint-plugin-crc)
    <br> [![devDependencies Status](https://david-dm.org/gregswindle/eslint-plugin-crc/dev-status.svg)](https://david-dm.org/gregswindle/eslint-plugin-crc?type=dev)</td>
</tr>
</tbody>
</table>

*** Please pardon the badgery! *** My team and I are evaluating third-party source code evaluation tools, so I'm listing all of them in one place.

</ol></details>

## Refactoring with Class-Responsibility-Collaborator (CRC) models

### What are CRC models?

A CRC Model expresses how classes behave and interact using a simple and scannable template.

> **Note** Since this product generates CRC models for the JavaScript language, I'm using the terms `class` and `object` synonymously to indicate objects with prototypal inheritance.

### CRC model template

CRC models consist of three simple sections for:

1. **Name**: what the class (or object) is called in source code.
2. **Responsibilities**: the work that the class/object is supposed to perform, and the data it's supposed to maintain.
3. **Collaborators**: other objects this class directly invokes in order to do its work.

CRC models were originally written index cards. `eslint-plugin-crc` generates tables.

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

### CRC Models make design analysis easier

CRC models are meant to be scannable, readable, and comprehensible. They're useful for "Agile" teams and workflows, since they don't require a lot of time to create or understand.

CRC models focus on the **purpose** of classes instead of their **mechanics**, and (ideally) describe them in non-technical terms. CRC models can provide another perspective on software product improvement, since "experience pollution" and technical tunnel-vision often obscure simpler design possibilities.

#### CRCs and UML

I'm a big fan of the UML, and I use it often for formal design proposals and documentation. But when I don't need a first-order logical transformation of a product, CRC models work well.

### CRC models are great for refactoring

CRC models are simple to read, write, and update. Because of their simplicity, CRC models are useful for determining why software might be difficult to extend or change.

CRC Models can help you pinpoint where problems might be, and reveal potential improvements to your design.

#### An example of a bloated controller

<table width="100%">
  <thead>
    <tr>
      <th colspan="2"><code>BlogController</code></th>
    </tr>
    <tr>
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top">
      <td width="50%">
        <ol>
          <li>Fetches content with web services
          <li>Determines the type of content (e.g., Article, Comment, Version History, each of which has different interfaces)
          <li>Adapts each content-type so it can be displayed in a single template
          <li>Sanitizes users' comments
          <li>Saves users' comments
          <li>Displays comment status messages
          <li>Validates form field input
          <li>Transforms hyperlinks based on personalization rules
        </ol>
      </td>
      <td width="50%">
        <ol>
          <li>XMLHTTPRequest
        </ol>
      </td>
    </tr>
  </tbody>
</table>

This is an obvious case of code bloat, and a closer inspection of the source code would likely reveal that `BlogController` has many source-lines of code; methods that are larger than 10 lines; and data primitives scattered all over the place. Regardless, the CRC model reveals that we're in the presence of a tyrannical [God object](https://en.wikipedia.org/wiki/God_object) that could benefit from [class extraction](https://refactoring.com/catalog/?filter=tags-class-extraction,books-radio-appear).

## `eslint-plugin-crc` roadmap

### [MVP 1](https://github.com/gregswindle/eslint-plugin-crc/milestone/1): report generation

Create actionable reports with CRC model that are easy generate and consume.

### MVP 2: `eslint` integration

Add or remove additional information generated by `eslint` rules and plugins.

### MVP 3.._n_: semantic analysis

Research and develop techniques that express possible semantic intent based on the semantic patterns mined from identifiers, method names, associations, and their true actions.

Please read about the [goals of `eslint-plugin-crc`](https://github.com/gregswindle/eslint-plugin-crc/wiki#goals-of-eslint-plugin-crc)  for more details.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-crc`:

```
$ npm install eslint-plugin-crc --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-crc` globally.

## Usage

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

## Supported Rules

As of now, there are no rules. I plan on iterative releases, however, in hopes of parsing not only the syntactic structure of code, but also its semantic intent. I'd love to generate [excellent explanations and recommendations like these](https://refactoring.guru/smells/smells), but that's a hefty task.

## How to Contribute
Read to contribute [CONTRIBUTING.md](CONTRIBUTING.md).

[Referred via `generator-iojs`](https://github.com/joeybaker/generator-iojs).

## How to Make Pull Request
Read to contribute [PULL_REQUEST_TEMPLATE.md](PULL_REQUEST_TEMPLATE.md).

[Referred via `generator-iojs`](https://github.com/joeybaker/generator-iojs).

## License

Copyright (c) Greg Swindle.
This source code is licensed under the [MIT license](LICENSE).
