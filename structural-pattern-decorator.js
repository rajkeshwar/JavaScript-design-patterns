// Code Resuse Pattern (Structural):- Decorator Pattern

function Coffee(){

}

Coffee.prototype.cost = function(){
	return 5;
};

Coffee.small = function( coffeeObj ){
	var cost = coffeeObj.cost();

	coffeeObj.cost = function(){
		return cost - 1;
	}
};

Coffee.medium = function(){};

Coffee.large = function( coffeeObj ){
	var cost = coffeeObj.cost();

	coffeeObj.cost = function(){
		return cost + 1;
	}
};

Coffee.sugar = function( coffeeObj ){
	var cost = coffeeObj.cost();

	coffeeObj.cost = function(){
		return cost + .15;
	}
};

Coffee.creamer = function( coffeeObj ){
	var cost = coffeeObj.cost();

	coffeeObj.cost = function(){
		return cost + .15;
	}
};

Coffee.whippedCream = function( coffeeObj ){
	var cost = coffeeObj.cost();

	coffeeObj.cost = function(){
		return cost + .15;
	}
};

Coffee.mocha = function( coffeeObj ){
	Coffee.sugar(coffeeObj);
	Coffee.whippedCream(coffeeObj);

	var cost = coffeeObj.cost();

	coffeeObj.cost = function(){
		return cost;
	};
};

var coffee = new Coffee();
var mocha = new Coffee();

Coffee.large(coffee);
Coffee.whippedCream(coffee);

coffee.cost();

Coffee.medium(mocha);
Coffee.mocha(mocha);

mocha.cost();

