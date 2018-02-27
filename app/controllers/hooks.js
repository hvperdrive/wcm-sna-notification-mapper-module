"use strict";

const variablesHelper = require("../helpers/variables");
const RegisterHelper = require("../helpers/register");

const onLoadComplete = () => {
	return variablesHelper.reload()
		.then(() => RegisterHelper.registerAll());
};
const onConfigurationChanged = () => {
	return variablesHelper.reload()
		.then(() => RegisterHelper.registerAll());
};
const beforeRemove = () => RegisterHelper.destroy();

module.exports.handleHooks = (hooks) => {
	var myHooks = {
		onLoadComplete: onLoadComplete,
		onConfigurationChanged: onConfigurationChanged,
	};

	Object.assign(hooks, myHooks);
};
