var Observable = (function () {
	function addObserver(observer) {
		this.observers = [observer];
	}
	return {
		addObserver: addObserver
	};
}());

module.exports.Observable = Observable;
