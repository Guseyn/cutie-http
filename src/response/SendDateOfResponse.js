'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class SendDateOfResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.sendDate;
    };
  }

}

module.exports = SendDateOfResponse;
