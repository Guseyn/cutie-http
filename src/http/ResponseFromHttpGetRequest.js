'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const responseFromHttpGetRequest = require('./../custom-calls/responseFromHttpGetRequest')

// Represented result is {statusCode, headers, body}
class ResponseDataFromHttpGetRequest extends AsyncObject {
  constructor (options) {
    super(options)
  }

  asyncCall () {
    return (options, callback) => {
      return responseFromHttpGetRequest(options, callback)
    }
  }
}

module.exports = ResponseDataFromHttpGetRequest
