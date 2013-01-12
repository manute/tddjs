var assert = require("assert");
var Recipes = require('../src/recipes').Recipes;

describe("K Combinator",function(){
	it("should do something with a value for side- effects, but keep the value around",function(){
		
		var drink = Recipes.tap('espresso',function (it) {
			var oputput = "Our drink is "+ it;
			assert.equal(oputput, "Our drink is espresso");
		});
		
		assert.equal(drink, 'espresso');
	});
});