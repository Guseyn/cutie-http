'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
