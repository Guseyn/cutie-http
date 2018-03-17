'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is stream/socket
class AgentWithReusedSocket extends AsyncObject {

  constructor(agent, socket, request) {
    super(agent, socket, request);
  }

  definedSyncCall() {
    return (agent, socket, request) => {
      agent.reuseSocket(socket, request);
      return socket;
    };
  }

}

module.exports = AgentWithKeptSocketAlive;
