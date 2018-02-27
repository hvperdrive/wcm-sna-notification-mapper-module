const ModuleHelper = require("@wcm/module-helper")
const mappers = require("./mappers");
const emitters = require("./emitters");

// We need to be able to unregister event listeners on module unninstallation.
const _registerOnNotificationInstall = () => registerAll();

// Get notification module and register mappers & emitter when the module is available
const registerAll = () => {
	return ModuleHelper.getModule("@wcm/generic-notifications")
		.then((notificationAPI) => {
			Object.keys(mappers).forEach((key) => notificationAPI.registerMapper(key, mappers[key]));
			Object.keys(emitters).forEach((key) => notificationAPI.registerEmitter(key, emitters[key]));
		});
};

// Unregister all mappers & emitters
const unregisterAll = () => {
	return ModuleHelper.getModule("@wcm/generic-notifications")
		.then((notificationAPI) => {
			Object.keys(mappers).forEach((key) => notificationAPI.unregisterMapper(key));
			Object.keys(emitters).forEach((key) => notificationAPI.unregisterEmitter(key));
		});
}

const init = () => {
	return getModule()
		// Listen for module installl events to register the mappers & emitters on notification installation.
		.finally(() => ModuleHelper.emitter.onUnchecked("module.*.onInstalled", _registerOnNotificationInstall));
};

const destroy = () => ModuleHelper.emitter.off("module.*.onInstalled", _registerOnNotificationInstall);

// Init
module.exports = {
	init,
	destroy,
	registerAll
};
