'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ClosedServer extends AsyncObject {
  constructor (server) {
    super(server)
  }

  asyncCall () {
    return (server, callback) => {
      this.server = server
      server.close(callback)
    }
  }

  onResult () {
    return this.server
  }
}

module.exports = ClosedServer
