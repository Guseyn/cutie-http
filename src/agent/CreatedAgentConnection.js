'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is stream/socket
class CreatedAgentConnection extends AsyncObject {
  constructor (agent, options) {
    super(agent, options)
  }

  definedAsyncCall () {
    return (agent, options, callback) => {
      this.socket = agent.createConnection(options, callback)
    }
  }

  onResult (socket) {
    return this.socket
  }
}

module.exports = CreatedAgentConnection
