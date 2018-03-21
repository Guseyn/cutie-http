'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ClosedServer extends AsyncObject {

  constructor(server) {
    super(server);
    this.server = server;
  }

  definedAsyncCall() {
    return (server, callback) => {
    	server.close(callback);
    };
  }

  onResult() {
  	return this.server;
  }

}

module.exports = ClosedServer;
