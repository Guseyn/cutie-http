'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithDataEvent extends AsyncObject {
  constructor (request, event) {
    super(request, event)
  }

  definedSyncCall () {
    return (request, event) => {
      request.on('data', event)
      return request
    }
  }
}

module.exports = RequestWithDataEvent
