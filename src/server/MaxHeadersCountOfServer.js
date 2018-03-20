'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class MaxHeadersCountOfServer extends AsyncObject {

  constructor(server) {
    super(server);
  }

  definedSyncCall() {
    return (server) => {
    	return server.maxHeadersCountOfServer;
    };
  }

}

module.exports = MaxHeadersCountOfServer;
