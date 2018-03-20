'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestWithContinueEvent extends AsyncObject {

  constructor(request, event) {
    super(request, event);
  }

  definedSyncCall() {
    return (request, event) => {
      request.on('continue', event);
      return request;
    };
  }

}

module.exports = RequestWithContinueEvent;
