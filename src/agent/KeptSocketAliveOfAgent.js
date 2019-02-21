'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is stream/socket
class KeptSocketAliveOfAgent extends AsyncObject {
  constructor (agent, socket) {
    super(agent, socket)
  }

  syncCall () {
    return (agent, socket) => {
      agent.keepSocketAlive(socket)
      return socket
    }
  }
}

module.exports = KeptSocketAliveOfAgent
