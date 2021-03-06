'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is buffer
class ResponseBody extends AsyncObject {
  constructor (response) {
    super(response)
  }

  syncCall () {
    return (response) => {
      return response.body
    }
  }
}

module.exports = ResponseBody
