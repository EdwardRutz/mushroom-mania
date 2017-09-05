# Mushroom Mania
Create an application with a single view with data in firebase.


## Requirements

For this exercise, you're going to create a basic application, with a single view. 
- [X] Your job is to load  JSON data and display it in a list. 
- [X] Above the list, provide one text box, and two radio buttons.
	- [X] The radio buttons should be labeled *Poisonous* and *Non-poisonous*

- [ ] When the user types **any** text into the text box, the list of mushrooms should be filtered down to any mushrooms whose description contains that text.

- [ ] When the user clicks either of the radio buttons, only the appropriate mushrooms should be displayed.

You will need:

- [X] An Angular application module.

- [X] One controller defined in your application. The controller will load the JSON with an XHR call using the `$http` function that Angular provides.
- [X] One partial bound to the controller.

- [ ] Several directives will be helpful. `ng-repeat`, `ng-click`, and the `filter` property on the `ng-repeat`.

- [X] Load the JSON below into a new Firebase application rather than reading it from a local file.

- [X] Put the JSON object into `$scope.mushrooms` and bind that variable in your partial.

### Data
- [X] Data mushroomData.json




