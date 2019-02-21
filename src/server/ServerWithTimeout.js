'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ServerWithTimeout extends AsyncObject {
  constructor (server, msecs, callback) {
    super(server, msecs, callback)
  }

  syncCall () {
    return (server, msecs, callback) => {
      return server.setTimeout(msecs, callback)
    }
  }
}

module.exports = ServerWithTimeout
