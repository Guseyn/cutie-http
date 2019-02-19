'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ServerWithCloseEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with definedBody(exception, socket)
  definedSyncCall () {
    return (server, event) => {
      server.on('close', event)
      return server
    }
  }
}

module.exports = ServerWithCloseEvent
