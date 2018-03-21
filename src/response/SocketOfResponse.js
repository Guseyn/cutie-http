'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is socket
class SocketOfResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.socket;
    };
  }

}

module.exports = SocketOfResponse;
