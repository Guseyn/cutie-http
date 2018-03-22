'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is message
class IncomingMessageWithCloseEvent extends AsyncObject {

  constructor(message, event) {
    super(message, event);
  }

  definedSyncCall() {
    return (message, event) => {
      message.on('close', event);
      return message;
    };
  }

}

module.exports = IncomingMessageWithCloseEvent;
