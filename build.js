'use strict'

const { 
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
        process, './test.js'
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
).call()
