var assert = require("assert");
var Observable = require('../src/observable').Observable;

describe("ObservableAddObserverTest",function(){
	it("should store function",function(){
		
		var observable =  Observable;
		var observer = function () {};
		
		observable.addObserver(observer);
		
		assert.equal(observer, observable.observers[0]);
	});
});