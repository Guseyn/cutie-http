'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithSetTimeout extends AsyncObject {

  constructor(server, msecs) {
    super(server, msecs);
  }

  definedAsyncCall() {
    return (server, msecs, callback) => {
    	this.server = server.setTimeout(msecs, callback);
    };
  }

  onResult() {
  	return this.server;
  }

}

module.exports = ServerWithSetTimeout;
