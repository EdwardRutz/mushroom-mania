"use strict";
console.log("mushroomFactory");

//must use the word "function" and not a fat arrow
app.factory("mushroomFactory", function($q, $http){
	let getShroom = () => {
		let shroom = [];
		return $q ((resolve, reject) => {
			$http.get("./data/mushroomData.json")
			.then((shroomObject) => {
				let shroomCollection = shroomObject.data;
				resolve(shroomCollection.mushroomData);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getOneShroom = ()=> {
		console.log("getOneShroom");
	};
	
	return {getShroom};
}); 