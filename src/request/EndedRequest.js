'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class EndedReqest extends AsyncObject {

  constructor(request, data, encoding) {
    super(request, data, encoding);
    this.request = request;
  }

  definedAsyncCall() {
    return (request, data, encoding, callback) => {
      request.end(data, encoding, callback);
    };
  }

  onResult() {
    return this.request;
  }

}

module.exports = EndedReqest;
