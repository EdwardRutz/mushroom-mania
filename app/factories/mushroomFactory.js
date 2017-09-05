"use strict";
console.log("mushroomFactory");

//must use the word "function" and not a fat arrow
app.factory("mushroomFactory", function($q, $http){
	const getShroom = () => {
		let shroomArray = [];
		return $q ((resolve, reject) => {
			$http.get(`https://mushroommania-4359b.firebaseio.com/mushrooms.json`)
			.then((shroomObject) => {
				let shroomCollection = shroomObject.data;
				Object.keys(shroomCollection).forEach((key) => {
					shroomCollection[key].id = key;
					shroomArray.push(shroomCollection[key]);
				});

				console.log("shroomArray", shroomArray);
				resolve(shroomArray);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getOneShroom = ()=> {
		console.log("getOneShroom");
	};
	
	return {getShroom, getOneShroom};
}); 