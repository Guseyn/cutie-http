'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is stream/socket
class SocketOfCreatedAgentConnection extends AsyncObject {

  constructor(agent, options) {
    super(agent, options);
  }

  definedAsyncCall() {
    return (agent, options, callback) => {
      agent.createConnection(options, callback);
    };
  }

}

module.exports = SocketOfCreatedAgentConnection;
