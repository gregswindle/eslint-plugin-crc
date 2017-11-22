// eslint-disable-next-line node/no-unsupported-features
const { version } = require("../../package");
const path = require("path");
// eslint-disable-next-line node/no-unpublished-require
const prop = require("properties-parser");

const bumpSonarProjectVersion = () => {
  const sonarPropertiesEditor = prop.createEditor(path.resolve(__dirname, "../../sonar-project.properties"));
  sonarPropertiesEditor.set("sonar.projectVersion", version);
  sonarPropertiesEditor.save();
};

bumpSonarProjectVersion();
