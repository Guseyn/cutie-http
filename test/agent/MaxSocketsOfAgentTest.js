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
  Is, IsNumber
} = require('@guseyn/cutie-is');
const {
  DestroyedStream
} = require('@guseyn/cutie-stream');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@guseyn/cutie-process');
const {
  CreatedAgentConnection,
  ClosedServer,
  MaxSocketsOfAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const agent = new Agent({ keepAlive: false });
const port = 8004;

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGHUP'
).after(
  FakeServer(port).as('server').after(
    new Assertion(
      new Is(
        new CreatedAgentConnection(
          agent, {port: port}
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
  )
).call();
