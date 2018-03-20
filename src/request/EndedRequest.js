'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is void
class EndedReqest extends AsyncObject {

  constructor(request, data, encoding) {
    super(request, data, encoding);
  }

  definedAsyncCall() {
    return (request, data, encoding, callback) => {
      request.end(data, encoding, callback);
    };
  }

}

module.exports = EndedReqest;
