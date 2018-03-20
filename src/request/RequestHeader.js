'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestHeader extends AsyncObject {

  constructor(request, name) {
    super(request, name);
  }

  definedSyncCall() {
    return (request, name) => {
      return request.getHeader(name);
    };
  }

}

module.exports = RequestWithFlushedHeaders;
