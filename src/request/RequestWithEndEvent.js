'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithEndEvent extends AsyncObject {
  constructor (request, event) {
    super(request, event)
  }

  syncCall () {
    return (request, event) => {
      request.on('end', event)
      return request
    }
  }
}

module.exports = RequestWithEndEvent
