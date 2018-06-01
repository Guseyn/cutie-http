'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class MaxHeadersCountOfServer extends AsyncObject {

  constructor(server) {
    super(server);
  }

  definedSyncCall() {
    return (server) => {
      console.log(server);
    	return server.maxHeadersCount;
    };
  }

}

module.exports = MaxHeadersCountOfServer;
