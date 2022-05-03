const uuid = require('uuid').v4;
const moment = require('moment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {
  JWT_SECRET,
  ACCESS_TOKEN_EXPIRE_INTERVAL,
  REFRESH_TOKEN_EXPIRE_INTERVAL,
  HASH_SALT_ROUNDS,
} = require('../config');
const logger = require('./logger');

const generateUUID = () => uuid();

function createAccessToken(data) {
  const expire = moment().add(ACCESS_TOKEN_EXPIRE_INTERVAL, 'minutes');
  const playload = {
    exp: expire.unix(),
    iat: moment().unix(),
    sub: {
      ...data,
    },
  };
  return {
    token_type: 'Bearer',
    access_token: jwt.sign(playload, JWT_SECRET),
    access_token_exp: expire,
    access_token_expires_in: ACCESS_TOKEN_EXPIRE_INTERVAL * 60,
  };
}

function createRefreshToken(data) {
  const expire = moment().add(REFRESH_TOKEN_EXPIRE_INTERVAL, 'minutes');
  const playload = {
    exp: expire.unix(),
    iat: moment().unix(),
    sub: {
      ...data,
    },
  };
  return {
    refresh_token: jwt.sign(playload, JWT_SECRET),
    refresh_token_exp: expire,
    refresh_token_expires_in: REFRESH_TOKEN_EXPIRE_INTERVAL * 60,
  };
}

function comparePassword(password, savedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, savedPassword, (err, isMatch) => {
      if (err) {
        logger.error('Error inside compare password - user model', err);
        reject(err);
      }
      resolve(isMatch);
    });
  });
}

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, parseInt(HASH_SALT_ROUNDS, 10), (err, hashedPassword) => {
      if (err) {
        logger.error('Error occured - hashPassword - User model', err);
        reject(err);
      }
      resolve(hashedPassword);
    });
  });
}

function waitTime(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

module.exports = {
  generateUUID,
  createAccessToken,
  createRefreshToken,
  comparePassword,
  hashPassword,
  waitTime,
};
