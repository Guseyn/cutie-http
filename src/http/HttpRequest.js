'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const http = require('http');

// Represented result is request
class HttpRequest extends AsyncObject {

  // callback can be an Event
  constructor(options, callback) {
    super(options, callback);
  }

  definedSyncCall() {
    return (options, callback) => {
      return http.request(options, callback);
    }
  }

  onResult(req) {
    return req;
  }

}

module.exports = HttpRequest;
