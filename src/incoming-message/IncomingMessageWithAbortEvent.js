'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is message
class IncomingMessageWithAbortEvent extends AsyncObject {

  constructor(message, event) {
    super(message, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (message, event) => {
      message.on('abort', event);
      return message;
    };
  }

}

module.exports = IncomingMessageWithAbortEvent;
