'use strict';

const {version} = require('../../package');
const path = require('path');
const prop = require('properties-parser');

const bumpSonarProjectVersion = () => {
    let sonarPropertiesEditor = prop.createEditor(path.resolve(__dirname, '../../sonar-project.properties'));
    sonarPropertiesEditor.set('sonar.projectVersion', version);
    sonarPropertiesEditor.save();
};

bumpSonarProjectVersion();
