'use strict'

const {
  Server,
  IncomingMessage
} = require('http')
const {
  as, AsyncObject
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
  EndedRequest
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8011
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'POST'
}

class GeneratedRequestCallback extends AsyncObject {
  constructor (server) {
    super(server)
  }

  definedSyncCall () {
    return (server) => {
      return (res) => {
        new Assertion(
          new Is(res, IncomingMessage)
        ).after(
          new Assertion(
            new Is(server, Server)
          ).after(
            new ClosedServer(server)
          )
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
    ), 'body'
  )
).call()
