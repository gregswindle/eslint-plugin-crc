# template-spike

> Spike for "Filling issues and pull requests with custom templates"

## Overview

According to the GitHub Help article "[Creating an issue template for your repository][adding-multiple-templates-url]:"

> You can create an ISSUE_TEMPLATE/ subdirectory in any of the supported folders to contain multiple
> issue templates. Use the template query parameter to specify the template that will automatically
> fill the issue body. For more information, see "[About automation for issues and pull requests with query parameters][automation-for-multiple-issues-url]."
>
> Creating an issue template for your repository - User Documentation . (2018). Help.github.com. Retrieved 23 February 2018, from <https://help.github.com/articles/creating-an-issue-template-for-your-repository/#adding-multiple-issue-templates>

## Pull request templates `.github/PULL_REQUEST_TEMPLATE/` instructions

### User story

As an engineer,<br>
I want to select the most appropriate ADR for my proposal<br>
In order to make the best case for my proposal.

### Acceptance criterion

- [ ] People can prepopulate a new pull request body with the ADR template of their choice by selecting a hyperlink.

### Examples

1. Load a template with an absolute-path URL:

    _Link:_

    > [**Propose an architecture decision (MADR)**][adr-pr-madr-url].

    _Template path:_

    > `.github/PULL_REQUEST_TEMPLATE/adr_template_madr.md`

    _URL:_

    > <https://github.com/gregswindle/template-spike/compare/adr-0001?expand=1&title=docs(techniques):%20add%20MADR%20template&template=adr_template_madr.md>

    _Query parameters:_

    > | Parameter Name | Value                                      |
    > |:---------------|:-------------------------------------------|
    > | `expand`       | `1`                                        |
    > | `title`        | `docs(techniques):%20add%20MADR%20template`|
    > | `template`     | `adr_template_madr.md`                     |

### Issue templates `.github/ISSUE_TEMPLATE/`

1. [`.github/ISSUE_TEMPLATE/feat-request-template.md`][.github/ISSUE_TEMPLATE/feat-request-template.md]
1. [`.github/ISSUE_TEMPLATE/defect-report-template.md`][.github/ISSUE_TEMPLATE/defect-report-template.md]
1. [`.github/ISSUE_TEMPLATE/feat-request-template.md`][.github/ISSUE_TEMPLATE/feat_request_template.md]
1. [`.github/ISSUE_TEMPLATE/defect-report-template.md`][.github/ISSUE_TEMPLATE/defect_report_template.md]
1. [`.github/ISSUE_TEMPLATE/issue_template.md`][.github/ISSUE_TEMPLATE/issue_template.md]
1. [`.github/ISSUE_TEMPLATE/issue_template.md`][.github/ISSUE_TEMPLATE/new_issue_template.md]

<!-- ⛔️ LINK REFERENCES: please alphabetize these ⛔️ -->

[adding-multiple-templates-url]: https://help.github.com/articles/creating-an-issue-template-for-your-repository/#adding-multiple-issue-templates
[automation-for-multiple-issues-url]: https://help.github.com/articles/about-automation-for-issues-and-pull-requests-with-query-parameters
[adr-pr-madr-url]: https://github.com/gregswindle/template-spike/compare/adr-0001?expand=1&title=docs(techniques):%20add%20MADR%20template&template=adr_template_madr.md
