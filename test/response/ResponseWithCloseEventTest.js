'use strict'

const {
  ServerResponse
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
  ResponseWithCloseEvent,
  HttpRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8058
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

class CloseEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

class RequestResponseEvent extends Event {
  constructor () {
    super()
  }

  definedBody (req, res) {
    new Assertion(
      new Is(
        new EndedResponse(
          new ResponseWithCloseEvent(
            res, new CloseEvent()
          ), 'fake response'
        ), ServerResponse
      )
    ).call()
  }
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
).call()
