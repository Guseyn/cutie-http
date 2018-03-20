'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithRequestEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('request', event);
      return server;
    };
  }

}

module.exports = ServerWithConnectionEvent;
