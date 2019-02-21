'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string[]
class RawHeadersOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  syncCall () {
    return (message) => {
      return message.rawHeaders
    }
  }
}

module.exports = RawHeadersOfIncomingMessage
