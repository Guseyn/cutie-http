'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is request
class EndedReqest extends AsyncObject {
  constructor (request, data, encoding) {
    super(request, data, encoding)
  }

  asyncCall () {
    return (request, data, encoding, callback) => {
      this.request = request
      request.end(data, encoding, callback)
    }
  }

  onResult () {
    return this.request
  }
}

module.exports = EndedReqest
