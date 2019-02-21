'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is stream/socket
class ReusedSocketOfAgent extends AsyncObject {
  constructor (agent, socket, request) {
    super(agent, socket, request)
  }

  syncCall () {
    return (agent, socket, request) => {
      agent.reuseSocket(socket, request)
      return socket
    }
  }
}

module.exports = ReusedSocketOfAgent
