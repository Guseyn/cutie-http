'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is response
class ResponseWithRemovedHeader extends AsyncObject {

  constructor(response, name) {
    super(response, name);
  }

  definedSyncCall() {
    return (response, name) => {
      response.removeHeader(name);
      return response;
    };
  }

}

module.exports = ResponseWithRemovedHeader;
