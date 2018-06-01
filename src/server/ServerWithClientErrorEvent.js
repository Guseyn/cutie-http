'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is server
class ServerWithClientErrorEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  // event is an Event with definedBody(exception, socket)
  definedSyncCall() {
    return (server, event) => {
      server.on('clientError', event);
      return server;
    };
  }

}

module.exports = ServerWithClientErrorEvent;
