'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class StatusCodeOfResponse extends AsyncObject {
  constructor (response) {
    super(response)
  }

  syncCall () {
    return (response) => {
      return response.statusCode
    }
  }
}

module.exports = StatusCodeOfResponse
