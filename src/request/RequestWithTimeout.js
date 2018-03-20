'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is void
class RequestWithTimeout extends AsyncObject {

  constructor(request, timeout) {
    super(request, timeout);
  }

  definedAsyncCall() {
    return (request, timeout, callback) => {
      request.setTimeout(timeout, callback);
    };
  }

}

module.exports = RequestWithTimeout;
