'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class TimeoutOfServer extends AsyncObject {

  constructor(server) {
    super(server);
  }

  definedSyncCall() {
    return (server) => {
      return server.timeout;
    };
  }

}

module.exports = TimeoutOfServer;
