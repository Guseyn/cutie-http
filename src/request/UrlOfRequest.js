'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class UrlOfRequest extends AsyncObject {

  constructor(request) {
    super(request);
  }

  definedSyncCall() {
    return (request) => {
      return request.url;
    };
  }

}

module.exports = UrlOfRequest;
