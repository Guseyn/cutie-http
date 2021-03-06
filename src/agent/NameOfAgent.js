'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string(name)
class NameOfAgent extends AsyncObject {
  constructor (agent, options) {
    super(agent, options)
  }

  syncCall () {
    return (agent, options) => {
      return agent.getName(options)
    }
  }
}

module.exports = NameOfAgent
