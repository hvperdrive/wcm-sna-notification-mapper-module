module.exports = (eventName, event, data) => {
	if (data.fields.medium.app === false) {
		return;
	}

	const title = {};
	const description = {};

	if (data.fields.url.en) {
		title.en = data.fields.url.en.description;
		const descriptionContent = data.fields.description.en;
		const cleanDescription = descriptionContent.replace(/<\/?[^>]+(>|$)/g, "");

		description.en = cleanDescription;
	} else {
		// En content is verplicht
		title.en = "";
		description.en = "empty";
	}

	if (data.fields.url.nl) {
		title.nl = data.fields.url.nl.description;
		const descriptionContent = data.fields.description.nl;
		const cleanDescription = descriptionContent.replace(/<\/?[^>]+(>|$)/g, "");

		description.nl = cleanDescription;
	}
	if (data.fields.url.fr) {
		title.fr = data.fields.url.fr.description;
		const descriptionContent = data.fields.description.fr;
		const cleanDescription = descriptionContent.replace(/<\/?[^>]+(>|$)/g, "");

		description.fr = cleanDescription;
	}
	if (data.fields.url.de) {
		title.de = data.fields.url.de.description;
		const descriptionContent = data.fields.description.de;
		const cleanDescription = descriptionContent.replace(/<\/?[^>]+(>|$)/g, "");

		description.de = cleanDescription;
	}

	// check if expireDate and sendDate is avaidable
	let lifetime;

	if (data.fields.expireDate && data.fields.sendDate) {
		lifetime = (new Date(data.fields.expireDate) - new Date(data.fields.sendDate)) / 1000;
	}
	

	let message = {
		"app_id": "a58dfb59-f1c5-4444-858e-565342c05d94",
		"included_segments": ["Active Users"],
		"data": {
			"icon": "train",
			"url": data.fields.url.nl.url,
		},
		"headings": title,
		"contents": description,
		"send_after": data.fields.sendDate,
		"ttl": lifetime,
	};

	return message;
};
