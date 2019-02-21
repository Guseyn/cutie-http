'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is message
class IncomingMessageWithAbortedEvent extends AsyncObject {
  constructor (message, event) {
    super(message, event)
  }

  // event is an Event with body()
  syncCall () {
    return (message, event) => {
      message.on('aborted', event)
      return message
    }
  }
}

module.exports = IncomingMessageWithAbortedEvent
