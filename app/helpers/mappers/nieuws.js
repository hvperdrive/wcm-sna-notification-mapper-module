module.exports = (data) => {

	// MAP DATA HERE!
	if(data.medium.app === false){
		return;
	}

	const title = {};
	const description = {};
	if(data.url.en){
		title.en = data.url.en.description;
		const descriptionContent = data.description.en;
		const cleanDescription = descriptionContent.replace(/<\/?[^>]+(>|$)/g, "");
		description.en = cleanDescription;
	} else {
		// En content is verplicht
		title.en = "";
		description.en = " ";
	}

	if(data.url.nl){
		title.nl = data.url.nl.description;
		const descriptionContent = data.description.nl;
		const cleanDescription = descriptionContent.replace(/<\/?[^>]+(>|$)/g, "");
		description.nl = cleanDescription;
	}
	if(data.url.fr){
		title.fr = data.url.fr.description;
		const descriptionContent = data.description.fr;
		const cleanDescription = descriptionContent.replace(/<\/?[^>]+(>|$)/g, "");
		description.fr = cleanDescription;
	}
	if(data.url.de){
		title.de = data.url.de.description;
		const descriptionContent = data.description.de;
		const cleanDescription = descriptionContent.replace(/<\/?[^>]+(>|$)/g, "");
		description.de = cleanDescription;
	}
	
	const lifetime = (new Date(data.expireDate) - new Date(data.sendDate))/1000;

	let message = {
		"app_id": "a58dfb59-f1c5-4444-858e-565342c05d94",
		"included_segments": ["Active Users"],
		"data": {
			"icon": "train",
			"url": data.url.nl.url,
		},
		"headings": title,
		"contents": description,
		"send_after": data.sendDate,
		"ttl": lifetime
	};

	return message;
};
