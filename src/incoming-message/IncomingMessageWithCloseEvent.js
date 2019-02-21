'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is message
class IncomingMessageWithCloseEvent extends AsyncObject {
  constructor (message, event) {
    super(message, event)
  }

  syncCall () {
    return (message, event) => {
      message.on('close', event)
      return message
    }
  }
}

module.exports = IncomingMessageWithCloseEvent
