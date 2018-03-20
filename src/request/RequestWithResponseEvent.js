'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestWithResponseEvent extends AsyncObject {

  constructor(request, event) {
    super(request, event);
  }

  definedSyncCall() {
    return (request, event) => {
      request.on('response', event);
      return request;
    };
  }

}

module.exports = RequestWithResponseEvent;
