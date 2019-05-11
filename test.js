'use strict'

const { ExecutedTests } = require('test-executor')
const testDirs = ['./test/agent', './test/http', './test/incoming-message', './test/options', './test/request', './test/response', './test/server']

const executedTests = (curIndex = 0, curExecutedTests = new ExecutedTests(testDirs[0]), tree = curExecutedTests) => {
  if (curIndex < testDirs.length - 1) {
    curIndex += 1
    const nextExecutedTests = new ExecutedTests(testDirs[curIndex])
    curExecutedTests.after(nextExecutedTests)
    executedTests(curIndex, nextExecutedTests, tree)
  } else {
    tree.call()
  }
}

executedTests()
