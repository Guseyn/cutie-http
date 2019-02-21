'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is response
class ResponseWithCloseEvent extends AsyncObject {
  constructor (response, event) {
    super(response, event)
  }

  syncCall () {
    return (response, event) => {
      response.on('close', event)
      return response
    }
  }
}

module.exports = ResponseWithCloseEvent
