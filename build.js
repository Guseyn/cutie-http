'use strict'

const { AsyncObject, as } = require('@cuties/cutie')
const FakeServer = require('./fake/FakeServer')
const ClosedServer = require('./src/server/ClosedServer')

const timeoutCall = (ms, callback) => {
  setTimeout(() => {
    callback(ms)
  }, ms)
}

class Timeout extends AsyncObject {
  constructor (ms) {
    super(ms)
  }

  definedAsyncCall () {
    return timeoutCall
  }

  callbackWithError() {
    return false
  }
}

FakeServer(8000).as('server').after(
  new Timeout(100).after(
    new ClosedServer(as('server'))
  )
).call()

/* const { 
  ExecutedLint,
  ExecutedTestCoverage,
  ExecutedTestCoverageCheck,
  ExecutedTestCoverageReport,
  LoggedTotalCoverageByJsonSummary
} = require('@cuties/wall')
const ReadDataByPath = require('./fs/ReadDataByPath')
const ParsedJSON = require('./json/ParsedJSON')

new ExecutedLint(process, './src', './test').after(
  new ExecutedTestCoverageReport(
    new ExecutedTestCoverageCheck(
      new ExecutedTestCoverage(
        process, './test-executor.js'
      ),
      { lines: 99, functions: 99, branches: 100, statements: 99 }
    ), 'json-summary'
  ).after(
    new LoggedTotalCoverageByJsonSummary(
      new ParsedJSON(
        new ReadDataByPath('coverage/coverage-summary.json', { encoding: 'utf8' })
      ), (linesPct, statementsPct, functionsPct, branchesPct) => {
         return (linesPct + statementsPct + functionsPct + branchesPct) / 4
      }
    )
  )
).call() */
