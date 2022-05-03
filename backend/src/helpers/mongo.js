const mongoose = require('mongoose');

const logger = require('./logger');
const { DB_URL } = require('../config');

const initialize = async () => {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      autoIndex: true,
      minPoolSize: 10,
      maxPoolSize: 100,
    });

    const dbConnection = mongoose.connection;
    dbConnection.on('connected', () => {
      logger.info('MongoDB - connection success');
    });
    dbConnection.on('disconnected', (error) => {
      logger.error('MongoDB - connection disconnected', error);
    });
    dbConnection.on('error', (error) => {
      logger.error('MongoDB - connection error', error);
      process.exit(1);
    });
    dbConnection.on('reconnected', () => {
      logger.info('MongoDB - connection reconnected success');
    });
    dbConnection.on('reconnectFailed', (error) => {
      logger.error('MongoDB - connection reconnect failed', error);
    });
    dbConnection.on('close', (error) => {
      logger.error('MongoDB - connection close successfully', error);
    });

    return dbConnection;
  } catch (error) {
    logger.error('Mongo connection init error: ', error);
    throw new Error(error);
  }
};

module.exports = {
  initialize,
};
