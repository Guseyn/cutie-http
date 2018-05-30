'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  CreatedHttpServer,
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
    new CreatedHttpServer(
      new RequestResponseEvent()
    ), port || 8124, host || '127.0.0.1'
  );
}
