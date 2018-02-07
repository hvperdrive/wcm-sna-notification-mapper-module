"use strict";

(function(angular) {
	angular.module("wcm-boilerplate_0.0.1.factories", []);
	angular.module("wcm-boilerplate_0.0.1.services", ["wcm-boilerplate_0.0.1.factories"]);
	angular.module("wcm-boilerplate_0.0.1.controllers", ["wcm-boilerplate_0.0.1.services"]);
	angular.module("wcm-boilerplate_0.0.1.directives", ["wcm-boilerplate_0.0.1.controllers"]);

	angular.module("wcm-boilerplate_0.0.1", [

		"pelorus.services",

		"wcm-boilerplate_0.0.1.factories",
		"wcm-boilerplate_0.0.1.services",
		"wcm-boilerplate_0.0.1.controllers",
		"wcm-boilerplate_0.0.1.directives"

	])
	.run([function () {
		console.log("Boilerplate module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

