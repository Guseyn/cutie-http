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
  DestroyedStream
} = require('@guseyn/cutie-stream');
const {
  CreatedAgentConnection,
  ClosedServer,
  DestroyedAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const agent = new Agent({ keepAlive: true });
const port = 8000;

// TODO: Investigate how to do this properly
FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new CreatedAgentConnection(
        agent, {port: port}
      ).as('socket'), Socket
    )
  ).after(
    new DestroyedStream(as('socket')).after(
      //new DestroyedAgent(agent).after(
        new ClosedServer(as('server'))
      //)
    )
  )
).call();
