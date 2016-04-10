// Code Reuse Pattern (Structural): 01 The Inheritance Pattern

function Beverage(name, temp){
	this.name = name;
	this.temp = temp;
}

Beverage.prototype.drink = function(){
	console.log("I am drinking " + this.name);
};

function Coffe( type ){
	Beverage.call(this, "coffee", "hot");
	this.type = type;
}

Coffe.prototype = Object.create(Beverage.prototype);
Coffe.prototype.sip = function(){
	console.log("Sipping some awesome " + this.type + " " + this.name);
}

var water = new Beverage("water", "cold");
var coffee = new Coffee("bold dark rost");