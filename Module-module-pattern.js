// Module - The Basic Module Pattern

var dom = (function(){

	var _counter = 0;

	return {
		generatedId: function(){
			return "customId " + _counter++;
		},
		create: function(tagName, id){
			var el = document.createElement(tagName);
					el.id = id || this.generatedId();

					return el;
		}
	}

}());

// Above code can be modified for simplicity
// If you want to work with the jquery we can simply pass
var domEl = (function($){

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

})(jQuery);