

define(function(){

	var _counter = 0;

	function generatedId(){
		return "customId " + _counter++;
	}

	function createElement(tagName, id){
		var el = document.createElement(tagName);
				el.id = id || this.generatedId();

				return el;
	}

	return {
		generatedId: generatedId,
		create: createElement
	}
	
});