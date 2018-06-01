'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class ResponseWithHeader extends AsyncObject {

  constructor(response, name, value) {
    super(response, name, value);
  }

  definedSyncCall() {
    return (response, name, value) => {
      response.setHeader(name, value);
      return response;
    };
  }

}

module.exports = ResponseWithHeader;
