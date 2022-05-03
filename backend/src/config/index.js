const accessEnv = require('../helpers/access-env');

const data = {
  NODE_ENV: accessEnv('NODE_ENV', null),
  PORT: accessEnv('PORT', null),
  DB_URL: accessEnv('DB_URL', null),
  JWT_SECRET: accessEnv('JWT_SECRET', null),
  ACCESS_TOKEN_EXPIRE_INTERVAL: accessEnv('ACCESS_TOKEN_EXPIRE_INTERVAL', null), // 60 mins = 1 hour -> 10080 mins = 1 week
  REFRESH_TOKEN_EXPIRE_INTERVAL: accessEnv('REFRESH_TOKEN_EXPIRE_INTERVAL', null), // 20160 mins = 2 week
  LOG_LEVEL: accessEnv('LOG_LEVEL', null),
  HASH_SALT_ROUNDS: accessEnv('HASH_SALT_ROUNDS', null),
  PASSPORT_OPTIONS: {
    session: false,
  },
  APP_AUTH_URL: accessEnv('APP_AUTH_URL', null),
  AWS_ACCESS_KEY_ID: accessEnv('AWS_ACCESS_KEY_ID', null),
  AWS_SECRET_ACCESS_KEY: accessEnv('AWS_SECRET_ACCESS_KEY', null),
  AWS_REGION: accessEnv('AWS_REGION', null),
  AWS_BUCKET_NAME: accessEnv('AWS_BUCKET_NAME', null),
  EMAIL_ADDRESS: accessEnv('EMAIL_ADDRESS', null),
  EMAIL_PASSWORD: accessEnv('EMAIL_PASSWORD', null),
};

module.exports = data;
