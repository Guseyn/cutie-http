'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class SendDateOfResponse extends AsyncObject {
  constructor (response) {
    super(response)
  }

  definedSyncCall () {
    return (response) => {
      return response.sendDate
    }
  }
}

module.exports = SendDateOfResponse
