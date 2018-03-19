'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is stream/socket
class KeptSocketAliveOfAgent extends AsyncObject {

  constructor(agent, socket) {
    super(agent, soket);
  }

  definedSyncCall() {
    return (agent, socket) => {
      agent.keepSocketAlive(sokcet);
      return socket;
    };
  }

}

module.exports = KeptSocketAliveOfAgent;
