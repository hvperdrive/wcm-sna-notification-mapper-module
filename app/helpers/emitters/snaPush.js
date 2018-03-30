const variablesHelper = require("../variables");

module.exports = (eventName, configuredEvent, data) => {
	const variables = variablesHelper.get();

	// SEND DATA TO PUSH NOTIFICATION SERVICE HERE (Data should already be mapped)
	if (data !== null) {
		let headers = {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": "Basic OWUwZTU0MmYtYmQ4NS00MTYzLTk3MTgtNWRmMzA2YTc5NTRk",
		};
		
		let options = {
			host: "onesignal.com",
			port: 443,
			path: "/api/v1/notifications",
			method: "POST",
			headers: headers,
		};
		
		let https = require("https");
		let req = https.request(options, function(res) {
			res.on("data", function(response) {
				console.log("Response:");
				console.log(JSON.parse(response));
			});
		});
		
		req.on("error", function(e) {
			console.log("ERROR:");
			console.log(e);
		});
		
		req.write(JSON.stringify(data));
		req.end();
	
		console.log("SNA push", variables);
	}
};
