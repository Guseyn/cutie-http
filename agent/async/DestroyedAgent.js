'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is agent
class DestroyedAgent extends AsyncObject {

  constructor(agent) {
    super(agent);
  }

  definedSyncCall() {
    return (agent) => {
      agent.destroy();
      return agent;
    };
  }

}

module.exports = DestroyedAgent;
