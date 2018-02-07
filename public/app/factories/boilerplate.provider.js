"use strict";

(function(angular) {
	angular.module("wcm-boilerplate_0.0.1.factories")
		.factory("boilerplateFactory", [

			"$resource",
			"configuration",

			function crmFactory($resource, configuration) {

				var api = configuration.serverPath + configuration.apiPrefix + configuration.apiLevel;
				var factory = {};

				factory = $resource(api + "boilerplate/:listController:id/:docController", {
					id: "@uuid",
					listController: "@listController",
					docController: "@docController",
				}, {
						update: {
							method: "PUT",
						},
					});

				return factory;
			},
		]);
})(window.angular);

