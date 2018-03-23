'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ListeningServer extends AsyncObject {

  constructor(server, ...args) {
    super(server, ...args);
  }

  definedSyncCall() {
    return (server, ...args) => {
    	return server.listen(...args);
    };
  }


}

module.exports = ListeningServer;
