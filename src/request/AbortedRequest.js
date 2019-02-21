'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class AbortedReqest extends AsyncObject {
  constructor (request) {
    super(request)
  }

  syncCall () {
    return (request) => {
      request.abort()
      return request
    }
  }
}

module.exports = AbortedReqest
