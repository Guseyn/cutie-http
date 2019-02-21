'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithTimeout extends AsyncObject {
  constructor (request, timeout, callback) {
    super(request, timeout, callback)
  }

  syncCall () {
    return (request, timeout, callback) => {
      return request.setTimeout(timeout, callback)
    }
  }
}

module.exports = RequestWithTimeout
