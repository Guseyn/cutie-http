'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class HaveResponseHeadersSent extends AsyncObject {
  constructor (response) {
    super(response)
  }

  syncCall () {
    return (response) => {
      return response.headersSent
    }
  }
}

module.exports = HaveResponseHeadersSent
