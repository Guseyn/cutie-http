'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class KeepAliveTimeoutOfServer extends AsyncObject {

  constructor(server) {
    super(server);
  }

  definedSyncCall() {
    return (server) => {
      return server.keepAliveTimeout;
    };
  }

}

module.exports = KeepAliveTimeoutOfServer;
