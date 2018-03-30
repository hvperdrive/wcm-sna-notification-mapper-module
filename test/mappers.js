require("rootpath")();
let expect = require("chai").expect;

const inputData = require("./data.json");
const inputDataWithoutRequired = require("./dataOptional.json");
const inputDataNoApp = require("./dataNoApp.json");

let MapHelper = require("app/helpers/mappers");

describe("Map nieuws helper", function() {
	it("Map notification for new notification", function(done) {
		let data = inputData;
		let result = MapHelper.nieuws(null, null, data);
        
		expect(result).to.be.an("object");
		expect(result).to.have.property("app_id");
		expect(result.app_id).to.be.an("string");
		expect(result).to.have.property("included_segments");
		expect(result.included_segments).to.be.an("array");
		expect(result).to.have.property("data");
		expect(result.data).to.be.an("object");
		expect(result.data).to.have.property("icon");
		expect(result.data.icon).to.be.an("string");
		expect(result.data).to.have.property("url");
		expect(result.data.url).to.be.an("string");
		expect(result).to.have.property("contents");
		expect(result.contents).to.be.an("object");
		expect(result).to.have.property("send_after");
		expect(result.send_after).to.be.an("string");
		expect(result).to.have.property("ttl");
		expect(result.ttl).to.be.an("number");
		done();
	});
	it("Map notification without the optional data", function(done) {
		let data = inputDataWithoutRequired;
		let result = MapHelper.nieuws(null, null, data);
        
		expect(result).to.be.an("object");
		expect(result).to.have.property("app_id");
		expect(result.app_id).to.be.an("string");
		expect(result).to.have.property("included_segments");
		expect(result.included_segments).to.be.an("array");
		expect(result).to.have.property("data");
		expect(result.data).to.be.an("object");
		expect(result.data).to.have.property("icon");
		expect(result.data.icon).to.be.an("string");
		expect(result.data).to.have.property("url");
		expect(result.data.url).to.be.an("string");
		expect(result).to.have.property("contents");
		expect(result.contents).to.be.an("object");
		expect(result).to.have.property("send_after");
		expect(result.send_after).to.be.an("string");
		expect(result).to.have.property("ttl");
		expect(result.ttl).to.be.an("number");
		done();
	});
	it("App is false", function(done) {
		let data = inputDataNoApp;
		let result = MapHelper.nieuws(null, null, data);

		expect(result).to.be.equal(null);
		done();
	});
});
