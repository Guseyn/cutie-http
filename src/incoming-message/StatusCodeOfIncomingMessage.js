'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class StatusCodeOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  definedSyncCall () {
    return (message) => {
      return message.statusCode
    }
  }
}

module.exports = StatusCodeOfIncomingMessage
