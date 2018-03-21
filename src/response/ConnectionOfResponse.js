'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is socket
class ConnectionOfResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.connection;
    };
  }

}

module.exports = ConnectionOfResponse;
