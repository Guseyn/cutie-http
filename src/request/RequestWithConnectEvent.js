'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithConnectEvent extends AsyncObject {
  constructor (request, event) {
    super(request, event)
  }

  definedSyncCall () {
    return (request, event) => {
      request.on('connect', event)
      return request
    }
  }
}

module.exports = RequestWithConnectEvent
