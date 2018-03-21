'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class WrittenRequest extends AsyncObject {

  constructor(request, chunk, encoding) {
    super(request, chunk, encoding);
    this.request = request;
  }

  definedAsyncCall() {
    return (request, chunk, encoding, callback) => {
    	request.write(chunk, encoding, callback);
    };
  }

  onResponse() {
  	return this.request;
  }

}

module.exports = WrittenRequest;
