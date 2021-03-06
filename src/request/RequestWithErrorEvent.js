'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithErrorEvent extends AsyncObject {
  constructor (request, event) {
    super(request, event)
  }

  syncCall () {
    return (request, event) => {
      request.on('error', event)
      return request
    }
  }
}

module.exports = RequestWithErrorEvent
