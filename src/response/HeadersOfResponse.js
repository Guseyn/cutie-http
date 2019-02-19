'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class HeadersOfResponse extends AsyncObject {
  constructor (response) {
    super(response)
  }

  definedSyncCall () {
    return (response) => {
      return response.getHeaders()
    }
  }
}

module.exports = HeadersOfResponse
