"use strict";
console.log("mushroomCtrl");

app.controller("mushroomCtrl", function($scope, mushroomFactory) {
	
	mushroomFactory.getShroom()
	.then(function(shroomCollection){
		$scope.mushroomData = shroomCollection;
		console.log("mushroomData", $scope.mushroomData);
	});


});