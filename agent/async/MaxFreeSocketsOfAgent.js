'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class MaxFreeSocketsOfAgent extends AsyncObject {

  constructor(agent) {
    super(agent);
  }

  definedSyncCall() {
    return (agent) => {
      return agent.maxFreeSockets;
    };
  }

}

module.exports = MaxFreeSocketsOfAgent;
