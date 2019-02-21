'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class EndedResponse extends AsyncObject {
  constructor (response, data, encoding) {
    super(response, data, encoding || 'utf8')
  }

  asyncCall () {
    return (response, data, encoding, callback) => {
      this.response = response
      response.end(data, encoding, callback)
    }
  }

  onResult () {
    return this.response
  }
}

module.exports = EndedResponse
