const cutie = require('@guseyn/cutie');
const AsyncObject = cutie.AsyncObject;
const Event = cutie.Event;

const CreatedDefaultHttpServer = require('./../src/http/CreatedDefaultHttpServer');
const ListeningServer = require('./../src/server/ListeningServer');

class LoggedRequestResponse extends AsyncObject {

  constructor(request, response) {
    super(request, response);
  }

  definedSyncCall() {
    return (request, response) => {
      console.log('request is recieved, response will be ready soon...');
      return;
    }
  }

}

class LoggedConnectedServer extends AsyncObject {
  
  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      console.log('listening...');
      return;
    }
  }

}

class RequestResponseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(request, response) {
    new LoggedRequestResponse(request, response).call();
  }

}

class ServerListeningEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {
    new LoggedConnectedServer().call();
  }

}

//usage
new ListeningServer(
  new CreatedDefaultHttpServer(
    new RequestResponseEvent()
  ), 4200, '127.0.0.1',
  new ServerListeningEvent()
).call();