'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class HttpVersionOfIncomingVersion extends AsyncObject {
  constructor (message) {
    super(message)
  }

  syncCall () {
    return (message) => {
      return message.httpVersion
    }
  }
}

module.exports = HttpVersionOfIncomingVersion
