'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is response
class ResponseWithTimeout extends AsyncObject {

  constructor(response, msecs, callback) {
    super(response, msecs, callback);
  }

  definedSyncCall() {
    return (response, msecs, callback) => {
      return response.setTimeout(msecs, callback);
    };
  }

}

module.exports = ResponseWithTimeout;
