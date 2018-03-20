'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestWithTimeout extends AsyncObject {

  constructor(request, timeout) {
    super(request, timeout);
  }

  definedAsyncCall() {
    return (request, timeout, callback) => {
      this.request = request.setTimeout(timeout, callback);
    };
  }

  onResult() {
  	return this.request;
  }

}

module.exports = RequestWithTimeout;
