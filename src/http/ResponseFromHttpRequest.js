'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const responseFromHttpRequest = require('./../custom-calls/responseFromHttpRequest')

// Represented result is {statusCode, headers, body}
class ResponseDataFromHttpRequest extends AsyncObject {
  constructor (options, requestBody) {
    super(options, requestBody)
  }

  definedAsyncCall () {
    return (options, requestBody, callback) => {
      return responseFromHttpRequest(options, requestBody, callback)
    }
  }
}

module.exports = ResponseDataFromHttpRequest
