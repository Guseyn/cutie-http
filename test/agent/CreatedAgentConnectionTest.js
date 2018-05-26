'use strict'

const {
  Agent
} = require('http');
const {
  Socket
} = require('net');
const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  CreatedAgentConnection,
  DestroyedAgent,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const agent = new Agent({ keepAlive: true });
const port = 8124;

FakeServer(port)
  .as('server')
  .after(
    new Assertion(
      new Is(
        new CreatedAgentConnection(
          agent, {port: port}
        ).as('agent'), Socket
      )
    ).after(
      new DestroyedAgent(as('agent'))
        .after(new ClosedServer(as('server')))
    )
  )
  .call();
