'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const http = require('http');

// Represented result is agent
class HttpGlobalAgent extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return http.globalAgent;
  }

}

module.exports = HttpGlobalAgent;
