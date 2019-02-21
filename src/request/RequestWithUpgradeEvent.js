'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithUpgradeEvent extends AsyncObject {
  constructor (request, event) {
    super(request, event)
  }

  // event is an Event with body(req, socket, head)
  syncCall () {
    return (request, event) => {
      request.on('upgrade', event)
      return request
    }
  }
}

module.exports = RequestWithUpgradeEvent
