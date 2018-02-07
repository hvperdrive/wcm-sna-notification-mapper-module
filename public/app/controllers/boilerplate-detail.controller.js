"use strict";

(function(angular) {
	angular.module("wcm-boilerplate_0.0.1.controllers")
		.controller("boilerplateDetailController", [
			"$scope",
			"$controller",

			// Services
			"LabelService",

			// Factories
			"boilerplateFactory",

			// Resolves
			"InstanceData",

			function ($scope, $controller, LabelService, boilerplateFactory) {

				// Referencing the required factory
				$scope._factory = boilerplateFactory;

				// Extend the default resource controller
				angular.extend(this, $controller("ResourceController", { $scope: $scope, InstanceData: InstanceData, Languages: [] }));

				// ResourceView configuration
				$scope.context.type = LabelService.getString("Boilerplate"); // Set the current type to "Member"

				// $scope events
				$scope.$on("$destroy", function () {
					$scope._newInstance = undefined;
					$scope._instance = undefined;
				});
			}
		]);
})(window.angular);
