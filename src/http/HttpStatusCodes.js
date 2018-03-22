'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const http = require('http');

// Represented result is object
class HttpStatusCodes extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return http.STATUS_CODES;
    };
  }

}

module.exports = HttpMethods;
