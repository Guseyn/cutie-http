'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const http = require('http');

// Represented result is request
class HttpRequest extends AsyncObject {

  constructor(options, callback) {
    super(options, callback);
  }

  definedSyncCall() {
    return http.request;
  }

}

module.exports = HttpRequest;
