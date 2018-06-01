'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class HaveResponseHeadersSent extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.headersSent;
    };
  }

}

module.exports = HaveResponseHeadersSent;
