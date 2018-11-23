const variablesHelper = require("../helpers/variables");
const RegisterHelper = require("../helpers/register");

const onLoadComplete = () => variablesHelper.reload()
	.then(() => RegisterHelper.registerAll());

const onConfigurationChanged = () => variablesHelper.reload()
	.then(() => RegisterHelper.registerAll());

const beforeRemove = () => RegisterHelper.destroy();

module.exports.handleHooks = hooks => Object.assign(hooks, {
	onLoadComplete,
	onConfigurationChanged,
	beforeRemove,
});
