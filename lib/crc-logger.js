const bunyan = require("bunyan");
const chalk = require("chalk");

const crcLoggerStream = {

  "debug": chalk.blue,

  "error": chalk.redBright,

  "fatal": chalk.bold.red,

  "info": chalk.green,

  "trace": chalk.whiteBright,

  "warn": chalk.yellowBright,

  write (rec) {
    const level = bunyan.nameFromLevel[rec.level];
    const color = crcLoggerStream[level];
    if (rec.level >= bunyan.ERROR) {
      writeErr(rec, level, color);
    } else {
      writeInfo(rec, level, color);
    }
  }
};

const writeErr = (rec, level, color) => {
  // eslint-disable-next-line no-console
  console.error(
    "[%s] %s %s %s",
    chalk.hex("#eaeaea")(rec.name),
    chalk.gray(rec.time.toISOString()),
    color(level.toUpperCase()),
    `${rec.err.name}: ${rec.err.message}. ${rec.msg}`
  );
};

const writeInfo = (rec, level, color) => {
  // eslint-disable-next-line no-console
  console.log(
    "[%s] %s %s %s",
    chalk.hex("#eaeaea")(rec.name),
    chalk.gray(rec.time.toISOString()),
    color(level.toUpperCase()),
    rec.msg
  );
};

const crcLogger = bunyan.createLogger({
  "level": bunyan.INFO,
  "name": "eslint-plugin-crc",
  "streams": [
    {
      "level": bunyan.INFO,
      "stream": crcLoggerStream,
      "type": "raw"
    }
  ]
});

console.log(crcLogger.levels);

module.exports = crcLogger;
