'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class WrittenResponse extends AsyncObject {

  constructor(response, chunk, encoding) {
    super(response, chunk, encoding || 'utf8');
    this.response = response;
  }

  definedAsyncCall() {
    return (response, chunk, encoding, callback) => {
    	response.write(chunk, encoding, callback);
    };
  }

  onResult() {
  	return this.response;
  }

}

module.exports = WrittenResponse;
