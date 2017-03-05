# `eslint-plugin-crc`

> Analyze and refactor JavaScript codebases with auto-generated Class-Responsibility-Collaborator models.

## What is a Class-Responsibility-Collaborator (CRC) Model?

A CRC Model expresses how classes (or objects) behave and interact using a simple and scannable template:

<table width="100%">
  <thead>
    <tr>
      <th colspan="2">`Class name`</th>
    </tr>
    <tr>
      <th>`Responsibilities`</th>
      <th>`Collaborators`</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top">
      <td width="65%">
        <ul>
          <li>What the class/object does
          <li>The information it contains
        </ul>
      </td>
      <td width="35%">
        <ul>
          <li>Other classes/objects invoked to do its jobs
          <li>Pertinent information needed from others
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> ### Examples
> You can [read about examples in the wiki]().

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
