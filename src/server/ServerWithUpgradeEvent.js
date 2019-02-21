'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ServerWithUpgradeEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body(request, socket, head)
  syncCall () {
    return (server, event) => {
      server.on('upgrade', event)
      return server
    }
  }
}

module.exports = ServerWithUpgradeEvent
