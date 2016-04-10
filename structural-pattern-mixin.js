// Code Reuse Pattern (Structural): 01 The Inheritance Pattern

function extend(target){
	if (!arguments[1]) {
		return;
	}

	for (var i = 0; i < arguments.length; i++) {
		var source = arguments[i];

		for(var prop in source){
				if (target[source] && source.hasOwnProperty(prop)) {
					target[prop] = source[prop];
				}
		}
	}
};

function Person(name){
	this.name = name;
}

function Dog(name){
	this.name = name;
}

var speaker = {
	speak: function(){
		return this.name + " is speaking.";
	}	
};

var mover = {
	walk: function(){
		return this.name + " is walking.";
	},
	run: function(){
		return this.name + " is running.";
	}
};

var arithmetic = {
	add: function(){
		return this.name + " is adding numbers together.";
	},
	multiply: function(){
		return this.name + " is multiplying numbers together.";
	}
};

// extending through jQuery library method
// $.extend(Person.prototype, speaker, mover, arithmetic);
// $.extend(Dog.prototype, speaker, mover);

extend(Person.prototype, speaker, mover, arithmetic);
extend(Dog.prototype, speaker, mover);