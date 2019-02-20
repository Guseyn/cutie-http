'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class WrittenResponse extends AsyncObject {
  constructor (response, chunk, encoding) {
    super(response, chunk, encoding || 'utf8')
  }

  definedAsyncCall () {
    return (response, chunk, encoding, callback) => {
      this.response = response
      response.write(chunk, encoding, callback)
    }
  }

  onResult () {
    return this.response
  }
}

module.exports = WrittenResponse
