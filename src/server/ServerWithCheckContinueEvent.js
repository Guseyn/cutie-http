'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithCheckContinueEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('checkContinue', event);
      return server;
    };
  }

}

module.exports = ServerWithCheckContinueEvent;
