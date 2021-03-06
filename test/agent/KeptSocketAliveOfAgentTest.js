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
  Is
} = require('@cuties/is')
const {
  DestroyedStream
} = require('@cuties/stream')
const {
  CreatedAgentConnection,
  ClosedServer,
  KeptSocketAliveOfAgent
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const agent = new Agent({ keepAlive: false })
const port = 8002

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new CreatedAgentConnection(
        agent, { port: port }
      ).as('socket'), Socket
    )
  ).after(
    new Assertion(
      new Is(
        new KeptSocketAliveOfAgent(
          agent, as('socket')
        ), Socket
      )
    ).after(
      new DestroyedStream(as('socket')).after(
        new ClosedServer(as('server'))
      )
    )
  )
).call()
