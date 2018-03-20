'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestWithTimeoutEvent extends AsyncObject {

  constructor(request, event) {
    super(request, event);
  }

  definedSyncCall() {
    return (request, event) => {
      request.on('timeout', event);
      return request;
    };
  }

}

module.exports = RequestWithTimeoutEvent;
