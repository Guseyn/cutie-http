'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class RequestsOfAgent extends AsyncObject {

  constructor(agent) {
    super(agent);
  }

  definedSyncCall() {
    return (agent) => {
      return agent.requests;
    };
  }

}

module.exports = RequestsOfAgent;
