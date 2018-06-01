'use strict'

const {
  ServerResponse
} = require('http');
const {
  as, AsyncObject, Event
}  = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@guseyn/cutie-process');
const {
  HasResponseHeader,
  ResponseWithHeader,
  ResponseWithRemovedHeader,
  HttpRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8061;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
};

class RequestResponseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(req, res) {
    new EqualAssertion(
      new HasResponseHeader(
        new EndedResponse(
          new ResponseWithRemovedHeader(
            new ResponseWithHeader(res, 'name', 'value'), 'name'
          ), 'fake response'
        ), 'name'
      ), false
    ).call();
  }

}

class GeneratedRequestCallback extends AsyncObject {

  constructor(server) {
    super(server);
  }

  definedSyncCall() {
    return (server) => {
      return (res) => {
        new ClosedServer(server).call();
      }
    }
  }

}

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGHUP'
).after(
  FakeServer(
    port, hostname, new RequestResponseEvent()
  ).as('server').after(
    new EndedRequest(
      new HttpRequest(
        options, new GeneratedRequestCallback(
          as('server')
        )
      )
    )
  )
).call();
