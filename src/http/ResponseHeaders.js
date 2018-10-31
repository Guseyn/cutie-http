'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class ResponseHeaders extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.headers;
    }
  }

}

module.exports = ResponseHeaders;
