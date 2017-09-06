"use strict";

var app = angular.module("mushroomApp", ['ngRoute']);

app.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.
		when('/', {
			//templateUrl: 'partials/greeting.html',
			templateUrl: 'partials/shroomList.html',
			controller: 'mushroomCtrl',
		}).
		otherwise('/');
}]);