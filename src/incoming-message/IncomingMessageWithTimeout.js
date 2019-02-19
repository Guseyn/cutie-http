'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is incomingMessage
class IncomingMessageWithTimeout extends AsyncObject {
  constructor (message, msecs, callback) {
    super(message, msecs, callback)
  }

  // callback can be an Event
  definedSyncCall () {
    return (message, msecs, callback) => {
      return message.setTimeout(msecs, callback)
    }
  }
}

module.exports = IncomingMessageWithTimeout
