'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class ResponseWithFinishEvent extends AsyncObject {

  constructor(response, event) {
    super(response, event);
  }

  definedSyncCall() {
    return (response, event) => {
      response.on('finish', event);
      return response;
    };
  }

}

module.exports = ResponseWithFinishEvent;