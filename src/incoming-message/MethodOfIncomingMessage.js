'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string | null
class MethodOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  syncCall () {
    return (message) => {
      return message.method
    }
  }
}

module.exports = MethodOfIncomingMessage
