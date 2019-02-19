'use strict'

const {
  Agent
} = require('http')
const {
  Socket
} = require('net')
const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is, IsObject
} = require('@cuties/is')
const {
  DestroyedStream
} = require('@cuties/stream')
const {
  CreatedAgentConnection,
  ClosedServer,
  RequestsOfAgent
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const agent = new Agent({ keepAlive: false })
const port = 8006

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new CreatedAgentConnection(
        agent, { port: port }
      ).as('socket'), Socket
    )
  ).after(
    new Assertion(
      new IsObject(
        new RequestsOfAgent(
          agent, as('socket')
        )
      )
    ).after(
      new DestroyedStream(as('socket')).after(
        new ClosedServer(as('server'))
      )
    )
  )
).call()
