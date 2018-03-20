'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestWithAbortEvent extends AsyncObject {

  constructor(request, event) {
    super(request, event);
  }

  definedSyncCall() {
    return (request, event) => {
      request.on('abort', event);
      return request;
    };
  }

}

module.exports = RequestWithAbortEvent;
