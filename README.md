# `eslint-plugin-crc`

[![CircleCI](https://circleci.com/gh/gregswindle/eslint-plugin-crc.svg?style=svg)](https://circleci.com/gh/gregswindle/eslint-plugin-crc) [![Build Status](https://travis-ci.org/gregswindle/eslint-plugin-crc.svg?branch=master)](https://travis-ci.org/gregswindle/eslint-plugin-crc) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/685cb41fec6746038e6deaa1bfddb71a)](https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gregswindle/eslint-plugin-crc&amp;utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/685cb41fec6746038e6deaa1bfddb71a)](https://www.codacy.com/app/greg_7/eslint-plugin-crc?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gregswindle/eslint-plugin-crc&amp;utm_campaign=Badge_Coverage) [![David-DM](https://david-dm.org/gregswindle/eslint-plugin-crc.svg)](https://david-dm.org/gregswindle/eslint-plugin-crc)

> Analyze and refactor JavaScript codebases with auto-generated Class-Responsibility-Collaborator models.

## Assess and refactor your source code with Class-Responsibility-Collaborator (CRC) models

### What are CRC models?

A CRC Model expresses how classes behave and interact using a simple and scannable template.

> **Note** Since this product generates CRC models for the JavaScript language, I'm using the terms `class` and `object` synonymously to indicate objects with prototypal inheritance.

### CRC model template

CRC models consist of three simple things:

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



### CRC models are great for refactoring

CRC models are simple to read, write, and update. Because of their simplicity, CRC models are useful for determining why software might be difficult to extend or change.

Maintaining and extending software over time can become challenging. Tasks that should be simple become harder to complete. For example, adding a new content type to your Blog means you have to change methods for finding, displaying, and saving content.

CRC Models can help you pinpoint where problems might be, and reveal potential improvements to your design.

### CRC Models make design analysis easier

Unlike UML diagrams (which I love, by the way), CRC models are meant to be scannable, readable, and comprehensible.

CRC models focus on your class's **purpose** instead of its **mechanics**, and describe it in non-technical terms, if possible. CRC models should provide another perspective on your software, since "experience pollution" often prevents us from seeing simpler design possibilities.

#### An example of a bloated controller

<table width="100%">
  <thead>
    <tr>
      <th colspan="2">`BlogController`</th>
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
        </ol>
      </td>
      <td width="50%">
        <ol>
          <li>`$http` service
        </ol>
      </td>
    </tr>
  </tbody>
</table>

This is an obvious case of code bloat, and a closer inspection of the source code reveals that `BlogController` has many source-lines of code, methods that are larger than 10 lines, and data represented as primitives. All of these symptoms point to violations of the Single Responsibility Principle.

I admit this example is simplistic, and it doesn't give recommendations for refactoring, yet. I'll be adding more examples as the product progresses. Please read about the [goals of `eslint-plugin-crc`](https://github.com/gregswindle/eslint-plugin-crc/wiki#goals-of-eslint-plugin-crc)  for details.

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

As of now, there are no rules. The first MVP will likely use processors alone to generate reports. I plan on iterative releases, however, in hopes of parsing not only the syntactic structure of code, but also its semantic intent. I'd love to generate [excellent explanations and recommendations like these](https://refactoring.guru/smells/smells), but that's a hefty task.

## How to Contribute
Read to contribute [CONTRIBUTING.md](CONTRIBUTING.md).

[Referred via `generator-iojs`](https://github.com/joeybaker/generator-iojs).

## How to Make Pull Request
Read to contribute [PULL_REQUEST_TEMPLATE.md](PULL_REQUEST_TEMPLATE.md).

[Referred via `generator-iojs`](https://github.com/joeybaker/generator-iojs).

## License

Copyright (c) Greg Swindle.
This source code is licensed under the [MIT license](LICENSE).

[npm-image]: https://badge.fury.io/js/eslint-plugin-crc.svg
[npm-url]: https://npmjs.org/package/eslint-plugin-crc
[travis-image]: https://travis-ci.org/gregswindle/eslint-plugin-crc.svg?branch=master
[travis-url]: https://travis-ci.org/gregswindle/eslint-plugin-crc
[daviddm-image]: https://david-dm.org/gregswindle/eslint-plugin-crc.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/gregswindle/eslint-plugin-crc
[coveralls-image]: https://coveralls.io/repos/gregswindle/eslint-plugin-crc/badge.svg
[coveralls-url]: https://coveralls.io/r/gregswindle/eslint-plugin-crc
