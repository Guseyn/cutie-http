'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  CreatedDefaultHttpServer,
  ListeningServer
} = require('./../index');

class RequestResponseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(request, response) {
    // handle request
    response.end(`fake respond`);
  }

}

module.exports = (port, host) => {
  return new ListeningServer(
    new CreatedDefaultHttpServer(
      new RequestResponseEvent()
    ), port || 8124, host || '127.0.0.1'
  );
}
