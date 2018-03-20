'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestWithUpgradeEvent extends AsyncObject {

  constructor(request, event) {
    super(request, event);
  }

  definedSyncCall() {
    return (request, event) => {
      request.on('upgrade', event);
      return request;
    };
  }

}

module.exports = RequestWithUpgradeEvent;
