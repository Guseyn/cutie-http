'use strict'

const {
  as, AsyncObject
} = require('@guseyn/cutie');
const {
  Assertion, EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@guseyn/cutie-process');
const {
  ClosedServer,
  HttpRequest,
  EndedRequest,
  StatusCodeOfIncomingMessage
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8022;
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
        new Assertion(
          new IsNumber(
            new StatusCodeOfIncomingMessage(res)
          )
        ).after(
          new ClosedServer(server)
        ).call();
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
    new EndedRequest(
      new HttpRequest(
        options, new GeneratedRequestCallback(
          as('server')
        )
      )
    )
  )
).call();
