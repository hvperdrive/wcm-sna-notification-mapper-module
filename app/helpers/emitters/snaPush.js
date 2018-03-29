const request = require("request");
const variablesHelper = require("../variables");

module.exports = (eventName, configuredEvent, data) => {
	const variables = variablesHelper.get();

	// SEND DATA TO PUSH NOTIFICATION SERVICE HERE (Data should already be mapped)

	console.log("SNA push", variables);
};
