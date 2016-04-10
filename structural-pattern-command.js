// Structural Patterns - Command pattern

function Calculator(){
	this._currentValue = 0;
}

Calculator.prototype = {
	execute: function( command ){
		this._currentValue = command.execute(this._currentValue);
	},
	getCurrentValue: function(){
		return this._currentValue;
	}
};

function Command( fn, value ){
	this.execute = fn;
	this.value = value;
}

function AddCommand( value ){
	Command.call(this, function( value ){
		return value + this.value;
	}, value);
}

function SubCommand( value ){
	Command.call(this, function( value ){
		return value - this.value;
	}, value);
}

// Testing
var calc = new Calculator();

		calc.execute(new AddCommand(19));
		calc.execute(new SubCommand(4));
		calc.getCurrentValue();
		// 15