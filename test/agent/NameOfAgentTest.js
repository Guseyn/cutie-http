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
  Is, IsString
} = require('@cuties/is')
const {
  DestroyedStream
} = require('@cuties/stream')
const {
  CreatedAgentConnection,
  ClosedServer,
  NameOfAgent
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const agent = new Agent({ keepAlive: false })
const port = 8005

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new CreatedAgentConnection(
        agent, { port: port }
      ).as('socket'), Socket
    )
  ).after(
    new Assertion(
      new IsString(
        new NameOfAgent(
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
