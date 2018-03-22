'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class HeadersOfIncomingMessage extends AsyncObject {

  constructor(message) {
    super(message);
  }

  definedSyncCall() {
    return (message) => {
      return message.headers;
    };
  }

}

module.exports = HeadersOfIncomingMessage;
