 
 // Creating obejcts with literals

 var obj = {
 		firstName: "Rajkeshwar",
 		lastName: "Prasad"
 };

 obj.firstName = "Rajkeshwar";
 obj["lastName"] = "Prasad";

 var firstName = obj["firstName"];
 var lastName = obj.lastName;

 Object.defineProperty(obj, "country", {
 		value: "India"
 });

 Object.defineProperties(obj, {
 		twitter: {
 			value: "rajkeshwarp"
 		},
 		email: {
 			value: "rajkeshwar.pd@gmail.com"
 		}
 });