'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithAbortEvent extends AsyncObject {
  constructor (request, event) {
    super(request, event)
  }

  // event is an Event with body()
  syncCall () {
    return (request, event) => {
      request.on('abort', event)
      return request
    }
  }
}

module.exports = RequestWithAbortEvent
