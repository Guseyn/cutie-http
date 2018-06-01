'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithCloseEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  // event is Event with definedBody()
  definedSyncCall() {
    return (server, event) => {
      server.on('close', event);
      return server;
    };
  }

}

module.exports = ServerWithCloseEvent;
