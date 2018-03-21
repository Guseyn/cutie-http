'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class EndedResponse extends AsyncObject {

  constructor(response, data, encoding) {
    super(response, data, encoding);
    this.response = response;
  }

  definedAsyncCall() {
    return (response, data, encoding, callback) => {
    	response.end(data, encoding, callback);
    };
  }

  onResult() {
  	return this.response;
  }

}

module.exports = EndedResponse;
