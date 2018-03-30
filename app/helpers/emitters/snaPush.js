module.exports = (eventName, configuredEvent, data) => {

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
		let req = https.request(options, (res) => {
			res.on("data", () => {
				// console.log(JSON.parse(response));
			});
		});
		
		req.on("error", () => {
			// console.log(e);
		});
		
		req.write(JSON.stringify(data));
		req.end();
	}
};
