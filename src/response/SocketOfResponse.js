'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is socket
class SocketOfResponse extends AsyncObject {
  constructor (response) {
    super(response)
  }

  syncCall () {
    return (response) => {
      return response.socket
    }
  }
}

module.exports = SocketOfResponse
