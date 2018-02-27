"use strict";

const variablesHelper = require("./helpers/variables");
const hooksController = require("./controllers/hooks");
const RegisterHelper = require("./helpers/register");

module.exports = (app, hooks, moduleInfo) => {
	// Get variables and register all mappers & emitters
	variablesHelper.reload(moduleInfo)
		.then(() => RegisterHelper.init())

	// Handle hooks
	hooksController.handleHooks(hooks);
};
