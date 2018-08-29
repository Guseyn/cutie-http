'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is request
class RequestWithFlushedHeaders extends AsyncObject {

  constructor(request) {
    super(request);
  }

  definedSyncCall() {
    return (request) => {
      request.flushHeaders();
      return request;
    };
  }

}

module.exports = RequestWithFlushedHeaders;
