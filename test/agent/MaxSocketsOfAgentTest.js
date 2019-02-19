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
  Is, IsNumber
} = require('@cuties/is')
const {
  DestroyedStream
} = require('@cuties/stream')
const {
  CreatedAgentConnection,
  ClosedServer,
  MaxSocketsOfAgent
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const agent = new Agent({ keepAlive: false })
const port = 8004

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new CreatedAgentConnection(
        agent, { port: port }
      ).as('socket'), Socket
    )
  ).after(
    new Assertion(
      new IsNumber(
        new MaxSocketsOfAgent(
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
