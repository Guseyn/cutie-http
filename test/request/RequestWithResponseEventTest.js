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
  RequestWithResponseEvent,
  HttpRequest,
  EndedRequest,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8040
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

  syncCall () {
    return (server) => {
      return (res) => {
        new ClosedServer(server).call()
      }
    }
  }
}

class ResponseEvent extends Event {
  constructor () {
    super()
  }

  body () {
    // on abort
  }
}

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new RequestWithResponseEvent(
        new EndedRequest(
          new HttpRequest(
            options, new GeneratedRequestCallback(
              as('server')
            )
          )
        ), new ResponseEvent()
      ), ClientRequest
    )
  )
).call()
