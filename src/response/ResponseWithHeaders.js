'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class ResponseWithHeaders extends AsyncObject {
  constructor (response, headers) {
    super(response, headers)
  }

  syncCall () {
    return (response, headers) => {
      for (let name in headers) {
        response.setHeader(name, headers[name])
      }
      return response
    }
  }
}

module.exports = ResponseWithHeaders
