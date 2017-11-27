
class CrcResponsibilitiesBuilder {
  // eslint-disable-next-line node/no-unsupported-features
  constructor (params = {}) {
    this.astNode = params.node;
    this.ruleContext = params.context;
    this.responsibilities = params.responsibilities;
  }

  toString () {
    return this.valueOf().join("\n");
  }

  valueOf () {
    // TODO: generate the responsibilities string from JSDoc or method names.
    return this.responsibilities;
  }
}

module.exports = CrcResponsibilitiesBuilder;
