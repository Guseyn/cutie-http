'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class HeadersOfResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.getHeaders();
    };
  }

}

module.exports = HeadersOfResponse;
