'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ServerWithConnectionEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body(socket)
  syncCall () {
    return (server, event) => {
      server.on('connection', event)
      return server
    }
  }
}

module.exports = ServerWithConnectionEvent
