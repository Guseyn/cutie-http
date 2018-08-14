'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class ResponseWithStatusMessage extends AsyncObject {

  constructor(response, statusMessage) {
    super(response, statusMessage);
  }

  definedSyncCall() {
    return (response, statusMessage) => {
      response.statusMessage = statusMessage;
      return response;
    };
  }

}

module.exports = ResponseWithStatusMessage;
