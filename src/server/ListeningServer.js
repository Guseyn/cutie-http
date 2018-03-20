'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ListeningServer extends AsyncObject {

  constructor(server, ...args) {
    super(server, ...args);
  }

  definedAsyncCall() {
    return (server, ...args) => {
    	this.server = server.listen(...args);
    };
  }

  onResult() {
  	return this.server;
  }

}

module.exports = ListeningServer;
