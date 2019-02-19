'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string[]
class RawTrailersOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  definedSyncCall () {
    return (message) => {
      return message.rawTrailers
    }
  }
}

module.exports = RawTrailersOfIncomingMessage
