'use strict'

const {
  as, AsyncObject, Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  HttpRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer,
  MaxHeadersCountOfServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8075
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

class RequestResponseEvent extends Event {
  constructor () {
    super()
  }

  definedBody (req, res) {
    new EndedResponse(
      res, 'fake response'
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
        server.maxHeadersCount = 2000
        new Assertion(
          new IsNumber(
            new MaxHeadersCountOfServer(
              server
            )
          )
        ).after(
          new ClosedServer(server)
        ).call()
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
