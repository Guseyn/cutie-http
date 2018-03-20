'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithConnectEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('connect', event);
      return server;
    };
  }

}

module.exports = ServerWithConnectEvent;
