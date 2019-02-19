'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class MaxFreeSocketsOfAgent extends AsyncObject {
  constructor (agent) {
    super(agent)
  }

  definedSyncCall () {
    return (agent) => {
      return agent.maxFreeSockets
    }
  }
}

module.exports = MaxFreeSocketsOfAgent
