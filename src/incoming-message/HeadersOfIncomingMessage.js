'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class HeadersOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  syncCall () {
    return (message) => {
      return message.headers
    }
  }
}

module.exports = HeadersOfIncomingMessage
