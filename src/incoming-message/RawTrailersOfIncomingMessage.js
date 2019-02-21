'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string[]
class RawTrailersOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  syncCall () {
    return (message) => {
      return message.rawTrailers
    }
  }
}

module.exports = RawTrailersOfIncomingMessage
