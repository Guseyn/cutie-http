'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process')
const {
  ClosedServer,
  ResponseFromHttpRequest,
  ResponseStatusCode
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8090
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGHUP'
).after(
  FakeServer(port).as('server').after(
    new Assertion(
      new IsNumber(
        new ResponseStatusCode(
          new ResponseFromHttpRequest(options, '{requestBody}')
        )
      )
    ).after(
      new ClosedServer(as('server'))
    )
  )
).call()
