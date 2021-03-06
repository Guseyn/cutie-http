'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class ResponseWithHeader extends AsyncObject {
  constructor (response, name, value) {
    super(response, name, value)
  }

  syncCall () {
    return (response, name, value) => {
      response.setHeader(name, value)
      return response
    }
  }
}

module.exports = ResponseWithHeader
