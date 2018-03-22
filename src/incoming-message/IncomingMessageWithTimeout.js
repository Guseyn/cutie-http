'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is incomingMessage
class IncomingMessageWithTimeout extends AsyncObject {

  constructor(message, msecs, callback) {
    super(message, msecs, callback);
  }

  definedSyncCall() {
    return (message, msecs, callback) => {
      return message.setTimeout(msecs, callback);
    };
  }

}

module.exports = IncomingMessageWithTimeout;
