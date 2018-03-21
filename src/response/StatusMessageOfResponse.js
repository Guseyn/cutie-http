'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class StatusMessageOfResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.statusMessage;
    };
  }

}

module.exports = StatusMessageOfResponse;
