'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string(name)
class NameOfAgent extends AsyncObject {

	constructor(agent, options) {
		super(agent, options);
	}

	definedSyncCall() {
		return (agent, options) => {
			return agent.getName(options);
		};
	}

}

module.exports = NameOfAgent;
