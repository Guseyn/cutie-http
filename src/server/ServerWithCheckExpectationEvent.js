'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ServerWithCheckExpectationEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body(req, res)
  syncCall () {
    return (server, event) => {
      server.on('checkExpectation', event)
      return server
    }
  }
}

module.exports = ServerWithCheckExpectationEvent
