'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class ResponseWithRemovedHeader extends AsyncObject {
  constructor (response, name) {
    super(response, name)
  }

  syncCall () {
    return (response, name) => {
      response.removeHeader(name)
      return response
    }
  }
}

module.exports = ResponseWithRemovedHeader
