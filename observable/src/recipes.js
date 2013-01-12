
var Recipes =(function () {

	function tap(value,fn){
	
		if(fn === void 0)
			return curried;
		
		return curried(fn);

		function curried(fn){
			
			if(typeof(fn) === 'function')
				fn(value);
			
			return value;
		}
	}
	return {
		tap: tap
	};

}());

module.exports.Recipes = Recipes;