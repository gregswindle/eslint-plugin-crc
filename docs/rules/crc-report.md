# class-responsibilities-collaborators reports (crc-report)

Analyze, model, and refactor JavaScript codebases with auto-generated Class-Responsibility-Collaborator models.

## Rule Details

crc-report identifies JavaScript:

 * `Objects` that *behave* like classes through constructor-based inheritance, and
 * `classes` themselves.



### Examples of **incorrect** code for this rule

This rule *must* be enabled in order for `eslint-plugin-crc` to generate reports.

### Examples of **correct** code for this rule

```js

// fill me in

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It
> ![Information][icon-info-image] `eslint-plugin-crc` currently only handles JavaScript `Objects` and `classes`.

If the codebase uses the [functional programming paradigm](https://en.wikipedia.org/wiki/Functional_programming), this rule&mdash;as well as `eslint-plugin-crc` in general&mdash;is unnecessary.

## Further Reading

The (draft) whitepaper [Refactoring JavaScript: parsing source code syntax and semantics to generate CRC Models][refactoring-javascript-url] explains the motivations behind this rule.


[icon-info-image]: /docs/img/icons8/icon-info-30.png
[refactoring-javascript-url]: https://gregswindle.gitbooks.io/refactoring-javascript/content/
