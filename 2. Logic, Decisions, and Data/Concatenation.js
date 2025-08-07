const firstName = "yassir"
const lastName = "yassir"

//String Concatenation with + operator
//slower as it creates intermediate strings and more error prone.
{
	let msg = "Hi, I am " + firstName + " " + lastName + ".";
	console.log(msg);
}

//Template Literals (Template Strings)
//Generally faster and more efficient
//Expression Support
{
	let msg = `Hi, I am ${firstName} ${lastName.toUpperCase()}.`;
	console.log(msg);
}

//Concatenation: Supported in all browerses
//Template literals: ES6 feature (2015+), supported in all modern browsers