'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class ResponseWithFinishEvent extends AsyncObject {
  constructor (response, event) {
    super(response, event)
  }

  syncCall () {
    return (response, event) => {
      response.on('finish', event)
      return response
    }
  }
}

module.exports = ResponseWithFinishEvent
