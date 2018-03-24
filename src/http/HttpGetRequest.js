'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const http = require('http');

// Represented result is request
class HttpGetRequest extends AsyncObject {

  constructor(options, callback) {
    super(options, callback);
  }

  definedSyncCall() {
    return http.get;
  }

}

module.exports = HttpGetRequest;
