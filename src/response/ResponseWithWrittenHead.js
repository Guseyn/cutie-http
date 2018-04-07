'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class ResponseWithWrittenHead extends AsyncObject {

  constructor(response, statusCode, statusMessage, headers) {
    super(response, statusCode, statusMessage, headers);
  }

  definedSyncCall() {
    return (response, statusCode, statusMessage, headers) => {
    	response.writeHead(statusCode, statusMessage, headers);
      return response;
    };
  }

}

module.exports = ResponseWithWrittenHead;
