'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class RequestWithHeader extends AsyncObject {
  constructor (request, name, value) {
    super(request, name, value)
  }

  syncCall () {
    return (request, name, value) => {
      request.setHeader(name, value)
      return request
    }
  }
}

module.exports = RequestWithHeader
