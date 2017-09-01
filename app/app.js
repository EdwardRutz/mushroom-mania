"use strict";

var app = angular.module("mushroomApp", ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider.
	when('/', {
		templateUrl: 'partials/greeting.html'
	}).
	when('/showall', {
		templateUrl: 'partials/shroomList.html',
		controller: "mushroomCtrl"
	}).
	otherwise('/');

});