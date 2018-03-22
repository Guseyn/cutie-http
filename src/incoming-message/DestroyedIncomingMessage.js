'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is message
class DestroyedIncomingMessage extends AsyncObject {

  constructor(message, error) {
    super(message, error);
  }

  definedSyncCall() {
    return (message, error) => {
      message.destroy(error);
      return message;
    };
  }

}

module.exports = DestroyedIncomingMessage;
