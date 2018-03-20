'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is socket
class WrittenRequest extends AsyncObject {

  constructor(request, chunk, encoding) {
    super(request, chunk, encoding);
  }

  definedAsyncCall() {
    return (request, chunk, encoding, callback) => {
      return request.write(chunk, encoding, callback);
    };
  }

}

module.exports = WrittenRequest;
