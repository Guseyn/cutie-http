'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class ResponseWithWrittenHead extends AsyncObject {
  constructor (response, statusCode, statusMessage, headers) {
    super(response, statusCode, statusMessage, headers)
  }

  syncCall () {
    return (response, statusCode, statusMessage, headers) => {
      response.writeHead(statusCode, statusMessage, headers)
      return response
    }
  }
}

module.exports = ResponseWithWrittenHead
