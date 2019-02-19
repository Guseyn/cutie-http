'use strict'

const {
  IncomingMessage
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
  ClosedServer,
  HttpRequest,
  EndedRequest,
  IncomingMessageWithAbortedEvent
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8015
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

class AbortedEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

class GeneratedRequestCallback extends AsyncObject {
  constructor (server) {
    super(server)
  }

  definedSyncCall () {
    return (server) => {
      return (res) => {
        new Assertion(
          new Is(
            new IncomingMessageWithAbortedEvent(res, new AbortedEvent()),
            IncomingMessage
          )
        ).after(
          new ClosedServer(server)
        ).call()
      }
    }
  }
}

FakeServer(port).as('server').after(
  new EndedRequest(
    new HttpRequest(
      options, new GeneratedRequestCallback(
        as('server')
      )
    )
  )
).call()