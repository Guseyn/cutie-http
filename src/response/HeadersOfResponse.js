'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class HeadersOfResponse extends AsyncObject {
  constructor (response) {
    super(response)
  }

  syncCall () {
    return (response) => {
      return response.getHeaders()
    }
  }
}

module.exports = HeadersOfResponse
