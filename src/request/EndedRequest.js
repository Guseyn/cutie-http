'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class EndedReqest extends AsyncObject {

  constructor(request, data, encoding) {
    super(request, data, encoding);
  }

  definedAsyncCall() {
    return (request, data, encoding, callback) => {
      request.end(data, encoding, callback);
      this.request = request;
    };
  }

  onResult() {
    return this.request;
  }

}

module.exports = EndedReqest;
