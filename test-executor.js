'use strict'

const { ExecutedTests } = require('test-executor')

new ExecutedTests(
  './test/agent'
).after(
  new ExecutedTests(
    './test/http'
  ).after(
    new ExecutedTests(
      './test/incoming-message'
    ).after(
      new ExecutedTests(
        './test/options'
      ).after(
        new ExecutedTests(
          './test/request'
        ).after(
          new ExecutedTests(
            './test/response'
          ).after(
            new ExecutedTests(
              './test/server'
            )
          )
        )
      )
    )
  )
).call()
