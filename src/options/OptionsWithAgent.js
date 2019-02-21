'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class OptionsWithAgent extends AsyncObject {
  constructor (options, agent) {
    super(options, agent)
  }

  syncCall () {
    return (options, agent) => {
      options.agent = agent
      return options
    }
  }
}

module.exports = OptionsWithAgent
