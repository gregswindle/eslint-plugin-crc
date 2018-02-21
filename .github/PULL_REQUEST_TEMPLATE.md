## Description of change

_Please describe your changes here._

### Associated issue(s)

_Reference issues pertinent to this PR here If there are no issues referenced,
replace this line and the following task completion line._

- [ ] The acceptance criteria for all associated issues have been completed, tested, and validated.

### PR check-list

> **:white_check_mark: Please review and check the appropriate items.**

#### 1. **Code standards compliance**
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

- [ ] `ESLint` passes.

#### 2. **Code quality**. [![Quality Gate][sonar-gate-img]][sonar-gate-url]

- [ ] The quality gateways pass with an "A" grade.

| Measure               | Scores                                                             |
|:----------------------|:-------------------------------------------------------------------|
| **`Complexity`**      | [![Cyclomatic Complexity][sonar-cyclo-complexity-img]][sonar-cyclo-complexity-url]<br>[![Complexity][sonar-complexity-img]][sonar-complexity-url]<br>[![Cognitive complexity][sonar-cognitive-img]][sonar-cognitive-url] |
| **`Duplications`**    | [![Duplications][sonar-duplications-img]][sonar-duplications-url]  |
| **`Issues`**          | [![Issues][sonar-issues-img]][sonar-issues-url]                    |
| **`Maintainability`**<br>[![Maintainability][sonar-maintainability-img]][sonar-maintainability-url] | [![Code smells][sonar-code-smells-img]][sonar-code-smells-url]<br>[![Maintainability][sonar-maintainability-img]][sonar-maintainability-url]<hr>[![Technical debt][sonar-tech-debt-img]][sonar-tech-debt-url]<br>[![Technical debt][sonar-tech-debt-ratio-img]][sonar-tech-debt-ratio-url] |
| **`Reliability`**<br>[![Reliability][sonar-reliability-img]][sonar-reliability-url]     | [![Reliability][sonar-reliability-img]][sonar-reliability-url]<hr>[![Defects][sonar-bugs-img]][sonar-bugs-url]     |
| **`Size`**   | [![Avg. Source Lines Of Code][sonar-nloc-img]][sonar-nloc-url]<br>[![New Source Lines Of Code][sonar-new-loc-img]][sonar-new-loc-url]  |
| **`Security`**<br>[![Security][sonar-security-rating-img]][sonar-security-rating-url]        | [![Security][sonar-security-img]][sonar-security-url]              |

#### 3. **Test coverage** [![Coverage Status][coveralls-img]][coveralls-url]

- [ ] The source code is 100% covered with passing specs.

> **:information_source: These tasks are not required to open a PR, and may be addresses while the PR is open.**

[cla-individual-url]: https://www.clahub.com/agreements/gregswindle/eslint-plugin-crc
[codecov-image]: https://codecov.io/gh/gregswindle/eslint-plugin-crc/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/gregswindle/eslint-plugin-crc
[coveralls-img]: https://coveralls.io/repos/github/gregswindle/eslint-plugin-crc/badge.svg
[coveralls-url]: https://coveralls.io/github/gregswindle/eslint-plugin-crc
[sonar-bugs-img]: https://sonarcloud.io/api/project_badges/measure?project=gregswindle-eslint-plugin-crc&metric=bugs
[sonar-bugs-url]: https://sonarcloud.io/component_measures?id=gregswindle-eslint-plugin-crc&metric=bugs
[sonar-code-smells-img]: https://sonarcloud.io/api/project_badges/measure?project=gregswindle-eslint-plugin-crc&metric=code_smells
[sonar-code-smells-url]: https://sonarcloud.io/component_measures/metric/code_smells/list?id=gregswindle-eslint-plugin-crc
[sonar-cognitive-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=cognitive_complexity
[sonar-cognitive-url]: https://sonarcloud.io/component_measures/metric/cognitive_complexity/list?id=gregswindle-eslint-plugin-crc
[sonar-complexity-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=function_complexity
[sonar-complexity-url]: https://sonarcloud.io/component_measures/domain/Complexity?id=gregswindle-eslint-plugin-crc
[sonar-coverage-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=coverage
[sonar-coverage-url]: https://sonarcloud.io/component_measures/domain/Coverage?id=gregswindle-eslint-plugin-crc
[sonar-cyclo-complexity-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=complexity
[sonar-cyclo-complexity-url]: https://sonarcloud.io/component_measures/domain/Complexity?id=gregswindle-eslint-plugin-crc
[sonar-duplications-img]: https://sonarcloud.io/api/project_badges/measure?project=gregswindle-eslint-plugin-crc&metric=duplicated_lines_density
[sonar-duplications-url]: https://sonarcloud.io/component_measures/domain/Duplications?id=gregswindle-eslint-plugin-crc
[sonar-gate-img]: http://sonarcloud.io/api/badges/gate?key=gregswindle-eslint-plugin-crc
[sonar-gate-url]: http://sonarcloud.io/dashboard/index/gregswindle-eslint-plugin-crc
[sonar-issues-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=blocker_violations
[sonar-issues-url]: https://sonarcloud.io/component_measures/domain/Issues?id=gregswindle-eslint-plugin-crc
[sonar-maintainability-img]: https://sonarcloud.io/api/project_badges/measure?project=gregswindle-eslint-plugin-crc&metric=sqale_rating
[sonar-maintainability-url]: https://sonarcloud.io/component_measures/domain/Maintainability?id=gregswindle-eslint-plugin-crc
[sonar-new-loc-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=new_lines
[sonar-new-loc-url]: https://sonarcloud.io/component_measures?id=gregswindle-eslint-plugin-crc&metric=new_lines
[sonar-nloc-img]: https://sonarcloud.io/api/project_badges/measure?project=gregswindle-eslint-plugin-crc&metric=ncloc
[sonar-nloc-url]: https://sonarcloud.io/component_measures?id=gregswindle-eslint-plugin-crc&metric=ncloc
[sonar-reliability-img]: https://sonarcloud.io/api/project_badges/measure?project=gregswindle-eslint-plugin-crc&metric=reliability_rating
[sonar-reliability-url]: https://sonarcloud.io/component_measures/domain/Reliability?id=gregswindle-eslint-plugin-crc
[sonar-security-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=vulnerabilities
[sonar-security-url]: https://sonarcloud.io/component_measures/metric/vulnerabilities/list?id=gregswindle-eslint-plugin-crc
[sonar-security-rating-img]: https://sonarcloud.io/api/project_badges/measure?project=gregswindle-eslint-plugin-crc&metric=security_rating
[sonar-security-rating-url]: https://sonarcloud.io/component_measures?id=gregswindle-eslint-plugin-crc&metric=Security
[sonar-tech-debt-ratio-img]: https://sonarcloud.io/api/badges/measure?key=gregswindle-eslint-plugin-crc&metric=sqale_debt_ratio
[sonar-tech-debt-ratio-url]: https://sonarcloud.io/component_measures/metric/sqale_index/list?id=gregswindle-eslint-plugin-crc
[sonar-tech-debt-img]: https://sonarcloud.io/api/project_badges/measure?project=gregswindle-eslint-plugin-crc&metric=sqale_index
[sonar-tech-debt-url]: https://sonarcloud.io/component_measures?id=gregswindle-eslint-plugin-crc&metric=sqale_index
