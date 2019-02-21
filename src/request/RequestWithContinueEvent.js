'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithContinueEvent extends AsyncObject {
  constructor (request, event) {
    super(request, event)
  }

  syncCall () {
    return (request, event) => {
      request.on('continue', event)
      return request
    }
  }
}

module.exports = RequestWithContinueEvent
