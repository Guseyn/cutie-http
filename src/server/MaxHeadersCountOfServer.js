'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class MaxHeadersCountOfServer extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      return server.maxHeadersCount
    }
  }
}

module.exports = MaxHeadersCountOfServer
