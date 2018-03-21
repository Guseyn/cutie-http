'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class ResponseWithSetTimeout extends AsyncObject {

  constructor(response, msecs) {
    super(response, msecs);
  }

  definedAsyncCall() {
    return (response, msecs, callback) => {
      this.response = response.setTimeout(msecs, callback);
    };
  }

  onResult() {
  	return this.response;
  }

}

module.exports = ResponseWithSetHeader;
