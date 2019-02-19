'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ServerWithConnectEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with definedBody(request, socket, head)
  definedSyncCall () {
    return (server, event) => {
      server.on('connect', event)
      return server
    }
  }
}

module.exports = ServerWithConnectEvent
