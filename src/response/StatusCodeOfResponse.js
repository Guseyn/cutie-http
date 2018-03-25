'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class StatusCodeOfResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.statusCode;
    };
  }

}

module.exports = StatusCodeOfResponse;