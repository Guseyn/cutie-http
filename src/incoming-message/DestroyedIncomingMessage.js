'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is message
class DestroyedIncomingMessage extends AsyncObject {
  constructor (message, error) {
    super(message, error)
  }

  syncCall () {
    return (message, error) => {
      message.destroy(error)
      return message
    }
  }
}

module.exports = DestroyedIncomingMessage
