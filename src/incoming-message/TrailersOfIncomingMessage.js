'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class TrailersOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  definedSyncCall () {
    return (message) => {
      return message.trailers
    }
  }
}

module.exports = TrailersOfIncomingMessage
