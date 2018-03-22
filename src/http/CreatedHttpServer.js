'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const http = require('http');

// Represented result is server
class CreatedHttpServer extends AsyncObject {

  constructor(options, requestListener) {
    super(options, requestListener);
  }

  definedSyncCall() {
  	return http.createServer;
  }

}

module.exports = CreatedHttpServer;
