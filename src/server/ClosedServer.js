'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is void
class ClosedServer extends AsyncObject {

  constructor(server) {
    super(server);
  }

  definedAsyncCall() {
    return (server, callback) => {
    	server.close(callback);
    };
  }

}

module.exports = ClosedServer;
