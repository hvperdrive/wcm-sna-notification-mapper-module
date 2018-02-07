"use strict";

(function(angular) {
	angular.module("wcm-boilerplate_0.0.1")
		.config([

			"$stateProvider",
			"boilerplateConfigProvider",

			function ($stateProvider, boilerplateConfigProvider) {

				var moduleFolder = boilerplateConfigProvider.API.modulePath;

				$stateProvider

					.state("pelorus.wcm-boilerplate.index", {
						url: "",
						access: {
							requiresLogin: true
						},
						resolve: {
							ListData: ["boilerplateFactory", function(boilerplateFactory) {
								return boilerplateFactory.get({ id: "public" }).$promise;
							}],
						},
						ncyBreadcrumb: {
							label: "{{breadcrumb}}"
						},
						views: {
							"": {
								templateUrl: moduleFolder + "views/overview.html",
								controller: "boilerplateOverviewController"
							}
						}
					})

					.state("pelorus.wcm-boilerplate.edit", {
						url: "/{uuid}",
						access: {
							requiresLogin: true
						},
						resolve: {
							InstanceData: ["boilerplateFactory", "$stateParams", function(boilerplateFactory, $stateParams) {
								if ($stateParams.uuid && $stateParams.uuid !== "new") {
									return boilerplateFactory.get({ id: $stateParams.uuid }).$promise;
								} else {
									return {};
								}
							}],
						},
						ncyBreadcrumb: {
							label: "{{breadcrumb}}"
						},
						views: {
							"": {
								templateUrl: "/app/core/resource/views/resource.html",
								controller: "boilerplateDetailController"
							},
							"form@pelorus.wcm-boilerplate.edit": {
								templateUrl: moduleFolder + "views/detail.html"
							}
						}
					});
			}
		]);
})(window.angular);
