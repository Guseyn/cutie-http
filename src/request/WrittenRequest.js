'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class WrittenRequest extends AsyncObject {

  constructor(request, chunk, encoding) {
    super(request, chunk, encoding || 'utf8');
  }

  definedAsyncCall() {
    return (request, chunk, encoding, callback) => {
      request.write(chunk, encoding, callback);
      this.request = request;
    };
  }

    onResult(result) {
      return this.request;
    }

}

module.exports = WrittenRequest;
