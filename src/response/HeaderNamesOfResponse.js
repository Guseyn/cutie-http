'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string[]
class HeaderNamesOfResponse extends AsyncObject {
  constructor (response) {
    super(response)
  }

  definedSyncCall () {
    return (response) => {
      return response.getHeaderNames()
    }
  }
}

module.exports = HeaderNamesOfResponse
