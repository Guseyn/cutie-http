'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is booleand
class HasRequestAborted extends AsyncObject {
  constructor (request) {
    super(request)
  }

  definedSyncCall () {
    return (request) => {
      return request.aborted
    }
  }
}

module.exports = HasRequestAborted
