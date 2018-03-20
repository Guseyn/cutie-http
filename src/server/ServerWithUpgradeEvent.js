'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithUpgradeEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('upgrade', event);
      return server;
    };
  }

}

module.exports = ServerWithUpgradeEvent;
