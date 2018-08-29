'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is request
class RequestWithSockedKeepAlive extends AsyncObject {

  constructor(request, enable, initialDelay) {
    super(request, enable, initialDelay);
  }

  definedSyncCall() {
    return (request, enable, initialDelay) => {
      request.setSocketKeepAlive(enable, initialDelay);
      return request;
    };
  }

}

module.exports = RequestWithSockedKeepAlive;
