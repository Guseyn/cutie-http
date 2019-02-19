'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class MaxSocketsOfAgent extends AsyncObject {
  constructor (agent) {
    super(agent)
  }

  definedSyncCall () {
    return (agent) => {
      return agent.maxSockets
    }
  }
}

module.exports = MaxSocketsOfAgent
