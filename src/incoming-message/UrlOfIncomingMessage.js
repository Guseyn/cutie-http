'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class UrlOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  syncCall () {
    return (message) => {
      return message.url
    }
  }
}

module.exports = UrlOfIncomingMessage
