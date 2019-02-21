'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  CreatedHttpServer,
  ListeningServer,
  EndedResponse
} = require('./../index');

class RequestResponseEvent extends Event {

  constructor() {
    super();
  }

  body(request, response) {
    // handle request
    new EndedResponse(response, 'fake response').call();
  }

}

module.exports = (port, host, event) => {
  return new ListeningServer(
    new CreatedHttpServer(
      event || new RequestResponseEvent()
    ), port, '127.0.0.1'
  );
}
