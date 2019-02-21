'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class RequestAbortedTime extends AsyncObject {
  constructor (request) {
    super(request)
  }

  syncCall () {
    return (request) => {
      return request.aborted
    }
  }
}

module.exports = RequestAbortedTime
