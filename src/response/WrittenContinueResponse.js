'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class WrittenContinueResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
    	response.writeContinue();
    	return response;
    };
  }

}

module.exports = WrittenContinueResponse;
