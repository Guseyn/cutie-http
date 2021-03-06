'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ServerWithClientErrorEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body(exception, socket)
  syncCall () {
    return (server, event) => {
      server.on('clientError', event)
      return server
    }
  }
}

module.exports = ServerWithClientErrorEvent
