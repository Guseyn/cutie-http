'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class AbortedReqest extends AsyncObject {

  constructor(request) {
    super(request);
  }

  definedSyncCall() {
    return (request) => {
      request.abort();
      return request;
    };
  }

}

module.exports = AbortedReqest;