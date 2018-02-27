const request = require("request");
const variables = require("../variables");

module.exports = (eventName, configuredEvent, data) => {
	const variables = variables.get();

	console.log("SNA push");
};
