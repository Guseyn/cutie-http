'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class StatusCodeOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  syncCall () {
    return (message) => {
      return message.statusCode
    }
  }
}

module.exports = StatusCodeOfIncomingMessage
