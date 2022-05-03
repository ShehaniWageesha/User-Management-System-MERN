const httpStatus = require('http-status');
const ExtendableError = require('./extendable-error');

/**
 * Class representing an Client error.
 * @extends ExtendableError
 */
class ClientError extends ExtendableError {
  /**
   * Creates an Client error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor({ message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = true }) {
    super(message, status, isPublic);
  }
}

module.exports = ClientError;
