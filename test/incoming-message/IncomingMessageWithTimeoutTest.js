'use strict'

const {
  IncomingMessage
} = require('http');
const {
  as, AsyncObject, Event
} = require('@guseyn/cutie');
const {
  Assertion, EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  Is
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
  IncomingMessageWithTimeout
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8017;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
};

class TimoutCallback extends Event {

  constructor() {
    super();
  }

  definedBody() {
    // handle
  }

}

class GeneratedRequestCallback extends AsyncObject {

  constructor(server) {
    super(server);
  }

  definedSyncCall() {
    return (server) => {
      return (res) => {
        new Assertion(
          new Is(
            new IncomingMessageWithTimeout(res, 100, new TimoutCallback()),
            IncomingMessage
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
