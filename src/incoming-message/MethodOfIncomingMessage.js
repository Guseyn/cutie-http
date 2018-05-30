'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string | null
class MethodOfIncomingMessage extends AsyncObject {

  constructor(message) {
    super(message);
  }

  definedSyncCall() {
    return (message) => {
      return message.method;
    };
  }

}

module.exports = MethodOfIncomingMessage;
