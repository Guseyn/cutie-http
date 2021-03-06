'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class SocketsOfAgent extends AsyncObject {
  constructor (agent) {
    super(agent)
  }

  syncCall () {
    return (agent) => {
      return agent.sockets
    }
  }
}

module.exports = SocketsOfAgent
