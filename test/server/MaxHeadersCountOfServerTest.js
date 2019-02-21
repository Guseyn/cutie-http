'use strict'

const {
  as, AsyncObject, Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  IsNull
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

  body (req, res) {
    new EndedResponse(
      res, 'fake response'
    ).call()
  }
}

class GeneratedRequestCallback extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      return (res) => {
        new Assertion(
          new IsNull(
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
