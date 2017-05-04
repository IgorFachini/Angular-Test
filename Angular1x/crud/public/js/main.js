console.log("main js");
var app = angular.module('angular1x', ["ngRoute","firebase","minhasDiretivas"])
	.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'MainController'
		}).otherwise({ redirectTo: '/'});;
		// $locationProvider.html5Mode(true);

		console.log("dentro do .config de .main js");
	});
