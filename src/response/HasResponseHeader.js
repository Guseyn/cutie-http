'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class HasResponseHeader extends AsyncObject {
  constructor (response, name) {
    super(response, name)
  }

  definedSyncCall () {
    return (response, name) => {
      return response.hasHeader(name)
    }
  }
}

module.exports = HasResponseHeader
