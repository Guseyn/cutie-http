'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is request
class RequestWithUpgradeEvent extends AsyncObject {

  constructor(request, event) {
    super(request, event);
  }

  // event is an Event with definedBody(req, socket, head)
  definedSyncCall() {
    return (request, event) => {
      request.on('upgrade', event);
      return request;
    };
  }

}

module.exports = RequestWithUpgradeEvent;
