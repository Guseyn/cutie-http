'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class WrittenRequest extends AsyncObject {
  constructor (request, chunk, encoding) {
    super(request, chunk, encoding || 'utf8')
  }

  asyncCall () {
    return (request, chunk, encoding, callback) => {
      this.request = request
      request.write(chunk, encoding, callback)
    }
  }

  onResult (result) {
    return this.request
  }
}

module.exports = WrittenRequest
