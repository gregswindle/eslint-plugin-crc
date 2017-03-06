# `eslint-plugin-crc`

> Analyze and refactor JavaScript codebases with auto-generated Class-Responsibility-Collaborator models.

## What is a Class-Responsibility-Collaborator (CRC) Model?

A CRC Model expresses how classes behave and interact using a simple and scannable template.

<!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2"><code>Class name</code></th>
    </tr>
    <tr valign="top" align="left">
      <th><code>Responsibilities</code></th>
      <th><code>Collaborators</code></th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top" align="left">
      <td width="50%">
      <p>`Class name`'s activities and purpose:
        <ol>
          <li>What the class/object does.
          <li>The information it maintains.
        </ol>
      </td>
      <td width="50%">
      <p>Other classes/objects that `Class name`:
        <ol>
          <li>Assist `Class name` with its work.
          <li>Provide info/data that `Class name` needs.
        </ol>
      </td>
    </tr>
  </tbody>
</table>
<!--/crc-model-template:html,markdown -->

> ### Keep CRC Models simple

> Try to focus on your class's **purpose** instead of its **mechanics**, and describe it in non-technical terms, if possible. CRC models should provide another perspective on your software, since "experience pollution" often prevents us from seeing simpler design possibilities.

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

As of now, there are no rules. The first MVP will likely use processors alone to generate reports. I plan on iterative releases, however, in hopes of parsing not only the syntactic structure of code, but also its semantic intent. I'd love to generate [excellent explanations are recommendations like these](https://refactoring.guru/smells/smells), but that's a hefty task.

## How to Contribute
Read to contribute [CONTRIBUTING.md](CONTRIBUTING.md)

[Referred via](https://github.com/joeybaker/generator-iojs)

## How to Make Pull Request
Read to contribute [PULL_REQUEST_TEMPLATE.md](PULL_REQUEST_TEMPLATE.md)

[Referred via](https://github.com/joeybaker/generator-iojs)

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
