'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is socket
class SocketOfIncomingMessage extends AsyncObject {

  constructor(message) {
    super(message);
  }

  definedSyncCall() {
    return (message) => {
      return message.socket;
    };
  }

}

module.exports = SocketOfIncomingMessage;
