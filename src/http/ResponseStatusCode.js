'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class ResponseStatusCode extends AsyncObject {
  constructor (response) {
    super(response)
  }

  definedSyncCall () {
    return (response) => {
      return response.statusCode
    }
  }
}

module.exports = ResponseStatusCode
