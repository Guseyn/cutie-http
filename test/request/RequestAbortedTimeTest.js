'use strict'

const {
  as, AsyncObject
}  = require('@guseyn/cutie');
const {
  Assertion
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
  RequestAbortedTime,
  AbortedRequest,
  HttpRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8028;
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
    new Assertion(
      new IsNumber(
        new RequestAbortedTime(
          new AbortedRequest(
            new HttpRequest(
              options, new GeneratedRequestCallback(
                as('server')
              )
            )
          )
        )
      )
    ).after(
      new EndedRequest(
        new HttpRequest(
          options, new GeneratedRequestCallback(
            as('server')
          )
        )
      )
    )
  )
).call();
