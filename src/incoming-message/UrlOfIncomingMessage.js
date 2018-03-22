'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class UrlOfIncomingMessage extends AsyncObject {

  constructor(message) {
    super(message);
  }

  definedSyncCall() {
    return (message) => {
      return message.url;
    };
  }

}

module.exports = UrlOfIncomingMessage;
