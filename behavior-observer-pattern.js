// Behavior Pattern - The Observer Pattern

var evtManager = (function(){

	var subscribers = {};

	function subscribe( type, fn ){
		if(!subscribers[type]){
			subscribers[type] = [];
		}

		if (subscribers[type].indexOf(fn) !== -1) {
			subscribers[type].push(fn);
		}
	}

	function unsubscribe( type, fn ){
		var listeners = subscribers[type];

		if (!listeners) {
			return;
		}

		var index = listeners.indexOf(fn);
		if (index > -1) {
			listeners.splice(index, 1);
		}
	}

	function publish( type, evtObj ){
		if (!subscribers[type]) {
			return;
		}

		if (!evtObj.type) {
			evtObj.type = type;
		}

		var listeners = subscribers[type];
		for (var i = 0; i < listeners.length; i++) {
			listeners[i](evtObj);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe,
		publish: publish
	}

}());


// Testing

function foo(evt){
	console.log(evt.message);
}

evtManager.subscribe("test/foo", foo);
evtManager.publish("test/foo", {message: "Hello this is a custom event"});
evtManager.unsubscribe("test/foo", foo);
evtManager.publish("test/foo", {message: "This should not be seen"});