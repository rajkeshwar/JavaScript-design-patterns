// Singleton pattern in JavaScript

var dom = (function(){

	var _counter = 0;
	var instance;

	function generatedId(){
		return "customId" + _counter++;
	}

	function create( tagName, id ){

			var el = document.createElement( tagName );

			el.id = id || generatedId();

			return el;
	}

	function createInstance(){
		return {
			generatedId: generatedId,
			create: create
		}
	}

	return {
		getInstance: function(){
			return instance || (instance = createInstance());
		}
	}

}());


// Testing
var instance = dom.getInstance();
		instance === dom.getInstance(); 

		// true