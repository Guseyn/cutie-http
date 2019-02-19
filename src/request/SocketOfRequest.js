'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is socket
class SocketOfRequest extends AsyncObject {
  constructor (request) {
    super(request)
  }

  definedSyncCall () {
    return (request) => {
      return request.socket
    }
  }
}

module.exports = SocketOfRequest
