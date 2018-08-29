'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is response
class ResponseWithAddedTrailers extends AsyncObject {

  constructor(response, headers) {
    super(response, headers);
  }

  definedSyncCall() {
    return (response, headers) => {
      response.addTrailers(headers);
      return response;
    };
  }

}

module.exports = ResponseWithAddedTrailers;
