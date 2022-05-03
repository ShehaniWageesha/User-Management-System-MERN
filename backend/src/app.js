require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const mongoose = require('mongoose');

const routes = require('./routes');

const logger = require('./helpers/logger');

const { mongo } = require('./helpers/db');

const app = express();

app.use(morgan('dev'));

app.set('trust proxy', true);

// parse body params and attache them to req.body
app.use(
  express.json({
    limit: '100mb',
  })
);

app.use(express.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 }));

// TODO:
// Disable gzip compression if not needed or use something like nginx to compress
// gzip compression
app.use(compression());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());


// TODO:
// enable rate limit

app.use(async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      logger.info('Mongoose not connected - connecting');
      await mongo.initialize();
    }
    next();
  } catch (error) {
    next(error);
  }
});

app.use('/api', routes);


module.exports = app;
