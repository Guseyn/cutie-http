'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const http = require('http');

// Represented result is server
class CreatedDefaultHttpServer extends AsyncObject {

  constructor(requestListener) {
    super(requestListener);
  }

  definedSyncCall() {
    return (requestListener) => {
      return http.createServer(requestListener);
    }
  }

}

module.exports = CreatedDefaultHttpServer;
