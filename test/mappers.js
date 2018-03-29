require("rootpath")();
var expect = require("chai").expect;

var MapHelper = require("app/helpers/mappers");

describe("Map nieuws helper", function() {
    it("Map nieuws for new items", function(done) {
        var data = {
            "medium": {
              "app": true,
              "website": false
            },
            "url": {
              "nl": {
                "description": "Park en drive nu",
                "url": "https://www.slimnaarantwerpen.be/nl/nieuws/vanaf-nu-kan-u-de-park-and-bike-gebruiken-aan-havana",
                "type": "external"
              },
              "multiLanguage": true
            },
            "description": {
              "nl": "<p>De content van de notificatie</p>\n",
              "multiLanguage": true
            },
            "expireDate": "2018-04-01T08:00:00.000Z",
            "sendDate": "2018-03-31T10:00:00.000Z"
          }

        var result = MapHelper.nieuws(data);

        console.log(result);
        
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
});