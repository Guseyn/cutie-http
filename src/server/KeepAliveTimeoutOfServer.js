'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class KeepAliveTimeoutOfServer extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      return server.keepAliveTimeout
    }
  }
}

module.exports = KeepAliveTimeoutOfServer
