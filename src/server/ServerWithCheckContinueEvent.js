'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server
class ServerWithCheckContinueEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  // event is an Event with definedBody(req, res)
  definedSyncCall() {
    return (server, event) => {
      server.on('checkContinue', event);
      return server;
    };
  }

}

module.exports = ServerWithCheckContinueEvent;
