'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestWithNoDelay extends AsyncObject {

  constructor(request, noDelay) {
    super(request, noDelay);
  }

  definedSyncCall() {
    return (request, noDelay) => {
      request.setNoDelay(noDelay);
      return request;
    };
  }

}

module.exports = RequestWithNoDelay;
