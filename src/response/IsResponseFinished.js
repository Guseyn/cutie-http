'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class IsResponseFinished extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.finished;
    };
  }

}

module.exports = IsResponseFinished;
