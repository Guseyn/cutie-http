'use strict'

const {
  ClientRequest
} = require('http');
const {
  as, AsyncObject
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
  RequestHeader,
  RequestWithHeader,
  HttpRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8037;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
};

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
  FakeServer(port).as('server').after(
    new EqualAssertion(
      new RequestHeader(
        new EndedRequest(
          new RequestWithHeader(
            new HttpRequest(
              options, new GeneratedRequestCallback(
                as('server')
              )
            ), 'name', 'value'
          )
        ), 'name'
      ), 'value'
    )
  )
).call();