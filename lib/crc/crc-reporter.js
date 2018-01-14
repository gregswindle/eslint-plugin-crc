const CrcModel = require("./crc-model");
const CrcContext = require("./crc-context");
const {astNodeFactoryMap} = require("./descriptors");
const {uniqBy} = require("lodash");

const getContext = (result, descriptors) => {
  const contexts = [];
  descriptors.forEach((descriptorFactory) => {
    contexts.push(CrcContext.create(
      result,
      descriptorFactory
    ));
  });
  return uniqBy(contexts, "filePath");
};

const getAllContexts = (results, descriptors) => {
  let contexts = [];
  results.forEach((result) => {
    contexts = contexts.concat(getContext(result, descriptors));
  });
  return contexts;
};

class CrcReporter {
  constructor () {
    this.crcModels = [];
    this.descriptors = astNodeFactoryMap;
  }

  report (results) {
    const crcClasses = [];
    getAllContexts(results, this.descriptors).forEach((context) => {
      const descriptor = this.descriptors.get(context.descriptor);
      const crcClass = descriptor.factory(context);
      crcClasses.push(crcClass);
    });

    return crcClasses.map((crcClass) => new CrcModel({
      "class": crcClass,
      "collaborators": [],
      "responsibilities": []
    }));
  }
}

module.exports = CrcReporter;
