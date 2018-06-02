'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithConnectionEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  // event is an Event with definedBody(socket)
  definedSyncCall() {
    return (server, event) => {
      server.on('connection', event);
      return server;
    };
  }

}

module.exports = ServerWithConnectionEvent;
