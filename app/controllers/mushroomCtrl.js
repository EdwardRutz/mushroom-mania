"use strict";
console.log("mushroomCtrl");

app.controller("mushroomCtrl", function($scope, mushroomFactory) {
	
	//define function
	mushroomFactory.getShroom()
	.then(function(shroomCollection){
		$scope.shroomArray = shroomCollection;//binds data to scope
		console.log("mushroomData", $scope.mushroomData);

	});


});