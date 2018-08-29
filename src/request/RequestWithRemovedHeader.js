'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is request
class RequestWithRemovedHeader extends AsyncObject {

  constructor(request, name) {
    super(request, name);
  }

  definedSyncCall() {
    return (request, name) => {
      request.removeHeader(name);
      return request;
    };
  }

}

module.exports = RequestWithRemovedHeader;
