'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is response
class ResponseWithStatusCode extends AsyncObject {

  constructor(response, statusCode) {
    super(response, statusCode);
  }

  definedSyncCall() {
    return (response, statusCode) => {
      response.statusCode = statusCode;
      return response;
    };
  }

}

module.exports = ResponseWithStatusCode;
