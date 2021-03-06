'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class MaxFreeSocketsOfAgent extends AsyncObject {
  constructor (agent) {
    super(agent)
  }

  syncCall () {
    return (agent) => {
      return agent.maxFreeSockets
    }
  }
}

module.exports = MaxFreeSocketsOfAgent
