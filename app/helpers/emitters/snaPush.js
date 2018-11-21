const Variables = require("../variables");

module.exports = (eventName, configuredEvent, data) => {

	// SEND DATA TO PUSH NOTIFICATION SERVICE HERE (Data should already be mapped)
	if (data !== null) {
		let headers = {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": `Basic ${Variables.get().authCode}`,
		};

		let options = {
			host: "onesignal.com",
			port: 443,
			path: "/api/v1/notifications",
			method: "POST",
			headers: headers,
		};

		let https = require("https");
		let req = https.request(options);

		req.on("error", (error) => {
			console.log("NOTIFICATIONONE_SIGNAL_EMIT_ERROR", error); // eslint-disable-line no-console
		});

		req.write(JSON.stringify(data));
		req.end();
	}
};
