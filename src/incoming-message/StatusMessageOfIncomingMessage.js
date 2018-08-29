'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class StatusMessageOfIncomingMessage extends AsyncObject {

  constructor(message) {
    super(message);
  }

  definedSyncCall() {
    return (message) => {
      return message.statusMessage;
    };
  }

}

module.exports = StatusMessageOfIncomingMessage;
