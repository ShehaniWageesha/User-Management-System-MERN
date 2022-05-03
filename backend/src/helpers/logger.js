const { createLogger, format, transports } = require('winston');
const chalk = require('chalk');
const { LOG_LEVEL } = require('../config');

const { combine, colorize, label, printf, json, timestamp } = format;

const logFormat = combine(
  timestamp(),
  json(),
  colorize(),
  label({ label: '[DBF-API]' }),
  printf(
    ({ timestamp: Timestamp, label: Label, level, message, ...info }) =>
      `${Timestamp} ${chalk.cyan(Label)} ${level} : ${message} : ${JSON.stringify({ ...info })}`
  )
);

const logger = createLogger({
  level: LOG_LEVEL || 'info',
  transports: [new transports.Console({})],
  format: logFormat,
  exitOnError: false,
});
// const logger = require('firebase-functions/lib/logger');

module.exports = logger;
