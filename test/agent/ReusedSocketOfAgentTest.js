'use strict'

const {
  Agent
} = require('http');
const {
  Socket
} = require('net');
const {
  as, AsyncObject, Event
} = require('@guseyn/cutie');
const {
  Assertion, EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  Is
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
  HasOwnProperty
} = require('@guseyn/cutie-object');
const {
  CreatedAgentConnection,
  ClosedServer,
  DestroyedAgent,
  HttpRequest,
  EndedRequest,
  ReusedSocketOfAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const agent = new Agent({ keepAlive: true });
const port = 8007;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET',
  agent: agent
};

class GeneratedRequestCallback extends AsyncObject {

  constructor(agent, socket, server) {
    super(agent, socket, server);
  }

  definedSyncCall() {
    return (agent, socket, server) => {
      return (res) => {
        new DestroyedAgent(agent).after(
          new DestroyedStream(socket).after(
            new ClosedServer(server)
          )
        ).call();
      }
    }
  }

}

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
        new Is(
          new ReusedSocketOfAgent(
            agent, as('socket'),
            new EndedRequest(
              new HttpRequest(
                options, new GeneratedRequestCallback(
                  agent, as('socket'), as('server')
                )
              )
            )
          ), Socket
        )
      )
    )
  )
).call();