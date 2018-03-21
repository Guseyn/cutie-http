'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string[]
class HeaderNamesOfResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.getHeaderNames();
    };
  }

}

module.exports = HeaderNamesOfResponse;
