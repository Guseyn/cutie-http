'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class ResponseWithStatusMessage extends AsyncObject {
  constructor (response, statusMessage) {
    super(response, statusMessage)
  }

  syncCall () {
    return (response, statusMessage) => {
      response.statusMessage = statusMessage
      return response
    }
  }
}

module.exports = ResponseWithStatusMessage
