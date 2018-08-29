'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
