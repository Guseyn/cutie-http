'use strict'

const {
  ServerResponse
} = require('http');
const {
  as, AsyncObject, Event
}  = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@guseyn/cutie-process');
const {
  HeaderOfResponse,
  ResponseWithHeader,
  HttpRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8054;
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
    new DeepEqualAssertion(
      new HeaderOfResponse(
        new EndedResponse(
          new ResponseWithHeader(res, 'name', 'value'), 'fake response'
        ), 'name'
      ), 'value'
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
