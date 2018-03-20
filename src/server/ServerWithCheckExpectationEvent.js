'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithCheckExpectationEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('checkExpectation', event);
      return server;
    };
  }

}

module.exports = ServerWithCheckExpectationEvent;
