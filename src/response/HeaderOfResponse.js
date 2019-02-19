'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class HeaderOfResponse extends AsyncObject {
  constructor (response, name) {
    super(response, name)
  }

  definedSyncCall () {
    return (response, name) => {
      return response.getHeader(name)
    }
  }
}

module.exports = HeaderOfResponse
