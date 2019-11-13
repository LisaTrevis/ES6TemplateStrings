// ----- Template Strings/Template Literals ------

// Also known as template literals or string interpolation
// Really great when mixing in a lot of variables to clean up code.

// function getMessage() {
// 	const year = new Date().getFullYear();

// 	return "The year is " + year;
// }


// function getMessage() {
// 	const year = new Date().getFullYear();

// 	return `The year is ${year}`;
// }


// Can also be written as:

// function getMessage() {
// 	return `The year is ${ new Date().getFullYear() }`;
// }


// Refactor the functions to use template strings:

// function doubleMessage(number) {
//   return "Your number doubled is " + (2 * number);
// }

// function doubleMessage(number) {
//   return `Your number doubled is ${2 * number}`;
// }


// function fullName(firstName, lastName) {
//   return firstName + lastName;
// }

// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }



// Also known as template literals or string interpolation
// Really great when mixing in a lot of variables to clean up code.

// function getMessage() {
// 	const year = new Date().getFullYear();

// 	return "The year is " + year;
// }


// function getMessage() {
// 	const year = new Date().getFullYear();

// 	return `The year is ${year}`;
// }


// Can also be written as:

// function getMessage() {
// 	return `The year is ${ new Date().getFullYear() }`;
// }


// Refactor the functions to use template strings:

// function doubleMessage(number) {
//   return "Your number doubled is " + (2 * number);
// }

// function doubleMessage(number) {
//   return `Your number doubled is ${2 * number}`;
// }


// function fullName(firstName, lastName) {
//   return firstName + lastName;
// }

// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }


// ********************************* //
// ********************************* //

// ES6 Maximilian Schwartzmuller

// Template literals can be used to write multiline strings:

let name = "Lisa"

let description = `
	Go
	Lisa
	Go
`

console.log(description)

// They can also be used to avoid having to escape characters like a single quotation mark, and can incorporate variables:

let greeting = `Hi, I'm ${name + ' from MN.'}`

// NOTE: whatever lives inside of the curly braces MUST resolve to a string

console.log(greeting)

// IF for some reason you need to print what is actally typed instead of replacing it with a variable, use the escape (slash) key:

let newGreeting = `Hi, I'm \${name + ' from MN.'}`

console.log(newGreeting)












