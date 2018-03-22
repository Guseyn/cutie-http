'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const http = require('http');

// Represented result is array
class HttpMethods extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return http.METHODS;
    };
  }

}

module.exports = HttpMethods;
