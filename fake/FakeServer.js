'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  CreatedHttpServer,
  ListeningServer,
  EndedResponse
} = require('./../index');

class RequestResponseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(request, response) {
    // handle request
    new EndedResponse(response, 'fake respond').call();
  }

}

module.exports = (port, host, event) => {
  return new ListeningServer(
    new CreatedHttpServer(
      event || new RequestResponseEvent()
    ), port || 8124, host || '127.0.0.1'
  );
}
