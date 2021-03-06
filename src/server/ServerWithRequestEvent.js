'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ServerWithRequestEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body(request, response)
  syncCall () {
    return (server, event) => {
      server.on('request', event)
      return server
    }
  }
}

module.exports = ServerWithRequestEvent
