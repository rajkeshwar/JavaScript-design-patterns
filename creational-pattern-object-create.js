 
 // Creating obejcts with Object.create

 var personOne = {
 		firstName: "Rajkeshwar",
 		lastName: "Prasad",
 		sayName: function(){
 			return "My name is " + this.firstName + " " + this.lastName;
 		}
 };

 var personTwo = Object.create(personOne, {
 		firstName: { value: "Ramesh" },
 		greet: {
 			function( person ){
	 			return "Hello, " + person.firstName;
	 		}
 		}
 });

 var personThree = {
 	firstName: { value: "Suresh" },
 	lastName: { value: "Nagrajan" }
 };

 console.log(personOne.sayName());
 console.log(personTwo.sayName() + " " + personTwo.greet(personOne));
 console.log(personThree.sayName() + " " + personThree.greet(personTwo));

 console.log(personTwo.__proto__ === personOne);
 console.log(personThree.__proto__ === personTwo);

