'use strict'

const {
  ClientRequest
} = require('http')
const {
  as, AsyncObject, Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  RequestWithContinueEvent,
  HttpRequest,
  EndedRequest,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8032
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

class GeneratedRequestCallback extends AsyncObject {
  constructor (server) {
    super(server)
  }

  definedSyncCall () {
    return (server) => {
      return (res) => {
        new ClosedServer(server).call()
      }
    }
  }
}

class ContinueEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // on abort
  }
}

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new RequestWithContinueEvent(
        new EndedRequest(
          new HttpRequest(
            options, new GeneratedRequestCallback(
              as('server')
            )
          )
        ), new ContinueEvent()
      ), ClientRequest
    )
  )
).call()
